// Data Constants (Assumes BOOKS array is available globally)
const BASE = 'https://ncert.nic.in/textbook/pdf';
const zipUrl = c => `${BASE}/${c}dd.zip`;
const thumbUrl = c => `${BASE}/${c}cc.jpg`;

const BOOKS = [
    { subject: "English", class: 1, book_code: "aemr1", title: "Mridang" },
    { subject: "Mathematics", class: 1, book_code: "aejm1", title: "Joyful-Mathematics (English)" },
    { subject: "Mathematics", class: 1, book_code: "ahjm1", title: "Joyful-Mathematics (Hindi)" },
    { subject: "Mathematics", class: 1, book_code: "amrjm1", title: "Joyful-Mathematics (Marathi)" },
    { subject: "Mathematics", class: 1, book_code: "asijm1", title: "Joyful-Mathematics (Sindhi)" },
    { subject: "Mathematics", class: 1, book_code: "apjm1", title: "Joyful-Mathematics (Punjabi)" },
    { subject: "Mathematics", class: 1, book_code: "agjm1", title: "Joyful-Mathematics (Gujarati)" },
    { subject: "Mathematics", class: 1, book_code: "ayjm1", title: "Joyful-Mathematics (Malayalam)" },
    { subject: "Mathematics", class: 1, book_code: "akjm1", title: "Joyful-Mathematics (Konkani)" },
    { subject: "Mathematics", class: 1, book_code: "aajm1", title: "Joyful-Mathematics (Assamese)" },
    { subject: "Mathematics", class: 1, book_code: "aijm1", title: "Joyful-Mathematics (Maithili)" },
    { subject: "Mathematics", class: 1, book_code: "aojm1", title: "Joyful-Mathematics (Bodo)" },
    { subject: "Mathematics", class: 1, book_code: "askjm1", title: "Joyful-Mathematics (Sanskrit)" },
    { subject: "Mathematics", class: 1, book_code: "aorjm1", title: "Joyful-Mathematics (Oriya)" },
    { subject: "Mathematics", class: 1, book_code: "abnjm1", title: "Joyful-Mathematics (Bengali)" },
    { subject: "Mathematics", class: 1, book_code: "asnjm1", title: "Joyful-Mathematics (Santhali)" },
    { subject: "Mathematics", class: 1, book_code: "amnjm1", title: "Joyful-Mathematics (Manipuri)" },
    { subject: "Mathematics", class: 1, book_code: "aujm1", title: "Joyful-Mathematics (Urdu)" },
    { subject: "Mathematics", class: 1, book_code: "anpjm1", title: "Joyful-Mathematics (Nepali)" },
    { subject: "Mathematics", class: 1, book_code: "atljm1", title: "Joyful-Mathematics (Telugu)" },
    { subject: "Mathematics", class: 1, book_code: "aknjm1", title: "Joyful-Mathematics (Kannada)" },
    { subject: "Mathematics", class: 1, book_code: "atmjm1", title: "Joyful-Mathematics (Tamil)" },
    { subject: "Mathematics", class: 1, book_code: "adgjm1", title: "Joyful-Mathematics (Dogri)" },
    { subject: "Mathematics", class: 1, book_code: "aksjm1", title: "Joyful-Mathematics (Kashmiri)" },
    { subject: "Hindi", class: 1, book_code: "ahsr1", title: "Sarangi" },
    { subject: "Urdu", class: 1, book_code: "aush1", title: "Shahnai" },
    { subject: "Mathematics", class: 2, book_code: "bejm1", title: "Joyful-Mathematics (English)" },
    { subject: "Mathematics", class: 2, book_code: "bhjm1", title: "Joyful-Mathematics (Hindi)" },
    { subject: "Mathematics", class: 2, book_code: "basjm1", title: "Joyful-Mathematics (Assamese)" },
    { subject: "Mathematics", class: 2, book_code: "bpnjm1", title: "Joyful-Mathematics (Punjabi)" },
    { subject: "Mathematics", class: 2, book_code: "bgjjm1", title: "Joyful-Mathematics (Gujarati)" },
    { subject: "Mathematics", class: 2, book_code: "bmljm1", title: "Joyful-Mathematics (Malayalam)" },
    { subject: "Mathematics", class: 2, book_code: "bmtjm1", title: "Joyful-Mathematics (Maithli)" },
    { subject: "Mathematics", class: 2, book_code: "bbdjm1", title: "Joyful-Mathematics (Bodo)" },
    { subject: "Mathematics", class: 2, book_code: "bmrjm1", title: "Joyful-Mathematics (Marathi)" },
    { subject: "Mathematics", class: 2, book_code: "bsijm1", title: "Joyful-Mathematics (Sindhi)" },
    { subject: "Mathematics", class: 2, book_code: "bbnjm1", title: "Joyful-Mathematics (Bengali)" },
    { subject: "Mathematics", class: 2, book_code: "bskjm1", title: "Joyful-Mathematics (Sanskrit)" },
    { subject: "Mathematics", class: 2, book_code: "bnpjm1", title: "Joyful-Mathematics (Nepali)" },
    { subject: "Mathematics", class: 2, book_code: "borjm1", title: "Joyful-Mathematics (Oriya)" },
    { subject: "Mathematics", class: 2, book_code: "bmnjm1", title: "Joyful-Mathematics (Manipuri)" },
    { subject: "Mathematics", class: 2, book_code: "bujm1", title: "Joyful-Mathematics (Urdu)" },
    { subject: "Mathematics", class: 2, book_code: "bsnjm1", title: "Joyful-Mathematics (Santhali)" },
    { subject: "Mathematics", class: 2, book_code: "bkojm1", title: "Joyful-Mathematics (Konkani)" },
    { subject: "Mathematics", class: 2, book_code: "bknjm1", title: "Joyful-Mathematics (Kannada)" },
    { subject: "Mathematics", class: 2, book_code: "btmjm1", title: "Joyful-Mathematics (Tamil)" },
    { subject: "Mathematics", class: 2, book_code: "btljm1", title: "Joyful-Mathematics (Telugu)" },
    { subject: "Mathematics", class: 2, book_code: "bdgjm1", title: "Joyful-Mathematics (Dogri)" },
    { subject: "Mathematics", class: 2, book_code: "bksjm1", title: "Joyful-Mathematics (Kashmiri)" },
    { subject: "Hindi", class: 2, book_code: "bhsr1", title: "Sarangi" },
    { subject: "English", class: 2, book_code: "bemr1", title: "Mridang" },
    { subject: "Urdu", class: 2, book_code: "bush1", title: "Shahnai" },
    // ===== Class 3 · Mathematics =====
    { subject: "Mathematics", class: 3, book_code: "cemm1", title: "Maths Mela" },
    { subject: "Mathematics", class: 3, book_code: "chmm1", title: "Ganit Mela" },
    { subject: "Mathematics", class: 3, book_code: "cumm1", title: "Riyazi Mela" },
    { subject: "Mathematics", class: 3, book_code: "casmm1", title: "Maths Mela (Assamese)" },
    { subject: "Mathematics", class: 3, book_code: "cbnmm1", title: "Maths Mela (Bengali)" },
    { subject: "Mathematics", class: 3, book_code: "cbdmm1", title: "Maths Mela (Bodo)" },
    { subject: "Mathematics", class: 3, book_code: "cdgmm1", title: "Maths Mela (Dogri)" },
    { subject: "Mathematics", class: 3, book_code: "cgjmm1", title: "Maths Mela (Gujarati)" },
    { subject: "Mathematics", class: 3, book_code: "cknmm1", title: "Maths Mela (Kannada)" },
    { subject: "Mathematics", class: 3, book_code: "cmtmm1", title: "Maths Mela (Maithili)" },
    { subject: "Mathematics", class: 3, book_code: "cmlmm1", title: "Maths Mela (Malayalam)" },
    { subject: "Mathematics", class: 3, book_code: "cmnmm1", title: "Maths Mela (Manipuri)" },
    { subject: "Mathematics", class: 3, book_code: "cnpmm1", title: "Maths Mela (Nepali)" },
    { subject: "Mathematics", class: 3, book_code: "cormm1", title: "Maths Mela (Odia)" },
    { subject: "Mathematics", class: 3, book_code: "cpnmm1", title: "Maths Mela (Punjabi)" },
    { subject: "Mathematics", class: 3, book_code: "csnmm1", title: "Maths Mela (Santhali)" },
    { subject: "Mathematics", class: 3, book_code: "ctmmm1", title: "Maths Mela (Tamil)" },
    { subject: "Mathematics", class: 3, book_code: "ctlmm1", title: "Maths Mela (Telugu)" },
    { subject: "Mathematics", class: 3, book_code: "cskmm1", title: "Maths Mela (Sanskrit)" },
    { subject: "Mathematics", class: 3, book_code: "cmrmm1", title: "Maths Mela (Marathi)" },
    { subject: "Mathematics", class: 3, book_code: "ckomm1", title: "Maths Mela (Konkani)" },
    { subject: "Mathematics", class: 3, book_code: "csimm1", title: "Maths Mela (Sindhi)" },
    { subject: "Mathematics", class: 3, book_code: "cksmm1", title: "Maths Mela (Kashmiri)" },

    // ===== Class 3 · Hindi =====
    { subject: "Hindi", class: 3, book_code: "chve1", title: "Veena" },

    // ===== Class 3 · English =====
    { subject: "English", class: 3, book_code: "cesa1", title: "Santoor" },

    // ===== Class 3 · Urdu =====
    { subject: "Urdu", class: 3, book_code: "cust1", title: "Sitar" },

    // ===== Class 3 · The World Around Us =====
    { subject: "The World Around Us", class: 3, book_code: "ceev1", title: "Our Wondrous World" },
    { subject: "The World Around Us", class: 3, book_code: "chev1", title: "Hamara Adhbhut Sansar" },
    { subject: "The World Around Us", class: 3, book_code: "cuev1", title: "Hamari Hairat Angez Duniya" },
    { subject: "The World Around Us", class: 3, book_code: "cbnev1", title: "Our Wondrous World (Bengali)" },
    { subject: "The World Around Us", class: 3, book_code: "corev1", title: "Our Wondrous World (Odia)" },
    { subject: "The World Around Us", class: 3, book_code: "cmrev1", title: "Our Wondrous World (Marathi)" },
    { subject: "The World Around Us", class: 3, book_code: "cnpev1", title: "Our Wondrous World (Nepali)" },
    { subject: "The World Around Us", class: 3, book_code: "ctlev1", title: "Our Wondrous World (Telugu)" },
    { subject: "The World Around Us", class: 3, book_code: "cgjev1", title: "Our Wondrous World (Gujarati)" },
    { subject: "The World Around Us", class: 3, book_code: "cmnev1", title: "Our Wondrous World (Manipuri)" },
    { subject: "The World Around Us", class: 3, book_code: "cskev1", title: "Our Wondrous World (Sanskrit)" },
    { subject: "The World Around Us", class: 3, book_code: "casev1", title: "Our Wondrous World (Assamese)" },
    { subject: "The World Around Us", class: 3, book_code: "cbdev1", title: "Our Wondrous World (Bodo)" },
    { subject: "The World Around Us", class: 3, book_code: "cpnev1", title: "Our Wondrous World (Punjabi)" },
    { subject: "The World Around Us", class: 3, book_code: "cmlev1", title: "Our Wondrous World (Malayalam)" },
    { subject: "The World Around Us", class: 3, book_code: "cmtev1", title: "Our Wondrous World (Maithili)" },
    { subject: "The World Around Us", class: 3, book_code: "cdgev1", title: "Our Wondrous World (Dogri)" },
    { subject: "The World Around Us", class: 3, book_code: "cknev1", title: "Our Wondrous World (Kannada)" },
    { subject: "The World Around Us", class: 3, book_code: "csnev1", title: "Our Wondrous World (Santhali)" },
    { subject: "The World Around Us", class: 3, book_code: "ctmev1", title: "Our Wondrous World (Tamil)" },
    { subject: "The World Around Us", class: 3, book_code: "csiev1", title: "Our Wondrous World (Sindhi)" },
    { subject: "The World Around Us", class: 3, book_code: "cksev1", title: "Our Wondrous World (Kashmiri)" },
    { subject: "The World Around Us", class: 3, book_code: "ckoev1", title: "Our Wondrous World (Konkani)" },

    // ===== Class 3 · Arts =====
    { subject: "Arts", class: 3, book_code: "cebu1", title: "Bansuri - I" },
    { subject: "Arts", class: 3, book_code: "chbu1", title: "Bansuri - I (Hindi)" },
    { subject: "Arts", class: 3, book_code: "cubu1", title: "Bansuri - I (Urdu)" },
    { subject: "Arts", class: 3, book_code: "cbnbu1", title: "Bansuri - I (Bengali)" },
    { subject: "Arts", class: 3, book_code: "cmtbu1", title: "Bansuri - I (Maithili)" },
    { subject: "Arts", class: 3, book_code: "cmnbu1", title: "Bansuri - I (Manipuri)" },
    { subject: "Arts", class: 3, book_code: "cmrbu1", title: "Bansuri - I (Marathi)" },
    { subject: "Arts", class: 3, book_code: "cnpbu1", title: "Bansuri - I (Nepali)" },
    { subject: "Arts", class: 3, book_code: "cpnbu1", title: "Bansuri - I (Punjabi)" },
    { subject: "Arts", class: 3, book_code: "cbdbu1", title: "Bansuri - I (Bodo)" },
    { subject: "Arts", class: 3, book_code: "cgjbu1", title: "Bansuri - I (Gujarati)" },
    { subject: "Arts", class: 3, book_code: "cdgbu1", title: "Bansuri - I (Dogri)" },
    { subject: "Arts", class: 3, book_code: "ckobu1", title: "Bansuri - I (Konkani)" },
    { subject: "Arts", class: 3, book_code: "csnbu1", title: "Bansuri - I (Santhali)" },
    { subject: "Arts", class: 3, book_code: "ctmbu1", title: "Bansuri - I (Tamil)" },
    { subject: "Arts", class: 3, book_code: "ctlbu1", title: "Bansuri - I (Telugu)" },
    { subject: "Arts", class: 3, book_code: "casbu1", title: "Bansuri - I (Assamese)" },
    { subject: "Arts", class: 3, book_code: "cknbu1", title: "Bansuri - I (Kannada)" },
    { subject: "Arts", class: 3, book_code: "cskbu1", title: "Bansuri - I (Sanskrit)" },
    { subject: "Arts", class: 3, book_code: "cmlbu1", title: "Bansuri - I (Malayalam)" },
    { subject: "Arts", class: 3, book_code: "corbu1", title: "Bansuri - I (Odia)" },
    { subject: "Arts", class: 3, book_code: "csibu1", title: "Bansuri - I (Sindhi)" },
    { subject: "Arts", class: 3, book_code: "cksbu1", title: "Bansuri - I (Kashmiri)" },

    // ===== Class 3 · Physical Education and Well Being =====
    { subject: "Physical Education and Well Being", class: 3, book_code: "ceky1", title: "Khel Yoga" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "chky1", title: "Khel Yoga (Hindi)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cmlky1", title: "Khel Yoga (Malayalam)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cbnky1", title: "Khel Yoga (Bengali)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cgjky1", title: "Khel Yoga (Gujarati)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cknky1", title: "Khel Yoga (Kannada)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "ckoky1", title: "Khel Yoga (Konkani)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cmnky1", title: "Khel Yoga (Manipuri)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cnpky1", title: "Khel Yoga (Nepali)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "corky1", title: "Khel Yoga (Odia)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "casky1", title: "Khel Yoga (Assamese)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cdgky1", title: "Khel Yoga (Dogri)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cpnky1", title: "Khel Yoga (Punjabi)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cskky1", title: "Khel Yoga (Sanskrit)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "csnky1", title: "Khel Yoga (Santhali)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "ctmky1", title: "Khel Yoga (Tamil)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cmrky1", title: "Khel Yoga (Marathi)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cbdky1", title: "Khel Yoga (Bodo)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "ctlky1", title: "Khel Yoga (Telugu)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cmtky1", title: "Khel Yoga (Maithili)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cuky1", title: "Khel Yoga (Urdu)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "csiky1", title: "Khel Yoga (Sindhi)" },
    { subject: "Physical Education and Well Being", class: 3, book_code: "cksky1", title: "Khel Yoga (Kashmiri)" },
    // Class 4 – Mathematics
    { subject: "Mathematics", class: 4, book_code: "demm1", title: "Math-Mela" },
    { subject: "Mathematics", class: 4, book_code: "dhmm1", title: "Ganit Mela" },

    // Class 4 – Hindi
    { subject: "Hindi", class: 4, book_code: "dhve1", title: "Veena" },

    // Class 4 – The World Around Us
    { subject: "The World Around Us", class: 4, book_code: "deev1", title: "Our Wonderous World" },
    { subject: "The World Around Us", class: 4, book_code: "dhev1", title: "Hamara Adhbhut Sansar" },
    { subject: "The World Around Us", class: 4, book_code: "duev1", title: "Hamari Hairatangez Duniya" },
    { subject: "The World Around Us", class: 4, book_code: "dpev1", title: "Our Wonderous World (Punjabi)" },

    // Class 4 – English
    { subject: "English", class: 4, book_code: "desa1", title: "Santoor" },

    // Class 4 – Arts
    { subject: "Arts", class: 4, book_code: "debu1", title: "Bansuri" },
    { subject: "Arts", class: 4, book_code: "dhbu1", title: "Bansuri - I (Hindi)" },
    { subject: "Arts", class: 4, book_code: "dubu1", title: "Bansuri - I (Urdu)" },

    // Class 4 – Physical Education and Well Being
    { subject: "Physical Education and Well Being", class: 4, book_code: "deky1", title: "Khel Yoga" },
    { subject: "Physical Education and Well Being", class: 4, book_code: "dhky1", title: "Khel Yoga (Hindi)" },

    // Class 4 – Urdu
    { subject: "Urdu", class: 4, book_code: "dust1", title: "Sitaar" },

    // Class 5 – Mathematics
    { subject: "Mathematics", class: 5, book_code: "eemm1", title: "Math-Mela" },

    // Class 5 – Hindi
    { subject: "Hindi", class: 5, book_code: "ehve1", title: "Veena" },

    // Class 5 – English
    { subject: "English", class: 5, book_code: "eesa1", title: "Santoor" },

    // Class 5 – The World Around Us
    { subject: "The World Around Us", class: 5, book_code: "eeev1", title: "Our Wonderous World" },
    { subject: "The World Around Us", class: 5, book_code: "euev1", title: "Hamari Hairatangez Duniya" },

    // Class 5 – Arts
    { subject: "Arts", class: 5, book_code: "eebu1", title: "Bansuri" },

    // Class 5 – Physical Education and Well Being
    { subject: "Physical Education and Well Being", class: 5, book_code: "eeky1", title: "Khel Yoga" },

    // Class 5 – Urdu
    { subject: "Urdu", class: 5, book_code: "eust1", title: "Sitaar" },
    // Class 6 – Hindi
    { subject: "Hindi", class: 6, book_code: "fhml1", title: "Malhar" },

    // Class 6 – Vocational Education
    { subject: "Vocational Education", class: 6, book_code: "fekb1", title: "Kaushal Bodh (English)" },
    { subject: "Vocational Education", class: 6, book_code: "fhkb1", title: "Kaushal Bodh (Hindi)" },
    { subject: "Vocational Education", class: 6, book_code: "fbnkb1", title: "Kaushal Bodh (Bengali)" },
    { subject: "Vocational Education", class: 6, book_code: "fbdkb1", title: "Kaushal Bodh (Bodo)" },
    { subject: "Vocational Education", class: 6, book_code: "fdgkb1", title: "Kaushal Bodh (Dogri)" },
    { subject: "Vocational Education", class: 6, book_code: "fkokb1", title: "Kaushal Bodh (Konkani)" },
    { subject: "Vocational Education", class: 6, book_code: "forkb1", title: "Kaushal Bodh (Odia)" },
    { subject: "Vocational Education", class: 6, book_code: "fpnkb1", title: "Kaushal Bodh (Punjabi)" },
    { subject: "Vocational Education", class: 6, book_code: "fmlkb1", title: "Kaushal Bodh (Malayalam)" },
    { subject: "Vocational Education", class: 6, book_code: "fknkb1", title: "Kaushal Bodh (Kannada)" },
    { subject: "Vocational Education", class: 6, book_code: "fmnkb1", title: "Kaushal Bodh (Manipuri)" },
    { subject: "Vocational Education", class: 6, book_code: "ftmkb1", title: "Kaushal Bodh (Tamil)" },
    { subject: "Vocational Education", class: 6, book_code: "fgjkb1", title: "Kaushal Bodh (Gujarati)" },
    { subject: "Vocational Education", class: 6, book_code: "fmtkb1", title: "Kaushal Bodh (Maithili)" },
    { subject: "Vocational Education", class: 6, book_code: "faskb1", title: "Kaushal Bodh (Assamese)" },
    { subject: "Vocational Education", class: 6, book_code: "fnpkb1", title: "Kaushal Bodh (Nepali)" },
    { subject: "Vocational Education", class: 6, book_code: "fskkb1", title: "Kaushal Bodh (Sanskrit)" },
    { subject: "Vocational Education", class: 6, book_code: "fkskb1", title: "Kaushal Bodh (Kashmiri)" },
    { subject: "Vocational Education", class: 6, book_code: "fmrkb1", title: "Kaushal Bodh (Marathi)" },
    { subject: "Vocational Education", class: 6, book_code: "ftlkb1", title: "Kaushal Bodh (Telugu)" },
    { subject: "Vocational Education", class: 6, book_code: "fsnkb1", title: "Kaushal Bodh (Santhali)" },
    { subject: "Vocational Education", class: 6, book_code: "fsikb1", title: "Kaushal Bodh (Sindhi)" },

    // Class 6 – Physical Education and Well Being
    { subject: "Physical Education and Well Being", class: 6, book_code: "feky1", title: "Khel Yatra (English)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fhky1", title: "Khel Yatra (Hindi)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fbnky1", title: "Khel Yatra (Bengali)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fpnky1", title: "Khel Yatra (Punjabi)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fasky1", title: "Khel Yatra (Assamese)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "ftmky1", title: "Khel Yatra (Tamil)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fnpky1", title: "Khel Yatra (Nepali)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "forky1", title: "Khel Yatra (Odia)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fdgky1", title: "Khel Yatra (Dogri)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "ftlky1", title: "Khel Yatra (Telugu)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fkoky1", title: "Khel Yatra (Konkani)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fknky1", title: "Khel Yatra (Kannada)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fmlky1", title: "Khel Yatra (Malayalam)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fbdky1", title: "Khel Yatra (Bodo)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fksky1", title: "Khel Yatra (Kashmiri)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fmnky1", title: "Khel Yatra (Manipuri)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fmrky1", title: "Khel Yatra (Marathi)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fskky1", title: "Khel Yatra (Sanskrit)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fsnky1", title: "Khel Yatra (Santhali)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fsiky1", title: "Khel Yatra (Sindhi)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fmtky1", title: "Khel Yatra (Maithili)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fgjky1", title: "Khel Yatra (Gujarati)" },
    { subject: "Physical Education and Well Being", class: 6, book_code: "fukl1", title: "Jismani Taleem aur Tandurusti" },

    // Class 6 – English
    { subject: "English", class: 6, book_code: "fepr1", title: "Poorvi" },

    // Class 6 – Mathematics
    { subject: "Mathematics", class: 6, book_code: "fegp1", title: "Ganita Prakash (English)" },
    { subject: "Mathematics", class: 6, book_code: "fhgp1", title: "Ganita Prakash (Hindi)" },
    { subject: "Mathematics", class: 6, book_code: "forgp1", title: "Ganita Prakash (Odia)" },
    { subject: "Mathematics", class: 6, book_code: "fbdgp1", title: "Ganita Prakash (Bodo)" },
    { subject: "Mathematics", class: 6, book_code: "fmlgp1", title: "Ganita Prakash (Malayalam)" },
    { subject: "Mathematics", class: 6, book_code: "fpngp1", title: "Ganita Prakash (Punjabi)" },
    { subject: "Mathematics", class: 6, book_code: "fskgp1", title: "Ganita Prakash (Sanskrit)" },
    { subject: "Mathematics", class: 6, book_code: "fkngp1", title: "Ganita Prakash (Kannada)" },
    { subject: "Mathematics", class: 6, book_code: "ftmgp1", title: "Ganita Prakash (Tamil)" },
    { subject: "Mathematics", class: 6, book_code: "fmrgp1", title: "Ganita Prakash (Marathi)" },
    { subject: "Mathematics", class: 6, book_code: "fbngp1", title: "Ganita Prakash (Bengali)" },
    { subject: "Mathematics", class: 6, book_code: "ftlgp1", title: "Ganita Prakash (Telugu)" },
    { subject: "Mathematics", class: 6, book_code: "fmtgp1", title: "Ganita Prakash (Maithili)" },
    { subject: "Mathematics", class: 6, book_code: "fdggp1", title: "Ganita Prakash (Dogri)" },
    { subject: "Mathematics", class: 6, book_code: "fnpgp1", title: "Ganita Prakash (Nepali)" },
    { subject: "Mathematics", class: 6, book_code: "fugp1", title: "Ganita Prakash (Urdu)" },
    { subject: "Mathematics", class: 6, book_code: "fasgp1", title: "Ganita Prakash (Assamese)" },
    { subject: "Mathematics", class: 6, book_code: "fgjgp1", title: "Ganita Prakash (Gujarati)" },
    { subject: "Mathematics", class: 6, book_code: "fmngp1", title: "Ganita Prakash (Manipuri)" },
    { subject: "Mathematics", class: 6, book_code: "fkogp1", title: "Ganita Prakash (Konkani)" },
    { subject: "Mathematics", class: 6, book_code: "fsngp1", title: "Ganita Prakash (Santhali)" },
    { subject: "Mathematics", class: 6, book_code: "fsigp1", title: "Ganita Prakash (Sindhi)" },
    { subject: "Mathematics", class: 6, book_code: "fksgp1", title: "Ganita Prakash (Kashmiri)" },

    // Class 6 – Sanskrit
    { subject: "Sanskrit", class: 6, book_code: "fsde1", title: "Deepakam" },

    // Class 6 – Science
    { subject: "Science", class: 6, book_code: "fecu1", title: "Curiosity (English)" },
    { subject: "Science", class: 6, book_code: "fhcu1", title: "Jigyasa (Hindi)" },
    { subject: "Science", class: 6, book_code: "fucu1", title: "Tajassus (Urdu)" },

    // Class 6 – Arts
    { subject: "Arts", class: 6, book_code: "fekr1", title: "Kriti-I (English)" },
    { subject: "Arts", class: 6, book_code: "fhkr1", title: "Kriti-I (Hindi)" },
    { subject: "Arts", class: 6, book_code: "fbnkr1", title: "Kriti-I (Bengali)" },
    { subject: "Arts", class: 6, book_code: "fkokr1", title: "Kriti-I (Konkani)" },
    { subject: "Arts", class: 6, book_code: "fbdkr1", title: "Kriti-I (Bodo)" },
    { subject: "Arts", class: 6, book_code: "fmtkr1", title: "Kriti-I (Maithili)" },
    { subject: "Arts", class: 6, book_code: "fmnkr1", title: "Kriti-I (Manipuri)" },
    { subject: "Arts", class: 6, book_code: "faskr1", title: "Kriti-I (Assamese)" },
    { subject: "Arts", class: 6, book_code: "fdgkr1", title: "Kriti-I (Dogri)" },
    { subject: "Arts", class: 6, book_code: "forkr1", title: "Kriti-I (Odia)" },
    { subject: "Arts", class: 6, book_code: "ftmkr1", title: "Kriti-I (Tamil)" },
    { subject: "Arts", class: 6, book_code: "fgjkr1", title: "Kriti-I (Gujarati)" },
    { subject: "Arts", class: 6, book_code: "fknkr1", title: "Kriti-I (Kannada)" },
    { subject: "Arts", class: 6, book_code: "fmlkr1", title: "Kriti-I (Malayalam)" },
    { subject: "Arts", class: 6, book_code: "fmrkr1", title: "Kriti-I (Marathi)" },
    { subject: "Arts", class: 6, book_code: "fskkr1", title: "Kriti-I (Sanskrit)" },
    { subject: "Arts", class: 6, book_code: "fnpkr1", title: "Kriti-I (Nepali)" },
    { subject: "Arts", class: 6, book_code: "fpnkr1", title: "Kriti-I (Punjabi)" },
    { subject: "Arts", class: 6, book_code: "ftlkr1", title: "Kriti-I (Telugu)" },
    { subject: "Arts", class: 6, book_code: "fkskr1", title: "Kriti-I (Kashmiri)" },
    { subject: "Arts", class: 6, book_code: "fsikr1", title: "Kriti-I (Sindhi)" },
    { subject: "Arts", class: 6, book_code: "fsnkr1", title: "Kriti-I (Santhali)" },

    // Class 6 – Urdu
    { subject: "Urdu", class: 6, book_code: "fuky1", title: "Khayal" },
    // Class 7 – Mathematics
    { subject: "Mathematics", class: 7, book_code: "gegp1", title: "Ganita Prakash" },
    { subject: "Mathematics", class: 7, book_code: "gegp2", title: "Ganita Prakash-II" },
    { subject: "Mathematics", class: 7, book_code: "ghgp1", title: "Ganita Prakash(Hindi)" },
    { subject: "Mathematics", class: 7, book_code: "gugp1", title: "Ganita Prakash(Urdu)" },

    // Class 7 – Arts
    { subject: "Arts", class: 7, book_code: "gekr1", title: "Kriti" },
    { subject: "Arts", class: 7, book_code: "ghkr1", title: "Kriti-I (Hindi)" },

    // Class 7 – Hindi
    { subject: "Hindi", class: 7, book_code: "ghml1", title: "Malhar" },

    // Class 7 – Sanskrit
    { subject: "Sanskrit", class: 7, book_code: "gsde1", title: "Deepakam" },

    // Class 7 – Science
    { subject: "Science", class: 7, book_code: "gecu1", title: "Curiosity" },
    { subject: "Science", class: 7, book_code: "ghcu1", title: "Jigyasa" },
    { subject: "Science", class: 7, book_code: "gucu1", title: "Tajassus" },

    // Class 7 – English
    { subject: "English", class: 7, book_code: "gepr1", title: "Poorvi" },

    // Class 7 – Social Science
    { subject: "Social Science", class: 7, book_code: "gees1", title: "Exploring Society India and Beyond" },
    { subject: "Social Science", class: 7, book_code: "ghes1", title: "Samaj Ka Aadhyan: Bharat or uske aage" },
    { subject: "Social Science", class: 7, book_code: "gees2", title: "Exploring Society India and Beyond Part 2" },

    // Class 7 – Physical Education and Well Being
    { subject: "Physical Education and Well Being", class: 7, book_code: "geky1", title: "Khel Yatra" },
    { subject: "Physical Education and Well Being", class: 7, book_code: "gukl1", title: "Khel Yatra (Urdu)" },
    { subject: "Physical Education and Well Being", class: 7, book_code: "ghky1", title: "Khel Yatra (Hindi)" },

    // Class 7 – Vocational Education
    { subject: "Vocational Education", class: 7, book_code: "gekb1", title: "Kaushal Bodh" },
    { subject: "Vocational Education", class: 7, book_code: "ghkb1", title: "Kaushal Bodh(Hindi)" },

    // Class 7 – Urdu
    { subject: "Urdu", class: 7, book_code: "guky1", title: "Khayal" },
    // Class 8 – Mathematics
    { subject: "Mathematics", class: 8, book_code: "hegp1", title: "Ganita Prakash" },

    // Class 8 – Arts
    { subject: "Arts", class: 8, book_code: "hekr1", title: "Kriti" },
    { subject: "Arts", class: 8, book_code: "hukr1", title: "Kriti (Urdu)" },

    // Class 8 – Hindi
    { subject: "Hindi", class: 8, book_code: "hhml1", title: "Malhar" },

    // Class 8 – Sanskrit
    { subject: "Sanskrit", class: 8, book_code: "hsde1", title: "Deepakam" },

    // Class 8 – Science
    { subject: "Science", class: 8, book_code: "hecu1", title: "Curiosity" },
    { subject: "Science", class: 8, book_code: "hhcu1", title: "Jigyasa" },

    // Class 8 – English
    { subject: "English", class: 8, book_code: "hepr1", title: "Poorvi" },

    // Class 8 – Social Science
    { subject: "Social Science", class: 8, book_code: "hees1", title: "Exploring Society India and Beyond" },

    // Class 8 – Physical Education and Well Being
    { subject: "Physical Education and Well Being", class: 8, book_code: "heky1", title: "Khel Yatra" },

    // Class 8 – Vocational Education
    { subject: "Vocational Education", class: 8, book_code: "hekb1", title: "Kaushal Bodh" },

    // Class 8 – Urdu
    { subject: "Urdu", class: 8, book_code: "huky1", title: "Khayal" },
    // Class 9 – English
    { subject: "English", class: 9, book_code: "iebe1", title: "Beehive" },
    { subject: "English", class: 9, book_code: "iemo1", title: "Moments Supplementary Reader" },
    { subject: "English", class: 9, book_code: "iewe1", title: "Words and Expressions 1" },

    // Class 9 – Hindi
    { subject: "Hindi", class: 9, book_code: "ihks1", title: "Kshitij" },
    { subject: "Hindi", class: 9, book_code: "ihsp1", title: "Sprash" },
    { subject: "Hindi", class: 9, book_code: "ihkr1", title: "Kritika" },
    { subject: "Hindi", class: 9, book_code: "ihsa1", title: "Sanchayan" },

    // Class 9 – Sanskrit
    { subject: "Sanskrit", class: 9, book_code: "ihsh1", title: "Shemushi Prathmo Bhag" },
    { subject: "Sanskrit", class: 9, book_code: "jhva1", title: "Vyakaranavithi" },
    { subject: "Sanskrit", class: 9, book_code: "isab1", title: "Abhyaswaan Bhav" },

    // Class 9 – Mathematics
    { subject: "Mathematics", class: 9, book_code: "iemh1", title: "Mathematics" },
    { subject: "Mathematics", class: 9, book_code: "ihmh1", title: "Ganit" },
    { subject: "Mathematics", class: 9, book_code: "iumh1", title: "Reyazi (Urdu)" },

    // Class 9 – Science
    { subject: "Science", class: 9, book_code: "iesc1", title: "Science" },
    { subject: "Science", class: 9, book_code: "ihsc1", title: "Vigyan" },
    { subject: "Science", class: 9, book_code: "iusc1", title: "Science (Urdu)" },

    // Class 9 – Urdu
    { subject: "Urdu", class: 9, book_code: "iugu1", title: "Gulzare-e-urdu" },
    { subject: "Urdu", class: 9, book_code: "iuna1", title: "Nawa-e-urdu" },
    { subject: "Urdu", class: 9, book_code: "iujp1", title: "Jaan Pahechan" },
    { subject: "Urdu", class: 9, book_code: "iudp1", title: "Door Pass" },
    { subject: "Urdu", class: 9, book_code: "iusr1", title: "Sab Rang" },
    { subject: "Urdu", class: 9, book_code: "iuau1", title: "Urdu ki Adabi Asnaf" },

    // Class 9 – Social Science
    { subject: "Social Science", class: 9, book_code: "iess4", title: "Democratic Politics" },
    { subject: "Social Science", class: 9, book_code: "ihss4", title: "Loktantrik Rajniti" },
    { subject: "Social Science", class: 9, book_code: "iess1", title: "Contemporary India" },
    { subject: "Social Science", class: 9, book_code: "ihss1", title: "Samkalin Bharat" },
    { subject: "Social Science", class: 9, book_code: "ihss2", title: "Arthashastra" },
    { subject: "Social Science", class: 9, book_code: "iess2", title: "Economics" },
    { subject: "Social Science", class: 9, book_code: "iess3", title: "India and the Contemporary World-I" },
    { subject: "Social Science", class: 9, book_code: "ihss3", title: "Bharat Aur Samkalin Vishwa-I" },
    { subject: "Social Science", class: 9, book_code: "iuss4", title: "Jamhuri Syasat (Urdu)" },
    { subject: "Social Science", class: 9, book_code: "iuhi1", title: "Hindustan Aur Asri Dunia-I (Urdu)" },
    { subject: "Social Science", class: 9, book_code: "iuss1", title: "Aasri Hindustan (Urdu)" },
    { subject: "Social Science", class: 9, book_code: "iuss2", title: "Mashiyat (Urdu)" },

    // Class 9 – Environmental Education
    { subject: "Environmental Education", class: 9, book_code: "iepb1", title: "Project Books" },

    // Class 9 – Health and Physical Education
    { subject: "Health and Physical Education", class: 9, book_code: "iehp1", title: "Health and Physical Education" },

    // Class 9 – Vocational
    { subject: "Vocational", class: 9, book_code: "ievc1", title: "Cashier" },
    { subject: "Vocational", class: 9, book_code: "ieva1", title: "Store Operations Assistant" },
    { subject: "Vocational", class: 9, book_code: "ievs1", title: "Solanceous Crop Cultivator" },
    { subject: "Vocational", class: 9, book_code: "ievt1", title: "Assistant Beauty Therapist" },
    { subject: "Vocational", class: 9, book_code: "ievw1", title: "Animal Health Workers (Agriculture)" },
    { subject: "Vocational", class: 9, book_code: "ieve1", title: "Hand Embroiderer (Addawala)" },
    { subject: "Vocational", class: 9, book_code: "ievh1", title: "Hand Embroiderer" },
    { subject: "Vocational", class: 9, book_code: "iepg1", title: "Plumber General" },
    { subject: "Vocational", class: 9, book_code: "ieeo1", title: "IT Domestic Data Entry Operator" },
    { subject: "Vocational", class: 9, book_code: "iees1", title: "Employability Skill" },

    // Class 9 – ICT
    { subject: "ICT", class: 9, book_code: "iict1", title: "Information and Communication Technology" },

    // Class 10 – Mathematics
    { subject: "Mathematics", class: 10, book_code: "jemh1", title: "Mathematics" },
    { subject: "Mathematics", class: 10, book_code: "jhmh1", title: "Ganit" },
    { subject: "Mathematics", class: 10, book_code: "jumh1", title: "Riyazi" },

    // Class 10 – Science
    { subject: "Science", class: 10, book_code: "jesc1", title: "Science" },
    { subject: "Science", class: 10, book_code: "jhsc1", title: "Vigyan" },
    { subject: "Science", class: 10, book_code: "jusc1", title: "Science (Urdu)" },

    // Class 10 – Hindi
    { subject: "Hindi", class: 10, book_code: "jhks1", title: "Kshitij-2" },
    { subject: "Hindi", class: 10, book_code: "jhsp1", title: "Sparsh" },
    { subject: "Hindi", class: 10, book_code: "jhsy1", title: "Sanchayan Bhag-2" },
    { subject: "Hindi", class: 10, book_code: "jhkr1", title: "Kritika" },

    // Class 10 – English
    { subject: "English", class: 10, book_code: "jeff1", title: "First Flight" },
    { subject: "English", class: 10, book_code: "jefp1", title: "Foot Prints Without Feet (Supplementary Reader)" },
    { subject: "English", class: 10, book_code: "jewe2", title: "Words and Expressions 2" },

    // Class 10 – Social Science
    { subject: "Social Science", class: 10, book_code: "jess1", title: "Contemporary India" },
    { subject: "Social Science", class: 10, book_code: "jhss1", title: "Samkalin Bharat" },
    { subject: "Social Science", class: 10, book_code: "juss1", title: "Aasri Hindustan-II" },
    { subject: "Social Science", class: 10, book_code: "jess2", title: "Understanding Economic Development" },
    { subject: "Social Science", class: 10, book_code: "jhss2", title: "Arthik Vikas ki Samajh" },
    { subject: "Social Science", class: 10, book_code: "juss2", title: "Maashi Taraqqui Ki Samajh" },
    { subject: "Social Science", class: 10, book_code: "jess3", title: "India and the Contemporary World-II" },
    { subject: "Social Science", class: 10, book_code: "jhss3", title: "Bharat Aur Samakalin Vishav-2" },
    { subject: "Social Science", class: 10, book_code: "juss3", title: "Hindustan Aur Asri Duniya" },
    { subject: "Social Science", class: 10, book_code: "jess4", title: "Democratic Politics" },
    { subject: "Social Science", class: 10, book_code: "jhss4", title: "Loktantrik Rajniti" },
    { subject: "Social Science", class: 10, book_code: "juss4", title: "Jamhuri Siyasat-II" },

    // Class 10 – Sanskrit
    { subject: "Sanskrit", class: 10, book_code: "jhsk1", title: "Shemushi" },
    { subject: "Sanskrit", class: 10, book_code: "jhva1", title: "Vyakaranavithi" },
    { subject: "Sanskrit", class: 10, book_code: "jsab1", title: "Abhyaswaan Bhav-II" },

    // Class 10 – Urdu
    { subject: "Urdu", class: 10, book_code: "juge1", title: "Gulzar-e-Urdu" },
    { subject: "Urdu", class: 10, book_code: "june1", title: "Nawa-e-Urdu" },
    { subject: "Urdu", class: 10, book_code: "jujp1", title: "Jaan Pahechan" },
    { subject: "Urdu", class: 10, book_code: "judp1", title: "Door-Paas" },
    { subject: "Urdu", class: 10, book_code: "jusr1", title: "Sab Rang" },

    // Class 10 – Environmental Education
    { subject: "Environmental Education", class: 10, book_code: "", title: "Project Books" },

    // Class 10 – Health and Physical Education
    { subject: "Health and Physical Education", class: 10, book_code: "jehp1", title: "Health and Physical Education" },

    { subject: "Sanskrit", class: 11, book_code: "khsk1", title: "Bhaswati" },
    { subject: "Sanskrit", class: 11, book_code: "khsk2", title: "Shashwati" },
    { subject: "Accountancy", class: 11, book_code: "keac1", title: "Financial Accounting-I" },
    { subject: "Accountancy", class: 11, book_code: "khac1", title: "Lekhashastra-I" },
    { subject: "Accountancy", class: 11, book_code: "keac2", title: "Accountancy-II" },
    { subject: "Accountancy", class: 11, book_code: "khac2", title: "Lekhashastra-II" },
    { subject: "Accountancy", class: 11, book_code: "kuac1", title: "Khatadari-I(Urdu)" },
    { subject: "Accountancy", class: 11, book_code: "kuac2", title: "Khatadari-II(Urdu)" },
    { subject: "Business Studies", class: 11, book_code: "kebs1", title: "Business Studies" },
    { subject: "Business Studies", class: 11, book_code: "khbs1", title: "Vyavsay Adhyanan" },
    { subject: "Business Studies", class: 11, book_code: "kubs1", title: "Karobari Mutalah I" },
    { subject: "Chemistry", class: 11, book_code: "kech1", title: "Chemistry Part-I" },
    { subject: "Chemistry", class: 11, book_code: "khch1", title: "Rasayan Vigyan bhag-I" },
    { subject: "Chemistry", class: 11, book_code: "kuch1", title: "Keemiya I" },
    { subject: "Chemistry", class: 11, book_code: "kech2", title: "Chemistry Part II" },
    { subject: "Chemistry", class: 11, book_code: "khch2", title: "Rasayan Vigyan bhag-II" },
    { subject: "Chemistry", class: 11, book_code: "kuch2", title: "Keemiya II" },
    { subject: "Mathematics", class: 11, book_code: "kemh1", title: "Mathematics" },
    { subject: "Mathematics", class: 11, book_code: "khmh1", title: "Ganit" },
    { subject: "Mathematics", class: 11, book_code: "kumh1", title: "Riyazi I" },
    { subject: "Vocational", class: 11, book_code: "kepc1", title: "Floriculturist- Protected Cultivation" },
    { subject: "Vocational", class: 11, book_code: "kevt1", title: "Vision Technician" },
    { subject: "Vocational", class: 11, book_code: "keoc1", title: "Floriculturist" },
    { subject: "Vocational", class: 11, book_code: "keda1", title: "General Duty Assistant" },
    { subject: "Vocational", class: 11, book_code: "kedf1", title: "Dairy Farmer Enterpreneur" },
    { subject: "Vocational", class: 11, book_code: "kefc1", title: "Floriculturist" },
    { subject: "Biology", class: 11, book_code: "kebo1", title: "Biology" },
    { subject: "Biology", class: 11, book_code: "khbo1", title: "Jeev Vigyan" },
    { subject: "Biology", class: 11, book_code: "kubo1", title: "Hayatiyaat" },
    { subject: "Home Science", class: 11, book_code: "kehe1", title: "Human Ecology and Family Sciences Part I" },
    { subject: "Home Science", class: 11, book_code: "kehe2", title: "Human Ecology and Family Sciences Part II" },
    { subject: "Home Science", class: 11, book_code: "khhe1", title: "Manav Paristhitiki evm pariwar vigyan Bhag-I" },
    { subject: "Home Science", class: 11, book_code: "khhe2", title: "Manav Paristhitiki evm pariwar vigyan Bhag-II" },
    { subject: "Home Science", class: 11, book_code: "kuim1", title: "Insani Mahauliyat aur Uloom e Khandandari-I" },
    { subject: "Home Science", class: 11, book_code: "kuim2", title: "Insani Mahauliyat aur Uloom e Khandandari Part-II" },
    { subject: "Psychology", class: 11, book_code: "kepy1", title: "Introduction to Psychology" },
    { subject: "Psychology", class: 11, book_code: "khpy1", title: "Manovigyan" },
    { subject: "Psychology", class: 11, book_code: "kupy1", title: "Nafsiyaat" },
    { subject: "Economics", class: 11, book_code: "keec1", title: "Indian Economic Development" },
    { subject: "Economics", class: 11, book_code: "kest1", title: "Statistics for Economics" },
    { subject: "Economics", class: 11, book_code: "khst1", title: "Sankhyiki" },
    { subject: "Economics", class: 11, book_code: "khec1", title: "Bhartiya Airthryavstha Ka Vikas" },
    { subject: "Economics", class: 11, book_code: "kuec1", title: "Hindustan Ki Moaashi Tarraqqi(Urdu)" },
    { subject: "Economics", class: 11, book_code: "kusc1", title: "Shumariyaat Bar-e-Mushiyat(Urdu)" },
    { subject: "Geography", class: 11, book_code: "kegy2", title: "Fundamental of Physical Geography" },
    { subject: "Geography", class: 11, book_code: "khgy2", title: "Bhautique Bhugol ke Mool Sidhant" },
    { subject: "Geography", class: 11, book_code: "kugy1", title: "Hindustan Tabi'i Mahaul (Urdu)" },
    { subject: "Geography", class: 11, book_code: "kegy3", title: "Pratical Work in Geography" },
    { subject: "Geography", class: 11, book_code: "khgy3", title: "Bhugol Main Prayogatmak Karya" },
    { subject: "Geography", class: 11, book_code: "kegy1", title: "India Physical Environment" },
    { subject: "Geography", class: 11, book_code: "khgy1", title: "Bhart Bhautik Paryabaran" },
    { subject: "Geography", class: 11, book_code: "kugy3", title: "Jughrafia Mein Aamli Kam (Urdu)" },
    { subject: "Geography", class: 11, book_code: "kugm1", title: "Tabi'i Jughraiya Ka Mubadiyat (Urdu)" },
    { subject: "Physics", class: 11, book_code: "keph1", title: "Physics Part-I" },
    { subject: "Physics", class: 11, book_code: "khph1", title: "Bhautiki-I" },
    { subject: "Physics", class: 11, book_code: "kuph1", title: "Tabiyaat-I" },
    { subject: "Physics", class: 11, book_code: "keph2", title: "Physics Part-II" },
    { subject: "Physics", class: 11, book_code: "khph2", title: "Bhautiki-II" },
    { subject: "Physics", class: 11, book_code: "kuph2", title: "Tabiyaat-II" },
    { subject: "Hindi", class: 11, book_code: "khat1", title: "Antra" },
    { subject: "Hindi", class: 11, book_code: "khar1", title: "Aroh" },
    { subject: "Hindi", class: 11, book_code: "khvt1", title: "Vitan" },
    { subject: "Hindi", class: 11, book_code: "khan1", title: "Antral" },
    { subject: "Sociology", class: 11, book_code: "kesy1", title: "Introducing Sociology" },
    { subject: "Sociology", class: 11, book_code: "khsy1", title: "Samaj Shastra Parichay-I" },
    { subject: "Sociology", class: 11, book_code: "kusy1", title: "Samajiyaat Ka Tarf" },
    { subject: "Sociology", class: 11, book_code: "kesy2", title: "Understanding Society" },
    { subject: "Sociology", class: 11, book_code: "khsy2", title: "Samaj ka Bodh" },
    { subject: "Sociology", class: 11, book_code: "kusy2", title: "Mutala-e-Muashira" },
    { subject: "English", class: 11, book_code: "keww1", title: "Woven Words" },
    { subject: "English", class: 11, book_code: "kehb1", title: "Hornbill" },
    { subject: "English", class: 11, book_code: "kesp1", title: "Snapshots Suppl.Reader English" },
    { subject: "Political Science", class: 11, book_code: "keps1", title: "Political Theory" },
    { subject: "Political Science", class: 11, book_code: "khps1", title: "Raajneeti Sidhant" },
    { subject: "Political Science", class: 11, book_code: "kups1", title: "Hindustani Aain aur Kaam" },
    { subject: "Political Science", class: 11, book_code: "keps2", title: "India Constitution at Work" },
    { subject: "Political Science", class: 11, book_code: "khps2", title: "Bharat ka Samvidhan Sidhant aur Vyavhar" },
    { subject: "Political Science", class: 11, book_code: "kups2", title: "Siyasi Nazaria" },
    { subject: "History", class: 11, book_code: "kehs1", title: "Themes in World History" },
    { subject: "History", class: 11, book_code: "khhs1", title: "Vishwa Itihas Ke Kuch Vishay" },
    { subject: "History", class: 11, book_code: "kuta1", title: "Tareekh-e-Alam per Mabni Mauzuaat Part I" },
    { subject: "Heritage Crafts", class: 11, book_code: "kehc1", title: "Living Craft Traditions of India" },
    { subject: "Heritage Crafts", class: 11, book_code: "kuhc1", title: "Hindustan me Dastkari Ki Riwayat" },
    { subject: "Graphics design", class: 11, book_code: "kegd1", title: "The story of graphic design" },
    { subject: "Graphics design", class: 11, book_code: "khgd1", title: "graphic design ek kahani" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "kect1", title: "CCT Part-I" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "kect2", title: "CCT Part-II" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "khct1", title: "Computer aur Sanchar Prodhogiki Part-I" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "khct2", title: "Computer aur Sanchar Prodhogiki Part-II" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "kuct1", title: "Computer Aur Muwaslati Technology I" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "kuct2", title: "Computer Aur Muwaslati Technology II" },
    { subject: "Fine Art", class: 11, book_code: "kefa1", title: "An Introduction to Indian Art Part-I" },
    { subject: "Fine Art", class: 11, book_code: "khfa1", title: "Bhartiya Kala ka parichay" },
    { subject: "Urdu", class: 11, book_code: "kuna1", title: "Nai Awaz" },
    { subject: "Urdu", class: 11, book_code: "kudh1", title: "Dhanak" },
    { subject: "Urdu", class: 11, book_code: "kuga1", title: "Gulistan e Adab" },
    { subject: "Urdu", class: 11, book_code: "kuku1", title: "Khyabane Urdu" },
    { subject: "Creative Writing and Translation", class: 11, book_code: "khsr1", title: "Srijan" },
    { subject: "Creative Writing and Translation", class: 11, book_code: "kucw1", title: "Takhleequi Jauhar" },
    { subject: "Informatics Practices", class: 11, book_code: "keip1", title: "Informatics Practices" },
    { subject: "Biotechnology", class: 11, book_code: "kebt1", title: "Biotechnology" },
    { subject: "Computer Science", class: 11, book_code: "kecs1", title: "Computer Science" },
    { subject: "Computer Science", class: 11, book_code: "kucs1", title: "Computer Science - Urdu" },
    { subject: "Health and Physical Education", class: 11, book_code: "kehp1", title: "Health and Physical Education" },
    { subject: "Knowledge Traditions Practices of India", class: 11, book_code: "keks1", title: "Knowledge Traditions Practices of India" },
    { subject: "Sangeet", class: 11, book_code: "khtp1", title: "Tabla evam Pakhawaj" },
    { subject: "Sangeet", class: 11, book_code: "khgv1", title: "Hindustani Sangeet Gayan Evam Vadan" },

    // Accountancy
    { subject: "Accountancy", class: 12, book_code: "leac1", title: "Accountancy-I" },
    { subject: "Accountancy", class: 12, book_code: "leac2", title: "Accountancy Part-II" },
    { subject: "Accountancy", class: 12, book_code: "lhac1", title: "Lekhashastra Part-I" },
    { subject: "Accountancy", class: 12, book_code: "lhac2", title: "Lekhashastra Part-II" },
    { subject: "Accountancy", class: 12, book_code: "leca1", title: "Computerised Accounting System" },
    { subject: "Accountancy", class: 12, book_code: "luac1", title: "Khatadari-I(Urdu)" },
    { subject: "Accountancy", class: 12, book_code: "luac2", title: "Khatadari-II(Urdu)" },

    // Mathematics
    { subject: "Mathematics", class: 12, book_code: "lemh1", title: "Mathematics Part-I" },
    { subject: "Mathematics", class: 12, book_code: "lemh2", title: "Mathematics Part-II" },
    { subject: "Mathematics", class: 12, book_code: "lhmh1", title: "Ganit-I" },
    { subject: "Mathematics", class: 12, book_code: "lhmh2", title: "Ganit-II" },
    { subject: "Mathematics", class: 12, book_code: "lumh1", title: "Riyazi-I" },
    { subject: "Mathematics", class: 12, book_code: "lumh2", title: "Riyazi-II" },

    // Physics
    { subject: "Physics", class: 12, book_code: "leph1", title: "Physics Part-I" },
    { subject: "Physics", class: 12, book_code: "leph2", title: "Physics Part-II" },
    { subject: "Physics", class: 12, book_code: "lhph1", title: "Bhautiki-I" },
    { subject: "Physics", class: 12, book_code: "lhph2", title: "Bhautiki-II" },
    { subject: "Physics", class: 12, book_code: "luph1", title: "Tabiyaat-I" },
    { subject: "Physics", class: 12, book_code: "luph2", title: "Tabiyaat-II" },

    // Hindi
    { subject: "Hindi", class: 12, book_code: "lhat1", title: "Antra" },
    { subject: "Hindi", class: 12, book_code: "lhar1", title: "Aroh" },
    { subject: "Hindi", class: 12, book_code: "lhvt1", title: "Vitan" },
    { subject: "Hindi", class: 12, book_code: "lhan1", title: "Antral Bhag 2" },

    // English
    { subject: "English", class: 12, book_code: "lekl1", title: "Kaliedoscope" },
    { subject: "English", class: 12, book_code: "lefl1", title: "Flamingo" },
    { subject: "English", class: 12, book_code: "levt1", title: "Vistas" },

    // Biotechnology
    { subject: "Biotechnology", class: 12, book_code: "lebt1", title: "Biotechnology" },

    // Biology
    { subject: "Biology", class: 12, book_code: "lebo1", title: "Biology" },
    { subject: "Biology", class: 12, book_code: "lhbo1", title: "Jeev Vigyan" },
    { subject: "Biology", class: 12, book_code: "lubo1", title: "Hayatiyaat" },

    // History
    { subject: "History", class: 12, book_code: "lehs1", title: "Themes in Indian History-I" },
    { subject: "History", class: 12, book_code: "lhhs1", title: "Bharatiya Itihas ke kuchh Vishay-I" },
    { subject: "History", class: 12, book_code: "lehs2", title: "Themes in Indian History-II" },
    { subject: "History", class: 12, book_code: "lhhs2", title: "Bharatiya Itihas ke kuchh Vishay-II" },
    { subject: "History", class: 12, book_code: "lehs3", title: "Themes in Indian History-III" },
    { subject: "History", class: 12, book_code: "lhhs3", title: "Bharatiya Itihas ke kuchh Vishay-III" },
    { subject: "History", class: 12, book_code: "luth1", title: "Tareekh-e-Hind ke Mauzuaat-I(Urdu)" },
    { subject: "History", class: 12, book_code: "luth2", title: "Tareekh-e-Hind ke Mauzuaat-II(Urdu)" },
    { subject: "History", class: 12, book_code: "luth3", title: "Tareekh-e-Hind ke Mauzuaat-III(Urdu)" },

    // Geography
    { subject: "Geography", class: 12, book_code: "legy1", title: "Fundamentals of Human Geography" },
    { subject: "Geography", class: 12, book_code: "legy3", title: "Practical Work in Geography Part II" },
    { subject: "Geography", class: 12, book_code: "lhgy1", title: "Manav Bhugol Ke Mool Sidhant" },
    { subject: "Geography", class: 12, book_code: "lhgy3", title: "Bhugol main peryojnatmak pryogatmak karye" },
    { subject: "Geography", class: 12, book_code: "legy2", title: "India -People And Economy" },
    { subject: "Geography", class: 12, book_code: "lhgy2", title: "Bharat log aur arthvyasastha(Bhugol)" },
    { subject: "Geography", class: 12, book_code: "lufh1", title: "Insani Jughrafia Ke Buniyadi Usool(Urdu)" },
    { subject: "Geography", class: 12, book_code: "lugy1", title: "Hindustan Awam Aur Maishat(Urdu)" },
    { subject: "Geography", class: 12, book_code: "lugy3", title: "Jughrafia Mein Aamli Kam(Urdu)" },

    // Psychology
    { subject: "Psychology", class: 12, book_code: "lepy1", title: "Psychology" },
    { subject: "Psychology", class: 12, book_code: "lhpy1", title: "Manovigyan" },
    { subject: "Psychology", class: 12, book_code: "lupy1", title: "Nafsiat(Urdu)" },

    // Sociology
    { subject: "Sociology", class: 12, book_code: "lesy1", title: "Indian Society" },
    { subject: "Sociology", class: 12, book_code: "lhsy1", title: "Bhartiya Samaj" },
    { subject: "Sociology", class: 12, book_code: "lesy2", title: "Social Change and Development in India" },
    { subject: "Sociology", class: 12, book_code: "lhsy2", title: "Bharat main Samajik Parivartan aur Vikas" },
    { subject: "Sociology", class: 12, book_code: "luis1", title: "Hindustani Samaj(Urdu)" },
    { subject: "Sociology", class: 12, book_code: "lusy2", title: "Hindustan Mein Samaji Tabdili Aur Taraqqi(Urdu)" },

    // Chemistry
    { subject: "Chemistry", class: 12, book_code: "lech1", title: "Chemistry-I" },
    { subject: "Chemistry", class: 12, book_code: "lech2", title: "Chemistry-II" },
    { subject: "Chemistry", class: 12, book_code: "lhch1", title: "Rasayan vigyan bhag I" },
    { subject: "Chemistry", class: 12, book_code: "lhch2", title: "Rasayan vigyan bhag II" },
    { subject: "Chemistry", class: 12, book_code: "luch1", title: "Keemiya-I" },
    { subject: "Chemistry", class: 12, book_code: "luch2", title: "Keemiya-II" },

    // Sanskrit
    { subject: "Sanskrit", class: 12, book_code: "lhsk1", title: "Bhaswati" },
    { subject: "Sanskrit", class: 12, book_code: "lhsk2", title: "Shaswati" },

    // Political Science
    { subject: "Political Science", class: 12, book_code: "leps1", title: "Contemporary World Politics" },
    { subject: "Political Science", class: 12, book_code: "lhps1", title: "Samkalin Vishwa Rajniti" },
    { subject: "Political Science", class: 12, book_code: "leps2", title: "Politics in India Since Independence" },
    { subject: "Political Science", class: 12, book_code: "lhps2", title: "Swatantra Bharat Mein Rajniti-II" },
    { subject: "Political Science", class: 12, book_code: "lups1", title: "Aasri Alami Siyasat(Urdu)" },
    { subject: "Political Science", class: 12, book_code: "luab1", title: "Azadi Ke Baad Hindustan Ki Siyasat(Urdu)" },

    // Home Science
    { subject: "Home Science", class: 12, book_code: "lehe1", title: "Human Ecology and Family Sciences Part I" },
    { subject: "Home Science", class: 12, book_code: "lehe2", title: "Human Ecology and Family Sciences Part II" },
    { subject: "Home Science", class: 12, book_code: "lehh1", title: "Manav Paristhitik avam Parivar Vigyan Bhag 1" },
    { subject: "Home Science", class: 12, book_code: "lehh2", title: "Manav Paristhitiki avam Parivar Vigyan Bhag 2" },

    // Economics
    { subject: "Economics", class: 12, book_code: "leec2", title: "Introductory Microeconomics" },
    { subject: "Economics", class: 12, book_code: "leec1", title: "Introductory Macroeconomics" },
    { subject: "Economics", class: 12, book_code: "lhec2", title: "Vyashthi Arthshasrta" },
    { subject: "Economics", class: 12, book_code: "lhec1", title: "Samashty Arthshastra Ek Parichay" },
    { subject: "Economics", class: 12, book_code: "lume1", title: "Juzvi Maashiyat ka Taruf(Urdu)" },
    { subject: "Economics", class: 12, book_code: "lume2", title: "Kulli Maashiyat Ka Taruf(Urdu)" },

    // Business Studies
    { subject: "Business Studies", class: 12, book_code: "lebs1", title: "Business Studies-I" },
    { subject: "Business Studies", class: 12, book_code: "lhbs1", title: "Vyavasai Adhyan-I" },
    { subject: "Business Studies", class: 12, book_code: "lebs2", title: "Business Studies-II" },
    { subject: "Business Studies", class: 12, book_code: "lhbs2", title: "Vyavasai Adhyan-II" },
    { subject: "Business Studies", class: 12, book_code: "lubs1", title: "Karobari Uloom I(Urdu)" },
    { subject: "Business Studies", class: 12, book_code: "lubs2", title: "Karobari Uloom II(Urdu)" },

    // Urdu
    { subject: "Urdu", class: 12, book_code: "luga1", title: "Gulistan-e- Adab" },
    { subject: "Urdu", class: 12, book_code: "luku1", title: "Khayaban-e-Urdu" },
    { subject: "Urdu", class: 12, book_code: "luna1", title: "Nai Awaz" },
    { subject: "Urdu", class: 12, book_code: "ludh1", title: "Dhanak" },

    // Heritage Crafts
    { subject: "Heritage Crafts", class: 12, book_code: "luhc1", title: "Hindustan me Dastkari Ki Riwayat" },
    { subject: "Heritage Crafts", class: 12, book_code: "lehc1", title: "Craft Tradition of India" },
    { subject: "Heritage Crafts", class: 12, book_code: "lhhc1", title: "Bharatiya Hastkla Ki Paramparayen" },

    // New Age Graphics Design
    { subject: "New Age Graphics Design", class: 12, book_code: "legd1", title: "New Age Graphics Design" },

    // Creative Writing & Translation
    { subject: "Creative Writing & Translation", class: 12, book_code: "lucw1", title: "Takhleequi Jauhar" },
    { subject: "Creative Writing & Translation", class: 12, book_code: "khsr2", title: "Srijan-II" },

    // Fine Art
    { subject: "Fine Art", class: 12, book_code: "lefa1", title: "An Introduction to Indian Art Part-II" },
    { subject: "Fine Art", class: 12, book_code: "lhfa1", title: "Bhartiya Kala ka Itihaas Bhag 2" },

    // Computer Science
    { subject: "Computer Science", class: 12, book_code: "lecs1", title: "Computer Science" },

    // Informatics Practices
    { subject: "Informatics Practices", class: 12, book_code: "leip1", title: "Informatics Practices" },

    // Sangeet
    { subject: "Sangeet", class: 12, book_code: "lstp1", title: "Tabla evam Pakhawaj" },
    { subject: "Sangeet", class: 12, book_code: "lsgv1", title: "Hindustani Sangeet Gayan Evam Vaadan" },
    // Hindi
    { subject: "Hindi", class: 13, book_code: "kham1", title: "Abhivyakti Aur Madhyam" },

    // Sanskrit
    { subject: "Sanskrit", class: 13, book_code: "klss1", title: "Sanskrit Sahitya parichay" },

    // Heritage Crafts
    { subject: "Heritage Crafts", class: 13, book_code: "mehc1", title: "Exploring Craft Tradition of India" },
    { subject: "Heritage Crafts", class: 13, book_code: "khhc1", title: "Bhartiya Hastkala Parmparaon ki Khoj" },

    // Urdu
    { subject: "Urdu", class: 13, book_code: "kuza1", title: "Zuban-O-Adab ki Tareekh" },
    { subject: "Urdu", class: 13, book_code: "juuq1", title: "Urdu Qwaid aur Insha" },
    { subject: "Urdu", class: 13, book_code: "kuiz1", title: "Izhar Aur Zara-e-Izhar" },

].filter(b => b.book_code[1] === 'e' || b.book_code[1] === 'h');

const subjectFilters = document.getElementById('subject-filters');
const classFilters = document.getElementById('class-filters');
const bookGrid = document.getElementById('book-grid');
const downloadBtn = document.getElementById('download-selected');

let selectedBooks = new Set();
let isSelecting = false;
let startCard = null;
let selectionMode = null;

let ignoreNextClick = false;

const booksToShow = 12;
let currentCount = 0;

// ----------------- INITIALIZATION -----------------
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderBooks(false);
    setupFilterToggles();
});

