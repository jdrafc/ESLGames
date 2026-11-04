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
    activeStudentId: 'st_1',
    students: [
        { id: 'st_1', name: 'Eve', stars: 0, points: 0, gender: 'girl' },
        { id: 'st_2', name: 'Yan', stars: 0, points: 0, gender: 'boy' }
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
        speechVoice: 'Google UK English Female'
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

// Auto-align legacy speech voice to Google UK English Female if unset or on legacy fallback
if (appState && appState.settings) {
    if (!appState.settings.speechVoice || 
        appState.settings.speechVoice === 'Microsoft Zira - English (United States)' || 
        appState.settings.speechVoice === 'Microsoft David - English (United States)') {
        appState.settings.speechVoice = 'Google UK English Female';
        localStorage.setItem('little_stars_state', JSON.stringify(appState));
    }
}
if (!appState.studioMode) appState.studioMode = 'junior';

// Auto-sync: Replace legacy starter placeholder students (Leo/Emma/Noah) with official classroom roster (Eve/Yan)
if (appState && appState.students) {
    const isLegacyDemoRoster = appState.students.length === 3 &&
        appState.students[0].name === 'Leo' &&
        appState.students[1].name === 'Emma' &&
        appState.students[2].name === 'Noah';
    if (isLegacyDemoRoster) {
        appState.students = [
            { id: 'st_1', name: 'Eve', stars: 0, points: 0, gender: 'girl' },
            { id: 'st_2', name: 'Yan', stars: 0, points: 0, gender: 'boy' }
        ];
        appState.activeStudentId = 'st_1';
        localStorage.setItem('little_stars_state', JSON.stringify(appState));
    }
}

function saveState() {
    localStorage.setItem('little_stars_state', JSON.stringify(appState));
}

const audioEngine = new AudioEngine();
window.audioEngine = audioEngine;

