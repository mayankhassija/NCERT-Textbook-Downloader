// =========================================
// 1. Data Constants & Configuration
// =========================================
// Base URL for NCERT PDF downloads
const BASE = 'https://ncert.nic.in/textbook/pdf';
// Helper functions to generate URLs based on book code
const zipUrl = c => `${BASE}/${c}dd.zip`;   // Full book zip
const thumbUrl = c => `${BASE}/${c}cc.jpg`; // Cover image thumbnail

let BOOKS = [];

// =========================================
// 2. DOM Elements & Application State
// =========================================
// UI references
const languageFilters = document.getElementById('language-filters');
const subjectFilters = document.getElementById('subject-filters');
const classFilters = document.getElementById('class-filters');
const bookGrid = document.getElementById('book-grid');
const downloadBtn = document.getElementById('download-selected');
const selectAllBtn = document.getElementById('select-all-btn');
const floatingActions = document.getElementById('floating-actions');
const globalSearchInput = document.getElementById('global-search');
const navBtns = document.querySelectorAll('.nav-btn');
const megaMenus = document.querySelectorAll('.mega-menu');
const megaCloseBtns = document.querySelectorAll('.mega-close');

// Language code mapping (extracted from book codes)
const LANGUAGE_MAP = {
    'e': 'English',
    'h': 'Hindi',
    'u': 'Urdu',
    'as': 'Assamese',
    'pn': 'Punjabi',
    'gj': 'Gujarati',
    'ml': 'Malayalam',
    'mt': 'Maithili',
    'bd': 'Bodo',
    'mr': 'Marathi',
    'si': 'Sindhi',
    'bn': 'Bengali',
    'sk': 'Sanskrit',
    'np': 'Nepali',
    'or': 'Odia',
    'mn': 'Manipuri',
    'sn': 'Santhali',
    'ko': 'Konkani',
    'kn': 'Kannada',
    'tm': 'Tamil',
    'tl': 'Telugu',
    'dg': 'Dogri',
    'ks': 'Kashmiri'
};

// Extract language from book code
function getLanguageFromCode(code) {
    // Book code format: [class_letter][language_code][subject_code][part]
    // Examples: aejm1 (English), ahjm1 (Hindi), basjm1 (Assamese)

    // Remove first character (class letter) and last characters (subject+part)
    const langPart = code.slice(1);

    // Try two-letter codes first
    for (const [key, value] of Object.entries(LANGUAGE_MAP)) {
        if (key.length === 2 && langPart.startsWith(key)) {
            return value;
        }
    }

    // Try single-letter codes
    const firstChar = langPart[0];
    if (LANGUAGE_MAP[firstChar]) {
        return LANGUAGE_MAP[firstChar];
    }

    return 'Other';
}

// State management
let selectedBooks = new Set();    // Stores active book codes
let ignoreNextClick = false;      // Debounce flag for drag interactions

// Pagination / Lazy Loading Config
const booksToShow = 12;
let currentCount = 0;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        if (typeof BOOKS_DATA !== 'undefined') {
            BOOKS = BOOKS_DATA;
        } else {
            const response = await fetch('./books.json');
            if (!response.ok) throw new Error('Failed to load books.json');
            BOOKS = await response.json();
        }
    } catch (error) {
        console.error('Error loading books:', error);
        bookGrid.innerHTML = '<div class="no-results">Error loading book database. Please check console.</div>';
    }

    renderFilters();
    renderBooks(false);
    setupMegaMenus();
    setupGlobalSearch();
    setupMarquee();
});

// ----------------- MEGA MENU LOGIC -----------------
function setupMegaMenus() {
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = `mega-${btn.dataset.mega}`;
            const targetMenu = document.getElementById(targetId);
            const isActive = targetMenu.classList.contains('active');

            // Close all first
            closeAllMegaMenus();

            if (!isActive) {
                targetMenu.classList.add('active');
                btn.classList.add('active');
                document.body.style.overflow = 'hidden'; // Optional: lock scroll
            } else {
                document.body.style.overflow = '';
            }
            e.stopPropagation();
        });
    });

    megaCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllMegaMenus();
        });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mega-menu') && !e.target.closest('.nav-btn')) {
            closeAllMegaMenus();
        }
    });

    // Prevent menu clicks from bubbling up
    megaMenus.forEach(menu => {
        menu.addEventListener('click', (e) => e.stopPropagation());
    });
}