// ----------------- FILTERS -----------------
function renderFilters() {
    // Subjects
    [...new Set(BOOKS.map(b => b.subject))].forEach(s => {
        subjectFilters.innerHTML += `<label><input type="checkbox" value="${s}" data-type="subject">${s}</label>`;
    });
    // Classes
    [...new Set(BOOKS.map(b => b.class))].sort((a, b) => a - b)
        .forEach(c => classFilters.innerHTML += `<label><input type="checkbox" value="${c}" data-type="class">Class ${c}</label>`);

    document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.addEventListener('change', () => {
        renderBooks(false); // Reset count on filter change
    }));
}

// ----------------- BOOK GRID -----------------
function renderBooks(increment = false) {
    const subjects = [...document.querySelectorAll('[data-type=subject]:checked')].map(c => c.value);
    const classes = [...document.querySelectorAll('[data-type=class]:checked')].map(c => +c.value);

    const filtered = BOOKS.filter(b =>
        (!subjects.length || subjects.includes(b.subject)) &&
        (!classes.length || classes.includes(b.class))
    );

    if (increment) {
        currentCount += booksToShow;
    } else {
        currentCount = booksToShow;
    }

    const booksToDisplay = filtered.slice(0, currentCount);

    bookGrid.innerHTML = '';
    booksToDisplay.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.dataset.code = book.book_code;

        if (selectedBooks.has(book.book_code)) card.classList.add('selected');

        card.innerHTML = `
            <img src="${thumbUrl(book.book_code)}" alt="${book.title}">
            <div class="book-title">${book.title}</div>
            <div class="book-meta">${book.class} • ${book.subject}</div>
        `;
        bookGrid.appendChild(card);
    });

    renderLoadMore(filtered.length);
    attachSelectionEvents();
    updateDownloadButton();
}

