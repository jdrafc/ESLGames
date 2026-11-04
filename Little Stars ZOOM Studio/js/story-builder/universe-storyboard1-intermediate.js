/* ==========================================================================
   STORY BUILDER CARTRIDGE: THE SECRET OF THE QUANTUM KEY (INTERMEDIATE)
   Storyboard 1 — 4 Distinct Settings & 4 Character Archetypes (6 Props Each)
   Heroes: 👩‍🔬 Dr. Eve (Scientist), 👦 Cadet Leo (Cadet), 🐕 Rover (Cyber Dog), 👨‍🚀 Vance (Commander)
   ========================================================================== */

const QUANTUM_CHARACTER_PROPS = {
    dr_eve: [
        { id: 'quantum_key', name: 'The Quantum Key', icon: '🔑', color: '#38bdf8', desc: "Humming metallic key pulsing with soft blue quantum energy" },
        { id: 'crystal_core', name: 'Crystal Matrix Core', icon: '💎', color: '#00f0ff', desc: "Resonating quartz plasma core storing encrypted quantum starmaps" },
        { id: 'tuning_fork', name: 'Harmonic Tuning Fork', icon: '🔱', color: '#38bdf8', desc: "Acoustic resonance fork calibrating quantum frequency waves" },
        { id: 'spectrometer', name: 'Prism Spectrometer', icon: '🔬', color: '#10b981', desc: "Handheld prism spectrometer analyzing laser emissions and energy spectra" },
        { id: 'holo_pad', name: 'Holo-Data Tablet', icon: '📱', color: '#818cf8', desc: "Translucent glass datapad projecting real-time orbital telemetry" },
        { id: 'laser_wand', name: 'Laser Frequency Wand', icon: '🪄', color: '#f43f5e', desc: "Precision laser calibration wand for aligning quantum containment fields" }
    ],
    get dr_aris() { return this.dr_eve; },
    leo: [
        { id: 'data_chip', name: 'Encoded Memory Chip', icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><rect x="5" y="5" width="14" height="14" rx="2" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/><rect x="8.5" y="8.5" width="7" height="7" rx="1" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><circle cx="12" cy="12" r="1.5" fill="#00f0ff"/><line x1="8.5" y1="2" x2="8.5" y2="5" stroke="#f59e0b" stroke-width="2"/><line x1="12" y1="2" x2="12" y2="5" stroke="#f59e0b" stroke-width="2"/><line x1="15.5" y1="2" x2="15.5" y2="5" stroke="#f59e0b" stroke-width="2"/><line x1="8.5" y1="19" x2="8.5" y2="22" stroke="#f59e0b" stroke-width="2"/><line x1="12" y1="19" x2="12" y2="22" stroke="#f59e0b" stroke-width="2"/><line x1="15.5" y1="19" x2="15.5" y2="22" stroke="#f59e0b" stroke-width="2"/><line x1="2" y1="8.5" x2="5" y2="8.5" stroke="#f59e0b" stroke-width="2"/><line x1="2" y1="12" x2="5" y2="12" stroke="#f59e0b" stroke-width="2"/><line x1="2" y1="15.5" x2="5" y2="15.5" stroke="#f59e0b" stroke-width="2"/><line x1="19" y1="8.5" x2="22" y2="8.5" stroke="#f59e0b" stroke-width="2"/><line x1="19" y1="12" x2="22" y2="12" stroke="#f59e0b" stroke-width="2"/><line x1="19" y1="15.5" x2="22" y2="15.5" stroke="#f59e0b" stroke-width="2"/></svg>`, color: '#f59e0b', desc: "Modern solid-state silicon microchip holding encrypted lunar outpost codes" },
        { id: 'tricorder', name: 'Cadet Tricorder Scanner', icon: '📟', color: '#38bdf8', desc: "Rugged portable sensor device scanning radiation and magnetic anomalies" },
        { id: 'beacon', name: 'Signal Pulse Beacon', icon: '🚨', color: '#ef4444', desc: "Chirping pulse beacon sending automated emergency coordinate pings" },
        { id: 'plasma_torch', name: 'Explorer Plasma Torch', icon: '🔦', color: '#facc15', desc: "High-intensity focused plasma light beam cutting through lunar shadows" },
        { id: 'compass', name: 'Solar Gyro Compass', icon: '🧭', color: '#10b981', desc: "Gimbaled planetary navigation compass tracking solar magnetic poles" },
        { id: 'magnetic_tether', name: 'Zero-G Magnetic Tether', icon: '🧲', color: '#8b5cf6', desc: "Coiled titanium safety line with locking magnetic latch clamps" }
    ],
    rover: [
        { id: 'cyber_bone', name: 'Cyber Bone Power Cell', icon: '🦴', color: '#e2e8f0', desc: "Chrome-plated rechargeable lithium-quantum battery bone for cyber canines" },
        { id: 'ping_disc', name: 'Quantum Radar Ping Disc', icon: '🛸', color: '#38bdf8', desc: "High-frequency spinning tracking disc for zero-gravity retrieval drills" },
        { id: 'squeak_beacon', name: 'Sub-Sonic Squeak Beacon', icon: '🔊', color: '#facc15', desc: "Rubber-coated acoustic beacon emitting canine-frequency sonar pulses" },
        { id: 'tug_cable', name: 'Titanium Tug Cable', icon: '🪢', color: '#0284c7', desc: "Braided nano-fiber safety cable built for robotic strength and pulling" },
        { id: 'holo_treat', name: 'Holo-Treat Pellet Pouch', icon: '✨', color: '#f59e0b', desc: "Dispenser releasing glowing synthesized nutrient pellets on success" },
        { id: 'rover_probe', name: 'Robotic Sensor Arm Probe', icon: '🦾', color: '#10b981', desc: "Articulated magnetic sensor arm probe for retrieving tight components" }
    ],
    vance: [
        { id: 'satellite', name: 'Satellite Uplink Turret', icon: '📡', color: '#38bdf8', desc: "High-gain parabolic transceiver dish aligning deep-space comms arrays" },
        { id: 'battery', name: 'Quantum Battery Core', icon: '🔋', color: '#8b5cf6', desc: "Heavy industrial plasma power canister re-energizing station shield grids" },
        { id: 'lunar_drive', name: 'Lunar Flight Data Drive', icon: '💽', color: '#f59e0b', desc: "Shielded gold flight-recorder module logging shuttle telemetry" },
        { id: 'radio_comm', name: 'Tactical Radio Transceiver', icon: '📻', color: '#10b981', desc: "Rugged sub-orbital transceiver linking the outpost to command base" },
        { id: 'override_card', name: 'Airlock Security Keycard', icon: '💳', color: '#ef4444', desc: "Encrypted magnetic keycard for manual airlock and blast-door override" },
        { id: 'calibrator', name: 'Satellite Calibration Disc', icon: '💿', color: '#facc15', desc: "Precision laser-etched reflective disc calibrating antenna angles" }
    ]
};

/* ==========================================================================
   INTERMEDIATE SETTING LANDMARKS (1:1 EXCLUSIVE SIGNATURE HARDWARE)
   ========================================================================== */

function getQuantumSettingLandmark(settingId) {
    switch (settingId) {
        case 'lunar_outpost':
            return {
                id: 'lunar_outpost',
                name: "the Lunar Moon Outpost",
                target: 'the pressurized observation dome',
                shortTarget: 'the observation dome',
                prep: 'behind',
                slipPhrase: 'tumbled behind the pressurized observation dome',
                retrieveHero: 'navigated past the dome airlock, safely secured',
                retrieveDefault: 'safely recovered the prop from beside the observation dome'
            };
        case 'satellite_bay':
            return {
                id: 'satellite_bay',
                name: "the Satellite Uplink Bay",
                target: 'the parabolic satellite dish',
                shortTarget: 'the satellite dish',
                prep: 'beneath',
                slipPhrase: 'lodged beneath the satellite dish motor mount',
                retrieveHero: 'reached under the dish mount, safely secured',
                retrieveDefault: 'safely recovered the prop from beneath the satellite dish'
            };
        case 'reactor_room':
            return {
                id: 'reactor_room',
                name: "the Quantum Core Reactor",
                target: 'the blue reactor containment grid',
                shortTarget: 'the reactor grid',
                prep: 'beside',
                slipPhrase: 'slipped beside the blue reactor containment grid',
                retrieveHero: 'steered clear of the grid coils, safely secured',
                retrieveDefault: 'safely recovered the prop from beside the reactor grid'
            };
        case 'quantum_lab':
        default:
            return {
                id: 'quantum_lab',
                name: "the Quantum Energy Lab",
                target: 'the glass containment chamber',
                shortTarget: 'the glass chamber',
                prep: 'behind',
                slipPhrase: 'wedged behind the glass containment chamber',
                retrieveHero: 'reached behind the chamber pedestal, safely secured',
                retrieveDefault: 'safely recovered the prop from behind the glass chamber'
            };
    }
}

/* ==========================================================================
   DYNAMIC 4-PANEL STORY ARC GENERATOR (INTERMEDIATE LEVEL 2)
   ========================================================================== */

function generateIntermediateStoryPanels(hero, setting, prop, twist) {
    const lm = getQuantumSettingLandmark(setting ? setting.id : 'quantum_lab');
    const h = hero || { id: 'dr_eve', name: 'Dr. Eve' };
    const s = setting || { id: 'quantum_lab', name: 'the Quantum Energy Lab' };
    const p = prop || { id: 'quantum_key', name: 'The Quantum Key' };

    // Panel 1: Setting & Setup
    let p1Cap = `First, ${h.name} calibrated diagnostic monitors inside ${s.name} to inspect the ${p.name}.`;
    let p1Speech = `All diagnostic sensors in ${s.name} are aligned and recording telemetry.`;
    if (h.id === 'leo') p1Speech = `Cadet Leo reporting for duty! The ${p.name} telemetry readings are locked in.`;
    if (h.id === 'rover') p1Speech = `Beep-boop! Rover scanner confirms energy frequencies at ${s.name} are optimal.`;
    if (h.id === 'vance') p1Speech = `Command status is nominal. Stand by for the ${p.name} synchronization sequence.`;

    // Panel 2: The Discovery
    let p2Cap = `Next, the ${p.name} pulsed with vibrant quantum energy near ${lm.target}, revealing exciting new telemetry!`;
    let p2Speech = `Remarkable! Look at the waveform harmonic frequency emitting from the ${p.name}!`;
    if (h.id === 'leo') p2Speech = `Look at the crystal core! The ${p.name} is projecting encoded starmap coordinates!`;
    if (h.id === 'rover') p2Speech = `Woof-beep! High-frequency quantum radiation detected inside ${s.name}!`;
    if (h.id === 'vance') p2Speech = `Alert all stations! The ${p.name} has unlocked a confidential transmission!`;

    // Panel 3: Conflict & Twist (Climax)
    let p3Cap = twist 
        ? `Suddenly, the ${p.name} ${lm.slipPhrase}! Plus, ${twist.text}`
        : `Suddenly, an unexpected power surge rattled ${s.name} because the ${p.name} ${lm.slipPhrase}!`;
    let p3Speech = twist 
        ? `${twist.dialogue} We must stabilize ${s.name} immediately!`
        : `Hold steady! We have sixty seconds before the containment field collapses!`;
    if (!twist && h.id === 'leo') p3Speech = `The power core is fluctuating! We must reroute auxiliary shields to ${s.name}!`;
    if (!twist && h.id === 'rover') p3Speech = `Warning! System overload detected! Engaging automated cyber-damping fields!`;
    if (!twist && h.id === 'vance') p3Speech = `Emergency protocols engaged! Protect the ${p.name} and stabilize the perimeter!`;

    // Panel 4: Resolution & Mission Victory
    let p4Cap = `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, harmonized the quantum frequencies, and saved ${s.name}!`;
    let p4Speech = `Mission complete! The connection is restored and our expedition at ${s.name} is a success.`;
    if (h.id === 'leo') p4Speech = `Frequencies aligned! We saved the station and decoded the quantum secret!`;
    if (h.id === 'rover') p4Speech = `Telemetry 100% nominal! Rover tail wag-protocol initiated!`;
    if (h.id === 'vance') p4Speech = `Outstanding courage, crew. The mission at ${s.name} is completely secure.`;

    return [
        { panelIndex: 0, roleBadge: 'Setting', caption: p1Cap, speech1: p1Speech, speech2: '' },
        { panelIndex: 1, roleBadge: 'The Discovery', caption: p2Cap, speech1: p2Speech, speech2: '' },
        { panelIndex: 2, roleBadge: 'Climax & Twist', caption: p3Cap, speech1: p3Speech, speech2: '' },
        { panelIndex: 3, roleBadge: 'Resolution', caption: p4Cap, speech1: p4Speech, speech2: '' }
    ];
}

const QUANTUM_KEY_UNIVERSE = {
        id: 'storyboard_1',
        storyboardNumber: 1,
        masterTitle: 'Storyboard 1',
        level: 'intermediate',
        levelLabel: '🟡 Level 2: Intermediate',
        anchorTitle: 'The Secret of the Quantum Key',
        defaultTitle: 'The Secret of the Quantum Key',
        summary: 'Follow Dr. Eve and Leo as they decode satellite signals and explore the Lunar Outpost!',
        defaultSetting: 'quantum_lab',
        defaultChar: 'dr_eve',
        defaultSecondaryChar: 'leo',
        defaultProp: 'quantum_key',
        settings: [
            { id: 'quantum_lab', name: 'Quantum Energy Lab', icon: '🔬', desc: 'Glass chamber, waveform monitors, viewport window & console' },
            { id: 'lunar_outpost', name: 'Lunar Moon Outpost', icon: '🌕', desc: 'Pressurized dome station on the Moon surface with Earth in the sky' },
            { id: 'satellite_bay', name: 'Satellite Uplink Bay', icon: '🛰️', desc: 'Solar array deck aligning long-distance communications dishes' },
            { id: 'reactor_room', name: 'Quantum Core Reactor', icon: '⚡', desc: 'Resonating chamber housing the main blue energy containment grid' }
        ],
        characters: [
            { id: 'dr_eve', name: 'Dr. Eve', icon: '👩‍🔬', avatar: '👩‍🔬', role: 'Chief Scientist', desc: 'Wise mentor and chief scientist who decoded the quantum key' },
            { id: 'leo', name: 'Leo the Cadet', icon: '👦', avatar: '👦', role: 'Space Apprentice', desc: 'Curious student with communicator watch and keen eyes' },
            { id: 'rover', name: 'Rover the Cyber Dog', icon: '🐕', avatar: '🐶', role: 'Tech Scout', desc: 'Robotic canine equipped with a quantum frequency scanner' },
            { id: 'vance', name: 'Commander Vance', icon: '👨‍🚀', avatar: '👨‍🚀', role: 'Outpost Chief', desc: 'Lunar Outpost commander waiting for satellite alignment' }
        ],
        props: QUANTUM_CHARACTER_PROPS.dr_eve,
        getPropsForCharacter: function(charId) {
            if (charId === 'dr_aris' || charId === 'dr_eve') return QUANTUM_CHARACTER_PROPS.dr_eve;
            return QUANTUM_CHARACTER_PROPS[charId] || QUANTUM_CHARACTER_PROPS.dr_eve;
        },
        generateStoryPanels: generateIntermediateStoryPanels,
        readingVocab: [
            { word: 'quantum', source: 'Reading Lab', def: 'A tiny unit of energy in modern physics ⚡.' },
            { word: 'satellite', source: 'Reading Lab', def: 'A machine orbiting around a planet to send signals 🛰️.' },
            { word: 'encoded', source: 'Reading Lab', def: 'Written in a secret code to keep data safe 🔒.' },
            { word: 'chamber', source: 'Reading Lab', def: 'A secure transparent room or glass enclosure 🧪.' },
            { word: 'signals', source: 'Reading Lab', def: 'Waves of radio or light carrying messages across space 📡.' },
            { word: 'aligned', source: 'Reading Lab', def: 'Adjusted into exact position to work properly 📐.' }
        ],
        morphology: [
            { word: 'Exploration', cat: 'tion', suffix: '-tion (Act of)', def: 'The act of traveling across space to study unknown regions.' },
            { word: 'Invention', cat: 'tion', suffix: '-tion (Result of)', def: 'A newly created scientific machine like the Quantum Key.' },
            { word: 'Protection', cat: 'tion', suffix: '-tion (Act of)', def: 'Shielding the satellite network from space radiation.' },
            { word: 'Unexpected', cat: 'un', suffix: 'un- (Not)', def: 'Happening suddenly by surprise without advance warning.' },
            { word: 'Unlock', cat: 'un', suffix: 'un- (Opposite)', def: 'To release or open a sealed data vault or chamber door.' },
            { word: 'Dangerous', cat: 'ous', suffix: '-ous (Full of)', def: 'Carrying high voltage or hazardous energy radiation.' }
        ],
        twists: [
            { id: 'encoded_warning', icon: '📡', title: 'Incoming Solar Flare!', text: 'The decoded lunar transmission warns of an incoming solar radiation storm!', dialogue: 'Leo, look at this readout! The solar flare will disable the satellite link!' },
            { id: 'key_vibrate', icon: '🔑', title: 'Quantum Key Resonance!', text: 'The crystal core of the key hums loudly and projects a glowing holographic starmap!', dialogue: 'Look at the glass chamber! The key is projecting secret coordinates!' },
            { id: 'power_drain', icon: '🚨', title: 'Station Power Surge!', text: 'A sudden electrical surge shuts off the main lights and triggers red emergency sirens!', dialogue: 'Emergency protocols engaged! We have sixty seconds before the link breaks!' },
            { id: 'robot_override', icon: '🤖', title: 'Robotic Signal Detected!', text: 'Rover detects an automated beacon signal broadcasting from the Lunar Outpost airlock!', dialogue: 'Rover picked up a transmission! Someone is locked outside the airlock!' }
        ],
        templates: [
            {
                panelIndex: 0,
                role: '1. Setting & Intro',
                roleBadge: 'Setting',
                starters: ['First,', 'Early that morning,', 'Inside the quantum lab,'],
                defaultCaption: "First, Dr. Eve and Leo calibrated the satellite receiver inside the high-tech lab.",
                defaultSpeech: "All satellite signals across the solar system are aligned and humming."
            },
            {
                panelIndex: 1,
                role: '2. The Event (Discovery)',
                roleBadge: 'The Discovery',
                starters: ['Next,', 'Shortly after,', 'While monitoring the chamber,'],
                defaultCaption: "Next, the glowing Quantum Key inside the glass chamber pulsed with vibrant blue light.",
                defaultSpeech: "Dr. Eve, the crystal core is humming at maximum frequency!"
            },
            {
                panelIndex: 2,
                role: '3. Conflict & Twist',
                roleBadge: 'Climax & Twist',
                starters: ['Suddenly,', 'Unexpectedly,', 'Without warning,'],
                connectors: ['because', 'but', 'so', 'although'],
                defaultCaption: "Suddenly, an encoded alarm echoed from the Lunar Outpost because station power surged!",
                defaultSpeech: "Emergency alert! We must stabilize the satellite relay immediately!"
            },
            {
                panelIndex: 3,
                role: '4. The Resolution',
                roleBadge: 'Resolution',
                starters: ['In the end,', 'Finally,', 'After quick thinking,'],
                defaultCaption: "In the end, Leo and Dr. Eve aligned the quantum frequencies, saving the outpost.",
                defaultSpeech: "The connection is restored! The lunar mission is completely safe."
            }
        ]
};

function renderQuantumCharacter(charId, charX, groundY, pose = 'exploring', isSecondary = false) {
    const scaleFactor = isSecondary ? '0.88' : '1.0';
    // Strict adherence to 6 steps rule across all 4 story scenes: always use story-anim-walk-6steps on root group
    const animClass = 'story-anim-walk-6steps';

    if (charId === 'leo') {
        const isExploring = (pose === 'exploring');
        const isDiscovering = (pose === 'discovering');
        const isAlarmed = (pose === 'alarmed');
        const isCelebrating = (pose === 'celebrating');

        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                    <g ${isAlarmed ? 'transform="rotate(-5)"' : ''}>
                        <!-- Left Arm -->
                        ${isCelebrating ? `
                            <path d="M-18 42 L-28 14 L-22 10 L-14 38 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                            <circle cx="-25" cy="12" r="5" fill="#fed7aa"/>
                        ` : (isAlarmed ? `
                            <path d="M-18 42 L-28 22 L-22 18 L-14 38 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                            <circle cx="-25" cy="20" r="5" fill="#fed7aa"/>
                        ` : `
                            <path d="M-18 42 L-28 58 L-22 62 L-14 48 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                            <circle cx="-25" cy="62" r="4.5" fill="#fed7aa"/>
                        `)}

                        <!-- Head with Headset & Living Bob & Expressive Cadet Face -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 18px;">
                            <!-- Chestnut Cadet Hair -->
                            <circle cx="0" cy="12" r="22" fill="#78350f"/>
                            <!-- Friendly Face -->
                            <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
                            <!-- Spiky Adventurous Bangs -->
                            <path d="M-18 9 Q-12 17 -6 9 Q0 17 6 9 Q12 17 18 9 Q14 1 0 0 Q-14 1 -18 9 Z" fill="#92400e"/>
                            <!-- Eyebrows -->
                            ${isAlarmed ? `
                                <path d="M-10 8 Q-6 13 -2 15" stroke="#78350f" stroke-width="2" fill="none" stroke-linecap="round"/>
                                <path d="M2 15 Q6 13 10 8" stroke="#78350f" stroke-width="2" fill="none" stroke-linecap="round"/>
                            ` : `
                                <path d="M-10 11 Q-6 9 -2 11" stroke="#78350f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                                <path d="M2 11 Q6 9 10 11" stroke="#78350f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                            `}
                            <!-- Eyes -->
                            ${isAlarmed ? `
                                <circle cx="-6" cy="17" r="4" fill="#1e293b"/><circle cx="-5" cy="15.5" r="1.5" fill="#ffffff"/>
                                <circle cx="6" cy="17" r="4" fill="#1e293b"/><circle cx="7" cy="15.5" r="1.5" fill="#ffffff"/>
                            ` : `
                                <circle cx="-6" cy="17.5" r="3.5" fill="#1e293b"/><circle cx="-5" cy="16" r="1.3" fill="#ffffff"/>
                                <circle cx="6" cy="17.5" r="3.5" fill="#1e293b"/><circle cx="7" cy="16" r="1.3" fill="#ffffff"/>
                            `}
                            <!-- Rosy Cheeks -->
                            <circle cx="-11" cy="23.5" r="3" fill="#fca5a5" opacity="0.6"/>
                            <circle cx="11" cy="23.5" r="3" fill="#fca5a5" opacity="0.6"/>
                            <!-- Expressive Cadet Mouth: Realistic natural mouth with clean teeth, NO red ball! -->
                            ${isAlarmed ? `
                                <ellipse cx="0" cy="27" rx="3.5" ry="4.5" fill="#450a0a" stroke="#78350f" stroke-width="1.3"/>
                                <path d="M-2.5 25 Q0 26 2.5 25" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                            ` : (isCelebrating ? `
                                <path d="M-7 23 Q0 33 7 23" stroke="#9a3412" stroke-width="2.2" fill="#450a0a" stroke-linecap="round"/>
                                <path d="M-5.5 24 Q0 28 5.5 24" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round"/>
                            ` : (isDiscovering ? `
                                <path d="M-6 24 Q0 31 6 24" stroke="#9a3412" stroke-width="2" fill="#450a0a" stroke-linecap="round"/>
                                <path d="M-5 24.5 Q0 27.5 5 24.5" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                                <path d="M-6 24 Q0 25.5 6 24" stroke="#9a3412" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                            ` : `
                                <path d="M-5 24.5 Q0 29.5 5 24.5" stroke="#9a3412" stroke-width="2" fill="#450a0a" stroke-linecap="round"/>
                                <path d="M-4 25 Q0 27 4 25" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                            `))}
                            <!-- High-Tech Cadet Headset -->
                            <path d="M-19 16 Q-19 1 0 1 Q19 1 19 16" stroke="#38bdf8" stroke-width="3" fill="none"/>
                            <rect x="-21" y="11" width="5" height="12" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                            <circle cx="18" cy="17" r="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                            <circle cx="18" cy="17" r="2.5" fill="#38bdf8"/>
                            <path d="M18 19 Q12 28 4 27" stroke="#64748b" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <circle cx="3" cy="27" r="2" fill="${isAlarmed ? '#ef4444' : '#22c55e'}" stroke="#15803d" stroke-width="0.8"/>
                        </g>

                        <!-- Flight Suit Body -->
                        <path d="M-18 40 L18 40 L15 75 L-15 75 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2.5"/>
                        <path d="M-8 40 L0 54 L8 40" stroke="#facc15" stroke-width="2.5" fill="none"/>

                        <!-- Right Arm -->
                        ${isCelebrating ? `
                            <path d="M18 42 L28 14 L22 10 L14 38 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                            <circle cx="25" cy="12" r="5" fill="#fed7aa"/>
                        ` : (isDiscovering ? `
                            <path d="M16 42 L34 35 L30 30 L12 40 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                            <rect x="28" y="30" width="10" height="7" rx="2" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
                            <ellipse cx="44" cy="26" rx="14" ry="6" fill="rgba(0,240,255,0.6)" class="story-anim-holo-pulse"/>
                        ` : (isAlarmed ? `
                            <path d="M16 42 L26 22 L20 18 L10 38 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                            <circle cx="24" cy="20" r="5" fill="#fed7aa"/>
                        ` : `
                            <path d="M16 42 L26 50 L22 56 L14 48 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
                            <rect x="22" y="48" width="10" height="7" rx="2" fill="#38bdf8"/>
                            <ellipse cx="38" cy="44" rx="14" ry="6" fill="rgba(56,189,248,0.5)" class="story-anim-holo-pulse"/>
                        `))}

                        <!-- Legs & Flight Boots firmly touching ground (groundY = 175) -->
                        <g class="story-anim-step-leg-left">
                            <rect x="-14" y="75" width="12" height="18" rx="2" fill="#0f172a"/>
                            <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="1.2"/>
                            <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#38bdf8"/>
                        </g>
                        <g class="story-anim-step-leg-right">
                            <rect x="2" y="75" width="12" height="18" rx="2" fill="#0f172a"/>
                            <path d="M2 93 L19 93 Q23 93 23 97 L23 101 L2 101 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.2"/>
                            <rect x="1" y="101" width="23" height="4" rx="1.5" fill="#38bdf8"/>
                        </g>
                    </g>
                </g>
            </g>
        `;
    }

    if (charId === 'rover') {
        const isExploring = (pose === 'exploring');
        const isDiscovering = (pose === 'discovering');
        const isAlarmed = (pose === 'alarmed');
        const isCelebrating = (pose === 'celebrating');

        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 70}) scale(${scaleFactor})" style="transform-origin: 0px 70px;">
                    <g ${isAlarmed ? 'transform="rotate(-4)"' : (isDiscovering ? 'transform="translate(10, -5)"' : '')}>
                        <rect x="-24" y="15" width="48" height="30" rx="8" fill="#475569" stroke="#94a3b8" stroke-width="2.5"/>
                        <circle cx="-8" cy="30" r="6" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                        <circle cx="10" cy="30" r="6" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                        
                        <!-- Rover Head & Visor -->
                        <rect x="18" y="6" width="24" height="24" rx="6" fill="#64748b" stroke="#cbd5e1" stroke-width="2.5"/>
                        ${isAlarmed ? `
                            <rect x="24" y="12" width="18" height="8" rx="3" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
                            <text x="33" y="18" font-size="6" font-weight="900" fill="#ffffff" text-anchor="middle">!</text>
                        ` : (isCelebrating ? `
                            <rect x="24" y="12" width="18" height="8" rx="3" fill="#06b6d4" stroke="#38bdf8" stroke-width="1.5"/>
                            <text x="33" y="18" font-size="6" font-weight="900" fill="#ffffff" text-anchor="middle">^‿^</text>
                        ` : `
                            <rect x="24" y="12" width="18" height="8" rx="3" fill="#06b6d4" stroke="#38bdf8" stroke-width="1.5" class="story-anim-visor-gleam"/>
                        `)}

                        <!-- Antenna -->
                        <line x1="28" y1="6" x2="28" y2="-8" stroke="#94a3b8" stroke-width="3"/>
                        <circle cx="28" cy="-10" r="4.5" fill="${isAlarmed ? '#ef4444' : (isCelebrating ? '#facc15' : '#38bdf8')}" class="story-anim-antenna-pulse"/>

                        <!-- Tail -->
                        <g class="${isCelebrating ? 'story-anim-rover-tail-fast' : 'story-anim-rover-tail'}" style="transform-origin: -24px 20px;">
                            <line x1="-24" y1="20" x2="-38" y2="${isAlarmed ? '28' : '4'}" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
                            <circle cx="-38" cy="${isAlarmed ? '28' : '4'}" r="5" fill="#38bdf8"/>
                        </g>

                        <!-- Rover Legs touching ground -->
                        <g class="story-anim-step-leg-left">
                            <rect x="-20" y="45" width="8" height="25" rx="3" fill="#334155"/>
                            <rect x="-6" y="45" width="8" height="25" rx="3" fill="#64748b"/>
                        </g>
                        <g class="story-anim-step-leg-right">
                            <rect x="6" y="45" width="8" height="25" rx="3" fill="#334155"/>
                            <rect x="18" y="45" width="8" height="25" rx="3" fill="#64748b"/>
                        </g>
                    </g>
                </g>
            </g>
        `;
    }

    if (charId === 'vance') {
        const isExploring = (pose === 'exploring');
        const isDiscovering = (pose === 'discovering');
        const isAlarmed = (pose === 'alarmed');
        const isCelebrating = (pose === 'celebrating');

        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                    <g ${isAlarmed ? 'transform="rotate(-5)"' : ''}>
                        <!-- Backpack -->
                        <rect x="-26" y="30" width="12" height="42" rx="4" fill="#ea580c"/>

                        <!-- Left Arm -->
                        ${isCelebrating ? `
                            <path d="M-22 46 L-32 18 L-26 14 L-16 42 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                            <circle cx="-29" cy="16" r="6" fill="#ea580c"/>
                        ` : (isAlarmed ? `
                            <path d="M-22 46 L-32 24 L-26 20 L-16 42 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                            <circle cx="-29" cy="22" r="6" fill="#ea580c"/>
                        ` : `
                            <path d="M-22 46 L-32 64 L-26 68 L-18 52 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                            <circle cx="-29" cy="68" r="6" fill="#ea580c"/>
                        `)}

                        <!-- Helmet & Living Head with Commander Vance Face Inside Visor -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 18px;">
                            <circle cx="0" cy="18" r="24" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5"/>
                            <ellipse cx="0" cy="19" rx="16.5" ry="13.5" fill="#0f172a"/>
                            <path d="M-14 18 Q-14 7 0 7 Q14 7 14 18 Q14 28 0 29 Q-14 28 -14 18 Z" fill="#334155"/>
                            <rect x="-15" y="15" width="3" height="7" rx="1" fill="#f8fafc"/>
                            <rect x="12" y="15" width="3" height="7" rx="1" fill="#f8fafc"/>
                            <circle cx="0" cy="19" r="11" fill="#fed7aa"/>
                            <path d="M-8 12 Q-4 15 0 12 Q4 15 8 12 Q4 9 0 9 Q-4 9 -8 12 Z" fill="#451a03"/>
                            
                            <!-- Eyebrows -->
                            ${isAlarmed ? `
                                <path d="M-8 11 Q-5 16 -2 17" stroke="#451a03" stroke-width="1.6" fill="none" stroke-linecap="round"/>
                                <path d="M2 17 Q5 16 8 11" stroke="#451a03" stroke-width="1.6" fill="none" stroke-linecap="round"/>
                            ` : `
                                <path d="M-8 13.5 Q-5 12 -2 13.5" stroke="#451a03" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                                <path d="M2 13.5 Q5 12 8 13.5" stroke="#451a03" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                            `}

                            <!-- Eyes -->
                            <circle cx="-4.5" cy="17" r="${isAlarmed ? '2.8' : '2.3'}" fill="#1e293b"/>
                            <circle cx="-3.8" cy="16" r="0.9" fill="#ffffff"/>
                            <circle cx="4.5" cy="17" r="${isAlarmed ? '2.8' : '2.3'}" fill="#1e293b"/>
                            <circle cx="5.2" cy="16" r="0.9" fill="#ffffff"/>
                            <circle cx="-7.5" cy="21.5" r="2" fill="#fca5a5" opacity="0.6"/>
                            <circle cx="7.5" cy="21.5" r="2" fill="#fca5a5" opacity="0.6"/>

                            <!-- Mouth (Realistic natural mouth with clean teeth, NO red ball!) -->
                            ${isAlarmed ? `
                                <ellipse cx="0" cy="24" rx="3.2" ry="4.2" fill="#450a0a" stroke="#78350f" stroke-width="1.2"/>
                                <path d="M-2.2 22.5 Q0 23.5 2.2 22.5" stroke="#ffffff" stroke-width="1" fill="none" stroke-linecap="round"/>
                            ` : (isCelebrating ? `
                                <path d="M-5 22 Q0 28 5 22" stroke="#9a3412" stroke-width="2" fill="#450a0a" stroke-linecap="round"/>
                                <path d="M-3.5 22.8 Q0 25 3.5 22.8" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round"/>
                            ` : (isDiscovering ? `
                                <path d="M-5 22 Q0 27.5 5 22" stroke="#9a3412" stroke-width="1.8" fill="#450a0a" stroke-linecap="round"/>
                                <path d="M-4 22.8 Q0 25 4 22.8" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                            ` : `
                                <path d="M-4.5 22.5 Q0 27 4.5 22.5" stroke="#9a3412" stroke-width="1.8" fill="#450a0a" stroke-linecap="round"/>
                                <path d="M-3.5 23.2 Q0 25 3.5 23.2" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                            `))}

                            <path d="M-13 21 Q-8 27 -2 25" stroke="#64748b" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                            <circle cx="-2" cy="25" r="1.3" fill="${isAlarmed ? '#ef4444' : '#22c55e'}" stroke="#15803d" stroke-width="0.6"/>

                            <!-- Visor Bubble (Warm protective astronaut visor) -->
                            <path d="M-16 13 Q0 5 16 13 Q19 28 0 29 Q-19 28 -16 13 Z" fill="${isDiscovering ? 'rgba(0, 240, 255, 0.3)' : 'rgba(250, 204, 21, 0.2)'}" stroke="#eab308" stroke-width="2" class="story-anim-visor-gleam"/>
                            <path d="M-13 12 Q-4 7 8 9" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.75" stroke-linecap="round"/>
                            <path d="M-15 16 Q-16 22 -12 26" stroke="#ffffff" stroke-width="1.3" fill="none" opacity="0.5" stroke-linecap="round"/>
                            <circle cx="11" cy="25" r="1.8" fill="#ffffff" opacity="0.6"/>
                        </g>

                        <!-- Torso Suit -->
                        <path d="M-20 44 L20 44 L16 80 L-16 80 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2.5"/>
                        <rect x="-20" y="56" width="40" height="6" fill="#ea580c"/>
                        <rect x="-10" y="48" width="20" height="15" rx="3" fill="#1e293b"/>
                        <circle cx="-4" cy="55" r="2.5" fill="${isAlarmed ? '#ef4444' : '#22c55e'}" class="story-anim-led-1"/>
                        <circle cx="4" cy="55" r="2.5" fill="${isAlarmed ? '#ef4444' : '#38bdf8'}" class="story-anim-led-3"/>

                        <!-- Right Arm -->
                        ${isCelebrating ? `
                            <path d="M20 46 L30 18 L24 14 L16 42 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                            <circle cx="27" cy="16" r="6" fill="#ea580c"/>
                        ` : (isDiscovering ? `
                            <path d="M20 46 L40 40 L36 34 L16 44 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                            <circle cx="40" cy="38" r="6" fill="#ea580c"/>
                        ` : (isAlarmed ? `
                            <path d="M20 46 L30 24 L24 20 L16 42 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                            <circle cx="27" cy="22" r="6" fill="#ea580c"/>
                        ` : `
                            <g class="story-anim-arm-6steps" style="transform-origin: 20px 48px;">
                                <path d="M20 46 L30 64 L24 68 L16 52 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
                                <circle cx="27" cy="68" r="6" fill="#ea580c"/>
                            </g>
                        `))}

                        <!-- Boots firmly on ground baseline (groundY = 175) -->
                        <g class="story-anim-step-leg-left">
                            <rect x="-16" y="80" width="13" height="14" rx="2" fill="#334155"/>
                            <path d="M-16 93 L4 93 Q8 93 8 97 L8 101 L-16 101 Z" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                            <rect x="-17" y="101" width="26" height="4" rx="1.5" fill="#0f172a"/>
                        </g>
                        <g class="story-anim-step-leg-right">
                            <rect x="3" y="80" width="13" height="14" rx="2" fill="#334155"/>
                            <path d="M3 93 L23 93 Q27 93 27 97 L27 101 L3 101 Z" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
                            <rect x="2" y="101" width="26" height="4" rx="1.5" fill="#0f172a"/>
                        </g>
                    </g>
                </g>
            </g>
        `;
    }

    // Default: Dr. Eve (Chief Scientist) — Golden-Blonde Hair matching the 👩‍🔬 Hero Avatar
    const isExploring = (pose === 'exploring');
    const isDiscovering = (pose === 'discovering');
    const isAlarmed = (pose === 'alarmed');
    const isCelebrating = (pose === 'celebrating');

    return `
        <g class="${animClass}">
            <g transform="translate(${charX}, ${groundY - 100}) scale(${scaleFactor})" style="transform-origin: 0px 100px;">
                <g ${isAlarmed ? 'transform="rotate(-4)"' : ''}>
                    <!-- Left Arm -->
                    ${isCelebrating ? `
                        <path d="M-18 40 L-28 14 L-22 10 L-14 36 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="-25" cy="12" r="5" fill="#fed7aa"/>
                    ` : (isAlarmed ? `
                        <path d="M-18 40 L-26 18 L-20 14 L-12 36 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="-23" cy="16" r="5" fill="#fed7aa"/>
                    ` : `
                        <path d="M-20 42 L-28 58 L-22 62 L-16 48 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="-25" cy="62" r="4.5" fill="#fed7aa"/>
                    `)}

                    <!-- Head with gentle life tilt & expressive scientist face -->
                    <g class="story-anim-head-bob" style="transform-origin: 0px 18px;">
                        <!-- Scientist Hair (Golden-Blonde Bob matching Dr. Eve 👩‍🔬 icon) -->
                        <circle cx="0" cy="13" r="23" fill="#d97706"/>
                        <circle cx="0" cy="13" r="21.5" fill="#facc15"/>
                        <!-- Side Hair Volume / Bob Locks -->
                        <path d="M-21 16 Q-25 32 -16 36 L-15 24 Z" fill="#d97706"/>
                        <path d="M-20 17 Q-23 31 -16 34 L-15 24 Z" fill="#facc15"/>
                        <path d="M21 16 Q25 32 16 36 L15 24 Z" fill="#d97706"/>
                        <path d="M20 17 Q23 31 16 34 L15 24 Z" fill="#facc15"/>
                        <!-- Friendly Face -->
                        <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#d97706" stroke-width="1.8"/>
                        <!-- Golden-Blonde Bangs with Sunlight Highlights -->
                        <path d="M-18 10 Q-8 18 0 8 Q8 18 18 10 Q14 2 0 1 Q-14 2 -18 10 Z" fill="#d97706"/>
                        <path d="M-17 9 Q-8 16 0 7 Q8 16 17 9 Q13 3 0 2 Q-13 3 -17 9 Z" fill="#facc15"/>
                        <path d="M-12 5 Q-6 11 0 5 Q6 11 12 5 Q9 2 0 1.5 Q-9 2 -12 5 Z" fill="#fef08a"/>
                        <!-- Intelligent, Friendly Eyes (Visible through goggles) -->
                        <circle cx="-7" cy="18" r="${isAlarmed ? '3.8' : '3.2'}" fill="#1e293b"/>
                        <circle cx="-6" cy="16.5" r="1.3" fill="#ffffff"/>
                        <circle cx="7" cy="18" r="${isAlarmed ? '3.8' : '3.2'}" fill="#1e293b"/>
                        <circle cx="8" cy="16.5" r="1.3" fill="#ffffff"/>
                        
                        <!-- Transparent Lab Goggles (Tech Blue in ALL scenes - never turning red!) -->
                        <path d="M-19 18 Q0 12 19 18" stroke="#0284c7" stroke-width="2.5" fill="none"/>
                        <rect x="-14" y="12" width="12" height="11" rx="3.5" fill="${isDiscovering ? 'rgba(0, 240, 255, 0.42)' : 'rgba(56, 189, 248, 0.28)'}" stroke="#0284c7" stroke-width="2"/>
                        <rect x="2" y="12" width="12" height="11" rx="3.5" fill="${isDiscovering ? 'rgba(0, 240, 255, 0.42)' : 'rgba(56, 189, 248, 0.28)'}" stroke="#0284c7" stroke-width="2"/>
                        <line x1="-2" y1="17" x2="2" y2="17" stroke="#0284c7" stroke-width="2"/>
                        <line x1="-11" y1="14" x2="-6" y2="19" stroke="#ffffff" stroke-width="1.4" opacity="0.8" stroke-linecap="round"/>
                        <line x1="5" y1="14" x2="10" y2="19" stroke="#ffffff" stroke-width="1.4" opacity="0.8" stroke-linecap="round"/>
                        
                        <!-- Eyebrows (Warm Golden Amber) -->
                        ${isAlarmed ? `
                            <path d="M-12 8 Q-8 13 -4 15" stroke="#b45309" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <path d="M4 15 Q8 13 12 8" stroke="#b45309" stroke-width="2" fill="none" stroke-linecap="round"/>
                        ` : `
                            <path d="M-12 10 Q-8 8 -4 10" stroke="#b45309" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                            <path d="M4 10 Q8 8 12 10" stroke="#b45309" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                        `}

                        <!-- Rosy Cheeks -->
                        <circle cx="-11" cy="25" r="3" fill="#fca5a5" opacity="0.6"/>
                        <circle cx="11" cy="25" r="3" fill="#fca5a5" opacity="0.6"/>

                        <!-- Mouth (Realistic scientist cartoon expression with clean teeth, NO red ball!) -->
                        ${isAlarmed ? `
                            <ellipse cx="0" cy="28" rx="3.5" ry="4.5" fill="#450a0a" stroke="#78350f" stroke-width="1.3"/>
                            <path d="M-2.5 26 Q0 27 2.5 26" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                        ` : (isCelebrating ? `
                            <path d="M-7 24 Q0 33 7 24" stroke="#9a3412" stroke-width="2.2" fill="#450a0a" stroke-linecap="round"/>
                            <path d="M-5.5 25 Q0 28.5 5.5 25" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round"/>
                        ` : (isDiscovering ? `
                            <path d="M-6 25 Q0 31.5 6 25" stroke="#9a3412" stroke-width="2" fill="#450a0a" stroke-linecap="round"/>
                            <path d="M-5 25.5 Q0 28 5 25.5" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                            <path d="M-6 25 Q0 26.5 6 25" stroke="#9a3412" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                        ` : `
                            <path d="M-5 25.5 Q0 30 5 25.5" stroke="#9a3412" stroke-width="2" fill="#450a0a" stroke-linecap="round"/>
                            <path d="M-4 26 Q0 27.5 4 26" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                        `))}
                    </g>

                    <!-- Lab Coat Body -->
                    <path d="M-18 40 L18 40 L15 80 L-15 80 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2.5"/>
                    <polygon points="0,40 -8,56 8,56" fill="#0284c7"/>

                    <!-- Right Arm -->
                    ${isCelebrating ? `
                        <path d="M18 40 L28 14 L22 10 L14 36 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="25" cy="12" r="5" fill="#fed7aa"/>
                    ` : (isDiscovering ? `
                        <path d="M16 42 L38 36 L34 30 L12 40 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="38" cy="34" r="5" fill="#fed7aa"/>
                    ` : (isAlarmed ? `
                        <path d="M16 42 L26 20 L20 16 L10 38 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="24" cy="18" r="5" fill="#fed7aa"/>
                    ` : `
                        <path d="M16 42 L26 50 L22 56 L14 48 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
                        <g transform="translate(20, 48)">
                            <rect x="0" y="0" width="18" height="24" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="2" class="story-anim-datapad-screen"/>
                            <line x1="3" y1="8" x2="15" y2="8" stroke="#38bdf8" stroke-width="1.5"/>
                            <line x1="3" y1="14" x2="12" y2="14" stroke="#22c55e" stroke-width="1.5"/>
                        </g>
                    `))}

                    <!-- Legs & Shoes touching ground baseline (groundY = 175) -->
                    <g class="story-anim-step-leg-left">
                        <rect x="-14" y="80" width="11" height="20" rx="3" fill="#0f172a"/>
                    </g>
                    <g class="story-anim-step-leg-right">
                        <rect x="3" y="80" width="11" height="20" rx="3" fill="#0f172a"/>
                    </g>
                </g>
            </g>
        </g>
    `;
}

/* ==========================================================================
   INTERMEDIATE LEVEL 2 STANDALONE PROP RENDERER (24 Character-Scoped Props)
   ========================================================================== */

function renderQuantumPropSVG(propId, propX, propY, isClimax, settingId) {
    let itemArt = '';

    switch (propId) {
        // --- DR. EVE (CHIEF SCIENTIST) PROPS ---
        case 'quantum_key':
            itemArt = `
                <!-- Magnetic Capsule Base Dock -->
                <rect x="-28" y="-5" width="56" height="10" rx="3" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <line x1="-24" y1="0" x2="24" y2="0" stroke="#38bdf8" stroke-width="1.5"/>
                <ellipse cx="0" cy="0" rx="20" ry="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                <!-- Quartz Containment Capsule with Breathing Shield -->
                <rect x="-24" y="-68" width="48" height="64" rx="20" fill="rgba(56, 189, 248, 0.16)" stroke="#38bdf8" stroke-width="2.5" class="story-anim-hologram-flicker"/>
                <line x1="-18" y1="-50" x2="-18" y2="-15" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/>
                <!-- Capsule Cap & Warning Status Beacon -->
                <rect x="-20" y="-76" width="40" height="9" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
                <circle cx="0" cy="-71.5" r="2.8" fill="#38bdf8" class="story-anim-led-1"/>
                <!-- Floating Quantum Key with Counter-Rotating Gyro Rings -->
                <g transform="translate(0, -36)">
                    <g class="story-anim-prop-float">
                        <!-- Primary Outer Quantum Energy Ring -->
                        <g class="story-anim-astrolabe-spin">
                            <circle cx="0" cy="0" r="18" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,3"/>
                        </g>
                        <!-- Counter-Rotating Inner Gyro Ring -->
                        <g class="story-anim-astrolabe-spin-rev">
                            <circle cx="0" cy="0" r="14" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,3"/>
                        </g>
                        <!-- Glowing Core & Star Burst -->
                        <circle cx="0" cy="-8" r="13" fill="rgba(56, 189, 248, 0.35)" class="story-anim-crystal-glow"/>
                        <polygon points="-11,-8 0,-18 11,-8 7,3 -7,3" fill="#0284c7" stroke="#38bdf8" stroke-width="2.2"/>
                        <circle cx="0" cy="-8" r="6" fill="#ffffff" filter="drop-shadow(0 0 8px #00f0ff)"/>
                        <circle cx="0" cy="-8" r="2.8" fill="#00f0ff"/>
                        <rect x="-3" y="3" width="6" height="24" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                        <line x1="0" y1="5" x2="0" y2="25" stroke="#ffffff" stroke-width="1.2"/>
                        <rect x="3" y="12" width="7" height="4" rx="1" fill="#38bdf8"/>
                        <rect x="3" y="19" width="5.5" height="3.5" rx="1" fill="#38bdf8"/>
                        <rect x="-8.5" y="16" width="5.5" height="3.5" rx="1" fill="#38bdf8"/>
                        <!-- Leaping Quantum Micro-Sparks -->
                        <circle cx="9" cy="-16" r="1.5" fill="#facc15" class="story-anim-star-twinkle-fast"/>
                        <circle cx="-9" cy="18" r="1.3" fill="#00f0ff" class="story-anim-star-twinkle-fast" style="animation-delay: 0.6s;"/>
                    </g>
                </g>
            `;
            break;

        case 'crystal_core':
            itemArt = `
                <!-- Magnetic Cradle Stand -->
                <rect x="-26" y="-5" width="52" height="10" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <polygon points="-18,-5 -8,-16 8,-16 18,-5" fill="#334155" stroke="#475569" stroke-width="1.5"/>
                <!-- Dual Orbital Resonance Rings -->
                <g transform="translate(0, -32)">
                    <g class="story-anim-astrolabe-spin">
                        <ellipse cx="0" cy="0" rx="28" ry="12" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="6,4"/>
                    </g>
                    <g class="story-anim-astrolabe-spin-rev">
                        <ellipse cx="0" cy="0" rx="20" ry="8" fill="none" stroke="#a855f7" stroke-width="1.4" stroke-dasharray="4,3"/>
                    </g>
                    <!-- Floating Crystalline Matrix Core with Shimmering Facets -->
                    <g class="story-anim-prop-float">
                        <polygon points="0,-24 16,-8 10,16 0,22 -10,16 -16,-8" fill="#00f0ff" stroke="#ffffff" stroke-width="2" filter="drop-shadow(0 0 10px #00f0ff)"/>
                        <polygon points="0,-20 12,-6 0,16 -12,-6" fill="rgba(255,255,255,0.7)"/>
                        <circle cx="0" cy="0" r="5" fill="#ffffff" class="story-anim-crystal-glow"/>
                    </g>
                    <!-- Floating Starmap Telemetry Node & Laser Link -->
                    <circle cx="22" cy="-14" r="2.8" fill="#facc15" class="story-anim-led-1"/>
                    <line x1="10" y1="-6" x2="22" y2="-14" stroke="#facc15" stroke-width="1.2" stroke-dasharray="2,2"/>
                    <!-- Ambient Matrix Sparkles -->
                    <circle cx="-18" cy="12" r="1.6" fill="#38bdf8" class="story-anim-star-twinkle-fast"/>
                </g>
            `;
            break;

        case 'tuning_fork':
            itemArt = `
                <!-- Magnetic Resonator Stand -->
                <rect x="-24" y="-5" width="48" height="9" rx="3" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <rect x="-6" y="-14" width="12" height="10" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
                <!-- Chrome Acoustic Resonance Tuning Fork Body -->
                <g transform="translate(0, -14)">
                    <!-- Handle & Digital Readout -->
                    <rect x="-4" y="-18" width="8" height="18" rx="2" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
                    <rect x="-6" y="-12" width="12" height="6" rx="1.5" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
                    <text x="0" y="-7.5" font-size="4" font-weight="900" fill="#38bdf8" text-anchor="middle">432T</text>
                    <!-- Fork Base Stem & Twin Resonating Tines -->
                    <rect x="-14" y="-24" width="28" height="6" rx="2" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5"/>
                    <!-- Left Tine with High-Frequency Jitter -->
                    <g class="story-anim-prop-wobble-play">
                        <rect x="-14" y="-54" width="6" height="32" rx="2.5" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
                    </g>
                    <!-- Right Tine with High-Frequency Jitter -->
                    <g class="story-anim-prop-wobble-play" style="animation-delay: 0.2s;">
                        <rect x="8" y="-54" width="6" height="32" rx="2.5" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
                    </g>
                    <!-- High-Frequency Electric Harmonic Arc between tines -->
                    <path d="M-8 -46 Q0 -52 8 -46" stroke="#00f0ff" stroke-width="2.2" fill="none" class="story-anim-spark-1"/>
                    <path d="M-8 -36 Q0 -30 8 -36" stroke="#38bdf8" stroke-width="1.8" fill="none" class="story-anim-spark-2"/>
                    <!-- Radiating Ultrasonic Acoustic Ripple Waves -->
                    <circle cx="-11" cy="-56" r="6" fill="none" stroke="#38bdf8" stroke-width="1.2" class="story-anim-sound-wave-ping"/>
                    <circle cx="11" cy="-56" r="6" fill="none" stroke="#38bdf8" stroke-width="1.2" class="story-anim-sound-wave-ping" style="animation-delay: 0.5s;"/>
                </g>
            `;
            break;

        case 'spectrometer':
            itemArt = `
                <!-- Slanted Spectrometer Dock -->
                <rect x="-25" y="-5" width="50" height="9" rx="3" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <rect x="-18" y="-38" width="36" height="34" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                <!-- Triangular Quartz Optical Prism Housing -->
                <polygon points="0,-32 -13,-10 13,-10" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
                <polygon points="0,-28 -9,-12 9,-12" fill="rgba(255, 255, 255, 0.5)"/>
                <!-- Incoming Focused White Laser Calibration Beam -->
                <line x1="-30" y1="-21" x2="-6" y2="-21" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" class="story-anim-laser-tracer"/>
                <!-- Refracted Shimmering Spectral Rainbow Fan Cone -->
                <g class="story-anim-hologram-flicker">
                    <line x1="6" y1="-21" x2="28" y2="-30" stroke="#8b5cf6" stroke-width="2"/>
                    <line x1="6" y1="-21" x2="30" y2="-25" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="6" y1="-21" x2="31" y2="-20" stroke="#22c55e" stroke-width="2"/>
                    <line x1="6" y1="-21" x2="30" y2="-15" stroke="#facc15" stroke-width="2"/>
                    <line x1="6" y1="-21" x2="28" y2="-10" stroke="#ef4444" stroke-width="2"/>
                </g>
                <!-- Mini Telemetry Display Screen with Active Scan Glint -->
                <rect x="-14" y="-3" width="28" height="6" rx="1.5" fill="#0f172a" stroke="#10b981" stroke-width="0.8"/>
                <text x="0" y="1.5" font-size="4" font-weight="900" fill="#10b981" text-anchor="middle" class="story-anim-gleam-sheen">SPEC // OK</text>
            `;
            break;

        case 'holo_pad':
            itemArt = `
                <!-- Tablet Angled Easel Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <path d="M-8 -4 L-4 -18 L4 -18 L8 -4 Z" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                <!-- Holo-Data Tablet Body (Translucent Beveled Glass) -->
                <g transform="translate(0, -18) rotate(-10)">
                    <rect x="-22" y="-20" width="44" height="30" rx="3" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
                    <rect x="-18" y="-17" width="36" height="24" rx="2" fill="rgba(129, 140, 248, 0.22)" stroke="#38bdf8" stroke-width="1"/>
                    <!-- Data Waveforms Streaming on Screen -->
                    <line x1="-15" y1="-10" x2="15" y2="-10" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,2" class="story-anim-data-stream-flow"/>
                    <path d="M-14 -4 Q-8 -12 -2 -4 T10 -4" stroke="#22c55e" stroke-width="1.5" fill="none" class="story-anim-laser-wave"/>
                    <!-- 3D Holographic Projected Model Floating Above Screen -->
                    <g transform="translate(0, -22)" class="story-anim-hologram-flicker">
                        <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="4,3" class="story-anim-astrolabe-spin"/>
                        <circle cx="12" cy="-4" r="3" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>
                        <circle cx="12" cy="-4" r="1.5" fill="#ffffff"/>
                        <circle cx="0" cy="0" r="4" fill="#f59e0b" class="story-anim-star-twinkle-fast"/>
                    </g>
                </g>
            `;
            break;

        case 'laser_wand':
            itemArt = `
                <!-- Magnetic Charging Cradle -->
                <rect x="-22" y="-5" width="44" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <rect x="-12" y="-12" width="24" height="8" rx="2" fill="#1e293b" stroke="#f43f5e" stroke-width="1.2"/>
                <!-- Laser Frequency Wand (Angled upward) -->
                <g transform="translate(0, -12) rotate(-18)">
                    <!-- Carbon Fiber Grip -->
                    <rect x="-25" y="-5" width="22" height="10" rx="3" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                    <line x1="-20" y1="-1" x2="-10" y2="-1" stroke="#475569" stroke-width="1"/>
                    <line x1="-20" y1="2" x2="-10" y2="2" stroke="#475569" stroke-width="1"/>
                    <!-- Precision Laser Emitter Barrel -->
                    <rect x="-3" y="-4" width="26" height="8" rx="2" fill="#475569" stroke="#f43f5e" stroke-width="1.5"/>
                    <circle cx="5" cy="0" r="2.8" fill="#f43f5e" class="story-anim-led-1"/>
                    <rect x="23" y="-3" width="6" height="6" rx="1.5" fill="#e11d48"/>
                    <!-- High-Energy Focused Ruby Laser Beam with Traveling Tracer -->
                    <line x1="29" y1="0" x2="72" y2="0" stroke="#f43f5e" stroke-width="2.8" stroke-linecap="round" filter="drop-shadow(0 0 8px #f43f5e)"/>
                    <line x1="29" y1="0" x2="72" y2="0" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" class="story-anim-laser-tracer"/>
                    <!-- Laser Focal Target Flare -->
                    <circle cx="72" cy="0" r="4" fill="#ffffff" filter="drop-shadow(0 0 8px #f43f5e)"/>
                    <circle cx="72" cy="0" r="8" fill="none" stroke="#f43f5e" stroke-width="1" class="story-anim-sound-wave-ping"/>
                </g>
            `;
            break;

        // --- CADET LEO (APPRENTICE) PROPS ---
        case 'data_chip':
            itemArt = `
                <!-- Magnetic Levitation Base (Pedestal Anti-Gravity Ring) -->
                <ellipse cx="0" cy="0" rx="24" ry="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <ellipse cx="0" cy="0" rx="16" ry="3.8" fill="#0284c7" stroke="#00f0ff" stroke-width="1.2"/>
                <circle cx="0" cy="0" r="4" fill="#00f0ff" class="story-anim-crystal-glow"/>
                <!-- Upward Anti-Gravity Forcefield Beam Elevating Chip -->
                <polygon points="-16,0 16,0 20,-16 -20,-16" fill="rgba(0, 240, 255, 0.15)"/>
                <line x1="-16" y1="0" x2="-20" y2="-16" stroke="#00f0ff" stroke-width="0.8" stroke-dasharray="2,2"/>
                <line x1="16" y1="0" x2="20" y2="-16" stroke="#00f0ff" stroke-width="0.8" stroke-dasharray="2,2"/>

                <!-- Floating Silicon Integrated Circuit Microchip (Classic IC Package) -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Left Metallic IC Pin Legs (5 Silver-Plated Pins) -->
                        <line x1="-22" y1="-14" x2="-15" y2="-14" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="-22" y1="-7" x2="-15" y2="-7" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="-22" y1="0" x2="-15" y2="0" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="-22" y1="7" x2="-15" y2="7" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="-22" y1="14" x2="-15" y2="14" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>

                        <!-- Right Metallic IC Pin Legs (5 Silver-Plated Pins) -->
                        <line x1="15" y1="-14" x2="22" y2="-14" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="15" y1="-7" x2="22" y2="-7" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="15" y1="0" x2="22" y2="0" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="15" y1="7" x2="22" y2="7" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>
                        <line x1="15" y1="14" x2="22" y2="14" stroke="#e2e8f0" stroke-width="2.2" stroke-linecap="round"/>

                        <!-- Solder Foot Pads at Pin Tips with Signal Glints -->
                        <circle cx="-22" cy="-14" r="1.2" fill="#38bdf8" class="story-anim-led-1"/>
                        <circle cx="-22" cy="0" r="1.2" fill="#00f0ff" class="story-anim-led-2"/>
                        <circle cx="-22" cy="14" r="1.2" fill="#38bdf8" class="story-anim-led-3"/>
                        <circle cx="22" cy="-7" r="1.2" fill="#facc15" class="story-anim-led-2"/>
                        <circle cx="22" cy="7" r="1.2" fill="#22c55e" class="story-anim-led-1"/>

                        <!-- Classic Black Ceramic/Epoxy Microchip Body with Top Index Notch -->
                        <path d="M-16 -18 L-4 -18 A4 4 0 0 1 4 -18 L16 -18 L16 18 L-16 18 Z" fill="#090d16" stroke="#475569" stroke-width="1.8" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.45))"/>
                        <!-- Top Beveled Edge Chamfer -->
                        <line x1="-15" y1="-17" x2="15" y2="-17" stroke="#334155" stroke-width="0.8"/>
                        <!-- Pin-1 Orientation Alignment Dot -->
                        <circle cx="-12" cy="-13" r="1.3" fill="#cbd5e1"/>

                        <!-- Central Silicon Processor Die & Polished Heat Spreader -->
                        <rect x="-10" y="-10" width="20" height="20" rx="2" fill="#1e293b" stroke="#f59e0b" stroke-width="1.4"/>
                        <!-- Gold Ground Grid Plane inside Die -->
                        <rect x="-8" y="-8" width="16" height="16" rx="1.2" fill="#0f172a" stroke="#ca8a04" stroke-width="0.8"/>

                        <!-- Laser Engraved Microchip Branding -->
                        <text x="0" y="-3.5" font-size="3.2" font-family="monospace" font-weight="900" fill="#facc15" text-anchor="middle" letter-spacing="0.4">QUANTUM</text>
                        <text x="0" y="1" font-size="2.6" font-family="monospace" font-weight="900" fill="#38bdf8" text-anchor="middle">IC-CHIP</text>
                        <text x="0" y="5.5" font-size="2.2" font-family="monospace" fill="#94a3b8" text-anchor="middle">2048-TB</text>

                        <!-- Moving Laser Glint Sheen across Silicon Die -->
                        <line x1="-7" y1="-1" x2="7" y2="-1" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" class="story-anim-gleam-sheen"/>

                        <!-- Micro-Circuit Bus Traces radiating from Die to External Pins -->
                        <path d="M-8 -6 L-12 -6 L-15 -14" stroke="#00f0ff" stroke-width="0.9" fill="none" class="story-anim-data-stream-flow"/>
                        <path d="M-8 0 L-15 0" stroke="#f59e0b" stroke-width="0.9" fill="none" class="story-anim-data-stream-flow"/>
                        <path d="M-8 6 L-12 6 L-15 14" stroke="#00f0ff" stroke-width="0.9" fill="none" class="story-anim-data-stream-flow"/>
                        <path d="M8 -6 L12 -6 L15 -14" stroke="#f59e0b" stroke-width="0.9" fill="none" class="story-anim-data-stream-flow"/>
                        <path d="M8 0 L15 0" stroke="#00f0ff" stroke-width="0.9" fill="none" class="story-anim-data-stream-flow"/>
                        <path d="M8 6 L12 6 L15 14" stroke="#f59e0b" stroke-width="0.9" fill="none" class="story-anim-data-stream-flow"/>

                        <!-- Surface-Mount Resistor Arrays on Chip Perimeter -->
                        <rect x="-14" y="12" width="2" height="1.4" fill="#ca8a04"/>
                        <rect x="12" y="12" width="2" height="1.4" fill="#ca8a04"/>
                    </g>
                </g>

                <!-- Floating Volumetric Holographic Microchip Readout -->
                <g transform="translate(0, -48)">
                    <g class="story-anim-star-float">
                        <g class="story-anim-hologram-flicker">
                            <!-- Streaming Binary / Hex Data Waves -->
                            <text x="0" y="-5" font-size="3" font-family="monospace" fill="#00f0ff" text-anchor="middle" letter-spacing="1">1011 0100 1101</text>
                            <!-- Holographic Chip Badge -->
                            <rect x="-25" y="0" width="50" height="7.5" rx="2" fill="rgba(15, 23, 42, 0.95)" stroke="#00f0ff" stroke-width="1"/>
                            <text x="0" y="5.2" font-size="3.6" font-family="monospace" font-weight="900" fill="#00f0ff" text-anchor="middle" letter-spacing="0.3">SILICON MICROCHIP</text>
                        </g>
                    </g>
                </g>
            `;
            break;

        case 'tricorder':
            itemArt = `
                <!-- Heavy Industrial Sensor Dock -->
                <rect x="-22" y="-4" width="44" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <!-- Tricorder Scanner Casing -->
                <rect x="-18" y="-42" width="36" height="38" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                <!-- Circular Radar Sweep Screen with Active Rotating Scanner Cone -->
                <g transform="translate(0, -26)">
                    <circle cx="0" cy="0" r="11" fill="#090d16" stroke="#22c55e" stroke-width="1.5"/>
                    <line x1="0" y1="-11" x2="0" y2="11" stroke="#1e293b" stroke-width="1"/>
                    <line x1="-11" y1="0" x2="11" y2="0" stroke="#1e293b" stroke-width="1"/>
                    <!-- Rotating Radar Sweep Wedge (Living Action) -->
                    <g class="story-anim-radar-sweep-cone">
                        <path d="M0 0 L8 -8 A11 11 0 0 1 11 0 Z" fill="rgba(34, 197, 94, 0.45)"/>
                        <line x1="0" y1="0" x2="11" y2="0" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/>
                    </g>
                    <circle cx="4" cy="3" r="1.5" fill="#38bdf8" class="story-anim-star-twinkle-fast"/>
                    <circle cx="-5" cy="-4" r="1.5" fill="#facc15" class="story-anim-star-twinkle-fast" style="animation-delay: 0.5s;"/>
                </g>
                <!-- Side Control Buttons & Antennae -->
                <line x1="-14" y1="-42" x2="-14" y2="-52" stroke="#94a3b8" stroke-width="2"/>
                <circle cx="-14" cy="-52" r="2.2" fill="#ef4444" class="story-anim-led-1"/>
                <line x1="14" y1="-42" x2="14" y2="-48" stroke="#94a3b8" stroke-width="1.5"/>
                <circle cx="14" cy="-48" r="1.8" fill="#38bdf8" class="story-anim-led-2"/>
                <!-- Status Readout Pill -->
                <rect x="-14" y="-12" width="28" height="6" rx="1.5" fill="#0f172a" stroke="#22c55e" stroke-width="0.8"/>
                <text x="0" y="-7.5" font-size="4" font-weight="900" fill="#22c55e" text-anchor="middle" class="story-anim-gleam-sheen">RAD // OK</text>
            `;
            break;

        case 'beacon':
            itemArt = `
                <!-- Heavy Tripod Base Mount -->
                <polygon points="0,-12 -22,-2 22,-2" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <line x1="0" y1="-12" x2="-18" y2="4" stroke="#64748b" stroke-width="2.5"/>
                <line x1="0" y1="-12" x2="18" y2="4" stroke="#64748b" stroke-width="2.5"/>
                <line x1="0" y1="-12" x2="0" y2="6" stroke="#64748b" stroke-width="2.5"/>
                <!-- Cylindrical Beacon Column -->
                <rect x="-10" y="-34" width="20" height="22" rx="3" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
                <!-- Flashing Red Emergency Dome Lens (Living Action) -->
                <path d="M-8 -34 A 8 8 0 0 1 8 -34 Z" fill="#ef4444" stroke="#ffffff" stroke-width="1.5" class="story-anim-alarm-dome"/>
                <circle cx="0" cy="-38" r="3" fill="#ffffff"/>
                <!-- Concentric Signal Pulse Arcs -->
                <circle cx="0" cy="-38" r="14" fill="none" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4,3" class="story-anim-radar-ping"/>
                <circle cx="0" cy="-38" r="26" fill="none" stroke="#f87171" stroke-width="1.2" stroke-dasharray="5,4" class="story-anim-radar-ping" style="animation-delay: 1.0s;"/>
                <!-- Emergency Readout -->
                <rect x="-16" y="-24" width="32" height="6" rx="1.5" fill="#0f172a" stroke="#ef4444" stroke-width="0.8"/>
                <text x="0" y="-19.5" font-size="3.8" font-weight="900" fill="#ef4444" text-anchor="middle">SOS // 142.8M</text>
            `;
            break;

        case 'plasma_torch':
            itemArt = `
                <!-- Heavy Charger Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <!-- Industrial Plasma Torch Body (Angled upward) -->
                <g transform="translate(0, -12) rotate(-14)">
                    <rect x="-28" y="-6" width="26" height="12" rx="3" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="-22" y1="-2" x2="-8" y2="-2" stroke="#475569" stroke-width="1.5"/>
                    <line x1="-22" y1="2" x2="-8" y2="2" stroke="#475569" stroke-width="1.5"/>
                    <!-- Golden Parabolic Reflector Head -->
                    <path d="M-2 -8 L14 -12 L14 12 L-2 8 Z" fill="#d97706" stroke="#facc15" stroke-width="2"/>
                    <circle cx="14" cy="0" r="10" fill="#fef08a" class="story-anim-plasma-pulse"/>
                    <circle cx="14" cy="0" r="5" fill="#ffffff"/>
                    <!-- High-Intensity Focused Plasma Light Beam Cone (Living Action) -->
                    <g class="story-anim-hologram-flicker">
                        <polygon points="16,-6 72,-24 72,24 16,6" fill="rgba(250, 204, 21, 0.32)"/>
                        <line x1="16" y1="0" x2="72" y2="0" stroke="#fef08a" stroke-width="2.2" stroke-dasharray="6,3"/>
                    </g>
                    <!-- Leaping Hot Plasma Sparks -->
                    <circle cx="38" cy="-8" r="1.6" fill="#facc15" class="story-anim-spark-1"/>
                    <circle cx="54" cy="10" r="1.4" fill="#ef4444" class="story-anim-spark-2"/>
                </g>
            `;
            break;

        case 'compass':
            itemArt = `
                <!-- Gimbal Stand Mount -->
                <rect x="-22" y="-4" width="44" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <path d="M-12 -4 L-6 -16 L6 -16 L12 -4 Z" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                <!-- Dual-Axis Gyro Compass Gimbal -->
                <g transform="translate(0, -26)">
                    <!-- Counter-Rotating Brass Gimbal Ring (Living Action) -->
                    <g class="story-anim-astrolabe-spin">
                        <ellipse cx="0" cy="0" rx="22" ry="18" fill="none" stroke="#d97706" stroke-width="2.2"/>
                    </g>
                    <!-- Inner Titanium Gimbal Ring -->
                    <g class="story-anim-astrolabe-spin-rev">
                        <ellipse cx="0" cy="0" rx="16" ry="16" fill="#0f172a" stroke="#10b981" stroke-width="1.8"/>
                    </g>
                    <!-- Compass Azimuth Markings -->
                    <line x1="0" y1="-14" x2="0" y2="-10" stroke="#10b981" stroke-width="1.5"/>
                    <line x1="0" y1="10" x2="0" y2="14" stroke="#94a3b8" stroke-width="1.5"/>
                    <line x1="-14" y1="0" x2="-10" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                    <line x1="10" y1="0" x2="14" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                    <!-- Fluctuating Magnetic Needle (Living Action) -->
                    <g class="story-anim-prop-wobble-play">
                        <polygon points="0,-12 4,0 0,2 -4,0" fill="#10b981" stroke="#ffffff" stroke-width="0.8"/>
                        <polygon points="0,12 4,0 0,-2 -4,0" fill="#94a3b8" stroke="#cbd5e1" stroke-width="0.8"/>
                        <circle cx="0" cy="0" r="2.5" fill="#facc15"/>
                    </g>
                </g>
            `;
            break;

        case 'magnetic_tether':
            itemArt = `
                <!-- Heavy Safety Winch Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#334155" stroke="#475569" stroke-width="1.8"/>
                <!-- Coiled Nano-Fiber Winch Spool -->
                <g transform="translate(0, -18)">
                    <rect x="-18" y="-12" width="36" height="24" rx="4" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
                    <!-- Coiled Purple Cable Lines -->
                    <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#c084fc" stroke-width="2.5"/>
                    <line x1="-14" y1="0" x2="14" y2="0" stroke="#a855f7" stroke-width="2.5"/>
                    <line x1="-14" y1="6" x2="14" y2="6" stroke="#c084fc" stroke-width="2.5"/>
                    <!-- Titanium Magnetic Clamp Latch Resting on Side -->
                    <path d="M12 -8 Q26 -16 28 -2 T16 6" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
                    <rect x="22" y="-14" width="8" height="6" rx="1.5" fill="#ef4444"/>
                    <rect x="22" y="-2" width="8" height="6" rx="1.5" fill="#0284c7"/>
                    <!-- Snapping Magnetic Flux Arcs (Living Action) -->
                    <path d="M26 -8 L30 -5 L26 -2" stroke="#00f0ff" stroke-width="1.8" fill="none" class="story-anim-spark-1"/>
                    <circle cx="28" cy="-5" r="3" fill="none" stroke="#00f0ff" stroke-width="1" class="story-anim-sound-wave-ping"/>
                </g>
            `;
            break;

        // --- ROVER THE CYBER DOG (TECH SCOUT) PROPS ---
        case 'cyber_bone':
            itemArt = `
                <!-- Chrome Cyber-Bone Dock with Quantum Charging Pins -->
                <rect x="-26" y="-4" width="52" height="8" rx="2.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <line x1="-20" y1="0" x2="20" y2="0" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="3,2"/>
                <circle cx="-22" cy="0" r="1.5" fill="#22c55e" class="story-anim-led-1"/>
                <circle cx="22" cy="0" r="1.5" fill="#22c55e" class="story-anim-led-1"/>
                <!-- Kinetic Articulated Cyber-Bone Assembly -->
                <g transform="translate(0, -18)">
                    <g class="story-anim-prop-wobble-play">
                        <!-- Left Chrome Knuckles with Energy Arcs -->
                        <circle cx="-20" cy="-6" r="6.5" fill="#334155" stroke="#cbd5e1" stroke-width="1.8"/>
                        <circle cx="-20" cy="6" r="6.5" fill="#334155" stroke="#cbd5e1" stroke-width="1.8"/>
                        <circle cx="-20" cy="-6" r="3" fill="#0284c7"/>
                        <circle cx="-20" cy="6" r="3" fill="#0284c7"/>
                        <!-- Right Chrome Knuckles with Energy Arcs -->
                        <circle cx="20" cy="-6" r="6.5" fill="#334155" stroke="#cbd5e1" stroke-width="1.8"/>
                        <circle cx="20" cy="6" r="6.5" fill="#334155" stroke="#cbd5e1" stroke-width="1.8"/>
                        <circle cx="20" cy="-6" r="3" fill="#0284c7"/>
                        <circle cx="20" cy="6" r="3" fill="#0284c7"/>
                        <!-- Chrome Shaft & Armored Conduit Housing -->
                        <rect x="-18" y="-7" width="36" height="14" rx="3.5" fill="#1e293b" stroke="#94a3b8" stroke-width="1.8"/>
                        <!-- Glowing High-Voltage Lithium-Quantum Core -->
                        <rect x="-11" y="-5.5" width="22" height="11" rx="2.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                        <g class="story-anim-plasma-pulse">
                            <line x1="-9" y1="0" x2="9" y2="0" stroke="#ffffff" stroke-width="3" filter="drop-shadow(0 0 8px #00f0ff)"/>
                            <circle cx="-6" cy="0" r="2" fill="#00f0ff"/>
                            <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
                            <circle cx="6" cy="0" r="2" fill="#00f0ff"/>
                        </g>
                        <!-- Snapping Electrostatic Sparks Jumping Across Knuckles -->
                        <path d="M-13 -6 L-9 -11 L-5 -5 L-1 -9" stroke="#00f0ff" stroke-width="1.6" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                        <path d="M5 6 L9 11 L13 5 L17 9" stroke="#38bdf8" stroke-width="1.6" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                        <!-- Metallic Light Sheen Reflection -->
                        <line x1="-16" y1="-4" x2="-4" y2="-4" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'ping_disc':
            itemArt = `
                <!-- Magnetic Levitation Launch Ring Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <ellipse cx="0" cy="0" rx="20" ry="4" fill="#0284c7" stroke="#00f0ff" stroke-width="1"/>
                <!-- High-Frequency Aerodynamic Radar Ping Disc Floating in Zero-G -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-hover-gentle">
                        <!-- Concentric Active Sonar Radar Waves Radiating from Disc -->
                        <circle cx="0" cy="-4" r="14" fill="none" stroke="#38bdf8" stroke-width="1.6" class="story-anim-sound-wave-ping"/>
                        <circle cx="0" cy="-4" r="24" fill="none" stroke="#00f0ff" stroke-width="1.2" class="story-anim-radar-ping"/>
                        <!-- Aerodynamic Hull Shell -->
                        <ellipse cx="0" cy="0" rx="26" ry="10" fill="#0284c7" stroke="#38bdf8" stroke-width="2.2" filter="drop-shadow(0 4px 10px rgba(0, 240, 255, 0.35))"/>
                        <ellipse cx="0" cy="-2" rx="20" ry="7" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
                        <!-- Spinning Perimeter Beacon Lights -->
                        <g class="story-anim-astrolabe-spin">
                            <circle cx="-19" cy="-1" r="2.2" fill="#facc15" filter="drop-shadow(0 0 4px #facc15)"/>
                            <circle cx="19" cy="-1" r="2.2" fill="#facc15" filter="drop-shadow(0 0 4px #facc15)"/>
                            <circle cx="0" cy="5" r="2" fill="#38bdf8"/>
                            <circle cx="0" cy="-7" r="2" fill="#38bdf8"/>
                        </g>
                        <!-- Central Quantum Radar Emitter Dome -->
                        <circle cx="0" cy="-4" r="6" fill="#00f0ff" class="story-anim-crystal-glow"/>
                        <circle cx="0" cy="-4" r="2.8" fill="#ffffff"/>
                        <!-- Top Surface Reflection Sheen -->
                        <path d="M-14 -4 Q0 -7 14 -4" stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.8" class="story-anim-gleam-sheen"/>
                    </g>
                </g>
            `;
            break;

        case 'squeak_beacon':
            itemArt = `
                <!-- Rubber Dock Cradle with Shock Dampeners -->
                <rect x="-22" y="-4" width="44" height="8" rx="2.5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
                <circle cx="-16" cy="0" r="2" fill="#d97706"/>
                <circle cx="16" cy="0" r="2" fill="#d97706"/>
                <!-- Sub-Sonic Acoustic Squeak Beacon Assembly -->
                <g transform="translate(0, -22)">
                    <g class="story-anim-prop-bounce-active">
                        <!-- Canine Ultrasonic Frequency Waves Radiating Outward -->
                        <circle cx="0" cy="-4" r="12" fill="none" stroke="#facc15" stroke-width="1.8" class="story-anim-sound-wave-ping"/>
                        <circle cx="0" cy="-4" r="22" fill="none" stroke="#38bdf8" stroke-width="1.4" stroke-dasharray="3,3" class="story-anim-radar-ping"/>
                        <circle cx="0" cy="-4" r="32" fill="none" stroke="#00f0ff" stroke-width="1.0" class="story-anim-sound-wave-ping" style="animation-delay: 0.9s;"/>
                        <!-- High-Durability Textured Yellow Canine Sphere -->
                        <circle cx="0" cy="0" r="18" fill="#facc15" stroke="#d97706" stroke-width="2.6" filter="drop-shadow(0 3px 8px rgba(0,0,0,0.35))"/>
                        <!-- Ergonomic Grip Tread Ridges -->
                        <path d="M-12 -6 Q0 0 12 -6" stroke="#b45309" stroke-width="2.2" fill="none"/>
                        <path d="M-14 4 Q0 10 14 4" stroke="#b45309" stroke-width="2.2" fill="none"/>
                        <!-- Chrome Acoustic Sonar Grille Chamber -->
                        <circle cx="0" cy="-4" r="7.5" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.6"/>
                        <!-- Pulsing Center Audio Frequency Node -->
                        <circle cx="0" cy="-4" r="4" fill="#38bdf8" class="story-anim-plasma-pulse"/>
                        <circle cx="0" cy="-4" r="1.8" fill="#ffffff"/>
                        <!-- Audio Activity Indicator Strobe -->
                        <circle cx="0" cy="-12" r="2" fill="#ef4444" class="story-anim-antenna-pulse"/>
                    </g>
                </g>
            `;
            break;

        case 'tug_cable':
            itemArt = `
                <!-- Titanium Tow Bracket Dock with Warning Stripes -->
                <rect x="-26" y="-4" width="52" height="8" rx="2.5" fill="#1e293b" stroke="#475569" stroke-width="1.8"/>
                <line x1="-22" y1="-2" x2="22" y2="-2" stroke="#facc15" stroke-width="2" stroke-dasharray="4,4"/>
                <!-- Braided Titanium Nano-Fiber Safety Tug Cable -->
                <g transform="translate(0, -18)">
                    <g class="story-anim-prop-wobble-play">
                        <!-- Braided Cable High-Tension Loops -->
                        <ellipse cx="-4" cy="2" rx="17" ry="13" fill="none" stroke="#0284c7" stroke-width="5.5"/>
                        <ellipse cx="-4" cy="2" rx="17" ry="13" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4,3"/>
                        <ellipse cx="-4" cy="2" rx="17" ry="13" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="2,3"/>
                        <!-- Left Forged Steel Bite Grip Ring with Chrome Sheen -->
                        <circle cx="-18" cy="-6" r="7.5" fill="none" stroke="#cbd5e1" stroke-width="3.2"/>
                        <circle cx="-18" cy="-6" r="7.5" fill="none" stroke="#ffffff" stroke-width="1.2" class="story-anim-gleam-sheen"/>
                        <!-- Right Forged Steel Bite Grip Ring with Hazard Collar -->
                        <circle cx="14" cy="4" r="7.5" fill="none" stroke="#cbd5e1" stroke-width="3.2"/>
                        <circle cx="14" cy="4" r="7.5" fill="none" stroke="#ffffff" stroke-width="1.2" class="story-anim-gleam-sheen"/>
                        <rect x="6" y="2" width="7" height="6" rx="1.5" fill="#facc15" stroke="#d97706" stroke-width="1"/>
                        <line x1="8" y1="2" x2="8" y2="8" stroke="#000000" stroke-width="1"/>
                        <line x1="11" y1="2" x2="11" y2="8" stroke="#000000" stroke-width="1"/>
                        <!-- Snapping Electrostatic Discharge Arcs along Cable -->
                        <path d="M-12 1 L-7 -4 L-3 3 L2 -2" stroke="#00f0ff" stroke-width="1.8" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                        <path d="M4 3 L8 -3 L12 4 L16 0" stroke="#38bdf8" stroke-width="1.8" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                    </g>
                </g>
            `;
            break;

        case 'holo_treat':
            itemArt = `
                <!-- Tech Treat Dispenser Stand with Energy Gauges -->
                <rect x="-22" y="-4" width="44" height="8" rx="2.5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
                <circle cx="-14" cy="0" r="1.8" fill="#22c55e" class="story-anim-led-1"/>
                <circle cx="14" cy="0" r="1.8" fill="#38bdf8" class="story-anim-led-2"/>
                <!-- Holo-Treat Pellet Dispenser Canister -->
                <rect x="-14" y="-36" width="28" height="32" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="2.2"/>
                <!-- Transparent Viewing Chamber with Internal Plasma Wash -->
                <rect x="-10" y="-30" width="20" height="18" rx="2" fill="rgba(245, 158, 11, 0.25)" stroke="#facc15" stroke-width="1.2"/>
                <!-- Synthesized Molecular Energy Treats Inside -->
                <circle cx="-4" cy="-24" r="2.8" fill="#facc15" class="story-anim-led-3"/>
                <circle cx="4" cy="-22" r="2.5" fill="#38bdf8" class="story-anim-led-2"/>
                <circle cx="0" cy="-17" r="2.8" fill="#f59e0b" class="story-anim-led-1"/>
                <!-- Holographic Projection Fan Beam Emitter -->
                <polygon points="-10,-36 10,-36 16,-52 -16,-52" fill="rgba(245, 158, 11, 0.15)"/>
                <line x1="-10" y1="-36" x2="-16" y2="-52" stroke="#facc15" stroke-width="0.8" stroke-dasharray="2,2"/>
                <line x1="10" y1="-36" x2="16" y2="-52" stroke="#facc15" stroke-width="0.8" stroke-dasharray="2,2"/>
                <!-- Floating 3D Holographic Star Energy Treat -->
                <g transform="translate(0, -50)">
                    <g class="story-anim-star-float">
                        <g class="story-anim-hologram-flicker">
                            <polygon points="0,-8 2.5,-2.5 8,-2.5 3.5,1.5 5.5,7 0,3.5 -5.5,7 -3.5,1.5 -8,-2.5 -2.5,-2.5" fill="#facc15" stroke="#ea580c" stroke-width="1" filter="drop-shadow(0 0 8px #facc15)"/>
                            <circle cx="0" cy="0" r="2.2" fill="#ffffff" class="story-anim-star-twinkle-fast"/>
                        </g>
                    </g>
                </g>
            `;
            break;

        case 'rover_probe':
            itemArt = `
                <!-- Articulated Socket Base Mount -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <circle cx="-10" cy="-6" r="6.5" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
                <circle cx="-10" cy="-6" r="2.5" fill="#10b981"/>
                <!-- Hydraulic Arm Pistons & Primary Segment -->
                <line x1="-10" y1="-6" x2="-2" y2="-22" stroke="#475569" stroke-width="5" stroke-linecap="round"/>
                <line x1="-10" y1="-6" x2="-2" y2="-22" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
                <circle cx="-2" cy="-22" r="5" fill="#10b981" stroke="#cbd5e1" stroke-width="1.5"/>
                <!-- Secondary Articulated Segment -->
                <line x1="-2" y1="-22" x2="14" y2="-32" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
                <circle cx="14" cy="-32" r="4" fill="#10b981" stroke="#059669" stroke-width="1.2"/>
                <!-- Two-Prong Motorized Gripper Claw -->
                <path d="M14 -32 L20 -38 L25 -34" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
                <path d="M14 -32 L20 -26 L25 -30" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
                <!-- Energized Micro-Quantum Core Held in Claw -->
                <circle cx="24" cy="-32" r="4.5" fill="#00f0ff" class="story-anim-crystal-glow"/>
                <circle cx="24" cy="-32" r="2" fill="#ffffff"/>
                <!-- Scanning Laser Targeting Tracer Line Projecting to Ground -->
                <line x1="24" y1="-28" x2="28" y2="-3" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                <circle cx="28" cy="-3" r="2.2" fill="#22c55e" class="story-anim-led-1"/>
            `;
            break;

        // --- COMMANDER VANCE (OUTPOST CHIEF) PROPS ---
        case 'satellite':
            itemArt = `
                <!-- Armored Outpost Comms Gantry Dock -->
                <rect x="-24" y="-5" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <circle cx="0" cy="-5" r="9.5" fill="#0f172a" stroke="#64748b" stroke-width="2.2"/>
                <line x1="-11" y1="-5" x2="-5" y2="-20" stroke="#64748b" stroke-width="3.5"/>
                <line x1="11" y1="-5" x2="5" y2="-20" stroke="#64748b" stroke-width="3.5"/>
                <!-- Angled Parabolic Dish Array -->
                <g transform="translate(0, -22) rotate(-18)">
                    <!-- High-Gain Microwave Parabolic Mesh -->
                    <path d="M-28 0 Q0 -18 28 0 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2.6"/>
                    <path d="M-23 2 Q0 -13 23 2" stroke="#0284c7" stroke-width="1.8" fill="none"/>
                    <!-- Feed Horn Stays & Central Waveguide -->
                    <line x1="-13" y1="-1" x2="-13" y2="-9" stroke="#38bdf8" stroke-width="1"/>
                    <line x1="0" y1="-1" x2="0" y2="-15" stroke="#38bdf8" stroke-width="1"/>
                    <line x1="13" y1="-1" x2="13" y2="-9" stroke="#38bdf8" stroke-width="1"/>
                    <line x1="0" y1="-8" x2="0" y2="-23" stroke="#38bdf8" stroke-width="3"/>
                    <!-- Quantum Transmitter Diode Node -->
                    <circle cx="0" cy="-23" r="5.5" fill="#00f0ff" class="story-anim-crystal-glow"/>
                    <circle cx="0" cy="-23" r="2.5" fill="#ffffff"/>
                    <line x1="0" y1="-23" x2="0" y2="-32" stroke="#cbd5e1" stroke-width="1.8"/>
                    <!-- Blinking Beacon Light -->
                    <circle cx="0" cy="-32" r="3.5" fill="#ef4444" class="story-anim-antenna-pulse"/>
                    <!-- Radiating Microwave Uplink Wavefronts Propagating to Space -->
                    <path d="M-15 -35 Q0 -48 15 -35" stroke="#38bdf8" stroke-width="2" fill="none" class="story-anim-sound-wave-ping"/>
                    <path d="M-24 -43 Q0 -60 24 -43" stroke="#00f0ff" stroke-width="1.6" fill="none" class="story-anim-radar-ping"/>
                    <!-- Active Carrier Frequency Data Tracer -->
                    <line x1="0" y1="-23" x2="0" y2="-50" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                </g>
                <!-- Terminal Uplink Status Readout Banner -->
                <rect x="-18" y="-1.5" width="36" height="6.5" rx="2" fill="#0f172a" stroke="#22c55e" stroke-width="0.8"/>
                <text x="0" y="3.5" font-size="4.2" font-weight="900" fill="#22c55e" text-anchor="middle" class="story-anim-hologram-flicker">UPLINK OK</text>
            `;
            break;

        case 'battery':
            itemArt = `
                <!-- Heavy Industrial Power Dock -->
                <rect x="-24" y="-5" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.8"/>
                <!-- Armored Quantum Battery Chassis -->
                <rect x="-21" y="-48" width="42" height="45" rx="5" fill="#0f172a" stroke="#8b5cf6" stroke-width="2.5"/>
                <!-- Warning Hazard Stripes Top Cap -->
                <rect x="-21" y="-48" width="42" height="5.5" fill="#facc15"/>
                <line x1="-16" y1="-48" x2="-11" y2="-42.5" stroke="#000" stroke-width="2"/>
                <line x1="-6" y1="-48" x2="-1" y2="-42.5" stroke="#000" stroke-width="2"/>
                <line x1="4" y1="-48" x2="9" y2="-42.5" stroke="#000" stroke-width="2"/>
                <line x1="14" y1="-48" x2="19" y2="-42.5" stroke="#000" stroke-width="2"/>
                <!-- Transparent Quantum Containment Cell with Live Plasma Surge -->
                <rect x="-13" y="-40" width="26" height="30" rx="4" fill="rgba(139, 92, 246, 0.25)" stroke="#c084fc" stroke-width="1.8"/>
                <g class="story-anim-plasma-pulse">
                    <line x1="0" y1="-37" x2="0" y2="-13" stroke="#ffffff" stroke-width="3.5" filter="drop-shadow(0 0 10px #a855f7)"/>
                    <circle cx="0" cy="-25" r="8" fill="#a855f7" class="story-anim-crystal-glow"/>
                    <circle cx="0" cy="-25" r="4" fill="#ffffff"/>
                </g>
                <!-- Stepping Charge Level Bar LEDs -->
                <rect x="-18" y="-40" width="3" height="5" rx="1" fill="#22c55e" class="story-anim-led-1"/>
                <rect x="-18" y="-33" width="3" height="5" rx="1" fill="#38bdf8" class="story-anim-led-2"/>
                <rect x="-18" y="-26" width="3" height="5" rx="1" fill="#a855f7" class="story-anim-led-3"/>
                <rect x="-18" y="-19" width="3" height="5" rx="1" fill="#c084fc" class="story-anim-led-1"/>
                <!-- Top Terminal Posts (Gold Anode & Cyan Cathode) -->
                <rect x="-14" y="-55" width="9" height="8" rx="2" fill="#d97706" stroke="#f59e0b" stroke-width="1.2"/>
                <rect x="5" y="-55" width="9" height="8" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                <!-- Snapping High-Voltage Electrostatic Discharge Arcs -->
                <path d="M-8 -51 L-3 -56 L1 -48 L7 -53" stroke="#00f0ff" stroke-width="2" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                <path d="M-5 -49 L-1 -44 L4 -48" stroke="#facc15" stroke-width="1.6" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                <!-- Charge Status Readout -->
                <text x="0" y="8" font-size="4.2" font-weight="900" fill="#c084fc" text-anchor="middle" class="story-anim-hologram-flicker">CHARGE // 100%</text>
            `;
            break;

        case 'lunar_drive':
            itemArt = `
                <!-- Heavy Flight Recorder Module Dock -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
                <!-- Armored Gold Flight Recorder Module Chassis -->
                <rect x="-20" y="-38" width="40" height="34" rx="4" fill="#d97706" stroke="#f59e0b" stroke-width="2.5"/>
                <!-- Dual Spinning Magnetic Tape Spools in Transparent Armored Window -->
                <rect x="-15" y="-33" width="30" height="16" rx="2" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.2"/>
                <!-- Left Spinning Tape Spool -->
                <g transform="translate(-8, -25)">
                    <g class="story-anim-astrolabe-spin">
                        <circle cx="0" cy="0" r="5" fill="#334155" stroke="#94a3b8" stroke-width="1"/>
                        <line x1="-5" y1="0" x2="5" y2="0" stroke="#cbd5e1" stroke-width="1"/>
                        <line x1="0" y1="-5" x2="0" y2="5" stroke="#cbd5e1" stroke-width="1"/>
                        <circle cx="0" cy="0" r="2" fill="#ffffff"/>
                    </g>
                </g>
                <!-- Right Spinning Tape Spool -->
                <g transform="translate(8, -25)">
                    <g class="story-anim-astrolabe-spin" style="animation-direction: reverse;">
                        <circle cx="0" cy="0" r="5" fill="#334155" stroke="#94a3b8" stroke-width="1"/>
                        <line x1="-5" y1="0" x2="5" y2="0" stroke="#cbd5e1" stroke-width="1"/>
                        <line x1="0" y1="-5" x2="0" y2="5" stroke="#cbd5e1" stroke-width="1"/>
                        <circle cx="0" cy="0" r="2" fill="#ffffff"/>
                    </g>
                </g>
                <!-- Magnetic Tape Ribbon Spanning Spools -->
                <line x1="-8" y1="-22" x2="8" y2="-22" stroke="#64748b" stroke-width="1.6"/>
                <!-- Sweeping Optical Laser Read Head Tracer Beam -->
                <line x1="-12" y1="-17" x2="12" y2="-17" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4,2" class="story-anim-laser-tracer"/>
                <!-- Glistening Gold Chassis Sheen -->
                <line x1="-16" y1="-34" x2="16" y2="-34" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" class="story-anim-gleam-sheen"/>
                <!-- Red Tamper-Proof Electronic Seal -->
                <rect x="-16" y="-12" width="32" height="5.5" fill="#ef4444" rx="1"/>
                <text x="0" y="-8" font-size="3.8" font-weight="900" fill="#ffffff" text-anchor="middle">REC // SEALED</text>
                <circle cx="14" cy="-35" r="1.8" fill="#22c55e" class="story-anim-led-1"/>
            `;
            break;

        case 'radio_comm':
            itemArt = `
                <!-- Rugged Field Comms Dock Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#10b981" stroke-width="1.8"/>
                <!-- Tactical Field Radio Transceiver Casing -->
                <rect x="-20" y="-36" width="40" height="32" rx="3.5" fill="#0f172a" stroke="#10b981" stroke-width="2.2"/>
                <!-- Dual Flexible Rubber Whip Antennas with Signal Wave Emitters -->
                <line x1="-15" y1="-36" x2="-22" y2="-54" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="-22" cy="-54" r="2.5" fill="#10b981"/>
                <g transform="translate(-22, -54)">
                    <circle cx="0" cy="0" r="7" fill="none" stroke="#10b981" stroke-width="1.2" class="story-anim-radar-ping"/>
                </g>
                <line x1="15" y1="-36" x2="22" y2="-50" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
                <circle cx="22" cy="-50" r="2.2" fill="#38bdf8"/>
                <g transform="translate(22, -50)">
                    <circle cx="0" cy="0" r="6" fill="none" stroke="#38bdf8" stroke-width="1.2" class="story-anim-radar-ping"/>
                </g>
                <!-- Illuminated High-Contrast Green Tuner Oscilloscope Screen -->
                <rect x="-16" y="-32" width="32" height="10" rx="2" fill="#051a14" stroke="#10b981" stroke-width="1.2"/>
                <!-- Streaming Green Sine Waveform Stream -->
                <path d="M-14 -27 Q-10 -32 -6 -27 T2 -27 T10 -27 T14 -27" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="4,2" class="story-anim-data-stream-flow"/>
                <!-- Blinking Frequency Marker Dot -->
                <circle cx="2" cy="-27" r="2.2" fill="#00f0ff" class="story-anim-led-1"/>
                <!-- Speaker Grille Slots with Active Sheen -->
                <line x1="-14" y1="-17" x2="14" y2="-17" stroke="#334155" stroke-width="1.6"/>
                <line x1="-14" y1="-13" x2="14" y2="-13" stroke="#334155" stroke-width="1.6"/>
                <line x1="-14" y1="-9" x2="14" y2="-9" stroke="#334155" stroke-width="1.6"/>
                <circle cx="-14" cy="-5" r="1.5" fill="#facc15" class="story-anim-led-2"/>
                <circle cx="14" cy="-5" r="1.5" fill="#22c55e" class="story-anim-led-1"/>
            `;
            break;

        case 'override_card':
            itemArt = `
                <!-- Airlock Keycard Dock Terminal -->
                <rect x="-22" y="-4" width="44" height="8" rx="2.5" fill="#1e293b" stroke="#ef4444" stroke-width="1.8"/>
                <rect x="-16" y="-8" width="32" height="5" rx="1.5" fill="#0f172a" stroke="#ef4444" stroke-width="1.2"/>
                <!-- Crimson Security Card Standing in Terminal -->
                <g transform="translate(0, -22) rotate(-8)">
                    <rect x="-18" y="-14" width="36" height="24" rx="3" fill="#b91c1c" stroke="#f87171" stroke-width="2"/>
                    <!-- Magnetic Security Stripe -->
                    <line x1="-18" y1="-6" x2="18" y2="-6" stroke="#1e1b4b" stroke-width="4"/>
                    <!-- Sweeping Authorization Laser Scanner Beam across Stripe -->
                    <line x1="-18" y1="-6" x2="18" y2="-6" stroke="#22c55e" stroke-width="2.2" stroke-dasharray="5,2" class="story-anim-laser-tracer"/>
                    <!-- Gold Hologram Chip with Dynamic Surface Sheen -->
                    <g class="story-anim-gleam-sheen">
                        <rect x="-14" y="0" width="8" height="7" rx="1" fill="#facc15" stroke="#d97706" stroke-width="0.8"/>
                    </g>
                    <!-- Security Clearance Text -->
                    <text x="3" y="5" font-size="4.2" font-weight="900" fill="#ffffff">LVL // OVR</text>
                    <!-- Terminal Authorized Indicator Blinking LED -->
                    <circle cx="12" cy="-9" r="2.5" fill="#22c55e" class="story-anim-led-1"/>
                </g>
            `;
            break;

        case 'calibrator':
            itemArt = `
                <!-- Optical Calibration Stand Base -->
                <rect x="-24" y="-4" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#facc15" stroke-width="1.8"/>
                <polygon points="-12,-4 -6,-16 6,-16 12,-4" fill="#0f172a" stroke="#facc15" stroke-width="1.5"/>
                <!-- Optical Alignment Calibration Disc -->
                <g transform="translate(0, -24)">
                    <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#facc15" stroke-width="2.2"/>
                    <!-- Dual Counter-Rotating Iridescent Diffraction Circles -->
                    <g class="story-anim-astrolabe-spin">
                        <circle cx="0" cy="0" r="14" fill="none" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6,4"/>
                    </g>
                    <g class="story-anim-astrolabe-spin" style="animation-direction: reverse;">
                        <circle cx="0" cy="0" r="10" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="4,3"/>
                    </g>
                    <!-- Alignment Laser Crosshairs -->
                    <line x1="-18" y1="0" x2="18" y2="0" stroke="#facc15" stroke-width="1.4"/>
                    <line x1="0" y1="-18" x2="0" y2="18" stroke="#facc15" stroke-width="1.4"/>
                    <!-- Central Laser Diode Focusing Point -->
                    <circle cx="0" cy="0" r="4.5" fill="#f59e0b" class="story-anim-crystal-glow"/>
                    <circle cx="0" cy="0" r="2" fill="#ffffff"/>
                    <!-- Peripheral Alignment Targeting Dots -->
                    <circle cx="-14" cy="0" r="1.6" fill="#ef4444" class="story-anim-led-1"/>
                    <circle cx="14" cy="0" r="1.6" fill="#ef4444" class="story-anim-led-1"/>
                </g>
            `;
            break;

        // Fallback for legacy props (e.g. scanner or goggles)
        case 'scanner':
            itemArt = `
                <rect x="-24" y="-5" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <g transform="translate(0, -13) rotate(-15)">
                    <rect x="-26" y="-6" width="20" height="12" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1.8"/>
                    <path d="M-6 -8 L18 -8 L28 0 L18 9 L-6 9 Z" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
                    <rect x="-3" y="-15" width="22" height="7" rx="2" fill="#090d16" stroke="#10b981" stroke-width="1.2"/>
                    <!-- Active Scanning Optics Lens -->
                    <circle cx="28" cy="0" r="3.8" fill="#22c55e" class="story-anim-crystal-glow"/>
                    <circle cx="28" cy="0" r="1.8" fill="#ffffff"/>
                    <!-- Sweeping Radar Sweep Cone -->
                    <g transform="translate(28, 0)" class="story-anim-radar-sweep-cone">
                        <polygon points="0,0 48,-16 48,16" fill="rgba(34, 197, 94, 0.35)"/>
                    </g>
                </g>
            `;
            break;

        case 'goggles':
        default:
            itemArt = `
                <!-- Resting Tech Item Stand -->
                <rect x="-24" y="-5" width="48" height="8" rx="2.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
                <rect x="-18" y="-22" width="36" height="18" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2.2"/>
                <!-- Dual Glowing Cyan Lenses with Active HUD Glint -->
                <circle cx="-7" cy="-13" r="4.5" fill="#0284c7" stroke="#00f0ff" stroke-width="1.5" class="story-anim-crystal-glow"/>
                <circle cx="-7" cy="-13" r="2" fill="#ffffff"/>
                <circle cx="7" cy="-13" r="4.5" fill="#0284c7" stroke="#00f0ff" stroke-width="1.5" class="story-anim-crystal-glow"/>
                <circle cx="7" cy="-13" r="2" fill="#ffffff"/>
                <!-- HUD Scan Tracer Line -->
                <line x1="-14" y1="-13" x2="14" y2="-13" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,2" class="story-anim-laser-tracer"/>
                <circle cx="0" cy="-13" r="1.8" fill="#facc15" class="story-anim-led-1"/>
            `;
            break;
    }

    const kineticPropClass = isClimax ? 'story-anim-prop-surge' : 'story-anim-prop-hover-gentle';

    return `
        <g transform="translate(${propX}, ${propY})">
            <!-- Concentric Quantum Energy Beacon Rings on Stage Pedestal -->
            <circle cx="0" cy="4" r="22" fill="none" stroke="#00f0ff" stroke-width="1.8" class="story-anim-catalyst-glow-ring"/>
            <circle cx="0" cy="4" r="34" fill="none" stroke="#38bdf8" stroke-width="1.0" class="story-anim-catalyst-glow-ring" style="animation-delay: 1.2s;"/>

            <!-- Floating Quantum Sparkle Telemetry Particles -->
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

            <!-- Dynamic Animated Catalyst Prop (Nested Transform Pattern) -->
            <g class="${kineticPropClass}">
                ${itemArt}
            </g>
        </g>
    `;
}

