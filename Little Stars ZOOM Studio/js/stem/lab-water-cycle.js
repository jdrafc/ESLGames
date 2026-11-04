/* ==========================================================================
   STEM LAB CARTRIDGE: Water Cycle & Magnet Table (Intermediate Level 2)
   ========================================================================== */

function getStemWaterCycleDiagramSVG() {
    return `
        <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cycleSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#93c5fd"/>
                    <stop offset="100%" stop-color="#e0f2fe"/>
                </linearGradient>
                <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#38bdf8"/>
                    <stop offset="100%" stop-color="#0284c7"/>
                </linearGradient>
            </defs>
            <!-- Sky -->
            <rect x="0" y="0" width="600" height="250" fill="url(#cycleSky)"/>
            <!-- Green Mountain / Landscape -->
            <path d="M260 250 L420 115 L530 160 L600 135 L600 250 Z" fill="#22c55e"/>
            <!-- Mountain Snowcap -->
            <path d="M420 115 L395 138 Q420 144 445 138 Z" fill="#ffffff"/>
            <!-- Ocean Surface -->
            <path d="M0 170 Q130 165 260 180 L260 250 L0 250 Z" fill="url(#oceanGrad)"/>

            <!-- Warm Sun Shining & Pulling Water Up -->
            <g>
                <circle cx="70" cy="42" r="22" fill="#facc15" stroke="#f59e0b" stroke-width="2.5"/>
                <path d="M70 12 L70 5 M70 72 L70 79 M40 42 L33 42 M100 42 L107 42 M49 21 L44 16 M91 63 L96 68 M49 63 L44 68 M91 21 L96 16" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
                <!-- Warm sunbeams shining down on ocean water -->
                <line x1="75" y1="68" x2="95" y2="170" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4" opacity="0.65"/>
                <line x1="90" y1="60" x2="150" y2="175" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4" opacity="0.65"/>
            </g>

            <!-- 1. Ocean Hotspot -->
            <g class="stem-hotspot" data-hotspot-id="ocean">
                <path d="M40 190 Q90 185 140 190 T240 190" stroke="#bae6fd" stroke-width="3" fill="none"/>
                <rect x="75" y="195" width="90" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                <text x="120" y="211" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">🌊 Ocean Water</text>
            </g>

            <!-- 2. Evaporation Wavy Arrows: The Sun pulls water up as invisible gas -->
            <g class="stem-hotspot" data-hotspot-id="evap">
                <path d="M140 160 Q148 140 140 120 T140 85" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,4" fill="none"/>
                <path d="M175 160 Q183 140 175 120 T175 85" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,4" fill="none"/>
                <path d="M210 160 Q218 140 210 120 T210 85" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,4" fill="none"/>
                <!-- Arrows -->
                <polygon points="140,80 135,90 145,90" fill="#0284c7"/>
                <polygon points="175,80 170,90 180,90" fill="#0284c7"/>
                <polygon points="210,80 205,90 215,90" fill="#0284c7"/>
                <rect x="115" y="98" width="125" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                <text x="177" y="114" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">💨 Invisible Gas</text>
            </g>

            <!-- 3. Condensation Cloud: Millions of tiny water drops bunch together -->
            <g class="stem-hotspot" data-hotspot-id="cloud">
                <path d="M340 50 a22 22 0 0 1 38 -10 a28 28 0 0 1 45 8 a20 20 0 0 1 0 38 L340 86 a18 18 0 0 1 0 -36 z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
                <!-- Tiny ocean-water droplets bunching together inside cloud -->
                <circle cx="360" cy="55" r="2.5" fill="#38bdf8"/>
                <circle cx="375" cy="50" r="3" fill="#38bdf8"/>
                <circle cx="390" cy="56" r="2.5" fill="#38bdf8"/>
                <circle cx="405" cy="52" r="3" fill="#38bdf8"/>
                <circle cx="380" cy="62" r="3.5" fill="#0284c7"/>
                <rect x="325" y="44" width="125" height="24" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
                <text x="387" y="60" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">☁️ Cloud Forms</text>
            </g>

            <!-- 4. Rain / Precipitation: Cloud gets full & heavy, water falls back down -->
            <g class="stem-hotspot" data-hotspot-id="rain">
                <line x1="450" y1="95" x2="442" y2="120" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                <line x1="480" y1="95" x2="472" y2="120" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                <line x1="510" y1="95" x2="502" y2="120" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                <rect x="420" y="128" width="125" height="24" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                <text x="482" y="144" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">🌧️ Rain Falls</text>
            </g>

            <!-- River flowing water back to the ocean -->
            <path d="M430 185 Q340 195 260 215" stroke="#38bdf8" stroke-width="3" fill="none" stroke-dasharray="5,3"/>
            <polygon points="262,210 252,216 262,222" fill="#0284c7"/>
            <text x="315" y="210" font-size="10" font-weight="bold" fill="#0284c7">River to ocean 🌊</text>
        </svg>
    `;
}


