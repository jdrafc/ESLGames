/* ==========================================================================
   STORY BUILDER CARTRIDGE: THE LOST SANCTUARY OF TWILIGHT BAY (ADVANCED)
   Storyboard 1 — 4 Marine Settings & 4 Diver Archetypes (6 Props Each)
   Heroes: 🤿 Eve the Oceanographer, 🐢 Shelly the Sea Turtle, 👨‍🔬 Dr. Tide, 🧑‍🔧 Kai the Robotics Diver
   ========================================================================== */

const TWILIGHT_CHARACTER_PROPS = {
    eve: [
        { id: 'uv_matrix', name: 'Underwater UV Scanner', icon: '🔦', color: '#38bdf8', desc: "Handheld ultraviolet illuminator revealing hidden coral bioluminescence" },
        { id: 'specimen_capsule', name: 'Glowing Coral Jar', icon: '🫙', color: '#00f0ff', desc: "Sealed titanium-glass canister preserving a rare glowing coral sample" },
        { id: 'sonar_beacon', name: 'Acoustic Sonar Pinger', icon: '📡', color: '#f59e0b', desc: "Floating torpedo-shaped pinger transmitting trench soundings" },
        { id: 'sample_corer', name: 'Marine Sediment Corer', icon: '🧪', color: '#10b981', desc: "Graduated titanium tube collecting seabed mineral core strata" },
        { id: 'ocean_slate', name: 'Waterproof Digital Slate', icon: '📱', color: '#818cf8', desc: "Buoyant glass touchscreen logging deep-sea bathymetric maps" },
        { id: 'laser_rangefinder', name: 'Bathymetric Laser Gauge', icon: '📏', color: '#f43f5e', desc: "Dual green laser gauge measuring submarine trench clearances" }
    ],
    maya: [], // Backward-compatibility alias populated below
    turtle: [
        { id: 'ancient_coin', name: 'Sunken Galleon Coin', icon: '🪙', color: '#facc15', desc: "Shimmering pirate gold doubloon found resting on the seafloor" },
        { id: 'glowing_pearl', name: 'Bioluminescent Pearl', icon: '⚪', color: '#e0e7ff', desc: "Giant iridescent deep-sea pearl radiating soft rainbow luminescence" },
        { id: 'polished_shell', name: 'Spotted Cowrie Shell', icon: '🐚', color: '#f59e0b', desc: "Porcelain-smooth spiral shell reflecting shimmering water rays" },
        { id: 'trench_crystal', name: 'Abyssal Quartz Prism', icon: '💎', color: '#00f0ff', desc: "Hexagonal deep quartz prism refracting twilight light rays" },
        { id: 'kelp_ring', name: 'Woven Kelp Float Ring', icon: '🟢', color: '#10b981', desc: "Buoyancy ring crafted from natural woven giant ocean kelp" },
        { id: 'driftwood_relic', name: 'Carved Sea Talisman', icon: '🪵', color: '#b45309', desc: "Smoothed driftwood piece carved with ancient turtle navigational runes" }
    ],
    dr_tide: [
        { id: 'thermal_probe', name: 'Deep Thermal Sensor', icon: '🌡️', color: '#ef4444', desc: "High-precision digital probe measuring hydrothermal vent water heat" },
        { id: 'salinity_meter', name: 'Ocean Refractometer', icon: '🔬', color: '#38bdf8', desc: "Optical instrument testing mineral salinity across deep currents" },
        { id: 'ph_analyzer', name: 'Acidity Test Chamber', icon: '🧪', color: '#a855f7', desc: "Glass test cell checking ocean acidity and coral health" },
        { id: 'current_drifter', name: 'Current Drifter Sphere', icon: '🛰️', color: '#f59e0b', desc: "Buoyant transponder tracking deep sub-surface ocean drift paths" },
        { id: 'plankton_net', name: 'Plankton Sample Cone', icon: '🪤', color: '#10b981', desc: "Fine silk conical net collecting glowing micro-marine plankton" },
        { id: 'sub_bottom_profiler', name: 'Acoustic Bedrock Disc', icon: '💿', color: '#6366f1', desc: "Disk-shaped sonic transmitter mapping bedrock beneath bay sands" }
    ],
    kai: [
        { id: 'hydro_thruster', name: 'Handheld Sea Scooter', icon: '🌀', color: '#0284c7', desc: "Dual-turbine handheld propulsion unit with spinning propellers" },
        { id: 'magnetic_grapple', name: 'Pneumatic Claw Grapple', icon: '🧲', color: '#ef4444', desc: "Titanium recovery claw on a high-tensile retrieval cable" },
        { id: 'crawler_drone', name: 'Benthic Crawler Drone', icon: '🤖', color: '#f59e0b', desc: "Autonomous tracked seafloor robot with twin LED headlights" },
        { id: 'pneumatic_chisel', name: 'Ultrasonic Rock Chisel', icon: '🔨', color: '#94a3b8', desc: "Diamond-tipped ultrasonic chisel sampling trench basalt rocks" },
        { id: 'cable_winch', name: 'Titanium Cable Spool', icon: '🧵', color: '#10b981', desc: "Motorized spool lowering deep-sea instrumentation packages" },
        { id: 'beacon_buoy', name: 'Emergency Marker Buoy', icon: '🚨', color: '#f97316', desc: "Self-inflating high-visibility marker buoy with flashing strobe" }
    ]
};
TWILIGHT_CHARACTER_PROPS.maya = TWILIGHT_CHARACTER_PROPS.eve;

/* ==========================================================================
   ADVANCED SETTING LANDMARKS (1:1 EXCLUSIVE SIGNATURE MARINE GEOLOGY)
   ========================================================================== */

function getTwilightSettingLandmark(settingId) {
    switch (settingId) {
        case 'azure_reef':
            return {
                id: 'azure_reef',
                name: "the Azure Coral Reef",
                target: 'the bioluminescent coral arch',
                shortTarget: 'the coral arch',
                prep: 'behind',
                slipPhrase: 'drifted behind the bioluminescent coral arch',
                retrieveHero: 'swam through the glowing coral crevices, safely secured',
                retrieveDefault: 'safely recovered the prop from beside the coral arch'
            };
        case 'twilight_trench':
            return {
                id: 'twilight_trench',
                name: "the Deep Twilight Trench",
                target: 'the hydrothermal chimney stack',
                shortTarget: 'the chimney stack',
                prep: 'behind',
                slipPhrase: 'lodged behind the hydrothermal chimney stack',
                retrieveHero: 'maneuvered past the warm mineral plume, safely secured',
                retrieveDefault: 'safely recovered the prop from behind the chimney stack'
            };
        case 'kelp_forest':
            return {
                id: 'kelp_forest',
                name: "the Giant Kelp Sanctuary",
                target: 'the emerald kelp holdfast rock',
                shortTarget: 'the kelp holdfast rock',
                prep: 'within',
                slipPhrase: 'tangled within the emerald kelp holdfast rock',
                retrieveHero: 'threaded through the swaying kelp ribbons, safely secured',
                retrieveDefault: 'safely untangled the prop from within the kelp holdfast'
            };
        case 'sunken_dome':
            return {
                id: 'sunken_dome',
                name: "the Sunken Research Station",
                target: 'the heavy station mooring anchor',
                shortTarget: 'the station mooring anchor',
                prep: 'beside',
                slipPhrase: 'jammed beside the heavy station mooring anchor',
                retrieveHero: 'navigated the station anchor cable, safely secured',
                retrieveDefault: 'safely retrieved the prop from beside the mooring anchor'
            };
        default:
            return {
                id: 'azure_reef',
                name: "the Azure Coral Reef",
                target: 'the bioluminescent coral arch',
                shortTarget: 'the coral arch',
                prep: 'behind',
                slipPhrase: 'drifted behind the glowing coral arch',
                retrieveHero: 'swam through the glowing coral crevices, safely secured',
                retrieveDefault: 'safely recovered the prop from beside the coral arch'
            };
    }
}

/* ==========================================================================
   DYNAMIC 4-PANEL STORY ARC GENERATOR (ADVANCED LEVEL 3)
   ========================================================================== */

function generateAdvancedStoryPanels(hero, setting, prop, twist) {
    const lm = getTwilightSettingLandmark(setting ? setting.id : 'azure_reef');
    const h = hero || { id: 'eve', name: 'Eve the Oceanographer' };
    const s = setting || { id: 'azure_reef', name: 'the Azure Coral Reef' };
    const p = prop || { id: 'uv_matrix', name: 'Underwater UV Scanner' };

    // Panel 1: Setting & Aquatic Setup
    let p1Cap = `First, ${h.name} calibrated deep-sea navigation gear inside ${s.name} to inspect the ${p.name}.`;
    let p1Speech = `Diving regulators verified. Let's observe the marine sanctuary around ${s.name}.`;
    if (h.id === 'turtle') p1Speech = `Gliding through familiar currents! The ${p.name} is shining brightly in the water.`;
    if (h.id === 'dr_tide') p1Speech = `Telemetry locked. Monitoring ocean salinity and temperature gradients near ${s.name}.`;
    if (h.id === 'kai') p1Speech = `Thruster propulsion nominal. Deploying the ${p.name} to survey the seabed floor.`;

    // Panel 2: The Catalyst & Wonder
    let p2Cap = `Next, the ${p.name} illuminated vibrant bioluminescence near ${lm.target}, revealing extraordinary marine life!`;
    let p2Speech = `Incredible! Look at the radiant turquoise glow radiating near ${lm.shortTarget}!`;
    if (h.id === 'turtle') p2Speech = `Follow the flipper stroke! The ${p.name} unlocked a shimmering secret in the reef!`;
    if (h.id === 'dr_tide') p2Speech = `Fascinating! The ${p.name} readings confirm a thriving bioluminescent ecosystem!`;
    if (h.id === 'kai') p2Speech = `Sonar ping echoes positive! The ${p.name} highlights deep underwater arches!`;

    // Panel 3: Conflict & Twist (Climax)
    let p3Cap = twist 
        ? `Suddenly, the ${p.name} ${lm.slipPhrase}! Plus, ${twist.text}`
        : `Suddenly, an unexpected undersea current surged through ${s.name} because the ${p.name} ${lm.slipPhrase}!`;
    let p3Speech = twist 
        ? `${twist.dialogue} We must secure the sanctuary right now!`
        : `Watch out! The underwater vortex is pulling toward ${lm.shortTarget}!`;
    if (!twist && h.id === 'turtle') p3Speech = `Strong trench surge detected! Paddle through the counter-currents to save ${lm.shortTarget}!`;
    if (!twist && h.id === 'dr_tide') p3Speech = `Pressure warning! Balance your buoyancy before the current impacts ${s.name}!`;
    if (!twist && h.id === 'kai') p3Speech = `Engaging hydro-thrusters! Hold the line and recover the ${p.name}!`;

    // Panel 4: Master Resolution & Marine Sanctuary Victory
    let p4Cap = `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, harmonized the currents, and protected ${s.name}!`;
    let p4Speech = `Mission accomplished! The fragile ecosystem at ${s.name} is completely safeguarded.`;
    if (h.id === 'turtle') p4Speech = `Smooth swimming ahead! The sanctuary is safe and thriving once more.`;
    if (h.id === 'dr_tide') p4Speech = `All marine readings 100% nominal. Twilight Bay's sanctuary is officially protected!`;
    if (h.id === 'kai') p4Speech = `Thrusters locked on vector. Another triumphant deep-sea mission completed!`;

    return [
        { panelIndex: 0, roleBadge: 'Setting', caption: p1Cap, speech1: p1Speech, speech2: '' },
        { panelIndex: 1, roleBadge: 'Catalyst', caption: p2Cap, speech1: p2Speech, speech2: '' },
        { panelIndex: 2, roleBadge: 'Climax & Twist', caption: p3Cap, speech1: p3Speech, speech2: '' },
        { panelIndex: 3, roleBadge: 'Resolution', caption: p4Cap, speech1: p4Speech, speech2: '' }
    ];
}

/* ==========================================================================
   TWILIGHT BAY UNIVERSE DEFINITION OBJECT
   ========================================================================== */

const TWILIGHT_SANCTUARY_UNIVERSE = {
    id: 'twilight_sanctuary',
    storyboardNumber: 1,
    masterTitle: 'Storyboard 1',
    level: 'advanced',
    levelLabel: '🔴 Level 3: Advanced',
    anchorTitle: 'The Lost Sanctuary of Twilight Bay',
    defaultTitle: 'The Lost Sanctuary of Twilight Bay',
    summary: 'Dive deep into Twilight Bay with Eve to protect bioluminescent corals and marine sanctuaries!',
    defaultSetting: 'azure_reef',
    defaultChar: 'eve',
    defaultSecondaryChar: 'turtle',
    defaultProp: 'uv_matrix',

    getPropsForCharacter(charId) {
        if (charId === 'maya') charId = 'eve';
        return TWILIGHT_CHARACTER_PROPS[charId] || TWILIGHT_CHARACTER_PROPS.eve;
    },

    settings: [
        { id: 'azure_reef', name: 'Azure Coral Reef', icon: '🪸', desc: 'Bioluminescent reef glowing turquoise and magenta under UV light' },
        { id: 'twilight_trench', name: 'Deep Twilight Trench', icon: '🌊', desc: 'Dark ocean abyss illuminated by hydrothermal vent stacks and minerals' },
        { id: 'kelp_forest', name: 'Giant Kelp Sanctuary', icon: '🌿', desc: 'Towering emerald kelp ribbons with cool drifting ocean currents' },
        { id: 'sunken_dome', name: 'Sunken Research Station', icon: '⚓', desc: 'Submerged geodesic laboratory dome resting on the seafloor' }
    ],

    characters: [
        { id: 'eve', name: 'Eve the Oceanographer', icon: '🤿', avatar: '👩‍🔬', role: 'Lead Researcher', desc: 'Fearless marine scientist with golden-blonde hair and streamlined wetsuit' },
        { id: 'turtle', name: 'Shelly the Sea Turtle', icon: '🐢', avatar: '🐢', role: 'Sanctuary Guide', desc: 'Ancient green sea turtle with glowing emerald hexagonal scutes' },
        { id: 'dr_tide', name: 'Dr. Tide', icon: '👨‍🔬', avatar: '👨‍🔬', role: 'Marine Ecologist', desc: 'Senior oceanographer tracking coral temperatures in high-tech diving gear' },
        { id: 'kai', name: 'Kai the Robotics Diver', icon: '🧑‍🔧', avatar: '🧑‍🔧', role: 'Submersible Tech', desc: 'Technical specialist operating deep-sea thrusters and recovery equipment' }
    ],

    get props() {
        return this.getPropsForCharacter(this.defaultChar);
    },

    readingVocab: [
        { word: 'bioluminescent', source: 'Reading Lab', def: 'Living marine organisms that produce and emit their own light 🪼.' },
        { word: 'submersible', source: 'Reading Lab', def: 'A specialized underwater craft designed for deep ocean diving 🚤.' },
        { word: 'sanctuary', source: 'Reading Lab', def: 'A protected ocean zone where fragile marine life is kept safe 🛡️.' },
        { word: 'oceanographers', source: 'Reading Lab', def: 'Scientists dedicated to studying the ocean, tides, and marine ecosystems 🌊.' },
        { word: 'ultraviolet', source: 'Reading Lab', def: 'Invisible light rays that reveal the glowing pigments in Azure Coral 💡.' },
        { word: 'fragile', source: 'Reading Lab', def: 'Delicate, easily damaged, and requiring careful scientific protection 🪸.' }
    ],

    morphology: [
        { word: 'Exploration', cat: 'tion', suffix: '-tion (Act of)', def: 'The systematic scientific exploration of the deep sea.' },
        { word: 'Transformation', cat: 'tion', suffix: '-tion (Act of)', def: 'The radiant color transformation of coral under UV light.' },
        { word: 'Protection', cat: 'tion', suffix: '-tion (Act of)', def: 'Safeguarding fragile marine sanctuaries from human impact.' },
        { word: 'Unbreakable', cat: 'un', suffix: 'un-...-able (Cannot)', def: 'Reinforced submarine glass built to withstand trench pressure.' },
        { word: 'Unusual', cat: 'un', suffix: 'un- (Not)', def: 'An unexpected thermal reading indicating a volcanic vent.' },
        { word: 'Courageous', cat: 'ous', suffix: '-ous (Full of)', def: 'Showing bold bravery while piloting into uncharted abyssal depths.' }
    ],

    twists: [
        { id: 'thermal_vent', icon: '🌋', title: 'Hydrothermal Vent Surge!', text: 'Boiling mineral-rich water surges from a hidden deep-sea trench fissure!', dialogue: 'Look at the temperature readout! A hydrothermal vent just opened beneath the reef!' },
        { id: 'bioluminescent_swarm', icon: '🪼', title: 'Bioluminescent Swarm!', text: 'A magnificent swarm of glowing purple jellyfish illuminates the dark trench!', dialogue: 'Incredible! The bioluminescent swarm is lighting up the entire seafloor!' },
        { id: 'abyssal_vortex', icon: '🌀', title: 'Abyssal Current Vortex!', text: 'A powerful rotating underwater whirlpool churns the deep-sea currents!', dialogue: 'Hold your streamline! The vortex current is pulling toward the trench wall!' },
        { id: 'survey_drone', icon: '🤖', title: 'Uncharted Survey Drone!', text: 'An autonomous deep-sea reconnaissance drone sweeps its amber searchlight across the reef!', dialogue: 'Look above! An exploratory survey drone is mapping our exact position!' }
    ],

    templates: [
        {
            panelIndex: 0,
            role: '1. Atmospheric Setup',
            roleBadge: 'Setup',
            starters: ['Deep beneath the surface of Twilight Bay,', 'Gliding past giant kelp forests,', 'Surrounded by the cool ocean currents,'],
            connectors: ['Steering the submersible,', 'Equipped for exploration,'],
            defaultCaption: "Deep beneath the surface of Twilight Bay, Eve steered through the cool ocean currents.",
            defaultSpeech: "Calibrating the underwater camera now. The water clarity is extraordinary today."
        },
        {
            panelIndex: 1,
            role: '2. The Catalyst (Mission)',
            roleBadge: 'Catalyst',
            starters: ['Illuminated by bioluminescent jellyfish,', 'Calibrating the thermal sensor array,', 'Approaching the fragile coral wall,'],
            connectors: ['Observing closely,', 'Discovering new life,'],
            defaultCaption: "Through the observation dome, bioluminescent organisms illuminated the seabed.",
            defaultSpeech: "Look at the vibrant turquoise glow under ultraviolet light!"
        },
        {
            panelIndex: 2,
            role: '3. High-Stakes Climax',
            roleBadge: 'Climax & Twist',
            starters: ['Without warning,', 'At the critical moment,', 'Before Eve could record the sample,'],
            connectors: ['Suddenly,', 'Instantly,'],
            defaultCaption: "Without warning, the thermal sensor detected a sudden warm surge flowing from the trench!",
            defaultSpeech: "Hold steady! The current is shifting violently near the coral wall!"
        },
        {
            panelIndex: 3,
            role: '4. Master Resolution',
            roleBadge: 'Resolution',
            starters: ['With courageous precision,', 'Executing a gentle maneuver,', 'Safeguarding the marine sanctuary,'],
            connectors: ['Finally,', 'In the end,'],
            defaultCaption: "With courageous precision, Eve secured the mission telemetry, protecting the fragile sanctuary forever.",
            defaultSpeech: "All environmental data logged! This marine habitat is officially protected."
        }
    ],

    generateStoryPanels: generateAdvancedStoryPanels
};

