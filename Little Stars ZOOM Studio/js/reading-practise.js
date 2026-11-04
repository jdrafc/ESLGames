/* ==========================================================================
   READING SKILLS PRACTISE ENGINE (AGES 8-10)
   4-Phase Interactive Core Reader with Level & Unit Selectors
   ========================================================================== */

const practiseState = {
    currentLevel: 'intermediate',
    currentUnitId: 'unit_01_hungry_squirrels',
    currentPhase: 1,
    voiceMode: 'tts', // 'tts' or 'live'
    ttsSpeed: 0.85,   // 0.85 or 1.0
    readingFocusPaused: false,
    activeSentenceIndex: -1,
    solvedPronouns: {},
    healedBugs: {},
    selectedCloze: {}
};

/* --- PROCEDURAL VECTOR SVGS --- */

function getPractiseVocabSVG(type) {
    switch (type) {
        case 'piece':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="pslice" cx="40%" cy="30%" r="70%">
                        <stop offset="0%" stop-color="#fed7aa"/>
                        <stop offset="100%" stop-color="#ea580c"/>
                    </radialGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3"/>
                <path d="M 80,70 L 30,30 A 60,60 0 0,1 125,25 Z" fill="url(#pslice)" stroke="#c2410c" stroke-width="3" stroke-linejoin="round"/>
                <!-- Crumb dots -->
                <circle cx="50" cy="85" r="4" fill="#d97706"/>
                <circle cx="65" cy="100" r="3" fill="#d97706"/>
                <circle cx="110" cy="80" r="5" fill="#d97706"/>
                <circle cx="95" cy="105" r="3.5" fill="#d97706"/>
                <!-- Piece label tag -->
                <rect x="52" y="112" width="56" height="20" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">1 PIECE</text>
            </svg>`;

        case 'squirrel':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sqFur" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#b45309"/>
                        <stop offset="100%" stop-color="#78350f"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#f0fdf4" stroke="#dcfce7" stroke-width="3"/>
                <!-- Fluffy bushy tail -->
                <path d="M 85,85 C 125,95 140,55 125,35 C 110,15 85,25 90,45 C 95,60 75,70 85,85 Z" fill="url(#sqFur)" stroke="#451a03" stroke-width="2.5"/>
                <!-- Body -->
                <ellipse cx="75" cy="85" rx="22" ry="28" fill="url(#sqFur)"/>
                <ellipse cx="68" cy="88" rx="12" ry="18" fill="#fef3c7"/>
                <!-- Head -->
                <circle cx="65" cy="50" r="16" fill="url(#sqFur)"/>
                <!-- Ear -->
                <polygon points="62,36 68,26 73,37" fill="#92400e" stroke="#451a03" stroke-width="1.5"/>
                <!-- Eye with highlight -->
                <circle cx="60" cy="48" r="3.5" fill="#1e293b"/>
                <circle cx="59" cy="46.5" r="1.2" fill="#ffffff"/>
                <!-- Snout & Nose -->
                <circle cx="52" cy="53" r="2.5" fill="#451a03"/>
                <!-- Little paws holding small nut -->
                <ellipse cx="56" cy="78" rx="5" ry="4" fill="#92400e"/>
                <circle cx="50" cy="78" r="4" fill="#78350f"/>
                <!-- Little feet -->
                <ellipse cx="70" cy="112" rx="10" ry="4" fill="#78350f"/>
            </svg>`;

        case 'chestnut':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="chShell" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#854d0e"/>
                        <stop offset="60%" stop-color="#713f12"/>
                        <stop offset="100%" stop-color="#451a03"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#fefce8" stroke="#fef08a" stroke-width="3"/>
                <!-- Spiky burr husk behind -->
                <circle cx="105" cy="55" r="28" fill="#65a30d" stroke="#4d7c0f" stroke-width="2" stroke-dasharray="4,3"/>
                <!-- Main Nut -->
                <path d="M 75,35 C 95,35 115,55 115,80 C 115,100 95,110 75,110 C 55,110 35,100 35,80 C 35,55 55,35 75,35 Z" fill="url(#chShell)" stroke="#3f1d0b" stroke-width="3"/>
                <!-- Chestnut bottom hilum patch -->
                <path d="M 45,88 C 55,78 95,78 105,88 C 100,108 50,108 45,88 Z" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
                <!-- Glossy shine streak -->
                <path d="M 52,48 Q 65,42 78,45" stroke="rgba(255,255,255,0.6)" stroke-width="4" stroke-linecap="round" fill="none"/>
            </svg>`;

        case 'hungry':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="70" r="58" fill="#fff7ed" stroke="#fed7aa" stroke-width="3"/>
                <!-- Cute expressive face -->
                <circle cx="80" cy="68" r="42" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
                <!-- Sad hungry puppy-dog eyes -->
                <ellipse cx="66" cy="62" rx="7" ry="10" fill="#1e293b"/>
                <ellipse cx="94" cy="62" rx="7" ry="10" fill="#1e293b"/>
                <circle cx="64" cy="58" r="3" fill="#ffffff"/>
                <circle cx="92" cy="58" r="3" fill="#ffffff"/>
                <circle cx="68" cy="66" r="1.5" fill="#ffffff"/>
                <circle cx="96" cy="66" r="1.5" fill="#ffffff"/>
                <!-- Cute sad droop eyebrows -->
                <path d="M 58,48 Q 67,54 74,50" stroke="#9a3412" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M 102,48 Q 93,54 86,50" stroke="#9a3412" stroke-width="3" stroke-linecap="round" fill="none"/>
                <!-- Open hungry mouth -->
                <path d="M 72,82 Q 80,94 88,82 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
                <!-- Dream bubble: Bread + Chestnut -->
                <circle cx="120" cy="35" r="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                <text x="120" y="41" text-anchor="middle" font-size="14">🌰</text>
                <circle cx="106" cy="46" r="4" fill="#ffffff" stroke="#cbd5e1"/>
                <circle cx="98" cy="54" r="2.5" fill="#ffffff" stroke="#cbd5e1"/>
            </svg>`;

        case 'kind':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="kindHeart" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#f43f5e"/>
                        <stop offset="100%" stop-color="#be123c"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#fff1f2" stroke="#fecdd3" stroke-width="3"/>
                <!-- Helping Hands cradling a warm heart -->
                <!-- Big heart -->
                <path d="M 80,52 C 70,30 40,35 40,62 C 40,84 80,105 80,105 C 80,105 120,84 120,62 C 120,35 90,30 80,52 Z" fill="url(#kindHeart)" stroke="#9f1239" stroke-width="2.5"/>
                <!-- Sparkles -->
                <text x="42" y="38" font-size="16">✨</text>
                <text x="108" y="42" font-size="14">✨</text>
                <!-- Happy eye arcs inside heart -->
                <path d="M 62,64 Q 68,59 74,64" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <path d="M 86,64 Q 92,59 98,64" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <path d="M 75,72 Q 80,78 85,72" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            </svg>`;

        case 'bluebird':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="vbDorsal" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#38bdf8"/>
                        <stop offset="100%" stop-color="#0284c7"/>
                    </linearGradient>
                    <linearGradient id="vbBreast" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#fb923c"/>
                        <stop offset="100%" stop-color="#ea580c"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#eff6ff" stroke="#bfdbfe" stroke-width="3"/>
                <!-- Perched Twig -->
                <line x1="30" y1="100" x2="130" y2="100" stroke="#78350f" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M 115,100 Q 125,92 132,96 Q 124,102 115,100 Z" fill="#22c55e"/>
                <!-- Bird Tail -->
                <path d="M 60,85 L 42,108 L 48,110 L 68,90 Z" fill="#0369a1"/>
                <!-- Body -->
                <ellipse cx="80" cy="74" rx="22" ry="17" fill="url(#vbDorsal)"/>
                <path d="M 74,74 Q 88,88 98,78 Q 100,68 94,64 Q 80,68 74,74 Z" fill="url(#vbBreast)"/>
                <ellipse cx="84" cy="80" rx="10" ry="6" fill="#f8fafc"/>
                <!-- Wing -->
                <path d="M 72,68 C 62,70 54,80 50,90 C 60,86 70,76 72,68 Z" fill="#0369a1" stroke="#1e3a8a" stroke-width="1"/>
                <!-- Head -->
                <circle cx="94" cy="58" r="14" fill="url(#vbDorsal)"/>
                <!-- Eye -->
                <circle cx="98" cy="55" r="3.2" fill="#0f172a"/>
                <circle cx="97" cy="54" r="1.1" fill="#ffffff"/>
                <!-- Beak -->
                <polygon points="106,56 118,59 106,62" fill="#1e293b"/>
                <!-- Feet claws gripping twig -->
                <line x1="75" y1="91" x2="75" y2="100" stroke="#78350f" stroke-width="2.2"/>
                <line x1="85" y1="91" x2="85" y2="100" stroke="#78350f" stroke-width="2.2"/>
                <!-- Pill tag -->
                <rect x="44" y="112" width="72" height="20" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">BLUEBIRD</text>
            </svg>`;

        case 'seed':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="70" r="58" fill="#fefce8" stroke="#fef08a" stroke-width="3"/>
                <!-- Plump Sunflower Seeds -->
                <!-- Seed 1 -->
                <ellipse cx="65" cy="65" rx="14" ry="24" transform="rotate(-30 65 65)" fill="#451a03" stroke="#292524" stroke-width="2"/>
                <line x1="60" y1="46" x2="70" y2="84" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
                <line x1="56" y1="52" x2="64" y2="78" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
                <!-- Seed 2 (Golden Cracked Seed) -->
                <ellipse cx="95" cy="72" rx="15" ry="22" transform="rotate(25 95 72)" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
                <ellipse cx="95" cy="72" rx="9" ry="15" transform="rotate(25 95 72)" fill="#fef08a"/>
                <!-- Tiny Green Sprout Leaf -->
                <path d="M 82,42 Q 74,32 82,24 Q 92,30 82,42 Z" fill="#22c55e" stroke="#15803d" stroke-width="1.2"/>
                <!-- Pill tag -->
                <rect x="52" y="112" width="56" height="20" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">SEEDS</text>
            </svg>`;

        case 'branch':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="70" r="58" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="3"/>
                <!-- Natural Wooden Branch Crossing Diagonally -->
                <path d="M 28,105 Q 70,82 135,42" stroke="#78350f" stroke-width="9" stroke-linecap="round" fill="none"/>
                <path d="M 72,82 Q 95,96 115,102" stroke="#78350f" stroke-width="5" stroke-linecap="round" fill="none"/>
                <!-- Spring Blossoms on Branch -->
                <g fill="#fbcfe8" stroke="#f472b6" stroke-width="1.2">
                    <circle cx="70" cy="70" r="7"/>
                    <circle cx="65" cy="65" r="5.5"/>
                    <circle cx="75" cy="65" r="5.5"/>
                    <circle cx="70" cy="68" r="3" fill="#fde047" stroke="none"/>

                    <circle cx="108" cy="46" r="7"/>
                    <circle cx="103" cy="42" r="5"/>
                    <circle cx="113" cy="42" r="5"/>
                    <circle cx="108" cy="45" r="3" fill="#fde047" stroke="none"/>
                </g>
                <!-- Fresh Green Leaves -->
                <path d="M 90,72 Q 100,64 105,70 Q 98,78 90,72 Z" fill="#22c55e"/>
                <path d="M 125,48 Q 135,42 138,48 Q 130,54 125,48 Z" fill="#22c55e"/>
                <!-- Pill tag -->
                <rect x="48" y="112" width="64" height="20" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">BRANCH</text>
            </svg>`;

        case 'hop':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="70" r="58" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="3"/>
                <!-- 3 Bouncing Arcs with Motion Dots -->
                <path d="M 35,92 Q 55,48 72,92" stroke="#8b5cf6" stroke-width="3.5" stroke-dasharray="6,4" fill="none" stroke-linecap="round"/>
                <path d="M 72,92 Q 95,40 120,86" stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round"/>
                <!-- Arrowhead on Final Hop -->
                <polygon points="120,86 110,76 122,72" fill="#7c3aed"/>
                <!-- Footprint pads at landings -->
                <ellipse cx="35" cy="94" rx="5" ry="2.5" fill="#a78bfa"/>
                <ellipse cx="72" cy="94" rx="5.5" ry="2.8" fill="#8b5cf6"/>
                <ellipse cx="120" cy="90" rx="6" ry="3" fill="#7c3aed"/>
                <!-- Energy Sparkles -->
                <text x="60" y="44" font-size="14" fill="#f59e0b">✨</text>
                <text x="102" y="36" font-size="16" fill="#f59e0b">⭐</text>
                <!-- Pill tag -->
                <rect x="52" y="112" width="56" height="20" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#6d28d9">HOP!</text>
            </svg>`;

        case 'sing':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="70" r="58" fill="#fffbeb" stroke="#fde68a" stroke-width="3"/>
                <!-- Golden Acoustic Melody Sound Waves -->
                <path d="M 100,42 A 40,40 0 0,1 115,85" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M 112,32 A 55,55 0 0,1 130,94" stroke="#d97706" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                <!-- Floating Musical Notes -->
                <!-- Big Double Beamed Note -->
                <ellipse cx="50" cy="80" rx="7" ry="5" transform="rotate(-20 50 80)" fill="#0284c7"/>
                <ellipse cx="76" cy="72" rx="7" ry="5" transform="rotate(-20 76 72)" fill="#0284c7"/>
                <line x1="56" y1="78" x2="56" y2="40" stroke="#0284c7" stroke-width="3"/>
                <line x1="82" y1="70" x2="82" y2="32" stroke="#0284c7" stroke-width="3"/>
                <polygon points="54,42 84,34 84,40 54,48" fill="#0284c7"/>
                <!-- Smaller Treble Note -->
                <ellipse cx="94" cy="52" rx="5" ry="3.5" transform="rotate(-20 94 52)" fill="#ea580c"/>
                <line x1="98" y1="50" x2="98" y2="28" stroke="#ea580c" stroke-width="2.5"/>
                <path d="M 98,28 Q 106,32 108,38" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <!-- Sparkle stars -->
                <text x="32" y="44" font-size="14">✨</text>
                <text x="70" y="30" font-size="14">🎶</text>
                <!-- Pill tag -->
                <rect x="52" y="112" width="56" height="20" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">SING</text>
            </svg>`;

        case 'bioluminescent':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="bioJellyGrad" cx="50%" cy="40%" r="60%">
                        <stop offset="0%" stop-color="#67e8f9"/>
                        <stop offset="60%" stop-color="#0284c7"/>
                        <stop offset="100%" stop-color="#a855f7"/>
                    </radialGradient>
                    <radialGradient id="bioAura" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="rgba(34,211,238,0.45)"/>
                        <stop offset="100%" stop-color="rgba(34,211,238,0)"/>
                    </radialGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#031b2b" stroke="#0ea5e9" stroke-width="3"/>
                <!-- Bioluminescent Light Glow Halo -->
                <circle cx="80" cy="58" r="42" fill="url(#bioAura)"/>
                <!-- Glowing Lantern Jellyfish Bell -->
                <path d="M 52,62 C 52,36 108,36 108,62 C 100,66 94,62 80,64 C 66,62 60,66 52,62 Z" fill="url(#bioJellyGrad)" stroke="#a5f3fc" stroke-width="2"/>
                <!-- Inner Bioluminescent Core -->
                <ellipse cx="80" cy="52" rx="14" ry="10" fill="#ffffff" opacity="0.75"/>
                <!-- Undulating Neon Tentacles -->
                <path d="M 62,64 Q 58,82 66,98" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <path d="M 72,64 Q 68,85 74,102" stroke="#c084fc" stroke-width="2.2" stroke-linecap="round" fill="none"/>
                <path d="M 80,64 Q 84,86 80,105" stroke="#67e8f9" stroke-width="2.8" stroke-linecap="round" fill="none"/>
                <path d="M 88,64 Q 92,85 86,102" stroke="#c084fc" stroke-width="2.2" stroke-linecap="round" fill="none"/>
                <path d="M 98,64 Q 102,82 94,98" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <!-- Ambient Plankton Glow Specks -->
                <circle cx="48" cy="45" r="1.8" fill="#67e8f9"/>
                <circle cx="112" cy="50" r="1.8" fill="#38bdf8"/>
                <circle cx="104" cy="85" r="1.5" fill="#c084fc"/>
                <circle cx="56" cy="92" r="1.5" fill="#a5f3fc"/>
                <!-- Pill tag -->
                <rect x="36" y="112" width="88" height="20" rx="10" fill="#082f49" stroke="#38bdf8" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="9" font-weight="bold" fill="#7dd3fc">BIOLUMINESCENT</text>
            </svg>`;

        case 'submersible':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="subHull" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#f59e0b"/>
                        <stop offset="100%" stop-color="#b45309"/>
                    </linearGradient>
                    <linearGradient id="subDome" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="rgba(56,189,248,0.7)"/>
                        <stop offset="100%" stop-color="rgba(14,165,233,0.3)"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#0f172a" stroke="#f59e0b" stroke-width="3"/>
                <!-- Forward UV Light Cone -->
                <polygon points="106,64 145,44 145,86" fill="rgba(34,211,238,0.22)"/>
                <!-- Propeller & Shroud at Stern -->
                <rect x="25" y="60" width="8" height="12" rx="2" fill="#64748b"/>
                <ellipse cx="23" cy="66" rx="3" ry="11" fill="#94a3b8" stroke="#475569" stroke-width="1.2"/>
                <!-- Hydrodynamic Sub Hull -->
                <rect x="32" y="50" width="68" height="32" rx="16" fill="url(#subHull)" stroke="#78350f" stroke-width="2"/>
                <!-- Titanium Bottom Skids -->
                <rect x="42" y="82" width="48" height="4" rx="2" fill="#475569"/>
                <line x1="50" y1="80" x2="50" y2="82" stroke="#475569" stroke-width="2.5"/>
                <line x1="82" y1="80" x2="82" y2="82" stroke="#475569" stroke-width="2.5"/>
                <!-- Conning Tower / Dorsal Fin -->
                <path d="M 60,50 L 64,40 L 76,40 L 80,50 Z" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
                <circle cx="70" cy="38" r="2.5" fill="#38bdf8"/>
                <!-- Panoramic Observation Dome -->
                <circle cx="86" cy="66" r="13" fill="url(#subDome)" stroke="#0284c7" stroke-width="2"/>
                <path d="M 76,64 A 10,10 0 0,1 94,58" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" fill="none"/>
                <!-- Small Rising Bubbles -->
                <circle cx="30" cy="54" r="2.5" fill="#38bdf8" opacity="0.7"/>
                <circle cx="24" cy="46" r="3" fill="#bae6fd" opacity="0.6"/>
                <circle cx="28" cy="36" r="2" fill="#e0f2fe" opacity="0.5"/>
                <!-- Pill tag -->
                <rect x="42" y="112" width="76" height="20" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">SUBMERSIBLE</text>
            </svg>`;

        case 'sanctuary':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="70" r="58" fill="#042f2e" stroke="#10b981" stroke-width="3"/>
                <!-- Protective Sanctuary Energy Shield Arc -->
                <circle cx="80" cy="65" r="42" fill="none" stroke="#34d399" stroke-width="2.5" stroke-dasharray="6,4" opacity="0.8"/>
                <!-- Sheltered Sea Floor & Corals -->
                <path d="M 35,96 Q 80,88 125,96" stroke="#0d9488" stroke-width="4" stroke-linecap="round" fill="none"/>
                <!-- Azure Branching Coral inside sanctuary -->
                <path d="M 98,94 L 98,78 Q 98,72 90,68 M 98,74 Q 106,68 108,62" stroke="#22d3ee" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                <circle cx="90" cy="68" r="3" fill="#67e8f9"/>
                <circle cx="108" cy="62" r="3" fill="#67e8f9"/>
                <!-- Happy Protected Sea Turtle Gliding Safely -->
                <ellipse cx="62" cy="68" rx="13" ry="9" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
                <circle cx="76" cy="65" r="4.5" fill="#34d399"/>
                <path d="M 64,62 Q 72,50 80,54" stroke="#059669" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M 62,74 Q 68,84 76,82" stroke="#059669" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <!-- Protective Shield Heart / Life Icon -->
                <path d="M 80,42 C 78,38 72,38 72,44 C 72,50 80,56 80,56 C 80,56 88,50 88,44 C 88,38 82,38 80,42 Z" fill="#f43f5e"/>
                <!-- Pill tag -->
                <rect x="44" y="112" width="72" height="20" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="10" font-weight="bold" fill="#6ee7b7">SANCTUARY</text>
            </svg>`;

        case 'coral':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="coralGlowGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#22d3ee"/>
                        <stop offset="100%" stop-color="#0891b2"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#082f49" stroke="#06b6d4" stroke-width="3"/>
                <!-- Bioluminescent Aura Glow -->
                <circle cx="80" cy="70" r="38" fill="rgba(6,182,212,0.22)"/>
                <!-- Staghorn Azure Coral Formation -->
                <path d="M 80,98 L 80,68" stroke="url(#coralGlowGrad)" stroke-width="7" stroke-linecap="round"/>
                <path d="M 80,82 Q 62,74 58,58" stroke="url(#coralGlowGrad)" stroke-width="5.5" stroke-linecap="round" fill="none"/>
                <path d="M 58,58 Q 52,48 50,42" stroke="#67e8f9" stroke-width="4" stroke-linecap="round" fill="none"/>
                <path d="M 64,68 Q 72,56 70,48" stroke="#67e8f9" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                <path d="M 80,74 Q 98,66 102,52" stroke="url(#coralGlowGrad)" stroke-width="5.5" stroke-linecap="round" fill="none"/>
                <path d="M 102,52 Q 110,42 112,36" stroke="#67e8f9" stroke-width="4" stroke-linecap="round" fill="none"/>
                <path d="M 94,62 Q 90,52 92,44" stroke="#67e8f9" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                <!-- Fluorescent Glowing Polyp Tips -->
                <circle cx="50" cy="42" r="3.5" fill="#a5f3fc"/>
                <circle cx="70" cy="48" r="3.2" fill="#a5f3fc"/>
                <circle cx="92" cy="44" r="3.2" fill="#a5f3fc"/>
                <circle cx="112" cy="36" r="3.5" fill="#a5f3fc"/>
                <circle cx="80" cy="66" r="3.8" fill="#a5f3fc"/>
                <!-- Tiny Sea Star at Base -->
                <polygon points="60,98 62,94 65,96 64,100 61,100" fill="#f59e0b"/>
                <!-- Pill tag -->
                <rect x="42" y="112" width="76" height="20" rx="10" fill="#0c4a6e" stroke="#22d3ee" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">CORAL REEF</text>
            </svg>`;

        case 'oceanographer':
            return `<svg viewBox="0 0 160 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="mayaFace" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#ffedd5"/>
                        <stop offset="100%" stop-color="#fed7aa"/>
                    </linearGradient>
                    <linearGradient id="mayaHair" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#78350f"/>
                        <stop offset="100%" stop-color="#451a03"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="70" r="58" fill="#0f172a" stroke="#6366f1" stroke-width="3"/>
                <!-- Diving Helmet / Visor Rim -->
                <circle cx="80" cy="62" r="34" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="2.5"/>
                <path d="M 52,56 A 30,30 0 0,1 108,56" stroke="rgba(255,255,255,0.7)" stroke-width="2" fill="none"/>
                <!-- Flowing Brunette Hair / Ponytail -->
                <path d="M 64,52 C 58,34 94,30 102,50 C 114,64 122,82 115,92 C 108,98 104,80 98,72 Z" fill="url(#mayaHair)"/>
                <!-- Neck & Shoulders in Wetsuit -->
                <path d="M 62,88 L 98,88 L 108,105 L 52,105 Z" fill="#1e1b4b" stroke="#4338ca" stroke-width="1.5"/>
                <!-- Friendly Face -->
                <circle cx="80" cy="62" r="16" fill="url(#mayaFace)"/>
                <!-- Rosy Cheeks -->
                <circle cx="71" cy="67" r="3.2" fill="#f43f5e" opacity="0.45"/>
                <circle cx="89" cy="67" r="3.2" fill="#f43f5e" opacity="0.45"/>
                <!-- Expressive Eyes with Fluttery Eyelashes -->
                <ellipse cx="73" cy="61" rx="2.8" ry="3.5" fill="#1e293b"/>
                <ellipse cx="87" cy="61" rx="2.8" ry="3.5" fill="#1e293b"/>
                <circle cx="72" cy="59.5" r="1.1" fill="#ffffff"/>
                <circle cx="86" cy="59.5" r="1.1" fill="#ffffff"/>
                <path d="M 70,57 L 68,54" stroke="#451a03" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M 90,57 L 92,54" stroke="#451a03" stroke-width="1.2" stroke-linecap="round"/>
                <!-- Warm Loving Smile -->
                <path d="M 75,69 Q 80,74 85,69" stroke="#b91c1c" stroke-width="1.8" stroke-linecap="round" fill="#ffffff"/>
                <!-- Oceanographer Digital Tablet in Hand -->
                <rect x="54" y="86" width="22" height="16" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
                <line x1="58" y1="91" x2="72" y2="91" stroke="#a5f3fc" stroke-width="1.5"/>
                <line x1="58" y1="96" x2="68" y2="96" stroke="#34d399" stroke-width="1.5"/>
                <!-- Pill tag -->
                <rect x="34" y="112" width="92" height="20" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
                <text x="80" y="126" text-anchor="middle" font-size="9" font-weight="bold" fill="#c7d2fe">OCEANOGRAPHER</text>
            </svg>`;

        default:
            return '';
    }
}