function closeAllMegaMenus() {
    megaMenus.forEach(m => m.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));
    document.body.style.overflow = '';
}

// ----------------- GLOBAL SEARCH -----------------
function setupGlobalSearch() {
    globalSearchInput.addEventListener('input', () => {
        renderBooks(false);
    });
}




// ----------------- FILTERS -----------------
// ----------------- FILTERS -----------------
// Render the sidebar filter options
function renderFilters() {
    // Languages - extract from book codes and sort alphabetically
    const languages = [...new Set(BOOKS.map(b => getLanguageFromCode(b.book_code)))]
        .filter(lang => lang !== 'Other')
        .sort((a, b) => a.localeCompare(b));

    languages.forEach(lang => {
        languageFilters.innerHTML += `<label><input type="checkbox" value="${lang}" data-type="language"><span>${lang}</span></label>`;
    });

    // Subjects - sorted alphabetically
    [...new Set(BOOKS.map(b => b.subject))].sort((a, b) => a.localeCompare(b)).forEach(s => {
        subjectFilters.innerHTML += `<label><input type="checkbox" value="${s}" data-type="subject"><span>${s}</span></label>`;
    });

    // Classes
    [...new Set(BOOKS.map(b => b.class))].sort((a, b) => a - b)
        .forEach(c => classFilters.innerHTML += `<label><input type="checkbox" value="${c}" data-type="class"><span>Class ${c}</span></label>`);

    document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.addEventListener('change', () => {
        renderBooks(false); // Reset count on filter change
    }));
}

// ----------------- BOOK GRID -----------------
function renderBooks(increment = false) {
    const languages = [...document.querySelectorAll('[data-type=language]:checked')].map(c => c.value);
    const subjects = [...document.querySelectorAll('[data-type=subject]:checked')].map(c => c.value);
    const classes = [...document.querySelectorAll('[data-type=class]:checked')].map(c => +c.value);
    const query = globalSearchInput.value.toLowerCase().trim();

    // 1. Filter
    const filtered = BOOKS.filter(b => {
        const bookLanguage = getLanguageFromCode(b.book_code);
        const matchesFilters = (
            (!languages.length || languages.includes(bookLanguage)) &&
            (!subjects.length || subjects.includes(b.subject)) &&
            (!classes.length || classes.includes(b.class))
        );
        const matchesSearch = !query ||
            b.title.toLowerCase().includes(query) ||
            b.subject.toLowerCase().includes(query) ||
            b.book_code.toLowerCase().includes(query);

        return matchesFilters && matchesSearch;
    });

    // 2. Group by Subject
    const grouped = filtered.reduce((acc, book) => {
        if (!acc[book.subject]) acc[book.subject] = [];
        acc[book.subject].push(book);
        return acc;
    }, {});

    // 3. Sort Subjects
    const sortedSubjects = Object.keys(grouped).sort();

    bookGrid.innerHTML = '';

    if (sortedSubjects.length === 0) {
        bookGrid.innerHTML = '<div class="no-results">No books found matching your filters.</div>';
    }

    // 4. Render Groups
    sortedSubjects.forEach(subject => {
        // Sort books within subject by class then title
        const books = grouped[subject].sort((a, b) => {
            if (a.class !== b.class) return a.class - b.class;
            return a.title.localeCompare(b.title);
        });

        // Header
        const header = document.createElement('h2');
        header.className = 'subject-header';
        header.textContent = subject;
        header.title = 'Click to select all books in this subject';
        header.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click handler from clearing selecton
            const allCodes = books.map(b => b.book_code);
            const allSelected = allCodes.every(code => selectedBooks.has(code));

            if (allSelected) {
                // Deselect all in this group
                allCodes.forEach(code => selectedBooks.delete(code));
            } else {
                // Select all in this group
                allCodes.forEach(code => selectedBooks.add(code));
            }

            // Update UI
            document.querySelectorAll('.book-card').forEach(card => {
                const code = card.dataset.code;
                if (allCodes.includes(code)) {
                    if (selectedBooks.has(code)) {
                        card.classList.add('selected');
                    } else {
                        card.classList.remove('selected');
                    }
                }
            });
            updateFloatingActions();
        });
        bookGrid.appendChild(header);

        // Grid for this subject
        const grid = document.createElement('div');
        grid.className = 'book-grid';

        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.dataset.code = book.book_code;

            if (selectedBooks.has(book.book_code)) card.classList.add('selected');

            card.innerHTML = `
                <img src="${thumbUrl(book.book_code)}" alt="${book.title}" loading="lazy" onerror="handleImageError(this)">
                <div class="book-title">${book.title}</div>
                <div class="book-meta">Class ${book.class}</div>
            `;
            grid.appendChild(card);
        });

        bookGrid.appendChild(grid);
    });

    attachSelectionEvents();
    updateFloatingActions();
}