/* ==========================================================================
   ADVANCED DIVER CHARACTER RIGS (AQUATIC SWIMMING DYNAMICS)
   ========================================================================== */

function renderAdvancedCharacter(charId, charX, groundY, pose = 'exploring', isSecondary = false) {
    const scaleFactor = isSecondary ? '0.85' : '1.0';
    // Strict adherence to 6 steps / strokes rule: always wrap in story-anim-walk-6steps or story-anim-swim-6steps
    const animClass = 'story-anim-walk-6steps';

    if (charId === 'turtle') {
        // ----------------------------------------------------------------------
        // 🐢 SHELLY THE SEA TURTLE (AQUATIC SANCTUARY GUIDE)
        // ----------------------------------------------------------------------
        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 55}) scale(${scaleFactor})" style="transform-origin: 0px 55px;">
                    <!-- Hind Flippers -->
                    <g class="story-anim-turtle-paddle" style="transform-origin: -18px 12px; animation-delay: 0.3s;">
                        <ellipse cx="-22" cy="12" rx="14" ry="6" fill="#15803d" stroke="#166534" stroke-width="1.5" transform="rotate(-15 -22 12)"/>
                    </g>
                    <!-- Carapace Shell (Emerald Hexagonal Scutes) -->
                    <ellipse cx="0" cy="0" rx="34" ry="24" fill="#15803d" stroke="#14532d" stroke-width="2.5"/>
                    <ellipse cx="0" cy="-2" rx="30" ry="20" fill="#16a34a"/>
                    <!-- Hexagonal Scute Patterns -->
                    <polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
                    <polygon points="16,-6 24,-2 24,6 16,10 11,6 11,-2" fill="#22c55e" stroke="#15803d" stroke-width="1.2"/>
                    <polygon points="-16,-6 -24,-2 -24,6 -16,10 -11,6 -11,-2" fill="#22c55e" stroke="#15803d" stroke-width="1.2"/>
                    <circle cx="0" cy="0" r="3" fill="#facc15" opacity="0.8" class="story-anim-led-1"/>
                    
                    <!-- Head & Expressive Eyes -->
                    <ellipse cx="32" cy="-4" rx="14" ry="10" fill="#16a34a" stroke="#14532d" stroke-width="1.8"/>
                    <circle cx="36" cy="-6" r="3.8" fill="#ffffff"/>
                    <circle cx="37" cy="-6" r="2.2" fill="#0f172a"/>
                    <circle cx="38" cy="-7" r="0.8" fill="#ffffff"/>
                    <!-- Sweet smiling beak -->
                    <path d="M 40 -1 Q 44 2 40 4" stroke="#14532d" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                    
                    <!-- Large Front Swimming Flipper -->
                    <g class="story-anim-turtle-paddle" style="transform-origin: 12px 6px;">
                        <path d="M 10 4 C 18 10, 28 22, 22 28 C 16 30, 4 18, 0 10 Z" fill="#22c55e" stroke="#166534" stroke-width="2"/>
                    </g>
                </g>
            </g>
        `;
    }

    if (charId === 'dr_tide') {
        // ----------------------------------------------------------------------
        // 👨‍🔬 DR. TIDE (SENIOR MARINE ECOLOGIST)
        // ----------------------------------------------------------------------
        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 75}) scale(${scaleFactor})" style="transform-origin: 0px 75px;">
                    <!-- Twin Scuba Oxygen Cylinders (Back Mounted) -->
                    <rect x="-32" y="-18" width="10" height="42" rx="5" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
                    <rect x="-24" y="-20" width="10" height="42" rx="5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
                    <circle cx="-27" cy="-22" r="3" fill="#64748b"/>
                    
                    <!-- Swimming Streamlined Legs & Dual Black Flippers -->
                    <g class="story-anim-fin-kick-left" style="transform-origin: -14px 18px;">
                        <path d="M -10 14 L -32 20 L -28 28 L -6 20 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
                        <!-- Heavy Rubber Diving Fin -->
                        <polygon points="-32,20 -52,18 -48,32 -28,28" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
                    </g>
                    <g class="story-anim-fin-kick-right" style="transform-origin: -10px 10px;">
                        <path d="M -6 8 L -28 14 L -24 22 L -2 14 Z" fill="#334155" stroke="#0f172a" stroke-width="2"/>
                        <polygon points="-28,14 -48,12 -44,26 -24,22" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
                    </g>
                    
                    <!-- Wetsuit Torso & Chest Console -->
                    <ellipse cx="2" cy="0" rx="20" ry="16" fill="#1e293b" stroke="#0f172a" stroke-width="2.2"/>
                    <rect x="-4" y="-8" width="16" height="14" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
                    <line x1="-2" y1="-3" x2="10" y2="-3" stroke="#22c55e" stroke-width="1.5" class="story-anim-led-1"/>
                    <line x1="-2" y1="2" x2="6" y2="2" stroke="#38bdf8" stroke-width="1.5" class="story-anim-led-2"/>
                    
                    <!-- Head, Mask & Regulator -->
                    <circle cx="20" cy="-6" r="14" fill="#334155" stroke="#0f172a" stroke-width="2"/>
                    <ellipse cx="24" cy="-7" rx="9" ry="7" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" opacity="0.9"/>
                    <path d="M 20 -10 Q 28 -12 28 -5" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.75" stroke-linecap="round"/>
                    <circle cx="22" cy="4" r="3.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
                    
                    <!-- Reaching Arm with Dive Computer -->
                    <path d="M 8 4 L 26 12 L 24 16 L 6 8 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.8"/>
                    <rect x="20" y="9" width="7" height="6" rx="1" fill="#00f0ff"/>
                </g>
            </g>
        `;
    }

    if (charId === 'kai') {
        // ----------------------------------------------------------------------
        // 🧑‍🔧 KAI THE ROBOTICS DIVER (SUBMERSIBLE & TECH SPECIALIST)
        // ----------------------------------------------------------------------
        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 75}) scale(${scaleFactor})" style="transform-origin: 0px 75px;">
                    <!-- Dual Mini Water Thrusters (Back Mounted) -->
                    <g transform="translate(-24, -12)">
                        <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#334155" stroke="#0f172a" stroke-width="1.8"/>
                        <polygon points="-8,-4 -16,-2 -16,8 -8,6" fill="#0284c7" opacity="0.8"/>
                        <circle cx="0" cy="0" r="3" fill="#f59e0b" class="story-anim-led-1"/>
                    </g>
                    
                    <!-- Streamlined Diving Legs & Orange Flippers -->
                    <g class="story-anim-fin-kick-left" style="transform-origin: -12px 16px;">
                        <path d="M -8 12 L -30 18 L -26 26 L -4 18 Z" fill="#0f172a" stroke="#0284c7" stroke-width="1.8"/>
                        <polygon points="-30,18 -52,16 -48,30 -26,26" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
                    </g>
                    <g class="story-anim-fin-kick-right" style="transform-origin: -8px 8px;">
                        <path d="M -4 6 L -26 12 L -22 20 L 0 12 Z" fill="#1e293b" stroke="#0284c7" stroke-width="1.8"/>
                        <polygon points="-26,12 -48,10 -44,24 -22,20" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
                    </g>
                    
                    <!-- Titanium Reinforced Dive Suit -->
                    <ellipse cx="2" cy="0" rx="19" ry="15" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
                    <path d="M -8 -8 L 12 -8 L 8 8 L -12 8 Z" fill="#1e293b"/>
                    <circle cx="2" cy="0" r="4.5" fill="#38bdf8" class="story-anim-led-2"/>
                    
                    <!-- Tech Diving Visor & Amber Lens -->
                    <circle cx="19" cy="-6" r="13" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
                    <rect x="14" y="-10" width="12" height="8" rx="2" fill="#f59e0b" stroke="#d97706" stroke-width="1.2"/>
                    <line x1="16" y1="-8" x2="23" y2="-8" stroke="#ffffff" stroke-width="1" stroke-linecap="round"/>
                    
                    <!-- Leading Arm & Sonar Beacon Grip -->
                    <path d="M 8 2 L 28 8 L 26 13 L 6 6 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
                    <circle cx="28" cy="9" r="4" fill="#fed7aa"/>
                </g>
            </g>
        `;
    }

    // --------------------------------------------------------------------------
    // 🤿 EVE THE OCEANOGRAPHER (UNMISTAKABLE GOLDEN-BLONDE LEAD SCIENTIST DIVER)
    // --------------------------------------------------------------------------
    return `
        <g class="${animClass}">
            <g transform="translate(${charX}, ${groundY - 75}) scale(${scaleFactor})" style="transform-origin: 0px 75px;">
                <!-- Flowing High-Volume Golden-Blonde Ponytail (Subsea Current Motion) -->
                <g class="story-anim-hair-float" style="transform-origin: 8px -18px;">
                    <!-- Amber Outline & Depth Layer -->
                    <path d="M 10 -16 C -4 -28, -26 -22, -38 -14 C -44 -10, -42 -2, -32 -6 C -20 -10, -6 -12, 10 -12 Z" fill="#d97706" stroke="#b45309" stroke-width="2"/>
                    <!-- Radiant Golden-Blonde Body (Matching Eve & Dr. Eve) -->
                    <path d="M 9 -15 C -4 -26, -24 -20, -35 -13 C -40 -9, -38 -3, -30 -6 C -18 -9, -6 -11, 9 -11 Z" fill="#facc15"/>
                    <!-- Flowing Sunlight Highlights -->
                    <path d="M 7 -14 C -3 -22, -20 -18, -28 -11" stroke="#fef08a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                    <path d="M 4 -12 C -6 -18, -16 -14, -22 -9" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.8"/>
                </g>
                <circle cx="10" cy="-15" r="4.2" fill="#ec4899" stroke="#be185d" stroke-width="1"/> <!-- Vibrant Magenta Hair Tie -->

                <!-- Streamlined Swimming Legs with Alternating Fin Flutter Kicks -->
                <g class="story-anim-fin-kick-left" style="transform-origin: -12px 14px;">
                    <path d="M -8 10 L -28 16 L -24 24 L -4 16 Z" fill="#0f172a" stroke="#0284c7" stroke-width="1.8"/>
                    <!-- Flexible Hydrodynamic Cyan & Magenta Fin -->
                    <polygon points="-28,16 -50,14 -46,28 -24,24" fill="#06b6d4" stroke="#0891b2" stroke-width="1.5"/>
                    <line x1="-30" y1="20" x2="-45" y2="18" stroke="#ec4899" stroke-width="2" stroke-linecap="round"/>
                </g>
                <g class="story-anim-fin-kick-right" style="transform-origin: -8px 6px;">
                    <path d="M -4 4 L -24 10 L -20 18 L 0 10 Z" fill="#1e293b" stroke="#0284c7" stroke-width="1.8"/>
                    <polygon points="-24,10 -46,8 -42,22 -20,18" fill="#06b6d4" stroke="#0891b2" stroke-width="1.5"/>
                    <line x1="-26" y1="14" x2="-41" y2="12" stroke="#ec4899" stroke-width="2" stroke-linecap="round"/>
                </g>

                <!-- Feminine Tailored Midnight Navy & Cyan Wetsuit -->
                <ellipse cx="2" cy="0" rx="18" ry="14" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
                <!-- Curved Magenta Accent Racing Stripes -->
                <path d="M -10 -4 Q 2 -8 12 -4" stroke="#ec4899" stroke-width="2.5" fill="none"/>
                <path d="M -10 4 Q 2 8 12 4" stroke="#00f0ff" stroke-width="2" fill="none"/>

                <!-- Golden-Blonde Side Volume & Locks Framing Head -->
                <path d="M 12 -16 Q 8 -6 12 0 Q 15 -6 16 -12 Z" fill="#d97706"/>
                <path d="M 13 -15 Q 9 -6 13 -1 Q 15 -6 16 -12 Z" fill="#facc15"/>

                <!-- Head & Feminine Facial Features -->
                <circle cx="18" cy="-6" r="13" fill="#fed7aa" stroke="#d97706" stroke-width="1.2"/>
                <!-- Golden-Blonde Forehead Bangs with Sunlight Highlights -->
                <path d="M 12 -13 Q 18 -19 26 -13 Q 22 -7 16 -8 Z" fill="#d97706"/>
                <path d="M 13 -12 Q 18 -18 25 -12 Q 21 -7 17 -8 Z" fill="#facc15"/>
                <path d="M 15 -11 Q 19 -16 23 -11" stroke="#fef08a" stroke-width="1.5" fill="none"/>
                <!-- Cheerful Rosy Cheek Blush -->
                <circle cx="21" cy="-2" r="3.2" fill="#fb7185" opacity="0.6"/>
                <!-- Confident Warm Smile -->
                <path d="M 20 1 Q 24 5 28 1" stroke="#be123c" stroke-width="1.5" fill="none" stroke-linecap="round"/>

                <!-- Rounded Anti-Reflective Diving Mask with Cyan Frame -->
                <rect x="14" y="-11" width="15" height="9" rx="3.5" fill="rgba(6, 182, 212, 0.35)" stroke="#06b6d4" stroke-width="1.8"/>
                <!-- Intelligent Friendly Eyes Visible Through Mask -->
                <circle cx="21" cy="-7" r="2.8" fill="#1e293b"/>
                <circle cx="22" cy="-8" r="1.0" fill="#ffffff"/>
                <circle cx="20" cy="-6" r="0.6" fill="#ffffff"/>
                <path d="M 18 -10 Q 22 -12 25 -9" stroke="#b45309" stroke-width="1.2" fill="none"/> <!-- Blonde Eyelash / Brow Curve -->
                <!-- Mask Glass Sheen -->
                <line x1="16" y1="-10" x2="24" y2="-4" stroke="#ffffff" stroke-width="1.2" opacity="0.8" stroke-linecap="round"/>

                <!-- Hydrodynamic Forward Reaching Arm -->
                <path d="M 8 2 L 28 8 L 26 13 L 6 6 Z" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
                <circle cx="28" cy="9" r="4" fill="#fed7aa"/>
            </g>
        </g>
    `;
}

/* ==========================================================================
   ADVANCED STANDALONE PROP RENDERER (24 CHARACTER-SCOPED PROPS)
   ========================================================================== */

function renderAdvancedPropSVG(propId, propX, propY, isClimax, settingId) {
    const floatAnim = isClimax ? 'story-anim-prop-float' : 'story-anim-prop-float';
    let propGraphic = '';

    switch (propId) {
        // --- EVE'S PROPS (6) ---
        case 'uv_matrix':
            // Handheld Ultraviolet Illuminator Scanner with Volumetric UV Fan
            propGraphic = `
                <!-- Marine Dock Bracket -->
                <rect x="-22" y="-4" width="44" height="8" rx="2.5" fill="#0f172a" stroke="#0284c7" stroke-width="1.8"/>
                <!-- Ergonomic Deep-Dive UV Scanner Body -->
                <g transform="translate(0, -18)">
                    <rect x="-18" y="-9" width="36" height="18" rx="4.5" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                    <!-- Rubberized Grips & Pressure Seal Rim -->
                    <rect x="-16" y="-7" width="6" height="14" rx="2" fill="#0369a1"/>
                    <rect x="14" y="-8" width="5" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
                    <!-- Glowing Violet UV Emitter Diode Lens -->
                    <ellipse cx="17" cy="0" rx="3.5" ry="7" fill="#a855f7" stroke="#c084fc" stroke-width="1.5" class="story-anim-crystal-glow"/>
                    <ellipse cx="17" cy="0" rx="1.5" ry="4" fill="#ffffff"/>
                    <!-- Volumetric Ultraviolet Beam Fan radiating forward -->
                    <polygon points="19,-6 62,-26 62,26 19,6" fill="rgba(168, 85, 247, 0.32)"/>
                    <polygon points="19,-3 54,-15 54,15 19,3" fill="rgba(192, 132, 252, 0.25)"/>
                    <!-- Active Traveling UV Laser Wave Tracer -->
                    <line x1="20" y1="0" x2="60" y2="0" stroke="#00f0ff" stroke-width="1.8" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                    <!-- Power & Wavelength Indicator LEDs -->
                    <circle cx="-6" cy="-4" r="2" fill="#00f0ff" class="story-anim-led-1"/>
                    <circle cx="2" cy="-4" r="2" fill="#facc15" class="story-anim-led-2"/>
                    <text x="-2" y="5" font-size="3.8" font-family="monospace" font-weight="900" fill="#ffffff">365nm</text>
                    <!-- Moving Light Sheen across Scanner Body -->
                    <line x1="-12" y1="-7" x2="10" y2="-7" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                </g>
            `;
            break;

        case 'specimen_capsule':
            // Glowing Bioluminescent Coral Specimen Pressure Cylinder
            propGraphic = `
                <!-- Marine Specimen Dock -->
                <rect x="-20" y="-4" width="40" height="8" rx="2.5" fill="#0f172a" stroke="#06b6d4" stroke-width="1.8"/>
                <!-- High-Pressure Borosilicate Cylinder Assembly -->
                <g transform="translate(0, -22)">
                    <!-- Transparent Cylindrical Chamber with Water Slosh -->
                    <rect x="-13" y="-22" width="26" height="42" rx="7" fill="rgba(6, 182, 212, 0.22)" stroke="#38bdf8" stroke-width="2.2"/>
                    <!-- Heavy Titanium Hermetic Pressure Caps -->
                    <rect x="-11" y="-25" width="22" height="6" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                    <rect x="-11" y="18" width="22" height="6" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                    <!-- Living Bioluminescent Coral Branch Inside Chamber -->
                    <g class="story-anim-plasma-pulse">
                        <path d="M 0 16 Q -6 4 -4 -6 Q 0 -12 2 -4 Q 8 2 0 16 Z" fill="#ec4899" filter="drop-shadow(0 0 8px #f43f5e)"/>
                        <path d="M -2 2 Q -8 -2 -10 -9 Q -5 -8 -1 0" stroke="#00f0ff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                        <path d="M 2 4 Q 8 0 10 -7 Q 6 -6 1 2" stroke="#38bdf8" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                    </g>
                    <!-- Drifting Bioluminescent Spores / Plankton Sparkles -->
                    <g transform="translate(-4, -12)">
                        <circle cx="0" cy="0" r="1.8" fill="#00f0ff" class="story-anim-star-twinkle-fast"/>
                    </g>
                    <g transform="translate(5, -6)">
                        <circle cx="0" cy="0" r="2.2" fill="#facc15" class="story-anim-star-twinkle-fast" style="animation-delay: 0.7s;"/>
                    </g>
                    <g transform="translate(-3, 8)">
                        <circle cx="0" cy="0" r="1.5" fill="#ec4899" class="story-anim-star-twinkle-fast" style="animation-delay: 1.2s;"/>
                    </g>
                    <!-- Cylindrical Glass Refraction Sheen -->
                    <line x1="-8" y1="-18" x2="-8" y2="15" stroke="#ffffff" stroke-width="1.5" opacity="0.8" class="story-anim-gleam-sheen"/>
                </g>
            `;
            break;

        case 'sonar_beacon':
            // Torpedo-shaped Deep-Sea Acoustic Sonar Pinger
            propGraphic = `
                <!-- Sonar Launch Saddle Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#f59e0b" stroke-width="1.8"/>
                <!-- Hydrodynamic Acoustic Sonar Pinger Body -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Radiating Concentric Sonar Acoustic Wavefronts into Water -->
                        <circle cx="16" cy="0" r="14" fill="none" stroke="#38bdf8" stroke-width="1.8" class="story-anim-sound-wave-ping"/>
                        <circle cx="16" cy="0" r="24" fill="none" stroke="#00f0ff" stroke-width="1.2" class="story-anim-radar-ping"/>
                        <!-- Torpedo Hull in Safety Amber -->
                        <path d="M -18 -8 L 14 -8 Q 24 0 14 8 L -18 8 Z" fill="#f59e0b" stroke="#d97706" stroke-width="2.2" filter="drop-shadow(0 3px 6px rgba(0,0,0,0.35))"/>
                        <!-- Hydrodynamic Stabilization Tail Fins -->
                        <polygon points="-18,-8 -26,-14 -24,0" fill="#b45309" stroke="#78350f" stroke-width="1"/>
                        <polygon points="-18,8 -26,14 -24,0" fill="#b45309" stroke="#78350f" stroke-width="1"/>
                        <rect x="-18" y="-4" width="4" height="8" fill="#334155"/>
                        <!-- Forward Sonar Transducer Dome & Strobe Node -->
                        <circle cx="15" cy="0" r="5" fill="#00f0ff" class="story-anim-crystal-glow"/>
                        <circle cx="15" cy="0" r="2.2" fill="#ffffff"/>
                        <!-- Acoustic Telemetry Status LEDs -->
                        <circle cx="-8" cy="-3" r="1.8" fill="#22c55e" class="story-anim-led-1"/>
                        <circle cx="-2" cy="-3" r="1.8" fill="#38bdf8" class="story-anim-led-2"/>
                        <text x="4" y="4" font-size="3.5" font-family="monospace" font-weight="900" fill="#0f172a">PING</text>
                        <!-- Metallic Hull Sheen Streak -->
                        <line x1="-12" y1="-5" x2="8" y2="-5" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'sample_corer':
            // Deep Marine Sediment Core Sampler with Geological Strata
            propGraphic = `
                <!-- Core Barrel Dock Base -->
                <rect x="-20" y="-4" width="40" height="8" rx="2.5" fill="#0f172a" stroke="#10b981" stroke-width="1.8"/>
                <!-- Titanium Corer Tube Assembly -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-wobble-play">
                        <!-- Main Titanium Barrel -->
                        <rect x="-7" y="-24" width="14" height="46" rx="3" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                        <!-- Transparent Geological Strata Inspection Window -->
                        <rect x="-4.5" y="-18" width="9" height="34" rx="1.5" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
                        <!-- Basalt Silt Bottom Layer -->
                        <rect x="-4" y="6" width="8" height="9.5" fill="#1e293b"/>
                        <!-- Hydrothermal Red Mineral Layer -->
                        <rect x="-4" y="-3" width="8" height="9" fill="#b45309"/>
                        <!-- Glowing Emerald Benthic Vein with Pulsing Glint -->
                        <rect x="-4" y="-11" width="8" height="8" fill="#10b981" class="story-anim-crystal-glow"/>
                        <!-- Surface Silt Gray Layer -->
                        <rect x="-4" y="-17.5" width="8" height="6.5" fill="#64748b"/>
                        <!-- Diamond Carbide Penetration Cutting Head -->
                        <polygon points="-8,22 8,22 0,31" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
                        <!-- Sliding Weighted Driver Collar with Sheen -->
                        <rect x="-9" y="-24" width="18" height="7" rx="2" fill="#d97706" stroke="#f59e0b" stroke-width="1.2"/>
                        <line x1="-8" y1="-21" x2="8" y2="-21" stroke="#ffffff" stroke-width="1" class="story-anim-gleam-sheen"/>
                        <!-- Depth Scale Hash Marks & LED -->
                        <circle cx="0" cy="-21" r="1.4" fill="#22c55e" class="story-anim-led-1"/>
                    </g>
                </g>
            `;
            break;

        case 'ocean_slate':
            // Waterproof Buoyant Digital Tablet with Bathymetric Waveforms
            propGraphic = `
                <!-- Submersible Dock Stand -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.8"/>
                <!-- Ruggedized Bathymetric Tablet -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <rect x="-18" y="-14" width="36" height="28" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2.2" filter="drop-shadow(0 4px 8px rgba(0, 240, 255, 0.25))"/>
                        <!-- Screen Bezel Corner Bumpers -->
                        <rect x="-18" y="-14" width="5" height="5" rx="1.5" fill="#0284c7"/>
                        <rect x="13" y="-14" width="5" height="5" rx="1.5" fill="#0284c7"/>
                        <rect x="-18" y="9" width="5" height="5" rx="1.5" fill="#0284c7"/>
                        <rect x="13" y="9" width="5" height="5" rx="1.5" fill="#0284c7"/>
                        <!-- Illuminated Cyan OLED Display Screen -->
                        <rect x="-14" y="-10" width="28" height="20" rx="2" fill="#051829" stroke="#00f0ff" stroke-width="1"/>
                        <!-- Streaming Seafloor Bathymetric Depth Contour Sine Wave -->
                        <path d="M-12 2 Q-7 -6 -3 2 T5 2 T12 2" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="3,1.5" class="story-anim-data-stream-flow"/>
                        <path d="M-12 6 Q-6 0 0 6 T12 6" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="4,2" class="story-anim-data-stream-flow"/>
                        <!-- Floating Holographic Seabed Trench Contour Wireframe -->
                        <g transform="translate(0, -26)" class="story-anim-hologram-flicker">
                            <polygon points="-12,0 0,-7 12,0 0,7" fill="rgba(0, 240, 255, 0.18)" stroke="#00f0ff" stroke-width="1"/>
                            <text x="0" y="2" font-size="3.2" font-family="monospace" font-weight="900" fill="#00f0ff" text-anchor="middle">4,200m</text>
                        </g>
                        <!-- Status Readout Tag -->
                        <text x="0" y="-5" font-size="2.8" font-family="monospace" font-weight="900" fill="#38bdf8" text-anchor="middle">BATHY // SCAN</text>
                        <circle cx="10" cy="-6" r="1.3" fill="#22c55e" class="story-anim-led-1"/>
                    </g>
                </g>
            `;
            break;

        case 'laser_rangefinder':
            // Dual Green Bathymetric Submarine Laser Rangefinder
            propGraphic = `
                <!-- Tactical Laser Mount Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#10b981" stroke-width="1.8"/>
                <!-- Heavy Marine Rangefinder Casing -->
                <g transform="translate(0, -20)">
                    <rect x="-16" y="-11" width="32" height="22" rx="4" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
                    <!-- Optical Laser Aperture Barrel Shrouds -->
                    <rect x="12" y="-8" width="6" height="7" rx="1.5" fill="#334155" stroke="#10b981" stroke-width="1.2"/>
                    <rect x="12" y="1" width="6" height="7" rx="1.5" fill="#334155" stroke="#10b981" stroke-width="1.2"/>
                    <!-- Dual Emerald Laser Emitter Diodes -->
                    <circle cx="16" cy="-4.5" r="3" fill="#10b981" class="story-anim-crystal-glow"/>
                    <circle cx="16" cy="-4.5" r="1.4" fill="#ffffff"/>
                    <circle cx="16" cy="4.5" r="3" fill="#10b981" class="story-anim-crystal-glow"/>
                    <circle cx="16" cy="4.5" r="1.4" fill="#ffffff"/>
                    <!-- Dual Parallel Laser Tracer Beams shooting into deep water -->
                    <line x1="18" y1="-4.5" x2="62" y2="-4.5" stroke="#22c55e" stroke-width="2" stroke-dasharray="5,2" class="story-anim-laser-tracer"/>
                    <line x1="18" y1="4.5" x2="62" y2="4.5" stroke="#22c55e" stroke-width="2" stroke-dasharray="5,2" class="story-anim-laser-tracer"/>
                    <!-- Targeting Lock Crosshair Rings at beam ends -->
                    <circle cx="58" cy="-4.5" r="5" fill="none" stroke="#22c55e" stroke-width="1" class="story-anim-radar-ping"/>
                    <circle cx="58" cy="4.5" r="5" fill="none" stroke="#22c55e" stroke-width="1" class="story-anim-radar-ping"/>
                    <!-- Digital Distance Lock Readout Display -->
                    <rect x="-12" y="-7" width="20" height="14" rx="2" fill="#090d16" stroke="#10b981" stroke-width="1"/>
                    <text x="-2" y="1.5" font-size="3.5" font-family="monospace" font-weight="900" fill="#22c55e" text-anchor="middle">12.8m</text>
                    <circle cx="-8" cy="-4" r="1.2" fill="#ef4444" class="story-anim-led-1"/>
                </g>
            `;
            break;

        // --- SHELLY'S PROPS (6) ---
        case 'ancient_coin':
            // Shimmering Pirate Gold Doubloon with Minted Galleon Crest
            propGraphic = `
                <!-- Coral Sand Mound Dock -->
                <ellipse cx="0" cy="0" rx="26" ry="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
                <!-- Giant Shimmering Gold Doubloon -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Main Gold Coin Body with Drop Shadow -->
                        <circle cx="0" cy="0" r="18" fill="#facc15" stroke="#d97706" stroke-width="2.6" filter="drop-shadow(0 4px 10px rgba(250, 204, 21, 0.45))"/>
                        <!-- Beaded Inner Border Rim -->
                        <circle cx="0" cy="0" r="14" fill="none" stroke="#ca8a04" stroke-width="1.8" stroke-dasharray="3,2"/>
                        <!-- Embossed Cross of Calatrava & Galleon Crest -->
                        <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ca8a04"/>
                        <circle cx="0" cy="0" r="3.5" fill="#facc15" stroke="#b45309" stroke-width="1"/>
                        <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
                        <!-- Surrounding Water Caustic Treasure Sparkles -->
                        <g transform="translate(-14, -14)">
                            <g class="story-anim-star-twinkle-fast">
                                <polygon points="0,-4 1.2,-1.2 4,0 1.2,1.2 0,4 -1.2,1.2 -4,0 -1.2,-1.2" fill="#fef08a"/>
                            </g>
                        </g>
                        <g transform="translate(15, -12)">
                            <g class="story-anim-star-twinkle-fast" style="animation-delay: 0.75s;">
                                <polygon points="0,-3.5 1,-1 3.5,0 1,1 0,3.5 -1,1 -3.5,0 -1,-1" fill="#fef08a"/>
                            </g>
                        </g>
                        <!-- Sweeping Metallic Gleam Sheen -->
                        <line x1="-12" y1="-5" x2="12" y2="-5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'glowing_pearl':
            // Giant Bioluminescent Pearl in Open Oyster Shell Base
            propGraphic = `
                <!-- Scalloped Oyster Shell Bed Base -->
                <ellipse cx="0" cy="0" rx="24" ry="7" fill="#334155" stroke="#64748b" stroke-width="2"/>
                <ellipse cx="0" cy="-2" rx="20" ry="5" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
                <!-- Floating Bioluminescent Giant Pearl Assembly -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Concentric Expanding Violet & Azure Aura Rings -->
                        <circle cx="0" cy="0" r="16" fill="none" stroke="#a855f7" stroke-width="1.8" class="story-anim-sound-wave-ping"/>
                        <circle cx="0" cy="0" r="26" fill="none" stroke="#00f0ff" stroke-width="1.2" class="story-anim-radar-ping"/>
                        <!-- Iridescent Giant Pearl -->
                        <circle cx="0" cy="0" r="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" filter="drop-shadow(0 0 14px #38bdf8)"/>
                        <!-- Pearlescent Rainbow Luster Highlights -->
                        <ellipse cx="-4" cy="-5" rx="6" ry="3" fill="#ffffff" opacity="0.9" transform="rotate(-25 -4 -5)"/>
                        <circle cx="6" cy="4" r="3" fill="#c084fc" opacity="0.5"/>
                        <circle cx="-5" cy="5" r="2.5" fill="#38bdf8" opacity="0.5"/>
                        <!-- Spinning Starlight Sparkle Corona -->
                        <g class="story-anim-astrolabe-spin">
                            <circle cx="-13" cy="0" r="1.5" fill="#facc15"/>
                            <circle cx="13" cy="0" r="1.5" fill="#facc15"/>
                            <circle cx="0" cy="-13" r="1.5" fill="#00f0ff"/>
                            <circle cx="0" cy="13" r="1.5" fill="#00f0ff"/>
                        </g>
                    </g>
                </g>
            `;
            break;

        case 'polished_shell':
            // Porcelain Spotted Tiger Cowrie Shell with Bioluminescent Core
            propGraphic = `
                <!-- Sand Ripple Dock -->
                <ellipse cx="0" cy="0" rx="24" ry="6" fill="#1e293b" stroke="#f97316" stroke-width="1.5"/>
                <!-- Smooth Spotted Cowrie Shell Body -->
                <g transform="translate(0, -18)">
                    <g class="story-anim-prop-wobble-play">
                        <!-- Polished Enamel Domed Shell -->
                        <ellipse cx="0" cy="0" rx="20" ry="13" fill="#ffedd5" stroke="#ea580c" stroke-width="2.2" transform="rotate(12)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"/>
                        <!-- Rich Leopard Amber & Cinnamon Spotting -->
                        <circle cx="-8" cy="-4" r="3" fill="#c2410c"/>
                        <circle cx="-2" cy="-6" r="2.5" fill="#9a3412"/>
                        <circle cx="6" cy="-4" r="3.2" fill="#c2410c"/>
                        <circle cx="-5" cy="3" r="2.8" fill="#ea580c"/>
                        <circle cx="3" cy="2" r="3" fill="#9a3412"/>
                        <circle cx="10" cy="1" r="2.2" fill="#c2410c"/>
                        <!-- Glowing Inner Aperture Lip with Bioluminescent Gold Light -->
                        <path d="M -15 2 Q 0 -2 15 2" stroke="#facc15" stroke-width="2.5" fill="none" class="story-anim-plasma-pulse"/>
                        <path d="M -15 2 Q 0 -2 15 2" stroke="#ffffff" stroke-width="1" fill="none"/>
                        <!-- Porcelain High-Gloss Sheen Reflection -->
                        <path d="M -12 -6 Q 0 -11 12 -6" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                        <!-- Rising Ocean Micro-Bubbles -->
                        <circle cx="16" cy="-10" r="1.5" fill="#38bdf8" class="story-anim-star-twinkle-fast"/>
                    </g>
                </g>
            `;
            break;

        case 'trench_crystal':
            // Hexagonal Abyssal Quartz Prism with Orbital Resonance Rings
            propGraphic = `
                <!-- Crystal Cradle Mount -->
                <ellipse cx="0" cy="0" rx="22" ry="6" fill="#0f172a" stroke="#00f0ff" stroke-width="1.8"/>
                <!-- Faceted Abyssal Quartz Prism Floating in Current -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Dual Counter-Rotating Orbital Resonance Rings -->
                        <g class="story-anim-astrolabe-spin">
                            <ellipse cx="0" cy="0" rx="22" ry="7" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6,3"/>
                        </g>
                        <g class="story-anim-astrolabe-spin" style="animation-direction: reverse;">
                            <ellipse cx="0" cy="0" rx="16" ry="12" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="4,3"/>
                        </g>
                        <!-- Geometric Hexagonal Quartz Crystal -->
                        <polygon points="0,-22 14,-10 14,10 0,22 -14,10 -14,-10" fill="rgba(0, 240, 255, 0.45)" stroke="#00f0ff" stroke-width="2.4" filter="drop-shadow(0 0 12px #00f0ff)"/>
                        <!-- Internal Facet Cleavage Edges with Light Shimmer -->
                        <line x1="0" y1="-22" x2="0" y2="22" stroke="#ffffff" stroke-width="2" opacity="0.9"/>
                        <line x1="-14" y1="-10" x2="14" y2="10" stroke="#ffffff" stroke-width="1.2" opacity="0.75"/>
                        <line x1="14" y1="-10" x2="-14" y2="10" stroke="#ffffff" stroke-width="1.2" opacity="0.75"/>
                        <!-- Super-Pulsing Internal Core Node -->
                        <circle cx="0" cy="0" r="5" fill="#ffffff" class="story-anim-crystal-glow"/>
                        <circle cx="0" cy="0" r="2.5" fill="#00f0ff"/>
                        <!-- Spectral Light Flares Radiating into Ocean -->
                        <g transform="translate(16, -14)">
                            <g class="story-anim-star-twinkle-fast">
                                <polygon points="0,-3.5 1,-1 3.5,0 1,1 0,3.5 -1,1 -3.5,0 -1,-1" fill="#ec4899"/>
                            </g>
                        </g>
                    </g>
                </g>
            `;
            break;

        case 'kelp_ring':
            // Woven Natural Giant Ocean Kelp Buoyancy Ring with Swaying Fronds
            propGraphic = `
                <!-- Seabed Kelp Anchor Stone -->
                <ellipse cx="0" cy="0" rx="24" ry="6" fill="#1e293b" stroke="#15803d" stroke-width="1.8"/>
                <!-- Woven Kelp Buoyancy Ring Floating in Water Column -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Main Braided Giant Kelp Torus Ring -->
                        <circle cx="0" cy="0" r="18" fill="none" stroke="#15803d" stroke-width="6.5"/>
                        <circle cx="0" cy="0" r="18" fill="none" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4"/>
                        <circle cx="0" cy="0" r="18" fill="none" stroke="#86efac" stroke-width="1.2" stroke-dasharray="3,3"/>
                        <!-- Golden Pneumatocyst Air Bladders with Gloss Highlights -->
                        <circle cx="-13" cy="-11" r="4.2" fill="#ca8a04" stroke="#eab308" stroke-width="1"/>
                        <circle cx="-14" cy="-12" r="1.2" fill="#ffffff"/>
                        <circle cx="13" cy="-11" r="4.2" fill="#ca8a04" stroke="#eab308" stroke-width="1"/>
                        <circle cx="12" cy="-12" r="1.2" fill="#ffffff"/>
                        <!-- Swaying Leafy Kelp Frond Trailing in Current -->
                        <g class="story-anim-feather-sway" style="transform-origin: 0px 0px;">
                            <path d="M 0 16 Q 8 26 4 36 Q -2 46 -8 54" stroke="#16a34a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                            <ellipse cx="4" cy="28" rx="7" ry="3" fill="#22c55e" transform="rotate(30 4 28)"/>
                            <ellipse cx="-4" cy="42" rx="7" ry="3" fill="#22c55e" transform="rotate(-30 -4 42)"/>
                        </g>
                        <!-- Embedded Bioluminescent Sea Anemone Glow Nodes -->
                        <circle cx="0" cy="-18" r="2.5" fill="#facc15" class="story-anim-led-1"/>
                        <circle cx="-18" cy="0" r="2.2" fill="#38bdf8" class="story-anim-led-2"/>
                        <circle cx="18" cy="0" r="2.2" fill="#22c55e" class="story-anim-led-3"/>
                    </g>
                </g>
            `;
            break;

        case 'driftwood_relic':
            // Ancient Carved Sea Turtle Driftwood Talisman with Glowing Runes
            propGraphic = `
                <!-- Ocean Floor Stand -->
                <ellipse cx="0" cy="0" rx="24" ry="6" fill="#1e293b" stroke="#78350f" stroke-width="1.8"/>
                <!-- Ironwood Driftwood Talisman with Carved Runes -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-wobble-play">
                        <!-- Contoured Driftwood Slab Body -->
                        <path d="M -18 -8 Q 0 -13 18 -6 Q 14 11 -4 9 Q -15 11 -18 -8 Z" fill="#78350f" stroke="#451a03" stroke-width="2.4" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))"/>
                        <!-- Wood Grain Textures -->
                        <path d="M -14 -4 Q 0 -8 14 -2" stroke="#92400e" stroke-width="1.2" fill="none"/>
                        <path d="M -12 3 Q 0 0 10 4" stroke="#92400e" stroke-width="1.2" fill="none"/>
                        <!-- Ancient Turtle Petroglyph Navigation Runes (Inlaid Emerald Moss) -->
                        <g class="story-anim-crystal-glow">
                            <circle cx="0" cy="0" r="5.5" fill="none" stroke="#22c55e" stroke-width="1.8"/>
                            <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="#22c55e" stroke-width="1.5"/>
                            <line x1="0" y1="-5.5" x2="0" y2="5.5" stroke="#22c55e" stroke-width="1.5"/>
                            <circle cx="0" cy="-8" r="2" fill="#10b981"/>
                            <circle cx="-8" cy="5" r="1.8" fill="#10b981"/>
                            <circle cx="8" cy="5" r="1.8" fill="#10b981"/>
                        </g>
                        <!-- Center Inlaid Jade Eye with Moving Laser Sheen -->
                        <circle cx="0" cy="0" r="3" fill="#10b981" stroke="#ffffff" stroke-width="0.8"/>
                        <line x1="-6" y1="-2" x2="6" y2="-2" stroke="#ffffff" stroke-width="1" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        // --- DR. TIDE'S PROPS (6) ---
        case 'thermal_probe':
            // Hydrothermal Vent Thermal Sensor Probe with Surging Molten Plasma Core
            propGraphic = `
                <!-- Volcanic Basalt Mount Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#ef4444" stroke-width="1.8"/>
                <!-- Titanium Thermal Probe Body -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Main Armored Probe Casing -->
                        <rect x="-16" y="-12" width="32" height="24" rx="4" fill="#1e293b" stroke="#ef4444" stroke-width="2.2" filter="drop-shadow(0 4px 10px rgba(239, 68, 68, 0.4))"/>
                        <!-- High-Temp Ceramic Warning Hash Collar -->
                        <rect x="-14" y="-12" width="28" height="5" fill="#f59e0b"/>
                        <line x1="-10" y1="-12" x2="-6" y2="-7" stroke="#000" stroke-width="1.5"/>
                        <line x1="-2" y1="-12" x2="2" y2="-7" stroke="#000" stroke-width="1.5"/>
                        <line x1="6" y1="-12" x2="10" y2="-7" stroke="#000" stroke-width="1.5"/>
                        <!-- Transparent Thermal Inspection Window with Molten Core -->
                        <rect x="-6" y="-5" width="12" height="15" rx="2.5" fill="#0f172a" stroke="#94a3b8" stroke-width="1"/>
                        <g class="story-anim-plasma-pulse">
                            <rect x="-4" y="-3" width="8" height="11" rx="1.5" fill="#ef4444" filter="drop-shadow(0 0 6px #f97316)"/>
                            <line x1="0" y1="-3" x2="0" y2="8" stroke="#facc15" stroke-width="1.5"/>
                        </g>
                        <!-- Titanium Thermocouple Stem Extender -->
                        <line x1="0" y1="12" x2="0" y2="28" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
                        <!-- Sensor Bead Bulb at Tip with Vent Heat Radiance -->
                        <circle cx="0" cy="28" r="4.5" fill="#ef4444" class="story-anim-crystal-glow"/>
                        <circle cx="0" cy="28" r="2" fill="#ffffff"/>
                        <!-- Rising Thermal Heat Shimmer Micro-Bubbles -->
                        <circle cx="-5" cy="22" r="1.3" fill="#facc15" class="story-anim-star-twinkle-fast"/>
                        <circle cx="6" cy="18" r="1.6" fill="#f97316" class="story-anim-star-twinkle-fast" style="animation-delay: 0.6s;"/>
                        <!-- Digital OLED Temperature Display -->
                        <text x="0" y="-0.5" font-size="3.2" font-family="monospace" font-weight="900" fill="#facc15" text-anchor="middle">380°C</text>
                        <!-- Telemetry Strobe & Safe LED -->
                        <circle cx="-10" cy="6" r="1.8" fill="#ef4444" class="story-anim-antenna-pulse"/>
                        <circle cx="10" cy="6" r="1.8" fill="#22c55e" class="story-anim-led-1"/>
                        <!-- Metallic Sheen -->
                        <line x1="-12" y1="-8" x2="12" y2="-8" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'salinity_meter':
            // High-Precision Ocean Optical Refractometer with Prismatic Rainbow Dispersion
            propGraphic = `
                <!-- Refractometer Marine Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#0284c7" stroke-width="1.8"/>
                <!-- Optical Refractometer Assembly -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Tapered Optical Barrel Body -->
                        <polygon points="-22,-7 10,-5 20,-3 20,3 10,5 -22,7" fill="#1e293b" stroke="#38bdf8" stroke-width="2.2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"/>
                        <!-- Rubberized Knurled Grip Rings -->
                        <rect x="-16" y="-7" width="4" height="14" fill="#0369a1"/>
                        <rect x="-9" y="-6.5" width="4" height="13" fill="#0369a1"/>
                        <!-- Daylight Prism Sample Flap (Semi-Transparent Blue) -->
                        <polygon points="8,-5 20,-3 20,3 8,5" fill="rgba(56, 189, 248, 0.45)" stroke="#00f0ff" stroke-width="1.2"/>
                        <!-- Prismatic Rainbow Dispersion Sheen Glint -->
                        <line x1="9" y1="0" x2="19" y2="0" stroke="#facc15" stroke-width="2" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                        <!-- Optical Viewfinder Eyepiece Target Crosshairs -->
                        <circle cx="-22" cy="0" r="7" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>
                        <circle cx="-22" cy="0" r="4.5" fill="#0f172a"/>
                        <line x1="-25" y1="0" x2="-19" y2="0" stroke="#00f0ff" stroke-width="1"/>
                        <line x1="-22" y1="-3" x2="-22" y2="3" stroke="#00f0ff" stroke-width="1"/>
                        <circle cx="-22" cy="0" r="9" fill="none" stroke="#00f0ff" stroke-width="1" class="story-anim-radar-ping"/>
                        <!-- Digital Salinity PSU Readout Tag -->
                        <rect x="-4" y="-15" width="22" height="7.5" rx="1.5" fill="#0f172a" stroke="#22c55e" stroke-width="0.8"/>
                        <text x="7" y="-10" font-size="3.2" font-family="monospace" font-weight="900" fill="#22c55e" text-anchor="middle">35.2 PSU</text>
                        <circle cx="-1" cy="-11" r="1.2" fill="#22c55e" class="story-anim-led-1"/>
                    </g>
                </g>
            `;
            break;

        case 'ph_analyzer':
            // Hermetic Spherical Acidity Test Chamber with Active Effervescence
            propGraphic = `
                <!-- Submersible Chamber Stand -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#a855f7" stroke-width="1.8"/>
                <!-- Spherical Borosilicate Glass Test Cell -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Main Glass Chamber Sphere with Reactive Glow -->
                        <circle cx="0" cy="0" r="18" fill="rgba(168, 85, 247, 0.22)" stroke="#a855f7" stroke-width="2.2" filter="drop-shadow(0 0 12px rgba(168, 85, 247, 0.35))"/>
                        <!-- Titanium Hermetic Collar Caps -->
                        <rect x="-10" y="-21" width="20" height="5" rx="1.5" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>
                        <rect x="-10" y="16" width="20" height="5" rx="1.5" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>
                        <!-- Reacting pH Indicator Fluid Sloshing Inside Chamber -->
                        <g class="story-anim-plasma-pulse">
                            <ellipse cx="0" cy="4" rx="14" ry="11" fill="rgba(16, 185, 129, 0.45)" stroke="#34d399" stroke-width="1.5"/>
                        </g>
                        <!-- Immersion Titanium Sensor Electrodes -->
                        <line x1="-5" y1="-18" x2="-5" y2="8" stroke="#cbd5e1" stroke-width="1.8"/>
                        <line x1="5" y1="-18" x2="5" y2="8" stroke="#cbd5e1" stroke-width="1.8"/>
                        <!-- Rising Effervescent Reactive Micro-Bubbles -->
                        <circle cx="-3" cy="2" r="1.4" fill="#a7f3d0" class="story-anim-star-twinkle-fast"/>
                        <circle cx="4" cy="-2" r="1.8" fill="#fef08a" class="story-anim-star-twinkle-fast" style="animation-delay: 0.7s;"/>
                        <circle cx="0" cy="8" r="1.2" fill="#67e8f9" class="story-anim-star-twinkle-fast" style="animation-delay: 1.1s;"/>
                        <!-- Digital Laboratory OLED Display -->
                        <rect x="-14" y="-7" width="28" height="12" rx="2" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
                        <text x="0" y="0.5" font-size="4.2" font-family="monospace" font-weight="900" fill="#22c55e" text-anchor="middle">pH 8.12</text>
                        <text x="0" y="4" font-size="2.2" font-family="monospace" font-weight="900" fill="#38bdf8" text-anchor="middle">OPTIMAL</text>
                        <!-- Glass Curvature Light Sheen -->
                        <path d="M -13 -7 A 15 15 0 0 1 -4 -14" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'current_drifter':
            // Autonomous Oceanographic Lagrangian Drifter Sphere
            propGraphic = `
                <!-- Marine Cradle Dock Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#f59e0b" stroke-width="1.8"/>
                <!-- Ocean Drifter Assembly -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Concentric Radio Telemetry Pings Radiating into Ocean -->
                        <circle cx="0" cy="-22" r="14" fill="none" stroke="#f59e0b" stroke-width="1.6" class="story-anim-sound-wave-ping"/>
                        <circle cx="0" cy="-22" r="26" fill="none" stroke="#00f0ff" stroke-width="1.2" class="story-anim-radar-ping"/>
                        <!-- Main Drifter Sphere Body in Safety Amber -->
                        <circle cx="0" cy="0" r="17" fill="#f59e0b" stroke="#d97706" stroke-width="2.4" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                        <!-- Polyurethane Impact Bumper Ribs -->
                        <circle cx="0" cy="0" r="17" fill="none" stroke="#b45309" stroke-width="3" stroke-dasharray="8,6"/>
                        <ellipse cx="0" cy="0" rx="17" ry="4" fill="none" stroke="#1e293b" stroke-width="2.5"/>
                        <!-- Satellite Telemetry Antenna Mast -->
                        <line x1="0" y1="-17" x2="0" y2="-32" stroke="#334155" stroke-width="2.5"/>
                        <!-- Flashing Satellite Beacon Strobe -->
                        <circle cx="0" cy="-32" r="3.8" fill="#ef4444" class="story-anim-antenna-pulse"/>
                        <circle cx="0" cy="-32" r="1.8" fill="#ffffff"/>
                        <!-- Trailing Hydrodynamic Drogue Sea-Anchor Ribbon Swaying in Current -->
                        <g class="story-anim-feather-sway" style="transform-origin: 0px 17px;">
                            <path d="M 0 17 Q -6 28 -2 38 T 4 50" stroke="#f59e0b" stroke-width="2.5" fill="none" stroke-dasharray="3,2"/>
                            <ellipse cx="4" cy="50" rx="5" ry="2.5" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
                        </g>
                        <!-- Telemetry Status LEDs -->
                        <circle cx="-7" cy="-3" r="1.6" fill="#22c55e" class="story-anim-led-1"/>
                        <circle cx="0" cy="-3" r="1.6" fill="#38bdf8" class="story-anim-led-2"/>
                        <circle cx="7" cy="-3" r="1.6" fill="#facc15" class="story-anim-led-3"/>
                        <text x="0" y="6" font-size="3.2" font-family="monospace" font-weight="900" fill="#0f172a" text-anchor="middle">DRIFT // 04</text>
                        <!-- Glossy Surface Sheen -->
                        <line x1="-10" y1="-9" x2="6" y2="-9" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'plankton_net':
            // Fine Silk Micro-Mesh Plankton Net with Captured Bioluminescent Micro-Plankton
            propGraphic = `
                <!-- Seafloor Mooring Stand -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#10b981" stroke-width="1.8"/>
                <!-- Plankton Collector Cone Assembly -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Rigid Stainless Steel Mouth Ring -->
                        <ellipse cx="-16" cy="0" rx="4.5" ry="14" fill="#0f172a" stroke="#94a3b8" stroke-width="2.2"/>
                        <!-- Bridle Tow Harness Lines -->
                        <line x1="-26" y1="0" x2="-16" y2="-12" stroke="#cbd5e1" stroke-width="1.2"/>
                        <line x1="-26" y1="0" x2="-16" y2="0" stroke="#cbd5e1" stroke-width="1.2"/>
                        <line x1="-26" y1="0" x2="-16" y2="12" stroke="#cbd5e1" stroke-width="1.2"/>
                        <circle cx="-26" cy="0" r="2.5" fill="#38bdf8"/>
                        <!-- Billowing Fine Conical Mesh Weave -->
                        <polygon points="-16,-13 18,-4 18,4 -16,13" fill="rgba(16, 185, 129, 0.22)" stroke="#10b981" stroke-width="1.6"/>
                        <line x1="-8" y1="-10" x2="-8" y2="10" stroke="#34d399" stroke-width="0.8" stroke-dasharray="2,2"/>
                        <line x1="2" y1="-7" x2="2" y2="7" stroke="#34d399" stroke-width="0.8" stroke-dasharray="2,2"/>
                        <line x1="10" y1="-5" x2="10" y2="5" stroke="#34d399" stroke-width="0.8" stroke-dasharray="2,2"/>
                        <!-- Spinning Flowmeter Impeller at Entrance -->
                        <g transform="translate(-16, 0)">
                            <g class="story-anim-astrolabe-spin">
                                <line x1="-4" y1="0" x2="4" y2="0" stroke="#facc15" stroke-width="1.5"/>
                                <line x1="0" y1="-4" x2="0" y2="4" stroke="#facc15" stroke-width="1.5"/>
                                <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
                            </g>
                        </g>
                        <!-- Transparent Acrylic Cod-End Collection Bulb with Bioluminescent Glow -->
                        <rect x="18" y="-5" width="14" height="10" rx="3" fill="rgba(0, 240, 255, 0.35)" stroke="#00f0ff" stroke-width="1.8" class="story-anim-crystal-glow"/>
                        <!-- Dancing Captured Plankton Sparkles -->
                        <g transform="translate(22, -1)">
                            <circle cx="0" cy="0" r="1.6" fill="#00f0ff" class="story-anim-star-twinkle-fast"/>
                        </g>
                        <g transform="translate(27, 2)">
                            <circle cx="0" cy="0" r="1.4" fill="#ec4899" class="story-anim-star-twinkle-fast" style="animation-delay: 0.7s;"/>
                        </g>
                        <g transform="translate(24, -3)">
                            <circle cx="0" cy="0" r="1.2" fill="#facc15" class="story-anim-star-twinkle-fast" style="animation-delay: 1.1s;"/>
                        </g>
                        <!-- Bulb Specular Sheen -->
                        <line x1="19" y1="-3" x2="30" y2="-3" stroke="#ffffff" stroke-width="1" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'sub_bottom_profiler':
            // Acoustic Seismic Bedrock Disc Profiler with Downward Sound Pulses
            propGraphic = `
                <!-- Acoustic Decoupling Cradle Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#6366f1" stroke-width="1.8"/>
                <!-- Sub-Bottom Transducer Disc Assembly -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Downward Low-Frequency Seismic Sound Wavefronts Penetrating Seabed -->
                        <g transform="translate(0, 8)">
                            <path d="M -16 6 Q 0 16 16 6" fill="none" stroke="#6366f1" stroke-width="2" class="story-anim-sound-wave-ping"/>
                            <path d="M -24 14 Q 0 28 24 14" fill="none" stroke="#38bdf8" stroke-width="1.5" class="story-anim-radar-ping"/>
                            <line x1="0" y1="4" x2="0" y2="28" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                        </g>
                        <!-- Heavy Layered Transducer Housing Disc -->
                        <ellipse cx="0" cy="0" rx="22" ry="12" fill="#1e1b4b" stroke="#6366f1" stroke-width="2.5" filter="drop-shadow(0 4px 10px rgba(99, 102, 241, 0.4))"/>
                        <!-- Counter-Rotating Phased Array Rings -->
                        <g class="story-anim-astrolabe-spin">
                            <ellipse cx="0" cy="0" rx="16" ry="8" fill="none" stroke="#818cf8" stroke-width="1.4" stroke-dasharray="5,3"/>
                        </g>
                        <g class="story-anim-astrolabe-spin" style="animation-direction: reverse;">
                            <ellipse cx="0" cy="0" rx="11" ry="5.5" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3,2"/>
                        </g>
                        <!-- Piezoelectric Acoustic Core Node -->
                        <circle cx="0" cy="0" r="4.5" fill="#6366f1" class="story-anim-crystal-glow"/>
                        <circle cx="0" cy="0" r="2.2" fill="#ffffff"/>
                        <!-- Digital Bedrock Readout Banner -->
                        <rect x="-14" y="-18" width="28" height="7" rx="1.5" fill="#0f172a" stroke="#6366f1" stroke-width="0.8"/>
                        <text x="0" y="-13.5" font-size="3" font-family="monospace" font-weight="900" fill="#a5b4fc" text-anchor="middle">BEDROCK // 42m</text>
                        <circle cx="10" cy="-14.5" r="1.2" fill="#22c55e" class="story-anim-led-1"/>
                        <!-- Disc Metallic Sheen -->
                        <line x1="-14" y1="-4" x2="14" y2="-4" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        // --- KAI'S PROPS (6) ---
        case 'hydro_thruster':
            // High-Speed Handheld Diver Propulsion Vehicle (DPV) Sea Scooter
            propGraphic = `
                <!-- Launch Saddle Dock Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#0284c7" stroke-width="1.8"/>
                <!-- Torpedo Scooter Hull Assembly -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Streamlined DPV Chassis in Cobalt & Warning Yellow -->
                        <rect x="-18" y="-12" width="36" height="24" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="2.4" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                        <rect x="-18" y="-4" width="36" height="8" fill="#facc15"/>
                        <line x1="-14" y1="-4" x2="-8" y2="4" stroke="#000" stroke-width="2"/>
                        <line x1="-4" y1="-4" x2="2" y2="4" stroke="#000" stroke-width="2"/>
                        <line x1="6" y1="-4" x2="12" y2="4" stroke="#000" stroke-width="2"/>
                        <!-- Dual Ducted Propeller Shrouds at Rear -->
                        <circle cx="-18" cy="-6" r="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
                        <circle cx="-18" cy="6" r="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
                        <!-- Spinning 4-Blade Turbines -->
                        <g transform="translate(-18, -6)">
                            <g class="story-anim-astrolabe-spin">
                                <line x1="-5" y1="0" x2="5" y2="0" stroke="#facc15" stroke-width="2"/>
                                <line x1="0" y1="-5" x2="0" y2="5" stroke="#facc15" stroke-width="2"/>
                                <circle cx="0" cy="0" r="1.8" fill="#ffffff"/>
                            </g>
                        </g>
                        <g transform="translate(-18, 6)">
                            <g class="story-anim-astrolabe-spin" style="animation-direction: reverse;">
                                <line x1="-5" y1="0" x2="5" y2="0" stroke="#facc15" stroke-width="2"/>
                                <line x1="0" y1="-5" x2="0" y2="5" stroke="#facc15" stroke-width="2"/>
                                <circle cx="0" cy="0" r="1.8" fill="#ffffff"/>
                            </g>
                        </g>
                        <!-- Trailing Bubble Cavitation Wakes -->
                        <circle cx="-28" cy="-6" r="2" fill="rgba(255,255,255,0.7)" class="story-anim-star-twinkle-fast"/>
                        <circle cx="-32" cy="-6" r="1.4" fill="rgba(255,255,255,0.5)"/>
                        <circle cx="-28" cy="6" r="2" fill="rgba(255,255,255,0.7)" class="story-anim-star-twinkle-fast" style="animation-delay: 0.5s;"/>
                        <circle cx="-32" cy="6" r="1.4" fill="rgba(255,255,255,0.5)"/>
                        <!-- Forward High-Intensity Dive Headlight -->
                        <circle cx="18" cy="0" r="4.5" fill="#00f0ff" class="story-anim-crystal-glow"/>
                        <circle cx="18" cy="0" r="2" fill="#ffffff"/>
                        <polygon points="18,-5 54,-16 54,16 18,5" fill="rgba(0, 240, 255, 0.22)"/>
                        <!-- Twin Throttle Grip Handles -->
                        <path d="M 0 -12 L 0 -17 L 6 -17" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                        <path d="M 0 12 L 0 17 L 6 17" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                        <!-- RPM / Battery Gauge LEDs -->
                        <rect x="-8" y="-9" width="16" height="4" rx="1" fill="#0f172a"/>
                        <rect x="-7" y="-8.5" width="10" height="3" fill="#22c55e" class="story-anim-led-1"/>
                    </g>
                </g>
            `;
            break;

        case 'magnetic_grapple':
            // Motorized Heavy Salvage Claw with Electromagnetic Discharge Arcs
            propGraphic = `
                <!-- Heavy Salvage Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#ef4444" stroke-width="1.8"/>
                <!-- Grapple Actuator Assembly -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Pneumatic Cylinder Actuator Housing in Safety Red -->
                        <rect x="-18" y="-10" width="24" height="20" rx="3.5" fill="#dc2626" stroke="#b91c1c" stroke-width="2.2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                        <rect x="-18" y="-2" width="24" height="4" fill="#facc15"/>
                        <!-- High-Tensile Retrieval Cable Socket -->
                        <line x1="-18" y1="0" x2="-34" y2="0" stroke="#94a3b8" stroke-width="3" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                        <circle cx="-18" cy="0" r="3" fill="#334155"/>
                        <!-- Articulated Triple Titanium Salvage Claw Talons -->
                        <path d="M 6 -6 L 18 -15 L 24 -11 L 14 -2" fill="#64748b" stroke="#334155" stroke-width="1.6"/>
                        <path d="M 6 6 L 18 15 L 24 11 L 14 2" fill="#64748b" stroke="#334155" stroke-width="1.6"/>
                        <polygon points="6,-3 22,0 6,3" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
                        <!-- Electromagnetic Spark Arcs Bridging Claw Tips -->
                        <g transform="translate(18, 0)">
                            <path d="M 2 -10 L -2 -3 L 3 3 L -1 10" stroke="#00f0ff" stroke-width="1.8" fill="none" class="story-anim-spark-1"/>
                            <circle cx="2" cy="-10" r="2" fill="#facc15" class="story-anim-star-twinkle-fast"/>
                            <circle cx="-1" cy="10" r="2" fill="#facc15" class="story-anim-star-twinkle-fast" style="animation-delay: 0.6s;"/>
                        </g>
                        <!-- Hydraulic Pressure Lock LED -->
                        <circle cx="-10" cy="-5" r="1.8" fill="#22c55e" class="story-anim-led-1"/>
                        <circle cx="-5" cy="-5" r="1.8" fill="#ef4444" class="story-anim-led-2"/>
                        <text x="-8" y="6" font-size="3.2" font-family="monospace" font-weight="900" fill="#ffffff">LOCK</text>
                    </g>
                </g>
            `;
            break;

        case 'crawler_drone':
            // Autonomous Benthic Tracked Rover Drone with Searchlights & Rolling Treads
            propGraphic = `
                <!-- Seafloor Deployment Ramp Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#f59e0b" stroke-width="1.8"/>
                <!-- Benthic Rover Drone Assembly -->
                <g transform="translate(0, -18)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Armored Waterproof Chassis in Safety Amber -->
                        <rect x="-16" y="-12" width="32" height="18" rx="3.5" fill="#f59e0b" stroke="#d97706" stroke-width="2.2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                        <!-- Caterpillar Continuous Track Housing -->
                        <rect x="-18" y="5" width="36" height="8" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
                        <!-- Spinning Guide Wheels / Rollers -->
                        <g transform="translate(-12, 9)">
                            <g class="story-anim-wheel-spin">
                                <circle cx="0" cy="0" r="3" fill="#64748b" stroke="#94a3b8" stroke-width="0.8"/>
                                <line x1="-3" y1="0" x2="3" y2="0" stroke="#cbd5e1" stroke-width="0.8"/>
                            </g>
                        </g>
                        <g transform="translate(-4, 9)">
                            <g class="story-anim-wheel-spin">
                                <circle cx="0" cy="0" r="3" fill="#64748b" stroke="#94a3b8" stroke-width="0.8"/>
                                <line x1="-3" y1="0" x2="3" y2="0" stroke="#cbd5e1" stroke-width="0.8"/>
                            </g>
                        </g>
                        <g transform="translate(4, 9)">
                            <g class="story-anim-wheel-spin">
                                <circle cx="0" cy="0" r="3" fill="#64748b" stroke="#94a3b8" stroke-width="0.8"/>
                                <line x1="-3" y1="0" x2="3" y2="0" stroke="#cbd5e1" stroke-width="0.8"/>
                            </g>
                        </g>
                        <g transform="translate(12, 9)">
                            <g class="story-anim-wheel-spin">
                                <circle cx="0" cy="0" r="3" fill="#64748b" stroke="#94a3b8" stroke-width="0.8"/>
                                <line x1="-3" y1="0" x2="3" y2="0" stroke="#cbd5e1" stroke-width="0.8"/>
                            </g>
                        </g>
                        <!-- Swiveling Optical Sensor Turret & Twin Searchlights -->
                        <rect x="10" y="-10" width="8" height="12" rx="2" fill="#0f172a" stroke="#00f0ff" stroke-width="1.2"/>
                        <circle cx="14" cy="-7" r="2.5" fill="#00f0ff" class="story-anim-crystal-glow"/>
                        <circle cx="14" cy="-1" r="2.5" fill="#00f0ff" class="story-anim-crystal-glow"/>
                        <!-- Sweeping Searchlight Laser Beams -->
                        <line x1="16" y1="-7" x2="48" y2="-12" stroke="#00f0ff" stroke-width="1.8" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                        <line x1="16" y1="-1" x2="48" y2="4" stroke="#00f0ff" stroke-width="1.8" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                        <!-- Manipulator Specimen Arm on Front -->
                        <path d="M 8 2 L 18 2 L 24 -3 L 26 -1" stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round"/>
                        <!-- Telemetry Whip Antenna with Flashing Beacon -->
                        <line x1="-12" y1="-12" x2="-16" y2="-24" stroke="#334155" stroke-width="1.8"/>
                        <circle cx="-16" cy="-24" r="2.5" fill="#ef4444" class="story-anim-antenna-pulse"/>
                        <!-- Telemetry LEDs -->
                        <circle cx="-4" cy="-5" r="1.5" fill="#22c55e" class="story-anim-led-1"/>
                        <circle cx="2" cy="-5" r="1.5" fill="#facc15" class="story-anim-led-2"/>
                    </g>
                </g>
            `;
            break;

        case 'pneumatic_chisel':
            // Heavy Ultrasonic Sampling Chisel with High-Frequency Vibration & Shockwaves
            propGraphic = `
                <!-- Tool Holster Dock Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#94a3b8" stroke-width="1.8"/>
                <!-- Ultrasonic Chisel Tool Body -->
                <g transform="translate(0, -20)">
                    <g class="story-anim-prop-wobble-play">
                        <!-- Pneumatic Industrial Casing -->
                        <rect x="-18" y="-8" width="26" height="16" rx="3" fill="#334155" stroke="#94a3b8" stroke-width="2.2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                        <!-- Ergonomic Grip Handle -->
                        <rect x="-16" y="-6" width="6" height="12" rx="1.5" fill="#0f172a"/>
                        <!-- Reciprocating Diamond-Carbide Chisel Bit -->
                        <polygon points="8,-4 26,0 8,4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.8"/>
                        <!-- Radiating Ultrasonic Acoustic Shockwaves -->
                        <circle cx="26" cy="0" r="8" fill="none" stroke="#38bdf8" stroke-width="1.8" class="story-anim-sound-wave-ping"/>
                        <circle cx="26" cy="0" r="16" fill="none" stroke="#00f0ff" stroke-width="1.2" class="story-anim-radar-ping"/>
                        <!-- Mineral Fragment Impact Sparks -->
                        <g transform="translate(26, 0)">
                            <path d="M 0 0 L 6 -6 M 0 0 L 8 4 M 0 0 L 5 8" stroke="#facc15" stroke-width="1.5" class="story-anim-spark-1"/>
                            <circle cx="7" cy="-7" r="1.6" fill="#fef08a" class="story-anim-star-twinkle-fast"/>
                            <circle cx="9" cy="5" r="1.4" fill="#67e8f9" class="story-anim-star-twinkle-fast" style="animation-delay: 0.6s;"/>
                        </g>
                        <!-- Pneumatic Exhaust Relief Bubbles -->
                        <circle cx="-10" cy="-12" r="1.5" fill="#38bdf8" class="story-anim-star-twinkle-fast"/>
                        <circle cx="-6" cy="-16" r="1.2" fill="#38bdf8"/>
                        <!-- Frequency LED & Label -->
                        <circle cx="0" cy="-4" r="1.5" fill="#22c55e" class="story-anim-led-1"/>
                        <text x="-2" y="4" font-size="3.2" font-family="monospace" font-weight="900" fill="#ffffff">40kHz</text>
                    </g>
                </g>
            `;
            break;

        case 'cable_winch':
            // Motorized Titanium Deep-Sea Salvage Winch Spool with Emerald Cable
            propGraphic = `
                <!-- Reinforced Winch Foundation Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#10b981" stroke-width="1.8"/>
                <!-- Motorized Winch Spool Assembly -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Twin A-Frame Heavy Stanchions -->
                        <polygon points="-16,14 -12,-16 -8,-16 -4,14" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                        <polygon points="4,14 8,-16 12,-16 16,14" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                        <!-- Rotating Central Cable Spool Drum -->
                        <circle cx="0" cy="0" r="15" fill="#0f172a" stroke="#10b981" stroke-width="2.2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                        <!-- Spinning Flange Spokes -->
                        <g class="story-anim-wheel-spin">
                            <line x1="-15" y1="0" x2="15" y2="0" stroke="#34d399" stroke-width="1.6"/>
                            <line x1="0" y1="-15" x2="0" y2="15" stroke="#34d399" stroke-width="1.6"/>
                            <circle cx="0" cy="0" r="4" fill="#10b981"/>
                            <circle cx="0" cy="0" r="1.8" fill="#ffffff"/>
                        </g>
                        <!-- Glowing Emerald Nano-Fiber Cable Spool Core -->
                        <circle cx="0" cy="0" r="10" fill="none" stroke="#059669" stroke-width="5"/>
                        <circle cx="0" cy="0" r="10" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3,1.5"/>
                        <!-- High-Tensile Cable Paying Out with Laser Line Tracer -->
                        <line x1="10" y1="0" x2="26" y2="18" stroke="#10b981" stroke-width="2.2"/>
                        <line x1="10" y1="0" x2="26" y2="18" stroke="#34d399" stroke-width="1.2" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                        <circle cx="10" cy="0" r="2.5" fill="#94a3b8"/>
                        <!-- Digital Depth & Tension Meter -->
                        <rect x="-14" y="-23" width="28" height="7" rx="1.5" fill="#0f172a" stroke="#10b981" stroke-width="0.8"/>
                        <text x="0" y="-18.5" font-size="3" font-family="monospace" font-weight="900" fill="#34d399" text-anchor="middle">150m // 4.8kN</text>
                        <circle cx="10" cy="-19.5" r="1.2" fill="#22c55e" class="story-anim-led-1"/>
                    </g>
                </g>
            `;
            break;

        case 'beacon_buoy':
            // High-Visibility Self-Inflating Marine Marker Buoy Bobbing in Current
            propGraphic = `
                <!-- Mooring Sinker Weight Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#ea580c" stroke-width="1.8"/>
                <!-- Floating Marker Buoy Assembly -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-bounce-active">
                        <!-- Concentric Distress Radio Waves Radiating Outward -->
                        <circle cx="0" cy="-28" r="14" fill="none" stroke="#ea580c" stroke-width="1.8" class="story-anim-sound-wave-ping"/>
                        <circle cx="0" cy="-28" r="24" fill="none" stroke="#facc15" stroke-width="1.2" class="story-anim-radar-ping"/>
                        <!-- High-Buoyancy Toroidal Buoy Body in Neon Orange -->
                        <ellipse cx="0" cy="0" rx="18" ry="11" fill="#ea580c" stroke="#c2410c" stroke-width="2.5" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                        <!-- High-Contrast Reflective SOLAS Chevrons -->
                        <rect x="-12" y="-10" width="5" height="20" fill="#ffffff" transform="rotate(-15)"/>
                        <rect x="7" y="-10" width="5" height="20" fill="#ffffff" transform="rotate(15)"/>
                        <!-- Beacon Mast Tower -->
                        <rect x="-3" y="-22" width="6" height="22" fill="#1e293b" stroke="#ea580c" stroke-width="1.2"/>
                        <!-- High-Intensity Flashing Xenon Strobe Lantern -->
                        <rect x="-4" y="-27" width="8" height="6" rx="2" fill="#facc15" stroke="#ffffff" stroke-width="1.5" class="story-anim-antenna-pulse"/>
                        <circle cx="0" cy="-24" r="2" fill="#ffffff"/>
                        <!-- Braided Mooring Tether Cable -->
                        <path d="M 0 11 Q -4 18 0 26" stroke="#94a3b8" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
                        <!-- Water Splashes / Micro-Bubbles -->
                        <circle cx="-16" cy="4" r="1.5" fill="#38bdf8" class="story-anim-star-twinkle-fast"/>
                        <circle cx="16" cy="4" r="1.5" fill="#38bdf8" class="story-anim-star-twinkle-fast" style="animation-delay: 0.6s;"/>
                    </g>
                </g>
            `;
            break;

        default:
            // Armored Deep-Sea Sensor Module Fallback
            propGraphic = `
                <!-- Marine Dock Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.8"/>
                <!-- Armored Submersible Sensor Pod -->
                <g transform="translate(0, -20)">
                    <rect x="-16" y="-12" width="32" height="24" rx="5" fill="#0284c7" stroke="#38bdf8" stroke-width="2.2" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"/>
                    <!-- Glowing Multidirectional Optics Sensor Lens -->
                    <circle cx="0" cy="0" r="7" fill="#00f0ff" stroke="#ffffff" stroke-width="1.5" class="story-anim-crystal-glow"/>
                    <circle cx="0" cy="0" r="3" fill="#ffffff"/>
                    <!-- Optical Radar Pulse Rings -->
                    <circle cx="0" cy="0" r="14" fill="none" stroke="#00f0ff" stroke-width="1.2" class="story-anim-radar-ping"/>
                    <!-- Status LEDs -->
                    <circle cx="-10" cy="-7" r="1.6" fill="#22c55e" class="story-anim-led-1"/>
                    <circle cx="10" cy="-7" r="1.6" fill="#facc15" class="story-anim-led-2"/>
                    <!-- Antenna Mast -->
                    <line x1="0" y1="-12" x2="0" y2="-20" stroke="#334155" stroke-width="2"/>
                    <circle cx="0" cy="-20" r="2.5" fill="#ef4444" class="story-anim-antenna-pulse"/>
                </g>
            `;
            break;
    }

    const kineticPropClass = isClimax ? 'story-anim-prop-surge' : 'story-anim-prop-hover-gentle';

    return `
        <g transform="translate(${propX}, ${propY})">
            <!-- Concentric Deep-Sea Bioluminescent Aura Rings on Seabed Pedestal -->
            <ellipse cx="0" cy="4" rx="28" ry="7" fill="none" stroke="#00f0ff" stroke-width="1.6" class="story-anim-catalyst-glow-ring"/>
            <ellipse cx="0" cy="4" rx="40" ry="10" fill="none" stroke="#38bdf8" stroke-width="1.0" class="story-anim-catalyst-glow-ring" style="animation-delay: 1.2s;"/>

            <!-- Floating Bioluminescent Deep-Water Plankton & Sparkles -->
            <g transform="translate(-24, -28)">
                <g class="story-anim-star-twinkle-fast">
                    <polygon points="0,-4 1.2,-1.2 4,0 1.2,1.2 0,4 -1.2,1.2 -4,0 -1.2,-1.2" fill="#00f0ff" filter="drop-shadow(0 0 5px #00f0ff)"/>
                </g>
            </g>
            <g transform="translate(26, -24)">
                <g class="story-anim-star-twinkle-fast" style="animation-delay: 0.8s;">
                    <polygon points="0,-3.5 1,-1 3.5,0 1,1 0,3.5 -1,1 -3.5,0 -1,-1" fill="#38bdf8" filter="drop-shadow(0 0 5px #38bdf8)"/>
                </g>
            </g>

            <!-- Seabed Ground Shadow -->
            <ellipse cx="0" cy="4" rx="22" ry="5.5" fill="rgba(2, 6, 23, 0.55)"/>

            <!-- Dynamic Animated Catalyst Prop (Nested Transform Pattern) -->
            <g class="${kineticPropClass}">
                ${propGraphic}
            </g>
        </g>
    `;
}

/* ==========================================================================
   ADVANCED SCI-FI MARINE MYSTERY TWISTS (TWO-PHASE CONTINUITY)
   ========================================================================== */

function renderTwilightTwistOverlay(twist, panelIdx) {
    if (!twist) return '';

    const isClimax = (panelIdx === 2);
    const isResolution = (panelIdx === 3);

    // Centered banner on Panel 3 (Climax) at (200, 14) — Compact, non-blocking, clean on Panel 4
    const label = `${twist.icon || '⚠️'} ${twist.title || 'Twist!'}`;
    const badgeW = Math.min(160, Math.max(120, Math.round(label.length * 5.4) + 18));
    const badge = isClimax ? `
        <g transform="translate(200, 14)">
            <g class="story-anim-twist-badge">
                <rect x="${-badgeW / 2}" y="0" width="${badgeW}" height="22" rx="11" fill="#6d28d9" opacity="0.95" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.45))"/>
                <text x="0" y="14.5" text-anchor="middle" font-size="9.5" fill="#ffffff" font-weight="bold" letter-spacing="0.2">${label}</text>
            </g>
        </g>
    ` : '';

    let visualFx = '';

    if (twist.id === 'thermal_vent') {
        if (isClimax) {
            // Phase 1 (Panel 3): Blazing Red Fiery Molten Magma Lava Fissure!
            visualFx = `
                <!-- Volcanic Thermal Surge Ambient Wash (Deep Red Magma Radiance) -->
                <rect width="400" height="220" fill="rgba(220, 38, 38, 0.22)" class="story-anim-emergency-siren"/>

                <!-- Molten Lava Radial Glow illuminating Seabed & Water -->
                <defs>
                    <radialGradient id="magmaGlowBay" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#ffea00" stop-opacity="0.95"/>
                        <stop offset="30%" stop-color="#ff4400" stop-opacity="0.8"/>
                        <stop offset="65%" stop-color="#dc2626" stop-opacity="0.55"/>
                        <stop offset="100%" stop-color="#450a0a" stop-opacity="0"/>
                    </radialGradient>
                </defs>
                <ellipse cx="295" cy="175" rx="110" ry="36" fill="url(#magmaGlowBay)" class="story-anim-lava-glow"/>

                <!-- Red Fiery Jagged Magma Fissure Trench Chasm -->
                <g id="fiery_magma_fissure">
                    <!-- Basalt Crust Edges around Chasm -->
                    <polygon points="205,175 235,165 265,173 295,163 330,172 360,164 385,175 365,186 335,180 295,187 260,179 220,185" fill="#450a0a" stroke="#b91c1c" stroke-width="2.5"/>
                    <!-- Fiery Molten Magma Bed -->
                    <path d="M 210 176 Q 248 167 290 173 T 355 167 T 380 175" stroke="#dc2626" stroke-width="8" fill="none" stroke-linecap="round"/>
                    <path d="M 215 176 Q 252 168 292 173 T 352 168 T 375 175" stroke="#ff4400" stroke-width="5" fill="none" stroke-linecap="round"/>
                    <!-- Glowing White-Hot / Yellow Molten Core with Crackle Animation -->
                    <path d="M 225 175 Q 260 169 295 173 T 345 169 T 368 175" stroke="#ffea00" stroke-width="2.8" fill="none" stroke-linecap="round" class="story-anim-lava-crackle"/>
                    <path d="M 245 174 Q 280 170 315 173 T 350 170" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round"/>
                </g>

                <!-- Erupting Fiery Molten Lava Jets / Spurts Shooting Upward -->
                <g transform="translate(265, 175)">
                    <g class="story-anim-lava-spurt">
                        <path d="M -12 0 Q 0 -38 12 0 Z" fill="#ff4400" filter="drop-shadow(0 0 10px #ff3b00)"/>
                        <path d="M -7 0 Q 0 -28 7 0 Z" fill="#ffea00"/>
                        <circle cx="0" cy="-32" r="5" fill="#ffffff"/>
                    </g>
                </g>
                <g transform="translate(325, 175)">
                    <g class="story-anim-lava-spurt" style="animation-delay: 0.85s;">
                        <path d="M -10 0 Q 0 -34 10 0 Z" fill="#ff3b00" filter="drop-shadow(0 0 8px #ff0044)"/>
                        <path d="M -6 0 Q 0 -24 6 0 Z" fill="#facc15"/>
                        <circle cx="0" cy="-26" r="4" fill="#ffffff"/>
                    </g>
                </g>

                <!-- Glowing Flying Magma Sparks & Heated Embers -->
                <circle cx="240" cy="130" r="3.2" fill="#ffea00" filter="drop-shadow(0 0 6px #ff4400)" class="story-anim-led-1"/>
                <circle cx="270" cy="95" r="3.8" fill="#ff4400" filter="drop-shadow(0 0 8px #ff0044)" class="story-anim-led-2"/>
                <circle cx="305" cy="70" r="3.0" fill="#ffea00" filter="drop-shadow(0 0 6px #ffaa00)" class="story-anim-led-3"/>
                <circle cx="340" cy="115" r="3.5" fill="#ff3b00" filter="drop-shadow(0 0 8px #ff2200)" class="story-anim-led-1"/>
                <circle cx="365" cy="85" r="2.6" fill="#facc15" filter="drop-shadow(0 0 5px #ff5500)" class="story-anim-led-2"/>

                <!-- Perimeter Thermal Warning Brackets (Corners Only - Zero Character Obstruction) -->
                <path d="M 8 36 L 8 10 L 36 10" stroke="#ef4444" stroke-width="2.5" fill="none"/>
                <path d="M 392 36 L 392 10 L 364 10" stroke="#ef4444" stroke-width="2.5" fill="none"/>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Stabilized Geothermal Vent (Clean, Badge-Free)
            visualFx = `
                <!-- Stabilized Cooling Emerald Water Wash -->
                <rect width="400" height="220" fill="rgba(16, 185, 129, 0.06)"/>
                <!-- Gentle Mineral Plume & Crystallization -->
                <g transform="translate(280, 175)">
                    <ellipse cx="0" cy="-6" rx="16" ry="6" fill="#064e3b" stroke="#059669" stroke-width="1.5"/>
                    <line x1="0" y1="-6" x2="0" y2="-40" stroke="#34d399" stroke-width="2" stroke-dasharray="4,4" opacity="0.6"/>
                </g>
                <!-- Sparkles of Crystallized Minerals Floating -->
                <circle cx="270" cy="120" r="3" fill="#34d399" class="story-anim-led-1"/>
                <circle cx="300" cy="95" r="3.5" fill="#6ee7b7" class="story-anim-led-2"/>
                <circle cx="330" cy="135" r="2.5" fill="#00f0ff" class="story-anim-led-3"/>
            `;
        }
    } else if (twist.id === 'bioluminescent_swarm') {
        if (isClimax) {
            // Phase 1 (Panel 3): Dynamically Swimming Bioluminescent Jellyfish Swarm!
            visualFx = `
                <!-- Deep Ocean Twilight Atmosphere Wash -->
                <rect width="400" height="220" fill="rgba(88, 28, 135, 0.24)" class="story-anim-emergency-siren"/>

                <!-- 1. Giant Lead Bioluminescent Jellyfish (Swimming Up & Left with Trailing Undulating Tentacles) -->
                <g transform="translate(225, 55)">
                    <g class="story-anim-jelly-swim-1">
                        <!-- Translucent Glowing Bell with Dual Neon Rims -->
                        <ellipse cx="0" cy="0" rx="20" ry="14" fill="rgba(6, 182, 212, 0.45)" stroke="#00f0ff" stroke-width="2" filter="drop-shadow(0 0 12px #00f0ff)"/>
                        <ellipse cx="0" cy="-2" rx="15" ry="9" fill="rgba(168, 85, 247, 0.55)" stroke="#e879f9" stroke-width="1.5"/>
                        <circle cx="0" cy="-4" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)" class="story-anim-led-1"/>
                        <!-- Wavy Bell Margin Lapels -->
                        <path d="M -18 10 Q -12 15 -6 10 Q 0 15 6 10 Q 12 15 18 10" stroke="#38bdf8" stroke-width="1.8" fill="none"/>
                        <!-- Trailing Undulating Bioluminescent Tentacles -->
                        <g class="story-anim-jelly-tentacles">
                            <path d="M -14 12 Q -18 32 -10 48 M -8 13 Q -11 36 -6 52 M -2 14 Q 0 38 -3 54 M 3 14 Q 2 38 6 54 M 8 13 Q 11 36 7 52 M 14 12 Q 18 32 11 48" stroke="#67e8f9" stroke-width="2.0" fill="none" opacity="0.95" stroke-linecap="round"/>
                            <path d="M -6 14 Q -2 36 -4 50 M 2 14 Q 6 36 3 50" stroke="#f472b6" stroke-width="1.5" fill="none" opacity="0.85"/>
                        </g>
                    </g>
                </g>

                <!-- 2. Second Elegant Violet Jellyfish (Drifting & Swimming Diagonally) -->
                <g transform="translate(315, 60)">
                    <g class="story-anim-jelly-swim-2">
                        <ellipse cx="0" cy="0" rx="16" ry="11" fill="rgba(168, 85, 247, 0.5)" stroke="#c084fc" stroke-width="2" filter="drop-shadow(0 0 10px #c084fc)"/>
                        <ellipse cx="0" cy="-2" rx="11" ry="7" fill="rgba(244, 114, 182, 0.45)" stroke="#f472b6" stroke-width="1.2"/>
                        <circle cx="0" cy="-3" r="3.5" fill="#ffffff" class="story-anim-led-2"/>
                        <!-- Undulating Tentacles -->
                        <g class="story-anim-jelly-tentacles" style="animation-delay: 0.6s;">
                            <path d="M -11 10 Q -14 28 -8 42 M -5 11 Q -7 32 -3 46 M 0 11 Q 1 34 -1 48 M 5 11 Q 7 32 3 46 M 11 10 Q 14 28 8 42" stroke="#e879f9" stroke-width="1.8" fill="none" opacity="0.9" stroke-linecap="round"/>
                            <path d="M -3 11 Q 0 32 -2 44 M 3 11 Q 5 32 2 44" stroke="#38bdf8" stroke-width="1.2" fill="none" opacity="0.8"/>
                        </g>
                    </g>
                </g>

                <!-- 3. Third Playful Baby Jellyfish (Floating in Upper Water Rays) -->
                <g transform="translate(160, 38)">
                    <g class="story-anim-jelly-swim-3">
                        <ellipse cx="0" cy="0" rx="11" ry="8" fill="rgba(6, 182, 212, 0.55)" stroke="#22d3ee" stroke-width="1.8" filter="drop-shadow(0 0 8px #22d3ee)"/>
                        <circle cx="0" cy="-2" r="2.8" fill="#ffffff" class="story-anim-led-3"/>
                        <g class="story-anim-jelly-tentacles" style="animation-delay: 1.1s;">
                            <path d="M -7 8 Q -9 22 -5 32 M 0 8 Q 1 24 -1 34 M 7 8 Q 9 22 5 32" stroke="#67e8f9" stroke-width="1.5" fill="none" opacity="0.85" stroke-linecap="round"/>
                        </g>
                    </g>
                </g>

                <!-- 4. Fourth Deep Ocean Jellyfish (Drifting Mid-Water) -->
                <g transform="translate(275, 95)">
                    <g class="story-anim-jelly-swim-1" style="animation-delay: 1.8s;">
                        <ellipse cx="0" cy="0" rx="13" ry="9" fill="rgba(192, 132, 252, 0.45)" stroke="#c084fc" stroke-width="1.6"/>
                        <circle cx="0" cy="-2" r="2.5" fill="#facc15" class="story-anim-led-1"/>
                        <g class="story-anim-jelly-tentacles">
                            <path d="M -8 9 Q -10 24 -6 34 M 0 9 Q 1 26 -1 36 M 8 9 Q 10 24 6 34" stroke="#e879f9" stroke-width="1.4" fill="none" opacity="0.8"/>
                        </g>
                    </g>
                </g>

                <!-- Drifting Bioluminescent Plankton Spores with Pulsing Glow -->
                <circle cx="145" cy="48" r="2.8" fill="#e879f9" filter="drop-shadow(0 0 5px #e879f9)" class="story-anim-led-1"/>
                <circle cx="205" cy="88" r="3.2" fill="#22d3ee" filter="drop-shadow(0 0 6px #22d3ee)" class="story-anim-led-2"/>
                <circle cx="280" cy="35" r="3.0" fill="#e879f9" filter="drop-shadow(0 0 5px #e879f9)" class="story-anim-led-3"/>
                <circle cx="355" cy="95" r="2.6" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-1"/>
                <circle cx="370" cy="45" r="3.2" fill="#facc15" filter="drop-shadow(0 0 5px #facc15)" class="story-anim-led-2"/>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Harmonized Bioluminescent Sanctuary Archway (Clean, Badge-Free)
            visualFx = `
                <!-- Harmonized Turquoise Water Ambience -->
                <rect width="400" height="220" fill="rgba(6, 182, 212, 0.08)"/>
                <!-- Dynamically Swimming Jellyfish Pair Escorting Diver Ahead in Victory -->
                <g transform="translate(275, 48)">
                    <g class="story-anim-jelly-swim-2">
                        <!-- Mother Jellyfish with Glowing Translucent Bell -->
                        <ellipse cx="0" cy="0" rx="15" ry="10" fill="rgba(6, 182, 212, 0.45)" stroke="#38bdf8" stroke-width="1.8" filter="drop-shadow(0 0 8px #00f0ff)"/>
                        <circle cx="0" cy="-2" r="3.2" fill="#ffffff" class="story-anim-led-1"/>
                        <g class="story-anim-jelly-tentacles">
                            <path d="M -8 10 Q -10 24 -6 36 M -3 10 Q 0 28 -2 40 M 3 10 Q 2 28 5 40 M 8 10 Q 10 24 6 36" stroke="#38bdf8" stroke-width="1.4" fill="none" opacity="0.85" stroke-linecap="round"/>
                        </g>
                    </g>
                </g>
                <g transform="translate(325, 68)">
                    <g class="story-anim-jelly-swim-3">
                        <!-- Baby Jellyfish Swimming in Escort -->
                        <ellipse cx="0" cy="0" rx="10" ry="7" fill="rgba(192, 132, 252, 0.5)" stroke="#c084fc" stroke-width="1.5" filter="drop-shadow(0 0 6px #c084fc)"/>
                        <circle cx="0" cy="-2" r="2.2" fill="#ffffff" class="story-anim-led-2"/>
                        <g class="story-anim-jelly-tentacles" style="animation-delay: 0.8s;">
                            <path d="M -5 7 Q -7 18 -4 28 M 0 7 Q 1 20 -1 30 M 5 7 Q 7 18 4 28" stroke="#e879f9" stroke-width="1.2" fill="none" opacity="0.8" stroke-linecap="round"/>
                        </g>
                    </g>
                </g>
                <!-- Gentle Floating Bioluminescent Sparkles -->
                <circle cx="120" cy="50" r="3" fill="#a855f7" class="story-anim-sparkle-1"/>
                <circle cx="200" cy="35" r="3.5" fill="#00f0ff" class="story-anim-sparkle-2"/>
                <circle cx="340" cy="65" r="3" fill="#38bdf8" class="story-anim-sparkle-1"/>
            `;
        }
    } else if (twist.id === 'abyssal_vortex') {
        if (isClimax) {
            // Phase 1 (Panel 3): Rotating Counter-Clockwise Whirlpool Vortex with Long Waves!
            visualFx = `
                <!-- Swirling Vortex Water Turbulence Wash -->
                <rect width="400" height="220" fill="rgba(3, 105, 161, 0.22)" class="story-anim-emergency-siren"/>

                <!-- Giant Counter-Clockwise Hydrodynamic Vortex with Long Waves at (230, 75) -->
                <g transform="translate(230, 75)">
                    <!-- Counter-Clockwise Rotating Long Wave System (Spinning the other way!) -->
                    <g class="story-anim-vortex-spin-ccw">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="8s" repeatCount="indefinite"/>

                        <!-- Long Extended Spiral Wave Arm 1 -->
                        <path d="M 0 -85 C 55 -85, 95 -45, 95 0 C 95 45, 50 85, 0 85 C -50 85, -85 45, -85 0 C -85 -35, -45 -60, 0 -60 C 35 -60, 55 -30, 55 0 C 55 25, 30 40, 0 40 C -25 40, -35 20, -35 0 C -35 -15, -18 -22, 0 -22 C 14 -22, 18 -10, 18 0 C 18 8, 8 12, 0 12" stroke="#00f0ff" stroke-width="3.2" fill="none" stroke-linecap="round" opacity="0.9"/>

                        <!-- Long Extended Spiral Wave Arm 2 (Interlocking Swirl) -->
                        <path d="M 0 85 C -55 85, -95 45, -95 0 C -95 -45, -50 -85, 0 -85 C 50 -85, 85 -45, 85 0 C 85 35, 45 60, 0 60 C -35 60, -55 30, -55 0 C -55 -25, -30 -40, 0 -40 C 25 -40, 35 -20, 35 0 C 35 15, 18 22, 0 22 C -14 22, -18 10, -18 0" stroke="#38bdf8" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="16,8" opacity="0.85"/>

                        <!-- Distant Extended Wave Wake Ripples -->
                        <circle cx="0" cy="0" r="72" fill="none" stroke="#22d3ee" stroke-width="1.8" stroke-dasharray="18,10" opacity="0.75"/>
                        <circle cx="0" cy="0" r="50" fill="none" stroke="#67e8f9" stroke-width="1.5" stroke-dasharray="10,6" opacity="0.8"/>

                        <!-- White Foaming Wave Crests along Wave Tips -->
                        <path d="M 60 -60 Q 88 -35 85 -10" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <path d="M -60 60 Q -88 35 -85 10" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <path d="M 35 55 Q 60 45 55 20" stroke="#ffffff" stroke-width="2.4" fill="none" stroke-linecap="round"/>
                        <path d="M -35 -55 Q -60 -45 -55 -20" stroke="#ffffff" stroke-width="2.4" fill="none" stroke-linecap="round"/>
                    </g>

                    <!-- Outer Sweeping Long Oceanic Tidal Wake Streamlines -->
                    <g class="story-anim-vortex-waves-pulse">
                        <path d="M -130 -30 Q -50 -90 65 -65 T 155 25" stroke="#38bdf8" stroke-width="2.4" fill="none" stroke-dasharray="22,12" opacity="0.85"/>
                        <path d="M -120 45 Q -10 95 105 70 T 160 -15" stroke="#00f0ff" stroke-width="2.0" fill="none" stroke-dasharray="18,10" opacity="0.8"/>
                        <path d="M -140 10 Q -70 -50 30 -80 T 170 5" stroke="#67e8f9" stroke-width="1.6" fill="none" stroke-dasharray="26,14" opacity="0.7"/>
                    </g>

                    <!-- Fast Spinning Inner Vortex Core -->
                    <g class="story-anim-vortex-spin-ccw-fast">
                        <ellipse cx="0" cy="0" rx="34" ry="16" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="8,4" opacity="0.95"/>
                    </g>
                    <!-- Core Vortex Cavitation Bubble -->
                    <circle cx="0" cy="0" r="9" fill="#ffffff" filter="drop-shadow(0 0 16px #00f0ff)" class="story-anim-starmap-pulse"/>
                </g>

                <!-- Drifting Cavitation Bubbles Caught in Whirlpool Sweep -->
                <circle cx="155" cy="90" r="3.5" fill="rgba(255,255,255,0.85)" class="story-anim-bubble-1"/>
                <circle cx="295" cy="38" r="4.2" fill="rgba(255,255,255,0.75)" class="story-anim-bubble-2"/>
                <circle cx="340" cy="115" r="3.2" fill="rgba(255,255,255,0.9)" class="story-anim-bubble-3"/>
                <circle cx="180" cy="40" r="2.8" fill="rgba(255,255,255,0.8)" class="story-anim-bubble-1"/>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Stabilized Laminar Ocean Currents (Clean, Badge-Free)
            visualFx = `
                <!-- Tranquil Turquoise Lagoon Wash -->
                <rect width="400" height="220" fill="rgba(56, 189, 248, 0.08)"/>
                <!-- Smooth Laminar Water Streamlines -->
                <g stroke="#38bdf8" stroke-width="2" stroke-linecap="round" opacity="0.75">
                    <path d="M 20 45 Q 140 35 260 42 T 390 38" fill="none" stroke-dasharray="12,6"/>
                    <path d="M 0 65 Q 160 55 290 62 T 400 56" fill="none" stroke-dasharray="8,5" opacity="0.6"/>
                </g>
                <!-- Gentle Buoyant Bubbles Rising Smoothly -->
                <circle cx="150" cy="60" r="3" fill="#ffffff" opacity="0.8" class="story-anim-bubble-1"/>
                <circle cx="260" cy="45" r="3.5" fill="#ffffff" opacity="0.8" class="story-anim-bubble-2"/>
            `;
        }
    } else if (twist.id === 'survey_drone') {
        if (isClimax) {
            // Phase 1 (Panel 3): High-Tech Submarine Survey Drone Sweeping Searchlight!
            visualFx = `
                <!-- Hovering Uncharted Survey Drone (Staged in Upper Right Sky at X=245, Y=52) -->
                <g transform="translate(245, 52)">
                    <g class="story-anim-drone-hover">
                        <!-- Volumetric Amber Searchlight Cone Sweeping Seafloor -->
                        <polygon points="0,10 -75,145 65,145" fill="rgba(245, 158, 11, 0.28)" class="story-anim-drone-scan"/>
                        <line x1="-75" y1="145" x2="65" y2="145" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4" opacity="0.75"/>
                        <!-- Drone Yellow Submarine Hull -->
                        <ellipse cx="0" cy="0" rx="26" ry="15" fill="#facc15" stroke="#d97706" stroke-width="2.2"/>
                        <rect x="-8" y="-18" width="16" height="6" rx="2" fill="#334155"/>
                        <circle cx="0" cy="-20" r="3" fill="#ef4444" class="story-anim-led-1"/>
                        <!-- Circular Glass Observation Porthole -->
                        <circle cx="8" cy="0" r="8" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
                        <circle cx="10" cy="-2" r="2.5" fill="#ffffff" opacity="0.8"/>
                        <!-- Dual Propeller Thrusters (Spinning) -->
                        <rect x="-30" y="-8" width="6" height="16" rx="1.5" fill="#475569"/>
                        <g transform="translate(-32, 0)">
                            <g class="story-anim-astrolabe-spin">
                                <line x1="0" y1="-7" x2="0" y2="7" stroke="#38bdf8" stroke-width="2"/>
                            </g>
                        </g>
                    </g>
                </g>
                <!-- Expanding Sonar Ping Waves Emitting from Drone -->
                <circle cx="245" cy="52" r="22" fill="none" stroke="#f59e0b" stroke-width="2.5" class="story-anim-radar-ping"/>
                <circle cx="245" cy="52" r="44" fill="none" stroke="#38bdf8" stroke-width="1.8" class="story-anim-radar-ping"/>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Re-coded Friendly Marine Research Partner (Clean, Badge-Free)
            visualFx = `
                <!-- Friendly Partner Drone Staged at X=260, Y=48 -->
                <g transform="translate(260, 48)">
                    <g class="story-anim-drone-hover">
                        <!-- Gentle Cyan Research Beam -->
                        <polygon points="0,10 -55,115 55,115" fill="rgba(6, 182, 212, 0.16)"/>
                        <!-- Re-coded Emerald Hull Trim -->
                        <ellipse cx="0" cy="0" rx="26" ry="15" fill="#facc15" stroke="#10b981" stroke-width="2.2"/>
                        <!-- Porthole Smiling Cyan Highlight -->
                        <circle cx="8" cy="0" r="8" fill="#065f46" stroke="#10b981" stroke-width="1.8"/>
                        <circle cx="9" cy="0" r="4" fill="#22c55e" filter="drop-shadow(0 0 6px #22c55e)"/>
                        <path d="M 6 2 Q 9 5 12 2" stroke="#ffffff" stroke-width="1.2" fill="none"/>
                    </g>
                </g>
                <!-- Uplifting Green Telemetry Verification Check -->
                <circle cx="260" cy="18" r="4" fill="#22c55e" class="story-anim-led-1"/>
                <polygon points="257,18 259,20 263,16" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            `;
        }
    }

    return `
        <g id="story-advanced-twist-overlay">
            ${visualFx}
            ${badge}
        </g>
    `;
}

/* ==========================================================================
   ADVANCED COMIC SVG SCENE RENDERER (4 MARINE SETTINGS & 1:1 SIGNATURE LANDMARKS)
   ========================================================================== */

function renderAdvancedComicSVG(settingId, charId, propId, panelIdx, level, twist, secondaryCharId) {
    let bgGraphic = '';
    let propGraphic = '';
    let charGraphic = '';
    let secondCharGraphic = '';
    let twistOverlay = '';
    let storyActionOverlays = '';
    let pedestalGraphic = '';

    const isSetup = (panelIdx === 0);
    const isDiscovery = (panelIdx === 1);
    const isClimax = (panelIdx === 2);
    const isResolution = (panelIdx === 3);

    const groundY = 175;
    let charX = 85;
    let propX = 315;
    let pedestalX = 290;
    let charPose = 'exploring';

    if (isSetup) {
        charX = 85;
        propX = 315;
        pedestalX = 290;
        charPose = 'exploring';
    } else if (isDiscovery) {
        charX = 115;
        propX = 290;
        pedestalX = 265;
        charPose = 'discovering';
    } else if (isClimax) {
        charX = 80;
        propX = 300;
        pedestalX = 275;
        charPose = 'alarmed';
    } else if (isResolution) {
        charX = 100;
        propX = 310;
        pedestalX = 285;
        charPose = 'celebrating';
    }
    const propY = isDiscovery ? (groundY - 45) : (groundY - 32);

    // --------------------------------------------------------------------------
    // 1. SETTINGS BACKGROUNDS & 1:1 SIGNATURE LANDMARKS (SUPER VECTOR LIVING GRAPHICS)
    // --------------------------------------------------------------------------
    if (settingId === 'twilight_trench') {
        // Deep Twilight Trench: Abyssal Depths, Bioluminescent Fissures, Floating Jellyfish, Sonar Pings & Hydrothermal Chimney
        bgGraphic = `
            <defs>
                <linearGradient id="trenchOceanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#070e1b"/>
                    <stop offset="60%" stop-color="#030712"/>
                    <stop offset="100%" stop-color="#020617"/>
                </linearGradient>
            </defs>

            <!-- Layer 1: Abyssal Midnight Ocean Backdrop -->
            <rect width="400" height="220" fill="url(#trenchOceanGrad)"/>
            <!-- Distant Deep Blue Trench Fissure Glow -->
            <path d="M 0 0 L 400 0 L 400 135 Q 280 150 160 140 Q 60 148 0 138 Z" fill="#0f172a" opacity="0.85"/>

            <!-- Layer 2: Abyssal Trench Fissure Walls with Glowing Mineral Seeps -->
            <polygon points="0,35 65,75 42,150 0,165" fill="#1e293b"/>
            <polygon points="400,15 335,68 358,140 400,160" fill="#1e293b"/>
            <!-- Bioluminescent Mineral Seep Highlights along Trench Walls -->
            <path d="M 15 50 Q 38 90 22 135" stroke="#00f0ff" stroke-width="2" fill="none" opacity="0.75" stroke-dasharray="8,4" class="story-anim-laser-wave"/>
            <path d="M 385 35 Q 358 80 372 130" stroke="#a855f7" stroke-width="2" fill="none" opacity="0.75" stroke-dasharray="6,4" class="story-anim-holo-pulse"/>

            <!-- Expanding Deep Trench Sonar / Acoustic Pulse Rings -->
            <g transform="translate(68, 65)">
                <circle cx="0" cy="0" r="4" fill="none" stroke="#38bdf8" class="story-anim-sonar-ring-1"/>
                <circle cx="0" cy="0" r="4" fill="none" stroke="#00f0ff" class="story-anim-sonar-ring-2"/>
                <circle cx="0" cy="0" r="2.5" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
            </g>

            <!-- Floating Bioluminescent Deep-Sea Jellyfish in Trench Column -->
            <g transform="translate(142, 55)">
                <g class="story-anim-jellyfish-pulse">
                    <!-- Translucent Jellyfish Bell -->
                    <path d="M -14 0 C -14 -16 14 -16 14 0 C 8 4 -8 4 -14 0 Z" fill="rgba(192, 132, 252, 0.45)" stroke="#c084fc" stroke-width="1.2"/>
                    <ellipse cx="0" cy="0" rx="10" ry="2.5" fill="#a855f7" opacity="0.6"/>
                    <!-- Glowing Bioluminescent Margin Dots -->
                    <circle cx="-10" cy="0" r="1.2" fill="#00f0ff"/>
                    <circle cx="-4" cy="1" r="1.2" fill="#f472b6"/>
                    <circle cx="4" cy="1" r="1.2" fill="#00f0ff"/>
                    <circle cx="10" cy="0" r="1.2" fill="#f472b6"/>
                    <!-- Flowing Tentacles -->
                    <path d="M -8 2 Q -12 14 -6 26" stroke="#d8b4fe" stroke-width="1.2" fill="none" opacity="0.7"/>
                    <path d="M -2 3 Q 2 15 -1 28" stroke="#f0abfc" stroke-width="1.4" fill="none" opacity="0.8"/>
                    <path d="M 4 3 Q 1 15 5 28" stroke="#f0abfc" stroke-width="1.4" fill="none" opacity="0.8"/>
                    <path d="M 8 2 Q 12 14 7 26" stroke="#d8b4fe" stroke-width="1.2" fill="none" opacity="0.7"/>
                </g>
            </g>

            <!-- Abyssal Anglerfish Gliding with Glowing Esca Lure -->
            <g transform="translate(230, 42)">
                <g class="story-anim-angler-glide">
                    <!-- Anglerfish Dark Body -->
                    <ellipse cx="0" cy="0" rx="15" ry="9" fill="#0f172a" stroke="#334155" stroke-width="1.2"/>
                    <polygon points="-14,0 -22,-6 -22,6" fill="#1e293b"/>
                    <!-- Glowing Eye -->
                    <circle cx="7" cy="-2" r="2.2" fill="#38bdf8"/>
                    <circle cx="7" cy="-2" r="1" fill="#ffffff"/>
                    <!-- Angler Esca Stalk & Glowing Orb -->
                    <path d="M 6 -8 Q 14 -16 16 -12" stroke="#64748b" stroke-width="1.2" fill="none"/>
                    <circle cx="16" cy="-12" r="3" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-1"/>
                    <circle cx="16" cy="-12" r="1.5" fill="#ffffff"/>
                </g>
            </g>

            <!-- Distant Faint Sunbeams Penetrating from Upper Ocean -->
            <polygon points="120,0 170,0 240,175 180,175" fill="rgba(56, 189, 248, 0.05)" class="story-anim-water-rays"/>
            <polygon points="260,0 300,0 350,175 300,175" fill="rgba(6, 182, 212, 0.05)" class="story-anim-water-rays"/>

            <!-- Floating Bioluminescent Spores & Marine Snow -->
            <circle cx="95" cy="110" r="1.6" fill="#00f0ff" class="story-anim-twinkle-1"/>
            <circle cx="180" cy="95" r="1.8" fill="#e879f9" class="story-anim-twinkle-2"/>
            <circle cx="270" cy="120" r="1.5" fill="#38bdf8" class="story-anim-twinkle-3"/>

            <!-- Layer 4: Deep Seafloor Silt Baseline at Y = 175 -->
            <path d="M 0 165 Q 120 172 240 168 T 400 166 L 400 220 L 0 220 Z" fill="#0b1329"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#1e293b" stroke-width="2"/>
        `;
        // 1:1 Signature Landmark: Hydrothermal Chimney Stack (Black Smoker)
        pedestalGraphic = `
            <g id="vent_stack" transform="translate(${pedestalX}, ${groundY})">
                <!-- Drop shadow on abyssal floor -->
                <ellipse cx="0" cy="2" rx="28" ry="6" fill="rgba(0,0,0,0.4)"/>
                <!-- Basalt Chimney Base -->
                <path d="M -24 0 L -15 -44 L 15 -44 L 24 0 Z" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <ellipse cx="0" cy="-44" rx="15" ry="5.5" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
                <!-- Mineral Veins (Pyrite Gold & Copper) with Subtle Glow -->
                <path d="M -9 -40 L -4 -16 L 2 -8" stroke="#facc15" stroke-width="1.8" fill="none" class="story-anim-sparkle-1"/>
                <path d="M 7 -38 L 11 -20 L 5 -4" stroke="#ea580c" stroke-width="1.8" fill="none"/>
                <!-- Billowing Thermal Vent Black Smoker Plume -->
                <g class="story-anim-smoker-billow">
                    <circle cx="0" cy="-52" r="9" fill="rgba(51, 65, 85, 0.65)"/>
                    <circle cx="3" cy="-66" r="14" fill="rgba(71, 85, 105, 0.45)"/>
                    <circle cx="-2" cy="-80" r="18" fill="rgba(100, 116, 139, 0.25)"/>
                </g>
            </g>
        `;
    } else if (settingId === 'kelp_forest') {
        // Giant Kelp Sanctuary: Swaying Emerald Kelp Canopy, Dappled Sunbeams, Shimmering Fish School, Kelp Holdfast Spire
        bgGraphic = `
            <defs>
                <linearGradient id="kelpOceanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#047857"/>
                    <stop offset="50%" stop-color="#064e3b"/>
                    <stop offset="100%" stop-color="#022c22"/>
                </linearGradient>
            </defs>

            <!-- Layer 1: Emerald Twilight Deep Sea Gradient -->
            <rect width="400" height="220" fill="url(#kelpOceanGrad)"/>
            <path d="M 0 0 L 400 0 L 400 130 Q 260 145 130 135 L 0 140 Z" fill="#064e3b" opacity="0.8"/>

            <!-- Piercing Underwater Sunbeams Dappled by Kelp Canopy -->
            <polygon points="70,0 120,0 185,175 135,175" fill="rgba(52, 211, 153, 0.12)" class="story-anim-water-rays"/>
            <polygon points="220,0 270,0 330,175 280,175" fill="rgba(52, 211, 153, 0.12)" class="story-anim-water-rays"/>

            <!-- Layer 2: Towering Giant Kelp Ribbons Swaying with Current (Nested Rigs) -->
            <!-- Left Kelp Tower -->
            <g class="story-anim-coral-sway-left" style="transform-origin: 40px 175px;">
                <path d="M 35 175 Q 52 110 30 50 Q 46 10 38 0" stroke="#059669" stroke-width="11" fill="none" opacity="0.9" stroke-linecap="round"/>
                <!-- Translucent Leaf Fronds & Gas Bladders -->
                <ellipse cx="44" cy="115" rx="15" ry="7" fill="#10b981" opacity="0.9" transform="rotate(-25 44 115)"/>
                <circle cx="36" cy="112" r="3.5" fill="#34d399"/>
                <ellipse cx="26" cy="65" rx="16" ry="7.5" fill="#10b981" opacity="0.9" transform="rotate(30 26 65)"/>
                <circle cx="31" cy="68" r="3.5" fill="#34d399"/>
                <ellipse cx="42" cy="25" rx="14" ry="6" fill="#34d399" opacity="0.9" transform="rotate(-20 42 25)"/>
            </g>
            <!-- Right Kelp Tower -->
            <g class="story-anim-coral-sway-right" style="transform-origin: 360px 175px;">
                <path d="M 365 175 Q 348 100 372 45 Q 354 10 360 0" stroke="#059669" stroke-width="12" fill="none" opacity="0.9" stroke-linecap="round"/>
                <ellipse cx="352" cy="120" rx="16" ry="7.5" fill="#10b981" opacity="0.9" transform="rotate(25 352 120)"/>
                <circle cx="359" cy="118" r="3.5" fill="#34d399"/>
                <ellipse cx="376" cy="70" rx="15" ry="7" fill="#10b981" opacity="0.9" transform="rotate(-30 376 70)"/>
                <circle cx="369" cy="72" r="3.5" fill="#34d399"/>
                <ellipse cx="354" cy="28" rx="14" ry="6" fill="#34d399" opacity="0.9" transform="rotate(18 354 28)"/>
            </g>

            <!-- Layer 3: School of Tropical Reef Fish Swimming in Kelp Forest -->
            <g transform="translate(190, 80)">
                <g class="story-anim-fish-school">
                    <!-- Fish 1 (Lead) -->
                    <g transform="translate(20, 0)">
                        <polygon points="0,0 -8,-3.5 -8,3.5" fill="#6ee7b7"/>
                        <polygon points="-8,0 -12,-4 -12,4" fill="#34d399"/>
                        <circle cx="-2" cy="-1" r="0.8" fill="#064e3b"/>
                    </g>
                    <!-- Fish 2 -->
                    <g transform="translate(6, -8)">
                        <polygon points="0,0 -7,-3 -7,3" fill="#a7f3d0"/>
                        <polygon points="-7,0 -10,-3.5 -10,3.5" fill="#34d399"/>
                    </g>
                    <!-- Fish 3 -->
                    <g transform="translate(10, 8)">
                        <polygon points="0,0 -7,-3 -7,3" fill="#6ee7b7"/>
                        <polygon points="-7,0 -10,-3.5 -10,3.5" fill="#10b981"/>
                    </g>
                    <!-- Fish 4 -->
                    <g transform="translate(-8, -3)">
                        <polygon points="0,0 -6,-2.8 -6,2.8" fill="#a7f3d0"/>
                        <polygon points="-6,0 -9,-3 -9,3" fill="#34d399"/>
                    </g>
                </g>
            </g>

            <!-- Gentle Rising Kelp Oxygen Bubbles -->
            <circle cx="55" cy="110" r="2.8" fill="rgba(255,255,255,0.75)" class="story-anim-bubble-1"/>
            <circle cx="150" cy="80" r="2.2" fill="rgba(255,255,255,0.75)" class="story-anim-bubble-2"/>
            <circle cx="345" cy="90" r="3.2" fill="rgba(255,255,255,0.75)" class="story-anim-bubble-3"/>

            <!-- Layer 4: Sandy Seabed Baseline with Shell Texture at Y = 175 -->
            <path d="M 0 166 Q 140 172 280 168 T 400 167 L 400 220 L 0 220 Z" fill="#064e3b"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#047857" stroke-width="2"/>
        `;
        // 1:1 Signature Landmark: Emerald Kelp Holdfast Rock & Canopy Spire
        pedestalGraphic = `
            <g id="kelp_holdfast" transform="translate(${pedestalX}, ${groundY})">
                <!-- Drop shadow on seabed -->
                <ellipse cx="0" cy="2" rx="30" ry="6" fill="rgba(0,0,0,0.35)"/>
                <!-- Living Granite Seafloor Holdfast Rock -->
                <path d="M -26 0 Q -30 -16 -16 -24 Q 0 -28 16 -22 Q 28 -14 26 0 Z" fill="#064e3b" stroke="#047857" stroke-width="2"/>
                <!-- Encrusted Starfish & Coral Anemones on Rock -->
                <polygon points="-16,-12 -12,-16 -14,-10 -18,-8 -13,-6" fill="#f97316"/>
                <circle cx="14" cy="-8" r="3.5" fill="#ec4899" filter="drop-shadow(0 0 5px #f472b6)"/>
                <circle cx="0" cy="-14" r="3" fill="#a855f7"/>
                <!-- Towering Emerald Kelp Stems Rising from Holdfast with Swaying Motion -->
                <g class="story-anim-branch-sway" style="transform-origin: 0px -20px;">
                    <path d="M -8 -20 Q -18 -45 -10 -75 Q -5 -95 -8 -110" stroke="#059669" stroke-width="6.5" fill="none" stroke-linecap="round"/>
                    <path d="M 6 -20 Q 16 -50 8 -80 Q 2 -100 6 -115" stroke="#10b981" stroke-width="5.5" fill="none" stroke-linecap="round"/>
                    <!-- Glowing Golden-Emerald Kelp Gas Bladders (Bulbs) & Fronds -->
                    <ellipse cx="-12" cy="-55" rx="6.5" ry="13" fill="#34d399" opacity="0.9" transform="rotate(-20 -12 -55)"/>
                    <ellipse cx="12" cy="-60" rx="6.5" ry="15" fill="#34d399" opacity="0.9" transform="rotate(25 12 -60)"/>
                    <ellipse cx="-8" cy="-90" rx="5.5" ry="12" fill="#6ee7b7" opacity="0.9" transform="rotate(-15 -8 -90)"/>
                    <ellipse cx="6" cy="-95" rx="5.5" ry="13" fill="#6ee7b7" opacity="0.9" transform="rotate(20 6 -95)"/>
                    <!-- Bioluminescent Spore Glow on Kelp Fronds -->
                    <circle cx="-12" cy="-55" r="2.5" fill="#ffffff" class="story-anim-led-1"/>
                    <circle cx="12" cy="-60" r="2.5" fill="#ffffff" class="story-anim-led-2"/>
                </g>
            </g>
        `;
    } else if (settingId === 'sunken_dome') {
        // Sunken Research Station: Geodesic Laboratory Dome, Titanium Air-Lock Hatch, Searchlight Beams, Mooring Anchor
        bgGraphic = `
            <defs>
                <linearGradient id="domeOceanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0f172a"/>
                    <stop offset="50%" stop-color="#1e293b"/>
                    <stop offset="100%" stop-color="#0b0f19"/>
                </linearGradient>
            </defs>

            <!-- Layer 1: Deep Subsea Trench Horizon -->
            <rect width="400" height="220" fill="url(#domeOceanGrad)"/>
            <!-- Distant Submerged Laboratory Bulkhead Structure -->
            <path d="M 0 0 L 400 0 L 400 120 L 320 125 L 240 115 L 0 125 Z" fill="#1e293b" opacity="0.75"/>

            <!-- Layer 2: Structural Gantry Beams & Sweeping Searchlight Beam -->
            <line x1="0" y1="28" x2="400" y2="28" stroke="#334155" stroke-width="4"/>
            <line x1="0" y1="36" x2="400" y2="36" stroke="#facc15" stroke-width="2" stroke-dasharray="14,10"/>

            <!-- Deep-Sea High-Intensity Searchlight Beam Probing from Gantry -->
            <g transform="translate(140, 36)">
                <polygon points="0,0 80,45 55,135 0,0" fill="rgba(56, 189, 248, 0.12)" class="story-anim-scan-cone"/>
                <circle cx="0" cy="0" r="4" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
            </g>

            <!-- Layer 3: Sunken Geodesic Laboratory Dome (X=15 to 115, Y=50 to 145) -->
            <!-- Main Dome Shell -->
            <path d="M 18 145 A 50 50 0 0 1 118 145 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <!-- Geodesic Facet Struts -->
            <path d="M 68 98 L 44 122 L 68 145 L 92 122 Z" fill="none" stroke="#475569" stroke-width="1.5"/>
            <!-- Glowing Laboratory Dome Observation Portholes with Interior Lab Light -->
            <circle cx="56" cy="120" r="12" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="1.8"/>
            <circle cx="56" cy="120" r="8" fill="#0284c7" opacity="0.75"/>
            <circle cx="56" cy="120" r="3" fill="#00f0ff" class="story-anim-led-1"/>

            <circle cx="80" cy="120" r="12" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="1.8"/>
            <circle cx="80" cy="120" r="8" fill="#0284c7" opacity="0.75"/>
            <circle cx="80" cy="120" r="3" fill="#22c55e" class="story-anim-led-2"/>

            <!-- Airlock Module with Flashing Beacon -->
            <rect x="110" y="118" width="22" height="27" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
            <circle cx="121" cy="124" r="2.2" fill="#ef4444" class="story-anim-siren-blink"/>

            <!-- Rising Decompression Bubbles from Airlock -->
            <circle cx="125" cy="105" r="2.5" fill="rgba(255,255,255,0.7)" class="story-anim-bubble-1"/>
            <circle cx="128" cy="75" r="3.2" fill="rgba(255,255,255,0.65)" class="story-anim-bubble-2"/>

            <!-- Layer 4: Station Seafloor Baseline with Metal Decking at Y = 175 -->
            <rect x="0" y="168" width="400" height="52" fill="#1e293b"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#38bdf8" stroke-width="2.5" class="story-anim-neon-line"/>
            <!-- Embedded Deck LEDs -->
            <circle cx="80" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-1"/>
            <circle cx="180" cy="175" r="2.5" fill="#facc15" class="story-anim-led-2"/>
            <circle cx="370" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-3"/>
        `;
        // 1:1 Signature Landmark: Heavy Titanium Station Mooring Anchor
        pedestalGraphic = `
            <g id="station_anchor" transform="translate(${pedestalX}, ${groundY})">
                <!-- Drop shadow on metal deck -->
                <ellipse cx="0" cy="2" rx="36" ry="5" fill="rgba(0,0,0,0.35)"/>
                <!-- Station Platform Gantry Decking -->
                <rect x="-35" y="-6" width="70" height="6" rx="2" fill="#334155" stroke="#475569" stroke-width="1.5"/>

                <!-- Heavy Industrial Deep-Sea Station Mooring Anchor -->
                <!-- Anchor Shank with Hazard Yellow Chevrons -->
                <rect x="-6" y="-52" width="12" height="48" rx="2.5" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
                <line x1="-5" y1="-34" x2="5" y2="-34" stroke="#facc15" stroke-width="2"/>
                <line x1="-5" y1="-24" x2="5" y2="-24" stroke="#facc15" stroke-width="2"/>
                <!-- Shackle Ring & Rising Mooring Chains connected to Station -->
                <circle cx="0" cy="-54" r="9" fill="none" stroke="#64748b" stroke-width="3"/>
                <ellipse cx="0" cy="-68" rx="4.5" ry="7.5" fill="none" stroke="#94a3b8" stroke-width="2.2"/>
                <ellipse cx="0" cy="-80" rx="4.5" ry="7.5" fill="none" stroke="#94a3b8" stroke-width="2.2"/>
                <!-- Curved Heavy Titanium Anchor Flukes & Spade Palms -->
                <path d="M -28 -18 Q 0 8 28 -18" stroke="#475569" stroke-width="7" fill="none" stroke-linecap="round"/>
                <polygon points="-30,-22 -22,-12 -32,-10" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
                <polygon points="30,-22 22,-12 32,-10" fill="#334155" stroke="#64748b" stroke-width="1.5"/>

                <!-- Telemetry Beacon on Anchor Crown & Indicator LEDs -->
                <circle cx="0" cy="-54" r="3.2" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-1"/>
                <circle cx="-24" cy="-3" r="2.5" fill="#22c55e" class="story-anim-led-2"/>
                <circle cx="24" cy="-3" r="2.5" fill="#ef4444" class="story-anim-led-3"/>
            </g>
        `;
    } else {
        // Default: Azure Coral Reef: Bioluminescent Coral Arch, Magenta Polyps, Piercing Sunbeams, School of Reef Fish
        bgGraphic = `
            <defs>
                <linearGradient id="azureOceanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0284c7"/>
                    <stop offset="45%" stop-color="#0369a1"/>
                    <stop offset="100%" stop-color="#082f49"/>
                </linearGradient>
            </defs>

            <!-- Layer 1: Deep Azure Ocean Gradient Backdrop -->
            <rect width="400" height="220" fill="url(#azureOceanGrad)"/>

            <!-- Mid-Depth Coral Reef Ridges (X=0 to 400) -->
            <path d="M 0 135 Q 80 120 180 132 Q 280 118 400 130 L 400 175 L 0 175 Z" fill="#0369a1" opacity="0.6"/>

            <!-- Piercing Underwater Sun Rays -->
            <polygon points="50,0 100,0 170,175 120,175" fill="rgba(56, 189, 248, 0.12)" class="story-anim-water-rays"/>
            <polygon points="210,0 260,0 320,175 270,175" fill="rgba(56, 189, 248, 0.12)" class="story-anim-water-rays"/>
            <polygon points="325,0 365,0 395,175 355,175" fill="rgba(6, 182, 212, 0.1)" class="story-anim-water-rays"/>

            <!-- Layer 2: School of Tropical Reef Fish Swimming Across Midwater -->
            <g transform="translate(175, 55)">
                <g class="story-anim-fish-school">
                    <!-- Fish 1 (Yellow Tang) -->
                    <g transform="translate(22, 0)">
                        <polygon points="0,0 -8,-4 -8,4" fill="#facc15"/>
                        <polygon points="-8,0 -12,-4.5 -12,4.5" fill="#eab308"/>
                        <circle cx="-2" cy="-1.2" r="0.8" fill="#0f172a"/>
                    </g>
                    <!-- Fish 2 (Cyan Damselfish) -->
                    <g transform="translate(6, -9)">
                        <polygon points="0,0 -7,-3.2 -7,3.2" fill="#38bdf8"/>
                        <polygon points="-7,0 -10,-4 -10,4" fill="#0284c7"/>
                    </g>
                    <!-- Fish 3 (Pink Anthias) -->
                    <g transform="translate(10, 9)">
                        <polygon points="0,0 -7,-3 -7,3" fill="#f472b6"/>
                        <polygon points="-7,0 -10,-3.5 -10,3.5" fill="#ec4899"/>
                    </g>
                    <!-- Fish 4 -->
                    <g transform="translate(-8, -4)">
                        <polygon points="0,0 -6,-2.8 -6,2.8" fill="#facc15"/>
                        <polygon points="-6,0 -9,-3 -9,3" fill="#ca8a04"/>
                    </g>
                </g>
            </g>

            <!-- Layer 3: Living Swaying Bioluminescent Coral Formations -->
            <!-- Left Magenta Staghorn & Fan Coral Cluster -->
            <g class="story-anim-coral-sway-left" style="transform-origin: 25px 175px;">
                <path d="M 25 175 Q 35 125 15 95 Q 35 105 40 175" fill="#ec4899" opacity="0.9"/>
                <circle cx="15" cy="95" r="4.5" fill="#f472b6" filter="drop-shadow(0 0 6px #ec4899)"/>
                <path d="M 32 175 Q 46 135 50 110" stroke="#f43f5e" stroke-width="4.5" fill="none" stroke-linecap="round"/>
                <circle cx="50" cy="110" r="3.5" fill="#fda4af"/>
            </g>
            <!-- Right Cyan & Lime Coral Cluster -->
            <g class="story-anim-coral-sway-right" style="transform-origin: 375px 175px;">
                <path d="M 375 175 Q 360 120 380 90 Q 365 110 360 175" fill="#06b6d4" opacity="0.9"/>
                <circle cx="380" cy="90" r="4.8" fill="#67e8f9" filter="drop-shadow(0 0 6px #00f0ff)"/>
                <path d="M 368 175 Q 352 140 348 115" stroke="#10b981" stroke-width="4" fill="none" stroke-linecap="round"/>
                <circle cx="348" cy="115" r="3.2" fill="#6ee7b7"/>
            </g>

            <!-- Rising Ocean Bubble Streams -->
            <circle cx="65" cy="115" r="2.8" fill="rgba(255,255,255,0.7)" class="story-anim-bubble-1"/>
            <circle cx="140" cy="85" r="3.4" fill="rgba(255,255,255,0.65)" class="story-anim-bubble-2"/>
            <circle cx="340" cy="95" r="2.6" fill="rgba(255,255,255,0.75)" class="story-anim-bubble-3"/>

            <!-- Layer 4: Sandy Seabed Baseline with Bioluminescent Coral Shells at Y = 175 -->
            <path d="M 0 166 Q 100 172 200 168 T 400 166 L 400 220 L 0 220 Z" fill="#0c4a6e"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#0284c7" stroke-width="2"/>
            <!-- Seabed Starfish & Shells -->
            <polygon points="90,172 93,168 96,172 100,172 97,175 99,179 95,176 91,179 93,175 89,172" fill="#f97316"/>
        `;
        // 1:1 Signature Landmark: Bioluminescent Brain Coral Arch
        pedestalGraphic = `
            <g id="coral_arch" transform="translate(${pedestalX}, ${groundY})">
                <!-- Drop shadow on seabed -->
                <ellipse cx="0" cy="2" rx="34" ry="6" fill="rgba(0,0,0,0.35)"/>
                <!-- Brain Coral Arch Outer Cavern Shape -->
                <path d="M -28 0 C -32 -26 -16 -46 0 -46 C 16 -46 32 -26 28 0 C 18 -12 12 -28 0 -28 C -12 -28 -18 -12 -28 0 Z" fill="#701a75" stroke="#a21caf" stroke-width="2"/>
                <!-- Bioluminescent Glowing Coral Polyps (Cyan & Magenta) -->
                <circle cx="-16" cy="-34" r="3.8" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-1"/>
                <circle cx="0" cy="-42" r="4.2" fill="#f472b6" filter="drop-shadow(0 0 6px #ec4899)" class="story-anim-led-2"/>
                <circle cx="16" cy="-34" r="3.8" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-3"/>
                <!-- Ambient Water Grotto Ripple -->
                <ellipse cx="0" cy="-14" rx="14" ry="5.5" fill="rgba(6, 182, 212, 0.22)" class="story-anim-sun-halo"/>
            </g>
        `;
    }

    // --------------------------------------------------------------------------
    // 2. CONTACT SHADOWS & CHARACTERS
    // --------------------------------------------------------------------------
    const heroShadow = `<g class="story-anim-shadow-6steps"><ellipse cx="${charX}" cy="${groundY + 3}" rx="32" ry="7" fill="rgba(0,0,0,0.3)"/></g>`;
    const propShadow = `<ellipse cx="${propX}" cy="${groundY + 2}" rx="22" ry="5.5" fill="rgba(0,0,0,0.2)"/>`;

    charGraphic = renderAdvancedCharacter(charId, charX, groundY, charPose, false);
    propGraphic = renderAdvancedPropSVG(propId, propX, propY, isClimax, settingId);

    // --------------------------------------------------------------------------
    // 3. ACTION OVERLAYS (PURE KINETICS - ZERO BLOCKING TEXT BOXES)
    // --------------------------------------------------------------------------
    if (isSetup) {
        storyActionOverlays = `
            <!-- Panel 1: Establishing Hydro-Scan Cone -->
            <g class="story-anim-scan-cone" style="transform-origin: ${charX + 20}px 125px;">
                <path d="M ${charX + 20} 125 L ${propX} 80 L ${propX} 175 Z" fill="rgba(56, 189, 248, 0.08)" stroke="rgba(56, 189, 248, 0.45)" stroke-width="0.8" stroke-dasharray="5,4"/>
                <circle cx="${charX + 110}" cy="120" r="3" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
            </g>
        `;
    } else if (isDiscovery) {
        storyActionOverlays = `
            <!-- Panel 2: Discovery & Bioluminescent Laser Beam -->
            <line x1="${charX + 24}" y1="120" x2="${propX - 16}" y2="105" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" class="story-anim-beam-connect"/>
            <line x1="${charX + 24}" y1="120" x2="${propX - 16}" y2="105" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
            <g transform="translate(${propX}, 105)">
                <circle cx="0" cy="0" r="26" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="6,4" class="story-anim-ring-spin"/>
                <circle cx="0" cy="0" r="36" fill="none" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="4,4"/>
            </g>
        `;
    } else if (isClimax) {
        storyActionOverlays = `
            <!-- Panel 3: Crisis Undersea Alarm Surge Mode -->
            <rect width="400" height="220" fill="rgba(239, 68, 68, 0.16)" class="story-anim-red-alert"/>
            <path d="M ${propX} 110 L ${propX - 25} 85 L ${propX - 10} 80 L ${propX - 40} 60" stroke="#facc15" stroke-width="2.8" fill="none" class="story-anim-spark-1"/>
            <path d="M ${propX} 110 L ${propX + 30} 90 L ${propX + 15} 75 L ${propX + 45} 62" stroke="#00f0ff" stroke-width="2.5" fill="none" class="story-anim-spark-2"/>
        `;
    } else if (isResolution) {
        storyActionOverlays = `
            <!-- Panel 4: Resolution & Victory Marine Emerald Atmosphere -->
            <rect width="400" height="220" fill="rgba(34, 197, 94, 0.08)"/>
            <!-- Floating Celebratory Bubbles & Victory Stars -->
            <g class="story-anim-star-float" style="transform-origin: 150px 70px;">
                <circle cx="150" cy="65" r="4" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>
            </g>
            <g class="story-anim-star-float" style="transform-origin: 220px 48px; animation-delay: 0.7s;">
                <circle cx="220" cy="45" r="3.5" fill="#facc15" filter="drop-shadow(0 0 6px #facc15)"/>
            </g>
            <circle cx="175" cy="50" r="2.5" fill="#22c55e" class="story-anim-star-float"/>
            <circle cx="260" cy="65" r="3.0" fill="#67e8f9" class="story-anim-star-float"/>
        `;
    }

    // Two-Phase Marine Mystery Twist Overlay
    twistOverlay = renderTwilightTwistOverlay(twist, panelIdx);

    return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            ${bgGraphic}
            ${pedestalGraphic}
            ${heroShadow}
            ${propShadow}
            ${propGraphic}
            ${charGraphic}
            ${storyActionOverlays}
            ${twistOverlay}
        </svg>
    `;
}

// --------------------------------------------------------------------------
// CARTRIDGE REGISTRATION INTO STORY BUILDER REGISTRY
// --------------------------------------------------------------------------
if (typeof registerStoryUniverse === 'function') {
    registerStoryUniverse('advanced', TWILIGHT_SANCTUARY_UNIVERSE);
}
if (typeof registerStoryComicRenderer === 'function') {
    registerStoryComicRenderer('advanced', renderAdvancedComicSVG);
    registerStoryComicRenderer('storyboard_1', renderAdvancedComicSVG);
    registerStoryComicRenderer('twilight_sanctuary', renderAdvancedComicSVG);
}
if (typeof window !== 'undefined') {
    window.TWILIGHT_SANCTUARY_UNIVERSE = TWILIGHT_SANCTUARY_UNIVERSE;
    window.Storyboard1_Advanced = TWILIGHT_SANCTUARY_UNIVERSE;
    window.renderAdvancedComicSVG = renderAdvancedComicSVG;
    window.generateAdvancedStoryPanels = generateAdvancedStoryPanels;
}
