# Kids Zoom Teacher App — AI Coding & Graphics Instructions

This file is automatically loaded by Antigravity for all sessions in this workspace. Follow these architectural invariants and graphic standards when creating or modifying features.

---

## 1. Core Architecture Invariants
- **100% Client-Side Web Standards:** The entire application runs natively in the browser using HTML5, CSS3, and ES6 JavaScript. No server runtime, no Python backend, no npm build step.
- **Zero Binary Assets:** Never introduce external `.png`, `.jpg`, or `.mp3` files.
  - All visual graphics are mathematical **Scalable Vector Graphics (SVG)** procedurally generated in `js/story-engine.js` and `js/graphics.js`.
  - All audio sound effects (zaps, hums, chimes, victory jingles) are synthesized via the browser's native **Web Audio API** in `js/audio.js`.
- **Modular File Directory Map (`js/`):**
  - `js/data.js`: Phonics, vocabulary, ESL readings, and story dictionary data.
  - `js/graphics.js`: Standalone 2D SVG vector icons (`getSVGGraphic`).
  - `js/audio.js`: Web Audio API & Speech Synthesis engine (`AudioEngine`).
  - `js/state.js`: Application state & LocalStorage persistence (`appState`, `saveState`).
  - `js/router.js`: View router & modal management (`switchView`, `openModal`).
  - `js/junior-modes.js`: Junior learning controllers (letters, numbers, shapes, colors).
  - `js/senior-reading.js`: Senior Reading & Comprehension Lab engine.
  - `js/senior-vocab.js`: Senior Advanced Vocabulary, Spelling Bee, & Word Math engine.
  - `js/senior-stem.js`: Senior STEM interactive science diagrams & experiments.
  - `js/story-engine.js`: Senior Comic Creator, catalyst props, sci-fi scene SVGs, & presentation reel.
  - `js/quiz-games.js`: Letter finding game & quiz engine.
  - `js/teacher-tools.js`: Zoom presentation HUD, scoreboards, lesson planner, settings, & particle canvas.
  - `js/app.js`: Main startup bootloader & view initialization.

---

## 2. Universal Spatial & Coordinate Invariants (SVG `viewBox="0 0 400 220"`)

| Dimension / Anchor | Coordinate | Rule |
| :--- | :--- | :--- |
| **Ground Baseline** | **$Y = 175$** | **STRICT INVARIANT.** All characters, NPCs, shadow ellipses, and pedestal contact points MUST firmly rest on $Y = 175$. |
| **Headroom Clearance** | **$Y \ge 14$** | No elements, antennas, or frames may cross above $Y = 14$. Use ceiling bulkheads from $Y = 0$ to $14$ to prevent panel clipping. |
| **Hero Start Position** | **$X = 100, Y = 175$** | Heroes begin walking from $X = 100$. Walk animations must preserve 100% opacity throughout. |
| **Pedestal Anchor** | **$X = 255, Y = 145$** | Scientific pedestal sits at $X = 255\sim305$ on the floor ($Y = 145\sim175$). Prop sits at $X = 280, Y = 145$. |
| **Panel SVG Box Ratio** | **400 × 220** | Rendered inside `.panel-svg-box` (`height: 155px; overflow: hidden;`). Maintain this exact aspect ratio. |

---

## 3. The "Nested Transform" Animation Rule (CRITICAL BUG PREVENTION)
In SVG, CSS keyframe animations with `transform: ...` **will overwrite and erase** XML presentation attributes like `transform="translate(X, Y)"`, snapping elements to $(0,0)$ at the top-left of the canvas.

**Always nest animated SVG elements into two separate groups:**
```html
<!-- 1. Outer Group: Handles STATIC world coordinate placement -->
<g transform="translate(250, 62)">
    <!-- 2. Inner Group: Handles PURE RELATIVE CSS animation only -->
    <g class="story-anim-satellite-float">
        <!-- Visual Shapes Centered Around (0, 0) -->
    </g>
</g>
```

---

## 4. The 5-Layer Visual Depth Standard for Scenes
Every comic setting background must follow this 5-layer hierarchy:
1. **Layer 1: Atmospheric Backing** — Deep space voids (`#030712`), cosmic nebulae, starry gradients, or distant horizons. Never use flat single-tone colors.
2. **Layer 2: Architectural / Horizon Framing** — Ceiling bulkheads with recessed lights ($Y = 0\sim14$), window frames with corner bevels and glass sheen lines, or crater ridges.
3. **Layer 3: Midground Focal Narrative Hardware** — Recognizable storytelling equipment (e.g., lunar rover with headlights, live oscilloscope sine waveforms, quartz plasma cylinders, communication turret dishes).
4. **Layer 4: Ground Baseline Floor ($Y = 175$)** — Heavy deck plates with high-visibility hazard warning stripes (`stroke="#facc15" stroke-dasharray="14,10"`), floor neon conduits, and embedded runway LEDs.
5. **Layer 5: Dynamic Ambient Lighting & FX** — Soft `drop-shadow` blooms on glowing nodes, blinking sequence LEDs (`story-anim-led-1/2/3`), and breathing radial gradients.

