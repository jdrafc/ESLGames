/**
 * ============================================================================
 * SENIOR TEACHER STAGE CARTRIDGE: ADVANCED (CEFR B1)
 * ============================================================================
 * Calibrated specifically for 8–10 year old high-ability ESL learners:
 * - True / False: Brain teasers, grammar traps, idioms & vocabulary distinctions
 * - Which Word Fits: Homophones (weather/whether, its/it's, whose/there), conditionals & connectors
 * - Mystery Word: Silent letters (k, w, b, s, c), trigraphs (igh), and tricky spellings (rhythm, caught)
 * - Universal 1-or-2 finger camera gestures (☝️ 1 Finger vs ✌️ 2 Fingers)
 * - Strict 50/50 True/False balance (4 True, 4 False)
 * ============================================================================
 */

(function(window) {
    'use strict';

    const STAGE_CARTRIDGE_ADVANCED = {
        level: 'advanced',
        cefr: 'B1',
        title: 'Advanced Brain Teasers & Language Mastery',
        description: 'Brain teasers, grammar spot-checks, tricky homophones, conditionals, and silent-letter spelling.',

        items: [
            // ----------------------------------------------------------------
            // 1. TRUE OR FALSE (4 True / 4 False - Brain Teasers, Idioms & Logic)
            // ----------------------------------------------------------------
            {
                id: 'tf_a_1',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: '"She don\'t like broccoli." Is this sentence grammatically correct? 🥦',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! With "she", English grammar requires "doesn\'t": "She doesn\'t like broccoli!"',
                praiseAudio: 'Sharp grammar detective!',
                visualIcon: '🥦'
            },
            {
                id: 'tf_a_2',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: 'The idiom "it\'s raining cats and dogs" means real animals are falling. 🌧️',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! "Raining cats and dogs" is a famous idiom meaning it is pouring heavy rain!',
                praiseAudio: 'Brilliant idiom mastery!',
                visualIcon: '🌧️'
            },
            {
                id: 'tf_a_3',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: 'The words "silent" and "quiet" have almost the exact same meaning. 🤫',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! "Silent" and "quiet" are synonyms describing stillness without loud noise!',
                praiseAudio: 'Spot on synonym sense!',
                visualIcon: '🤫'
            },
            {
                id: 'tf_a_4',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: 'If you pass the runner in second place in a race, you are now in first place. 🥈',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! If you pass the person in second place, you take their spot in second place!',
                praiseAudio: 'Haha, clever brain teaser!',
                visualIcon: '🥈'
            },
            {
                id: 'tf_a_5',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: 'An antonym is a word that has the opposite meaning of another word. 🔄',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! For example, "enormous" and "tiny" are antonyms!',
                praiseAudio: 'Vocabulary superstar!',
                visualIcon: '🔄'
            },
            {
                id: 'tf_a_6',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: '"I have seen that movie yesterday." Is this sentence grammatically incorrect? 🎬',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! It is incorrect because a specific past time like "yesterday" takes past simple: "I saw that movie yesterday!"',
                praiseAudio: 'Advanced grammar mastery!',
                visualIcon: '🎬'
            },
            {
                id: 'tf_a_7',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: 'A person who writes books and stories is called an audience. ✍️',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! A person who writes books is an author; the audience is the crowd reading or listening!',
                praiseAudio: 'Sharp word distinctions!',
                visualIcon: '✍️'
            },
            {
                id: 'tf_a_8',
                gameType: 'tf',
                cefr: 'B1',
                category: 'TRUE OR FALSE?',
                prompt: '"Break a leg" is a theatre expression used to wish someone good luck. 🎭',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Performers say "break a leg" before going on stage to wish each other good luck!',
                praiseAudio: 'Stage star knowledge!',
                visualIcon: '🎭'
            },

            // ----------------------------------------------------------------
            // 2. WHICH WORD FITS? (2-Step Progressive Blanks: Homophones & Tricky Connectors)
            // ----------------------------------------------------------------
            {
                id: 'ww_a_1',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: 'The stormy [   ] blew hard, but the puppy wagged [X] tail. 🐶',
                options: ['WHETHER', 'WEATHER'],
                gestures: ['☝️ 1 Finger: WHETHER', '✌️ 2 Fingers: WEATHER'],
                answerIndex: 1,
                answerText: 'WEATHER ... ITS',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['WHETHER', 'WEATHER'],
                        gestures: ['☝️ 1 Finger: WHETHER', '✌️ 2 Fingers: WEATHER'],
                        answerIndex: 1,
                        answerText: 'WEATHER'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['ITS', "IT'S"],
                        gestures: ['☝️ 1 Finger: ITS', '✌️ 2 Fingers: IT\'S'],
                        answerIndex: 0,
                        answerText: 'ITS'
                    }
                ],
                explanation: '"Weather" is the climate outside, and "its" shows possession without an apostrophe!',
                praiseAudio: 'Homophone expert!',
                visualIcon: '🐶'
            },
            {
                id: 'ww_a_2',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: 'If we [   ] right now, we [X] catch the morning express bus. 🚌',
                options: ['LEAVE', 'LEFT'],
                gestures: ['☝️ 1 Finger: LEAVE', '✌️ 2 Fingers: LEFT'],
                answerIndex: 0,
                answerText: 'LEAVE ... WILL',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['LEAVE', 'LEFT'],
                        gestures: ['☝️ 1 Finger: LEAVE', '✌️ 2 Fingers: LEFT'],
                        answerIndex: 0,
                        answerText: 'LEAVE'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['WOULD', 'WILL'],
                        gestures: ['☝️ 1 Finger: WOULD', '✌️ 2 Fingers: WILL'],
                        answerIndex: 1,
                        answerText: 'WILL'
                    }
                ],
                explanation: 'First conditional: "If we leave right now, we will catch the bus!"',
                praiseAudio: 'Conditional champion!',
                visualIcon: '🚌'
            },
            {
                id: 'ww_a_3',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: 'The teacher gave great [   ] on how not to [X] the board game. 🎲',
                options: ['ADVISE', 'ADVICE'],
                gestures: ['☝️ 1 Finger: ADVISE', '✌️ 2 Fingers: ADVICE'],
                answerIndex: 1,
                answerText: 'ADVICE ... LOSE',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['ADVISE', 'ADVICE'],
                        gestures: ['☝️ 1 Finger: ADVISE', '✌️ 2 Fingers: ADVICE'],
                        answerIndex: 1,
                        answerText: 'ADVICE'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['LOSE', 'LOOSE'],
                        gestures: ['☝️ 1 Finger: LOSE', '✌️ 2 Fingers: LOOSE'],
                        answerIndex: 0,
                        answerText: 'LOSE'
                    }
                ],
                explanation: '"Advice" is the noun (helpful guidance), and "lose" means the opposite of win!',
                praiseAudio: 'Tricky pair conquered!',
                visualIcon: '🎲'
            },
            {
                id: 'ww_a_4',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: '[   ] they were exhausted, the brave scouts [X] climbing upward. 🏔️',
                options: ['ALTHOUGH', 'BECAUSE'],
                gestures: ['☝️ 1 Finger: ALTHOUGH', '✌️ 2 Fingers: BECAUSE'],
                answerIndex: 0,
                answerText: 'ALTHOUGH ... KEPT',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['ALTHOUGH', 'BECAUSE'],
                        gestures: ['☝️ 1 Finger: ALTHOUGH', '✌️ 2 Fingers: BECAUSE'],
                        answerIndex: 0,
                        answerText: 'ALTHOUGH'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['STOPPED', 'KEPT'],
                        gestures: ['☝️ 1 Finger: STOPPED', '✌️ 2 Fingers: KEPT'],
                        answerIndex: 1,
                        answerText: 'KEPT'
                    }
                ],
                explanation: '"Although" introduces contrast: despite being tired, they kept climbing!',
                praiseAudio: 'True grit and grammar!',
                visualIcon: '🏔️'
            },
            {
                id: 'ww_a_5',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: 'Leo [   ] the ball straight [X] the open garden gate. ⚾',
                options: ['THREW', 'THROUGH'],
                gestures: ['☝️ 1 Finger: THREW', '✌️ 2 Fingers: THROUGH'],
                answerIndex: 0,
                answerText: 'THREW ... THROUGH',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['THREW', 'THROUGH'],
                        gestures: ['☝️ 1 Finger: THREW', '✌️ 2 Fingers: THROUGH'],
                        answerIndex: 0,
                        answerText: 'THREW'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['THREW', 'THROUGH'],
                        gestures: ['☝️ 1 Finger: THREW', '✌️ 2 Fingers: THROUGH'],
                        answerIndex: 1,
                        answerText: 'THROUGH'
                    }
                ],
                explanation: '"Threw" is the past of throw; "through" means passing inside or across!',
                praiseAudio: 'Double homophone ace!',
                visualIcon: '⚾'
            },
            {
                id: 'ww_a_6',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: 'The detective asked [   ] jacket was hanging over [X] on the hook. 🧥',
                options: ["WHO'S", 'WHOSE'],
                gestures: ['☝️ 1 Finger: WHO\'S', '✌️ 2 Fingers: WHOSE'],
                answerIndex: 1,
                answerText: 'WHOSE ... THERE',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ["WHO'S", 'WHOSE'],
                        gestures: ['☝️ 1 Finger: WHO\'S', '✌️ 2 Fingers: WHOSE'],
                        answerIndex: 1,
                        answerText: 'WHOSE'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['THERE', 'THEIR'],
                        gestures: ['☝️ 1 Finger: THERE', '✌️ 2 Fingers: THEIR'],
                        answerIndex: 0,
                        answerText: 'THERE'
                    }
                ],
                explanation: '"Whose" asks about ownership, and "there" specifies a physical location!',
                praiseAudio: 'Master detective logic!',
                visualIcon: '🧥'
            },
            {
                id: 'ww_a_7',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: 'After hiking all day, she was [   ] tired [X] keep her eyes open. 🥱',
                options: ['TOO', 'TWO'],
                gestures: ['☝️ 1 Finger: TOO', '✌️ 2 Fingers: TWO'],
                answerIndex: 0,
                answerText: 'TOO ... TO',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['TOO', 'TWO'],
                        gestures: ['☝️ 1 Finger: TOO', '✌️ 2 Fingers: TWO'],
                        answerIndex: 0,
                        answerText: 'TOO'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['AT', 'TO'],
                        gestures: ['☝️ 1 Finger: AT', '✌️ 2 Fingers: TO'],
                        answerIndex: 1,
                        answerText: 'TO'
                    }
                ],
                explanation: '"Too ... to" shows excessive degree: too tired to keep eyes open!',
                praiseAudio: 'Classic grammar precision!',
                visualIcon: '🥱'
            },
            {
                id: 'ww_a_8',
                gameType: 'ww',
                cefr: 'B1',
                category: 'WHICH WORD FITS?',
                prompt: 'The compass showed [   ] they should turn [X] or west at the fork. 🧭',
                options: ['WEATHER', 'WHETHER'],
                gestures: ['☝️ 1 Finger: WEATHER', '✌️ 2 Fingers: WHETHER'],
                answerIndex: 1,
                answerText: 'WHETHER ... RIGHT',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['WEATHER', 'WHETHER'],
                        gestures: ['☝️ 1 Finger: WEATHER', '✌️ 2 Fingers: WHETHER'],
                        answerIndex: 1,
                        answerText: 'WHETHER'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['RIGHT', 'WRITE'],
                        gestures: ['☝️ 1 Finger: RIGHT', '✌️ 2 Fingers: WRITE'],
                        answerIndex: 0,
                        answerText: 'RIGHT'
                    }
                ],
                explanation: '"Whether" introduces an alternative choice, and "right" is the opposite of left!',
                praiseAudio: 'Flawless direction!',
                visualIcon: '🧭'
            },

            // ----------------------------------------------------------------
            // 3. MYSTERY WORD (Silent Letters, Complex Digraphs & Tricky Spellings)
            // ----------------------------------------------------------------
            {
                id: 'mw_a_1',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letters complete the word?  K N [ _ _ ] L E D G E  📚',
                options: ['AW', 'OW'],
                gestures: ['☝️ 1 Finger: Letter AW', '✌️ 2 Fingers: Letter OW'],
                answerIndex: 1,
                answerText: 'OW',
                explanation: 'K - N - O - W - L - E - D - G - E spells KNOWLEDGE with silent k and "ow"!',
                praiseAudio: 'Pure knowledge power!',
                visualIcon: '📚'
            },
            {
                id: 'mw_a_2',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letters complete the word?  W H [ _ _ ] T L E  🎵',
                options: ['IS', 'ES'],
                gestures: ['☝️ 1 Finger: Letter IS', '✌️ 2 Fingers: Letter ES'],
                answerIndex: 0,
                answerText: 'IS',
                explanation: 'W - H - I - S - T - L - E spells WHISTLE with a silent t!',
                praiseAudio: 'Tune-perfect spelling!',
                visualIcon: '🎵'
            },
            {
                id: 'mw_a_3',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letters complete the word?  D [ _ _ ] B T  🤔',
                options: ['OW', 'OU'],
                gestures: ['☝️ 1 Finger: Letter OW', '✌️ 2 Fingers: Letter OU'],
                answerIndex: 1,
                answerText: 'OU',
                explanation: 'D - O - U - B - T spells DOUBT: no doubt about that silent b!',
                praiseAudio: 'Zero doubt, pure genius!',
                visualIcon: '🤔'
            },
            {
                id: 'mw_a_4',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letters complete the word?  C [ _ _ _ ] H T  🎣',
                options: ['AUG', 'OUG'],
                gestures: ['☝️ 1 Finger: Letter AUG', '✌️ 2 Fingers: Letter OUG'],
                answerIndex: 0,
                answerText: 'AUG',
                explanation: 'C - A - U - G - H - T spells CAUGHT: past tense of catch uses -aught!',
                praiseAudio: 'Caught the right spelling!',
                visualIcon: '🎣'
            },
            {
                id: 'mw_a_5',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  I S [ _ ] A N D  🏝️',
                options: ['R', 'L'],
                gestures: ['☝️ 1 Finger: Letter R', '✌️ 2 Fingers: Letter L'],
                answerIndex: 1,
                answerText: 'L',
                explanation: 'I - S - L - A - N - D spells ISLAND with a silent letter s!',
                praiseAudio: 'Tropical island master!',
                visualIcon: '🏝️'
            },
            {
                id: 'mw_a_6',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letters complete the word?  S C I [ _ _ ] C E  🔬',
                options: ['EN', 'AN'],
                gestures: ['☝️ 1 Finger: Letter EN', '✌️ 2 Fingers: Letter AN'],
                answerIndex: 0,
                answerText: 'EN',
                explanation: 'S - C - I - E - N - C - E spells SCIENCE with silent c and "en"!',
                praiseAudio: 'Scientific brilliance!',
                visualIcon: '🔬'
            },
            {
                id: 'mw_a_7',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letters complete the word?  R H [ _ _ ] H M  🥁',
                options: ['IT', 'YT'],
                gestures: ['☝️ 1 Finger: Letter IT', '✌️ 2 Fingers: Letter YT'],
                answerIndex: 1,
                answerText: 'YT',
                explanation: 'R - H - Y - T - H - M spells RHYTHM using letter y for the vowel sound!',
                praiseAudio: 'Got the spelling rhythm!',
                visualIcon: '🥁'
            },
            {
                id: 'mw_a_8',
                gameType: 'mw',
                cefr: 'B1',
                category: 'MYSTERY WORD',
                prompt: 'Which letters complete the word?  K N [ _ _ _ ] T  ⚔️',
                options: ['IGH', 'ITE'],
                gestures: ['☝️ 1 Finger: Letter IGH', '✌️ 2 Fingers: Letter ITE'],
                answerIndex: 0,
                answerText: 'IGH',
                explanation: 'K - N - I - G - H - T spells KNIGHT with silent k and trigraph "igh"!',
                praiseAudio: 'Knight-level excellence!',
                visualIcon: '⚔️'
            }
        ]
    };

    if (typeof window !== 'undefined') {
        window.STAGE_CARTRIDGE_ADVANCED = STAGE_CARTRIDGE_ADVANCED;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = STAGE_CARTRIDGE_ADVANCED;
    }
})(typeof window !== 'undefined' ? window : global);
