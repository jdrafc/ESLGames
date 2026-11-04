/* ==========================================================================
   STEM LAB CARTRIDGE: Plant Biology & Water Tank (Beginner Level 1)
   ========================================================================== */

function getStemPlantDiagramSVG() {
    return `
        <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#bae6fd"/>
                    <stop offset="65%" stop-color="#e0f2fe"/>
                    <stop offset="100%" stop-color="#f0fdf4"/>
                </linearGradient>
                <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#854d0e"/>
                    <stop offset="100%" stop-color="#451a03"/>
                </linearGradient>
            </defs>
            <!-- Sky & Ground -->
            <rect x="0" y="0" width="600" height="175" fill="url(#skyGrad)"/>
            <rect x="0" y="175" width="600" height="75" fill="url(#soilGrad)"/>
            <path d="M0 175 Q150 172 300 175 T600 175" stroke="#16a34a" stroke-width="4" fill="none"/>
            
            <!-- Sun Illustration -->
            <g class="stem-hotspot" data-hotspot-id="sun">
                <circle cx="490" cy="50" r="28" fill="#facc15" stroke="#eab308" stroke-width="3"/>
                <path d="M490 14 L490 6 M490 86 L490 94 M454 50 L446 50 M526 50 L534 50 M464 24 L458 18 M516 76 L522 82 M464 76 L458 82 M516 24 L522 18" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
                <rect x="445" y="42" width="90" height="24" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
                <text x="490" y="58" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">☀️ Sunlight</text>
            </g>

            <!-- Rain Cloud Illustration -->
            <g class="stem-hotspot" data-hotspot-id="rain">
                <path d="M80 45 a18 18 0 0 1 32 -8 a22 22 0 0 1 36 6 a16 16 0 0 1 0 30 L80 73 a14 14 0 0 1 0 -28 z" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
                <line x1="88" y1="80" x2="84" y2="92" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="105" y1="80" x2="101" y2="92" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="122" y1="80" x2="118" y2="92" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                <rect x="62" y="36" width="86" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                <text x="105" y="52" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">🌧️ Raindrops</text>
            </g>

            <!-- Plant Roots in Soil -->
            <g class="stem-hotspot" data-hotspot-id="roots">
                <path d="M300 175 Q285 200 270 230 M300 175 Q300 210 305 240 M300 175 Q315 200 335 230 M285 200 Q265 215 250 225 M315 200 Q335 210 345 220" stroke="#fef08a" stroke-width="3" stroke-linecap="round" fill="none"/>
                <rect x="250" y="202" width="100" height="24" rx="12" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
                <text x="300" y="218" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">🥕 Deep Roots</text>
            </g>

            <!-- Plant Stem -->
            <g class="stem-hotspot" data-hotspot-id="stem">
                <path d="M300 175 L300 70" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
                <rect x="258" y="96" width="84" height="24" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
                <text x="300" y="112" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">🌱 Stem</text>
            </g>

            <!-- Plant Leaves & Flower (Leaves moved further down the stem so Stem block is completely visible) -->
            <g class="stem-hotspot" data-hotspot-id="leaf">
                <!-- Left Leaf (Lower down near soil) -->
                <path d="M300 152 C255 146 220 134 200 144 C195 156 235 168 300 156 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
                <path d="M300 154 Q250 150 205 146" stroke="#15803d" stroke-width="1.5" fill="none"/>
                <!-- Right Leaf (Lower down near soil) -->
                <path d="M300 146 C345 140 375 130 395 140 C400 152 365 162 300 150 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
                <path d="M300 148 Q350 144 390 142" stroke="#15803d" stroke-width="1.5" fill="none"/>
                <!-- Flower Petals on Top of Stem -->
                <circle cx="300" cy="55" r="18" fill="#f43f5e"/>
                <circle cx="282" cy="55" r="14" fill="#fb7185"/>
                <circle cx="318" cy="55" r="14" fill="#fb7185"/>
                <circle cx="300" cy="38" r="14" fill="#fb7185"/>
                <circle cx="300" cy="72" r="14" fill="#fb7185"/>
                <circle cx="300" cy="55" r="10" fill="#facc15"/>
                <!-- Leaf Badge positioned cleanly by the left leaf -->
                <rect x="135" y="136" width="86" height="24" rx="12" fill="#ffffff" stroke="#15803d" stroke-width="2"/>
                <text x="178" y="152" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">🍃 Leaf Food</text>
            </g>
        </svg>
    `;
}