function getStemMagnetSVG(item, tested) {
    // Intermediate: Magnet Table Attraction Lab
    const isAttracted = tested && item.magnetic;
    let itemX = tested && isAttracted ? 210 : 380;
    let itemClass = tested && isAttracted ? 'anim-snap' : '';

    // Object Graphic
    let objGraphic = '';
    if (item.id === 'nail') {
        objGraphic = `
            <g transform="translate(${itemX}, 95)">
                <rect x="0" y="3" width="36" height="5" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                <rect x="34" y="0" width="4" height="11" rx="1" fill="#475569"/>
                <polygon points="0,2 0,9 -8,5.5" fill="#334155"/>
            </g>
        `;
    } else if (item.id === 'pencil') {
        objGraphic = `
            <g transform="translate(${itemX}, 92)">
                <polygon points="0,5 12,0 12,10" fill="#fed7aa"/>
                <polygon points="0,5 4,3 4,7" fill="#1e293b"/>
                <rect x="12" y="0" width="45" height="10" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
                <rect x="57" y="0" width="10" height="10" rx="2" fill="#fb7185"/>
            </g>
        `;
    } else if (item.id === 'clip') {
        objGraphic = `
            <g transform="translate(${itemX}, 90)">
                <path d="M5 12 L30 12 A6 6 0 0 1 36 18 A6 6 0 0 1 30 24 L10 24 A10 10 0 0 1 0 14 A10 10 0 0 1 10 4 L35 4" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
            </g>
        `;
    } else {
        // Eraser
        objGraphic = `
            <g transform="translate(${itemX}, 90)">
                <polygon points="0,0 25,0 18,20 -7,20" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
                <polygon points="25,0 45,0 38,20 18,20" fill="#fb7185" stroke="#e11d48" stroke-width="1.5"/>
            </g>
        `;
    }

    return `
        <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
            <!-- Lab Table Surface -->
            <rect x="30" y="30" width="440" height="150" rx="12" fill="#fed7aa" stroke="#d97706" stroke-width="3"/>
            <!-- Table Center Line -->
            <line x1="40" y1="160" x2="460" y2="160" stroke="#f59e0b" stroke-width="2"/>

            <!-- Strong Bar Magnet on Left -->
            <g transform="translate(80, 78)">
                <!-- South Pole (Blue) -->
                <rect x="0" y="0" width="55" height="44" rx="6 0 0 6" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                <text x="28" y="29" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">S</text>
                <!-- North Pole (Red) -->
                <rect x="55" y="0" width="55" height="44" rx="0 6 6 0" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
                <text x="82" y="29" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">N</text>
                <!-- Magnetic Flux Arcs -->
                <path d="M112 12 Q140 22 140 44 Q140 66 112 76" stroke="#f87171" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/>
                <path d="M112 0 Q160 22 160 44 Q160 66 112 88" stroke="#f87171" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
            </g>

            <!-- Magnetic Attraction Sparks if Tested & Magnetic -->
            ${isAttracted ? `
                <g transform="translate(195, 85)">
                    <polygon points="10,0 12,7 19,10 12,13 10,20 8,13 1,10 8,7" fill="#facc15"/>
                    <polygon points="26,12 28,17 33,19 28,21 26,26 24,21 19,19 24,17" fill="#f59e0b"/>
                </g>
            ` : ''}

            <!-- Test Object -->
            <g class="${itemClass}">
                ${objGraphic}
            </g>
        </svg>
    `;
}


