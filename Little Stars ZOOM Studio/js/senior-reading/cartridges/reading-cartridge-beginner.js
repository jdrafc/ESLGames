/* ==========================================================================
   SENIOR READING LAB CARTRIDGE: Max the Lost Puppy (Beginner A1)
   ========================================================================== */

(function () {
    const cartridge = {
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
    };

    if (typeof SeniorReadingRegistry !== 'undefined') {
        SeniorReadingRegistry.register('beginner', cartridge);
    } else if (typeof window !== 'undefined') {
        if (!window.SENIOR_STORIES_DATA) window.SENIOR_STORIES_DATA = { beginner: [], intermediate: [], advanced: [] };
        if (!window.SENIOR_STORIES_DATA.beginner) window.SENIOR_STORIES_DATA.beginner = [];
        window.SENIOR_STORIES_DATA.beginner.push(cartridge);
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = cartridge;
    }
})();