/* --- PRACTISE LIVING SCENES ---
   Visual story stages are modular cartridges registered via js/stories/scene-registry.js.
   New story stages can be plugged in without modifying this player engine.
   -------------------------------------------------------------------------- */

/* --- STATE RETRIEVAL --- */

function getActivePractiseUnit() {
    const levelData = READING_PRACTISE_DATA[practiseState.currentLevel];
    if (!levelData || !levelData.units) return null;
    const unit = levelData.units.find(u => u.id === practiseState.currentUnitId);
    return unit || levelData.units[0];
}

/* --- MASTER RENDER ENTRY POINT --- */

function renderReadingPractiseStage() {
    // Defensively ensure any running karaoke audio or timers are stopped on re-render
    stopKaraokeReadAlong();

    const container = document.getElementById('view-reading-practise');
    if (!container) return;

    // Synchronize UI dropdowns with state
    const selectLevel = document.getElementById('select-practise-esl-level');
    if (selectLevel && selectLevel.value !== practiseState.currentLevel) {
        selectLevel.value = practiseState.currentLevel;
    }
    populatePractiseUnitDropdown();

    updatePractiseToolbarUI();

    const unit = getActivePractiseUnit();
    if (!unit) return;

    // Check if this level is a placeholder (Beginner or Advanced)
    if (unit.isPlaceholder) {
        renderPlaceholderStage(practiseState.currentLevel, unit);
        return;
    }

    // Render active phase for Intermediate
    const studioContent = document.getElementById('practise-studio-content');
    if (!studioContent) return;

    // Update phase tab buttons active class
    document.querySelectorAll('.practise-phase-tab-btn').forEach(btn => {
        const p = parseInt(btn.getAttribute('data-phase'), 10);
        btn.classList.toggle('active', p === practiseState.currentPhase);
    });

    switch (practiseState.currentPhase) {
        case 1:
            renderPractisePhase1(unit);
            break;
        case 2:
            renderPractisePhase2(unit);
            break;
        case 3:
            renderPractisePhase3(unit);
            break;
        case 4:
            renderPractisePhase4(unit);
            break;
    }
}