---

## 5. Character Style Language
- **Expressive Faces Inside Helmets/Visors:** Astronauts and tech heroes (Dr. Eve, Cadet Leo, Commander Vance) must always have warm, expressive faces rendered inside anti-glare visors:
  - Expressive eyes with pupil highlights.
  - Friendly communicative eyebrows and open warm smiles.
  - High-tech communications headset and audio mic boom.
  - Visor anti-glare sheen arc (`stroke="rgba(255,255,255,0.7)"`).
- **Contact Shadows:** Every grounded hero must have an elliptical ground shadow on the floor at $Y = 175$ (`fill="rgba(0,0,0,0.3)"`).

---

## 6. Interactive Element Guidelines
- Interactive SVG elements (e.g., clickable reactor) must:
  - Use `style="cursor: pointer;"` and clear indicator pills (`⚡ CLICK REACTOR`).
  - Stop event propagation (`e.stopPropagation()`) on click so panel walk replays are not inadvertently triggered.
  - Trigger audio feedback via `audioEngine` and visual state classes (e.g., `.reactor-surging`).

---

## 7. Execution Efficiency & Workflow Standards
- **Direct Surgical Edits for Minor Tweaks:** 
  For simple changes (icon swaps, button labels, CSS fixes, text tweaks, or single-value adjustments), edit the file directly and verify syntax with `node -c`. Do NOT create external HTML testbenches, take headless browser screenshots, or explore unprompted multi-variant options.
- **Visual Benches Only on Request:**
  Only author separate HTML preview files and capture headless Chrome screenshots when creating brand-new full scenes from scratch or when the user explicitly asks to compare visual design options.
- **Strict Scope Control:**
  Do not introduce unprompted refactoring, extra documentation updates, or secondary asset changes beyond what was requested.
- **Maintain LF Line Endings:**
  Always preserve `LF` line endings on Windows to prevent Git diff churn across large files.

---

## 8. Level 3 Advanced Marine Universe ("The Lost Sanctuary of Twilight Bay", `universe-storyboard1-advanced.js`)

### Character Standards & Character-Scoped Props (24 Standalone Props)
- **Maya the Oceanographer (Lead Researcher):**
  - High-volume flowing brunette ponytail with ambient subsea current physics (`.story-anim-hair-float`).
  - Winged fluttery eyelashes, warm expressive brown eyes with double white pupil highlights, rosy cheeks, confident warm smile.
  - Clear rounded diving mask with anti-reflective ocean sheen and cyan rim.
  - Feminine tailored wetsuit in midnight navy, magenta, and cyan with twin flexible swimming flippers.
  - **6 Dedicated Props:** Underwater UV Scanner (`uv_matrix`), Glowing Coral Jar (`specimen_capsule`), Acoustic Sonar Pinger (`sonar_beacon`), Marine Sediment Corer (`sample_corer`), Waterproof Digital Slate (`ocean_slate`), Bathymetric Laser Gauge (`laser_rangefinder`).
- **Shelly the Sea Turtle (Sanctuary Guide):**
  - Hydrodynamic carapace with bioluminescent emerald hexagonal scutes.
  - Large expressive eyes, curved flippers in rhythmic swimming stroke (`.story-anim-turtle-paddle`).
  - **6 Dedicated Props:** Sunken Galleon Coin (`ancient_coin`), Bioluminescent Pearl (`glowing_pearl`), Spotted Cowrie Shell (`polished_shell`), Abyssal Quartz Prism (`trench_crystal`), Woven Kelp Float Ring (`kelp_ring`), Carved Sea Talisman (`driftwood_relic`).
- **Dr. Tide (Marine Ecologist):**
  - High-tech diving suit, dual oxygen cylinders, chest telemetry console, full-face visor.
  - **6 Dedicated Props:** Deep Thermal Sensor (`thermal_probe`), Ocean Refractometer (`salinity_meter`), Acidity Test Chamber (`ph_analyzer`), Current Drifter Sphere (`current_drifter`), Plankton Sample Cone (`plankton_net`), Acoustic Bedrock Disc (`sub_bottom_profiler`).
