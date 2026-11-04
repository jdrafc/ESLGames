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
    stemTopicIndex: 0,
    stemSubTab: 'diagram',
    stemItemIndex: 0,
    stemTested: false,
    stemUserPrediction: null,
    storyBuilder: {
        level: 'intermediate',
        universeIndex: 0,
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
window.audioEngine = audioEngine;

