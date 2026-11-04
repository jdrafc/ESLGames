/* ==========================================================================
   SENIOR READING LAB CARTRIDGE: Journey to the Glowing Coral Reef (Advanced B1)
   ========================================================================== */

(function () {
    const cartridge = {
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
    };

    if (typeof SeniorReadingRegistry !== 'undefined') {
        SeniorReadingRegistry.register('advanced', cartridge);
    } else if (typeof window !== 'undefined') {
        if (!window.SENIOR_STORIES_DATA) window.SENIOR_STORIES_DATA = { beginner: [], intermediate: [], advanced: [] };
        if (!window.SENIOR_STORIES_DATA.advanced) window.SENIOR_STORIES_DATA.advanced = [];
        window.SENIOR_STORIES_DATA.advanced.push(cartridge);
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = cartridge;
    }
})();
