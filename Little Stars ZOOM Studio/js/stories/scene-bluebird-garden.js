/* ==========================================================================
   SCENE CARTRIDGE: Bluebird Garden (Beginner Unit 01: The Little Bluebird)
   ========================================================================== */

function getPractiseBluebirdSceneSVG(isFocusPaused = false) {
    const pauseClass = isFocusPaused ? 'reading-focus-paused' : '';
    return `<svg class="living-window-svg ${pauseClass}" viewBox="0 0 540 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <!-- Atmospheric Morning Spring Sky Gradient -->
            <linearGradient id="storySpringSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#7dd3fc"/>
                <stop offset="45%" stop-color="#bae6fd"/>
                <stop offset="78%" stop-color="#fef08a"/>
                <stop offset="100%" stop-color="#ecfdf5"/>
            </linearGradient>

            <!-- Warm Morning Sun Halo -->
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
                <stop offset="40%" stop-color="#fef9c3" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#fef08a" stop-opacity="0"/>
            </radialGradient>

            <!-- Bluebird Dorsal Feathers (Rich Vibrant Blue) -->
            <linearGradient id="bluebirdDorsal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#38bdf8"/>
                <stop offset="40%" stop-color="#0284c7"/>
                <stop offset="100%" stop-color="#1e3a8a"/>
            </linearGradient>

            <!-- Bluebird Breast (Warm Rusty Apricot) -->
            <linearGradient id="bluebirdBreast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#fb923c"/>
                <stop offset="55%" stop-color="#ea580c"/>
                <stop offset="100%" stop-color="#c2410c"/>
            </linearGradient>

            <!-- Natural Wood Bark & Table Planks -->
            <linearGradient id="feederWood" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#78350f"/>
                <stop offset="50%" stop-color="#92400e"/>
                <stop offset="100%" stop-color="#451a03"/>
            </linearGradient>

            <linearGradient id="trayWoodTop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#b45309"/>
                <stop offset="100%" stop-color="#78350f"/>
            </linearGradient>

            <!-- Child Hair (Warm Chestnut Gradient) -->
            <linearGradient id="leoHairGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#92400e"/>
                <stop offset="60%" stop-color="#78350f"/>
                <stop offset="100%" stop-color="#451a03"/>
            </linearGradient>

            <!-- Child Amber Hoodie -->
            <linearGradient id="leoHoodieGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#fbbf24"/>
                <stop offset="65%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
        </defs>

        <style>
            /* Pause support */
            .reading-focus-paused * {
                animation-play-state: paused !important;
            }

            /* Gentle floating blossom petals in the morning breeze */
            .petal-drift-1 { animation: petalFloat1 7.2s ease-in-out infinite; }
            .petal-drift-2 { animation: petalFloat2 5.8s ease-in-out infinite 1.5s; }
            .petal-drift-3 { animation: petalFloat1 6.5s ease-in-out infinite 3.2s; }
            @keyframes petalFloat1 {
                0%   { transform: translate(480px, 30px) rotate(0deg); opacity: 0; }
                15%  { opacity: 0.9; }
                85%  { opacity: 0.8; }
                100% { transform: translate(60px, 260px) rotate(320deg); opacity: 0; }
            }
            @keyframes petalFloat2 {
                0%   { transform: translate(520px, 50px) rotate(0deg); opacity: 0; }
                18%  { opacity: 0.85; }
                82%  { opacity: 0.75; }
                100% { transform: translate(120px, 270px) rotate(260deg); opacity: 0; }
            }

            /* =========================================================================
               1. LEO'S 6-STEP FORWARD WALK TO THE FEEDING TRAY & PUTTING YELLOW SEEDS
               ========================================================================= */

            /* 9.6s Loop: Leo takes 6 walking steps from X = 70 to X = 280, arriving at tray */
            .leo-walk-6steps {
                animation: leoWalk6StepsCycle 9.6s ease-in-out infinite;
            }
            @keyframes leoWalk6StepsCycle {
                /* Start at garden lawn */
                0%     { transform: translateX(70px); }
                /* Step 1 */
                5.5%   { transform: translateX(105px); }
                /* Step 2 */
                11.0%  { transform: translateX(140px); }
                /* Step 3 */
                16.5%  { transform: translateX(175px); }
                /* Step 4 */
                22.0%  { transform: translateX(210px); }
                /* Step 5 */
                27.5%  { transform: translateX(245px); }
                /* Step 6: Arrived right beside the wooden feeding tray! */
                33.0%  { transform: translateX(280px); }
                /* Stays firmly standing at the tray while putting seeds and watching Pip eat */
                88.0%  { transform: translateX(280px); }
                /* Steps back to start position smoothly for infinite loop */
                96.0%  { transform: translateX(140px); }
                100%   { transform: translateX(70px); }
            }

            /* Leo's Body Bounce during the 6 strides */
            .leo-step-bounce {
                animation: leoStepBounceCycle 9.6s ease-in-out infinite;
            }
            @keyframes leoStepBounceCycle {
                /* Steps 1-6 bounce */
                0%, 11%, 22%, 33% { transform: translateY(0px) rotate(0deg); }
                2.75%, 13.75%, 24.75% { transform: translateY(-3.5px) rotate(0.8deg); }
                5.5%, 16.5%, 27.5%    { transform: translateY(0px) rotate(0deg); }
                8.25%, 19.25%, 30.25% { transform: translateY(-3.5px) rotate(-0.8deg); }
                /* At the tray: gentle breathing sway */
                40%  { transform: translateY(0px) rotate(0.5deg); }
                55%  { transform: translateY(0px) rotate(-0.5deg); }
                70%  { transform: translateY(0px) rotate(0.5deg); }
                88%  { transform: translateY(0px) rotate(0deg); }
                100% { transform: translateY(0px) rotate(0deg); }
            }

            /* Stepping Left Leg: Alternates forward stride during steps 1, 3, 5 */
            .leo-step-leg-left {
                animation: leoLegLeftWalk 9.6s ease-in-out infinite;
                transform-origin: 0px 184px;
            }
            @keyframes leoLegLeftWalk {
                0%     { transform: rotate(0deg); }
                2.75%  { transform: rotate(18deg); }  /* Step 1 forward */
                5.5%   { transform: rotate(0deg); }   /* Plant foot */
                8.25%  { transform: rotate(-16deg); } /* Push back */
                11.0%  { transform: rotate(0deg); }
                13.75% { transform: rotate(18deg); }  /* Step 3 forward */
                16.5%  { transform: rotate(0deg); }
                19.25% { transform: rotate(-16deg); }
                22.0%  { transform: rotate(0deg); }
                24.75% { transform: rotate(18deg); }  /* Step 5 forward */
                27.5%  { transform: rotate(0deg); }
                30.25% { transform: rotate(-16deg); }
                33.0%  { transform: rotate(0deg); }   /* Planted firmly beside tray */
                88.0%  { transform: rotate(0deg); }
                94.0%  { transform: rotate(-12deg); }
                100%   { transform: rotate(0deg); }
            }

            /* Stepping Right Leg: Alternates forward stride during steps 2, 4, 6 */
            .leo-step-leg-right {
                animation: leoLegRightWalk 9.6s ease-in-out infinite;
                transform-origin: 10px 184px;
            }
            @keyframes leoLegRightWalk {
                0%     { transform: rotate(0deg); }
                2.75%  { transform: rotate(-16deg); } /* Push back */
                5.5%   { transform: rotate(0deg); }
                8.25%  { transform: rotate(18deg); }  /* Step 2 forward */
                11.0%  { transform: rotate(0deg); }   /* Plant foot */
                13.75% { transform: rotate(-16deg); }
                16.5%  { transform: rotate(0deg); }
                19.25% { transform: rotate(18deg); }  /* Step 4 forward */
                22.0%  { transform: rotate(0deg); }
                24.75% { transform: rotate(-16deg); }
                27.5%  { transform: rotate(0deg); }
                30.25% { transform: rotate(18deg); }  /* Step 6 forward */
                33.0%  { transform: rotate(0deg); }   /* Planted firmly beside tray */
                88.0%  { transform: rotate(0deg); }
                94.0%  { transform: rotate(12deg); }
                100%   { transform: rotate(0deg); }
            }

            /* Leo's Right Arm: Swings naturally while walking, dips into bowl & extends forward to put yellow seeds into tray */
            .leo-arm-put-seeds {
                animation: leoArmSeedsCycle 9.6s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes leoArmSeedsCycle {
                /* Walking 6 steps: arm swings naturally down by his side (between 44deg and 56deg) */
                0%     { transform: rotate(44deg); }
                5.5%   { transform: rotate(56deg); }
                11.0%  { transform: rotate(44deg); }
                16.5%  { transform: rotate(56deg); }
                22.0%  { transform: rotate(44deg); }
                27.5%  { transform: rotate(56deg); }
                33.0%  { transform: rotate(50deg); } /* Planted firmly beside tray */
                /* Reaching into wooden bowl to scoop small yellow seeds */
                37.0%  { transform: rotate(68deg); } /* Dipping hand into seed bowl */
                41.0%  { transform: rotate(60deg); } /* Scooping yellow seeds */
                /* Extends arm forward over wooden tray and pours seeds */
                46.0%  { transform: rotate(6deg); }  /* Extending arm forward over tray */
                50.0%  { transform: rotate(-2deg); } /* Releases yellow seeds into wooden tray! */
                54.0%  { transform: rotate(8deg); }  /* Gentle follow-through as seeds drop */
                60.0%  { transform: rotate(48deg); } /* Lowers arm comfortably to side to watch Pip */
                88.0%  { transform: rotate(48deg); } /* Watches Pip eat seeds happily and sing */
                94.0%  { transform: rotate(52deg); }
                100%   { transform: rotate(44deg); }
            }

            /* Seeds visible in hand while scooping and holding, disappearing upon release into tray */
            .leo-hand-seeds {
                animation: leoHandSeedsCycle 9.6s ease-in-out infinite;
            }
            @keyframes leoHandSeedsCycle {
                0%, 36%    { opacity: 0; }
                41%, 49.5% { opacity: 1; }
                51%, 100%  { opacity: 0; }
            }

            /* =========================================================================
               2. BALLISTIC YELLOW SEEDS DROPPING FROM LEO'S HAND INTO HIS WOODEN TRAY
               ========================================================================= */

            /* Ballistic Flight 1: Drops into the wooden tray at Y = 168 and stays! */
            .seed-flight-1 {
                animation: seedDropTray1 9.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
            }
            @keyframes seedDropTray1 {
                0%, 47% {
                    opacity: 0;
                    transform: translate(315px, 154px) scale(0.6);
                }
                48% {
                    opacity: 1; /* Appears at Leo's hand at moment of release */
                    transform: translate(318px, 150px) scale(1) rotate(0deg);
                }
                51% {
                    opacity: 1;
                    transform: translate(336px, 138px) scale(1) rotate(140deg); /* Flight arc apex */
                }
                54% {
                    opacity: 1;
                    transform: translate(358px, 168px) scale(1) rotate(280deg); /* Hits wooden tray! */
                }
                56% {
                    opacity: 1;
                    transform: translate(360px, 165px) scale(1) rotate(320deg); /* Gentle bounce */
                }
                58%, 88% {
                    opacity: 1;
                    transform: translate(362px, 168px) scale(1) rotate(340deg); /* Settled on tray! */
                }
                92%, 100% {
                    opacity: 0;
                }
            }

            .seed-flight-2 {
                animation: seedDropTray2 9.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
            }
            @keyframes seedDropTray2 {
                0%, 48% {
                    opacity: 0;
                    transform: translate(315px, 154px) scale(0.6);
                }
                49% {
                    opacity: 1;
                    transform: translate(320px, 152px) scale(1) rotate(0deg);
                }
                52% {
                    opacity: 1;
                    transform: translate(344px, 142px) scale(1) rotate(160deg);
                }
                55% {
                    opacity: 1;
                    transform: translate(372px, 168px) scale(1) rotate(290deg); /* Lands in tray */
                }
                57% {
                    opacity: 1;
                    transform: translate(374px, 166px) scale(1) rotate(330deg);
                }
                59%, 88% {
                    opacity: 1;
                    transform: translate(376px, 168px) scale(1) rotate(350deg); /* Resting on tray */
                }
                92%, 100% {
                    opacity: 0;
                }
            }

            /* Seed Landing Impact Puff */
            .seed-tray-puff {
                animation: seedTrayPuffAnim 9.6s ease-out infinite;
            }
            @keyframes seedTrayPuffAnim {
                0%, 53% { opacity: 0; transform: translate(358px, 168px) scale(0.2); }
                54%     { opacity: 0.85; transform: translate(358px, 166px) scale(0.7); }
                58%     { opacity: 0.3; transform: translate(358px, 163px) scale(1.2); }
                62%     { opacity: 0; transform: translate(358px, 161px) scale(1.5); }
                100%    { opacity: 0; }
            }

            /* =========================================================================
               3. PIP THE BLUEBIRD: PERCHES, FLIES DOWN QUICKLY, EATS HAPPILY & SINGS
               ========================================================================= */

            /* Pip Translation Flight & Tray Hopping Cycle */
            .pip-flight-cycle {
                animation: pipFlightCycleAnim 9.6s ease-in-out infinite;
            }
            @keyframes pipFlightCycleAnim {
                /* 0% - 54%: Perched up on flowering blossom bough (X: 430, Y: 85), watching Leo */
                0%, 54% { transform: translate(430px, 85px) rotate(0deg); }
                /* 55% - 64%: Pip takes flight and flies quickly down to the tray! */
                56%     { transform: translate(425px, 80px) rotate(-15deg); } /* Take-off leap */
                59%     { transform: translate(398px, 115px) rotate(-8deg); } /* Swooping flight */
                62%     { transform: translate(372px, 150px) rotate(6deg); }  /* Gliding down */
                64%     { transform: translate(350px, 168px) rotate(0deg); }  /* Touchdown on tray! */
                /* 65% - 72%: Hops quickly across tray to the yellow seeds */
                66%     { transform: translate(352px, 166px) rotate(0deg); }
                68%     { transform: translate(366px, 158px) rotate(-5deg); } /* Quick hop */
                72%     { transform: translate(380px, 168px) rotate(0deg); }  /* At the yellow seeds! */
                /* 73% - 86%: Eating them happily (pecks) and singing sweet song */
                74%     { transform: translate(380px, 170px) rotate(4deg); }  /* Pecking */
                77%     { transform: translate(380px, 166px) rotate(-4deg); } /* Swallowing */
                80%     { transform: translate(380px, 170px) rotate(4deg); }
                83%     { transform: translate(380px, 164px) rotate(-10deg); } /* Singing proudly */
                86%     { transform: translate(380px, 168px) rotate(0deg); }
                /* 88% - 95%: Flutters back to the blossom bough */
                89%     { transform: translate(390px, 150px) rotate(-18deg); }
                92%     { transform: translate(412px, 110px) rotate(-10deg); }
                95%     { transform: translate(430px, 85px) rotate(0deg); }
                100%    { transform: translate(430px, 85px) rotate(0deg); }
            }

            /* Pip's Wing Flapping: Flaps rapidly during flight (55%-64% & 88%-95%) and singing flutter (83%-86%) */
            .pip-wing-anim {
                animation: pipWingAnimCycle 9.6s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes pipWingAnimCycle {
                0%, 54% { transform: rotate(0deg); }
                /* Rapid flight flap down to tray */
                55%     { transform: rotate(-30deg); }
                57%     { transform: rotate(25deg); }
                59%     { transform: rotate(-32deg); }
                61%     { transform: rotate(22deg); }
                63%     { transform: rotate(-28deg); }
                64%     { transform: rotate(0deg); } /* Folded at touchdown */
                /* Hop flutter */
                68%     { transform: rotate(-22deg); }
                70%     { transform: rotate(15deg); }
                72%     { transform: rotate(0deg); }
                /* Singing wing shimmer */
                82%     { transform: rotate(-18deg); }
                84%     { transform: rotate(12deg); }
                85%     { transform: rotate(-18deg); }
                86%     { transform: rotate(0deg); }
                /* Flapping back up to branch */
                89%     { transform: rotate(-30deg); }
                91%     { transform: rotate(24deg); }
                93%     { transform: rotate(-30deg); }
                95%     { transform: rotate(0deg); }
                100%    { transform: rotate(0deg); }
            }

            /* Pip's Tail Feather Bob */
            .pip-tail-anim {
                animation: pipTailBobCycle 9.6s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes pipTailBobCycle {
                0%, 54% { transform: rotate(0deg); }
                56%, 63% { transform: rotate(14deg); }  /* Stabilizing flight */
                64%     { transform: rotate(-16deg); } /* Touchdown bob */
                74%, 80% { transform: rotate(12deg); }  /* Tail kicks up while pecking */
                77%     { transform: rotate(-5deg); }
                83%     { transform: rotate(-10deg); } /* Singing posture */
                88%     { transform: rotate(12deg); }
                95%, 100% { transform: rotate(0deg); }
            }

            /* Pip Contact Shadow on Tray */
            .pip-tray-shadow {
                animation: pipTrayShadowAnim 9.6s ease-in-out infinite;
            }
            @keyframes pipTrayShadowAnim {
                0%, 63% { opacity: 0; transform: translate(350px, 169px) scale(0.3); }
                64%     { opacity: 0.35; transform: translate(350px, 169px) scale(1, 1); }
                68%     { opacity: 0.18; transform: translate(366px, 169px) scale(0.7, 0.7); }
                72%, 86% { opacity: 0.38; transform: translate(380px, 169px) scale(1, 1); }
                89%     { opacity: 0.15; transform: translate(390px, 169px) scale(0.5); }
                91%, 100% { opacity: 0; }
            }

            /* Musical Notes Floating when Pip Sings Sweet Song (82% - 87%) */
            .sing-note-1 {
                animation: noteFloatDrift1 9.6s ease-out infinite;
            }
            @keyframes noteFloatDrift1 {
                0%, 82% { opacity: 0; transform: translate(390px, 155px) scale(0.4); }
                83%     { opacity: 0.95; transform: translate(400px, 140px) scale(1) rotate(-10deg); }
                85%     { opacity: 0.8; transform: translate(412px, 122px) scale(1.2) rotate(15deg); }
                87%     { opacity: 0; transform: translate(422px, 106px) scale(1.3) rotate(-5deg); }
                88%, 100% { opacity: 0; }
            }
            .sing-note-2 {
                animation: noteFloatDrift2 9.6s ease-out infinite;
            }
            @keyframes noteFloatDrift2 {
                0%, 83% { opacity: 0; transform: translate(392px, 156px) scale(0.4); }
                84.5%   { opacity: 0.95; transform: translate(406px, 142px) scale(1.1) rotate(12deg); }
                86%     { opacity: 0.8; transform: translate(420px, 126px) scale(1.25) rotate(-12deg); }
                87.5%   { opacity: 0; transform: translate(430px, 110px) scale(1.35) rotate(10deg); }
                88%, 100% { opacity: 0; }
            }
        </style>

        <!-- LAYER 1: ATMOSPHERIC BACKING (Morning Spring Sky & Rolling Green Garden Hills) -->
        <rect x="0" y="0" width="540" height="320" fill="url(#storySpringSky)"/>

        <!-- Radiant Morning Sun in Upper Corner -->
        <circle cx="80" cy="45" r="45" fill="url(#sunGlow)"/>
        <circle cx="80" cy="45" r="22" fill="#fef08a" opacity="0.85"/>
        <circle cx="80" cy="45" r="14" fill="#ffffff" opacity="0.6"/>

        <!-- Soft Distant Fluffy Clouds -->
        <g fill="#ffffff" opacity="0.45">
            <path d="M 210,48 Q 225,32 245,35 Q 265,30 280,45 Q 295,48 290,60 L 205,60 Z"/>
            <path d="M 370,65 Q 382,52 398,54 Q 412,50 424,62 Q 436,65 432,74 L 366,74 Z"/>
        </g>

        <!-- Distant Garden Treeline & Rolling Green Hills -->
        <path d="M 0,165 Q 140,140 280,158 T 540,150 L 540,320 L 0,320 Z" fill="#86efac" opacity="0.35"/>
        <path d="M 0,180 Q 160,160 340,175 T 540,168 L 540,320 L 0,320 Z" fill="#bbf7d0" opacity="0.5"/>

        <!-- LAYER 2: GARDEN FENCE & MAJESTIC FLOWERING BLOSSOM BOUGH -->
        <!-- White Picket Garden Fence across Midground (Ground Y = 220) -->
        <g opacity="0.95">
            <!-- Fence Horizontal Rails -->
            <rect x="20" y="178" width="310" height="7" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <rect x="20" y="202" width="310" height="7" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <!-- Vertical Pickets with Pointed Tops -->
            <path d="M 35,218 L 35,166 L 43,158 L 51,166 L 51,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 65,218 L 65,166 L 73,158 L 81,166 L 81,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 95,218 L 95,166 L 103,158 L 111,166 L 111,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 125,218 L 125,166 L 133,158 L 141,166 L 141,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 155,218 L 155,166 L 163,158 L 171,166 L 171,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 185,218 L 185,166 L 193,158 L 201,166 L 201,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 215,218 L 215,166 L 223,158 L 231,166 L 231,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 245,218 L 245,166 L 253,158 L 261,166 L 261,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 275,218 L 275,166 L 283,158 L 291,166 L 291,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 305,218 L 305,166 L 313,158 L 321,166 L 321,218 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
        </g>

        <!-- Majestic Flowering Blossom Tree (Right Canopy reaching down toward feeder) -->
        <g>
            <!-- Heavy Tree Trunk Roots firmly rooted at Y = 220, rising past top frame -->
            <path d="M 465,245 Q 480,180 488,110 Q 492,60 482,10 L 515,6 Q 525,60 520,110 Q 526,180 540,245 Z" fill="url(#feederWood)" stroke="#292524" stroke-width="2"/>
            <!-- Sweeping Flowering Canopy Boughs across upper right (Y = 15 to 110) -->
            <path d="M 490,40 Q 440,22 390,32" stroke="url(#feederWood)" stroke-width="10" stroke-linecap="round" fill="none"/>
            <path d="M 488,85 Q 430,68 375,82" stroke="url(#feederWood)" stroke-width="12" stroke-linecap="round" fill="none"/>
            <path d="M 420,74 Q 380,85 345,115" stroke="url(#feederWood)" stroke-width="7" stroke-linecap="round" fill="none"/>
            <path d="M 495,130 Q 450,120 410,135" stroke="url(#feederWood)" stroke-width="9" stroke-linecap="round" fill="none"/>

            <!-- Fresh Spring Green Leaves & Soft Pink Cherry Blossoms -->
            <g fill="#fbcfe8" stroke="#f472b6" stroke-width="1">
                <!-- Blossom 1 -->
                <circle cx="365" cy="80" r="6"/>
                <circle cx="360" cy="76" r="5"/>
                <circle cx="370" cy="76" r="5"/>
                <circle cx="365" cy="78" r="2.5" fill="#fde047" stroke="none"/>
                <!-- Blossom 2 -->
                <circle cx="415" cy="65" r="7"/>
                <circle cx="410" cy="60" r="5.5"/>
                <circle cx="420" cy="60" r="5.5"/>
                <circle cx="415" cy="63" r="3" fill="#fde047" stroke="none"/>
                <!-- Blossom 3 -->
                <circle cx="450" cy="30" r="6.5"/>
                <circle cx="445" cy="26" r="5"/>
                <circle cx="455" cy="26" r="5"/>
                <circle cx="450" cy="29" r="2.5" fill="#fde047" stroke="none"/>
                <!-- Blossom 4 -->
                <circle cx="340" cy="116" r="6"/>
                <circle cx="336" cy="112" r="5"/>
                <circle cx="344" cy="112" r="5"/>
                <circle cx="340" cy="115" r="2.5" fill="#fde047" stroke="none"/>
            </g>
            <!-- Fresh Green Leaf Sprays -->
            <g fill="#4ade80" stroke="#16a34a" stroke-width="0.8">
                <path d="M 380,75 Q 390,70 395,74 Q 388,80 380,75 Z"/>
                <path d="M 432,60 Q 442,54 446,60 Q 438,66 432,60 Z"/>
                <path d="M 355,108 Q 365,100 370,106 Q 360,112 355,108 Z"/>
                <path d="M 470,26 Q 480,20 485,25 Q 478,32 470,26 Z"/>
            </g>
        </g>

        <!-- LAYER 3: GROUND BASELINE & WOODEN FEEDING TABLE -->
        <!-- Universal Ground Floor (Lush Spring Garden Lawn Baseline at Y = 220) -->
        <path d="M 0,215 Q 180,212 360,215 T 540,214 L 540,320 L 0,320 Z" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
        <path d="M 0,228 Q 180,224 360,228 T 540,226 L 540,320 L 0,320 Z" fill="#15803d"/>
        <!-- Fresh Garden Stepping Stones along baseline -->
        <ellipse cx="60" cy="235" rx="22" ry="7" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
        <ellipse cx="140" cy="242" rx="26" ry="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <ellipse cx="230" cy="238" rx="24" ry="7.5" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
        <ellipse cx="320" cy="244" rx="28" ry="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>

        <!-- WOODEN BIRD FEEDING TABLE / STAND -->
        <g>
            <!-- Ground Contact Shadow of Wooden Post at Y = 220 -->
            <ellipse cx="370" cy="220" rx="26" ry="6.5" fill="rgba(0,0,0,0.22)"/>

            <!-- Sturdy Wooden Pillar grounded firmly at Y = 220 rising to Y = 168 -->
            <rect x="363" y="168" width="14" height="52" fill="url(#feederWood)" stroke="#451a03" stroke-width="1.5"/>
            <!-- Support diagonal brackets -->
            <line x1="363" y1="184" x2="340" y2="168" stroke="#78350f" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="377" y1="184" x2="400" y2="168" stroke="#78350f" stroke-width="3.5" stroke-linecap="round"/>

            <!-- Wooden Feed Platform / Table Surface (Y = 168, Width = 110: X: 315 to 425) -->
            <rect x="315" y="168" width="110" height="7" rx="2" fill="url(#feederWood)" stroke="#451a03" stroke-width="1.5"/>
            <ellipse cx="370" cy="168" rx="54" ry="7" fill="url(#trayWoodTop)" stroke="#451a03" stroke-width="1.2"/>
            <path d="M 315,168 Q 370,174 425,168" stroke="#fde68a" stroke-width="1.5" fill="none"/>
        </g>

        <!-- LAYER 4: CHARACTERS (LEO & THE LITTLE BLUEBIRD) -->

        <!-- =========================================================================
             LEO: 6 WALKING STEPS FORWARD TO THE TRAY + PUTTING SMALL YELLOW SEEDS
             ========================================================================= -->
        <g class="leo-walk-6steps">
            <!-- Ground Contact Shadow tracking under Leo at Baseline Y = 220 -->
            <ellipse cx="0" cy="220" rx="22" ry="6" fill="rgba(0,0,0,0.25)"/>

            <!-- Leo's Body Rig with Step Bounce -->
            <g class="leo-step-bounce">
                <!-- Stepping Left Leg & Sneaker (Hinged at hip: -5, 184) -->
                <g class="leo-step-leg-left">
                    <rect x="-9" y="184" width="10" height="34" rx="4" fill="#1e40af"/>
                    <ellipse cx="-4" cy="218" rx="8" ry="4" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
                </g>
                <!-- Stepping Right Leg & Sneaker (Hinged at hip: 5, 184) -->
                <g class="leo-step-leg-right">
                    <rect x="3" y="184" width="10" height="34" rx="4" fill="#1e3a8a"/>
                    <ellipse cx="8" cy="218" rx="8" ry="4" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
                </g>

                <!-- Torso in Golden Amber Hoodie -->
                <path d="M -16,145 L 18,145 L 14,188 L -14,188 Z" fill="url(#leoHoodieGrad)" stroke="#b45309" stroke-width="1.5"/>
                <rect x="-8" y="166" width="18" height="14" rx="4" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                <line x1="-1" y1="145" x2="-1" y2="158" stroke="#ffffff" stroke-width="1.2"/>
                <line x1="7" y1="145" x2="7" y2="158" stroke="#ffffff" stroke-width="1.2"/>

                <!-- Left Arm Cradling Wooden Seed Bowl Filled with Yellow Seeds -->
                <g>
                    <path d="M -14,148 Q -26,162 -18,174" stroke="url(#leoHoodieGrad)" stroke-width="9" stroke-linecap="round" fill="none"/>
                    <ellipse cx="-18" cy="174" rx="13" ry="6.5" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>
                    <ellipse cx="-18" cy="172" rx="11" ry="5" fill="#f59e0b"/>
                    <!-- Small Yellow Seeds inside bowl -->
                    <circle cx="-22" cy="172" r="1.6" fill="#fef08a"/>
                    <circle cx="-18" cy="171" r="2.0" fill="#fef08a"/>
                    <circle cx="-14" cy="173" r="1.6" fill="#fde047"/>
                    <circle cx="-19" cy="174" r="1.5" fill="#fef08a"/>
                    <ellipse cx="-26" cy="174" rx="3.2" ry="2.8" fill="#fed7aa"/>
                </g>

                <!-- Leo's Friendly Head & Expressive Face -->
                <g>
                    <rect x="-3" y="138" width="10" height="9" fill="#fed7aa"/>
                    <circle cx="2" cy="122" r="17" fill="#fed7aa"/>
                    <!-- Rosy Cheeks -->
                    <circle cx="-9" cy="128" r="4" fill="#f43f5e" opacity="0.35"/>
                    <circle cx="13" cy="128" r="4" fill="#f43f5e" opacity="0.35"/>
                    <!-- Warm Expressive Eyes with Double Pupil Highlights -->
                    <ellipse cx="-5" cy="122" rx="3" ry="3.8" fill="#1e293b"/>
                    <ellipse cx="9" cy="122" rx="3" ry="3.8" fill="#1e293b"/>
                    <circle cx="-6" cy="120.5" r="1.2" fill="#ffffff"/>
                    <circle cx="8" cy="120.5" r="1.2" fill="#ffffff"/>
                    <circle cx="-4" cy="123" r="0.6" fill="#ffffff"/>
                    <circle cx="10" cy="123" r="0.6" fill="#ffffff"/>
                    <!-- Cheerful Eyebrows -->
                    <path d="M -9,115 Q -5,112 -1,114" stroke="#78350f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
                    <path d="M 5,114 Q 9,112 13,115" stroke="#78350f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
                    <!-- Open Loving Smile -->
                    <path d="M -3,130 Q 2,136 7,130" stroke="#b91c1c" stroke-width="1.8" stroke-linecap="round" fill="#ffffff"/>

                    <!-- Stylish Layered Chestnut Hair -->
                    <path d="M -17,122 C -19,102 -5,96 11,97 C 23,98 25,112 21,124 C 17,116 13,114 9,118 C 5,112 -1,110 -5,115 C -9,114 -13,118 -17,122 Z" fill="url(#leoHairGrad)"/>
                </g>

                <!-- Leo's Right Arm: Nested Transform (Anchor: Torso Shoulder Socket 14, 148) -->
                <g transform="translate(14, 148)">
                    <g class="leo-arm-put-seeds" style="transform-origin: 0px 0px;">
                        <path d="M 0,0 Q 12,14 26,10" stroke="url(#leoHoodieGrad)" stroke-width="9" stroke-linecap="round" fill="none"/>
                        <!-- Hand with soft palm and fingers -->
                        <circle cx="28" cy="10" r="4.2" fill="#fed7aa"/>
                        <!-- Small Yellow Seeds held in hand before release -->
                        <g class="leo-hand-seeds">
                            <circle cx="31" cy="8" r="1.8" fill="#fef08a"/>
                            <circle cx="32" cy="11" r="1.8" fill="#fde047"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>

        <!-- =========================================================================
             BALLISTIC YELLOW SEEDS: FLYING FROM LEO'S HAND INTO HIS WOODEN TRAY
             ========================================================================= -->
        <g>
            <circle class="seed-flight-1" cx="0" cy="0" r="2.8" fill="#fde047" stroke="#ca8a04" stroke-width="0.8"/>
            <circle class="seed-flight-2" cx="0" cy="0" r="2.5" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8"/>
            <circle class="seed-tray-puff" cx="0" cy="0" r="4" fill="#fef08a"/>
        </g>

        <!-- PERMANENT SCATTERED YELLOW SEEDS ON WOODEN TRAY (Reinforcing Action) -->
        <g>
            <ellipse cx="348" cy="168" rx="3" ry="1.5" fill="#fde047" stroke="#ca8a04" stroke-width="0.7"/>
            <ellipse cx="362" cy="169" rx="3.2" ry="1.6" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7"/>
            <ellipse cx="376" cy="167" rx="3" ry="1.4" fill="#fde047" stroke="#ca8a04" stroke-width="0.7"/>
            <ellipse cx="390" cy="168" rx="3.5" ry="1.6" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7"/>
            <ellipse cx="402" cy="169" rx="2.8" ry="1.4" fill="#fde047" stroke="#ca8a04" stroke-width="0.7"/>
        </g>

        <!-- =========================================================================
             PIP THE BLUEBIRD: PERCHES, FLIES DOWN QUICKLY, EATS HAPPILY & SINGS
             ========================================================================= -->
        <g>
            <!-- Tracking Contact Shadow on Tray Surface -->
            <ellipse class="pip-tray-shadow" cx="0" cy="0" rx="14" ry="4" fill="rgba(0,0,0,0.28)"/>

            <!-- Pip Translation Flight Cycle Group -->
            <g class="pip-flight-cycle">
                <!-- Main Bird Rig -->
                <g>
                    <!-- Articulated Tail Feathers (Hinged at rump: -14, 4) -->
                    <g transform="translate(-14, 4)">
                        <g class="pip-tail-anim">
                            <path d="M 0,0 C -12,4 -22,12 -28,20 C -24,14 -14,6 0,0 Z" fill="#0284c7" stroke="#1e3a8a" stroke-width="1.2"/>
                            <path d="M 0,0 C -10,8 -18,18 -22,25 C -18,18 -10,8 0,0 Z" fill="#38bdf8"/>
                        </g>
                    </g>

                    <!-- Delicate Bird Feet Claws -->
                    <g stroke="#78350f" stroke-width="1.5" stroke-linecap="round">
                        <line x1="-3" y1="4" x2="-6" y2="12"/>
                        <line x1="-6" y1="12" x2="-10" y2="13"/>
                        <line x1="-6" y1="12" x2="-3" y2="13"/>
                        <line x1="5" y1="4" x2="3" y2="12"/>
                        <line x1="3" y1="12" x2="-1" y2="13"/>
                        <line x1="3" y1="12" x2="6" y2="13"/>
                    </g>

                    <!-- Plump Bird Body -->
                    <ellipse cx="0" cy="0" rx="16" ry="12" fill="url(#bluebirdDorsal)" stroke="#1e3a8a" stroke-width="1.2"/>
                    <!-- Warm Orange Breast -->
                    <path d="M -4,2 Q 6,12 14,4 Q 16,-4 10,-8 Q 0,-2 -4,2 Z" fill="url(#bluebirdBreast)"/>
                    <!-- Clean White Belly -->
                    <ellipse cx="2" cy="5" rx="7" ry="4.5" fill="#f8fafc"/>

                    <!-- Articulated Wing Rig (Hinged at shoulder: -2, -4) -->
                    <g transform="translate(-2, -4)">
                        <g class="pip-wing-anim">
                            <path d="M 0,0 C -8,2 -16,10 -22,18 C -14,14 -6,6 0,0 Z" fill="#0369a1" stroke="#1e3a8a" stroke-width="1.2"/>
                            <path d="M 0,0 C -6,4 -12,12 -16,18 C -10,12 -4,5 0,0 Z" fill="#38bdf8"/>
                            <path d="M 0,0 C -4,6 -8,14 -10,19 C -6,13 -2,6 0,0 Z" fill="#0284c7"/>
                        </g>
                    </g>

                    <!-- Cute Rounded Head with Inquisitive Posture -->
                    <circle cx="10" cy="-10" r="9.5" fill="url(#bluebirdDorsal)" stroke="#1e3a8a" stroke-width="1.2"/>
                    <ellipse cx="14" cy="-7" rx="4" ry="4" fill="url(#bluebirdBreast)"/>

                    <!-- Alert Shiny Black Eye with Double Catchlights -->
                    <circle cx="13" cy="-12" r="2.8" fill="#0f172a"/>
                    <circle cx="12.2" cy="-12.8" r="1.1" fill="#ffffff"/>
                    <circle cx="13.8" cy="-11.2" r="0.5" fill="#ffffff"/>

                    <!-- Pointed Petite Dark Beak -->
                    <polygon points="18,-11 26,-9 18,-6" fill="#1e293b" stroke="#0f172a" stroke-width="0.8"/>
                    <line x1="19" y1="-10" x2="23" y2="-9" stroke="#94a3b8" stroke-width="0.7"/>
                </g>
            </g>
        </g>

        <!-- MUSICAL NOTE CHIME BUBBLES (Floating when Pip Sings!) -->
        <g>
            <text class="sing-note-1" x="0" y="0" font-size="16" fill="#0284c7" font-weight="bold">♪</text>
            <text class="sing-note-2" x="0" y="0" font-size="18" fill="#f59e0b" font-weight="bold">♫</text>
        </g>

        <!-- LAYER 5: DRIFTING SPRING BLOSSOM PETALS -->
        <g>
            <path class="petal-drift-1" d="M 0,0 C 3,-4 7,-4 8,0 C 7,4 3,4 0,0 Z" fill="#fbcfe8" opacity="0.85"/>
            <path class="petal-drift-2" d="M 0,0 C 4,-5 8,-5 9,0 C 8,5 4,5 0,0 Z" fill="#f472b6" opacity="0.8"/>
            <path class="petal-drift-3" d="M 0,0 C 3,-4 7,-4 8,0 C 7,4 3,4 0,0 Z" fill="#fbcfe8" opacity="0.85"/>
        </g>
    </svg>`;
}



