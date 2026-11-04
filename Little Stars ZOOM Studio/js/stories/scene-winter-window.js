/* ==========================================================================
   SCENE CARTRIDGE: Winter Window (Intermediate Unit 01: Hungry Squirrels)
   ========================================================================== */

function getPractiseWinterWindowSceneSVG(isFocusPaused = false) {
    const pauseClass = isFocusPaused ? 'reading-focus-paused' : '';
    return `<svg class="living-window-svg ${pauseClass}" viewBox="0 0 540 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <!-- Atmospheric Morning Winter Sky -->
            <linearGradient id="storyWinterSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#bae6fd"/>
                <stop offset="55%" stop-color="#e0f2fe"/>
                <stop offset="100%" stop-color="#f8fafc"/>
            </linearGradient>
            <!-- Warm House Interior Glow -->
            <linearGradient id="indoorWarmGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#fde68a"/>
                <stop offset="70%" stop-color="#fed7aa"/>
                <stop offset="100%" stop-color="#ffedd5"/>
            </linearGradient>
            <!-- Grand Oak Tree Bark -->
            <linearGradient id="oakTreeBark" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#292524"/>
                <stop offset="40%" stop-color="#44403c"/>
                <stop offset="100%" stop-color="#1c1917"/>
            </linearGradient>
            <!-- Squirrel Fur Gradient -->
            <linearGradient id="sqFurGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ea580c"/>
                <stop offset="50%" stop-color="#c2410c"/>
                <stop offset="100%" stop-color="#7c2d12"/>
            </linearGradient>
            <!-- Mother's Soft Feminine Wavy Hair -->
            <linearGradient id="momHairGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#92400e"/>
                <stop offset="60%" stop-color="#78350f"/>
                <stop offset="100%" stop-color="#451a03"/>
            </linearGradient>
            <!-- Door Wood Texture -->
            <linearGradient id="doorWood" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#78350f"/>
                <stop offset="50%" stop-color="#92400e"/>
                <stop offset="100%" stop-color="#451a03"/>
            </linearGradient>
        </defs>

        <style>
            /* Atmospheric snowfall in the winter garden air */
            .snow-drift { animation: snowFall 6s linear infinite; }
            .snow-drift-2 { animation: snowFall 4.5s linear infinite 1.8s; }
            @keyframes snowFall {
                0% { transform: translateY(-30px) translateX(0px); opacity: 0; }
                20% { opacity: 0.85; }
                80% { opacity: 0.85; }
                100% { transform: translateY(280px) translateX(25px); opacity: 0.15; }
            }

            /* Subtle character life sway so Anna and Mom are not rigid statues */
            .char-sway-mom { animation: charSwayMom 4.5s ease-in-out infinite alternate; transform-origin: 0px 0px; }
            @keyframes charSwayMom {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(1.2deg); }
            }
            .char-sway-anna { animation: charSwayAnna 3.6s ease-in-out infinite alternate; transform-origin: 0px 0px; }
            @keyframes charSwayAnna {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(-1.5deg); }
            }

            /* Mom's Animated Throwing Arm (Step movements: draw back bread, swing, toss forward through door, release, follow through) */
            .mom-arm-throw {
                animation: momThrowCycle 3.4s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes momThrowCycle {
                0%   { transform: rotate(-15deg); }
                22%  { transform: rotate(-35deg); } /* Pulling arm back */
                48%  { transform: rotate(20deg); }  /* Swinging forward */
                62%  { transform: rotate(45deg); }  /* Release flick! */
                75%  { transform: rotate(35deg); }  /* Follow-through */
                88%  { transform: rotate(5deg); }
                100% { transform: rotate(-15deg); }
            }

            /* Anna's Animated Throwing Arm (Dips into chestnut bowl, swings forward, casts food out onto snow) */
            .anna-arm-throw {
                animation: annaThrowCycle 2.8s ease-in-out infinite 0.5s;
                transform-origin: 0px 0px;
            }
            @keyframes annaThrowCycle {
                0%   { transform: rotate(-22deg); }
                18%  { transform: rotate(-38deg); } /* Reaching into bowl */
                38%  { transform: rotate(-10deg); } /* Taking chestnut */
                58%  { transform: rotate(38deg); }  /* Enthusiastic forward toss! */
                70%  { transform: rotate(52deg); }  /* Release flick into yard! */
                82%  { transform: rotate(25deg); }  /* Follow-through */
                100% { transform: rotate(-22deg); }
            }

            /* Ballistic Food Toss 1: Anna's Chestnut dropping onto the snow floor at Y = 220 */
            .food-chestnut-drop {
                animation: tossChestnutDrop 2.8s cubic-bezier(0.22, 0.61, 0.36, 1) infinite 0.5s;
            }
            @keyframes tossChestnutDrop {
                0%, 55% {
                    opacity: 0;
                    transform: translate(142px, 160px) scale(0.6);
                }
                58% {
                    opacity: 1; /* Appears at hand at moment of release */
                    transform: translate(145px, 156px) scale(1) rotate(0deg);
                }
                70% {
                    opacity: 1;
                    transform: translate(185px, 122px) scale(1) rotate(140deg); /* High flight arc apex */
                }
                82% {
                    opacity: 1;
                    transform: translate(220px, 180px) scale(1) rotate(260deg); /* Curving down */
                }
                88% {
                    opacity: 1;
                    transform: translate(236px, 220px) scale(1) rotate(340deg); /* Hits snow floor baseline! */
                }
                92% {
                    opacity: 1;
                    transform: translate(240px, 216px) scale(1) rotate(370deg); /* Gentle bounce */
                }
                96%, 100% {
                    opacity: 1;
                    transform: translate(243px, 220px) scale(1) rotate(390deg); /* Firmly settled on snow */
                }
            }

            /* Ballistic Food Toss 2: Mom's Bread dropping onto the snow floor at Y = 220 */
            .food-bread-drop {
                animation: tossBreadDrop 3.4s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
            }
            @keyframes tossBreadDrop {
                0%, 52% {
                    opacity: 0;
                    transform: translate(130px, 146px) scale(0.6);
                }
                56% {
                    opacity: 1; /* Appears at Mom's hand */
                    transform: translate(138px, 142px) scale(1) rotate(0deg);
                }
                68% {
                    opacity: 1;
                    transform: translate(195px, 102px) scale(1) rotate(160deg); /* High flight arc */
                }
                80% {
                    opacity: 1;
                    transform: translate(245px, 170px) scale(1) rotate(280deg);
                }
                87% {
                    opacity: 1;
                    transform: translate(268px, 220px) scale(1) rotate(360deg); /* Lands on snow baseline! */
                }
                92% {
                    opacity: 1;
                    transform: translate(272px, 217px) scale(1) rotate(390deg); /* Gentle bounce */
                }
                96%, 100% {
                    opacity: 1;
                    transform: translate(275px, 220px) scale(1) rotate(410deg); /* Resting on snow floor */
                }
            }

            /* Snow Impact Puff Particles (Sprays gently when food lands) */
            .snow-puff-1 {
                animation: puffImpact1 2.8s ease-out infinite 0.5s;
            }
            @keyframes puffImpact1 {
                0%, 87% { opacity: 0; transform: translate(236px, 220px) scale(0.2); }
                88%     { opacity: 0.9; transform: translate(236px, 218px) scale(0.8); }
                94%     { opacity: 0.4; transform: translate(236px, 214px) scale(1.3); }
                100%    { opacity: 0; transform: translate(236px, 212px) scale(1.6); }
            }
            .snow-puff-2 {
                animation: puffImpact2 3.4s ease-out infinite;
            }
            @keyframes puffImpact2 {
                0%, 86% { opacity: 0; transform: translate(268px, 220px) scale(0.2); }
                87%     { opacity: 0.9; transform: translate(268px, 218px) scale(0.8); }
                93%     { opacity: 0.4; transform: translate(268px, 214px) scale(1.3); }
                100%    { opacity: 0; transform: translate(268px, 212px) scale(1.6); }
            }

            /* SQUIRREL 3: Multi-Step Bounding Run Cycle Across Snow to the Food */
            .sq-run-cycle {
                animation: sqGallopSteps 7.6s ease-in-out infinite;
            }
            @keyframes sqGallopSteps {
                /* 0% - 14%: Looking for food under the tree at X = 390 */
                0%   { transform: translate(390px, 0px) scaleX(1); }
                7%   { transform: translate(388px, 2px) scaleX(1); }  /* Sniffing snow */
                14%  { transform: translate(390px, 0px) scaleX(1); }  /* Looks up - sees food! */
                
                /* 17% - 24%: Bounding Leap 1 (X: 390 -> 345, leaps up Y: -12) */
                17%  { transform: translate(385px, 2px) scaleX(1); }  /* Crouch */
                20%  { transform: translate(368px, -12px) scaleX(1); } /* Mid-air stretch */
                24%  { transform: translate(345px, 0px) scaleX(1); }   /* Touchdown on snow */

                /* 27% - 34%: Bounding Leap 2 (X: 345 -> 295, leaps up Y: -14) */
                27%  { transform: translate(340px, 2px) scaleX(1); }
                30%  { transform: translate(320px, -14px) scaleX(1); }
                34%  { transform: translate(295px, 0px) scaleX(1); }

                /* 37% - 44%: Bounding Leap 3 (X: 295 -> 250, leaps up Y: -12) */
                37%  { transform: translate(290px, 2px) scaleX(1); }
                40%  { transform: translate(272px, -12px) scaleX(1); }
                44%  { transform: translate(250px, 0px) scaleX(1); }

                /* 47% - 52%: Final Scamper to Food (X: 250 -> 215) */
                47%  { transform: translate(232px, -6px) scaleX(1); }
                52%  { transform: translate(215px, 0px) scaleX(1); }   /* Arrived right at chestnuts! */

                /* 54% - 80%: At the Food! Sits upright, holds chestnut, eats happily */
                54%  { transform: translate(215px, 0px) scaleX(1); }
                60%  { transform: translate(215px, -1px) scaleX(1); }
                70%  { transform: translate(215px, 1px) scaleX(1); }
                80%  { transform: translate(215px, 0px) scaleX(1); }

                /* 83% - 100%: Turn around and scamper back toward tree */
                83%  { transform: translate(215px, 0px) scaleX(-1); } /* Turns around */
                88%  { transform: translate(270px, -10px) scaleX(-1); } /* Leaping back */
                93%  { transform: translate(335px, -10px) scaleX(-1); }
                98%  { transform: translate(390px, 0px) scaleX(-1); }
                100% { transform: translate(390px, 0px) scaleX(1); }  /* Reset facing food */
            }

            /* Runner Body Articulation (Squash & Stretch during leaps) */
            .sq-run-body-rig {
                animation: sqBodyRig 7.6s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes sqBodyRig {
                0%, 14%  { transform: rotate(0deg) scale(1, 1); }
                17%      { transform: rotate(10deg) scale(0.9, 1.1); }  /* Crouch */
                20%      { transform: rotate(-12deg) scale(1.15, 0.88); } /* Airborne leap stretch */
                24%      { transform: rotate(4deg) scale(0.95, 1.05); }  /* Landing */
                27%      { transform: rotate(10deg) scale(0.9, 1.1); }
                30%      { transform: rotate(-12deg) scale(1.15, 0.88); }
                34%      { transform: rotate(4deg) scale(0.95, 1.05); }
                37%      { transform: rotate(10deg) scale(0.9, 1.1); }
                40%      { transform: rotate(-12deg) scale(1.15, 0.88); }
                44%      { transform: rotate(2deg) scale(1, 1); }
                52%, 80% { transform: rotate(-8deg) scale(1, 1); }       /* Sitting upright eating */
                83%      { transform: rotate(0deg) scale(1, 1); }
                88%, 95% { transform: rotate(-10deg) scale(1.1, 0.9); }  /* Running back */
                100%     { transform: rotate(0deg) scale(1, 1); }
            }

            /* Runner Front & Hind Leg Stepping Cycles */
            .sq-run-front-leg {
                animation: sqFrontLegs 7.6s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes sqFrontLegs {
                0%, 14%  { transform: rotate(0deg); }
                20%, 30%, 40% { transform: rotate(-35deg); } /* Reaching forward in leap */
                24%, 34%, 44% { transform: rotate(15deg); }  /* Planting on snow */
                52%, 80% { transform: rotate(-25deg); }       /* Holding chestnut up to mouth */
                100%     { transform: rotate(0deg); }
            }
            .sq-run-hind-leg {
                animation: sqHindLegs 7.6s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes sqHindLegs {
                0%, 14%  { transform: rotate(0deg); }
                17%, 27%, 37% { transform: rotate(25deg); }  /* Pushing off snow */
                20%, 30%, 40% { transform: rotate(-20deg); } /* Trailing in air */
                24%, 34%, 44% { transform: rotate(0deg); }   /* Landing */
                52%, 80% { transform: rotate(0deg); }
                100%     { transform: rotate(0deg); }
            }

            /* Dynamic Aerodynamic Running Tail */
            .sq-run-tail {
                animation: sqRunTail 7.6s ease-in-out infinite;
                transform-origin: 0px 0px;
            }
            @keyframes sqRunTail {
                0%, 14%  { transform: rotate(0deg); }
                20%, 30%, 40% { transform: rotate(18deg); }  /* Streaming back in the air */
                24%, 34%, 44% { transform: rotate(-12deg); } /* Whipping as paws hit snow */
                52%, 80% { transform: rotate(10deg); }       /* Arched while eating */
                100%     { transform: rotate(0deg); }
            }

            /* Runner Contact Shadow: tracks with squirrel along snow floor, shrinks airborne */
            .sq-run-shadow {
                animation: sqShadowGallop 7.6s ease-in-out infinite;
            }
            @keyframes sqShadowGallop {
                0%, 14%  { transform: translate(390px, 0px) scale(1, 1); opacity: 0.22; }
                20%      { transform: translate(368px, 0px) scale(0.7, 0.7); opacity: 0.12; }
                24%      { transform: translate(345px, 0px) scale(1.1, 1); opacity: 0.25; }
                30%      { transform: translate(320px, 0px) scale(0.7, 0.7); opacity: 0.12; }
                34%      { transform: translate(295px, 0px) scale(1.1, 1); opacity: 0.25; }
                40%      { transform: translate(272px, 0px) scale(0.7, 0.7); opacity: 0.12; }
                44%      { transform: translate(250px, 0px) scale(1.1, 1); opacity: 0.25; }
                52%, 80% { transform: translate(215px, 0px) scale(1, 1); opacity: 0.25; }
                88%      { transform: translate(270px, 0px) scale(0.75, 0.75); opacity: 0.14; }
                93%      { transform: translate(335px, 0px) scale(0.75, 0.75); opacity: 0.14; }
                98%, 100%{ transform: translate(390px, 0px) scale(1, 1); opacity: 0.22; }
            }

            /* SQUIRREL 1: Vertical Tree Climbing Steps */
            .sq-climb-steps {
                animation: sqClimbStepCycle 5.2s ease-in-out infinite alternate;
            }
            @keyframes sqClimbStepCycle {
                0%   { transform: translateY(0px); }
                18%  { transform: translateY(-10px); } /* Step 1 up */
                24%  { transform: translateY(-8px); }
                42%  { transform: translateY(-24px); } /* Step 2 up */
                48%  { transform: translateY(-22px); }
                66%  { transform: translateY(-38px); } /* Step 3 up near snowy branch */
                82%  { transform: translateY(-38px); } /* Pauses, looking down at yard */
                100% { transform: translateY(-4px); }  /* Glides down to lower trunk */
            }
            .sq-climb-paw-l {
                animation: sqPawClimbL 1.2s ease-in-out infinite alternate;
                transform-origin: 0px 0px;
            }
            @keyframes sqPawClimbL {
                0%   { transform: translate(0px, 0px); }
                100% { transform: translate(2px, -5px); }
            }
            .sq-climb-paw-r {
                animation: sqPawClimbR 1.2s ease-in-out infinite alternate 0.6s;
                transform-origin: 0px 0px;
            }
            @keyframes sqPawClimbR {
                0%   { transform: translate(0px, 0px); }
                100% { transform: translate(2px, -5px); }
            }

            /* Fluffy squirrel tails: firmly anchored at (0,0) so they NEVER detach from body */
            .sq-tail { animation: tailFlickAttached 2.6s ease-in-out infinite alternate; transform-origin: 0px 0px; }
            .sq-tail-2 { animation: tailFlickAttached 2.0s ease-in-out infinite alternate 0.5s; transform-origin: 0px 0px; }
            @keyframes tailFlickAttached {
                0%   { transform: rotate(0deg); }
                50%  { transform: rotate(-8deg); }
                100% { transform: rotate(10deg); }
            }
            .sq-paw-chew { animation: pawNibble 0.5s ease-in-out infinite alternate; transform-origin: 0px 0px; }
            @keyframes pawNibble {
                0%   { transform: translateY(0px) rotate(0deg); }
                100% { transform: translateY(-2.5px) rotate(-3deg); }
            }

            /* Pause states for focus mode */
            .reading-focus-paused .snow-drift,
            .reading-focus-paused .snow-drift-2,
            .reading-focus-paused .char-sway-mom,
            .reading-focus-paused .char-sway-anna,
            .reading-focus-paused .mom-arm-throw,
            .reading-focus-paused .anna-arm-throw,
            .reading-focus-paused .food-chestnut-drop,
            .reading-focus-paused .food-bread-drop,
            .reading-focus-paused .snow-puff-1,
            .reading-focus-paused .snow-puff-2,
            .reading-focus-paused .sq-run-cycle,
            .reading-focus-paused .sq-run-body-rig,
            .reading-focus-paused .sq-run-front-leg,
            .reading-focus-paused .sq-run-hind-leg,
            .reading-focus-paused .sq-run-tail,
            .reading-focus-paused .sq-run-shadow,
            .reading-focus-paused .sq-climb-steps,
            .reading-focus-paused .sq-climb-paw-l,
            .reading-focus-paused .sq-climb-paw-r,
            .reading-focus-paused .sq-paw-chew,
            .reading-focus-paused .sq-tail,
            .reading-focus-paused .sq-tail-2 {
                animation-play-state: paused !important;
            }
        </style>

        <!-- LAYER 1: ATMOSPHERIC BACKING (Soft Pale Winter Sky & Distant Mountain) -->
        <rect x="0" y="0" width="540" height="320" fill="url(#storyWinterSky)"/>
        <!-- Soft Winter Morning Sun Halo in the distance -->
        <circle cx="340" cy="50" r="32" fill="#fef08a" opacity="0.5"/>
        <circle cx="340" cy="50" r="44" fill="#fef9c3" opacity="0.25"/>

        <!-- Distant Snow-Draped Mountain Ridge -->
        <path d="M 120,150 Q 220,110 320,140 T 540,135 L 540,320 L 120,320 Z" fill="#cbd5e1" opacity="0.4"/>
        <path d="M 140,165 Q 260,135 380,160 T 540,152 L 540,320 L 140,320 Z" fill="#e2e8f0" opacity="0.6"/>

        <!-- Distant Frosted Pine Trees on Ridge -->
        <polygon points="230,165 240,138 250,165" fill="#64748b" opacity="0.45"/>
        <polygon points="246,168 255,142 264,168" fill="#64748b" opacity="0.45"/>
        <polygon points="260,166 270,135 280,166" fill="#64748b" opacity="0.45"/>
        <polygon points="340,165 350,140 360,165" fill="#64748b" opacity="0.45"/>

        <!-- LAYER 2: THE SNOWY YARD & THE BIG TREE (From the Story: "Under a big tree...") -->
        <!-- Pure White Snowground Baseline (Firmly Supporting Scene at Y = 220) -->
        <path d="M 110,215 Q 240,205 380,215 T 540,212 L 540,320 L 110,320 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <path d="M 120,225 Q 280,220 440,225 T 540,224 L 540,320 L 120,320 Z" fill="#f1f5f9"/>

        <!-- THE BIG TREE (Majestic Natural Oak Tree reaching to the top of the frame) -->
        <g>
            <!-- Heavy Trunk Roots firmly grounded on snow up to high canopy at Y = 10 -->
            <path d="M 428,245 Q 440,190 444,120 Q 446,70 438,15 L 468,10 Q 476,70 472,120 Q 475,190 490,245 Z" fill="url(#oakTreeBark)" stroke="#1c1917" stroke-width="2"/>
            
            <!-- High Crown Branches reaching the top border of the frame -->
            <!-- High Topmost Canopy Bough spreading across top (Y = 5 to 25) -->
            <path d="M 452,25 Q 410,6 360,8" stroke="url(#oakTreeBark)" stroke-width="11" stroke-linecap="round" fill="none"/>
            <path d="M 390,8 Q 345,14 300,22" stroke="url(#oakTreeBark)" stroke-width="8" stroke-linecap="round" fill="none"/>
            
            <!-- High Right Crown Branch extending to top right edge -->
            <path d="M 466,35 Q 505,16 540,18" stroke="url(#oakTreeBark)" stroke-width="11" stroke-linecap="round" fill="none"/>
            <path d="M 500,18 Q 525,28 540,38" stroke="url(#oakTreeBark)" stroke-width="7" stroke-linecap="round" fill="none"/>
            
            <!-- Upper Left Branch sweeping toward center-top -->
            <path d="M 444,70 Q 380,45 320,55" stroke="url(#oakTreeBark)" stroke-width="12" stroke-linecap="round" fill="none"/>
            <path d="M 360,49 Q 325,36 290,42" stroke="url(#oakTreeBark)" stroke-width="7" stroke-linecap="round" fill="none"/>

            <!-- Mid-Level Major Left Bough -->
            <path d="M 442,110 Q 390,92 345,102" stroke="url(#oakTreeBark)" stroke-width="12" stroke-linecap="round" fill="none"/>

            <!-- Major Lower Branch Spanning Left above squirrels -->
            <path d="M 445,150 Q 390,135 335,145" stroke="url(#oakTreeBark)" stroke-width="14" stroke-linecap="round" fill="none"/>

            <!-- Mid Right Branch -->
            <path d="M 470,125 Q 505,108 538,112" stroke="url(#oakTreeBark)" stroke-width="12" stroke-linecap="round" fill="none"/>

            <!-- Heavy Cushions of Soft Fresh White Snow on the Tree Canopy Branches (Top of Frame to Midground) -->
            <!-- Topmost Left Snow Cushion (Y = 4 - 15) -->
            <path d="M 355,5 Q 410,2 454,20 Q 405,10 355,5 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 295,18 Q 345,10 395,6 Q 345,15 295,18 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            
            <!-- Topmost Right Snow Cushion (Y = 12 - 25) -->
            <path d="M 465,30 Q 505,12 540,14 Q 505,18 465,30 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>

            <!-- Upper-Left Canopy Snow Cushion (Y = 40 - 58) -->
            <path d="M 315,50 Q 380,38 444,65 Q 380,48 315,50 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
            <path d="M 288,38 Q 325,32 362,45 Q 325,38 288,38 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>

            <!-- Mid-Left Snow Cushion (Y = 95 - 105) -->
            <path d="M 340,98 Q 390,85 442,105 Q 390,92 340,98 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>

            <!-- Lower-Left Snow Cushion (Y = 138 - 148) -->
            <path d="M 330,142 Q 390,126 445,144 Q 390,132 330,142 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>

            <!-- Mid-Right Snow Cushion (Y = 105 - 118) -->
            <path d="M 470,120 Q 505,102 538,108 Q 505,107 470,120 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>

            <!-- Small Glistening Icicles Hanging Under Snow-Laden Branches -->
            <polygon points="380,18 382,27 384,18" fill="#e0f2fe" stroke="#bae6fd" stroke-width="0.5"/>
            <polygon points="420,24 422,35 424,24" fill="#e0f2fe" stroke="#bae6fd" stroke-width="0.5"/>
            <polygon points="505,22 507,31 509,22" fill="#e0f2fe" stroke="#bae6fd" stroke-width="0.5"/>
            <polygon points="360,62 362,72 364,62" fill="#e0f2fe" stroke="#bae6fd" stroke-width="0.5"/>
            <polygon points="400,152 402,162 404,152" fill="#e0f2fe" stroke="#bae6fd" stroke-width="0.5"/>
        </g>

        <!-- SQUIRREL 1 (CLIMBING UP THE BIG TREE TRUNK! Realistic Step Climbing & Paws) -->
        <g transform="translate(442, 160)">
            <g class="sq-climb-steps">
                <!-- Bushy Tail Trailing Down Along the Tree Trunk (Pivot firmly attached at hip: 0, 14) -->
                <g transform="translate(0, 14)">
                    <g class="sq-tail-2" style="transform-origin: 0px 0px;">
                        <path d="M 0,0 C 8,12 16,34 8,48 C 0,58 -14,50 -10,36 C -6,24 -4,10 0,0 Z" fill="url(#sqFurGrad)" stroke="#451a03" stroke-width="1.5"/>
                    </g>
                </g>
                <!-- Sleek Climbing Body Grasping Bark -->
                <ellipse cx="-2" cy="4" rx="8" ry="14" fill="url(#sqFurGrad)"/>
                <ellipse cx="-5" cy="5" rx="4.5" ry="9" fill="#fef3c7"/> <!-- Cream underbelly -->
                <!-- Alternating Climbing Front Paws Clinging Upward to Bark -->
                <g class="sq-climb-paw-l">
                    <path d="M -3,-4 L 7,-10 L 8,-6 L -1,-1 Z" fill="#c2410c"/>
                    <circle cx="8" cy="-8" r="2" fill="#78350f"/> <!-- Claws gripping bark -->
                </g>
                <g class="sq-climb-paw-r">
                    <path d="M 1,-2 L 10,-8 L 11,-4 L 3,1 Z" fill="#c2410c"/>
                    <circle cx="10" cy="-6" r="2" fill="#78350f"/>
                </g>
                <!-- Hind Paws Clinging to Bark -->
                <ellipse cx="2" cy="16" rx="4" ry="5.5" fill="#c2410c"/>
                <circle cx="5" cy="19" r="1.8" fill="#78350f"/>
                <!-- Head Looking Upward toward Snowy Branches -->
                <circle cx="-2" cy="-8" r="7.5" fill="url(#sqFurGrad)"/>
                <!-- Cute Rounded Ears (No spikes!) -->
                <ellipse cx="-4" cy="-14" rx="2.5" ry="3.8" fill="#c2410c" stroke="#451a03" stroke-width="0.8"/>
                <ellipse cx="-4" cy="-14" rx="1.2" ry="2.2" fill="#fbcfe8"/>
                <!-- Alert Dark Eye with White Pupil Glint -->
                <circle cx="-2" cy="-9" r="1.8" fill="#1e293b"/>
                <circle cx="-2.5" cy="-9.6" r="0.7" fill="#ffffff"/>
                <circle cx="-7" cy="-7" r="1" fill="#451a03"/> <!-- Cute Nose -->
            </g>
        </g>

        <!-- SQUIRREL 2 (Sitting under the big tree, happily eating bread with both paws: "One ate the bread") -->
        <g transform="translate(345, 194)">
            <!-- Ground Contact Shadow on Snow at Y = 220 -->
            <ellipse cx="10" cy="26" rx="18" ry="5.5" fill="rgba(0, 0, 0, 0.2)"/>
            <!-- Bushy Tail Arched Firmly at Hip (Pivot attached at 12, 14: NEVER detaches!) -->
            <g transform="translate(12, 14)">
                <g class="sq-tail" style="transform-origin: 0px 0px;">
                    <path d="M 0,0 C 22,4 32,-18 22,-34 C 12,-48 -6,-40 -2,-22 C 0,-10 -4,-4 0,0 Z" fill="url(#sqFurGrad)" stroke="#451a03" stroke-width="1.8"/>
                </g>
            </g>
            <!-- Plump Upright Body -->
            <ellipse cx="8" cy="16" rx="12" ry="15" fill="url(#sqFurGrad)"/>
            <ellipse cx="3" cy="18" rx="6.5" ry="10.5" fill="#fef3c7"/> <!-- Cream Chest/Belly -->
            <!-- Head with Chubby Cheeks -->
            <circle cx="2" cy="1" r="9" fill="url(#sqFurGrad)"/>
            <!-- Cute Rounded Ears (Soft and natural, NO horns/spikes!) -->
            <ellipse cx="2" cy="-8" rx="3" ry="4.5" fill="#c2410c" stroke="#451a03" stroke-width="0.9"/>
            <ellipse cx="2" cy="-8" rx="1.6" ry="2.8" fill="#fbcfe8"/>
            <ellipse cx="7" cy="-7" rx="2.5" ry="4" fill="#c2410c" stroke="#451a03" stroke-width="0.9"/>
            <!-- Big Expressive Eye with Double Pupil Highlights -->
            <circle cx="-1" cy="0" r="2.2" fill="#1e293b"/>
            <circle cx="-1.7" cy="-0.8" r="0.9" fill="#ffffff"/>
            <circle cx="-0.6" cy="0.4" r="0.4" fill="#ffffff"/>
            <!-- Cute Pink Snout & Delicate Whiskers -->
            <circle cx="-6" cy="3" r="1.3" fill="#451a03"/>
            <line x1="-6" y1="2" x2="-12" y2="0" stroke="#78350f" stroke-width="0.8"/>
            <line x1="-6" y1="4" x2="-12" y2="6" stroke="#78350f" stroke-width="0.8"/>
            <!-- Paws Holding Golden Bread Piece to Mouth (Animated Nibble Steps) -->
            <g class="sq-paw-chew">
                <ellipse cx="-3" cy="8" rx="3.5" ry="2.8" fill="#c2410c"/>
                <rect x="-10" y="4" width="7.5" height="6.5" rx="1.8" fill="#fed7aa" stroke="#d97706" stroke-width="0.9"/>
                <line x1="-8" y1="7" x2="-4" y2="7" stroke="#b45309" stroke-width="0.7"/>
            </g>
            <!-- Hind Feet Planted Firmly on the Snow -->
            <ellipse cx="6" cy="28" rx="7" ry="3.2" fill="#7c2d12"/>
        </g>

        <!-- SQUIRREL 3 (RUNNING SCAMPER TO FOOD: Multi-step bounding gallop across snow from tree to food!) -->
        <g transform="translate(0, 220)">
            <!-- Ground Contact Shadow: dynamically tracks along snow baseline at Y = 220 -->
            <ellipse class="sq-run-shadow" cx="0" cy="0" rx="16" ry="4.5" fill="rgba(0, 0, 0, 0.22)"/>

            <!-- Moving Runner Group (Handles multi-step bounding translation across snow) -->
            <g class="sq-run-cycle">
                <!-- Body Rig (Handles bounding squash, stretch, and posture) -->
                <g class="sq-run-body-rig">
                    <!-- Fluffy Running Tail (Attached firmly at hip: -10, -12) -->
                    <g transform="translate(-10, -12)">
                        <g class="sq-run-tail" style="transform-origin: 0px 0px;">
                            <path d="M 0,0 C -18,-4 -28,-22 -20,-36 C -12,-48 4,-40 2,-22 C 0,-10 2,-4 0,0 Z" fill="url(#sqFurGrad)" stroke="#451a03" stroke-width="1.6"/>
                        </g>
                    </g>
                    <!-- Articulating Hind Leg (Pushes off snow during bounding steps) -->
                    <g class="sq-run-hind-leg">
                        <ellipse cx="-6" cy="-4" rx="5" ry="3" fill="#7c2d12"/>
                    </g>
                    <!-- Dynamic Running Body -->
                    <ellipse cx="0" cy="-12" rx="14" ry="9" fill="url(#sqFurGrad)"/>
                    <ellipse cx="4" cy="-11" rx="6" ry="6" fill="#fef3c7"/> <!-- Underbelly -->
                    <!-- Articulating Front Paws (Reaches forward in leap, holds chestnut when eating) -->
                    <g class="sq-run-front-leg">
                        <ellipse cx="10" cy="-5" rx="4" ry="2.5" fill="#7c2d12"/>
                        <!-- Chestnut in paws when eating at the food -->
                        <circle cx="14" cy="-8" r="3.2" fill="#78350f" opacity="0.95"/>
                    </g>
                    <!-- Head with Chubby Cheeks Stretched Forward -->
                    <circle cx="12" cy="-16" r="8" fill="url(#sqFurGrad)"/>
                    <ellipse cx="14" cy="-15" rx="3.5" ry="3.5" fill="#fef3c7"/>
                    <!-- Cute Rounded Ears with Soft Pink Inner Pads -->
                    <ellipse cx="10" cy="-24" rx="2.6" ry="4" fill="#c2410c" stroke="#451a03" stroke-width="0.8"/>
                    <ellipse cx="10" cy="-24" rx="1.3" ry="2.2" fill="#fbcfe8"/>
                    <ellipse cx="14" cy="-23" rx="2.2" ry="3.6" fill="#c2410c" stroke="#451a03" stroke-width="0.8"/>
                    <!-- Alert Dark Eye with Double Glints -->
                    <circle cx="14" cy="-17" r="2" fill="#1e293b"/>
                    <circle cx="14.6" cy="-17.6" r="0.8" fill="#ffffff"/>
                    <circle cx="15.2" cy="-16.8" r="0.4" fill="#ffffff"/>
                    <!-- Cute Dark Nose & Delicate Whiskers -->
                    <circle cx="19" cy="-15" r="1.1" fill="#451a03"/>
                    <line x1="19" y1="-15" x2="25" y2="-17" stroke="#78350f" stroke-width="0.7"/>
                    <line x1="19" y1="-14" x2="25" y2="-13" stroke="#78350f" stroke-width="0.7"/>
                </g>
            </g>
        </g>

        <!-- SCATTERED FOOD RESTING PERMANENTLY ON SNOW BASELINE (Y = 220) -->
        <g>
            <!-- Shadow for food pieces on snow -->
            <ellipse cx="185" cy="223" rx="6" ry="2" fill="rgba(0, 0, 0, 0.15)"/>
            <rect x="180" y="219" width="9" height="7" rx="2" fill="#fed7aa" stroke="#d97706" stroke-width="1"/>
            <ellipse cx="205" cy="224" rx="5" ry="2" fill="rgba(0, 0, 0, 0.15)"/>
            <rect x="200" y="220" width="8" height="6" rx="2" fill="#fed7aa" stroke="#d97706" stroke-width="1"/>
            <!-- Chestnuts on snow with contact shadows -->
            <ellipse cx="222" cy="224" rx="6" ry="2.5" fill="rgba(0, 0, 0, 0.18)"/>
            <ellipse cx="222" cy="222" rx="5.5" ry="4" fill="#78350f" stroke="#451a03" stroke-width="1"/>
            <path d="M 218,223 Q 222,225 226,223 Z" fill="#d97706"/>
            <ellipse cx="250" cy="224" rx="6" ry="2.5" fill="rgba(0, 0, 0, 0.18)"/>
            <ellipse cx="250" cy="222" rx="6" ry="4.5" fill="#78350f" stroke="#451a03" stroke-width="1"/>
            <path d="M 246,223 Q 250,225 254,223 Z" fill="#d97706"/>
            <ellipse cx="280" cy="225" rx="5" ry="2" fill="rgba(0, 0, 0, 0.15)"/>
            <rect x="276" y="221" width="7.5" height="6" rx="1.8" fill="#fed7aa" stroke="#d97706" stroke-width="0.9"/>
        </g>

        <!-- BALLISTIC FLYING FOOD: DROPS FROM DOORWAY DIRECTLY ONTO SNOW FLOOR (NEVER VANISHES IN AIR!) -->
        <!-- 1. Anna's Chestnut: Arcs from hand, hits snow baseline at (236, 220), bounces and settles! -->
        <g class="food-chestnut-drop">
            <ellipse cx="0" cy="0" rx="5.5" ry="4.2" fill="#78350f" stroke="#451a03" stroke-width="1"/>
            <path d="M -5,1 Q 0,-3 5,1" stroke="#fde68a" stroke-width="0.9" fill="none"/>
            <path d="M -4,2 Q 0,4.2 4,2 Z" fill="#d97706"/>
        </g>
        <!-- Snow puff when Anna's chestnut strikes snow -->
        <g class="snow-puff-1">
            <circle cx="-3" cy="-2" r="2.2" fill="#ffffff" opacity="0.9"/>
            <circle cx="2" cy="-4" r="2.6" fill="#ffffff" opacity="0.9"/>
            <circle cx="0" cy="-1" r="1.8" fill="#ffffff" opacity="0.8"/>
        </g>

        <!-- 2. Mom's Bread Cube: Arcs from Mom's hand, drops to snow floor at (268, 220), bounces and settles! -->
        <g class="food-bread-drop">
            <rect x="-4.5" y="-3.5" width="9" height="7" rx="2" fill="#fed7aa" stroke="#d97706" stroke-width="1"/>
            <line x1="-2" y1="-1" x2="2" y2="-1" stroke="#d97706" stroke-width="0.8"/>
        </g>
        <!-- Snow puff when Mom's bread strikes snow -->
        <g class="snow-puff-2">
            <circle cx="-3" cy="-2" r="2.2" fill="#ffffff" opacity="0.9"/>
            <circle cx="2" cy="-4" r="2.6" fill="#ffffff" opacity="0.9"/>
            <circle cx="0" cy="-1" r="1.8" fill="#ffffff" opacity="0.8"/>
        </g>

        <!-- Falling Drifting Snowflakes in the Garden Air -->
        <g class="snow-drift">
            <circle cx="180" cy="45" r="3" fill="#ffffff" opacity="0.9"/>
            <circle cx="260" cy="70" r="3.5" fill="#ffffff" opacity="0.85"/>
            <circle cx="370" cy="50" r="4" fill="#ffffff" opacity="0.9"/>
            <circle cx="480" cy="75" r="3.2" fill="#ffffff" opacity="0.85"/>
            <circle cx="310" cy="120" r="3.5" fill="#ffffff" opacity="0.8"/>
        </g>
        <g class="snow-drift-2">
            <circle cx="220" cy="80" r="2.8" fill="#ffffff" opacity="0.85"/>
            <circle cx="330" cy="95" r="3.8" fill="#ffffff" opacity="0.85"/>
            <circle cx="420" cy="65" r="3.2" fill="#ffffff" opacity="0.85"/>
            <circle cx="280" cy="140" r="3.5" fill="#ffffff" opacity="0.8"/>
        </g>

        <!-- LAYER 3: ANNA'S HOUSE & THE WARM OPEN DOORWAY (Left Side: X = 0 to 140) -->
        <!-- House Exterior Wall with Cedar Clapboards -->
        <rect x="0" y="0" width="135" height="320" fill="#334155"/>
        <line x1="0" y1="40" x2="135" y2="40" stroke="#1e293b" stroke-width="2"/>
        <line x1="0" y1="80" x2="135" y2="80" stroke="#1e293b" stroke-width="2"/>
        <line x1="0" y1="120" x2="135" y2="120" stroke="#1e293b" stroke-width="2"/>
        <line x1="0" y1="160" x2="135" y2="160" stroke="#1e293b" stroke-width="2"/>
        <line x1="0" y1="200" x2="135" y2="200" stroke="#1e293b" stroke-width="2"/>

        <!-- The Open Doorway Opening (Architrave & Warm Interior Room Light) -->
        <rect x="25" y="45" width="100" height="180" rx="4" fill="url(#indoorWarmGlow)"/>
        <!-- Interior Doorway Casing -->
        <rect x="20" y="40" width="108" height="185" rx="4" fill="none" stroke="#78350f" stroke-width="8"/>
        <!-- Hardwood Floor Threshold Inside -->
        <rect x="20" y="220" width="112" height="12" rx="2" fill="#a16207" stroke="#713f12" stroke-width="1.5"/>

        <!-- Warm Golden Light Spilling from the Open Door onto the Snow -->
        <polygon points="128,220 220,230 180,245 128,232" fill="#fef08a" opacity="0.35"/>

        <!-- The Open Front Door (Swung wide open inside toward the left wall) -->
        <g transform="translate(18, 48) skewY(-8)">
            <rect x="0" y="0" width="22" height="175" fill="url(#doorWood)" stroke="#451a03" stroke-width="2"/>
            <rect x="3" y="15" width="16" height="40" rx="2" fill="#92400e" stroke="#451a03" stroke-width="1"/>
            <rect x="3" y="70" width="16" height="40" rx="2" fill="#92400e" stroke="#451a03" stroke-width="1"/>
            <!-- Shiny Brass Doorknob -->
            <circle cx="16" cy="95" r="3.5" fill="#facc15" stroke="#b45309" stroke-width="1"/>
        </g>

        <!-- Overhead Warm Porch Lantern on House Wall -->
        <g transform="translate(120, 28)">
            <rect x="-6" y="-6" width="12" height="6" fill="#1e293b"/>
            <path d="M -6,0 L 6,0 L 4,14 L -4,14 Z" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
            <circle cx="0" cy="7" r="10" fill="#fef08a" opacity="0.4"/>
        </g>

        <!-- LAYER 4: CHARACTERS STANDING AT THE OPEN DOORWAY (Anna & Her Mother with Throwing Movements) -->

        <!-- ANNA'S MOTHER (Unmistakably Feminine, Loving Adult Woman with Step Throwing Motion) -->
        <g transform="translate(68, 220)">
            <!-- Mother's Ground Shadow on Door Threshold -->
            <ellipse cx="0" cy="0" rx="22" ry="5" fill="rgba(0, 0, 0, 0.2)"/>

            <g transform="translate(0, -115)">
                <!-- Tailored Dark Slacks & Feminine Ankle Boots -->
                <rect x="-10" y="85" width="9" height="28" rx="2" fill="#334155"/>
                <rect x="2" y="85" width="9" height="28" rx="2" fill="#334155"/>
                <path d="M -12,108 L -1,108 L 0,115 L -12,115 Z" fill="#1e293b"/>
                <path d="M 0,108 L 11,108 L 12,115 L 0,115 Z" fill="#1e293b"/>

                <!-- Subtle Living Sway for Upper Body -->
                <g class="char-sway-mom">
                    <!-- Cozy Stylish Heather-Rose / Lavender Knit Cardigan Coat -->
                    <path d="M -18,34 L 18,34 L 22,88 L -22,88 Z" fill="#be185d" stroke="#9d174d" stroke-width="2"/>
                    <!-- Ivory Inner Knit Top with Delicate V-Neck -->
                    <polygon points="0,34 -8,52 8,52" fill="#fffbeb"/>
                    <!-- Mother's Cardigan Buttons -->
                    <circle cx="0" cy="58" r="2" fill="#fbcfe8"/>
                    <circle cx="0" cy="68" r="2" fill="#fbcfe8"/>
                    <circle cx="0" cy="78" r="2" fill="#fbcfe8"/>

                    <!-- Left Arm: Tenderly and Lovingly Resting on Anna's Shoulder -->
                    <g>
                        <path d="M 14,36 L 36,48 L 32,54 L 12,42 Z" fill="#be185d" stroke="#9d174d" stroke-width="1.8"/>
                        <!-- Feminine Caring Hand -->
                        <ellipse cx="38" cy="50" rx="5" ry="4" fill="#fed7aa"/>
                    </g>

                    <!-- Right Arm: Graceful Step-by-Step Throwing Motion Casting Bread Through Doorway -->
                    <g transform="translate(-14, 36)">
                        <g class="mom-arm-throw" style="transform-origin: 0px 0px;">
                            <path d="M 0,0 L 16,10 L 12,16 L -3,6 Z" fill="#be185d" stroke="#9d174d" stroke-width="1.8"/>
                            <ellipse cx="18" cy="12" rx="4.8" ry="3.8" fill="#fed7aa"/>
                            <!-- Piece of bread held in hand during throw preparation -->
                            <rect x="16" y="8" width="5.5" height="4.5" rx="1.2" fill="#fed7aa" stroke="#d97706" stroke-width="0.8"/>
                        </g>
                    </g>

                    <!-- Mother's Face & Hair (Unmistakable Beautiful Feminine Woman) -->
                    <!-- Graceful Neck -->
                    <rect x="-4.5" y="24" width="9" height="12" fill="#fed7aa"/>
                    <!-- Soft Oval Feminine Face -->
                    <ellipse cx="0" cy="15" rx="13" ry="14.5" fill="#fed7aa" stroke="#e0a96d" stroke-width="1.2"/>
                    <!-- Cheerful Rosy Blush on Cheeks -->
                    <circle cx="-6.5" cy="18" r="3.2" fill="rgba(244, 63, 94, 0.35)"/>
                    <circle cx="6.5" cy="18" r="3.2" fill="rgba(244, 63, 94, 0.35)"/>
                    <!-- Beautiful Almond Eyes with Double White Pupil Glints & Eyelashes -->
                    <ellipse cx="-5" cy="13" rx="2.4" ry="3.2" fill="#1e293b"/>
                    <circle cx="-4.2" cy="11.8" r="1.1" fill="#ffffff"/>
                    <circle cx="-3.5" cy="13" r="0.5" fill="#ffffff"/>
                    <path d="M -7.5,9 Q -4.8,6.5 -2.2,9" stroke="#78350f" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                    <line x1="-7.5" y1="11" x2="-9.5" y2="9.5" stroke="#1e293b" stroke-width="1.1" stroke-linecap="round"/>

                    <ellipse cx="5" cy="13" rx="2.4" ry="3.2" fill="#1e293b"/>
                    <circle cx="5.8" cy="11.8" r="1.1" fill="#ffffff"/>
                    <circle cx="6.5" cy="13" r="0.5" fill="#ffffff"/>
                    <path d="M 2.2,9 Q 4.8,6.5 7.5,9" stroke="#78350f" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                    <line x1="7.5" y1="11" x2="9.5" y2="9.5" stroke="#1e293b" stroke-width="1.1" stroke-linecap="round"/>

                    <!-- Sweet Feminine Smile -->
                    <path d="M -3.5,22 Q 0,26 3.5,22" stroke="#be123c" stroke-width="1.8" fill="none" stroke-linecap="round"/>

                    <!-- Luxurious Wavy Chestnut Hair Flowing Softly Around Face -->
                    <path d="M -14,14 C -18,2 -14,-10 0,-10 C 14,-10 18,2 14,14 C 18,24 16,38 12,42 C 10,34 11,26 8,18 C 3,-2 -3,-2 -8,18 C -11,26 -10,34 -12,42 C -16,38 -18,24 -14,14 Z" fill="url(#momHairGrad)"/>
                </g>
            </g>
        </g>

        <!-- ANNA (8-Year-Old Girl Standing at Open Door Joyfully Throwing Food Onto Snow) -->
        <g transform="translate(112, 220)">
            <!-- Anna's Ground Shadow on Doorway Threshold -->
            <ellipse cx="0" cy="0" rx="18" ry="4.5" fill="rgba(0, 0, 0, 0.2)"/>

            <g transform="translate(0, -85)">
                <!-- Cozy Warm Winter Leggings & Boots -->
                <rect x="-8" y="58" width="7" height="24" rx="2" fill="#1e293b"/>
                <rect x="2" y="58" width="7" height="24" rx="2" fill="#1e293b"/>
                <!-- Cute Chestnut Winter Boots with Cream Sherpa Trim -->
                <path d="M -10,75 L 0,75 L 1,84 L -10,84 Z" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>
                <rect x="-11,72" width="11" height="3.5" rx="1.5" fill="#fef3c7"/>
                <path d="M 0,75 L 10,75 L 11,84 L 0,84 Z" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>
                <rect x="-1,72" width="11" height="3.5" rx="1.5" fill="#fef3c7"/>

                <!-- Subtle Living Sway for Anna -->
                <g class="char-sway-anna">
                    <!-- Vibrant Coral-Red Cozy Winter Jacket with Fluffy White Fleece Trim -->
                    <path d="M -15,26 L 15,26 L 18,60 L -18,60 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                    <line x1="0" y1="26" x2="0" y2="60" stroke="#be123c" stroke-width="1.8"/>
                    <!-- Fluffy Fleece Collar & Hem -->
                    <rect x="-16" y="24" width="32" height="5" rx="2.5" fill="#ffffff" stroke="#f1f5f9" stroke-width="1"/>
                    <rect x="-20" y="58" width="40" height="5.5" rx="2.8" fill="#ffffff" stroke="#f1f5f9" stroke-width="1"/>

                    <!-- Left Arm: Holding Bowl of Chestnuts Securely -->
                    <g>
                        <path d="M -12,28 L -22,40 L -16,46 L -6,34 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.5"/>
                        <ellipse cx="-20" cy="42" rx="4.5" ry="3.5" fill="#fed7aa"/>
                        <!-- Wooden Bowl with Chestnuts Inside -->
                        <path d="M -26,38 Q -16,50 -6,38 Z" fill="#a16207" stroke="#713f12" stroke-width="1.2"/>
                        <circle cx="-19" cy="38" r="2.8" fill="#78350f"/>
                        <circle cx="-13" cy="39" r="2.8" fill="#78350f"/>
                    </g>

                    <!-- Right Arm: Active Animated Throwing Motion (Dipping into bowl & casting forward) -->
                    <g transform="translate(12, 28)">
                        <g class="anna-arm-throw" style="transform-origin: 0px 0px;">
                            <path d="M 0,0 L 16,8 L 12,14 L -4,6 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.6"/>
                            <ellipse cx="18" cy="10" rx="4.5" ry="3.5" fill="#fed7aa"/>
                            <!-- Chestnut held in hand during throw anticipation -->
                            <ellipse cx="18" cy="9" rx="3.5" ry="2.6" fill="#78350f" stroke="#451a03" stroke-width="0.8"/>
                        </g>
                    </g>

                    <!-- Anna's Cute Face & Bouncy Brown Pigtails -->
                    <!-- Face -->
                    <circle cx="0" cy="11" r="12.5" fill="#fed7aa" stroke="#e0a96d" stroke-width="1.2"/>
                    <!-- Rosy Cheek Circles -->
                    <circle cx="-6" cy="14" r="3.2" fill="rgba(244, 63, 94, 0.4)"/>
                    <circle cx="6" cy="14" r="3.2" fill="rgba(244, 63, 94, 0.4)"/>
                    <!-- Big Expressive Brown Eyes with Double White Pupil Highlights -->
                    <ellipse cx="-4.5" cy="9.5" rx="2.5" ry="3.4" fill="#1e293b"/>
                    <circle cx="-3.6" cy="8.2" r="1.1" fill="#ffffff"/>
                    <circle cx="-2.8" cy="9.5" r="0.5" fill="#ffffff"/>
                    <path d="M -7,6 Q -4.5,3.5 -2,6" stroke="#78350f" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                    <line x1="-7" y1="8" x2="-8.8" y2="6.8" stroke="#1e293b" stroke-width="1" stroke-linecap="round"/>

                    <ellipse cx="4.5" cy="9.5" rx="2.5" ry="3.4" fill="#1e293b"/>
                    <circle cx="5.4" cy="8.2" r="1.1" fill="#ffffff"/>
                    <circle cx="6.2" cy="9.5" r="0.5" fill="#ffffff"/>
                    <path d="M 2,6 Q 4.5,3.5 7,6" stroke="#78350f" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                    <line x1="7" y1="8" x2="8.8" y2="6.8" stroke="#1e293b" stroke-width="1" stroke-linecap="round"/>

                    <!-- Joyful Open Smile -->
                    <path d="M -3,16 Q 0,21 3,16" stroke="#be123c" stroke-width="1.8" fill="none" stroke-linecap="round"/>

                    <!-- Chocolate Brown Pigtails Tied with Bright Red Ribbon Bows -->
                    <path d="M -12,8 Q -20,15 -15,24 Q -11,20 -9,13 Z" fill="#78350f" stroke="#451a03" stroke-width="1"/>
                    <circle cx="-11" cy="10" r="2.8" fill="#f43f5e"/>
                    <path d="M 12,8 Q 20,15 15,24 Q 11,20 9,13 Z" fill="#78350f" stroke="#451a03" stroke-width="1"/>
                    <circle cx="11" cy="10" r="2.8" fill="#f43f5e"/>

                    <!-- Front Hair Bangs -->
                    <path d="M -10,3 Q 0,-3 10,3 Q 0,1 -10,3 Z" fill="#78350f"/>
                </g>
            </g>
        </g>
    </svg>`;
}