function renderLoadMore(total) {
    let loadMoreBtn = document.getElementById('load-more-btn');

    if (currentCount >= total) {
        if (loadMoreBtn) loadMoreBtn.remove();
        return;
    }

    if (!loadMoreBtn) {
        loadMoreBtn = document.createElement('button');
        loadMoreBtn.id = 'load-more-btn';
        loadMoreBtn.textContent = 'Load More';
        loadMoreBtn.addEventListener('click', () => renderBooks(true));
        bookGrid.parentNode.appendChild(loadMoreBtn);
    }
}

// ----------------- SELECTION -----------------
function attachSelectionEvents() {
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        card.onmousedown = e => {
            if (e.button !== 0) return;

            isSelecting = true;
            startCard = card;
            e.preventDefault();
            ignoreNextClick = false;

            const isSelected = selectedBooks.has(card.dataset.code);

            if (!e.ctrlKey) {
                if (isSelected && !e.shiftKey) selectionMode = 'hold';
                else {
                    clearSelection(false);
                    selectedBooks.add(card.dataset.code);
                    card.classList.add('selected');
                    selectionMode = 'add';
                }
            } else {
                selectionMode = isSelected ? 'remove' : 'add';
                toggle(card, true);
            }
            updateDownloadButton();
        };

    });
}