/* ==========================================================================
   TWO-PHASE SCI-FI MYSTERY TWISTS (PANEL 3 CLIMAX -> PANEL 4 RESOLUTION)
   ========================================================================== */

function renderQuantumTwistOverlay(twist, panelIdx) {
    if (!twist) return '';

    const isClimax = (panelIdx === 2);
    const isResolution = (panelIdx === 3);

    // Centered banner on Panel 3 (Climax) at (200, 14) — Compact, strictly clear of character on left
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

    if (twist.id === 'encoded_warning') {
        if (isClimax) {
            // Phase 1 (Panel 3): Blockbuster Solar Flare Radiation Storm! (Unobstructed sightlines)
            visualFx = `
                <!-- Coronal Radiation Surge Ambient Wash -->
                <rect width="400" height="220" fill="rgba(249, 115, 22, 0.20)" class="story-anim-emergency-siren"/>
                <!-- Volumetric Piercing Solar Radiation Beams -->
                <polygon points="0,0 75,0 180,220 90,220" fill="rgba(254, 240, 138, 0.12)"/>
                <polygon points="325,0 400,0 340,220 250,220" fill="rgba(245, 158, 11, 0.14)"/>
                <!-- Massive Coronal Mass Ejection Plasma Wave Crests -->
                <path d="M 0 0 L 400 0 L 400 52 Q 320 88 230 42 Q 150 82 70 38 Q 30 62 0 46 Z" fill="rgba(234, 88, 12, 0.35)"/>
                <path d="M 0 0 L 400 0 L 400 36 Q 290 68 190 28 Q 110 58 0 24 Z" fill="rgba(250, 204, 21, 0.45)"/>
                <!-- Leaping Solar Prominences & Dynamic Plasma Arcs -->
                <g class="story-anim-plasma-pulse">
                    <path d="M -10 38 Q 75 92 170 46" fill="none" stroke="#ea580c" stroke-width="3.5" stroke-linecap="round"/>
                    <path d="M 140 32 Q 250 86 370 36" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
                    <path d="M 60 18 Q 180 75 320 22" fill="none" stroke="#fef08a" stroke-width="2" stroke-dasharray="10,5"/>
                </g>
                <!-- Ionized Solar Particle Sparks & Embers -->
                <circle cx="45" cy="72" r="3" fill="#fef08a" class="story-anim-led-1"/>
                <circle cx="120" cy="52" r="3.5" fill="#facc15" class="story-anim-led-2"/>
                <circle cx="280" cy="56" r="3.2" fill="#f59e0b" class="story-anim-led-3"/>
                <circle cx="360" cy="68" r="2.8" fill="#fef08a" class="story-anim-led-1"/>
                <polygon points="85,32 87,37 92,38 87,39 85,44 83,39 78,38 83,37" fill="#fef08a" class="story-anim-sparkle-1"/>
                <polygon points="315,36 317,41 322,42 317,43 315,48 313,43 308,42 313,41" fill="#facc15" class="story-anim-sparkle-2"/>
                <!-- Station Perimeter Warning Brackets (Corners Only - Zero Character Obstruction) -->
                <path d="M 8 36 L 8 10 L 36 10" stroke="#ea580c" stroke-width="2.5" fill="none"/>
                <path d="M 392 36 L 392 10 L 364 10" stroke="#ea580c" stroke-width="2.5" fill="none"/>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Dual-Layer Emerald Defense Shield Dome (Clean, Badge-Free)
            visualFx = `
                <!-- Giant Dual-Layer Emerald Planetary Defense Shield Dome -->
                <g class="story-anim-shield-shimmer">
                    <ellipse cx="200" cy="195" rx="196" ry="145" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="3" stroke-dasharray="14,6"/>
                    <ellipse cx="200" cy="195" rx="184" ry="135" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="8,4" opacity="0.85"/>
                </g>
                <!-- Glowing Hexagonal Shield Facets (Honeycomb Barrier Reflection) -->
                <g fill="rgba(52, 211, 153, 0.16)" stroke="#34d399" stroke-width="1.5">
                    <polygon points="170,55 185,46 200,55 200,72 185,81 170,72"/>
                    <polygon points="200,55 215,46 230,55 230,72 215,81 200,72"/>
                    <polygon points="140,72 155,63 170,72 170,89 155,98 140,89"/>
                    <polygon points="230,72 245,63 260,72 260,89 245,98 230,89"/>
                </g>
                <!-- Deflected Radiation Arcs Ricocheting Off Barrier -->
                <path d="M 50 35 Q 90 55 75 75 Q 85 62 120 50" fill="none" stroke="#facc15" stroke-width="2" opacity="0.75"/>
                <path d="M 350 35 Q 310 55 325 75 Q 315 62 280 50" fill="none" stroke="#facc15" stroke-width="2" opacity="0.75"/>
                <circle cx="100" cy="58" r="3.5" fill="#fef08a" class="story-anim-sparkle-1"/>
                <circle cx="300" cy="58" r="3.5" fill="#fef08a" class="story-anim-sparkle-2"/>
            `;
        }
    } else if (twist.id === 'key_vibrate') {
        if (isClimax) {
            // Phase 1 (Panel 3): Continuously Rotating 3D Holographic Celestial Starmap & Shockwaves!
            visualFx = `
                <!-- Quantum Vertical Light Pillar Shooting to Sky -->
                <polygon points="285,175 315,175 330,0 270,0" fill="rgba(0, 240, 255, 0.16)" class="story-anim-neon-line"/>
                <line x1="300" y1="175" x2="300" y2="0" stroke="#ffffff" stroke-width="2" opacity="0.75"/>
                <!-- Concentric Floor Shockwave Rings Expanding Outward around Pedestal -->
                <g transform="translate(300, 175)">
                    <ellipse cx="0" cy="0" rx="52" ry="14" fill="none" stroke="#00f0ff" stroke-width="2.5" stroke-dasharray="8,4" class="story-anim-ring-spin"/>
                    <ellipse cx="0" cy="0" rx="86" ry="22" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4" opacity="0.7"/>
                </g>
                <!-- Continuously Rotating Holographic Celestial Starmap in Sky (Positioned Clear of Left Character) -->
                <g transform="translate(230, 75)">
                    <!-- Outer Celestial Ambient Glow Field -->
                    <circle cx="0" cy="0" r="48" fill="rgba(14, 165, 233, 0.12)" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,4"/>
                    
                    <!-- 1. Primary Clockwise Rotating Constellation Sphere -->
                    <g class="story-anim-starmap-spin">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="14s" repeatCount="indefinite"/>
                        <!-- Celestial Longitude & Latitude Rings -->
                        <circle cx="0" cy="0" r="42" fill="none" stroke="#00f0ff" stroke-width="1.8" stroke-dasharray="8,4"/>
                        <line x1="-42" y1="0" x2="42" y2="0" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7"/>
                        <line x1="0" y1="-42" x2="0" y2="42" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.7"/>
                        <!-- Constellation Laser Filaments & Star Nodes -->
                        <polyline points="-32,-15 -18,-28 0,-18 20,-30 35,-15" fill="none" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="-32" cy="-15" r="3.5" fill="#facc15" filter="drop-shadow(0 0 4px #facc15)"/>
                        <circle cx="-18" cy="-28" r="3" fill="#ffffff"/>
                        <circle cx="0" cy="-18" r="3.5" fill="#00f0ff"/>
                        <circle cx="20" cy="-30" r="3" fill="#ffffff"/>
                        <circle cx="35" cy="-15" r="3.5" fill="#facc15"/>
                        <polyline points="-25,18 -8,12 12,22 28,14" fill="none" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round"/>
                        <circle cx="-25" cy="18" r="3" fill="#c084fc"/>
                        <circle cx="-8" cy="12" r="3" fill="#38bdf8"/>
                        <circle cx="12" cy="22" r="3" fill="#ffffff"/>
                        <circle cx="28" cy="14" r="3" fill="#c084fc"/>
                        <!-- Perimeter Celestial Coordinate Glyphs -->
                        <text x="0" y="-44" font-size="5" font-family="monospace" font-weight="900" fill="#00f0ff" text-anchor="middle">N 000°</text>
                        <text x="44" y="2" font-size="5" font-family="monospace" font-weight="900" fill="#00f0ff" text-anchor="start">E 090°</text>
                        <text x="0" y="47" font-size="5" font-family="monospace" font-weight="900" fill="#00f0ff" text-anchor="middle">S 180°</text>
                        <text x="-44" y="2" font-size="5" font-family="monospace" font-weight="900" fill="#00f0ff" text-anchor="end">W 270°</text>
                    </g>

                    <!-- 2. Counter-Clockwise Rotating 3D Gyroscopic Orbital Ring -->
                    <g class="story-anim-starmap-spin-rev">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="9s" repeatCount="indefinite"/>
                        <ellipse cx="0" cy="0" rx="46" ry="16" fill="none" stroke="#22d3ee" stroke-width="2.2" stroke-dasharray="6,3" filter="drop-shadow(0 0 6px #00f0ff)"/>
                        <ellipse cx="0" cy="0" rx="16" ry="46" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.8"/>
                        <!-- Orbiting Quantum Markers -->
                        <circle cx="45" cy="0" r="3.5" fill="#facc15" filter="drop-shadow(0 0 6px #facc15)"/>
                        <circle cx="-45" cy="0" r="3.5" fill="#facc15" filter="drop-shadow(0 0 6px #facc15)"/>
                    </g>

                    <!-- 3. Pulsing Quantum Luminous Core -->
                    <circle cx="0" cy="0" r="8" fill="#ffffff" filter="drop-shadow(0 0 12px #00f0ff)" class="story-anim-starmap-pulse"/>
                    <circle cx="0" cy="0" r="4" fill="#00f0ff"/>
                </g>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Harmonized Celestial Coordinates Locked (Clean, Badge-Free)
            visualFx = `
                <!-- Stabilized Celestial Targeting Reticle in Upper Sky -->
                <g transform="translate(270, 55)">
                    <circle cx="0" cy="0" r="28" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2"/>
                    <circle cx="0" cy="0" r="14" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/>
                    <line x1="-36" y1="0" x2="36" y2="0" stroke="#10b981" stroke-width="1.5"/>
                    <line x1="0" y1="-36" x2="0" y2="36" stroke="#10b981" stroke-width="1.5"/>
                    <circle cx="0" cy="0" r="4.5" fill="#facc15" class="story-anim-led-1"/>
                </g>
                <!-- Radiant Victory Sparkles -->
                <polygon points="120,45 122,50 127,51 122,52 120,57 118,52 113,51 118,50" fill="#facc15" class="story-anim-sparkle-1"/>
                <polygon points="280,45 282,50 287,51 282,52 280,57 278,52 273,51 278,50" fill="#38bdf8" class="story-anim-sparkle-2"/>
            `;
        }
    } else if (twist.id === 'power_drain') {
        if (isClimax) {
            // Phase 1 (Panel 3): Station Blackout, Dual Red Sirens & Snapping Lightning Arcs!
            visualFx = `
                <!-- Deep Blackout Atmosphere Dimming Wash -->
                <rect width="400" height="220" fill="rgba(3, 7, 18, 0.78)" class="story-anim-emergency-siren"/>
                <!-- Left Emergency Strobe Fixture & Sweeping Light Beam -->
                <rect x="30" y="4" width="20" height="14" rx="3" fill="#18181b" stroke="#71717a" stroke-width="1.5"/>
                <circle cx="40" cy="18" r="8" fill="#ef4444" filter="drop-shadow(0 0 12px #ef4444)"/>
                <polygon points="40,18 0,180 140,210" fill="rgba(239, 68, 68, 0.35)" class="story-anim-strobe-sweep-l"/>
                <!-- Right Emergency Strobe Fixture & Sweeping Light Beam -->
                <rect x="350" y="4" width="20" height="14" rx="3" fill="#18181b" stroke="#71717a" stroke-width="1.5"/>
                <circle cx="360" cy="18" r="8" fill="#ef4444" filter="drop-shadow(0 0 12px #ef4444)"/>
                <polygon points="360,18 260,210 400,180" fill="rgba(239, 68, 68, 0.35)" class="story-anim-strobe-sweep-r"/>
                <!-- Snapping High-Voltage Lightning Arcs -->
                <path d="M 40 22 L 70 65 L 55 75 L 90 120 L 72 130 L 110 170" fill="none" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="story-anim-lightning-arc"/>
                <path d="M 40 22 L 70 65 L 55 75 L 90 120 L 72 130 L 110 170" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M 360 22 L 330 60 L 342 70 L 305 115 L 320 125 L 285 165" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="story-anim-lightning-arc"/>
                <path d="M 360 22 L 330 60 L 342 70 L 305 115 L 320 125 L 285 165" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Ground Discharge Spark Bursts -->
                <circle cx="110" cy="170" r="4" fill="#ffffff" class="story-anim-spark-1"/>
                <circle cx="285" cy="165" r="4" fill="#ffffff" class="story-anim-spark-2"/>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Station Power Restored & Full Grid Stabilization (Clean, Badge-Free)
            visualFx = `
                <!-- Restored Turquoise Station Ambience Wash -->
                <rect width="400" height="220" fill="rgba(56, 189, 248, 0.08)"/>
                <!-- Luminous Ceiling and Floor Conduits -->
                <line x1="0" y1="6" x2="400" y2="6" stroke="#10b981" stroke-width="3.5" class="story-anim-neon-green"/>
                <line x1="0" y1="175" x2="400" y2="175" stroke="#00f0ff" stroke-width="3" class="story-anim-neon-line"/>
                <!-- High-Tech Power Array Along Upper Ceiling -->
                <g transform="translate(0, 14)">
                    <circle cx="50" cy="0" r="3.5" fill="#22c55e" class="story-anim-led-1"/>
                    <circle cx="90" cy="0" r="3.5" fill="#22c55e" class="story-anim-led-2"/>
                    <circle cx="130" cy="0" r="3.5" fill="#22c55e" class="story-anim-led-1"/>
                    <circle cx="270" cy="0" r="3.5" fill="#22c55e" class="story-anim-led-2"/>
                    <circle cx="310" cy="0" r="3.5" fill="#22c55e" class="story-anim-led-1"/>
                    <circle cx="350" cy="0" r="3.5" fill="#22c55e" class="story-anim-led-2"/>
                </g>
            `;
        }
    } else if (twist.id === 'robot_override') {
        if (isClimax) {
            // Phase 1 (Panel 3): Hovering Armored Rogue Cyber Drone in Upper Right (Clear of Left Character)
            visualFx = `
                <!-- Hovering Rogue Cyber Drone (Staged at X=245, Y=52) -->
                <g transform="translate(245, 52)">
                    <g class="story-anim-drone-hover">
                        <!-- Volumetric Crimson Scanning Cone Aimed Toward Center Floor -->
                        <polygon points="0,12 -80,145 60,145" fill="rgba(239, 68, 68, 0.28)" class="story-anim-drone-scan"/>
                        <line x1="-80" y1="145" x2="60" y2="145" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" opacity="0.75"/>
                        <!-- Dual Thrusters -->
                        <rect x="-46" y="-6" width="10" height="18" rx="2" fill="#334155" stroke="#64748b" stroke-width="1.2"/>
                        <polygon points="-44,12 -38,12 -41,22" fill="#00f0ff" opacity="0.8"/>
                        <rect x="36" y="-6" width="10" height="18" rx="2" fill="#334155" stroke="#64748b" stroke-width="1.2"/>
                        <polygon points="38,12 44,12 41,22" fill="#00f0ff" opacity="0.8"/>
                        <!-- Drone Armored Chassis -->
                        <polygon points="-36,-10 36,-10 44,8 24,18 -24,18 -44,8" fill="#1e293b" stroke="#64748b" stroke-width="2.2"/>
                        <polygon points="-28,-18 28,-18 36,-10 -36,-10" fill="#0f172a" stroke="#475569" stroke-width="1.8"/>
                        <!-- Antenna Sensor -->
                        <line x1="0" y1="-18" x2="0" y2="-28" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="0" cy="-29" r="3" fill="#ef4444" class="story-anim-led-1"/>
                        <!-- Crimson Optical Scanner Lens -->
                        <ellipse cx="0" cy="4" rx="14" ry="7" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
                        <circle cx="0" cy="4" r="5" fill="#ef4444" filter="drop-shadow(0 0 10px #ef4444)" class="story-anim-led-1"/>
                        <circle cx="0" cy="4" r="2" fill="#fef2f2"/>
                    </g>
                </g>
                <!-- Expanding Sonar Radar Ping Rings -->
                <circle cx="245" cy="52" r="24" fill="none" stroke="#ef4444" stroke-width="2.5" class="story-anim-radar-ping"/>
                <circle cx="245" cy="52" r="48" fill="none" stroke="#f97316" stroke-width="1.8" class="story-anim-radar-ping"/>
                <!-- Cascading Matrix Binary Code Streams on Right Flank and Outer Edge -->
                <g class="story-anim-binary-stream" font-family="monospace" font-size="6.5" font-weight="bold" fill="#38bdf8" opacity="0.85">
                    <text x="14" y="65">01001011<tspan x="14" dy="9">11010001</tspan><tspan x="14" dy="9">00101110</tspan></text>
                    <text x="345" y="65">10110010<tspan x="345" dy="9">01011101</tspan><tspan x="345" dy="9">11100010</tspan><tspan x="345" dy="9">00011101</tspan></text>
                </g>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 4): Re-coded Friendly Companion Drone (Clean, Badge-Free)
            visualFx = `
                <!-- Friendly Overridden Companion Drone (Staged at X=260, Y=48) -->
                <g transform="translate(260, 48)">
                    <g class="story-anim-drone-hover">
                        <!-- Gentle Cyan Scanning Cone -->
                        <polygon points="0,12 -55,115 55,115" fill="rgba(6, 182, 212, 0.16)"/>
                        <!-- Thrusters -->
                        <rect x="-46" y="-6" width="10" height="18" rx="2" fill="#334155" stroke="#10b981" stroke-width="1.2"/>
                        <polygon points="-44,12 -38,12 -41,20" fill="#10b981" opacity="0.8"/>
                        <rect x="36" y="-6" width="10" height="18" rx="2" fill="#334155" stroke="#10b981" stroke-width="1.2"/>
                        <polygon points="38,12 44,12 41,20" fill="#10b981" opacity="0.8"/>
                        <!-- Re-coded Chassis -->
                        <polygon points="-36,-10 36,-10 44,8 24,18 -24,18 -44,8" fill="#1e293b" stroke="#10b981" stroke-width="2.2"/>
                        <polygon points="-28,-18 28,-18 36,-10 -36,-10" fill="#0f172a" stroke="#059669" stroke-width="1.8"/>
                        <!-- Antenna -->
                        <line x1="0" y1="-18" x2="0" y2="-28" stroke="#94a3b8" stroke-width="2"/>
                        <circle cx="0" cy="-29" r="3" fill="#22c55e" class="story-anim-led-1"/>
                        <!-- Friendly Smiling Emerald Eye -->
                        <ellipse cx="0" cy="4" rx="14" ry="7" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
                        <circle cx="0" cy="4" r="5" fill="#22c55e" filter="drop-shadow(0 0 8px #22c55e)"/>
                        <circle cx="-2" cy="3" r="1.5" fill="#ffffff"/>
                        <path d="M -5 5 Q 0 8 5 5" stroke="#ffffff" stroke-width="1.2" fill="none"/>
                    </g>
                </g>
            `;
        }
    }

    return `
        <g id="story-intermediate-twist-overlay">
            ${visualFx}
            ${badge}
        </g>
    `;
}