- **Kai the Robotics Diver (Submersible Tech):**
  - Streamlined titanium diver rig, dual water thrusters, wrist sonar communicator.
  - **6 Dedicated Props:** Handheld Sea Scooter (`hydro_thruster`), Pneumatic Claw Grapple (`magnetic_grapple`), Benthic Crawler Drone (`crawler_drone`), Ultrasonic Rock Chisel (`pneumatic_chisel`), Titanium Cable Spool (`cable_winch`), Emergency Marker Buoy (`beacon_buoy`).

### The 1:1 Exclusive Signature Marine Landmarks
1. **Azure Coral Reef (`azure_reef`):** The Bioluminescent Brain Coral Arch (`#coral_arch`) — glowing magenta/cyan cavern archway.
2. **Deep Twilight Trench (`twilight_trench`):** The Hydrothermal Chimney Stack (`#vent_stack`) — basalt volcanic stack with mineral veins.
3. **Giant Kelp Sanctuary (`kelp_forest`):** The Ancient Stone Mooring Anchor (`#stone_anchor`) — carved stone anchor wrapped in kelp ribbons.
4. **Sunken Research Station (`sunken_dome`):** The Reinforced Geodesic Airlock Hatch (`#airlock_hatch`) — heavy titanium hatch with yellow wheel.

### The 4 Marine Blockbuster Mystery Twists
1. `thermal_vent` ("Hydrothermal Vent Surge!"): Boiling magma fissures and billowing smoker plumes $\rightarrow$ stabilized geothermal vent.
2. `bioluminescent_swarm` ("Bioluminescent Swarm!"): Floating purple/cyan glowing jellyfish swarm $\rightarrow$ serene escort archway.
3. `abyssal_vortex` ("Abyssal Current Vortex!"): Continuously rotating whirlpool streamlines $\rightarrow$ laminar ocean currents.
4. `survey_drone` ("Uncharted Survey Drone!"): High-tech yellow submarine explorer drone sweeping amber searchlight $\rightarrow$ re-coded friendly research partner.

---

## 9. Presentation Reel Output Window Standards (`#modal-story-reel`)
- **Widescreen Modal Geometry:**
  - Enforce `max-width: 1180px; width: 94vw; max-height: 94vh;`.
  - Radiant ocean glow (`box-shadow: 0 25px 60px rgba(0,0,0,0.45), 0 0 30px rgba(56, 189, 248, 0.25)`).
- **Responsive 2-Column Desktop Grid ($\ge 860\text{px}$):**
  - **Left Column:** High-contrast comic SVG stage at exact native `aspect-ratio: 400 / 220` (zero black letterboxing).
  - **Right Column:** Narration banner on top + Dual character dialogue cards below.
- **Permanently Pinned Navigation Footer:**
  - `.story-reel-navigation-bar` MUST remain outside `.story-reel-modal-body` as a dedicated modal footer (`flex-shrink: 0;`).
  - Navigation controls (`Prev`, `Counter`, `Read`, `Next`, `Play All`) must NEVER be clipped or pushed outside the viewport on 720p/768p/800p Zoom screens.

---

## 10. Senior Reading Skills Practise & Storybook Graphic Standards (Ages 8–10)

This standard governs all interactive vector storybooks, living stage canvases, and reader modules under the "Reading Skills Practise" studio.

### 10.1 Story Narrative Fidelity Invariant (STRICT RULE)
- **Zero Hallucinated Scenarios:** Vector artwork must match the authentic textbook narrative 1:1. Never improvise settings that contradict the text.
  - If characters are inside their home tossing food out the doorway, they must NEVER be drawn walking outdoors in the snow.
  - If the story states *"Under a big tree, three squirrels were running around"*, the scene must feature that exact majestic tree and running squirrels, NOT artificial bird boxes or generic feeders.
  - If the story states *"They opened the door and threw the food on the snow. The hungry squirrels ran to the food. One ate the bread. The others ate the chestnuts"*, the scene must explicitly depict: the open doorway, food dropping on the snow, squirrels scampering to the food, one eating bread, and others with chestnuts.

### 10.2 Character Design Invariant (Adult Females & Youth Leads)
- **Adult Female Characters (Mothers, Teachers):**
  - Must look unmistakably like an attractive, warm, feminine adult woman—never elderly, grandmotherly, or ambiguous.
  - Facial structure: Soft oval jawline, almond eyes with dual white pupil highlights and delicate upward eyelashes, cheerful rosy cheek blush, warm loving smile.
  - Hair: High-volume styled flowing hair (e.g. wavy chestnut with linear gradient depth) cascading past shoulders.
  - Attire: Contemporary feminine clothing (e.g., cozy heather-rose knit cardigan coat, V-neck knit inner top, tailored slacks, stylish boots).
