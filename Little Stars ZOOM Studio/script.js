/**
 * ==========================================================================
 * LITTLESTARS ZOOM TEACHER STUDIO - MAIN JAVASCRIPT APPLICATION MODULE
 * Built for interactive teaching of children aged 3-6 over Zoom.
 * Strictly uses HTML5, CSS3, Vanilla ES6 JavaScript, Web Audio API, and Speech Synthesis.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

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
    const SENIOR_STORIES_DATA = {
        beginner: [
            {
                id: 'lost_puppy',
                title: 'Max the Lost Puppy',
                genre: 'Pet Story',
                level: '🟢 ESL Beginner • 60 Words',
                storyObjects: [
                    { name: 'Max the Puppy', icon: 'dog', color: '#ff793f' },
                    { name: 'Tasty Bone', icon: 'dog_bone', color: '#64748b' },
                    { name: 'Red Ball', icon: 'circle', color: '#ef4444' },
                    { name: 'Green Tree', icon: 'tree', color: '#2ecc71' }
                ],
                passage: `Leo has a small dog named Max. Max likes to run in the park. One day, Max saw a red ball and ran away. Leo looked behind the big tree. He found Max sleeping under a warm bench. Leo was very happy and gave Max a delicious bone.`,
                vocab: [
                    { word: 'park', def: 'A green place where kids and dogs play.' },
                    { word: 'behind', def: 'At the back side of something.' },
                    { word: 'bench', def: 'A long seat for sitting outside.' }
                ],
                questions: [
                    {
                        q: '1. Where did Leo find Max?',
                        options: ['In a car', 'Under a warm bench', 'In the house', 'On a tree'],
                        correct: 1
                    },
                    {
                        q: '2. What color was the ball Max saw?',
                        options: ['Blue', 'Red', 'Yellow', 'Green'],
                        correct: 1
                    },
                    {
                        q: '3. What was Max doing under the bench?',
                        options: ['Eating grass', 'Sleeping', 'Barking at birds', 'Digging a hole'],
                        correct: 1
                    },
                    {
                        q: '4. What reward did Leo give Max at the end?',
                        options: ['A glass of milk', 'A red ball', 'A delicious bone', 'A new collar'],
                        correct: 2
                    }
                ],
                discussionPrompt: 'Do you have a pet or a favorite animal? What is its name?'
            }
        ],
        intermediate: [
            {
                id: 'quantum_key',
                title: 'The Secret of the Quantum Key',
                genre: 'Sci-Fi Explorer',
                level: '🟡 ESL Intermediate • 110 Words',
                storyObjects: [
                    { name: 'Quantum Key', icon: 'quantum_key', color: '#38bdf8' },
                    { name: 'Lab Goggles', icon: 'lab_goggles', color: '#0284c7' },
                    { name: 'Lunar Moon', icon: 'moon', color: '#f1c40f' },
                    { name: 'Satellite', icon: 'satellite', color: '#38bdf8' }
                ],
                passage: `Leo stared at the glowing metallic key sitting inside the glass chamber. Unlike normal brass keys, this key hummed with soft blue energy. Dr. Eve, his mentor, adjusted her lab goggles. "That key aligns satellite signals across the solar system," she explained. Leo leaned closer as the crystal core began to pulse with light. Suddenly, a computer chime echoed in the lab. An encoded message from the Lunar Outpost had just arrived!`,
                vocab: [
                    { word: 'quantum', def: 'A tiny unit of energy in science.' },
                    { word: 'satellite', def: 'A machine orbiting around a planet or moon.' },
                    { word: 'encoded', def: 'Written in a secret code to keep safe.' }
                ],
                questions: [
                    {
                        q: '1. What makes the quantum key special?',
                        options: [
                            'It is made of pure wood',
                            'It hums with blue energy and aligns satellite signals',
                            'It opens a bicycle lock',
                            'It turns into a toy'
                        ],
                        correct: 1
                    },
                    {
                        q: '2. What equipment did Dr. Eve adjust?',
                        options: ['Her boots', 'Her lab goggles', 'Her space suit', 'Her microscope'],
                        correct: 1
                    },
                    {
                        q: '3. What did the crystal core do when Leo leaned closer?',
                        options: ['It broke into pieces', 'It began to pulse with light', 'It turned red', 'It fell on the floor'],
                        correct: 1
                    },
                    {
                        q: '4. Where did the encoded message come from?',
                        options: ['The school', 'The Lunar Outpost', 'A submarine', 'The police station'],
                        correct: 1
                    }
                ],
                discussionPrompt: 'If you could travel into space, which planet or moon would you visit first?'
            }
        ],
        advanced: [
            {
                id: 'deep_reef',
                title: 'Journey to the Glowing Coral Reef',
                genre: 'Marine Biology',
                level: '🔴 ESL Advanced • 165 Words',
                storyObjects: [
                    { name: 'Submersible', icon: 'submarine', color: '#f59e0b' },
                    { name: 'Jellyfish', icon: 'jellyfish', color: '#a855f7' },
                    { name: 'Sea Turtle', icon: 'sea_turtle', color: '#15803d' },
                    { name: 'Azure Coral', icon: 'coral', color: '#06b6d4' }
                ],
                passage: `Deep beneath the surface of Twilight Bay, Maya steered her mini-submersible past giant kelp forests. Through the thick glass dome, she observed bioluminescent jellyfish illuminating the dark ocean floor like floating lanterns. Her mission was to document the rare Azure Coral reef, which glowed vibrant turquoise under ultraviolet light. As Maya calibrated her underwater camera, a friendly sea turtle swam alongside her sub, gliding effortlessly through the cool currents. Maya smiled, recording vital temperature data that would help protect this fragile marine sanctuary for future oceanographers.`,
                vocab: [
                    { word: 'bioluminescent', def: 'Living organisms that produce and emit light.' },
                    { word: 'submersible', def: 'A small vessel designed to operate under water.' },
                    { word: 'sanctuary', def: 'A protected safe place for wildlife and nature.' },
                    { word: 'oceanographers', def: 'Scientists who study the ocean and marine life.' }
                ],
                questions: [
                    {
                        q: '1. What illuminated the dark ocean floor?',
                        options: [
                            'Flashlights from scuba divers',
                            'Bioluminescent jellyfish floating like lanterns',
                            'Bright sunlight reaching the bottom',
                            'Submersible headlights'
                        ],
                        correct: 1
                    },
                    {
                        q: '2. What color did the Azure Coral reef glow under ultraviolet light?',
                        options: ['Vibrant turquoise', 'Bright orange', 'Deep purple', 'Golden yellow'],
                        correct: 0
                    },
                    {
                        q: '3. Which marine animal swam alongside Maya’s submersible?',
                        options: ['A humpback whale', 'A friendly sea turtle', 'A hammerhead shark', 'A giant octopus'],
                        correct: 1
                    },
                    {
                        q: '4. Why was Maya recording water temperature data?',
                        options: [
                            'To win a swimming race',
                            'To help protect the fragile marine sanctuary',
                            'To warm up her submarine',
                            'To catch sea turtles'
                        ],
                        correct: 1
                    }
                ],
                discussionPrompt: 'Why is it important for scientists to protect ocean sanctuaries? How can kids help save marine life?'
            }
        ]
    };

    // 1.7 ADVANCED VOCABULARY & MORPHOLOGY DATA BY ESL LEVEL (Ages 8–10)
    const SENIOR_VOCAB_DATA = {
        beginner: {
            head_words: [
                {
                    word: 'Unhappy',
                    phonetic: '/ʌnˈhæp.i/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (un- = NOT 👎)',
                    equation: 'Not 👎 + Happy 😊 = Unhappy 😢',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: NOT 👎' },
                        { text: 'Happy', type: 'root', meaning: 'Glad / Smile 😊' }
                    ],
                    definition: 'Not happy (feeling sad or upset 😢).',
                    sentence: 'Leo is unhappy because his red balloon popped.',
                    teacherTip: 'happy 😊 ➔ unhappy 😢 (We say unhappy, never unsad!)'
                },
                {
                    word: 'Unkind',
                    phonetic: '/ʌnˈkaɪnd/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (un- = NOT 👎)',
                    equation: 'Not 👎 + Kind ❤️ = Unkind 💔',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: NOT 👎' },
                        { text: 'Kind', type: 'root', meaning: 'Nice / Sweet ❤️' }
                    ],
                    definition: 'Not nice or friendly 💔.',
                    sentence: 'It is unkind to take toys without asking.',
                    teacherTip: 'kind ❤️ ➔ unkind 💔 (Not nice!)'
                },
                {
                    word: 'Unsafe',
                    phonetic: '/ʌnˈseɪf/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (un- = NOT 👎)',
                    equation: 'Not 👎 + Safe 🛡️ = Unsafe ⚠️',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: NOT 👎' },
                        { text: 'Safe', type: 'root', meaning: 'Protected 🛡️' }
                    ],
                    definition: 'Dangerous; not safe for kids ⚠️.',
                    sentence: 'Running near the swimming pool is unsafe.',
                    teacherTip: 'safe 🛡️ ➔ unsafe ⚠️ (Danger! Not safe!)'
                },
                {
                    word: 'Unlock',
                    phonetic: '/ʌnˈlɒk/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (un- = OPEN 🔓)',
                    equation: 'Open 🔓 + Lock 🔒 = Unlock 🔓',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: OPEN 🔓' },
                        { text: 'Lock', type: 'root', meaning: 'Closed tight 🔒' }
                    ],
                    definition: 'To open a door or box with a key 🔑.',
                    sentence: 'Dad uses a key to unlock the front door.',
                    teacherTip: 'lock 🔒 ➔ unlock 🔓 (Use a key to open!)'
                },
                {
                    word: 'Replay',
                    phonetic: '/ˌriːˈpleɪ/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (re- = AGAIN 🔁)',
                    equation: 'Again 🔁 + Play 🎮 = Replay 🎮',
                    parts: [
                        { text: 'Re-', type: 'prefix', meaning: 'Head: AGAIN 🔁' },
                        { text: 'Play', type: 'root', meaning: 'Game / Fun 🎮' }
                    ],
                    definition: 'To play a game, video, or song again 🔁.',
                    sentence: 'Let us replay our favorite video game.',
                    teacherTip: 'Hold up 2 fingers: play 🎮 ➔ replay (Play a second time!)'
                },
                {
                    word: 'Reread',
                    phonetic: '/ˌriːˈriːd/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (re- = AGAIN 🔁)',
                    equation: 'Again 🔁 + Read 📖 = Reread 📖',
                    parts: [
                        { text: 'Re-', type: 'prefix', meaning: 'Head: AGAIN 🔁' },
                        { text: 'Read', type: 'root', meaning: 'Look at words 📖' }
                    ],
                    definition: 'To read the book or page one more time 📖.',
                    sentence: 'I love this animal story and want to reread it.',
                    teacherTip: 'read 📖 ➔ reread (Read the book again!)'
                },
                {
                    word: 'Rewrite',
                    phonetic: '/ˌriːˈraɪt/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (re- = AGAIN 🔁)',
                    equation: 'Again 🔁 + Write ✏️ = Rewrite ✏️',
                    parts: [
                        { text: 'Re-', type: 'prefix', meaning: 'Head: AGAIN 🔁' },
                        { text: 'Write', type: 'root', meaning: 'Pencil words ✏️' }
                    ],
                    definition: 'To erase and write the letters again ✏️.',
                    sentence: 'Please erase and rewrite your name neatly.',
                    teacherTip: 'write ✏️ ➔ rewrite (Erase and write again!)'
                },
                {
                    word: 'Redraw',
                    phonetic: '/ˌriːˈdrɔː/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (re- = AGAIN 🔁)',
                    equation: 'Again 🔁 + Draw 🖍️ = Redraw 🖍️',
                    parts: [
                        { text: 'Re-', type: 'prefix', meaning: 'Head: AGAIN 🔁' },
                        { text: 'Draw', type: 'root', meaning: 'Picture with colors 🖍️' }
                    ],
                    definition: 'To draw the picture a second time with crayons 🖍️.',
                    sentence: 'Emma will redraw the happy sun with crayons.',
                    teacherTip: 'draw 🖍️ ➔ redraw (Draw the picture again!)'
                },
                {
                    word: 'Redo',
                    phonetic: '/ˌriːˈduː/',
                    categoryLabel: '🟢 ESL Beginner: Head Word (re- = AGAIN 🔁)',
                    equation: 'Again 🔁 + Do ✅ = Redo ✅',
                    parts: [
                        { text: 'Re-', type: 'prefix', meaning: 'Head: AGAIN 🔁' },
                        { text: 'Do', type: 'root', meaning: 'Make / Action ✅' }
                    ],
                    definition: 'To do an action or puzzle one more time ✅.',
                    sentence: 'Let us redo the easy puzzle together.',
                    teacherTip: 'do ✅ ➔ redo (Do it one more time!)'
                }
            ],
            tail_words: [
                {
                    word: 'Teacher',
                    phonetic: '/ˈtiː.tʃər/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-er = A PERSON 👤)',
                    equation: 'Teach 🧑‍🏫 + Person 👤 = Teacher 🧑‍🏫',
                    parts: [
                        { text: 'Teach', type: 'root', meaning: 'Give lessons 🧑‍🏫' },
                        { text: '-er', type: 'suffix', meaning: 'Tail: A PERSON 👤' }
                    ],
                    definition: 'A person who teaches children at school 🧑‍🏫.',
                    sentence: 'My teacher helps me learn new English words.',
                    teacherTip: 'Point to yourself: I teach, so I am your teacher!'
                },
                {
                    word: 'Singer',
                    phonetic: '/ˈsɪŋ.ər/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-er = A PERSON 👤)',
                    equation: 'Sing 🎤 + Person 👤 = Singer 🎤',
                    parts: [
                        { text: 'Sing', type: 'root', meaning: 'Make music 🎤' },
                        { text: '-er', type: 'suffix', meaning: 'Tail: A PERSON 👤' }
                    ],
                    definition: 'A person who sings songs with music 🎤.',
                    sentence: 'The singer has a sweet and loud voice.',
                    teacherTip: 'sing 🎤 ➔ singer (A person who sings!)'
                },
                {
                    word: 'Player',
                    phonetic: '/ˈpleɪ.ər/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-er = A PERSON 👤)',
                    equation: 'Play ⚽ + Person 👤 = Player ⚽',
                    parts: [
                        { text: 'Play', type: 'root', meaning: 'Fun / Sport ⚽' },
                        { text: '-er', type: 'suffix', meaning: 'Tail: A PERSON 👤' }
                    ],
                    definition: 'A person who plays a game or soccer match ⚽.',
                    sentence: 'Leo is a very fast soccer player on the field.',
                    teacherTip: 'play ⚽ ➔ player (A person who plays!)'
                },
                {
                    word: 'Helper',
                    phonetic: '/ˈhel.pər/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-er = A PERSON 👤)',
                    equation: 'Help 🤝 + Person 👤 = Helper 🤝',
                    parts: [
                        { text: 'Help', type: 'root', meaning: 'Give aid 🤝' },
                        { text: '-er', type: 'suffix', meaning: 'Tail: A PERSON 👤' }
                    ],
                    definition: 'A person who helps others clean and tidy 🤝.',
                    sentence: 'Emma is a great helper in the classroom today.',
                    teacherTip: 'help 🤝 ➔ helper (A person who helps!)'
                },
                {
                    word: 'Reader',
                    phonetic: '/ˈriː.dər/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-er = A PERSON 👤)',
                    equation: 'Read 📚 + Person 👤 = Reader 📚',
                    parts: [
                        { text: 'Read', type: 'root', meaning: 'Look at books 📚' },
                        { text: '-er', type: 'suffix', meaning: 'Tail: A PERSON 👤' }
                    ],
                    definition: 'A person who loves reading storybooks 📚.',
                    sentence: 'Noah is an awesome reader of adventure stories.',
                    teacherTip: 'read 📚 ➔ reader (A person who reads!)'
                },
                {
                    word: 'Colorful',
                    phonetic: '/ˈkʌl.ə.fəl/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-ful = A LOT ⭐)',
                    equation: 'Color 🌈 + A Lot ⭐ = Colorful 🌈',
                    parts: [
                        { text: 'Color', type: 'root', meaning: 'Bright colors 🌈' },
                        { text: '-ful', type: 'suffix', meaning: 'Tail: A LOT ⭐' }
                    ],
                    definition: 'Having a lot of bright colors, like a rainbow 🌈.',
                    sentence: 'The tropical bird has colorful green and yellow feathers.',
                    teacherTip: 'A lot of color! (Show a rainbow 🌈) Opposite of colorless!'
                },
                {
                    word: 'Colorless',
                    phonetic: '/ˈkʌl.ə.ləs/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-less = ZERO ⭕)',
                    equation: 'Color 💧 + Zero ⭕ = Colorless 💧',
                    parts: [
                        { text: 'Color', type: 'root', meaning: 'Hue / Color 💧' },
                        { text: '-less', type: 'suffix', meaning: 'Tail: ZERO / NONE ⭕' }
                    ],
                    definition: 'Having zero color, completely clear like pure water 💧.',
                    sentence: 'Clean drinking water in a glass is colorless.',
                    teacherTip: 'Zero color! (Show a glass of clear water 💧)'
                },
                {
                    word: 'Helpful',
                    phonetic: '/ˈhelp.fəl/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-ful = A LOT ⭐)',
                    equation: 'Help 🤝 + A Lot ⭐ = Helpful 🤝',
                    parts: [
                        { text: 'Help', type: 'root', meaning: 'Give aid 🤝' },
                        { text: '-ful', type: 'suffix', meaning: 'Tail: A LOT ⭐' }
                    ],
                    definition: 'Gives a lot of help; cleaning up toys together 🤝.',
                    sentence: 'The children are helpful when cleaning the playroom.',
                    teacherTip: 'Gives a lot of help! Opposite of helpless!'
                },
                {
                    word: 'Helpless',
                    phonetic: '/ˈhelp.ləs/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-less = ZERO ❌)',
                    equation: 'Help 👶 + Zero ❌ = Helpless 👶',
                    parts: [
                        { text: 'Help', type: 'root', meaning: 'Aid / Assist 👶' },
                        { text: '-less', type: 'suffix', meaning: 'Tail: CANNOT ❌' }
                    ],
                    definition: 'Cannot help themselves (like a tiny newborn baby 👶).',
                    sentence: 'A tiny baby puppy is helpless without its mother.',
                    teacherTip: 'Cannot help themselves! (A tiny baby 👶)'
                },
                {
                    word: 'Careful',
                    phonetic: '/ˈkeə.fəl/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-ful = A LOT ⭐)',
                    equation: 'Care ❤️ + A Lot ⭐ = Careful 🚶',
                    parts: [
                        { text: 'Care', type: 'root', meaning: 'Caution ❤️' },
                        { text: '-ful', type: 'suffix', meaning: 'Tail: A LOT ⭐' }
                    ],
                    definition: 'Walking slowly and paying attention with water 🚶.',
                    sentence: 'Please be careful when carrying the warm glass of milk.',
                    teacherTip: 'Walking slowly with water! Opposite of careless!'
                },
                {
                    word: 'Careless',
                    phonetic: '/ˈkeə.ləs/',
                    categoryLabel: '🟢 ESL Beginner: Tail Word (-less = ZERO ⚠️)',
                    equation: 'Care 🏃 + Zero ⚠️ = Careless 🏃',
                    parts: [
                        { text: 'Care', type: 'root', meaning: 'Caution ❤️' },
                        { text: '-less', type: 'suffix', meaning: 'Tail: ZERO CARE ⚠️' }
                    ],
                    definition: 'Running fast and not paying attention; spilling things 🏃!',
                    sentence: 'Do not be careless or you might drop the glass on the floor.',
                    teacherTip: 'Running fast and spilling the water! ⚠️'
                }
            ],
            compound: [
                {
                    word: 'Sunlight',
                    phonetic: '/ˈsʌn.laɪt/',
                    categoryLabel: '🟢 ESL Beginner: Word Math (Compound Word)',
                    equation: 'Sun ☀️ + Light 💡 = Sunlight ☀️',
                    parts: [
                        { text: 'Sun', type: 'root', meaning: 'Star in sky ☀️' },
                        { text: 'Light', type: 'root', meaning: 'Brightness 💡' }
                    ],
                    definition: 'Bright, warm light coming from the sun ☀️.',
                    sentence: 'Green plants need water and warm sunlight to grow.'
                },
                {
                    word: 'Rainbow',
                    phonetic: '/ˈreɪn.bəʊ/',
                    categoryLabel: '🟢 ESL Beginner: Word Math (Compound Word)',
                    equation: 'Rain 🌧️ + Bow 🌈 = Rainbow 🌈',
                    parts: [
                        { text: 'Rain', type: 'root', meaning: 'Water from sky 🌧️' },
                        { text: 'Bow', type: 'root', meaning: 'Curved arch 🌈' }
                    ],
                    definition: 'A colorful curve in the sky after the rain stops 🌈.',
                    sentence: 'Look at the beautiful rainbow over the green park!'
                },
                {
                    word: 'Backpack',
                    phonetic: '/ˈbæk.pæk/',
                    categoryLabel: '🟢 ESL Beginner: Word Math (Compound Word)',
                    equation: 'Back 🎒 + Pack 📦 = Backpack 🎒',
                    parts: [
                        { text: 'Back', type: 'root', meaning: 'On your back 🎒' },
                        { text: 'Pack', type: 'root', meaning: 'Bag for items 📦' }
                    ],
                    definition: 'A bag carried on your back for school books 🎒.',
                    sentence: 'Leo puts his pencils and books inside his blue backpack.'
                },
                {
                    word: 'Cupcake',
                    phonetic: '/ˈkʌp.keɪk/',
                    categoryLabel: '🟢 ESL Beginner: Word Math (Compound Word)',
                    equation: 'Cup 🧁 + Cake 🎂 = Cupcake 🧁',
                    parts: [
                        { text: 'Cup', type: 'root', meaning: 'Small cup 🧁' },
                        { text: 'Cake', type: 'root', meaning: 'Sweet bake 🎂' }
                    ],
                    definition: 'A small sweet cake baked in a paper cup 🧁.',
                    sentence: 'Mom baked a delicious vanilla cupcake with sprinkles.'
                },
                {
                    word: 'Starfish',
                    phonetic: '/ˈstɑː.fɪʃ/',
                    categoryLabel: '🟢 ESL Beginner: Word Math (Compound Word)',
                    equation: 'Star ⭐ + Fish 🐟 = Starfish ⭐',
                    parts: [
                        { text: 'Star', type: 'root', meaning: '5-point star ⭐' },
                        { text: 'Fish', type: 'root', meaning: 'Sea animal 🐟' }
                    ],
                    definition: 'A gentle sea animal shaped like a bright star ⭐.',
                    sentence: 'The children saw an orange starfish in the shallow water.'
                }
            ]
        },
        intermediate: {
            head_words: [
                // dis- = "DO NOT / OPPOSITE" (action and rule words)
                {
                    word: 'Dislike',
                    phonetic: '/dɪsˈlaɪk/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (dis- = DO NOT 👎)',
                    equation: 'Do Not 👎 + Like 👍 = Dislike 👎',
                    parts: [
                        { text: 'Dis-', type: 'prefix', meaning: 'Head: DO NOT 👎' },
                        { text: 'Like', type: 'root', meaning: 'Enjoy 👍' }
                    ],
                    definition: 'Do not like (opposite of like 👍).',
                    sentence: 'Leo dislikes eating cold broccoli for dinner.',
                    teacherTip: 'like 👍 ➔ dislike 👎 (Tell them: We use un- for feelings like unhappy, but dis- for actions!)'
                },
                {
                    word: 'Disagree',
                    phonetic: '/ˌdɪs.əˈɡriː/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (dis- = DO NOT 🙅‍♂️)',
                    equation: 'Do Not 🙅‍♂️ + Agree 🤝 = Disagree 🙅‍♂️',
                    parts: [
                        { text: 'Dis-', type: 'prefix', meaning: 'Head: DO NOT 🙅‍♂️' },
                        { text: 'Agree', type: 'root', meaning: 'Same idea 🤝' }
                    ],
                    definition: 'Do not agree; have a different opinion from someone 🙅‍♂️.',
                    sentence: 'The friends disagree on which video game is the best.',
                    teacherTip: 'agree 🤝 ➔ disagree 🙅‍♂️ (Tell them: We don\'t say dissad! Use dis- for actions like agree!)'
                },
                {
                    word: 'Disobey',
                    phonetic: '/ˌdɪs.əˈbeɪ/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (dis- = BREAK RULES 🙉)',
                    equation: 'Break Rules 🙉 + Obey 👂 = Disobey 🙉',
                    parts: [
                        { text: 'Dis-', type: 'prefix', meaning: 'Head: BREAK RULES 🙉' },
                        { text: 'Obey', type: 'root', meaning: 'Listen / Follow 👂' }
                    ],
                    definition: 'Break the rules / do not listen to instructions 🙉.',
                    sentence: 'The puppy disobeyed and ran across the wet grass.',
                    teacherTip: 'obey 👂 ➔ disobey 🙉 (Break the rules / do not listen!)'
                },
                {
                    word: 'Disappear',
                    phonetic: '/ˌdɪs.əˈpɪər/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (dis- = GO AWAY 💨)',
                    equation: 'Go Away 💨 + Appear ✨ = Disappear 💨',
                    parts: [
                        { text: 'Dis-', type: 'prefix', meaning: 'Head: GO AWAY 💨' },
                        { text: 'Appear', type: 'root', meaning: 'Come in sight ✨' }
                    ],
                    definition: 'Go away so no one can see it 💨.',
                    sentence: 'The magician made the white rabbit disappear into thin air.',
                    teacherTip: 'appear ✨ ➔ disappear 💨 (Go away so no one can see it!)'
                },
                // mis- = "WRONG WAY" (school and action words)
                {
                    word: 'Misspell',
                    phonetic: '/ˌmɪsˈspel/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (mis- = WRONG WAY ❌)',
                    equation: 'Wrong Letters ❌ + Spell 🔤 = Misspell ❌',
                    parts: [
                        { text: 'Mis-', type: 'prefix', meaning: 'Head: WRONG WAY ❌' },
                        { text: 'Spell', type: 'root', meaning: 'Write letters 🔤' }
                    ],
                    definition: 'Write the wrong letters (e.g. writing C-A-T-T) ❌.',
                    sentence: 'Be careful not to misspell the word during the spelling bee.',
                    teacherTip: 'spell 🔤 ➔ misspell (Write the wrong letters: C-A-T-T ❌)'
                },
                {
                    word: 'Miscount',
                    phonetic: '/ˌmɪsˈkaʊnt/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (mis- = WRONG WAY 🧮)',
                    equation: 'Wrong Count 🧮 + Count 🔢 = Miscount 🧮',
                    parts: [
                        { text: 'Mis-', type: 'prefix', meaning: 'Head: WRONG WAY 🧮' },
                        { text: 'Count', type: 'root', meaning: 'Total numbers 🔢' }
                    ],
                    definition: 'Count the wrong way (e.g. counting 1, 2, 5, 9!) 🧮.',
                    sentence: 'Leo miscounted the red coins and had to start over.',
                    teacherTip: 'count 🔢 ➔ miscount (Count silly: 1, 2, 5, 9! ❌)'
                },
                {
                    word: 'Misread',
                    phonetic: '/ˌmɪsˈriːd/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (mis- = WRONG WAY 📖)',
                    equation: 'Wrong Word ❌ + Read 📖 = Misread 📖',
                    parts: [
                        { text: 'Mis-', type: 'prefix', meaning: 'Head: WRONG WAY ❌' },
                        { text: 'Read', type: 'root', meaning: 'Look at words 📖' }
                    ],
                    definition: 'Say the wrong word when reading a book 📖.',
                    sentence: 'Emma misread the clock and thought it was lunchtime.',
                    teacherTip: 'read 📖 ➔ misread (Say the wrong word when reading ❌)'
                },
                {
                    word: 'Misplace',
                    phonetic: '/ˌmɪsˈpleɪs/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (mis- = WRONG SPOT 📍)',
                    equation: 'Wrong Spot 📍 + Place 📦 = Misplace 🔍',
                    parts: [
                        { text: 'Mis-', type: 'prefix', meaning: 'Head: WRONG SPOT 📍' },
                        { text: 'Place', type: 'root', meaning: 'Put down 📦' }
                    ],
                    definition: 'Put your pencil in the wrong spot and lose it 🔍.',
                    sentence: 'I misplaced my yellow pencil under the big notebook.',
                    teacherTip: 'place 📍 ➔ misplace (Put your pencil in the wrong spot and lose it 🔍)'
                },
                {
                    word: 'Misunderstand',
                    phonetic: '/ˌmɪs.ʌn.dəˈstænd/',
                    categoryLabel: '🟡 ESL Intermediate: Head Word (mis- = WRONG WAY 💡)',
                    equation: 'Wrong Idea ❓ + Understand 💡 = Misunderstand ❓',
                    parts: [
                        { text: 'Mis-', type: 'prefix', meaning: 'Head: WRONG WAY ❓' },
                        { text: 'Understand', type: 'root', meaning: 'Get meaning 💡' }
                    ],
                    definition: 'Get the wrong idea or fail to understand correctly ❓.',
                    sentence: 'Please ask the teacher if you misunderstand the question.',
                    teacherTip: 'understand 💡 ➔ misunderstand (Get the wrong idea ❓)'
                }
            ],
            tail_words: [
                // -ly = "IN A ___ WAY" (action styles)
                {
                    word: 'Slowly',
                    phonetic: '/ˈsləʊ.li/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-ly = IN A ___ WAY 🐢)',
                    equation: 'Slow 🐢 + In That Way 🚶 = Slowly 🐢',
                    parts: [
                        { text: 'Slow', type: 'root', meaning: 'Not fast 🐢' },
                        { text: '-ly', type: 'suffix', meaning: 'Tail: IN THAT WAY 🚶' }
                    ],
                    definition: 'In a slow way (walking like a turtle 🐢).',
                    sentence: 'The giant turtle walked slowly across the warm grass.',
                    teacherTip: 'slow 🐢 ➔ slowly (Walk like a turtle!)'
                },
                {
                    word: 'Quickly',
                    phonetic: '/ˈkwɪk.li/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-ly = IN A ___ WAY 🐆)',
                    equation: 'Quick 🐆 + In That Way ⚡ = Quickly 🐆',
                    parts: [
                        { text: 'Quick', type: 'root', meaning: 'Fast speed 🐆' },
                        { text: '-ly', type: 'suffix', meaning: 'Tail: IN THAT WAY ⚡' }
                    ],
                    definition: 'In a quick way (running super fast 🐆).',
                    sentence: 'The cheetah ran quickly through the open savanna.',
                    teacherTip: 'quick 🐆 ➔ quickly (Run super fast!)'
                },
                {
                    word: 'Loudly',
                    phonetic: '/ˈlaʊd.li/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-ly = IN A ___ WAY 📢)',
                    equation: 'Loud 📢 + In That Way 🔊 = Loudly 📢',
                    parts: [
                        { text: 'Loud', type: 'root', meaning: 'Big volume 📢' },
                        { text: '-ly', type: 'suffix', meaning: 'Tail: IN THAT WAY 🔊' }
                    ],
                    definition: 'In a loud way (clapping or shouting with a big sound 📢).',
                    sentence: 'The happy crowd cheered loudly when the team scored.',
                    teacherTip: 'loud 📢 ➔ loudly (Clap or shout with a big sound!)'
                },
                {
                    word: 'Quietly',
                    phonetic: '/ˈkwaɪət.li/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-ly = IN A ___ WAY 🤫)',
                    equation: 'Quiet 🤫 + In That Way 🤫 = Quietly 🤫',
                    parts: [
                        { text: 'Quiet', type: 'root', meaning: 'Soft / Gentle 🤫' },
                        { text: '-ly', type: 'suffix', meaning: 'Tail: IN THAT WAY 🤫' }
                    ],
                    definition: 'In a quiet way (tiptoeing and whispering 🤫).',
                    sentence: 'The children walked quietly past the sleeping baby.',
                    teacherTip: 'quiet 🤫 ➔ quietly (Tiptoe and whisper!)'
                },
                {
                    word: 'Happily',
                    phonetic: '/ˈhæp.əl.i/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-ly = IN A ___ WAY 😊)',
                    equation: 'Happy 😊 + In That Way 🌈 = Happily 😊',
                    parts: [
                        { text: 'Happi-', type: 'root', meaning: 'Glad (y ➔ i) 😊' },
                        { text: '-ly', type: 'suffix', meaning: 'Tail: IN THAT WAY 🌈' }
                    ],
                    definition: 'In a happy way (smiling and laughing with joy 😊).',
                    sentence: 'The puppies played happily together with their ball.',
                    teacherTip: 'happy 😊 ➔ happily (Rule: Change the y to i first!)'
                },
                {
                    word: 'Angrily',
                    phonetic: '/ˈæŋ.ɡrəl.i/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-ly = IN A ___ WAY 😠)',
                    equation: 'Angry 😠 + In That Way 💢 = Angrily 😠',
                    parts: [
                        { text: 'Angri-', type: 'root', meaning: 'Mad (y ➔ i) 😠' },
                        { text: '-ly', type: 'suffix', meaning: 'Tail: IN THAT WAY 💢' }
                    ],
                    definition: 'In an angry way (shouting or stomping feet in anger 😠).',
                    sentence: 'The grumpy troll stomped angrily across the stone bridge.',
                    teacherTip: 'angry 😠 ➔ angrily (Rule: Change the y to i first!)'
                },
                // -able = "CAN BE DONE" vs. un-...-able = "CANNOT BE DONE" (wash, break, read)
                {
                    word: 'Washable',
                    phonetic: '/ˈwɒʃ.ə.bəl/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-able = CAN BE DONE 🧼)',
                    equation: 'Wash 🧼 + Can Be Done ✨ = Washable 🧼',
                    parts: [
                        { text: 'Wash', type: 'root', meaning: 'Clean with water 🧼' },
                        { text: '-able', type: 'suffix', meaning: 'Tail: CAN BE DONE ✨' }
                    ],
                    definition: 'Can wash it clean (like washable paint on hands 🧼).',
                    sentence: 'These color markers are washable with warm water.',
                    teacherTip: 'wash 🧼 ➔ washable (Can wash it clean! Paint on hands 🧼)'
                },
                {
                    word: 'Unwashable',
                    phonetic: '/ʌnˈwɒʃ.ə.bəl/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (un-...-able = CANNOT 🚫)',
                    equation: 'Cannot 🚫 + Washable 🧼 = Unwashable 🚫',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: CANNOT 🚫' },
                        { text: 'Wash', type: 'root', meaning: 'Clean 🧼' },
                        { text: '-able', type: 'suffix', meaning: 'Tail: ABLE ✨' }
                    ],
                    definition: 'Cannot wash it off (like permanent marker on paper 🚫).',
                    sentence: 'Permanent ink is unwashable, so do not draw on clothes!',
                    teacherTip: 'washable 🧼 ➔ unwashable (Cannot wash it off! Permanent marker 🚫)'
                },
                {
                    word: 'Breakable',
                    phonetic: '/ˈbreɪ.kə.bəl/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-able = CAN BE DONE 🔨)',
                    equation: 'Break 🔨 + Can Be Done 💥 = Breakable 🔨',
                    parts: [
                        { text: 'Break', type: 'root', meaning: 'Smash / Crack 🔨' },
                        { text: '-able', type: 'suffix', meaning: 'Tail: CAN BE DONE 💥' }
                    ],
                    definition: 'Can break easily (like a thin glass cup 🔨).',
                    sentence: 'Please carry the glass cup with two hands; it is breakable.',
                    teacherTip: 'break 🔨 ➔ breakable (Can break easily! A glass cup 🔨)'
                },
                {
                    word: 'Unbreakable',
                    phonetic: '/ʌnˈbreɪ.kə.bəl/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (un-...-able = CANNOT 🛡️)',
                    equation: 'Cannot 🛡️ + Breakable 🔨 = Unbreakable 🛡️',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: CANNOT 🛡️' },
                        { text: 'Break', type: 'root', meaning: 'Smash 🔨' },
                        { text: '-able', type: 'suffix', meaning: 'Tail: ABLE ✨' }
                    ],
                    definition: 'Cannot break (like a superhero\'s steel shield 🛡️).',
                    sentence: 'The knight carried an unbreakable steel shield into battle.',
                    teacherTip: 'breakable 🔨 ➔ unbreakable (Cannot break! A steel shield 🛡️)'
                },
                {
                    word: 'Readable',
                    phonetic: '/ˈriː.də.bəl/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (-able = CAN BE DONE 📖)',
                    equation: 'Read 📖 + Can Be Done 👁️ = Readable 📖',
                    parts: [
                        { text: 'Read', type: 'root', meaning: 'Look at words 📖' },
                        { text: '-able', type: 'suffix', meaning: 'Tail: CAN BE DONE 👁️' }
                    ],
                    definition: 'Clean writing that you can read easily 📖.',
                    sentence: 'Leo wrote neatly so his answers were very readable.',
                    teacherTip: 'read 📖 ➔ readable (Clean writing you can read!)'
                },
                {
                    word: 'Unreadable',
                    phonetic: '/ʌnˈriː.də.bəl/',
                    categoryLabel: '🟡 ESL Intermediate: Tail Word (un-...-able = CANNOT ✍️)',
                    equation: 'Cannot ✍️ + Readable 📖 = Unreadable ❌',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: CANNOT ✍️' },
                        { text: 'Read', type: 'root', meaning: 'Words 📖' },
                        { text: '-able', type: 'suffix', meaning: 'Tail: ABLE ✨' }
                    ],
                    definition: 'Messy scribbles you cannot read ✍️.',
                    sentence: 'The hurried scribbles were messy and completely unreadable.',
                    teacherTip: 'readable 📖 ➔ unreadable (Messy scribbles you cannot read!)'
                }
            ],
            compound: [
                {
                    word: 'Rainforest',
                    phonetic: '/ˈreɪn.fɒr.ɪst/',
                    categoryLabel: '🟡 ESL Intermediate: Word Math (Compound Word)',
                    equation: 'Rain 🌧️ + Forest 🌲 = Rainforest 🌴',
                    parts: [
                        { text: 'Rain', type: 'root', meaning: 'Precipitation 🌧️' },
                        { text: 'Forest', type: 'root', meaning: 'Dense trees 🌲' }
                    ],
                    definition: 'A dense tropical forest rich in biodiversity and trees 🌴.',
                    sentence: 'The Amazon rainforest produces vital oxygen for our planet.',
                    teacherTip: 'Rain 🌧️ + Forest 🌲 = Rainforest 🌴'
                },
                {
                    word: 'Underwater',
                    phonetic: '/ˌʌn.dəˈwɔː.tər/',
                    categoryLabel: '🟡 ESL Intermediate: Word Math (Compound Word)',
                    equation: 'Under ⬇️ + Water 🌊 = Underwater 🤿',
                    parts: [
                        { text: 'Under', type: 'root', meaning: 'Beneath ⬇️' },
                        { text: 'Water', type: 'root', meaning: 'Liquid / Ocean 🌊' }
                    ],
                    definition: 'Situated, occurring, or used beneath the surface of the water 🤿.',
                    sentence: 'Maya photographed glowing corals using an underwater camera.',
                    teacherTip: 'Under ⬇️ + Water 🌊 = Underwater 🤿'
                },
                {
                    word: 'Earthquake',
                    phonetic: '/ˈɜːθ.kweɪk/',
                    categoryLabel: '🟡 ESL Intermediate: Word Math (Compound Word)',
                    equation: 'Earth 🌍 + Quake ⚡ = Earthquake 🌋',
                    parts: [
                        { text: 'Earth', type: 'root', meaning: 'Ground / Planet 🌍' },
                        { text: 'Quake', type: 'root', meaning: 'Shake / Tremble ⚡' }
                    ],
                    definition: 'A sudden, violent shaking of the ground caused by tectonic shifts 🌋.',
                    sentence: 'Instruments detect an earthquake deep below the tectonic plates.',
                    teacherTip: 'Earth 🌍 + Quake ⚡ = Earthquake 🌋'
                },
                {
                    word: 'Moonlight',
                    phonetic: '/ˈmuːn.laɪt/',
                    categoryLabel: '🟡 ESL Intermediate: Word Math (Compound Word)',
                    equation: 'Moon 🌙 + Light 💡 = Moonlight 🌙',
                    parts: [
                        { text: 'Moon', type: 'root', meaning: 'Night crescent 🌙' },
                        { text: 'Light', type: 'root', meaning: 'Glow / Brightness 💡' }
                    ],
                    definition: 'The gentle silver light that comes from the moon at night 🌙.',
                    sentence: 'We could see our shadows clearly under the bright moonlight.',
                    teacherTip: 'Moon 🌙 + Light 💡 = Moonlight 🌙'
                },
                {
                    word: 'Snowflake',
                    phonetic: '/ˈsnəʊ.fleɪk/',
                    categoryLabel: '🟡 ESL Intermediate: Word Math (Compound Word)',
                    equation: 'Snow ❄️ + Flake ❄️ = Snowflake ❄️',
                    parts: [
                        { text: 'Snow', type: 'root', meaning: 'Frozen water ❄️' },
                        { text: 'Flake', type: 'root', meaning: 'Crystal piece ❄️' }
                    ],
                    definition: 'A single, delicate ice crystal that falls from winter clouds ❄️.',
                    sentence: 'Every tiny snowflake has a unique and beautiful pattern.',
                    teacherTip: 'Snow ❄️ + Flake ❄️ = Snowflake ❄️'
                }
            ],
            get prefixes() { return this.head_words; },
            get suffixes() { return this.tail_words; },
            get prefix_suffix() { return this.head_words; }
        },
        advanced: {
            head_words: [
                // im- / in- = "NOT" (The "Twin" Prefixes: im- before M or P; in- for others)
                {
                    word: 'Impossible',
                    phonetic: '/ɪmˈpɒs.ə.bəl/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (im- = NOT 🚫)',
                    equation: 'Not 🚫 + Possible 🎯 = Impossible 🚫',
                    parts: [
                        { text: 'Im-', type: 'prefix', meaning: 'Head: NOT 🚫 (before P)' },
                        { text: 'Possible', type: 'root', meaning: 'Can happen 🎯' }
                    ],
                    definition: 'Not able to occur, exist, or happen 🚫.',
                    sentence: 'Nothing is impossible if you practice and believe in yourself.',
                    teacherTip: 'possible 🎯 ➔ impossible 🚫 (Starts with lip letter P, so use im-! Cannot happen)'
                },
                {
                    word: 'Impolite',
                    phonetic: '/ˌɪm.pəlˈaɪt/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (im- = NOT 😤)',
                    equation: 'Not 😤 + Polite 🙇 = Impolite 😤',
                    parts: [
                        { text: 'Im-', type: 'prefix', meaning: 'Head: NOT 😤 (before P)' },
                        { text: 'Polite', type: 'root', meaning: 'Good manners 🙇' }
                    ],
                    definition: 'Rude; not having or showing good manners 😤.',
                    sentence: 'Interrupting someone while they are speaking is impolite.',
                    teacherTip: 'polite 🙇 ➔ impolite 😤 (Starts with P, so use im-! Rude / bad manners)'
                },
                {
                    word: 'Impatient',
                    phonetic: '/ɪmˈpeɪ.ʃənt/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (im- = NOT ⌚)',
                    equation: 'Not ⌚ + Patient ⏳ = Impatient ⌚',
                    parts: [
                        { text: 'Im-', type: 'prefix', meaning: 'Head: NOT ⌚ (before P)' },
                        { text: 'Patient', type: 'root', meaning: 'Willing to wait ⏳' }
                    ],
                    definition: 'Restless or irritated because you cannot wait ⌚.',
                    sentence: 'The puppy was impatient and barked for his dinner.',
                    teacherTip: 'patient ⏳ ➔ impatient ⌚ (Starts with P, so use im-! Cannot wait)'
                },
                {
                    word: 'Incorrect',
                    phonetic: '/ˌɪn.kərˈekt/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (in- = NOT ❌)',
                    equation: 'Not ❌ + Correct ✅ = Incorrect ❌',
                    parts: [
                        { text: 'In-', type: 'prefix', meaning: 'Head: NOT ❌' },
                        { text: 'Correct', type: 'root', meaning: 'Right / True ✅' }
                    ],
                    definition: 'Wrong; not correct or true ❌.',
                    sentence: 'Double-check your math so you do not submit an incorrect answer.',
                    teacherTip: 'correct ✅ ➔ incorrect ❌ (No M or P, so use in-! Wrong answer)'
                },
                {
                    word: 'Invisible',
                    phonetic: '/ɪnˈvɪz.ə.bəl/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (in- = NOT 👻)',
                    equation: 'Not 👻 + Visible 👀 = Invisible 👻',
                    parts: [
                        { text: 'In-', type: 'prefix', meaning: 'Head: NOT 👻' },
                        { text: 'Visible', type: 'root', meaning: 'Can be seen 👀' }
                    ],
                    definition: 'Cannot be seen with human eyes 👻.',
                    sentence: 'The air we breathe is clean and invisible.',
                    teacherTip: 'visible 👀 ➔ invisible 👻 (No M or P, so use in-! Cannot be seen)'
                },
                // over- = "TOO MUCH" vs. under- = "NOT ENOUGH"
                {
                    word: 'Oversleep',
                    phonetic: '/ˌəʊ.vəˈsliːp/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (over- = TOO MUCH ⏰)',
                    equation: 'Too Much ⏰ + Sleep 😴 = Oversleep ⏰',
                    parts: [
                        { text: 'Over-', type: 'prefix', meaning: 'Head: TOO MUCH ⏰' },
                        { text: 'Sleep', type: 'root', meaning: 'Rest 😴' }
                    ],
                    definition: 'Sleep too long past your alarm and miss the bus ⏰!',
                    sentence: 'Set your alarm so you do not oversleep for school tomorrow.',
                    teacherTip: 'sleep 😴 ➔ oversleep ⏰ (Sleep too long and miss the bus!)'
                },
                {
                    word: 'Overcook',
                    phonetic: '/ˌəʊ.vəˈkʊk/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (over- = TOO MUCH 🔥)',
                    equation: 'Too Much 🔥 + Cook 🍳 = Overcook 🔥',
                    parts: [
                        { text: 'Over-', type: 'prefix', meaning: 'Head: TOO MUCH 🔥' },
                        { text: 'Cook', type: 'root', meaning: 'Heat food 🍳' }
                    ],
                    definition: 'Cook food for too long so it gets burnt 🔥!',
                    sentence: 'Do not overcook the pizza or the crust will turn black.',
                    teacherTip: 'cook 🍳 ➔ overcook 🔥 (Cook too much—burnt!) Opposite of undercook!'
                },
                {
                    word: 'Undercook',
                    phonetic: '/ˌʌn.dəˈkʊk/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (under- = NOT ENOUGH 🥩)',
                    equation: 'Not Enough 🥩 + Cook 🍳 = Undercook 🥩',
                    parts: [
                        { text: 'Under-', type: 'prefix', meaning: 'Head: NOT ENOUGH 🥩' },
                        { text: 'Cook', type: 'root', meaning: 'Heat food 🍳' }
                    ],
                    definition: 'Not cook food enough, leaving it cold or raw 🥩.',
                    sentence: 'Never eat chicken if it is undercooked.',
                    teacherTip: 'cook 🍳 ➔ undercook 🥩 (Not cooked enough—still raw!) Opposite of overcook!'
                },
                {
                    word: 'Overpay',
                    phonetic: '/ˌəʊ.vəˈpeɪ/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (over- = TOO MUCH 💸)',
                    equation: 'Too Much 💸 + Pay 💵 = Overpay 💸',
                    parts: [
                        { text: 'Over-', type: 'prefix', meaning: 'Head: TOO MUCH 💸' },
                        { text: 'Pay', type: 'root', meaning: 'Give money 💵' }
                    ],
                    definition: 'Pay too much money for an item 💸.',
                    sentence: 'Check the price tag so you do not overpay for that toy.',
                    teacherTip: 'pay 💵 ➔ overpay 💸 (Pay too much money!) Opposite of underpay!'
                },
                {
                    word: 'Underpay',
                    phonetic: '/ˌʌn.dəˈpeɪ/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (under- = NOT ENOUGH 🪙)',
                    equation: 'Not Enough 🪙 + Pay 💵 = Underpay 🪙',
                    parts: [
                        { text: 'Under-', type: 'prefix', meaning: 'Head: NOT ENOUGH 🪙' },
                        { text: 'Pay', type: 'root', meaning: 'Give money 💵' }
                    ],
                    definition: 'Pay too little money for goods or hard work 🪙.',
                    sentence: 'The store clerk noticed Leo accidentally underpaid by one coin.',
                    teacherTip: 'pay 💵 ➔ underpay 🪙 (Pay too little!) Opposite of overpay!'
                },
                {
                    word: 'Overcrowded',
                    phonetic: '/ˌəʊ.vəˈkraʊ.dɪd/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (over- = TOO MUCH 🚌)',
                    equation: 'Too Many 👥 + Crowded 👨‍👩‍👧‍👦 = Overcrowded 🚌',
                    parts: [
                        { text: 'Over-', type: 'prefix', meaning: 'Head: TOO MUCH 👥' },
                        { text: 'Crowded', type: 'root', meaning: 'Packed 👨‍👩‍👧‍👦' }
                    ],
                    definition: 'Packed with too many people into a small space 🚌.',
                    sentence: 'The morning bus was overcrowded with passengers.',
                    teacherTip: 'crowded 👨‍👩‍👧‍👦 ➔ overcrowded 🚌 (Too many people packed together!)'
                },
                {
                    word: 'Overwater',
                    phonetic: '/ˌəʊ.vəˈwɔː.tər/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (over- = TOO MUCH 🌊)',
                    equation: 'Too Much 🌊 + Water 🪴 = Overwater 🌊',
                    parts: [
                        { text: 'Over-', type: 'prefix', meaning: 'Head: TOO MUCH 🌊' },
                        { text: 'Water', type: 'root', meaning: 'Give drink 🪴' }
                    ],
                    definition: 'Give a plant too much water so its soil drowns 🌊.',
                    sentence: 'Do not overwater the green cactus or its roots will rot.',
                    teacherTip: 'water 🪴 ➔ overwater 🌊 (Too much water!) Opposite of underwater!'
                },
                {
                    word: 'Underwater',
                    phonetic: '/ˌʌn.dəˈwɔː.tər/',
                    categoryLabel: '🔴 ESL Advanced: Head Word (under- = NOT ENOUGH 🥀)',
                    equation: 'Not Enough 🥀 + Water 🪴 = Underwater 🥀',
                    parts: [
                        { text: 'Under-', type: 'prefix', meaning: 'Head: NOT ENOUGH 🥀' },
                        { text: 'Water', type: 'root', meaning: 'Give drink 🪴' }
                    ],
                    definition: 'Give a plant not enough water, causing it to wilt and dry 🥀.',
                    sentence: 'If you underwater your houseplant, its green leaves will droop.',
                    teacherTip: 'water 🪴 ➔ underwater 🥀 (Not enough water for the plant!)'
                }
            ],
            tail_words: [
                // -tion / -sion = "THE ACT OR RESULT" (sound = "SHUN")
                {
                    word: 'Invention',
                    phonetic: '/ɪnˈven.ʃən/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-tion = SHUN 💡)',
                    equation: 'Invent 🛠️ + The Result 💡 = Invention 💡',
                    parts: [
                        { text: 'Invent', type: 'root', meaning: 'Create new 🛠️' },
                        { text: '-tion', type: 'suffix', meaning: 'Tail: THE RESULT 💡' }
                    ],
                    definition: 'Something completely new that someone designed or made 💡.',
                    sentence: 'The telephone was a revolutionary invention.',
                    teacherTip: 'invent 🛠️ ➔ invention 💡 (Makes the "SHUN" sound!)'
                },
                {
                    word: 'Celebration',
                    phonetic: '/ˌsel.əˈbreɪ.ʃən/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-tion = SHUN 🎉)',
                    equation: 'Celebrate 🥳 + The Act 🎉 = Celebration 🎉',
                    parts: [
                        { text: 'Celebrat-', type: 'root', meaning: 'Party (drop e) 🥳' },
                        { text: '-ion', type: 'suffix', meaning: 'Tail: THE ACT 🎉' }
                    ],
                    definition: 'A joyful party or event to honor a special day 🎉.',
                    sentence: 'We had a loud birthday celebration with cake and music.',
                    teacherTip: 'celebrate 🥳 ➔ celebration 🎉 (Rule: Drop the silent e first!)'
                },
                {
                    word: 'Education',
                    phonetic: '/ˌedʒ.ʊˈkeɪ.ʃən/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-tion = SHUN 🎓)',
                    equation: 'Educate 🧑‍🏫 + The Process 🎓 = Education 🎓',
                    parts: [
                        { text: 'Educat-', type: 'root', meaning: 'Teach (drop e) 🧑‍🏫' },
                        { text: '-ion', type: 'suffix', meaning: 'Tail: THE PROCESS 🎓' }
                    ],
                    definition: 'The process of learning and gaining knowledge at school 🎓.',
                    sentence: 'Reading good books is an important part of your education.',
                    teacherTip: 'educate 🧑‍🏫 ➔ education 🎓 (Rule: Drop the silent e first!)'
                },
                {
                    word: 'Confusion',
                    phonetic: '/kənˈfjuː.ʒən/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-sion = SHUN 🌀)',
                    equation: 'Confuse 😕 + The State 🌀 = Confusion 🌀',
                    parts: [
                        { text: 'Confu-', type: 'root', meaning: 'Puzzled (drop se) 😕' },
                        { text: '-sion', type: 'suffix', meaning: 'Tail: THE STATE 🌀' }
                    ],
                    definition: 'A mixed-up state where you do not understand what is happening 🌀.',
                    sentence: 'The conflicting road signs caused confusion for the driver.',
                    teacherTip: 'confuse 😕 ➔ confusion 🌀 (Rule: Drop se and add sion!)'
                },
                {
                    word: 'Decision',
                    phonetic: '/dɪˈsɪʒ.ən/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-sion = SHUN ✔️)',
                    equation: 'Decide 🤔 + The Result ✔️ = Decision ✔️',
                    parts: [
                        { text: 'Deci-', type: 'root', meaning: 'Choose (drop de) 🤔' },
                        { text: '-sion', type: 'suffix', meaning: 'Tail: THE RESULT ✔️' }
                    ],
                    definition: 'A choice you make after thinking carefully about it ✔️.',
                    sentence: 'Emma made the decision to read her book before bed.',
                    teacherTip: 'decide 🤔 ➔ decision ✔️ (Rule: Drop de and add sion!)'
                },
                // -ous = "FULL OF" vs. un-...-ous / -less = "WITHOUT" (danger, fame, courage)
                {
                    word: 'Dangerous',
                    phonetic: '/ˈdeɪn.dʒər.əs/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-ous = FULL OF ⚠️)',
                    equation: 'Danger ⚠️ + Full Of 🦈 = Dangerous ⚠️',
                    parts: [
                        { text: 'Danger', type: 'root', meaning: 'Hazard ⚠️' },
                        { text: '-ous', type: 'suffix', meaning: 'Tail: FULL OF 🦈' }
                    ],
                    definition: 'Full of danger; likely to cause harm or injury (like a hungry shark 🦈).',
                    sentence: 'Swimming with wild sharks in deep water is dangerous.',
                    teacherTip: 'danger ⚠️ ➔ dangerous (Full of danger! A hungry shark 🦈)'
                },
                {
                    word: 'Safe',
                    phonetic: '/seɪf/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (Opposite of Dangerous 🛡️)',
                    equation: 'Without Danger ❌ + Protected 🛡️ = Safe 🛡️',
                    parts: [
                        { text: 'Safe', type: 'root', meaning: 'Free from danger 🛡️' },
                        { text: '(No Danger)', type: 'suffix', meaning: 'Opposite ⚠️' }
                    ],
                    definition: 'Free from danger or injury 🛡️.',
                    sentence: 'Wearing a seatbelt keeps you safe in the car.',
                    teacherTip: 'Remind them: We don\'t say dangerless! We say safe!'
                },
                {
                    word: 'Famous',
                    phonetic: '/ˈfeɪ.məs/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-ous = FULL OF 🌟)',
                    equation: 'Fame 🌟 + Full Of ✨ = Famous 🌟',
                    parts: [
                        { text: 'Fam-', type: 'root', meaning: 'Fame (drop e) 🌟' },
                        { text: '-ous', type: 'suffix', meaning: 'Tail: FULL OF ✨' }
                    ],
                    definition: 'Known and recognized by many people everywhere (a big movie star 🌟).',
                    sentence: 'The famous astronaut signed autographs for all the children.',
                    teacherTip: 'fame 🌟 ➔ famous (Rule: Drop silent e! Known by everyone!)'
                },
                {
                    word: 'Unknown',
                    phonetic: '/ʌnˈnəʊn/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (Opposite of Famous 👤)',
                    equation: 'Not 🚫 + Known 👤 = Unknown 👤',
                    parts: [
                        { text: 'Un-', type: 'prefix', meaning: 'Head: NOT 🚫' },
                        { text: 'Known', type: 'root', meaning: 'Familiar 👤' }
                    ],
                    definition: 'Not known or familiar to anyone (without fame 👤).',
                    sentence: 'The author of the mysterious old letter remained unknown.',
                    teacherTip: 'famous 🌟 ➔ unknown 👤 (Nobody knows them / without fame)'
                },
                {
                    word: 'Courageous',
                    phonetic: '/kəˈreɪ.dʒəs/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-ous = FULL OF 🦁)',
                    equation: 'Courage 🦁 + Full Of 🛡️ = Courageous 🦁',
                    parts: [
                        { text: 'Courage', type: 'root', meaning: 'Bravery 🦁' },
                        { text: '-ous', type: 'suffix', meaning: 'Tail: FULL OF 🛡️' }
                    ],
                    definition: 'Full of courage and bravery in the face of danger 🦁.',
                    sentence: 'The courageous firefighters saved the family from the smoke.',
                    teacherTip: 'courage 🦁 ➔ courageous (Full of bravery! A brave knight)'
                },
                {
                    word: 'Fearless',
                    phonetic: '/ˈfɪə.ləs/',
                    categoryLabel: '🔴 ESL Advanced: Tail Word (-less = ZERO ❌)',
                    equation: 'Fear 😨 + Zero ❌ = Fearless 🦅',
                    parts: [
                        { text: 'Fear', type: 'root', meaning: 'Fright 😨' },
                        { text: '-less', type: 'suffix', meaning: 'Tail: ZERO / NONE ❌' }
                    ],
                    definition: 'Having zero fear; completely brave and bold 🦅.',
                    sentence: 'The fearless explorer climbed to the top of the windy peak.',
                    teacherTip: 'fear 😨 ➔ fearless (Zero fear! Direct opposite of fearful)'
                }
            ],
            compound: [
                {
                    word: 'Skyscraper',
                    phonetic: '/ˈskaɪˌskreɪ.pər/',
                    categoryLabel: '🔴 ESL Advanced: Word Math (Compound Word)',
                    equation: 'Sky ☁️ + Scraper 🏙️ = Skyscraper 🏙️',
                    parts: [
                        { text: 'Sky', type: 'root', meaning: 'Atmosphere ☁️' },
                        { text: 'Scraper', type: 'root', meaning: 'Touches clouds 🏙️' }
                    ],
                    definition: 'A very tall, modern building with many floors reaching toward the clouds 🏙️.',
                    sentence: 'The shiny skyscraper reached up into the white clouds.',
                    teacherTip: 'Sky ☁️ + Scraper 🏙️ = Skyscraper 🏙️'
                },
                {
                    word: 'Masterpiece',
                    phonetic: '/ˈmɑː.stə.piːs/',
                    categoryLabel: '🔴 ESL Advanced: Word Math (Compound Word)',
                    equation: 'Master 🎨 + Piece 🖼️ = Masterpiece 🖼️',
                    parts: [
                        { text: 'Master', type: 'root', meaning: 'Great artist 🎨' },
                        { text: 'Piece', type: 'root', meaning: 'Artwork 🖼️' }
                    ],
                    definition: 'A work of outstanding artistry, craftsmanship, or skill 🖼️.',
                    sentence: 'The artist painted a colorful masterpiece on the gallery wall.',
                    teacherTip: 'Master 🎨 + Piece 🖼️ = Masterpiece 🖼️'
                },
                {
                    word: 'Brainstorm',
                    phonetic: '/ˈbreɪn.stɔːm/',
                    categoryLabel: '🔴 ESL Advanced: Word Math (Compound Word)',
                    equation: 'Brain 🧠 + Storm ⚡ = Brainstorm 💡',
                    parts: [
                        { text: 'Brain', type: 'root', meaning: 'Mind 🧠' },
                        { text: 'Storm', type: 'root', meaning: 'Rush of energy ⚡' }
                    ],
                    definition: 'To think of lots of creative ideas together as a team 💡.',
                    sentence: 'Let us brainstorm ideas for our school science project.',
                    teacherTip: 'Brain 🧠 + Storm ⚡ = Brainstorm 💡'
                },
                {
                    word: 'Crosswalk',
                    phonetic: '/ˈkrɒs.wɔːk/',
                    categoryLabel: '🔴 ESL Advanced: Word Math (Compound Word)',
                    equation: 'Cross 🚸 + Walk 🚶 = Crosswalk 🚸',
                    parts: [
                        { text: 'Cross', type: 'root', meaning: 'Go across street 🚸' },
                        { text: 'Walk', type: 'root', meaning: 'Step on foot 🚶' }
                    ],
                    definition: 'A marked street lane where pedestrians can safely cross the road 🚸.',
                    sentence: 'Always look both ways before stepping onto the crosswalk.',
                    teacherTip: 'Cross 🚸 + Walk 🚶 = Crosswalk 🚸'
                },
                {
                    word: 'Lighthouse',
                    phonetic: '/ˈlaɪt.haʊs/',
                    categoryLabel: '🔴 ESL Advanced: Word Math (Compound Word)',
                    equation: 'Light 💡 + House 🏠 = Lighthouse 🗼',
                    parts: [
                        { text: 'Light', type: 'root', meaning: 'Warning beam 💡' },
                        { text: 'House', type: 'root', meaning: 'Tower building 🏠' }
                    ],
                    definition: 'A tall tower with a bright revolving light that guides ships safely away from rocks 🗼.',
                    sentence: 'The beam from the tall lighthouse guided the ships through the dark fog.',
                    teacherTip: 'Light 💡 + House 🏠 = Lighthouse 🗼'
                }
            ],
            get prefixes() { return this.head_words; },
            get suffixes() { return this.tail_words; },
            get prefix_suffix() { return this.head_words; }
        }
    };

    /* ==========================================================================
       2. SVG VECTOR GRAPHICS ENGINE
       Outputs clean SVG markup for zero-dependency visuals.
       ========================================================================== */

    function getSVGGraphic(type, color = '#6c5ce7') {
        const svgHeader = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">`;
        const svgFooter = `</svg>`;

        switch (type) {
            case 'apple':
                return `${svgHeader}
                    <path d="M50 22 C35 8, 15 25, 15 58 C15 82, 38 92, 50 92 C62 92, 85 82, 85 58 C85 25, 65 8, 50 22 Z" fill="#ff4d4d"/>
                    <path d="M50 22 Q56 10 68 12" stroke="#27ae60" stroke-width="5" stroke-linecap="round" fill="none"/>
                    <ellipse cx="68" cy="12" rx="10" ry="5" fill="#2ecc71" transform="rotate(-20 68 12)"/>
                    <ellipse cx="32" cy="42" rx="5" ry="12" fill="#fff" opacity="0.35"/>
                ${svgFooter}`;

            case 'bear':
                return `${svgHeader}
                    <circle cx="22" cy="22" r="16" fill="#8d6e63"/>
                    <circle cx="22" cy="22" r="9" fill="#ffab91"/>
                    <circle cx="78" cy="22" r="16" fill="#8d6e63"/>
                    <circle cx="78" cy="22" r="9" fill="#ffab91"/>
                    <circle cx="50" cy="55" r="36" fill="#8d6e63"/>
                    <ellipse cx="50" cy="65" rx="20" ry="15" fill="#d7ccc8"/>
                    <ellipse cx="50" cy="58" rx="8" ry="6" fill="#3e2723"/>
                    <circle cx="36" cy="46" r="4.5" fill="#3e2723"/>
                    <circle cx="64" cy="46" r="4.5" fill="#3e2723"/>
                    <circle cx="38" cy="44" r="1.5" fill="#fff"/>
                    <circle cx="66" cy="44" r="1.5" fill="#fff"/>
                    <path d="M44 68 Q50 74 56 68" stroke="#3e2723" stroke-width="3" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'cat':
                return `${svgHeader}
                    <!-- Orange Tabby Cat with pointed ears, cheeks, nose, whiskers, and cute mouth -->
                    <!-- Ears -->
                    <polygon points="18,12 38,42 12,42" fill="#ff793f"/>
                    <polygon points="22,18 34,38 16,38" fill="#ffb8b8"/>
                    <polygon points="82,12 62,42 88,42" fill="#ff793f"/>
                    <polygon points="78,18 66,38 84,38" fill="#ffb8b8"/>
                    <!-- Head -->
                    <circle cx="50" cy="54" r="34" fill="#ff793f"/>
                    <!-- White Muzzle -->
                    <ellipse cx="50" cy="65" rx="16" ry="11" fill="#ffffff"/>
                    <!-- Eyes with catchlight -->
                    <ellipse cx="36" cy="48" rx="7" ry="9" fill="#2ecc71"/>
                    <ellipse cx="64" cy="48" rx="7" ry="9" fill="#2ecc71"/>
                    <circle cx="36" cy="48" r="4" fill="#2d3436"/>
                    <circle cx="64" cy="48" r="4" fill="#2d3436"/>
                    <circle cx="34" cy="45" r="2" fill="#fff"/>
                    <circle cx="62" cy="45" r="2" fill="#fff"/>
                    <!-- Pink Nose -->
                    <polygon points="50,60 44,65 56,65" fill="#fd79a8"/>
                    <!-- Cat Mouth -->
                    <path d="M44 68 Q50 74 56 68" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <!-- Whiskers -->
                    <path d="M12 56 L32 58 M10 64 L32 63 M14 72 L34 68" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M88 56 L68 58 M90 64 L68 63 M86 72 L66 68" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'dog':
                return `${svgHeader}
                    <ellipse cx="18" cy="45" rx="12" ry="28" fill="#795548"/>
                    <ellipse cx="82" cy="45" rx="12" ry="28" fill="#795548"/>
                    <circle cx="50" cy="50" r="34" fill="#f39c12"/>
                    <ellipse cx="50" cy="62" rx="18" ry="14" fill="#fff8e1"/>
                    <ellipse cx="50" cy="56" rx="8" ry="6" fill="#2c3e50"/>
                    <circle cx="36" cy="44" r="4" fill="#2c3e50"/>
                    <circle cx="64" cy="44" r="4" fill="#2c3e50"/>
                    <path d="M46 64 Q50 72 54 64" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <path d="M48 68 C48 78, 52 78, 52 68 Z" fill="#ff5252"/>
                ${svgFooter}`;

            case 'elephant':
                return `${svgHeader}
                    <!-- Friendly Blue-Grey Elephant with giant ears, long curved trunk, white tusks, and smiling mouth -->
                    <!-- Big Floppy Ears behind -->
                    <circle cx="18" cy="45" r="22" fill="#a4b0be"/>
                    <circle cx="18" cy="45" r="14" fill="#ffb8b8"/>
                    <circle cx="82" cy="45" r="22" fill="#a4b0be"/>
                    <circle cx="82" cy="45" r="14" fill="#ffb8b8"/>
                    <!-- Main Head -->
                    <circle cx="50" cy="48" r="32" fill="#747d8c"/>
                    <!-- Cute Eyes -->
                    <circle cx="36" cy="42" r="5" fill="#fff"/>
                    <circle cx="64" cy="42" r="5" fill="#fff"/>
                    <circle cx="36" cy="42" r="3" fill="#2d3436"/>
                    <circle cx="64" cy="42" r="3" fill="#2d3436"/>
                    <circle cx="34" cy="40" r="1.5" fill="#fff"/>
                    <circle cx="62" cy="40" r="1.5" fill="#fff"/>
                    <!-- Rosy Cheeks -->
                    <circle cx="28" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                    <circle cx="72" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                    <!-- White Tusks -->
                    <path d="M38 58 Q34 68 28 66 Q36 60 42 56 Z" fill="#ffffff"/>
                    <path d="M62 58 Q66 68 72 66 Q64 60 58 56 Z" fill="#ffffff"/>
                    <!-- Long Trumpeting Elephant Trunk in front -->
                    <path d="M44 52 C44 78, 68 85, 68 68 C68 60, 58 64, 58 68" stroke="#747d8c" stroke-width="12" stroke-linecap="round" fill="none"/>
                    <path d="M44 52 C44 78, 68 85, 68 68 C68 60, 58 64, 58 68" stroke="#57606f" stroke-width="2" stroke-linecap="round" fill="none"/>
                    <!-- Water Sprinkles from trunk -->
                    <circle cx="64" cy="52" r="3" fill="#70a1ff"/>
                    <circle cx="74" cy="56" r="4" fill="#70a1ff"/>
                ${svgFooter}`;

            case 'fish':
                return `${svgHeader}
                    <ellipse cx="44" cy="50" rx="34" ry="24" fill="#ff793f"/>
                    <polygon points="75,50 96,30 96,70" fill="#ff793f"/>
                    <path d="M35 27 C42 40, 42 60, 35 73" stroke="#fff" stroke-width="7" fill="none"/>
                    <path d="M55 26 C62 40, 62 60, 55 74" stroke="#fff" stroke-width="7" fill="none"/>
                    <circle cx="26" cy="42" r="6" fill="#fff"/>
                    <circle cx="26" cy="42" r="3" fill="#000"/>
                    <circle cx="27" cy="40" r="1" fill="#fff"/>
                ${svgFooter}`;

            case 'giraffe':
                return `${svgHeader}
                    <rect x="40" y="32" width="20" height="58" rx="10" fill="#f1c40f"/>
                    <circle cx="50" cy="28" r="20" fill="#f1c40f"/>
                    <line x1="40" y1="10" x2="40" y2="20" stroke="#d63031" stroke-width="4"/>
                    <line x1="60" y1="10" x2="60" y2="20" stroke="#d63031" stroke-width="4"/>
                    <circle cx="40" cy="9" r="4" fill="#d63031"/>
                    <circle cx="60" cy="9" r="4" fill="#d63031"/>
                    <circle cx="42" cy="24" r="3.5" fill="#000"/>
                    <circle cx="58" cy="24" r="3.5" fill="#000"/>
                    <ellipse cx="50" cy="34" rx="12" ry="7" fill="#ffeaa7"/>
                    <circle cx="44" cy="50" r="5" fill="#e67e22"/>
                    <circle cx="56" cy="65" r="6" fill="#e67e22"/>
                    <circle cx="46" cy="78" r="5" fill="#e67e22"/>
                ${svgFooter}`;

            case 'house':
                return `${svgHeader}
                    <polygon points="50,10 8,46 92,46" fill="#ff5252"/>
                    <rect x="18" y="46" width="64" height="46" fill="#ffeaa7"/>
                    <rect x="42" y="60" width="16" height="32" fill="#795548"/>
                    <circle cx="54" cy="76" r="2" fill="#f1c40f"/>
                    <rect x="25" y="54" width="14" height="16" fill="#74b9ff" stroke="#fff" stroke-width="2"/>
                    <rect x="61" y="54" width="14" height="16" fill="#74b9ff" stroke="#fff" stroke-width="2"/>
                    <rect x="70" y="18" width="10" height="18" fill="#b2bec3"/>
                ${svgFooter}`;

            case 'icecream':
                return `${svgHeader}
                    <polygon points="50,92 28,48 72,48" fill="#e17055"/>
                    <path d="M28 48 L72 48" stroke="#d63031" stroke-width="2"/>
                    <circle cx="50" cy="40" r="18" fill="#ff7675"/>
                    <circle cx="38" cy="44" r="14" fill="#ffeaa7"/>
                    <circle cx="62" cy="44" r="14" fill="#55efc4"/>
                    <circle cx="50" cy="18" r="7" fill="#d63031"/>
                    <path d="M50 11 Q54 6 60 8" stroke="#27ae60" stroke-width="3" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'jellyfish':
                return `${svgHeader}
                    <path d="M18 48 C18 16, 82 16, 82 48 C82 55, 18 55, 18 48 Z" fill="#e84393"/>
                    <circle cx="36" cy="36" r="4" fill="#fff"/>
                    <circle cx="64" cy="36" r="4" fill="#fff"/>
                    <circle cx="36" cy="36" r="2" fill="#000"/>
                    <circle cx="64" cy="36" r="2" fill="#000"/>
                    <path d="M26 55 Q20 75 28 92" stroke="#fd79a8" stroke-width="5" stroke-linecap="round" fill="none"/>
                    <path d="M42 55 Q48 75 40 92" stroke="#ffeaa7" stroke-width="5" stroke-linecap="round" fill="none"/>
                    <path d="M58 55 Q52 75 60 92" stroke="#74b9ff" stroke-width="5" stroke-linecap="round" fill="none"/>
                    <path d="M74 55 Q80 75 72 92" stroke="#55efc4" stroke-width="5" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'kite':
                return `${svgHeader}
                    <!-- Diamond Kite with colorful quadrants, tail, and ribbons -->
                    <polygon points="50,10 85,45 50,88 15,45" fill="#ff7675"/>
                    <polygon points="50,10 85,45 50,45" fill="#74b9ff"/>
                    <polygon points="15,45 50,45 50,88" fill="#ffeaa7"/>
                    <polygon points="50,45 85,45 50,88" fill="#55efc4"/>
                    <line x1="50" y1="10" x2="50" y2="88" stroke="#fff" stroke-width="3"/>
                    <line x1="15" y1="45" x2="85" y2="45" stroke="#fff" stroke-width="3"/>
                    <!-- Bows on tail -->
                    <path d="M50 88 Q65 92 52 98" stroke="#2d3436" stroke-width="2" fill="none"/>
                    <polygon points="52,98 46,94 48,100" fill="#e84393"/>
                    <polygon points="52,98 58,94 56,100" fill="#fdcb6e"/>
                ${svgFooter}`;

            case 'lion':
                return `${svgHeader}
                    <!-- Instantly Recognizable King Lion with big golden mane rays, ears, yellow face, pink nose & smile -->
                    <!-- Sunburst Golden Mane -->
                    <g fill="#e67e22">
                        <circle cx="50" cy="14" r="12"/>
                        <circle cx="76" cy="22" r="12"/>
                        <circle cx="88" cy="46" r="12"/>
                        <circle cx="80" cy="72" r="12"/>
                        <circle cx="50" cy="86" r="12"/>
                        <circle cx="20" cy="72" r="12"/>
                        <circle cx="12" cy="46" r="12"/>
                        <circle cx="24" cy="22" r="12"/>
                    </g>
                    <!-- Inner Orange Mane ring -->
                    <circle cx="50" cy="50" r="36" fill="#d35400"/>
                    <!-- Ears sticking out -->
                    <circle cx="28" cy="24" r="8" fill="#f1c40f"/>
                    <circle cx="72" cy="24" r="8" fill="#f1c40f"/>
                    <circle cx="28" cy="24" r="4" fill="#e67e22"/>
                    <circle cx="72" cy="24" r="4" fill="#e67e22"/>
                    <!-- Bright Yellow Face -->
                    <circle cx="50" cy="52" r="28" fill="#f1c40f"/>
                    <!-- Cream Muzzle -->
                    <ellipse cx="50" cy="62" rx="14" ry="10" fill="#ffeaa7"/>
                    <!-- Eyes & Highlights -->
                    <circle cx="38" cy="44" r="4" fill="#2d3436"/>
                    <circle cx="62" cy="44" r="4" fill="#2d3436"/>
                    <circle cx="36" cy="42" r="1.5" fill="#fff"/>
                    <circle cx="60" cy="42" r="1.5" fill="#fff"/>
                    <!-- Dark Pink Triangle Nose -->
                    <polygon points="50,56 44,62 56,62" fill="#d63031"/>
                    <!-- Happy Smiling Mouth -->
                    <path d="M44 65 Q50 72 56 65" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <!-- Whiskers -->
                    <line x1="26" y1="58" x2="36" y2="60" stroke="#2d3436" stroke-width="2"/>
                    <line x1="74" y1="58" x2="64" y2="60" stroke="#2d3436" stroke-width="2"/>
                ${svgFooter}`;

            case 'moon':
                return `${svgHeader}
                    <!-- Crescent Moon with sleeping cute face and stars -->
                    <path d="M60 12 A38 38 0 1 0 88 68 A30 30 0 1 1 60 12 Z" fill="#f1c40f"/>
                    <!-- Sleeping eye -->
                    <path d="M38 52 Q44 58 50 52" stroke="#d35400" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <!-- Rosy cheek -->
                    <circle cx="36" cy="58" r="4" fill="#ff7675" opacity="0.6"/>
                    <!-- Night Sparkle Stars -->
                    <polygon points="78,20 81,26 87,27 82,31 84,37 78,34 72,37 74,31 69,27 75,26" fill="#ffeaa7"/>
                    <polygon points="20,20 22,24 26,25 23,28 24,32 20,30 16,32 17,28 14,25 18,24" fill="#ffeaa7"/>
                ${svgFooter}`;

            case 'nest':
                return `${svgHeader}
                    <!-- Nest with 3 pastel eggs and twigs -->
                    <ellipse cx="34" cy="42" rx="9" ry="14" fill="#74b9ff"/>
                    <ellipse cx="50" cy="38" rx="10" ry="15" fill="#fd79a8"/>
                    <ellipse cx="66" cy="42" rx="9" ry="14" fill="#55efc4"/>
                    <!-- Eggs polka dots -->
                    <circle cx="34" cy="40" r="1.5" fill="#fff"/>
                    <circle cx="50" cy="36" r="2" fill="#fff"/>
                    <circle cx="66" cy="44" r="1.5" fill="#fff"/>
                    <!-- Woven Bowl -->
                    <path d="M12 48 C12 82, 88 82, 88 48 C78 90, 22 90, 12 48 Z" fill="#795548"/>
                    <path d="M16 54 Q50 68 84 54 M20 64 Q50 78 80 64" stroke="#5d4037" stroke-width="3" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'owl':
                return `${svgHeader}
                    <!-- Purple Owl with big glossy eyes and feather tummy -->
                    <ellipse cx="50" cy="55" rx="32" ry="36" fill="#6c5ce7"/>
                    <!-- Ears -->
                    <polygon points="22,28 32,18 36,32" fill="#5f27cd"/>
                    <polygon points="78,28 68,18 64,32" fill="#5f27cd"/>
                    <!-- White eye patches -->
                    <circle cx="36" cy="42" r="13" fill="#fff"/>
                    <circle cx="64" cy="42" r="13" fill="#fff"/>
                    <circle cx="36" cy="42" r="6" fill="#2d3436"/>
                    <circle cx="64" cy="42" r="6" fill="#2d3436"/>
                    <circle cx="34" cy="40" r="2" fill="#fff"/>
                    <circle cx="62" cy="40" r="2" fill="#fff"/>
                    <!-- Beak -->
                    <polygon points="50,46 44,54 56,54" fill="#e17055"/>
                    <!-- Tummy scalloped feathers -->
                    <path d="M38 68 Q44 74 50 68 Q56 74 62 68 M44 76 Q50 82 56 76" stroke="#a29bfe" stroke-width="3" fill="none"/>
                ${svgFooter}`;

            case 'penguin':
                return `${svgHeader}
                    <!-- Penguin in black tuxedo with orange beak & feet -->
                    <ellipse cx="50" cy="54" rx="30" ry="38" fill="#2d3436"/>
                    <!-- White belly -->
                    <ellipse cx="50" cy="60" rx="20" ry="28" fill="#ffffff"/>
                    <!-- Wings -->
                    <ellipse cx="18" cy="56" rx="8" ry="20" fill="#2d3436" transform="rotate(15 18 56)"/>
                    <ellipse cx="82" cy="56" rx="8" ry="20" fill="#2d3436" transform="rotate(-15 82 56)"/>
                    <!-- Eyes -->
                    <circle cx="40" cy="36" r="4" fill="#2d3436"/>
                    <circle cx="60" cy="36" r="4" fill="#2d3436"/>
                    <circle cx="39" cy="34" r="1.5" fill="#fff"/>
                    <circle cx="59" cy="34" r="1.5" fill="#fff"/>
                    <!-- Beak -->
                    <polygon points="50,40 42,48 58,48" fill="#ff7675"/>
                    <!-- Feet -->
                    <ellipse cx="38" cy="90" rx="10" ry="5" fill="#e17055"/>
                    <ellipse cx="62" cy="90" rx="10" ry="5" fill="#e17055"/>
                ${svgFooter}`;

            case 'queen':
                return `${svgHeader}
                    <!-- Sparkly Golden Crown with gems -->
                    <polygon points="12,72 18,22 36,48 50,15 64,48 82,22 88,72" fill="#f1c40f"/>
                    <rect x="12" y="72" width="76" height="14" rx="4" fill="#e67e22"/>
                    <!-- Jewels on tips -->
                    <circle cx="18" cy="20" r="5" fill="#e84393"/>
                    <circle cx="50" cy="13" r="6" fill="#0984e3"/>
                    <circle cx="82" cy="20" r="5" fill="#e84393"/>
                    <!-- Jewels on band -->
                    <circle cx="28" cy="79" r="4" fill="#55efc4"/>
                    <circle cx="50" cy="79" r="4" fill="#e84393"/>
                    <circle cx="72" cy="79" r="4" fill="#55efc4"/>
                ${svgFooter}`;

            case 'rocket':
                return `${svgHeader}
                    <!-- Red and Silver Space Rocket with fire blast -->
                    <path d="M50 10 C30 35, 30 70, 30 70 L70 70 C70 70, 70 35, 50 10 Z" fill="#d63031"/>
                    <path d="M40 10 C35 35, 35 70, 35 70 L50 70 L50 10 Z" fill="#ff7675"/>
                    <!-- Porthole Window -->
                    <circle cx="50" cy="42" r="12" fill="#74b9ff"/>
                    <circle cx="50" cy="42" r="9" fill="#e0f7fa"/>
                    <circle cx="47" cy="39" r="3" fill="#fff"/>
                    <!-- Fins -->
                    <polygon points="30,55 12,80 30,75" fill="#0984e3"/>
                    <polygon points="70,55 88,80 70,75" fill="#0984e3"/>
                    <!-- Thruster Flame -->
                    <polygon points="38,70 50,96 62,70" fill="#ff7675"/>
                    <polygon points="42,70 50,90 58,70" fill="#f1c40f"/>
                ${svgFooter}`;

            case 'sun':
                return `${svgHeader}
                    <!-- Bright Yellow Smiling Sun with rays -->
                    <circle cx="50" cy="50" r="26" fill="${color || '#f1c40f'}"/>
                    <g stroke="${color || '#f1c40f'}" stroke-width="6" stroke-linecap="round">
                        <line x1="50" y1="8" x2="50" y2="18"/><line x1="50" y1="82" x2="50" y2="92"/>
                        <line x1="8" y1="50" x2="18" y2="50"/><line x1="82" y1="50" x2="92" y2="50"/>
                        <line x1="20" y1="20" x2="28" y2="28"/><line x1="72" y1="72" x2="80" y2="80"/>
                        <line x1="20" y1="80" x2="28" y2="72"/><line x1="72" y1="28" x2="80" y2="20"/>
                    </g>
                    <!-- Smile face -->
                    <circle cx="42" cy="44" r="3" fill="#d35400"/>
                    <circle cx="58" cy="44" r="3" fill="#d35400"/>
                    <path d="M40 54 Q50 62 60 54" stroke="#d35400" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <circle cx="38" cy="52" r="3" fill="#ff7675" opacity="0.6"/>
                    <circle cx="62" cy="52" r="3" fill="#ff7675" opacity="0.6"/>
                ${svgFooter}`;

            case 'star':
                return `${svgHeader}
                    <!-- Yellow Glowing Star with friendly face -->
                    <polygon points="50,8 63,36 93,36 68,54 78,84 50,66 22,84 32,54 7,36 37,36" fill="${color || '#f1c40f'}"/>
                    <circle cx="42" cy="44" r="3" fill="#d35400"/>
                    <circle cx="58" cy="44" r="3" fill="#d35400"/>
                    <path d="M44 52 Q50 58 56 52" stroke="#d35400" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'heart':
                return `${svgHeader}
                    <!-- Bright Pink Heart with glossy shine -->
                    <path d="M50 30 C35 10, 10 25, 10 50 C10 72, 40 86, 50 96 C60 86, 90 72, 90 50 C90 25, 65 10, 50 30 Z" fill="${color || '#fd79a8'}"/>
                    <path d="M25 32 C20 38, 20 48, 22 52" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7"/>
                ${svgFooter}`;

            case 'tree':
                return `${svgHeader}
                    <!-- Clean Simple Oak Tree with brown trunk & fluffy green canopy -->
                    <!-- Brown Trunk -->
                    <rect x="42" y="52" width="16" height="40" rx="4" fill="#795548"/>
                    <!-- Fluffy Green Leaf Canopy -->
                    <circle cx="50" cy="42" r="30" fill="#2ecc71"/>
                    <circle cx="32" cy="34" r="20" fill="#27ae60"/>
                    <circle cx="68" cy="34" r="20" fill="#27ae60"/>
                    <circle cx="50" cy="24" r="22" fill="#2ecc71"/>
                ${svgFooter}`;

            case 'bird':
                return `${svgHeader}
                    <!-- Cute Pink Songbird with 2 distinct standing legs -->
                    <circle cx="48" cy="42" r="26" fill="#fd79a8"/>
                    <!-- Wing -->
                    <path d="M48 42 Q70 24 82 42 Q64 54 48 42 Z" fill="#e84393"/>
                    <!-- Eye & Shine -->
                    <circle cx="34" cy="36" r="4.5" fill="#2d3436"/>
                    <circle cx="32" cy="34" r="1.5" fill="#fff"/>
                    <!-- Orange Beak -->
                    <polygon points="22,38 8,42 22,48" fill="#ff7675"/>
                    <!-- Tail Feathers -->
                    <polygon points="72,42 88,34 82,50" fill="#e84393"/>
                    <!-- 2 Standing Legs & Feet -->
                    <!-- Left Leg -->
                    <path d="M38 66 L38 86 M38 86 L32 88 M38 86 L44 88" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
                    <!-- Right Leg -->
                    <path d="M56 66 L56 86 M56 86 L50 88 M56 86 L62 88" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'book':
                return `${svgHeader}
                    <!-- Red Story Book closed with pages showing on right -->
                    <!-- Back Cover -->
                    <rect x="18" y="16" width="66" height="68" rx="6" fill="#c0392b"/>
                    <!-- Pages -->
                    <rect x="24" y="20" width="58" height="60" rx="4" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                    <!-- Front Red Cover -->
                    <rect x="18" y="16" width="58" height="68" rx="6" fill="#e74c3c"/>
                    <!-- Gold Star on cover -->
                    <polygon points="47,38 51,48 61,48 53,54 56,64 47,58 38,64 41,54 33,48 43,48" fill="#f1c40f"/>
                    <!-- Book Spine line -->
                    <line x1="22" y1="16" x2="22" y2="84" stroke="#962d22" stroke-width="4"/>
                ${svgFooter}`;

            case 'car':
                return `${svgHeader}
                    <!-- Bright Red Toy Car with wheels, windows, & headlights -->
                    <!-- Main Body -->
                    <path d="M12 60 L22 36 Q30 30 50 30 Q70 30 78 36 L88 60 Z" fill="#e74c3c"/>
                    <rect x="8" y="54" width="84" height="24" rx="8" fill="#c0392b"/>
                    <!-- Windows -->
                    <path d="M26 38 L46 38 L46 54 L20 54 Z" fill="#74b9ff"/>
                    <path d="M54 38 L74 38 L80 54 L54 54 Z" fill="#74b9ff"/>
                    <!-- Yellow Headlight -->
                    <circle cx="88" cy="62" r="5" fill="#f1c40f"/>
                    <!-- Wheels -->
                    <circle cx="28" cy="78" r="11" fill="#2d3436"/>
                    <circle cx="72" cy="78" r="11" fill="#2d3436"/>
                    <circle cx="28" cy="78" r="5" fill="#b2bec3"/>
                    <circle cx="72" cy="78" r="5" fill="#b2bec3"/>
                ${svgFooter}`;

            case 'monkey':
                return `${svgHeader}
                    <!-- Cheerful Brown Monkey Face with big ears & smile -->
                    <!-- Ears -->
                    <circle cx="16" cy="46" r="14" fill="#795548"/>
                    <circle cx="16" cy="46" r="8" fill="#ffeaa7"/>
                    <circle cx="84" cy="46" r="14" fill="#795548"/>
                    <circle cx="84" cy="46" r="8" fill="#ffeaa7"/>
                    <!-- Head -->
                    <circle cx="50" cy="48" r="32" fill="#795548"/>
                    <!-- Muzzle / Face Mask -->
                    <ellipse cx="50" cy="56" rx="20" ry="16" fill="#ffeaa7"/>
                    <ellipse cx="38" cy="40" rx="10" ry="12" fill="#ffeaa7"/>
                    <ellipse cx="62" cy="40" rx="10" ry="12" fill="#ffeaa7"/>
                    <!-- Eyes -->
                    <circle cx="38" cy="40" r="4" fill="#2d3436"/>
                    <circle cx="62" cy="40" r="4" fill="#2d3436"/>
                    <circle cx="36" cy="38" r="1.5" fill="#fff"/>
                    <circle cx="60" cy="38" r="1.5" fill="#fff"/>
                    <!-- Nose -->
                    <ellipse cx="50" cy="50" rx="5" ry="3.5" fill="#5d4037"/>
                    <!-- Smiling Mouth -->
                    <path d="M40 58 Q50 67 60 58" stroke="#5d4037" stroke-width="3" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'umbrella':
                return `${svgHeader}
                    <!-- Rainbow Striped Umbrella -->
                    <path d="M10 50 C10 18, 90 18, 90 50 Z" fill="#ff7675"/>
                    <path d="M26 50 C26 22, 74 22, 74 50 Z" fill="#f1c40f"/>
                    <path d="M40 50 C40 26, 60 26, 60 50 Z" fill="#74b9ff"/>
                    <line x1="50" y1="48" x2="50" y2="84" stroke="#2d3436" stroke-width="4"/>
                    <path d="M50 84 Q50 94 40 90" stroke="#2d3436" stroke-width="4" stroke-linecap="round" fill="none"/>
                    <circle cx="50" cy="18" r="3" fill="#2d3436"/>
                ${svgFooter}`;

            case 'violin':
                return `${svgHeader}
                    <!-- Wooden Violin / Fiddle with strings & bow -->
                    <path d="M35 25 C28 35, 45 45, 32 62 C26 76, 74 76, 68 62 C55 45, 72 35, 65 25 Z" fill="#e17055"/>
                    <path d="M38 28 C32 37, 46 45, 36 60 C32 70, 68 70, 64 60 C54 45, 68 37, 62 28 Z" fill="#d35400"/>
                    <!-- Neck -->
                    <rect x="47" y="6" width="6" height="24" fill="#5d4037"/>
                    <!-- F-holes -->
                    <path d="M38 48 Q35 52 38 56 M62 48 Q65 52 62 56" stroke="#2d3436" stroke-width="2.5" fill="none"/>
                    <!-- Strings -->
                    <line x1="48" y1="6" x2="48" y2="70" stroke="#fff" stroke-width="1.5"/>
                    <line x1="52" y1="6" x2="52" y2="70" stroke="#fff" stroke-width="1.5"/>
                ${svgFooter}`;

            case 'watermelon':
                return `${svgHeader}
                    <!-- Juicy Watermelon Slice with seeds -->
                    <path d="M10 30 C10 82, 90 82, 90 30 Z" fill="#2ecc71"/>
                    <path d="M14 30 C14 76, 86 76, 86 30 Z" fill="#fff"/>
                    <path d="M18 30 C18 70, 82 70, 82 30 Z" fill="#ff7675"/>
                    <!-- Black Seeds -->
                    <ellipse cx="32" cy="44" rx="2" ry="4" fill="#2d3436"/>
                    <ellipse cx="50" cy="56" rx="2" ry="4" fill="#2d3436"/>
                    <ellipse cx="68" cy="44" rx="2" ry="4" fill="#2d3436"/>
                    <ellipse cx="40" cy="36" rx="2" ry="4" fill="#2d3436"/>
                    <ellipse cx="60" cy="36" rx="2" ry="4" fill="#2d3436"/>
                ${svgFooter}`;

            case 'xylophone':
                return `${svgHeader}
                    <!-- Rainbow Xylophone Bars with Mallets -->
                    <rect x="10" y="16" width="80" height="11" rx="4" fill="#ff7675"/>
                    <rect x="14" y="31" width="72" height="11" rx="4" fill="#fdcb6e"/>
                    <rect x="18" y="46" width="64" height="11" rx="4" fill="#55efc4"/>
                    <rect x="22" y="61" width="56" height="11" rx="4" fill="#74b9ff"/>
                    <rect x="26" y="76" width="48" height="11" rx="4" fill="#a29bfe"/>
                    <!-- Pins -->
                    <circle cx="16" cy="21.5" r="2" fill="#fff"/><circle cx="84" cy="21.5" r="2" fill="#fff"/>
                    <circle cx="20" cy="36.5" r="2" fill="#fff"/><circle cx="80" cy="36.5" r="2" fill="#fff"/>
                    <circle cx="24" cy="51.5" r="2" fill="#fff"/><circle cx="76" cy="51.5" r="2" fill="#fff"/>
                ${svgFooter}`;

            case 'yacht':
                return `${svgHeader}
                    <!-- Sailboat / Yacht on blue waves -->
                    <path d="M15 64 L85 64 L72 85 L28 85 Z" fill="#0984e3"/>
                    <!-- Deck line -->
                    <line x1="15" y1="64" x2="85" y2="64" stroke="#74b9ff" stroke-width="3"/>
                    <!-- Sails -->
                    <polygon points="48,12 48,60 15,60" fill="#ff7675"/>
                    <polygon points="52,20 52,60 82,60" fill="#ffeaa7"/>
                    <!-- Waves -->
                    <path d="M5 86 Q25 94 45 86 Q65 94 85 86 Q95 90 100 86" stroke="#74b9ff" stroke-width="4" fill="none"/>
                ${svgFooter}`;

            case 'zebra':
                return `${svgHeader}
                    <!-- Cute Zebra head with black and white stripes -->
                    <ellipse cx="50" cy="50" rx="30" ry="36" fill="#ffffff"/>
                    <ellipse cx="50" cy="50" rx="30" ry="36" stroke="#2d3436" stroke-width="4" fill="none"/>
                    <!-- Black stripes -->
                    <path d="M22 35 L38 38 M20 48 L36 49 M24 60 L38 58" stroke="#2d3436" stroke-width="4" stroke-linecap="round"/>
                    <path d="M78 35 L62 38 M80 48 L64 49 M76 60 L62 58" stroke="#2d3436" stroke-width="4" stroke-linecap="round"/>
                    <!-- Mane on top -->
                    <path d="M42 14 L50 4 L58 14" stroke="#2d3436" stroke-width="5" stroke-linecap="round"/>
                    <!-- Eyes & Muzzle -->
                    <circle cx="38" cy="42" r="4" fill="#2d3436"/>
                    <circle cx="62" cy="42" r="4" fill="#2d3436"/>
                    <circle cx="36" cy="40" r="1.5" fill="#fff"/>
                    <circle cx="60" cy="40" r="1.5" fill="#fff"/>
                    <ellipse cx="50" cy="66" rx="14" ry="10" fill="#b2bec3"/>
                    <circle cx="44" cy="66" r="2" fill="#2d3436"/>
                    <circle cx="56" cy="66" r="2" fill="#2d3436"/>
                ${svgFooter}`;

            case 'ball':
                return `${svgHeader}
                    <!-- Bright Beach / Toy Ball with colorful curved segments -->
                    <circle cx="50" cy="50" r="38" fill="#0984e3"/>
                    <path d="M50 12 C25 25, 25 75, 50 88 C75 75, 75 25, 50 12 Z" fill="#ff7675"/>
                    <path d="M50 12 C35 30, 35 70, 50 88 Z" fill="#f1c40f"/>
                    <path d="M12 50 C25 25, 75 25, 88 50 C75 75, 25 75, 12 50 Z" fill="#55efc4" opacity="0.6"/>
                    <circle cx="50" cy="50" r="8" fill="#ffffff"/>
                ${svgFooter}`;

            case 'book':
                return `${svgHeader}
                    <!-- Open Story Book with colorful cover and bookmark ribbon -->
                    <path d="M12 28 Q50 36 50 82 Q12 74 12 28 Z" fill="#74b9ff"/>
                    <path d="M88 28 Q50 36 50 82 Q88 74 88 28 Z" fill="#0984e3"/>
                    <!-- Pages -->
                    <path d="M16 26 Q50 34 50 78 Q16 70 16 26 Z" fill="#ffffff"/>
                    <path d="M84 26 Q50 34 50 78 Q84 70 84 26 Z" fill="#fff8e1"/>
                    <!-- Spine & Ribbon -->
                    <line x1="50" y1="34" x2="50" y2="78" stroke="#d35400" stroke-width="3"/>
                    <path d="M50 34 Q56 50 62 65 L56 62 L50 65 Z" fill="#ff7675"/>
                    <!-- Text lines -->
                    <line x1="24" y1="40" x2="42" y2="44" stroke="#b2bec3" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="24" y1="50" x2="42" y2="54" stroke="#b2bec3" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="58" y1="44" x2="76" y2="40" stroke="#b2bec3" stroke-width="2.5" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'bird':
                return `${svgHeader}
                    <!-- Cute Pink Songbird with wing & yellow beak -->
                    <circle cx="48" cy="46" r="28" fill="#fd79a8"/>
                    <!-- Wing -->
                    <path d="M48 46 Q70 28 82 46 Q64 58 48 46 Z" fill="#e84393"/>
                    <!-- Eye & Shine -->
                    <circle cx="34" cy="40" r="4.5" fill="#2d3436"/>
                    <circle cx="32" cy="38" r="1.5" fill="#fff"/>
                    <!-- Orange Beak -->
                    <polygon points="22,42 8,46 22,52" fill="#ff7675"/>
                    <!-- Tail Feathers -->
                    <polygon points="72,46 88,38 82,54" fill="#e84393"/>
                    <!-- Feet -->
                    <path d="M40 74 L40 86 M40 86 L34 88 M40 86 L46 88" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'duck':
                return `${svgHeader}
                    <!-- Yellow Rubber Duckie on water -->
                    <circle cx="62" cy="32" r="16" fill="#f1c40f"/>
                    <ellipse cx="44" cy="56" rx="28" ry="18" fill="#f1c40f"/>
                    <!-- Tail -->
                    <path d="M18 52 Q10 42 16 38 Q22 48 26 54 Z" fill="#f1c40f"/>
                    <!-- Eye -->
                    <circle cx="66" cy="28" r="3" fill="#2d3436"/>
                    <circle cx="65" cy="27" r="1" fill="#fff"/>
                    <!-- Orange Beak -->
                    <path d="M76 32 C88 32, 88 42, 74 40 Z" fill="#e17055"/>
                    <!-- Blue Water ripples -->
                    <path d="M10 74 Q30 80 50 74 Q70 80 90 74" stroke="#74b9ff" stroke-width="4" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'banana':
                return `${svgHeader}
                    <!-- Bright Yellow Ripe Banana -->
                    <path d="M18 70 C15 30, 60 15, 82 42 C65 30, 30 45, 18 70 Z" fill="#f1c40f"/>
                    <path d="M18 70 C25 82, 60 78, 82 42 C68 62, 35 72, 18 70 Z" fill="#f39c12"/>
                    <!-- Stem -->
                    <path d="M82 42 L88 36" stroke="#795548" stroke-width="5" stroke-linecap="round"/>
                    <path d="M18 70 L12 74" stroke="#795548" stroke-width="4" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'milk':
                return `${svgHeader}
                    <!-- Milk Carton with cow spots & straw -->
                    <polygon points="26,35 50,18 74,35" fill="#74b9ff"/>
                    <rect x="26" y="35" width="48" height="52" rx="4" fill="#ffffff" stroke="#dcdde1" stroke-width="3"/>
                    <!-- Blue Banner -->
                    <rect x="26" y="52" width="48" height="16" fill="#74b9ff"/>
                    <circle cx="50" cy="60" r="5" fill="#ffeaa7"/>
                    <!-- Red Drinking Straw -->
                    <path d="M58 24 L70 8" stroke="#ff7675" stroke-width="4" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'cake':
                return `${svgHeader}
                    <!-- Birthday Cake with frosting & lit candle -->
                    <rect x="16" y="52" width="68" height="34" rx="8" fill="#fd79a8"/>
                    <!-- White Frosting Drips -->
                    <path d="M16 52 Q24 64 33 52 Q41 64 50 52 Q59 64 68 52 Q76 64 84 52 L84 48 L16 48 Z" fill="#ffffff"/>
                    <!-- Candle -->
                    <rect x="47" y="24" width="6" height="24" rx="2" fill="#ffeaa7"/>
                    <!-- Flame -->
                    <path d="M50 10 Q56 18 50 24 Q44 18 50 10 Z" fill="#f1c40f"/>
                    <path d="M50 14 Q53 18 50 22 Q47 18 50 14 Z" fill="#ff7675"/>
                ${svgFooter}`;

            case 'strawberry':
                return `${svgHeader}
                    <!-- Red Strawberry with green leafy top and yellow seeds -->
                    <path d="M50 88 C20 70 15 40 25 30 C35 20 65 20 75 30 C85 40 80 70 50 88 Z" fill="#ff7675"/>
                    <path d="M50 88 C25 70 20 40 30 30 C40 20 60 20 70 30 C80 40 75 70 50 88 Z" fill="#d63031"/>
                    <!-- Leafy Crown -->
                    <path d="M50 25 L40 12 L45 22 L30 18 L40 26 L50 25 L60 26 L70 18 L55 22 L60 12 Z" fill="#2ecc71"/>
                    <!-- Stem -->
                    <path d="M50 18 Q52 10 58 8" stroke="#27ae60" stroke-width="4" stroke-linecap="round" fill="none"/>
                    <!-- Little Yellow Seeds -->
                    <circle cx="35" cy="40" r="2" fill="#ffeaa7"/><circle cx="50" cy="38" r="2" fill="#ffeaa7"/><circle cx="65" cy="40" r="2" fill="#ffeaa7"/>
                    <circle cx="42" cy="52" r="2" fill="#ffeaa7"/><circle cx="58" cy="52" r="2" fill="#ffeaa7"/><circle cx="50" cy="66" r="2" fill="#ffeaa7"/>
                ${svgFooter}`;

            case 'story_puppy':
                return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                    <!-- Wide Park Landscape: Sky, Sun, Clouds, Oak Tree, Bench, Max the Dog & Red Ball -->
                    <rect width="300" height="120" fill="#e0f2fe"/>
                    <!-- Warm Sun in sky -->
                    <circle cx="260" cy="25" r="16" fill="#f1c40f"/>
                    <!-- Clouds -->
                    <circle cx="50" cy="25" r="12" fill="#ffffff" opacity="0.9"/>
                    <circle cx="62" cy="22" r="15" fill="#ffffff" opacity="0.9"/>
                    <circle cx="74" cy="25" r="12" fill="#ffffff" opacity="0.9"/>
                    <!-- Park Green Hills -->
                    <path d="M0 75 Q150 50 300 75 L300 120 L0 120 Z" fill="#2ecc71"/>
                    <path d="M0 88 Q150 70 300 88 L300 120 L0 120 Z" fill="#27ae60"/>
                    <!-- Big Oak Tree on Left -->
                    <rect x="25" y="35" width="14" height="55" fill="#795548"/>
                    <circle cx="32" cy="30" r="26" fill="#27ae60"/>
                    <circle cx="18" cy="38" r="20" fill="#2ecc71"/>
                    <circle cx="46" cy="34" r="20" fill="#55efc4"/>
                    <!-- Park Wooden Bench in Center -->
                    <rect x="130" y="70" width="70" height="8" rx="3" fill="#d35400"/>
                    <rect x="130" y="82" width="70" height="8" rx="3" fill="#e67e22"/>
                    <rect x="138" y="90" width="6" height="22" fill="#5d4037"/>
                    <rect x="186" y="90" width="6" height="22" fill="#5d4037"/>
                    <!-- Max the Puppy Sleeping Under Bench -->
                    <ellipse cx="160" cy="98" rx="16" ry="10" fill="#f39c12"/>
                    <circle cx="146" cy="96" r="9" fill="#f39c12"/>
                    <ellipse cx="142" cy="100" rx="4" ry="5" fill="#d35400"/>
                    <!-- Red Ball near Tree -->
                    <circle cx="75" cy="102" r="7" fill="#ff7675"/>
                    <!-- Delicious Bone -->
                    <path d="M185 100 L205 100" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
                    <circle cx="185" cy="97" r="3.5" fill="#fff"/><circle cx="185" cy="103" r="3.5" fill="#fff"/>
                    <circle cx="205" cy="97" r="3.5" fill="#fff"/><circle cx="205" cy="103" r="3.5" fill="#fff"/>
                </svg>`;

            case 'story_quantum':
                return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                    <!-- Wide Sci-Fi Lab Scene: Space Viewport Window, Lab Console & Quantum Key Chamber -->
                    <rect width="300" height="120" fill="#0f172a"/>
                    <!-- Space Viewport Glass Window on Right -->
                    <rect x="190" y="10" width="95" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="3"/>
                    <circle cx="250" cy="35" r="16" fill="#fef08a"/>
                    <circle cx="210" cy="25" r="1.5" fill="#fff"/><circle cx="270" cy="50" r="2" fill="#fff"/><circle cx="230" cy="60" r="1" fill="#fff"/>
                    <!-- Lab Console Desk across bottom -->
                    <rect x="10" y="80" width="280" height="40" rx="6" fill="#334155"/>
                    <rect x="25" y="88" width="55" height="24" rx="3" fill="#0284c7"/>
                    <!-- Waveform Monitors -->
                    <path d="M30 100 L38 92 L46 108 L54 96 L62 100" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
                    <!-- Glass Chamber in Center -->
                    <rect x="110" y="18" width="65" height="75" rx="18" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="3"/>
                    <!-- Glowing Quantum Key -->
                    <path d="M142 32 Q150 32 150 42 Q150 48 142 48 L142 68 L138 68 L138 60 L134 60 L134 54 L142 54 Z" fill="#38bdf8"/>
                    <circle cx="142" cy="38" r="4" fill="#e0f2fe"/>
                    <!-- Blue Quantum Aura Glow Circles -->
                    <circle cx="142" cy="48" r="22" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4,4"/>
                    <circle cx="142" cy="48" r="28" fill="none" stroke="#93c5fd" stroke-width="1.5" opacity="0.6"/>
                </svg>`;

            case 'story_reef':
                return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                    <!-- Wide Deep Ocean Reef Scene: Coral, Jellyfish, Maya's Submersible & Sea Turtle -->
                    <rect width="300" height="120" fill="#0369a1"/>
                    <path d="M0 50 Q75 25 150 50 Q225 75 300 50 L300 120 L0 120 Z" fill="#0284c7" opacity="0.6"/>
                    <!-- Dark Ocean Floor -->
                    <path d="M0 95 Q150 80 300 100 L300 120 L0 120 Z" fill="#0f172a"/>
                    <!-- Glowing Azure Coral Reef Branches on Left & Right -->
                    <path d="M25 120 L25 80 Q35 65 15 55 M25 80 Q45 70 55 55" stroke="#06b6d4" stroke-width="5" stroke-linecap="round" fill="none"/>
                    <path d="M260 120 L260 75 Q240 60 250 45 M260 75 Q275 62 285 50" stroke="#22d3ee" stroke-width="5" stroke-linecap="round" fill="none"/>
                    <circle cx="15" cy="55" r="4" fill="#67e8f9"/><circle cx="55" cy="55" r="4" fill="#67e8f9"/>
                    <circle cx="250" cy="45" r="4" fill="#67e8f9"/><circle cx="285" cy="50" r="4" fill="#67e8f9"/>
                    <!-- Maya's Yellow Submersible in Center -->
                    <ellipse cx="120" cy="55" rx="32" ry="20" fill="#f59e0b"/>
                    <circle cx="134" cy="55" r="9" fill="#e0f2fe" stroke="#d97706" stroke-width="3"/>
                    <path d="M88 55 L78 45 L78 65 Z" fill="#d97706"/>
                    <!-- Bioluminescent Jellyfish -->
                    <path d="M200 25 C200 14 220 14 220 25 Z" fill="#a855f7" opacity="0.85"/>
                    <path d="M204 25 L204 38 M210 25 L210 42 M216 25 L216 36" stroke="#c084fc" stroke-width="2"/>
                    <!-- Friendly Sea Turtle Swimming on Right -->
                    <ellipse cx="190" cy="75" rx="14" ry="10" fill="#15803d"/>
                    <circle cx="206" cy="73" r="5" fill="#166534"/>
                    <ellipse cx="192" cy="65" rx="5" ry="8" fill="#15803d" transform="rotate(30 192 65)"/>
                    <ellipse cx="192" cy="85" rx="5" ry="8" fill="#15803d" transform="rotate(-30 192 85)"/>
                </svg>`;

            case 'jellyfish':
                return `${svgHeader}
                    <!-- Bioluminescent Purple Jellyfish with tentacles -->
                    <path d="M20 42 C20 18 80 18 80 42 C80 48 20 48 20 42 Z" fill="#a855f7"/>
                    <path d="M20 42 Q30 50 40 42 Q50 50 60 42 Q70 50 80 42" fill="#c084fc"/>
                    <!-- Shiny eyes -->
                    <circle cx="40" cy="32" r="3" fill="#ffffff"/><circle cx="60" cy="32" r="3" fill="#ffffff"/>
                    <circle cx="40" cy="32" r="1.5" fill="#2d3436"/><circle cx="60" cy="32" r="1.5" fill="#2d3436"/>
                    <!-- Wavy tentacles -->
                    <path d="M28 48 Q22 68 30 88 M42 48 Q50 72 40 92 M58 48 Q64 70 56 92 M72 48 Q78 68 70 88" stroke="#e9d5ff" stroke-width="4" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'sea_turtle':
                return `${svgHeader}
                    <!-- Friendly Green Sea Turtle with shell patterns and flippers -->
                    <ellipse cx="50" cy="50" rx="28" ry="22" fill="#15803d"/>
                    <ellipse cx="50" cy="50" rx="24" ry="18" fill="#22c55e"/>
                    <!-- Head -->
                    <circle cx="82" cy="50" r="10" fill="#166534"/>
                    <circle cx="84" cy="46" r="2" fill="#ffffff"/><circle cx="84" cy="46" r="1" fill="#000000"/>
                    <!-- Front Flippers -->
                    <path d="M60 32 C65 14 45 8 35 24 Z" fill="#15803d"/>
                    <path d="M60 68 C65 86 45 92 35 76 Z" fill="#15803d"/>
                    <!-- Back Flippers -->
                    <path d="M28 35 C20 22 15 30 22 42 Z" fill="#166534"/>
                    <path d="M28 65 C20 78 15 70 22 58 Z" fill="#166534"/>
                ${svgFooter}`;

            case 'coral':
                return `${svgHeader}
                    <!-- Glowing Turquoise Azure Coral Reef -->
                    <path d="M50 90 L50 45 Q58 30 45 20 M50 45 Q38 32 40 18 M50 60 Q70 48 78 35 M50 60 Q30 50 20 38 M50 75 Q75 68 85 58" stroke="#06b6d4" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <circle cx="45" cy="20" r="5" fill="#67e8f9"/><circle cx="40" cy="18" r="5" fill="#67e8f9"/>
                    <circle cx="78" cy="35" r="5" fill="#67e8f9"/><circle cx="20" cy="38" r="5" fill="#67e8f9"/>
                    <circle cx="85" cy="58" r="5" fill="#67e8f9"/>
                ${svgFooter}`;

            case 'submarine':
                return `${svgHeader}
                    <!-- Maya's Yellow Submersible -->
                    <ellipse cx="48" cy="52" rx="34" ry="22" fill="#f59e0b"/>
                    <rect x="40" y="24" width="16" height="12" rx="4" fill="#d97706"/>
                    <path d="M48 24 L48 12 L56 12" stroke="#d97706" stroke-width="4" stroke-linecap="round" fill="none"/>
                    <!-- Porthole Window -->
                    <circle cx="56" cy="52" r="10" fill="#e0f2fe" stroke="#d97706" stroke-width="3"/>
                    <circle cx="53" cy="49" r="3" fill="#ffffff"/>
                    <!-- Propeller -->
                    <path d="M14 52 L6 42 L6 62 Z" fill="#b45309"/>
                ${svgFooter}`;

            case 'quantum_key':
                return `${svgHeader}
                    <!-- Glowing Blue Quantum Key -->
                    <circle cx="36" cy="50" r="18" fill="none" stroke="#38bdf8" stroke-width="6"/>
                    <circle cx="36" cy="50" r="10" fill="#e0f2fe"/>
                    <rect x="54" y="44" width="34" height="12" rx="3" fill="#38bdf8"/>
                    <rect x="74" y="56" width="6" height="12" rx="2" fill="#0284c7"/>
                    <rect x="82" y="56" width="6" height="10" rx="2" fill="#0284c7"/>
                    <circle cx="36" cy="50" r="26" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4,4"/>
                ${svgFooter}`;

            case 'satellite':
                return `${svgHeader}
                    <!-- Space Satellite with Solar Panels & Antenna -->
                    <!-- Central Satellite Body -->
                    <rect x="36" y="36" width="28" height="28" rx="5" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
                    <circle cx="50" cy="50" r="7" fill="#38bdf8"/>
                    <!-- Left Solar Panel -->
                    <rect x="6" y="40" width="24" height="20" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="18" y1="40" x2="18" y2="60" stroke="#38bdf8" stroke-width="1.5"/>
                    <line x1="30" y1="50" x2="36" y2="50" stroke="#334155" stroke-width="3"/>
                    <!-- Right Solar Panel -->
                    <rect x="70" y="40" width="24" height="20" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="82" y1="40" x2="82" y2="60" stroke="#38bdf8" stroke-width="1.5"/>
                    <line x1="64" y1="50" x2="70" y2="50" stroke="#334155" stroke-width="3"/>
                    <!-- Dish Antenna on top -->
                    <path d="M38 24 Q50 14 62 24 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
                    <line x1="50" y1="24" x2="50" y2="36" stroke="#475569" stroke-width="3"/>
                    <line x1="50" y1="14" x2="50" y2="8" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
                    <circle cx="50" cy="7" r="2.5" fill="#ef4444"/>
                ${svgFooter}`;

            case 'lab_goggles':
                return `${svgHeader}
                    <!-- Scientist Lab Goggles -->
                    <rect x="15" y="32" width="32" height="28" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="4"/>
                    <rect x="53" y="32" width="32" height="28" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="4"/>
                    <line x1="47" y1="46" x2="53" y2="46" stroke="#0284c7" stroke-width="5"/>
                    <path d="M5 46 L15 46 M85 46 L95 46" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'data_chip':
            case 'memory_chip':
                return `${svgHeader}
                    <!-- Modern Encoded Silicon Memory Chip -->
                    <line x1="10" y1="28" x2="24" y2="28" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <line x1="10" y1="42" x2="24" y2="42" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <line x1="10" y1="58" x2="24" y2="58" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <line x1="10" y1="72" x2="24" y2="72" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <line x1="76" y1="28" x2="90" y2="28" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <line x1="76" y1="42" x2="90" y2="42" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <line x1="76" y1="58" x2="90" y2="58" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <line x1="76" y1="72" x2="90" y2="72" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                    <!-- Dark Silicon Ceramic Carrier Package -->
                    <rect x="20" y="16" width="60" height="68" rx="8" fill="#0f172a" stroke="#334155" stroke-width="3.5"/>
                    <!-- Top Index Notch -->
                    <path d="M44 16 A6 6 0 0 0 56 16" stroke="#f59e0b" stroke-width="3" fill="#1e293b"/>
                    <!-- Gold Pin 1 Dot -->
                    <circle cx="30" cy="27" r="3" fill="#f59e0b"/>
                    <!-- Internal Silicon Die with glowing cyan bus traces -->
                    <rect x="31" y="32" width="38" height="40" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
                    <line x1="37" y1="44" x2="63" y2="44" stroke="#00f0ff" stroke-width="2"/>
                    <line x1="37" y1="60" x2="63" y2="60" stroke="#00f0ff" stroke-width="2"/>
                    <line x1="50" y1="36" x2="50" y2="68" stroke="#00f0ff" stroke-width="2"/>
                    <!-- Golden Core Processor Node -->
                    <circle cx="50" cy="52" r="6" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
                ${svgFooter}`;

            case 'dog_bone':
                return `${svgHeader}
                    <!-- Tasty Dog Bone -->
                    <rect x="25" y="44" width="50" height="12" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="24" cy="42" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="24" cy="58" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="76" cy="42" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                    <circle cx="76" cy="58" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                ${svgFooter}`;

            case 'sea':
                return `${svgHeader}
                    <!-- Blue Sea waves with shiny fish & starfish -->
                    <rect x="10" y="20" width="80" height="70" rx="10" fill="#0984e3"/>
                    <path d="M10 40 Q30 30 50 40 Q70 50 90 40 L90 90 L10 90 Z" fill="#74b9ff"/>
                    <path d="M10 60 Q30 50 50 60 Q70 70 90 60 L90 90 L10 90 Z" fill="#00cec9"/>
                    <!-- Swimming little fish -->
                    <ellipse cx="65" cy="45" rx="8" ry="5" fill="#fdcb6e"/>
                    <polygon points="73,45 80,40 80,50" fill="#fdcb6e"/>
                    <circle cx="61" cy="44" r="1" fill="#2d3436"/>
                ${svgFooter}`;

            case 'frog':
                return `${svgHeader}
                    <!-- Cute Green Frog with big eyes & big smile -->
                    <circle cx="32" cy="28" r="14" fill="#2ecc71"/>
                    <circle cx="68" cy="28" r="14" fill="#2ecc71"/>
                    <circle cx="32" cy="26" r="8" fill="#fff"/>
                    <circle cx="68" cy="26" r="8" fill="#fff"/>
                    <circle cx="32" cy="26" r="4" fill="#2d3436"/>
                    <circle cx="68" cy="26" r="4" fill="#2d3436"/>
                    <circle cx="30" cy="24" r="1.5" fill="#fff"/>
                    <circle cx="66" cy="24" r="1.5" fill="#fff"/>
                    <!-- Head & Body -->
                    <ellipse cx="50" cy="56" rx="36" ry="28" fill="#2ecc71"/>
                    <ellipse cx="50" cy="62" rx="22" ry="16" fill="#55efc4"/>
                    <!-- Rosy cheeks & mouth -->
                    <circle cx="28" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                    <circle cx="72" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                    <path d="M34 56 Q50 68 66 56" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;

            case 'orangefruit':
                return `${svgHeader}
                    <!-- Juicy Orange Fruit with leaf -->
                    <circle cx="50" cy="54" r="36" fill="#e67e22"/>
                    <circle cx="50" cy="54" r="32" fill="#ff9f43"/>
                    <!-- Texture dimples -->
                    <circle cx="36" cy="42" r="1.5" fill="#e67e22"/><circle cx="60" cy="46" r="1.5" fill="#e67e22"/>
                    <circle cx="44" cy="68" r="1.5" fill="#e67e22"/><circle cx="62" cy="64" r="1.5" fill="#e67e22"/>
                    <!-- Stem & Leaf -->
                    <path d="M50 20 L50 10" stroke="#795548" stroke-width="4" stroke-linecap="round"/>
                    <path d="M50 16 Q65 6 72 16 Q60 22 50 16 Z" fill="#2ecc71"/>
                ${svgFooter}`;

            case 'grapes':
                return `${svgHeader}
                    <!-- Cluster of Purple Grapes with green leaf -->
                    <!-- Leaf & Stem -->
                    <path d="M50 18 L50 8" stroke="#795548" stroke-width="4" stroke-linecap="round"/>
                    <path d="M50 14 Q68 4 72 16 Q58 22 50 14 Z" fill="#2ecc71"/>
                    <!-- Grape circles in rows -->
                    <g fill="#8e44ad">
                        <circle cx="36" cy="30" r="12"/><circle cx="64" cy="30" r="12"/><circle cx="50" cy="30" r="12"/>
                        <circle cx="28" cy="48" r="12"/><circle cx="50" cy="48" r="12"/><circle cx="72" cy="48" r="12"/>
                        <circle cx="38" cy="66" r="12"/><circle cx="62" cy="66" r="12"/>
                        <circle cx="50" cy="82" r="12"/>
                    </g>
                    <!-- Highlights -->
                    <circle cx="32" cy="26" r="3" fill="#9b59b6"/><circle cx="46" cy="44" r="3" fill="#9b59b6"/><circle cx="46" cy="78" r="3" fill="#9b59b6"/>
                ${svgFooter}`;

            case 'barbie':
                return `${svgHeader}
                    <!-- Pink Barbie Doll figure with crown & dress -->
                    <!-- Blonde Hair -->
                    <circle cx="50" cy="32" r="22" fill="#f1c40f"/>
                    <!-- Face -->
                    <circle cx="50" cy="34" r="15" fill="#ffeaa7"/>
                    <!-- Cute Eyes & Pink Lips -->
                    <circle cx="44" cy="32" r="2.5" fill="#2d3436"/><circle cx="56" cy="32" r="2.5" fill="#2d3436"/>
                    <path d="M46 39 Q50 43 54 39" stroke="#e84393" stroke-width="2" fill="none"/>
                    <!-- Sparkly Crown -->
                    <polygon points="42,20 46,12 50,18 54,12 58,20" fill="#fdcb6e"/>
                    <!-- Pink Ballgown Dress -->
                    <polygon points="44,48 56,48 78,92 22,92" fill="#fd79a8"/>
                    <path d="M44 48 Q50 56 56 48 L78 92 Q50 86 22 92 Z" fill="#e84393"/>
                    <circle cx="50" cy="56" r="4" fill="#fff"/>
                ${svgFooter}`;

            case 'ant':
                return `${svgHeader}
                    <!-- Black Ant with 3 body segments, antennae & legs -->
                    <!-- 3 Body segments -->
                    <ellipse cx="22" cy="52" rx="14" ry="18" fill="#2d3436"/>
                    <circle cx="46" cy="52" r="12" fill="#2d3436"/>
                    <circle cx="72" cy="52" r="15" fill="#2d3436"/>
                    <!-- Eyes -->
                    <circle cx="78" cy="46" r="3" fill="#fff"/><circle cx="78" cy="46" r="1.5" fill="#000"/>
                    <!-- Antennae -->
                    <path d="M78 40 Q84 25 90 22" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <path d="M74 38 Q78 22 84 18" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <!-- 6 Legs -->
                    <path d="M46 52 L36 78 M46 52 L46 80 M46 52 L56 78" stroke="#2d3436" stroke-width="3" stroke-linecap="round"/>
                    <path d="M46 52 L36 26 M46 52 L46 24 M46 52 L56 26" stroke="#2d3436" stroke-width="3" stroke-linecap="round"/>
                ${svgFooter}`;

            case 'rabbit':
                return `${svgHeader}
                    <!-- White Bunny Rabbit with long pink ears & carrot -->
                    <!-- Long Ears -->
                    <ellipse cx="36" cy="22" rx="8" ry="22" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                    <ellipse cx="36" cy="22" rx="4" ry="16" fill="#ff7675"/>
                    <ellipse cx="64" cy="22" rx="8" ry="22" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                    <ellipse cx="64" cy="22" rx="4" ry="16" fill="#ff7675"/>
                    <!-- Head & Body -->
                    <circle cx="50" cy="52" r="28" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                    <!-- Eyes & Pink Nose -->
                    <circle cx="38" cy="46" r="4" fill="#2d3436"/><circle cx="62" cy="46" r="4" fill="#2d3436"/>
                    <circle cx="36" cy="44" r="1.5" fill="#fff"/><circle cx="60" cy="44" r="1.5" fill="#fff"/>
                    <polygon points="50,52 45,57 55,57" fill="#ff7675"/>
                    <path d="M45 60 Q50 65 55 60" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                    <!-- Rosy cheeks -->
                    <circle cx="30" cy="54" r="4" fill="#ff7675" opacity="0.5"/>
                    <circle cx="70" cy="54" r="4" fill="#ff7675" opacity="0.5"/>
                ${svgFooter}`;

            case 'circle': return `${svgHeader}<circle cx="50" cy="50" r="40" fill="${color}"/>${svgFooter}`;
            case 'square': return `${svgHeader}<rect x="15" y="15" width="70" height="70" rx="8" fill="${color}"/>${svgFooter}`;
            case 'triangle': return `${svgHeader}<polygon points="50,15 90,85 10,85" fill="${color}"/>${svgFooter}`;
            case 'rectangle': return `${svgHeader}<rect x="10" y="25" width="80" height="50" rx="8" fill="${color}"/>${svgFooter}`;
            case 'oval': return `${svgHeader}<ellipse cx="50" cy="50" rx="42" ry="28" fill="${color}"/>${svgFooter}`;
            case 'diamond': return `${svgHeader}<polygon points="50,10 90,50 50,90 10,50" fill="${color}"/>${svgFooter}`;
            case 'pentagon': return `${svgHeader}<polygon points="50,10 90,40 75,90 25,90 10,40" fill="${color}"/>${svgFooter}`;
            case 'hexagon': return `${svgHeader}<polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="${color}"/>${svgFooter}`;

            default:
                return `${svgHeader}
                    <circle cx="50" cy="50" r="38" fill="${color}"/>
                    <circle cx="38" cy="42" r="5" fill="#fff"/>
                    <circle cx="62" cy="42" r="5" fill="#fff"/>
                    <path d="M38 62 Q50 74 62 62" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/>
                ${svgFooter}`;
        }
    }

    /* ==========================================================================
       3. WEB AUDIO & SPEECH SYNTHESIS ENGINE
       ========================================================================== */

    class AudioEngine {
        constructor() {
            this.ctx = null;
            this.soundEnabled = true;
            this.speechSynth = window.speechSynthesis || null;
            this.speechRate = 0.9;
            this.selectedVoice = null;
            
            this.initAudioContext();
            this.loadVoices();
        }

        initAudioContext() {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) this.ctx = new AudioCtx();
            } catch (e) {
                console.warn('Web Audio API not supported');
            }
        }

        resumeContext() {
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        }

        loadVoices() {
            if (!this.speechSynth) return;
            const populate = () => {
                const voices = this.speechSynth.getVoices();
                if (!voices.length) return;

                const savedVoiceName = appState?.settings?.speechVoice;
                let foundVoice = null;

                // 1. Try exact name match
                if (savedVoiceName) {
                    foundVoice = voices.find(v => v.name === savedVoiceName);
                }

                // 2. Cross-browser Fuzzy Match (e.g. Edge "Microsoft Jenny" -> Chrome "Google US English / Zira / Female")
                if (!foundVoice && savedVoiceName) {
                    const cleanSaved = savedVoiceName.toLowerCase();
                    foundVoice = voices.find(v => {
                        const name = v.name.toLowerCase();
                        if (cleanSaved.includes('female') && name.includes('female')) return true;
                        if ((cleanSaved.includes('zira') || cleanSaved.includes('jenny') || cleanSaved.includes('aria')) && 
                            (name.includes('female') || name.includes('zira') || name.includes('jenny') || name.includes('natural') || name.includes('google us'))) return true;
                        return false;
                    });
                }

                // 3. Heuristic fallback for warm female voice in target browser
                if (!foundVoice) {
                    foundVoice = voices.find(v => v.lang.startsWith('en') && (
                        v.name.includes('Zira') || 
                        v.name.includes('Jenny') || 
                        v.name.includes('Ava') || 
                        v.name.includes('Aria') || 
                        v.name.includes('Samantha') || 
                        v.name.includes('Victoria') || 
                        v.name.includes('Female') ||
                        v.name.includes('Natural') ||
                        v.name.includes('Google US English')
                    ));
                }

                if (!foundVoice) {
                    foundVoice = voices.find(v => v.lang.startsWith('en'));
                }

                this.selectedVoice = foundVoice || voices[0];
                appState.settings.speechVoice = this.selectedVoice.name;

                const selectElem = document.getElementById('set-speech-voice');
                if (selectElem) {
                    selectElem.innerHTML = voices.map(v => `<option value="${v.name}" ${this.selectedVoice && v.name === this.selectedVoice.name ? 'selected' : ''}>${v.name} (${v.lang})</option>`).join('');
                }
            };
            populate();
            if (this.speechSynth.onvoiceschanged !== undefined) {
                this.speechSynth.onvoiceschanged = populate;
            }
        }

        setVoice(voiceName) {
            if (!this.speechSynth) return;
            const voices = this.speechSynth.getVoices();
            const v = voices.find(voice => voice.name === voiceName);
            if (v) {
                this.selectedVoice = v;
            }
        }

        // Web Audio Synthesized Sound Effects
        playTone(freq, type = 'sine', duration = 0.2) {
            if (!this.soundEnabled || !this.ctx) return;
            this.resumeContext();

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        }

        playCorrect() {
            this.playTone(523.25, 'triangle', 0.15); // C5
            setTimeout(() => this.playTone(659.25, 'triangle', 0.15), 100); // E5
            setTimeout(() => this.playTone(783.99, 'triangle', 0.3), 200); // G5
        }

        playWrong() {
            this.playTone(220, 'sawtooth', 0.2); // A3
            setTimeout(() => this.playTone(196, 'sawtooth', 0.3), 150); // G3
        }

        playClick() {
            this.playTone(400, 'sine', 0.05);
        }

        playReactorZap() {
            if (!this.soundEnabled || !this.ctx) return;
            this.resumeContext();
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(680, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.32);
                gain.gain.setValueAtTime(0.28, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.32);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.32);
            } catch(e) {}
        }

        playSplash() {
            this.playTone(320, 'sine', 0.1);
            setTimeout(() => this.playTone(480, 'triangle', 0.15), 60);
            setTimeout(() => this.playTone(600, 'sine', 0.2), 120);
        }

        playSnap() {
            this.playTone(680, 'square', 0.04);
            setTimeout(() => this.playTone(500, 'triangle', 0.06), 40);
        }

        playFanfare() {
            [440, 554.37, 659.25, 880].forEach((freq, idx) => {
                setTimeout(() => this.playTone(freq, 'triangle', 0.25), idx * 120);
            });
        }

        stop() {
            if (this.speechSynth) this.speechSynth.cancel();
        }

        // Speech Synthesis Pronunciation
        speak(text, priority = false, onEndCallback = null) {
            if (!this.speechSynth) {
                if (onEndCallback) onEndCallback();
                return;
            }
            if (priority) this.speechSynth.cancel();

            // Sanitize text: remove emojis, pictographs and decorative symbols so speech synthesis will never announce symbol definitions (e.g. "party popper", "paw prints", "star")
            const cleanText = typeof text === 'string'
                ? text.replace(/[\u{1F300}-\u{1FAFF}\u{200D}\u{2300}-\u{23FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}]/gu, '').replace(/\s{2,}/g, ' ').trim()
                : text;

            if (!cleanText) {
                if (onEndCallback) onEndCallback();
                return;
            }

            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.rate = this.speechRate || 0.92;
            utterance.pitch = 1.25; // Friendly, warm, slightly higher pitch for a cute female teacher tone
            if (this.selectedVoice) utterance.voice = this.selectedVoice;

            if (onEndCallback) {
                let called = false;
                const finish = () => {
                    if (!called) {
                        called = true;
                        onEndCallback();
                    }
                };
                utterance.onend = finish;
                utterance.onerror = finish;
            }

            this.currentUtterance = utterance; // Prevent GC before onend in Chromium
            this.speechSynth.speak(utterance);
        }
    }

    /* ==========================================================================
       4. APPLICATION STATE & LOCALSTORAGE PERSISTENCE
       ========================================================================== */

    const DEFAULT_STATE = {
        currentView: 'view-home',
        studioMode: 'junior', // 'junior' (3-6) or 'senior' (8-10)
        alphaIndex: 0,
        phonicsIndex: 0,
        colourIndex: 0,
        numberIndex: 0,
        shapeIndex: 0,
        wordIndex: 0,
        seniorStoryIndex: 0,
        seniorVocabCategory: 'head_words',
        seniorVocabIndex: 0,
        seniorVocabSubTab: 'study',
        eslLevelStem: 'intermediate',
        stemSubTab: 'diagram',
        stemItemIndex: 0,
        stemTested: false,
        stemUserPrediction: null,
        storyBuilder: {
            level: 'intermediate',
            settingId: 'space',
            characterId: 'rover',
            secondaryCharId: 'maya',
            propId: 'crystal',
            customTitle: 'The Secret of the Space Station',
            activeTwist: null,
            panels: []
        },
        activeStudentId: null,
        students: [
            { id: 'st_1', name: 'Leo', stars: 5, points: 50, gender: 'boy' },
            { id: 'st_2', name: 'Emma', stars: 4, points: 40, gender: 'girl' },
            { id: 'st_3', name: 'Noah', stars: 3, points: 30, gender: 'boy' }
        ],
        plans: [
            {
                id: 'plan_default',
                title: '30-Min Zoom Phonics & Shapes',
                activities: [
                    { name: 'Alphabet Song & Warmup', duration: 5, obj: 'Letter Recognition A-Z' },
                    { name: 'Phonics Sound Focus', duration: 10, obj: 'Letter sounds and simple words' },
                    { name: 'Shapes & Counting Game', duration: 10, obj: 'Identify 10 geometry shapes' },
                    { name: 'Star Rewards & Goodbye', duration: 5, obj: 'Award stars to students' }
                ]
            }
        ],
        activePlanId: 'plan_default',
        settings: {
            sound: true,
            theme: 'theme-default',
            fontSize: 'font-size-normal',
            animations: true,
            speechSpeed: 0.9,
            speechVoice: ''
        }
    };

    function getStudentAvatar(name, explicitGender) {
        if (explicitGender === 'girl') return '👧';
        if (explicitGender === 'boy') return '👦';

        const nameLower = (name || '').trim().toLowerCase();
        // Common girl names / endings
        const girlNames = ['emma', 'olivia', 'ava', 'isabella', 'sophia', 'mia', 'charlotte', 'amelia', 'harper', 'evelyn', 'abigail', 'emily', 'ella', 'elizabeth', 'camila', 'luna', 'sofia', 'avery', 'mila', 'aria', 'scarlett', 'penelope', 'layla', 'chloe', 'victoria', 'madison', 'eleanor', 'grace', 'nora', 'riley', 'zoey', 'hannah', 'hazel', 'lily', 'ellie', 'violet', 'lillian', 'zoe', 'stella', 'aurora', 'natalie', 'maya', 'savannah', 'audrey', 'brooklyn', 'bella', 'claire', 'skylar', 'lucy', 'megan', 'lucia', 'anna', 'ruby', 'sarah', 'daisy', 'holly', 'amy', 'poppy', 'rosie'];
        if (girlNames.includes(nameLower) || nameLower.endsWith('a') || nameLower.endsWith('ie') || nameLower.endsWith('lyn')) {
            return '👧';
        }
        return '👦';
    }

    let appState = JSON.parse(localStorage.getItem('little_stars_state')) || DEFAULT_STATE;
    appState.settings = Object.assign({}, DEFAULT_STATE.settings, appState.settings || {});
    if (!appState.studioMode) appState.studioMode = 'junior';

    function saveState() {
        localStorage.setItem('little_stars_state', JSON.stringify(appState));
    }

    const audioEngine = new AudioEngine();

    /* ==========================================================================
       5. UI ROUTER & VIEW MANAGEMENT
       ========================================================================== */

    function switchView(targetViewId, pushToHistory = true) {
        // Close any open modals if switching views
        closeAllModals(false);

        document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
        const target = document.getElementById(targetViewId);
        if (target) {
            target.classList.remove('hidden');

            if (pushToHistory && appState.currentView !== targetViewId) {
                history.pushState({ type: 'view', viewId: targetViewId }, '', `#${targetViewId}`);
            }

            appState.currentView = targetViewId;
            saveState();
            audioEngine.playClick();

            // Ensure window snaps to top home position instantly
            const resetScroll = () => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            };
            resetScroll();
            setTimeout(resetScroll, 0);
            setTimeout(resetScroll, 50);

            // Refresh specific mode views on entry
            if (targetViewId === 'view-alphabet') renderAlphabetStage();
            if (targetViewId === 'view-phonics') renderPhonicsStage();
            if (targetViewId === 'view-colours') renderColourStage();
            if (targetViewId === 'view-numbers') renderNumberStage();
            if (targetViewId === 'view-shapes') renderShapeStage();
            if (targetViewId === 'view-words') {
                appState.wordIndex = 0;
                saveState();
                renderWordStage();
            }
            if (targetViewId === 'view-quiz-stage') generateNewQuizQuestion();
            if (targetViewId === 'view-reading-senior') renderSeniorReadingStage();
            if (targetViewId === 'view-vocab-senior') {
                appState.seniorVocabIndex = 0;
                saveState();
                renderSeniorVocabStage(true);
            }
            if (targetViewId === 'view-stem-senior') {
                appState.stemTested = false;
                appState.stemUserPrediction = null;
                saveState();
                renderSeniorStemStage();
            }
            if (targetViewId === 'view-story-senior') {
                renderSeniorStoryBuilder();
            }
        }
    }

    /* Modal Router & History Stack Handling */
    function openModal(modalId, pushToHistory = true) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            audioEngine.playClick();
            if (pushToHistory) {
                history.pushState({ type: 'modal', modalId: modalId }, '', `#modal-${modalId}`);
            }
        }
    }

    function closeModal(modalId, popHistory = true) {
        const modal = document.getElementById(modalId);
        if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            if (popHistory && history.state && history.state.type === 'modal' && history.state.modalId === modalId) {
                history.back();
            }
        }
    }

    function closeAllModals(popHistory = false) {
        document.querySelectorAll('.modal-overlay').forEach(m => {
            if (!m.classList.contains('hidden')) {
                m.classList.add('hidden');
            }
        });
    }

    // Set initial history state for direct landing / refreshes
    history.replaceState({ type: 'view', viewId: appState.currentView || 'view-home' }, '', `#${appState.currentView || 'view-home'}`);

    // Listen for browser Back / Forward buttons
    window.addEventListener('popstate', (event) => {
        // If a modal is currently open, close it first
        const openModalElem = document.querySelector('.modal-overlay:not(.hidden)');
        if (openModalElem) {
            openModalElem.classList.add('hidden');
            return;
        }

        if (event.state) {
            if (event.state.type === 'modal' && event.state.modalId) {
                openModal(event.state.modalId, false);
            } else if (event.state.viewId) {
                switchView(event.state.viewId, false);
            }
        } else {
            const homeView = appState.studioMode === 'senior' ? 'view-home-senior' : 'view-home';
            switchView(homeView, false);
        }
    });

    // Bind Navigation Buttons
    document.querySelectorAll('[data-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            switchView(target);
        });
    });

    document.getElementById('nav-brand').addEventListener('click', () => {
        const homeView = appState.studioMode === 'senior' ? 'view-home-senior' : 'view-home';
        switchView(homeView);
    });

    /* ==========================================================================
       6. LEARNING MODES CONTROLLERS
       ========================================================================== */

    // --- 6.1 ALPHABET MODE ---
    let alphaPlayAllTimer = null;

    function renderAlphabetStage() {
        const item = ALPHABET_DATA[appState.alphaIndex];
        document.getElementById('alpha-upper').innerText = item.letter;
        document.getElementById('alpha-lower').innerText = item.lower;
        document.getElementById('alpha-word').innerText = item.word;

        const container = document.getElementById('alpha-svg-container');
        container.innerHTML = getSVGGraphic(item.icon, '#6c5ce7');
    }

    const btnAlphaReset = document.getElementById('btn-alpha-reset');
    if (btnAlphaReset) {
        btnAlphaReset.addEventListener('click', () => {
            appState.alphaIndex = 0;
            renderAlphabetStage();
            audioEngine.speak(`${ALPHABET_DATA[0].letter}, for ${ALPHABET_DATA[0].word}`);
        });
    }

    document.getElementById('btn-alpha-next').addEventListener('click', () => {
        appState.alphaIndex = (appState.alphaIndex + 1) % ALPHABET_DATA.length;
        renderAlphabetStage();
        audioEngine.speak(`${ALPHABET_DATA[appState.alphaIndex].letter}, for ${ALPHABET_DATA[appState.alphaIndex].word}`);
    });

    document.getElementById('btn-alpha-prev').addEventListener('click', () => {
        appState.alphaIndex = (appState.alphaIndex - 1 + ALPHABET_DATA.length) % ALPHABET_DATA.length;
        renderAlphabetStage();
        audioEngine.speak(`${ALPHABET_DATA[appState.alphaIndex].letter}, for ${ALPHABET_DATA[appState.alphaIndex].word}`);
    });

    document.getElementById('btn-alpha-random').addEventListener('click', () => {
        appState.alphaIndex = Math.floor(Math.random() * ALPHABET_DATA.length);
        renderAlphabetStage();
        audioEngine.speak(`${ALPHABET_DATA[appState.alphaIndex].letter}, for ${ALPHABET_DATA[appState.alphaIndex].word}`);
    });

    document.getElementById('btn-alpha-speak').addEventListener('click', () => {
        const item = ALPHABET_DATA[appState.alphaIndex];
        audioEngine.speak(`${item.letter}. ${item.word}`);
    });

    document.getElementById('btn-alpha-playall').addEventListener('click', function() {
        if (alphaPlayAllTimer) {
            clearInterval(alphaPlayAllTimer);
            alphaPlayAllTimer = null;
            this.innerText = '▶️ Play All A–Z';
        } else {
            this.innerText = '⏸️ Stop Slideshow';
            // Always start at letter "A" (index 0)
            appState.alphaIndex = 0;
            renderAlphabetStage();
            
            const speakCurrentCard = () => {
                const current = ALPHABET_DATA[appState.alphaIndex];
                // Speak format: "A... A is for Apple"
                audioEngine.speak(`${current.letter}... ${current.letter} is for ${current.word}`, true);
            };

            // Speak A immediately upon clicking
            speakCurrentCard();

            alphaPlayAllTimer = setInterval(() => {
                appState.alphaIndex++;
                if (appState.alphaIndex >= ALPHABET_DATA.length) {
                    // Reached end of Z, stop automatically
                    clearInterval(alphaPlayAllTimer);
                    alphaPlayAllTimer = null;
                    document.getElementById('btn-alpha-playall').innerText = '▶️ Play All A–Z';
                    return;
                }
                renderAlphabetStage();
                speakCurrentCard();
            }, 3800);
        }
    });

    // --- 6.2 PHONICS MODE ---
    let phonicsPlayAllTimer = null;

    function renderPhonicsStage() {
        const item = ALPHABET_DATA[appState.phonicsIndex];
        document.getElementById('phonics-letter').innerText = `${item.letter}${item.lower}`;
        document.getElementById('phonics-sound').innerText = `Sound: ${item.sound}`;
        document.getElementById('phonics-phrase').innerText = `"${item.phrase}"`;
        document.getElementById('phonics-svg-container').innerHTML = getSVGGraphic(item.icon, '#a29bfe');
    }

    const btnPhonicsReset = document.getElementById('btn-phonics-reset');
    if (btnPhonicsReset) {
        btnPhonicsReset.addEventListener('click', () => {
            appState.phonicsIndex = 0;
            renderPhonicsStage();
            const current = ALPHABET_DATA[0];
            audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
        });
    }

    document.getElementById('btn-phonics-next').addEventListener('click', () => {
        appState.phonicsIndex = (appState.phonicsIndex + 1) % ALPHABET_DATA.length;
        renderPhonicsStage();
        const current = ALPHABET_DATA[appState.phonicsIndex];
        audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
    });

    document.getElementById('btn-phonics-prev').addEventListener('click', () => {
        appState.phonicsIndex = (appState.phonicsIndex - 1 + ALPHABET_DATA.length) % ALPHABET_DATA.length;
        renderPhonicsStage();
        const current = ALPHABET_DATA[appState.phonicsIndex];
        audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
    });

    document.getElementById('btn-phonics-random').addEventListener('click', () => {
        appState.phonicsIndex = Math.floor(Math.random() * ALPHABET_DATA.length);
        renderPhonicsStage();
        const current = ALPHABET_DATA[appState.phonicsIndex];
        audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
    });

    document.getElementById('btn-phonics-speak').addEventListener('click', () => {
        const current = ALPHABET_DATA[appState.phonicsIndex];
        audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
    });

    const btnPhonicsPlayAll = document.getElementById('btn-phonics-playall');
    if (btnPhonicsPlayAll) {
        btnPhonicsPlayAll.addEventListener('click', function() {
            if (phonicsPlayAllTimer) {
                clearInterval(phonicsPlayAllTimer);
                phonicsPlayAllTimer = null;
                this.innerText = '▶️ Play All A–Z';
            } else {
                this.innerText = '⏸️ Stop Slideshow';
                // Always start at letter "A" (index 0)
                appState.phonicsIndex = 0;
                renderPhonicsStage();

                const speakCurrentPhonics = () => {
                    const current = ALPHABET_DATA[appState.phonicsIndex];
                    // Speak format twice: "a... a... apple"
                    audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
                };

                speakCurrentPhonics();

                phonicsPlayAllTimer = setInterval(() => {
                    appState.phonicsIndex++;
                    if (appState.phonicsIndex >= ALPHABET_DATA.length) {
                        clearInterval(phonicsPlayAllTimer);
                        phonicsPlayAllTimer = null;
                        btnPhonicsPlayAll.innerText = '▶️ Play All A–Z';
                        return;
                    }
                    renderPhonicsStage();
                    speakCurrentPhonics();
                }, 3800);
            }
        });
    }

    // --- 6.3 COLOURS MODE ---
    let colourPlayAllTimer = null;

    function renderColourStage() {
        const item = COLOURS_DATA[appState.colourIndex];
        
        // Display colour name and associated object (e.g. "Red (Red Strawberry)")
        const nameElem = document.getElementById('colour-name');
        nameElem.innerText = `${item.name} (${item.objectLabel})`;
        nameElem.style.color = item.hex === '#ffffff' ? '#2d3436' : item.hex;

        document.getElementById('colour-svg-container').innerHTML = getSVGGraphic(item.shape, item.hex === '#ffffff' ? '#2d3436' : item.hex);

        // Render color palette bubbles
        const palette = document.getElementById('colour-palette');
        palette.innerHTML = COLOURS_DATA.map((c, i) => `
            <div class="colour-bubble" style="background-color: ${c.hex}; ${c.hex === '#ffffff' ? 'border: 3px solid #b2bec3;' : ''}" title="${c.objectLabel}" data-col-idx="${i}"></div>
        `).join('');

        palette.querySelectorAll('.colour-bubble').forEach(b => {
            b.addEventListener('click', (e) => {
                appState.colourIndex = parseInt(e.currentTarget.getAttribute('data-col-idx'));
                renderColourStage();
                const current = COLOURS_DATA[appState.colourIndex];
                audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
            });
        });
    }

    document.getElementById('btn-colour-next').addEventListener('click', () => {
        appState.colourIndex = (appState.colourIndex + 1) % COLOURS_DATA.length;
        renderColourStage();
        const current = COLOURS_DATA[appState.colourIndex];
        audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
    });

    document.getElementById('btn-colour-prev').addEventListener('click', () => {
        appState.colourIndex = (appState.colourIndex - 1 + COLOURS_DATA.length) % COLOURS_DATA.length;
        renderColourStage();
        const current = COLOURS_DATA[appState.colourIndex];
        audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
    });

    document.getElementById('btn-colour-random').addEventListener('click', () => {
        appState.colourIndex = Math.floor(Math.random() * COLOURS_DATA.length);
        renderColourStage();
        const current = COLOURS_DATA[appState.colourIndex];
        audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
    });

    document.getElementById('btn-color-speak').addEventListener('click', () => {
        const current = COLOURS_DATA[appState.colourIndex];
        audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
    });

    const btnColourPlayAll = document.getElementById('btn-colour-playall');
    if (btnColourPlayAll) {
        btnColourPlayAll.addEventListener('click', function() {
            if (colourPlayAllTimer) {
                clearInterval(colourPlayAllTimer);
                colourPlayAllTimer = null;
                this.innerText = '▶️ Play All Colours';
            } else {
                this.innerText = '⏸️ Stop Slideshow';
                // Always start at first colour Red (index 0)
                appState.colourIndex = 0;
                renderColourStage();

                const speakCurrentColour = () => {
                    const current = COLOURS_DATA[appState.colourIndex];
                    audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
                };

                speakCurrentColour();

                colourPlayAllTimer = setInterval(() => {
                    appState.colourIndex++;
                    if (appState.colourIndex >= COLOURS_DATA.length) {
                        clearInterval(colourPlayAllTimer);
                        colourPlayAllTimer = null;
                        btnColourPlayAll.innerText = '▶️ Play All Colours';
                        return;
                    }
                    renderColourStage();
                    speakCurrentColour();
                }, 3800);
            }
        });
    }

    // --- 6.4 NUMBERS & COUNTING MODE ---
    function renderNumberStage() {
        const item = NUMBERS_DATA[appState.numberIndex];
        document.getElementById('number-digit').innerText = item.digit;
        document.getElementById('number-word').innerText = item.word;

        const grid = document.getElementById('number-objects-grid');
        grid.innerHTML = '';

        for (let i = 1; i <= item.digit; i++) {
            const objDiv = document.createElement('div');
            objDiv.className = 'count-object-item';
            objDiv.innerHTML = getSVGGraphic('apple', '#ff7675');
            objDiv.addEventListener('click', () => {
                objDiv.classList.add('counted');
                audioEngine.playTone(300 + i * 20, 'sine', 0.1);
                audioEngine.speak(i.toString(), true);
            });
            grid.appendChild(objDiv);
        }
    }

    document.getElementById('btn-number-next').addEventListener('click', () => {
        appState.numberIndex = (appState.numberIndex + 1) % NUMBERS_DATA.length;
        renderNumberStage();
        audioEngine.speak(NUMBERS_DATA[appState.numberIndex].word);
    });

    document.getElementById('btn-number-prev').addEventListener('click', () => {
        appState.numberIndex = (appState.numberIndex - 1 + NUMBERS_DATA.length) % NUMBERS_DATA.length;
        renderNumberStage();
        audioEngine.speak(NUMBERS_DATA[appState.numberIndex].word);
    });

    document.getElementById('btn-number-random').addEventListener('click', () => {
        appState.numberIndex = Math.floor(Math.random() * NUMBERS_DATA.length);
        renderNumberStage();
        audioEngine.speak(NUMBERS_DATA[appState.numberIndex].word);
    });

    document.getElementById('btn-number-speak').addEventListener('click', () => {
        audioEngine.speak(`${NUMBERS_DATA[appState.numberIndex].digit}, ${NUMBERS_DATA[appState.numberIndex].word}`);
    });

    // --- 6.5 SHAPES MODE ---
    let shapePlayAllTimer = null;

    function renderShapeStage() {
        const item = SHAPES_DATA[appState.shapeIndex];
        document.getElementById('shape-name').innerText = item.name;
        document.getElementById('shape-svg-container').innerHTML = getSVGGraphic(item.icon, '#55efc4');
    }

    const btnShapeReset = document.getElementById('btn-shape-reset');
    if (btnShapeReset) {
        btnShapeReset.addEventListener('click', () => {
            appState.shapeIndex = 0;
            renderShapeStage();
            audioEngine.speak(SHAPES_DATA[0].name, true);
        });
    }

    document.getElementById('btn-shape-next').addEventListener('click', () => {
        appState.shapeIndex = (appState.shapeIndex + 1) % SHAPES_DATA.length;
        renderShapeStage();
        audioEngine.speak(SHAPES_DATA[appState.shapeIndex].name, true);
    });

    document.getElementById('btn-shape-prev').addEventListener('click', () => {
        appState.shapeIndex = (appState.shapeIndex - 1 + SHAPES_DATA.length) % SHAPES_DATA.length;
        renderShapeStage();
        audioEngine.speak(SHAPES_DATA[appState.shapeIndex].name, true);
    });

    document.getElementById('btn-shape-random').addEventListener('click', () => {
        appState.shapeIndex = Math.floor(Math.random() * SHAPES_DATA.length);
        renderShapeStage();
        audioEngine.speak(SHAPES_DATA[appState.shapeIndex].name, true);
    });

    document.getElementById('btn-shape-speak').addEventListener('click', () => {
        audioEngine.speak(SHAPES_DATA[appState.shapeIndex].name, true);
    });

    const btnShapePlayAll = document.getElementById('btn-shape-playall');
    if (btnShapePlayAll) {
        btnShapePlayAll.addEventListener('click', function() {
            if (shapePlayAllTimer) {
                clearInterval(shapePlayAllTimer);
                shapePlayAllTimer = null;
                this.innerText = '▶️ Play All Shapes';
            } else {
                this.innerText = '⏸️ Stop Slideshow';
                // Always start at Circle (index 0)
                appState.shapeIndex = 0;
                renderShapeStage();

                const speakCurrentShape = () => {
                    const current = SHAPES_DATA[appState.shapeIndex];
                    audioEngine.speak(current.name, true);
                };

                speakCurrentShape();

                shapePlayAllTimer = setInterval(() => {
                    appState.shapeIndex++;
                    if (appState.shapeIndex >= SHAPES_DATA.length) {
                        clearInterval(shapePlayAllTimer);
                        shapePlayAllTimer = null;
                        btnShapePlayAll.innerText = '▶️ Play All Shapes';
                        return;
                    }
                    renderShapeStage();
                    speakCurrentShape();
                }, 2500);
            }
        });
    }

    // --- 6.6 SIMPLE WORDS MODE ---
    let wordPlayAllTimer = null;

    function renderWordStage() {
        const item = SIMPLE_WORDS_DATA[appState.wordIndex];
        document.getElementById('word-card-name').innerText = item.word;
        document.getElementById('word-spelling').innerText = item.spelling;
        document.getElementById('word-svg-container').innerHTML = getSVGGraphic(item.icon, '#ffeaa7');
    }

    const btnWordReset = document.getElementById('btn-word-reset');
    if (btnWordReset) {
        btnWordReset.addEventListener('click', () => {
            appState.wordIndex = 0;
            saveState();
            renderWordStage();
            audioEngine.speak(SIMPLE_WORDS_DATA[0].word, true);
        });
    }

    document.getElementById('btn-word-next').addEventListener('click', () => {
        appState.wordIndex = (appState.wordIndex + 1) % SIMPLE_WORDS_DATA.length;
        renderWordStage();
        audioEngine.speak(SIMPLE_WORDS_DATA[appState.wordIndex].word, true);
    });

    document.getElementById('btn-word-prev').addEventListener('click', () => {
        appState.wordIndex = (appState.wordIndex - 1 + SIMPLE_WORDS_DATA.length) % SIMPLE_WORDS_DATA.length;
        renderWordStage();
        audioEngine.speak(SIMPLE_WORDS_DATA[appState.wordIndex].word, true);
    });

    document.getElementById('btn-word-random').addEventListener('click', () => {
        appState.wordIndex = Math.floor(Math.random() * SIMPLE_WORDS_DATA.length);
        renderWordStage();
        audioEngine.speak(SIMPLE_WORDS_DATA[appState.wordIndex].word, true);
    });

    document.getElementById('btn-word-speak').addEventListener('click', () => {
        audioEngine.speak(SIMPLE_WORDS_DATA[appState.wordIndex].word, true);
    });

    const btnWordPlayAll = document.getElementById('btn-word-playall');
    if (btnWordPlayAll) {
        btnWordPlayAll.addEventListener('click', function() {
            if (wordPlayAllTimer) {
                clearInterval(wordPlayAllTimer);
                wordPlayAllTimer = null;
                this.innerText = '▶️ Play All Words';
            } else {
                this.innerText = '⏸️ Stop Slideshow';
                // Always start at Cat (index 0)
                appState.wordIndex = 0;
                renderWordStage();

                const speakCurrentWord = () => {
                    const current = SIMPLE_WORDS_DATA[appState.wordIndex];
                    audioEngine.speak(current.word, true);
                };

                speakCurrentWord();

                wordPlayAllTimer = setInterval(() => {
                    appState.wordIndex++;
                    if (appState.wordIndex >= SIMPLE_WORDS_DATA.length) {
                        clearInterval(wordPlayAllTimer);
                        wordPlayAllTimer = null;
                        btnWordPlayAll.innerText = '▶️ Play All Words';
                        return;
                    }
                    renderWordStage();
                    speakCurrentWord();
                }, 2500);
            }
        });
    }

    /* ==========================================================================
       6.7 SENIOR STUDIO MODE SWITCHER & READING LAB ENGINE (AGES 8-10)
       ========================================================================== */

    const btnModeJunior = document.getElementById('btn-mode-junior');
    const btnModeSenior = document.getElementById('btn-mode-senior');

    function updateStudioModeUI() {
        if (!btnModeJunior || !btnModeSenior) return;
        const currentMode = appState.studioMode || 'junior';
        
        if (currentMode === 'senior') {
            btnModeSenior.classList.add('active');
            btnModeJunior.classList.remove('active');
        } else {
            btnModeJunior.classList.add('active');
            btnModeSenior.classList.remove('active');
        }
    }

    if (btnModeJunior && btnModeSenior) {
        btnModeJunior.addEventListener('click', () => {
            appState.studioMode = 'junior';
            saveState();
            updateStudioModeUI();
            switchView('view-home');
        });

        btnModeSenior.addEventListener('click', () => {
            appState.studioMode = 'senior';
            saveState();
            updateStudioModeUI();
            switchView('view-home-senior');
        });

        updateStudioModeUI();
    }

    // Senior Reading Lab State
    let currentStoryQuestionIndex = 0;

    function renderSeniorReadingStage() {
        const eslSelect = document.getElementById('select-reading-esl-level');
        if (eslSelect) {
            eslSelect.value = appState.eslLevelReading || 'intermediate';
            if (!eslSelect.dataset.bound) {
                eslSelect.dataset.bound = 'true';
                eslSelect.addEventListener('change', (e) => {
                    appState.eslLevelReading = e.target.value;
                    appState.seniorStoryIndex = 0;
                    currentStoryQuestionIndex = 0;
                    saveState();
                    renderSeniorReadingStage();
                });
            }
        }

        const eslLevel = appState.eslLevelReading || 'intermediate';
        const storiesList = SENIOR_STORIES_DATA[eslLevel] || SENIOR_STORIES_DATA.intermediate;

        if (appState.seniorStoryIndex >= storiesList.length) {
            appState.seniorStoryIndex = 0;
        }

        const storySelect = document.getElementById('select-reading-story');
        if (storySelect) {
            storySelect.innerHTML = storiesList.map((st, i) => `
                <option value="${i}">${st.title}</option>
            `).join('');
            storySelect.value = appState.seniorStoryIndex || 0;

            if (!storySelect.dataset.bound) {
                storySelect.dataset.bound = 'true';
                storySelect.addEventListener('change', (e) => {
                    appState.seniorStoryIndex = parseInt(e.target.value);
                    currentStoryQuestionIndex = 0;
                    saveState();
                    renderSeniorReadingStage();
                });
            }
        }

        const story = storiesList[appState.seniorStoryIndex || 0];
        if (!story) return;

        // Render Header Badges & Title
        document.getElementById('reading-genre-badge').innerText = story.genre;
        document.getElementById('reading-level-badge').innerText = story.level;
        document.getElementById('reading-title').innerText = story.title;

        // Render Story Visual Objects Showcase in Pane 2
        const objectsContainer = document.getElementById('reading-objects-grid');
        if (objectsContainer && story.storyObjects) {
            objectsContainer.innerHTML = story.storyObjects.map(obj => `
                <div class="story-obj-card" data-obj-name="${obj.name}">
                    <div class="story-obj-icon">${getSVGGraphic(obj.icon, obj.color || '#3b82f6')}</div>
                    <div class="story-obj-label">${obj.name}</div>
                </div>
            `).join('');

            // Bind click to speak object name
            objectsContainer.querySelectorAll('.story-obj-card').forEach(card => {
                card.addEventListener('click', () => {
                    const name = card.getAttribute('data-obj-name');
                    audioEngine.speak(name, true);
                });
            });
        }

        // Highlight Vocabulary in Passage Text
        let passageHTML = story.passage;
        story.vocab.forEach(v => {
            const regex = new RegExp(`\\b(${v.word})\\b`, 'gi');
            passageHTML = passageHTML.replace(regex, `<span class="vocab-highlight" data-word="${v.word}" data-def="${v.def}">$1</span>`);
        });
        document.getElementById('reading-body-text').innerHTML = passageHTML;

        // Bind Vocabulary Highlights in Passage
        document.querySelectorAll('.vocab-highlight').forEach(el => {
            el.addEventListener('click', () => {
                const word = el.getAttribute('data-word');
                const def = el.getAttribute('data-def');
                audioEngine.speak(`${word}. Definition: ${def}`);
            });
        });

        // Render Vocab Spotlight Chips
        const vocabContainer = document.getElementById('vocab-chips-container');
        vocabContainer.innerHTML = story.vocab.map(v => `
            <button class="vocab-chip" data-word="${v.word}" data-def="${v.def}">
                📌 <strong>${v.word}</strong>
            </button>
        `).join('');

        vocabContainer.querySelectorAll('.vocab-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const word = chip.getAttribute('data-word');
                const def = chip.getAttribute('data-def');
                audioEngine.speak(`${word}. ${def}`);
            });
        });

        // Render Comprehension Question
        const qData = story.questions[currentStoryQuestionIndex];
        const qNumBadge = document.getElementById('reading-q-num');
        const qText = document.getElementById('reading-q-text');
        const qOptions = document.getElementById('reading-q-options');
        const qFeedback = document.getElementById('reading-q-feedback');

        qFeedback.classList.add('hidden');
        qFeedback.className = 'q-feedback hidden';

        if (qData) {
            qNumBadge.innerText = `Question ${currentStoryQuestionIndex + 1} of ${story.questions.length}`;
            qText.innerText = qData.q;

            qOptions.innerHTML = qData.options.map((opt, i) => `
                <button class="btn-q-option" data-opt-idx="${i}">
                    ${String.fromCharCode(65 + i)}. ${opt}
                </button>
            `).join('');

            qOptions.querySelectorAll('.btn-q-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    const chosenIdx = parseInt(btn.getAttribute('data-opt-idx'));
                    if (chosenIdx === qData.correct) {
                        btn.classList.add('correct');
                        qFeedback.innerText = '✨ Correct! Excellent reading comprehension!';
                        qFeedback.className = 'q-feedback success';
                        qFeedback.classList.remove('hidden');
                        audioEngine.playTone(600, 'sine', 0.15);
                        triggerConfetti();
                        awardHeartToActiveStudent();

                        setTimeout(() => {
                            if (currentStoryQuestionIndex + 1 < story.questions.length) {
                                currentStoryQuestionIndex++;
                                renderSeniorReadingStage();
                            }
                        }, 1800);
                    } else {
                        btn.classList.add('wrong');
                        qFeedback.innerText = '❌ Try again! Re-read the passage carefully.';
                        qFeedback.className = 'q-feedback error';
                        qFeedback.classList.remove('hidden');
                        audioEngine.playTone(250, 'sawtooth', 0.2);
                    }
                });
            });
        }

        // Render Discussion Tab Prompt
        document.getElementById('reading-discussion-prompt').innerText = `"${story.discussionPrompt}"`;
    }

    // Bind Read Aloud Button
    const btnReadAloud = document.getElementById('btn-reading-readaloud');
    const btnStopRead = document.getElementById('btn-reading-stop');

    if (btnReadAloud) {
        btnReadAloud.addEventListener('click', () => {
            const eslLevel = appState.eslLevelReading || 'intermediate';
            const storiesList = SENIOR_STORIES_DATA[eslLevel] || SENIOR_STORIES_DATA.intermediate;
            const story = storiesList[appState.seniorStoryIndex || 0];
            if (story) {
                audioEngine.speak(`${story.title}. ${story.passage}`);
                btnReadAloud.classList.add('hidden');
                if (btnStopRead) btnStopRead.classList.remove('hidden');
            }
        });
    }

    if (btnStopRead) {
        btnStopRead.addEventListener('click', () => {
            audioEngine.stop();
            btnStopRead.classList.add('hidden');
            if (btnReadAloud) btnReadAloud.classList.remove('hidden');
        });
    }

    // Reading Lab Tab Switcher
    const tabQuestions = document.getElementById('tab-btn-questions');
    const tabDiscussion = document.getElementById('tab-btn-discussion');
    const contentQuestions = document.getElementById('tab-content-questions');
    const contentDiscussion = document.getElementById('tab-content-discussion');

    if (tabQuestions && tabDiscussion) {
        tabQuestions.addEventListener('click', () => {
            tabQuestions.classList.add('active');
            tabDiscussion.classList.remove('active');
            contentQuestions.classList.remove('hidden');
            contentDiscussion.classList.add('hidden');
        });

        tabDiscussion.addEventListener('click', () => {
            tabDiscussion.classList.add('active');
            tabQuestions.classList.remove('active');
            contentDiscussion.classList.remove('hidden');
            contentQuestions.classList.add('hidden');
        });
    }

    // Award Discussion Hearts Button
    const btnDiscussAward = document.getElementById('btn-discuss-award');
    if (btnDiscussAward) {
        btnDiscussAward.addEventListener('click', () => {
            awardHeartToActiveStudent();
            awardHeartToActiveStudent();
            triggerConfetti();
            audioEngine.speak("Great discussion! 2 hearts awarded!");
        });
    }

    /* ==========================================================================
       6.8 SENIOR ADVANCED VOCABULARY & SPELLING ENGINE (AGES 8-10)
       ========================================================================== */

    let seniorSpellingRevealedIndices = new Set();
    let seniorSpellingAnimationTimer = null;

    function getSeniorVocabContext() {
        const eslLevel = appState.eslLevelVocab || 'intermediate';
        const vocabLevelDict = SENIOR_VOCAB_DATA[eslLevel] || SENIOR_VOCAB_DATA.intermediate;
        const defaultCat = 'head_words';
        const categoryKey = appState.seniorVocabCategory || defaultCat;
        const wordList = vocabLevelDict[categoryKey] || vocabLevelDict.head_words || vocabLevelDict.prefixes || vocabLevelDict.prefix_suffix || [];
        return { eslLevel, vocabLevelDict, categoryKey, wordList };
    }

    function renderSeniorVocabStage(resetSpellingReveal = true) {
        const { eslLevel } = getSeniorVocabContext();

        const eslVocabSelect = document.getElementById('select-vocab-esl-level');
        if (eslVocabSelect) {
            eslVocabSelect.value = eslLevel;
            if (!eslVocabSelect.dataset.bound) {
                eslVocabSelect.dataset.bound = 'true';
                eslVocabSelect.addEventListener('change', (e) => {
                    appState.eslLevelVocab = e.target.value;
                    appState.seniorVocabIndex = 0;
                    if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                        appState.seniorVocabCategory = 'head_words';
                    }
                    saveState();
                    renderSeniorVocabStage(true);
                });
            }
        }

        const catSelect = document.getElementById('select-vocab-category');
        if (catSelect) {
            if (eslLevel === 'beginner') {
                const beginnerOpts = [
                    { val: 'head_words', label: '🐶 Head Words (un- = NOT, re- = AGAIN)' },
                    { val: 'tail_words', label: '🐕 Tail Words (-er = PERSON, -ful / -less)' },
                    { val: 'compound', label: '☀️ Word Math (Compound Words)' }
                ];
                if (catSelect.dataset.eslLevel !== 'beginner') {
                    catSelect.dataset.eslLevel = 'beginner';
                    catSelect.innerHTML = beginnerOpts.map(o => `<option value="${o.val}">${o.label}</option>`).join('');
                    if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                        appState.seniorVocabCategory = 'head_words';
                    }
                }
            } else if (eslLevel === 'intermediate') {
                const intermediateOpts = [
                    { val: 'head_words', label: '🐶 Head Words (dis- = DO NOT, mis- = WRONG WAY)' },
                    { val: 'tail_words', label: '🐕 Tail Words (-ly = IN A WAY, -able / un-...-able)' },
                    { val: 'compound', label: '☀️ Word Math (Compound Words)' }
                ];
                if (catSelect.dataset.eslLevel !== 'intermediate') {
                    catSelect.dataset.eslLevel = 'intermediate';
                    catSelect.innerHTML = intermediateOpts.map(o => `<option value="${o.val}">${o.label}</option>`).join('');
                    if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                        appState.seniorVocabCategory = 'head_words';
                    }
                }
            } else {
                const advancedOpts = [
                    { val: 'head_words', label: '🐶 Head Words (im-/in- = NOT, over-/under-)' },
                    { val: 'tail_words', label: '🐕 Tail Words (-tion/-sion = SHUN, -ous = FULL OF)' },
                    { val: 'compound', label: '☀️ Word Math (Compound Words)' }
                ];
                if (catSelect.dataset.eslLevel !== 'advanced') {
                    catSelect.dataset.eslLevel = 'advanced';
                    catSelect.innerHTML = advancedOpts.map(o => `<option value="${o.val}">${o.label}</option>`).join('');
                    if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                        appState.seniorVocabCategory = 'head_words';
                    }
                }
            }
            catSelect.value = appState.seniorVocabCategory || 'head_words';
        }

        const { wordList } = getSeniorVocabContext();

        if (appState.seniorVocabIndex >= wordList.length) {
            appState.seniorVocabIndex = 0;
        }

        const item = wordList[appState.seniorVocabIndex || 0];
        if (!item) return;

        if (resetSpellingReveal) {
            seniorSpellingRevealedIndices.clear();
            if (seniorSpellingAnimationTimer) {
                clearTimeout(seniorSpellingAnimationTimer);
                seniorSpellingAnimationTimer = null;
            }
        }

        const currentSubTab = appState.seniorVocabSubTab || 'study';

        // Update Tab UI Elements
        const tabStudy = document.getElementById('tab-vocab-study');
        const tabSpelling = document.getElementById('tab-vocab-spelling');
        const panelStudy = document.getElementById('vocab-study-panel');
        const panelSpelling = document.getElementById('vocab-spelling-panel');
        const btnBreakdownAudio = document.getElementById('btn-vocab-breakdown-audio');
        const btnVocabAward = document.getElementById('btn-vocab-award');

        if (currentSubTab === 'spelling') {
            if (tabStudy) tabStudy.classList.remove('active');
            if (tabSpelling) tabSpelling.classList.add('active');
            if (panelStudy) panelStudy.classList.add('hidden');
            if (panelSpelling) panelSpelling.classList.remove('hidden');
            if (btnBreakdownAudio) btnBreakdownAudio.classList.add('hidden');
            if (btnVocabAward) btnVocabAward.classList.add('hidden');
            renderSeniorSpellingBee(item, wordList);
        } else {
            if (tabStudy) tabStudy.classList.add('active');
            if (tabSpelling) tabSpelling.classList.remove('active');
            if (panelStudy) panelStudy.classList.remove('hidden');
            if (panelSpelling) panelSpelling.classList.add('hidden');
            if (btnBreakdownAudio) btnBreakdownAudio.classList.remove('hidden');
            if (btnVocabAward) btnVocabAward.classList.remove('hidden');

            // Render Headings & Badges
            document.getElementById('vocab-cat-badge').innerText = item.categoryLabel;
            document.getElementById('vocab-index-badge').innerText = `Word ${appState.seniorVocabIndex + 1} of ${wordList.length}`;
            document.getElementById('vocab-target-word').innerText = item.word;
            document.getElementById('vocab-word-phonetic').innerText = item.phonetic;

            // Beginner Visuals (Math Equation, Teacher Tip)
            const mathEqElem = document.getElementById('vocab-math-equation');
            const tipContainer = document.getElementById('vocab-teacher-tip-container');
            const tipText = document.getElementById('vocab-teacher-tip-text');

            // Visuals: Math Equation & Teacher Tip (used for Beginner & Intermediate)
            if (mathEqElem) {
                if (item.equation) {
                    mathEqElem.innerText = item.equation;
                    mathEqElem.classList.remove('hidden');
                } else {
                    mathEqElem.classList.add('hidden');
                }
            }
            if (tipContainer && tipText) {
                if (item.teacherTip) {
                    tipText.innerText = item.teacherTip;
                    tipContainer.classList.remove('hidden');
                } else {
                    tipContainer.classList.add('hidden');
                }
            }

            // Render Morphological Breakdown Blocks
            const morphContainer = document.getElementById('vocab-morph-breakdown');
            morphContainer.innerHTML = item.parts.map((p, i) => `
                ${i > 0 ? '<span class="morph-plus">+</span>' : ''}
                <div class="morph-block morph-${p.type}" title="${p.meaning}">
                    <div class="morph-text">${p.text}</div>
                    <div style="font-size:0.75rem; font-weight:600; opacity:0.85;">${p.meaning}</div>
                </div>
            `).join('');

            // Bind morph block clicks to audio
            morphContainer.querySelectorAll('.morph-block').forEach(b => {
                b.addEventListener('click', () => {
                    const text = b.querySelector('.morph-text').innerText;
                    audioEngine.speak(text, true);
                });
            });

            // Render Definition & Sentence Context
            document.getElementById('vocab-def-text').innerText = item.definition;
            document.getElementById('vocab-sentence-text').innerText = `"${item.sentence}"`;
        }
    }

    function renderSeniorSpellingBee(item, wordList) {
        const cleanWord = (item.spellWord || item.word).replace(/[^a-zA-Z]/g, '').toUpperCase();
        
        // Badges
        const catBadge = document.getElementById('spelling-cat-badge');
        const lenBadge = document.getElementById('spelling-length-badge');
        if (catBadge) catBadge.innerText = `🐝 Spelling Bee: ${item.categoryLabel}`;
        if (lenBadge) lenBadge.innerText = `${cleanWord.length} Letters • Word ${appState.seniorVocabIndex + 1} of ${wordList.length}`;

        // Definition & Masked Sentence
        const defElem = document.getElementById('spelling-def-text');
        const sentenceElem = document.getElementById('spelling-sentence-masked');
        if (defElem) defElem.innerText = item.definition;
        
        if (sentenceElem) {
            const rootWord = item.word.split('/')[0].trim();
            const regex = new RegExp(`\\b${rootWord}\\b`, 'gi');
            let masked = item.sentence.replace(regex, '__________');
            if (masked === item.sentence) {
                masked = item.sentence.replace(new RegExp(cleanWord, 'gi'), '__________');
            }
            sentenceElem.innerText = `"${masked}"`;
        }

        // Math Clue in Spelling Bee
        const mathClueItem = document.getElementById('spelling-math-clue-item');
        const mathClueText = document.getElementById('spelling-math-clue-text');
        if (mathClueItem && mathClueText) {
            if (item.equation) {
                const parts = item.equation.split('=');
                const clue = parts.length > 1 ? `${parts[0].trim()} = ❓` : item.equation;
                mathClueText.innerText = clue;
                mathClueItem.classList.remove('hidden');
            } else {
                mathClueItem.classList.add('hidden');
            }
        }

        // Render Letter Tiles
        const tilesContainer = document.getElementById('spelling-tiles-container');
        if (tilesContainer) {
            tilesContainer.innerHTML = cleanWord.split('').map((letter, i) => {
                const isRevealed = seniorSpellingRevealedIndices.has(i);
                return `
                    <div class="spelling-tile ${isRevealed ? 'revealed-tile' : 'hidden-tile'}" data-letter-idx="${i}" data-letter="${letter}">
                        ${isRevealed ? letter : '?'}
                    </div>
                `;
            }).join('');

            // Click individual tile to reveal or pronounce
            tilesContainer.querySelectorAll('.spelling-tile').forEach(tile => {
                tile.addEventListener('click', () => {
                    const idx = parseInt(tile.getAttribute('data-letter-idx'));
                    const letter = tile.getAttribute('data-letter');
                    
                    if (!seniorSpellingRevealedIndices.has(idx)) {
                        seniorSpellingRevealedIndices.add(idx);
                        tile.classList.remove('hidden-tile');
                        tile.classList.add('revealed-tile');
                        tile.innerText = letter;
                        audioEngine.speak(letter, true);

                        // Check if all are now revealed
                        if (seniorSpellingRevealedIndices.size === cleanWord.length) {
                            setTimeout(() => {
                                audioEngine.speak(item.word, false);
                                triggerConfetti();
                                audioEngine.playCorrect();
                            }, 500);
                        }
                    } else {
                        audioEngine.speak(letter, true);
                    }
                });
            });
        }
    }

    // Tab switching bindings
    const tabVocabStudy = document.getElementById('tab-vocab-study');
    const tabVocabSpelling = document.getElementById('tab-vocab-spelling');
    if (tabVocabStudy && tabVocabSpelling) {
        tabVocabStudy.addEventListener('click', () => {
            appState.seniorVocabSubTab = 'study';
            saveState();
            renderSeniorVocabStage(false);
        });

        tabVocabSpelling.addEventListener('click', () => {
            appState.seniorVocabSubTab = 'spelling';
            saveState();
            renderSeniorVocabStage(false);
            const { wordList } = getSeniorVocabContext();
            const item = wordList[appState.seniorVocabIndex || 0];
            if (item) {
                audioEngine.speak(`Spelling Bee challenge! Listen to the word: ${item.word}`, true);
            }
        });
    }

    // Spelling Bee Controls
    const btnSpellSayWord = document.getElementById('btn-spell-say-word');
    if (btnSpellSayWord) {
        btnSpellSayWord.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            const item = wordList[appState.seniorVocabIndex || 0];
            if (item) audioEngine.speak(item.word, true);
        });
    }

    const btnSpellSaySentence = document.getElementById('btn-spell-say-sentence');
    if (btnSpellSaySentence) {
        btnSpellSaySentence.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            const item = wordList[appState.seniorVocabIndex || 0];
            if (item) {
                audioEngine.speak(`Listen to the sentence context: ${item.sentence}`, true);
            }
        });
    }

    const btnSpellHint = document.getElementById('btn-spell-hint');
    if (btnSpellHint) {
        btnSpellHint.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            const item = wordList[appState.seniorVocabIndex || 0];
            if (!item) return;

            const cleanWord = (item.spellWord || item.word).replace(/[^a-zA-Z]/g, '').toUpperCase();
            
            // Find first unrevealed letter index
            let targetIdx = -1;
            for (let i = 0; i < cleanWord.length; i++) {
                if (!seniorSpellingRevealedIndices.has(i)) {
                    targetIdx = i;
                    break;
                }
            }

            if (targetIdx !== -1) {
                seniorSpellingRevealedIndices.add(targetIdx);
                const tile = document.querySelector(`.spelling-tile[data-letter-idx="${targetIdx}"]`);
                if (tile) {
                    tile.classList.remove('hidden-tile');
                    tile.classList.add('revealed-tile');
                    tile.innerText = cleanWord[targetIdx];
                }
                audioEngine.speak(`Hint: letter ${targetIdx + 1} is ${cleanWord[targetIdx]}`, true);

                if (seniorSpellingRevealedIndices.size === cleanWord.length) {
                    setTimeout(() => {
                        audioEngine.speak(item.word, false);
                        triggerConfetti();
                        audioEngine.playCorrect();
                    }, 500);
                }
            } else {
                audioEngine.speak("All letters are already revealed!", true);
            }
        });
    }

    const btnSpellReveal = document.getElementById('btn-spell-reveal');
    if (btnSpellReveal) {
        btnSpellReveal.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            const item = wordList[appState.seniorVocabIndex || 0];
            if (!item) return;

            const cleanWord = (item.spellWord || item.word).replace(/[^a-zA-Z]/g, '').toUpperCase();
            const tiles = document.querySelectorAll('.spelling-tile');

            if (seniorSpellingAnimationTimer) {
                clearTimeout(seniorSpellingAnimationTimer);
                seniorSpellingAnimationTimer = null;
            }

            // Animate letter-by-letter reveal
            let step = 0;
            function revealNextLetter() {
                if (step < cleanWord.length) {
                    const currentLetter = cleanWord[step];
                    seniorSpellingRevealedIndices.add(step);

                    tiles.forEach((t, idx) => {
                        if (idx === step) {
                            t.classList.remove('hidden-tile');
                            t.classList.add('revealed-tile', 'speaking-tile');
                            t.innerText = currentLetter;
                        } else {
                            t.classList.remove('speaking-tile');
                        }
                    });

                    audioEngine.speak(currentLetter, true);
                    step++;
                    seniorSpellingAnimationTimer = setTimeout(revealNextLetter, 550);
                } else {
                    tiles.forEach(t => t.classList.remove('speaking-tile'));
                    seniorSpellingAnimationTimer = setTimeout(() => {
                        audioEngine.speak(item.word, true);
                        triggerConfetti();
                        audioEngine.playCorrect();
                        seniorSpellingAnimationTimer = null;
                    }, 400);
                }
            }

            revealNextLetter();
        });
    }

    const btnSpellAward = document.getElementById('btn-spell-award');
    if (btnSpellAward) {
        btnSpellAward.addEventListener('click', () => {
            awardHeartToActiveStudent();
            awardHeartToActiveStudent();
            triggerConfetti();
            audioEngine.playFanfare();
            audioEngine.speak("Super spelling! 2 hearts awarded!");
        });
    }

    // Category Selector Handler
    const vocabCatSelect = document.getElementById('select-vocab-category');
    if (vocabCatSelect) {
        vocabCatSelect.addEventListener('change', (e) => {
            appState.seniorVocabCategory = e.target.value;
            appState.seniorVocabIndex = 0;
            saveState();
            renderSeniorVocabStage(true);
        });
    }

    // Top Header Speak Button
    const btnVocabSpeak = document.getElementById('btn-vocab-speak');
    if (btnVocabSpeak) {
        btnVocabSpeak.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            const item = wordList[appState.seniorVocabIndex || 0];
            if (item) audioEngine.speak(item.word, true);
        });
    }

    const btnVocabBreakdownAudio = document.getElementById('btn-vocab-breakdown-audio');
    if (btnVocabBreakdownAudio) {
        btnVocabBreakdownAudio.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            const item = wordList[appState.seniorVocabIndex || 0];
            if (item) {
                if (item.equation) {
                    const cleanEq = item.equation
                        .replace(/\+/g, ' plus ')
                        .replace(/=/g, ' equals ')
                        .replace(/[^\w\s+=-]/gi, '')
                        .replace(/\s+/g, ' ')
                        .trim();
                    audioEngine.speak(`${cleanEq}! ${item.word} means ${item.definition}`, true);
                } else {
                    const partsStr = item.parts.map(p => p.text).join(' plus ');
                    audioEngine.speak(`${item.word} is formed by ${partsStr}.`, true);
                }
            }
        });
    }

    const btnVocabReset = document.getElementById('btn-vocab-reset');
    if (btnVocabReset) {
        btnVocabReset.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            appState.seniorVocabIndex = 0;
            saveState();
            renderSeniorVocabStage(true);
            const item = wordList[0];
            if (item) audioEngine.speak(item.word, true);
        });
    }

    const btnVocabNext = document.getElementById('btn-vocab-next');
    if (btnVocabNext) {
        btnVocabNext.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            appState.seniorVocabIndex = (appState.seniorVocabIndex + 1) % wordList.length;
            saveState();
            renderSeniorVocabStage(true);
            const item = wordList[appState.seniorVocabIndex];
            if (item) audioEngine.speak(item.word, true);
        });
    }

    const btnVocabPrev = document.getElementById('btn-vocab-prev');
    if (btnVocabPrev) {
        btnVocabPrev.addEventListener('click', () => {
            const { wordList } = getSeniorVocabContext();
            appState.seniorVocabIndex = (appState.seniorVocabIndex - 1 + wordList.length) % wordList.length;
            saveState();
            renderSeniorVocabStage(true);
            const item = wordList[appState.seniorVocabIndex];
            if (item) audioEngine.speak(item.word, true);
        });
    }

    const btnVocabAward = document.getElementById('btn-vocab-award');
    if (btnVocabAward) {
        btnVocabAward.addEventListener('click', () => {
            awardHeartToActiveStudent();
            triggerConfetti();
            audioEngine.speak("Great word study!");
        });
    }

    /* ==========================================================================
       6.9 SENIOR STEM & SCIENCE LAB ENGINE (AGES 8-10)
       ========================================================================== */

    const COPPER_WIRE_ICON_SVG = `<svg class="stem-chip-wire" width="20" height="16" viewBox="0 0 24 20" style="vertical-align:middle;margin-left:4px;display:inline-block;" xmlns="http://www.w3.org/2000/svg"><path d="M3 13 C3 5.5, 9.5 3.5, 14 7 C18.5 10.5, 18.5 16, 13 17 C7.5 18, 5 13.5, 8.5 9.5 C12 5.5, 18 6, 21 11" stroke="#7c2d12" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M3 13 C3 5.5, 9.5 3.5, 14 7 C18.5 10.5, 18.5 16, 13 17 C7.5 18, 5 13.5, 8.5 9.5 C12 5.5, 18 6, 21 11" stroke="#ea580c" stroke-width="2.6" stroke-linecap="round" fill="none"/><path d="M3.5 12.5 C3.5 6, 9.5 4, 14 7.5 C18 11, 18 15.5, 13 16.5 C8 17.5, 5.5 13.5, 8.5 10 C11.5 6.5, 17.5 6.5, 20.5 11" stroke="#fed7aa" stroke-width="1" stroke-linecap="round" fill="none"/><circle cx="3" cy="13" r="1.8" fill="#fdba74" stroke="#7c2d12" stroke-width="0.8"/><circle cx="21" cy="11" r="1.8" fill="#fdba74" stroke="#7c2d12" stroke-width="0.8"/></svg>`;

    const STEM_SCIENCE_DATA = {
        beginner: {
            title: '🌱 How Plants Grow & Live',
            badge: '🟢 Level 1: Plant Biology',
            vocabFocus: 'Simple adjectives & senses (heavy, light, float, sink, hot, cold, living)',
            headTailFocus: 'un- (unhappy), re- (retest, refill), -er (helper), -ful / -less (colorful, careless)',
            conceptSummary: 'Plants are living things! They need sunlight, rain, and soil to grow colorful and strong.',
            diagram: {
                name: 'A Growing Plant',
                hotspots: [
                    {
                        id: 'roots',
                        label: 'Roots 🥕',
                        title: 'Roots (The Hidden Helpers)',
                        desc: 'Roots grow down into the dark soil. They drink fresh water and hold the plant steady!',
                        speech: 'Roots are great helpers! They drink water from the soil.',
                        tiein: 'helper (-er = a person/thing that helps)',
                        x: 300, y: 215, rx: 50, ry: 18
                    },
                    {
                        id: 'stem',
                        label: 'Stem 🌱',
                        title: 'Stem (The Green Highway)',
                        desc: 'The strong stem carries water from roots up to leaves and flowers.',
                        speech: 'The stem stands tall and moves water up like a green elevator.',
                        tiein: 'stand tall (strong support)',
                        x: 300, y: 108, rx: 45, ry: 16
                    },
                    {
                        id: 'leaf',
                        label: 'Leaf 🍃',
                        title: 'Leaf (The Kitchen)',
                        desc: 'Leaves catch warm sunshine to cook tasty food for the whole plant.',
                        speech: 'Without rain, the plant is unhappy. With sun and rain, it grows colorful!',
                        tiein: 'unhappy (un- = NOT) & colorful (-ful = A LOT)',
                        x: 178, y: 148, rx: 48, ry: 18
                    },
                    {
                        id: 'sun',
                        label: 'Sun ☀️',
                        title: 'Sunlight (Pure Energy)',
                        desc: 'Warm sunshine gives light energy so the plant can make food.',
                        speech: 'Bright sunlight keeps the green plant warm, active, and alive.',
                        tiein: 'bright / sunlight',
                        x: 490, y: 50, rx: 42, ry: 18
                    },
                    {
                        id: 'rain',
                        label: 'Rain 🌧️',
                        title: 'Rain (Fresh Water)',
                        desc: 'Raindrops fall from soft clouds to give water to the thirsty soil.',
                        speech: 'Rain falls from the clouds to refill the soil with water.',
                        tiein: 'refill (re- = AGAIN)',
                        x: 105, y: 45, rx: 42, ry: 18
                    }
                ]
            },
            experiment: {
                title: '🌊 Sink or Float Lab',
                desc: 'Drop objects into the water tank to test which ones float at the surface and which sink to the bottom!',
                items: [
                    {
                        id: 'apple',
                        name: 'Red Apple 🍎',
                        speakName: 'red apple',
                        weight: 'Light (Full of tiny air pockets)',
                        floats: true,
                        predictFrame: 'I think the [red apple] will [float].',
                        resultFrame: 'The red apple is light! It bobs on top.',
                        resultDesc: 'The red apple has tiny air pockets inside, so it floats gently at the water surface!',
                        tiein: 'bobs on top (light / float)'
                    },
                    {
                        id: 'coin',
                        name: 'Metal Coin 🪙',
                        speakName: 'metal coin',
                        weight: 'Heavy (Dense solid metal)',
                        floats: false,
                        predictFrame: 'I think the [metal coin] will [sink].',
                        resultFrame: 'It is [heavy]! It sinks straight to the bottom.',
                        resultDesc: 'The metal coin is heavy and dense with zero air, so it sinks down to the sand.',
                        tiein: 'heavy / sinking'
                    },
                    {
                        id: 'wood',
                        name: 'Wood Block 🪵',
                        speakName: 'wood block',
                        weight: 'Light (Natural porous wood)',
                        floats: true,
                        predictFrame: 'I think the [wood block] will [float].',
                        resultFrame: 'It is [light]! The wooden block floats like a boat.',
                        resultDesc: 'Wood is lighter than water, so it stays floating safely right on top!',
                        tiein: 'safe on water (-er = helper)'
                    },
                    {
                        id: 'key',
                        name: 'Iron Key 🗝️',
                        speakName: 'iron key',
                        weight: 'Heavy (Solid iron metal)',
                        floats: false,
                        predictFrame: 'I think the [iron key] will [sink].',
                        resultFrame: 'The heavy iron key sinks fast.',
                        resultDesc: 'Iron is very heavy and sinks straight down to the bottom.',
                        tiein: 'unsafe in deep water (un- = NOT)'
                    }
                ]
            }
        },
        intermediate: {
            title: '💧 The Water Cycle & Magnet Forces',
            badge: '🟡 Level 2: Earth & Physics',
            vocabFocus: 'Process words & forces (melt, freeze, steam, attract, repel, evaporate)',
            headTailFocus: 'dis- (disappear, disagree), mis- (miscount), -ly (quickly, slowly, heavily), -able (breakable, unbreakable)',
            conceptSummary: 'The sun pulls ocean water up as an invisible gas. In the cold sky it bunches into clouds, and when heavy, it falls back down as rain!',
            diagram: {
                name: 'The Water Cycle',
                hotspots: [
                    {
                        id: 'ocean',
                        label: 'Ocean 🌊',
                        title: '1. The Ocean (Liquid Water)',
                        desc: 'The huge ocean holds liquid water. The warm sun shines down and gets ready to pull it into the sky!',
                        speech: 'Water sits in the ocean until the warm sun heats it up.',
                        tiein: 'peacefully (-ly = IN A WAY)',
                        x: 120, y: 205, rx: 45, ry: 18
                    },
                    {
                        id: 'evap',
                        label: 'Invisible Gas 💨',
                        title: '2. Evaporation (Rising Up)',
                        desc: 'The sun pulls water up from the ocean as an invisible gas called water vapor that disappears into the sky.',
                        speech: 'The sun pulls water up from the ocean as an invisible gas.',
                        tiein: 'invisible (in- = NOT) & disappears (dis- = OPPOSITE)',
                        x: 177, y: 110, rx: 60, ry: 18
                    },
                    {
                        id: 'cloud',
                        label: 'Cloud Forms ☁️',
                        title: '3. Condensation (Making Clouds)',
                        desc: 'High up in the cold sky, that gas turns back into tiny water drops. Millions of those ocean-water drops bunch together to form a cloud!',
                        speech: 'High up in the cold sky, that gas turns back into tiny water drops. Millions of those ocean-water drops bunch together to form a cloud.',
                        tiein: 'slowly (-ly = IN A WAY)',
                        x: 387, y: 55, rx: 60, ry: 18
                    },
                    {
                        id: 'rain',
                        label: 'Rain Falls 🌧️',
                        title: '4. Precipitation (Falling Down)',
                        desc: 'When the cloud gets too full and heavy, that same ocean water falls right back down as rain!',
                        speech: 'When the cloud gets too full and heavy, that same ocean water falls right back down as rain!',
                        tiein: 'heavily (-ly = IN A WAY) / quickly',
                        x: 482, y: 140, rx: 60, ry: 18
                    }
                ]
            },
            experiment: {
                title: '🧲 The Magnet Mystery',
                desc: 'Test different everyday objects with a strong bar magnet to see which ones are magnetic!',
                items: [
                    {
                        id: 'nail',
                        name: 'Iron Nail 🔩',
                        speakName: 'iron nail',
                        material: 'Iron (Magnetic metal)',
                        magnetic: true,
                        predictFrame: 'The magnet will [attract] the [nail] quickly!',
                        resultFrame: 'Click! The iron nail snapped quickly to the magnet.',
                        resultDesc: 'Iron is magnetic! The magnetic force pulled the nail tightly to the North pole.',
                        tiein: 'quickly (-ly = IN A WAY)'
                    },
                    {
                        id: 'pencil',
                        name: 'Wooden Pencil ✏️',
                        speakName: 'wooden pencil',
                        material: 'Wood & graphite (Non-magnetic)',
                        magnetic: false,
                        predictFrame: 'I predict the magnet will [not pull] the [pencil].',
                        resultFrame: 'I disagree! The [pencil] is not magnetic and does not move.',
                        resultDesc: 'Wood is not magnetic. The magnet has zero pull on the wooden pencil.',
                        tiein: 'disagree (dis- = OPPOSITE / DO NOT)'
                    },
                    {
                        id: 'clip',
                        name: 'Paperclip 📎',
                        speakName: 'paperclip',
                        material: 'Steel (Magnetic alloy)',
                        magnetic: true,
                        predictFrame: 'The magnet will [attract] the [paperclip] easily!',
                        resultFrame: 'Snap! The steel paperclip jumped happily to the magnet.',
                        resultDesc: 'Steel contains iron, so the magnetic field snaps it straight onto the magnet.',
                        tiein: 'happily (-ly = IN A WAY)'
                    },
                    {
                        id: 'eraser',
                        name: 'Rubber Eraser 🧼',
                        speakName: 'rubber eraser',
                        material: 'Rubber (Bendable non-magnetic)',
                        magnetic: false,
                        predictFrame: 'The magnet will [ignore] the [rubber eraser].',
                        resultFrame: 'The bendable eraser is unbreakable and not magnetic.',
                        resultDesc: 'Rubber does not have magnetic domains, so the magnet cannot attract it.',
                        tiein: 'unbreakable (un-...-able = CANNOT)'
                    }
                ]
            }
        },
        advanced: {
            title: '⚡ Solar Orbits & Electric Circuits',
            badge: '🔴 Level 3: Space & Electricity',
            vocabFocus: 'Scientific reasoning & energy terms (orbit, gravity, electricity, switch, circuit, power)',
            headTailFocus: 'in- / im- (incomplete, impossible, invisible), over- / under- (overheat), -tion (connection, revolution), -ous (dangerous)',
            conceptSummary: 'Planets orbit around the sun via gravity, and closed circuits allow electric current to flow!',
            diagram: {
                name: 'The Solar System',
                hotspots: [
                    {
                        id: 'sun',
                        label: 'The Sun ☀️',
                        title: 'The Sun (Massive Star)',
                        desc: 'A giant ball of burning gas with intense gravity holding all planets in orbit.',
                        speech: 'Gravity is an invisible force! Getting too close to the Sun is dangerous.',
                        tiein: 'invisible (in- = NOT) & dangerous (-ous = FULL OF)',
                        x: 45, y: 125, rx: 42, ry: 18
                    },
                    {
                        id: 'inner',
                        label: 'Hot Planets (Mercury & Venus) 🪐',
                        title: 'Mercury & Venus (Hot Planets)',
                        desc: 'Rocky planets close to the Sun that bake under extreme planetary heat.',
                        speech: 'Mercury and Venus overheat because they are so close to the Sun.',
                        tiein: 'overheat (over- = TOO MUCH)',
                        x: 140, y: 125, rx: 65, ry: 18
                    },
                    {
                        id: 'earth',
                        label: 'Earth 🌍',
                        title: 'Earth (Our Home)',
                        desc: 'The only known planet with liquid water, oxygen, and life, taking 365 days to complete one full revolution around the Sun.',
                        speech: 'Earth takes 365 days to complete one full revolution around the Sun!',
                        tiein: 'revolution (-tion = THE ACT / RESULT)',
                        x: 250, y: 92, rx: 45, ry: 18
                    },
                    {
                        id: 'mars',
                        label: 'Mars 🔴',
                        title: 'Mars (The Red Planet)',
                        desc: 'Mars is famously known as the Red Planet! Iron-rich minerals in its dusty soil give it a distinct reddish color, which is why its banner reads Red.',
                        speech: 'Mars is famously known as the Red Planet because iron-rich minerals give it a reddish color! Its thin atmosphere is impossible to breathe without a space suit.',
                        tiein: 'impossible (im- before P = NOT)',
                        x: 330, y: 92, rx: 42, ry: 18
                    },
                    {
                        id: 'giants',
                        label: 'Giant Orbits (Jupiter & Saturn) 🪐',
                        title: 'Jupiter & Saturn (Gas Giants)',
                        desc: 'Gigantic planets made of swirling hydrogen and helium gas with massive ring systems.',
                        speech: 'Jupiter and Saturn have powerful gravitation that attracts dozens of moons.',
                        tiein: 'gravitation (-tion = THE ACT / RESULT)',
                        x: 445, y: 125, rx: 60, ry: 18
                    },
                    {
                        id: 'ice_giants',
                        label: 'Ice Giants (Uranus & Neptune) ❄️',
                        title: 'Uranus & Neptune (Ice Giants)',
                        desc: 'Freezing, distant ice giants made of water, ammonia, and methane ice with howling supersonic winds!',
                        speech: 'Uranus and Neptune are freezing ice giants with howling winds at the edge of our solar system.',
                        tiein: 'freezing (-ing = CURRENT STATE) & distant',
                        x: 585, y: 125, rx: 60, ry: 18
                    }
                ]
            },
            experiment: {
                title: '💡 The Electric Circuit Lab',
                desc: 'Test different materials inside the circuit gap to discover which ones conduct electric power!',
                items: [
                    {
                        id: 'copper',
                        name: `Copper Wire ${COPPER_WIRE_ICON_SVG}`,
                        speakName: 'copper wire',
                        material: 'Copper metal (Great conductor)',
                        conducts: true,
                        predictFrame: 'The [copper wire] will complete the electric circuit!',
                        resultFrame: 'The [copper wire] made an electric connection! The bulb glows bright!',
                        resultDesc: 'Copper has free electrons that let electricity flow smoothly to power the light bulb!',
                        tiein: 'connection (-tion = THE ACT / RESULT)'
                    },
                    {
                        id: 'straw',
                        name: 'Plastic Straw 🥤',
                        speakName: 'plastic straw',
                        material: 'Plastic (Insulator)',
                        conducts: false,
                        predictFrame: 'The [plastic straw] will make the circuit incomplete.',
                        resultFrame: 'The circuit is incomplete! Plastic stops electricity.',
                        resultDesc: 'Plastic is an electrical insulator. Electricity cannot travel through it.',
                        tiein: 'incomplete (in- = NOT)'
                    },
                    {
                        id: 'key',
                        name: 'Gold Key 🗝️',
                        speakName: 'gold key',
                        material: 'Solid metal (Conductor)',
                        conducts: true,
                        predictFrame: 'The [gold key] will conduct electricity easily!',
                        resultFrame: 'Power flows through the metal key! Bright light shines!',
                        resultDesc: 'Metals like gold and brass are fantastic electrical conductors.',
                        tiein: 'luminous / bright (-ous = FULL OF)'
                    }
                ]
            }
        }
    };

    /* --- STEM DIAGRAM SVG GENERATORS --- */
    function getStemPlantDiagramSVG() {
        return `
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#bae6fd"/>
                        <stop offset="65%" stop-color="#e0f2fe"/>
                        <stop offset="100%" stop-color="#f0fdf4"/>
                    </linearGradient>
                    <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#854d0e"/>
                        <stop offset="100%" stop-color="#451a03"/>
                    </linearGradient>
                </defs>
                <!-- Sky & Ground -->
                <rect x="0" y="0" width="600" height="175" fill="url(#skyGrad)"/>
                <rect x="0" y="175" width="600" height="75" fill="url(#soilGrad)"/>
                <path d="M0 175 Q150 172 300 175 T600 175" stroke="#16a34a" stroke-width="4" fill="none"/>
                
                <!-- Sun Illustration -->
                <g class="stem-hotspot" data-hotspot-id="sun">
                    <circle cx="490" cy="50" r="28" fill="#facc15" stroke="#eab308" stroke-width="3"/>
                    <path d="M490 14 L490 6 M490 86 L490 94 M454 50 L446 50 M526 50 L534 50 M464 24 L458 18 M516 76 L522 82 M464 76 L458 82 M516 24 L522 18" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
                    <rect x="445" y="42" width="90" height="24" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
                    <text x="490" y="58" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">☀️ Sunlight</text>
                </g>

                <!-- Rain Cloud Illustration -->
                <g class="stem-hotspot" data-hotspot-id="rain">
                    <path d="M80 45 a18 18 0 0 1 32 -8 a22 22 0 0 1 36 6 a16 16 0 0 1 0 30 L80 73 a14 14 0 0 1 0 -28 z" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
                    <line x1="88" y1="80" x2="84" y2="92" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="105" y1="80" x2="101" y2="92" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="122" y1="80" x2="118" y2="92" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                    <rect x="62" y="36" width="86" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                    <text x="105" y="52" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">🌧️ Raindrops</text>
                </g>

                <!-- Plant Roots in Soil -->
                <g class="stem-hotspot" data-hotspot-id="roots">
                    <path d="M300 175 Q285 200 270 230 M300 175 Q300 210 305 240 M300 175 Q315 200 335 230 M285 200 Q265 215 250 225 M315 200 Q335 210 345 220" stroke="#fef08a" stroke-width="3" stroke-linecap="round" fill="none"/>
                    <rect x="250" y="202" width="100" height="24" rx="12" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
                    <text x="300" y="218" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">🥕 Deep Roots</text>
                </g>

                <!-- Plant Stem -->
                <g class="stem-hotspot" data-hotspot-id="stem">
                    <path d="M300 175 L300 70" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
                    <rect x="258" y="96" width="84" height="24" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
                    <text x="300" y="112" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">🌱 Stem</text>
                </g>

                <!-- Plant Leaves & Flower (Leaves moved further down the stem so Stem block is completely visible) -->
                <g class="stem-hotspot" data-hotspot-id="leaf">
                    <!-- Left Leaf (Lower down near soil) -->
                    <path d="M300 152 C255 146 220 134 200 144 C195 156 235 168 300 156 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
                    <path d="M300 154 Q250 150 205 146" stroke="#15803d" stroke-width="1.5" fill="none"/>
                    <!-- Right Leaf (Lower down near soil) -->
                    <path d="M300 146 C345 140 375 130 395 140 C400 152 365 162 300 150 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
                    <path d="M300 148 Q350 144 390 142" stroke="#15803d" stroke-width="1.5" fill="none"/>
                    <!-- Flower Petals on Top of Stem -->
                    <circle cx="300" cy="55" r="18" fill="#f43f5e"/>
                    <circle cx="282" cy="55" r="14" fill="#fb7185"/>
                    <circle cx="318" cy="55" r="14" fill="#fb7185"/>
                    <circle cx="300" cy="38" r="14" fill="#fb7185"/>
                    <circle cx="300" cy="72" r="14" fill="#fb7185"/>
                    <circle cx="300" cy="55" r="10" fill="#facc15"/>
                    <!-- Leaf Badge positioned cleanly by the left leaf -->
                    <rect x="135" y="136" width="86" height="24" rx="12" fill="#ffffff" stroke="#15803d" stroke-width="2"/>
                    <text x="178" y="152" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">🍃 Leaf Food</text>
                </g>
            </svg>
        `;
    }

    function getStemWaterCycleDiagramSVG() {
        return `
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="cycleSky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#93c5fd"/>
                        <stop offset="100%" stop-color="#e0f2fe"/>
                    </linearGradient>
                    <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#38bdf8"/>
                        <stop offset="100%" stop-color="#0284c7"/>
                    </linearGradient>
                </defs>
                <!-- Sky -->
                <rect x="0" y="0" width="600" height="250" fill="url(#cycleSky)"/>
                <!-- Green Mountain / Landscape -->
                <path d="M260 250 L420 115 L530 160 L600 135 L600 250 Z" fill="#22c55e"/>
                <!-- Mountain Snowcap -->
                <path d="M420 115 L395 138 Q420 144 445 138 Z" fill="#ffffff"/>
                <!-- Ocean Surface -->
                <path d="M0 170 Q130 165 260 180 L260 250 L0 250 Z" fill="url(#oceanGrad)"/>

                <!-- Warm Sun Shining & Pulling Water Up -->
                <g>
                    <circle cx="70" cy="42" r="22" fill="#facc15" stroke="#f59e0b" stroke-width="2.5"/>
                    <path d="M70 12 L70 5 M70 72 L70 79 M40 42 L33 42 M100 42 L107 42 M49 21 L44 16 M91 63 L96 68 M49 63 L44 68 M91 21 L96 16" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
                    <!-- Warm sunbeams shining down on ocean water -->
                    <line x1="75" y1="68" x2="95" y2="170" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4" opacity="0.65"/>
                    <line x1="90" y1="60" x2="150" y2="175" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4" opacity="0.65"/>
                </g>

                <!-- 1. Ocean Hotspot -->
                <g class="stem-hotspot" data-hotspot-id="ocean">
                    <path d="M40 190 Q90 185 140 190 T240 190" stroke="#bae6fd" stroke-width="3" fill="none"/>
                    <rect x="75" y="195" width="90" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                    <text x="120" y="211" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">🌊 Ocean Water</text>
                </g>

                <!-- 2. Evaporation Wavy Arrows: The Sun pulls water up as invisible gas -->
                <g class="stem-hotspot" data-hotspot-id="evap">
                    <path d="M140 160 Q148 140 140 120 T140 85" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,4" fill="none"/>
                    <path d="M175 160 Q183 140 175 120 T175 85" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,4" fill="none"/>
                    <path d="M210 160 Q218 140 210 120 T210 85" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,4" fill="none"/>
                    <!-- Arrows -->
                    <polygon points="140,80 135,90 145,90" fill="#0284c7"/>
                    <polygon points="175,80 170,90 180,90" fill="#0284c7"/>
                    <polygon points="210,80 205,90 215,90" fill="#0284c7"/>
                    <rect x="115" y="98" width="125" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                    <text x="177" y="114" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">💨 Invisible Gas</text>
                </g>

                <!-- 3. Condensation Cloud: Millions of tiny water drops bunch together -->
                <g class="stem-hotspot" data-hotspot-id="cloud">
                    <path d="M340 50 a22 22 0 0 1 38 -10 a28 28 0 0 1 45 8 a20 20 0 0 1 0 38 L340 86 a18 18 0 0 1 0 -36 z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
                    <!-- Tiny ocean-water droplets bunching together inside cloud -->
                    <circle cx="360" cy="55" r="2.5" fill="#38bdf8"/>
                    <circle cx="375" cy="50" r="3" fill="#38bdf8"/>
                    <circle cx="390" cy="56" r="2.5" fill="#38bdf8"/>
                    <circle cx="405" cy="52" r="3" fill="#38bdf8"/>
                    <circle cx="380" cy="62" r="3.5" fill="#0284c7"/>
                    <rect x="325" y="44" width="125" height="24" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
                    <text x="387" y="60" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">☁️ Cloud Forms</text>
                </g>

                <!-- 4. Rain / Precipitation: Cloud gets full & heavy, water falls back down -->
                <g class="stem-hotspot" data-hotspot-id="rain">
                    <line x1="450" y1="95" x2="442" y2="120" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                    <line x1="480" y1="95" x2="472" y2="120" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                    <line x1="510" y1="95" x2="502" y2="120" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                    <rect x="420" y="128" width="125" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                    <text x="482" y="144" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">🌧️ Rain Falls</text>
                </g>

                <!-- River flowing water back to the ocean -->
                <path d="M430 185 Q340 195 260 215" stroke="#38bdf8" stroke-width="3" fill="none" stroke-dasharray="5,3"/>
                <polygon points="262,210 252,216 262,222" fill="#0284c7"/>
                <text x="315" y="210" font-size="10" font-weight="bold" fill="#0284c7">River to ocean 🌊</text>
            </svg>
        `;
    }

    function getStemSolarSystemDiagramSVG() {
        return `
            <svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg">
                <!-- Deep Space -->
                <rect x="0" y="0" width="680" height="250" fill="#090d16"/>
                <!-- Stars -->
                <circle cx="50" cy="30" r="1.5" fill="#fff" opacity="0.8"/>
                <circle cx="120" cy="220" r="1.2" fill="#fff" opacity="0.7"/>
                <circle cx="210" cy="40" r="1.8" fill="#fff" opacity="0.9"/>
                <circle cx="340" cy="210" r="1.2" fill="#fff" opacity="0.6"/>
                <circle cx="430" cy="35" r="1.5" fill="#fff" opacity="0.8"/>
                <circle cx="540" cy="220" r="1.5" fill="#fff" opacity="0.8"/>
                <circle cx="580" cy="35" r="1.2" fill="#fff" opacity="0.7"/>
                <circle cx="650" cy="190" r="1.5" fill="#fff" opacity="0.8"/>
                <circle cx="660" cy="50" r="1.2" fill="#fff" opacity="0.7"/>

                <!-- Orbital Track Lines -->
                <!-- Earth's Orbital Path: Ellipse enclosing Sun and inner planets -->
                <ellipse cx="135" cy="92" rx="115" ry="66" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" fill="none"/>
                <!-- Outer Planets Orbit Tracks -->
                <path d="M45 125 C140 10, 360 10, 475 125 C360 240, 140 240, 45 125" stroke="#334155" stroke-width="1.5" stroke-dasharray="5,5" fill="none"/>
                <path d="M45 125 C200 5, 520 5, 620 125 C520 245, 200 245, 45 125" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5,5" fill="none"/>

                <!-- 1. The Sun (No banner needed) -->
                <g class="stem-hotspot" data-hotspot-id="sun">
                    <circle cx="45" cy="125" r="40" fill="#f59e0b" filter="drop-shadow(0 0 16px #facc15)"/>
                    <circle cx="45" cy="125" r="34" fill="#facc15"/>
                    <text x="45" y="130" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">☀️ The Sun</text>
                </g>

                <!-- 2. Inner Planets (Mercury & Venus) -->
                <g class="stem-hotspot" data-hotspot-id="inner">
                    <!-- Planet Names Outside Banner -->
                    <circle cx="125" cy="94" r="7" fill="#94a3b8"/>
                    <text x="125" y="80" font-size="10" font-weight="bold" fill="#cbd5e1" text-anchor="middle">Mercury</text>
                    <!-- Venus moved down clear of banner -->
                    <circle cx="155" cy="158" r="11" fill="#fde047"/>
                    <text x="155" y="184" font-size="10" font-weight="bold" fill="#fef08a" text-anchor="middle">Venus</text>
                    <!-- Banner reads just "Hot Planets" -->
                    <rect x="100" y="114" width="88" height="22" rx="11" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
                    <text x="144" y="129" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">🪐 Hot Planets</text>
                </g>

                <!-- 3. Earth & Moon -->
                <g class="stem-hotspot" data-hotspot-id="earth">
                    <!-- Stationary Banner reads just "Home" -->
                    <rect x="220" y="114" width="60" height="22" rx="11" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                    <text x="250" y="129" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">🌍 Home</text>
                    
                    <!-- Orbiting Earth Globe & Moon Group (elevated to cy=92 so it does not touch banner at y=114) -->
                    <g id="stem-earth-globe">
                        <!-- Planet Name Outside Banner -->
                        <text x="246" y="66" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Earth</text>
                        <circle cx="250" cy="92" r="15" fill="#38bdf8"/>
                        <path d="M244 84 C248 86 254 88 258 84 C262 90 258 98 252 100 Z" fill="#22c55e"/>
                        
                        <!-- Moon Sphere & Moon Label Outside Banner -->
                        <circle cx="274" cy="78" r="4" fill="#e2e8f0"/>
                        <text x="282" y="81" font-size="9" font-weight="bold" fill="#e2e8f0" text-anchor="start">Moon</text>
                    </g>
                </g>

                <!-- 4. Mars (Red Planet) -->
                <g class="stem-hotspot" data-hotspot-id="mars">
                    <!-- Planet Name Outside Banner -->
                    <text x="330" y="70" font-size="11" font-weight="bold" fill="#fca5a5" text-anchor="middle">Mars</text>
                    <circle cx="330" cy="92" r="12" fill="#ef4444"/>
                    <circle cx="330" cy="86" r="3" fill="#ffffff" opacity="0.8"/>
                    <!-- Banner reads just "Red" -->
                    <rect x="300" y="114" width="60" height="22" rx="11" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
                    <text x="330" y="129" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">🔴 Red</text>
                </g>

                <!-- 5. Gas Giants (Jupiter & Saturn) -->
                <g class="stem-hotspot" data-hotspot-id="giants">
                    <!-- Planet Names Outside Banner -->
                    <circle cx="410" cy="75" r="22" fill="#fdba74"/>
                    <line x1="390" y1="70" x2="430" y2="70" stroke="#ea580c" stroke-width="3"/>
                    <line x1="390" y1="80" x2="430" y2="80" stroke="#ea580c" stroke-width="2"/>
                    <text x="410" y="46" font-size="11" font-weight="bold" fill="#fed7aa" text-anchor="middle">Jupiter</text>
                    
                    <ellipse cx="475" cy="160" rx="25" ry="6.5" fill="none" stroke="#fef08a" stroke-width="3" transform="rotate(-15 475 160)"/>
                    <circle cx="475" cy="160" r="15" fill="#fde047"/>
                    <text x="475" y="188" font-size="11" font-weight="bold" fill="#fef08a" text-anchor="middle">Saturn</text>
                    
                    <!-- Banner reads just "Giant Orbits" -->
                    <rect x="395" y="114" width="95" height="22" rx="11" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
                    <text x="442" y="129" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">🪐 Giant Orbits</text>
                </g>

                <!-- 6. Ice Giants (Uranus & Neptune) -->
                <g class="stem-hotspot" data-hotspot-id="ice_giants">
                    <!-- Uranus with vertical ring -->
                    <ellipse cx="555" cy="80" rx="6" ry="20" fill="none" stroke="#a5f3fc" stroke-width="1.5" opacity="0.75" transform="rotate(15 555 80)"/>
                    <circle cx="555" cy="80" r="13" fill="#67e8f9"/>
                    <text x="555" y="52" font-size="11" font-weight="bold" fill="#67e8f9" text-anchor="middle">Uranus</text>
                    
                    <!-- Neptune with storm cloud wisp -->
                    <circle cx="620" cy="160" r="13" fill="#2563eb"/>
                    <path d="M610 158 Q620 162 630 158" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.8"/>
                    <text x="620" y="188" font-size="11" font-weight="bold" fill="#60a5fa" text-anchor="middle">Neptune</text>
                    
                    <!-- Banner reads just "Ice Giants" -->
                    <rect x="540" y="114" width="92" height="22" rx="11" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                    <text x="586" y="129" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">❄️ Ice Giants</text>
                </g>
            </svg>
        `;
    }

    /* --- STEM EXPERIMENT SIMULATOR SVG GENERATORS --- */
    function getStemWaterTankSVG(item, tested) {
        // Beginner: Sink or Float in a water tank (Tank: x=40..460, Center=250, Surface=75, Sand=180)
        const isFloated = tested && item.floats;
        const isSunk = tested && !item.floats;

        let posX = 250;
        let posY = 20; // Default on plank
        let animClass = '';

        if (item.id === 'apple') {
            if (isFloated) {
                posY = 74; // Bobbing at water line (center at Y=74)
                animClass = 'anim-float-bob';
            } else {
                posY = 18; // On plank (radius 14 + 18 = 32 resting on plank at 34)
            }
        } else if (item.id === 'wood') {
            if (isFloated) {
                posY = 72; // Floating at water line
                animClass = 'anim-float-bob';
            } else {
                posY = 22; // On plank (bottom at 22 + 11 = 33)
            }
        } else if (item.id === 'coin') {
            if (isSunk) {
                posY = 166; // Sitting on sand (radius 14 + 166 = 180 sand top)
                animClass = 'anim-sink-settle';
            } else {
                posY = 19; // On plank (bottom at 19 + 14 = 33)
            }
        } else {
            // Iron key
            if (isSunk) {
                posY = 172; // Sitting on sand (teeth at +7 + 172 = 179)
                animClass = 'anim-sink-settle';
            } else {
                posY = 24; // On plank (teeth at +7 + 24 = 31)
            }
        }

        // Object SVG Graphic centered at (0, 0)
        let graphicInner = '';
        if (item.id === 'apple') {
            graphicInner = `
                <circle cx="0" cy="0" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
                <path d="M0 -14 Q3 -19 5 -18" stroke="#78350f" stroke-width="2.5" fill="none"/>
                <ellipse cx="5" cy="-16" rx="4" ry="2" fill="#22c55e" transform="rotate(-20 5 -16)"/>
                <circle cx="-4" cy="-4" r="3" fill="#fca5a5" opacity="0.6"/>
            `;
        } else if (item.id === 'coin') {
            graphicInner = `
                <circle cx="0" cy="0" r="14" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
                <circle cx="0" cy="0" r="10" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
                <text x="0" y="5" font-size="14" font-weight="bold" fill="#854d0e" text-anchor="middle">$</text>
            `;
        } else if (item.id === 'wood') {
            graphicInner = `
                <rect x="-20" y="-11" width="40" height="22" rx="4" fill="#b45309" stroke="#78350f" stroke-width="2"/>
                <line x1="-8" y1="-8" x2="-8" y2="8" stroke="#78350f" stroke-width="1.5"/>
                <line x1="4" y1="-8" x2="4" y2="8" stroke="#78350f" stroke-width="1.5"/>
                <line x1="16" y1="-8" x2="16" y2="8" stroke="#78350f" stroke-width="1.5"/>
                <text x="0" y="3" font-size="8" font-weight="bold" fill="#fef3c7" text-anchor="middle">WOOD</text>
            `;
        } else {
            // Iron key
            graphicInner = `
                <circle cx="-10" cy="0" r="8" fill="#64748b" stroke="#334155" stroke-width="2"/>
                <circle cx="-10" cy="0" r="4" fill="#e2e8f0"/>
                <rect x="-3" y="-2" width="22" height="4" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                <rect x="9" y="2" width="3" height="5" fill="#334155"/>
                <rect x="14" y="2" width="3" height="4" fill="#334155"/>
            `;
        }

        return `
            <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Water Tank Glass Body -->
                <rect x="40" y="45" width="420" height="150" rx="14" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/>
                <!-- Water Fill -->
                <rect x="42" y="75" width="416" height="118" rx="0 0 12 12" fill="rgba(56, 189, 248, 0.45)"/>
                <!-- Water Surface Waves -->
                <path d="M42 75 Q145 70 250 75 T458 75" fill="none" stroke="#0284c7" stroke-width="3"/>
                <!-- Sandy Tank Bottom -->
                <rect x="42" y="180" width="416" height="13" fill="#fde68a"/>
                
                <!-- Wooden Drop Plank (Pedestal) -->
                ${!tested ? `
                    <rect x="190" y="34" width="120" height="9" rx="3" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
                    <text x="250" y="20" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Ready on Plank 👇</text>
                ` : ''}

                <!-- Water Splash Ripples if tested -->
                ${tested ? `
                    <ellipse cx="${posX}" cy="75" rx="36" ry="6" fill="none" stroke="#38bdf8" stroke-width="2"/>
                    <ellipse cx="${posX}" cy="75" rx="20" ry="3" fill="none" stroke="#bae6fd" stroke-width="1.5"/>
                ` : ''}

                <!-- Rising bubbles if sunk to bottom -->
                ${isSunk ? `
                    <g class="stem-bubbles" opacity="0.8">
                        <circle cx="${posX - 6}" cy="148" r="3.5" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
                        <circle cx="${posX + 8}" cy="122" r="4.5" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
                        <circle cx="${posX - 2}" cy="96" r="3" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
                    </g>
                ` : ''}

                <!-- Water surface float ring if floated -->
                ${isFloated ? `
                    <ellipse cx="${posX}" cy="76" rx="26" ry="4" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="5,3"/>
                ` : ''}

                <!-- Dropped Object (Centered in Middle of Tank at posX = 250) -->
                <g transform="translate(${posX}, ${posY})">
                    <g class="${animClass}">
                        ${graphicInner}
                    </g>
                </g>
            </svg>
        `;
    }

    function getStemMagnetSVG(item, tested) {
        // Intermediate: Magnet Table Attraction Lab
        const isAttracted = tested && item.magnetic;
        let itemX = tested && isAttracted ? 210 : 380;
        let itemClass = tested && isAttracted ? 'anim-snap' : '';

        // Object Graphic
        let objGraphic = '';
        if (item.id === 'nail') {
            objGraphic = `
                <g transform="translate(${itemX}, 95)">
                    <rect x="0" y="3" width="36" height="5" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                    <rect x="34" y="0" width="4" height="11" rx="1" fill="#475569"/>
                    <polygon points="0,2 0,9 -8,5.5" fill="#334155"/>
                </g>
            `;
        } else if (item.id === 'pencil') {
            objGraphic = `
                <g transform="translate(${itemX}, 92)">
                    <polygon points="0,5 12,0 12,10" fill="#fed7aa"/>
                    <polygon points="0,5 4,3 4,7" fill="#1e293b"/>
                    <rect x="12" y="0" width="45" height="10" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
                    <rect x="57" y="0" width="10" height="10" rx="2" fill="#fb7185"/>
                </g>
            `;
        } else if (item.id === 'clip') {
            objGraphic = `
                <g transform="translate(${itemX}, 90)">
                    <path d="M5 12 L30 12 A6 6 0 0 1 36 18 A6 6 0 0 1 30 24 L10 24 A10 10 0 0 1 0 14 A10 10 0 0 1 10 4 L35 4" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
                </g>
            `;
        } else {
            // Eraser
            objGraphic = `
                <g transform="translate(${itemX}, 90)">
                    <polygon points="0,0 25,0 18,20 -7,20" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
                    <polygon points="25,0 45,0 38,20 18,20" fill="#fb7185" stroke="#e11d48" stroke-width="1.5"/>
                </g>
            `;
        }

        return `
            <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Lab Table Surface -->
                <rect x="30" y="30" width="440" height="150" rx="12" fill="#fed7aa" stroke="#d97706" stroke-width="3"/>
                <!-- Table Center Line -->
                <line x1="40" y1="160" x2="460" y2="160" stroke="#f59e0b" stroke-width="2"/>

                <!-- Strong Bar Magnet on Left -->
                <g transform="translate(80, 78)">
                    <!-- South Pole (Blue) -->
                    <rect x="0" y="0" width="55" height="44" rx="6 0 0 6" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                    <text x="28" y="29" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">S</text>
                    <!-- North Pole (Red) -->
                    <rect x="55" y="0" width="55" height="44" rx="0 6 6 0" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
                    <text x="82" y="29" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">N</text>
                    <!-- Magnetic Flux Arcs -->
                    <path d="M112 12 Q140 22 140 44 Q140 66 112 76" stroke="#f87171" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/>
                    <path d="M112 0 Q160 22 160 44 Q160 66 112 88" stroke="#f87171" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
                </g>

                <!-- Magnetic Attraction Sparks if Tested & Magnetic -->
                ${isAttracted ? `
                    <g transform="translate(195, 85)">
                        <polygon points="10,0 12,7 19,10 12,13 10,20 8,13 1,10 8,7" fill="#facc15"/>
                        <polygon points="26,12 28,17 33,19 28,21 26,26 24,21 19,19 24,17" fill="#f59e0b"/>
                    </g>
                ` : ''}

                <!-- Test Object -->
                <g class="${itemClass}">
                    ${objGraphic}
                </g>
            </svg>
        `;
    }

    function getStemCircuitSVG(item, tested) {
        // Advanced: Electric Circuit Lab
        const isComplete = tested && item.conducts;

        const wireColor = isComplete ? '#facc15' : '#64748b';
        const wireWidth = isComplete ? '5' : '4';
        const bulbClass = isComplete ? 'anim-glow' : '';

        return `
            <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Circuit Breadboard Base -->
                <rect x="30" y="20" width="440" height="160" rx="14" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
                <!-- Grid Dots on Board -->
                <circle cx="100" cy="50" r="2" fill="#047857"/>
                <circle cx="180" cy="50" r="2" fill="#047857"/>
                <circle cx="320" cy="50" r="2" fill="#047857"/>
                <circle cx="400" cy="50" r="2" fill="#047857"/>
                <circle cx="100" cy="150" r="2" fill="#047857"/>
                <circle cx="180" cy="150" r="2" fill="#047857"/>
                <circle cx="320" cy="150" r="2" fill="#047857"/>
                <circle cx="400" cy="150" r="2" fill="#047857"/>

                <!-- Circuit Wires -->
                <!-- Top Wire: Battery to Bulb -->
                <path d="M85 85 L85 45 L225 45" stroke="${wireColor}" stroke-width="${wireWidth}" fill="none"/>
                <!-- Top Wire: Bulb to Test Gap -->
                <path d="M275 45 L415 45 L415 80" stroke="${wireColor}" stroke-width="${wireWidth}" fill="none"/>
                <!-- Bottom Wire: Test Gap straight to Battery (Solid Unbroken Wire) -->
                <path d="M415 120 L415 155 L85 155 L85 115" stroke="${wireColor}" stroke-width="${wireWidth}" fill="none"/>

                <!-- 1. DC Battery on Left -->
                <g transform="translate(65, 82)">
                    <rect x="0" y="0" width="40" height="34" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
                    <rect x="12" y="-4" width="16" height="4" fill="#ef4444"/>
                    <text x="20" y="16" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">+</text>
                    <text x="20" y="28" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">-</text>
                    <text x="-5" y="18" font-size="10" font-weight="bold" fill="#6ee7b7">🔋 9V</text>
                </g>

                <!-- 2. Light Bulb Socket & Bulb on Top -->
                <g transform="translate(250, 45)" class="${bulbClass}">
                    <!-- Socket Base -->
                    <rect x="-14" y="-4" width="28" height="10" rx="2" fill="#94a3b8"/>
                    <!-- Light Bulb Glass -->
                    <circle cx="0" cy="-22" r="18" fill="${isComplete ? '#fef08a' : '#cbd5e1'}" stroke="${isComplete ? '#f59e0b' : '#94a3b8'}" stroke-width="2"/>
                    <!-- Filament inside -->
                    <path d="M-6 -10 L-3 -22 L3 -22 L6 -10" stroke="${isComplete ? '#ef4444' : '#64748b'}" stroke-width="1.5" fill="none"/>
                    ${isComplete ? `
                        <!-- Radiant Yellow Rays -->
                        <line x1="0" y1="-46" x2="0" y2="-54" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                        <line x1="-22" y1="-38" x2="-29" y2="-44" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                        <line x1="22" y1="-38" x2="29" y2="-44" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                    ` : ''}
                </g>

                <!-- 3. Material Test Gap with Alligator Clips on Right -->
                <g transform="translate(415, 80)">
                    <rect x="-18" y="-6" width="36" height="8" rx="2" fill="#ef4444"/>
                    <rect x="-18" y="38" width="36" height="8" rx="2" fill="#1e293b"/>
                    
                    <!-- Inserted Material -->
                    ${item.id === 'copper' ? `
                        <!-- Stranded Flexible Copper Wire -->
                        <g>
                            <!-- Stripped Copper Filaments biting into Top Red Terminal -->
                            <path d="M-3 0 L-5 -3 M0 0 L0 -4 M3 0 L5 -3" stroke="#ea580c" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M-1.5 0 L-2.5 -4 M1.5 0 L2.5 -4" stroke="#fed7aa" stroke-width="1" stroke-linecap="round"/>

                            <!-- Stripped Copper Filaments biting into Bottom Black Terminal -->
                            <path d="M-3 40 L-5 43 M0 40 L0 44 M3 40 L5 43" stroke="#ea580c" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M-1.5 40 L-2.5 44 M1.5 40 L2.5 44" stroke="#fed7aa" stroke-width="1" stroke-linecap="round"/>

                            <!-- Main Copper Wire Body (Flexible curved stranded wire) -->
                            <!-- Dark shadow outline -->
                            <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#7c2d12" stroke-width="7.5" stroke-linecap="round" fill="none"/>
                            <!-- Deep copper core -->
                            <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#c2410c" stroke-width="6" stroke-linecap="round" fill="none"/>
                            <!-- Bright polished copper -->
                            <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#ea580c" stroke-width="4.5" stroke-linecap="round" fill="none"/>
                            <!-- Specular metallic shine -->
                            <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#fed7aa" stroke-width="1.5" stroke-linecap="round" fill="none"/>

                            <!-- Twisted Braided Wire Strands (Diagonal twist lines) -->
                            <g stroke="#7c2d12" stroke-width="1" opacity="0.75">
                                <line x1="-3" y1="5" x2="3" y2="9"/>
                                <line x1="-4" y1="12" x2="2" y2="16"/>
                                <line x1="-3" y1="19" x2="3" y2="23"/>
                                <line x1="-2" y1="26" x2="4" y2="30"/>
                                <line x1="-3" y1="33" x2="3" y2="37"/>
                            </g>
                            <g stroke="#ffedd5" stroke-width="0.8" opacity="0.9">
                                <line x1="-2" y1="6" x2="2.5" y2="9.5"/>
                                <line x1="-3" y1="13" x2="1.5" y2="16.5"/>
                                <line x1="-2" y1="20" x2="2.5" y2="23.5"/>
                                <line x1="-1" y1="27" x2="3.5" y2="30.5"/>
                                <line x1="-2" y1="34" x2="2.5" y2="37.5"/>
                            </g>

                            ${isComplete ? `
                                <!-- Electric Current Glowing Through Copper Wire -->
                                <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#facc15" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.85"/>
                                <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                            ` : ''}
                        </g>
                        <text x="-26" y="24" font-size="11" font-weight="bold" fill="#fdba74" text-anchor="end">Copper Wire</text>
                    ` : item.id === 'straw' ? `
                        <rect x="-4" y="0" width="8" height="40" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
                        <line x1="-4" y1="12" x2="4" y2="18" stroke="#ef4444" stroke-width="2"/>
                        <line x1="-4" y1="26" x2="4" y2="32" stroke="#ef4444" stroke-width="2"/>
                        <text x="-26" y="24" font-size="11" font-weight="bold" fill="#fca5a5" text-anchor="end">Plastic Straw</text>
                    ` : `
                        <!-- Gold Key clamped between red and black terminals -->
                        <g>
                            <circle cx="0" cy="7" r="7.5" fill="#facc15" stroke="#ca8a04" stroke-width="1.8"/>
                            <circle cx="0" cy="7" r="3" fill="#064e3b" stroke="#ca8a04" stroke-width="1.2"/>
                            <rect x="-3" y="13" width="6" height="28" rx="1" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
                            <rect x="3" y="24" width="5" height="4" rx="0.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
                            <rect x="3" y="32" width="4" height="4" rx="0.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
                        </g>
                        <text x="-26" y="24" font-size="11" font-weight="bold" fill="#fde047" text-anchor="end">Gold Key</text>
                    `}
                </g>
            </svg>
        `;
    }

    /* --- SENIOR STEM CONTROLLER ENGINE --- */
    function getSeniorStemContext() {
        const eslLevel = appState.eslLevelStem || 'intermediate';
        const stemData = STEM_SCIENCE_DATA[eslLevel] || STEM_SCIENCE_DATA.intermediate;
        const currentSubTab = appState.stemSubTab || 'diagram';
        return { eslLevel, stemData, currentSubTab };
    }

    function renderSeniorStemStage() {
        const { eslLevel, stemData, currentSubTab } = getSeniorStemContext();

        // Level Dropdown sync
        const levelSelect = document.getElementById('select-stem-esl-level');
        if (levelSelect) {
            levelSelect.value = eslLevel;
            if (!levelSelect.dataset.bound) {
                levelSelect.dataset.bound = 'true';
                levelSelect.addEventListener('change', (e) => {
                    stopStemDiagramExplore();
                    appState.eslLevelStem = e.target.value;
                    appState.stemItemIndex = 0;
                    appState.stemTested = false;
                    saveState();
                    renderSeniorStemStage();
                });
            }
        }

        // Sub-Tab Switcher
        const tabDiagram = document.getElementById('tab-stem-diagram');
        const tabExperiment = document.getElementById('tab-stem-experiment');
        const panelDiagram = document.getElementById('stem-diagram-panel');
        const panelExperiment = document.getElementById('stem-experiment-panel');

        if (currentSubTab === 'experiment') {
            if (tabDiagram) tabDiagram.classList.remove('active');
            if (tabExperiment) tabExperiment.classList.add('active');
            if (panelDiagram) panelDiagram.classList.add('hidden');
            if (panelExperiment) panelExperiment.classList.remove('hidden');
            renderSeniorStemExperiment();
        } else {
            if (tabDiagram) tabDiagram.classList.add('active');
            if (tabExperiment) tabExperiment.classList.remove('active');
            if (panelDiagram) panelDiagram.classList.remove('hidden');
            if (panelExperiment) panelExperiment.classList.add('hidden');
            renderSeniorStemDiagram();
        }
    }

    let isStemExploreRunning = false;
    let stemExploreTimeout = null;
    let earthOrbitAnimFrame = null;

    function triggerEarthOrbitAnimation() {
        const globe = document.getElementById('stem-earth-globe');
        if (!globe) return;
        if (globe.dataset.orbiting === 'true') return;
        globe.dataset.orbiting = 'true';

        if (earthOrbitAnimFrame) {
            cancelAnimationFrame(earthOrbitAnimFrame);
            earthOrbitAnimFrame = null;
        }

        const startTime = performance.now();
        const duration = 3600; // 3.6 seconds for full smooth orbit

        function animateOrbit(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Counterclockwise elliptical orbit enclosing Sun at (45, 125)
            // Center (135, 92), Rx = 115, Ry = 66
            // Start at (250, 92), completes one full orbital revolution around the Sun and returns home
            const angle = -progress * 2 * Math.PI;
            const dx = 115 * (Math.cos(angle) - 1);
            const dy = 66 * Math.sin(angle);
            const rot = progress * 360; // Axial rotation during orbital revolution

            globe.setAttribute('transform', `translate(${dx.toFixed(2)}, ${dy.toFixed(2)})`);

            if (progress < 1) {
                earthOrbitAnimFrame = requestAnimationFrame(animateOrbit);
            } else {
                globe.setAttribute('transform', 'translate(0, 0)');
                delete globe.dataset.orbiting;
                earthOrbitAnimFrame = null;
            }
        }

        earthOrbitAnimFrame = requestAnimationFrame(animateOrbit);
    }

    function stopStemDiagramExplore() {
        if (stemExploreTimeout) {
            clearTimeout(stemExploreTimeout);
            stemExploreTimeout = null;
        }
        if (isStemExploreRunning) {
            isStemExploreRunning = false;
            audioEngine.stop();
        }
        if (earthOrbitAnimFrame) {
            cancelAnimationFrame(earthOrbitAnimFrame);
            earthOrbitAnimFrame = null;
            const globe = document.getElementById('stem-earth-globe');
            if (globe) {
                globe.setAttribute('transform', 'translate(0, 0)');
                delete globe.dataset.orbiting;
            }
        }
        const btn = document.getElementById('btn-stem-diagram-explore-all');
        if (btn) btn.innerText = '▶️ Play All Parts';
    }

    function selectStemHotspot(spotId, autoSpeak = true, onComplete = null) {
        const { stemData } = getSeniorStemContext();
        const spot = stemData.diagram.hotspots.find(h => h.id === spotId);
        if (!spot) return;

        // Highlight active hotspot in SVG
        const svgContainer = document.getElementById('stem-diagram-svg-container');
        if (svgContainer) {
            svgContainer.querySelectorAll('.stem-hotspot').forEach(h => h.classList.remove('active'));
            const el = svgContainer.querySelector(`.stem-hotspot[data-hotspot-id="${spot.id}"]`);
            if (el) el.classList.add('active');
        }

        // Trigger Earth orbit animation when Earth is selected
        if (spot.id === 'earth') {
            triggerEarthOrbitAnimation();
        }

        // Update hotspot info box UI
        const titleElem = document.getElementById('stem-hotspot-title');
        const descElem = document.getElementById('stem-hotspot-desc');
        if (titleElem) titleElem.innerText = spot.title;
        if (descElem) descElem.innerText = spot.desc;

        const tieinElem = document.getElementById('stem-hotspot-tiein');
        const tieinText = document.getElementById('stem-hotspot-tiein-text');
        if (tieinElem && tieinText) {
            tieinText.innerText = spot.tiein;
            tieinElem.classList.remove('hidden');
        }

        const btnSpeakHotspot = document.getElementById('btn-stem-speak-hotspot');
        if (btnSpeakHotspot) {
            btnSpeakHotspot.classList.remove('hidden');
            btnSpeakHotspot.onclick = () => {
                stopStemDiagramExplore();
                if (spot.id === 'earth') {
                    triggerEarthOrbitAnimation();
                }
                audioEngine.speak(spot.speech, true);
            };
        }

        if (autoSpeak) {
            // Speak EXACTLY spot.speech (the identical dialogue for both manual click and auto walkthrough)
            audioEngine.speak(spot.speech, true, onComplete);
        }
    }

    function renderSeniorStemDiagram() {
        const { eslLevel, stemData } = getSeniorStemContext();

        // Badges
        const badgeElem = document.getElementById('stem-diagram-badge');
        const vocabTagElem = document.getElementById('stem-diagram-vocab-tag');
        if (badgeElem) badgeElem.innerText = stemData.badge;
        if (vocabTagElem) vocabTagElem.innerText = stemData.headTailFocus.split(',')[0];

        // Render Diagram SVG Canvas
        const svgContainer = document.getElementById('stem-diagram-svg-container');
        if (svgContainer) {
            if (eslLevel === 'beginner') {
                svgContainer.innerHTML = getStemPlantDiagramSVG();
            } else if (eslLevel === 'intermediate') {
                svgContainer.innerHTML = getStemWaterCycleDiagramSVG();
            } else {
                svgContainer.innerHTML = getStemSolarSystemDiagramSVG();
            }

            // Bind click to each hotspot
            svgContainer.querySelectorAll('.stem-hotspot').forEach(el => {
                el.addEventListener('click', () => {
                    stopStemDiagramExplore();
                    const spotId = el.getAttribute('data-hotspot-id');
                    selectStemHotspot(spotId, true);
                });
            });
        }
    }

    function renderSeniorStemExperiment() {
        const { eslLevel, stemData } = getSeniorStemContext();
        const items = stemData.experiment.items;

        if (appState.stemItemIndex >= items.length) {
            appState.stemItemIndex = 0;
        }

        const currentItem = items[appState.stemItemIndex || 0];
        if (!currentItem) return;

        // Say It First Speaking Banner
        const sentenceFrameElem = document.getElementById('stem-sentence-frame-text');
        if (sentenceFrameElem) {
            if (!appState.stemTested) {
                // Determine choices for current level
                let choiceA, choiceB, frameLead, frameTail;
                if (eslLevel === 'beginner') {
                    choiceA = { id: 'float', label: '🛟 FLOAT' };
                    choiceB = { id: 'sink', label: '⚓ SINK' };
                    frameLead = `I think the [${currentItem.name}] will:`;
                    frameTail = `!`;
                } else if (eslLevel === 'intermediate') {
                    choiceA = { id: 'attract', label: '🧲 ATTRACT' };
                    choiceB = { id: 'no_pull', label: '🚫 NOT PULL' };
                    frameLead = `The magnet will:`;
                    frameTail = `the [${currentItem.name}]!`;
                } else {
                    choiceA = { id: 'conduct', label: '💡 LIGHT UP' };
                    choiceB = { id: 'insulate', label: '⬛ STAY DARK' };
                    frameLead = `The [${currentItem.name}] will make the bulb:`;
                    frameTail = `!`;
                }

                sentenceFrameElem.innerHTML = `
                    <span>Predict: "${frameLead}</span>
                    <span class="stem-predict-choices">
                        <button class="btn-predict-pill ${appState.stemUserPrediction === choiceA.id ? 'active' : ''}" data-choice="${choiceA.id}">
                            ${choiceA.label}
                        </button>
                        <button class="btn-predict-pill ${appState.stemUserPrediction === choiceB.id ? 'active' : ''}" data-choice="${choiceB.id}">
                            ${choiceB.label}
                        </button>
                    </span>
                    <span>${frameTail}"</span>
                `;

                // Bind choice button clicks
                sentenceFrameElem.querySelectorAll('.btn-predict-pill').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const choice = btn.getAttribute('data-choice');
                        appState.stemUserPrediction = choice;
                        saveState();
                        renderSeniorStemExperiment();

                        // Speak full prediction sentence!
                        let speechText = '';
                        if (eslLevel === 'beginner') {
                            speechText = `I think the ${currentItem.speakName || currentItem.name} will ${choice}`;
                        } else if (eslLevel === 'intermediate') {
                            const verb = choice === 'attract' ? 'attract' : 'not pull';
                            speechText = `The magnet will ${verb} the ${currentItem.speakName || currentItem.name}!`;
                        } else {
                            const verb = choice === 'conduct' ? 'light up' : 'stay dark';
                            speechText = `The ${currentItem.speakName || currentItem.name} will make the bulb ${verb}!`;
                        }
                        audioEngine.speak(speechText, true);
                    });
                });
            } else {
                sentenceFrameElem.innerHTML = `Result: <strong>"${currentItem.resultFrame}"</strong>`;
            }
        }

        // Test Item Chips Bar
        const itemsContainer = document.getElementById('stem-test-items-container');
        if (itemsContainer) {
            itemsContainer.innerHTML = items.map((it, idx) => `
                <button class="stem-item-chip ${idx === (appState.stemItemIndex || 0) ? 'active' : ''}" data-item-idx="${idx}">
                    ${it.name}
                </button>
            `).join('');

            itemsContainer.querySelectorAll('.stem-item-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    appState.stemItemIndex = parseInt(chip.getAttribute('data-item-idx'));
                    appState.stemTested = false;
                    appState.stemUserPrediction = null;
                    saveState();
                    renderSeniorStemExperiment();
                    const it = items[appState.stemItemIndex];
                    if (it) {
                        if (eslLevel === 'beginner') {
                            audioEngine.speak(`Selected ${it.speakName || it.name}`, true);
                        } else {
                            audioEngine.speak(`Selected ${it.speakName || it.name}. Vote your prediction!`, true);
                        }
                    }
                });
            });
        }

        // Render Experiment Simulator SVG
        const simContainer = document.getElementById('stem-sim-stage');
        if (simContainer) {
            if (eslLevel === 'beginner') {
                simContainer.innerHTML = getStemWaterTankSVG(currentItem, appState.stemTested);
            } else if (eslLevel === 'intermediate') {
                simContainer.innerHTML = getStemMagnetSVG(currentItem, appState.stemTested);
            } else {
                simContainer.innerHTML = getStemCircuitSVG(currentItem, appState.stemTested);
            }
        }

        // Result Box
        const resultBox = document.getElementById('stem-result-box');
        if (resultBox) {
            if (appState.stemTested) {
                resultBox.classList.remove('hidden');

                let actualOutcome = '';
                if (eslLevel === 'beginner') actualOutcome = currentItem.floats ? 'float' : 'sink';
                else if (eslLevel === 'intermediate') actualOutcome = currentItem.magnetic ? 'attract' : 'no_pull';
                else actualOutcome = currentItem.conducts ? 'conduct' : 'insulate';

                const hasPred = !!appState.stemUserPrediction;
                const wasRight = hasPred && (appState.stemUserPrediction === actualOutcome);

                let badgeHeader = '';
                if (hasPred) {
                    if (wasRight) {
                        badgeHeader = `🎉 Great Hypothesis! You were right!`;
                    } else {
                        badgeHeader = `😮 Science Surprise! Here is what happened:`;
                    }
                } else {
                    badgeHeader = `🧪 Experiment Result:`;
                }

                const iconElem = document.getElementById('stem-result-icon');
                if (iconElem) iconElem.innerText = wasRight ? '🌟' : '💡';

                const titleElem = document.getElementById('stem-result-title');
                if (titleElem) titleElem.innerText = badgeHeader;

                const descElem = document.getElementById('stem-result-desc');
                if (descElem) descElem.innerText = currentItem.resultDesc;

                const speechElem = document.getElementById('stem-result-speech-text');
                if (speechElem) speechElem.innerText = `"${currentItem.resultFrame}"`;

                const tieinElem = document.getElementById('stem-result-tiein');
                if (tieinElem && !tieinElem.dataset.bound) {
                    tieinElem.dataset.bound = 'true';
                    tieinElem.style.cursor = 'pointer';
                    tieinElem.addEventListener('click', () => {
                        const { stemData } = getSeniorStemContext();
                        const it = stemData.experiment.items[appState.stemItemIndex || 0];
                        if (it) audioEngine.speak(it.resultFrame, true);
                    });
                }
            } else {
                resultBox.classList.add('hidden');
            }
        }
    }

    // Tab Navigation bindings for STEM
    const tabStemDiagram = document.getElementById('tab-stem-diagram');
    const tabStemExperiment = document.getElementById('tab-stem-experiment');
    if (tabStemDiagram && tabStemExperiment) {
        tabStemDiagram.addEventListener('click', () => {
            stopStemDiagramExplore();
            appState.stemSubTab = 'diagram';
            saveState();
            renderSeniorStemStage();
        });

        tabStemExperiment.addEventListener('click', () => {
            stopStemDiagramExplore();
            appState.stemSubTab = 'experiment';
            saveState();
            renderSeniorStemStage();
            const { stemData } = getSeniorStemContext();
            audioEngine.speak(`Virtual Experiment Lab: ${stemData.experiment.title}`, true);
        });
    }

    // Top Header Speak Concept
    const btnStemSpeakSummary = document.getElementById('btn-stem-speak-summary');
    if (btnStemSpeakSummary) {
        btnStemSpeakSummary.addEventListener('click', () => {
            stopStemDiagramExplore();
            const { stemData } = getSeniorStemContext();
            audioEngine.speak(`${stemData.title}. ${stemData.conceptSummary}`, true);
        });
    }

    // Diagram "Play All Parts" / "Stop Walkthrough"
    function startStemDiagramExplore() {
        const { stemData } = getSeniorStemContext();
        const spots = stemData.diagram.hotspots;
        if (!spots || spots.length === 0) return;

        isStemExploreRunning = true;
        const btn = document.getElementById('btn-stem-diagram-explore-all');
        if (btn) btn.innerText = '⏸️ Stop Walkthrough';

        let idx = 0;

        function step() {
            if (!isStemExploreRunning) return;

            if (idx >= spots.length) {
                stopStemDiagramExplore();
                triggerConfetti();
                audioEngine.playFanfare();
                audioEngine.speak("Great exploration of all parts!");
                return;
            }

            const spot = spots[idx];
            idx++;

            let hasAdvanced = false;
            const advance = () => {
                if (hasAdvanced || !isStemExploreRunning) return;
                hasAdvanced = true;
                if (stemExploreTimeout) clearTimeout(stemExploreTimeout);
                // Pause comfortably (1000ms) after the full sentence completes before next part
                stemExploreTimeout = setTimeout(() => {
                    if (isStemExploreRunning) step();
                }, 1000);
            };

            // Speaks EXACTLY spot.speech (the identical dialogue to clicking individual part)
            selectStemHotspot(spot.id, true, advance);

            // Safety fallback timeout based on sentence length (so it never hangs even if browser audio muted)
            const fallbackMs = Math.max(5000, (spot.speech.length / 10) * 1000 + 4000);
            stemExploreTimeout = setTimeout(advance, fallbackMs);
        }

        step();
    }

    const btnStemDiagramExploreAll = document.getElementById('btn-stem-diagram-explore-all');
    if (btnStemDiagramExploreAll) {
        btnStemDiagramExploreAll.addEventListener('click', () => {
            if (isStemExploreRunning) {
                stopStemDiagramExplore();
            } else {
                startStemDiagramExplore();
            }
        });
    }

    // Diagram Award Hearts
    const btnStemDiagramAward = document.getElementById('btn-stem-diagram-award');
    if (btnStemDiagramAward) {
        btnStemDiagramAward.addEventListener('click', () => {
            awardHeartToActiveStudent();
            awardHeartToActiveStudent();
            triggerConfetti();
            audioEngine.playFanfare();
            audioEngine.speak("2 hearts awarded for great science observation!");
        });
    }

    // Experiment Hear Frame
    const btnStemSpeakFrame = document.getElementById('btn-stem-speak-frame');
    if (btnStemSpeakFrame) {
        btnStemSpeakFrame.addEventListener('click', () => {
            const { eslLevel, stemData } = getSeniorStemContext();
            const item = stemData.experiment.items[appState.stemItemIndex || 0];
            if (!item) return;

            if (appState.stemTested) {
                audioEngine.speak(item.resultFrame, true);
            } else if (appState.stemUserPrediction) {
                let speechText = '';
                if (eslLevel === 'beginner') {
                    speechText = `I think the ${item.speakName || item.name} will ${appState.stemUserPrediction}`;
                } else if (eslLevel === 'intermediate') {
                    const verb = appState.stemUserPrediction === 'attract' ? 'attract' : 'not pull';
                    speechText = `The magnet will ${verb} the ${item.speakName || item.name}!`;
                } else {
                    const verb = appState.stemUserPrediction === 'conduct' ? 'light up' : 'stay dark';
                    speechText = `The ${item.speakName || item.name} will make the bulb ${verb}!`;
                }
                audioEngine.speak(speechText, true);
            } else {
                if (eslLevel === 'beginner') {
                    audioEngine.speak(`I think the ${item.speakName || item.name} will float, or sink? Vote your prediction!`, true);
                } else if (eslLevel === 'intermediate') {
                    audioEngine.speak(`Will the magnet attract or not pull the ${item.speakName || item.name}? Vote your prediction!`, true);
                } else {
                    audioEngine.speak(`Will the ${item.speakName || item.name} make the bulb light up or stay dark? Vote your prediction!`, true);
                }
            }
        });
    }

    // Experiment Test Hypothesis Button
    const btnStemTest = document.getElementById('btn-stem-test');
    if (btnStemTest) {
        btnStemTest.addEventListener('click', () => {
            const { eslLevel, stemData } = getSeniorStemContext();
            const item = stemData.experiment.items[appState.stemItemIndex || 0];
            if (!item) return;

            appState.stemTested = true;
            saveState();
            renderSeniorStemExperiment();

            let actualOutcome = '';
            if (eslLevel === 'beginner') actualOutcome = item.floats ? 'float' : 'sink';
            else if (eslLevel === 'intermediate') actualOutcome = item.magnetic ? 'attract' : 'no_pull';
            else actualOutcome = item.conducts ? 'conduct' : 'insulate';

            const wasRight = appState.stemUserPrediction && (appState.stemUserPrediction === actualOutcome);

            // Sound and reaction by level
            if (eslLevel === 'beginner') {
                audioEngine.playSplash();
                setTimeout(() => {
                    if (wasRight) {
                        audioEngine.playFanfare();
                        triggerConfetti();
                    } else if (item.floats) {
                        audioEngine.playCorrect();
                    } else {
                        audioEngine.playTone(200, 'triangle', 0.25);
                    }
                    audioEngine.speak(item.resultFrame, false);
                }, 400);
            } else if (eslLevel === 'intermediate') {
                if (item.magnetic) {
                    audioEngine.playSnap();
                } else {
                    audioEngine.playClick();
                }
                setTimeout(() => {
                    if (wasRight) {
                        audioEngine.playFanfare();
                        triggerConfetti();
                    } else {
                        audioEngine.playCorrect();
                    }
                    audioEngine.speak(item.resultFrame, false);
                }, 400);
            } else {
                // Advanced Circuit
                audioEngine.playClick();
                setTimeout(() => {
                    if (wasRight) {
                        audioEngine.playFanfare();
                        triggerConfetti();
                    } else if (item.conducts) {
                        audioEngine.playCorrect();
                    } else {
                        audioEngine.playWrong();
                    }
                    audioEngine.speak(item.resultFrame, false);
                }, 400);
            }
        });
    }

    // Experiment Retest Button
    const btnStemRetest = document.getElementById('btn-stem-retest');
    if (btnStemRetest) {
        btnStemRetest.addEventListener('click', () => {
            appState.stemTested = false;
            appState.stemUserPrediction = null;
            saveState();
            renderSeniorStemExperiment();
            audioEngine.speak("Reset! Vote your prediction to retest!", true);
        });
    }

    // Experiment Award Hearts
    const btnStemExperimentAward = document.getElementById('btn-stem-experiment-award');
    if (btnStemExperimentAward) {
        btnStemExperimentAward.addEventListener('click', () => {
            awardHeartToActiveStudent();
            awardHeartToActiveStudent();
            triggerConfetti();
            audioEngine.playFanfare();
            audioEngine.speak("Super science hypothesis! 2 hearts awarded!");
        });
    }

    /* ==========================================================================
       SENIOR STORY BUILDER & COMIC CREATOR ENGINE (AGES 8-10)
       Aligned with Senior Reading & Comprehension Lab Topics (Chapter 2 Sequels)
       ========================================================================== */

    const STORY_UNIVERSES_DATA = {
        beginner: {
            id: 'beginner',
            levelLabel: '🟢 Level 1: Beginner',
            anchorTitle: 'Max the Lost Puppy',
            defaultTitle: "Max's Next Big Adventure: Chapter 2",
            summary: "Continue Leo and Max's pet adventures in the park and neighborhood!",
            defaultSetting: 'park',
            defaultChar: 'max',
            defaultSecondaryChar: 'leo',
            defaultProp: 'ball',
            settings: [
                { id: 'park', name: 'Sunny Oak Park', icon: '🌳', desc: 'Lush green grass, giant oak tree & the famous warm bench' },
                { id: 'backyard', name: "Leo's Backyard", icon: '🏡', desc: 'Wooden doghouse, lawn, flower beds & red fence' },
                { id: 'creek', name: 'Whispering Creek', icon: '🦆', desc: 'Gentle pebble stream with wooden bridge and swimming ducks' },
                { id: 'bench_area', name: 'The Warm Bench', icon: '🪵', desc: "Max's favorite cozy resting spot under the shady tree" }
            ],
            characters: [
                { id: 'max', name: 'Max the Puppy', icon: '🐶', avatar: '🐶', role: 'Hero Puppy', desc: 'Playful golden puppy with a fast-wagging tail' },
                { id: 'leo', name: 'Leo', icon: '👦', avatar: '👦', role: 'Loving Owner', desc: 'Caring boy with his blue hoodie who loves training Max' },
                { id: 'cleo', name: 'Cleo the Cat', icon: '🐱', avatar: '🐱', role: 'Playful Friend', desc: 'Clever white kitten from next door' },
                { id: 'sam', name: 'Ranger Sam', icon: '👮', avatar: '👮', role: 'Park Ranger', desc: 'Friendly ranger who helps protect animals' }
            ],
            props: [
                { id: 'ball', name: 'Red Bouncing Ball', icon: '🔴', color: '#ef4444', desc: "The bright red ball Max loves chasing across the grass" },
                { id: 'bone', name: 'Delicious Big Bone', icon: '🦴', color: '#e2e8f0', desc: "Leo's special reward treat for his clever puppy" },
                { id: 'box', name: 'Mystery Cardboard Box', icon: '📦', color: '#f59e0b', desc: "A sealed box sitting near the bushes that starts moving" },
                { id: 'collar', name: 'Shiny Golden Collar', icon: '⭐', color: '#facc15', desc: "A special bell collar that glints in the sunlight" },
                { id: 'butterfly', name: 'Rainbow Butterfly', icon: '🦋', color: '#a855f7', desc: "A fluttering colorful butterfly leading Max on a chase" },
                { id: 'leash', name: 'Blue Walking Leash', icon: '🦮', color: '#3b82f6', desc: "Leo's trusty leash used for park exploration walks" }
            ],
            readingVocab: [
                { word: 'park', source: 'Reading Lab', def: 'A green outdoor place where kids and pets play 🌳.' },
                { word: 'behind', source: 'Reading Lab', def: 'At the back side of something (like the big tree) 🌲.' },
                { word: 'bench', source: 'Reading Lab', def: 'A long wooden seat for sitting and resting outside 🪵.' },
                { word: 'delicious', source: 'Reading Lab', def: 'Tasting wonderful, like a fresh juicy bone 🦴!' },
                { word: 'puppy', source: 'Reading Lab', def: 'A small, friendly, young dog full of energy 🐶.' },
                { word: 'sleeping', source: 'Reading Lab', def: 'Resting quietly with eyes closed in a warm spot 💤.' }
            ],
            morphology: [
                { word: 'playful', cat: 'tion', suffix: '-ful (Full of)', def: 'Full of games, fun and happy energy.' },
                { word: 'unlocked', cat: 'un', suffix: 'un- (Opposite)', def: 'Opened a gate or latch that was closed.' },
                { word: 'dangerous', cat: 'ous', suffix: '-ous (Full of)', def: 'Requiring caution near cars or deep water.' },
                { word: 'courageous', cat: 'ous', suffix: '-ous (Full of)', def: 'Brave when facing a big puddle or scary noise.' }
            ],
            twists: [
                { id: 'kitten_rescue', icon: '🐱', title: 'Lost Kitten Found!', text: 'Max sniffs behind the bushes and finds a tiny lost kitten shivering in the grass!', dialogue: 'Woof! Leo, look behind the hedge! A kitten needs our help!' },
                { id: 'wind_gust', icon: '💨', title: 'Sudden Wind Gust!', text: 'A strong gust of wind blows the red ball across the creek onto the duck island!', dialogue: 'Oh no! The red ball rolled across the wooden bridge into the water!' },
                { id: 'box_wobble', icon: '📦', title: 'Box Starts Shaking!', text: 'The mystery cardboard box by the bench suddenly begins to wobble and meow!', dialogue: 'Wait! The box is moving on its own! What is inside?!' },
                { id: 'ranger_whistle', icon: '👮', title: 'Park Ranger Alert!', text: 'Ranger Sam blows his whistle and asks Leo and Max to help find a lost pet collar!', dialogue: 'Ranger Sam needs our assistance! Max, use your super sniffer!' }
            ],
            templates: [
                {
                    panelIndex: 0,
                    role: '1. Beginning (Setting & Heroes)',
                    roleBadge: 'Beginning',
                    starters: ['One sunny morning,', 'The next Saturday,', 'Back at the park,'],
                    defaultCaption: "The next sunny morning, Leo and Max returned to the quiet park.",
                    defaultSpeech: "Max wagged his tail happily, ready for another fun adventure!",
                    speechChoices: ['Ready to explore!', 'Look around!', 'Best day ever!']
                },
                {
                    panelIndex: 1,
                    role: '2. The Problem (Incident)',
                    roleBadge: 'The Problem',
                    starters: ['Suddenly,', 'Unexpectedly,', 'To their surprise,'],
                    defaultCaption: "Suddenly, Max noticed a red ball rolling toward a mystery box near the bench!",
                    defaultSpeech: "Woof! Look behind the big oak tree!",
                    speechChoices: ['What is that?', 'Let me look!', 'I will check it out!']
                },
                {
                    panelIndex: 2,
                    role: '3. The Solution (Happy Ending)',
                    roleBadge: 'Solution',
                    starters: ['In the end,', 'Finally,', 'Luckily,'],
                    defaultCaption: "In the end, Leo and Max solved the mystery and shared a delicious treat together!",
                    defaultSpeech: "We did it! Good boy Max, you are the best puppy!",
                    speechChoices: ['Mission complete!', 'Teamwork wins!', 'Yay!']
                }
            ]
        },
        intermediate: {
            id: 'intermediate',
            levelLabel: '🟡 Level 2: Intermediate',
            anchorTitle: 'The Secret of the Quantum Key',
            defaultTitle: 'The Secret of the Quantum Key: Chapter 2',
            summary: 'Follow Dr. Eve and Leo as they decode satellite signals and explore the Lunar Outpost!',
            defaultSetting: 'quantum_lab',
            defaultChar: 'dr_eve',
            defaultSecondaryChar: 'leo',
            defaultProp: 'quantum_key',
            settings: [
                { id: 'quantum_lab', name: 'Quantum Energy Lab', icon: '🔬', desc: 'Glass chamber, waveform monitors, viewport window & console' },
                { id: 'lunar_outpost', name: 'Lunar Moon Outpost', icon: '🌕', desc: 'Pressurized dome station on the Moon surface with Earth in the sky' },
                { id: 'satellite_bay', name: 'Satellite Uplink Bay', icon: '🛰️', desc: 'Solar array deck aligning long-distance communications dishes' },
                { id: 'reactor_room', name: 'Quantum Core Reactor', icon: '⚡', desc: 'Resonating chamber housing the main blue energy containment grid' }
            ],
            characters: [
                { id: 'dr_eve', name: 'Dr. Eve', icon: '👩‍🔬', avatar: '👩‍🔬', role: 'Chief Scientist', desc: 'Wise mentor with tech goggles who decoded the key' },
                { id: 'leo', name: 'Leo the Cadet', icon: '👦', avatar: '👦', role: 'Space Apprentice', desc: 'Curious student with communicator watch and keen eyes' },
                { id: 'rover', name: 'Rover the Cyber Dog', icon: '🐕', avatar: '🐶', role: 'Tech Scout', desc: 'Robotic canine equipped with a quantum frequency scanner' },
                { id: 'vance', name: 'Commander Vance', icon: '👨‍🚀', avatar: '👨‍🚀', role: 'Outpost Chief', desc: 'Lunar Outpost commander waiting for satellite alignment' }
            ],
            props: [
                { id: 'quantum_key', name: 'The Quantum Key', icon: '🔑', color: '#38bdf8', desc: 'Humming metallic key pulsing with soft blue quantum energy' },
                { id: 'goggles', name: 'Lab Tech Goggles', icon: '🥽', color: '#0284c7', desc: 'Specialized goggles revealing invisible laser and magnetic signals' },
                { id: 'satellite', name: 'Satellite Uplink', icon: '📡', color: '#38bdf8', desc: 'High-frequency dish aligning communication waves across the solar system' },
                { id: 'data_chip', name: 'Encoded Memory Chip', icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><line x1="8" y1="2" x2="8" y2="5" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="2" x2="12" y2="5" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="2" x2="16" y2="5" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="19" x2="8" y2="22" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="19" x2="12" y2="22" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="19" x2="16" y2="22" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="2" y1="8" x2="5" y2="8" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="2" y1="12" x2="5" y2="12" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="2" y1="16" x2="5" y2="16" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="19" y1="8" x2="22" y2="8" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="19" y1="12" x2="22" y2="12" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><line x1="19" y1="16" x2="22" y2="16" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><rect x="4.5" y="4.5" width="15" height="15" rx="3" fill="#0f172a" stroke="#334155" stroke-width="1.5"/><circle cx="7.5" cy="7.5" r="1" fill="#f59e0b"/><rect x="8.5" y="8.5" width="7" height="7" rx="1.5" fill="#1e293b" stroke="#00f0ff" stroke-width="1.2"/><line x1="10.5" y1="12" x2="13.5" y2="12" stroke="#00f0ff" stroke-width="1"/><line x1="12" y1="10.5" x2="12" y2="13.5" stroke="#00f0ff" stroke-width="1"/><circle cx="12" cy="12" r="1.3" fill="#38bdf8"/></svg>`, color: '#f59e0b', desc: 'The confidential transmission received from the Lunar Outpost' },
                { id: 'scanner', name: 'Laser Scanner', icon: '🔦', color: '#10b981', desc: 'Handheld scanner measuring crystal core light pulses' },
                { id: 'battery', name: 'Quantum Battery Core', icon: '🔋', color: '#8b5cf6', desc: 'High-density power unit that recharges station shields' }
            ],
            readingVocab: [
                { word: 'quantum', source: 'Reading Lab', def: 'A tiny unit of energy in modern physics ⚡.' },
                { word: 'satellite', source: 'Reading Lab', def: 'A machine orbiting around a planet to send signals 🛰️.' },
                { word: 'encoded', source: 'Reading Lab', def: 'Written in a secret code to keep data safe 🔒.' },
                { word: 'chamber', source: 'Reading Lab', def: 'A secure transparent room or glass enclosure 🧪.' },
                { word: 'signals', source: 'Reading Lab', def: 'Waves of radio or light carrying messages across space 📡.' },
                { word: 'aligned', source: 'Reading Lab', def: 'Adjusted into exact position to work properly 📐.' }
            ],
            morphology: [
                { word: 'Exploration', cat: 'tion', suffix: '-tion (Act of)', def: 'The act of traveling across space to study unknown regions.' },
                { word: 'Invention', cat: 'tion', suffix: '-tion (Result of)', def: 'A newly created scientific machine like the Quantum Key.' },
                { word: 'Protection', cat: 'tion', suffix: '-tion (Act of)', def: 'Shielding the satellite network from space radiation.' },
                { word: 'Unexpected', cat: 'un', suffix: 'un- (Not)', def: 'Happening suddenly by surprise without advance warning.' },
                { word: 'Unlock', cat: 'un', suffix: 'un- (Opposite)', def: 'To release or open a sealed data vault or chamber door.' },
                { word: 'Dangerous', cat: 'ous', suffix: '-ous (Full of)', def: 'Carrying high voltage or hazardous energy radiation.' }
            ],
            twists: [
                { id: 'encoded_warning', icon: '📡', title: 'Incoming Solar Flare!', text: 'The decoded lunar transmission warns of an incoming solar radiation storm!', dialogue: 'Leo, look at this readout! The solar flare will disable the satellite link!' },
                { id: 'key_vibrate', icon: '🔑', title: 'Quantum Key Resonance!', text: 'The crystal core of the key hums loudly and projects a glowing holographic starmap!', dialogue: 'Look at the glass chamber! The key is projecting secret coordinates!' },
                { id: 'power_drain', icon: '🚨', title: 'Station Power Surge!', text: 'A sudden electrical surge shuts off the main lights and triggers red emergency sirens!', dialogue: 'Emergency protocols engaged! We have sixty seconds before the link breaks!' },
                { id: 'robot_override', icon: '🤖', title: 'Robotic Signal Detected!', text: 'Rover detects an automated beacon signal broadcasting from the Lunar Outpost airlock!', dialogue: 'Rover picked up a transmission! Someone is locked outside the airlock!' }
            ],
            templates: [
                {
                    panelIndex: 0,
                    role: '1. Setting & Intro',
                    roleBadge: 'Setting',
                    starters: ['First,', 'Early that morning,', 'Inside the quantum lab,'],
                    defaultCaption: "First, Dr. Eve and Leo calibrated the satellite receiver inside the high-tech lab.",
                    defaultSpeech: "All satellite signals across the solar system are aligned and humming."
                },
                {
                    panelIndex: 1,
                    role: '2. The Event (Discovery)',
                    roleBadge: 'The Discovery',
                    starters: ['Next,', 'Shortly after,', 'While monitoring the chamber,'],
                    defaultCaption: "Next, the glowing Quantum Key inside the glass chamber pulsed with vibrant blue light.",
                    defaultSpeech: "Dr. Eve, the crystal core is humming at maximum frequency!"
                },
                {
                    panelIndex: 2,
                    role: '3. Conflict & Twist',
                    roleBadge: 'Climax & Twist',
                    starters: ['Suddenly,', 'Unexpectedly,', 'Without warning,'],
                    connectors: ['because', 'but', 'so', 'although'],
                    defaultCaption: "Suddenly, an encoded alarm echoed from the Lunar Outpost because station power surged!",
                    defaultSpeech: "Emergency alert! We must stabilize the satellite relay immediately!"
                },
                {
                    panelIndex: 3,
                    role: '4. The Resolution',
                    roleBadge: 'Resolution',
                    starters: ['In the end,', 'Finally,', 'After quick thinking,'],
                    defaultCaption: "In the end, Leo and Dr. Eve aligned the quantum frequencies, saving the outpost.",
                    defaultSpeech: "The connection is restored! The lunar mission is completely safe."
                }
            ]
        },
        advanced: {
            id: 'advanced',
            levelLabel: '🔴 Level 3: Advanced',
            anchorTitle: 'Journey to the Glowing Coral Reef',
            defaultTitle: 'The Lost Sanctuary of Twilight Bay: Chapter 2',
            summary: 'Dive deep into Twilight Bay with Maya to protect bioluminescent corals and marine sanctuaries!',
            defaultSetting: 'azure_reef',
            defaultChar: 'maya',
            defaultSecondaryChar: 'turtle',
            defaultProp: 'submersible',
            settings: [
                { id: 'azure_reef', name: 'Azure Coral Reef', icon: '🪸', desc: 'Bioluminescent reef glowing turquoise and magenta under UV rays' },
                { id: 'twilight_trench', name: 'Deep Twilight Trench', icon: '🌊', desc: 'Dark ocean abyss illuminated by drifting bioluminescent jellyfish' },
                { id: 'kelp_forest', name: 'Giant Kelp Sanctuary', icon: '🌿', desc: 'Towering emerald kelp forest with cool drifting ocean currents' },
                { id: 'sunken_dome', name: 'Sunken Research Station', icon: '⚓', desc: 'Submerged geodesic laboratory dome resting on the seafloor' }
            ],
            characters: [
                { id: 'maya', name: 'Maya the Oceanographer', icon: '🤿', avatar: '👧', role: 'Lead Researcher', desc: 'Fearless marine scientist and expert mini-sub pilot' },
                { id: 'turtle', name: 'Shelly the Sea Turtle', icon: '🐢', avatar: '🐢', role: 'Sanctuary Guide', desc: 'Ancient green sea turtle who knows every hidden trench' },
                { id: 'dr_tide', name: 'Dr. Tide', icon: '👨‍🔬', avatar: '👨‍🔬', role: 'Marine Ecologist', desc: 'Senior oceanographer tracking global coral temperature shifts' },
                { id: 'kai', name: 'Kai the Robotics Diver', icon: '🧑‍🔧', avatar: '🧑‍🔧', role: 'Submersible Tech', desc: 'Technical specialist operating deep-sea sensor arrays' }
            ],
            props: [
                { id: 'submersible', name: 'Mini-Submersible', icon: '🚤', color: '#f59e0b', desc: 'Yellow exploratory submarine with thick glass observation dome' },
                { id: 'jellyfish', name: 'Bioluminescent Jellyfish', icon: '🪼', color: '#a855f7', desc: 'Living floating lanterns illuminating the dark ocean floor' },
                { id: 'camera', name: 'Underwater UV Camera', icon: '📷', color: '#38bdf8', desc: 'High-precision camera calibrated to document coral fluorescence' },
                { id: 'sensor', name: 'Thermal Depth Sensor', icon: '🌡️', color: '#ef4444', desc: 'Sensitive device recording water temperature shifts in the bay' },
                { id: 'ancient_relic', name: 'Sunken Explorer Relic', icon: '🏺', color: '#eab308', desc: 'Encrusted bronze artifact uncovered beneath the kelp bed' },
                { id: 'coral_sample', name: 'Azure Coral Branch', icon: '🪸', color: '#06b6d4', desc: 'Rare coral specimen radiating vibrant cyan and purple light' }
            ],
            readingVocab: [
                { word: 'bioluminescent', source: 'Reading Lab', def: 'Living organisms that produce and emit their own light 🪼.' },
                { word: 'submersible', source: 'Reading Lab', def: 'A specialized underwater craft designed for deep ocean diving 🚤.' },
                { word: 'sanctuary', source: 'Reading Lab', def: 'A protected ocean zone where fragile marine life is kept safe 🛡️.' },
                { word: 'oceanographers', source: 'Reading Lab', def: 'Scientists dedicated to studying the ocean, tides, and marine ecosystems 🌊.' },
                { word: 'ultraviolet', source: 'Reading Lab', def: 'Invisible light rays that reveal the glowing pigments in Azure Coral 💡.' },
                { word: 'fragile', source: 'Reading Lab', def: 'Delicate, easily damaged, and requiring careful scientific protection 🪸.' }
            ],
            morphology: [
                { word: 'Exploration', cat: 'tion', suffix: '-tion (Act of)', def: 'The systematic scientific exploration of the deep sea.' },
                { word: 'Transformation', cat: 'tion', suffix: '-tion (Act of)', def: 'The radiant color transformation of coral under UV light.' },
                { word: 'Protection', cat: 'tion', suffix: '-tion (Act of)', def: 'Safeguarding fragile marine sanctuaries from human impact.' },
                { word: 'Unbreakable', cat: 'un', suffix: 'un-...-able (Cannot)', def: 'Reinforced submarine glass built to withstand trench pressure.' },
                { word: 'Unusual', cat: 'un', suffix: 'un- (Not)', def: 'An unexpected thermal reading indicating a volcanic vent.' },
                { word: 'Courageous', cat: 'ous', suffix: '-ous (Full of)', def: 'Showing bold bravery while piloting into uncharted abyssal depths.' }
            ],
            twists: [
                { id: 'thermal_vent', icon: '🌋', title: 'Hydrothermal Vent Discovered!', text: 'The thermal sensor suddenly spikes as boiling mineral-rich water surges from a hidden trench fissure!', dialogue: 'Look at the temperature telemetry! A hydrothermal vent just opened beneath the reef!' },
                { id: 'turtle_guide', icon: '🐢', title: 'Sea Turtle Distress Signal!', text: 'Shelly the sea turtle swims urgently toward the sub, guiding Maya toward a trapped sea creature in the kelp!', dialogue: 'Shelly is tapping on the glass dome! She wants us to follow her into the kelp forest!' },
                { id: 'jellyfish_swarm', icon: '🪼', title: 'Bioluminescent Swarm!', text: 'Hundreds of pulsing purple jellyfish envelop the submersible, lighting up the entire dark trench like daylight!', dialogue: 'Incredible! The bioluminescent swarm is illuminating an ancient submerged archway ahead!' },
                { id: 'camera_malfunction', icon: '📷', title: 'UV Camera Surge!', text: 'The ultraviolet camera captures an unknown glowing turquoise entity moving fast along the coral wall!', dialogue: 'Did you see that on the UV monitor?! Something massive is glowing inside the cavern!' }
            ],
            templates: [
                {
                    panelIndex: 0,
                    role: '1. Atmospheric Setup',
                    roleBadge: 'Setup',
                    starters: ['Deep beneath the surface of Twilight Bay,', 'Gliding past giant kelp forests,', 'Surrounded by the cool ocean currents,'],
                    defaultCaption: "Deep beneath the surface of Twilight Bay, Maya steered her mini-submersible toward the Azure Coral sanctuary.",
                    defaultSpeech: "Calibrating the underwater camera now. The water clarity is extraordinary today."
                },
                {
                    panelIndex: 1,
                    role: '2. The Catalyst (Mission)',
                    roleBadge: 'Catalyst',
                    starters: ['Illuminated by bioluminescent jellyfish,', 'Calibrating the thermal sensor array,', 'Approaching the fragile coral wall,'],
                    defaultCaption: "Through the observation dome, bioluminescent jellyfish illuminated the seabed like floating lanterns.",
                    defaultSpeech: "Look at the vibrant turquoise glow of the Azure Coral under ultraviolet light!"
                },
                {
                    panelIndex: 2,
                    role: '3. High-Stakes Climax',
                    roleBadge: 'Climax & Twist',
                    starters: ['Without warning,', 'At the critical moment,', 'Before Maya could record the sample,'],
                    defaultCaption: "Without warning, the thermal sensor detected a sudden warm surge flowing from an uncharted trench!",
                    defaultSpeech: "Hold steady! The current is shifting violently near the coral wall!"
                },
                {
                    panelIndex: 3,
                    role: '4. Master Resolution',
                    roleBadge: 'Resolution',
                    starters: ['With courageous precision,', 'Executing a gentle maneuver,', 'Safeguarding the marine sanctuary,'],
                    defaultCaption: "With courageous precision, Maya documented the new vent coordinates, protecting the fragile sanctuary forever.",
                    defaultSpeech: "All temperature readings logged! This fragile marine habitat is officially protected."
                }
            ]
        }
    };

    /* --- ANIMATED SVG SCENE GENERATOR ANCHORED TO READING TOPICS --- */
    function getStoryComicSVG(universeId, settingId, charId, propId, panelIdx, level, twist, secondaryCharId) {
        let bgGraphic = '';
        let propGraphic = '';
        let charGraphic = '';
        let twistOverlay = '';
        let storyActionOverlays = '';
        let pedestalGraphic = '';

        const isClimax = (panelIdx === 2 || (level === 'beginner' && panelIdx === 1));
        const isResolution = (panelIdx === 3 || (level === 'beginner' && panelIdx === 2));
        const isDiscovery = (panelIdx === 1 && level !== 'beginner');

        // Solid Ground Baseline at Y = 175
        const groundY = 175;
        const propX = 280;

        // Consistent Home Position for the Hero across ALL panels (Panel 1, 2, 3 & 4 all start from X = 100)
        const charX = 100;

        // ==========================================
        // 1. SETTINGS BACKGROUNDS (SOLID FLOOR AT 175)
        // ==========================================
        if (universeId === 'beginner') {
            if (settingId === 'backyard') {
                // Leo's Backyard: Clear sky, red picket fence, green lawn
                bgGraphic = `
                    <rect width="400" height="220" fill="#bae6fd"/>
                    <circle cx="340" cy="35" r="24" fill="#facc15" filter="drop-shadow(0 0 10px #fde047)"/>
                    <g class="story-anim-viewport-drift">
                        <circle cx="70" cy="28" r="14" fill="#ffffff" opacity="0.95"/>
                        <circle cx="85" cy="22" r="18" fill="#ffffff" opacity="0.95"/>
                        <circle cx="100" cy="28" r="14" fill="#ffffff" opacity="0.95"/>
                    </g>
                    <!-- Red Picket Fence -->
                    <g transform="translate(0, 115)">
                        <rect x="0" y="0" width="400" height="8" fill="#b91c1c"/>
                        <rect x="0" y="24" width="400" height="8" fill="#b91c1c"/>
                        ${Array.from({length: 14}).map((_, i) => `
                            <polygon points="${i*30+5},35 ${i*30+5},-10 ${i*30+15},-18 ${i*30+25},-10 ${i*30+25},35" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
                        `).join('')}
                    </g>
                    <!-- Solid Green Lawn (ground at 175) -->
                    <rect x="0" y="150" width="400" height="70" fill="#22c55e"/>
                    <rect x="0" y="175" width="400" height="45" fill="#16a34a"/>
                    <!-- Doghouse on Far Right -->
                    <g transform="translate(325, 110)">
                        <rect x="0" y="25" width="70" height="42" rx="3" fill="#d97706" stroke="#92400e" stroke-width="2"/>
                        <polygon points="-5,27 35,-6 75,27" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
                        <path d="M22 67 L22 42 Q35 32 48 42 L48 67 Z" fill="#451a03"/>
                    </g>
                    <circle cx="35" cy="190" r="4" fill="#ec4899"/><circle cx="35" cy="190" r="2" fill="#facc15"/>
                    <circle cx="65" cy="198" r="4" fill="#a855f7"/><circle cx="65" cy="198" r="2" fill="#facc15"/>
                `;
            } else if (settingId === 'creek') {
                // Whispering Creek: Broad green grass lawn in foreground; creek flows in midground under bridge
                bgGraphic = `
                    <rect width="400" height="220" fill="#bae6fd"/>
                    <circle cx="50" cy="35" r="20" fill="#facc15" filter="drop-shadow(0 0 10px #fde047)"/>
                    <g class="story-anim-viewport-drift">
                        <circle cx="120" cy="30" r="12" fill="#ffffff" opacity="0.95"/>
                        <circle cx="135" cy="25" r="16" fill="#ffffff" opacity="0.95"/>
                        <circle cx="150" cy="30" r="12" fill="#ffffff" opacity="0.95"/>
                    </g>
                    <!-- Distant Green Hills -->
                    <path d="M0 95 Q140 75 280 90 T400 85 L400 145 L0 145 Z" fill="#15803d"/>
                    <!-- Blue Creek stream winding through midground (Y=105-145) -->
                    <path d="M0 135 Q180 100 400 130 L400 150 Q180 120 0 155 Z" fill="#0284c7" class="story-anim-water-rays"/>
                    <path d="M0 140 Q180 110 400 138 L400 148 Q180 125 0 155 Z" fill="#38bdf8" opacity="0.8"/>
                    <!-- Wooden Arched Footbridge on Right crossing stream -->
                    <g transform="translate(305, 95)">
                        <path d="M0 38 Q45 12 90 38 L90 28 Q45 2 0 28 Z" fill="#b45309" stroke="#78350f" stroke-width="2"/>
                        <path d="M0 28 Q45 2 90 28" stroke="#d97706" stroke-width="2.5" fill="none"/>
                        <line x1="16" y1="18" x2="16" y2="35" stroke="#78350f" stroke-width="2"/>
                        <line x1="45" y1="10" x2="45" y2="30" stroke="#78350f" stroke-width="2"/>
                        <line x1="74" y1="18" x2="74" y2="35" stroke="#78350f" stroke-width="2"/>
                    </g>
                    <!-- Swimming Yellow Duck on creek with lively paddling motion -->
                    <g transform="translate(230, 125)">
                        <g class="story-anim-duck-swim">
                            <ellipse cx="0" cy="0" rx="9" ry="6" fill="#facc15"/>
                            <circle cx="7" cy="-4" r="4.5" fill="#facc15"/>
                            <polygon points="11,-4 15,-2 11,0" fill="#ea580c"/>
                            <circle cx="8" cy="-5" r="1.2" fill="#000"/>
                        </g>
                    </g>
                    <!-- Solid Green Grassy Riverbank Lawn (Foreground Y=145-220, ground baseline at 175) -->
                    <rect x="0" y="145" width="400" height="75" fill="#22c55e"/>
                    <rect x="0" y="175" width="400" height="45" fill="#16a34a"/>
                    <!-- Reeds on Bank -->
                    <line x1="15" y1="145" x2="10" y2="120" stroke="#15803d" stroke-width="2.5"/>
                    <line x1="20" y1="147" x2="24" y2="115" stroke="#15803d" stroke-width="2.5"/>
                `;
            } else if (settingId === 'bench_area') {
                // The Warm Bench Area: Sunny park with simple, beautiful trees and wooden bench (NO weird floating green border!)
                bgGraphic = `
                    <rect width="400" height="220" fill="#e0f2fe"/>
                    <!-- Warm Golden Sun & Drifting Fluffy Clouds -->
                    <circle cx="340" cy="35" r="22" fill="#facc15" filter="drop-shadow(0 0 10px #fde047)"/>
                    <g class="story-anim-viewport-drift">
                        <circle cx="70" cy="28" r="14" fill="#ffffff" opacity="0.95"/>
                        <circle cx="85" cy="22" r="18" fill="#ffffff" opacity="0.95"/>
                        <circle cx="100" cy="28" r="14" fill="#ffffff" opacity="0.95"/>
                    </g>
                    <!-- Simple Clean Tree 1 on Left -->
                    <g transform="translate(30, 70)">
                        <rect x="8" y="40" width="16" height="70" rx="3" fill="#78350f"/>
                        <circle cx="16" cy="30" r="32" fill="#15803d"/>
                        <circle cx="0" cy="40" r="22" fill="#16a34a"/>
                        <circle cx="32" cy="36" r="24" fill="#22c55e"/>
                    </g>
                    <!-- Simple Clean Tree 2 in Mid-Background -->
                    <g transform="translate(180, 85)">
                        <rect x="6" y="35" width="12" height="55" rx="2" fill="#92400e"/>
                        <circle cx="12" cy="26" r="24" fill="#16a34a"/>
                        <circle cx="2" cy="32" r="18" fill="#22c55e"/>
                    </g>
                    <!-- Solid Green Lawn Floor (Ground at 175) -->
                    <rect x="0" y="145" width="400" height="75" fill="#22c55e"/>
                    <rect x="0" y="175" width="400" height="45" fill="#16a34a"/>
                    <!-- Large Warm Wooden Bench on Right -->
                    <g transform="translate(305, 125)">
                        <rect x="0" y="0" width="85" height="12" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2"/>
                        <rect x="0" y="16" width="85" height="12" rx="3" fill="#d97706" stroke="#78350f" stroke-width="2"/>
                        <rect x="10" y="28" width="10" height="32" fill="#78350f"/>
                        <rect x="65" y="28" width="10" height="32" fill="#78350f"/>
                    </g>
                `;
            } else {
                // Sunny Oak Park (Default)
                bgGraphic = `
                    <rect width="400" height="220" fill="#e0f2fe"/>
                    <circle cx="340" cy="30" r="22" fill="#facc15" filter="drop-shadow(0 0 10px #fde047)"/>
                    <g class="story-anim-viewport-drift">
                        <circle cx="60" cy="35" r="14" fill="#ffffff" opacity="0.95"/>
                        <circle cx="75" cy="30" r="18" fill="#ffffff" opacity="0.95"/>
                        <circle cx="90" cy="35" r="14" fill="#ffffff" opacity="0.95"/>
                    </g>
                    <path d="M0 130 Q120 105 250 125 T400 115 L400 220 L0 220 Z" fill="#22c55e"/>
                    <rect x="0" y="175" width="400" height="45" fill="#16a34a"/>
                    <!-- Tree on Left -->
                    <rect x="15" y="70" width="18" height="105" rx="3" fill="#78350f"/>
                    <circle cx="24" cy="55" r="32" fill="#15803d"/>
                    <circle cx="8" cy="65" r="22" fill="#16a34a"/>
                    <!-- Bench on Far Right -->
                    <g transform="translate(330, 140)">
                        <rect x="0" y="0" width="65" height="9" rx="2" fill="#b45309"/>
                        <rect x="0" y="12" width="65" height="9" rx="2" fill="#d97706"/>
                        <rect x="8" y="21" width="6" height="20" fill="#78350f"/>
                        <rect x="50" y="21" width="6" height="20" fill="#78350f"/>
                    </g>
                `;
            }
        } else if (universeId === 'advanced') {
            if (settingId === 'twilight_trench') {
                // Deep Twilight Trench
                bgGraphic = `
                    <rect width="400" height="220" fill="#030712"/>
                    <rect width="400" height="220" fill="rgba(8, 47, 73, 0.4)"/>
                    <polygon points="340,220 355,130 370,130 385,220" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                    <g class="story-anim-bubble-1">
                        <circle cx="362" cy="120" r="7" fill="#f97316" opacity="0.8" filter="drop-shadow(0 0 8px #ea580c)"/>
                        <circle cx="364" cy="98" r="4" fill="#fb923c" opacity="0.6"/>
                    </g>
                    <rect x="0" y="175" width="400" height="45" fill="#0f172a"/>
                `;
            } else if (settingId === 'kelp_forest') {
                // Giant Kelp Sanctuary
                bgGraphic = `
                    <rect width="400" height="220" fill="#042f2e"/>
                    <rect x="0" y="0" width="400" height="220" fill="rgba(6, 78, 59, 0.35)" class="story-anim-water-rays"/>
                    <g class="story-anim-coral-sway-left" transform="translate(25, 0)">
                        <path d="M0 220 Q-15 150 5 100 T-5 0" stroke="#15803d" stroke-width="12" fill="none"/>
                        <ellipse cx="-15" cy="80" rx="16" ry="8" fill="#22c55e" transform="rotate(-30 -15 80)"/>
                    </g>
                    <g class="story-anim-coral-sway-right" transform="translate(370, 0)">
                        <path d="M0 220 Q15 150 -5 100 T5 0" stroke="#166534" stroke-width="12" fill="none"/>
                        <ellipse cx="-16" cy="70" rx="16" ry="8" fill="#15803d" transform="rotate(-25 -16 70)"/>
                    </g>
                    <rect x="0" y="175" width="400" height="45" fill="#064e3b"/>
                `;
            } else if (settingId === 'sunken_dome') {
                // Sunken Research Dome
                bgGraphic = `
                    <rect width="400" height="220" fill="#0c4a6e"/>
                    <path d="M260 185 A 70 70 0 0 1 385 185 Z" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2.5"/>
                    <circle cx="320" cy="150" r="10" fill="#facc15" opacity="0.8" class="story-anim-crystal-glow"/>
                    <rect x="0" y="175" width="400" height="45" fill="#0369a1"/>
                `;
            } else {
                // Azure Coral Reef (Default)
                bgGraphic = `
                    <rect width="400" height="220" fill="#082f49"/>
                    <rect x="0" y="0" width="400" height="220" fill="rgba(56, 189, 248, 0.15)" class="story-anim-water-rays"/>
                    <g class="story-anim-coral-sway-left" transform="translate(25, 110)">
                        <path d="M10 80 Q5 40 25 20 Q35 0 25 -10 Q10 10 5 40 Z" fill="#ec4899" filter="drop-shadow(0 0 8px #f43f5e)"/>
                    </g>
                    <rect x="0" y="175" width="400" height="45" fill="#0e7490"/>
                    <circle cx="70" cy="140" r="3" fill="#38bdf8" opacity="0.7"/>
                    <circle cx="330" cy="110" r="4" fill="#38bdf8" opacity="0.6"/>
                `;
            }
        } else {
            // Intermediate (Sci-Fi & Space)
            if (settingId === 'lunar_outpost') {
                // Lunar Moon Outpost: Spectacular Earthrise, Geodesic Biosphere Dome, Lunar Rover, Solar Array & Planted Mission Flag
                bgGraphic = `
                    <defs>
                        <!-- Atmospheric Glow & Surface Gradients for Lunar Outpost -->
                        <radialGradient id="earthAtmosphere" cx="45%" cy="45%" r="50%">
                            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.95"/>
                            <stop offset="70%" stop-color="#0284c7" stop-opacity="0.55"/>
                            <stop offset="100%" stop-color="#0369a1" stop-opacity="0"/>
                        </radialGradient>
                        <linearGradient id="lunarRidgeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#64748b"/>
                            <stop offset="35%" stop-color="#475569"/>
                            <stop offset="100%" stop-color="#334155"/>
                        </linearGradient>
                        <linearGradient id="domeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#ffffff"/>
                            <stop offset="45%" stop-color="#cbd5e1"/>
                            <stop offset="100%" stop-color="#64748b"/>
                        </linearGradient>
                    </defs>

                    <!-- 1. PITCH-BLACK DEEP SPACE SKY -->
                    <rect width="400" height="220" fill="#030712"/>

                    <!-- Brilliant Lunar Stars (Vivid & Clear in Vacuum) -->
                    <circle cx="25" cy="28" r="1.3" fill="#ffffff" opacity="0.95"/>
                    <circle cx="65" cy="18" r="1.5" fill="#bae6fd" opacity="0.9"/>
                    <circle cx="115" cy="40" r="1.0" fill="#ffffff" opacity="0.75"/>
                    <circle cx="155" cy="22" r="1.4" fill="#ffffff" opacity="0.9"/>
                    <circle cx="205" cy="45" r="1.2" fill="#bae6fd" opacity="0.85"/>
                    <circle cx="255" cy="25" r="1.5" fill="#ffffff" opacity="0.95"/>
                    <circle cx="375" cy="18" r="1.2" fill="#ffffff" opacity="0.85"/>
                    <circle cx="390" cy="60" r="1.0" fill="#bae6fd" opacity="0.75"/>
                    <circle cx="178" cy="65" r="0.9" fill="#ffffff" opacity="0.65"/>
                    <circle cx="285" cy="72" r="1.1" fill="#bae6fd" opacity="0.8"/>

                    <!-- 2. SPECTACULAR EARTHRISE IN THE LUNAR SKY (X=320, Y=46, R=26) -->
                    <!-- Atmospheric Blue Halo -->
                    <circle cx="320" cy="46" r="32" fill="url(#earthAtmosphere)" filter="drop-shadow(0 0 16px rgba(56, 189, 248, 0.75))"/>
                    <!-- Deep Ocean Marble Base -->
                    <circle cx="320" cy="46" r="26" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                    <!-- Continents (Vibrant Green & Earthy Gold) -->
                    <path d="M304 38 Q312 32 320 35 Q326 38 328 46 Q324 54 316 52 Q308 50 304 38 Z" fill="#15803d" opacity="0.95"/>
                    <path d="M322 42 Q328 38 335 44 Q339 52 333 58 Q326 55 322 42 Z" fill="#16a34a" opacity="0.9"/>
                    <path d="M310 54 Q316 58 322 62 Q318 68 312 66 Z" fill="#ca8a04" opacity="0.85"/>
                    <!-- Swirling Translucent White Cloud Bands -->
                    <path d="M298 42 Q312 40 325 45 T343 43" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.8" stroke-linecap="round"/>
                    <path d="M302 52 Q318 48 330 55 T341 52" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.75" stroke-linecap="round"/>
                    <path d="M306 34 Q320 32 332 35" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>

                    <!-- 3. RUGGED LUNAR CRATER HORIZON & REGOLITH HILLS -->
                    <path d="M0 135 Q70 115 150 128 T300 120 Q350 125 400 118 L400 155 L0 155 Z" fill="url(#lunarRidgeGrad)"/>
                    <!-- Distant Craters on the Ridge -->
                    <ellipse cx="235" cy="126" rx="22" ry="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                    <ellipse cx="235" cy="125" rx="18" ry="4" fill="#0f172a"/>
                    <ellipse cx="370" cy="124" rx="16" ry="4" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>

                    <!-- 4. LUNAR SURFACE EXPLORATION EQUIPMENT -->
                    <!-- Solar Power Array on the Ridge (X=195) -->
                    <g transform="translate(195, 118)">
                        <line x1="0" y1="0" x2="0" y2="15" stroke="#94a3b8" stroke-width="2.5"/>
                        <g transform="rotate(-18)">
                            <rect x="-24" y="-8" width="22" height="15" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                            <line x1="-13" y1="-8" x2="-13" y2="7" stroke="#38bdf8" stroke-width="1"/>
                            <line x1="-24" y1="-0.5" x2="-2" y2="-0.5" stroke="#38bdf8" stroke-width="0.8"/>
                            <rect x="2" y="-8" width="22" height="15" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                            <line x1="13" y1="-8" x2="13" y2="7" stroke="#38bdf8" stroke-width="1"/>
                            <line x1="2" y1="-0.5" x2="24" y2="-0.5" stroke="#38bdf8" stroke-width="0.8"/>
                            <circle cx="0" cy="0" r="2.5" fill="#f59e0b"/>
                        </g>
                    </g>

                    <!-- Planted Space Mission Flag on the Ridge (X=238, Y=112) -->
                    <g transform="translate(238, 108)">
                        <line x1="0" y1="0" x2="0" y2="25" stroke="#cbd5e1" stroke-width="2"/>
                        <line x1="0" y1="0" x2="16" y2="0" stroke="#cbd5e1" stroke-width="1.5"/>
                        <rect x="0" y="0" width="16" height="11" fill="#0284c7" stroke="#38bdf8" stroke-width="0.8"/>
                        <polygon points="0,0 8,5.5 0,11" fill="#f59e0b"/>
                        <circle cx="10" cy="5.5" r="2.5" fill="#ffffff"/>
                    </g>

                    <!-- Parked Lunar Surface Rover / Buggy (X=142 to X=175, Y=134 to Y=150) -->
                    <g transform="translate(142, 134)">
                        <!-- Mesh Rover Wheels -->
                        <circle cx="6" cy="14" r="5" fill="#334155" stroke="#94a3b8" stroke-width="1.8"/>
                        <circle cx="6" cy="14" r="2" fill="#0f172a"/>
                        <circle cx="26" cy="14" r="5" fill="#334155" stroke="#94a3b8" stroke-width="1.8"/>
                        <circle cx="26" cy="14" r="2" fill="#0f172a"/>
                        <!-- Chassis & Equipment Rack -->
                        <rect x="2" y="5" width="28" height="7" rx="2" fill="#d97706" stroke="#f59e0b" stroke-width="1.2"/>
                        <line x1="6" y1="12" x2="26" y2="12" stroke="#64748b" stroke-width="2"/>
                        <!-- Steering Mast & Antenna -->
                        <line x1="8" y1="5" x2="12" y2="-2" stroke="#94a3b8" stroke-width="1.5"/>
                        <circle cx="12" cy="-2" r="1.5" fill="#38bdf8"/>
                        <line x1="24" y1="5" x2="22" y2="0" stroke="#94a3b8" stroke-width="1.2"/>
                        <rect x="20" y="0" width="5" height="4" rx="1" fill="#0284c7"/>
                        <!-- Rover Headlight Beam cast forward -->
                        <polygon points="2,8 -8,5 -8,12" fill="rgba(250, 204, 21, 0.25)"/>
                    </g>

                    <!-- 5. PRESSURIZED LUNAR GEODESIC DOME BASE (X=22 to X=122, Y=85 to Y=150) -->
                    <!-- Communication Mast on Top of Dome with Flashing Alert Beacon -->
                    <line x1="72" y1="88" x2="72" y2="65" stroke="#94a3b8" stroke-width="2"/>
                    <circle cx="72" cy="64" r="3.5" fill="#ef4444" class="story-anim-antenna-pulse"/>
                    <!-- Main Pressurized Biosphere Dome -->
                    <path d="M22 150 A 52 52 0 0 1 122 150 Z" fill="url(#domeGrad)" stroke="#475569" stroke-width="2.5"/>
                    <!-- Geodesic Structural Facet Struts -->
                    <path d="M72 98 L48 122 L72 146 L96 122 Z" fill="none" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="72" y1="98" x2="72" y2="146" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="22" y1="150" x2="48" y2="122" stroke="#64748b" stroke-width="1.5"/>
                    <line x1="122" y1="150" x2="96" y2="122" stroke="#64748b" stroke-width="1.5"/>
                    <!-- Warm Illuminated Crew Observation Windows -->
                    <circle cx="60" cy="120" r="6" fill="#facc15" filter="drop-shadow(0 0 6px #fde047)"/>
                    <circle cx="60" cy="120" r="3.5" fill="#ffffff"/>
                    <circle cx="84" cy="120" r="6" fill="#facc15" filter="drop-shadow(0 0 6px #fde047)"/>
                    <circle cx="84" cy="120" r="3.5" fill="#ffffff"/>

                    <!-- External Pressurized Airlock Module -->
                    <rect x="110" y="125" width="26" height="25" rx="3" fill="#334155" stroke="#64748b" stroke-width="1.8"/>
                    <rect x="115" y="130" width="16" height="20" rx="2" fill="#1e293b"/>
                    <circle cx="123" cy="127.5" r="2" fill="#22c55e" class="story-anim-led-1"/>

                    <!-- Pressurized Oxygen & Life Support Cylinders -->
                    <g transform="translate(14, 134)">
                        <rect x="0" y="0" width="9" height="16" rx="2.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                        <line x1="0" y1="5" x2="9" y2="5" stroke="#ffffff" stroke-width="1"/>
                        <rect x="11" y="0" width="9" height="16" rx="2.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                        <line x1="11" y1="5" x2="20" y2="5" stroke="#ffffff" stroke-width="1"/>
                    </g>

                    <!-- 6. SOLID LUNAR BASE OUTPOST DECK (GROUND BASELINE AT Y=175) -->
                    <!-- Midground Lunar Regolith Base Floor (Y=145 to 175) -->
                    <rect x="0" y="145" width="400" height="75" fill="#334155"/>
                    <rect x="0" y="175" width="400" height="45" fill="#1e293b"/>
                    <!-- Foreground Craters in the Moon Dust -->
                    <ellipse cx="60" cy="162" rx="18" ry="5" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
                    <ellipse cx="60" cy="161" rx="14" ry="3.5" fill="#0f172a"/>
                    <ellipse cx="360" cy="164" rx="20" ry="6" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
                    <ellipse cx="360" cy="163" rx="15" ry="4" fill="#0f172a"/>

                    <!-- High-Visibility Yellow/Black Hazard Striping & Runway Beacon Line at Y=175 baseline -->
                    <line x1="0" y1="175" x2="400" y2="175" stroke="#facc15" stroke-width="3.5" stroke-dasharray="14,10"/>
                    <!-- Interlocking Grid Deck Seams -->
                    <line x1="100" y1="175" x2="100" y2="220" stroke="#475569" stroke-width="1.5"/>
                    <line x1="200" y1="175" x2="200" y2="220" stroke="#475569" stroke-width="1.5"/>
                    <line x1="300" y1="175" x2="300" y2="220" stroke="#475569" stroke-width="1.5"/>
                    <!-- Embedded Runway Beacon Lights along baseline floor -->
                    <circle cx="50" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-2"/>
                    <circle cx="150" cy="175" r="2.5" fill="#facc15" class="story-anim-led-3"/>
                    <circle cx="250" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-1"/>
                    <circle cx="350" cy="175" r="2.5" fill="#facc15" class="story-anim-led-2"/>
                `;
                pedestalGraphic = `
                    <g transform="translate(255, 145)">
                        <rect x="0" y="0" width="50" height="30" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                        <line x1="6" y1="15" x2="44" y2="15" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
                        <ellipse cx="25" cy="0" rx="25" ry="6" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
                        <ellipse cx="25" cy="0" rx="18" ry="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                    </g>
                `;
            } else if (settingId === 'satellite_bay') {
                // Satellite Uplink Bay: Distinct Floating Satellite linked via active energy beam to Bay Transceiver
                bgGraphic = `
                    <!-- Deep Space Starfield Void Outside Bay Window -->
                    <rect width="400" height="220" fill="#030712"/>
                    <!-- Cosmic Nebula Glow & Distant Earth Crescent -->
                    <ellipse cx="250" cy="55" rx="80" ry="35" fill="rgba(56, 189, 248, 0.08)" transform="rotate(-12 250 55)"/>
                    <ellipse cx="140" cy="45" rx="60" ry="25" fill="rgba(129, 140, 248, 0.06)" transform="rotate(18 140 45)"/>
                    <circle cx="330" cy="42" r="14" fill="#0284c7" filter="drop-shadow(0 0 8px rgba(56, 189, 248, 0.5))"/>
                    <circle cx="327" cy="40" r="12" fill="#030712"/>
                    <!-- Twinkling Space Stars -->
                    <circle cx="45" cy="30" r="1.2" fill="#fff" opacity="0.85"/>
                    <circle cx="110" cy="24" r="1.5" fill="#bae6fd" opacity="0.9"/>
                    <circle cx="165" cy="32" r="1.0" fill="#fff" opacity="0.7"/>
                    <circle cx="210" cy="22" r="1.4" fill="#fff" opacity="0.9"/>
                    <circle cx="310" cy="65" r="1.2" fill="#bae6fd" opacity="0.8"/>
                    <circle cx="375" cy="26" r="1.0" fill="#fff" opacity="0.6"/>

                    <!-- Top Architectural Bay Ceiling Bulkhead & Recessed LED Strip Lights -->
                    <rect x="0" y="0" width="400" height="14" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                    <line x1="0" y1="14" x2="400" y2="14" stroke="#38bdf8" stroke-width="1" opacity="0.6"/>
                    <rect x="50" y="4" width="60" height="3" rx="1.5" fill="#38bdf8" opacity="0.8"/>
                    <rect x="170" y="4" width="60" height="3" rx="1.5" fill="#38bdf8" opacity="0.8"/>
                    <rect x="290" y="4" width="60" height="3" rx="1.5" fill="#38bdf8" opacity="0.8"/>

                    <!-- High-Tech Panoramic Bay Window Framing -->
                    <polygon points="0,14 35,14 0,45" fill="#1e293b"/>
                    <polygon points="400,14 365,14 400,45" fill="#1e293b"/>
                    <line x1="0" y1="45" x2="35" y2="14" stroke="#334155" stroke-width="2"/>
                    <line x1="400" y1="45" x2="365" y2="14" stroke="#334155" stroke-width="2"/>
                    <line x1="0" y1="105" x2="45" y2="145" stroke="#334155" stroke-width="2"/>
                    <line x1="400" y1="105" x2="355" y2="145" stroke="#334155" stroke-width="2"/>

                    <!-- ACTIVE UPLINK LINK: High-Energy Beam & Signal Waves Linking Bay to Floating Satellite -->
                    <line x1="50" y1="85" x2="236" y2="72" stroke="rgba(56, 189, 248, 0.2)" stroke-width="10"/>
                    <line x1="50" y1="85" x2="236" y2="72" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="8,5" class="story-anim-uplink-pulse"/>
                    <line x1="50" y1="85" x2="236" y2="72" stroke="#ffffff" stroke-width="1" opacity="0.85"/>
                    <!-- Concentric Uplink Signal Pulse Arcs at Bay Transceiver -->
                    <g transform="translate(50, 85)">
                        <circle cx="0" cy="0" r="4" fill="none" stroke="#38bdf8" stroke-width="2" class="story-anim-signal-ring-1"/>
                        <circle cx="0" cy="0" r="4" fill="none" stroke="#00f0ff" stroke-width="1.8" class="story-anim-signal-ring-2"/>
                        <circle cx="0" cy="0" r="4" fill="none" stroke="#818cf8" stroke-width="1.5" class="story-anim-signal-ring-3"/>
                    </g>
                    <!-- Floating Data Packet Pulse along the link line -->
                    <circle cx="143" cy="78" r="3.2" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
                    <circle cx="143" cy="78" r="1.6" fill="#ffffff"/>

                    <!-- FLOATING SATELLITE IN SPACE (DRIFTING IN ZERO-G) - NESTED TO PREVENT CSS ANIMATION TRANSFORM OVERRIDE -->
                    <g transform="translate(250, 62)">
                        <g class="story-anim-satellite-float">
                            <!-- Main Gold Satellite Bus -->
                            <rect x="-14" y="-12" width="28" height="24" rx="4" fill="#d97706" stroke="#f59e0b" stroke-width="1.8" filter="drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))"/>
                            <line x1="-14" y1="-4" x2="14" y2="-4" stroke="#b45309" stroke-width="1"/>
                            <line x1="-14" y1="4" x2="14" y2="4" stroke="#b45309" stroke-width="1"/>
                            <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
                            <circle cx="0" cy="0" r="2.5" fill="#38bdf8"/>
                            <!-- Left Solar Array Wing -->
                            <line x1="-14" y1="0" x2="-22" y2="0" stroke="#94a3b8" stroke-width="3"/>
                            <rect x="-56" y="-14" width="34" height="28" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                            <line x1="-39" y1="-14" x2="-39" y2="14" stroke="#38bdf8" stroke-width="1.5"/>
                            <line x1="-56" y1="0" x2="-22" y2="0" stroke="#38bdf8" stroke-width="1"/>
                            <!-- Right Solar Array Wing -->
                            <line x1="14" y1="0" x2="22" y2="0" stroke="#94a3b8" stroke-width="3"/>
                            <rect x="22" y="-14" width="34" height="28" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                            <line x1="39" y1="-14" x2="39" y2="14" stroke="#38bdf8" stroke-width="1.5"/>
                            <line x1="22" y1="0" x2="56" y2="0" stroke="#38bdf8" stroke-width="1"/>
                            <!-- Satellite Comm Dish Pointed directly at Bay Transceiver Beam -->
                            <g transform="translate(-14, 8) rotate(-10)">
                                <path d="M-12 0 Q0 -9 12 0" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="0" y1="-4" x2="0" y2="-11" stroke="#38bdf8" stroke-width="1.5"/>
                                <circle cx="0" cy="-11" r="2" fill="#00f0ff"/>
                            </g>
                            <!-- Top Antenna Beacon with Red Alert Pulse -->
                            <line x1="0" y1="-12" x2="0" y2="-22" stroke="#94a3b8" stroke-width="1.8"/>
                            <circle cx="0" cy="-22" r="3" fill="#ef4444" class="story-anim-antenna-pulse"/>
                            <!-- Satellite Status Label -->
                            <rect x="-24" y="16" width="48" height="9" rx="2" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" stroke-width="0.8"/>
                            <text x="0" y="23" font-size="6" font-weight="900" fill="#38bdf8" text-anchor="middle">SAT-UPLINK</text>
                        </g>
                    </g>

                    <!-- SATELLITE BAY INTERIOR (WALL BULKHEAD & UPLINK TURRET DISH) -->
                    <rect x="0" y="95" width="95" height="55" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                    <rect x="305" y="95" width="95" height="55" fill="#1e293b" stroke="#334155" stroke-width="2"/>

                    <!-- Bay Uplink Antenna Turret (Left Bulkhead aimed up at the floating satellite) -->
                    <g transform="translate(55, 100)">
                        <rect x="-16" y="10" width="32" height="15" rx="3" fill="#334155" stroke="#475569" stroke-width="2"/>
                        <circle cx="0" cy="10" r="9" fill="#475569" stroke="#64748b" stroke-width="2"/>
                        <!-- Heavy Hydraulic Turret Arms -->
                        <line x1="-7" y1="10" x2="-3" y2="-3" stroke="#64748b" stroke-width="3.5"/>
                        <line x1="7" y1="10" x2="3" y2="-3" stroke="#64748b" stroke-width="3.5"/>
                        <!-- Angled Bay Transceiver Dish -->
                        <g transform="rotate(-38)">
                            <path d="M-20 0 Q0 -15 20 0 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
                            <path d="M-16 2 Q0 -10 16 2" stroke="#0284c7" stroke-width="1.5" fill="none"/>
                            <line x1="0" y1="-7" x2="0" y2="-18" stroke="#38bdf8" stroke-width="2.5"/>
                            <circle cx="0" cy="-18" r="4.5" fill="#00f0ff" filter="drop-shadow(0 0 8px #38bdf8)"/>
                            <circle cx="0" cy="-18" r="2" fill="#ffffff"/>
                        </g>
                    </g>

                    <!-- Bay Telemetry Status Consoles -->
                    <g transform="translate(5, 102)">
                        <rect x="0" y="0" width="36" height="24" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
                        <path d="M3 12 Q8 4 13 12 T23 12 T33 12" stroke="#22c55e" stroke-width="1.5" fill="none"/>
                        <circle cx="6" cy="18" r="1.5" fill="#22c55e"/>
                        <circle cx="12" cy="18" r="1.5" fill="#38bdf8"/>
                    </g>
                    <g transform="translate(355, 102)">
                        <rect x="0" y="0" width="40" height="24" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
                        <text x="20" y="8" font-size="5.5" fill="#38bdf8" font-weight="bold" text-anchor="middle">SIGNAL 99%</text>
                        <rect x="4" y="12" width="32" height="5" rx="1.5" fill="#1e293b"/>
                        <rect x="4" y="12" width="28" height="5" rx="1.5" fill="#22c55e"/>
                    </g>

                    <!-- SOLID BAY TECH FLOOR (GROUND BASELINE AT Y=175) -->
                    <rect x="0" y="145" width="400" height="75" fill="#1e293b"/>
                    <rect x="0" y="175" width="400" height="45" fill="#0f172a"/>
                    <!-- Yellow/Black Hazard Warning Safety Stripes at Y=175 baseline -->
                    <line x1="0" y1="175" x2="400" y2="175" stroke="#facc15" stroke-width="3.5" stroke-dasharray="14,10"/>
                    <line x1="100" y1="175" x2="100" y2="220" stroke="#334155" stroke-width="1.5"/>
                    <line x1="200" y1="175" x2="200" y2="220" stroke="#334155" stroke-width="1.5"/>
                    <line x1="300" y1="175" x2="300" y2="220" stroke="#334155" stroke-width="1.5"/>
                `;
                pedestalGraphic = `
                    <g transform="translate(255, 145)">
                        <rect x="0" y="0" width="50" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                        <line x1="6" y1="15" x2="44" y2="15" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
                        <ellipse cx="25" cy="0" rx="25" ry="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                    </g>
                `;
            } else if (settingId === 'reactor_room') {
                // Interactive Quantum Core Reactor: Glowing On and Off, Electric Sparks & Clickable Overdrive
                bgGraphic = `
                    <defs>
                        <!-- Chamber Backplate Gradient -->
                        <linearGradient id="reactorChamberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#27272a"/>
                            <stop offset="50%" stop-color="#09090b"/>
                            <stop offset="100%" stop-color="#27272a"/>
                        </linearGradient>
                        <!-- Plasma Core Radial Gradient -->
                        <radialGradient id="plasmaCoreGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#ffffff"/>
                            <stop offset="28%" stop-color="#fef08a"/>
                            <stop offset="65%" stop-color="#f59e0b"/>
                            <stop offset="100%" stop-color="#dc2626"/>
                        </radialGradient>
                        <!-- Coolant Fluid Pipe Gradient -->
                        <linearGradient id="coolantGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#0284c7"/>
                            <stop offset="50%" stop-color="#38bdf8"/>
                            <stop offset="100%" stop-color="#0284c7"/>
                        </linearGradient>
                    </defs>

                    <!-- 1. REACTOR ROOM AMBIENT BACKGROUND -->
                    <rect width="400" height="220" fill="#09090b"/>

                    <!-- Industrial Wall Seams -->
                    <line x1="0" y1="40" x2="400" y2="40" stroke="#18181b" stroke-width="1.5"/>
                    <line x1="0" y1="85" x2="400" y2="85" stroke="#18181b" stroke-width="1.5"/>
                    <line x1="0" y1="130" x2="400" y2="130" stroke="#18181b" stroke-width="1.5"/>
                    <line x1="120" y1="0" x2="120" y2="145" stroke="#18181b" stroke-width="1.5"/>
                    <line x1="240" y1="0" x2="240" y2="145" stroke="#18181b" stroke-width="1.5"/>

                    <!-- High-Voltage Power Conduit Cables running to reactor -->
                    <path d="M0 30 Q120 45 270 25" stroke="#ef4444" stroke-width="3.5" fill="none" opacity="0.8"/>
                    <path d="M0 35 Q130 55 270 32" stroke="#f59e0b" stroke-width="3" fill="none" opacity="0.8"/>
                    <path d="M0 40 Q140 65 270 40" stroke="#0284c7" stroke-width="2.5" fill="none" opacity="0.8"/>

                    <!-- Left Wall Diagnostic Telemetry Terminal -->
                    <g transform="translate(15, 65)">
                        <rect x="0" y="0" width="65" height="60" rx="4" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
                        <rect x="6" y="6" width="53" height="30" rx="2" fill="#09090b" stroke="#22c55e" stroke-width="1.2"/>
                        <!-- Heartbeat Energy Waveform -->
                        <path d="M8 21 L18 21 L22 12 L26 28 L30 18 L34 24 L38 21 L56 21" stroke="#22c55e" stroke-width="1.8" fill="none"/>
                        <text x="32" y="47" font-size="6.5" font-weight="900" fill="#22c55e" text-anchor="middle" class="reactor-status-text">CORE STABLE</text>
                        <circle cx="12" cy="54" r="2.5" fill="#22c55e"/>
                        <circle cx="22" cy="54" r="2.5" fill="#facc15"/>
                        <circle cx="32" cy="54" r="2.5" fill="#ef4444"/>
                    </g>

                    <!-- 2. THE INTERACTIVE QUANTUM CORE REACTOR (CLICKABLE!) -->
                    <g class="interactive-reactor" transform="translate(0, 0)" title="⚡ Click to toggle Quantum Overdrive!">
                        <!-- Heavy Coolant Conduit Pipes -->
                        <path d="M255 145 C255 105 275 100 285 85" stroke="url(#coolantGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
                        <path d="M385 145 C385 105 365 100 355 85" stroke="url(#coolantGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>

                        <!-- Main Reactor Housing Tower (Centered at X = 320) -->
                        <rect x="275" y="15" width="90" height="135" rx="10" fill="url(#reactorChamberGrad)" stroke="#f59e0b" stroke-width="3.5" filter="drop-shadow(0 0 12px rgba(245, 158, 11, 0.4))"/>
                        
                        <!-- Top Magnetic Containment Cap -->
                        <path d="M280 15 L290 2 L350 2 L360 15 Z" fill="#27272a" stroke="#f59e0b" stroke-width="2"/>
                        <rect x="305" y="-3" width="30" height="6" rx="2" fill="#ef4444"/>

                        <!-- Bottom Foundation Base -->
                        <rect x="270" y="140" width="100" height="15" rx="3" fill="#27272a" stroke="#71717a" stroke-width="2"/>
                        <rect x="285" y="143" width="70" height="4" fill="#facc15"/>

                        <!-- Transparent Quartz Core Viewing Chamber Window -->
                        <rect x="287" y="25" width="66" height="112" rx="6" fill="#030712" stroke="#38bdf8" stroke-width="2"/>
                        <!-- Window Shimmer Glint -->
                        <path d="M290 30 L345 30 L325 130 L290 130 Z" fill="rgba(56, 189, 248, 0.05)"/>
                        <line x1="293" y1="35" x2="293" y2="125" stroke="#ffffff" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>

                        <!-- Upper & Lower High-Voltage Electrodes -->
                        <rect x="312" y="25" width="16" height="14" rx="2" fill="#52525b" stroke="#a1a1aa" stroke-width="1.5"/>
                        <polygon points="314,39 320,47 326,39" fill="#00f0ff"/>
                        <rect x="312" y="123" width="16" height="14" rx="2" fill="#52525b" stroke="#a1a1aa" stroke-width="1.5"/>
                        <polygon points="314,123 320,115 326,123" fill="#00f0ff"/>

                        <!-- ROTATING MAGNETIC STABILIZER RINGS (Encircling Core) -->
                        <g class="story-anim-reactor-ring-1">
                            <ellipse cx="320" cy="85" rx="28" ry="10" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8,6" opacity="0.85"/>
                        </g>
                        <g class="story-anim-reactor-ring-2">
                            <ellipse cx="320" cy="85" rx="22" ry="32" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="12,8" opacity="0.75"/>
                        </g>

                        <!-- THE GLOWING QUANTUM PLASMA CORE (GLOWS ON AND OFF!) -->
                        <g transform="translate(320, 85)">
                            <!-- Outer Ambient Light Spill -->
                            <circle cx="0" cy="0" r="38" fill="rgba(250, 204, 21, 0.15)" class="story-anim-reactor-glow"/>
                            <!-- Pulsing Plasma Orb -->
                            <circle cx="0" cy="0" r="18" fill="url(#plasmaCoreGrad)" class="story-anim-reactor-glow"/>
                            <!-- Inner Super-Hot Core -->
                            <ellipse cx="0" cy="0" rx="9" ry="12" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)"/>
                        </g>

                        <!-- ELECTRICAL SPARKS & LIGHTNING ARCS SNAPPING ACROSS CHAMBER -->
                        <path d="M320 46 L316 56 L324 64 L318 72 L320 80" stroke="#00f0ff" stroke-width="2" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                        <path d="M320 90 L325 98 L315 104 L323 110 L320 116" stroke="#facc15" stroke-width="2.2" fill="none" stroke-linecap="round" class="story-anim-spark-2"/>
                        <path d="M325 80 L335 74 L340 82 L348 76" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round" class="story-anim-spark-3"/>
                        <path d="M312 88 L304 94 L308 100 L298 104" stroke="#38bdf8" stroke-width="2" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>

                        <!-- FLYING BURST SPARKS (LEAPING FROM CORE) -->
                        <g transform="translate(320, 85)">
                            <g class="story-anim-flying-spark-1">
                                <circle cx="-12" cy="-8" r="2.2" fill="#00f0ff" filter="drop-shadow(0 0 4px #00f0ff)"/>
                                <line x1="-12" y1="-8" x2="-8" y2="-5" stroke="#ffffff" stroke-width="1.5"/>
                            </g>
                            <g class="story-anim-flying-spark-2">
                                <circle cx="14" cy="-10" r="2.5" fill="#facc15" filter="drop-shadow(0 0 5px #facc15)"/>
                                <line x1="14" y1="-10" x2="8" y2="-6" stroke="#f59e0b" stroke-width="1.5"/>
                            </g>
                            <g class="story-anim-flying-spark-3">
                                <circle cx="-10" cy="12" r="2.0" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"/>
                                <line x1="-10" y1="12" x2="-6" y2="8" stroke="#38bdf8" stroke-width="1.2"/>
                            </g>
                        </g>

                        <!-- Interactive Click Badge Pill -->
                        <g transform="translate(320, 150)">
                            <rect x="-44" y="2" width="88" height="14" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#f59e0b" stroke-width="1.2"/>
                            <text x="0" y="12" font-size="7" font-weight="900" fill="#facc15" text-anchor="middle" letter-spacing="0.5">⚡ CLICK REACTOR</text>
                        </g>
                    </g>

                    <!-- 3. SOLID REACTOR ROOM DECK (GROUND BASELINE AT Y = 175) -->
                    <rect x="0" y="145" width="400" height="75" fill="#27272a"/>
                    <rect x="0" y="175" width="400" height="45" fill="#18181b"/>
                    <!-- Red/Yellow Hazard Striping on Baseline Floor Y=175 -->
                    <line x1="0" y1="175" x2="400" y2="175" stroke="#ef4444" stroke-width="3" stroke-dasharray="14,8"/>
                    <line x1="0" y1="178" x2="400" y2="178" stroke="#facc15" stroke-width="1.5" stroke-dasharray="14,8"/>
                    <line x1="100" y1="175" x2="100" y2="220" stroke="#3f3f46" stroke-width="1.5"/>
                    <line x1="200" y1="175" x2="200" y2="220" stroke="#3f3f46" stroke-width="1.5"/>
                    <line x1="300" y1="175" x2="300" y2="220" stroke="#3f3f46" stroke-width="1.5"/>
                `;
                pedestalGraphic = `
                    <g transform="translate(255, 145)">
                        <rect x="0" y="0" width="50" height="30" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                        <line x1="6" y1="15" x2="44" y2="15" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3"/>
                        <ellipse cx="25" cy="0" rx="25" ry="6" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
                    </g>
                `;
            } else {
                // Quantum Energy Lab: Oscilloscope Waveforms, Telemetry Meters, Space Viewport & Resonating Quantum Plasma Tube
                bgGraphic = `
                    <defs>
                        <!-- Gradients for Quantum Lab -->
                        <linearGradient id="qlabWallGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#090d16"/>
                            <stop offset="60%" stop-color="#1e293b"/>
                            <stop offset="100%" stop-color="#0f172a"/>
                        </linearGradient>
                        <linearGradient id="qlabTubeGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stop-color="rgba(56, 189, 248, 0.45)"/>
                            <stop offset="50%" stop-color="rgba(224, 242, 254, 0.2)"/>
                            <stop offset="100%" stop-color="rgba(56, 189, 248, 0.45)"/>
                        </linearGradient>
                        <linearGradient id="qlabCoreBeamGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#38bdf8"/>
                            <stop offset="35%" stop-color="#ffffff"/>
                            <stop offset="65%" stop-color="#00f0ff"/>
                            <stop offset="100%" stop-color="#38bdf8"/>
                        </linearGradient>
                    </defs>

                    <!-- Deep Space Starfield Void outside Window -->
                    <rect width="400" height="220" fill="#030712"/>

                    <!-- 1. SPACE VIEWPORT WINDOW (CENTER: X=130 to X=255, Y=14 to Y=122) -->
                    <!-- Distant Cosmic Nebula Glow -->
                    <ellipse cx="192" cy="65" rx="55" ry="32" fill="rgba(139, 92, 246, 0.15)" transform="rotate(-15 192 65)"/>
                    <ellipse cx="202" cy="55" rx="42" ry="22" fill="rgba(56, 189, 248, 0.12)" transform="rotate(20 202 55)"/>
                    <!-- Twinkling Stars in Viewport -->
                    <circle cx="155" cy="45" r="1.3" fill="#ffffff" opacity="0.9"/>
                    <circle cx="175" cy="35" r="1.5" fill="#bae6fd" opacity="0.85"/>
                    <circle cx="228" cy="42" r="1.0" fill="#ffffff" opacity="0.7"/>
                    <circle cx="212" cy="78" r="1.4" fill="#ffffff" opacity="0.9"/>
                    <circle cx="148" cy="85" r="1.0" fill="#bae6fd" opacity="0.65"/>
                    <circle cx="195" cy="98" r="1.2" fill="#ffffff" opacity="0.8"/>
                    <!-- Distant Orbiting Science Satellite drifting in window -->
                    <g transform="translate(222, 52) rotate(-15) scale(0.7)">
                        <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#d97706" stroke="#f59e0b" stroke-width="1.2"/>
                        <line x1="-8" y1="0" x2="-18" y2="0" stroke="#94a3b8" stroke-width="2"/>
                        <rect x="-32" y="-7" width="14" height="14" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                        <line x1="-25" y1="-7" x2="-25" y2="7" stroke="#38bdf8" stroke-width="0.8"/>
                        <line x1="8" y1="0" x2="18" y2="0" stroke="#94a3b8" stroke-width="2"/>
                        <rect x="18" y="-7" width="14" height="14" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                        <line x1="25" y1="-7" x2="25" y2="7" stroke="#38bdf8" stroke-width="0.8"/>
                        <circle cx="0" cy="0" r="2.5" fill="#38bdf8"/>
                        <circle cx="0" cy="-6" r="1.5" fill="#ef4444" class="story-anim-led-1"/>
                    </g>

                    <!-- Viewport Heavy Reinforced Bevel Framing -->
                    <rect x="130" y="14" width="125" height="110" rx="8" fill="none" stroke="#1e293b" stroke-width="8"/>
                    <polygon points="130,14 148,14 130,32" fill="#1e293b"/>
                    <polygon points="255,14 237,14 255,32" fill="#1e293b"/>
                    <polygon points="130,124 148,124 130,106" fill="#1e293b"/>
                    <polygon points="255,124 237,124 255,106" fill="#1e293b"/>
                    <line x1="135" y1="18" x2="250" y2="18" stroke="#334155" stroke-width="1.5"/>
                    <line x1="135" y1="120" x2="250" y2="120" stroke="#334155" stroke-width="1.5"/>
                    <!-- Glass Sheen Glare Reflection Line -->
                    <line x1="138" y1="22" x2="182" y2="114" stroke="rgba(255,255,255,0.12)" stroke-width="2.5" stroke-linecap="round"/>

                    <!-- 2. HIGH-TECH LAB WALL BULKHEADS (LEFT & RIGHT) -->
                    <!-- Left Server & Hologram Wall (X=0 to X=130) -->
                    <rect x="0" y="14" width="130" height="135" fill="url(#qlabWallGrad)" stroke="#334155" stroke-width="1.5"/>
                    <!-- Vertical Glowing Cyan Laser Conduits -->
                    <line x1="4" y1="14" x2="4" y2="145" stroke="#38bdf8" stroke-width="1.5" opacity="0.7"/>
                    <line x1="126" y1="14" x2="126" y2="145" stroke="#38bdf8" stroke-width="1.5" opacity="0.7"/>

                    <!-- Main Oscilloscope Diagnostic Rack Panel -->
                    <rect x="8" y="22" width="114" height="54" rx="4" fill="#090d16" stroke="#38bdf8" stroke-width="1.5"/>
                    <rect x="14" y="26" width="54" height="9" rx="2" fill="#1e293b"/>
                    <text x="41" y="33" font-size="5" font-weight="900" fill="#38bdf8" text-anchor="middle" letter-spacing="0.5">QUANTUM OSC</text>
                    <!-- Scope Grid Lines -->
                    <line x1="14" y1="52" x2="116" y2="52" stroke="#1e293b" stroke-width="1"/>
                    <line x1="38" y1="38" x2="38" y2="70" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
                    <line x1="64" y1="38" x2="64" y2="70" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
                    <line x1="90" y1="38" x2="90" y2="70" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
                    <!-- Active Multi-Frequency Green & Cyan Sine Waveforms -->
                    <path d="M14 52 Q26 34 38 52 T62 52 T86 52 T110 52 T116 52" stroke="#22c55e" stroke-width="2" fill="none" stroke-linecap="round"/>
                    <path d="M14 52 Q28 68 42 52 T70 52 T98 52 T116 52" stroke="#00f0ff" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.9"/>
                    <!-- Pulse Tracer Dot -->
                    <circle cx="86" cy="52" r="2.8" fill="#00f0ff" filter="drop-shadow(0 0 5px #00f0ff)"/>
                    <circle cx="86" cy="52" r="1.4" fill="#ffffff"/>

                    <!-- Lower Diagnostic Sub-Panel (Telemetry Bars & Server LEDs) -->
                    <rect x="8" y="80" width="114" height="62" rx="4" fill="#090d16" stroke="#334155" stroke-width="1.2"/>
                    <text x="14" y="91" font-size="5.5" font-weight="900" fill="#22c55e">CORE FLUX: 99.8%</text>
                    <text x="70" y="91" font-size="5.5" font-weight="900" fill="#38bdf8">FIELD: STABLE</text>
                    <!-- Multi-Segment Energy Level Meters -->
                    <rect x="14" y="96" width="48" height="5" rx="1.5" fill="#1e293b"/>
                    <rect x="14" y="96" width="44" height="5" rx="1.5" fill="#22c55e"/>
                    <rect x="66" y="96" width="48" height="5" rx="1.5" fill="#1e293b"/>
                    <rect x="66" y="96" width="40" height="5" rx="1.5" fill="#38bdf8"/>
                    <!-- Server LED Indicator Cluster -->
                    <g transform="translate(14, 108)">
                        <circle cx="4" cy="5" r="3" fill="#22c55e" class="story-anim-led-1"/>
                        <circle cx="15" cy="5" r="3" fill="#38bdf8" class="story-anim-led-2"/>
                        <circle cx="26" cy="5" r="3" fill="#facc15" class="story-anim-led-3"/>
                        <circle cx="37" cy="5" r="3" fill="#ef4444" class="story-anim-led-1"/>
                        <!-- Interface Touch Buttons -->
                        <rect x="48" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#38bdf8" stroke-width="0.8"/>
                        <rect x="62" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#22c55e" stroke-width="0.8"/>
                        <rect x="76" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#facc15" stroke-width="0.8"/>
                        <rect x="90" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#475569" stroke-width="0.8"/>
                    </g>
                    <!-- Secondary Status Text -->
                    <text x="14" y="132" font-size="5" font-weight="800" fill="#64748b" letter-spacing="0.5">SYS // QUANTUM-NODE-01 ONLINE</text>

                    <!-- High-Voltage Energy Cable Conduit running down to floor -->
                    <path d="M120 32 L124 32 L124 145" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
                    <path d="M126 48 L128 48 L128 145" stroke="#f59e0b" stroke-width="1.8" fill="none"/>

                    <!-- Right Bulkhead Wall & Vertical Quantum Chamber (X=255 to X=400) -->
                    <rect x="255" y="14" width="145" height="135" fill="url(#qlabWallGrad)" stroke="#334155" stroke-width="1.5"/>
                    <line x1="396" y1="14" x2="396" y2="145" stroke="#38bdf8" stroke-width="1.5" opacity="0.7"/>

                    <!-- Vertical Quantum Plasma Cylinder Chamber (X=328 to X=388) -->
                    <rect x="330" y="20" width="54" height="14" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
                    <rect x="335" y="29" width="44" height="5" rx="1" fill="#1e293b"/>
                    <rect x="330" y="128" width="54" height="17" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
                    <rect x="335" y="125" width="44" height="5" rx="1" fill="#1e293b"/>
                    <!-- Transparent Quartz Tube Body -->
                    <rect x="335" y="34" width="44" height="92" rx="7" fill="url(#qlabTubeGrad)" stroke="#38bdf8" stroke-width="2"/>
                    <!-- Internal Resonating Quantum Core Beam & Pulsing Nodes -->
                    <line x1="357" y1="36" x2="357" y2="124" stroke="url(#qlabCoreBeamGrad)" stroke-width="3.5" filter="drop-shadow(0 0 6px #00f0ff)"/>
                    <line x1="357" y1="36" x2="357" y2="124" stroke="#ffffff" stroke-width="1.2"/>
                    <!-- Magnetic Confinement Rings around Tube -->
                    <ellipse cx="357" cy="54" rx="24" ry="5.5" fill="none" stroke="#60a5fa" stroke-width="2" class="story-anim-reactor-ring-1"/>
                    <ellipse cx="357" cy="80" rx="24" ry="5.5" fill="none" stroke="#38bdf8" stroke-width="2.5" class="story-anim-reactor-ring-2"/>
                    <ellipse cx="357" cy="106" rx="24" ry="5.5" fill="none" stroke="#60a5fa" stroke-width="2" class="story-anim-reactor-ring-1"/>
                    <!-- Central Super-Hot Plasma Core Orb -->
                    <circle cx="357" cy="80" r="9" fill="#38bdf8" class="story-anim-reactor-glow"/>
                    <circle cx="357" cy="80" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)"/>
                    <!-- Micro Plasma Particle Sparks -->
                    <circle cx="349" cy="64" r="2.2" fill="#00f0ff" class="story-anim-led-1"/>
                    <circle cx="365" cy="96" r="2.2" fill="#facc15" class="story-anim-led-2"/>

                    <!-- Right Wall Telemetry Monitor (X=264 to X=320) -->
                    <rect x="264" y="44" width="56" height="46" rx="3" fill="#090d16" stroke="#38bdf8" stroke-width="1.2"/>
                    <text x="292" y="54" font-size="5" font-weight="900" fill="#38bdf8" text-anchor="middle" letter-spacing="0.5">STABILIZER</text>
                    <circle cx="292" cy="72" r="11" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,3"/>
                    <circle cx="292" cy="72" r="5.5" fill="#22c55e" opacity="0.65"/>
                    <text x="292" y="74.5" font-size="5" font-weight="900" fill="#ffffff" text-anchor="middle">100%</text>

                    <!-- Sub-console below monitor -->
                    <rect x="264" y="96" width="56" height="28" rx="3" fill="#090d16" stroke="#334155" stroke-width="1"/>
                    <text x="270" y="106" font-size="4.5" font-weight="bold" fill="#38bdf8">PRESSURE: NORM</text>
                    <rect x="270" y="112" width="44" height="4" rx="1" fill="#1e293b"/>
                    <rect x="270" y="112" width="36" height="4" rx="1" fill="#22c55e"/>

                    <!-- 3. TOP ARCHITECTURAL LAB CEILING BULKHEAD & FLOODLIGHTS -->
                    <rect x="0" y="0" width="400" height="15" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                    <line x1="0" y1="15" x2="400" y2="15" stroke="#38bdf8" stroke-width="1" opacity="0.75"/>
                    <!-- Recessed Lab Ceiling Floodlights with Soft Downward Glow -->
                    <rect x="38" y="4" width="56" height="4" rx="2" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>
                    <rect x="172" y="4" width="56" height="4" rx="2" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)"/>
                    <rect x="306" y="4" width="56" height="4" rx="2" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>

                    <!-- 4. SOLID TECH LAB FLOOR (GROUND BASELINE AT Y=175) -->
                    <rect x="0" y="145" width="400" height="75" fill="#1e293b"/>
                    <rect x="0" y="175" width="400" height="45" fill="#0f172a"/>
                    <!-- Floor Neon Power Conduits leading from Racks to Pedestal -->
                    <line x1="0" y1="160" x2="255" y2="160" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="8,4" class="story-anim-neon-line"/>
                    <line x1="310" y1="160" x2="400" y2="160" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="8,4" class="story-anim-neon-line"/>
                    <!-- Yellow/Black Hazard Warning Safety Stripes at Y=175 baseline -->
                    <line x1="0" y1="175" x2="400" y2="175" stroke="#facc15" stroke-width="3.5" stroke-dasharray="14,10"/>
                    <line x1="100" y1="175" x2="100" y2="220" stroke="#334155" stroke-width="1.5"/>
                    <line x1="200" y1="175" x2="200" y2="220" stroke="#334155" stroke-width="1.5"/>
                    <line x1="300" y1="175" x2="300" y2="220" stroke="#334155" stroke-width="1.5"/>
                `;
                pedestalGraphic = `
                    <g transform="translate(255, 145)">
                        <rect x="0" y="0" width="50" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                        <line x1="6" y1="15" x2="44" y2="15" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
                        <ellipse cx="25" cy="0" rx="25" ry="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                        <ellipse cx="25" cy="0" rx="18" ry="4" fill="#38bdf8" opacity="0.6"/>
                    </g>
                `;
            }
        }

        // ==========================================
        // 2. CONTACT SHADOWS ON FLOOR (NO FLOATING)
        // ==========================================
        const heroShadow = `<g class="story-anim-shadow-6steps"><ellipse cx="${charX}" cy="${groundY + 3}" rx="32" ry="7" fill="rgba(0,0,0,0.3)"/></g>`;
        // Butterfly flies in sky, so NO ground shadow for butterfly!
        let propShadow = '';
        if (propId !== 'butterfly') {
            const propShadowY = pedestalGraphic ? 146 : (groundY + 3);
            propShadow = `<ellipse cx="${propX}" cy="${propShadowY}" rx="26" ry="7" fill="rgba(0,0,0,0.3)"/>`;
        }

        // ==========================================
        // 3. MAIN HERO (LARGE, VIBRANT, SOLID ON GROUND)
        // ==========================================
        if (universeId === 'beginner') {
            if (charId === 'leo') {
                // Leo: 105px tall friendly boy in blue hoodie walking 6 steps forward towards prop, red sneakers firmly on ground
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 105})">
                            <!-- Left Arm on Hip / Side -->
                            <path d="M-18 42 L-28 58 L-22 62 L-14 48 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                            <circle cx="-25" cy="62" r="5" fill="#fed7aa"/>
                            <!-- Hair & Head with gentle living tilt -->
                            <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                                <circle cx="0" cy="12" r="22" fill="#78350f"/>
                                <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
                                <!-- Big Friendly Eyes with Twinkle Highlights -->
                                <circle cx="-6" cy="18" r="3.5" fill="#1e293b"/><circle cx="-5" cy="16" r="1.3" fill="#fff"/>
                                <circle cx="6" cy="18" r="3.5" fill="#1e293b"/><circle cx="7" cy="16" r="1.3" fill="#fff"/>
                                <!-- Rosy Cheeks -->
                                <circle cx="-11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                                <circle cx="11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                                <!-- Warm, Happy Open Smile in ALL Scenes/Panels -->
                                <path d="M-6 24 Q0 33 6 24" stroke="#9a3412" stroke-width="2.5" fill="#450a0a" stroke-linecap="round"/>
                            </g>
                            <!-- Blue Hoodie Body -->
                            <path d="M-18 38 L18 38 L15 75 L-15 75 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.5"/>
                            <polygon points="0,44 -6,52 6,52" fill="#facc15"/>
                            <!-- Right Arm: Walking & Waving -->
                            <g class="story-anim-arm-6steps" style="transform-origin: 18px 45px;">
                                <path d="M18 42 L32 48 L28 54 L15 48 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="33" cy="50" r="5" fill="#fed7aa"/>
                            </g>
                            <!-- Left Leg & Red High-Top Sneaker (Steps 1, 3, 5 forward) -->
                            <g class="story-anim-step-leg-left">
                                <rect x="-14" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                                <rect x="-15" y="90" width="14" height="4" rx="1" fill="#334155"/>
                                <!-- High-Top Red Sneaker resting firmly on ground -->
                                <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.2"/>
                                <!-- White Toe Cap -->
                                <path d="M2 95 Q7 95 7 98 L7 101 L2 101 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
                                <!-- White Rubber Sole firmly touching Y=175 -->
                                <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                                <!-- White Laces -->
                                <line x1="-7" y1="95" x2="-2" y2="95" stroke="#ffffff" stroke-width="1.5"/>
                                <line x1="-6" y1="98" x2="-1" y2="98" stroke="#ffffff" stroke-width="1.5"/>
                            </g>
                            <!-- Right Leg & Red High-Top Sneaker (Steps 2, 4, 6 forward) -->
                            <g class="story-anim-step-leg-right">
                                <rect x="2" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                                <rect x="1" y="90" width="14" height="4" rx="1" fill="#334155"/>
                                <!-- High-Top Red Sneaker resting firmly on ground -->
                                <path d="M2 93 L19 93 Q23 93 23 97 L23 101 L2 101 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1.2"/>
                                <!-- White Toe Cap -->
                                <path d="M18 95 Q23 95 23 98 L23 101 L18 101 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
                                <!-- White Rubber Sole firmly touching Y=175 -->
                                <rect x="1" y="101" width="23" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                                <!-- White Laces -->
                                <line x1="9" y1="95" x2="14" y2="95" stroke="#ffffff" stroke-width="1.5"/>
                                <line x1="10" y1="98" x2="15" y2="98" stroke="#ffffff" stroke-width="1.5"/>
                            </g>
                        </g>
                    </g>
                `;
            } else if (charId === 'cleo') {
                // Cleo the Kitten: White fluffy kitten walking 6 steps forward towards prop, paws firmly on ground
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 72.5})">
                            <ellipse cx="0" cy="40" rx="26" ry="20" fill="#ffffff" stroke="#94a3b8" stroke-width="2.5"/>
                            <g class="story-anim-cat-head" style="transform-origin: 16px 22px;">
                                <circle cx="16" cy="22" r="18" fill="#ffffff" stroke="#94a3b8" stroke-width="2.5"/>
                                <!-- Twitching Cat Ears -->
                                <g class="story-anim-cat-ears" style="transform-origin: 16px 14px;">
                                    <polygon points="6,6 14,18 2,18" fill="#f472b6" stroke="#94a3b8" stroke-width="1.5"/>
                                    <polygon points="18,6 26,18 14,18" fill="#f472b6" stroke="#94a3b8" stroke-width="1.5"/>
                                </g>
                                <circle cx="18" cy="22" r="3.5" fill="#10b981"/><circle cx="19" cy="20" r="1.2" fill="#fff"/>
                                <circle cx="23" cy="26" r="2" fill="#f472b6"/>
                                <!-- Twitching Whiskers -->
                                <g class="story-anim-cat-whiskers">
                                    <line x1="24" y1="26" x2="36" y2="22" stroke="#64748b" stroke-width="1.5"/>
                                    <line x1="24" y1="28" x2="36" y2="30" stroke="#64748b" stroke-width="1.5"/>
                                </g>
                            </g>
                            <!-- Wagging Tail -->
                            <g class="story-anim-rover-tail" style="transform-origin: -22px 38px;">
                                <path d="M-22 38 Q-38 20 -28 10" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none"/>
                                <path d="M-22 38 Q-38 20 -28 10" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" fill="none"/>
                            </g>
                            <!-- Hind Leg & White Paw with Pink Toe Pads (Steps 1, 3, 5 forward) -->
                            <g class="story-anim-step-leg-left">
                                <path d="M-14 48 L-16 64 L-6 64" stroke="#e2e8f0" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                <ellipse cx="-8" cy="68" rx="9" ry="4.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
                                <circle cx="-12" cy="68" r="1.5" fill="#f472b6"/>
                                <circle cx="-8" cy="68" r="1.5" fill="#f472b6"/>
                                <circle cx="-4" cy="68" r="1.5" fill="#f472b6"/>
                            </g>
                            <!-- Foreleg & White Paw with Pink Toe Pads (Steps 2, 4, 6 forward) -->
                            <g class="story-anim-step-leg-right">
                                <path d="M12 48 L14 64 L22 64" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                <ellipse cx="20" cy="68" rx="9" ry="4.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
                                <circle cx="16" cy="68" r="1.5" fill="#f472b6"/>
                                <circle cx="20" cy="68" r="1.5" fill="#f472b6"/>
                                <circle cx="24" cy="68" r="1.5" fill="#f472b6"/>
                            </g>
                        </g>
                    </g>
                `;
            } else if (charId === 'sam') {
                // Ranger Sam: Green uniform, broad-brim hat, sturdy hiking boots walking 6 steps forward towards prop
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 105})">
                            <!-- Left Arm: Hand on Belt -->
                            <path d="M-20 46 L-30 62 L-24 66 L-16 52 Z" fill="#15803d" stroke="#166534" stroke-width="2"/>
                            <circle cx="-27" cy="65" r="5" fill="#fed7aa"/>
                            <!-- Head & Hat with gentle life -->
                            <g class="story-anim-head-bob" style="transform-origin: 0px 26px;">
                                <!-- Hat -->
                                <ellipse cx="0" cy="10" rx="30" ry="7" fill="#57534e"/>
                                <path d="M-14 10 L-10 -8 L10 -8 L14 10 Z" fill="#78716c" stroke="#44403c" stroke-width="1.5"/>
                                <rect x="-12" y="5" width="24" height="4" fill="#292524"/>
                                <!-- Head -->
                                <circle cx="0" cy="26" r="18" fill="#fed7aa" stroke="#78716c" stroke-width="2"/>
                                <circle cx="-6" cy="24" r="2.5" fill="#1e293b"/><circle cx="6" cy="24" r="2.5" fill="#1e293b"/>
                                <!-- Friendly Mustache & Warm Smile -->
                                <path d="M-6 31 Q0 34 6 31" stroke="#451a03" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                                <path d="M-7 30 Q-3 33 0 31 Q3 33 7 30" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </g>
                            <!-- Green Uniform Jacket -->
                            <path d="M-20 45 L20 45 L16 80 L-16 80 Z" fill="#15803d" stroke="#166534" stroke-width="2.5"/>
                            <polygon points="8,54 9.5,57 13,57 10,59 11.5,63 8,61 4.5,63 6,59 3,57 6.5,57" fill="#facc15"/>
                            <rect x="-16" y="68" width="32" height="6" fill="#451a03"/>
                            <rect x="-3" y="67" width="6" height="8" rx="1" fill="#facc15"/>
                            <!-- Right Arm: Walking & Waving -->
                            <g class="story-anim-arm-6steps" style="transform-origin: 20px 48px;">
                                <path d="M20 46 L32 52 L28 58 L16 52 Z" fill="#15803d" stroke="#166534" stroke-width="2"/>
                                <circle cx="34" cy="54" r="5" fill="#fed7aa"/>
                            </g>
                            <!-- Left Leg & Sturdy Ranger Boot (Steps 1, 3, 5 forward) -->
                            <g class="story-anim-step-leg-left">
                                <rect x="-14" y="80" width="12" height="15" rx="2" fill="#57534e"/>
                                <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
                                <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#292524"/>
                            </g>
                            <!-- Right Leg & Sturdy Ranger Boot (Steps 2, 4, 6 forward) -->
                            <g class="story-anim-step-leg-right">
                                <rect x="2" y="80" width="12" height="15" rx="2" fill="#57534e"/>
                                <path d="M2 93 L19 93 Q23 93 23 97 L23 101 L2 101 Z" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
                                <rect x="1" y="101" width="23" height="4" rx="1.5" fill="#292524"/>
                            </g>
                        </g>
                    </g>
                `;
            } else {
                // Max the Puppy (Default): Big playful golden puppy walking 6 steps forward towards prop, paws firmly on ground
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 69.5})">
                            <ellipse cx="0" cy="35" rx="32" ry="22" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
                            <!-- Red Collar -->
                            <rect x="18" y="24" width="7" height="22" rx="2" fill="#ef4444"/>
                            <circle cx="21" cy="48" r="4.5" fill="#facc15" stroke="#b45309" stroke-width="1.5"/>
                            <!-- Head with Wiggling Ear & Panting Tongue -->
                            <g class="story-anim-puppy-head" style="transform-origin: 20px 30px;">
                                <circle cx="28" cy="24" r="19" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
                                <!-- Floppy Ear that wiggles -->
                                <g class="story-anim-puppy-ear" style="transform-origin: 20px 14px;">
                                    <ellipse cx="20" cy="22" rx="7" ry="14" fill="#b45309"/>
                                </g>
                                <circle cx="32" cy="20" r="3.5" fill="#1e293b"/><circle cx="33" cy="18" r="1.2" fill="#fff"/>
                                <ellipse cx="42" cy="24" rx="4" ry="3" fill="#1e293b"/>
                                <!-- Happy Panting Tongue -->
                                <g class="story-anim-puppy-tongue" style="transform-origin: 38px 28px;">
                                    <ellipse cx="38" cy="32" rx="3.5" ry="5.5" fill="#f43f5e"/>
                                </g>
                            </g>
                            <!-- Fast Wagging Tail -->
                            <g class="story-anim-rover-tail" style="transform-origin: -28px 35px;">
                                <path d="M-28 35 Q-48 18 -40 5" stroke="#f59e0b" stroke-width="8" stroke-linecap="round" fill="none"/>
                                <path d="M-28 35 Q-48 18 -40 5" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                            </g>
                            <!-- Hind Paws (Steps 1, 3, 5 forward) -->
                            <g class="story-anim-step-leg-left">
                                <rect x="-18" y="48" width="9" height="15" rx="3" fill="#d97706"/>
                                <ellipse cx="-12" cy="65" rx="9" ry="4.5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                                <circle cx="-16" cy="65" r="1.5" fill="#b45309"/>
                                <circle cx="-12" cy="65" r="1.5" fill="#b45309"/>
                                <circle cx="-8" cy="65" r="1.5" fill="#b45309"/>
                            </g>
                            <!-- Front Paws (Steps 2, 4, 6 forward) -->
                            <g class="story-anim-step-leg-right">
                                <rect x="14" y="48" width="9" height="15" rx="3" fill="#f59e0b"/>
                                <ellipse cx="20" cy="65" rx="9" ry="4.5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                                <circle cx="16" cy="65" r="1.5" fill="#b45309"/>
                                <circle cx="20" cy="65" r="1.5" fill="#b45309"/>
                                <circle cx="24" cy="65" r="1.5" fill="#b45309"/>
                            </g>
                        </g>
                    </g>
                `;
            }
        } else if (universeId === 'advanced') {
            if (charId === 'turtle') {
                // Shelly the Sea Turtle (Hero) - actively swimming & gliding through ocean currents
                charGraphic = `
                    <g transform="translate(${charX}, ${groundY - 45})">
                        <g class="story-anim-turtle-swim">
                            <ellipse cx="0" cy="0" rx="38" ry="24" fill="#15803d" stroke="#166534" stroke-width="3"/>
                            <circle cx="0" cy="0" r="15" fill="none" stroke="#86efac" stroke-width="2.5"/>
                            <circle cx="42" cy="-4" r="13" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>
                            <circle cx="46" cy="-8" r="3" fill="#052e16"/><circle cx="47" cy="-9" r="1.2" fill="#fff"/>
                            <!-- Front Flippers Paddling with synchronized stroke -->
                            <ellipse cx="14" cy="-26" rx="13" ry="22" fill="#22c55e" stroke="#15803d" stroke-width="2" class="story-anim-turtle-paddle-top"/>
                            <ellipse cx="14" cy="26" rx="13" ry="22" fill="#22c55e" stroke="#15803d" stroke-width="2" class="story-anim-turtle-paddle-bottom"/>
                        </g>
                    </g>
                `;
            } else if (charId === 'dr_tide') {
                // Dr. Tide: Marine ecologist with diving hood & underwater tablet with both arms and diver float
                charGraphic = `
                    <g transform="translate(${charX}, ${groundY - 95})">
                        <g class="story-anim-diver-float">
                            <!-- Left Arm -->
                            <path d="M-18 44 L-28 60 L-22 64 L-14 50 Z" fill="#115e59" stroke="#042f2e" stroke-width="2"/>
                            <circle cx="-25" cy="64" r="4.5" fill="#fed7aa"/>
                            <circle cx="0" cy="18" r="22" fill="#0f766e" stroke="#042f2e" stroke-width="2"/>
                            <circle cx="4" cy="20" r="17" fill="#fed7aa"/>
                            <rect x="-6" y="16" width="22" height="9" rx="3" fill="#06b6d4" stroke="#0891b2" stroke-width="2"/>
                            <path d="M-2 26 Q4 36 10 26 Z" fill="#94a3b8"/>
                            <path d="M-18 42 L18 42 L15 78 L-15 78 Z" fill="#115e59" stroke="#042f2e" stroke-width="2.5"/>
                            <!-- Right Arm holding telemetry tablet -->
                            <path d="M16 44 L26 52 L22 58 L14 50 Z" fill="#115e59" stroke="#042f2e" stroke-width="2"/>
                            <rect x="20" y="48" width="20" height="26" rx="3" fill="#0f172a" stroke="#22d3ee" stroke-width="2" class="story-anim-datapad-screen"/>
                            <line x1="23" y1="58" x2="37" y2="58" stroke="#38bdf8" stroke-width="2"/>
                            <rect x="-14" y="78" width="11" height="17" rx="3" fill="#042f2e"/>
                            <rect x="3" y="78" width="11" height="17" rx="3" fill="#042f2e"/>
                        </g>
                    </g>
                `;
            } else if (charId === 'kai') {
                // Kai: Robotics Diver with underwater torch with both arms and diver float
                charGraphic = `
                    <g transform="translate(${charX}, ${groundY - 95})">
                        <g class="story-anim-diver-float">
                            <!-- Left Arm -->
                            <path d="M-18 44 L-28 60 L-22 64 L-14 50 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
                            <circle cx="-25" cy="64" r="4.5" fill="#fed7aa"/>
                            <circle cx="0" cy="18" r="20" fill="#1e293b"/>
                            <circle cx="0" cy="20" r="17" fill="#fed7aa"/>
                            <rect x="-8" y="16" width="22" height="10" rx="3" fill="#10b981" stroke="#059669" stroke-width="2"/>
                            <path d="M-18 42 L18 42 L15 78 L-15 78 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
                            <!-- Right Arm with Torch Beam aimed toward prop at X=280 -->
                            <g transform="translate(18, 50)">
                                <rect x="0" y="0" width="16" height="8" rx="2" fill="#eab308"/>
                                <polygon points="16,0 150,-20 150,40 16,8" fill="rgba(254, 240, 138, 0.45)" class="story-anim-torch-beam"/>
                            </g>
                            <rect x="-14" y="78" width="11" height="17" rx="3" fill="#0284c7"/>
                            <rect x="3" y="78" width="11" height="17" rx="3" fill="#0284c7"/>
                        </g>
                    </g>
                `;
            } else {
                // Maya the Oceanographer (Default) with underwater diver float & rising bubbles
                charGraphic = `
                    <g transform="translate(${charX}, ${groundY - 95})">
                        <g class="story-anim-diver-float">
                            <!-- Scuba Tank on Back with Rising Bubbles -->
                            <rect x="-26" y="32" width="10" height="38" rx="4" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
                            <g class="story-anim-bubble-1">
                                <circle cx="-21" cy="24" r="3" fill="#38bdf8" opacity="0.85"/>
                                <circle cx="-24" cy="14" r="2" fill="#e0f2fe" opacity="0.6"/>
                            </g>
                            <!-- Left Arm -->
                            <path d="M-18 44 L-26 58 L-20 62 L-14 50 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
                            <circle cx="-23" cy="62" r="4.5" fill="#fed7aa"/>
                            <!-- Head & Mask with Visor Gleam and Hair Bounce -->
                            <circle cx="-12" cy="14" r="10" fill="#78350f" class="story-anim-hair-bounce"/>
                            <circle cx="0" cy="18" r="19" fill="#fbcfe8" stroke="#78350f" stroke-width="2"/>
                            <rect x="-8" y="14" width="24" height="11" rx="4" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
                            <circle cx="4" cy="18" r="2.5" fill="#fff" class="story-anim-visor-gleam"/>
                            <!-- Suit -->
                            <path d="M-18 42 L18 42 L15 78 L-15 78 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2.5"/>
                            <circle cx="0" cy="54" r="4.5" fill="#0284c7"/>
                            <!-- Right Arm with Wave -->
                            <g class="story-anim-arm-wave-sam" style="transform-origin: 16px 46px;">
                                <path d="M16 44 L26 54 L20 58 L12 50 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
                                <circle cx="24" cy="58" r="4.5" fill="#fed7aa"/>
                            </g>
                            <rect x="-14" y="78" width="11" height="17" rx="3" fill="#1e293b"/>
                            <rect x="3" y="78" width="11" height="17" rx="3" fill="#1e293b"/>
                        </g>
                    </g>
                `;
            }
        } else {
            // Intermediate (Space & Quantum Lab)
            if (charId === 'leo') {
                // Cadet Leo: Flight suit with headset & magnetic boots walking 6 steps forward towards prop
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 105})">
                            <g>
                                <!-- Left Arm -->
                                <path d="M-18 42 L-28 58 L-22 62 L-14 48 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                                <circle cx="-25" cy="62" r="4.5" fill="#fed7aa"/>
                                <!-- Head with Headset & Living Bob & Expressive Cadet Face -->
                                <g class="story-anim-head-bob" style="transform-origin: 0px 18px;">
                                    <!-- Chestnut Cadet Hair -->
                                    <circle cx="0" cy="12" r="22" fill="#78350f"/>
                                    <!-- Friendly Face -->
                                    <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
                                    <!-- Spiky Adventurous Bangs -->
                                    <path d="M-18 9 Q-12 17 -6 9 Q0 17 6 9 Q12 17 18 9 Q14 1 0 0 Q-14 1 -18 9 Z" fill="#92400e"/>
                                    <!-- Confident Cadet Eyebrows -->
                                    <path d="M-10 11 Q-6 9 -2 11" stroke="#78350f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                                    <path d="M2 11 Q6 9 10 11" stroke="#78350f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                                    <!-- Big Friendly Eyes with Twinkle Highlights -->
                                    <circle cx="-6" cy="17.5" r="3.5" fill="#1e293b"/><circle cx="-5" cy="16" r="1.3" fill="#ffffff"/>
                                    <circle cx="6" cy="17.5" r="3.5" fill="#1e293b"/><circle cx="7" cy="16" r="1.3" fill="#ffffff"/>
                                    <!-- Rosy Cheeks -->
                                    <circle cx="-11" cy="23.5" r="3" fill="#fca5a5" opacity="0.6"/>
                                    <circle cx="11" cy="23.5" r="3" fill="#fca5a5" opacity="0.6"/>
                                    <!-- Warm, Happy Open Smile -->
                                    <path d="M-6 24 Q0 33 6 24" stroke="#9a3412" stroke-width="2.5" fill="#450a0a" stroke-linecap="round"/>
                                    <!-- High-Tech Cadet Headset -->
                                    <path d="M-19 16 Q-19 1 0 1 Q19 1 19 16" stroke="#38bdf8" stroke-width="3" fill="none"/>
                                    <!-- Left Earpiece Cushion -->
                                    <rect x="-21" y="11" width="5" height="12" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                                    <!-- Right Comms Unit -->
                                    <circle cx="18" cy="17" r="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                                    <circle cx="18" cy="17" r="2.5" fill="#38bdf8"/>
                                    <!-- Mic Boom with glowing green live audio LED -->
                                    <path d="M18 19 Q12 28 4 27" stroke="#64748b" stroke-width="2" fill="none" stroke-linecap="round"/>
                                    <circle cx="3" cy="27" r="2" fill="#22c55e" stroke="#15803d" stroke-width="0.8"/>
                                </g>
                                <path d="M-18 40 L18 40 L15 75 L-15 75 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2.5"/>
                                <path d="M-8 40 L0 54 L8 40" stroke="#facc15" stroke-width="2.5" fill="none"/>
                                <!-- Right Arm: Wrist Communicator projecting living hologram toward prop -->
                                <path d="M16 42 L26 50 L22 56 L14 48 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                                <rect x="22" y="48" width="10" height="7" rx="2" fill="#38bdf8"/>
                                <ellipse cx="38" cy="44" rx="14" ry="6" fill="rgba(56,189,248,0.5)" class="story-anim-holo-pulse"/>
                                <!-- Left Leg & Magnetic Flight Boot (Steps 1, 3, 5 forward) -->
                                <g class="story-anim-step-leg-left">
                                    <rect x="-14" y="75" width="12" height="18" rx="2" fill="#0f172a"/>
                                    <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="1.2"/>
                                    <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#38bdf8"/>
                                </g>
                                <!-- Right Leg & Magnetic Flight Boot (Steps 2, 4, 6 forward) -->
                                <g class="story-anim-step-leg-right">
                                    <rect x="2" y="75" width="12" height="18" rx="2" fill="#0f172a"/>
                                    <path d="M2 93 L19 93 Q23 93 23 97 L23 101 L2 101 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.2"/>
                                    <rect x="1" y="101" width="23" height="4" rx="1.5" fill="#38bdf8"/>
                                </g>
                            </g>
                        </g>
                    </g>
                `;
            } else if (charId === 'rover') {
                // Rover the Cyber Dog: Chrome robotic chassis trotting 6 steps forward towards prop
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 70})">
                            <g>
                                <rect x="-24" y="15" width="48" height="30" rx="8" fill="#475569" stroke="#94a3b8" stroke-width="2.5"/>
                                <circle cx="-8" cy="30" r="6" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                                <circle cx="10" cy="30" r="6" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                                <rect x="18" y="6" width="24" height="24" rx="6" fill="#64748b" stroke="#cbd5e1" stroke-width="2.5"/>
                                <rect x="24" y="12" width="18" height="8" rx="3" fill="#06b6d4" stroke="#38bdf8" stroke-width="1.5" class="story-anim-visor-gleam"/>
                                <line x1="28" y1="6" x2="28" y2="-8" stroke="#94a3b8" stroke-width="3"/>
                                <circle cx="28" cy="-10" r="4.5" fill="#ef4444" class="story-anim-antenna-pulse"/>
                                <g class="story-anim-rover-tail" style="transform-origin: -24px 20px;">
                                    <line x1="-24" y1="20" x2="-38" y2="4" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
                                    <circle cx="-38" cy="4" r="5" fill="#38bdf8"/>
                                </g>
                                <!-- Rear Legs (Steps 1, 3, 5) -->
                                <g class="story-anim-step-leg-left">
                                    <rect x="-20" y="45" width="8" height="25" rx="3" fill="#334155"/>
                                    <rect x="-6" y="45" width="8" height="25" rx="3" fill="#64748b"/>
                                </g>
                                <!-- Front Legs (Steps 2, 4, 6) -->
                                <g class="story-anim-step-leg-right">
                                    <rect x="6" y="45" width="8" height="25" rx="3" fill="#334155"/>
                                    <rect x="18" y="45" width="8" height="25" rx="3" fill="#64748b"/>
                                </g>
                            </g>
                        </g>
                    </g>
                `;
            } else if (charId === 'vance') {
                // Commander Vance: Astronaut EVA suit walking 6 steps forward towards prop, boots firmly on ground
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 105})">
                            <g>
                                <rect x="-26" y="30" width="12" height="42" rx="4" fill="#ea580c"/>
                                <!-- Left Arm -->
                                <path d="M-22 46 L-32 64 L-26 68 L-18 52 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                                <circle cx="-29" cy="68" r="6" fill="#ea580c"/>
                                <!-- Helmet & Living Head with Commander Vance Face Inside Visor -->
                                <g class="story-anim-head-bob" style="transform-origin: 0px 18px;">
                                    <!-- White EVA Astronaut Helmet Shell -->
                                    <circle cx="0" cy="18" r="24" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5"/>
                                    <!-- Helmet Interior Shadow Aperture -->
                                    <ellipse cx="0" cy="19" rx="16.5" ry="13.5" fill="#0f172a"/>
                                    <!-- Astronaut Communications Cap (Snoopy Cap) -->
                                    <path d="M-14 18 Q-14 7 0 7 Q14 7 14 18 Q14 28 0 29 Q-14 28 -14 18 Z" fill="#334155"/>
                                    <rect x="-15" y="15" width="3" height="7" rx="1" fill="#f8fafc"/>
                                    <rect x="12" y="15" width="3" height="7" rx="1" fill="#f8fafc"/>
                                    <!-- Commander Vance Face -->
                                    <circle cx="0" cy="19" r="11" fill="#fed7aa"/>
                                    <!-- Commander Hair Line -->
                                    <path d="M-8 12 Q-4 15 0 12 Q4 15 8 12 Q4 9 0 9 Q-4 9 -8 12 Z" fill="#451a03"/>
                                    <!-- Confident Commander Eyebrows -->
                                    <path d="M-8 13.5 Q-5 12 -2 13.5" stroke="#451a03" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                                    <path d="M2 13.5 Q5 12 8 13.5" stroke="#451a03" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                                    <!-- Courageous, Friendly Eyes with Twinkle Highlights -->
                                    <circle cx="-4.5" cy="17" r="2.3" fill="#1e293b"/>
                                    <circle cx="-3.8" cy="16" r="0.9" fill="#ffffff"/>
                                    <circle cx="4.5" cy="17" r="2.3" fill="#1e293b"/>
                                    <circle cx="5.2" cy="16" r="0.9" fill="#ffffff"/>
                                    <!-- Rosy Cheeks -->
                                    <circle cx="-7.5" cy="21.5" r="2" fill="#fca5a5" opacity="0.6"/>
                                    <circle cx="7.5" cy="21.5" r="2" fill="#fca5a5" opacity="0.6"/>
                                    <!-- Warm, Confident Open Smile -->
                                    <path d="M-4.5 22.5 Q0 27.5 4.5 22.5" stroke="#9a3412" stroke-width="1.8" fill="#450a0a" stroke-linecap="round"/>
                                    <!-- Comms Mic Boom with Live Audio Green LED -->
                                    <path d="M-13 21 Q-8 27 -2 25" stroke="#64748b" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                                    <circle cx="-2" cy="25" r="1.3" fill="#22c55e" stroke="#15803d" stroke-width="0.6"/>
                                    <!-- Transparent Golden Astronaut Helmet Visor Bubble -->
                                    <path d="M-16 13 Q0 5 16 13 Q19 28 0 29 Q-19 28 -16 13 Z" fill="rgba(250, 204, 21, 0.2)" stroke="#eab308" stroke-width="2" class="story-anim-visor-gleam"/>
                                    <!-- Visor Glass Specular Glint & Highlights -->
                                    <path d="M-13 12 Q-4 7 8 9" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.75" stroke-linecap="round"/>
                                    <path d="M-15 16 Q-16 22 -12 26" stroke="#ffffff" stroke-width="1.3" fill="none" opacity="0.5" stroke-linecap="round"/>
                                    <circle cx="11" cy="25" r="1.8" fill="#ffffff" opacity="0.6"/>
                                </g>
                                <path d="M-20 44 L20 44 L16 80 L-16 80 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2.5"/>
                                <rect x="-20" y="56" width="40" height="6" fill="#ea580c"/>
                                <rect x="-10" y="48" width="20" height="15" rx="3" fill="#1e293b"/>
                                <circle cx="-4" cy="55" r="2.5" fill="#22c55e" class="story-anim-led-1"/>
                                <circle cx="4" cy="55" r="2.5" fill="#ef4444" class="story-anim-led-3"/>
                                <!-- Right Arm with Wave -->
                                <g class="story-anim-arm-6steps" style="transform-origin: 20px 48px;">
                                    <path d="M20 46 L30 64 L24 68 L16 52 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                                    <circle cx="27" cy="68" r="6" fill="#ea580c"/>
                                </g>
                                <!-- Left Moon Boot (Steps 1, 3, 5 forward firmly touching Y=175) -->
                                <g class="story-anim-step-leg-left">
                                    <rect x="-16" y="80" width="13" height="14" rx="2" fill="#334155"/>
                                    <path d="M-16 93 L4 93 Q8 93 8 97 L8 101 L-16 101 Z" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                                    <rect x="-17" y="101" width="26" height="4" rx="1.5" fill="#0f172a"/>
                                </g>
                                <!-- Right Moon Boot (Steps 2, 4, 6 forward firmly touching Y=175) -->
                                <g class="story-anim-step-leg-right">
                                    <rect x="3" y="80" width="13" height="14" rx="2" fill="#334155"/>
                                    <path d="M3 93 L23 93 Q27 93 27 97 L27 101 L3 101 Z" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                                    <rect x="2" y="101" width="26" height="4" rx="1.5" fill="#0f172a"/>
                                </g>
                            </g>
                        </g>
                    </g>
                `;
            } else {
                // Dr. Eve: Chief scientist walking 6 steps forward towards prop, boots firmly on ground
                charGraphic = `
                    <g class="story-anim-walk-6steps">
                        <g transform="translate(${charX}, ${groundY - 100})">
                            <g>
                                <!-- Left Arm -->
                                <path d="M-20 42 L-28 58 L-22 62 L-16 48 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                                <circle cx="-25" cy="62" r="4.5" fill="#fed7aa"/>
                                <!-- Head with gentle life tilt & expressive scientist face -->
                                <g class="story-anim-head-bob" style="transform-origin: 0px 18px;">
                                    <!-- Scientist Hair (Auburn brown bob with bangs) -->
                                    <circle cx="0" cy="13" r="23" fill="#d97706"/><circle cx="0" cy="13" r="21.5" fill="#facc15"/>
                                    <path d="M-21 16 Q-25 32 -16 36 L-15 24 Z" fill="#d97706"/><path d="M-20 17 Q-23 31 -16 34 L-15 24 Z" fill="#facc15"/>
                                    <path d="M21 16 Q25 32 16 36 L15 24 Z" fill="#d97706"/><path d="M20 17 Q23 31 16 34 L15 24 Z" fill="#facc15"/>
                                    <!-- Friendly Face -->
                                    <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#d97706" stroke-width="1.8"/>
                                    <!-- Bangs -->
                                    <path d="M-18 10 Q-8 18 0 8 Q8 18 18 10 Q14 2 0 1 Q-14 2 -18 10 Z" fill="#d97706"/><path d="M-17 9 Q-8 16 0 7 Q8 16 17 9 Q13 3 0 2 Q-13 3 -17 9 Z" fill="#facc15"/><path d="M-12 5 Q-6 11 0 5 Q6 11 12 5 Q9 2 0 1.5 Q-9 2 -12 5 Z" fill="#fef08a"/>
                                    <!-- Intelligent, Friendly Eyes (Visible through goggles) -->
                                    <circle cx="-7" cy="18" r="3.2" fill="#1e293b"/>
                                    <circle cx="-6" cy="16.5" r="1.3" fill="#ffffff"/>
                                    <circle cx="7" cy="18" r="3.2" fill="#1e293b"/>
                                    <circle cx="8" cy="16.5" r="1.3" fill="#ffffff"/>
                                    <!-- Transparent Cyan Lab Goggles with blue frame & glass glint -->
                                    <path d="M-19 18 Q0 12 19 18" stroke="#0284c7" stroke-width="2.5" fill="none"/>
                                    <rect x="-14" y="12" width="12" height="11" rx="3.5" fill="rgba(56,189,248,0.28)" stroke="#0284c7" stroke-width="2"/>
                                    <rect x="2" y="12" width="12" height="11" rx="3.5" fill="rgba(56,189,248,0.28)" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="-2" y1="17" x2="2" y2="17" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="-11" y1="14" x2="-6" y2="19" stroke="#ffffff" stroke-width="1.4" opacity="0.8" stroke-linecap="round"/>
                                    <line x1="5" y1="14" x2="10" y2="19" stroke="#ffffff" stroke-width="1.4" opacity="0.8" stroke-linecap="round"/>
                                    <!-- Eyebrows -->
                                    <path d="M-12 10 Q-8 8 -4 10" stroke="#b45309" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                                    <path d="M4 10 Q8 8 12 10" stroke="#b45309" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                                    <!-- Rosy Cheeks -->
                                    <circle cx="-11" cy="25" r="3" fill="#fca5a5" opacity="0.6"/>
                                    <circle cx="11" cy="25" r="3" fill="#fca5a5" opacity="0.6"/>
                                    <!-- Warm, Happy Smile -->
                                    <path d="M-6 26 Q0 33 6 26" stroke="#9a3412" stroke-width="2.2" fill="#450a0a" stroke-linecap="round"/>
                                </g>
                                <path d="M-18 40 L18 40 L15 80 L-15 80 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2.5"/>
                                <polygon points="0,40 -8,56 8,56" fill="#0284c7"/>
                                <!-- Right Arm with Telemetry Datapad in Hand -->
                                <path d="M16 42 L26 50 L22 56 L14 48 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                                <g transform="translate(20, 48)">
                                    <rect x="0" y="0" width="18" height="24" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="2" class="story-anim-datapad-screen"/>
                                    <line x1="3" y1="8" x2="15" y2="8" stroke="#38bdf8" stroke-width="1.5"/>
                                    <line x1="3" y1="14" x2="12" y2="14" stroke="#22c55e" stroke-width="1.5"/>
                                </g>
                                <!-- Left Leg (Steps 1, 3, 5 forward) -->
                                <g class="story-anim-step-leg-left">
                                    <rect x="-14" y="80" width="11" height="20" rx="3" fill="#0f172a"/>
                                </g>
                                <!-- Right Leg (Steps 2, 4, 6 forward) -->
                                <g class="story-anim-step-leg-right">
                                    <rect x="3" y="80" width="11" height="20" rx="3" fill="#0f172a"/>
                                </g>
                            </g>
                        </g>
                    </g>
                `;
            }
        }

        // ==========================================
        // 4. CATALYST PROPS (AT X = 280, GROUNDED/ON PEDESTAL/IN SKY)
        // ==========================================
        const propY = pedestalGraphic ? 135 : 160;

        if (universeId === 'beginner') {
            if (propId === 'bone') {
                // Delicious Big Bone on lawn
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 12})">
                        <path d="M-22 0 L22 0" stroke="#f8fafc" stroke-width="12" stroke-linecap="round"/>
                        <circle cx="-22" cy="-6" r="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
                        <circle cx="-22" cy="6" r="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
                        <circle cx="22" cy="-6" r="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
                        <circle cx="22" cy="6" r="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
                    </g>
                `;
            } else if (propId === 'box') {
                // Mystery Cardboard Box on lawn with wobble & shiver
                propGraphic = `
                    <g transform="translate(${propX - 25}, ${groundY - 38})" class="${isClimax ? 'story-anim-box-shiver' : 'story-anim-box-wobble'}">
                        <rect x="0" y="0" width="50" height="38" rx="5" fill="#d97706" stroke="#b45309" stroke-width="2.5"/>
                        <line x1="25" y1="0" x2="25" y2="38" stroke="#92400e" stroke-width="3"/>
                        <rect x="15" y="12" width="20" height="14" rx="2" fill="#fef3c7" stroke="#ca8a04" stroke-width="1"/>
                        <circle cx="25" cy="19" r="3" fill="#ea580c"/>
                    </g>
                `;
            } else if (propId === 'collar') {
                // Golden Collar resting on ground
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 18})">
                        <circle cx="0" cy="0" r="18" fill="none" stroke="#facc15" stroke-width="5" filter="drop-shadow(0 0 6px #fde047)"/>
                        <circle cx="0" cy="18" r="6" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                    </g>
                `;
            } else if (propId === 'butterfly') {
                // Rainbow Butterfly: moved up into the open sky (Y = 48) with 3D flapping wings and drifting flight
                propGraphic = `
                    <g transform="translate(${propX}, 48)">
                        <g class="story-anim-butterfly-flight">
                            <!-- Left Wings (Flapping) -->
                            <g class="story-anim-butterfly-wing-left">
                                <ellipse cx="-12" cy="-7" rx="16" ry="11" fill="#ec4899" stroke="#db2777" stroke-width="1.5" opacity="0.95"/>
                                <ellipse cx="-7" cy="7" rx="11" ry="8" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5" opacity="0.95"/>
                                <circle cx="-12" cy="-7" r="4" fill="#fef08a"/>
                            </g>
                            <!-- Right Wings (Flapping) -->
                            <g class="story-anim-butterfly-wing-right">
                                <ellipse cx="12" cy="-7" rx="16" ry="11" fill="#ec4899" stroke="#db2777" stroke-width="1.5" opacity="0.95"/>
                                <ellipse cx="7" cy="7" rx="11" ry="8" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5" opacity="0.95"/>
                                <circle cx="12" cy="-7" r="4" fill="#fef08a"/>
                            </g>
                            <!-- Body & Antennae -->
                            <line x1="0" y1="-14" x2="0" y2="16" stroke="#1e1b4b" stroke-width="3" stroke-linecap="round"/>
                            <path d="M-1 -14 Q-6 -22 -10 -20" stroke="#1e1b4b" stroke-width="1.5" fill="none"/>
                            <path d="M1 -14 Q6 -22 10 -20" stroke="#1e1b4b" stroke-width="1.5" fill="none"/>
                            <circle cx="-10" cy="-20" r="1.5" fill="#f43f5e"/>
                            <circle cx="10" cy="-20" r="1.5" fill="#f43f5e"/>
                        </g>
                    </g>
                `;
            } else if (propId === 'leash') {
                // Blue Walking Leash on the green grass lawn
                propGraphic = `
                    <g transform="translate(${propX - 15}, ${groundY - 14})">
                        <ellipse cx="-14" cy="0" rx="7" ry="13" fill="none" stroke="#1d4ed8" stroke-width="4.5"/>
                        <path d="M-7 0 Q8 -16 22 -2 T36 10" stroke="#2563eb" stroke-width="5" fill="none" stroke-linecap="round"/>
                        <path d="M-6 -1 Q8 -14 22 -1" stroke="#93c5fd" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                        <circle cx="38" cy="12" r="5" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
                        <rect x="39" y="15" width="5" height="8" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
                        <circle cx="16" cy="10" r="3.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
                    </g>
                `;
            } else {
                // Red Bouncing Rubber Ball (Default) with subtle playful idle bounce & squash
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 18})">
                        <g class="story-anim-ball-idle">
                            <circle cx="0" cy="0" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.3))"/>
                            <circle cx="-5" cy="-5" r="5" fill="#fca5a5" opacity="0.85"/>
                        </g>
                    </g>
                `;
            }
        } else if (universeId === 'advanced') {
            if (propId === 'jellyfish') {
                // Bioluminescent Jellyfish with pulsing & undulating ocean motion
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 50})">
                        <g class="story-anim-jellyfish-pulse">
                            <path d="M-20 0 C-20 -24 20 -24 20 0 Z" fill="#a855f7" filter="drop-shadow(0 0 12px #c084fc)"/>
                            <circle cx="-7" cy="-5" r="2.5" fill="#fff"/><circle cx="7" cy="-5" r="2.5" fill="#fff"/>
                            <path d="M-12 0 L-12 24 M-4 0 L-4 28 M4 0 L4 26 M12 0 L12 22" stroke="#e9d5ff" stroke-width="2.5" stroke-linecap="round"/>
                        </g>
                    </g>
                `;
            } else if (propId === 'camera') {
                // Underwater UV Camera resting on seabed
                propGraphic = `
                    <g transform="translate(${propX - 22}, ${groundY - 30})">
                        <rect x="0" y="0" width="44" height="30" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
                        <circle cx="22" cy="15" r="9" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                        <circle cx="22" cy="15" r="4" fill="#facc15"/>
                    </g>
                `;
            } else if (propId === 'sensor') {
                // Thermal Depth Sensor wand resting on seabed
                propGraphic = `
                    <g transform="translate(${propX - 20}, ${groundY - 45})">
                        <rect x="0" y="0" width="40" height="26" rx="5" fill="#0f172a" stroke="#ef4444" stroke-width="2.5"/>
                        <text x="20" y="18" font-size="11" font-family="monospace" font-weight="900" fill="#ef4444" text-anchor="middle">24.8°C</text>
                        <line x1="20" y1="26" x2="20" y2="45" stroke="#94a3b8" stroke-width="3"/>
                        <circle cx="20" cy="45" r="4.5" fill="#ef4444" class="story-anim-antenna-pulse"/>
                    </g>
                `;
            } else if (propId === 'ancient_relic') {
                // Sunken Explorer Relic on seabed
                propGraphic = `
                    <g transform="translate(${propX - 16}, ${groundY - 32})">
                        <path d="M5 0 L27 0 L29 8 Q36 20 27 30 L5 30 Q-3 20 3 8 Z" fill="#b45309" stroke="#78350f" stroke-width="2.5"/>
                        <circle cx="10" cy="15" r="3" fill="#fef08a"/>
                        <circle cx="19" cy="22" r="3.5" fill="#06b6d4"/>
                    </g>
                `;
            } else if (propId === 'coral_sample') {
                // Azure Coral Branch on seabed
                propGraphic = `
                    <g transform="translate(${propX - 16}, ${groundY - 45})">
                        <path d="M14 42 L14 24 Q14 14 5 8 M14 26 Q16 12 28 6 M14 18 Q8 16 6 2 M14 20 Q22 16 26 3" stroke="#06b6d4" stroke-width="5" stroke-linecap="round" fill="none" filter="drop-shadow(0 0 10px #22d3ee)"/>
                        <circle cx="5" cy="8" r="3.5" fill="#ec4899"/>
                        <circle cx="28" cy="6" r="3.5" fill="#ec4899"/>
                    </g>
                `;
            } else {
                // Mini-Submersible (Default) resting on sea floor
                propGraphic = `
                    <g transform="translate(${propX - 30}, ${groundY - 38})">
                        <ellipse cx="30" cy="18" rx="34" ry="20" fill="#f59e0b" stroke="#d97706" stroke-width="2.5"/>
                        <circle cx="45" cy="18" r="10" fill="#e0f2fe" stroke="#d97706" stroke-width="2.5"/>
                        <polygon points="55,18 90,4 90,32" fill="rgba(254, 240, 138, 0.4)"/>
                    </g>
                `;
            }
        } else {
            // Intermediate: High-Tech Modern Sci-Fi Catalyst Props (The Secret of the Quantum Key: Chapter 2)
            if (propId === 'goggles') {
                // 1. Lab Tech Goggles: Cybernetic AR HUD Visor with Dual Polarized Reticle Lenses
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 35})">
                        <!-- Tactical Elastic Strap resting on pedestal -->
                        <path d="M-34 -5 Q0 15 34 -5" stroke="#1e293b" stroke-width="6" fill="none" stroke-linecap="round"/>
                        <path d="M-34 -5 Q0 15 34 -5" stroke="#334155" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                        
                        <!-- Heavy Cybernetic Frame -->
                        <path d="M-32 -18 L-3 -18 L-3 -10 L3 -10 L3 -18 L32 -18 Q36 -5 30 5 L-30 5 Q-36 -5 -32 -18 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
                        <line x1="-4" y1="-10" x2="4" y2="-10" stroke="#f59e0b" stroke-width="2.5"/>
                        <circle cx="-31" cy="-7" r="2.5" fill="#f59e0b"/>
                        <circle cx="31" cy="-7" r="2.5" fill="#f59e0b"/>

                        <!-- Dual Polarized HUD Lenses with Holographic Reticles -->
                        <!-- Left Lens -->
                        <rect x="-27" y="-15" width="24" height="17" rx="4" fill="#0284c7" stroke="#00f0ff" stroke-width="1.8"/>
                        <line x1="-25" y1="-6.5" x2="-5" y2="-6.5" stroke="#38bdf8" stroke-width="1" opacity="0.8"/>
                        <circle cx="-15" cy="-6.5" r="4.5" fill="none" stroke="#22c55e" stroke-width="1.2" stroke-dasharray="3,2"/>
                        <circle cx="-15" cy="-6.5" r="1.5" fill="#22c55e"/>

                        <!-- Right Lens -->
                        <rect x="3" y="-15" width="24" height="17" rx="4" fill="#0284c7" stroke="#00f0ff" stroke-width="1.8"/>
                        <line x1="5" y1="-6.5" x2="25" y2="-6.5" stroke="#38bdf8" stroke-width="1" opacity="0.8"/>
                        <circle cx="15" cy="-6.5" r="4.5" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3,2"/>
                        <circle cx="15" cy="-6.5" r="1.5" fill="#00f0ff"/>

                        <!-- Side Laser Rangefinder Unit with Red Dot -->
                        <rect x="29" y="-14" width="8" height="7" rx="1.5" fill="#334155" stroke="#475569" stroke-width="1.2"/>
                        <circle cx="35" cy="-10.5" r="2" fill="#ef4444" class="story-anim-led-1"/>

                        <!-- Floating Holographic HUD readout above visor -->
                        <g transform="translate(0, -28)">
                            <rect x="-28" y="0" width="56" height="9" rx="2.5" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" stroke-width="1"/>
                            <text x="0" y="6.5" font-size="5" font-weight="900" fill="#38bdf8" text-anchor="middle" letter-spacing="0.5">HUD // OPTIC: 100%</text>
                        </g>
                    </g>
                `;
            } else if (propId === 'satellite') {
                // 2. Satellite Uplink: High-Gain Parabolic Transceiver Turret with Active Transmission Radiations
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 33})">
                        <!-- Turret Base & Hydraulic Mount -->
                        <rect x="-24" y="-5" width="48" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                        <circle cx="0" cy="-5" r="9" fill="#1e293b" stroke="#64748b" stroke-width="2.2"/>
                        <!-- Heavy Hydraulic Pistons -->
                        <line x1="-11" y1="-5" x2="-5" y2="-20" stroke="#64748b" stroke-width="3.5"/>
                        <line x1="11" y1="-5" x2="5" y2="-20" stroke="#64748b" stroke-width="3.5"/>

                        <!-- Angled Parabolic Reflector Dish -->
                        <g transform="translate(0, -22) rotate(-18)">
                            <!-- Dish Bowl & Honeycomb Grid -->
                            <path d="M-28 0 Q0 -18 28 0 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2.6"/>
                            <path d="M-23 2 Q0 -13 23 2" stroke="#0284c7" stroke-width="1.8" fill="none"/>
                            <line x1="-13" y1="-1" x2="-13" y2="-9" stroke="#38bdf8" stroke-width="1"/>
                            <line x1="0" y1="-1" x2="0" y2="-15" stroke="#38bdf8" stroke-width="1"/>
                            <line x1="13" y1="-1" x2="13" y2="-9" stroke="#38bdf8" stroke-width="1"/>
                            <!-- Central Feed Horn Antenna & Pulsing Tip -->
                            <line x1="0" y1="-8" x2="0" y2="-23" stroke="#38bdf8" stroke-width="3"/>
                            <circle cx="0" cy="-23" r="5.5" fill="#00f0ff" filter="drop-shadow(0 0 10px #38bdf8)"/>
                            <circle cx="0" cy="-23" r="2.5" fill="#ffffff"/>
                            <!-- Flashing Beacon on Mast -->
                            <line x1="0" y1="-23" x2="0" y2="-32" stroke="#94a3b8" stroke-width="1.8"/>
                            <circle cx="0" cy="-32" r="3.5" fill="#ef4444" class="story-anim-antenna-pulse"/>

                            <!-- Active Wireless Transmission Waves -->
                            <path d="M-15 -35 Q0 -46 15 -35" stroke="#38bdf8" stroke-width="2" fill="none" opacity="0.9"/>
                            <path d="M-23 -43 Q0 -56 23 -43" stroke="#00f0ff" stroke-width="1.6" fill="none" opacity="0.65"/>
                        </g>

                        <!-- Base Status Pill -->
                        <rect x="-18" y="-1.5" width="36" height="6.5" rx="2" fill="#0f172a" stroke="#22c55e" stroke-width="0.8"/>
                        <text x="0" y="3.5" font-size="4.2" font-weight="900" fill="#22c55e" text-anchor="middle">UPLINK OK</text>
                    </g>
                `;
            } else if (propId === 'data_chip') {
                // 3. Encoded Memory Chip: Gold-Heatsink Ceramic Matrix with 3D Holographic Data Cube
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 35})">
                        <!-- Docking Connector Base -->
                        <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                        <line x1="-18" y1="0" x2="18" y2="0" stroke="#f59e0b" stroke-width="1.5"/>

                        <!-- High-Spec Quantum Microchip Body -->
                        <rect x="-21" y="-36" width="42" height="34" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>
                        <!-- Gold Side Heat-sink Rails -->
                        <rect x="-25" y="-32" width="4" height="26" rx="1.5" fill="#d97706" stroke="#f59e0b" stroke-width="1"/>
                        <rect x="21" y="-32" width="4" height="26" rx="1.5" fill="#d97706" stroke="#f59e0b" stroke-width="1"/>

                        <!-- Internal Printed Circuit Paths (Gold & Cyan) -->
                        <path d="M-15 -26 L-8 -26 L-3 -20 L-3 -10" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
                        <circle cx="-3" cy="-10" r="1.5" fill="#f59e0b"/>
                        <path d="M15 -26 L8 -26 L3 -20 L3 -10" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
                        <circle cx="3" cy="-10" r="1.5" fill="#38bdf8"/>

                        <!-- Central Glowing Quantum Crystal Processing Core -->
                        <rect x="-9" y="-24" width="18" height="13" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="1.8"/>
                        <circle cx="0" cy="-17.5" r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #00f0ff)"/>
                        <circle cx="0" cy="-17.5" r="2" fill="#00f0ff"/>

                        <!-- Multi-Color Data Activity LEDs (Blinking) -->
                        <circle cx="-12" cy="-8" r="2" fill="#22c55e" class="story-anim-led-1"/>
                        <circle cx="-6" cy="-8" r="2" fill="#38bdf8" class="story-anim-led-2"/>
                        <circle cx="0" cy="-8" r="2" fill="#facc15" class="story-anim-led-3"/>

                        <!-- Floating Holographic Data Cube & Security Label -->
                        <g transform="translate(0, -48)">
                            <!-- 3D Holographic Cube Wireframe -->
                            <polygon points="-9,0 0,-5 9,0 0,5" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="1"/>
                            <line x1="-9" y1="0" x2="-9" y2="9" stroke="#38bdf8" stroke-width="1"/>
                            <line x1="9" y1="0" x2="9" y2="9" stroke="#38bdf8" stroke-width="1"/>
                            <line x1="0" y1="5" x2="0" y2="14" stroke="#38bdf8" stroke-width="1"/>
                            <polygon points="-9,9 0,14 9,9" fill="none" stroke="#38bdf8" stroke-width="1"/>
                            <!-- Security Tag -->
                            <rect x="-25" y="-10" width="50" height="8" rx="2" fill="rgba(15, 23, 42, 0.9)" stroke="#f59e0b" stroke-width="1"/>
                            <text x="0" y="-4.5" font-size="4.2" font-weight="900" fill="#f59e0b" text-anchor="middle">ENCRYPTED // LVL-5</text>
                        </g>
                    </g>
                `;
            } else if (propId === 'scanner') {
                // 4. Laser Scanner: Advanced Handheld Quantum Spectrometer in Charging Dock
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 33})">
                        <!-- Slanted Charging Cradle Dock -->
                        <rect x="-24" y="-5" width="48" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                        <path d="M-13 -5 L-8 -15 L8 -15 L13 -5 Z" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>

                        <!-- Ergonomic Scanner Wand Body (Angled upward) -->
                        <g transform="translate(0, -13) rotate(-15)">
                            <!-- Textured Rubber Grip Handle -->
                            <rect x="-26" y="-6" width="20" height="12" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.8"/>
                            <line x1="-21" y1="-2" x2="-11" y2="-2" stroke="#475569" stroke-width="1.5"/>
                            <line x1="-21" y1="2" x2="-11" y2="2" stroke="#475569" stroke-width="1.5"/>
                            <!-- Scanner Main Chassis & Trigger -->
                            <path d="M-6 -8 L18 -8 L28 0 L18 9 L-6 9 Z" fill="#334155" stroke="#10b981" stroke-width="2.5"/>
                            <path d="M-4 9 L0 14 L5 9" stroke="#059669" stroke-width="2.5" fill="none"/>

                            <!-- Top OLED Diagnostic Screen -->
                            <rect x="-3" y="-15" width="22" height="7" rx="2" fill="#090d16" stroke="#10b981" stroke-width="1.2"/>
                            <path d="M0 -11.5 L4 -14 L8 -10 L12 -13 L16 -11.5 L18 -11.5" stroke="#10b981" stroke-width="1.2" fill="none"/>

                            <!-- Dual Optical Laser Emitters -->
                            <rect x="25" y="-4" width="5" height="8" rx="1.5" fill="#1e293b" stroke="#10b981" stroke-width="1.2"/>
                            <circle cx="28" cy="0" r="3.2" fill="#22c55e" filter="drop-shadow(0 0 8px #10b981)"/>
                            <circle cx="28" cy="0" r="1.5" fill="#ffffff"/>

                            <!-- Volumetric Green Spectral Laser Fan Cone -->
                            <polygon points="30,0 86,-20 86,20" fill="rgba(34, 197, 94, 0.35)" class="story-anim-laser-cone"/>
                            <line x1="30" y1="0" x2="86" y2="0" stroke="#22c55e" stroke-width="2.2" opacity="0.95" stroke-dasharray="5,2"/>
                            <line x1="30" y1="0" x2="86" y2="-15" stroke="#10b981" stroke-width="1.2" opacity="0.7"/>
                            <line x1="30" y1="0" x2="86" y2="15" stroke="#10b981" stroke-width="1.2" opacity="0.7"/>
                        </g>

                        <!-- Base Telemetry Label -->
                        <text x="0" y="8" font-size="4.2" font-weight="900" fill="#10b981" text-anchor="middle">LASER: READY</text>
                    </g>
                `;
            } else if (propId === 'battery') {
                // 5. Quantum Battery Core: Industrial Plasma Power Unit with Snapping Sparks
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 33})">
                        <!-- Heavy Industrial Battery Base & Clamp Brackets -->
                        <rect x="-24" y="-5" width="48" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                        <rect x="-21" y="-48" width="42" height="45" rx="5" fill="#1e293b" stroke="#8b5cf6" stroke-width="2.5"/>
                        <!-- Yellow/Black Industrial Safety Hazard Stripes across Core -->
                        <rect x="-21" y="-48" width="42" height="5" fill="#facc15"/>
                        <line x1="-16" y1="-48" x2="-11" y2="-43" stroke="#000" stroke-width="2"/>
                        <line x1="-6" y1="-48" x2="-1" y2="-43" stroke="#000" stroke-width="2"/>
                        <line x1="4" y1="-48" x2="9" y2="-43" stroke="#000" stroke-width="2"/>
                        <line x1="14" y1="-48" x2="19" y2="-43" stroke="#000" stroke-width="2"/>

                        <!-- Central Liquid Quantum Plasma Viewing Cylinder -->
                        <rect x="-13" y="-40" width="26" height="30" rx="4" fill="rgba(139, 92, 246, 0.25)" stroke="#c084fc" stroke-width="1.8"/>
                        <!-- Glowing Plasma Energy Filament -->
                        <line x1="0" y1="-37" x2="0" y2="-13" stroke="#ffffff" stroke-width="3" filter="drop-shadow(0 0 10px #a855f7)"/>
                        <circle cx="0" cy="-25" r="7.5" fill="#a855f7" class="story-anim-crystal-glow"/>
                        <circle cx="0" cy="-25" r="3.8" fill="#ffffff"/>

                        <!-- 4-Stage LED Battery Charge Meter (Emerald to Violet) -->
                        <rect x="-18" y="-40" width="3" height="5" rx="1" fill="#22c55e"/>
                        <rect x="-18" y="-33" width="3" height="5" rx="1" fill="#38bdf8"/>
                        <rect x="-18" y="-26" width="3" height="5" rx="1" fill="#a855f7"/>
                        <rect x="-18" y="-19" width="3" height="5" rx="1" fill="#c084fc"/>

                        <!-- Top Magnetic Anode / Cathode Terminals with Snapping Spark -->
                        <rect x="-14" y="-55" width="9" height="8" rx="2" fill="#d97706" stroke="#f59e0b" stroke-width="1.2"/>
                        <rect x="5" y="-55" width="9" height="8" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                        <!-- Electric Lightning Arc Snapping across polarity gap -->
                        <path d="M-5 -51 L0 -55 L-1 -47 L5 -51" stroke="#00f0ff" stroke-width="1.8" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>

                        <!-- Telemetry Readout Pill -->
                        <text x="0" y="8" font-size="4.2" font-weight="900" fill="#a855f7" text-anchor="middle">CHARGE // 100%</text>
                    </g>
                `;
            } else {
                // 6. The Quantum Key: Floating in Pressurized Quartz Zero-G Capsule (Default)
                propGraphic = `
                    <g transform="translate(${propX}, ${groundY - 31})">
                        <!-- Magnetic Capsule Base Dock -->
                        <rect x="-28" y="-5" width="56" height="10" rx="3" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                        <line x1="-24" y1="0" x2="24" y2="0" stroke="#38bdf8" stroke-width="1.5"/>
                        <ellipse cx="0" cy="0" rx="20" ry="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                        <!-- Quartz Containment Capsule (Translucent with Cyan Edge) -->
                        <rect x="-24" y="-68" width="48" height="64" rx="20" fill="rgba(56, 189, 248, 0.14)" stroke="#38bdf8" stroke-width="2.5"/>
                        <line x1="-18" y1="-50" x2="-18" y2="-15" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/>
                        <!-- Capsule Cap -->
                        <rect x="-20" y="-76" width="40" height="9" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
                        <circle cx="0" cy="-71.5" r="2.5" fill="#38bdf8" class="story-anim-led-1"/>

                        <!-- Floating Quantum Key inside capsule (Decoupled Nested Transform) -->
                        <g transform="translate(0, -36)">
                            <g class="story-anim-prop-float">
                                <!-- Pulsing Quantum Energy Halo -->
                                <circle cx="0" cy="0" r="18" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,3" class="story-anim-crystal-ring"/>
                                <circle cx="0" cy="-8" r="13" fill="rgba(56, 189, 248, 0.3)" class="story-anim-crystal-glow"/>
                                <!-- Key Head (Cybernetic Bow with Core Crystal) -->
                                <polygon points="-11,-8 0,-18 11,-8 7,3 -7,3" fill="#0284c7" stroke="#38bdf8" stroke-width="2.2"/>
                                <circle cx="0" cy="-8" r="6" fill="#ffffff" filter="drop-shadow(0 0 8px #00f0ff)"/>
                                <circle cx="0" cy="-8" r="2.8" fill="#00f0ff"/>
                                <!-- Key Shaft & High-Tech Laser Alignment Teeth -->
                                <rect x="-3" y="3" width="6" height="24" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                                <line x1="0" y1="5" x2="0" y2="25" stroke="#ffffff" stroke-width="1.2"/>
                                <rect x="3" y="12" width="7" height="4" rx="1" fill="#38bdf8"/>
                                <rect x="3" y="19" width="5.5" height="3.5" rx="1" fill="#38bdf8"/>
                                <rect x="-8.5" y="16" width="5.5" height="3.5" rx="1" fill="#38bdf8"/>
                            </g>
                        </g>
                    </g>
                `;
            }
        }

        // ==========================================
        // 5. STORY ACTION OVERLAYS (CLEAN SCENE - NO FLOATING EMOJIS)
        // ==========================================
        storyActionOverlays = '';
        // ==========================================
        // 6. ACTIVE PLOT TWIST OVERLAY (CLIMAX ONLY)
        // ==========================================
        if (twist && isClimax) {
            twistOverlay = `
                <g>
                    <rect width="400" height="220" fill="none" stroke="#8b5cf6" stroke-width="4" class="story-anim-twist-border"/>
                    <circle cx="200" cy="110" r="85" fill="none" stroke="#c084fc" stroke-width="2.5" stroke-dasharray="6,6" class="story-anim-twist-ring"/>
                    <g class="story-anim-twist-burst">
                        <polygon points="35,35 45,45 60,38 52,52 65,65 50,60 45,75 38,60 25,65 32,50 20,40 35,42" fill="#facc15" stroke="#ea580c" stroke-width="1.8"/>
                        <text x="42" y="56" font-size="14" font-weight="900" fill="#b45309" text-anchor="middle">⚡</text>
                    </g>
                    <g transform="translate(135, 75)">
                        <circle cx="0" cy="0" r="14" fill="#ef4444" stroke="#ffffff" stroke-width="2.5"/>
                        <text x="0" y="5" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">!</text>
                    </g>
                </g>
            `;
        }

        return `
            <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                ${bgGraphic}
                ${pedestalGraphic}
                ${heroShadow}
                ${propShadow}
                ${propGraphic}
                ${charGraphic}
                ${storyActionOverlays}
                ${twistOverlay}
            </svg>
        `;
    }
    // Dynamic Story Generator: creates an engaging, complete ESL story arc based on selected Setting, Hero, Prop & Twist
    function generateStoryPanels(sb, universe) {
        const level = sb.level || 'intermediate';
        const hero = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
        const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];
        const setting = universe.settings.find(s => s.id === sb.settingId) || universe.settings[0];
        const prop = universe.props.find(p => p.id === sb.propId) || universe.props[0];
        const twist = sb.activeTwist;

        if (level === 'beginner') {
            // 🟢 Level 1: Beginner (3 Panels)
            let p1Cap = `One sunny morning, ${hero.name} arrived at ${setting.name} with the ${prop.name}.`;
            let p1Speech = `Ready for a wonderful day at ${setting.name}! Let's have fun!`;
            if (hero.id === 'max') {
                p1Cap = `One sunny morning, Max the Puppy ran happily into ${setting.name} carrying the ${prop.name}.`;
                p1Speech = `Woof woof! I am so excited to explore ${setting.name} today!`;
            } else if (hero.id === 'cleo') {
                p1Cap = `One sunny morning, Cleo the Cat crept playfully into ${setting.name}, batting gently at the ${prop.name}.`;
                p1Speech = `Meow! Let's see what secrets are hiding in ${setting.name}!`;
            } else if (hero.id === 'sam') {
                p1Cap = `One sunny morning, Ranger Sam patrolled ${setting.name}, carefully holding the ${prop.name}.`;
                p1Speech = `Welcome to ${setting.name}! Let's make sure all animals are safe!`;
            }

            let p2Cap = twist ? `Suddenly, ${twist.text}` : `Suddenly, while playing in ${setting.name}, the ${prop.name} rolled into a mystery spot!`;
            let p2Speech = twist ? twist.dialogue : `Oh no! Look behind the bushes! Where did the ${prop.name} go?!`;

            let p3Cap = `In the end, ${hero.name} safely recovered the ${prop.name} and celebrated with friends at ${setting.name}!`;
            let p3Speech = `We did it! Teamwork solved the problem at ${setting.name}!`;
            if (hero.id === 'max') p3Speech = `Tail wagging happily! Best puppy adventure ever at ${setting.name}!`;
            if (hero.id === 'cleo') p3Speech = `Purr... mission accomplished, now it is time for a sunny nap!`;
            if (hero.id === 'sam') p3Speech = `Great job protecting ${setting.name}! You are a true park hero!`;

            sb.panels = [
                { panelIndex: 0, roleBadge: 'Beginning', caption: p1Cap, speech1: p1Speech, speech2: '' },
                { panelIndex: 1, roleBadge: 'The Problem', caption: p2Cap, speech1: p2Speech, speech2: '' },
                { panelIndex: 2, roleBadge: 'Solution', caption: p3Cap, speech1: p3Speech, speech2: '' }
            ];
        } else if (level === 'advanced') {
            // 🔴 Level 3: Advanced (4 Panels - Single Hero Dialogue matching Levels 1 & 2)
            let p1Cap = `Deep beneath the surface of ${setting.name}, ${hero.name} steered through the cool ocean currents equipped with the ${prop.name}.`;
            let p1Speech1 = `Calibrating subsea telemetry. Ambient clarity in ${setting.name} is optimal today.`;
            if (hero.id === 'dr_tide') p1Speech1 = `Calibrating thermal monitors in ${setting.name}. Ambient reef clarity is optimal today.`;
            if (hero.id === 'kai') p1Speech1 = `Submersible thrusters online. Scanning navigation channels into ${setting.name}.`;

            let p2Cap = `Through the observation dome, the ${prop.name} illuminated rare bioluminescent organisms flourishing throughout ${setting.name}.`;
            let p2Speech1 = `Look at the radiant fluorescence! The ${prop.name} is revealing pigments never documented before.`;
            if (hero.id === 'dr_tide') p2Speech1 = `Fascinating! The ${prop.name} reveals bioluminescent pigments never recorded in this bay!`;
            if (hero.id === 'kai') p2Speech1 = `Telemetry confirmed. The ${prop.name} is logging vibrant ultraviolet readings.`;

            let p3Cap = twist ? `Without warning, ${twist.text}` : `Without warning, a violent thermal surge ripped through ${setting.name}, threatening the delicate ${prop.name}!`;
            let p3Speech1 = twist ? twist.dialogue : `Hold steady! The sudden current is pushing us toward the fragile ridge!`;
            if (!twist && hero.id === 'dr_tide') p3Speech1 = `Thermal spike detected! We must protect the ${prop.name} and stabilize our depth!`;
            if (!twist && hero.id === 'kai') p3Speech1 = `Engaging auxiliary thrusters! Navigating away from the hydrothermal surge!`;

            let p4Cap = `With courageous precision, ${hero.name} secured the ${prop.name}, permanently safeguarding ${setting.name}.`;
            let p4Speech1 = `All environmental telemetry logged and confirmed! This fragile sanctuary at ${setting.name} is protected.`;
            if (hero.id === 'dr_tide') p4Speech1 = `A historic conservation victory! Twilight Bay's marine habitat is officially protected.`;
            if (hero.id === 'kai') p4Speech1 = `Submersible secured and all mission data verified! Expedition a complete success.`;

            sb.panels = [
                { panelIndex: 0, roleBadge: 'Setup', caption: p1Cap, speech1: p1Speech1, speech2: '' },
                { panelIndex: 1, roleBadge: 'Catalyst', caption: p2Cap, speech1: p2Speech1, speech2: '' },
                { panelIndex: 2, roleBadge: 'Climax & Twist', caption: p3Cap, speech1: p3Speech1, speech2: '' },
                { panelIndex: 3, roleBadge: 'Resolution', caption: p4Cap, speech1: p4Speech1, speech2: '' }
            ];
        } else {
            // 🟡 Level 2: Intermediate (4 Panels)
            let p1Cap = `First, ${hero.name} calibrated diagnostic monitors inside ${setting.name} to inspect the ${prop.name}.`;
            let p1Speech = `All diagnostic sensors at ${setting.name} are aligned and recording telemetry.`;
            if (hero.id === 'leo') p1Speech = `Cadet Leo reporting for duty! The ${prop.name} telemetry readings are locked in.`;
            if (hero.id === 'rover') p1Speech = `Beep-boop! Rover scanner confirms energy frequencies at ${setting.name} are optimal.`;
            if (hero.id === 'vance') p1Speech = `Command status is nominal. Stand by for the ${prop.name} synchronization sequence.`;

            let p2Cap = `Next, the ${prop.name} pulsed with vibrant quantum energy, illuminating the chamber inside ${setting.name}.`;
            let p2Speech = `Remarkable! Look at the waveform harmonic frequency emitting from the ${prop.name}!`;
            if (hero.id === 'leo') p2Speech = `Look at the crystal core! The ${prop.name} is projecting encoded starmap coordinates!`;
            if (hero.id === 'rover') p2Speech = `Woof-beep! High-frequency quantum radiation detected inside ${setting.name}!`;
            if (hero.id === 'vance') p2Speech = `Alert all stations! The ${prop.name} has unlocked a confidential transmission!`;

            let p3Cap = twist ? `Suddenly, ${twist.text}` : `Suddenly, an unexpected power surge rattled ${setting.name} because the ${prop.name} overloaded the circuit grid!`;
            let p3Speech = twist ? twist.dialogue : `Hold steady! We have sixty seconds before the power containment field collapses!`;
            if (!twist && hero.id === 'leo') p3Speech = `The power core is fluctuating! We must reroute auxiliary shields to ${setting.name}!`;
            if (!twist && hero.id === 'rover') p3Speech = `Warning! System overload detected! Engaging automated cyber-damping fields!`;
            if (!twist && hero.id === 'vance') p3Speech = `Emergency protocols engaged! Protect the ${prop.name} and stabilize the perimeter!`;

            let p4Cap = `In the end, ${hero.name} harmonized the quantum frequencies, safeguarding the ${prop.name} and saving ${setting.name}.`;
            let p4Speech = `The connection is restored! Our expedition at ${setting.name} is a complete success.`;
            if (hero.id === 'leo') p4Speech = `Frequencies aligned! We saved the station and decoded the quantum secret!`;
            if (hero.id === 'rover') p4Speech = `Telemetry 100% nominal! Rover tail wag-protocol initiated!`;
            if (hero.id === 'vance') p4Speech = `Outstanding courage, crew. The mission at ${setting.name} is completely secure.`;

            sb.panels = [
                { panelIndex: 0, roleBadge: 'Setting', caption: p1Cap, speech1: p1Speech, speech2: '' },
                { panelIndex: 1, roleBadge: 'The Discovery', caption: p2Cap, speech1: p2Speech, speech2: '' },
                { panelIndex: 2, roleBadge: 'Climax & Twist', caption: p3Cap, speech1: p3Speech, speech2: '' },
                { panelIndex: 3, roleBadge: 'Resolution', caption: p4Cap, speech1: p4Speech, speech2: '' }
            ];
        }
    }
    /* --- CONTROLLER & EVENT HANDLERS --- */
    function getSeniorStoryContext() {
        if (!appState.storyBuilder) {
            appState.storyBuilder = {
                level: 'intermediate',
                settingId: 'quantum_lab',
                characterId: 'dr_eve',
                secondaryCharId: 'leo',
                propId: 'quantum_key',
                customTitle: 'The Secret of the Quantum Key: Chapter 2',
                activeTwist: null,
                panels: []
            };
        }
        return appState.storyBuilder;
    }

    function initStoryBuilderState() {
        const sb = getSeniorStoryContext();
        const level = sb.level || 'intermediate';
        const universe = STORY_UNIVERSES_DATA[level] || STORY_UNIVERSES_DATA.intermediate;
        const templates = universe.templates;

        // Ensure valid setting & character for this universe
        const hasValidSetting = universe.settings.some(s => s.id === sb.settingId);
        if (!hasValidSetting) {
            sb.settingId = universe.defaultSetting;
            sb.characterId = universe.defaultChar;
            sb.secondaryCharId = universe.defaultSecondaryChar;
            sb.propId = universe.defaultProp;
            sb.customTitle = universe.defaultTitle;
            sb.panels = [];
        }

        // Clean any saved panels from localStorage that contain trailing emojis/symbols
        if (sb.panels && Array.isArray(sb.panels)) {
            const emojiFilterRegex = /[\u{1F300}-\u{1FAFF}\u{200D}\u{2300}-\u{23FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}]/gu;
            sb.panels.forEach(p => {
                if (p.speech1 && emojiFilterRegex.test(p.speech1)) {
                    p.speech1 = p.speech1.replace(emojiFilterRegex, '').replace(/\s{2,}/g, ' ').trim();
                }
                if (p.speech2 && emojiFilterRegex.test(p.speech2)) {
                    p.speech2 = p.speech2.replace(emojiFilterRegex, '').replace(/\s{2,}/g, ' ').trim();
                }
            });
        }

        if (!sb.panels || sb.panels.length !== templates.length) {
            generateStoryPanels(sb, universe);
            saveState();
        }
    }

    function renderSeniorStoryBuilder() {
        initStoryBuilderState();
        const sb = getSeniorStoryContext();
        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;

        // 1. Level Dropdown
        const levelSelect = document.getElementById('select-story-esl-level');
        if (levelSelect) {
            levelSelect.value = sb.level;
            if (!levelSelect.dataset.bound) {
                levelSelect.dataset.bound = 'true';
                levelSelect.addEventListener('change', (e) => {
                    const newLevel = e.target.value;
                    const newUniv = STORY_UNIVERSES_DATA[newLevel] || STORY_UNIVERSES_DATA.intermediate;
                    sb.level = newLevel;
                    sb.settingId = newUniv.defaultSetting;
                    sb.characterId = newUniv.defaultChar;
                    sb.secondaryCharId = newUniv.defaultSecondaryChar;
                    sb.propId = newUniv.defaultProp;
                    sb.customTitle = newUniv.defaultTitle;
                    sb.activeTwist = null;
                    generateStoryPanels(sb, newUniv);
                    saveState();
                    renderSeniorStoryBuilder();
                    audioEngine.speak(`Switched to ${newUniv.anchorTitle} story world! Let's write Chapter 2!`, true);
                });
            }
        }

        // 2. Badges, Title & Reading Anchor Tag
        const levelBadge = document.getElementById('story-level-badge');
        const panelsBadge = document.getElementById('story-panels-count-badge');
        const titleInput = document.getElementById('story-custom-title');
        const anchorTag = document.getElementById('story-anchor-tag');

        if (levelBadge) {
            levelBadge.innerText = universe.levelLabel;
        }
        if (panelsBadge) {
            panelsBadge.innerText = sb.level === 'beginner' ? '3 Panels' : '4 Panels';
        }
        if (anchorTag) {
            anchorTag.innerText = `🔗 Sequel to Reading Lab: "${universe.anchorTitle}"`;
        }
        if (titleInput) {
            titleInput.value = sb.customTitle || universe.defaultTitle;
            if (!titleInput.dataset.bound) {
                titleInput.dataset.bound = 'true';
                titleInput.addEventListener('input', (e) => {
                    sb.customTitle = e.target.value;
                    saveState();
                });
            }
        }

        // 3. Render Universe Asset Pickers (Settings, Characters, Props)
        renderStoryAssetPickers();

        // 4. Render Active Twist Banner
        const twistBanner = document.getElementById('story-twist-active-banner');
        const twistText = document.getElementById('story-active-twist-text');
        if (twistBanner && twistText) {
            if (sb.activeTwist) {
                twistText.innerText = sb.activeTwist.text;
                twistBanner.classList.remove('hidden');
            } else {
                twistBanner.classList.add('hidden');
            }
        }

        const btnClearTwist = document.getElementById('btn-clear-twist');
        if (btnClearTwist && !btnClearTwist.dataset.bound) {
            btnClearTwist.dataset.bound = 'true';
            btnClearTwist.addEventListener('click', () => {
                sb.activeTwist = null;
                generateStoryPanels(sb, universe);
                saveState();
                renderSeniorStoryBuilder();
            });
        }

        // 5. Render Vocabulary Bank (Reading Story Words ⭐ + Morphology Words)
        renderStoryVocabularyBank();

        // 6. Render Comic Panels
        renderStoryComicPanels();

        // 7. Bind Toolbar & Global Actions
        bindStoryBuilderGlobalActions();
    }

    function renderStoryAssetPickers() {
        const sb = getSeniorStoryContext();
        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;

        // Settings Picker
        const setRow = document.getElementById('picker-settings-row');
        const setLabel = document.getElementById('selected-setting-label');
        if (setRow) {
            setRow.innerHTML = universe.settings.map(s => `
                <button class="asset-chip-btn ${s.id === sb.settingId ? 'active' : ''}" data-set-id="${s.id}">
                    <span class="chip-icon">${s.icon}</span>
                    <span>${s.name}</span>
                </button>
            `).join('');

            setRow.querySelectorAll('.asset-chip-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const sid = btn.getAttribute('data-set-id');
                    sb.settingId = sid;
                    generateStoryPanels(sb, universe);
                    saveState();
                    renderSeniorStoryBuilder();
                    audioEngine.playClick();
                });
            });
        }
        if (setLabel) {
            const activeSet = universe.settings.find(s => s.id === sb.settingId);
            if (activeSet) setLabel.innerText = activeSet.name;
        }

        // Character Picker
        const charRow = document.getElementById('picker-characters-row');
        const charLabel = document.getElementById('selected-char-label');
        if (charRow) {
            charRow.innerHTML = universe.characters.map(c => `
                <button class="asset-chip-btn ${c.id === sb.characterId ? 'active' : ''}" data-char-id="${c.id}">
                    <span class="chip-icon">${c.icon}</span>
                    <span>${c.name}</span>
                </button>
            `).join('');

            charRow.querySelectorAll('.asset-chip-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const cid = btn.getAttribute('data-char-id');
                    sb.characterId = cid;
                    const remaining = universe.characters.filter(c => c.id !== cid);
                    sb.secondaryCharId = remaining[0] ? remaining[0].id : universe.defaultSecondaryChar;
                    generateStoryPanels(sb, universe);
                    saveState();
                    renderSeniorStoryBuilder();
                    audioEngine.playClick();
                });
            });
        }
        if (charLabel) {
            const activeChar = universe.characters.find(c => c.id === sb.characterId);
            if (activeChar) charLabel.innerText = activeChar.name;
        }

        // Props Picker
        const propRow = document.getElementById('picker-props-row');
        const propLabel = document.getElementById('selected-prop-label');
        if (propRow) {
            propRow.innerHTML = universe.props.map(p => `
                <button class="asset-chip-btn ${p.id === sb.propId ? 'active' : ''}" data-prop-id="${p.id}">
                    <span class="chip-icon">${p.icon}</span>
                    <span>${p.name}</span>
                </button>
            `).join('');

            propRow.querySelectorAll('.asset-chip-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const pid = btn.getAttribute('data-prop-id');
                    sb.propId = pid;
                    generateStoryPanels(sb, universe);
                    saveState();
                    renderSeniorStoryBuilder();
                    audioEngine.playClick();
                });
            });
        }
        if (propLabel) {
            const activeProp = universe.props.find(p => p.id === sb.propId);
            if (activeProp) propLabel.innerText = activeProp.name;
        }
    }

    function renderStoryVocabularyBank() {
        const container = document.getElementById('story-powerwords-container');
        if (!container) return;

        const sb = getSeniorStoryContext();
        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;

        // Combine Reading Lab Words (marked ⭐) + Actionable Morphology Words
        let chipsHTML = universe.readingVocab.map(v => `
            <button class="powerword-chip cat-anchor" data-word="${v.word}" title="Reading Lab Target Word: ${v.def}">
                <span>⭐ ${v.word}</span>
                <span class="chip-speaker">🔊</span>
            </button>
        `).join('');

        chipsHTML += universe.morphology.map(m => `
            <button class="powerword-chip cat-${m.cat}" data-word="${m.word}" title="${m.suffix} • ${m.def}">
                <span>${m.word}</span>
                <span class="chip-speaker">🔊</span>
            </button>
        `).join('');

        container.innerHTML = chipsHTML;

        container.querySelectorAll('.powerword-chip').forEach(btn => {
            btn.addEventListener('click', () => {
                const word = btn.getAttribute('data-word');
                const vMatch = universe.readingVocab.find(v => v.word.toLowerCase() === word.toLowerCase());
                const mMatch = universe.morphology.find(m => m.word.toLowerCase() === word.toLowerCase());
                const defText = vMatch ? vMatch.def : mMatch ? mMatch.def : '';

                audioEngine.speak(`${word}. ${defText}`, true);

                // Insert into active panel caption
                const activeTextarea = document.querySelector('.panel-caption-textarea:focus') || document.querySelector('.panel-caption-textarea');
                if (activeTextarea) {
                    const currentVal = activeTextarea.value.trim();
                    activeTextarea.value = currentVal ? `${currentVal} ${word}` : word;
                    activeTextarea.dispatchEvent(new Event('input', { bubbles: true }));
                }
            });
        });
    }

    function renderStoryComicPanels() {
        const sb = getSeniorStoryContext();
        const canvas = document.getElementById('story-comic-canvas');
        if (!canvas) return;

        const level = sb.level || 'intermediate';
        canvas.className = `story-comic-grid ${level === 'beginner' ? 'grid-3-panels' : 'grid-4-panels'}`;

        const universe = STORY_UNIVERSES_DATA[level] || STORY_UNIVERSES_DATA.intermediate;
        const templates = universe.templates;
        const mainChar = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
        const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];

        canvas.innerHTML = sb.panels.map((p, idx) => {
            const tmpl = templates[idx] || templates[0];
            const isClimax = (idx === 2 || (level === 'beginner' && idx === 1));
            const panelSvg = getStoryComicSVG(sb.level, sb.settingId, sb.characterId, sb.propId, idx, level, sb.activeTwist, sb.secondaryCharId);

            let startersHTML = '';
            if (tmpl.starters) {
                startersHTML = tmpl.starters.map(st => `
                    <button class="starter-pill" data-panel-idx="${idx}" data-insert="${st}">${st}</button>
                `).join('');
            }
            if (tmpl.connectors) {
                startersHTML += tmpl.connectors.map(c => `
                    <button class="starter-pill connector-pill" data-panel-idx="${idx}" data-insert="${c}">${c}</button>
                `).join('');
            }

            return `
                <div class="comic-panel-card ${isClimax ? 'panel-climax' : ''}" data-panel-index="${idx}">
                    <!-- Top Info Row -->
                    <div class="panel-top-row">
                        <div class="panel-title-group">
                            <span class="panel-num-badge">Panel ${idx + 1}</span>
                            <span class="panel-role-badge">${p.roleBadge || tmpl.roleBadge}</span>
                        </div>
                        <div class="panel-actions">
                            <button class="btn btn-xs btn-blue btn-panel-speak" data-panel-idx="${idx}" title="Speak Panel">🔊 Say Panel</button>
                        </div>
                    </div>

                    <!-- Animated SVG Scene Canvas -->
                    <div class="panel-svg-box">
                        ${panelSvg}
                    </div>

                    <!-- Narration / Caption Box -->
                    <div class="panel-narration-wrapper">
                        <div class="narration-label-row">
                            <span>📝 Caption / Narration:</span>
                            <div class="starter-chips-row">
                                ${startersHTML}
                            </div>
                        </div>
                        <textarea class="panel-caption-textarea" data-panel-idx="${idx}" placeholder="Write scene narration...">${p.caption || ''}</textarea>
                    </div>

                    <!-- Speech Bubbles Section -->
                    <div class="panel-dialogue-section">
                        <!-- Primary Character Speech Bubble -->
                        <div class="speech-bubble-row">
                            <div class="speech-char-avatar" title="${mainChar.name}">${mainChar.avatar}</div>
                            <div class="speech-bubble-bubble">
                                <input type="text" class="speech-bubble-input input-speech-1" data-panel-idx="${idx}" value="${p.speech1 || ''}" placeholder="${mainChar.name} says...">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Bind panel inputs to state
        canvas.querySelectorAll('.panel-caption-textarea').forEach(tx => {
            tx.addEventListener('input', (e) => {
                const idx = parseInt(e.target.getAttribute('data-panel-idx'));
                if (sb.panels[idx]) {
                    sb.panels[idx].caption = e.target.value;
                    saveState();
                }
            });
        });

        canvas.querySelectorAll('.input-speech-1').forEach(inp => {
            inp.addEventListener('input', (e) => {
                const idx = parseInt(e.target.getAttribute('data-panel-idx'));
                if (sb.panels[idx]) {
                    sb.panels[idx].speech1 = e.target.value;
                    saveState();
                }
            });
        });


        // Bind starter pills insertion
        canvas.querySelectorAll('.starter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                const idx = parseInt(pill.getAttribute('data-panel-idx'));
                const toInsert = pill.getAttribute('data-insert');
                const textarea = canvas.querySelector(`.panel-caption-textarea[data-panel-idx="${idx}"]`);
                if (textarea) {
                    const current = textarea.value.trim();
                    if (!current) {
                        textarea.value = toInsert + ' ';
                    } else if (pill.classList.contains('connector-pill')) {
                        textarea.value = `${current} ${toInsert} `;
                    } else {
                        textarea.value = `${toInsert} ${current}`;
                    }
                    textarea.dispatchEvent(new Event('input', { bubbles: true }));
                    audioEngine.playClick();
                }
            });
        });

        // Replay walk animation helper for a panel
        function replayPanelWalk(panelCard) {
            if (!panelCard) return;
            const animEls = panelCard.querySelectorAll('.story-anim-walk-6steps, .story-anim-shadow-6steps, .story-anim-step-leg-left, .story-anim-step-leg-right, .story-anim-arm-6steps');
            animEls.forEach(el => {
                el.style.animation = 'none';
                void el.offsetWidth; // trigger reflow
                el.style.animation = '';
            });
        }

        // Clicking the panel scene canvas replays the 6-step walk
        canvas.querySelectorAll('.comic-panel-card').forEach(card => {
            const svgBox = card.querySelector('.panel-svg-box');
            if (svgBox) {
                svgBox.title = "Click to replay 6-step walk";
                svgBox.addEventListener('click', (e) => {
                    // Don't replay walk if clicking directly on an interactive reactor
                    if (e.target.closest('.interactive-reactor')) return;
                    replayPanelWalk(card);
                });
            }

            // Interactive Quantum Core Reactor: click toggles overdrive surge with sound & sparks
            const reactor = card.querySelector('.interactive-reactor');
            if (reactor) {
                reactor.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isOverdrive = reactor.classList.toggle('reactor-surging');
                    const statusText = card.querySelector('.reactor-status-text');
                    if (statusText) {
                        statusText.textContent = isOverdrive ? '⚡ OVERDRIVE' : 'CORE STABLE';
                        statusText.setAttribute('fill', isOverdrive ? '#ef4444' : '#22c55e');
                    }
                    audioEngine.playReactorZap();
                });
            }
        });

        // Bind individual speak buttons (also replays walk during speech)
        canvas.querySelectorAll('.btn-panel-speak').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-panel-idx'));
                const card = canvas.querySelector(`.comic-panel-card[data-panel-index="${idx}"]`);
                replayPanelWalk(card);
                speakStoryPanel(idx);
            });
        });
    }

    function speakStoryPanel(idx, onComplete = null) {
        const sb = getSeniorStoryContext();
        const p = sb.panels[idx];
        if (!p) return;

        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;
        const mainChar = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
        const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];

        let dialogue = `Panel ${idx + 1}. ${p.caption}.`;
        if (p.speech1) {
            dialogue += ` ${mainChar.name} says: "${p.speech1}".`;
        }

        audioEngine.speak(dialogue, true, onComplete);
    }

    function bindStoryBuilderGlobalActions() {
        // Twist modal triggers
        const btnTwist1 = document.getElementById('btn-story-twist-trigger');
        const btnTwist2 = document.getElementById('btn-story-twist-bottom');
        const openTwistHandler = () => {
            openModal('modal-story-twist');
            resetTwistModalDisplay();
        };
        if (btnTwist1 && !btnTwist1.dataset.bound) {
            btnTwist1.dataset.bound = 'true';
            btnTwist1.addEventListener('click', openTwistHandler);
        }
        if (btnTwist2 && !btnTwist2.dataset.bound) {
            btnTwist2.dataset.bound = 'true';
            btnTwist2.addEventListener('click', openTwistHandler);
        }

        // Spin Twist button in modal
        const btnSpin = document.getElementById('btn-spin-twist');
        if (btnSpin && !btnSpin.dataset.bound) {
            btnSpin.dataset.bound = 'true';
            btnSpin.addEventListener('click', spinMysteryTwist);
        }

        // Apply Twist button in modal
        const btnApplyTwist = document.getElementById('btn-apply-twist');
        if (btnApplyTwist && !btnApplyTwist.dataset.bound) {
            btnApplyTwist.dataset.bound = 'true';
            btnApplyTwist.addEventListener('click', applySelectedTwistToStory);
        }

        // Presentation Reel triggers
        const btnPresent1 = document.getElementById('btn-story-present-trigger');
        const btnPresent2 = document.getElementById('btn-story-present-bottom');
        const openPresentHandler = () => {
            openStoryReelPresentation();
        };
        if (btnPresent1 && !btnPresent1.dataset.bound) {
            btnPresent1.dataset.bound = 'true';
            btnPresent1.addEventListener('click', openPresentHandler);
        }
        if (btnPresent2 && !btnPresent2.dataset.bound) {
            btnPresent2.dataset.bound = 'true';
            btnPresent2.addEventListener('click', openPresentHandler);
        }

        // Copy Story Script
        const btnCopy = document.getElementById('btn-story-copy-script');
        if (btnCopy && !btnCopy.dataset.bound) {
            btnCopy.dataset.bound = 'true';
            btnCopy.addEventListener('click', copyStoryScriptToClipboard);
        }

        // Reset Story
        const btnReset = document.getElementById('btn-story-reset-all');
        if (btnReset && !btnReset.dataset.bound) {
            btnReset.dataset.bound = 'true';
            btnReset.addEventListener('click', () => {
                const sb = getSeniorStoryContext();
                const univ = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;
                sb.activeTwist = null;
                sb.customTitle = univ.defaultTitle;
                generateStoryPanels(sb, univ);
                saveState();
                renderSeniorStoryBuilder();
                audioEngine.playClick();
                audioEngine.speak(`Reset story! Ready to write ${univ.anchorTitle}: Chapter 2!`, true);
            });
        }

        // Read Full Comic Aloud
        const btnReadFull = document.getElementById('btn-story-read-full');
        if (btnReadFull && !btnReadFull.dataset.bound) {
            btnReadFull.dataset.bound = 'true';
            btnReadFull.addEventListener('click', readFullComicSequentially);
        }

        // Award Hearts
        const btnAward = document.getElementById('btn-story-award');
        if (btnAward && !btnAward.dataset.bound) {
            btnAward.dataset.bound = 'true';
            btnAward.addEventListener('click', () => {
                awardHeartToActiveStudent();
                awardHeartToActiveStudent();
                awardHeartToActiveStudent();
                triggerConfetti();
                audioEngine.playFanfare();
                audioEngine.speak("Super storytelling! 3 hearts awarded!");
            });
        }
    }

    /* --- MYSTERY TWIST SPINNER ENGINE --- */
    let selectedSpunTwist = null;

    function resetTwistModalDisplay() {
        const card = document.getElementById('twist-display-card');
        const icon = document.getElementById('twist-display-icon');
        const title = document.getElementById('twist-display-title');
        const desc = document.getElementById('twist-display-desc');
        const btnApply = document.getElementById('btn-apply-twist');

        if (card) card.classList.remove('spinning');
        if (icon) icon.innerText = '🎲';
        if (title) title.innerText = 'Mystery Twist Ready!';
        if (desc) desc.innerText = 'Click the button below to spin a thrilling plot twist for your story conflict!';
        if (btnApply) btnApply.classList.add('hidden');
        selectedSpunTwist = null;
    }

    function spinMysteryTwist() {
        const card = document.getElementById('twist-display-card');
        const icon = document.getElementById('twist-display-icon');
        const title = document.getElementById('twist-display-title');
        const desc = document.getElementById('twist-display-desc');
        const btnApply = document.getElementById('btn-apply-twist');
        const btnSpin = document.getElementById('btn-spin-twist');

        if (!card) return;
        if (btnSpin) btnSpin.disabled = true;
        card.classList.add('spinning');

        const sb = getSeniorStoryContext();
        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;
        const pool = universe.twists;

        let shuffleCount = 0;
        const maxShuffles = 18;

        const interval = setInterval(() => {
            shuffleCount++;
            const randIdx = Math.floor(Math.random() * pool.length);
            const item = pool[randIdx];

            if (icon) icon.innerText = item.icon;
            if (title) title.innerText = item.title;
            if (desc) desc.innerText = item.text;
            audioEngine.playClick();

            if (shuffleCount >= maxShuffles) {
                clearInterval(interval);
                card.classList.remove('spinning');
                if (btnSpin) btnSpin.disabled = false;

                selectedSpunTwist = item;
                audioEngine.playFanfare();
                triggerConfetti();
                audioEngine.speak(selectedSpunTwist.title + "! " + selectedSpunTwist.text, true);

                if (btnApply) {
                    btnApply.classList.remove('hidden');
                    btnApply.innerText = `⚡ Insert into Conflict Panel`;
                }
            }
        }, 90);
    }

    function applySelectedTwistToStory() {
        if (!selectedSpunTwist) return;
        const sb = getSeniorStoryContext();
        sb.activeTwist = selectedSpunTwist;
        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;
        generateStoryPanels(sb, universe);
        saveState();
        closeModal('modal-story-twist');
        renderSeniorStoryBuilder();
        audioEngine.playFanfare();
        audioEngine.speak("Twist added to your story climax! Let's write how the heroes solve it!", true);
    }

    /* --- STORY REEL PRESENTATION ENGINE --- */
    let currentReelPanelIndex = 0;
    let isReelAutoplaying = false;
    let reelAutoplayTimeout = null;

    function openStoryReelPresentation() {
        currentReelPanelIndex = 0;
        isReelAutoplaying = false;
        if (reelAutoplayTimeout) clearTimeout(reelAutoplayTimeout);

        openModal('modal-story-reel');
        renderStoryReelActivePanel();
        bindStoryReelControls();
        runStorySceneAutoplay();
    }

    function renderStoryReelActivePanel() {
        const sb = getSeniorStoryContext();
        const stage = document.getElementById('story-reel-stage');
        const indicator = document.getElementById('story-reel-indicator');
        const modalTitle = document.getElementById('story-reel-title');
        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;

        if (modalTitle) {
            modalTitle.innerText = `🎬 ${sb.customTitle || universe.defaultTitle}`;
        }

        const totalPanels = sb.panels.length;
        if (currentReelPanelIndex >= totalPanels) currentReelPanelIndex = totalPanels - 1;
        if (currentReelPanelIndex < 0) currentReelPanelIndex = 0;

        if (indicator) {
            indicator.innerText = `Panel ${currentReelPanelIndex + 1} of ${totalPanels}`;
        }

        const p = sb.panels[currentReelPanelIndex];
        if (!p || !stage) return;

        const mainChar = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
        const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];
        const panelSvg = getStoryComicSVG(sb.level, sb.settingId, sb.characterId, sb.propId, currentReelPanelIndex, sb.level, sb.activeTwist, sb.secondaryCharId);

        stage.innerHTML = `
            <div class="reel-svg-wrapper">
                ${panelSvg}
            </div>
            <div class="reel-caption-banner">
                <strong>Narration:</strong> "${p.caption || '...'}"
            </div>
            <div class="reel-speech-container">
                ${p.speech1 ? `
                    <div class="reel-speech-item">
                        <span>${mainChar.avatar}</span>
                        <span><strong>${mainChar.name}:</strong> "${p.speech1}"</span>
                    </div>
                ` : ''}

            </div>
        `;
    }

    function bindStoryReelControls() {
        const btnPrev = document.getElementById('btn-story-reel-prev');
        const btnNext = document.getElementById('btn-story-reel-next');
        const btnPlay = document.getElementById('btn-story-reel-play');
        const btnAutoplay = document.getElementById('btn-story-reel-autoplay');

        if (btnPrev && !btnPrev.dataset.bound) {
            btnPrev.dataset.bound = 'true';
            btnPrev.addEventListener('click', () => {
                isReelAutoplaying = false;
                if (reelAutoplayTimeout) clearTimeout(reelAutoplayTimeout);
                if (currentReelPanelIndex > 0) {
                    currentReelPanelIndex--;
                    renderStoryReelActivePanel();
                    audioEngine.playClick();
                    runStorySceneAutoplay();
                }
            });
        }

        if (btnNext && !btnNext.dataset.bound) {
            btnNext.dataset.bound = 'true';
            btnNext.addEventListener('click', () => {
                isReelAutoplaying = false;
                if (reelAutoplayTimeout) clearTimeout(reelAutoplayTimeout);
                const sb = getSeniorStoryContext();
                if (currentReelPanelIndex < sb.panels.length - 1) {
                    currentReelPanelIndex++;
                    renderStoryReelActivePanel();
                    audioEngine.playClick();
                    runStorySceneAutoplay();
                }
            });
        }

        if (btnPlay && !btnPlay.dataset.bound) {
            btnPlay.dataset.bound = 'true';
            btnPlay.addEventListener('click', () => {
                runStorySceneAutoplay();
            });
        }

        if (btnAutoplay && !btnAutoplay.dataset.bound) {
            btnAutoplay.dataset.bound = 'true';
            btnAutoplay.addEventListener('click', () => {
                if (isReelAutoplaying) {
                    isReelAutoplaying = false;
                    if (typeof audioEngine !== 'undefined' && audioEngine.stop) audioEngine.stop();
                    if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
                    btnAutoplay.innerHTML = '▶️ Autoplay Scene';
                } else {
                    runStorySceneAutoplay();
                }
            });
        }
    }

    function runStorySceneAutoplay() {
        if (typeof audioEngine !== 'undefined' && audioEngine.stop) audioEngine.stop();
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
        isReelAutoplaying = true;
        renderStoryReelActivePanel();

        const btnAutoplay = document.getElementById('btn-story-reel-autoplay');
        if (btnAutoplay) {
            btnAutoplay.innerHTML = '⏹️ Stop Scene';
        }

        speakStoryPanel(currentReelPanelIndex, () => {
            isReelAutoplaying = false;
            if (btnAutoplay) {
                btnAutoplay.innerHTML = '▶️ Autoplay Scene';
            }
            const sb = getSeniorStoryContext();
            if (currentReelPanelIndex === sb.panels.length - 1) {
                triggerConfetti();
                audioEngine.playFanfare();
                awardHeartToActiveStudent();
                awardHeartToActiveStudent();
                audioEngine.speak("Super story presentation! 2 stars awarded to our author!");
            }
        });
    }

    function runStoryReelAutoplay() {
        runStorySceneAutoplay();
    }

    function readFullComicSequentially() {
        const sb = getSeniorStoryContext();
        let idx = 0;

        function nextPanel() {
            if (idx >= sb.panels.length) {
                triggerConfetti();
                audioEngine.playFanfare();
                audioEngine.speak("Fantastic story! Give yourself a round of applause!");
                return;
            }
            speakStoryPanel(idx, () => {
                idx++;
                setTimeout(nextPanel, 1000);
            });
        }

        audioEngine.speak(`Here is our story: ${sb.customTitle}`, true, () => {
            setTimeout(nextPanel, 800);
        });
    }

    function copyStoryScriptToClipboard() {
        const sb = getSeniorStoryContext();
        const universe = STORY_UNIVERSES_DATA[sb.level] || STORY_UNIVERSES_DATA.intermediate;
        const mainChar = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
        const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];
        const setObj = universe.settings.find(s => s.id === sb.settingId) || universe.settings[0];
        const propObj = universe.props.find(p => p.id === sb.propId) || universe.props[0];

        let script = `📖 ${sb.customTitle || universe.defaultTitle}\n`;
        script += `🔗 Sequel to Reading Lab: "${universe.anchorTitle}"\n`;
        script += `🌍 Setting: ${setObj.name} | 🦸 Main Character: ${mainChar.name} | ⚡ Catalyst Prop: ${propObj.name}\n`;
        script += `Level: ${sb.level.toUpperCase()}\n\n`;

        sb.panels.forEach((p, idx) => {
            script += `[Panel ${idx + 1}: ${p.roleBadge}]\n`;
            script += `Narration: ${p.caption}\n`;
            if (p.speech1) {
                script += `${mainChar.name}: "${p.speech1}"\n`;
            }
            script += `\n`;
        });

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(script).then(() => {
                triggerConfetti();
                audioEngine.playCorrect();
                audioEngine.speak("Story script copied to clipboard! Ready to paste into Zoom chat!", true);
            }).catch(() => {
                fallbackCopyText(script);
            });
        } else {
            fallbackCopyText(script);
        }
    }

    function fallbackCopyText(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            triggerConfetti();
            audioEngine.playCorrect();
            audioEngine.speak("Story script copied to clipboard!", true);
        } catch (err) {
            alert("Could not copy automatically. You can copy the text manually.");
        }
        document.body.removeChild(ta);
    }

    /* ==========================================================================
       7. QUIZ GAMES ENGINE
       ========================================================================== */

    let currentQuizType = null;
    let currentQuizQuestion = null;
    let quizStars = 0;

    function awardHeartToActiveStudent() {
        quizStars++;
        if (appState.activeStudentId) {
            const student = appState.students.find(s => s.id === appState.activeStudentId);
            if (student) {
                student.stars = (student.stars || 0) + 1;
                saveState();
                renderScoreboard();
            }
        }
        updateHeartsDisplay();
    }

    function updateHeartsDisplay() {
        const scoreElemQuiz = document.getElementById('quiz-score-stars');
        if (scoreElemQuiz) scoreElemQuiz.innerText = quizStars;

        const scoreElemQuizStage = document.getElementById('quiz-stage-score-stars');
        if (scoreElemQuizStage) scoreElemQuizStage.innerText = quizStars;

        const scoreElemTeacher = document.getElementById('teacher-score-stars');
        if (scoreElemTeacher) scoreElemTeacher.innerText = quizStars;
    }

    function resetActiveStudentHearts() {
        quizStars = 0;
        if (appState.activeStudentId) {
            const student = appState.students.find(s => s.id === appState.activeStudentId);
            if (student) {
                student.stars = 0;
                saveState();
                renderScoreboard();
            }
        }
        updateHeartsDisplay();
        audioEngine.playClick();
    }

    const quizBadgeBtn = document.getElementById('quiz-menu-score-badge');
    if (quizBadgeBtn) {
        quizBadgeBtn.addEventListener('click', resetActiveStudentHearts);
    }

    const quizStageBadgeBtn = document.getElementById('quiz-stage-score-badge');
    if (quizStageBadgeBtn) {
        quizStageBadgeBtn.addEventListener('click', resetActiveStudentHearts);
    }

    const teacherBadgeBtn = document.getElementById('teacher-score-badge');
    if (teacherBadgeBtn) {
        teacherBadgeBtn.addEventListener('click', resetActiveStudentHearts);
    }

    const quizMenu = document.getElementById('quiz-menu');
    const quizGameArea = document.getElementById('quiz-game-area');

    document.querySelectorAll('.quiz-card').forEach(card => {
        card.addEventListener('click', () => {
            const quizType = card.getAttribute('data-quiz');
            if (quizType) {
                currentQuizType = quizType;

                // Dynamic title update on stage
                const h3Elem = card.querySelector('h3');
                if (h3Elem && document.getElementById('quiz-game-title')) {
                    document.getElementById('quiz-game-title').innerText = h3Elem.innerText;
                }

                // Switch to dedicated standalone view section for the quiz game
                switchView('view-quiz-stage');
            }
        });
    });

    /* ==========================================================================
       7.1 STANDALONE "FIND THE LETTER" GAME ENGINE
       ========================================================================== */
    let letterGameTarget = null;
    let letterGameChoices = [];

    function startFindTheLetterGame() {
        const promptText = document.getElementById('letter-part1-prompt');
        const optionsGrid = document.getElementById('letter-part1-grid');

        optionsGrid.innerHTML = '';

        // Pick 1 Target and 3 Distractors from ALPHABET_DATA
        letterGameTarget = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
        const distractors = ALPHABET_DATA.filter(a => a.letter !== letterGameTarget.letter)
            .sort(() => 0.5 - Math.random()).slice(0, 3);
        letterGameChoices = [letterGameTarget, ...distractors].sort(() => 0.5 - Math.random());

        promptText.innerText = `Which button is letter ${letterGameTarget.letter}?`;

        // Speak Prompt
        audioEngine.speak(`Find the letter ${letterGameTarget.letter}`, true);

        // Bind Repeat button
        const repeatBtn = document.getElementById('btn-letter-repeat-speech');
        if (repeatBtn) {
            repeatBtn.onclick = () => {
                audioEngine.speak(`Find the letter ${letterGameTarget.letter}`, true);
            };
        }

        // Render 4 Letter Option buttons
        letterGameChoices.forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.innerText = `${c.letter} ${c.lower}`;
            btn.onclick = () => {
                if (c.letter === letterGameTarget.letter) {
                    btn.classList.add('correct');
                    audioEngine.playCorrect();
                    audioEngine.speak(`Great job! That is letter ${c.letter}!`, true);
                    triggerConfetti();
                    awardHeartToActiveStudent();

                    // Automatically generate new letter question after 3.0s
                    setTimeout(startFindTheLetterGame, 3000);
                } else {
                    btn.classList.add('wrong');
                    audioEngine.playWrong();
                    audioEngine.speak(`Try again! Find letter ${letterGameTarget.letter}`, true);
                }
            };
            optionsGrid.appendChild(btn);
        });
    }

    document.getElementById('btn-quiz-repeat-prompt').addEventListener('click', () => {
        if (currentQuizQuestion && currentQuizQuestion.prompt) {
            audioEngine.speak(currentQuizQuestion.prompt);
        }
    });

    function generateNewQuizQuestion() {
        const questionText = document.getElementById('quiz-question-text');
        const questionVisual = document.getElementById('quiz-question-visual');
        const optionsGrid = document.getElementById('quiz-options-grid');

        questionVisual.innerHTML = '';
        optionsGrid.innerHTML = '';
        optionsGrid.classList.remove('memory-grid-layout');
        optionsGrid.classList.remove('hidden');

        switch (currentQuizType) {
            case 'letter': {
                const target = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
                const distractors = ALPHABET_DATA.filter(a => a.letter !== target.letter)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);
                const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

                currentQuizQuestion = {
                    prompt: `Find the letter ${target.letter}`,
                    correct: target.letter
                };

                questionText.innerText = `Which one is letter ${target.letter}?`;
                choices.forEach(c => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.innerText = `${c.letter} ${c.lower}`;
                    btn.onclick = () => handleQuizAnswer(c.letter === target.letter, btn);
                    optionsGrid.appendChild(btn);
                });
                break;
            }

            case 'colour': {
                const target = COLOURS_DATA[Math.floor(Math.random() * COLOURS_DATA.length)];
                const distractors = COLOURS_DATA.filter(c => c.name !== target.name)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);
                const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

                currentQuizQuestion = {
                    prompt: `Find the colour ${target.name}`,
                    correct: target.name
                };

                questionText.innerText = `Which tile is ${target.name}?`;
                choices.forEach(c => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.style.backgroundColor = c.hex;
                    btn.style.minHeight = '110px';
                    btn.style.borderRadius = '24px';
                    btn.style.border = '5px solid #ffffff';
                    btn.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                    btn.innerText = ''; // Pure color tile only - no text label!
                    btn.onclick = () => handleQuizAnswer(c.name === target.name, btn);
                    optionsGrid.appendChild(btn);
                });
                break;
            }

            case 'shape': {
                const target = SHAPES_DATA[Math.floor(Math.random() * SHAPES_DATA.length)];
                const distractors = SHAPES_DATA.filter(s => s.name !== target.name)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);
                const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

                currentQuizQuestion = {
                    prompt: `Find the ${target.name}`,
                    correct: target.name
                };

                questionText.innerText = `Which shape is a ${target.name}?`;
                choices.forEach(c => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.innerHTML = `<div style="width:60px;height:60px;">${getSVGGraphic(c.icon, '#6c5ce7')}</div><span>${c.name}</span>`;
                    btn.onclick = () => handleQuizAnswer(c.name === target.name, btn);
                    optionsGrid.appendChild(btn);
                });
                break;
            }

            case 'counting': {
                const count = Math.floor(Math.random() * 8) + 1; // 1 to 8
                currentQuizQuestion = {
                    prompt: `How many apples do you see?`,
                    correct: count
                };

                questionText.innerText = `How many objects do you see?`;
                for (let i = 0; i < count; i++) {
                    const span = document.createElement('div');
                    span.style.width = '50px';
                    span.style.height = '50px';
                    span.innerHTML = getSVGGraphic('apple', '#ff5252');
                    questionVisual.appendChild(span);
                }

                const choices = [count, count + 1, Math.max(1, count - 1), count + 2].sort(() => 0.5 - Math.random());
                choices.forEach(num => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.innerText = num.toString();
                    btn.onclick = () => handleQuizAnswer(num === count, btn);
                    optionsGrid.appendChild(btn);
                });
                break;
            }

            case 'wordstart': {
                const target = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
                const correctLetter = target.word.charAt(0).toUpperCase();

                currentQuizQuestion = {
                    prompt: `Which letter starts the word ${target.word}?`,
                    correct: correctLetter
                };

                questionText.innerText = `Which letter starts the word "${target.word}"?`;
                questionVisual.innerHTML = `<div style="width:90px;height:90px;margin:0 auto;">${getSVGGraphic(target.icon, '#00cec9')}</div>`;

                const distractors = ALPHABET_DATA.filter(a => a.letter !== correctLetter)
                    .sort(() => 0.5 - Math.random()).slice(0, 3).map(a => a.letter);
                const choices = [correctLetter, ...distractors].sort(() => 0.5 - Math.random());

                choices.forEach(l => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.innerText = l;
                    btn.onclick = () => handleQuizAnswer(l === correctLetter, btn);
                    optionsGrid.appendChild(btn);
                });
                break;
            }

            case 'picmatch': {
                const target = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
                currentQuizQuestion = {
                    prompt: `Which picture is a ${target.word}?`,
                    correct: target.word
                };

                questionText.innerText = `Which picture is a ${target.word}?`;

                const distractors = SIMPLE_WORDS_DATA.filter(w => w.word !== target.word)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);
                const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

                choices.forEach(w => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.innerHTML = `<div style="width:70px;height:70px;margin:0 auto;">${getSVGGraphic(w.icon, '#00cec9')}</div><span>${w.word}</span>`;
                    btn.onclick = () => handleQuizAnswer(w.word === target.word, btn);
                    optionsGrid.appendChild(btn);
                });
                break;
            }

            case 'truefalse': {
                const item = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
                const isTrue = Math.random() < 0.5;
                let displayedWord = item.word;

                if (!isTrue) {
                    const wrongItems = SIMPLE_WORDS_DATA.filter(w => w.word !== item.word);
                    displayedWord = wrongItems[Math.floor(Math.random() * wrongItems.length)].word;
                }

                currentQuizQuestion = {
                    prompt: `Is this picture a ${displayedWord}?`,
                    correct: isTrue ? 'True' : 'False'
                };

                questionText.innerText = `Is this a ${displayedWord}?`;
                questionVisual.innerHTML = `<div style="width:90px;height:90px;margin:0 auto;">${getSVGGraphic(item.icon, '#e84393')}</div>`;

                ['True', 'False'].forEach(ans => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.style.fontSize = '1.3rem';
                    btn.innerText = ans === 'True' ? '👍 Yes / True' : '👎 No / False';
                    btn.onclick = () => handleQuizAnswer((ans === 'True') === isTrue, btn);
                    optionsGrid.appendChild(btn);
                });
                break;
            }

            case 'memory': {
                questionText.innerText = `Find matching pairs!`;
                currentQuizQuestion = {
                    prompt: "Find matching pairs!",
                    correct: ""
                };
                optionsGrid.classList.add('memory-grid-layout');
                setupMemoryGame();
                break;
            }

            default: {
                // Fallback picture match
                const target = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
                questionText.innerText = `Which picture is a ${target.word}?`;
                currentQuizQuestion = { prompt: `Find the ${target.word}`, correct: target.word };

                const distractors = SIMPLE_WORDS_DATA.filter(w => w.word !== target.word)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);
                const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

                choices.forEach(w => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.innerHTML = `<div style="width:70px;height:70px;margin:0 auto;">${getSVGGraphic(w.icon, '#00cec9')}</div>`;
                    btn.onclick = () => handleQuizAnswer(w.word === target.word, btn);
                    optionsGrid.appendChild(btn);
                });
            }
        }

        if (currentQuizQuestion && currentQuizQuestion.prompt) {
            audioEngine.speak(currentQuizQuestion.prompt);
        }
    }

    function handleQuizAnswer(isCorrect, btnElem) {
        if (isCorrect) {
            btnElem.classList.add('correct');
            audioEngine.playCorrect();
            audioEngine.speak("Great job! That's correct!");
            triggerConfetti();
            awardHeartToActiveStudent();
            setTimeout(generateNewQuizQuestion, 3000);
        } else {
            btnElem.classList.add('wrong');
            audioEngine.playWrong();
            audioEngine.speak("Try again!");
        }
    }

    // Memory Matching Game Setup
    function setupMemoryGame() {
        const optionsGrid = document.getElementById('quiz-options-grid');
        optionsGrid.innerHTML = '';

        const allIcons = [
            'apple', 'bear', 'cat', 'dog', 'elephant', 'fish', 'giraffe', 'house', 
            'icecream', 'jellyfish', 'kite', 'lion', 'moon', 'nest', 'owl', 'penguin', 
            'queen', 'rocket', 'sun', 'star', 'heart', 'tree', 'bird', 'book', 
            'car', 'monkey', 'umbrella', 'violin', 'watermelon', 'xylophone', 'yacht', 
            'zebra', 'ball', 'duck', 'banana', 'milk', 'cake'
        ];

        // Pick 4 random icons for 4 pairs (8 cards total)
        const chosenIcons = allIcons.sort(() => 0.5 - Math.random()).slice(0, 4);
        const cards = [...chosenIcons, ...chosenIcons].sort(() => 0.5 - Math.random());

        let flippedCards = [];
        let matchedPairs = 0;
        const totalPairs = chosenIcons.length;

        cards.forEach((icon) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.setAttribute('data-icon', icon);
            card.innerText = '❓';

            card.onclick = () => {
                if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) return;

                card.classList.add('flipped');
                card.innerHTML = `<div style="width:60px;height:60px;margin:0 auto;">${getSVGGraphic(icon, '#fdcb6e')}</div>`;
                audioEngine.playClick();
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    if (flippedCards[0].getAttribute('data-icon') === flippedCards[1].getAttribute('data-icon')) {
                        audioEngine.playCorrect();
                        triggerConfetti();
                        flippedCards[0].classList.add('matched');
                        flippedCards[1].classList.add('matched');
                        flippedCards = [];
                        matchedPairs++;

                        // Check if all pairs are matched
                        if (matchedPairs === totalPairs) {
                            awardHeartToActiveStudent();
                            audioEngine.speak("Awesome memory matching! Here comes a new set!", true);
                            setTimeout(() => {
                                setupMemoryGame();
                            }, 3000);
                        }
                    } else {
                        setTimeout(() => {
                            audioEngine.playWrong();
                            flippedCards.forEach(c => {
                                c.classList.remove('flipped');
                                c.innerText = '❓';
                            });
                            flippedCards = [];
                        }, 1000);
                    }
                }
            };
            optionsGrid.appendChild(card);
        });
    }

    /* ==========================================================================
       8. TEACHER ZOOM PRESENTATION STAGE & TOOLS
       ========================================================================== */

    let teacherTimerInterval = null;
    let timerSecondsLeft = 0;

    const teacherDisplay = document.getElementById('teacher-stage-display');
    const teacherCategory = document.getElementById('teacher-stage-category');
    const teacherAnswerBox = document.getElementById('teacher-answer-box');
    const teacherAnswerText = document.getElementById('teacher-answer-text');
    const btnToggleAnswer = document.getElementById('btn-toggle-answer');

    let currentTeacherVocalAnswer = '';

    function resetAnswerBoxToHidden() {
        if (teacherAnswerBox) {
            teacherAnswerBox.classList.add('hidden');
        }
        if (btnToggleAnswer) {
            btnToggleAnswer.innerText = '👁️ Show Answer';
            btnToggleAnswer.className = 'btn btn-block btn-primary';
        }
    }

    if (btnToggleAnswer && teacherAnswerBox) {
        const updateAnswerToggleUI = () => {
            const isHidden = teacherAnswerBox.classList.contains('hidden');
            if (isHidden) {
                btnToggleAnswer.innerText = '👁️ Show Answer';
                btnToggleAnswer.className = 'btn btn-block btn-primary';
            } else {
                btnToggleAnswer.innerText = '🙈 Hide Answer';
                btnToggleAnswer.className = 'btn btn-block btn-amber';
            }
        };

        // Initialize label state
        updateAnswerToggleUI();

        btnToggleAnswer.addEventListener('click', () => {
            teacherAnswerBox.classList.toggle('hidden');
            audioEngine.playClick();
            updateAnswerToggleUI();

            // Speak vocal answer if revealed
            if (!teacherAnswerBox.classList.contains('hidden') && currentTeacherVocalAnswer) {
                audioEngine.speak(`That is correct. ${currentTeacherVocalAnswer}`, true);
            }
        });
    }

    document.getElementById('tbtn-rand-letter').addEventListener('click', () => {
        resetAnswerBoxToHidden();
        const item = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
        teacherCategory.innerText = 'BEGINNING LETTER GUESS';
        teacherDisplay.innerHTML = `<div style="width:130px;height:130px;margin:0 auto;">${getSVGGraphic(item.icon, '#6c5ce7')}</div><div style="font-size:1.6rem;margin-top:10px;">What letter does ${item.word} start with?</div>`;
        teacherAnswerText.innerText = `${item.letter} - ${item.word} (${item.sound})`;
        currentTeacherVocalAnswer = `${item.word} begins with ${item.letter}!`;
        audioEngine.speak(`What letter does ${item.word} start with?`);
    });

    document.getElementById('tbtn-rand-number').addEventListener('click', () => {
        resetAnswerBoxToHidden();
        const count = Math.floor(Math.random() * 8) + 1;
        const item = NUMBERS_DATA[count - 1];
        let iconsHTML = '';
        for (let i = 0; i < count; i++) {
            iconsHTML += `<div style="width:40px;height:40px;display:inline-block;margin:4px;">${getSVGGraphic('apple', '#ff5252')}</div>`;
        }
        teacherCategory.innerText = 'COUNTING GUESS';
        teacherDisplay.innerHTML = `<div>${iconsHTML}</div><div style="font-size:1.6rem;margin-top:10px;">How many objects do you see?</div>`;
        teacherAnswerText.innerText = `${item.digit} (${item.word})`;
        currentTeacherVocalAnswer = `there are ${item.word} objects!`;
        audioEngine.speak(`How many objects do you see?`);
    });

    document.getElementById('tbtn-rand-colour').addEventListener('click', () => {
        resetAnswerBoxToHidden();
        const item = COLOURS_DATA[Math.floor(Math.random() * COLOURS_DATA.length)];
        teacherCategory.innerText = 'COLOUR GUESS';
        teacherDisplay.innerHTML = `<div style="width:130px;height:130px;background:${item.hex};border-radius:50%;margin:0 auto;box-shadow:0 8px 20px rgba(0,0,0,0.2);"></div><div style="font-size:1.6rem;margin-top:10px;">What color is this?</div>`;
        teacherAnswerText.innerText = `${item.name} (${item.objectLabel})`;
        currentTeacherVocalAnswer = `the color is ${item.name}!`;
        audioEngine.speak(`What color is this?`);
    });

    document.getElementById('tbtn-rand-shape').addEventListener('click', () => {
        resetAnswerBoxToHidden();
        const item = SHAPES_DATA[Math.floor(Math.random() * SHAPES_DATA.length)];
        teacherCategory.innerText = 'SHAPE GUESS';
        teacherDisplay.innerHTML = `<div style="width:130px;height:130px;margin:0 auto;">${getSVGGraphic(item.icon, '#00b894')}</div><div style="font-size:1.6rem;margin-top:10px;">What shape is this?</div>`;
        teacherAnswerText.innerText = `${item.name} - ${item.desc}`;
        currentTeacherVocalAnswer = `the shape is a ${item.name}!`;
        audioEngine.speak(`What shape is this?`);
    });

    document.getElementById('tbtn-rand-word').addEventListener('click', () => {
        resetAnswerBoxToHidden();
        const item = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
        teacherCategory.innerText = 'WORD FLASHCARD GUESS';
        teacherDisplay.innerHTML = `<div style="width:130px;height:130px;margin:0 auto;">${getSVGGraphic(item.icon, '#e84393')}</div><div style="font-size:1.6rem;margin-top:10px;">What word is this picture?</div>`;
        teacherAnswerText.innerText = `${item.word} (${item.spelling})`;
        currentTeacherVocalAnswer = `the word is ${item.word}!`;
        audioEngine.speak(`What word is this picture?`);
    });

    const btnRandQuiz = document.getElementById('tbtn-rand-quiz');
    if (btnRandQuiz) {
        btnRandQuiz.addEventListener('click', () => {
            resetAnswerBoxToHidden();
            const item = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
            teacherCategory.innerText = 'RANDOM QUIZ QUESTION';
            teacherDisplay.innerHTML = `<div style="width:110px;height:110px;margin:0 auto;">${getSVGGraphic(item.icon, '#ff793f')}</div><div style="font-size:1.6rem;margin-top:8px;">What object is this?</div>`;
            teacherAnswerText.innerText = item.word;
            currentTeacherVocalAnswer = `the object is a ${item.word}!`;
            audioEngine.speak(`What object is this?`);
        });
    }

    // Zoom Timers
    document.querySelectorAll('[data-timer]').forEach(btn => {
        btn.addEventListener('click', () => {
            const secs = parseInt(btn.getAttribute('data-timer'));
            startTeacherTimer(secs);
        });
    });

    function startTeacherTimer(duration) {
        clearInterval(teacherTimerInterval);
        timerSecondsLeft = duration;
        updateTimerDisplay();

        teacherTimerInterval = setInterval(() => {
            timerSecondsLeft--;
            updateTimerDisplay();
            if (timerSecondsLeft <= 0) {
                clearInterval(teacherTimerInterval);
                audioEngine.playFanfare();
                audioEngine.speak("Time is up!");
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const mins = Math.floor(timerSecondsLeft / 60);
        const secs = timerSecondsLeft % 60;
        const fmt = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        document.getElementById('teacher-timer-digits').innerText = fmt;
    }

    document.getElementById('btn-timer-reset').addEventListener('click', () => {
        clearInterval(teacherTimerInterval);
        timerSecondsLeft = 0;
        updateTimerDisplay();
    });

    /* ==========================================================================
       9. STUDENT SCOREBOARD & REWARDS
       ========================================================================== */

    const modalScoreboard = document.getElementById('modal-scoreboard');
    document.getElementById('btn-scoreboard').addEventListener('click', () => {
        renderScoreboard();
        openModal('modal-scoreboard');
    });

    function updateActiveStudentNav() {
        const navContainer = document.getElementById('nav-active-student');
        const navAvatar = document.getElementById('nav-student-avatar');
        const navName = document.getElementById('nav-student-name');

        if (!navContainer) return;

        const activeStudent = appState.students.find(s => s.id === appState.activeStudentId);
        if (activeStudent) {
            const avatar = getStudentAvatar(activeStudent.name, activeStudent.gender);
            navAvatar.innerText = avatar;
            navName.innerText = activeStudent.name;
            navContainer.classList.remove('hidden');
        } else {
            navContainer.classList.add('hidden');
        }
    }

    window.selectStudent = function(id) {
        appState.activeStudentId = id;
        saveState();
        updateActiveStudentNav();
        renderScoreboard();

        const student = appState.students.find(s => s.id === id);
        if (student) {
            audioEngine.speak(`${student.name} selected for class!`, true);
        }

        // Close modal and return to main dashboard
        closeModal('modal-scoreboard');
        switchView('view-home');
    };

    window.toggleStudentGender = function(id) {
        const st = appState.students.find(s => s.id === id);
        if (st) {
            const currentAvatar = getStudentAvatar(st.name, st.gender);
            // Toggle explicit gender between boy and girl
            if (currentAvatar === '👧') {
                st.gender = 'boy';
            } else {
                st.gender = 'girl';
            }
            saveState();
            updateActiveStudentNav();
            renderScoreboard();
            audioEngine.playClick();
        }
    };

    function renderScoreboard() {
        const list = document.getElementById('scoreboard-list');
        list.innerHTML = '';

        // Sort students by stars
        const sorted = [...appState.students].sort((a, b) => b.stars - a.stars);

        let totalStars = 0;
        sorted.forEach((st, idx) => {
            totalStars += st.stars;
            const isSelected = st.id === appState.activeStudentId;
            const avatar = getStudentAvatar(st.name, st.gender);

            const card = document.createElement('div');
            card.className = `student-card ${isSelected ? 'active-selected' : ''}`;
            card.innerHTML = `
                <div class="student-info">
                    <span class="student-rank">#${idx + 1}</span>
                    <button class="btn btn-xs btn-purple" onclick="toggleStudentGender('${st.id}')" title="Click to toggle Boy/Girl picture">
                        ${avatar} ${avatar === '👧' ? 'Girl' : 'Boy'}
                    </button>
                    <span class="student-name">${st.name} ${isSelected ? '⭐' : ''}</span>
                </div>
                <div class="student-score-controls">
                    <button class="btn btn-xs ${isSelected ? 'btn-gold' : 'btn-teal'}" onclick="selectStudent('${st.id}')">
                        ${isSelected ? '✓ Selected' : '👉 Select Student'}
                    </button>
                    <button class="btn btn-xs btn-amber" onclick="updateStudentScore('${st.id}', 1)">❤️ +1</button>
                    <span class="score-display">${st.stars} ❤️</span>
                    <button class="btn btn-xs btn-gray" onclick="updateStudentScore('${st.id}', -1)">-1</button>
                    <button class="btn btn-xs btn-orange" onclick="resetStudentScore('${st.id}')" title="Reset this student's hearts to 0">🔄 Reset</button>
                    <button class="btn btn-xs btn-red" onclick="removeStudent('${st.id}')">🗑️</button>
                </div>
            `;
            list.appendChild(card);
        });

        // Calculate total score for active student (or sum total if no student selected)
        const activeSt = appState.activeStudentId ? appState.students.find(s => s.id === appState.activeStudentId) : null;
        const currentStudentScore = activeSt ? (activeSt.stars || 0) : totalStars;

        const navStarCountElem = document.getElementById('nav-star-count');
        if (navStarCountElem) {
            navStarCountElem.innerText = currentStudentScore;
        }

        // Sync active student's cumulative score into activity badges
        if (activeSt) {
            quizStars = activeSt.stars || 0;
            updateHeartsDisplay();
        }
    }

    window.updateStudentScore = function(id, delta) {
        const st = appState.students.find(s => s.id === id);
        if (st) {
            st.stars = Math.max(0, st.stars + delta);
            saveState();
            renderScoreboard();
            if (delta > 0) {
                audioEngine.playTone(600, 'sine', 0.15);
                triggerConfetti();
            }
        }
    };

    window.resetStudentScore = function(id) {
        const st = appState.students.find(s => s.id === id);
        if (st) {
            st.stars = 0;
            saveState();
            renderScoreboard();
            audioEngine.playClick();
        }
    };

    window.removeStudent = function(id) {
        appState.students = appState.students.filter(s => s.id !== id);
        saveState();
        updateActiveStudentNav();
        renderScoreboard();
    };

    document.getElementById('form-add-student').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('input-student-name');
        const genderSelect = document.getElementById('select-student-gender');
        const name = input.value.trim();
        const genderVal = genderSelect ? genderSelect.value : 'auto';

        if (name) {
            appState.students.push({
                id: 'st_' + Date.now(),
                name: name,
                stars: 0,
                points: 0,
                gender: genderVal !== 'auto' ? genderVal : null
            });
            input.value = '';
            if (genderSelect) genderSelect.value = 'auto';
            saveState();
            renderScoreboard();
        }
    });

    const btnResetScores = document.getElementById('btn-reset-scores');
    if (btnResetScores) {
        btnResetScores.addEventListener('click', () => {
            if (confirm("Reset scores to 0 for all students?")) {
                appState.students.forEach(st => st.stars = 0);
                quizStars = 0;
                saveState();
                renderScoreboard();
                updateHeartsDisplay();
            }
        });
    }

    // Winner Celebration Modal Trigger
    document.getElementById('btn-celebrate-winner').addEventListener('click', () => {
        modalScoreboard.classList.add('hidden');
        const topStudent = [...appState.students].sort((a, b) => b.stars - a.stars)[0];
        if (topStudent) {
            document.getElementById('winner-name').innerText = topStudent.name;
            document.getElementById('winner-stars').innerText = '❤️'.repeat(Math.min(topStudent.stars, 7));
            openModal('modal-winner');
            audioEngine.playFanfare();
            triggerConfetti();
        }
    });

    document.getElementById('btn-close-winner').addEventListener('click', () => {
        closeModal('modal-winner');
    });

    /* ==========================================================================
       10. LESSON PLANNER & HUD
       ========================================================================== */

    const modalPlanner = document.getElementById('modal-planner');
    document.getElementById('btn-planner').addEventListener('click', () => {
        renderPlanner();
        openModal('modal-planner');
    });

    function renderPlanner() {
        const plansList = document.getElementById('saved-plans-list');
        plansList.innerHTML = appState.plans.map(p => `
            <button class="plan-item-btn ${p.id === appState.activePlanId ? 'active' : ''}" onclick="selectPlan('${p.id}')">
                ${p.title}
            </button>
        `).join('');

        const activePlan = appState.plans.find(p => p.id === appState.activePlanId) || appState.plans[0];
        if (activePlan) {
            document.getElementById('plan-title-input').value = activePlan.title;
            const actList = document.getElementById('plan-activities-list');
            actList.innerHTML = activePlan.activities.map((act, i) => `
                <div class="activity-row">
                    <span style="font-weight:700;">#${i+1}</span>
                    <input type="text" class="act-name" value="${act.name}" placeholder="Activity Name">
                    <input type="number" class="act-dur" value="${act.duration}" min="1" max="60"> min
                    <input type="text" class="act-obj" value="${act.obj}" placeholder="Objective">
                </div>
            `).join('');
        }
    }

    window.selectPlan = function(id) {
        appState.activePlanId = id;
        saveState();
        renderPlanner();
    };

    document.getElementById('btn-start-lesson-hud').addEventListener('click', () => {
        closeModal('modal-planner');
        document.getElementById('active-lesson-hud').classList.remove('hidden');
        audioEngine.speak("Lesson started!");
    });

    /* ==========================================================================
       11. SETTINGS & LOCALSTORAGE BACKUP / EXPORT / IMPORT
       ========================================================================== */

    const modalSettings = document.getElementById('modal-settings');
    document.getElementById('btn-settings').addEventListener('click', () => {
        openModal('modal-settings');
    });

    // Quick Teacher Tools toolbar button
    const btnQuickTools = document.getElementById('btn-quick-teacher-tools');
    if (btnQuickTools) {
        btnQuickTools.addEventListener('click', () => {
            switchView('view-teacher');
        });
    }

    // Close Modals
    document.querySelectorAll('.btn-close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalOverlay = e.target.closest('.modal-overlay');
            if (modalOverlay) {
                closeModal(modalOverlay.id);
            } else {
                closeAllModals(true);
            }
        });
    });

    // Theme selector
    const setElemTheme = document.getElementById('set-theme');
    if (setElemTheme) {
        setElemTheme.value = appState.settings.theme || 'theme-default';
        setElemTheme.addEventListener('change', (e) => {
            document.body.className = `${e.target.value} ${appState.settings.fontSize}`;
            appState.settings.theme = e.target.value;
            saveState();
        });
    }

    // Font size selector
    const setElemFont = document.getElementById('set-fontsize');
    if (setElemFont) {
        setElemFont.value = appState.settings.fontSize || 'font-size-normal';
        setElemFont.addEventListener('change', (e) => {
            document.body.className = `${appState.settings.theme} ${e.target.value}`;
            appState.settings.fontSize = e.target.value;
            saveState();
        });
    }

    // Voice Selector Change Handler & LocalStorage Save
    const voiceSelect = document.getElementById('set-speech-voice');
    if (voiceSelect) {
        voiceSelect.addEventListener('change', (e) => {
            const chosenVoice = e.target.value;
            audioEngine.setVoice(chosenVoice);
            appState.settings.speechVoice = chosenVoice;
            saveState();
            audioEngine.speak("Voice updated!");
        });
    }

    // Speech Speed Rate Handler & LocalStorage Save
    const speedSlider = document.getElementById('set-speech-speed');
    if (speedSlider) {
        speedSlider.value = appState.settings.speechSpeed || 0.9;
        document.getElementById('val-speech-speed').innerText = `${speedSlider.value}x`;
        audioEngine.speechRate = parseFloat(speedSlider.value);

        speedSlider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            audioEngine.speechRate = val;
            appState.settings.speechSpeed = val;
            document.getElementById('val-speech-speed').innerText = `${val}x`;
            saveState();
        });
    }

    // Sound Effects Toggle Handler & LocalStorage Save
    const soundToggle = document.getElementById('set-sound-toggle');
    if (soundToggle) {
        soundToggle.checked = appState.settings.sound !== false;
        audioEngine.soundEnabled = soundToggle.checked;
        soundToggle.addEventListener('change', (e) => {
            audioEngine.soundEnabled = e.target.checked;
            appState.settings.sound = e.target.checked;
            saveState();
        });
    }

    // Data Import & Backup Trigger Buttons
    const importInput = document.getElementById('input-import-file');
    const importTrigger = document.getElementById('btn-data-import-trigger');
    if (importTrigger && importInput) {
        importTrigger.addEventListener('click', () => importInput.click());
        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (evt) => {
                try {
                    const imported = JSON.parse(evt.target.result);
                    appState = imported;
                    saveState();
                    alert('Data imported successfully!');
                    location.reload();
                } catch (err) {
                    alert('Invalid JSON file format.');
                }
            };
            reader.readAsText(file);
        });
    }

    const btnBackup = document.getElementById('btn-data-backup');
    if (btnBackup) {
        btnBackup.addEventListener('click', () => {
            localStorage.setItem('little_stars_backup', JSON.stringify(appState));
            alert('Backup created successfully!');
        });
    }

    const btnRestore = document.getElementById('btn-data-restore');
    if (btnRestore) {
        btnRestore.addEventListener('click', () => {
            const backup = localStorage.getItem('little_stars_backup');
            if (backup) {
                appState = JSON.parse(backup);
                saveState();
                alert('Backup restored!');
                location.reload();
            } else {
                alert('No backup found.');
            }
        });
    }

    // Fullscreen Toggle
    document.getElementById('btn-fullscreen').addEventListener('click', toggleFullScreen);
    document.getElementById('btn-teacher-fullscreen').addEventListener('click', toggleFullScreen);

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    }

    // Export Data JSON
    document.getElementById('btn-data-export').addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `littlestars_backup_${Date.now()}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });

    // Reset Data
    document.getElementById('btn-data-reset').addEventListener('click', () => {
        if (confirm("Are you sure you want to reset all students, scores, and custom lesson plans?")) {
            localStorage.removeItem('little_stars_state');
            location.reload();
        }
    });

    /* ==========================================================================
       12. HEART BURST & CELEBRATION CANVAS PARTICLE ENGINE
       ========================================================================== */

    const canvas = document.getElementById('celebration-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function triggerConfetti() {
        particles = [];
        const colors = ['#ff5252', '#ff7675', '#d63031', '#e84393', '#fd79a8', '#ff7675'];

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 18,
                vy: (Math.random() - 0.7) * 18,
                size: Math.random() * 18 + 14,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: (Math.random() - 0.5) * 40,
                vRot: (Math.random() - 0.5) * 2,
                opacity: 1
            });
        }
        requestAnimationFrame(renderConfetti);
    }

    function drawHeart(ctx, x, y, size, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = color;
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        // top left curve
        ctx.bezierCurveTo(
            0, 0, 
            -size / 2, 0, 
            -size / 2, topCurveHeight
        );
        // bottom left curve
        ctx.bezierCurveTo(
            -size / 2, (size + topCurveHeight) / 2, 
            0, size * 0.8, 
            0, size
        );
        // bottom right curve
        ctx.bezierCurveTo(
            0, size * 0.8, 
            size / 2, (size + topCurveHeight) / 2, 
            size / 2, topCurveHeight
        );
        // top right curve
        ctx.bezierCurveTo(
            size / 2, 0, 
            0, 0, 
            0, topCurveHeight
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function renderConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25; // Gentle gravity
            p.rotation += p.vRot;
            p.opacity -= 0.012;

            if (p.opacity > 0) {
                active = true;
                ctx.save();
                ctx.globalAlpha = Math.max(0, p.opacity);
                drawHeart(ctx, p.x, p.y, p.size, p.color);
                ctx.restore();
            }
        });

        if (active) {
            requestAnimationFrame(renderConfetti);
        }
    }

    document.getElementById('btn-trigger-confetti').addEventListener('click', () => {
        triggerConfetti();
        audioEngine.playFanfare();
        awardHeartToActiveStudent();
    });

    /* ==========================================================================
       13. APP INITIALIZATION
       ========================================================================== */

    // Apply saved theme & font size
    document.body.className = `${appState.settings.theme} ${appState.settings.fontSize}`;
    audioEngine.loadVoices();
    renderAlphabetStage();
    renderPhonicsStage();
    renderColourStage();
    renderNumberStage();
    renderShapeStage();
    renderWordStage();
    renderScoreboard();
    updateActiveStudentNav();

    // Disable automatic browser scroll restoration on refresh/load
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Always start fresh sessions on the main Home Dashboard snapped to top according to selected mode
    if (appState.studioMode === 'senior') {
        switchView('view-home-senior');
    } else {
        switchView('view-home');
    }
    window.scrollTo(0, 0);

    console.log("LittleStars Zoom Teacher Studio Initialized Successfully.");
});