function renderIntermediateComicSVG(settingId, charId, propId, panelIdx, level, twist, secondaryCharId) {
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
    let charX = 100;
    let propX = 280;
    let pedestalX = 255;
    let charPose = 'exploring'; // 'exploring', 'discovering', 'alarmed', 'celebrating'

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
    const propY = isDiscovery ? (groundY - 45) : (groundY - 31);

    // Settings Backgrounds (5-Layer Depth Hierarchy - Super Vector Living Graphics)
        if (settingId === 'lunar_outpost') {
            // Lunar Moon Outpost: Spectacular Earthrise, Geodesic Biosphere Dome, Lunar Rover, Solar Array & Planted Mission Flag
            bgGraphic = `
                <defs>
                    <!-- Atmospheric Glow & Surface Gradients for Lunar Outpost -->
                    <radialGradient id="earthAtmosphere" cx="45%" cy="45%" r="50%">
                        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.95"/>
                        <stop offset="70%" stop-color="#0284c7" stop-opacity="0.55"/>
                        <stop offset="100%" stop-color="#0369a1" stop-opacity="0"/>
                    </radialGradient>
                    <linearGradient id="lunarRidgeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#64748b"/>
                        <stop offset="35%" stop-color="#475569"/>
                        <stop offset="100%" stop-color="#334155"/>
                    </linearGradient>
                    <linearGradient id="domeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="45%" stop-color="#cbd5e1"/>
                        <stop offset="100%" stop-color="#64748b"/>
                    </linearGradient>
                </defs>

                <!-- 1. PITCH-BLACK DEEP SPACE SKY WITH TWINKLING VACUUM STARS -->
                <rect width="400" height="220" fill="#030712"/>

                <!-- Brilliant Twinkling Lunar Stars in Vacuum -->
                <circle cx="25" cy="28" r="1.3" fill="#ffffff" class="story-anim-twinkle-1"/>
                <circle cx="65" cy="18" r="1.5" fill="#bae6fd" class="story-anim-star-twinkle"/>
                <circle cx="115" cy="40" r="1.0" fill="#ffffff" class="story-anim-twinkle-2"/>
                <circle cx="155" cy="22" r="1.4" fill="#ffffff" class="story-anim-twinkle-3"/>
                <circle cx="205" cy="45" r="1.2" fill="#bae6fd" class="story-anim-star-twinkle"/>
                <circle cx="255" cy="25" r="1.5" fill="#ffffff" class="story-anim-twinkle-1"/>
                <circle cx="375" cy="18" r="1.2" fill="#ffffff" class="story-anim-twinkle-2"/>
                <circle cx="390" cy="60" r="1.0" fill="#bae6fd" class="story-anim-twinkle-3"/>
                <circle cx="178" cy="65" r="0.9" fill="#ffffff" class="story-anim-twinkle-1"/>
                <circle cx="285" cy="72" r="1.1" fill="#bae6fd" class="story-anim-star-twinkle"/>

                <!-- 2. SPECTACULAR EARTHRISE IN THE LUNAR SKY (X=320, Y=46, R=26) -->
                <!-- Atmospheric Blue Halo with Breathing Aura -->
                <circle cx="320" cy="46" r="32" fill="url(#earthAtmosphere)" filter="drop-shadow(0 0 16px rgba(56, 189, 248, 0.75))" class="story-anim-sun-halo"/>
                <!-- Deep Ocean Marble Base -->
                <circle cx="320" cy="46" r="26" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                <!-- Continents (Vibrant Green & Earthy Gold) -->
                <path d="M304 38 Q312 32 320 35 Q326 38 328 46 Q324 54 316 52 Q308 50 304 38 Z" fill="#15803d" opacity="0.95"/>
                <path d="M322 42 Q328 38 335 44 Q339 52 333 58 Q326 55 322 42 Z" fill="#16a34a" opacity="0.9"/>
                <path d="M310 54 Q316 58 322 62 Q318 68 312 66 Z" fill="#ca8a04" opacity="0.85"/>
                <!-- Swirling Translucent White Cloud Bands -->
                <path d="M298 42 Q312 40 325 45 T343 43" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.8" stroke-linecap="round"/>
                <path d="M302 52 Q318 48 330 55 T341 52" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.75" stroke-linecap="round"/>
                <path d="M306 34 Q320 32 332 35" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round"/>

                <!-- 3. RUGGED LUNAR CRATER HORIZON & REGOLITH HILLS -->
                <path d="M0 135 Q70 115 150 128 T300 120 Q350 125 400 118 L400 155 L0 155 Z" fill="url(#lunarRidgeGrad)"/>
                <!-- Distant Craters on the Ridge -->
                <ellipse cx="235" cy="126" rx="22" ry="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
                <ellipse cx="235" cy="125" rx="18" ry="4" fill="#0f172a"/>
                <ellipse cx="370" cy="124" rx="16" ry="4" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>

                <!-- 4. LUNAR SURFACE EXPLORATION EQUIPMENT -->
                <!-- Solar Power Array on the Ridge (X=195) with Telemetry LED -->
                <g transform="translate(195, 118)">
                    <line x1="0" y1="0" x2="0" y2="15" stroke="#94a3b8" stroke-width="2.5"/>
                    <g transform="rotate(-18)">
                        <rect x="-24" y="-8" width="22" height="15" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                        <line x1="-13" y1="-8" x2="-13" y2="7" stroke="#38bdf8" stroke-width="1"/>
                        <line x1="-24" y1="-0.5" x2="-2" y2="-0.5" stroke="#38bdf8" stroke-width="0.8"/>
                        <rect x="2" y="-8" width="22" height="15" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                        <line x1="13" y1="-8" x2="13" y2="7" stroke="#38bdf8" stroke-width="1"/>
                        <line x1="2" y1="-0.5" x2="24" y2="-0.5" stroke="#38bdf8" stroke-width="0.8"/>
                        <circle cx="0" cy="0" r="2.5" fill="#22c55e" class="story-anim-led-1"/>
                    </g>
                </g>

                <!-- Planted Space Mission Flag on the Ridge (X=238, Y=108) with Wave Motion -->
                <g transform="translate(238, 108)">
                    <line x1="0" y1="0" x2="0" y2="25" stroke="#cbd5e1" stroke-width="2"/>
                    <line x1="0" y1="0" x2="16" y2="0" stroke="#cbd5e1" stroke-width="1.5"/>
                    <g class="story-anim-ribbon-wave" style="transform-origin: 0px 0px;">
                        <rect x="0" y="0" width="16" height="11" fill="#0284c7" stroke="#38bdf8" stroke-width="0.8"/>
                        <polygon points="0,0 8,5.5 0,11" fill="#f59e0b"/>
                        <circle cx="10" cy="5.5" r="2.5" fill="#ffffff"/>
                    </g>
                </g>

                <!-- Parked Lunar Surface Rover / Buggy with Suspension Micro-Vibration & Headlight Beam -->
                <g transform="translate(142, 134)">
                    <g class="story-anim-robot-hover">
                        <!-- Mesh Rover Wheels -->
                        <circle cx="6" cy="14" r="5" fill="#334155" stroke="#94a3b8" stroke-width="1.8"/>
                        <circle cx="6" cy="14" r="2" fill="#0f172a"/>
                        <circle cx="26" cy="14" r="5" fill="#334155" stroke="#94a3b8" stroke-width="1.8"/>
                        <circle cx="26" cy="14" r="2" fill="#0f172a"/>
                        <!-- Chassis & Equipment Rack -->
                        <rect x="2" y="5" width="28" height="7" rx="2" fill="#d97706" stroke="#f59e0b" stroke-width="1.2"/>
                        <line x1="6" y1="12" x2="26" y2="12" stroke="#64748b" stroke-width="2"/>
                        <!-- Steering Mast & Antenna with Live Beacon -->
                        <line x1="8" y1="5" x2="12" y2="-2" stroke="#94a3b8" stroke-width="1.5"/>
                        <circle cx="12" cy="-2" r="1.5" fill="#38bdf8" class="story-anim-led-2"/>
                        <line x1="24" y1="5" x2="22" y2="0" stroke="#94a3b8" stroke-width="1.2"/>
                        <rect x="20" y="0" width="5" height="4" rx="1" fill="#0284c7"/>
                        <!-- Rover Headlight Sweeping Beam Cast Forward -->
                        <polygon points="2,8 -16,3 -16,15" fill="rgba(250, 204, 21, 0.4)" class="story-anim-scan-cone"/>
                    </g>
                </g>

                <!-- 5. PRESSURIZED LUNAR GEODESIC DOME BASE (X=22 to X=122, Y=85 to Y=150) -->
                <!-- Communication Mast on Top of Dome with Flashing Alert Beacon -->
                <line x1="72" y1="88" x2="72" y2="65" stroke="#94a3b8" stroke-width="2"/>
                <circle cx="72" cy="64" r="3.5" fill="#ef4444" class="story-anim-antenna-pulse"/>
                <!-- Main Pressurized Biosphere Dome -->
                <path d="M22 150 A 52 52 0 0 1 122 150 Z" fill="url(#domeGrad)" stroke="#475569" stroke-width="2.5"/>
                <!-- Geodesic Structural Facet Struts -->
                <path d="M72 98 L48 122 L72 146 L96 122 Z" fill="none" stroke="#64748b" stroke-width="1.5"/>
                <line x1="72" y1="98" x2="72" y2="146" stroke="#64748b" stroke-width="1.5"/>
                <line x1="22" y1="150" x2="48" y2="122" stroke="#64748b" stroke-width="1.5"/>
                <line x1="122" y1="150" x2="96" y2="122" stroke="#64748b" stroke-width="1.5"/>
                <!-- Warm Illuminated Crew Observation Windows with Cozy Pulsing Light -->
                <circle cx="60" cy="120" r="6" fill="#facc15" filter="drop-shadow(0 0 8px #fde047)" class="story-anim-twinkle-1"/>
                <circle cx="60" cy="120" r="3.5" fill="#ffffff"/>
                <circle cx="84" cy="120" r="6" fill="#facc15" filter="drop-shadow(0 0 8px #fde047)" class="story-anim-twinkle-2"/>
                <circle cx="84" cy="120" r="3.5" fill="#ffffff"/>

                <!-- External Pressurized Airlock Module -->
                <rect x="110" y="125" width="26" height="25" rx="3" fill="#334155" stroke="#64748b" stroke-width="1.8"/>
                <rect x="115" y="130" width="16" height="20" rx="2" fill="#1e293b"/>
                <circle cx="123" cy="127.5" r="2" fill="#22c55e" class="story-anim-led-1"/>

                <!-- Pressurized Oxygen & Life Support Cylinders -->
                <g transform="translate(14, 134)">
                    <rect x="0" y="0" width="9" height="16" rx="2.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                    <line x1="0" y1="5" x2="9" y2="5" stroke="#ffffff" stroke-width="1"/>
                    <rect x="11" y="0" width="9" height="16" rx="2.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                    <line x1="11" y1="5" x2="20" y2="5" stroke="#ffffff" stroke-width="1"/>
                </g>

                <!-- Floating Cosmic Dust Glints across Lunar Outpost -->
                <circle cx="110" cy="115" r="1.5" fill="#38bdf8" class="story-anim-sparkle-1"/>
                <circle cx="280" cy="140" r="1.8" fill="#facc15" class="story-anim-sparkle-2"/>

                <!-- 6. SOLID LUNAR BASE OUTPOST DECK (GROUND BASELINE AT Y=175) -->
                <!-- Midground Lunar Regolith Base Floor (Y=145 to 175) -->
                <rect x="0" y="145" width="400" height="75" fill="#334155"/>
                <rect x="0" y="175" width="400" height="45" fill="#1e293b"/>
                <!-- Foreground Craters in the Moon Dust -->
                <ellipse cx="60" cy="162" rx="18" ry="5" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
                <ellipse cx="60" cy="161" rx="14" ry="3.5" fill="#0f172a"/>
                <ellipse cx="360" cy="164" rx="20" ry="6" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
                <ellipse cx="360" cy="163" rx="15" ry="4" fill="#0f172a"/>

                <!-- High-Visibility Yellow/Black Hazard Striping & Runway Beacon Line at Y=175 baseline -->
                <line x1="0" y1="175" x2="400" y2="175" stroke="#facc15" stroke-width="3.5" stroke-dasharray="14,10"/>
                <!-- Interlocking Grid Deck Seams -->
                <line x1="100" y1="175" x2="100" y2="220" stroke="#475569" stroke-width="1.5"/>
                <line x1="200" y1="175" x2="200" y2="220" stroke="#475569" stroke-width="1.5"/>
                <line x1="300" y1="175" x2="300" y2="220" stroke="#475569" stroke-width="1.5"/>
                <!-- Embedded Runway Beacon Lights along baseline floor -->
                <circle cx="50" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-2"/>
                <circle cx="150" cy="175" r="2.5" fill="#facc15" class="story-anim-led-3"/>
                <circle cx="250" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-1"/>
                <circle cx="350" cy="175" r="2.5" fill="#facc15" class="story-anim-led-2"/>
            `;
            pedestalGraphic = `
                <g transform="translate(${pedestalX}, 145)">
                    <rect x="0" y="0" width="50" height="30" rx="4" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="6" y1="15" x2="44" y2="15" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <ellipse cx="25" cy="0" rx="25" ry="6" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
                    <ellipse cx="25" cy="0" rx="18" ry="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                </g>
            `;
        } else if (settingId === 'satellite_bay') {
            // Satellite Uplink Bay: Distinct Floating Satellite linked via active energy beam to Bay Transceiver
            bgGraphic = `
                <!-- Deep Space Starfield Void Outside Bay Window -->
                <rect width="400" height="220" fill="#030712"/>
                <!-- Cosmic Nebula Glow & Distant Earth Crescent with Pulsing Sheen -->
                <ellipse cx="250" cy="55" rx="80" ry="35" fill="rgba(56, 189, 248, 0.12)" transform="rotate(-12 250 55)" class="story-anim-sun-halo"/>
                <ellipse cx="140" cy="45" rx="60" ry="25" fill="rgba(129, 140, 248, 0.1)" transform="rotate(18 140 45)"/>
                <circle cx="330" cy="42" r="14" fill="#0284c7" filter="drop-shadow(0 0 10px rgba(56, 189, 248, 0.6))"/>
                <circle cx="327" cy="40" r="12" fill="#030712"/>
                <!-- Twinkling Space Stars -->
                <circle cx="45" cy="30" r="1.2" fill="#fff" class="story-anim-twinkle-1"/>
                <circle cx="110" cy="24" r="1.5" fill="#bae6fd" class="story-anim-star-twinkle"/>
                <circle cx="165" cy="32" r="1.0" fill="#fff" class="story-anim-twinkle-2"/>
                <circle cx="210" cy="22" r="1.4" fill="#fff" class="story-anim-twinkle-3"/>
                <circle cx="310" cy="65" r="1.2" fill="#bae6fd" class="story-anim-twinkle-1"/>
                <circle cx="375" cy="26" r="1.0" fill="#fff" class="story-anim-twinkle-2"/>

                <!-- Top Architectural Bay Ceiling Bulkhead & Recessed LED Strip Lights -->
                <rect x="0" y="0" width="400" height="14" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                <line x1="0" y1="14" x2="400" y2="14" stroke="#38bdf8" stroke-width="1" opacity="0.6"/>
                <rect x="50" y="4" width="60" height="3" rx="1.5" fill="#38bdf8" opacity="0.9" filter="drop-shadow(0 0 4px #38bdf8)"/>
                <rect x="170" y="4" width="60" height="3" rx="1.5" fill="#38bdf8" opacity="0.9" filter="drop-shadow(0 0 4px #38bdf8)"/>
                <rect x="290" y="4" width="60" height="3" rx="1.5" fill="#38bdf8" opacity="0.9" filter="drop-shadow(0 0 4px #38bdf8)"/>

                <!-- High-Tech Panoramic Bay Window Framing -->
                <polygon points="0,14 35,14 0,45" fill="#1e293b"/>
                <polygon points="400,14 365,14 400,45" fill="#1e293b"/>
                <line x1="0" y1="45" x2="35" y2="14" stroke="#334155" stroke-width="2"/>
                <line x1="400" y1="45" x2="365" y2="14" stroke="#334155" stroke-width="2"/>
                <line x1="0" y1="105" x2="45" y2="145" stroke="#334155" stroke-width="2"/>
                <line x1="400" y1="105" x2="355" y2="145" stroke="#334155" stroke-width="2"/>

                <!-- ACTIVE UPLINK LINK: High-Energy Beam & Signal Waves Linking Bay to Floating Satellite -->
                <line x1="50" y1="85" x2="236" y2="72" stroke="rgba(56, 189, 248, 0.2)" stroke-width="10"/>
                <line x1="50" y1="85" x2="236" y2="72" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="8,5" class="story-anim-uplink-pulse"/>
                <line x1="50" y1="85" x2="236" y2="72" stroke="#ffffff" stroke-width="1" opacity="0.85"/>
                <!-- Concentric Uplink Signal Pulse Arcs at Bay Transceiver -->
                <g transform="translate(50, 85)">
                    <circle cx="0" cy="0" r="4" fill="none" stroke="#38bdf8" stroke-width="2" class="story-anim-signal-ring-1"/>
                    <circle cx="0" cy="0" r="4" fill="none" stroke="#00f0ff" stroke-width="1.8" class="story-anim-signal-ring-2"/>
                    <circle cx="0" cy="0" r="4" fill="none" stroke="#818cf8" stroke-width="1.5" class="story-anim-signal-ring-3"/>
                </g>
                <!-- Floating Data Packet Pulse along the link line -->
                <circle cx="143" cy="78" r="3.2" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)" class="story-anim-holo-dot"/>
                <circle cx="143" cy="78" r="1.6" fill="#ffffff"/>

                <!-- FLOATING SATELLITE IN SPACE (DRIFTING IN ZERO-G) - NESTED RELATIVE RIG -->
                <g transform="translate(250, 62)">
                    <g class="story-anim-satellite-float">
                        <!-- Main Gold Satellite Bus -->
                        <rect x="-14" y="-12" width="28" height="24" rx="4" fill="#d97706" stroke="#f59e0b" stroke-width="1.8" filter="drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))"/>
                        <line x1="-14" y1="-4" x2="14" y2="-4" stroke="#b45309" stroke-width="1"/>
                        <line x1="-14" y1="4" x2="14" y2="4" stroke="#b45309" stroke-width="1"/>
                        <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
                        <circle cx="0" cy="0" r="2.5" fill="#38bdf8"/>
                        <!-- Left Solar Array Wing with Telemetry LED -->
                        <line x1="-14" y1="0" x2="-22" y2="0" stroke="#94a3b8" stroke-width="3"/>
                        <rect x="-56" y="-14" width="34" height="28" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                        <line x1="-39" y1="-14" x2="-39" y2="14" stroke="#38bdf8" stroke-width="1.5"/>
                        <line x1="-56" y1="0" x2="-22" y2="0" stroke="#38bdf8" stroke-width="1"/>
                        <circle cx="-52" cy="-10" r="1.5" fill="#22c55e" class="story-anim-led-1"/>
                        <!-- Right Solar Array Wing with Telemetry LED -->
                        <line x1="14" y1="0" x2="22" y2="0" stroke="#94a3b8" stroke-width="3"/>
                        <rect x="22" y="-14" width="34" height="28" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                        <line x1="39" y1="-14" x2="39" y2="14" stroke="#38bdf8" stroke-width="1.5"/>
                        <line x1="22" y1="0" x2="56" y2="0" stroke="#38bdf8" stroke-width="1"/>
                        <circle cx="52" cy="-10" r="1.5" fill="#38bdf8" class="story-anim-led-2"/>
                        <!-- Satellite Comm Dish Pointed directly at Bay Transceiver Beam -->
                        <g transform="translate(-14, 8) rotate(-10)">
                            <path d="M-12 0 Q0 -9 12 0" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
                            <line x1="0" y1="-4" x2="0" y2="-11" stroke="#38bdf8" stroke-width="1.5"/>
                            <circle cx="0" cy="-11" r="2" fill="#00f0ff" filter="drop-shadow(0 0 4px #00f0ff)"/>
                        </g>
                        <!-- Top Antenna Beacon with Red Alert Pulse -->
                        <line x1="0" y1="-12" x2="0" y2="-22" stroke="#94a3b8" stroke-width="1.8"/>
                        <circle cx="0" cy="-22" r="3" fill="#ef4444" class="story-anim-antenna-pulse"/>
                        <!-- Satellite Status Label -->
                        <rect x="-24" y="16" width="48" height="9" rx="2" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" stroke-width="0.8"/>
                        <text x="0" y="23" font-size="6" font-weight="900" fill="#38bdf8" text-anchor="middle">SAT-UPLINK</text>
                    </g>
                </g>

                <!-- SATELLITE BAY INTERIOR (WALL BULKHEAD & UPLINK TURRET DISH) -->
                <rect x="0" y="95" width="95" height="55" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <rect x="305" y="95" width="95" height="55" fill="#1e293b" stroke="#334155" stroke-width="2"/>

                <!-- Bay Uplink Antenna Turret (Left Bulkhead aimed up at the floating satellite) -->
                <g transform="translate(55, 100)">
                    <rect x="-16" y="10" width="32" height="15" rx="3" fill="#334155" stroke="#475569" stroke-width="2"/>
                    <circle cx="0" cy="10" r="9" fill="#475569" stroke="#64748b" stroke-width="2"/>
                    <!-- Heavy Hydraulic Turret Arms -->
                    <line x1="-7" y1="10" x2="-3" y2="-3" stroke="#64748b" stroke-width="3.5"/>
                    <line x1="7" y1="10" x2="3" y2="-3" stroke="#64748b" stroke-width="3.5"/>
                    <!-- Angled Bay Transceiver Dish -->
                    <g transform="rotate(-38)">
                        <path d="M-20 0 Q0 -15 20 0 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
                        <path d="M-16 2 Q0 -10 16 2" stroke="#0284c7" stroke-width="1.5" fill="none"/>
                        <line x1="0" y1="-7" x2="0" y2="-18" stroke="#38bdf8" stroke-width="2.5"/>
                        <circle cx="0" cy="-18" r="4.5" fill="#00f0ff" filter="drop-shadow(0 0 8px #38bdf8)"/>
                        <circle cx="0" cy="-18" r="2" fill="#ffffff"/>
                    </g>
                </g>

                <!-- Bay Telemetry Status Consoles with Active Animated Waveforms -->
                <g transform="translate(5, 102)">
                    <rect x="0" y="0" width="36" height="24" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
                    <path d="M3 12 Q8 4 13 12 T23 12 T33 12" stroke="#22c55e" stroke-width="1.5" fill="none" class="story-anim-monitor-wave"/>
                    <circle cx="6" cy="18" r="1.5" fill="#22c55e" class="story-anim-led-1"/>
                    <circle cx="12" cy="18" r="1.5" fill="#38bdf8" class="story-anim-led-2"/>
                </g>
                <g transform="translate(355, 102)">
                    <rect x="0" y="0" width="40" height="24" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
                    <text x="20" y="8" font-size="5.5" fill="#38bdf8" font-weight="bold" text-anchor="middle">SIGNAL 99%</text>
                    <rect x="4" y="12" width="32" height="5" rx="1.5" fill="#1e293b"/>
                    <rect x="4" y="12" width="28" height="5" rx="1.5" fill="#22c55e" class="story-anim-laser-wave"/>
                </g>

                <!-- SOLID BAY TECH FLOOR (GROUND BASELINE AT Y=175) -->
                <rect x="0" y="145" width="400" height="75" fill="#1e293b"/>
                <rect x="0" y="175" width="400" height="45" fill="#0f172a"/>
                <!-- Yellow/Black Hazard Warning Safety Stripes at Y=175 baseline -->
                <line x1="0" y1="175" x2="400" y2="175" stroke="#facc15" stroke-width="3.5" stroke-dasharray="14,10"/>
                <line x1="100" y1="175" x2="100" y2="220" stroke="#334155" stroke-width="1.5"/>
                <line x1="200" y1="175" x2="200" y2="220" stroke="#334155" stroke-width="1.5"/>
                <line x1="300" y1="175" x2="300" y2="220" stroke="#334155" stroke-width="1.5"/>
                <!-- Embedded Runway LEDs -->
                <circle cx="80" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-1"/>
                <circle cx="180" cy="175" r="2.5" fill="#facc15" class="story-anim-led-2"/>
                <circle cx="280" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-3"/>
            `;
            pedestalGraphic = `
                <g transform="translate(${pedestalX}, 145)">
                    <rect x="0" y="0" width="50" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="6" y1="15" x2="44" y2="15" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <ellipse cx="25" cy="0" rx="25" ry="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                </g>
            `;
        } else if (settingId === 'reactor_room') {
            // Interactive Quantum Core Reactor: Glowing On and Off, Electric Sparks & Clickable Overdrive
            bgGraphic = `
                <defs>
                    <!-- Chamber Backplate Gradient -->
                    <linearGradient id="reactorChamberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#27272a"/>
                        <stop offset="50%" stop-color="#09090b"/>
                        <stop offset="100%" stop-color="#27272a"/>
                    </linearGradient>
                    <!-- Plasma Core Radial Gradient -->
                    <radialGradient id="plasmaCoreGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="28%" stop-color="#fef08a"/>
                        <stop offset="65%" stop-color="#f59e0b"/>
                        <stop offset="100%" stop-color="#dc2626"/>
                    </radialGradient>
                    <!-- Coolant Fluid Pipe Gradient -->
                    <linearGradient id="coolantGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#0284c7"/>
                        <stop offset="50%" stop-color="#38bdf8"/>
                        <stop offset="100%" stop-color="#0284c7"/>
                    </linearGradient>
                </defs>

                <!-- 1. REACTOR ROOM AMBIENT BACKGROUND -->
                <rect width="400" height="220" fill="#09090b"/>

                <!-- Industrial Wall Seams -->
                <line x1="0" y1="40" x2="400" y2="40" stroke="#18181b" stroke-width="1.5"/>
                <line x1="0" y1="85" x2="400" y2="85" stroke="#18181b" stroke-width="1.5"/>
                <line x1="0" y1="130" x2="400" y2="130" stroke="#18181b" stroke-width="1.5"/>
                <line x1="120" y1="0" x2="120" y2="145" stroke="#18181b" stroke-width="1.5"/>
                <line x1="240" y1="0" x2="240" y2="145" stroke="#18181b" stroke-width="1.5"/>

                <!-- High-Voltage Power Conduit Cables running to reactor with Live Sparks -->
                <path d="M0 30 Q120 45 270 25" stroke="#ef4444" stroke-width="3.5" fill="none" opacity="0.8"/>
                <path d="M0 35 Q130 55 270 32" stroke="#f59e0b" stroke-width="3" fill="none" opacity="0.8"/>
                <path d="M0 40 Q140 65 270 40" stroke="#0284c7" stroke-width="2.5" fill="none" opacity="0.8"/>
                <circle cx="130" cy="45" r="2" fill="#00f0ff" class="story-anim-spark-1"/>
                <circle cx="210" cy="38" r="2.2" fill="#facc15" class="story-anim-spark-2"/>

                <!-- Left Wall Diagnostic Telemetry Terminal with Active Heartbeat Wave -->
                <g transform="translate(15, 65)">
                    <rect x="0" y="0" width="65" height="60" rx="4" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
                    <rect x="6" y="6" width="53" height="30" rx="2" fill="#09090b" stroke="#22c55e" stroke-width="1.2"/>
                    <!-- Heartbeat Energy Waveform with Laser Glow -->
                    <path d="M8 21 L18 21 L22 12 L26 28 L30 18 L34 24 L38 21 L56 21" stroke="#22c55e" stroke-width="1.8" fill="none" class="story-anim-laser-wave"/>
                    <text x="32" y="47" font-size="6.5" font-weight="900" fill="#22c55e" text-anchor="middle" class="reactor-status-text">CORE STABLE</text>
                    <circle cx="12" cy="54" r="2.5" fill="#22c55e" class="story-anim-led-1"/>
                    <circle cx="22" cy="54" r="2.5" fill="#facc15" class="story-anim-led-2"/>
                    <circle cx="32" cy="54" r="2.5" fill="#ef4444" class="story-anim-led-3"/>
                </g>

                <!-- 2. THE INTERACTIVE QUANTUM CORE REACTOR (CLICKABLE!) -->
                <g class="interactive-reactor" transform="translate(0, 0)" title="⚡ Click to toggle Quantum Overdrive!">
                    <!-- Heavy Coolant Conduit Pipes with Cooling Steam Puff at Base -->
                    <path d="M255 145 C255 105 275 100 285 85" stroke="url(#coolantGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
                    <path d="M385 145 C385 105 365 100 355 85" stroke="url(#coolantGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
                    <g transform="translate(255, 142)">
                        <circle cx="0" cy="0" r="3.5" fill="#38bdf8" class="story-anim-dust-puff"/>
                    </g>

                    <!-- Main Reactor Housing Tower (Centered at X = 320) -->
                    <rect x="275" y="15" width="90" height="135" rx="10" fill="url(#reactorChamberGrad)" stroke="#f59e0b" stroke-width="3.5" filter="drop-shadow(0 0 12px rgba(245, 158, 11, 0.4))"/>
                    
                    <!-- Top Magnetic Containment Cap with Flashing Red Warning Strobe -->
                    <path d="M280 15 L290 2 L350 2 L360 15 Z" fill="#27272a" stroke="#f59e0b" stroke-width="2"/>
                    <rect x="305" y="-3" width="30" height="6" rx="2" fill="#ef4444" class="story-anim-siren-blink"/>

                    <!-- Bottom Foundation Base -->
                    <rect x="270" y="140" width="100" height="15" rx="3" fill="#27272a" stroke="#71717a" stroke-width="2"/>
                    <rect x="285" y="143" width="70" height="4" fill="#facc15"/>

                    <!-- Transparent Quartz Core Viewing Chamber Window -->
                    <rect x="287" y="25" width="66" height="112" rx="6" fill="#030712" stroke="#38bdf8" stroke-width="2"/>
                    <!-- Window Shimmer Glint -->
                    <path d="M290 30 L345 30 L325 130 L290 130 Z" fill="rgba(56, 189, 248, 0.05)"/>
                    <line x1="293" y1="35" x2="293" y2="125" stroke="#ffffff" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>

                    <!-- Upper & Lower High-Voltage Electrodes -->
                    <rect x="312" y="25" width="16" height="14" rx="2" fill="#52525b" stroke="#a1a1aa" stroke-width="1.5"/>
                    <polygon points="314,39 320,47 326,39" fill="#00f0ff"/>
                    <rect x="312" y="123" width="16" height="14" rx="2" fill="#52525b" stroke="#a1a1aa" stroke-width="1.5"/>
                    <polygon points="314,123 320,115 326,123" fill="#00f0ff"/>

                    <!-- ROTATING MAGNETIC STABILIZER RINGS (Encircling Core) -->
                    <g class="story-anim-reactor-ring-1">
                        <ellipse cx="320" cy="85" rx="28" ry="10" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8,6" opacity="0.85"/>
                    </g>
                    <g class="story-anim-reactor-ring-2">
                        <ellipse cx="320" cy="85" rx="22" ry="32" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="12,8" opacity="0.75"/>
                    </g>

                    <!-- THE GLOWING QUANTUM PLASMA CORE (GLOWS ON AND OFF!) -->
                    <g transform="translate(320, 85)">
                        <!-- Outer Ambient Light Spill -->
                        <circle cx="0" cy="0" r="38" fill="rgba(250, 204, 21, 0.15)" class="story-anim-reactor-glow"/>
                        <!-- Pulsing Plasma Orb -->
                        <circle cx="0" cy="0" r="18" fill="url(#plasmaCoreGrad)" class="story-anim-reactor-glow"/>
                        <!-- Inner Super-Hot Core -->
                        <ellipse cx="0" cy="0" rx="9" ry="12" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)"/>
                    </g>

                    <!-- ELECTRICAL SPARKS & LIGHTNING ARCS SNAPPING ACROSS CHAMBER -->
                    <path d="M320 46 L316 56 L324 64 L318 72 L320 80" stroke="#00f0ff" stroke-width="2" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>
                    <path d="M320 90 L325 98 L315 104 L323 110 L320 116" stroke="#facc15" stroke-width="2.2" fill="none" stroke-linecap="round" class="story-anim-spark-2"/>
                    <path d="M325 80 L335 74 L340 82 L348 76" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round" class="story-anim-spark-3"/>
                    <path d="M312 88 L304 94 L308 100 L298 104" stroke="#38bdf8" stroke-width="2" fill="none" stroke-linecap="round" class="story-anim-spark-1"/>

                    <!-- FLYING BURST SPARKS (LEAPING FROM CORE) -->
                    <g transform="translate(320, 85)">
                        <g class="story-anim-flying-spark-1">
                            <circle cx="-12" cy="-8" r="2.2" fill="#00f0ff" filter="drop-shadow(0 0 4px #00f0ff)"/>
                            <line x1="-12" y1="-8" x2="-8" y2="-5" stroke="#ffffff" stroke-width="1.5"/>
                        </g>
                        <g class="story-anim-flying-spark-2">
                            <circle cx="14" cy="-10" r="2.5" fill="#facc15" filter="drop-shadow(0 0 5px #facc15)"/>
                            <line x1="14" y1="-10" x2="8" y2="-6" stroke="#f59e0b" stroke-width="1.5"/>
                        </g>
                        <g class="story-anim-flying-spark-3">
                            <circle cx="-10" cy="12" r="2.0" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"/>
                            <line x1="-10" y1="12" x2="-6" y2="8" stroke="#38bdf8" stroke-width="1.2"/>
                        </g>
                    </g>

                    <!-- Interactive Click Badge Pill -->
                    <g transform="translate(320, 150)">
                        <rect x="-44" y="2" width="88" height="14" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#f59e0b" stroke-width="1.2"/>
                        <text x="0" y="12" font-size="7" font-weight="900" fill="#facc15" text-anchor="middle" letter-spacing="0.5">⚡ CLICK REACTOR</text>
                    </g>
                </g>

                <!-- 3. SOLID REACTOR ROOM DECK (GROUND BASELINE AT Y = 175) -->
                <rect x="0" y="145" width="400" height="75" fill="#27272a"/>
                <rect x="0" y="175" width="400" height="45" fill="#18181b"/>
                <!-- Red/Yellow Hazard Striping on Baseline Floor Y=175 -->
                <line x1="0" y1="175" x2="400" y2="175" stroke="#ef4444" stroke-width="3" stroke-dasharray="14,8"/>
                <line x1="0" y1="178" x2="400" y2="178" stroke="#facc15" stroke-width="1.5" stroke-dasharray="14,8"/>
                <line x1="100" y1="175" x2="100" y2="220" stroke="#3f3f46" stroke-width="1.5"/>
                <line x1="200" y1="175" x2="200" y2="220" stroke="#3f3f46" stroke-width="1.5"/>
                <line x1="300" y1="175" x2="300" y2="220" stroke="#3f3f46" stroke-width="1.5"/>
            `;
            pedestalGraphic = `
                <g transform="translate(${pedestalX}, 145)">
                    <rect x="0" y="0" width="50" height="30" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="6" y1="15" x2="44" y2="15" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <ellipse cx="25" cy="0" rx="25" ry="6" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
                </g>
            `;
        } else {
            // Quantum Energy Lab: Oscilloscope Waveforms, Telemetry Meters, Space Viewport, 3D Quantum Hologram & Plasma Tube
            bgGraphic = `
                <defs>
                    <!-- Gradients for Quantum Lab -->
                    <linearGradient id="qlabWallGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#090d16"/>
                        <stop offset="60%" stop-color="#1e293b"/>
                        <stop offset="100%" stop-color="#0f172a"/>
                    </linearGradient>
                    <linearGradient id="qlabTubeGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="rgba(56, 189, 248, 0.45)"/>
                        <stop offset="50%" stop-color="rgba(224, 242, 254, 0.2)"/>
                        <stop offset="100%" stop-color="rgba(56, 189, 248, 0.45)"/>
                    </linearGradient>
                    <linearGradient id="qlabCoreBeamGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#38bdf8"/>
                        <stop offset="35%" stop-color="#ffffff"/>
                        <stop offset="65%" stop-color="#00f0ff"/>
                        <stop offset="100%" stop-color="#38bdf8"/>
                    </linearGradient>
                </defs>

                <!-- Deep Space Starfield Void outside Window -->
                <rect width="400" height="220" fill="#030712"/>

                <!-- 1. SPACE VIEWPORT WINDOW (CENTER: X=130 to X=255, Y=14 to Y=122) -->
                <!-- Distant Cosmic Nebula Glow with Soft Pulsing Sheen -->
                <ellipse cx="192" cy="65" rx="55" ry="32" fill="rgba(139, 92, 246, 0.18)" transform="rotate(-15 192 65)" class="story-anim-sun-halo"/>
                <ellipse cx="202" cy="55" rx="42" ry="22" fill="rgba(56, 189, 248, 0.15)" transform="rotate(20 202 55)"/>
                <!-- Twinkling Stars in Viewport -->
                <circle cx="155" cy="45" r="1.3" fill="#ffffff" class="story-anim-twinkle-1"/>
                <circle cx="175" cy="35" r="1.5" fill="#bae6fd" class="story-anim-star-twinkle"/>
                <circle cx="228" cy="42" r="1.0" fill="#ffffff" class="story-anim-twinkle-2"/>
                <circle cx="212" cy="78" r="1.4" fill="#ffffff" class="story-anim-twinkle-3"/>
                <circle cx="148" cy="85" r="1.0" fill="#bae6fd" class="story-anim-twinkle-1"/>
                <circle cx="195" cy="98" r="1.2" fill="#ffffff" class="story-anim-twinkle-2"/>

                <!-- Distant Orbiting Science Satellite drifting in window -->
                <g transform="translate(222, 52) rotate(-15) scale(0.7)">
                    <g class="story-anim-satellite-float">
                        <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#d97706" stroke="#f59e0b" stroke-width="1.2"/>
                        <line x1="-8" y1="0" x2="-18" y2="0" stroke="#94a3b8" stroke-width="2"/>
                        <rect x="-32" y="-7" width="14" height="14" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                        <line x1="-25" y1="-7" x2="-25" y2="7" stroke="#38bdf8" stroke-width="0.8"/>
                        <line x1="8" y1="0" x2="18" y2="0" stroke="#94a3b8" stroke-width="2"/>
                        <rect x="18" y="-7" width="14" height="14" rx="1.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                        <line x1="25" y1="-7" x2="25" y2="7" stroke="#38bdf8" stroke-width="0.8"/>
                        <circle cx="0" cy="0" r="2.5" fill="#38bdf8"/>
                        <circle cx="0" cy="-6" r="1.5" fill="#ef4444" class="story-anim-led-1"/>
                    </g>
                </g>

                <!-- Floating 3D Holographic Quantum Matrix Core (Center Stage Projector) -->
                <g transform="translate(192, 65)">
                    <!-- Hologram Projector Emitter Base on Window Sill -->
                    <ellipse cx="0" cy="45" rx="18" ry="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
                    <ellipse cx="0" cy="45" rx="10" ry="2" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
                    <!-- Upward Cyan Projection Cone Beam -->
                    <polygon points="-12,45 12,45 28,-10 -28,-10" fill="rgba(56, 189, 248, 0.08)" class="story-anim-scan-cone"/>
                    <!-- Floating Rotating Holographic Quantum Lattice -->
                    <g class="story-anim-holo-pulse">
                        <g class="story-anim-astrolabe-spin">
                            <!-- Outer Hexagonal Confinement Ring -->
                            <polygon points="0,-20 18,-10 18,10 0,20 -18,10 -18,-10" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="4,2"/>
                            <!-- Inner Diagonal Matrix Struts -->
                            <line x1="-18" y1="-10" x2="18" y2="10" stroke="#38bdf8" stroke-width="1" opacity="0.8"/>
                            <line x1="-18" y1="10" x2="18" y2="-10" stroke="#38bdf8" stroke-width="1" opacity="0.8"/>
                            <line x1="0" y1="-20" x2="0" y2="20" stroke="#38bdf8" stroke-width="1" opacity="0.8"/>
                            <!-- Hologram Lattice Corner Energy Nodes -->
                            <circle cx="0" cy="-20" r="2.2" fill="#22c55e"/>
                            <circle cx="18" cy="-10" r="2.2" fill="#00f0ff"/>
                            <circle cx="18" cy="10" r="2.2" fill="#22c55e"/>
                            <circle cx="0" cy="20" r="2.2" fill="#00f0ff"/>
                            <circle cx="-18" cy="10" r="2.2" fill="#22c55e"/>
                            <circle cx="-18" cy="-10" r="2.2" fill="#00f0ff"/>
                        </g>
                        <!-- Central Quantum Singularity Core Node -->
                        <circle cx="0" cy="0" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 8px #00f0ff)"/>
                        <circle cx="0" cy="0" r="2.5" fill="#00f0ff"/>
                    </g>
                </g>

                <!-- Viewport Heavy Reinforced Bevel Framing -->
                <rect x="130" y="14" width="125" height="110" rx="8" fill="none" stroke="#1e293b" stroke-width="8"/>
                <polygon points="130,14 148,14 130,32" fill="#1e293b"/>
                <polygon points="255,14 237,14 255,32" fill="#1e293b"/>
                <polygon points="130,124 148,124 130,106" fill="#1e293b"/>
                <polygon points="255,124 237,124 255,106" fill="#1e293b"/>
                <line x1="135" y1="18" x2="250" y2="18" stroke="#334155" stroke-width="1.5"/>
                <line x1="135" y1="120" x2="250" y2="120" stroke="#334155" stroke-width="1.5"/>
                <!-- Glass Sheen Glare Reflection Line -->
                <line x1="138" y1="22" x2="182" y2="114" stroke="rgba(255,255,255,0.12)" stroke-width="2.5" stroke-linecap="round"/>

                <!-- 2. HIGH-TECH LAB WALL BULKHEADS (LEFT & RIGHT) -->
                <!-- Left Server & Hologram Wall (X=0 to X=130) -->
                <rect x="0" y="14" width="130" height="135" fill="url(#qlabWallGrad)" stroke="#334155" stroke-width="1.5"/>
                <!-- Vertical Glowing Cyan Laser Conduits -->
                <line x1="4" y1="14" x2="4" y2="145" stroke="#38bdf8" stroke-width="1.5" opacity="0.7"/>
                <line x1="126" y1="14" x2="126" y2="145" stroke="#38bdf8" stroke-width="1.5" opacity="0.7"/>

                <!-- Main Oscilloscope Diagnostic Rack Panel with Living Waveform Glow -->
                <rect x="8" y="22" width="114" height="54" rx="4" fill="#090d16" stroke="#38bdf8" stroke-width="1.5"/>
                <rect x="14" y="26" width="54" height="9" rx="2" fill="#1e293b"/>
                <text x="41" y="33" font-size="5" font-weight="900" fill="#38bdf8" text-anchor="middle" letter-spacing="0.5">QUANTUM OSC</text>
                <!-- Scope Grid Lines -->
                <line x1="14" y1="52" x2="116" y2="52" stroke="#1e293b" stroke-width="1"/>
                <line x1="38" y1="38" x2="38" y2="70" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="64" y1="38" x2="64" y2="70" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="90" y1="38" x2="90" y2="70" stroke="#1e293b" stroke-width="1" stroke-dasharray="2,2"/>
                <!-- Active Multi-Frequency Green & Cyan Sine Waveforms with Live Glow Pulse -->
                <path d="M14 52 Q26 34 38 52 T62 52 T86 52 T110 52 T116 52" stroke="#22c55e" stroke-width="2" fill="none" stroke-linecap="round" class="story-anim-monitor-wave"/>
                <path d="M14 52 Q28 68 42 52 T70 52 T98 52 T116 52" stroke="#00f0ff" stroke-width="1.6" fill="none" stroke-linecap="round" class="story-anim-laser-wave"/>
                <!-- Pulse Tracer Dot with Active Glow -->
                <circle cx="86" cy="52" r="2.8" fill="#00f0ff" filter="drop-shadow(0 0 5px #00f0ff)" class="story-anim-holo-dot"/>
                <circle cx="86" cy="52" r="1.4" fill="#ffffff"/>

                <!-- Lower Diagnostic Sub-Panel (Telemetry Bars & Server LEDs) -->
                <rect x="8" y="80" width="114" height="62" rx="4" fill="#090d16" stroke="#334155" stroke-width="1.2"/>
                <text x="14" y="91" font-size="5.5" font-weight="900" fill="#22c55e">CORE FLUX: 99.8%</text>
                <text x="70" y="91" font-size="5.5" font-weight="900" fill="#38bdf8">FIELD: STABLE</text>
                <!-- Multi-Segment Energy Level Meters -->
                <rect x="14" y="96" width="48" height="5" rx="1.5" fill="#1e293b"/>
                <rect x="14" y="96" width="44" height="5" rx="1.5" fill="#22c55e" class="story-anim-laser-wave"/>
                <rect x="66" y="96" width="48" height="5" rx="1.5" fill="#1e293b"/>
                <rect x="66" y="96" width="40" height="5" rx="1.5" fill="#38bdf8" class="story-anim-monitor-wave"/>
                <!-- Server LED Indicator Cluster -->
                <g transform="translate(14, 108)">
                    <circle cx="4" cy="5" r="3" fill="#22c55e" class="story-anim-led-1"/>
                    <circle cx="15" cy="5" r="3" fill="#38bdf8" class="story-anim-led-2"/>
                    <circle cx="26" cy="5" r="3" fill="#facc15" class="story-anim-led-3"/>
                    <circle cx="37" cy="5" r="3" fill="#ef4444" class="story-anim-led-1"/>
                    <!-- Interface Touch Buttons -->
                    <rect x="48" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#38bdf8" stroke-width="0.8"/>
                    <rect x="62" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#22c55e" stroke-width="0.8"/>
                    <rect x="76" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#facc15" stroke-width="0.8"/>
                    <rect x="90" y="2" width="11" height="6" rx="1" fill="#1e293b" stroke="#475569" stroke-width="0.8"/>
                </g>
                <!-- Secondary Status Text -->
                <text x="14" y="132" font-size="5" font-weight="800" fill="#64748b" letter-spacing="0.5">SYS // QUANTUM-NODE-01 ONLINE</text>

                <!-- High-Voltage Energy Cable Conduit running down to floor with Live Micro-Sparks -->
                <path d="M120 32 L124 32 L124 145" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
                <path d="M126 48 L128 48 L128 145" stroke="#f59e0b" stroke-width="1.8" fill="none"/>
                <circle cx="124" cy="80" r="1.8" fill="#00f0ff" class="story-anim-spark-1"/>

                <!-- Right Bulkhead Wall & Vertical Quantum Chamber (X=255 to X=400) -->
                <rect x="255" y="14" width="145" height="135" fill="url(#qlabWallGrad)" stroke="#334155" stroke-width="1.5"/>
                <line x1="396" y1="14" x2="396" y2="145" stroke="#38bdf8" stroke-width="1.5" opacity="0.7"/>

                <!-- Vertical Quantum Plasma Cylinder Chamber (X=328 to X=388) -->
                <rect x="330" y="20" width="54" height="14" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
                <rect x="335" y="29" width="44" height="5" rx="1" fill="#1e293b"/>
                <rect x="330" y="128" width="54" height="17" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
                <rect x="335" y="125" width="44" height="5" rx="1" fill="#1e293b"/>
                <!-- Transparent Quartz Tube Body -->
                <rect x="335" y="34" width="44" height="92" rx="7" fill="url(#qlabTubeGrad)" stroke="#38bdf8" stroke-width="2"/>
                <!-- Internal Resonating Quantum Core Beam & Pulsing Nodes -->
                <line x1="357" y1="36" x2="357" y2="124" stroke="url(#qlabCoreBeamGrad)" stroke-width="3.5" filter="drop-shadow(0 0 6px #00f0ff)"/>
                <line x1="357" y1="36" x2="357" y2="124" stroke="#ffffff" stroke-width="1.2"/>
                <!-- Magnetic Confinement Rings around Tube -->
                <ellipse cx="357" cy="54" rx="24" ry="5.5" fill="none" stroke="#60a5fa" stroke-width="2" class="story-anim-reactor-ring-1"/>
                <ellipse cx="357" cy="80" rx="24" ry="5.5" fill="none" stroke="#38bdf8" stroke-width="2.5" class="story-anim-reactor-ring-2"/>
                <ellipse cx="357" cy="106" rx="24" ry="5.5" fill="none" stroke="#60a5fa" stroke-width="2" class="story-anim-reactor-ring-1"/>
                <!-- Central Super-Hot Plasma Core Orb -->
                <circle cx="357" cy="80" r="9" fill="#38bdf8" class="story-anim-reactor-glow"/>
                <circle cx="357" cy="80" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)"/>
                <!-- Micro Plasma Particle Sparks -->
                <circle cx="349" cy="64" r="2.2" fill="#00f0ff" class="story-anim-led-1"/>
                <circle cx="365" cy="96" r="2.2" fill="#facc15" class="story-anim-led-2"/>

                <!-- Right Wall Telemetry Monitor (X=264 to X=320) -->
                <rect x="264" y="44" width="56" height="46" rx="3" fill="#090d16" stroke="#38bdf8" stroke-width="1.2"/>
                <text x="292" y="54" font-size="5" font-weight="900" fill="#38bdf8" text-anchor="middle" letter-spacing="0.5">STABILIZER</text>
                <circle cx="292" cy="72" r="11" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,3" class="story-anim-reactor-ring-1"/>
                <circle cx="292" cy="72" r="5.5" fill="#22c55e" opacity="0.65"/>
                <text x="292" y="74.5" font-size="5" font-weight="900" fill="#ffffff" text-anchor="middle">100%</text>

                <!-- Sub-console below monitor -->
                <rect x="264" y="96" width="56" height="28" rx="3" fill="#090d16" stroke="#334155" stroke-width="1"/>
                <text x="270" y="106" font-size="4.5" font-weight="bold" fill="#38bdf8">PRESSURE: NORM</text>
                <rect x="270" y="112" width="44" height="4" rx="1" fill="#1e293b"/>
                <rect x="270" y="112" width="36" height="4" rx="1" fill="#22c55e" class="story-anim-laser-wave"/>

                <!-- 3. TOP ARCHITECTURAL LAB CEILING BULKHEAD & FLOODLIGHTS -->
                <rect x="0" y="0" width="400" height="15" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                <line x1="0" y1="15" x2="400" y2="15" stroke="#38bdf8" stroke-width="1" opacity="0.75"/>
                <!-- Recessed Lab Ceiling Floodlights with Soft Downward Glow -->
                <rect x="38" y="4" width="56" height="4" rx="2" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>
                <rect x="172" y="4" width="56" height="4" rx="2" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)"/>
                <rect x="306" y="4" width="56" height="4" rx="2" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>

                <!-- 4. SOLID TECH LAB FLOOR (GROUND BASELINE AT Y=175) -->
                <rect x="0" y="145" width="400" height="75" fill="#1e293b"/>
                <rect x="0" y="175" width="400" height="45" fill="#0f172a"/>
                <!-- Floor Neon Power Conduits leading from Racks to Pedestal -->
                <line x1="0" y1="160" x2="255" y2="160" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="8,4" class="story-anim-neon-line"/>
                <line x1="310" y1="160" x2="400" y2="160" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="8,4" class="story-anim-neon-line"/>
                <!-- Yellow/Black Hazard Warning Safety Stripes at Y=175 baseline -->
                <line x1="0" y1="175" x2="400" y2="175" stroke="#facc15" stroke-width="3.5" stroke-dasharray="14,10"/>
                <line x1="100" y1="175" x2="100" y2="220" stroke="#334155" stroke-width="1.5"/>
                <line x1="200" y1="175" x2="200" y2="220" stroke="#334155" stroke-width="1.5"/>
                <line x1="300" y1="175" x2="300" y2="220" stroke="#334155" stroke-width="1.5"/>
                <!-- Embedded Floor LED Beacons -->
                <circle cx="80" cy="175" r="2.5" fill="#22c55e" class="story-anim-led-1"/>
                <circle cx="180" cy="175" r="2.5" fill="#38bdf8" class="story-anim-led-2"/>
                <circle cx="280" cy="175" r="2.5" fill="#facc15" class="story-anim-led-3"/>
            `;
            pedestalGraphic = `
                <g transform="translate(${pedestalX}, 145)">
                    <rect x="0" y="0" width="50" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="6" y1="15" x2="44" y2="15" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <ellipse cx="25" cy="0" rx="25" ry="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                    <ellipse cx="25" cy="0" rx="18" ry="4" fill="#38bdf8" opacity="0.6"/>
                </g>
            `;
        }

    // Ground Shadows (Solo Hero strictly uses story-anim-shadow-6steps across all 4 scenes)
    const heroShadow = `<g class="story-anim-shadow-6steps"><ellipse cx="${charX}" cy="${groundY + 3}" rx="32" ry="7" fill="rgba(0,0,0,0.3)"/></g>`;
    const propShadow = `<ellipse cx="${propX}" cy="${groundY + 2}" rx="22" ry="5.5" fill="rgba(0,0,0,0.2)"/>`;

    // Dynamic Narrative Solo Hero Graphic
    charGraphic = renderQuantumCharacter(charId, charX, groundY, charPose, false);

    // Standalone Prop Graphics (24 Character-Scoped Props)
    propGraphic = renderQuantumPropSVG(propId, propX, propY, isClimax, settingId);

    // Story Progression Overlays for Each Chapter Scene
    if (isSetup) {
        storyActionOverlays = `
            <!-- Panel 1: Establishing Reconnaissance Scan -->
            <g class="story-anim-scan-cone" style="transform-origin: ${charX + 20}px 125px;">
                <path d="M ${charX + 20} 125 L ${propX} 80 L ${propX} 175 Z" fill="rgba(56, 189, 248, 0.08)" stroke="rgba(56, 189, 248, 0.45)" stroke-width="0.8" stroke-dasharray="5,4"/>
                <circle cx="${charX + 110}" cy="120" r="3" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
            </g>
        `;
    } else if (isDiscovery) {
        storyActionOverlays = `
            <!-- Panel 2: Discovery & Quantum Interaction -->
            <line x1="${charX + 24}" y1="120" x2="${propX - 16}" y2="105" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" class="story-anim-beam-connect"/>
            <line x1="${charX + 24}" y1="120" x2="${propX - 16}" y2="105" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
            <g transform="translate(${propX}, 105)">
                <circle cx="0" cy="0" r="28" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="6,4" class="story-anim-ring-spin"/>
                <circle cx="0" cy="0" r="38" fill="none" stroke="#818cf8" stroke-width="1.2" stroke-dasharray="4,4"/>
            </g>
        `;
    } else if (isClimax) {
        storyActionOverlays = `
            <!-- Panel 3: Conflict / Crisis Red Alert Mode -->
            <rect width="400" height="220" fill="rgba(239, 68, 68, 0.22)" class="story-anim-red-alert"/>
            <g>
                <circle cx="45" cy="18" r="7" fill="#ef4444" class="story-anim-siren-blink"/>
                <circle cx="355" cy="18" r="7" fill="#ef4444" class="story-anim-siren-blink"/>
                <path d="M 45 18 L 0 90 L 120 180 Z" fill="rgba(239, 68, 68, 0.14)"/>
                <path d="M 355 18 L 400 90 L 280 180 Z" fill="rgba(239, 68, 68, 0.14)"/>
            </g>
            <path d="M ${propX} 110 L ${propX - 25} 85 L ${propX - 10} 80 L ${propX - 40} 60" stroke="#facc15" stroke-width="2.8" fill="none" class="story-anim-spark-1"/>
            <path d="M ${propX} 110 L ${propX + 30} 90 L ${propX + 15} 75 L ${propX + 45} 62" stroke="#00f0ff" stroke-width="2.5" fill="none" class="story-anim-spark-2"/>
            <path d="M ${propX} 110 L ${propX + 10} 140 L ${propX - 8} 150 L ${propX + 25} 170" stroke="#ef4444" stroke-width="2.2" fill="none" class="story-anim-spark-3"/>
        `;
    } else if (isResolution) {
        storyActionOverlays = `
            <!-- Panel 4: Resolution & Victory Emerald Atmosphere -->
            <rect width="400" height="220" fill="rgba(34, 197, 94, 0.08)"/>
            <!-- Floating Golden & Cyan Victory Stars -->
            <g class="story-anim-star-float" style="transform-origin: 150px 70px;">
                <path d="M 150 55 Q 150 63 158 63 Q 150 63 150 71 Q 150 63 142 63 Q 150 63 150 55 Z" fill="#facc15" filter="drop-shadow(0 0 6px #facc15)"/>
            </g>
            <g class="story-anim-star-float" style="transform-origin: 220px 48px; animation-delay: 0.7s;">
                <path d="M 220 35 Q 220 42 227 42 Q 220 42 220 49 Q 220 42 213 42 Q 220 42 220 35 Z" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>
            </g>
            <g class="story-anim-star-float" style="transform-origin: 90px 65px; animation-delay: 1.2s;">
                <path d="M 90 55 Q 90 60 95 60 Q 90 60 90 65 Q 90 60 85 60 Q 90 60 90 55 Z" fill="#22c55e" filter="drop-shadow(0 0 4px #22c55e)"/>
            </g>
            <circle cx="175" cy="50" r="2.5" fill="#fef08a" class="story-anim-star-float"/>
            <circle cx="260" cy="65" r="2" fill="#67e8f9" class="story-anim-star-float"/>
        `;
    }

    // Two-Phase Sci-Fi Mystery Twist Overlay (Panel 3 Climax -> Panel 4 Resolution)
    twistOverlay = renderQuantumTwistOverlay(twist, panelIdx);

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

// Register Cartridge into Story Builder Cartridge System
if (typeof registerStoryUniverse === 'function') {
    registerStoryUniverse('intermediate', QUANTUM_KEY_UNIVERSE);
}
if (typeof registerStoryComicRenderer === 'function') {
    registerStoryComicRenderer('intermediate', renderIntermediateComicSVG);
    registerStoryComicRenderer('storyboard_1', renderIntermediateComicSVG);
    registerStoryComicRenderer('storyboard_2', renderIntermediateComicSVG);
    registerStoryComicRenderer('quantum_key', renderIntermediateComicSVG);
}
if (typeof window !== 'undefined') {
    window.QUANTUM_KEY_UNIVERSE = QUANTUM_KEY_UNIVERSE;
    window.Storyboard1_Intermediate = QUANTUM_KEY_UNIVERSE;
    window.renderIntermediateComicSVG = renderIntermediateComicSVG;
    window.generateIntermediateStoryPanels = generateIntermediateStoryPanels;
}
