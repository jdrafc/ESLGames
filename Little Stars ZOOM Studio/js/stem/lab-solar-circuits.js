/* ==========================================================================
   STEM LAB CARTRIDGE: Solar Orbits & Electric Circuits (Advanced Level 3)
   ========================================================================== */

function getStemSolarSystemDiagramSVG() {
    return `
        <svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg">
            <!-- Deep Space -->
            <rect x="0" y="0" width="680" height="250" fill="#090d16"/>
            <!-- Stars -->
            <circle cx="50" cy="30" r="1.5" fill="#fff" opacity="0.8"/>
            <circle cx="120" cy="220" r="1.2" fill="#fff" opacity="0.7"/>
            <circle cx="210" cy="40" r="1.8" fill="#fff" opacity="0.9"/>
            <circle cx="340" cy="210" r="1.2" fill="#fff" opacity="0.6"/>
            <circle cx="430" cy="35" r="1.5" fill="#fff" opacity="0.8"/>
            <circle cx="540" cy="220" r="1.5" fill="#fff" opacity="0.8"/>
            <circle cx="580" cy="35" r="1.2" fill="#fff" opacity="0.7"/>
            <circle cx="650" cy="190" r="1.5" fill="#fff" opacity="0.8"/>
            <circle cx="660" cy="50" r="1.2" fill="#fff" opacity="0.7"/>

            <!-- Orbital Track Lines -->
            <!-- Earth's Orbital Path: Ellipse enclosing Sun and inner planets -->
            <ellipse cx="135" cy="92" rx="115" ry="66" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" fill="none"/>
            <!-- Outer Planets Orbit Tracks -->
            <path d="M45 125 C140 10, 360 10, 475 125 C360 240, 140 240, 45 125" stroke="#334155" stroke-width="1.5" stroke-dasharray="5,5" fill="none"/>
            <path d="M45 125 C200 5, 520 5, 620 125 C520 245, 200 245, 45 125" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5,5" fill="none"/>

            <!-- 1. The Sun (No banner needed) -->
            <g class="stem-hotspot" data-hotspot-id="sun">
                <circle cx="45" cy="125" r="40" fill="#f59e0b" filter="drop-shadow(0 0 16px #facc15)"/>
                <circle cx="45" cy="125" r="34" fill="#facc15"/>
                <text x="45" y="130" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">☀️ The Sun</text>
            </g>

            <!-- 2. Inner Planets (Mercury & Venus) -->
            <g class="stem-hotspot" data-hotspot-id="inner">
                <!-- Planet Names Outside Banner -->
                <circle cx="125" cy="94" r="7" fill="#94a3b8"/>
                <text x="125" y="80" font-size="10" font-weight="bold" fill="#cbd5e1" text-anchor="middle">Mercury</text>
                <!-- Venus moved down clear of banner -->
                <circle cx="155" cy="158" r="11" fill="#fde047"/>
                <text x="155" y="184" font-size="10" font-weight="bold" fill="#fef08a" text-anchor="middle">Venus</text>
                <!-- Banner reads just "Hot Planets" -->
                <rect x="100" y="114" width="88" height="22" rx="11" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
                <text x="144" y="129" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">🪐 Hot Planets</text>
            </g>

            <!-- 3. Earth & Moon -->
            <g class="stem-hotspot" data-hotspot-id="earth">
                <!-- Stationary Banner reads just "Home" -->
                <rect x="220" y="114" width="60" height="22" rx="11" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                <text x="250" y="129" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">🌍 Home</text>
                
                <!-- Orbiting Earth Globe & Moon Group (elevated to cy=92 so it does not touch banner at y=114) -->
                <g id="stem-earth-globe">
                    <!-- Planet Name Outside Banner -->
                    <text x="246" y="66" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Earth</text>
                    <circle cx="250" cy="92" r="15" fill="#38bdf8"/>
                    <path d="M244 84 C248 86 254 88 258 84 C262 90 258 98 252 100 Z" fill="#22c55e"/>
                    
                    <!-- Moon Sphere & Moon Label Outside Banner -->
                    <circle cx="274" cy="78" r="4" fill="#e2e8f0"/>
                    <text x="282" y="81" font-size="9" font-weight="bold" fill="#e2e8f0" text-anchor="start">Moon</text>
                </g>
            </g>

            <!-- 4. Mars (Red Planet) -->
            <g class="stem-hotspot" data-hotspot-id="mars">
                <!-- Planet Name Outside Banner -->
                <text x="330" y="70" font-size="11" font-weight="bold" fill="#fca5a5" text-anchor="middle">Mars</text>
                <circle cx="330" cy="92" r="12" fill="#ef4444"/>
                <circle cx="330" cy="86" r="3" fill="#ffffff" opacity="0.8"/>
                <!-- Banner reads just "Red" -->
                <rect x="300" y="114" width="60" height="22" rx="11" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
                <text x="330" y="129" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">🔴 Red</text>
            </g>

            <!-- 5. Gas Giants (Jupiter & Saturn) -->
            <g class="stem-hotspot" data-hotspot-id="giants">
                <!-- Planet Names Outside Banner -->
                <circle cx="410" cy="75" r="22" fill="#fdba74"/>
                <line x1="390" y1="70" x2="430" y2="70" stroke="#ea580c" stroke-width="3"/>
                <line x1="390" y1="80" x2="430" y2="80" stroke="#ea580c" stroke-width="2"/>
                <text x="410" y="46" font-size="11" font-weight="bold" fill="#fed7aa" text-anchor="middle">Jupiter</text>
                
                <ellipse cx="475" cy="160" rx="25" ry="6.5" fill="none" stroke="#fef08a" stroke-width="3" transform="rotate(-15 475 160)"/>
                <circle cx="475" cy="160" r="15" fill="#fde047"/>
                <text x="475" y="188" font-size="11" font-weight="bold" fill="#fef08a" text-anchor="middle">Saturn</text>
                
                <!-- Banner reads just "Giant Orbits" -->
                <rect x="395" y="114" width="95" height="22" rx="11" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
                <text x="442" y="129" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">🪐 Giant Orbits</text>
            </g>

            <!-- 6. Ice Giants (Uranus & Neptune) -->
            <g class="stem-hotspot" data-hotspot-id="ice_giants">
                <!-- Uranus with vertical ring -->
                <ellipse cx="555" cy="80" rx="6" ry="20" fill="none" stroke="#a5f3fc" stroke-width="1.5" opacity="0.75" transform="rotate(15 555 80)"/>
                <circle cx="555" cy="80" r="13" fill="#67e8f9"/>
                <text x="555" y="52" font-size="11" font-weight="bold" fill="#67e8f9" text-anchor="middle">Uranus</text>
                
                <!-- Neptune with storm cloud wisp -->
                <circle cx="620" cy="160" r="13" fill="#2563eb"/>
                <path d="M610 158 Q620 162 630 158" stroke="#93c5fd" stroke-width="1.5" fill="none" opacity="0.8"/>
                <text x="620" y="188" font-size="11" font-weight="bold" fill="#60a5fa" text-anchor="middle">Neptune</text>
                
                <!-- Banner reads just "Ice Giants" -->
                <rect x="540" y="114" width="92" height="22" rx="11" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
                <text x="586" y="129" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">❄️ Ice Giants</text>
            </g>
        </svg>
    `;
}