// Handle missing book cover images by showing a placeholder
function handleImageError(img) {
    // Create placeholder element
    const placeholder = document.createElement('div');
    placeholder.className = 'book-cover-placeholder';
    placeholder.innerHTML = `
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
        </svg>
    `;

    // Replace the broken image with the placeholder
    if (img.parentNode) {
        img.parentNode.replaceChild(placeholder, img);
    }
}

// ----------------- SELECTION -----------------
function attachSelectionEvents() {
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        card.addEventListener('mousedown', e => {
            if (e.button !== 0) return; // left click only

            const code = card.dataset.code;

            // Simple Toggle Logic
            if (selectedBooks.has(code)) {
                selectedBooks.delete(code);
                card.classList.remove('selected');
            } else {
                selectedBooks.add(code);
                card.classList.add('selected');
            }

            updateFloatingActions();
            e.stopPropagation(); // Prevent document click handler (deselect) and marquee start
        });
    });
}

function clearSelection(update = true) {
    selectedBooks.clear();
    document.querySelectorAll('.book-card.selected').forEach(c => c.classList.remove('selected'));
    if (update) updateFloatingActions();
}

// Update visibility and content of Floating Action Buttons
function updateFloatingActions() {
    const totalSelected = selectedBooks.size;

    // Show only if at least 1 book is selected
    if (totalSelected === 0) {
        floatingActions.classList.remove('visible');
    } else {
        floatingActions.classList.add('visible');

        // Update Download Button
        downloadBtn.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
            <span>Download (${totalSelected})</span>
        `;

        // FORCE "Select All" text always (Never change to Deselect)
        selectAllBtn.innerHTML = `
             <svg viewBox="0 0 24 24"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>
            <span>Select All</span>
        `;
    }
}

// ----------------- CLICK OUTSIDE TO DESELECT -----------------
// Deselect all books if clicking background area
document.addEventListener('click', e => {
    if (ignoreNextClick) {
        ignoreNextClick = false;
        return;
    }
    if (!e.target.closest('.book-card') &&
        !e.target.closest('.subject-header') &&
        !e.target.closest('.floating-actions') &&
        !e.target.closest('.navbar') &&
        !e.target.closest('.mega-menu')) {
        clearSelection();
    }
});

// ----------------- CTRL+A -----------------
// Select all visible books with Ctrl+A
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        document.querySelectorAll('.book-card').forEach(card => {
            selectedBooks.add(card.dataset.code);
            card.classList.add('selected');
        });
        updateFloatingActions();
    }
});

// ----------------- SELECT ALL BUTTON -----------------
// Handle floating "Select All/Deselect All" button click
selectAllBtn.addEventListener('click', (e) => {
    // CRITICAL: Stop the click from bubbling to the document (which clears selection)
    e.stopPropagation();

    const cards = document.querySelectorAll('.book-card');

    // Always Select All (Removed the logic to Deselect)
    cards.forEach(card => {
        selectedBooks.add(card.dataset.code);
        card.classList.add('selected');
    });

    updateFloatingActions();
});

// ----------------- DOWNLOAD -----------------
// Handle download button click
downloadBtn.addEventListener('click', async () => {
    const selectedCodes = [...selectedBooks];

    if (selectedCodes.length === 0) return;

    // Disable button and show loading state
    downloadBtn.disabled = true;
    const originalHTML = downloadBtn.innerHTML;

    try {
        if (selectedCodes.length === 1) {
            // Single book - direct download
            const code = selectedCodes[0];
            const a = document.createElement('a');
            a.href = zipUrl(code);
            a.download = `${code}.zip`;
            a.click();
        } else {
            // Multiple books - sequential downloads with progress
            downloadBtn.innerHTML = `
                <svg viewBox="0 0 24 24" class="spinner">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
                    <path d="M12 2 A10 10 0 0 1 22 12" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>
                </svg>
                <span>0/${selectedCodes.length}</span>
            `;

            // Create hidden iframe for downloads
            // This technique works better for triggering multiple downloads than simple <a> tags
            const downloadFrame = document.createElement('iframe');
            downloadFrame.style.display = 'none';
            document.body.appendChild(downloadFrame);

            let completed = 0;

            // Download each book sequentially
            for (let i = 0; i < selectedCodes.length; i++) {
                const code = selectedCodes[i];

                // Trigger download using iframe (avoids CORS issues for some setups)
                downloadFrame.src = zipUrl(code);

                completed++;

                // Update progress
                const progressSpan = downloadBtn.querySelector('span');
                if (progressSpan) {
                    progressSpan.textContent = `${completed}/${selectedCodes.length}`;
                }

                // Wait between downloads to avoid overwhelming the browser/server
                // Last download doesn't need a delay
                if (i < selectedCodes.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            }

            // Clean up
            setTimeout(() => {
                document.body.removeChild(downloadFrame);
            }, 2000);

            // Show completion message briefly
            downloadBtn.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
                <span>Done!</span>
            `;

            await new Promise(resolve => setTimeout(resolve, 1500));
        }
    } catch (error) {
        console.error('Download error:', error);
        alert('Failed to download books. Please try again or download them individually.');
    } finally {
        // Restore button state
        downloadBtn.innerHTML = originalHTML;
        downloadBtn.disabled = false;
    }
});