function toggle(card, keepExisting = false) {
    const code = card.dataset.code;
    const isSelected = selectedBooks.has(code);

    if (!keepExisting && !isSelected) clearSelection(false);

    if (isSelected) {
        selectedBooks.delete(code);
        card.classList.remove('selected');
    } else {
        selectedBooks.add(code);
        card.classList.add('selected');
    }
    updateDownloadButton();
}

function clearSelection(update = true) {
    selectedBooks.clear();
    document.querySelectorAll('.book-card.selected').forEach(c => c.classList.remove('selected'));
    if (update) updateDownloadButton();
}

function updateDownloadButton() {
    downloadBtn.disabled = selectedBooks.size === 0;
}

// ----------------- SHIFT+CLICK RANGE SELECTION -----------------
bookGrid.addEventListener('click', e => {
    const card = e.target.closest('.book-card');
    if (!card) return;

    if (e.shiftKey && startCard) {
        e.preventDefault();
        const cards = [...document.querySelectorAll('.book-card')];
        const startIndex = cards.indexOf(startCard);
        const endIndex = cards.indexOf(card);
        const [from, to] = startIndex < endIndex ? [startIndex, endIndex] : [endIndex, startIndex];

        if (!e.ctrlKey) clearSelection(false);

        for (let i = from; i <= to; i++) {
            selectedBooks.add(cards[i].dataset.code);
            cards[i].classList.add('selected');
        }

    } else if (!e.ctrlKey) {
        startCard = card;
    }
    updateDownloadButton();
});


