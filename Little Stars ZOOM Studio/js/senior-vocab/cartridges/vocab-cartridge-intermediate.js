/* ==========================================================================
   SENIOR VOCABULARY & SPELLING CARTRIDGE: Prefixes, Suffixes & Morphology (Intermediate A2)
   ========================================================================== */

(function () {
    const cartridge = {
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
    };

    if (typeof SeniorVocabRegistry !== 'undefined') {
        SeniorVocabRegistry.register('intermediate', cartridge);
    } else if (typeof window !== 'undefined') {
        if (!window.SENIOR_VOCAB_DATA) window.SENIOR_VOCAB_DATA = {};
        window.SENIOR_VOCAB_DATA['intermediate'] = cartridge;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = cartridge;
    }
})();