function populatePractiseUnitDropdown() {
    const selectUnit = document.getElementById('select-practise-unit');
    if (!selectUnit) return;

    const levelData = READING_PRACTISE_DATA[practiseState.currentLevel];
    if (!levelData || !levelData.units) return;

    selectUnit.innerHTML = '';
    levelData.units.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = u.title;
        if (u.id === practiseState.currentUnitId) {
            opt.selected = true;
        }
        selectUnit.appendChild(opt);
    });
}

function updatePractiseToolbarUI() {
    const lblVoice = document.getElementById('label-practise-voice-mode');
    const lblSpeed = document.getElementById('label-practise-tts-speed');
    const lblFocus = document.getElementById('label-practise-focus-mode');

    if (lblVoice) {
        lblVoice.textContent = practiseState.voiceMode === 'live' ? 'Live Teacher Voice' : 'Auto-TTS';
    }
    if (lblSpeed) {
        lblSpeed.textContent = practiseState.ttsSpeed === 0.85 ? '0.85x (ESL Slow)' : '1.0x (Normal)';
    }
    if (lblFocus) {
        lblFocus.textContent = practiseState.readingFocusPaused ? 'ON (Paused)' : 'OFF';
    }
}

/* --- PLACEHOLDER RENDERER FOR BEGINNER / ADVANCED --- */

