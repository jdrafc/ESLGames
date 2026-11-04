/* ==========================================================================
   STEM & SCIENCE LAB REGISTRY (PLUG & PLAY CARTRIDGE SYSTEM)
   ========================================================================== */

(function () {
    const STEM_DIAGRAM_REGISTRY = {};
    const STEM_EXPERIMENT_REGISTRY = {};

    // Helpful alias mappings for flexible topic resolution
    const STEM_ALIASES = {
        'beginner': 'plant_biology',
        'intermediate': 'water_cycle',
        'advanced': 'solar_system'
    };

    const STEM_EXP_ALIASES = {
        'beginner': 'water_tank',
        'intermediate': 'magnet_lab',
        'advanced': 'electric_circuit'
    };

    if (typeof window !== 'undefined') {
        if (!window.STEM_SCIENCE_DATA) {
            window.STEM_SCIENCE_DATA = {
                beginner: [],
                intermediate: [],
                advanced: []
            };
        }
    }

    /**
     * Registers an interactive science diagram cartridge.
     * @param {string} diagramType - Identifier (e.g. 'plant_biology', 'water_cycle', 'solar_system')
     * @param {Function} renderFn - Function() => SVG string
     */
    function registerStemDiagram(diagramType, renderFn) {
        if (!diagramType || typeof renderFn !== 'function') return;
        STEM_DIAGRAM_REGISTRY[diagramType] = renderFn;
    }

    /**
     * Registers a virtual science experiment apparatus cartridge.
     * @param {string} experimentType - Identifier (e.g. 'water_tank', 'magnet_lab', 'electric_circuit')
     * @param {Function} renderFn - Function(item, tested) => SVG string
     */
    function registerStemExperiment(experimentType, renderFn) {
        if (!experimentType || typeof renderFn !== 'function') return;
        STEM_EXPERIMENT_REGISTRY[experimentType] = renderFn;
    }

    /**
     * Retrieves the SVG markup for a given diagram type.
     */
    function getStemDiagramSVG(diagramType) {
        const key = STEM_DIAGRAM_REGISTRY[diagramType] ? diagramType : (STEM_ALIASES[diagramType] || diagramType);
        const fn = STEM_DIAGRAM_REGISTRY[key];
        if (typeof fn === 'function') {
            return fn();
        }
        return `<svg viewBox="0 0 600 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10"/>
            <text x="300" y="160" fill="#38bdf8" font-size="20" font-weight="bold" text-anchor="middle" font-family="system-ui, sans-serif">
                🔬 Science Diagram Ready (${diagramType || 'Default'})
            </text>
        </svg>`;
    }

    /**
     * Retrieves the SVG markup for a given experiment type.
     */
    function getStemExperimentSVG(experimentType, item, tested) {
        const key = STEM_EXPERIMENT_REGISTRY[experimentType] ? experimentType : (STEM_EXP_ALIASES[experimentType] || experimentType);
        const fn = STEM_EXPERIMENT_REGISTRY[key];
        if (typeof fn === 'function') {
            return fn(item, tested);
        }
        return `<svg viewBox="0 0 500 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="240" fill="#0f172a" rx="10"/>
            <text x="250" y="120" fill="#38bdf8" font-size="18" font-weight="bold" text-anchor="middle" font-family="system-ui, sans-serif">
                🧪 Virtual Experiment Apparatus Ready (${experimentType || 'Default'})
            </text>
        </svg>`;
    }

    /**
     * Allows external modules or future cartridges to register a new lab topic into STEM_SCIENCE_DATA.
     */
    function registerStemTopic(level, topicData) {
        let store = null;
        if (typeof window !== 'undefined') {
            if (!window.STEM_SCIENCE_DATA) {
                window.STEM_SCIENCE_DATA = { beginner: [], intermediate: [], advanced: [] };
            }
            store = window.STEM_SCIENCE_DATA;
        } else if (typeof STEM_SCIENCE_DATA !== 'undefined') {
            store = STEM_SCIENCE_DATA;
        }
        if (!store) return;

        if (!store[level]) {
            store[level] = [];
        } else if (!Array.isArray(store[level])) {
            store[level] = [store[level]];
        }
        const list = store[level];
        const idx = list.findIndex(t => t.id === topicData.id);
        if (idx >= 0) {
            list[idx] = topicData;
        } else {
            list.push(topicData);
        }
    }

    // Global browser window exports
    if (typeof window !== 'undefined') {
        window.STEM_DIAGRAM_REGISTRY = STEM_DIAGRAM_REGISTRY;
        window.STEM_EXPERIMENT_REGISTRY = STEM_EXPERIMENT_REGISTRY;
        window.registerStemDiagram = registerStemDiagram;
        window.registerStemExperiment = registerStemExperiment;
        window.getStemDiagramSVG = getStemDiagramSVG;
        window.getStemExperimentSVG = getStemExperimentSVG;
        window.registerStemTopic = registerStemTopic;
    }

    // CommonJS Node.js exports for automated test verification
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            STEM_DIAGRAM_REGISTRY,
            STEM_EXPERIMENT_REGISTRY,
            registerStemDiagram,
            registerStemExperiment,
            getStemDiagramSVG,
            getStemExperimentSVG,
            registerStemTopic
        };
    }
})();