/* --- STEM EXPERIMENT SIMULATOR SVG GENERATORS --- */

function getStemCircuitSVG(item, tested) {
    // Advanced: Electric Circuit Lab
    const isComplete = tested && item.conducts;

    const wireColor = isComplete ? '#facc15' : '#64748b';
    const wireWidth = isComplete ? '5' : '4';
    const bulbClass = isComplete ? 'anim-glow' : '';

    return `
        <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
            <!-- Circuit Breadboard Base -->
            <rect x="30" y="20" width="440" height="160" rx="14" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <!-- Grid Dots on Board -->
            <circle cx="100" cy="50" r="2" fill="#047857"/>
            <circle cx="180" cy="50" r="2" fill="#047857"/>
            <circle cx="320" cy="50" r="2" fill="#047857"/>
            <circle cx="400" cy="50" r="2" fill="#047857"/>
            <circle cx="100" cy="150" r="2" fill="#047857"/>
            <circle cx="180" cy="150" r="2" fill="#047857"/>
            <circle cx="320" cy="150" r="2" fill="#047857"/>
            <circle cx="400" cy="150" r="2" fill="#047857"/>

            <!-- Circuit Wires -->
            <!-- Top Wire: Battery to Bulb -->
            <path d="M85 85 L85 45 L225 45" stroke="${wireColor}" stroke-width="${wireWidth}" fill="none"/>
            <!-- Top Wire: Bulb to Test Gap -->
            <path d="M275 45 L415 45 L415 80" stroke="${wireColor}" stroke-width="${wireWidth}" fill="none"/>
            <!-- Bottom Wire: Test Gap straight to Battery (Solid Unbroken Wire) -->
            <path d="M415 120 L415 155 L85 155 L85 115" stroke="${wireColor}" stroke-width="${wireWidth}" fill="none"/>

            <!-- 1. DC Battery on Left -->
            <g transform="translate(65, 82)">
                <rect x="0" y="0" width="40" height="34" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
                <rect x="12" y="-4" width="16" height="4" fill="#ef4444"/>
                <text x="20" y="16" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">+</text>
                <text x="20" y="28" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle">-</text>
                <text x="-5" y="18" font-size="10" font-weight="bold" fill="#6ee7b7">🔋 9V</text>
            </g>

            <!-- 2. Light Bulb Socket & Bulb on Top -->
            <g transform="translate(250, 45)" class="${bulbClass}">
                <!-- Socket Base -->
                <rect x="-14" y="-4" width="28" height="10" rx="2" fill="#94a3b8"/>
                <!-- Light Bulb Glass -->
                <circle cx="0" cy="-22" r="18" fill="${isComplete ? '#fef08a' : '#cbd5e1'}" stroke="${isComplete ? '#f59e0b' : '#94a3b8'}" stroke-width="2"/>
                <!-- Filament inside -->
                <path d="M-6 -10 L-3 -22 L3 -22 L6 -10" stroke="${isComplete ? '#ef4444' : '#64748b'}" stroke-width="1.5" fill="none"/>
                ${isComplete ? `
                    <!-- Radiant Yellow Rays -->
                    <line x1="0" y1="-46" x2="0" y2="-54" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                    <line x1="-22" y1="-38" x2="-29" y2="-44" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                    <line x1="22" y1="-38" x2="29" y2="-44" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                ` : ''}
            </g>

            <!-- 3. Material Test Gap with Alligator Clips on Right -->
            <g transform="translate(415, 80)">
                <rect x="-18" y="-6" width="36" height="8" rx="2" fill="#ef4444"/>
                <rect x="-18" y="38" width="36" height="8" rx="2" fill="#1e293b"/>
                
                <!-- Inserted Material -->
                ${item.id === 'copper' ? `
                    <!-- Stranded Flexible Copper Wire -->
                    <g>
                        <!-- Stripped Copper Filaments biting into Top Red Terminal -->
                        <path d="M-3 0 L-5 -3 M0 0 L0 -4 M3 0 L5 -3" stroke="#ea580c" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M-1.5 0 L-2.5 -4 M1.5 0 L2.5 -4" stroke="#fed7aa" stroke-width="1" stroke-linecap="round"/>

                        <!-- Stripped Copper Filaments biting into Bottom Black Terminal -->
                        <path d="M-3 40 L-5 43 M0 40 L0 44 M3 40 L5 43" stroke="#ea580c" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M-1.5 40 L-2.5 44 M1.5 40 L2.5 44" stroke="#fed7aa" stroke-width="1" stroke-linecap="round"/>

                        <!-- Main Copper Wire Body (Flexible curved stranded wire) -->
                        <!-- Dark shadow outline -->
                        <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#7c2d12" stroke-width="7.5" stroke-linecap="round" fill="none"/>
                        <!-- Deep copper core -->
                        <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#c2410c" stroke-width="6" stroke-linecap="round" fill="none"/>
                        <!-- Bright polished copper -->
                        <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#ea580c" stroke-width="4.5" stroke-linecap="round" fill="none"/>
                        <!-- Specular metallic shine -->
                        <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#fed7aa" stroke-width="1.5" stroke-linecap="round" fill="none"/>

                        <!-- Twisted Braided Wire Strands (Diagonal twist lines) -->
                        <g stroke="#7c2d12" stroke-width="1" opacity="0.75">
                            <line x1="-3" y1="5" x2="3" y2="9"/>
                            <line x1="-4" y1="12" x2="2" y2="16"/>
                            <line x1="-3" y1="19" x2="3" y2="23"/>
                            <line x1="-2" y1="26" x2="4" y2="30"/>
                            <line x1="-3" y1="33" x2="3" y2="37"/>
                        </g>
                        <g stroke="#ffedd5" stroke-width="0.8" opacity="0.9">
                            <line x1="-2" y1="6" x2="2.5" y2="9.5"/>
                            <line x1="-3" y1="13" x2="1.5" y2="16.5"/>
                            <line x1="-2" y1="20" x2="2.5" y2="23.5"/>
                            <line x1="-1" y1="27" x2="3.5" y2="30.5"/>
                            <line x1="-2" y1="34" x2="2.5" y2="37.5"/>
                        </g>

                        ${isComplete ? `
                            <!-- Electric Current Glowing Through Copper Wire -->
                            <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#facc15" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.85"/>
                            <path d="M0 -1 C-4 12, 4 28, 0 41" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                        ` : ''}
                    </g>
                    <text x="-26" y="24" font-size="11" font-weight="bold" fill="#fdba74" text-anchor="end">Copper Wire</text>
                ` : item.id === 'straw' ? `
                    <rect x="-4" y="0" width="8" height="40" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
                    <line x1="-4" y1="12" x2="4" y2="18" stroke="#ef4444" stroke-width="2"/>
                    <line x1="-4" y1="26" x2="4" y2="32" stroke="#ef4444" stroke-width="2"/>
                    <text x="-26" y="24" font-size="11" font-weight="bold" fill="#fca5a5" text-anchor="end">Plastic Straw</text>
                ` : `
                    <!-- Gold Key clamped between red and black terminals -->
                    <g>
                        <circle cx="0" cy="7" r="7.5" fill="#facc15" stroke="#ca8a04" stroke-width="1.8"/>
                        <circle cx="0" cy="7" r="3" fill="#064e3b" stroke="#ca8a04" stroke-width="1.2"/>
                        <rect x="-3" y="13" width="6" height="28" rx="1" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
                        <rect x="3" y="24" width="5" height="4" rx="0.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
                        <rect x="3" y="32" width="4" height="4" rx="0.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
                    </g>
                    <text x="-26" y="24" font-size="11" font-weight="bold" fill="#fde047" text-anchor="end">Gold Key</text>
                `}
            </g>
        </svg>
    `;
}


