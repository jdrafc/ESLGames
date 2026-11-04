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
            // Handheld UV Light Scanner
            propGraphic = `
                <rect x="-14" y="-7" width="28" height="14" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.8"/>
                <ellipse cx="14" cy="0" rx="3" ry="6" fill="#a855f7" stroke="#c084fc" stroke-width="1.2"/>
                <polygon points="17,-5 42,-14 42,14 17,5" fill="rgba(168, 85, 247, 0.28)" class="story-anim-neon-line"/>
                <circle cx="-5" cy="0" r="3" fill="#00f0ff" class="story-anim-led-1"/>
                <line x1="-12" y1="4" x2="-2" y2="4" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
            `;
            break;
        case 'specimen_capsule':
            // Glowing Bioluminescent Coral Specimen Jar
            propGraphic = `
                <rect x="-10" y="-16" width="20" height="32" rx="6" fill="rgba(6, 182, 212, 0.25)" stroke="#38bdf8" stroke-width="2"/>
                <rect x="-8" y="-19" width="16" height="5" rx="1.5" fill="#334155" stroke="#64748b" stroke-width="1.2"/>
                <path d="M 0 10 Q -4 0 -2 -8 Q 4 -4 0 10 Z" fill="#ec4899" filter="drop-shadow(0 0 6px #ec4899)"/>
                <circle cx="-2" cy="-2" r="2" fill="#00f0ff" class="story-anim-led-1"/>
                <circle cx="3" cy="4" r="2.5" fill="#facc15" class="story-anim-led-2"/>
            `;
            break;
        case 'sonar_beacon':
            // Torpedo-shaped Acoustic Sonar Pinger
            propGraphic = `
                <path d="M -16 -6 L 12 -6 Q 18 0 12 6 L -16 6 Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.8"/>
                <polygon points="-16,-6 -22,-10 -22,10 -16,6" fill="#b45309"/>
                <circle cx="6" cy="0" r="3" fill="#00f0ff" class="story-anim-led-1"/>
                <circle cx="16" cy="0" r="10" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3" class="story-anim-ring-spin"/>
            `;
            break;
        case 'sample_corer':
            // Marine Sediment Core Sampler Tube
            propGraphic = `
                <rect x="-6" y="-18" width="12" height="36" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.8"/>
                <rect x="-4" y="-14" width="8" height="6" fill="#b45309"/>
                <rect x="-4" y="-8" width="8" height="8" fill="#64748b"/>
                <rect x="-4" y="0" width="8" height="12" fill="#15803d"/>
                <polygon points="-8,18 8,18 0,25" fill="#475569" stroke="#334155" stroke-width="1"/>
            `;
            break;
        case 'ocean_slate':
            // Waterproof Buoyant Digital Tablet
            propGraphic = `
                <rect x="-15" y="-11" width="30" height="22" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                <rect x="-12" y="-8" width="24" height="16" rx="1" fill="#0369a1"/>
                <polyline points="-10,2 -4,-4 2,4 10,-2" fill="none" stroke="#22c55e" stroke-width="1.5"/>
                <circle cx="8" cy="-5" r="1.5" fill="#facc15"/>
            `;
            break;
        case 'laser_rangefinder':
            // Dual Green Bathymetric Laser Gauge
            propGraphic = `
                <rect x="-14" y="-8" width="28" height="16" rx="3" fill="#334155" stroke="#64748b" stroke-width="1.8"/>
                <circle cx="10" cy="-3" r="2.5" fill="#10b981"/>
                <circle cx="10" cy="3" r="2.5" fill="#10b981"/>
                <line x1="12" y1="-3" x2="36" y2="-3" stroke="#22c55e" stroke-width="1.8" class="story-anim-beam-connect"/>
                <line x1="12" y1="3" x2="36" y2="3" stroke="#22c55e" stroke-width="1.8" class="story-anim-beam-connect"/>
            `;
            break;

        // --- SHELLY'S PROPS (6) ---
        case 'ancient_coin':
            // Shimmering Pirate Gold Doubloon
            propGraphic = `
                <circle cx="0" cy="0" r="14" fill="#facc15" stroke="#d97706" stroke-width="2.2" filter="drop-shadow(0 0 6px #facc15)"/>
                <circle cx="0" cy="0" r="10" fill="none" stroke="#b45309" stroke-width="1.5" stroke-dasharray="3,2"/>
                <polygon points="0,-7 3,-2 8,-2 4,2 6,7 0,4 -6,7 -4,2 -8,-2 -3,-2" fill="#ca8a04"/>
            `;
            break;
        case 'glowing_pearl':
            // Giant Bioluminescent Pearl
            propGraphic = `
                <circle cx="0" cy="0" r="13" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" filter="drop-shadow(0 0 10px #38bdf8)"/>
                <ellipse cx="-4" cy="-4" rx="4" ry="2" fill="#ffffff" opacity="0.9" transform="rotate(-25 -4 -4)"/>
                <circle cx="0" cy="0" r="16" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,4" class="story-anim-ring-spin"/>
            `;
            break;
        case 'polished_shell':
            // Porcelain Spotted Cowrie Shell
            propGraphic = `
                <ellipse cx="0" cy="0" rx="15" ry="10" fill="#fed7aa" stroke="#f97316" stroke-width="2" transform="rotate(15)"/>
                <circle cx="-6" cy="-2" r="2" fill="#ea580c"/>
                <circle cx="0" cy="2" r="2.5" fill="#ea580c"/>
                <circle cx="6" cy="-1" r="2" fill="#ea580c"/>
                <path d="M -11 0 Q 0 -3 11 0" stroke="#c2410c" stroke-width="1.5" fill="none"/>
            `;
            break;
        case 'trench_crystal':
            // Hexagonal Abyssal Quartz Prism
            propGraphic = `
                <polygon points="0,-16 12,-7 12,9 0,18 -12,9 -12,-7" fill="rgba(0, 240, 255, 0.45)" stroke="#00f0ff" stroke-width="2" filter="drop-shadow(0 0 8px #00f0ff)"/>
                <line x1="0" y1="-16" x2="0" y2="18" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
                <line x1="-12" y1="-7" x2="12" y2="9" stroke="#ffffff" stroke-width="1.2" opacity="0.6"/>
            `;
            break;
        case 'kelp_ring':
            // Woven Natural Kelp Buoyancy Ring
            propGraphic = `
                <circle cx="0" cy="0" r="14" fill="none" stroke="#15803d" stroke-width="5" stroke-dasharray="5,3"/>
                <circle cx="0" cy="0" r="14" fill="none" stroke="#22c55e" stroke-width="2"/>
                <circle cx="10" cy="-6" r="3" fill="#facc15" class="story-anim-led-1"/>
            `;
            break;
        case 'driftwood_relic':
            // Carved Sea Turtle Driftwood Talisman
            propGraphic = `
                <path d="M -14 -6 Q 0 -10 14 -4 Q 10 8 -4 6 Q -12 8 -14 -6 Z" fill="#92400e" stroke="#78350f" stroke-width="2"/>
                <circle cx="-4" cy="0" r="3" fill="#10b981"/>
                <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#b45309" stroke-width="1.2"/>
            `;
            break;

        // --- DR. TIDE'S PROPS (6) ---
        case 'thermal_probe':
            // Deep Sea Thermal Sensor Probe
            propGraphic = `
                <rect x="-5" y="-16" width="10" height="24" rx="4" fill="#dc2626" stroke="#b91c1c" stroke-width="1.8"/>
                <line x1="0" y1="8" x2="0" y2="20" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="0" cy="20" r="3.5" fill="#ef4444"/>
                <rect x="-3" y="-12" width="6" height="12" fill="#ffffff"/>
                <line x1="0" y1="-4" x2="0" y2="4" stroke="#ef4444" stroke-width="2"/>
            `;
            break;
        case 'salinity_meter':
            // Hydro-Salinity Refractometer
            propGraphic = `
                <polygon points="-16,-5 8,-5 16,-8 16,8 8,5 -16,5" fill="#334155" stroke="#64748b" stroke-width="1.8"/>
                <circle cx="-16" cy="0" r="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                <circle cx="12" cy="0" r="3" fill="#00f0ff" class="story-anim-led-1"/>
            `;
            break;
        case 'ph_analyzer':
            // Ocean Acidity Test Chamber
            propGraphic = `
                <rect x="-11" y="-12" width="22" height="24" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="1.8"/>
                <circle cx="0" cy="-1" r="7" fill="#10b981" filter="drop-shadow(0 0 6px #10b981)"/>
                <text x="0" y="2" font-size="5" font-weight="900" fill="#ffffff" text-anchor="middle">8.1</text>
            `;
            break;
        case 'current_drifter':
            // Buoyant Current Drifter Sphere
            propGraphic = `
                <circle cx="0" cy="0" r="14" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
                <line x1="0" y1="-14" x2="0" y2="-22" stroke="#475569" stroke-width="2"/>
                <circle cx="0" cy="-23" r="2.5" fill="#ef4444" class="story-anim-led-1"/>
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#ffffff" stroke-width="1.5"/>
            `;
            break;
        case 'plankton_net':
            // Fine Mesh Plankton Collector Cone
            propGraphic = `
                <circle cx="-10" cy="0" r="8" fill="none" stroke="#0284c7" stroke-width="2.5"/>
                <polygon points="-10,-8 14,0 -10,8" fill="rgba(255,255,255,0.3)" stroke="#bae6fd" stroke-width="1.2" stroke-dasharray="2,2"/>
                <circle cx="14" cy="0" r="3" fill="#22c55e" class="story-anim-led-2"/>
            `;
            break;
        case 'sub_bottom_profiler':
            // Acoustic Bedrock Disc Transmitter
            propGraphic = `
                <ellipse cx="0" cy="0" rx="16" ry="10" fill="#475569" stroke="#6366f1" stroke-width="2"/>
                <ellipse cx="0" cy="0" rx="9" ry="5" fill="#6366f1"/>
                <line x1="0" y1="5" x2="0" y2="18" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,2" class="story-anim-neon-line"/>
            `;
            break;

        // --- KAI'S PROPS (6) ---
        case 'hydro_thruster':
            // Handheld Sea Scooter Propeller
            propGraphic = `
                <rect x="-14" y="-8" width="28" height="16" rx="4" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
                <circle cx="-14" cy="0" r="10" fill="none" stroke="#facc15" stroke-width="2"/>
                <!-- Spinning 360 Propeller -->
                <g transform="translate(-14, 0)">
                    <g class="story-anim-astrolabe-spin">
                        <line x1="-8" y1="0" x2="8" y2="0" stroke="#facc15" stroke-width="2.5"/>
                        <line x1="0" y1="-8" x2="0" y2="8" stroke="#facc15" stroke-width="2.5"/>
                    </g>
                </g>
                <circle cx="6" cy="0" r="3" fill="#00f0ff" class="story-anim-led-1"/>
            `;
            break;
        case 'magnetic_grapple':
            // Pneumatic Retrieval Claw Grapple
            propGraphic = `
                <rect x="-10" y="-8" width="20" height="16" rx="3" fill="#dc2626" stroke="#b91c1c" stroke-width="1.8"/>
                <path d="M 10 -4 L 18 -10 L 22 -6 L 16 0" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                <path d="M 10 4 L 18 10 L 22 6 L 16 0" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                <circle cx="-4" cy="0" r="3" fill="#facc15"/>
            `;
            break;
        case 'crawler_drone':
            // Mini Seafloor Rover Drone
            propGraphic = `
                <rect x="-12" y="-9" width="24" height="14" rx="3" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
                <rect x="-14" y="5" width="28" height="6" rx="2" fill="#1e293b"/>
                <circle cx="-8" cy="8" r="2" fill="#64748b"/>
                <circle cx="0" cy="8" r="2" fill="#64748b"/>
                <circle cx="8" cy="8" r="2" fill="#64748b"/>
                <circle cx="10" cy="-3" r="3" fill="#00f0ff" class="story-anim-led-1"/>
            `;
            break;
        case 'pneumatic_chisel':
            // Ultrasonic Rock Chisel
            propGraphic = `
                <rect x="-14" y="-5" width="20" height="10" rx="2" fill="#475569" stroke="#64748b" stroke-width="1.8"/>
                <polygon points="6,-3 22,0 6,3" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
                <circle cx="-8" cy="0" r="2" fill="#22c55e"/>
            `;
            break;
        case 'cable_winch':
            // Motorized Titanium Cable Spool
            propGraphic = `
                <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1.8"/>
                <circle cx="0" cy="0" r="8" fill="#10b981"/>
                <line x1="0" y1="8" x2="6" y2="20" stroke="#6ee7b7" stroke-width="2"/>
            `;
            break;
        case 'beacon_buoy':
            // Emergency Inflatable Marker Buoy
            propGraphic = `
                <ellipse cx="0" cy="0" rx="14" ry="10" fill="#ea580c" stroke="#c2410c" stroke-width="2"/>
                <rect x="-3" y="-16" width="6" height="8" fill="#ffffff"/>
                <circle cx="0" cy="-18" r="3.5" fill="#facc15" class="story-anim-led-1"/>
            `;
            break;

        default:
            // Graceful Fallback
            propGraphic = `
                <rect x="-14" y="-7" width="28" height="14" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.8"/>
                <circle cx="0" cy="0" r="4" fill="#00f0ff" class="story-anim-led-1"/>
            `;
    }

    return `
        <g transform="translate(${propX}, ${propY})">
            <g class="${floatAnim}">
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
    // 1. SETTINGS BACKGROUNDS & 1:1 SIGNATURE LANDMARKS
    // --------------------------------------------------------------------------
    if (settingId === 'twilight_trench') {
        // Deep Twilight Trench: Abyssal Depths, Bioluminescent Fissures, Hydrothermal Chimney Stack
        bgGraphic = `
            <!-- Abyssal Midnight Ocean Backdrop -->
            <rect width="400" height="220" fill="#030712"/>
            <!-- Distant Deep Blue Trench Gradient -->
            <path d="M 0 0 L 400 0 L 400 135 Q 280 150 160 140 Q 60 148 0 138 Z" fill="#0f172a" opacity="0.85"/>
            <!-- Abyssal Trench Fissure Walls -->
            <polygon points="0,40 60,80 40,150 0,165" fill="#1e293b"/>
            <polygon points="400,20 340,70 360,140 400,160" fill="#1e293b"/>
            <!-- Bioluminescent Mineral Seep Highlights along Trench Wall -->
            <path d="M 15 50 Q 35 90 20 135" stroke="#00f0ff" stroke-width="1.8" fill="none" opacity="0.65" stroke-dasharray="8,4"/>
            <path d="M 385 35 Q 360 80 375 130" stroke="#a855f7" stroke-width="1.8" fill="none" opacity="0.65" stroke-dasharray="6,4"/>
            <!-- Water Rays Filtering from Distant Surface -->
            <polygon points="120,0 170,0 240,175 180,175" fill="rgba(56, 189, 248, 0.05)" class="story-anim-water-rays"/>
            <polygon points="260,0 300,0 350,175 300,175" fill="rgba(6, 182, 212, 0.05)" class="story-anim-water-rays"/>
            <!-- Deep Seafloor Silt Baseline at Y = 175 -->
            <path d="M 0 165 Q 120 172 240 168 T 400 166 L 400 220 L 0 220 Z" fill="#0b1329"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#1e293b" stroke-width="2"/>
        `;
        // 1:1 Signature Landmark: Hydrothermal Chimney Stack
        pedestalGraphic = `
            <g id="vent_stack" transform="translate(${pedestalX}, ${groundY})">
                <!-- Basalt Chimney Base -->
                <path d="M -22 0 L -14 -42 L 14 -42 L 22 0 Z" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <ellipse cx="0" cy="-42" rx="14" ry="5" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
                <!-- Mineral Veins (Pyrite Gold & Copper) -->
                <path d="M -8 -38 L -4 -15 L 2 -8" stroke="#facc15" stroke-width="1.5" fill="none"/>
                <path d="M 6 -36 L 10 -20 L 4 -4" stroke="#ea580c" stroke-width="1.5" fill="none"/>
                <!-- Gentle Ambient Thermal Vent Plume -->
                <g class="story-anim-smoker-billow">
                    <circle cx="0" cy="-48" r="8" fill="rgba(51, 65, 85, 0.5)"/>
                    <circle cx="2" cy="-60" r="12" fill="rgba(71, 85, 105, 0.35)"/>
                </g>
            </g>
        `;
    } else if (settingId === 'kelp_forest') {
        // Giant Kelp Sanctuary: Swaying Emerald Kelp Canopy, Dappled Sunlight, Ancient Stone Mooring Anchor
        bgGraphic = `
            <!-- Emerald Twilight Deep Sea Gradient -->
            <rect width="400" height="220" fill="#042f2e"/>
            <path d="M 0 0 L 400 0 L 400 130 Q 260 145 130 135 L 0 140 Z" fill="#064e3b" opacity="0.8"/>
            <!-- Towering Giant Kelp Ribbons Swaying with Current -->
            <g class="story-anim-branch-sway" style="transform-origin: 40px 175px;">
                <path d="M 35 175 Q 50 110 30 50 Q 45 10 38 0" stroke="#059669" stroke-width="10" fill="none" opacity="0.85"/>
                <ellipse cx="44" cy="115" rx="14" ry="6" fill="#10b981" transform="rotate(-25 44 115)"/>
                <ellipse cx="26" cy="65" rx="16" ry="7" fill="#10b981" transform="rotate(30 26 65)"/>
            </g>
            <g class="story-anim-branch-sway" style="transform-origin: 360px 175px; animation-delay: 1.2s;">
                <path d="M 365 175 Q 350 100 370 45 Q 355 10 360 0" stroke="#059669" stroke-width="11" fill="none" opacity="0.85"/>
                <ellipse cx="352" cy="120" rx="15" ry="7" fill="#10b981" transform="rotate(25 352 120)"/>
                <ellipse cx="376" cy="70" rx="14" ry="6" fill="#10b981" transform="rotate(-30 376 70)"/>
            </g>
            <!-- Gentle Upward Kelp Oxygen Bubbles -->
            <circle cx="55" cy="110" r="2.5" fill="rgba(255,255,255,0.6)" class="story-anim-bubble-1"/>
            <circle cx="345" cy="90" r="3.0" fill="rgba(255,255,255,0.6)" class="story-anim-bubble-2"/>
            <!-- Sandy Seabed Baseline with Shell Shell Fragment Texture -->
            <path d="M 0 166 Q 140 172 280 168 T 400 167 L 400 220 L 0 220 Z" fill="#064e3b"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#047857" stroke-width="2"/>
        `;
        // 1:1 Signature Landmark: Emerald Kelp Holdfast Rock & Canopy Spire (Zero Out-of-Place Anchors)
        pedestalGraphic = `
            <g id="kelp_holdfast" transform="translate(${pedestalX}, ${groundY})">
                <!-- Living Granite Seafloor Holdfast Rock -->
                <path d="M -26 0 Q -30 -16 -16 -24 Q 0 -28 16 -22 Q 28 -14 26 0 Z" fill="#064e3b" stroke="#047857" stroke-width="2"/>
                <!-- Encrusted Starfish & Coral Anemones on Rock -->
                <polygon points="-16,-12 -12,-16 -14,-10 -18,-8 -13,-6" fill="#f97316"/>
                <circle cx="14" cy="-8" r="3.5" fill="#ec4899" filter="drop-shadow(0 0 4px #f472b6)"/>
                <circle cx="0" cy="-14" r="3" fill="#a855f7"/>
                <!-- Towering Emerald Kelp Stems Rising from Holdfast -->
                <g class="story-anim-branch-sway" style="transform-origin: 0px -20px;">
                    <path d="M -8 -20 Q -18 -45 -10 -75 Q -5 -95 -8 -110" stroke="#059669" stroke-width="6" fill="none" stroke-linecap="round"/>
                    <path d="M 6 -20 Q 16 -50 8 -80 Q 2 -100 6 -115" stroke="#10b981" stroke-width="5" fill="none" stroke-linecap="round"/>
                    <!-- Glowing Golden-Emerald Kelp Gas Bladders (Bulbs) & Fronds -->
                    <ellipse cx="-12" cy="-55" rx="6" ry="12" fill="#34d399" opacity="0.85" transform="rotate(-20 -12 -55)"/>
                    <ellipse cx="12" cy="-60" rx="6" ry="14" fill="#34d399" opacity="0.85" transform="rotate(25 12 -60)"/>
                    <ellipse cx="-8" cy="-90" rx="5" ry="11" fill="#6ee7b7" opacity="0.9" transform="rotate(-15 -8 -90)"/>
                    <ellipse cx="6" cy="-95" rx="5" ry="12" fill="#6ee7b7" opacity="0.9" transform="rotate(20 6 -95)"/>
                    <!-- Bioluminescent Spore Glow on Kelp Fronds -->
                    <circle cx="-12" cy="-55" r="2.5" fill="#ffffff" class="story-anim-led-1"/>
                    <circle cx="12" cy="-60" r="2.5" fill="#ffffff" class="story-anim-led-2"/>
                </g>
            </g>
        `;
    } else if (settingId === 'sunken_dome') {
        // Sunken Research Station: Geodesic Laboratory Dome, Titanium Air-Lock Hatch, Underwater Gantry
        bgGraphic = `
            <!-- Deep Subsea Trench Horizon -->
            <rect width="400" height="220" fill="#0f172a"/>
            <!-- Distant Submerged Laboratory Bulkhead Structure -->
            <path d="M 0 0 L 400 0 L 400 120 L 320 125 L 240 115 L 0 125 Z" fill="#1e293b" opacity="0.75"/>
            <!-- Structural Gantry Beams & Yellow Warning Chevrons -->
            <line x1="0" y1="28" x2="400" y2="28" stroke="#334155" stroke-width="4"/>
            <line x1="0" y1="36" x2="400" y2="36" stroke="#facc15" stroke-width="2" stroke-dasharray="14,10"/>
            <!-- Glowing Laboratory Dome Observation Portholes -->
            <circle cx="70" cy="75" r="18" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
            <circle cx="70" cy="75" r="14" fill="#0284c7" opacity="0.6"/>
            <circle cx="70" cy="75" r="4" fill="#00f0ff" class="story-anim-led-1"/>
            <!-- Station Seafloor Baseline with Metal Decking at Y = 175 -->
            <rect x="0" y="168" width="400" height="52" fill="#1e293b"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#38bdf8" stroke-width="2.5" class="story-anim-neon-line"/>
        `;
        // 1:1 Signature Landmark: Heavy Titanium Station Mooring Anchor (Matching ⚓ Button Icon 1:1)
        pedestalGraphic = `
            <g id="station_anchor" transform="translate(${pedestalX}, ${groundY})">
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
                <circle cx="0" cy="-54" r="3" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-1"/>
                <circle cx="-24" cy="-3" r="2.5" fill="#22c55e" class="story-anim-led-2"/>
                <circle cx="24" cy="-3" r="2.5" fill="#ef4444" class="story-anim-led-3"/>
            </g>
        `;
    } else {
        // Default: Azure Coral Reef: Bioluminescent Coral Arch, Magenta Polyps, Turquoise Water Rays
        bgGraphic = `
            <!-- Deep Azure Ocean Gradient Backdrop -->
            <rect width="400" height="220" fill="#082f49"/>
            <!-- Mid-Depth Coral Reef Ridges (X=0 to 400) -->
            <path d="M 0 135 Q 80 120 180 132 Q 280 118 400 130 L 400 175 L 0 175 Z" fill="#0369a1" opacity="0.6"/>
            <!-- Piercing Underwater Sun Rays -->
            <polygon points="60,0 110,0 180,175 130,175" fill="rgba(56, 189, 248, 0.08)" class="story-anim-water-rays"/>
            <polygon points="220,0 270,0 330,175 280,175" fill="rgba(56, 189, 248, 0.08)" class="story-anim-water-rays"/>
            <!-- Bioluminescent Coral Branching in Background -->
            <g class="story-anim-coral-sway-left">
                <path d="M 25 175 Q 35 125 15 95 Q 35 105 40 175" fill="#ec4899" opacity="0.85"/>
                <circle cx="15" cy="95" r="4" fill="#f472b6" filter="drop-shadow(0 0 6px #ec4899)"/>
            </g>
            <g class="story-anim-coral-sway-right">
                <path d="M 375 175 Q 360 120 380 90 Q 365 110 360 175" fill="#06b6d4" opacity="0.85"/>
                <circle cx="380" cy="90" r="4.5" fill="#67e8f9" filter="drop-shadow(0 0 6px #00f0ff)"/>
            </g>
            <!-- Sandy Seabed Baseline with Bioluminescent Coral Shells at Y = 175 -->
            <path d="M 0 166 Q 100 172 200 168 T 400 166 L 400 220 L 0 220 Z" fill="#0c4a6e"/>
            <line x1="0" y1="175" x2="400" y2="175" stroke="#0284c7" stroke-width="2"/>
        `;
        // 1:1 Signature Landmark: Bioluminescent Brain Coral Arch
        pedestalGraphic = `
            <g id="coral_arch" transform="translate(${pedestalX}, ${groundY})">
                <!-- Brain Coral Arch Outer Cavern Shape -->
                <path d="M -28 0 C -32 -26 -16 -46 0 -46 C 16 -46 32 -26 28 0 C 18 -12 12 -28 0 -28 C -12 -28 -18 -12 -28 0 Z" fill="#701a75" stroke="#a21caf" stroke-width="2"/>
                <!-- Bioluminescent Glowing Coral Polyps (Cyan & Magenta) -->
                <circle cx="-16" cy="-34" r="3.5" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-1"/>
                <circle cx="0" cy="-42" r="4" fill="#f472b6" filter="drop-shadow(0 0 6px #ec4899)" class="story-anim-led-2"/>
                <circle cx="16" cy="-34" r="3.5" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-led-3"/>
                <!-- Ambient Water Grotto Ripple -->
                <ellipse cx="0" cy="-14" rx="12" ry="5" fill="rgba(6, 182, 212, 0.18)" class="story-anim-ring-spin"/>
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
