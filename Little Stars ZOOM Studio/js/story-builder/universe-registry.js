/* ==========================================================================
   STORY BUILDER UNIVERSE REGISTRY (PLUG & PLAY CARTRIDGE SYSTEM)
   Callable Storyboard Cartridges: Storyboard 1..2..3..4 per ESL Level
   ========================================================================== */

const STORY_COMIC_RENDERERS = {};

if (typeof window !== 'undefined' && !window.STORY_UNIVERSES_DATA) {
    window.STORY_UNIVERSES_DATA = {
        beginner: [],
        intermediate: [],
        advanced: []
    };
}
if (typeof STORY_UNIVERSES_DATA === 'undefined') {
    var STORY_UNIVERSES_DATA = (typeof window !== 'undefined' && window.STORY_UNIVERSES_DATA) || {
        beginner: [],
        intermediate: [],
        advanced: []
    };
}

/**
 * Registers an isolated story builder universe cartridge into STORY_UNIVERSES_DATA.
 * Allows new story universes (characters, settings, props, twists) to plug in modularly.
 * @param {string} level - 'beginner', 'intermediate', or 'advanced'
 * @param {Object} universeData - Self-contained story universe definition
 */
function registerStoryUniverse(level, universeData) {
    if (!level || !universeData || !universeData.id) {
        console.warn('[UniverseRegistry] Invalid universe registration:', level, universeData);
        return;
    }
    const dataStore = (typeof window !== 'undefined' && window.STORY_UNIVERSES_DATA) || 
                      (typeof STORY_UNIVERSES_DATA !== 'undefined' ? STORY_UNIVERSES_DATA : null);
    if (!dataStore) return;

    if (!dataStore[level]) {
        dataStore[level] = [];
    } else if (!Array.isArray(dataStore[level])) {
        dataStore[level] = [dataStore[level]];
    }

    const list = dataStore[level];
    const idx = list.findIndex(u => u.id === universeData.id);
    if (idx >= 0) {
        list[idx] = universeData;
    } else {
        list.push(universeData);
    }

    // Mirror first universe properties for 100% backwards compatibility
    if (list[0]) {
        Object.assign(list, list[0]);
    }
}

/**
 * Retrieves all registered universes for a given level (always standardizing 4 Storyboard Cartridge Slots: 1, 2, 3, 4).
 */
function getStoryUniverses(level) {
    const dataStore = (typeof window !== 'undefined' && window.STORY_UNIVERSES_DATA) || 
                      (typeof STORY_UNIVERSES_DATA !== 'undefined' ? STORY_UNIVERSES_DATA : null);
    const activeList = (dataStore && dataStore[level]) ? (Array.isArray(dataStore[level]) ? dataStore[level] : [dataStore[level]]) : [];

    const slots = [];
    for (let slotNum = 1; slotNum <= 4; slotNum++) {
        const existing = activeList.find(u => u.slotIndex === slotNum - 1 || u.storyboardNumber === slotNum) || (slotNum === 1 ? activeList[0] : null);
        if (existing) {
            existing.slotIndex = slotNum - 1;
            existing.storyboardNumber = slotNum;
            existing.masterTitle = `Storyboard ${slotNum}`;
            slots.push(existing);
        } else {
            // Callable Placeholder Slot
            slots.push({
                id: `storyboard_${slotNum}`,
                slotIndex: slotNum - 1,
                storyboardNumber: slotNum,
                masterTitle: `Storyboard ${slotNum}`,
                defaultTitle: `Storyboard ${slotNum}`,
                isPlaceholder: true,
                levelLabel: level === 'beginner' ? '🟢 Level 1: Beginner' : (level === 'intermediate' ? '🟡 Level 2: Intermediate' : '🔴 Level 3: Advanced'),
                anchorTitle: `Storyboard ${slotNum} Cartridge Slot`,
                summary: `Storyboard ${slotNum} cartridge slot is ready for future adventures.`,
                defaultSetting: 'slot_open',
                defaultChar: 'hero_slot',
                defaultSecondaryChar: 'companion_slot',
                defaultProp: 'prop_slot',
                settings: [
                    { id: 'slot_open', name: `Storyboard ${slotNum} Studio`, icon: '🎨', desc: 'Ready for new story setting' }
                ],
                characters: [
                    { id: 'hero_slot', name: 'Story Hero', icon: '⭐', avatar: '⭐', role: 'Main Lead', desc: 'Ready for hero character' }
                ],
                props: [
                    { id: 'prop_slot', name: 'Magic Artifact', icon: '✨', color: '#facc15', desc: 'Ready for story prop' }
                ],
                readingVocab: [],
                morphology: [],
                twists: [],
                templates: [
                    { panelIndex: 0, role: '1. Setup & Exposition', defaultCaption: `Welcome to Storyboard ${slotNum}! Choose your theme to begin writing.`, defaultSpeech: "Let's create a brand new adventure!" },
                    { panelIndex: 1, role: '2. Exploration & Rising Action', defaultCaption: `The hero explores the new world.`, defaultSpeech: "Look at what is ahead!" },
                    { panelIndex: 2, role: '3. Climax & Surprise', defaultCaption: `An exciting surprise happens!`, defaultSpeech: "What will happen next?" },
                    { panelIndex: 3, role: '4. Resolution', defaultCaption: `The story concludes happily!`, defaultSpeech: "Mission complete!" }
                ]
            });
        }
    }
    return slots;
}