const COPPER_WIRE_ICON_SVG = `<svg class="stem-chip-wire" width="20" height="16" viewBox="0 0 24 20" style="vertical-align:middle;margin-left:4px;display:inline-block;" xmlns="http://www.w3.org/2000/svg"><path d="M3 13 C3 5.5, 9.5 3.5, 14 7 C18.5 10.5, 18.5 16, 13 17 C7.5 18, 5 13.5, 8.5 9.5 C12 5.5, 18 6, 21 11" stroke="#7c2d12" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M3 13 C3 5.5, 9.5 3.5, 14 7 C18.5 10.5, 18.5 16, 13 17 C7.5 18, 5 13.5, 8.5 9.5 C12 5.5, 18 6, 21 11" stroke="#ea580c" stroke-width="2.6" stroke-linecap="round" fill="none"/><path d="M3.5 12.5 C3.5 6, 9.5 4, 14 7.5 C18 11, 18 15.5, 13 16.5 C8 17.5, 5.5 13.5, 8.5 10 C11.5 6.5, 17.5 6.5, 20.5 11" stroke="#fed7aa" stroke-width="1" stroke-linecap="round" fill="none"/><circle cx="3" cy="13" r="1.8" fill="#fdba74" stroke="#7c2d12" stroke-width="0.8"/><circle cx="21" cy="11" r="1.8" fill="#fdba74" stroke="#7c2d12" stroke-width="0.8"/></svg>`;