- **Youth Lead Characters (e.g., Anna, 8yo):**
  - Bouncy chocolate-brown pigtails tied with bright ribbon bows, large expressive communicative eyes, rosy cheeks, joyful smile, and age-appropriate winter jacket with fluffy sherpa fleece trim.
  - Must hold relevant story props (e.g. wooden bowl filled with chestnuts).

### 10.3 Quadruped & Animal Step Movement Invariant
- **Multi-Step Bounding Run Cycles:**
  - Animals described as running to food MUST actively gallop/scamper across the ground in progressive bounding steps (e.g., 4-step scamper: crouch & leap $\rightarrow$ airborne stretch $\rightarrow$ touchdown $\rightarrow$ slide to stop at food).
  - Body rig must squash upon crouch and stretch in mid-air.
  - Front paws and hind legs must articulate with alternating strides.
  - Fluffy tails must stream aerodynamically behind the body during sprints.
  - Synchronized ground contact shadow must follow along the ground baseline ($Y = 220$), shrinking when airborne and expanding upon landing.
- **Tree Climbing Movements:**
  - Vertical climbing animals must climb vertically up the tree trunk in distinct paw-over-paw climbing steps with claws grasping bark, not vibrating in place.
- **Attached Tail Guarantee:**
  - All animal tail paths MUST originate at $(0, 0)$ inside a dedicated hip group with `transform-origin: 0px 0px;`. Keyframe rotations must NEVER detach the tail from the body.

### 10.4 Prop & Ballistics Trajectory Invariant (Never Vanish in Mid-Air!)
- **Full Parabolic Arc to Ground:**
  - Any prop, food, or item thrown/dropped MUST travel along a complete ballistic parabola from the character's hand down to the exact ground baseline.
  - Must hit the ground, bounce gently, and settle on the floor.
  - **CRITICAL PROHIBITION:** Thrown objects MUST NEVER fade out or vanish in mid-air (`opacity: 0` before landing is strictly forbidden). Food must visibly hit the ground and stay resting on the floor.
  - Include subtle ground impact dust/snow puff particles when items strike the baseline.
  - Maintain permanent scattered props on the ground baseline to reinforce the ongoing story action.

### 10.5 Living Scene Gesture Continuity (No One-Shot Freezing)
- **Continuous Kinetic Cycles:**
  - Living scene character gestures (throwing food, waving, pouring, reaching) must be authored as **infinite, rhythmic loops** (e.g., 2.5s–3.5s period).
  - Must include natural anticipation (drawing back), forward swing, release flick, and follow-through.
  - **PROHIBITION:** NEVER reuse one-shot walk classes with `animation-fill-mode: forwards` (which freeze permanently after 5 seconds). Use dedicated infinite looping keyframes.
  - Subtle breathing/weight shift (`.char-sway`) must be applied to character torsos so they never appear as rigid cardboard statues.

### 10.6 Narration Voice Synchronization Invariant
- **Female Teacher Voice Default:**
  - All speech synthesis in Reading Practise must route through `audioEngine.speak(...)`.
  - Must automatically synchronize with `appState.settings.speechVoice` (dashboard teacher voice setting).
  - If unconfigured, it must automatically select a natural female English voice (`Zira`, `Jenny`, `Google US English`, `Samantha`, etc.) with pitch set to `1.25`, permanently preventing fallback to OS default male voices (such as Microsoft David).

### 10.7 Standard Living Stage Canvas Geometry (`viewBox="0 0 540 320"`)
| Spatial Plane / Feature | Coordinate Range | Usage |
| :--- | :--- | :--- |
| **Ground Baseline** | **$Y = 220$** | **Universal Ground Plane.** All characters, outdoor snow, resting food, animal paw touchdowns, and contact shadows must align to $Y = 220$. |
| **Interior Floor Threshold** | **$X = 20 \sim 135, Y = 220$** | Hardwood threshold inside the open house doorway. Characters stand at $X = 68$ (Mom) and $X = 112$ (Anna). |
| **Doorway Opening** | **$X = 25 \sim 125, Y = 45 \sim 220$** | Warm ambient indoor glow spilling out onto the yard. |
| **Yard & Feeding Area** | **$X = 135 \sim 400, Y = 180 \sim 320$** | Snowy garden yard where food lands and squirrels run. |
| **Focal Feature (Oak Tree)** | **$X = 430 \sim 480, Y = 50 \sim 240$** | Grand Oak Tree with climbing squirrel and heavy snow cushions. |
| **Headroom Clearance** | **$Y \ge 16$** | Top atmospheric margin; keep status pills and lanterns below top border. |

