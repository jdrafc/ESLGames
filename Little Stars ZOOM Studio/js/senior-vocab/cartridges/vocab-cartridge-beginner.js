/* ==========================================================================
   SENIOR VOCABULARY & SPELLING CARTRIDGE: Head Words, Tail Words & Word Math (Beginner A1)
   ========================================================================== */

(function () {
    const cartridge = {
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
,
        get prefixes() { return this.head_words; },
        get suffixes() { return this.tail_words; },
        get prefix_suffix() { return this.head_words; }
    };

    if (typeof SeniorVocabRegistry !== 'undefined') {
        SeniorVocabRegistry.register('beginner', cartridge);
    } else if (typeof window !== 'undefined') {
        if (!window.SENIOR_VOCAB_DATA) window.SENIOR_VOCAB_DATA = {};
        window.SENIOR_VOCAB_DATA['beginner'] = cartridge;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = cartridge;
    }
})();