function getStemWaterTankSVG(item, tested) {
    // Beginner: Sink or Float in a water tank (Tank: x=40..460, Center=250, Surface=75, Sand=180)
    const isFloated = tested && item.floats;
    const isSunk = tested && !item.floats;

    let posX = 250;
    let posY = 20; // Default on plank
    let animClass = '';

    if (item.id === 'apple') {
        if (isFloated) {
            posY = 74; // Bobbing at water line (center at Y=74)
            animClass = 'anim-float-bob';
        } else {
            posY = 18; // On plank (radius 14 + 18 = 32 resting on plank at 34)
        }
    } else if (item.id === 'wood') {
        if (isFloated) {
            posY = 72; // Floating at water line
            animClass = 'anim-float-bob';
        } else {
            posY = 22; // On plank (bottom at 22 + 11 = 33)
        }
    } else if (item.id === 'coin') {
        if (isSunk) {
            posY = 166; // Sitting on sand (radius 14 + 166 = 180 sand top)
            animClass = 'anim-sink-settle';
        } else {
            posY = 19; // On plank (bottom at 19 + 14 = 33)
        }
    } else {
        // Iron key
        if (isSunk) {
            posY = 172; // Sitting on sand (teeth at +7 + 172 = 179)
            animClass = 'anim-sink-settle';
        } else {
            posY = 24; // On plank (teeth at +7 + 24 = 31)
        }
    }

    // Object SVG Graphic centered at (0, 0)
    let graphicInner = '';
    if (item.id === 'apple') {
        graphicInner = `
            <circle cx="0" cy="0" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <path d="M0 -14 Q3 -19 5 -18" stroke="#78350f" stroke-width="2.5" fill="none"/>
            <ellipse cx="5" cy="-16" rx="4" ry="2" fill="#22c55e" transform="rotate(-20 5 -16)"/>
            <circle cx="-4" cy="-4" r="3" fill="#fca5a5" opacity="0.6"/>
        `;
    } else if (item.id === 'coin') {
        graphicInner = `
            <circle cx="0" cy="0" r="14" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
            <circle cx="0" cy="0" r="10" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="0" y="5" font-size="14" font-weight="bold" fill="#854d0e" text-anchor="middle">$</text>
        `;
    } else if (item.id === 'wood') {
        graphicInner = `
            <rect x="-20" y="-11" width="40" height="22" rx="4" fill="#b45309" stroke="#78350f" stroke-width="2"/>
            <line x1="-8" y1="-8" x2="-8" y2="8" stroke="#78350f" stroke-width="1.5"/>
            <line x1="4" y1="-8" x2="4" y2="8" stroke="#78350f" stroke-width="1.5"/>
            <line x1="16" y1="-8" x2="16" y2="8" stroke="#78350f" stroke-width="1.5"/>
            <text x="0" y="3" font-size="8" font-weight="bold" fill="#fef3c7" text-anchor="middle">WOOD</text>
        `;
    } else {
        // Iron key
        graphicInner = `
            <circle cx="-10" cy="0" r="8" fill="#64748b" stroke="#334155" stroke-width="2"/>
            <circle cx="-10" cy="0" r="4" fill="#e2e8f0"/>
            <rect x="-3" y="-2" width="22" height="4" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
            <rect x="9" y="2" width="3" height="5" fill="#334155"/>
            <rect x="14" y="2" width="3" height="4" fill="#334155"/>
        `;
    }

    return `
        <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
            <!-- Water Tank Glass Body -->
            <rect x="40" y="45" width="420" height="150" rx="14" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/>
            <!-- Water Fill -->
            <rect x="42" y="75" width="416" height="118" rx="0 0 12 12" fill="rgba(56, 189, 248, 0.45)"/>
            <!-- Water Surface Waves -->
            <path d="M42 75 Q145 70 250 75 T458 75" fill="none" stroke="#0284c7" stroke-width="3"/>
            <!-- Sandy Tank Bottom -->
            <rect x="42" y="180" width="416" height="13" fill="#fde68a"/>
            
            <!-- Wooden Drop Plank (Pedestal) -->
            ${!tested ? `
                <rect x="190" y="34" width="120" height="9" rx="3" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
                <text x="250" y="20" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Ready on Plank 👇</text>
            ` : ''}

            <!-- Water Splash Ripples if tested -->
            ${tested ? `
                <ellipse cx="${posX}" cy="75" rx="36" ry="6" fill="none" stroke="#38bdf8" stroke-width="2"/>
                <ellipse cx="${posX}" cy="75" rx="20" ry="3" fill="none" stroke="#bae6fd" stroke-width="1.5"/>
            ` : ''}

            <!-- Rising bubbles if sunk to bottom -->
            ${isSunk ? `
                <g class="stem-bubbles" opacity="0.8">
                    <circle cx="${posX - 6}" cy="148" r="3.5" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
                    <circle cx="${posX + 8}" cy="122" r="4.5" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
                    <circle cx="${posX - 2}" cy="96" r="3" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
                </g>
            ` : ''}

            <!-- Water surface float ring if floated -->
            ${isFloated ? `
                <ellipse cx="${posX}" cy="76" rx="26" ry="4" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="5,3"/>
            ` : ''}

            <!-- Dropped Object (Centered in Middle of Tank at posX = 250) -->
            <g transform="translate(${posX}, ${posY})">
                <g class="${animClass}">
                    ${graphicInner}
                </g>
            </g>
        </svg>
    `;
}


