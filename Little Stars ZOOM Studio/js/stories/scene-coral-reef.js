/* ==========================================================================
   SCENE CARTRIDGE: Secret Coral Reef (Advanced Unit 01: Secret of Coral Reef)
   ========================================================================== */

function getPractiseCoralReefSceneSVG(isFocusPaused = false) {
    const pauseClass = isFocusPaused ? 'reading-focus-paused' : '';
    return `<svg class="living-window-svg ${pauseClass}" viewBox="0 0 540 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <!-- Atmospheric Twilight Abyssal Sky / Ocean Gradient -->
            <linearGradient id="abyssalWater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#020617"/>
                <stop offset="45%" stop-color="#082f49"/>
                <stop offset="80%" stop-color="#042f2e"/>
                <stop offset="100%" stop-color="#022c22"/>
            </linearGradient>

            <!-- Seabed Ocean Floor Sand Gradient -->
            <linearGradient id="seabedFloor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0f766e"/>
                <stop offset="40%" stop-color="#115e59"/>
                <stop offset="100%" stop-color="#042f2e"/>
            </linearGradient>

            <!-- Giant Kelp Forest Foliage Gradient -->
            <linearGradient id="kelpForestGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#166534"/>
                <stop offset="50%" stop-color="#15803d"/>
                <stop offset="100%" stop-color="#14532d"/>
            </linearGradient>

            <!-- Mini-Submersible Hull Gradient (Golden Amber Marine Alloy) -->
            <linearGradient id="subHullGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#fde047"/>
                <stop offset="35%" stop-color="#f59e0b"/>
                <stop offset="85%" stop-color="#d97706"/>
                <stop offset="100%" stop-color="#b45309"/>
            </linearGradient>

            <!-- Panoramic Acrylic Dome with Anti-Reflective Ocean Sheen -->
            <linearGradient id="subDomeGlass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="rgba(186,230,253,0.7)"/>
                <stop offset="30%" stop-color="rgba(56,189,248,0.4)"/>
                <stop offset="70%" stop-color="rgba(14,165,233,0.2)"/>
                <stop offset="100%" stop-color="rgba(2,132,199,0.35)"/>
            </linearGradient>

            <!-- Maya's Styled Brunette Hair -->
            <linearGradient id="mayaPonytail" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#78350f"/>
                <stop offset="60%" stop-color="#552207"/>
                <stop offset="100%" stop-color="#2d0f02"/>
            </linearGradient>

            <!-- Forward Ultraviolet Spotlight Cone (Cyan-Violet) -->
            <linearGradient id="uvBeamCone" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="rgba(192,132,252,0.65)"/>
                <stop offset="35%" stop-color="rgba(34,211,238,0.55)"/>
                <stop offset="75%" stop-color="rgba(6,182,212,0.25)"/>
                <stop offset="100%" stop-color="rgba(6,182,212,0)"/>
            </linearGradient>

            <!-- Fluorescent Azure Coral Gradient -->
            <linearGradient id="azureCoralGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#a5f3fc"/>
                <stop offset="40%" stop-color="#22d3ee"/>
                <stop offset="85%" stop-color="#0891b2"/>
                <stop offset="100%" stop-color="#0e7490"/>
            </linearGradient>

            <!-- Bioluminescent Jellyfish Bell Radial Gradient -->
            <radialGradient id="jellyBellRad" cx="45%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#e0f2fe"/>
                <stop offset="45%" stop-color="#38bdf8"/>
                <stop offset="80%" stop-color="#818cf8"/>
                <stop offset="100%" stop-color="#c084fc"/>
            </radialGradient>

            <!-- Shelly the Sea Turtle Emerald Scutes Shell -->
            <radialGradient id="turtleCarapace" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#34d399"/>
                <stop offset="50%" stop-color="#10b981"/>
                <stop offset="85%" stop-color="#059669"/>
                <stop offset="100%" stop-color="#064e3b"/>
            </radialGradient>

            <!-- Coral Bioluminescence Glow Filter -->
            <filter id="azureCoralGlow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>

            <!-- Jellyfish Lantern Glow Filter -->
            <filter id="jellyLanternGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>

            <!-- Volumetric Downward Jellyfish Lantern Beam -->
            <linearGradient id="jellyLanternBeam" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(103,232,249,0.7)"/>
                <stop offset="35%" stop-color="rgba(34,211,238,0.45)"/>
                <stop offset="75%" stop-color="rgba(6,182,212,0.2)"/>
                <stop offset="100%" stop-color="rgba(6,182,212,0)"/>
            </linearGradient>

            <!-- Seabed Floor Illumination Pool Radial Gradient -->
            <radialGradient id="jellyFloorSpotlight" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(103,232,249,0.95)"/>
                <stop offset="25%" stop-color="rgba(34,211,238,0.75)"/>
                <stop offset="60%" stop-color="rgba(6,182,212,0.35)"/>
                <stop offset="100%" stop-color="rgba(6,182,212,0)"/>
            </radialGradient>

            <!-- Bright Core of Seabed Illumination -->
            <radialGradient id="jellyFloorCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                <stop offset="40%" stop-color="rgba(165,243,252,0.85)"/>
                <stop offset="100%" stop-color="rgba(34,211,238,0)"/>
            </radialGradient>

            <!-- Camera Lens Flare / Optical Shutter Gleam Gradient -->
            <radialGradient id="cameraLensGleam" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="30%" stop-color="rgba(165,243,252,0.95)"/>
                <stop offset="65%" stop-color="rgba(56,189,248,0.4)"/>
                <stop offset="100%" stop-color="rgba(56,189,248,0)"/>
            </radialGradient>
        </defs>

        <style>
            /* Pause support */
            .reading-focus-paused * {
                animation-play-state: paused !important;
            }

            /* 1. Giant Kelp Gentle Current Sway */
            .kelp-sway-1 {
                animation: kelpSwayCycle1 6.8s ease-in-out infinite alternate;
                transform-origin: 35px 220px;
            }
            .kelp-sway-2 {
                animation: kelpSwayCycle2 7.4s ease-in-out infinite alternate 0.8s;
                transform-origin: 65px 220px;
            }
            .kelp-sway-3 {
                animation: kelpSwayCycle1 6.2s ease-in-out infinite alternate 1.6s;
                transform-origin: 95px 220px;
            }
            @keyframes kelpSwayCycle1 {
                0%   { transform: rotate(-3deg); }
                100% { transform: rotate(5deg); }
            }
            @keyframes kelpSwayCycle2 {
                0%   { transform: rotate(4deg); }
                100% { transform: rotate(-4deg); }
            }

            /* 2. Maya's Mini-Submersible: Continuous Forward Cruise & Research Hover (Zero Reverse) */
            .sub-cruise-cycle {
                animation: subCruiseAnim 9.6s ease-in-out infinite;
            }
            @keyframes subCruiseAnim {
                /* 0% - 28%: Steers forward from entrance past giant kelp forest in Twilight Bay */
                0%     { transform: translate(-60px, 94px) rotate(1deg); opacity: 1; }
                15%    { transform: translate(40px, 92px) rotate(2deg); opacity: 1; }
                28%    { transform: translate(125px, 96px) rotate(0deg); opacity: 1; }
                /* 28% - 56%: Observing bioluminescent jellyfish lighting ocean floor */
                42%    { transform: translate(195px, 102px) rotate(1deg); opacity: 1; }
                56%    { transform: translate(245px, 105px) rotate(0.5deg); opacity: 1; }
                /* 56% - 86%: Hovering gently above Azure Coral reef; UV spotlight illuminates reef */
                68%    { transform: translate(255px, 107px) rotate(-0.5deg); opacity: 1; }
                78%    { transform: translate(260px, 107px) rotate(0deg); opacity: 1; }  /* Turtle swims alongside; camera clicks */
                86%    { transform: translate(265px, 106px) rotate(0.5deg); opacity: 1; } /* Data logged: 21.4°C SANCTUARY */
                /* 86% - 100%: Throttles forward into deep ocean sanctuary ahead (Continuous forward motion, zero reverse!) */
                93%    { transform: translate(370px, 100px) rotate(1deg); opacity: 1; }
                98%    { transform: translate(540px, 96px) rotate(1deg); opacity: 1; }
                99%    { transform: translate(580px, 95px) rotate(1deg); opacity: 0; }
                99.5%  { transform: translate(-70px, 94px) rotate(1deg); opacity: 0; }
                100%   { transform: translate(-60px, 94px) rotate(1deg); opacity: 1; }
            }

            /* Mini-Sub Gentle Hydrodynamic Buoyancy Bob */
            .sub-buoyancy-bob {
                animation: subBobCycle 3.2s ease-in-out infinite alternate;
                transform-origin: 60px 24px;
            }
            @keyframes subBobCycle {
                0%   { transform: translateY(-2.5px) rotate(0.5deg); }
                100% { transform: translateY(2.5px) rotate(-0.5deg); }
            }

            /* Submersible Stern Propeller 360° Spinning */
            .sub-propeller-spin {
                animation: propSpinCycle 0.28s linear infinite;
                transform-origin: 0px 0px;
            }
            @keyframes propSpinCycle {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            /* Forward Ultraviolet (UV) Spotlight Beam Activation */
            .sub-uv-spotlight {
                animation: uvSpotlightCycle 9.6s ease-in-out infinite;
                transform-origin: 104px 34px;
            }
            @keyframes uvSpotlightCycle {
                0%, 46%    { opacity: 0.22; transform: scaleY(0.75); }
                50%, 74%   { opacity: 0.95; transform: scaleY(1.08); } /* Powerful UV beam documenting reef! */
                78%, 100%  { opacity: 0.30; transform: scaleY(0.80); }
            }

            /* Optical Camera Calibration Shutter Glint (Sentence 4) */
            .sub-camera-flash {
                animation: cameraFlashGleam 9.6s ease-out infinite;
                transform-origin: 6px 7px;
            }
            @keyframes cameraFlashGleam {
                0%, 75%   { opacity: 0; transform: scale(0.2); }
                76.5%     { opacity: 1.0; transform: scale(1.15); filter: drop-shadow(0 0 6px #67e8f9); } /* Crisp shutter sparkle! */
                78%       { opacity: 0.6; transform: scale(0.9); }
                79.5%     { opacity: 0; transform: scale(0.3); }
                100%      { opacity: 0; transform: scale(0.2); }
            }

            /* Maya's Flowing Ponytail Subsea Physics */
            .maya-ponytail-float {
                animation: mayaHairFloatCycle 3.6s ease-in-out infinite alternate;
                transform-origin: 0px 0px;
            }
            @keyframes mayaHairFloatCycle {
                0%   { transform: rotate(-5deg); }
                100% { transform: rotate(7deg); }
            }

            /* 3. Bioluminescent Jellyfish: Floating Lantern Cycle (9.6s) */
            .jellyfish-lantern-cycle {
                animation: jellyLanternCycleAnim 9.6s ease-in-out infinite;
            }
            @keyframes jellyLanternCycleAnim {
                /* Floating down from upper water to illuminate dark ocean floor */
                0%, 15%    { transform: translate(165px, 32px); }
                28%        { transform: translate(195px, 62px); }
                40%, 65%   { transform: translate(220px, 82px); } /* Floating lantern hovering near seabed */
                80%        { transform: translate(195px, 50px); }
                100%       { transform: translate(165px, 32px); }
            }

            /* Jellyfish Bell Breathing Pulse */
            .jelly-bell-pulse {
                animation: jellyBellPulseAnim 1.6s ease-in-out infinite alternate;
                transform-origin: 0px 0px;
            }
            @keyframes jellyBellPulseAnim {
                0%   { transform: scale(1, 1); }
                100% { transform: scale(1.18, 0.84); }
            }

            /* Jellyfish Flowing Tentacles Sway */
            .jelly-tentacles-sway {
                animation: jellyTentaclesAnim 2.2s ease-in-out infinite alternate;
                transform-origin: 0px 0px;
            }
            @keyframes jellyTentaclesAnim {
                0%   { transform: rotate(-8deg); }
                100% { transform: rotate(9deg); }
            }

            /* Powerful Seabed Illumination from the Floating Jellyfish Lantern */
            .jelly-seabed-pool {
                animation: jellyFloorPoolCycle 9.6s ease-in-out infinite;
                transform-origin: 0px 138px;
            }
            @keyframes jellyFloorPoolCycle {
                0%, 15%    { opacity: 0.35; transform: scale(0.7); }
                28%        { opacity: 0.85; transform: scale(0.95); }
                40%, 65%   { opacity: 1.0; transform: scale(1.22); filter: drop-shadow(0 0 24px #22d3ee); } /* INTENSE ocean floor illumination! */
                80%        { opacity: 0.55; transform: scale(0.85); }
                100%       { opacity: 0.35; transform: scale(0.7); }
            }

            /* 4. Shelly the Friendly Sea Turtle: Effortless Swimming Glide Across Stage */
            .turtle-swim-cycle {
                animation: turtleSwimAnim 9.6s ease-in-out infinite;
            }
            @keyframes turtleSwimAnim {
                /* Swims alongside Maya's sub during Sentences 4 & 5 and cruises smoothly past into open water */
                0%         { transform: translate(-60px, 94px) rotate(-4deg); opacity: 0; }
                1%         { transform: translate(540px, 108px) rotate(-3deg); opacity: 0; }
                50%        { transform: translate(540px, 108px) rotate(-3deg); opacity: 0; }
                52%        { transform: translate(530px, 108px) rotate(-3deg); opacity: 0.4; }
                58%        { transform: translate(460px, 105px) rotate(-2deg); opacity: 1; }
                68%        { transform: translate(370px, 102px) rotate(1deg); opacity: 1; }  /* Approaching Maya's sub */
                76%        { transform: translate(320px, 104px) rotate(0deg); opacity: 1; }  /* Alongside Maya's cockpit */
                84%        { transform: translate(250px, 106px) rotate(-1deg); opacity: 1; } /* Gliding past the sub hull */
                92%        { transform: translate(160px, 102px) rotate(-2deg); opacity: 1; } /* Still showing past the submarine! */
                97%        { transform: translate(70px, 96px) rotate(-3deg); opacity: 1; }   /* Gliding through kelp forest */
                100%       { transform: translate(10px, 94px) rotate(-4deg); opacity: 0.8; }
            }

            /* Turtle Front Flippers Rhythmic Swimming Stroke */
            .turtle-flipper-left {
                animation: turtleFlipperCycle 2.2s ease-in-out infinite alternate;
                transform-origin: 0px 0px;
            }
            .turtle-flipper-right {
                animation: turtleFlipperCycle 2.2s ease-in-out infinite alternate 0.3s;
                transform-origin: 0px 0px;
            }
            @keyframes turtleFlipperCycle {
                0%   { transform: rotate(-24deg); }
                100% { transform: rotate(34deg); }
            }

            /* 5. Rare Azure Coral Reef: Bioluminescent Fluorescent Pulse */
            .azure-coral-pulse {
                animation: coralFluoresce 4.5s ease-in-out infinite alternate;
            }
            @keyframes coralFluoresce {
                0%   { opacity: 0.72; filter: drop-shadow(0 0 6px #22d3ee); }
                100% { opacity: 1.0; filter: drop-shadow(0 0 16px #38bdf8); }
            }

            /* 6. Translucent Ambient Rising Bubbles */
            .bubble-rise-1 { animation: bubbleFloat1 3.4s linear infinite; }
            .bubble-rise-2 { animation: bubbleFloat2 4.2s linear infinite 1.2s; }
            .bubble-rise-3 { animation: bubbleFloat3 3.8s linear infinite 2.1s; }
            @keyframes bubbleFloat1 {
                0%   { transform: translate(0, 0) scale(0.4); opacity: 0.75; }
                100% { transform: translate(14px, -125px) scale(1.15); opacity: 0; }
            }
            @keyframes bubbleFloat2 {
                0%   { transform: translate(0, 0) scale(0.5); opacity: 0.8; }
                100% { transform: translate(-12px, -140px) scale(1.2); opacity: 0; }
            }
            @keyframes bubbleFloat3 {
                0%   { transform: translate(0, 0) scale(0.35); opacity: 0.7; }
                100% { transform: translate(8px, -115px) scale(1.1); opacity: 0; }
            }

            /* Telemetry Data HUD Beacon */
            .telemetry-beacon {
                animation: telemetryBlink 2.4s ease-in-out infinite;
            }
            @keyframes telemetryBlink {
                0%, 100% { opacity: 0.85; }
                50%      { opacity: 1; filter: drop-shadow(0 0 4px #34d399); }
            }
        </style>

        <!-- LAYER 1: ATMOSPHERIC ABYSSAL BACKING & DEEP OCEAN SUNBEAMS -->
        <!-- Deep Twilight Bay Abyssal Void Background -->
        <rect x="0" y="0" width="540" height="240" fill="url(#abyssalWater)"/>

        <!-- Soft Filtering Sunbeams from Ocean Surface -->
        <g opacity="0.12">
            <polygon points="120,0 160,0 230,220 180,220" fill="#38bdf8"/>
            <polygon points="260,0 310,0 390,220 330,220" fill="#38bdf8"/>
            <polygon points="410,0 450,0 520,220 470,220" fill="#38bdf8"/>
        </g>

        <!-- Floating Plankton Micro-Stars -->
        <g fill="#38bdf8" opacity="0.45">
            <circle cx="70" cy="40" r="1.2"/>
            <circle cx="140" cy="75" r="1.5"/>
            <circle cx="210" cy="30" r="1.0"/>
            <circle cx="310" cy="55" r="1.4"/>
            <circle cx="430" cy="45" r="1.2"/>
            <circle cx="490" cy="80" r="1.5"/>
            <circle cx="280" cy="110" r="1.0"/>
        </g>

        <!-- Subsea Cavern Arch & Rock Shelves (Right Framing) -->
        <path d="M 460,0 Q 485,70 540,90 L 540,0 Z" fill="#031b26" opacity="0.6"/>
        <path d="M 480,170 Q 510,185 540,195 L 540,220 L 470,220 Z" fill="#04202c"/>

        <!-- LAYER 2: GIANT KELP FORESTS (Left Background Swaying in Currents) -->
        <g>
            <!-- Kelp Stipe 1 (X = 35) -->
            <g class="kelp-sway-1">
                <path d="M 35,220 Q 30,150 40,80 Q 48,30 36,0" stroke="#166534" stroke-width="4.5" fill="none" stroke-linecap="round"/>
                <!-- Kelp Fronds / Blades -->
                <path d="M 35,180 Q 18,170 12,155 Q 25,160 36,170" fill="url(#kelpForestGrad)"/>
                <path d="M 37,150 Q 55,140 62,125 Q 48,135 38,142" fill="url(#kelpForestGrad)"/>
                <path d="M 38,115 Q 16,105 10,88 Q 24,96 38,105" fill="url(#kelpForestGrad)"/>
                <path d="M 40,80 Q 60,68 68,52 Q 52,62 40,72" fill="url(#kelpForestGrad)"/>
                <path d="M 38,45 Q 20,35 15,18 Q 28,26 38,36" fill="url(#kelpForestGrad)"/>
            </g>

            <!-- Kelp Stipe 2 (X = 65) -->
            <g class="kelp-sway-2">
                <path d="M 65,220 Q 72,160 62,95 Q 55,45 68,0" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round"/>
                <!-- Fronds -->
                <path d="M 66,190 Q 86,182 92,166 Q 78,172 67,180" fill="url(#kelpForestGrad)"/>
                <path d="M 65,155 Q 45,144 38,128 Q 52,136 64,146" fill="url(#kelpForestGrad)"/>
                <path d="M 63,120 Q 84,110 90,92 Q 76,100 64,110" fill="url(#kelpForestGrad)"/>
                <path d="M 61,85 Q 40,74 34,56 Q 48,64 60,76" fill="url(#kelpForestGrad)"/>
                <path d="M 63,50 Q 84,38 88,20 Q 74,30 64,40" fill="url(#kelpForestGrad)"/>
            </g>

            <!-- Kelp Stipe 3 (X = 95) -->
            <g class="kelp-sway-3">
                <path d="M 95,220 Q 88,165 98,105 Q 104,55 92,0" stroke="#166534" stroke-width="4.5" fill="none" stroke-linecap="round"/>
                <!-- Fronds -->
                <path d="M 94,185 Q 75,175 70,158 Q 84,166 94,175" fill="url(#kelpForestGrad)"/>
                <path d="M 95,148 Q 115,138 122,122 Q 108,130 96,140" fill="url(#kelpForestGrad)"/>
                <path d="M 97,112 Q 78,102 72,85 Q 86,92 97,102" fill="url(#kelpForestGrad)"/>
                <path d="M 99,78 Q 118,66 124,48 Q 110,58 98,68" fill="url(#kelpForestGrad)"/>
            </g>
        </g>

        <!-- LAYER 3: SEABED BASELINE FLOOR (Y = 220) & RARE AZURE CORAL REEF -->
        <!-- Rolling Marine Sand Seabed Dunes -->
        <path d="M 0,214 Q 90,208 180,216 Q 270,224 360,215 Q 450,207 540,214 L 540,240 L 0,240 Z" fill="url(#seabedFloor)"/>
        <!-- Seabed Sand Ripple Lines -->
        <path d="M 20,224 Q 100,218 190,225" stroke="#042f2e" stroke-width="1.8" fill="none"/>
        <path d="M 220,227 Q 310,220 400,226" stroke="#042f2e" stroke-width="1.8" fill="none"/>
        <path d="M 420,224 Q 480,218 535,223" stroke="#042f2e" stroke-width="1.8" fill="none"/>

        <!-- Sea Anemones & Mini Coral Polyps at Seabed -->
        <g>
            <!-- Purple Anemone at X = 175 -->
            <path d="M 172,218 Q 170,208 175,204 Q 178,212 176,218" stroke="#a855f7" stroke-width="2.2" fill="none"/>
            <path d="M 175,218 Q 175,206 179,202 Q 182,210 178,218" stroke="#c084fc" stroke-width="2.2" fill="none"/>
            <path d="M 178,218 Q 182,208 185,205 Q 185,212 181,218" stroke="#a855f7" stroke-width="2.2" fill="none"/>
            <!-- Orange Sea Star at X = 230 -->
            <polygon points="230,222 232,216 235,220 239,218 236,224 238,228 233,226 230,230 229,225 225,223" fill="#f97316" stroke="#c2410c" stroke-width="0.8"/>
            <!-- Green Sea Star at X = 505 -->
            <polygon points="505,224 507,219 509,222 513,220 511,225 513,229 508,227 505,231 504,226 500,224" fill="#10b981" stroke="#047857" stroke-width="0.8"/>
        </g>

        <!-- THE RARE AZURE CORAL REEF (Vibrant Fluorescent Turquoise Bioluminescence) -->
        <g class="azure-coral-pulse" filter="url(#azureCoralGlow)">
            <!-- Coral Formation 1: Large Branching Staghorn Coral (X: 280 - 345, Y: 155 - 220) -->
            <path d="M 310,218 L 310,182" stroke="url(#azureCoralGrad)" stroke-width="9" stroke-linecap="round"/>
            <!-- Left Main Branch -->
            <path d="M 310,196 Q 292,185 285,168" stroke="url(#azureCoralGrad)" stroke-width="6.5" stroke-linecap="round" fill="none"/>
            <path d="M 285,168 Q 278,154 274,144" stroke="#a5f3fc" stroke-width="4.5" stroke-linecap="round" fill="none"/>
            <path d="M 292,176 Q 302,162 298,150" stroke="#a5f3fc" stroke-width="4" stroke-linecap="round" fill="none"/>
            <!-- Center High Crest -->
            <path d="M 310,182 Q 314,164 312,150" stroke="url(#azureCoralGrad)" stroke-width="6" stroke-linecap="round" fill="none"/>
            <path d="M 312,150 Q 310,140 314,132" stroke="#a5f3fc" stroke-width="4.5" stroke-linecap="round" fill="none"/>
            <path d="M 312,165 Q 324,152 328,142" stroke="#a5f3fc" stroke-width="4" stroke-linecap="round" fill="none"/>
            <!-- Right Branch -->
            <path d="M 310,190 Q 328,180 338,165" stroke="url(#azureCoralGrad)" stroke-width="6.5" stroke-linecap="round" fill="none"/>
            <path d="M 338,165 Q 346,152 350,140" stroke="#a5f3fc" stroke-width="4.5" stroke-linecap="round" fill="none"/>
            <path d="M 332,172 Q 338,160 342,152" stroke="#a5f3fc" stroke-width="4" stroke-linecap="round" fill="none"/>
            <!-- Glowing Fluorescent Polyp Tips -->
            <circle cx="274" cy="144" r="3.2" fill="#ffffff"/>
            <circle cx="298" cy="150" r="3.0" fill="#ffffff"/>
            <circle cx="314" cy="132" r="3.5" fill="#ffffff"/>
            <circle cx="328" cy="142" r="3.0" fill="#ffffff"/>
            <circle cx="350" cy="140" r="3.2" fill="#ffffff"/>

            <!-- Coral Formation 2: Flourishing Fan & Dome Coral (X: 355 - 425, Y: 165 - 220) -->
            <ellipse cx="385" cy="216" rx="28" ry="12" fill="#0891b2"/>
            <path d="M 370,216 Q 360,195 365,178 Q 372,165 385,166 Q 398,165 405,178 Q 410,195 400,216 Z" fill="url(#azureCoralGrad)" opacity="0.9"/>
            <!-- Fan Coral Lattice Veins -->
            <path d="M 385,216 L 385,170 M 385,195 Q 372,185 368,175 M 385,195 Q 398,185 402,175 M 385,182 Q 376,174 374,168 M 385,182 Q 394,174 396,168" stroke="#a5f3fc" stroke-width="1.6" fill="none"/>
            <!-- Glowing Coral Tip Nodes -->
            <circle cx="365" cy="178" r="2.8" fill="#ffffff"/>
            <circle cx="385" cy="166" r="3.2" fill="#ffffff"/>
            <circle cx="405" cy="178" r="2.8" fill="#ffffff"/>

            <!-- Coral Formation 3: Towering Azure Spire (X: 435 - 485, Y: 148 - 220) -->
            <path d="M 455,218 L 455,175" stroke="url(#azureCoralGrad)" stroke-width="8" stroke-linecap="round"/>
            <path d="M 455,188 Q 440,174 436,158 Q 434,148 438,138" stroke="#22d3ee" stroke-width="5" stroke-linecap="round" fill="none"/>
            <path d="M 455,175 Q 465,160 472,145" stroke="#22d3ee" stroke-width="5" stroke-linecap="round" fill="none"/>
            <path d="M 455,165 L 455,142" stroke="#a5f3fc" stroke-width="4.5" stroke-linecap="round"/>
            <circle cx="438" cy="138" r="3.2" fill="#ffffff"/>
            <circle cx="455" cy="142" r="3.2" fill="#ffffff"/>
            <circle cx="472" cy="145" r="3.2" fill="#ffffff"/>
        </g>

        <!-- Translucent Rising Coral Bubble Streams -->
        <g>
            <g transform="translate(315, 175)">
                <circle class="bubble-rise-1" cx="0" cy="0" r="3.2" fill="#a5f3fc" stroke="#38bdf8" stroke-width="0.8"/>
            </g>
            <g transform="translate(385, 185)">
                <circle class="bubble-rise-2" cx="0" cy="0" r="3.8" fill="#bae6fd" stroke="#38bdf8" stroke-width="0.8"/>
            </g>
            <g transform="translate(455, 165)">
                <circle class="bubble-rise-3" cx="0" cy="0" r="2.8" fill="#a5f3fc" stroke="#38bdf8" stroke-width="0.8"/>
            </g>
        </g>

        <!-- LAYER 4: CHARACTERS (MAYA IN SUBMERSIBLE, BIOLUMINESCENT JELLYFISH, SHELLY TURTLE) -->

        <!-- =========================================================================
             A. BIOLUMINESCENT JELLYFISH: FLOATING LANTERN IN DEEP WATER (SENTENCE 2)
             ========================================================================= -->
        <g class="jellyfish-lantern-cycle">
            <!-- Nested Transform: Static Center Group -->
            <g transform="translate(0, 0)">
                <!-- 1. INTENSE ILLUMINATION OF THE DARK OCEAN FLOOR (FLOATING LANTERN) -->
                <!-- Volumetric Downward Light Column from Jellyfish to Seabed -->
                <polygon points="-16,8 16,8 90,140 -90,140" fill="url(#jellyLanternBeam)" opacity="0.85"/>

                <!-- Dedicated Radiant Glowing Seabed Light Pool on the Ocean Floor (Y = 138 -> Seabed Baseline) -->
                <g class="jelly-seabed-pool">
                    <!-- Broad Outer Illumination Glow -->
                    <ellipse cx="0" cy="138" rx="95" ry="22" fill="url(#jellyFloorSpotlight)" filter="url(#jellyLanternGlow)"/>
                    <!-- High-Intensity Brilliant Core on the Sand Floor -->
                    <ellipse cx="0" cy="138" rx="55" ry="12" fill="url(#jellyFloorCore)"/>
                    <!-- Highlighted Glowing Sand Ripple Lines on Ocean Floor -->
                    <path d="M -45,138 Q 0,134 45,138" stroke="#a5f3fc" stroke-width="2.5" fill="none" opacity="0.85"/>
                    <path d="M -30,143 Q 0,139 30,143" stroke="#67e8f9" stroke-width="2" fill="none" opacity="0.7"/>
                </g>

                <!-- 2. Ambient Bioluminescent Lantern Light Glow Aura around Bell -->
                <circle cx="0" cy="0" r="42" fill="rgba(34,211,238,0.35)" filter="url(#jellyLanternGlow)"/>

                <!-- 3. Pulsing Jellyfish Bell -->
                <g class="jelly-bell-pulse" style="transform-origin: 0px 0px;">
                    <!-- Outer Translucent Bell Body -->
                    <path d="M -24,4 C -24,-24 24,-24 24,4 C 18,7 12,3 0,5 C -12,3 -18,7 -24,4 Z" fill="url(#jellyBellRad)" stroke="#a5f3fc" stroke-width="1.8" opacity="0.92"/>
                    <!-- Inner Luminous Organ Core -->
                    <ellipse cx="0" cy="-6" rx="10" ry="7" fill="#ffffff" opacity="0.95"/>
                    <ellipse cx="0" cy="-6" rx="6" ry="4" fill="#a5f3fc"/>
                    <!-- Bell Rim Frills -->
                    <path d="M -22,4 Q -16,10 -11,4 Q -5,10 0,4 Q 6,10 11,4 Q 17,10 22,4" stroke="#c084fc" stroke-width="1.4" fill="none"/>
                </g>

                <!-- 4. Flowing Undulating Lantern Tentacles -->
                <g class="jelly-tentacles-sway" style="transform-origin: 0px 0px;">
                    <path d="M -16,6 Q -20,24 -14,40 Q -10,54 -16,68" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.85"/>
                    <path d="M -8,6 Q -4,26 -9,44 Q -14,60 -7,74" stroke="#c084fc" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.9"/>
                    <path d="M 0,6 Q 4,28 0,48 Q -4,66 2,82" stroke="#67e8f9" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.95"/>
                    <path d="M 8,6 Q 14,26 8,44 Q 4,60 11,74" stroke="#c084fc" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.9"/>
                    <path d="M 16,6 Q 20,24 14,40 Q 10,54 18,68" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.85"/>
                </g>
            </g>
        </g>

        <!-- =========================================================================
             B. MAYA'S HIGH-TECH MINI-SUBMERSIBLE RIG (6-PHASE VOYAGE TO CORAL REEF)
             ========================================================================= -->
        <g class="sub-cruise-cycle">
            <!-- Hydrodynamic Buoyancy Bob Rig -->
            <g class="sub-buoyancy-bob">

                <!-- 1. Stern Hydro-Thruster Shroud & Propeller (X = -20) -->
                <!-- Shroud Housing -->
                <rect x="-18" y="24" width="12" height="18" rx="3" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
                <ellipse cx="-18" cy="33" rx="4" ry="9" fill="#1e293b"/>
                <!-- Spinning 360° Propeller (Nested Transform at -24, 33) -->
                <g transform="translate(-24, 33)">
                    <g class="sub-propeller-spin" style="transform-origin: 0px 0px;">
                        <ellipse cx="0" cy="-9" rx="3.5" ry="8" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
                        <ellipse cx="0" cy="9" rx="3.5" ry="8" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
                        <circle cx="0" cy="0" r="3.5" fill="#475569"/>
                    </g>
                </g>
                <!-- Propeller Bubble Wake Stream -->
                <g transform="translate(-30, 33)">
                    <circle class="bubble-rise-1" cx="0" cy="0" r="2.2" fill="#e0f2fe" opacity="0.8"/>
                    <circle class="bubble-rise-2" cx="-6" cy="4" r="2.8" fill="#bae6fd" opacity="0.75"/>
                </g>

                <!-- 2. Streamlined Titanium Bottom Skids -->
                <rect x="0" y="56" width="85" height="5" rx="2.5" fill="#475569" stroke="#1e293b" stroke-width="1.2"/>
                <line x1="16" y1="50" x2="16" y2="56" stroke="#334155" stroke-width="3.5" stroke-linecap="round"/>
                <line x1="70" y1="50" x2="70" y2="56" stroke="#334155" stroke-width="3.5" stroke-linecap="round"/>

                <!-- 3. Golden Amber Hydrodynamic Sub Hull -->
                <path d="M -8,33 C -8,15 15,8 55,8 C 88,8 108,18 108,33 C 108,48 88,56 55,56 C 15,56 -8,48 -8,33 Z" fill="url(#subHullGold)" stroke="#78350f" stroke-width="2.5"/>

                <!-- Cyan Waterline Gasket Racing Stripe -->
                <path d="M -2,33 C 15,35 60,35 106,33" stroke="#0284c7" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                <path d="M 4,37 C 20,39 60,39 100,37" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" fill="none"/>

                <!-- Conning Tower / Dorsal Fin with Telemetry Beacon LED -->
                <path d="M 38,8 L 44,-6 L 62,-6 L 68,8 Z" fill="#b45309" stroke="#78350f" stroke-width="2"/>
                <line x1="53" y1="-6" x2="53" y2="-16" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
                <!-- Telemetry Beacon LED -->
                <circle class="telemetry-beacon" cx="53" cy="-18" r="3.2" fill="#34d399"/>

                <!-- Digital Telemetry HUD Pill (Temperature Data Display: Sentence 5) -->
                <g class="telemetry-beacon" transform="translate(-13, -38)">
                    <rect x="0" y="0" width="132" height="18" rx="9" fill="rgba(15,23,42,0.92)" stroke="#38bdf8" stroke-width="1.5"/>
                    <!-- Glowing Telemetry LED Indicator -->
                    <circle cx="11" cy="9" r="3.5" fill="#34d399"/>
                    <circle cx="11" cy="9" r="6" fill="rgba(52,211,153,0.3)"/>
                    <!-- Text completely contained with comfortable safety margin -->
                    <text x="21" y="12.2" font-size="7.5" font-family="system-ui, -apple-system, monospace, sans-serif" font-weight="bold" fill="#38bdf8" letter-spacing="0.3">21.4°C SANCTUARY</text>
                </g>

                <!-- 4. Inside Cockpit: MAYA THE OCEANOGRAPHER -->
                <g transform="translate(74, 30)">
                    <!-- Maya's Neck & Wetsuit Shoulders (Midnight Navy & Magenta Trim) -->
                    <path d="M -12,18 L 12,18 L 15,28 L -15,28 Z" fill="#1e1b4b" stroke="#312e81" stroke-width="1.2"/>
                    <line x1="-3" y1="18" x2="-3" y2="28" stroke="#ec4899" stroke-width="1.5"/>

                    <!-- Maya's Flowing Brunette Ponytail with Ocean Motion (Nested Transform: Anchor 0, -4) -->
                    <g transform="translate(0, -4)">
                        <g class="maya-ponytail-float" style="transform-origin: 0px 0px;">
                            <path d="M -4,-2 C -16,-18 -32,-4 -28,14 C -26,22 -18,16 -12,8 Z" fill="url(#mayaPonytail)"/>
                            <ellipse cx="-24" cy="10" rx="3.5" ry="7" fill="#451a03" transform="rotate(25 -24 10)"/>
                        </g>
                    </g>

                    <!-- Maya's Head & Face -->
                    <ellipse cx="2" cy="0" rx="14" ry="15" fill="#fed7aa"/>
                    <!-- Rosy Cheeks -->
                    <circle cx="-6" cy="4" r="3.5" fill="#f43f5e" opacity="0.45"/>
                    <circle cx="10" cy="4" r="3.5" fill="#f43f5e" opacity="0.45"/>
                    <!-- Expressive Brown Eyes with Fluttery Winged Eyelashes -->
                    <ellipse cx="-3" cy="-1" rx="2.6" ry="3.4" fill="#3e1f07"/>
                    <ellipse cx="8" cy="-1" rx="2.6" ry="3.4" fill="#3e1f07"/>
                    <circle cx="-4" cy="-2.5" r="1.1" fill="#ffffff"/>
                    <circle cx="7" cy="-2.5" r="1.1" fill="#ffffff"/>
                    <circle cx="-2" cy="-0.5" r="0.6" fill="#ffffff"/>
                    <circle cx="9" cy="-0.5" r="0.6" fill="#ffffff"/>
                    <!-- Delicate Eyelashes -->
                    <path d="M -6,-4 L -8,-7" stroke="#2d0f02" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M 11,-4 L 13,-7" stroke="#2d0f02" stroke-width="1.2" stroke-linecap="round"/>
                    <!-- Friendly Eyebrows -->
                    <path d="M -7,-7 Q -3,-10 0,-7" stroke="#552207" stroke-width="1.4" stroke-linecap="round" fill="none"/>
                    <path d="M 5,-7 Q 9,-10 12,-7" stroke="#552207" stroke-width="1.4" stroke-linecap="round" fill="none"/>
                    <!-- Warm Loving Confident Smile -->
                    <path d="M -2,7 Q 3,12 8,7" stroke="#b91c1c" stroke-width="1.8" stroke-linecap="round" fill="#ffffff"/>
                    <!-- Diving Headset Microphone -->
                    <path d="M -12,0 Q -12,8 -4,9" stroke="#0284c7" stroke-width="1.5" fill="none"/>
                    <circle cx="-4" cy="9" r="1.8" fill="#38bdf8"/>

                    <!-- Hands on Submarine Steering Throttle / Controls -->
                    <rect x="-8" y="24" width="18" height="6" rx="2" fill="#0284c7"/>
                    <circle cx="-6" cy="23" r="3" fill="#fed7aa"/>
                    <circle cx="8" cy="23" r="3" fill="#fed7aa"/>
                </g>

                <!-- 5. Panoramic Clear Observation Glass Dome -->
                <circle cx="76" cy="30" r="23" fill="url(#subDomeGlass)" stroke="#0284c7" stroke-width="2.5"/>
                <!-- Anti-Reflective Specular Sheen Arc -->
                <path d="M 60,14 A 20,20 0 0,1 92,18" stroke="rgba(255,255,255,0.75)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
                <path d="M 64,20 A 16,16 0 0,1 86,22" stroke="rgba(255,255,255,0.4)" stroke-width="1.4" stroke-linecap="round" fill="none"/>

                <!-- 6. Bow Mount: High-Res Underwater Camera & Optical Shutter Gleam (Sentence 4) -->
                <g transform="translate(104, 34)">
                    <rect x="0" y="0" width="12" height="14" rx="2.5" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
                    <circle cx="6" cy="7" r="4.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
                    <circle cx="6" cy="7" r="2" fill="#a5f3fc"/>
                    <!-- Realistic Optical Camera Shutter Glint & Flare -->
                    <g class="sub-camera-flash" style="transform-origin: 6px 7px;">
                        <!-- Soft Lens Flare Glow -->
                        <circle cx="6" cy="7" r="12" fill="url(#cameraLensGleam)"/>
                        <!-- Crisp 4-Point Star Sparkle on Lens -->
                        <polygon points="6,0 7,5 13,7 7,9 6,14 5,9 -1,7 5,5" fill="#ffffff"/>
                        <!-- Brilliant Center Aperture Highlight -->
                        <circle cx="6" cy="7" r="2.2" fill="#ffffff"/>
                    </g>
                </g>

                <!-- 7. Forward Ultraviolet (UV) Spotlight Beam Illuminating Azure Coral -->
                <g class="sub-uv-spotlight">
                    <!-- Broad UV Spotlight Cone Projection -->
                    <polygon points="106,34 320,110 320,195 106,48" fill="url(#uvBeamCone)" opacity="0.85"/>
                </g>
            </g>
        </g>

        <!-- =========================================================================
             C. SHELLY THE FRIENDLY SEA TURTLE GLIDING EFFORTLESSLY (SENTENCE 4)
             ========================================================================= -->
        <g class="turtle-swim-cycle">
            <!-- Turtle Body Rig (Centered at local 0,0) -->
            <g transform="translate(0, 0)">
                <!-- Left (Top) Swimming Flipper (Nested Transform at -4, -14) -->
                <g transform="translate(-4, -14)">
                    <g class="turtle-flipper-left" style="transform-origin: 0px 0px;">
                        <path d="M 0,0 Q -18,-18 -32,-12 Q -38,-2 -26,8 Q -12,6 0,0 Z" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
                        <circle cx="-20" cy="-6" r="2" fill="#34d399"/>
                    </g>
                </g>

                <!-- Tail -->
                <path d="M 28,0 L 40,0 L 28,4 Z" fill="#059669"/>

                <!-- Hydrodynamic Emerald Hexagonal Scutes Carapace -->
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="url(#turtleCarapace)" stroke="#047857" stroke-width="2"/>

                <!-- Hexagonal Shell Scute Patterns -->
                <polygon points="-8,-4 0,-10 8,-4 8,4 0,10 -8,4" fill="#059669" stroke="#34d399" stroke-width="1.2"/>
                <polygon points="-22,-2 -16,-7 -9,-3 -9,3 -16,7 -22,2" fill="#059669" stroke="#34d399" stroke-width="1.2"/>
                <polygon points="9,-3 16,-7 22,-2 22,2 16,7 9,3" fill="#059669" stroke="#34d399" stroke-width="1.2"/>

                <!-- Turtle Head with Friendly Curious Expression -->
                <ellipse cx="-35" cy="-2" rx="11" ry="8" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
                <!-- Large Gentle Eye with Double Pupil Highlights -->
                <ellipse cx="-38" cy="-4" rx="3.2" ry="3.8" fill="#064e3b"/>
                <circle cx="-39" cy="-5.5" r="1.3" fill="#ffffff"/>
                <circle cx="-37" cy="-3.5" r="0.7" fill="#ffffff"/>
                <!-- Cheerful Beak Smile -->
                <path d="M -44,0 Q -40,3 -36,0" stroke="#047857" stroke-width="1.4" stroke-linecap="round" fill="none"/>

                <!-- Right (Bottom) Swimming Flipper (Nested Transform at -4, 14) -->
                <g transform="translate(-4, 14)">
                    <g class="turtle-flipper-right" style="transform-origin: 0px 0px;">
                        <path d="M 0,0 Q -18,18 -32,12 Q -38,2 -26,-8 Q -12,-6 0,0 Z" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
                        <circle cx="-20" cy="6" r="2" fill="#34d399"/>
                    </g>
                </g>

                <!-- Rear Steering Flippers -->
                <path d="M 18,-12 Q 26,-22 34,-18 Q 32,-10 24,-8 Z" fill="#059669"/>
                <path d="M 18,12 Q 26,22 34,18 Q 32,10 24,8 Z" fill="#059669"/>

                <!-- Bubbles around Turtle Gliding Stroke -->
                <g transform="translate(-42, 6)">
                    <circle class="bubble-rise-1" cx="0" cy="0" r="2" fill="#e0f2fe" opacity="0.75"/>
                </g>
            </g>
        </g>
    </svg>`;
}


