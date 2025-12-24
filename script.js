// =========================================
// 1. Data Constants & Configuration
// =========================================
// Base URL for NCERT PDF downloads
const BASE = 'https://ncert.nic.in/textbook/pdf';
// Helper functions to generate URLs based on book code
const zipUrl = c => `${BASE}/${c}dd.zip`;   // Full book zip
const thumbUrl = c => `${BASE}/${c}cc.jpg`; // Cover image thumbnail

const BOOKS = [
    // ===== Class 1 · English =====
    { subject: "English", class: 1, book_code: "aemr1", title: "Mridang" },

    // ===== Class 1 · Mathematics =====
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

    // ===== Class 1 · Hindi =====
    { subject: "Hindi", class: 1, book_code: "ahsr1", title: "Sarangi" },

    // ===== Class 1 · Urdu =====
    { subject: "Urdu", class: 1, book_code: "aush1", title: "Shahnai" },

    // ===== Class 2 · Mathematics =====
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

    // ===== Class 2 · Hindi =====
    { subject: "Hindi", class: 2, book_code: "bhsr1", title: "Sarangi" },

    // ===== Class 2 · English =====
    { subject: "English", class: 2, book_code: "bemr1", title: "Mridang" },

    // ===== Class 2 · Urdu =====
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
    // ===== Class 4 · Mathematics =====
    { subject: "Mathematics", class: 4, book_code: "demm1", title: "Math-Mela" },
    { subject: "Mathematics", class: 4, book_code: "dhmm1", title: "Ganit Mela" },

    // ===== Class 4 · Hindi =====
    { subject: "Hindi", class: 4, book_code: "dhve1", title: "Veena" },

    // ===== Class 4 · The World Around Us =====
    { subject: "The World Around Us", class: 4, book_code: "deev1", title: "Our Wonderous World" },
    { subject: "The World Around Us", class: 4, book_code: "dhev1", title: "Hamara Adhbhut Sansar" },
    { subject: "The World Around Us", class: 4, book_code: "duev1", title: "Hamari Hairatangez Duniya" },
    { subject: "The World Around Us", class: 4, book_code: "dpev1", title: "Our Wonderous World (Punjabi)" },

    // ===== Class 4 · English =====
    { subject: "English", class: 4, book_code: "desa1", title: "Santoor" },

    // ===== Class 4 · Arts =====
    { subject: "Arts", class: 4, book_code: "debu1", title: "Bansuri" },
    { subject: "Arts", class: 4, book_code: "dhbu1", title: "Bansuri - I (Hindi)" },
    { subject: "Arts", class: 4, book_code: "dubu1", title: "Bansuri - I (Urdu)" },

    // ===== Class 4 · Physical Education and Well Being =====
    { subject: "Physical Education and Well Being", class: 4, book_code: "deky1", title: "Khel Yoga" },
    { subject: "Physical Education and Well Being", class: 4, book_code: "dhky1", title: "Khel Yoga (Hindi)" },

    // ===== Class 4 · Urdu =====
    { subject: "Urdu", class: 4, book_code: "dust1", title: "Sitaar" },

    // ===== Class 5 · Mathematics =====
    { subject: "Mathematics", class: 5, book_code: "eemm1", title: "Math-Mela" },

    // ===== Class 5 · Hindi =====
    { subject: "Hindi", class: 5, book_code: "ehve1", title: "Veena" },

    // ===== Class 5 · English =====
    { subject: "English", class: 5, book_code: "eesa1", title: "Santoor" },

    // ===== Class 5 · The World Around Us =====
    { subject: "The World Around Us", class: 5, book_code: "eeev1", title: "Our Wonderous World" },
    { subject: "The World Around Us", class: 5, book_code: "euev1", title: "Hamari Hairatangez Duniya" },

    // ===== Class 5 · Arts =====
    { subject: "Arts", class: 5, book_code: "eebu1", title: "Bansuri" },

    // ===== Class 5 · Physical Education and Well Being =====
    { subject: "Physical Education and Well Being", class: 5, book_code: "eeky1", title: "Khel Yoga" },

    // ===== Class 5 · Urdu =====
    { subject: "Urdu", class: 5, book_code: "eust1", title: "Sitaar" },
    // ===== Class 6 · Hindi =====
    { subject: "Hindi", class: 6, book_code: "fhml1", title: "Malhar" },

    // ===== Class 6 · Vocational =====
    { subject: "Vocational", class: 6, book_code: "fekb1", title: "Kaushal Bodh (English)" },
    { subject: "Vocational", class: 6, book_code: "fhkb1", title: "Kaushal Bodh (Hindi)" },
    { subject: "Vocational", class: 6, book_code: "fbnkb1", title: "Kaushal Bodh (Bengali)" },
    { subject: "Vocational", class: 6, book_code: "fbdkb1", title: "Kaushal Bodh (Bodo)" },
    { subject: "Vocational", class: 6, book_code: "fdgkb1", title: "Kaushal Bodh (Dogri)" },
    { subject: "Vocational", class: 6, book_code: "fkokb1", title: "Kaushal Bodh (Konkani)" },
    { subject: "Vocational", class: 6, book_code: "forkb1", title: "Kaushal Bodh (Odia)" },
    { subject: "Vocational", class: 6, book_code: "fpnkb1", title: "Kaushal Bodh (Punjabi)" },
    { subject: "Vocational", class: 6, book_code: "fmlkb1", title: "Kaushal Bodh (Malayalam)" },
    { subject: "Vocational", class: 6, book_code: "fknkb1", title: "Kaushal Bodh (Kannada)" },
    { subject: "Vocational", class: 6, book_code: "fmnkb1", title: "Kaushal Bodh (Manipuri)" },
    { subject: "Vocational", class: 6, book_code: "ftmkb1", title: "Kaushal Bodh (Tamil)" },
    { subject: "Vocational", class: 6, book_code: "fgjkb1", title: "Kaushal Bodh (Gujarati)" },
    { subject: "Vocational", class: 6, book_code: "fmtkb1", title: "Kaushal Bodh (Maithili)" },
    { subject: "Vocational", class: 6, book_code: "faskb1", title: "Kaushal Bodh (Assamese)" },
    { subject: "Vocational", class: 6, book_code: "fnpkb1", title: "Kaushal Bodh (Nepali)" },
    { subject: "Vocational", class: 6, book_code: "fskkb1", title: "Kaushal Bodh (Sanskrit)" },
    { subject: "Vocational", class: 6, book_code: "fkskb1", title: "Kaushal Bodh (Kashmiri)" },
    { subject: "Vocational", class: 6, book_code: "fmrkb1", title: "Kaushal Bodh (Marathi)" },
    { subject: "Vocational", class: 6, book_code: "ftlkb1", title: "Kaushal Bodh (Telugu)" },
    { subject: "Vocational", class: 6, book_code: "fsnkb1", title: "Kaushal Bodh (Santhali)" },
    { subject: "Vocational", class: 6, book_code: "fsikb1", title: "Kaushal Bodh (Sindhi)" },

    // ===== Class 6 · Physical Education and Well Being =====
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

    // ===== Class 6 · English =====
    { subject: "English", class: 6, book_code: "fepr1", title: "Poorvi" },

    // ===== Class 6 · Mathematics =====
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

    // ===== Class 6 · Sanskrit =====
    { subject: "Sanskrit", class: 6, book_code: "fsde1", title: "Deepakam" },

    // ===== Class 6 · Science =====
    { subject: "Science", class: 6, book_code: "fecu1", title: "Curiosity (English)" },
    { subject: "Science", class: 6, book_code: "fhcu1", title: "Jigyasa (Hindi)" },
    { subject: "Science", class: 6, book_code: "fucu1", title: "Tajassus (Urdu)" },

    // ===== Class 6 · Arts =====
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

    // ===== Class 6 · Urdu =====
    { subject: "Urdu", class: 6, book_code: "fuky1", title: "Khayal" },
    // ===== Class 7 · Mathematics =====
    { subject: "Mathematics", class: 7, book_code: "gegp1", title: "Ganita Prakash" },
    { subject: "Mathematics", class: 7, book_code: "gegp2", title: "Ganita Prakash-II" },
    { subject: "Mathematics", class: 7, book_code: "ghgp1", title: "Ganita Prakash(Hindi)" },
    { subject: "Mathematics", class: 7, book_code: "gugp1", title: "Ganita Prakash(Urdu)" },

    // ===== Class 7 · Arts =====
    { subject: "Arts", class: 7, book_code: "gekr1", title: "Kriti" },
    { subject: "Arts", class: 7, book_code: "ghkr1", title: "Kriti-I (Hindi)" },

    // ===== Class 7 · Hindi =====
    { subject: "Hindi", class: 7, book_code: "ghml1", title: "Malhar" },

    // ===== Class 7 · Sanskrit =====
    { subject: "Sanskrit", class: 7, book_code: "gsde1", title: "Deepakam" },

    // ===== Class 7 · Science =====
    { subject: "Science", class: 7, book_code: "gecu1", title: "Curiosity" },
    { subject: "Science", class: 7, book_code: "ghcu1", title: "Jigyasa" },
    { subject: "Science", class: 7, book_code: "gucu1", title: "Tajassus" },

    // ===== Class 7 · English =====
    { subject: "English", class: 7, book_code: "gepr1", title: "Poorvi" },

    // ===== Class 7 · Social Science =====
    { subject: "Social Science", class: 7, book_code: "gees1", title: "Exploring Society India and Beyond" },
    { subject: "Social Science", class: 7, book_code: "ghes1", title: "Samaj Ka Aadhyan: Bharat or uske aage" },
    { subject: "Social Science", class: 7, book_code: "gees2", title: "Exploring Society India and Beyond Part 2" },

    // ===== Class 7 · Physical Education and Well Being =====
    { subject: "Physical Education and Well Being", class: 7, book_code: "geky1", title: "Khel Yatra" },
    { subject: "Physical Education and Well Being", class: 7, book_code: "gukl1", title: "Khel Yatra (Urdu)" },
    { subject: "Physical Education and Well Being", class: 7, book_code: "ghky1", title: "Khel Yatra (Hindi)" },

    // ===== Class 7 · Vocational =====
    { subject: "Vocational", class: 7, book_code: "gekb1", title: "Kaushal Bodh" },
    { subject: "Vocational", class: 7, book_code: "ghkb1", title: "Kaushal Bodh(Hindi)" },

    // ===== Class 7 · Urdu =====
    { subject: "Urdu", class: 7, book_code: "guky1", title: "Khayal" },
    // ===== Class 8 · Mathematics =====
    { subject: "Mathematics", class: 8, book_code: "hegp1", title: "Ganita Prakash" },

    // ===== Class 8 · Arts =====
    { subject: "Arts", class: 8, book_code: "hekr1", title: "Kriti" },
    { subject: "Arts", class: 8, book_code: "hukr1", title: "Kriti (Urdu)" },

    // ===== Class 8 · Hindi =====
    { subject: "Hindi", class: 8, book_code: "hhml1", title: "Malhar" },

    // ===== Class 8 · Sanskrit =====
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

    // Class 8 – Vocational
    { subject: "Vocational", class: 8, book_code: "hekb1", title: "Kaushal Bodh" },

    // Class 8 – Urdu
    { subject: "Urdu", class: 8, book_code: "huky1", title: "Khayal" },
    // ===== Class 9 · English =====
    { subject: "English", class: 9, book_code: "iebe1", title: "Beehive" },
    { subject: "English", class: 9, book_code: "iemo1", title: "Moments Supplementary Reader" },
    { subject: "English", class: 9, book_code: "iewe1", title: "Words and Expressions 1" },

    // ===== Class 9 · Hindi =====
    { subject: "Hindi", class: 9, book_code: "ihks1", title: "Kshitij" },
    { subject: "Hindi", class: 9, book_code: "ihsp1", title: "Sprash" },
    { subject: "Hindi", class: 9, book_code: "ihkr1", title: "Kritika" },
    { subject: "Hindi", class: 9, book_code: "ihsa1", title: "Sanchayan" },

    // ===== Class 9 · Sanskrit =====
    { subject: "Sanskrit", class: 9, book_code: "ihsh1", title: "Shemushi Prathmo Bhag" },
    { subject: "Sanskrit", class: 9, book_code: "jhva1", title: "Vyakaranavithi" },
    { subject: "Sanskrit", class: 9, book_code: "isab1", title: "Abhyaswaan Bhav" },

    // ===== Class 9 · Mathematics =====
    { subject: "Mathematics", class: 9, book_code: "iemh1", title: "Mathematics" },
    { subject: "Mathematics", class: 9, book_code: "ihmh1", title: "Ganit" },
    { subject: "Mathematics", class: 9, book_code: "iumh1", title: "Reyazi (Urdu)" },

    // ===== Class 9 · Science =====
    { subject: "Science", class: 9, book_code: "iesc1", title: "Science" },
    { subject: "Science", class: 9, book_code: "ihsc1", title: "Vigyan" },
    { subject: "Science", class: 9, book_code: "iusc1", title: "Science (Urdu)" },

    // ===== Class 9 · Urdu =====
    { subject: "Urdu", class: 9, book_code: "iugu1", title: "Gulzare-e-urdu" },
    { subject: "Urdu", class: 9, book_code: "iuna1", title: "Nawa-e-urdu" },
    { subject: "Urdu", class: 9, book_code: "iujp1", title: "Jaan Pahechan" },
    { subject: "Urdu", class: 9, book_code: "iudp1", title: "Door Pass" },
    { subject: "Urdu", class: 9, book_code: "iusr1", title: "Sab Rang" },
    { subject: "Urdu", class: 9, book_code: "iuau1", title: "Urdu ki Adabi Asnaf" },

    // ===== Class 9 · Social Science =====
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

    // ===== Class 9 · Environmental Education =====
    { subject: "Environmental Education", class: 9, book_code: "iepb1", title: "Project Books" },

    // ===== Class 9 · Health and Physical Education =====
    { subject: "Health and Physical Education", class: 9, book_code: "iehp1", title: "Health and Physical Education" },

    // ===== Class 9 · Vocational =====
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

    // ===== Class 9 · ICT =====
    { subject: "ICT", class: 9, book_code: "iict1", title: "Information and Communication Technology" },

    // ===== Class 10 · Mathematics =====
    { subject: "Mathematics", class: 10, book_code: "jemh1", title: "Mathematics" },
    { subject: "Mathematics", class: 10, book_code: "jhmh1", title: "Ganit" },
    { subject: "Mathematics", class: 10, book_code: "jumh1", title: "Riyazi" },

    // ===== Class 10 · Science =====
    { subject: "Science", class: 10, book_code: "jesc1", title: "Science" },
    { subject: "Science", class: 10, book_code: "jhsc1", title: "Vigyan" },
    { subject: "Science", class: 10, book_code: "jusc1", title: "Science (Urdu)" },

    // ===== Class 10 · Hindi =====
    { subject: "Hindi", class: 10, book_code: "jhks1", title: "Kshitij-2" },
    { subject: "Hindi", class: 10, book_code: "jhsp1", title: "Sparsh" },
    { subject: "Hindi", class: 10, book_code: "jhsy1", title: "Sanchayan Bhag-2" },
    { subject: "Hindi", class: 10, book_code: "jhkr1", title: "Kritika" },

    // ===== Class 10 · English =====
    { subject: "English", class: 10, book_code: "jeff1", title: "First Flight" },
    { subject: "English", class: 10, book_code: "jefp1", title: "Foot Prints Without Feet (Supplementary Reader)" },
    { subject: "English", class: 10, book_code: "jewe2", title: "Words and Expressions 2" },

    // ===== Class 10 · Social Science =====
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

    // ===== Class 10 · Sanskrit =====
    { subject: "Sanskrit", class: 10, book_code: "jhsk1", title: "Shemushi" },
    { subject: "Sanskrit", class: 10, book_code: "jhva1", title: "Vyakaranavithi" },
    { subject: "Sanskrit", class: 10, book_code: "jsab1", title: "Abhyaswaan Bhav-II" },

    // ===== Class 10 · Urdu =====
    { subject: "Urdu", class: 10, book_code: "juge1", title: "Gulzar-e-Urdu" },
    { subject: "Urdu", class: 10, book_code: "june1", title: "Nawa-e-Urdu" },
    { subject: "Urdu", class: 10, book_code: "jujp1", title: "Jaan Pahechan" },
    { subject: "Urdu", class: 10, book_code: "judp1", title: "Door-Paas" },
    { subject: "Urdu", class: 10, book_code: "jusr1", title: "Sab Rang" },

    // ===== Class 10 · Environmental Education =====
    { subject: "Environmental Education", class: 10, book_code: "", title: "Project Books" },

    // ===== Class 10 · Health and Physical Education =====
    { subject: "Health and Physical Education", class: 10, book_code: "jehp1", title: "Health and Physical Education" },

    // ===== Class 11 · Sanskrit =====
    { subject: "Sanskrit", class: 11, book_code: "khsk1", title: "Bhaswati" },
    { subject: "Sanskrit", class: 11, book_code: "khsk2", title: "Shashwati" },
    // ===== Class 11 · Accountancy =====
    { subject: "Accountancy", class: 11, book_code: "keac1", title: "Financial Accounting-I" },
    { subject: "Accountancy", class: 11, book_code: "khac1", title: "Lekhashastra-I" },
    { subject: "Accountancy", class: 11, book_code: "keac2", title: "Accountancy-II" },
    { subject: "Accountancy", class: 11, book_code: "khac2", title: "Lekhashastra-II" },
    { subject: "Accountancy", class: 11, book_code: "kuac1", title: "Khatadari-I(Urdu)" },
    { subject: "Accountancy", class: 11, book_code: "kuac2", title: "Khatadari-II(Urdu)" },
    // ===== Class 11 · Business Studies =====
    { subject: "Business Studies", class: 11, book_code: "kebs1", title: "Business Studies" },
    { subject: "Business Studies", class: 11, book_code: "khbs1", title: "Vyavsay Adhyanan" },
    { subject: "Business Studies", class: 11, book_code: "kubs1", title: "Karobari Mutalah I" },
    // ===== Class 11 · Chemistry =====
    { subject: "Chemistry", class: 11, book_code: "kech1", title: "Chemistry Part-I" },
    { subject: "Chemistry", class: 11, book_code: "khch1", title: "Rasayan Vigyan bhag-I" },
    { subject: "Chemistry", class: 11, book_code: "kuch1", title: "Keemiya I" },
    { subject: "Chemistry", class: 11, book_code: "kech2", title: "Chemistry Part II" },
    { subject: "Chemistry", class: 11, book_code: "khch2", title: "Rasayan Vigyan bhag-II" },
    { subject: "Chemistry", class: 11, book_code: "kuch2", title: "Keemiya II" },
    // ===== Class 11 · Mathematics =====
    { subject: "Mathematics", class: 11, book_code: "kemh1", title: "Mathematics" },
    { subject: "Mathematics", class: 11, book_code: "khmh1", title: "Ganit" },
    { subject: "Mathematics", class: 11, book_code: "kumh1", title: "Riyazi I" },
    // ===== Class 11 · Vocational =====
    { subject: "Vocational", class: 11, book_code: "kepc1", title: "Floriculturist- Protected Cultivation" },
    { subject: "Vocational", class: 11, book_code: "kevt1", title: "Vision Technician" },
    { subject: "Vocational", class: 11, book_code: "keoc1", title: "Floriculturist" },
    { subject: "Vocational", class: 11, book_code: "keda1", title: "General Duty Assistant" },
    { subject: "Vocational", class: 11, book_code: "kedf1", title: "Dairy Farmer Enterpreneur" },
    { subject: "Vocational", class: 11, book_code: "kefc1", title: "Floriculturist" },
    // ===== Class 11 · Biology =====
    { subject: "Biology", class: 11, book_code: "kebo1", title: "Biology" },
    { subject: "Biology", class: 11, book_code: "khbo1", title: "Jeev Vigyan" },
    { subject: "Biology", class: 11, book_code: "kubo1", title: "Hayatiyaat" },
    // ===== Class 11 · Home Science =====
    { subject: "Home Science", class: 11, book_code: "kehe1", title: "Human Ecology and Family Sciences Part I" },
    { subject: "Home Science", class: 11, book_code: "kehe2", title: "Human Ecology and Family Sciences Part II" },
    { subject: "Home Science", class: 11, book_code: "khhe1", title: "Manav Paristhitiki evm pariwar vigyan Bhag-I" },
    { subject: "Home Science", class: 11, book_code: "khhe2", title: "Manav Paristhitiki evm pariwar vigyan Bhag-II" },
    { subject: "Home Science", class: 11, book_code: "kuim1", title: "Insani Mahauliyat aur Uloom e Khandandari-I" },
    { subject: "Home Science", class: 11, book_code: "kuim2", title: "Insani Mahauliyat aur Uloom e Khandandari Part-II" },
    // ===== Class 11 · Psychology =====
    { subject: "Psychology", class: 11, book_code: "kepy1", title: "Introduction to Psychology" },
    { subject: "Psychology", class: 11, book_code: "khpy1", title: "Manovigyan" },
    { subject: "Psychology", class: 11, book_code: "kupy1", title: "Nafsiyaat" },
    // ===== Class 11 · Economics =====
    { subject: "Economics", class: 11, book_code: "keec1", title: "Indian Economic Development" },
    { subject: "Economics", class: 11, book_code: "kest1", title: "Statistics for Economics" },
    { subject: "Economics", class: 11, book_code: "khst1", title: "Sankhyiki" },
    { subject: "Economics", class: 11, book_code: "khec1", title: "Bhartiya Airthryavstha Ka Vikas" },
    { subject: "Economics", class: 11, book_code: "kuec1", title: "Hindustan Ki Moaashi Tarraqqi(Urdu)" },
    { subject: "Economics", class: 11, book_code: "kusc1", title: "Shumariyaat Bar-e-Mushiyat(Urdu)" },
    // ===== Class 11 · Geography =====
    { subject: "Geography", class: 11, book_code: "kegy2", title: "Fundamental of Physical Geography" },
    { subject: "Geography", class: 11, book_code: "khgy2", title: "Bhautique Bhugol ke Mool Sidhant" },
    { subject: "Geography", class: 11, book_code: "kugy1", title: "Hindustan Tabi'i Mahaul (Urdu)" },
    { subject: "Geography", class: 11, book_code: "kegy3", title: "Pratical Work in Geography" },
    { subject: "Geography", class: 11, book_code: "khgy3", title: "Bhugol Main Prayogatmak Karya" },
    { subject: "Geography", class: 11, book_code: "kegy1", title: "India Physical Environment" },
    { subject: "Geography", class: 11, book_code: "khgy1", title: "Bhart Bhautik Paryabaran" },
    { subject: "Geography", class: 11, book_code: "kugy3", title: "Jughrafia Mein Aamli Kam (Urdu)" },
    { subject: "Geography", class: 11, book_code: "kugm1", title: "Tabi'i Jughraiya Ka Mubadiyat (Urdu)" },
    // ===== Class 11 · Physics =====
    { subject: "Physics", class: 11, book_code: "keph1", title: "Physics Part-I" },
    { subject: "Physics", class: 11, book_code: "khph1", title: "Bhautiki-I" },
    { subject: "Physics", class: 11, book_code: "kuph1", title: "Tabiyaat-I" },
    { subject: "Physics", class: 11, book_code: "keph2", title: "Physics Part-II" },
    { subject: "Physics", class: 11, book_code: "khph2", title: "Bhautiki-II" },
    { subject: "Physics", class: 11, book_code: "kuph2", title: "Tabiyaat-II" },
    // ===== Class 11 · Hindi =====
    { subject: "Hindi", class: 11, book_code: "khat1", title: "Antra" },
    { subject: "Hindi", class: 11, book_code: "khar1", title: "Aroh" },
    { subject: "Hindi", class: 11, book_code: "khvt1", title: "Vitan" },
    { subject: "Hindi", class: 11, book_code: "khan1", title: "Antral" },
    // ===== Class 11 · Sociology =====
    { subject: "Sociology", class: 11, book_code: "kesy1", title: "Introducing Sociology" },
    { subject: "Sociology", class: 11, book_code: "khsy1", title: "Samaj Shastra Parichay-I" },
    { subject: "Sociology", class: 11, book_code: "kusy1", title: "Samajiyaat Ka Tarf" },
    { subject: "Sociology", class: 11, book_code: "kesy2", title: "Understanding Society" },
    { subject: "Sociology", class: 11, book_code: "khsy2", title: "Samaj ka Bodh" },
    { subject: "Sociology", class: 11, book_code: "kusy2", title: "Mutala-e-Muashira" },
    // ===== Class 11 · English =====
    { subject: "English", class: 11, book_code: "keww1", title: "Woven Words" },
    { subject: "English", class: 11, book_code: "kehb1", title: "Hornbill" },
    { subject: "English", class: 11, book_code: "kesp1", title: "Snapshots Suppl.Reader English" },
    // ===== Class 11 · Political Science =====
    { subject: "Political Science", class: 11, book_code: "keps1", title: "Political Theory" },
    { subject: "Political Science", class: 11, book_code: "khps1", title: "Raajneeti Sidhant" },
    { subject: "Political Science", class: 11, book_code: "kups1", title: "Hindustani Aain aur Kaam" },
    { subject: "Political Science", class: 11, book_code: "keps2", title: "India Constitution at Work" },
    { subject: "Political Science", class: 11, book_code: "khps2", title: "Bharat ka Samvidhan Sidhant aur Vyavhar" },
    { subject: "Political Science", class: 11, book_code: "kups2", title: "Siyasi Nazaria" },
    // ===== Class 11 · History =====
    { subject: "History", class: 11, book_code: "kehs1", title: "Themes in World History" },
    { subject: "History", class: 11, book_code: "khhs1", title: "Vishwa Itihas Ke Kuch Vishay" },
    { subject: "History", class: 11, book_code: "kuta1", title: "Tareekh-e-Alam per Mabni Mauzuaat Part I" },
    // ===== Class 11 · Heritage Crafts =====
    { subject: "Heritage Crafts", class: 11, book_code: "kehc1", title: "Living Craft Traditions of India" },
    { subject: "Heritage Crafts", class: 11, book_code: "kuhc1", title: "Hindustan me Dastkari Ki Riwayat" },
    // ===== Class 11 · Graphics Design =====
    { subject: "Graphics design", class: 11, book_code: "kegd1", title: "The story of graphic design" },
    { subject: "Graphics design", class: 11, book_code: "khgd1", title: "graphic design ek kahani" },
    // ===== Class 11 · Computers and Communication Technology =====
    { subject: "Computers and Communication Technology", class: 11, book_code: "kect1", title: "CCT Part-I" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "kect2", title: "CCT Part-II" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "khct1", title: "Computer aur Sanchar Prodhogiki Part-I" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "khct2", title: "Computer aur Sanchar Prodhogiki Part-II" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "kuct1", title: "Computer Aur Muwaslati Technology I" },
    { subject: "Computers and Communication Technology", class: 11, book_code: "kuct2", title: "Computer Aur Muwaslati Technology II" },
    // ===== Class 11 · Fine Art =====
    { subject: "Fine Art", class: 11, book_code: "kefa1", title: "An Introduction to Indian Art Part-I" },
    { subject: "Fine Art", class: 11, book_code: "khfa1", title: "Bhartiya Kala ka parichay" },
    // ===== Class 11 · Urdu =====
    { subject: "Urdu", class: 11, book_code: "kuna1", title: "Nai Awaz" },
    { subject: "Urdu", class: 11, book_code: "kudh1", title: "Dhanak" },
    { subject: "Urdu", class: 11, book_code: "kuga1", title: "Gulistan e Adab" },
    { subject: "Urdu", class: 11, book_code: "kuku1", title: "Khyabane Urdu" },
    // ===== Class 11 · Creative Writing and Translation =====
    { subject: "Creative Writing and Translation", class: 11, book_code: "khsr1", title: "Srijan" },
    { subject: "Creative Writing and Translation", class: 11, book_code: "kucw1", title: "Takhleequi Jauhar" },
    // ===== Class 11 · Informatics Practices =====
    { subject: "Informatics Practices", class: 11, book_code: "keip1", title: "Informatics Practices" },
    // ===== Class 11 · Biotechnology =====
    { subject: "Biotechnology", class: 11, book_code: "kebt1", title: "Biotechnology" },
    // ===== Class 11 · Computer Science =====
    { subject: "Computer Science", class: 11, book_code: "kecs1", title: "Computer Science" },
    { subject: "Computer Science", class: 11, book_code: "kucs1", title: "Computer Science - Urdu" },
    // ===== Class 11 · Health and Physical Education =====
    { subject: "Health and Physical Education", class: 11, book_code: "kehp1", title: "Health and Physical Education" },
    // ===== Class 11 · Knowledge Traditions Practices of India =====
    { subject: "Knowledge Traditions Practices of India", class: 11, book_code: "keks1", title: "Knowledge Traditions Practices of India" },
    // ===== Class 11 · Sangeet =====
    { subject: "Sangeet", class: 11, book_code: "khtp1", title: "Tabla evam Pakhawaj" },
    { subject: "Sangeet", class: 11, book_code: "khgv1", title: "Hindustani Sangeet Gayan Evam Vadan" },

    // ===== Class 12 · Accountancy =====
    { subject: "Accountancy", class: 12, book_code: "leac1", title: "Accountancy-I" },
    { subject: "Accountancy", class: 12, book_code: "leac2", title: "Accountancy Part-II" },
    { subject: "Accountancy", class: 12, book_code: "lhac1", title: "Lekhashastra Part-I" },
    { subject: "Accountancy", class: 12, book_code: "lhac2", title: "Lekhashastra Part-II" },
    { subject: "Accountancy", class: 12, book_code: "leca1", title: "Computerised Accounting System" },
    { subject: "Accountancy", class: 12, book_code: "luac1", title: "Khatadari-I(Urdu)" },
    { subject: "Accountancy", class: 12, book_code: "luac2", title: "Khatadari-II(Urdu)" },

    // ===== Class 12 · Mathematics =====
    { subject: "Mathematics", class: 12, book_code: "lemh1", title: "Mathematics Part-I" },
    { subject: "Mathematics", class: 12, book_code: "lemh2", title: "Mathematics Part-II" },
    { subject: "Mathematics", class: 12, book_code: "lhmh1", title: "Ganit-I" },
    { subject: "Mathematics", class: 12, book_code: "lhmh2", title: "Ganit-II" },
    { subject: "Mathematics", class: 12, book_code: "lumh1", title: "Riyazi-I" },
    { subject: "Mathematics", class: 12, book_code: "lumh2", title: "Riyazi-II" },

    // ===== Class 12 · Physics =====
    { subject: "Physics", class: 12, book_code: "leph1", title: "Physics Part-I" },
    { subject: "Physics", class: 12, book_code: "leph2", title: "Physics Part-II" },
    { subject: "Physics", class: 12, book_code: "lhph1", title: "Bhautiki-I" },
    { subject: "Physics", class: 12, book_code: "lhph2", title: "Bhautiki-II" },
    { subject: "Physics", class: 12, book_code: "luph1", title: "Tabiyaat-I" },
    { subject: "Physics", class: 12, book_code: "luph2", title: "Tabiyaat-II" },

    // ===== Class 12 · Hindi =====
    { subject: "Hindi", class: 12, book_code: "lhat1", title: "Antra" },
    { subject: "Hindi", class: 12, book_code: "lhar1", title: "Aroh" },
    { subject: "Hindi", class: 12, book_code: "lhvt1", title: "Vitan" },
    { subject: "Hindi", class: 12, book_code: "lhan1", title: "Antral Bhag 2" },

    // ===== Class 12 · English =====
    { subject: "English", class: 12, book_code: "lekl1", title: "Kaliedoscope" },
    { subject: "English", class: 12, book_code: "lefl1", title: "Flamingo" },
    { subject: "English", class: 12, book_code: "levt1", title: "Vistas" },

    // ===== Class 12 · Biotechnology =====
    { subject: "Biotechnology", class: 12, book_code: "lebt1", title: "Biotechnology" },

    // ===== Class 12 · Biology =====
    { subject: "Biology", class: 12, book_code: "lebo1", title: "Biology" },
    { subject: "Biology", class: 12, book_code: "lhbo1", title: "Jeev Vigyan" },
    { subject: "Biology", class: 12, book_code: "lubo1", title: "Hayatiyaat" },

    // ===== Class 12 · History =====
    { subject: "History", class: 12, book_code: "lehs1", title: "Themes in Indian History-I" },
    { subject: "History", class: 12, book_code: "lhhs1", title: "Bharatiya Itihas ke kuchh Vishay-I" },
    { subject: "History", class: 12, book_code: "lehs2", title: "Themes in Indian History-II" },
    { subject: "History", class: 12, book_code: "lhhs2", title: "Bharatiya Itihas ke kuchh Vishay-II" },
    { subject: "History", class: 12, book_code: "lehs3", title: "Themes in Indian History-III" },
    { subject: "History", class: 12, book_code: "lhhs3", title: "Bharatiya Itihas ke kuchh Vishay-III" },
    { subject: "History", class: 12, book_code: "luth1", title: "Tareekh-e-Hind ke Mauzuaat-I(Urdu)" },
    { subject: "History", class: 12, book_code: "luth2", title: "Tareekh-e-Hind ke Mauzuaat-II(Urdu)" },
    { subject: "History", class: 12, book_code: "luth3", title: "Tareekh-e-Hind ke Mauzuaat-III(Urdu)" },

    // ===== Class 12 · Geography =====
    { subject: "Geography", class: 12, book_code: "legy1", title: "Fundamentals of Human Geography" },
    { subject: "Geography", class: 12, book_code: "legy3", title: "Practical Work in Geography Part II" },
    { subject: "Geography", class: 12, book_code: "lhgy1", title: "Manav Bhugol Ke Mool Sidhant" },
    { subject: "Geography", class: 12, book_code: "lhgy3", title: "Bhugol main peryojnatmak pryogatmak karye" },
    { subject: "Geography", class: 12, book_code: "legy2", title: "India -People And Economy" },
    { subject: "Geography", class: 12, book_code: "lhgy2", title: "Bharat log aur arthvyasastha(Bhugol)" },
    { subject: "Geography", class: 12, book_code: "lufh1", title: "Insani Jughrafia Ke Buniyadi Usool(Urdu)" },
    { subject: "Geography", class: 12, book_code: "lugy1", title: "Hindustan Awam Aur Maishat(Urdu)" },
    { subject: "Geography", class: 12, book_code: "lugy3", title: "Jughrafia Mein Aamli Kam(Urdu)" },

    // ===== Class 12 · Psychology =====
    { subject: "Psychology", class: 12, book_code: "lepy1", title: "Psychology" },
    { subject: "Psychology", class: 12, book_code: "lhpy1", title: "Manovigyan" },
    { subject: "Psychology", class: 12, book_code: "lupy1", title: "Nafsiat(Urdu)" },

    // ===== Class 12 · Sociology =====
    { subject: "Sociology", class: 12, book_code: "lesy1", title: "Indian Society" },
    { subject: "Sociology", class: 12, book_code: "lhsy1", title: "Bhartiya Samaj" },
    { subject: "Sociology", class: 12, book_code: "lesy2", title: "Social Change and Development in India" },
    { subject: "Sociology", class: 12, book_code: "lhsy2", title: "Bharat main Samajik Parivartan aur Vikas" },
    { subject: "Sociology", class: 12, book_code: "luis1", title: "Hindustani Samaj(Urdu)" },
    { subject: "Sociology", class: 12, book_code: "lusy2", title: "Hindustan Mein Samaji Tabdili Aur Taraqqi(Urdu)" },

    // ===== Class 12 · Chemistry =====
    { subject: "Chemistry", class: 12, book_code: "lech1", title: "Chemistry-I" },
    { subject: "Chemistry", class: 12, book_code: "lech2", title: "Chemistry-II" },
    { subject: "Chemistry", class: 12, book_code: "lhch1", title: "Rasayan vigyan bhag I" },
    { subject: "Chemistry", class: 12, book_code: "lhch2", title: "Rasayan vigyan bhag II" },
    { subject: "Chemistry", class: 12, book_code: "luch1", title: "Keemiya-I" },
    { subject: "Chemistry", class: 12, book_code: "luch2", title: "Keemiya-II" },

    // ===== Class 12 · Sanskrit =====
    { subject: "Sanskrit", class: 12, book_code: "lhsk1", title: "Bhaswati" },
    { subject: "Sanskrit", class: 12, book_code: "lhsk2", title: "Shaswati" },

    // ===== Class 12 · Political Science =====
    { subject: "Political Science", class: 12, book_code: "leps1", title: "Contemporary World Politics" },
    { subject: "Political Science", class: 12, book_code: "lhps1", title: "Samkalin Vishwa Rajniti" },
    { subject: "Political Science", class: 12, book_code: "leps2", title: "Politics in India Since Independence" },
    { subject: "Political Science", class: 12, book_code: "lhps2", title: "Swatantra Bharat Mein Rajniti-II" },
    { subject: "Political Science", class: 12, book_code: "lups1", title: "Aasri Alami Siyasat(Urdu)" },
    { subject: "Political Science", class: 12, book_code: "luab1", title: "Azadi Ke Baad Hindustan Ki Siyasat(Urdu)" },

    // ===== Class 12 · Home Science =====
    { subject: "Home Science", class: 12, book_code: "lehe1", title: "Human Ecology and Family Sciences Part I" },
    { subject: "Home Science", class: 12, book_code: "lehe2", title: "Human Ecology and Family Sciences Part II" },
    { subject: "Home Science", class: 12, book_code: "lehh1", title: "Manav Paristhitik avam Parivar Vigyan Bhag 1" },
    { subject: "Home Science", class: 12, book_code: "lehh2", title: "Manav Paristhitiki avam Parivar Vigyan Bhag 2" },

    // ===== Class 12 · Economics =====
    { subject: "Economics", class: 12, book_code: "leec2", title: "Introductory Microeconomics" },
    { subject: "Economics", class: 12, book_code: "leec1", title: "Introductory Macroeconomics" },
    { subject: "Economics", class: 12, book_code: "lhec2", title: "Vyashthi Arthshasrta" },
    { subject: "Economics", class: 12, book_code: "lhec1", title: "Samashty Arthshastra Ek Parichay" },
    { subject: "Economics", class: 12, book_code: "lume1", title: "Juzvi Maashiyat ka Taruf(Urdu)" },
    { subject: "Economics", class: 12, book_code: "lume2", title: "Kulli Maashiyat Ka Taruf(Urdu)" },

    // ===== Class 12 · Business Studies =====
    { subject: "Business Studies", class: 12, book_code: "lebs1", title: "Business Studies-I" },
    { subject: "Business Studies", class: 12, book_code: "lhbs1", title: "Vyavasai Adhyan-I" },
    { subject: "Business Studies", class: 12, book_code: "lebs2", title: "Business Studies-II" },
    { subject: "Business Studies", class: 12, book_code: "lhbs2", title: "Vyavasai Adhyan-II" },
    { subject: "Business Studies", class: 12, book_code: "lubs1", title: "Karobari Uloom I(Urdu)" },
    { subject: "Business Studies", class: 12, book_code: "lubs2", title: "Karobari Uloom II(Urdu)" },

    // ===== Class 12 · Urdu =====
    { subject: "Urdu", class: 12, book_code: "luga1", title: "Gulistan-e- Adab" },
    { subject: "Urdu", class: 12, book_code: "luku1", title: "Khayaban-e-Urdu" },
    { subject: "Urdu", class: 12, book_code: "luna1", title: "Nai Awaz" },
    { subject: "Urdu", class: 12, book_code: "ludh1", title: "Dhanak" },

    // ===== Class 12 · Heritage Crafts =====
    { subject: "Heritage Crafts", class: 12, book_code: "luhc1", title: "Hindustan me Dastkari Ki Riwayat" },
    { subject: "Heritage Crafts", class: 12, book_code: "lehc1", title: "Craft Tradition of India" },
    { subject: "Heritage Crafts", class: 12, book_code: "lhhc1", title: "Bharatiya Hastkla Ki Paramparayen" },

    // ===== Class 12 · New Age Graphics Design =====
    { subject: "New Age Graphics Design", class: 12, book_code: "legd1", title: "New Age Graphics Design" },

    // ===== Class 12 · Creative Writing & Translation =====
    { subject: "Creative Writing & Translation", class: 12, book_code: "lucw1", title: "Takhleequi Jauhar" },
    { subject: "Creative Writing & Translation", class: 12, book_code: "khsr2", title: "Srijan-II" },

    // ===== Class 12 · Fine Art =====
    { subject: "Fine Art", class: 12, book_code: "lefa1", title: "An Introduction to Indian Art Part-II" },
    { subject: "Fine Art", class: 12, book_code: "lhfa1", title: "Bhartiya Kala ka Itihaas Bhag 2" },

    // ===== Class 12 · Computer Science =====
    { subject: "Computer Science", class: 12, book_code: "lecs1", title: "Computer Science" },

    // ===== Class 12 · Informatics Practices =====
    { subject: "Informatics Practices", class: 12, book_code: "leip1", title: "Informatics Practices" },

    // ===== Class 12 · Sangeet =====
    { subject: "Sangeet", class: 12, book_code: "lstp1", title: "Tabla evam Pakhawaj" },
    { subject: "Sangeet", class: 12, book_code: "lsgv1", title: "Hindustani Sangeet Gayan Evam Vaadan" },
    // ===== Class 13 · Hindi =====
    { subject: "Hindi", class: 13, book_code: "kham1", title: "Abhivyakti Aur Madhyam" },

    // ===== Class 13 · Sanskrit =====
    { subject: "Sanskrit", class: 13, book_code: "klss1", title: "Sanskrit Sahitya parichay" },

    // ===== Class 13 · Heritage Crafts =====
    { subject: "Heritage Crafts", class: 13, book_code: "mehc1", title: "Exploring Craft Tradition of India" },
    { subject: "Heritage Crafts", class: 13, book_code: "khhc1", title: "Bhartiya Hastkala Parmparaon ki Khoj" },

    // ===== Class 13 · Urdu =====
    { subject: "Urdu", class: 13, book_code: "kuza1", title: "Zuban-O-Adab ki Tareekh" },
    { subject: "Urdu", class: 13, book_code: "juuq1", title: "Urdu Qwaid aur Insha" },
    { subject: "Urdu", class: 13, book_code: "kuiz1", title: "Izhar Aur Zara-e-Izhar" },

].filter(b => (b.book_code[1] === 'e' || b.book_code[1] === 'h') && !["kect1", "kect2", "iepb1", "kegd1", "kehc1", "ievw1", "ievt1", "ievc1", "iees1", "ievh1", "ieve1", "ieeo1", "iepg1", "ievs1", "ieva1", "kedf1", "keoc1", "kefc1", "keda1", "kevt1"].includes(b.book_code));