function renderPlaceholderStage(levelKey, unit) {
    const studioContent = document.getElementById('practise-studio-content');
    if (!studioContent) return;

    const isBeginner = levelKey === 'beginner';
    const badgeColor = isBeginner ? '#16a34a' : '#dc2626';
    const badgeBg = isBeginner ? '#dcfce7' : '#fee2e2';

    studioContent.innerHTML = `
        <div class="practise-placeholder-card">
            <div class="placeholder-icon">${isBeginner ? '🌱' : '🚀'}</div>
            <span class="placeholder-level-pill" style="color: ${badgeColor}; background: ${badgeBg}; border: 1.5px solid ${badgeColor};">
                ${unit.badge}
            </span>
            <h2 class="placeholder-title">${unit.title}</h2>
            <p class="placeholder-desc">${unit.desc}</p>
            <div class="placeholder-tip-box">
                <span class="tip-icon">💡</span>
                <p class="tip-text">${unit.availableNowTip}</p>
            </div>
            <button id="btn-jump-to-intermediate" class="btn btn-lg btn-green">
                Jump to 🟡 Intermediate: Hungry Squirrels 🐿️
            </button>
        </div>
    `;

    const jumpBtn = document.getElementById('btn-jump-to-intermediate');
    if (jumpBtn) {
        jumpBtn.addEventListener('click', () => {
            practiseState.currentLevel = 'intermediate';
            practiseState.currentUnitId = 'unit_01_hungry_squirrels';
            practiseState.currentPhase = 1;
            renderReadingPractiseStage();
        });
    }
}

/* --- PHASE 1: WARM-UP & VOCABULARY FLASHCARDS --- */

function renderPractisePhase1(unit) {
    const studioContent = document.getElementById('practise-studio-content');
    if (!studioContent) return;

    studioContent.innerHTML = `
        <div class="practise-phase-container">
            <!-- Top Banner: Warm-Up Schema Activation -->
            <div class="practise-warmup-card">
                <div class="warmup-badge-tag">🎯 Phase 1: Pre-Reading Warm-Up & Vocabulary</div>
                <h3 class="warmup-question">${unit.warmup.question}</h3>
                <div class="warmup-hints-row">
                    ${unit.warmup.hints.map(h => `<span class="warmup-hint-pill">💬 ${h}</span>`).join('')}
                </div>
            </div>

            <!-- Vocabulary Flashcard Grid -->
            <div class="practise-vocab-header-row">
                <h4>📚 Core Flashcard Vocabulary (5 Target Words):</h4>
                <span class="vocab-counter-pill">Numbered ①–⑤ for Zoom Callouts</span>
            </div>

            <div class="practise-vocab-grid">
                ${unit.vocab.map(v => `
                    <div class="practise-vocab-card" data-word="${v.word}">
                        <div class="vocab-card-badge">${v.badgeNum}</div>
                        <div class="vocab-card-svg-wrap">
                            ${getPractiseVocabSVG(v.svgType)}
                        </div>
                        <div class="vocab-card-word">${v.word}</div>
                        <div class="vocab-card-phonetic">${v.phonetic}</div>
                        <div class="vocab-card-def">${v.def}</div>
                        <div class="vocab-card-sentence">"${v.sentence}"</div>
                        <button class="btn btn-sm btn-practise-speak" data-speak="${v.word}. ${v.sentence}">
                            🔊 Listen
                        </button>
                    </div>
                `).join('')}
            </div>

            <!-- Story Prediction Challenge -->
            <div class="practise-prediction-card">
                <div class="prediction-header">
                    <span class="pred-icon">🔮</span>
                    <h4>Story Prediction Question:</h4>
                </div>
                <p class="prediction-prompt">${unit.prediction.prompt}</p>
                <div class="prediction-options-grid">
                    ${unit.prediction.options.map(opt => `
                        <button class="btn-pred-choice" data-correct="${opt.correct}" data-feedback="${opt.feedback}">
                            ${opt.text}
                        </button>
                    `).join('')}
                </div>
                <div id="prediction-feedback-box" class="prediction-feedback-box hidden"></div>
            </div>

            <!-- Bottom Navigation Bar -->
            <div class="practise-phase-nav-footer">
                <span class="phase-nav-hint">Review vocabulary with students before advancing.</span>
                <button id="btn-next-to-phase2" class="btn btn-lg btn-blue">
                    Next: Phase 2 Living Reader 🎬 ➡️
                </button>
            </div>
        </div>
    `;

    // Bind Listen Buttons
    studioContent.querySelectorAll('.btn-practise-speak').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const textToSpeak = btn.getAttribute('data-speak');
            playPractiseSpeech(textToSpeak);
        });
    });

    // Bind Prediction Choice Buttons
    studioContent.querySelectorAll('.btn-pred-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.getAttribute('data-correct') === 'true';
            const feedback = btn.getAttribute('data-feedback');
            const feedbackBox = document.getElementById('prediction-feedback-box');

            studioContent.querySelectorAll('.btn-pred-choice').forEach(b => {
                b.classList.remove('selected', 'correct', 'incorrect');
            });

            if (isCorrect) {
                btn.classList.add('correct');
                feedbackBox.className = 'prediction-feedback-box success';
                feedbackBox.innerHTML = `🌟 <strong>Great prediction!</strong> ${feedback}`;
                awardPractiseStar(btn, 1, 'Great prediction!');
                if (typeof audioEngine !== 'undefined') {
                    if (typeof audioEngine.speakCorrectPraise === 'function') {
                        audioEngine.speakCorrectPraise();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("That's correct, well done!", true);
                    }
                }
            } else {
                btn.classList.add('incorrect');
                feedbackBox.className = 'prediction-feedback-box hint';
                feedbackBox.innerHTML = `💡 <strong>Good thought!</strong> ${feedback}`;
                if (audioEngine) {
                    audioEngine.playClick();
                    if (typeof audioEngine.speakRetryPrompt === 'function') {
                        audioEngine.speakRetryPrompt();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("Good try, try again!", true);
                    }
                }
            }
            feedbackBox.classList.remove('hidden');
        });
    });

    // Bind Next Phase Button
    const btnNext = document.getElementById('btn-next-to-phase2');
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            practiseState.currentPhase = 2;
            renderReadingPractiseStage();
        });
    }
}