/**
 * Registers an isolated comic panel SVG renderer for a universe cartridge.
 * @param {string} universeId - 'beginner', 'intermediate', 'advanced' or custom universe id
 * @param {Function} renderFn - Function(settingId, charId, propId, panelIdx, level, twist, secondaryCharId) => SVG string
 */
function registerStoryComicRenderer(universeId, renderFn) {
    if (!universeId || typeof renderFn !== 'function') return;
    STORY_COMIC_RENDERERS[universeId] = renderFn;
}

/**
 * Retrieves the SVG illustration for a given story panel.
 */
function getStoryComicSVG(universeId, settingId, charId, propId, panelIdx, level, twist, secondaryCharId) {
    if (universeId === 'max_adventure') universeId = 'beginner';
    if (universeId === 'quantum_key') universeId = 'intermediate';
    if (universeId === 'twilight_sanctuary') universeId = 'advanced';

    // If universe is a placeholder cartridge slot
    const universe = (typeof getActiveStoryUniverse === 'function') ? getActiveStoryUniverse(level || universeId) : null;
    if (universe && universe.isPlaceholder) {
        return `<svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#0f172a" rx="8"/>
            <rect x="130" y="40" width="140" height="105" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4"/>
            <text x="200" y="82" fill="#38bdf8" text-anchor="middle" font-size="28">📦</text>
            <text x="200" y="112" fill="#f8fafc" text-anchor="middle" font-size="12" font-weight="bold">${universe.masterTitle} Cartridge</text>
            <text x="200" y="165" fill="#94a3b8" text-anchor="middle" font-size="11">Slot Ready for Future Story Universe</text>
            <text x="200" y="185" fill="#facc15" text-anchor="middle" font-size="10">Select Storyboard 1 to play active story</text>
        </svg>`;
    }

    const fn = STORY_COMIC_RENDERERS[universeId];
    if (typeof fn === 'function') {
        return fn(settingId, charId, propId, panelIdx, level, twist, secondaryCharId);
    }
    // Fallback: check if the active universe object itself has renderComicSVG
    if (universe && typeof universe.renderComicSVG === 'function') {
        return universe.renderComicSVG(settingId, charId, propId, panelIdx, level, twist, secondaryCharId);
    }
    return `<svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="220" fill="#0f172a" rx="8"/><text x="200" y="110" fill="#38bdf8" text-anchor="middle" font-size="16" font-family="sans-serif">Story Stage Ready (${universeId})</text></svg>`;
}