const PRACTISE_CORAL_UNIT_DATA =             {
                id: 'unit_01_secret_of_coral_reef',
                title: '🐠 Unit 01: The Secret of the Coral Reef',
                isPlaceholder: false,
                levelBadge: '🔴 Advanced (CEFR B1)',
                targetAge: 'Ages 8–10',
                skillFocus: 'Cause & Effect Relationships + Complex Relative Clauses',
                flowchartTitle: 'Cause & Effect Matrix: Exploring Twilight Bay',
                flowchartDesc: 'Follow Maya’s scientific expedition from Twilight Bay to the Azure Coral Reef:',
                sceneType: 'coral_reef',
                sceneBadge: 'Twilight Bay • Maya’s Submersible & Azure Coral Reef',
                warmup: {
                    question: 'Have you ever wondered what mysteries lie deep beneath the ocean surface? What special equipment do marine scientists need to explore dark underwater worlds?',
                    hints: [
                        'Why do deep-sea creatures like jellyfish glow in the dark (bioluminescence)?',
                        'How do underwater submersibles and cameras help scientists protect fragile coral reefs?'
                    ]
                },
                vocab: [
                    {
                        word: 'bioluminescent',
                        badgeNum: '①',
                        phonetic: '/ˌbaɪ.oʊˌluː.mɪˈnes.ənt/',
                        def: 'Living organisms that produce and emit their own natural light.',
                        sentence: 'Bioluminescent jellyfish lit up the dark water like floating lanterns.',
                        svgType: 'bioluminescent'
                    },
                    {
                        word: 'submersible',
                        badgeNum: '②',
                        phonetic: '/səbˈmɜːr.sə.bəl/',
                        def: 'A high-tech underwater vehicle designed for deep-sea exploration.',
                        sentence: 'Maya steered her mini-submersible past the towering kelp forest.',
                        svgType: 'submersible'
                    },
                    {
                        word: 'sanctuary',
                        badgeNum: '③',
                        phonetic: '/ˈsæŋk.tʃu.er.i/',
                        def: 'A specially protected safe place for wildlife and delicate marine ecosystems.',
                        sentence: 'The marine sanctuary protects endangered sea turtles and colorful corals.',
                        svgType: 'sanctuary'
                    },
                    {
                        word: 'coral',
                        badgeNum: '④',
                        phonetic: '/ˈkɔːr.əl/',
                        def: 'A delicate marine structure made of tiny sea animals that form vibrant reefs.',
                        sentence: 'The rare Azure Coral glowed vibrant turquoise under ultraviolet light.',
                        svgType: 'coral'
                    },
                    {
                        word: 'oceanographer',
                        badgeNum: '⑤',
                        phonetic: '/ˌoʊ.ʃəˈnɑː.ɡrə.fɚ/',
                        def: 'A scientist who explores, measures, and protects oceans and marine life.',
                        sentence: 'Maya recorded temperature data so future oceanographers can protect the reef.',
                        svgType: 'oceanographer'
                    }
                ],
                prediction: {
                    prompt: "Maya is steering her mini-submersible deep into the dark waters of Twilight Bay. What do you predict she will discover on the ocean floor?",
                    options: [
                        { id: 'opt1', text: '① A pirate treasure chest guarded by angry sharks.', correct: false, feedback: 'Not quite! This is a real marine science expedition.' },
                        { id: 'opt2', text: '② A rare Azure Coral reef that glows vibrant turquoise under ultraviolet light.', correct: true, feedback: 'Spot on! Maya discovers the glowing Azure Coral and documents it!' },
                        { id: 'opt3', text: '③ A submarine factory building giant robots.', correct: false, feedback: 'Look at Maya’s scientific research tools and camera!' }
                    ]
                },
                story: {
                    title: 'The Secret of the Coral Reef',
                    paragraphs: [
                        {
                            num: 1,
                            sentences: [
                                { id: 's1', text: 'Deep beneath the surface of Twilight Bay, Maya steered her mini-submersible past giant kelp forests.' },
                                {
                                    id: 's2',
                                    text: 'Through the thick glass dome, she observed bioluminescent jellyfish illuminating the dark ocean floor like floating lanterns.',
                                    hasPronounHotspot: true,
                                    pronoun: 'she',
                                    antecedent: 'Maya',
                                    question: 'Who does the subject pronoun "she" refer to in this sentence?',
                                    choices: ['Maya', 'The jellyfish', 'The kelp forest'],
                                    correctIndex: 0,
                                    tip: '"She" is a singular feminine subject pronoun referring to Maya, the oceanographer.'
                                },
                                {
                                    id: 's3',
                                    text: 'Her mission was to document the rare Azure Coral reef, which glowed vibrant turquoise under ultraviolet light.',
                                    hasPronounHotspot: true,
                                    pronoun: 'which',
                                    antecedent: 'the rare Azure Coral reef',
                                    question: 'What does the relative pronoun "which" refer to in this sentence?',
                                    choices: ['Maya\'s mini-submersible', 'The rare Azure Coral reef', 'Her mission'],
                                    correctIndex: 1,
                                    tip: '"Which" introduces an adjective clause modifying "the rare Azure Coral reef".'
                                }
                            ]
                        },
                        {
                            num: 2,
                            sentences: [
                                {
                                    id: 's4',
                                    text: 'As Maya calibrated her underwater camera, a friendly sea turtle swam alongside her sub, gliding effortlessly through the cool currents.',
                                    hasPronounHotspot: true,
                                    pronoun: 'her',
                                    antecedent: 'Maya',
                                    question: 'Whose sub did the friendly sea turtle swim alongside?',
                                    choices: ['Maya\'s sub', 'The turtle\'s sub', 'The oceanographer\'s friend'],
                                    correctIndex: 0,
                                    tip: '"Her" is a possessive adjective referring to Maya.'
                                },
                                {
                                    id: 's5',
                                    text: 'Maya smiled, recording vital temperature data that would help protect this fragile marine sanctuary for future oceanographers.',
                                    hasPronounHotspot: true,
                                    pronoun: 'that',
                                    antecedent: 'vital temperature data',
                                    question: 'What does the relative pronoun "that" refer to in this sentence?',
                                    choices: ['Maya\'s smile', 'Vital temperature data', 'Future oceanographers'],
                                    correctIndex: 1,
                                    tip: '"That" introduces a restrictive clause describing the vital temperature data.'
                                }
                            ]
                        }
                    ]
                },
                flowchart: [
                    {
                        step: 1,
                        label: '① Cause 1: Journey to Twilight Bay',
                        detail: 'Maya steered her mini-submersible past giant kelp forests into the deep ocean.',
                        badge: 'Step 1: Cause'
                    },
                    {
                        step: 2,
                        label: '② Effect 1: Bioluminescent Illumination',
                        detail: 'Glowing jellyfish illuminated the dark seabed like floating lanterns.',
                        badge: 'Step 2: Effect'
                    },
                    {
                        step: 3,
                        label: '③ Cause 2: Ultraviolet Documentation',
                        detail: 'Maya activated her UV lights and underwater camera to document the rare Azure Coral.',
                        badge: 'Step 3: Cause'
                    },
                    {
                        step: 4,
                        label: '④ Effect 2: Protecting the Sanctuary',
                        detail: 'A sea turtle glided alongside as Maya logged temperature data to safeguard the reef sanctuary.',
                        badge: 'Step 4: Effect'
                    }
                ],
                comprehension: [
                    {
                        badgeNum: '①',
                        question: 'What illuminated the dark ocean floor like floating lanterns?',
                        options: [
                            'Bioluminescent jellyfish floating in the dark ocean water.',
                            'Bright sunlight shining directly down through the deep water.',
                            'Street lamps lining an underwater road.'
                        ],
                        correctIndex: 0,
                        explanation: 'Bioluminescent jellyfish produced their own natural light, illuminating the ocean floor like lanterns.'
                    },
                    {
                        badgeNum: '②',
                        question: 'What happened when ultraviolet light hit the rare Azure Coral reef?',
                        options: [
                            'The coral turned completely invisible in the water.',
                            'The coral glowed vibrant turquoise under ultraviolet light.',
                            'The coral melted into small grains of sand.'
                        ],
                        correctIndex: 1,
                        explanation: 'Under ultraviolet light, the rare Azure Coral glowed with brilliant vibrant turquoise bioluminescence.'
                    },
                    {
                        badgeNum: '③',
                        question: 'Why did Maya record vital temperature data in the marine sanctuary?',
                        options: [
                            'To help protect this fragile marine sanctuary for future oceanographers.',
                            'To find out if she should turn on her submarine heater.',
                            'To catch the friendly sea turtle and take it home.'
                        ],
                        correctIndex: 0,
                        explanation: 'Recording temperature data allows oceanographers to monitor and safeguard the fragile marine sanctuary.'
                    }
                ],
                grammarDoctor: [
                    {
                        id: 'b1',
                        badgeNum: '①',
                        brokenText: 'Maya steer her mini-submersible past giant kelp forests.',
                        bugWord: 'steer',
                        choices: [
                            { text: 'steer', isCorrect: false },
                            { text: 'steered', isCorrect: true },
                            { text: 'steering', isCorrect: false }
                        ],
                        rule: 'Past Tense: The narrative took place in the past, so we use the regular past tense verb "steered".'
                    },
                    {
                        id: 'b2',
                        badgeNum: '②',
                        brokenText: 'Her mission was to document the coral reef, who glowed vibrant turquoise.',
                        bugWord: 'who',
                        choices: [
                            { text: 'who', isCorrect: false },
                            { text: 'which', isCorrect: true },
                            { text: 'where', isCorrect: false }
                        ],
                        rule: 'Relative Pronoun: Use "which" (or "that") for things and inanimate objects like coral reefs, never "who" (which is reserved for people).'
                    },
                    {
                        id: 'b3',
                        badgeNum: '③',
                        brokenText: 'Deep between the surface of Twilight Bay, Maya explored.',
                        bugWord: 'between',
                        choices: [
                            { text: 'between', isCorrect: false },
                            { text: 'beneath', isCorrect: true },
                            { text: 'before', isCorrect: false }
                        ],
                        rule: 'Prepositions: "Beneath" means directly under or deep below the surface, while "between" requires two distinct reference points.'
                    },
                    {
                        id: 'b4',
                        badgeNum: '④',
                        brokenText: 'The sea turtle glided effortlessly through the cool currented.',
                        bugWord: 'currented',
                        choices: [
                            { text: 'currented', isCorrect: false },
                            { text: 'currents', isCorrect: true },
                            { text: 'currenting', isCorrect: false }
                        ],
                        rule: 'Plural Nouns: "Currents" is a noun meaning moving streams of water. "-ed" is a past tense verb ending and does not make a noun plural.'
                    }
                ],
                cloze: {
                    title: 'Story Summary Cloze Challenge',
                    instruction: 'Select the correct target words to complete the summary of The Secret of the Coral Reef:',
                    items: [
                        { prefix: 'Maya steered her mini-', target: 'submersible', suffix: ' past giant kelp forests.', options: ['submersible', 'airplane', 'bicycle'] },
                        { prefix: 'She observed bioluminescent ', target: 'jellyfish', suffix: ' illuminating the dark floor.', options: ['jellyfish', 'parrots', 'squirrels'] },
                        { prefix: 'The rare Azure Coral glowed vibrant ', target: 'turquoise', suffix: ' under ultraviolet light.', options: ['turquoise', 'grey', 'brown'] },
                        { prefix: 'A friendly sea ', target: 'turtle', suffix: ' swam alongside her sub.', options: ['turtle', 'rabbit', 'eagle'] },
                        { prefix: 'Maya recorded data to protect this fragile marine ', target: 'sanctuary', suffix: ' for future scientists.', options: ['sanctuary', 'museum', 'factory'] }
                    ]
                },
                speaking: {
                    title: 'Zoom Speaking & Marine Conservation Discussion',
                    prompt: 'Why are coral reefs and ocean sanctuaries important for our planet? If you were an oceanographer like Maya, what underwater creature would you like to study?',
                    starters: [
                        '💬 "I think ocean sanctuaries are important because..."',
                        '💬 "If I could pilot Maya’s mini-submersible, I would explore..."',
                        '💬 "We can protect sea turtles and coral reefs by..."'
                    ]
                }
            };

// Register scene cartridge & story unit
if (typeof registerPractiseScene === 'function') {
    registerPractiseScene('coral_reef', getPractiseCoralReefSceneSVG);
}
if (typeof registerPractiseUnit === 'function') {
    registerPractiseUnit('advanced', PRACTISE_CORAL_UNIT_DATA);
}
if (typeof window !== 'undefined') {
    window.getPractiseCoralReefSceneSVG = getPractiseCoralReefSceneSVG;
    window.PRACTISE_CORAL_UNIT_DATA = PRACTISE_CORAL_UNIT_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        level: 'advanced',
        unitData: PRACTISE_CORAL_UNIT_DATA,
        getSceneSVG: getPractiseCoralReefSceneSVG
    };
}
