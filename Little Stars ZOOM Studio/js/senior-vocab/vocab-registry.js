/* ==========================================================================
   SENIOR VOCABULARY & SPELLING LAB: CARTRIDGE REGISTRY & CATALOG
   ========================================================================== */

(function () {
    const registry = {
        cartridges: {
            beginner: null,
            intermediate: null,
            advanced: null
        },

        register(level, cartridge) {
            this.cartridges[level] = cartridge;

            // Maintain global backward compatibility with window.SENIOR_VOCAB_DATA
            if (typeof window !== 'undefined') {
                if (!window.SENIOR_VOCAB_DATA) {
                    window.SENIOR_VOCAB_DATA = {};
                }
                window.SENIOR_VOCAB_DATA[level] = cartridge;
            }
        },

        getVocab(level) {
            return this.cartridges[level] || (typeof SENIOR_VOCAB_DATA !== 'undefined' ? SENIOR_VOCAB_DATA[level] : null) || null;
        }
    };

    if (typeof window !== 'undefined') {
        window.SeniorVocabRegistry = registry;
        if (!window.SENIOR_VOCAB_DATA) {
            window.SENIOR_VOCAB_DATA = {};
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = registry;
    }
})();