// Register into STEM cartridge registry
const STEM_PLANT_TOPIC_DATA = {
    id: 'plant_biology',
    diagramType: 'plant_biology',
    experimentType: 'water_tank',
    title: '🌱 How Plants Grow & Live',
    badge: '🟢 Level 1: Plant Biology',
    vocabFocus: 'Simple adjectives & senses (heavy, light, float, sink, hot, cold, living)',
    headTailFocus: 'un- (unhappy), re- (retest, refill), -er (helper), -ful / -less (colorful, careless)',
    conceptSummary: 'Plants are living things! They need sunlight, rain, and soil to grow colorful and strong.',
    diagram: {
        name: 'A Growing Plant',
        hotspots: [
            {
                id: 'roots',
                label: 'Roots 🥕',
                title: 'Roots (The Hidden Helpers)',
                desc: 'Roots grow down into the dark soil. They drink fresh water and hold the plant steady!',
                speech: 'Roots are great helpers! They drink water from the soil.',
                tiein: 'helper (-er = a person/thing that helps)',
                x: 300, y: 215, rx: 50, ry: 18
            },
            {
                id: 'stem',
                label: 'Stem 🌱',
                title: 'Stem (The Green Highway)',
                desc: 'The strong stem carries water from roots up to leaves and flowers.',
                speech: 'The stem stands tall and moves water up like a green elevator.',
                tiein: 'stand tall (strong support)',
                x: 300, y: 108, rx: 45, ry: 16
            },
            {
                id: 'leaf',
                label: 'Leaf 🍃',
                title: 'Leaf (The Kitchen)',
                desc: 'Leaves catch warm sunshine to cook tasty food for the whole plant.',
                speech: 'Without rain, the plant is unhappy. With sun and rain, it grows colorful!',
                tiein: 'unhappy (un- = NOT) & colorful (-ful = A LOT)',
                x: 178, y: 148, rx: 48, ry: 18
            },
            {
                id: 'sun',
                label: 'Sun ☀️',
                title: 'Sunlight (Pure Energy)',
                desc: 'Warm sunshine gives light energy so the plant can make food.',
                speech: 'Bright sunlight keeps the green plant warm, active, and alive.',
                tiein: 'bright / sunlight',
                x: 490, y: 50, rx: 42, ry: 18
            },
            {
                id: 'rain',
                label: 'Rain 🌧️',
                title: 'Rain (Fresh Water)',
                desc: 'Raindrops fall from soft clouds to give water to the thirsty soil.',
                speech: 'Rain falls from the clouds to refill the soil with water.',
                tiein: 'refill (re- = AGAIN)',
                x: 105, y: 45, rx: 42, ry: 18
            }
        ]
    },
    experiment: {
        title: '🌊 Sink or Float Lab',
        desc: 'Drop objects into the water tank to test which ones float at the surface and which sink to the bottom!',
        items: [
            {
                id: 'apple',
                name: 'Red Apple 🍎',
                speakName: 'red apple',
                weight: 'Light (Full of tiny air pockets)',
                floats: true,
                predictFrame: 'I think the [red apple] will [float].',
                resultFrame: 'The red apple is light! It bobs on top.',
                resultDesc: 'The red apple has tiny air pockets inside, so it floats gently at the water surface!',
                tiein: 'bobs on top (light / float)'
            },
            {
                id: 'coin',
                name: 'Metal Coin 🪙',
                speakName: 'metal coin',
                weight: 'Heavy (Dense solid metal)',
                floats: false,
                predictFrame: 'I think the [metal coin] will [sink].',
                resultFrame: 'It is [heavy]! It sinks straight to the bottom.',
                resultDesc: 'The metal coin is heavy and dense with zero air, so it sinks down to the sand.',
                tiein: 'heavy / sinking'
            },
            {
                id: 'wood',
                name: 'Wood Block 🪵',
                speakName: 'wood block',
                weight: 'Light (Natural porous wood)',
                floats: true,
                predictFrame: 'I think the [wood block] will [float].',
                resultFrame: 'It is [light]! The wooden block floats like a boat.',
                resultDesc: 'Wood is lighter than water, so it stays floating safely right on top!',
                tiein: 'safe on water (-er = helper)'
            },
            {
                id: 'key',
                name: 'Iron Key 🗝️',
                speakName: 'iron key',
                weight: 'Heavy (Solid iron metal)',
                floats: false,
                predictFrame: 'I think the [iron key] will [sink].',
                resultFrame: 'The heavy iron key sinks fast.',
                resultDesc: 'Iron is very heavy and sinks straight down to the bottom.',
                tiein: 'unsafe in deep water (un- = NOT)'
            }
        ]
    }
};

if (typeof registerStemDiagram === 'function') {
    registerStemDiagram('plant_biology', getStemPlantDiagramSVG);
}
if (typeof registerStemExperiment === 'function') {
    registerStemExperiment('water_tank', getStemWaterTankSVG);
}
if (typeof registerStemTopic === 'function') {
    registerStemTopic('beginner', STEM_PLANT_TOPIC_DATA);
}
if (typeof window !== 'undefined') {
    window.getStemPlantDiagramSVG = getStemPlantDiagramSVG;
    window.getStemWaterTankSVG = getStemWaterTankSVG;
    window.STEM_PLANT_TOPIC_DATA = STEM_PLANT_TOPIC_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        level: 'beginner',
        topicData: STEM_PLANT_TOPIC_DATA,
        getDiagramSVG: getStemPlantDiagramSVG,
        getExperimentSVG: getStemWaterTankSVG
    };
}
