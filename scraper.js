const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');

const NCERT_URL = 'https://ncert.nic.in/textbook.php';
const BASE_PDF_URL = 'https://ncert.nic.in/textbook/pdf';

async function main() {
    console.log('[INIT] Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Required for GitHub Actions / CI
    });
    const page = await browser.newPage();

    // Block images/fonts to speed up scraping
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
            req.abort();
        } else {
            req.continue();
        }
    });

    try {
        console.log(`[NAV] Going to ${NCERT_URL}`);
        await page.goto(NCERT_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

        // Get Class Options (1-12)
        // Note: The select name is "tclass"
        const classes = await page.evaluate(() => {
            const select = document.querySelector('select[name="tclass"]');
            if (!select) return [];
            return Array.from(select.options)
                .map(o => ({ value: o.value, text: o.innerText.trim() }))
                .filter(o => {
                    const v = parseInt(o.value);
                    return !isNaN(v) && v >= 1 && v <= 12; // Scrape Classes 1-12
                });
        });

        console.log(`[DISCOVERY] Found ${classes.length} classes.`);

        const masterList = [];
        const seenCodes = new Set();

        for (const cls of classes) {
            console.log(`\n[CLASS] Processing ${cls.text}...`);

            // Select Class
            await page.select('select[name="tclass"]', cls.value);
            // Wait for Subject dropdown to be populated. 
            // The site logic clears subject, then repopulates. We wait for options > 1 (Option 0 is usually "Select Subject")
            try {
                await page.waitForFunction(
                    () => {
                        const s = document.querySelector('select[name="tsubject"]');
                        return s && s.options.length > 1;
                    },
                    { timeout: 5000 }
                );
            } catch (e) {
                console.warn(`[WARN] No subjects loaded for ${cls.text}. Skipping.`);
                continue;
            }

            // Get Subjects
            const subjects = await page.evaluate(() => {
                const select = document.querySelector('select[name="tsubject"]');
                return Array.from(select.options)
                    .map(o => ({ value: o.value, text: o.innerText.trim() }))
                    .filter(o => o.text !== '--- Select Subject ---' && o.value !== '0');
            });

            for (const sub of subjects) {
                // Select Subject
                await page.select('select[name="tsubject"]', sub.value);

                // Wait for Book dropdown
                try {
                    await page.waitForFunction(
                        () => {
                            const b = document.querySelector('select[name="tbook"]');
                            return b && b.options.length > 1;
                        },
                        { timeout: 5000 }
                    );
                } catch (e) {
                    console.warn(`[WARN] No books loaded for Class ${cls.text} > ${sub.text}.`);
                    continue;
                }

                // Get Books
                const books = await page.evaluate(() => {
                    const select = document.querySelector('select[name="tbook"]');
                    return Array.from(select.options)
                        .map(o => ({ value: o.value, text: o.innerText.trim() }))
                        .filter(o => o.text !== '--- Select Book Title ---' && o.value !== '0');
                });

                for (const book of books) {
                    // Extract Code
                    // Value format: "textbook.php?aemr1=0-9" or just "textbook.php?x=y"
                    // Regex: Look for characters between '?' and '='
                    const match = book.value.match(/\?([^=]+)=/);
                    if (!match) {
                        // console.warn(`[SKIP] Could not parse code from value: "${book.value}" (${book.text})`);
                        continue;
                    }
                    const bookCode = match[1];
                    const niceTitle = book.text;

                    // Deduplicate
                    if (seenCodes.has(bookCode)) {
                        // console.log(`[DEBUG] Skipping duplicate: ${bookCode} - ${niceTitle}`);
                        continue;
                    }
                    seenCodes.add(bookCode);

                    // Construct Data Object
                    const entry = {
                        class: parseInt(cls.value),
                        subject: sub.text,
                        book_code: bookCode,
                        title: niceTitle,
                    };

                    masterList.push(entry);
                }
            }
        }

        console.log(`\n[DISCOVERY_COMPLETE] Found ${masterList.length} potential books. Starting validation...`);

        // Validation Phase
        const verifiedBooks = [];
        const BATCH_SIZE = 10; // Check 10 links at a time to be polite but fast

        for (let i = 0; i < masterList.length; i += BATCH_SIZE) {
            const batch = masterList.slice(i, i + BATCH_SIZE);
            const promises = batch.map(async (book) => {
                const url = `${BASE_PDF_URL}/${book.book_code}dd.zip`;
                try {
                    const response = await axios.head(url, { timeout: 8000 });
                    if (response.status === 200) {
                        process.stdout.write('.'); // Progress dot
                        return book; // Keep book
                    }
                } catch (err) {
                    // process.stdout.write('x'); // Failure dot
                    // Silently fail for 404s/timeouts
                }
                return null; // Discard
            });

            const results = await Promise.all(promises);
            verifiedBooks.push(...results.filter(b => b !== null));
        }

        console.log(`\n[SUCCESS] Validation complete. ${verifiedBooks.length} / ${masterList.length} books are active.`);

        // Output
        fs.writeFileSync('books.json', JSON.stringify(verifiedBooks, null, 2));
        console.log('[DONE] saved to books.json');

    } catch (error) {
        console.error('[FATAL] Script failed:', error);
    } finally {
        await browser.close();
    }
}

main();