// Helper to get cartridge by slot number
function getStoryboardCartridge(level, slotNumber) {
    const list = getStoryUniverses(level);
    return list[slotNumber - 1] || null;
}

// Callable Storyboard Cartridge Modules (Storyboard1.Beginner, Storyboard1.Intermediate, etc.)
const Storyboard1 = {
    get Beginner() { return (typeof window !== 'undefined' && (window.Storyboard1_Beginner || window.MAX_ADVENTURE_UNIVERSE)) || getStoryboardCartridge('beginner', 1); },
    get Intermediate() { return (typeof window !== 'undefined' && (window.Storyboard1_Intermediate || window.QUANTUM_KEY_UNIVERSE)) || getStoryboardCartridge('intermediate', 1); },
    get Advanced() { return (typeof window !== 'undefined' && (window.Storyboard1_Advanced || window.TWILIGHT_SANCTUARY_UNIVERSE)) || getStoryboardCartridge('advanced', 1); },
    get beginner() { return this.Beginner; },
    get intermediate() { return this.Intermediate; },
    get advanced() { return this.Advanced; }
};

const Storyboard2 = {
    get Beginner() { return getStoryboardCartridge('beginner', 2); },
    get Intermediate() { return getStoryboardCartridge('intermediate', 2); },
    get Advanced() { return getStoryboardCartridge('advanced', 2); },
    get beginner() { return this.Beginner; },
    get intermediate() { return this.Intermediate; },
    get advanced() { return this.Advanced; }
};

const Storyboard3 = {
    get Beginner() { return getStoryboardCartridge('beginner', 3); },
    get Intermediate() { return getStoryboardCartridge('intermediate', 3); },
    get Advanced() { return getStoryboardCartridge('advanced', 3); },
    get beginner() { return this.Beginner; },
    get intermediate() { return this.Intermediate; },
    get advanced() { return this.Advanced; }
};

const Storyboard4 = {
    get Beginner() { return getStoryboardCartridge('beginner', 4); },
    get Intermediate() { return getStoryboardCartridge('intermediate', 4); },
    get Advanced() { return getStoryboardCartridge('advanced', 4); },
    get beginner() { return this.Beginner; },
    get intermediate() { return this.Intermediate; },
    get advanced() { return this.Advanced; }
};

// Callable Storyboard Module Registry Dictionary
const STORYBOARDS = {
    beginner: {
        get Storyboard1() { return Storyboard1.Beginner; },
        get Storyboard2() { return Storyboard2.Beginner; },
        get Storyboard3() { return Storyboard3.Beginner; },
        get Storyboard4() { return Storyboard4.Beginner; }
    },
    intermediate: {
        get Storyboard1() { return Storyboard1.Intermediate; },
        get Storyboard2() { return Storyboard2.Intermediate; },
        get Storyboard3() { return Storyboard3.Intermediate; },
        get Storyboard4() { return Storyboard4.Intermediate; }
    },
    advanced: {
        get Storyboard1() { return Storyboard1.Advanced; },
        get Storyboard2() { return Storyboard2.Advanced; },
        get Storyboard3() { return Storyboard3.Advanced; },
        get Storyboard4() { return Storyboard4.Advanced; }
    }
};

// Global browser window export
if (typeof window !== 'undefined') {
    window.STORY_COMIC_RENDERERS = STORY_COMIC_RENDERERS;
    window.registerStoryUniverse = registerStoryUniverse;
    window.registerStoryComicRenderer = registerStoryComicRenderer;
    window.getStoryUniverses = getStoryUniverses;
    window.getStoryComicSVG = getStoryComicSVG;
    window.STORYBOARDS = STORYBOARDS;
    window.Storyboard1 = Storyboard1;
    window.Storyboard2 = Storyboard2;
    window.Storyboard3 = Storyboard3;
    window.Storyboard4 = Storyboard4;
}