// ----------------- MARQUEE SELECTION -----------------
// ----------------- MARQUEE SELECTION -----------------
// Enable click-and-drag box selection
function setupMarquee() {
    const marquee = document.createElement('div');
    marquee.className = 'selection-marquee';
    document.body.appendChild(marquee);

    let isDragging = false;
    let startX = 0;
    let startY = 0;

    document.addEventListener('mousedown', e => {
        // Ignore if right click, or on sidebar/header/buttons/cards
        if (e.button !== 0) return;
        if (e.target.closest('.book-card') ||
            e.target.closest('.navbar') ||
            e.target.closest('.mega-menu') ||
            e.target.closest('.floating-actions')) return;

        isDragging = true;
        startX = e.pageX;
        startY = e.pageY;

        // Don't clear immediately. The global 'click' handler will handle
        // clearing if it's a simple click. If it's a drag, we want it 
        // to be potentially additive based on what the user wants.
        // For this project, let's keep marquee additive to match 
        // the "stay selected" request.

        marquee.style.left = startX + 'px';
        marquee.style.top = startY + 'px';
        marquee.style.width = '0px';
        marquee.style.height = '0px';
        marquee.style.display = 'none'; // Only show after moving a bit
    });

    document.addEventListener('mousemove', e => {
        if (!isDragging) return;

        const currentX = e.pageX;
        const currentY = e.pageY;

        // Threshold check
        const dist = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
        if (dist < 5 && marquee.style.display !== 'block') return;

        if (marquee.style.display !== 'block') {
            marquee.style.display = 'block';
        }

        // Prevent default text selection during drag
        e.preventDefault();

        const width = Math.abs(currentX - startX);
        const height = Math.abs(currentY - startY);
        const left = Math.min(currentX, startX);
        const top = Math.min(currentY, startY);

        marquee.style.width = width + 'px';
        marquee.style.height = height + 'px';
        marquee.style.left = left + 'px';
        marquee.style.top = top + 'px';

        const rect = { left, top, right: left + width, bottom: top + height };
        const cards = document.querySelectorAll('.book-card');

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardLeft = cardRect.left + window.scrollX;
            const cardTop = cardRect.top + window.scrollY;
            const cardRight = cardLeft + cardRect.width;
            const cardBottom = cardTop + cardRect.height;

            const intersect = !(rect.left > cardRight ||
                rect.right < cardLeft ||
                rect.top > cardBottom ||
                rect.bottom < cardTop);

            const code = card.dataset.code;
            if (intersect) {
                if (!selectedBooks.has(code)) {
                    selectedBooks.add(code);
                    card.classList.add('selected');
                }
            } else {
                // Marquee is now strictly additive to satisfy "stay selected" request
                // Deselection is only done via individual card toggle or clicking empty area
            }
        });
        updateFloatingActions();
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            if (marquee.style.display === 'block') {
                // We dragged
                ignoreNextClick = true; // Prevent click handler from clearing selection
                setTimeout(() => ignoreNextClick = false, 100);
            }
            marquee.style.display = 'none';
        }
    });
}