// =========================================
// 2. DOM Elements & Application State
// =========================================
// UI references
const subjectFilters = document.getElementById('subject-filters');
const classFilters = document.getElementById('class-filters');
const bookGrid = document.getElementById('book-grid');
const downloadBtn = document.getElementById('download-selected');
const selectAllBtn = document.getElementById('select-all-btn');
const floatingActions = document.getElementById('floating-actions');

// State management
let selectedBooks = new Set();    // Stores active book codes
let ignoreNextClick = false;      // Debounce flag for drag interactions

// Pagination / Lazy Loading Config
const booksToShow = 12;
let currentCount = 0;

// ----------------- INITIALIZATION -----------------
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderBooks(false);
    setupFilterToggles();
    setupMobileMenu();
    setupMarquee();

    // Force the browser to stop the loading spinner after 3 seconds
    setTimeout(() => {
        window.stop();
        console.log("Page load forced to stop after 3s");
    }, 3000); 
});

// ----------------- MOBILE MENU -----------------
function setupMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    // Toggle menu
    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Close menu
    function closeMenu() {
        hamburgerBtn.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    hamburgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking on filter checkboxes (mobile UX improvement)
    sidebar.addEventListener('click', (e) => {
        if (e.target.type === 'checkbox' && window.innerWidth <= 768) {
            // Small delay so user can see the checkbox change
            setTimeout(closeMenu, 300);
        }
    });

    // Close menu on window resize if going to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}


// ----------------- FILTERS -----------------
// ----------------- FILTERS -----------------
// Render the sidebar filter options
function renderFilters() {
    // Subjects - sorted alphabetically
    [...new Set(BOOKS.map(b => b.subject))].sort((a, b) => a.localeCompare(b)).forEach(s => {
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

    // 1. Filter
    const filtered = BOOKS.filter(b =>
        (!subjects.length || subjects.includes(b.subject)) &&
        (!classes.length || classes.includes(b.class))
    );

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
                <div class="book-meta">Class • ${book.class}</div>
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
        !e.target.closest('#download-selected') &&
        !e.target.closest('#select-all-btn') &&
        !e.target.closest('.sidebar')) {
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


// ----------------- FILTER TOGGLE UI -----------------
// ----------------- FILTER TOGGLE UI -----------------
// Setup expandable/collapsible filter sections (not currently key to main flow but kept for future)
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
            e.target.closest('.sidebar') ||
            e.target.closest('.mobile-header') ||
            e.target.closest('#floating-actions')) return;

        isDragging = true;
        startX = e.pageX;
        startY = e.pageY;

        marquee.style.left = startX + 'px';
        marquee.style.top = startY + 'px';
        marquee.style.width = '0px';
        marquee.style.height = '0px';
        marquee.style.display = 'block';

        if (!e.ctrlKey && !e.shiftKey) {
            clearSelection();
        }
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
            if (!e.ctrlKey && !e.shiftKey) {
                clearSelection();
            }
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
                // Only deselect if we are in "replace" mode (no ctrl)
                if (!e.ctrlKey && !e.shiftKey) {
                    if (selectedBooks.has(code)) {
                        selectedBooks.delete(code);
                        card.classList.remove('selected');
                    }
                }
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