const PRACTISE_WINTER_UNIT_DATA =             {
                id: 'unit_01_hungry_squirrels',
                title: '🐿️ Unit 01: Hungry Squirrels',
                levelBadge: '🟡 Intermediate (CEFR A2)',
                targetAge: 'Ages 8–10',
                skillFocus: 'Problem & Solution Flowchart + In-Text Pronoun Tracking',
                flowchartTitle: 'Story Flowchart: How Did Anna and Mom Solve the Problem?',
                flowchartDesc: 'Follow the 4-step sequence from the winter problem to the happy solution:',
                sceneType: 'winter_garden',
                sceneBadge: 'Winter Garden • Anna & Mom',
                warmup: {
                    question: 'Look outside! Have you ever seen animals searching for food in the cold winter?',
                    hints: ['What do birds or squirrels eat when the ground has snow?', 'How can people be kind to animals in winter?']
                },
                vocab: [
                    {
                        word: 'piece',
                        badgeNum: '①',
                        phonetic: '/piːs/',
                        def: 'A small part or bit of something bigger.',
                        sentence: 'Anna gave a small piece of bread to the squirrel.',
                        svgType: 'piece'
                    },
                    {
                        word: 'squirrel',
                        badgeNum: '②',
                        phonetic: '/ˈskwɜː.rəl/',
                        def: 'A small, furry animal with a bushy tail that climbs trees.',
                        sentence: 'The brown squirrel ran quickly across the snowy yard.',
                        svgType: 'squirrel'
                    },
                    {
                        word: 'chestnut',
                        badgeNum: '③',
                        phonetic: '/ˈtʃes.nʌt/',
                        def: 'A smooth brown nut that grows on trees and can be eaten.',
                        sentence: 'Mother gave Anna warm chestnuts to share with the animals.',
                        svgType: 'chestnut'
                    },
                    {
                        word: 'hungry',
                        badgeNum: '④',
                        phonetic: '/ˈhʌŋ.ɡri/',
                        def: 'Wanting or needing food to eat.',
                        sentence: 'The squirrels were hungry because deep snow covered the grass.',
                        svgType: 'hungry'
                    },
                    {
                        word: 'kind',
                        badgeNum: '⑤',
                        phonetic: '/kaɪnd/',
                        def: 'Caring, friendly, and generous to people and animals.',
                        sentence: 'Anna was kind when she threw food onto the snow.',
                        svgType: 'kind'
                    }
                ],
                prediction: {
                    prompt: "Look at Anna looking out the frosty window. What do you predict Anna and her mother will do for the squirrels?",
                    options: [
                        { id: 'opt1', text: '① Chase them away into the woods.', correct: false, feedback: 'Not quite! Look at Anna and Mom smiling kindly.' },
                        { id: 'opt2', text: '② Throw them bread pieces and chestnuts.', correct: true, feedback: 'Spot on! Anna and Mom share food to help them!' },
                        { id: 'opt3', text: '③ Catch them and bring them inside as pets.', correct: false, feedback: 'Squirrels are wild animals; Anna leaves food outdoors.' }
                    ]
                },
                story: {
                    title: 'Hungry Squirrels',
                    paragraphs: [
                        {
                            num: 1,
                            sentences: [
                                { id: 's1', text: 'It was a cold winter morning.' },
                                { id: 's2', text: 'Anna looked out the window.' },
                                { id: 's3', text: 'She saw snow everywhere.' }
                            ]
                        },
                        {
                            num: 2,
                            sentences: [
                                { id: 's4', text: 'Under a big tree, three squirrels were running around.' },
                                { id: 's5', text: 'They looked cold and hungry.' },
                                { 
                                    id: 's6', 
                                    text: 'Anna said to herself, "There is no food under the snow."',
                                    hasPronounHotspot: true,
                                    pronoun: 'herself',
                                    antecedent: 'Anna',
                                    question: 'Who does the word "herself" refer back to?',
                                    choices: ['Anna', 'Her mother', 'The squirrels'],
                                    correctIndex: 0,
                                    tip: '"Herself" is a reflexive pronoun referring to the female speaker, Anna.'
                                }
                            ]
                        },
                        {
                            num: 3,
                            sentences: [
                                { id: 's7', text: 'Anna told her mother about the hungry squirrels.' },
                                { id: 's8', text: 'Her mother smiled.' },
                                { id: 's9', text: 'She gave Anna some chestnuts and pieces of bread.' },
                                { 
                                    id: 's10', 
                                    text: '"Let\'s throw them on the snow," her mother said.',
                                    hasPronounHotspot: true,
                                    pronoun: 'them',
                                    antecedent: 'chestnuts and pieces of bread',
                                    question: 'What does the word "them" refer to in this sentence?',
                                    choices: ['The deep snow', 'Chestnuts and pieces of bread', 'The squirrels'],
                                    correctIndex: 1,
                                    tip: '"Them" is a plural object pronoun replacing the food (chestnuts & bread).'
                                }
                            ]
                        },
                        {
                            num: 4,
                            sentences: [
                                { id: 's11', text: 'Anna opened the door and threw the food onto the snow.' },
                                { id: 's12', text: 'The squirrels ran to the food quickly.' },
                                { id: 's13', text: 'They ate the chestnuts happily.' },
                                { id: 's14', text: 'Anna was very glad that she was kind to the animals.' }
                            ]
                        }
                    ]
                },
                flowchart: [
                    {
                        step: 1,
                        label: '❄️ 1. The Problem',
                        detail: 'It is a freezing winter morning and deep snow covers the ground. Three hungry squirrels have no food to eat.',
                        badge: 'Step 1: Conflict'
                    },
                    {
                        step: 2,
                        label: '👧 2. The Discovery',
                        detail: 'Anna spots the shivering squirrels from her bedroom window and immediately tells her mother.',
                        badge: 'Step 2: Noticing'
                    },
                    {
                        step: 3,
                        label: '🌰 3. The Action',
                        detail: 'Mother smiles and gives Anna pieces of bread and chestnuts to toss out into the snowy yard.',
                        badge: 'Step 3: Action'
                    },
                    {
                        step: 4,
                        label: '🌟 4. The Solution',
                        detail: 'The squirrels scurry over and eat the chestnuts happily. Anna feels warm and glad that she was kind.',
                        badge: 'Step 4: Resolution'
                    }
                ],
                comprehension: [
                    {
                        badgeNum: '①',
                        question: 'Why did the squirrels come close to Anna’s house in the snow?',
                        options: [
                            'Because deep snow covered all their food under the trees.',
                            'Because they wanted to play a winter game with Anna.',
                            'Because they were looking for a warm coat to wear.'
                        ],
                        correctIndex: 0,
                        explanation: 'Snow covered everything outside, leaving no natural food for them to forage.'
                    },
                    {
                        badgeNum: '②',
                        question: 'What two kinds of food did Anna’s mother give her?',
                        options: [
                            'Apples and carrot sticks.',
                            'Chestnuts and pieces of bread.',
                            'Warm soup and sweet cookies.'
                        ],
                        correctIndex: 1,
                        explanation: 'Mother gave her chestnuts and bread pieces to scatter on the snow.'
                    },
                    {
                        badgeNum: '③',
                        question: 'How did Anna feel at the very end of the story?',
                        options: [
                            'Cold and tired from standing near the open door.',
                            'Very glad and proud that she was kind to the animals.',
                            'Worried that the squirrels would eat all the bread.'
                        ],
                        correctIndex: 1,
                        explanation: 'Anna was very glad that she helped the hungry squirrels survive the cold morning.'
                    }
                ],
                grammarDoctor: [
                    {
                        id: 'bug1',
                        badgeNum: '①',
                        brokenText: 'Under a big tree, three squirrels was running around.',
                        bugWord: 'was',
                        choices: [
                            { text: 'was', isCorrect: false },
                            { text: 'were', isCorrect: true },
                            { text: 'is', isCorrect: false }
                        ],
                        rule: 'Subject-Verb Agreement: Plural subjects ("three squirrels") require "were" in the past tense, not "was".'
                    },
                    {
                        id: 'bug2',
                        badgeNum: '②',
                        brokenText: 'Anna throwed the food onto the deep cold snow.',
                        bugWord: 'throwed',
                        choices: [
                            { text: 'throwed', isCorrect: false },
                            { text: 'threw', isCorrect: true },
                            { text: 'throwing', isCorrect: false }
                        ],
                        rule: 'Irregular Past Tense: The verb "throw" is irregular. Its past tense form is "threw", never "throwed".'
                    },
                    {
                        id: 'bug3',
                        badgeNum: '③',
                        brokenText: 'Anna said to himself, "There is no food under the snow."',
                        bugWord: 'himself',
                        choices: [
                            { text: 'himself', isCorrect: false },
                            { text: 'herself', isCorrect: true },
                            { text: 'themselves', isCorrect: false }
                        ],
                        rule: 'Reflexive Pronouns: Anna is a female subject, so she reflects to "herself".'
                    },
                    {
                        id: 'bug4',
                        badgeNum: '④',
                        brokenText: 'The hungry squirrels runned to the food quickly.',
                        bugWord: 'runned',
                        choices: [
                            { text: 'runned', isCorrect: false },
                            { text: 'ran', isCorrect: true },
                            { text: 'running', isCorrect: false }
                        ],
                        rule: 'Irregular Past Tense: The verb "run" is irregular. Its past tense form is "ran", not "runned".'
                    }
                ],
                cloze: {
                    title: 'Story Summary Cloze Challenge',
                    instruction: 'Select the missing target words to complete the summary of Hungry Squirrels:',
                    items: [
                        { prefix: 'On a ', target: 'cold', suffix: ' winter morning, Anna looked out the window.', options: ['cold', 'hot', 'rainy'] },
                        { prefix: 'She saw three hungry ', target: 'squirrels', suffix: ' looking for food.', options: ['squirrels', 'bears', 'puppies'] },
                        { prefix: 'Mom gave Anna bread and sweet ', target: 'chestnuts', suffix: ' to help them.', options: ['chestnuts', 'candies', 'leaves'] },
                        { prefix: 'Anna opened the door and ', target: 'threw', suffix: ' the food onto the snow.', options: ['threw', 'hid', 'painted'] },
                        { prefix: 'The animals ate happily, and Anna was glad to be ', target: 'kind', suffix: ' to them.', options: ['kind', 'loud', 'angry'] }
                    ]
                },
                speaking: {
                    title: 'Zoom Speaking & Kindness Discussion',
                    prompt: 'What kinds of animals do you see near your home in the winter, and how can we help them?',
                    starters: [
                        '① "In my city / neighborhood, in winter I usually see..."',
                        '② "If birds or squirrels are cold and hungry, we can..."',
                        '③ "I think being kind to animals is important because..."'
                    ]
                }
            };

// Register scene cartridge & story unit
if (typeof registerPractiseScene === 'function') {
    registerPractiseScene('winter_garden', getPractiseWinterWindowSceneSVG);
    registerPractiseScene('winter_window', getPractiseWinterWindowSceneSVG);
}
if (typeof registerPractiseUnit === 'function') {
    registerPractiseUnit('intermediate', PRACTISE_WINTER_UNIT_DATA);
}
if (typeof window !== 'undefined') {
    window.getPractiseWinterWindowSceneSVG = getPractiseWinterWindowSceneSVG;
    window.PRACTISE_WINTER_UNIT_DATA = PRACTISE_WINTER_UNIT_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        level: 'intermediate',
        unitData: PRACTISE_WINTER_UNIT_DATA,
        getSceneSVG: getPractiseWinterWindowSceneSVG
    };
}