// ----------------- CLICK OUTSIDE TO DESELECT -----------------
document.addEventListener('click', e => {
    if (ignoreNextClick) {
        ignoreNextClick = false;
        return;
    }
    if (!e.target.closest('.book-card') &&
        !e.target.closest('#download-selected') &&
        !e.target.closest('#load-more-btn') &&
        !e.target.closest('.sidebar')) {
        clearSelection();
    }
});

// ----------------- CTRL+A -----------------
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        document.querySelectorAll('.book-card').forEach(card => {
            selectedBooks.add(card.dataset.code);
            card.classList.add('selected');
        });
        updateDownloadButton();
    }
});

// ----------------- DOWNLOAD -----------------
downloadBtn.addEventListener('click', () => {
    downloadBtn.disabled = true;
    [...selectedBooks].forEach((code, i) => {
        setTimeout(() => {
            const a = document.createElement('a');
            a.href = zipUrl(code);
            a.click();
            if (i === selectedBooks.size - 1) downloadBtn.disabled = false;
        }, i * 500);
    });
});

// ----------------- FILTER TOGGLE UI -----------------
function setupFilterToggles() {
    const toggles = document.querySelectorAll('.filter-toggle');
    toggles.forEach(toggle => {
        const targetId = toggle.getAttribute('data-target');
        const content = document.getElementById(targetId);
        const icon = toggle.querySelector('.toggle-icon');
        toggle.addEventListener('click', () => {
            content.classList.toggle('expanded');
            icon.classList.toggle('collapsed');
        });
    });
}