const STEM_SOLAR_CIRCUITS_TOPIC_DATA = {
    id: 'solar_circuits',
    diagramType: 'solar_system',
    experimentType: 'electric_circuit',
    title: '⚡ Solar Orbits & Electric Circuits',
    badge: '🔴 Level 3: Space & Electricity',
    vocabFocus: 'Scientific reasoning & energy terms (orbit, gravity, electricity, switch, circuit, power)',
    headTailFocus: 'in- / im- (incomplete, impossible, invisible), over- / under- (overheat), -tion (connection, revolution), -ous (dangerous)',
    conceptSummary: 'Planets orbit around the sun via gravity, and closed circuits allow electric current to flow!',
    diagram: {
        name: 'The Solar System',
        hotspots: [
            {
                id: 'sun',
                label: 'The Sun ☀️',
                title: 'The Sun (Massive Star)',
                desc: 'A giant ball of burning gas with intense gravity holding all planets in orbit.',
                speech: 'Gravity is an invisible force! Getting too close to the Sun is dangerous.',
                tiein: 'invisible (in- = NOT) & dangerous (-ous = FULL OF)',
                x: 45, y: 125, rx: 42, ry: 18
            },
            {
                id: 'inner',
                label: 'Hot Planets (Mercury & Venus) 🪐',
                title: 'Mercury & Venus (Hot Planets)',
                desc: 'Rocky planets close to the Sun that bake under extreme planetary heat.',
                speech: 'Mercury and Venus overheat because they are so close to the Sun.',
                tiein: 'overheat (over- = TOO MUCH)',
                x: 140, y: 125, rx: 65, ry: 18
            },
            {
                id: 'earth',
                label: 'Earth 🌍',
                title: 'Earth (Our Home)',
                desc: 'The only known planet with liquid water, oxygen, and life, taking 365 days to complete one full revolution around the Sun.',
                speech: 'Earth takes 365 days to complete one full revolution around the Sun!',
                tiein: 'revolution (-tion = THE ACT / RESULT)',
                x: 250, y: 92, rx: 45, ry: 18
            },
            {
                id: 'mars',
                label: 'Mars 🔴',
                title: 'Mars (The Red Planet)',
                desc: 'Mars is famously known as the Red Planet! Iron-rich minerals in its dusty soil give it a distinct reddish color, which is why its banner reads Red.',
                speech: 'Mars is famously known as the Red Planet because iron-rich minerals give it a reddish color! Its thin atmosphere is impossible to breathe without a space suit.',
                tiein: 'impossible (im- before P = NOT)',
                x: 330, y: 92, rx: 42, ry: 18
            },
            {
                id: 'giants',
                label: 'Giant Orbits (Jupiter & Saturn) 🪐',
                title: 'Jupiter & Saturn (Gas Giants)',
                desc: 'Gigantic planets made of swirling hydrogen and helium gas with massive ring systems.',
                speech: 'Jupiter and Saturn have powerful gravitation that attracts dozens of moons.',
                tiein: 'gravitation (-tion = THE ACT / RESULT)',
                x: 445, y: 125, rx: 60, ry: 18
            },
            {
                id: 'ice_giants',
                label: 'Ice Giants (Uranus & Neptune) ❄️',
                title: 'Uranus & Neptune (Ice Giants)',
                desc: 'Freezing, distant ice giants made of water, ammonia, and methane ice with howling supersonic winds!',
                speech: 'Uranus and Neptune are freezing ice giants with howling winds at the edge of our solar system.',
                tiein: 'freezing (-ing = CURRENT STATE) & distant',
                x: 585, y: 125, rx: 60, ry: 18
            }
        ]
    },
    experiment: {
        title: '💡 The Electric Circuit Lab',
        desc: 'Test different materials inside the circuit gap to discover which ones conduct electric power!',
        items: [
            {
                id: 'copper',
                name: `Copper Wire ${COPPER_WIRE_ICON_SVG}`,
                speakName: 'copper wire',
                material: 'Copper metal (Great conductor)',
                conducts: true,
                predictFrame: 'The [copper wire] will complete the electric circuit!',
                resultFrame: 'The [copper wire] made an electric connection! The bulb glows bright!',
                resultDesc: 'Copper has free electrons that let electricity flow smoothly to power the light bulb!',
                tiein: 'connection (-tion = THE ACT / RESULT)'
            },
            {
                id: 'straw',
                name: 'Plastic Straw 🥤',
                speakName: 'plastic straw',
                material: 'Plastic (Insulator)',
                conducts: false,
                predictFrame: 'The [plastic straw] will make the circuit incomplete.',
                resultFrame: 'The circuit is incomplete! Plastic stops electricity.',
                resultDesc: 'Plastic is an electrical insulator. Electricity cannot travel through it.',
                tiein: 'incomplete (in- = NOT)'
            },
            {
                id: 'key',
                name: 'Gold Key 🗝️',
                speakName: 'gold key',
                material: 'Solid metal (Conductor)',
                conducts: true,
                predictFrame: 'The [gold key] will conduct electricity easily!',
                resultFrame: 'Power flows through the metal key! Bright light shines!',
                resultDesc: 'Metals like gold and brass are fantastic electrical conductors.',
                tiein: 'luminous / bright (-ous = FULL OF)'
            }
        ]
    }
};

// Register into STEM cartridge registry
if (typeof registerStemDiagram === 'function') {
    registerStemDiagram('solar_system', getStemSolarSystemDiagramSVG);
}
if (typeof registerStemExperiment === 'function') {
    registerStemExperiment('electric_circuit', getStemCircuitSVG);
}
if (typeof registerStemTopic === 'function') {
    registerStemTopic('advanced', STEM_SOLAR_CIRCUITS_TOPIC_DATA);
}
if (typeof window !== 'undefined') {
    window.getStemSolarSystemDiagramSVG = getStemSolarSystemDiagramSVG;
    window.getStemCircuitSVG = getStemCircuitSVG;
    window.STEM_SOLAR_CIRCUITS_TOPIC_DATA = STEM_SOLAR_CIRCUITS_TOPIC_DATA;
    window.COPPER_WIRE_ICON_SVG = COPPER_WIRE_ICON_SVG;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        level: 'advanced',
        topicData: STEM_SOLAR_CIRCUITS_TOPIC_DATA,
        getDiagramSVG: getStemSolarSystemDiagramSVG,
        getExperimentSVG: getStemCircuitSVG
    };
}
