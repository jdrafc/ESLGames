/**
 * ============================================================================
 * SENIOR TEACHER STAGE CARTRIDGE: BEGINNER (CEFR A1)
 * ============================================================================
 * Content calibrated for ESL Upper Elementary beginners (Ages 8-10):
 * - Short high-frequency words (3-4 letters)
 * - Clear, unambiguous visual cues and emojis
 * - Universal 1-or-2 finger camera gestures (☝️ 1 Finger vs ✌️ 2 Fingers)
 * - Strict 50/50 True/False distribution (4 True, 4 False)
 * ============================================================================
 */

(function(window) {
    'use strict';

    const STAGE_CARTRIDGE_BEGINNER = {
        level: 'beginner',
        cefr: 'A1',
        title: 'Beginner Studio Challenge',
        description: 'Visual sight words, animal facts, and early phonics with simple 1-or-2 finger choices.',

        items: [
            // ----------------------------------------------------------------
            // 1. TRUE OR FALSE (Strictly 4 True / 4 False)
            // ----------------------------------------------------------------
            {
                id: 'tf_b_1',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'Sharks have feathers and wings. 🦈',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! Sharks have fins and swim in water!',
                praiseAudio: 'Brilliant catch!',
                visualIcon: '🦈'
            },
            {
                id: 'tf_b_2',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'Dogs can bark and run. 🐶',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Dogs bark and love to run in the park!',
                praiseAudio: 'Spot on!',
                visualIcon: '🐶'
            },
            {
                id: 'tf_b_3',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'Ripe bananas are bright blue. 🍌',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! Ripe bananas are bright yellow!',
                praiseAudio: 'You got it!',
                visualIcon: '🍌'
            },
            {
                id: 'tf_b_4',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'Fish sleep with their eyes open. 🐟',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Fish do not have eyelids!',
                praiseAudio: 'Super smart!',
                visualIcon: '🐟'
            },
            {
                id: 'tf_b_5',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'An apple is a kind of car. 🍎',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! An apple is a healthy fruit to eat!',
                praiseAudio: 'Haha, exactly!',
                visualIcon: '🍎'
            },
            {
                id: 'tf_b_6',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'Ice cream melts when it gets hot. 🍦',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Heat melts sweet ice cream quickly!',
                praiseAudio: 'Yummy and correct!',
                visualIcon: '🍦'
            },
            {
                id: 'tf_b_7',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'You can drink hot soup with a fork. 🥣',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 1,
                answerText: 'FALSE',
                explanation: 'False! You need a spoon to drink soup!',
                praiseAudio: 'That is right!',
                visualIcon: '🥣'
            },
            {
                id: 'tf_b_8',
                gameType: 'tf',
                cefr: 'A1',
                category: 'TRUE OR FALSE?',
                prompt: 'Cats can climb up tall green trees. 🐱',
                options: ['TRUE', 'FALSE'],
                gestures: ['☝️ 1 Finger: TRUE', '✌️ 2 Fingers: FALSE'],
                answerIndex: 0,
                answerText: 'TRUE',
                explanation: 'True! Cats use sharp claws to climb high!',
                praiseAudio: 'Great job!',
                visualIcon: '🐱'
            },

            // ----------------------------------------------------------------
            // 2. WHICH WORD FITS? (Binary 2-Choice Sentence Completion)
            // ----------------------------------------------------------------
            {
                id: 'ww_b_1',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'I can see three little ______ in the grass.',
                options: ['DOG', 'DOGS'],
                gestures: ['☝️ 1 Finger: DOG', '✌️ 2 Fingers: DOGS'],
                answerIndex: 1,
                answerText: 'DOGS',
                explanation: 'There are three, so we say dogs with an s!',
                praiseAudio: 'Awesome plural!',
                visualIcon: '🐶'
            },
            {
                id: 'ww_b_2',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'She ______ a sweet red apple for snack.',
                options: ['ATE', 'DRANK'],
                gestures: ['☝️ 1 Finger: ATE', '✌️ 2 Fingers: DRANK'],
                answerIndex: 0,
                answerText: 'ATE',
                explanation: 'She ate the apple because you eat fruit!',
                praiseAudio: 'Perfect word!',
                visualIcon: '🍎'
            },
            {
                id: 'ww_b_3',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'The warm yellow sun shines in the ______.',
                options: ['SKY', 'SEA'],
                gestures: ['☝️ 1 Finger: SKY', '✌️ 2 Fingers: SEA'],
                answerIndex: 0,
                answerText: 'SKY',
                explanation: 'The sun shines high up in the blue sky!',
                praiseAudio: 'Bright and correct!',
                visualIcon: '☀️'
            },
            {
                id: 'ww_b_4',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'Leo ______ a soccer ball. ⚽',
                options: ['HAS', 'HAVE'],
                gestures: ['☝️ 1 Finger: HAS', '✌️ 2 Fingers: HAVE'],
                answerIndex: 0,
                answerText: 'HAS',
                explanation: 'Leo is one boy, so we say Leo has a soccer ball!',
                praiseAudio: 'Spot on grammar!',
                visualIcon: '⚽'
            },
            {
                id: 'ww_b_5',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'A quick little rabbit can ______ very high.',
                options: ['SWIM', 'JUMP'],
                gestures: ['☝️ 1 Finger: SWIM', '✌️ 2 Fingers: JUMP'],
                answerIndex: 1,
                answerText: 'JUMP',
                explanation: 'Rabbits use their strong back legs to jump!',
                praiseAudio: 'High bounce!',
                visualIcon: '🐰'
            },
            {
                id: 'ww_b_6',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'We walked to school ______ our best friend.',
                options: ['WITH', 'UNDER'],
                gestures: ['☝️ 1 Finger: WITH', '✌️ 2 Fingers: UNDER'],
                answerIndex: 0,
                answerText: 'WITH',
                explanation: 'We walk with a friend together!',
                praiseAudio: 'Friendly and correct!',
                visualIcon: '🎒'
            },
            {
                id: 'ww_b_7',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'An elephant is very ______, but a mouse is tiny.',
                options: ['BIG', 'COLD'],
                gestures: ['☝️ 1 Finger: BIG', '✌️ 2 Fingers: COLD'],
                answerIndex: 0,
                answerText: 'BIG',
                explanation: 'An elephant is enormous and big!',
                praiseAudio: 'Big answer!',
                visualIcon: '🐘'
            },
            {
                id: 'ww_b_8',
                gameType: 'ww',
                cefr: 'A1',
                category: 'WHICH WORD FITS?',
                prompt: 'Look up in the air at ______ flying kite!',
                options: ['THAT', 'THESE'],
                gestures: ['☝️ 1 Finger: THAT', '✌️ 2 Fingers: THESE'],
                answerIndex: 0,
                answerText: 'THAT',
                explanation: 'It is one kite over there, so we say that kite!',
                praiseAudio: 'Super sharp!',
                visualIcon: '🪁'
            },

            // ----------------------------------------------------------------
            // 3. MYSTERY WORD (Pick the Missing Letter: 1 or 2 Fingers)
            // ----------------------------------------------------------------
            {
                id: 'mw_b_1',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  D [ _ ] G  🐶',
                options: ['O', 'E'],
                gestures: ['☝️ 1 Finger: Letter O', '✌️ 2 Fingers: Letter E'],
                answerIndex: 0,
                answerText: 'O',
                explanation: 'D - O - G spells DOG!',
                praiseAudio: 'Woof! Exactly right!',
                visualIcon: '🐶'
            },
            {
                id: 'mw_b_2',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  C [ _ ] T  🐱',
                options: ['A', 'U'],
                gestures: ['☝️ 1 Finger: Letter A', '✌️ 2 Fingers: Letter U'],
                answerIndex: 0,
                answerText: 'A',
                explanation: 'C - A - T spells CAT!',
                praiseAudio: 'Meow! Spot on!',
                visualIcon: '🐱'
            },
            {
                id: 'mw_b_3',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  S [ _ ] N  ☀️',
                options: ['E', 'U'],
                gestures: ['☝️ 1 Finger: Letter E', '✌️ 2 Fingers: Letter U'],
                answerIndex: 1,
                answerText: 'U',
                explanation: 'S - U - N spells SUN!',
                praiseAudio: 'Shining bright!',
                visualIcon: '☀️'
            },
            {
                id: 'mw_b_4',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  F [ _ ] S H  🐟',
                options: ['I', 'O'],
                gestures: ['☝️ 1 Finger: Letter I', '✌️ 2 Fingers: Letter O'],
                answerIndex: 0,
                answerText: 'I',
                explanation: 'F - I - S - H spells FISH!',
                praiseAudio: 'Great catch!',
                visualIcon: '🐟'
            },
            {
                id: 'mw_b_5',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  C [ _ ] R  🚗',
                options: ['I', 'A'],
                gestures: ['☝️ 1 Finger: Letter I', '✌️ 2 Fingers: Letter A'],
                answerIndex: 1,
                answerText: 'A',
                explanation: 'C - A - R spells CAR!',
                praiseAudio: 'Beep beep! Correct!',
                visualIcon: '🚗'
            },
            {
                id: 'mw_b_6',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  B [ _ ] L L  ⚽',
                options: ['A', 'E'],
                gestures: ['☝️ 1 Finger: Letter A', '✌️ 2 Fingers: Letter E'],
                answerIndex: 0,
                answerText: 'A',
                explanation: 'B - A - L - L spells BALL!',
                praiseAudio: 'Goal! Perfect spelling!',
                visualIcon: '⚽'
            },
            {
                id: 'mw_b_7',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  D [ _ ] C K  🦆',
                options: ['U', 'I'],
                gestures: ['☝️ 1 Finger: Letter U', '✌️ 2 Fingers: Letter I'],
                answerIndex: 0,
                answerText: 'U',
                explanation: 'D - U - C - K spells DUCK!',
                praiseAudio: 'Quack! Super fast!',
                visualIcon: '🦆'
            },
            {
                id: 'mw_b_8',
                gameType: 'mw',
                cefr: 'A1',
                category: 'MYSTERY WORD',
                prompt: 'Which letter completes the word?  B O [ _ ] K  📖',
                options: ['E', 'O'],
                gestures: ['☝️ 1 Finger: Letter E', '✌️ 2 Fingers: Letter O'],
                answerIndex: 1,
                answerText: 'O',
                explanation: 'B - O - O - K spells BOOK!',
                praiseAudio: 'Brilliant reader!',
                visualIcon: '📖'
            }
        ]
    };

    // Expose on global window object
    window.STAGE_CARTRIDGE_BEGINNER = STAGE_CARTRIDGE_BEGINNER;

})(window);
