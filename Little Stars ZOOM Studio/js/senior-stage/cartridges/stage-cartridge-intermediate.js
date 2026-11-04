/**
 * ============================================================================
 * SENIOR TEACHER STAGE CARTRIDGE: INTERMEDIATE (CEFR A2)
 * ============================================================================
 * Content calibrated for ESL Upper Elementary intermediate learners (Ages 8-10):
 * - Everyday Adventures, Sports, School, Nature, Animals & Real-World English
 * - 2 missing words in sentence completion (action pairs, phrasal verbs, comparatives)
 * - 2 missing letters in mystery word (vowel teams & phonics digraphs: ai, ea, oo, oa, ee, ou, sh, wh)
 * - Universal 1-or-2 finger camera gestures (☝️ 1 Finger vs ✌️ 2 Fingers)
 * - Strict 50/50 True/False distribution (4 True, 4 False)
 * ============================================================================
 */

(function(window) {
    'use strict';

    const STAGE_CARTRIDGE_INTERMEDIATE = {
        level: 'intermediate',
        cefr: 'A2',
        title: 'Intermediate Everyday Adventure Studio',
        description: 'Sports, animals, everyday stories, past tense action pairs, and phonics digraphs.',

        items: [
            // ----------------------------------------------------------------
            // 1. TRUE OR FALSE (Strictly 4 True / 4 False)
            // ----------------------------------------------------------------
            {
                id: 'tf_i_1',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'In soccer, regular players can kick the ball with their hands. ⚽',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! Only the goalkeeper is allowed to use hands!',
                praiseAudio: 'Spot on referee!',
                visualIcon: '⚽'
            },
            {
                id: 'tf_i_2',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'Kangaroos carry their baby joeys in a front pouch. 🦘',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Mother kangaroos have a pouch to keep their babies safe!',
                praiseAudio: 'Hop to it! Exactly right!',
                visualIcon: '🦘'
            },
            {
                id: 'tf_i_3',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'Winter is usually much hotter than summer. ❄️',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! Summer is the warmest season, and winter is cold!',
                praiseAudio: 'Cool thinking!',
                visualIcon: '❄️'
            },
            {
                id: 'tf_i_4',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'Busy honeybees make sweet honey inside their hive. 🐝',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Bees collect nectar from flowers to make delicious honey!',
                praiseAudio: 'Sweet answer!',
                visualIcon: '🐝'
            },
            {
                id: 'tf_i_5',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'A bicycle has four big rubber wheels. 🚲',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! A bicycle has two wheels, while a car has four!',
                praiseAudio: 'Sharp counting!',
                visualIcon: '🚲'
            },
            {
                id: 'tf_i_6',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'Birds use their feathered wings to fly up in the sky. 🦅',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Feathers and light wings help birds soar through the air!',
                praiseAudio: 'Soaring high!',
                visualIcon: '🦅'
            },
            {
                id: 'tf_i_7',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'Fish can breathe under water using their gills. 🐠',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Gills absorb oxygen directly from the water!',
                praiseAudio: 'Great marine fact!',
                visualIcon: '🐠'
            },
            {
                id: 'tf_i_8',
                gameType: 'tf',
                cefr: 'A2',
                category: 'TRUE OR FALSE?',
                prompt: 'You should go to sleep when the morning school bell rings. 🔔',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! The morning bell means it is time to wake up and learn!',
                praiseAudio: 'Haha, wide awake!',
                visualIcon: '🔔'
            },

            // ----------------------------------------------------------------
            // 2. WHICH WORD FITS? (2-Step Progressive Blanks)
            // ----------------------------------------------------------------
            {
                id: 'ww_i_1',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'Yesterday, Tom [   ] his bike and [X] to the park. 🚲',
                options: ['RODE', 'RIDE'],
                gestures: ['☝️ 1 Finger: RODE', '✌️ 2 Fingers: RIDE'],
                answerIndex: 0,
                answerText: 'RODE ... WENT',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['RODE', 'RIDE'],
                        gestures: ['☝️ 1 Finger: RODE', '✌️ 2 Fingers: RIDE'],
                        answerIndex: 0,
                        answerText: 'RODE'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['WENT', 'GO'],
                        gestures: ['☝️ 1 Finger: WENT', '✌️ 2 Fingers: GO'],
                        answerIndex: 0,
                        answerText: 'WENT'
                    }
                ],
                explanation: 'Yesterday means past tense: Tom rode his bike and went!',
                praiseAudio: 'Spot on past tense!',
                visualIcon: '🚲'
            },
            {
                id: 'ww_i_2',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'Please [   ] [X] your muddy boots before coming inside. 🥾',
                options: ['PUT', 'TAKE'],
                gestures: ['☝️ 1 Finger: PUT', '✌️ 2 Fingers: TAKE'],
                answerIndex: 1,
                answerText: 'TAKE OFF',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['PUT', 'TAKE'],
                        gestures: ['☝️ 1 Finger: PUT', '✌️ 2 Fingers: TAKE'],
                        answerIndex: 1,
                        answerText: 'TAKE'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['OFF', 'ON'],
                        gestures: ['☝️ 1 Finger: OFF', '✌️ 2 Fingers: ON'],
                        answerIndex: 0,
                        answerText: 'OFF'
                    }
                ],
                explanation: 'You take off muddy boots so the floor stays clean!',
                praiseAudio: 'Clean and polite!',
                visualIcon: '🥾'
            },
            {
                id: 'ww_i_3',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'A quick cheetah runs [   ] [X] a giant elephant. 🐆',
                options: ['FASTER', 'SLOWER'],
                gestures: ['☝️ 1 Finger: FASTER', '✌️ 2 Fingers: SLOWER'],
                answerIndex: 0,
                answerText: 'FASTER THAN',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['FASTER', 'SLOWER'],
                        gestures: ['☝️ 1 Finger: FASTER', '✌️ 2 Fingers: SLOWER'],
                        answerIndex: 0,
                        answerText: 'FASTER'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['THAN', 'THEN'],
                        gestures: ['☝️ 1 Finger: THAN', '✌️ 2 Fingers: THEN'],
                        answerIndex: 0,
                        answerText: 'THAN'
                    }
                ],
                explanation: 'Cheetahs are the fastest land runners: faster than!',
                praiseAudio: 'Lightning fast answer!',
                visualIcon: '🐆'
            },
            {
                id: 'ww_i_4',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'She [   ] her homework and then [X] her favorite game. 🎮',
                options: ['FINISH', 'FINISHED'],
                gestures: ['☝️ 1 Finger: FINISH', '✌️ 2 Fingers: FINISHED'],
                answerIndex: 1,
                answerText: 'FINISHED ... PLAYED',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['FINISH', 'FINISHED'],
                        gestures: ['☝️ 1 Finger: FINISH', '✌️ 2 Fingers: FINISHED'],
                        answerIndex: 1,
                        answerText: 'FINISHED'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['PLAY', 'PLAYED'],
                        gestures: ['☝️ 1 Finger: PLAY', '✌️ 2 Fingers: PLAYED'],
                        answerIndex: 1,
                        answerText: 'PLAYED'
                    }
                ],
                explanation: 'Both actions happened in the past: finished and played!',
                praiseAudio: 'Super grammar match!',
                visualIcon: '🎮'
            },
            {
                id: 'ww_i_5',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'They [   ] the yellow bus and [X] to school together. 🚌',
                options: ['CAUGHT', 'CATCH'],
                gestures: ['☝️ 1 Finger: CAUGHT', '✌️ 2 Fingers: CATCH'],
                answerIndex: 0,
                answerText: 'CAUGHT ... RODE',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['CAUGHT', 'CATCH'],
                        gestures: ['☝️ 1 Finger: CAUGHT', '✌️ 2 Fingers: CATCH'],
                        answerIndex: 0,
                        answerText: 'CAUGHT'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['RODE', 'RIDE'],
                        gestures: ['☝️ 1 Finger: RODE', '✌️ 2 Fingers: RIDE'],
                        answerIndex: 0,
                        answerText: 'RODE'
                    }
                ],
                explanation: 'Past tense pair: they caught the bus and rode to school!',
                praiseAudio: 'On time for school!',
                visualIcon: '🚌'
            },
            {
                id: 'ww_i_6',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'He was tired, [   ] he [X] went to soccer practice. ⚽',
                options: ['SO', 'BUT'],
                gestures: ['☝️ 1 Finger: SO', '✌️ 2 Fingers: BUT'],
                answerIndex: 1,
                answerText: 'BUT ... STILL',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['SO', 'BUT'],
                        gestures: ['☝️ 1 Finger: SO', '✌️ 2 Fingers: BUT'],
                        answerIndex: 1,
                        answerText: 'BUT'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['STILL', 'NEVER'],
                        gestures: ['☝️ 1 Finger: STILL', '✌️ 2 Fingers: NEVER'],
                        answerIndex: 0,
                        answerText: 'STILL'
                    }
                ],
                explanation: 'He was tired, BUT he STILL went! A great contrast connector!',
                praiseAudio: 'Brave and correct!',
                visualIcon: '⚽'
            },
            {
                id: 'ww_i_7',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'We [   ] our warm coats and [X] outside into the snow. ❄️',
                options: ['PUT ON', 'TOOK OFF'],
                gestures: ['☝️ 1 Finger: PUT ON', '✌️ 2 Fingers: TOOK OFF'],
                answerIndex: 0,
                answerText: 'PUT ON ... WENT',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['PUT ON', 'TOOK OFF'],
                        gestures: ['☝️ 1 Finger: PUT ON', '✌️ 2 Fingers: TOOK OFF'],
                        answerIndex: 0,
                        answerText: 'PUT ON'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['WENT', 'GO'],
                        gestures: ['☝️ 1 Finger: WENT', '✌️ 2 Fingers: GO'],
                        answerIndex: 0,
                        answerText: 'WENT'
                    }
                ],
                explanation: 'You put on warm coats and went outside into the snow!',
                praiseAudio: 'Warm and ready!',
                visualIcon: '❄️'
            },
            {
                id: 'ww_i_8',
                gameType: 'ww',
                cefr: 'A2',
                category: 'WHICH WORD FITS?',
                prompt: 'The sleepy kitten [   ] [X] the soft warm blanket. 🐱',
                options: ['JUMPED', 'CURLED UP'],
                gestures: ['☝️ 1 Finger: JUMPED', '✌️ 2 Fingers: CURLED UP'],
                answerIndex: 1,
                answerText: 'CURLED UP UNDER',
                steps: [
                    {
                        stepNumber: 1,
                        placeholder: '[   ]',
                        options: ['JUMPED', 'CURLED UP'],
                        gestures: ['☝️ 1 Finger: JUMPED', '✌️ 2 Fingers: CURLED UP'],
                        answerIndex: 1,
                        answerText: 'CURLED UP'
                    },
                    {
                        stepNumber: 2,
                        placeholder: '[X]',
                        options: ['UNDER', 'OVER'],
                        gestures: ['☝️ 1 Finger: UNDER', '✌️ 2 Fingers: OVER'],
                        answerIndex: 0,
                        answerText: 'UNDER'
                    }
                ],
                explanation: 'Kittens love to curl up under warm blankets to sleep!',
                praiseAudio: 'Cozy and correct!',
                visualIcon: '🐱'
            },

            // ----------------------------------------------------------------
            // 3. MYSTERY WORD (2 Missing Letters: Vowel Teams & Digraphs)
            // ----------------------------------------------------------------
            {
                id: 'mw_i_1',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  T R [ _ _ ] N  🚆',
                options: ['AI', 'AY'],
                gestures: ['☝️ 1 Finger: Letter AI', '✌️ 2 Fingers: Letter AY'],
                answerIndex: 0,
                answerText: 'AI',
                explanation: 'T - R - A - I - N spells TRAIN!',
                praiseAudio: 'All aboard! Exactly right!',
                visualIcon: '🚆'
            },
            {
                id: 'mw_i_2',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  B [ _ _ ] C H  🏖️',
                options: ['EE', 'EA'],
                gestures: ['☝️ 1 Finger: Letter EE', '✌️ 2 Fingers: Letter EA'],
                answerIndex: 1,
                answerText: 'EA',
                explanation: 'B - E - A - C - H spells BEACH!',
                praiseAudio: 'Sunny beach speller!',
                visualIcon: '🏖️'
            },
            {
                id: 'mw_i_3',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  S P [ _ _ ] N  🥄',
                options: ['OO', 'OU'],
                gestures: ['☝️ 1 Finger: Letter OO', '✌️ 2 Fingers: Letter OU'],
                answerIndex: 0,
                answerText: 'OO',
                explanation: 'S - P - O - O - N spells SPOON!',
                praiseAudio: 'Tasty spelling!',
                visualIcon: '🥄'
            },
            {
                id: 'mw_i_4',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  B [ _ _ ] T  ⛵',
                options: ['OE', 'OA'],
                gestures: ['☝️ 1 Finger: Letter OE', '✌️ 2 Fingers: Letter OA'],
                answerIndex: 1,
                answerText: 'OA',
                explanation: 'B - O - A - T spells BOAT!',
                praiseAudio: 'Smooth sailing!',
                visualIcon: '⛵'
            },
            {
                id: 'mw_i_5',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  C H [ _ _ ] S E  🧀',
                options: ['EE', 'EA'],
                gestures: ['☝️ 1 Finger: Letter EE', '✌️ 2 Fingers: Letter EA'],
                answerIndex: 0,
                answerText: 'EE',
                explanation: 'C - H - E - E - S - E spells CHEESE!',
                praiseAudio: 'Say cheese! Spot on!',
                visualIcon: '🧀'
            },
            {
                id: 'mw_i_6',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  M [ _ _ ] N T A I N  ⛰️',
                options: ['OW', 'OU'],
                gestures: ['☝️ 1 Finger: Letter OW', '✌️ 2 Fingers: Letter OU'],
                answerIndex: 1,
                answerText: 'OU',
                explanation: 'M - O - U - N - T - A - I - N spells MOUNTAIN!',
                praiseAudio: 'Peak performance!',
                visualIcon: '⛰️'
            },
            {
                id: 'mw_i_7',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  [ _ _ ] A R K  🦈',
                options: ['SH', 'CH'],
                gestures: ['☝️ 1 Finger: Letter SH', '✌️ 2 Fingers: Letter CH'],
                answerIndex: 0,
                answerText: 'SH',
                explanation: 'S - H - A - R - K spells SHARK!',
                praiseAudio: 'Great shark fact!',
                visualIcon: '🦈'
            },
            {
                id: 'mw_i_8',
                gameType: 'mw',
                cefr: 'A2',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  [ _ _ ] A L E  🐋',
                options: ['WA', 'WH'],
                gestures: ['☝️ 1 Finger: Letter WA', '✌️ 2 Fingers: Letter WH'],
                answerIndex: 1,
                answerText: 'WH',
                explanation: 'W - H - A - L - E spells WHALE!',
                praiseAudio: 'Gigantic success!',
                visualIcon: '🐋'
            }
        ]
    };

    if (typeof window !== 'undefined') {
        window.STAGE_CARTRIDGE_INTERMEDIATE = STAGE_CARTRIDGE_INTERMEDIATE;
    }
})(typeof window !== 'undefined' ? window : global);