---

## 11. Modular Story Cartridge Invariants & Quality Standards

This standard governs all current and future modular story cartridges loaded into the Story Builder (e.g. `universe-storyboard1-beginner.js`, `universe-storyboard1-intermediate.js`, `universe-storyboard1-advanced.js`, and upcoming cartridges). Every cartridge authoring effort MUST strictly obey these architectural invariants to eliminate iterative regressions and ensure rapid, bug-free cartridge creation.

### 11.1 The Standalone Prop Invariant (Strict Wearable Prohibition)
- **STRICT PROHIBITION:** A prop must NEVER be an item a character naturally wears, attaches to their body, or uses as permanent everyday gear (e.g., collars, leashes, harnesses, belts, shoes, watches, hats, glasses, backpacks).
- **Physical Independence Requirement:** Every prop must be an independent, manipulable physical object that a character can hold, toss, launch, roll, lose, find stuck, and celebrate retrieving.
- **Why this invariant exists:** Wearable items generate broken narrative logic (e.g., a dog losing a collar it is actively wearing, or retrieving a leash that should be held by an owner), create visual inconsistencies across scenes, and confuse young learners.

### 11.2 Character-Scoped Prop Inventories (`CHARACTER_PROPS[charId]`)
- **Strict Archetype Inventories:** Every character archetype in a cartridge must define its own tailored prop array in `CHARACTER_PROPS[charId]`.
- **Exact Count: Exactly 6 Props:** Each character inventory MUST contain exactly 6 distinct props (providing rich pedagogical choice while fitting the 6-slot toolbar grid).
- **Zero Cross-Species Branching:** Props must be chosen exclusively for that character's physical abilities, personality, and species traits:
  - *Canines (e.g., Dell):* Canine-operable toys (ball, frisbee, chew stick, squeaky duck, flying disc, rope tug).
  - *Felines (e.g., Cleo):* Feline-operable toys (yarn ball, feather wand, toy mouse, jingle bell, catnip pouch, teaser ribbon).
  - *Youth Leads (e.g., Leo, Eve):* Age-appropriate recreational, creative, and athletic gear (kite, glider, scooter, camera, sketchbook, bubble wand, teddy bear, magnifying glass).
- **Dynamic Prop Context Swapping:** The UI engine must dynamically bind the prop toolbar to `universe.getPropsForCharacter(activeCharId)`. If the previously selected `propId` does not exist in the new hero's inventory, the engine must automatically fall back to `heroProps[0].id` to prevent `undefined` state.

### 11.3 Setting Exclusivity & 1:1 Signature Landmark Invariant
- **Single Signature Landmark per Setting:** Each setting within a cartridge must possess exactly ONE unique, unmistakably distinct signature landmark:
  - *Park:* Traditional wooden park bench (`#bench`).
  - *Backyard:* Gable-roofed canine doghouse (`#doghouse`).
  - *Creek:* Rustic arched stone/wood footbridge (`#bridge`).
- **Strict Prohibition on Narrative Leakage:** Panel 2 (the obstacle/stuck moment) and Panel 3 (the resolution/retrieval) narrative text and vector art must strictly bind to the active setting's signature landmark.
- **Dynamic Interpolation Requirement:** Story generators must never hardcode a specific setting's landmark into shared templates. All landmark references MUST be derived from the setting context using dynamic tokens:
  - `${lm.name}`: The readable landmark name (e.g., "wooden park bench", "red doghouse", "stone bridge").
  - `${lm.obstacle}`: The stuck state description (e.g., "wedged behind the bench slats", "tumbled behind the doghouse", "lodged beneath the bridge planks").
  - `${lm.retrieveHero}`: The retrieval action phrasing (e.g., "reached behind the park bench", "nudged past the doghouse wall", "scampered under the bridge").
- **Verification Rule:** A test runner must assert that if setting is `backyard`, the word "bench" or "bridge" NEVER appears in Panel 2 or Panel 3 text or SVG elements, and vice-versa.

### 11.4 Universal 3-Panel Narrative Structure & Resolution Arc
Every cartridge must follow a pedagogical 3-act narrative structure that rewards young learners:
- **Panel 1 — Setup & Kinetic Play:**
  - The hero is introduced in the chosen setting engaging in dynamic action with their kinetic prop.
  - Caption must state the hero's name, setting context, and the active kinetic prop.
- **Panel 2 — The Obstacle / Stuck Incident:**
  - An unexpected accident, strong breeze, or high bounce sends the prop into or behind the setting's signature landmark.
  - The prop gets visibly stuck; the hero reacts with surprise or determination.