const PRACTISE_BLUEBIRD_UNIT_DATA =             {
                id: 'unit_01_the_little_bluebird',
                title: '🐦 Unit 01: The Little Bluebird',
                isPlaceholder: false,
                levelBadge: '🟢 Beginner (CEFR A1)',
                targetAge: 'Ages 6–8',
                skillFocus: '3-Step Sequence (First → Next → Then) + Spatial Words',
                flowchartTitle: '3-Step Sequence: What Happened in the Story?',
                flowchartDesc: 'Follow the 3-step sequence from the cold morning to Pip\'s sweet song:',
                sceneType: 'bluebird_garden',
                sceneBadge: 'Morning Garden • Pip the Bluebird & Leo',
                warmup: {
                    question: 'Look outside your window! Have you ever seen a small bird looking for food in your yard or park?',
                    hints: ['What do little birds eat when the weather is cold (seeds, berries)?', 'How can we be kind and help garden birds?']
                },
                vocab: [
                    {
                        word: 'bluebird',
                        badgeNum: '①',
                        phonetic: '/ˈbluː.bɜːrd/',
                        def: 'A small, friendly bird with bright blue and orange feathers.',
                        sentence: 'The little bluebird sat on the wooden fence.',
                        svgType: 'bluebird'
                    },
                    {
                        word: 'seed',
                        badgeNum: '②',
                        phonetic: '/siːd/',
                        def: 'A small, tasty plant grain that birds love to eat.',
                        sentence: 'Leo put yellow sunflower seeds into the tray.',
                        svgType: 'seed'
                    },
                    {
                        word: 'branch',
                        badgeNum: '③',
                        phonetic: '/bræntʃ/',
                        def: 'A wooden arm of a tree where birds sit and rest.',
                        sentence: 'Pip rested on the flowering tree branch.',
                        svgType: 'branch'
                    },
                    {
                        word: 'hop',
                        badgeNum: '④',
                        phonetic: '/hɒp/',
                        def: 'To jump quickly on two small feet.',
                        sentence: 'The bluebird hopped forward to reach the food.',
                        svgType: 'hop'
                    },
                    {
                        word: 'sing',
                        badgeNum: '⑤',
                        phonetic: '/sɪŋ/',
                        def: 'To make cheerful, sweet musical sounds.',
                        sentence: 'Pip sang a sweet song to say thank you.',
                        svgType: 'sing'
                    }
                ],
                prediction: {
                    prompt: "Look at the little bluebird sitting on the frosty wooden fence. What do you predict Leo will do to help?",
                    options: [
                        { id: 'opt1', text: '① Chase the bluebird into the tall trees.', correct: false, feedback: 'Not quite! Look at Leo smiling kindly.' },
                        { id: 'opt2', text: '② Scatter golden seeds into the feeding tray.', correct: true, feedback: 'Spot on! Leo gives Pip tasty seeds to eat!' },
                        { id: 'opt3', text: '③ Catch the bluebird in a big cardboard box.', correct: false, feedback: 'Birds are wild! Leo helps Pip eat outdoors.' }
                    ]
                },
                story: {
                    title: 'The Little Bluebird',
                    paragraphs: [
                        {
                            num: 1,
                            sentences: [
                                { id: 's1', text: 'Leo saw the hungry bluebird in his garden.' },
                                { 
                                    id: 's2', 
                                    text: 'He put small yellow seeds into his wooden tray.',
                                    hasPronounHotspot: true,
                                    pronoun: 'He',
                                    antecedent: 'Leo',
                                    question: 'Who does the word "He" refer to in this sentence?',
                                    choices: ['Leo', 'The bluebird', 'The wooden tray'],
                                    correctIndex: 0,
                                    tip: '"He" is a subject pronoun referring to the boy, Leo.'
                                }
                            ]
                        },
                        {
                            num: 2,
                            sentences: [
                                { id: 's3', text: 'Pip flew down to the tray and flew quickly.' },
                                { 
                                    id: 's4', 
                                    text: 'The bluebird ate them happily and sang a sweet song.',
                                    hasPronounHotspot: true,
                                    pronoun: 'them',
                                    antecedent: 'small yellow seeds',
                                    question: 'What does the word "them" refer to in this sentence?',
                                    choices: ['The garden trees', 'The small yellow seeds', 'The wooden tray'],
                                    correctIndex: 1,
                                    tip: '"Them" is a plural object pronoun referring to the seeds.'
                                }
                            ]
                        }
                    ]
                },
                flowchart: [
                    {
                        step: 1,
                        label: '① First: Noticing Pip',
                        detail: 'Leo saw the hungry bluebird in his garden looking around for food.',
                        badge: 'Step 1: First'
                    },
                    {
                        step: 2,
                        label: '② Next: 6 Steps & Seeds',
                        detail: 'Leo walked 6 steps across the lawn and put small yellow seeds into his wooden tray.',
                        badge: 'Step 2: Next'
                    },
                    {
                        step: 3,
                        label: '③ Then: Flying & Singing',
                        detail: 'Pip flew down quickly to the tray, ate the yellow seeds happily, and sang a sweet song.',
                        badge: 'Step 3: Then'
                    }
                ],
                comprehension: [
                    {
                        badgeNum: '①',
                        question: 'Where did Leo see the hungry bluebird?',
                        options: [
                            'In his garden looking for food.',
                            'Inside a warm bedroom on a table.',
                            'Under a big red car in the garage.'
                        ],
                        correctIndex: 0,
                        explanation: 'Leo saw the hungry bluebird in his garden.'
                    },
                    {
                        badgeNum: '②',
                        question: 'What did Leo put into his wooden tray?',
                        options: [
                            'Cold green cabbage leaves.',
                            'Small yellow seeds.',
                            'Hard grey stones.'
                        ],
                        correctIndex: 1,
                        explanation: 'Leo placed small yellow seeds into his wooden tray.'
                    },
                    {
                        badgeNum: '③',
                        question: 'What did the bluebird do after eating the seeds?',
                        options: [
                            'Ate them happily and sang a sweet song.',
                            'Fell asleep in the tall grass.',
                            'Flew away to hide in the dark basement.'
                        ],
                        correctIndex: 0,
                        explanation: 'The bluebird ate the seeds happily and sang a sweet song.'
                    }
                ],
                grammarDoctor: [
                    {
                        id: 'b1',
                        badgeNum: '①',
                        brokenText: 'Leo see the hungry bluebird in his garden.',
                        bugWord: 'see',
                        choices: [
                            { text: 'see', isCorrect: false },
                            { text: 'saw', isCorrect: true },
                            { text: 'seeing', isCorrect: false }
                        ],
                        rule: 'Past Tense: The story is told in the past, so the correct past tense of "see" is "saw".'
                    },
                    {
                        id: 'b2',
                        badgeNum: '②',
                        brokenText: 'He put small yellow seed into his wooden tray.',
                        bugWord: 'seed',
                        choices: [
                            { text: 'seed', isCorrect: false },
                            { text: 'seeds', isCorrect: true },
                            { text: 'seeding', isCorrect: false }
                        ],
                        rule: 'Plural Nouns: There are multiple grains of food, so we say "seeds" with an "-s".'
                    },
                    {
                        id: 'b3',
                        badgeNum: '③',
                        brokenText: 'Pip fly down to the tray and flew quickly.',
                        bugWord: 'fly',
                        choices: [
                            { text: 'fly', isCorrect: false },
                            { text: 'flew', isCorrect: true },
                            { text: 'flying', isCorrect: false }
                        ],
                        rule: 'Past Tense: The irregular past tense of "fly" is "flew".'
                    },
                    {
                        id: 'b4',
                        badgeNum: '④',
                        brokenText: 'The bluebird singed a sweet song.',
                        bugWord: 'singed',
                        choices: [
                            { text: 'singed', isCorrect: false },
                            { text: 'sang', isCorrect: true },
                            { text: 'singing', isCorrect: false }
                        ],
                        rule: 'Irregular Past Tense: The past tense of the verb "sing" is always "sang", never "singed".'
                    }
                ],
                cloze: {
                    title: 'Story Summary Cloze Challenge',
                    instruction: 'Select the missing target words to complete the summary of The Little Bluebird:',
                    items: [
                        { prefix: 'Leo saw the hungry ', target: 'bluebird', suffix: ' in his garden.', options: ['bluebird', 'bear', 'frog'] },
                        { prefix: 'He put small yellow ', target: 'seeds', suffix: ' into his wooden tray.', options: ['seeds', 'rocks', 'sticks'] },
                        { prefix: 'Pip flew down to the ', target: 'tray', suffix: ' and flew quickly.', options: ['tray', 'car', 'lake'] },
                        { prefix: 'The bluebird ', target: 'ate', suffix: ' them happily.', options: ['ate', 'hid', 'swam'] },
                        { prefix: 'Pip sang a ', target: 'sweet', suffix: ' song to say thank you.', options: ['sweet', 'sad', 'scary'] }
                    ]
                },
                speaking: {
                    title: 'Zoom Speaking & Kindness Discussion',
                    prompt: 'Have you ever seen little birds or wild animals in your yard or park? How can we help them?',
                    starters: [
                        '💬 "When I look outside my window, I often see..."',
                        '💬 "If a little bird is looking for food, we can..."',
                        '💬 "I like little birds because..."'
                    ]
                }
            };

// Register scene cartridge & story unit
if (typeof registerPractiseScene === 'function') {
    registerPractiseScene('bluebird_garden', getPractiseBluebirdSceneSVG);
}
if (typeof registerPractiseUnit === 'function') {
    registerPractiseUnit('beginner', PRACTISE_BLUEBIRD_UNIT_DATA);
}
if (typeof window !== 'undefined') {
    window.getPractiseBluebirdSceneSVG = getPractiseBluebirdSceneSVG;
    window.PRACTISE_BLUEBIRD_UNIT_DATA = PRACTISE_BLUEBIRD_UNIT_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        level: 'beginner',
        unitData: PRACTISE_BLUEBIRD_UNIT_DATA,
        getSceneSVG: getPractiseBluebirdSceneSVG
    };
}