/* --- PHASE 2: GUIDED READING & LIVING WINDOW SCENE --- */

function renderPractisePhase2(unit) {
    const studioContent = document.getElementById('practise-studio-content');
    if (!studioContent) return;

    studioContent.innerHTML = `
        <div class="practise-phase-container">
            <div class="practise-stage-layout">
                <!-- Left Column: Living 5-Layer Vector Story Scene -->
                <div class="practise-stage-visual-card">
                    <div class="visual-card-header">
                        <span class="badge-genre">Living Story Stage</span>
                        <span class="badge-level">${unit.sceneBadge || 'Living Story Garden'}</span>
                    </div>
                    <div class="visual-svg-container" id="living-scene-container">
                        ${getPractiseSceneSVG(unit.sceneType, practiseState.readingFocusPaused)}
                    </div>
                    <div class="visual-card-footer">
                        <span class="visual-tip">💡 Tip: Toggle "Reading Focus" in the Zoom Teacher Bar to freeze animations during active reading.</span>
                    </div>
                </div>

                <!-- Right Column: Guided Reading Text & Karaoke Sentences -->
                <div class="practise-stage-text-card">
                    <div class="reader-toolbar">
                        <h3 class="reader-title">📖 ${unit.story.title}</h3>
                        <div class="reader-controls">
                            <button id="btn-karaoke-playall" class="btn btn-sm btn-green">
                                ▶️ Karaoke Read
                            </button>
                            <button id="btn-karaoke-stop" class="btn btn-sm btn-danger hidden">
                                ⏹️ Stop
                            </button>
                        </div>
                    </div>

                    <div class="reader-paragraphs-stream" id="reader-sentences-stream">
                        ${unit.story.paragraphs.map(p => `
                            <div class="reader-paragraph-block">
                                <span class="paragraph-num-badge">P${p.num}</span>
                                <div class="paragraph-sentences-wrap">
                                    ${p.sentences.map(s => {
                                        let displayText = s.text;
                                        if (s.hasPronounHotspot) {
                                            const isSolved = practiseState.solvedPronouns[s.pronoun];
                                            const solvedClass = isSolved ? 'pronoun-solved' : '';
                                            const pronounTag = `<span class="pronoun-hotspot-pill ${solvedClass}" data-pronoun="${s.pronoun}" data-sentence-id="${s.id}">
                                                ${s.pronoun}
                                            </span>`;
                                            displayText = displayText.replace(s.pronoun, pronounTag);
                                        }
                                        return `<span class="reader-sentence" id="sentence-${s.id}" data-text="${s.text}">
                                            ${displayText}
                                        </span>`;
                                    }).join(' ')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- In-Text Pronoun Popover Display Container -->
                    <div id="pronoun-popover-box" class="pronoun-popover-box hidden">
                        <!-- Popover injected dynamically when clicking pronoun hotspot -->
                    </div>
                </div>
            </div>

            <!-- Bottom Navigation Bar -->
            <div class="practise-phase-nav-footer">
                <button id="btn-back-to-phase1" class="btn btn-ctrl btn-gray">
                    ⬅️ Phase 1 Vocab
                </button>
                <span class="phase-nav-hint">Ensure all students read aloud before proceeding to the Skills Flowchart.</span>
                <button id="btn-next-to-phase3" class="btn btn-lg btn-blue">
                    Next: Phase 3 Skills Flowchart 🧠 ➡️
                </button>
            </div>
        </div>
    `;

    // Bind Sentence Click for Speech
    studioContent.querySelectorAll('.reader-sentence').forEach(sentEl => {
        sentEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('pronoun-hotspot-pill')) return;
            stopKaraokeReadAlong();
            const text = sentEl.getAttribute('data-text');
            highlightPractiseSentence(sentEl.id);
            playPractiseSpeech(text);
        });
    });

    // Bind Pronoun Hotspots
    studioContent.querySelectorAll('.pronoun-hotspot-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.stopPropagation();
            stopKaraokeReadAlong();
            const pronoun = pill.getAttribute('data-pronoun');
            openPronounChallengePopover(pronoun, unit);
        });
    });

    // Bind Karaoke Play All
    const btnKaraoke = document.getElementById('btn-karaoke-playall');
    const btnStop = document.getElementById('btn-karaoke-stop');
    if (btnKaraoke && btnStop) {
        btnKaraoke.addEventListener('click', (e) => {
            e.stopPropagation();
            startKaraokeReadAlong(unit, btnKaraoke, btnStop);
        });
        btnStop.addEventListener('click', (e) => {
            e.stopPropagation();
            stopKaraokeReadAlong(btnKaraoke, btnStop);
        });
    }

    // Bind Navigation Buttons
    const btnBack1 = document.getElementById('btn-back-to-phase1');
    if (btnBack1) {
        btnBack1.addEventListener('click', () => {
            stopKaraokeReadAlong();
            practiseState.currentPhase = 1;
            renderReadingPractiseStage();
        });
    }
    const btnNext3 = document.getElementById('btn-next-to-phase3');
    if (btnNext3) {
        btnNext3.addEventListener('click', () => {
            stopKaraokeReadAlong();
            practiseState.currentPhase = 3;
            renderReadingPractiseStage();
        });
    }
}

function openPronounChallengePopover(pronoun, unit) {
    const popover = document.getElementById('pronoun-popover-box');
    if (!popover) return;

    let targetSentence = null;
    unit.story.paragraphs.forEach(p => {
        p.sentences.forEach(s => {
            if (s.hasPronounHotspot && s.pronoun === pronoun) {
                targetSentence = s;
            }
        });
    });

    if (!targetSentence) return;

    popover.innerHTML = `
        <div class="pronoun-popover-inner">
            <div class="pronoun-popover-header">
                <span class="pronoun-tag">🔍 Pronoun Discovery Hotspot</span>
                <button id="btn-close-popover" class="btn-close-popover">&times;</button>
            </div>
            <h4 class="pronoun-question">${targetSentence.question}</h4>
            <div class="pronoun-choices-row">
                ${targetSentence.choices.map((c, idx) => `
                    <button class="btn-pronoun-choice" data-idx="${idx}">
                        ${c.replace(/\s*\(Correct\)/i, '')}
                    </button>
                `).join('')}
            </div>
            <div id="pronoun-feedback" class="pronoun-feedback-text hidden"></div>
        </div>
    `;

    popover.classList.remove('hidden');

    // Close button
    document.getElementById('btn-close-popover').addEventListener('click', () => {
        popover.classList.add('hidden');
    });

    // Choice clicks
    popover.querySelectorAll('.btn-pronoun-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const chosenIdx = parseInt(btn.getAttribute('data-idx'), 10);
            const feedbackEl = document.getElementById('pronoun-feedback');

            if (chosenIdx === targetSentence.correctIndex) {
                btn.classList.add('correct');
                practiseState.solvedPronouns[pronoun] = true;
                feedbackEl.className = 'pronoun-feedback-text success';
                feedbackEl.innerHTML = `🎉 <strong>Correct!</strong> ${targetSentence.tip}`;
                feedbackEl.classList.remove('hidden');

                awardPractiseStar(btn, 1, 'Pronoun Match Found!');
                if (typeof audioEngine !== 'undefined') {
                    if (typeof audioEngine.speakCorrectPraise === 'function') {
                        audioEngine.speakCorrectPraise();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("That's correct, well done!", true);
                    }
                }

                // Highlight antecedent in the text
                const activeHotspot = document.querySelector(`.pronoun-hotspot-pill[data-pronoun="${pronoun}"]`);
                if (activeHotspot) {
                    activeHotspot.classList.add('pronoun-solved');
                }
            } else {
                btn.classList.add('incorrect');
                feedbackEl.className = 'pronoun-feedback-text hint';
                feedbackEl.innerHTML = `💡 Try again! Look back at who or what was just mentioned.`;
                feedbackEl.classList.remove('hidden');
                if (audioEngine) {
                    audioEngine.playClick();
                    if (typeof audioEngine.speakRetryPrompt === 'function') {
                        audioEngine.speakRetryPrompt();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("Good try, try again!", true);
                    }
                }
            }
        });
    });
}

function highlightPractiseSentence(sentId) {
    document.querySelectorAll('.reader-sentence').forEach(el => {
        el.classList.remove('sentence-active');
    });
    const target = document.getElementById(sentId);
    if (target) {
        target.classList.add('sentence-active');
        if (typeof target.scrollIntoView === 'function') {
            target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

let karaokeTimer = null;
let isKaraokePlaying = false;
if (typeof window !== 'undefined') window.isKaraokePlaying = false;

function isKaraokeActive() {
    return isKaraokePlaying;
}
if (typeof window !== 'undefined') window.isKaraokeActive = isKaraokeActive;

function startKaraokeReadAlong(unit, btnPlay = null, btnStop = null) {
    // If already running, halt previous run cleanly
    stopKaraokeReadAlong();

    isKaraokePlaying = true;
    if (typeof window !== 'undefined') window.isKaraokePlaying = true;
    const playBtn = btnPlay || document.getElementById('btn-karaoke-playall');
    const stopBtn = btnStop || document.getElementById('btn-karaoke-stop');
    if (playBtn) playBtn.classList.add('hidden');
    if (stopBtn) stopBtn.classList.remove('hidden');

    const allSentences = [];
    unit.story.paragraphs.forEach(p => {
        p.sentences.forEach(s => allSentences.push(s));
    });

    let idx = 0;
    function playNext() {
        if (!isKaraokePlaying || idx >= allSentences.length) {
            stopKaraokeReadAlong(playBtn, stopBtn);
            return;
        }

        const s = allSentences[idx];
        highlightPractiseSentence(`sentence-${s.id}`);

        if (practiseState.voiceMode === 'live') {
            idx++;
            karaokeTimer = setTimeout(playNext, 3500);
        } else {
            playPractiseSpeech(s.text, () => {
                if (!isKaraokePlaying) return;
                idx++;
                karaokeTimer = setTimeout(playNext, 450);
            });
        }
    }

    playNext();
}
if (typeof window !== 'undefined') window.startKaraokeReadAlong = startKaraokeReadAlong;

function stopKaraokeReadAlong(btnPlay = null, btnStop = null) {
    isKaraokePlaying = false;
    if (typeof window !== 'undefined') window.isKaraokePlaying = false;
    if (karaokeTimer) {
        clearTimeout(karaokeTimer);
        karaokeTimer = null;
    }

    // Immediately halt all speech synthesis and audio engine output
    if (typeof audioEngine !== 'undefined' && audioEngine.stop) {
        audioEngine.stop();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    // Remove active highlight from all reader sentences
    document.querySelectorAll('.reader-sentence').forEach(el => {
        el.classList.remove('sentence-active');
    });

    // Safely restore button visibility states
    const playBtn = btnPlay || document.getElementById('btn-karaoke-playall');
    const stopBtn = btnStop || document.getElementById('btn-karaoke-stop');
    if (playBtn) playBtn.classList.remove('hidden');
    if (stopBtn) stopBtn.classList.add('hidden');
}
if (typeof window !== 'undefined') window.stopKaraokeReadAlong = stopKaraokeReadAlong;

/* --- PHASE 3: SKILLS LAB & FLOWCHART --- */

function renderPractisePhase3(unit) {
    const studioContent = document.getElementById('practise-studio-content');
    if (!studioContent) return;

    studioContent.innerHTML = `
        <div class="practise-phase-container">
            <!-- Flowchart Header -->
            <div class="practise-warmup-card">
                <div class="warmup-badge-tag">🧠 Phase 3: Analytical Skills & ${unit.skillFocus || 'Story Flowchart'}</div>
                <h3 class="warmup-question">${unit.flowchartTitle || 'Story Sequence & Comprehension'}</h3>
                <p class="flowchart-desc">${unit.flowchartDesc || 'Follow the step-by-step sequence below:'}</p>
            </div>

            <!-- 4-Node Flowchart Matrix -->
            <div class="practise-flowchart-matrix">
                ${unit.flowchart.map((node, i) => `
                    <div class="flowchart-node-card">
                        <div class="flowchart-node-step">${node.badge}</div>
                        <h4 class="flowchart-node-title">${node.label}</h4>
                        <p class="flowchart-node-detail">${node.detail}</p>
                    </div>
                    ${i < unit.flowchart.length - 1 ? `<div class="flowchart-connector-arrow">➡️</div>` : ''}
                `).join('')}
            </div>

            <!-- Deep Comprehension Questions -->
            <div class="practise-comprehension-block">
                <h4>❓ Deep Comprehension Questions (Numbered ①–③ for Zoom Callouts):</h4>
                <div class="comprehension-questions-list">
                    ${unit.comprehension.map((q, qIdx) => `
                        <div class="comp-question-card" data-qidx="${qIdx}">
                            <div class="comp-q-header">
                                <span class="comp-q-badge">${q.badgeNum}</span>
                                <h5 class="comp-q-text">${q.question}</h5>
                            </div>
                            <div class="comp-options-grid">
                                ${q.options.map((optText, optIdx) => `
                                    <button class="btn-comp-opt" data-qidx="${qIdx}" data-optidx="${optIdx}">
                                        ${optText}
                                    </button>
                                `).join('')}
                            </div>
                            <div id="comp-feedback-${qIdx}" class="comp-feedback-box hidden"></div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Bottom Navigation Bar -->
            <div class="practise-phase-nav-footer">
                <button id="btn-back-to-phase2" class="btn btn-ctrl btn-gray">
                    ⬅️ Phase 2 Reader
                </button>
                <span class="phase-nav-hint">Call out options ①–③ with students before heading to Grammar Workshop.</span>
                <button id="btn-next-to-phase4" class="btn btn-lg btn-blue">
                    Next: Phase 4 Grammar Workshop 🛠️ ➡️
                </button>
            </div>
        </div>
    `;

    // Bind Comprehension Buttons
    studioContent.querySelectorAll('.btn-comp-opt').forEach(btn => {
        btn.addEventListener('click', () => {
            const qIdx = parseInt(btn.getAttribute('data-qidx'), 10);
            const optIdx = parseInt(btn.getAttribute('data-optidx'), 10);
            const qData = unit.comprehension[qIdx];
            const feedbackBox = document.getElementById(`comp-feedback-${qIdx}`);

            const parentCard = btn.closest('.comp-question-card');
            parentCard.querySelectorAll('.btn-comp-opt').forEach(b => {
                b.classList.remove('selected', 'correct', 'incorrect');
            });

            if (optIdx === qData.correctIndex) {
                btn.classList.add('correct');
                feedbackBox.className = 'comp-feedback-box success';
                feedbackBox.innerHTML = `🌟 <strong>Correct!</strong> ${qData.explanation}`;
                awardPractiseStar(btn, 1, 'Comprehension Correct!');
                if (typeof audioEngine !== 'undefined') {
                    if (typeof audioEngine.speakCorrectPraise === 'function') {
                        audioEngine.speakCorrectPraise();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("That's correct, well done!", true);
                    }
                }
            } else {
                btn.classList.add('incorrect');
                feedbackBox.className = 'comp-feedback-box hint';
                feedbackBox.innerHTML = `💡 Not quite. Look back at the flowchart nodes above.`;
                if (audioEngine) {
                    audioEngine.playClick();
                    if (typeof audioEngine.speakRetryPrompt === 'function') {
                        audioEngine.speakRetryPrompt();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("Good try, try again!", true);
                    }
                }
            }
            feedbackBox.classList.remove('hidden');
        });
    });

    // Navigation buttons
    document.getElementById('btn-back-to-phase2').addEventListener('click', () => {
        practiseState.currentPhase = 2;
        renderReadingPractiseStage();
    });
    document.getElementById('btn-next-to-phase4').addEventListener('click', () => {
        practiseState.currentPhase = 4;
        renderReadingPractiseStage();
    });
}

/* --- PHASE 4: GRAMMAR WORKSHOP, CLOZE & SPEAKING --- */

function renderPractisePhase4(unit) {
    const studioContent = document.getElementById('practise-studio-content');
    if (!studioContent) return;

    studioContent.innerHTML = `
        <div class="practise-phase-container">
            <!-- Grammar Doctor Section -->
            <div class="practise-warmup-card">
                <div class="warmup-badge-tag">🛠️ Phase 4: Language Workshop & Speaking</div>
                <h3 class="warmup-question">🩺 Grammar Doctor: Can You Squash the Grammar Bugs?</h3>
                <p class="flowchart-desc">Look at each sentence below. Tap the highlighted bug and choose the correct doctor cure:</p>
            </div>

            <!-- Grammar Doctor Bugs Grid -->
            <div class="grammar-doctor-grid">
                ${unit.grammarDoctor.map(b => {
                    const isHealed = practiseState.healedBugs[b.id];
                    return `
                        <div class="doctor-bug-card ${isHealed ? 'healed' : ''}" id="bug-card-${b.id}">
                            <div class="doctor-bug-badge">${b.badgeNum} ${isHealed ? '✅ HEALED' : '🐛 BUG'}</div>
                            <div class="doctor-broken-sentence">
                                ${b.brokenText.replace(b.bugWord, `<span class="bug-highlight" data-bug="${b.id}">${b.bugWord}</span>`)}
                            </div>
                            <div class="doctor-choices-row">
                                ${b.choices.map(c => `
                                    <button class="btn-cure-choice ${isHealed && c.isCorrect ? 'selected-cure' : ''}" data-bug="${b.id}" data-correct="${c.isCorrect}">
                                        ${c.text}
                                    </button>
                                `).join('')}
                            </div>
                            <div id="doctor-rule-${b.id}" class="doctor-rule-pill ${isHealed ? '' : 'hidden'}">
                                💡 <strong>Rule:</strong> ${b.rule}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            <!-- Cloze Summary Challenge -->
            <div class="practise-cloze-card">
                <div class="cloze-header">
                    <span class="pred-icon">📝</span>
                    <h4>${unit.cloze.title}</h4>
                </div>
                <p class="cloze-instruction">${unit.cloze.instruction}</p>
                <div class="cloze-sentence-flow">
                    ${unit.cloze.items.map((item, i) => `
                        <span class="cloze-segment">
                            ${item.prefix}
                            <select class="form-select-sm cloze-select" data-item="${i}" data-target="${item.target}">
                                <option value="">---</option>
                                ${item.options.map(o => `<option value="${o}" ${practiseState.selectedCloze[i] === o ? 'selected' : ''}>${o}</option>`).join('')}
                            </select>
                            ${item.suffix}
                        </span>
                    `).join(' ')}
                </div>
                <div id="cloze-feedback-box" class="cloze-feedback-box hidden"></div>
            </div>

            <!-- Zoom Speaking & Discussion Frame -->
            <div class="practise-speaking-card">
                <div class="speaking-header">
                    <span class="pred-icon">🗣️</span>
                    <h4>${unit.speaking.title}</h4>
                </div>
                <p class="speaking-prompt-text">"${unit.speaking.prompt}"</p>
                <div class="speaking-starters-label">Visible Student Sentence Starters:</div>
                <div class="starters-grid">
                    ${unit.speaking.starters.map((st, sIdx) => `
                        <div class="starter-chip" data-starter-idx="${sIdx}">
                            <span>${st}</span>
                            <span class="starter-tag">Click to Speak 🎙️</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Bottom Navigation Bar -->
            <div class="practise-phase-nav-footer">
                <button id="btn-back-to-phase3" class="btn btn-ctrl btn-gray">
                    ⬅️ Phase 3 Flowchart
                </button>
                <button id="btn-practise-celebrate" class="btn btn-lg btn-gold">
                    🎉 Celebrate Unit Completion!
                </button>
            </div>
        </div>
    `;

    // Bind Grammar Doctor Choices
    studioContent.querySelectorAll('.btn-cure-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const bugId = btn.getAttribute('data-bug');
            const isCorrect = btn.getAttribute('data-correct') === 'true';
            const card = document.getElementById(`bug-card-${bugId}`);
            const ruleBox = document.getElementById(`doctor-rule-${bugId}`);

            if (isCorrect) {
                practiseState.healedBugs[bugId] = true;
                card.classList.add('healed');
                btn.classList.add('selected-cure');
                ruleBox.classList.remove('hidden');
                awardPractiseStar(btn, 1, 'Grammar bug cured!');
                if (typeof audioEngine !== 'undefined') {
                    if (typeof audioEngine.speakCorrectPraise === 'function') {
                        audioEngine.speakCorrectPraise();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("That's correct, well done!", true);
                    }
                }
            } else {
                btn.classList.add('incorrect-cure');
                setTimeout(() => btn.classList.remove('incorrect-cure'), 800);
                if (audioEngine) {
                    audioEngine.playClick();
                    if (typeof audioEngine.speakRetryPrompt === 'function') {
                        audioEngine.speakRetryPrompt();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("Good try, try again!", true);
                    }
                }
            }
        });
    });

    // Bind Cloze Selects
    studioContent.querySelectorAll('.cloze-select').forEach(sel => {
        sel.addEventListener('change', () => {
            const itemIdx = sel.getAttribute('data-item');
            const target = sel.getAttribute('data-target');
            practiseState.selectedCloze[itemIdx] = sel.value;

            if (sel.value === target) {
                sel.classList.add('cloze-correct');
                sel.classList.remove('cloze-incorrect');
                if (!practiseState.awardedCloze) practiseState.awardedCloze = {};
                if (!practiseState.awardedCloze[itemIdx]) {
                    practiseState.awardedCloze[itemIdx] = true;
                    awardPractiseStar(sel, 1, 'Cloze passage solved!');
                }
                if (typeof audioEngine !== 'undefined') {
                    if (typeof audioEngine.speakCorrectPraise === 'function') {
                        audioEngine.speakCorrectPraise();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("That's correct, well done!", true);
                    }
                }
            } else if (sel.value) {
                sel.classList.add('cloze-incorrect');
                sel.classList.remove('cloze-correct');
                if (typeof audioEngine !== 'undefined') {
                    if (typeof audioEngine.speakRetryPrompt === 'function') {
                        audioEngine.speakRetryPrompt();
                    } else if (typeof audioEngine.speak === 'function') {
                        audioEngine.speak("Good try, try again!", true);
                    }
                }
            }
        });
    });

    // Bind Starter Chips Speech
    studioContent.querySelectorAll('.starter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const sIdx = parseInt(chip.getAttribute('data-starter-idx'), 10);
            const rawText = (unit.speaking && unit.speaking.starters && unit.speaking.starters[sIdx]) || '';
            
            // Clean sentence for fluent, natural voice modeling:
            // 1. Remove leading number circle (①, ②, ③)
            // 2. Remove quote marks
            // 3. Replace slashes ('/') with 'or' so it speaks naturally
            // 4. Remove trailing dots
            const cleanSentence = rawText
                .replace(/^[①②③④⑤⑥⑦⑧⑨\d\.\s"']+/g, '')
                .replace(/["']/g, '')
                .replace(/\s*\/\s*/g, ' or ')
                .replace(/\.{3,}$/, '')
                .trim();

            if (!cleanSentence) return;

            // Visual speaking pulse
            chip.classList.add('starter-speaking');
            playPractiseSpeech(cleanSentence, () => {
                chip.classList.remove('starter-speaking');
            });
        });
    });

    // Bind Celebrate Unit Completion
    document.getElementById('btn-practise-celebrate').addEventListener('click', (e) => {
        awardPractiseStar(e.target, 3, 'Completed Unit 01: Hungry Squirrels!');
        if (typeof audioEngine !== 'undefined' && typeof audioEngine.playFanfare === 'function') {
            audioEngine.playFanfare();
        }
    });

    // Navigation
    document.getElementById('btn-back-to-phase3').addEventListener('click', () => {
        practiseState.currentPhase = 3;
        renderReadingPractiseStage();
    });
}

/* --- REWARD & HEART POPPING SYSTEM --- */

function spawnStarPopGraphic(targetElement = null, starCount = 1) {
    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;

    if (targetElement && typeof targetElement.getBoundingClientRect === 'function') {
        const rect = targetElement.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            posX = rect.left + rect.width / 2;
            posY = rect.top + rect.height / 2;
        }
    }

    const popEl = document.createElement('div');
    popEl.className = 'heart-pop-fx star-pop-fx';
    popEl.style.left = `${posX}px`;
    popEl.style.top = `${posY}px`;

    popEl.innerHTML = `
        <div class="heart-pop-content star-pop-content">
            <svg class="heart-pop-svg star-pop-svg" viewBox="0 0 100 100" width="80" height="80">
                <defs>
                    <radialGradient id="popHeartShine" cx="35%" cy="30%" r="65%">
                        <stop offset="0%" stop-color="#ffb3c1"/>
                        <stop offset="25%" stop-color="#ff4d6d"/>
                        <stop offset="65%" stop-color="#e63946"/>
                        <stop offset="100%" stop-color="#a4161a"/>
                    </radialGradient>
                    <filter id="popHeartGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#ff2d55" flood-opacity="0.85"/>
                    </filter>
                </defs>
                <!-- Plump glossy 3D ruby heart -->
                <path d="M 50,85 C 18,58 4,40 4,24 C 4,10 15,2 29,2 C 38.5,2 46.5,7 50,14.5 C 53.5,7 61.5,2 71,2 C 85,2 96,10 96,24 C 96,40 82,58 50,85 Z" 
                      fill="url(#popHeartShine)" stroke="#ffffff" stroke-width="2.5" filter="url(#popHeartGlow)"/>
                <!-- Upper gloss reflection highlight -->
                <path d="M 28,7 C 19,7 12,13 11,22 C 10.5,23.5 12,24 13,23 C 18,16 24,13 32,12 C 34,12 34,7 28,7 Z" 
                      fill="#ffffff" opacity="0.8"/>
                <!-- Shimmer sparkles -->
                <polygon points="50,22 52,32 62,34 52,36 50,46 48,36 38,34 48,32" fill="#ffffff" opacity="0.95"/>
                <circle cx="50" cy="34" r="2.5" fill="#ffffff"/>
                <polygon points="72,16 73,21 78,22 73,23 72,28 71,23 66,22 71,21" fill="#fff5b8" opacity="0.9"/>
            </svg>
            <span class="heart-pop-label star-pop-label">+${starCount} ❤️</span>
        </div>
    `;

    document.body.appendChild(popEl);
    setTimeout(() => {
        if (popEl.parentNode) {
            popEl.parentNode.removeChild(popEl);
        }
    }, 1250);
}

function awardPractiseStar(targetElement = null, starCount = 1, reason = 'Correct Answer!') {
    // Edge case: if first param is a number (e.g. legacy awardPractiseStar(1))
    if (typeof targetElement === 'number') {
        starCount = targetElement;
        targetElement = null;
    }

    // 1. Play Shimmering Star Chime sound
    if (typeof audioEngine !== 'undefined') {
        if (typeof audioEngine.playHeart === 'function') {
            audioEngine.playHeart();
        } else if (typeof audioEngine.playStar === 'function') {
            audioEngine.playStar();
        } else if (typeof audioEngine.playCorrect === 'function') {
            audioEngine.playCorrect();
        }
    }

    // 2. Trigger Popping Heart Graphic right at the answered element
    spawnStarPopGraphic(targetElement, starCount);

    // 3. Trigger Particle Confetti
    if (typeof triggerConfetti === 'function') {
        triggerConfetti();
    }

    // 4. Update Student State & Scoreboard
    if (typeof appState !== 'undefined') {
        let student = appState.students.find(s => s.id === appState.activeStudentId);
        if (!student && appState.students.length > 0) {
            student = appState.students[0];
            appState.activeStudentId = student.id;
        }
        if (student) {
            student.stars = (student.stars || 0) + starCount;
            if (typeof saveState === 'function') saveState();
            if (typeof renderScoreboard === 'function') renderScoreboard();
        }
    }

    // 5. Update global hearts/stars HUD display
    if (typeof quizStars !== 'undefined') {
        quizStars += starCount;
    }
    if (typeof updateHeartsDisplay === 'function') {
        updateHeartsDisplay();
    }

    // 6. Update Zoom toolbar Star Button & nav
    const navStarCountElem = document.getElementById('nav-star-count');
    if (navStarCountElem && typeof appState !== 'undefined') {
        const activeSt = appState.activeStudentId ? appState.students.find(s => s.id === appState.activeStudentId) : null;
        if (activeSt) navStarCountElem.innerText = activeSt.stars || 0;
    }
}

// Global aliases for compatibility
window.spawnStarPopGraphic = spawnStarPopGraphic;
window.spawnHeartPopGraphic = spawnStarPopGraphic;
window.awardStars = awardPractiseStar;
window.awardHearts = awardPractiseStar;
window.awardPractiseStar = awardPractiseStar;

/* --- AUDIO & TTS HELPERS --- */

function playPractiseSpeech(text, onEndCallback = null) {
    if (practiseState.voiceMode === 'live') {
        if (onEndCallback) onEndCallback();
        return;
    }

    if (typeof audioEngine !== 'undefined' && audioEngine.speak) {
        audioEngine.speechRate = practiseState.ttsSpeed || 0.85;
        audioEngine.speak(text, true, onEndCallback);
    } else if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = practiseState.ttsSpeed || 0.85;
        utterance.pitch = 1.25;
        if (typeof audioEngine !== 'undefined' && audioEngine.selectedVoice) {
            utterance.voice = audioEngine.selectedVoice;
        }
        if (onEndCallback) {
            utterance.onend = onEndCallback;
            utterance.onerror = onEndCallback;
        }
        window.speechSynthesis.speak(utterance);
    }
}

/* --- EVENT LISTENERS INITIALIZATION --- */

document.addEventListener('DOMContentLoaded', () => {
    initReadingPractiseControls();
});

function initReadingPractiseControls() {
    // Level dropdown
    const selectLevel = document.getElementById('select-practise-esl-level');
    if (selectLevel) {
        selectLevel.addEventListener('change', (e) => {
            practiseState.currentLevel = e.target.value;
            const levelData = READING_PRACTISE_DATA[practiseState.currentLevel];
            if (levelData && levelData.units && levelData.units.length > 0) {
                practiseState.currentUnitId = levelData.units[0].id;
            }
            practiseState.currentPhase = 1;
            renderReadingPractiseStage();
        });
    }

    // Unit dropdown
    const selectUnit = document.getElementById('select-practise-unit');
    if (selectUnit) {
        selectUnit.addEventListener('change', (e) => {
            practiseState.currentUnitId = e.target.value;
            practiseState.currentPhase = 1;
            renderReadingPractiseStage();
        });
    }

    // Phase Tab Buttons
    document.querySelectorAll('.practise-phase-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const phase = parseInt(btn.getAttribute('data-phase'), 10);
            practiseState.currentPhase = phase;
            renderReadingPractiseStage();
        });
    });

    // Voice Mode Toggle
    const btnVoice = document.getElementById('btn-practise-voice-mode');
    if (btnVoice) {
        btnVoice.addEventListener('click', () => {
            stopKaraokeReadAlong();
            practiseState.voiceMode = practiseState.voiceMode === 'tts' ? 'live' : 'tts';
            updatePractiseToolbarUI();
        });
    }

    // Speed Toggle
    const btnSpeed = document.getElementById('btn-practise-tts-speed');
    if (btnSpeed) {
        btnSpeed.addEventListener('click', () => {
            stopKaraokeReadAlong();
            practiseState.ttsSpeed = practiseState.ttsSpeed === 0.85 ? 1.0 : 0.85;
            updatePractiseToolbarUI();
        });
    }

    // Reading Focus Freeze Toggle
    const btnFocus = document.getElementById('btn-practise-focus-mode');
    if (btnFocus) {
        btnFocus.addEventListener('click', () => {
            practiseState.readingFocusPaused = !practiseState.readingFocusPaused;
            updatePractiseToolbarUI();
            const svg = document.querySelector('.living-window-svg');
            if (svg) {
                svg.classList.toggle('reading-focus-paused', practiseState.readingFocusPaused);
            }
        });
    }

    // Award Star Button
    const btnAward = document.getElementById('btn-practise-award-star');
    if (btnAward) {
        btnAward.addEventListener('click', () => {
            awardPractiseStar(btnAward, 1, 'Teacher Awarded +1 Star!');
            if (typeof audioEngine !== 'undefined') {
                if (typeof audioEngine.speakCorrectPraise === 'function') {
                    audioEngine.speakCorrectPraise();
                } else if (typeof audioEngine.speak === 'function') {
                    audioEngine.speak("That's correct, well done!", true);
                }
            }
        });
    }
}

/* --- GLOBAL CLICK-OUT & KEYBOARD INTERACTION HANDLERS --- */

// Capturing click listener: Any click outside the active karaoke controls immediately halts vocals & playback
document.addEventListener('click', (e) => {
    if (!isKaraokePlaying) return;

    // Allow the karaoke play and stop buttons to process their own toggle clicks
    if (e.target.closest('#btn-karaoke-playall') || e.target.closest('#btn-karaoke-stop')) {
        return;
    }

    // Immediately stop karaoke vocals and timers on any outside click
    stopKaraokeReadAlong();
}, true);

// Global keyboard shortcut: pressing Escape stops karaoke playback
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isKaraokePlaying) {
        stopKaraokeReadAlong();
    }
});

// Stop karaoke read-along if teacher switches browser tabs or minimizes window
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isKaraokePlaying) {
        stopKaraokeReadAlong();
    }
});
