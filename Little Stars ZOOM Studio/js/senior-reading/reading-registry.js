/* ==========================================================================
   SENIOR READING LAB: CARTRIDGE REGISTRY & CATALOG
   ========================================================================== */

(function () {
    const registry = {
        cartridges: {
            beginner: [],
            intermediate: [],
            advanced: []
        },

        register(level, cartridge) {
            if (!this.cartridges[level]) {
                this.cartridges[level] = [];
            }
            const existingIdx = this.cartridges[level].findIndex(c => c.id === cartridge.id);
            if (existingIdx >= 0) {
                this.cartridges[level][existingIdx] = cartridge;
            } else {
                this.cartridges[level].push(cartridge);
            }

            // Sync with global SENIOR_STORIES_DATA for seamless backward compatibility
            if (typeof window !== 'undefined') {
                if (!window.SENIOR_STORIES_DATA) {
                    window.SENIOR_STORIES_DATA = { beginner: [], intermediate: [], advanced: [] };
                }
                if (!window.SENIOR_STORIES_DATA[level]) {
                    window.SENIOR_STORIES_DATA[level] = [];
                }
                const gIdx = window.SENIOR_STORIES_DATA[level].findIndex(c => c.id === cartridge.id);
                if (gIdx >= 0) {
                    window.SENIOR_STORIES_DATA[level][gIdx] = cartridge;
                } else {
                    window.SENIOR_STORIES_DATA[level].push(cartridge);
                }
            }
        },

        getStories(level) {
            return this.cartridges[level] || [];
        },

        getStory(level, id) {
            const list = this.cartridges[level] || [];
            return list.find(s => s.id === id) || list[0] || null;
        }
    };

    if (typeof window !== 'undefined') {
        window.SeniorReadingRegistry = registry;
        if (!window.SENIOR_STORIES_DATA) {
            window.SENIOR_STORIES_DATA = { beginner: [], intermediate: [], advanced: [] };
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = registry;
    }
})();
