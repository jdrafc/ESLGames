/* ==========================================================================
   1. DATA STRUCTURES & STATIC CONTENT DICTIONARIES
   ========================================================================== */

// 1.1 ALPHABET & PHONICS DATA (26 Letters)
const ALPHABET_DATA = [
    { letter: 'A', lower: 'a', word: 'Apple', sound: '/æ/', phrase: 'a, a, apple', icon: 'apple' },
    { letter: 'B', lower: 'b', word: 'Bear', sound: '/b/', phrase: 'b, b, bear', icon: 'bear' },
    { letter: 'C', lower: 'c', word: 'Cat', sound: '/k/', phrase: 'c, c, cat', icon: 'cat' },
    { letter: 'D', lower: 'd', word: 'Dog', sound: '/d/', phrase: 'd, d, dog', icon: 'dog' },
    { letter: 'E', lower: 'e', word: 'Elephant', sound: '/e/', phrase: 'e, e, elephant', icon: 'elephant' },
    { letter: 'F', lower: 'f', word: 'Fish', sound: '/f/', phrase: 'f, f, fish', icon: 'fish' },
    { letter: 'G', lower: 'g', word: 'Giraffe', sound: '/g/', phrase: 'g, g, giraffe', icon: 'giraffe' },
    { letter: 'H', lower: 'h', word: 'House', sound: '/h/', phrase: 'h, h, house', icon: 'house' },
    { letter: 'I', lower: 'i', word: 'Ice Cream', sound: '/aɪ/', phrase: 'i, i, ice cream', icon: 'icecream' },
    { letter: 'J', lower: 'j', word: 'Jellyfish', sound: '/dʒ/', phrase: 'j, j, jellyfish', icon: 'jellyfish' },
    { letter: 'K', lower: 'k', word: 'Kite', sound: '/k/', phrase: 'k, k, kite', icon: 'kite' },
    { letter: 'L', lower: 'l', word: 'Lion', sound: '/l/', phrase: 'l, l, lion', icon: 'lion' },
    { letter: 'M', lower: 'm', word: 'Moon', sound: '/m/', phrase: 'm, m, moon', icon: 'moon' },
    { letter: 'N', lower: 'n', word: 'Nest', sound: '/n/', phrase: 'n, n, nest', icon: 'nest' },
    { letter: 'O', lower: 'o', word: 'Owl', sound: '/aʊl/', phrase: 'o, o, owl', icon: 'owl' },
    { letter: 'P', lower: 'p', word: 'Penguin', sound: '/p/', phrase: 'p, p, penguin', icon: 'penguin' },
    { letter: 'Q', lower: 'q', word: 'Queen', sound: '/kw/', phrase: 'q, q, queen', icon: 'queen' },
    { letter: 'R', lower: 'r', word: 'Rocket', sound: '/r/', phrase: 'r, r, rocket', icon: 'rocket' },
    { letter: 'S', lower: 's', word: 'Sun', sound: '/s/', phrase: 's, s, sun', icon: 'sun' },
    { letter: 'T', lower: 't', word: 'Tree', sound: '/t/', phrase: 't, t, tree', icon: 'tree' },
    { letter: 'U', lower: 'u', word: 'Umbrella', sound: '/ʌ/', phrase: 'u, u, umbrella', icon: 'umbrella' },
    { letter: 'V', lower: 'v', word: 'Violin', sound: '/v/', phrase: 'v, v, violin', icon: 'violin' },
    { letter: 'W', lower: 'w', word: 'Watermelon', sound: '/w/', phrase: 'w, w, watermelon', icon: 'watermelon' },
    { letter: 'X', lower: 'x', word: 'Xylophone', sound: '/z/', phrase: 'x, x, xylophone', icon: 'xylophone' },
    { letter: 'Y', lower: 'y', word: 'Yacht', sound: '/j/', phrase: 'y, y, yacht', icon: 'yacht' },
    { letter: 'Z', lower: 'z', word: 'Zebra', sound: '/z/', phrase: 'z, z, zebra', icon: 'zebra' }
];

// 1.2 COLOURS DATA (10 Colors)
const COLOURS_DATA = [
    { name: 'Red', objectLabel: 'Red Strawberry', hex: '#ff5252', shape: 'strawberry' },
    { name: 'Blue', objectLabel: 'Blue Sea', hex: '#0984e3', shape: 'sea' },
    { name: 'Green', objectLabel: 'Green Frog', hex: '#2ecc71', shape: 'frog' },
    { name: 'Yellow', objectLabel: 'Yellow Sun', hex: '#f1c40f', shape: 'sun' },
    { name: 'Orange', objectLabel: 'Orange Fruit', hex: '#e67e22', shape: 'orangefruit' },
    { name: 'Purple', objectLabel: 'Purple Grapes', hex: '#8e44ad', shape: 'grapes' },
    { name: 'Pink', objectLabel: 'Pink Barbie Doll', hex: '#fd79a8', shape: 'barbie' },
    { name: 'Brown', objectLabel: 'Brown Bear', hex: '#795548', shape: 'bear' },
    { name: 'Black', objectLabel: 'Black Ant', hex: '#2d3436', shape: 'ant' },
    { name: 'White', objectLabel: 'White Rabbit', hex: '#ffffff', shape: 'rabbit' }
];

