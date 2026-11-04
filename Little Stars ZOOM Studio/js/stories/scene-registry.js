/* ==========================================================================
   PRACTISE STORY & SCENE REGISTRY (PLUG & PLAY CARTRIDGE SYSTEM)
   ========================================================================== */

(function () {
    const PRACTISE_SCENE_REGISTRY = {};

    const SCENE_ALIASES = {
        'winter_garden': 'winter_window',
        'winter_window': 'winter_garden'
    };

    if (typeof window !== 'undefined') {
        if (!window.READING_PRACTISE_DATA) {
            window.READING_PRACTISE_DATA = {
                beginner: { label: '🟢 Beginner (CEFR A1)', units: [] },
                intermediate: { label: '🟡 Intermediate (CEFR A2)', units: [] },
                advanced: { label: '🔴 Advanced (CEFR B1)', units: [] }
            };
        }
    }

    /**
     * Registers an animated visual scene cartridge.
     * @param {string} sceneType - Unique identifier (e.g. 'winter_window', 'coral_reef', 'bluebird_garden')
     * @param {Function} renderFn - Function(isFocusPaused: boolean) => SVG string
     */
    function registerPractiseScene(sceneType, renderFn) {
        if (!sceneType || typeof renderFn !== 'function') {
            console.warn('[StoryRegistry] Invalid scene registration:', sceneType);
            return;
        }
        PRACTISE_SCENE_REGISTRY[sceneType] = renderFn;
    }

    /**
     * Retrieves the SVG markup for a given scene type.
     * @param {string} sceneType - Identifier of the scene to render
     * @param {boolean} isFocusPaused - Whether reading focus animation freeze is active
     * @returns {string} SVG markup string
     */
    function getPractiseSceneSVG(sceneType, isFocusPaused = false) {
        const targetKey = PRACTISE_SCENE_REGISTRY[sceneType] ? sceneType : SCENE_ALIASES[sceneType];
        const sceneFn = PRACTISE_SCENE_REGISTRY[targetKey];
        if (typeof sceneFn === 'function') {
            return sceneFn(isFocusPaused);
        }

        // Defensive fallback placeholder if scene file is loading or not found
        const pauseClass = isFocusPaused ? 'reading-focus-paused' : '';
        return `<svg class="living-window-svg ${pauseClass}" viewBox="0 0 1000 680" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="1000" height="680" fill="#0f172a" rx="12"/>
            <text x="500" y="320" fill="#38bdf8" font-size="28" font-weight="bold" text-anchor="middle" font-family="system-ui, sans-serif">
                📖 Story Stage Ready
            </text>
            <text x="500" y="360" fill="#94a3b8" font-size="18" text-anchor="middle" font-family="system-ui, sans-serif">
                Scene cartridge: ${sceneType || 'Default'}
            </text>
        </svg>`;
    }

    /**
     * Helper to dynamically register a story data unit into READING_PRACTISE_DATA.
     * Allows new stories to plug their data in modularly without modifying js/data.js.
     */
    function registerPractiseUnit(level, unitData) {
        let store = null;
        if (typeof window !== 'undefined') {
            if (!window.READING_PRACTISE_DATA) {
                window.READING_PRACTISE_DATA = {
                    beginner: { label: '🟢 Beginner (CEFR A1)', units: [] },
                    intermediate: { label: '🟡 Intermediate (CEFR A2)', units: [] },
                    advanced: { label: '🔴 Advanced (CEFR B1)', units: [] }
                };
            }
            store = window.READING_PRACTISE_DATA;
        } else if (typeof READING_PRACTISE_DATA !== 'undefined') {
            store = READING_PRACTISE_DATA;
        }
        if (!store) return;

        if (!store[level]) {
            store[level] = { units: [] };
        }
        if (!store[level].units) {
            store[level].units = [];
        }
        const units = store[level].units;
        const existingIdx = units.findIndex(u => u.id === unitData.id);
        if (existingIdx >= 0) {
            units[existingIdx] = unitData;
        } else {
            units.push(unitData);
        }
    }

    // Global browser window exports
    if (typeof window !== 'undefined') {
        window.PRACTISE_SCENE_REGISTRY = PRACTISE_SCENE_REGISTRY;
        window.registerPractiseScene = registerPractiseScene;
        window.getPractiseSceneSVG = getPractiseSceneSVG;
        window.registerPractiseUnit = registerPractiseUnit;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            PRACTISE_SCENE_REGISTRY,
            registerPractiseScene,
            getPractiseSceneSVG,
            registerPractiseUnit
        };
    }
})();