// Register into STEM cartridge registry
const STEM_WATER_CYCLE_TOPIC_DATA = {
    id: 'water_cycle',
    diagramType: 'water_cycle',
    experimentType: 'magnet_lab',
    title: '💧 The Water Cycle & Magnet Forces',
    badge: '🟡 Level 2: Earth & Physics',
    vocabFocus: 'Process words & forces (melt, freeze, steam, attract, repel, evaporate)',
    headTailFocus: 'dis- (disappear, disagree), mis- (miscount), -ly (quickly, slowly, heavily), -able (breakable, unbreakable)',
    conceptSummary: 'The sun pulls ocean water up as an invisible gas. In the cold sky it bunches into clouds, and when heavy, it falls back down as rain!',
    diagram: {
        name: 'The Water Cycle',
        hotspots: [
            {
                id: 'ocean',
                label: 'Ocean 🌊',
                title: '1. The Ocean (Liquid Water)',
                desc: 'The huge ocean holds liquid water. The warm sun shines down and gets ready to pull it into the sky!',
                speech: 'Water sits in the ocean until the warm sun heats it up.',
                tiein: 'peacefully (-ly = IN A WAY)',
                x: 120, y: 205, rx: 45, ry: 18
            },
            {
                id: 'evap',
                label: 'Invisible Gas 💨',
                title: '2. Evaporation (Rising Up)',
                desc: 'The sun pulls water up from the ocean as an invisible gas called water vapor that disappears into the sky.',
                speech: 'The sun pulls water up from the ocean as an invisible gas.',
                tiein: 'invisible (in- = NOT) & disappears (dis- = OPPOSITE)',
                x: 177, y: 110, rx: 60, ry: 18
            },
            {
                id: 'cloud',
                label: 'Cloud Forms ☁️',
                title: '3. Condensation (Making Clouds)',
                desc: 'High up in the cold sky, that gas turns back into tiny water drops. Millions of those ocean-water drops bunch together to form a cloud!',
                speech: 'High up in the cold sky, that gas turns back into tiny water drops. Millions of those ocean-water drops bunch together to form a cloud.',
                tiein: 'slowly (-ly = IN A WAY)',
                x: 387, y: 55, rx: 60, ry: 18
            },
            {
                id: 'rain',
                label: 'Rain Falls 🌧️',
                title: '4. Precipitation (Falling Down)',
                desc: 'When the cloud gets too full and heavy, that same ocean water falls right back down as rain!',
                speech: 'When the cloud gets too full and heavy, that same ocean water falls right back down as rain!',
                tiein: 'heavily (-ly = IN A WAY) / quickly',
                x: 482, y: 140, rx: 60, ry: 18
            }
        ]
    },
    experiment: {
        title: '🧲 The Magnet Mystery',
        desc: 'Test different everyday objects with a strong bar magnet to see which ones are magnetic!',
        items: [
            {
                id: 'nail',
                name: 'Iron Nail 🔩',
                speakName: 'iron nail',
                material: 'Iron (Magnetic metal)',
                magnetic: true,
                predictFrame: 'The magnet will [attract] the [nail] quickly!',
                resultFrame: 'Click! The iron nail snapped quickly to the magnet.',
                resultDesc: 'Iron is magnetic! The magnetic force pulled the nail tightly to the North pole.',
                tiein: 'quickly (-ly = IN A WAY)'
            },
            {
                id: 'pencil',
                name: 'Wooden Pencil ✏️',
                speakName: 'wooden pencil',
                material: 'Wood & graphite (Non-magnetic)',
                magnetic: false,
                predictFrame: 'I predict the magnet will [not pull] the [pencil].',
                resultFrame: 'I disagree! The [pencil] is not magnetic and does not move.',
                resultDesc: 'Wood is not magnetic. The magnet has zero pull on the wooden pencil.',
                tiein: 'disagree (dis- = OPPOSITE / DO NOT)'
            },
            {
                id: 'clip',
                name: 'Paperclip 📎',
                speakName: 'paperclip',
                material: 'Steel (Magnetic alloy)',
                magnetic: true,
                predictFrame: 'The magnet will [attract] the [paperclip] easily!',
                resultFrame: 'Snap! The steel paperclip jumped happily to the magnet.',
                resultDesc: 'Steel contains iron, so the magnetic field snaps it straight onto the magnet.',
                tiein: 'happily (-ly = IN A WAY)'
            },
            {
                id: 'eraser',
                name: 'Rubber Eraser 🧼',
                speakName: 'rubber eraser',
                material: 'Rubber (Bendable non-magnetic)',
                magnetic: false,
                predictFrame: 'The magnet will [ignore] the [rubber eraser].',
                resultFrame: 'The bendable eraser is unbreakable and not magnetic.',
                resultDesc: 'Rubber does not have magnetic domains, so the magnet cannot attract it.',
                tiein: 'unbreakable (un-...-able = CANNOT)'
            }
        ]
    }
};

if (typeof registerStemDiagram === 'function') {
    registerStemDiagram('water_cycle', getStemWaterCycleDiagramSVG);
}
if (typeof registerStemExperiment === 'function') {
    registerStemExperiment('magnet_lab', getStemMagnetSVG);
}
if (typeof registerStemTopic === 'function') {
    registerStemTopic('intermediate', STEM_WATER_CYCLE_TOPIC_DATA);
}
if (typeof window !== 'undefined') {
    window.getStemWaterCycleDiagramSVG = getStemWaterCycleDiagramSVG;
    window.getStemMagnetSVG = getStemMagnetSVG;
    window.STEM_WATER_CYCLE_TOPIC_DATA = STEM_WATER_CYCLE_TOPIC_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        level: 'intermediate',
        topicData: STEM_WATER_CYCLE_TOPIC_DATA,
        getDiagramSVG: getStemWaterCycleDiagramSVG,
        getExperimentSVG: getStemMagnetSVG
    };
}