- **Panel 3 — The Clever Retrieval & Celebration:**
  - The hero uses their unique species trait, agility, or clever tool to solve the problem and rescue the prop from the signature landmark.
  - The scene resolves with joyful celebration, victory radiance FX, and a cheerful closing caption.

### 11.5 Character Silhouette & Anatomical Fidelity Standards
All characters must be drawn with high-fidelity, recognizable anatomical blueprints. Never render ambiguous, blobby, or generic animals:
- **Adult Felines (e.g., Cleo the Silver-Grey Tabby):**
  - Athletic, arched feline spine with elevated muscular haunches.
  - Distinct forehead tabby "M" chevron markings, silver-grey coat (`#94a3b8` / `#64748b`) with charcoal stripes.
  - Striking almond-shaped emerald green slit eyes (`#10b981`), delicate whiskers, pink nose with white muzzle, white throat bib, and white front mittens.
  - Expressive curved tail with rhythmic cat tail animation (`.story-anim-cat-tail`).
- **Adult Canines (e.g., Dell the Golden Hound):**
  - Sturdy, athletic adult canine torso with deep chest and alert four-legged stance.
  - Warm amber-gold coat (`#d97706` / `#b45309`), floppy brown ears with soft pink inner shading, black nose with highlight, dark muzzle, and wagging feathered tail (`.story-anim-dog-wag`).
- **Human Youth Leads (e.g., Leo, Eve):**
  - Expressive facial features with dual white catchlight pupils, communicative eyebrows, and warm smiles.
  - Distinctive hairstyles (e.g., Eve's sunny golden-blonde pigtails with vibrant pink ribbon bows matching the hero panel 👧; Leo's blue adventure cap).
  - High-contrast, age-appropriate outfits and active postures.

### 11.6 Mandatory Automated Combinatorial Verification Harness
Before committing or merging any new cartridge, the developer or AI agent MUST run an automated test suite verifying every permutation:
- **Combinatorial Coverage:** The test harness must iterate over the full matrix:
  $$\text{Cartridge Matrix} = N_{\text{heroes}} \times N_{\text{settings}} \times 6\text{ props} \times 3\text{ panels}$$
  *(For a 4-hero, 3-setting cartridge, this equals exactly 72 story paths and 216 fully rendered SVG scenes).*
- **Automated Assertions Required:**
  1. **Caption Integrity:** Zero `undefined`, zero `null`, zero `NaN`, and zero raw unrendered template placeholders (`[object Object]`).
  2. **Prop Inclusion:** Panel 1 caption must contain the exact prop name.
  3. **Landmark Exclusivity:** Panels 2 & 3 must strictly contain the active setting's signature landmark and zero mentions of other settings' landmarks.
  4. **SVG Validity:** Every rendered SVG must contain valid opening `<svg` and closing `</svg>` tags, and must contain zero `undefined` or `NaN` coordinate strings.
- **Pre-Flight Harness Script:** A dedicated script (`tests/verify-cartridge.js`) must execute with zero exit code before marking any cartridge complete.

### 11.7 Environmental Mystery Twist Invariants (Two-Phase Continuity & Nested Transforms)
- **STRICT PROHIBITION on Competing Sprites & Characters:** Mystery Twists must NEVER introduce random stray animals, competing characters, or unrelated physical items (e.g., no "lost kittens" that clash with cat leads like Cleo; no random "cardboard boxes" that displace chosen props).
- **Two-Phase Narrative Continuity Requirement:**
  - **Panel 1 (Setup):** Remains visually pristine and calm (*"One sunny morning, Leo arrived at the park with his soccer ball."*).
  - **Panel 2 (The Conflict / Drama):** The prop gets stuck in the signature landmark, PLUS the weather twist strikes (*"Suddenly, a wild kick sent the ball into the bridge! Plus, a sudden sun shower / wind gust / butterfly flock hits!"*). Includes upper-corner purple badge pill.
  - **Panel 3 (The Resolution / Aftermath):** The hero retrieves their prop from the landmark, and the weather twist harmoniously resolves into the celebration (*"The rain cleared, leaving a brilliant rainbow shining overhead as Leo saved his ball!"*). Keeps victory scene badge-free for clean presentation.
