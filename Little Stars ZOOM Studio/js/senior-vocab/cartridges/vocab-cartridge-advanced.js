/* ==========================================================================
   SENIOR VOCABULARY & SPELLING CARTRIDGE: Latin Roots, Complex Suffixes & Science Compounds (Advanced B1)
   ========================================================================== */

(function () {
    const cartridge = {
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
    };

    if (typeof SeniorVocabRegistry !== 'undefined') {
        SeniorVocabRegistry.register('advanced', cartridge);
    } else if (typeof window !== 'undefined') {
        if (!window.SENIOR_VOCAB_DATA) window.SENIOR_VOCAB_DATA = {};
        window.SENIOR_VOCAB_DATA['advanced'] = cartridge;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = cartridge;
    }
})();
