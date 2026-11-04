/* ==========================================================================
   SENIOR READING LAB CARTRIDGE: The Secret of the Quantum Key (Intermediate A2)
   ========================================================================== */

(function () {
    const cartridge = {
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
        passage: `Leo stared at the glowing metallic key sitting inside the glass chamber. Unlike normal brass keys, this key hummed with soft blue energy. Dr. Eve, his mentor, adjusted her lab goggles. "That quantum key aligns satellite signals across the solar system," she explained. Leo leaned closer as the crystal core began to pulse with light. Suddenly, a computer chime echoed in the lab. An encoded message from the Lunar Outpost had just arrived!`,
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
    };

    if (typeof SeniorReadingRegistry !== 'undefined') {
        SeniorReadingRegistry.register('intermediate', cartridge);
    } else if (typeof window !== 'undefined') {
        if (!window.SENIOR_STORIES_DATA) window.SENIOR_STORIES_DATA = { beginner: [], intermediate: [], advanced: [] };
        if (!window.SENIOR_STORIES_DATA.intermediate) window.SENIOR_STORIES_DATA.intermediate = [];
        window.SENIOR_STORIES_DATA.intermediate.push(cartridge);
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = cartridge;
    }
})();