- **Strict Nested Transform Rule on All Moving SVG Elements:**
  - To prevent browsers' CSS keyframe engines from obliterating XML `transform="translate(X, Y)"` and bunching elements into $(0,0)$ at the top corner, every moving twist particle (butterflies, leaves, fireflies) MUST be wrapped in two separate nested groups:
    ```html
    <!-- Outer Group locks static world position across the canvas -->
    <g transform="translate(X, Y)">
        <!-- Inner Group handles relative CSS floating/bobbing keyframe -->
        <g class="story-anim-butterfly-float">
            <!-- Innermost Group handles scaling, rotation, and wing flapping -->
            <g transform="scale(...) rotate(...)"> ... </g>
        </g>
    </g>
    ```
- **The 4 Canonical Beginner Weather Overlays:**
  1. `wind_gust`: Panel 2 (4 racing wind streamlines + 11 tumbling leaves across canvas) $\longrightarrow$ Panel 3 (wind calms to gentle breeze, colorful leaves carpet the meadow floor).
  2. `sun_shower`: Panel 2 (24 slanted sparkling raindrops + ground water ripples) $\longrightarrow$ Panel 3 (rain clears completely, full radiant 6-band sky rainbow shines over victory).
  3. `butterfly_swarm`: Panel 2 (11 large colorful butterflies fluttering across all screen quadrants) $\longrightarrow$ Panel 3 (11 butterflies gather in a celebratory halo around the victorious hero).
  4. `twilight_fireflies`: Panel 2 (soft purple dusk sky wash + 11 glowing fireflies dancing in trees and grass) $\longrightarrow$ Panel 3 (twilight meadow wash with soft fireflies forming a celebratory halo around the victorious hero; zero fake celestial discs or duplicate suns).
- **Celestial Invariant (Single Sun / Sky Cleanliness Rule):**
  - All background settings already have a permanent daytime sun. Twist overlays must NEVER render secondary celestial bodies (duplicate sunbursts, overlapping two-circle cutout moons, or giant floating star spheres) that clash or create bizarre "multiple suns/planets" in the sky.
  - All environmental particles (fireflies, butterflies, leaves, raindrops) must stay at natural tree, meadow, and character heights ($Y \ge 70$), keeping the sky clean and uncluttered.

---

### 11.8 Super-Vector Catalyst Props & Living Motion Graphics Standard

Every catalyst prop across all story cartridges (Beginner, Intermediate, Advanced, and future universes) MUST be authored as a **living, breathing vector kinetic artifact**. Static or flat geometric props are strictly prohibited.

#### 11.8.1 The "Zero Static Props" Invariant
- **Multi-Part Complexity:** Every prop must consist of multiple structured sub-assemblies (e.g., base dock, chassis/body, transparent containment or optics window, internal core, telemetry readouts, status indicator LEDs, and metallic/enamel sheen streaks).
- **Minimum 2 Kinetic Behaviors:** Every prop must combine at least TWO simultaneous, non-competing hardware-accelerated animations:
  1. *Primary State Motion:* Floating, bobbing, pulsing, or hovering (`story-anim-prop-hover-gentle`, `story-anim-prop-surge`, `story-anim-prop-bounce-active`, or `story-anim-prop-wobble-play`).
  2. *Secondary Internal Activity:* One or more micro-animations chosen from the kinetic categories:
     - **Energy & Plasma:** `story-anim-plasma-pulse` (surging core), `story-anim-crystal-glow` (pulsing node), `story-anim-led-1/2/3` (staggered status blinking).
     - **Rotational & Mechanical:** `story-anim-astrolabe-spin` (counter-rotating rings, spinning propellers, tape spools, gyros), `story-anim-wheel-spin` (spool drums, rover guide wheels).
     - **Optical & Telemetry:** `story-anim-laser-tracer` (sweeping scan lines, target crosshairs), `story-anim-radar-ping` / `story-anim-sound-wave-ping` (expanding concentric wavefronts), `story-anim-gleam-sheen` (metallic surface glints).
     - **Fluidic & Environmental:** `story-anim-feather-sway` (swaying ribbons, seaweed, cables), `story-anim-star-twinkle-fast` (effervescent micro-bubbles, sparkling motes, plankton), `story-anim-spark-1` (snapping electrical discharge arcs), `story-anim-data-stream-flow` (oscilloscope waveforms).