// 1.3 NUMBERS DATA (1 to 20)
const NUMBERS_DATA = [
    { digit: 1, word: 'One' }, { digit: 2, word: 'Two' }, { digit: 3, word: 'Three' },
    { digit: 4, word: 'Four' }, { digit: 5, word: 'Five' }, { digit: 6, word: 'Six' },
    { digit: 7, word: 'Seven' }, { digit: 8, word: 'Eight' }, { digit: 9, word: 'Nine' },
    { digit: 10, word: 'Ten' }, { digit: 11, word: 'Eleven' }, { digit: 12, word: 'Twelve' },
    { digit: 13, word: 'Thirteen' }, { digit: 14, word: 'Fourteen' }, { digit: 15, word: 'Fifteen' },
    { digit: 16, word: 'Sixteen' }, { digit: 17, word: 'Seventeen' }, { digit: 18, word: 'Eighteen' },
    { digit: 19, word: 'Nineteen' }, { digit: 20, word: 'Twenty' }
];

// 1.4 SHAPES DATA (10 Geometry Shapes)
const SHAPES_DATA = [
    { name: 'Circle', desc: 'Round and smooth with no corners!', icon: 'circle' },
    { name: 'Square', desc: '4 equal sides and 4 straight corners!', icon: 'square' },
    { name: 'Triangle', desc: '3 sides and 3 pointy corners!', icon: 'triangle' },
    { name: 'Rectangle', desc: '2 long sides and 2 short sides!', icon: 'rectangle' },
    { name: 'Oval', desc: 'Like a stretched out circle or egg!', icon: 'oval' },
    { name: 'Diamond', desc: 'A shiny diamond shape with 4 corners!', icon: 'diamond' },
    { name: 'Star', desc: '5 pointy stars shining bright!', icon: 'star' },
    { name: 'Heart', desc: 'Full of love and nice curves!', icon: 'heart' },
    { name: 'Pentagon', desc: '5 sides like a little house!', icon: 'pentagon' },
    { name: 'Hexagon', desc: '6 sides like a honeycomb!', icon: 'hexagon' }
];

// 1.5 SIMPLE WORDS DATA (16 Vocabulary Words)
const SIMPLE_WORDS_DATA = [
    { word: 'Cat', spelling: 'C - A - T', icon: 'cat' },
    { word: 'Dog', spelling: 'D - O - G', icon: 'dog' },
    { word: 'Fish', spelling: 'F - I - S - H', icon: 'fish' },
    { word: 'Ball', spelling: 'B - A - L - L', icon: 'ball' },
    { word: 'Car', spelling: 'C - A - R', icon: 'car' },
    { word: 'Book', spelling: 'B - O - O - K', icon: 'book' },
    { word: 'Tree', spelling: 'T - R - E - E', icon: 'tree' },
    { word: 'Sun', spelling: 'S - U - N', icon: 'sun' },
    { word: 'Moon', spelling: 'M - O - O - N', icon: 'moon' },
    { word: 'House', spelling: 'H - O - U - S - E', icon: 'house' },
    { word: 'Bird', spelling: 'B - I - R - D', icon: 'bird' },
    { word: 'Duck', spelling: 'D - U - C - K', icon: 'duck' },
    { word: 'Apple', spelling: 'A - P - P - L - E', icon: 'apple' },
    { word: 'Banana', spelling: 'B - A - N - A - N - A', icon: 'banana' },
    { word: 'Monkey', spelling: 'M - O - N - K - E - Y', icon: 'monkey' },
    { word: 'Cake', spelling: 'C - A - K - E', icon: 'cake' }
];

// 1.6 SENIOR READINGS & COMPREHENSION STORIES BY ESL LEVEL (Ages 8–10)
// Modularized into plug-and-play cartridges in js/senior-reading/cartridges/
const SENIOR_STORIES_DATA = (typeof window !== 'undefined' && window.SENIOR_STORIES_DATA) ? window.SENIOR_STORIES_DATA : {
    beginner: [],
    intermediate: [],
    advanced: []
};
if (typeof window !== 'undefined') {
    window.SENIOR_STORIES_DATA = SENIOR_STORIES_DATA;
}

// 1.7 ADVANCED VOCABULARY & MORPHOLOGY DATA BY ESL LEVEL (Ages 8–10)
// Modularized into plug-and-play cartridges in js/senior-vocab/cartridges/
const SENIOR_VOCAB_DATA = (typeof window !== 'undefined' && window.SENIOR_VOCAB_DATA) ? window.SENIOR_VOCAB_DATA : {};
if (typeof window !== 'undefined') {
    window.SENIOR_VOCAB_DATA = SENIOR_VOCAB_DATA;
}

/* ==========================================================================
   ESL READING SKILLS PRACTISE DATA (AGES 8-10)
   ========================================================================== */

// 1.8 ESL READING SKILLS PRACTISE DATA (Modularized into js/stories/ cartridges)
const READING_PRACTISE_DATA = (typeof window !== 'undefined' && window.READING_PRACTISE_DATA) ? window.READING_PRACTISE_DATA : {
    beginner: { label: '🟢 Beginner (CEFR A1)', units: [] },
    intermediate: { label: '🟡 Intermediate (CEFR A2)', units: [] },
    advanced: { label: '🔴 Advanced (CEFR B1)', units: [] }
};
if (typeof window !== 'undefined') {
    window.READING_PRACTISE_DATA = READING_PRACTISE_DATA;
}