#### 11.8.2 The 4-Part Pedestal Stage Assembly (Universal Prop Wrapper)
Every prop rendered on the stage pedestal MUST be enclosed in the standardized 4-part living environment wrapper:
```javascript
function renderUniversePropSVG(propId, propX, propY, isClimax, settingId) {
    // ... propGraphic resolution ...

    const kineticPropClass = isClimax ? 'story-anim-prop-surge' : 'story-anim-prop-hover-gentle';

    return `
        <g transform="translate(${propX}, ${propY})">
            <!-- 1. Concentric Energy / Bioluminescent Aura Rings on Stage Pedestal -->
            <ellipse cx="0" cy="4" rx="28" ry="7" fill="none" stroke="#00f0ff" stroke-width="1.6" class="story-anim-catalyst-glow-ring"/>
            <ellipse cx="0" cy="4" rx="40" ry="10" fill="none" stroke="#38bdf8" stroke-width="1.0" class="story-anim-catalyst-glow-ring" style="animation-delay: 1.2s;"/>

            <!-- 2. Atmospheric Ambient Particle Motes (Sparkles / Bubbles) -->
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

            <!-- 3. Ground Baseline Contact Shadow -->
            <ellipse cx="0" cy="4" rx="22" ry="5.5" fill="rgba(2, 6, 23, 0.55)"/>

            <!-- 4. Dynamic Animated Catalyst Prop (Strict Nested Transform Pattern) -->
            <g class="${kineticPropClass}">
                ${propGraphic}
            </g>
        </g>
    `;
}
```

#### 11.8.3 Modern Vector UI Icons for Toolbar Pickers
- **Strict Prohibition on Archaic / Misleading Emojis:** When a prop concept represents modern or futuristic technology (e.g., an encoded memory chip, quantum key, or micro-transponder), NEVER settle for outdated Unicode emojis such as a 1980s 3.5" floppy disk (`💾`) or minidisc (`💽`).
- **Inline SVG Micro-Badge Standard:**
  The cartridge prop registry or rendering engine must support inline SVG vector icons (`viewBox="0 0 24 24"`) within the `icon` field or a dedicated `svgIcon` helper.
  - The SVG must be authored to scale within the `.asset-chip-btn .chip-icon` container (`width: 1.15em; height: 1.15em; vertical-align: -0.15em; fill: currentColor;`).
  - Example for modern silicon microchip:
    ```html
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="prop-svg-chip-icon">
        <rect x="5" y="5" width="14" height="14" rx="2.5" fill="rgba(14, 165, 233, 0.25)" stroke="#38bdf8"/>
        <rect x="8.5" y="8.5" width="7" height="7" rx="1" fill="#38bdf8" stroke="#0284c7"/>
        <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" stroke="#38bdf8"/>
        <circle cx="10" cy="10" r="0.75" fill="#ffffff"/>
    </svg>
    ```

#### 11.8.4 Complete 3-Tier Universe Cartridge Matrix (72 Super-Vector Props)
Every future cartridge must match the inventory depth of the 3 canonical universes:
- **Beginner (A1) — The Great Neighborhood Adventure (`universe-storyboard1-beginner.js`):**
  - Max (6 canine toys): red ball, bone, frisbee, duck, tug rope, biscuit.
  - Leo (6 youth recreational gear): kite, soccer ball, glider, yo-yo, magnifier, canteen.
  - Eve (6 creative play items): bubble wand, scooter, sketchbook, camera, teddy bear, flower basket.
  - Cleo (6 feline toys): yarn ball, feather wand, toy mouse, jingle bell, catnip fish, ribbon wand.
- **Intermediate (A2) — The Quantum Key & Orbital Outpost (`universe-storyboard1-intermediate.js`):**
  - Dr. Eve (6 quantum lab instruments): quantum key, crystal matrix core, tuning fork, prism spectrometer, holo-tablet, laser wand.
  - Cadet Leo (6 outpost explorer gear): silicon memory chip (modern IC), tricorder scanner, pulse beacon, plasma torch, gyro compass, magnetic tether.
  - Rover the Cyber Pup (6 robotic dog tools): cyber bone battery, radar ping disc, sub-sonic squeak beacon, titanium tug cable, treat pellet pouch, robotic sensor arm.
  - Commander Vance (6 station defense hardware): uplink turret, quantum battery core, flight data drive, tactical radio, airlock keycard, calibration disc.
- **Advanced (B1) — The Lost Sanctuary of Twilight Bay (`universe-storyboard1-advanced.js`):**
  - Eve the Oceanographer (6 marine exploration tools): UV scanner, coral jar, sonar beacon, sediment corer, digital slate, laser gauge.
  - Shelly the Sea Turtle (6 ocean relics): sunken galleon coin, bioluminescent pearl, spotted cowrie shell, abyssal quartz prism, woven kelp ring, carved sea talisman.
  - Dr. Tide (6 oceanographic instruments): thermal probe, salinity meter, pH test chamber, current drifter sphere, plankton net, sub-bottom profiler.
  - Kai the Robotics Diver (6 deep-sea engineering gear): handheld sea scooter, pneumatic salvage grapple, benthic crawler drone, ultrasonic chisel, titanium cable winch, emergency marker buoy.


