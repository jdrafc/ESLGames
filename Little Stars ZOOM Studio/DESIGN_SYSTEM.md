# Sci-Fi Comic Engine — Design System & Component Catalog

This design system documents the visual language, animation engine, coordinate geometry, and reusable component patterns powering the interactive comic builder.

---

## 1. Color Palette Tokens

### Deep Space & Architecture
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--space-void` | `#030712` | Deep space vacuum, exterior viewport backgrounds |
| `--lab-dark` | `#090d16` | Server rack enclosures, deep console frames |
| `--bulkhead-base` | `#1e293b` | Structural walls, ceiling beams, airlocks |
| `--bulkhead-mid` | `#334155` | Floor decks, hardware plates, shadow bevels |
| `--bulkhead-light` | `#475569` | Hydraulic turret arms, equipment frames |
| `--regolith-gray` | `#64748b` | Lunar crater horizons, geodesic struts |

### Energy & Telemetry Emitters
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--neon-cyan` | `#38bdf8` | Primary quantum energy, viewport frames, link beams |
| `--electric-blue` | `#00f0ff` | Hot plasma arcs, lightning sparks, frequency waves |
| `--emerald-green` | `#22c55e` | Oscilloscope signals, active telemetry bars, OK status |
| `--hazard-yellow` | `#facc15` | Baseline floor hazard stripes, core plasma glow |
| `--amber-warn` | `#f59e0b` | Solar panel bus, rover chassis, secondary telemetry |
| `--alert-ruby` | `#ef4444` | Pulsing antenna beacons, critical alert indicators |

---

## 2. Spatial Geometry & Coordinate System

All comic panel backgrounds and characters are authored in a standardized **`viewBox="0 0 400 220"`**:

```
(0, 0) ┌────────────────────────────────────────────────────────┐ (400, 0)
       │ [Ceiling Bulkhead: Y = 0 to 14]                        │
       │                                                        │
       │                                                        │
       │    [Midground Scene & Viewport Window: Y = 14 to 145]  │
       │                                                        │
       │                                                        │
       │ [Deck Plate Transition: Y = 145]                       │
       │ [Pedestal Base: X = 255 to 305, Y = 145 to 175]        │
(0,175)├════════════════════════════════════════════════════════┤ (400, 175)
       │ === UNIVERSAL GROUND BASELINE (Y = 175) ===            │
       │ [Solid Sub-Floor & Hazard Striping: Y = 175 to 220]    │
(0,220)└────────────────────────────────────────────────────────┘ (400, 220)
```

---

## 3. The Reusable Component Library

### A. Architectural Ceiling Bulkhead ($Y = 0 \sim 15$)
Prevents upper canvas border clipping while providing downward ambient room light:
```html
<rect x="0" y="0" width="400" height="15" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<line x1="0" y1="15" x2="400" y2="15" stroke="#38bdf8" stroke-width="1" opacity="0.75"/>
<!-- Recessed Floodlights -->
<rect x="38" y="4" width="56" height="4" rx="2" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>
<rect x="172" y="4" width="56" height="4" rx="2" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)"/>
<rect x="306" y="4" width="56" height="4" rx="2" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)"/>
```

### B. Baseline Hazard Safety Floor ($Y = 175$)
Firmly grounds characters and props at the universal $Y = 175$ plane:
```html
<!-- Sub-Floor Deck -->
<rect x="0" y="145" width="400" height="75" fill="#1e293b"/>
<rect x="0" y="175" width="400" height="45" fill="#0f172a"/>
<!-- High-Visibility Yellow/Black Hazard Stripes -->
<line x1="0" y1="175" x2="400" y2="175" stroke="#facc15" stroke-width="3.5" stroke-dasharray="14,10"/>
<!-- Vertical Deck Plate Seams -->
<line x1="100" y1="175" x2="100" y2="220" stroke="#334155" stroke-width="1.5"/>
<line x1="200" y1="175" x2="200" y2="220" stroke="#334155" stroke-width="1.5"/>
<line x1="300" y1="175" x2="300" y2="220" stroke="#334155" stroke-width="1.5"/>
```

### C. Live Oscilloscope Sine Waveform Console
Gives scientific laboratory screens an active pulse:
```html
<rect x="8" y="22" width="114" height="54" rx="4" fill="#090d16" stroke="#38bdf8" stroke-width="1.5"/>
<!-- Waveforms -->
<path d="M14 52 Q26 34 38 52 T62 52 T86 52 T110 52 T116 52" stroke="#22c55e" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M14 52 Q28 68 42 52 T70 52 T98 52 T116 52" stroke="#00f0ff" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.9"/>
<!-- Moving Pulse Tracer Dot -->
<circle cx="86" cy="52" r="2.8" fill="#00f0ff" filter="drop-shadow(0 0 5px #00f0ff)"/>
<circle cx="86" cy="52" r="1.4" fill="#ffffff"/>
```

### D. The Nested Transform Animation Pattern
```html
<!-- World Coordinate Origin: (250, 62) -->
<g transform="translate(250, 62)">
    <!-- Relative CSS Keyframe Animation Only -->
    <g class="story-anim-satellite-float">
        <!-- Visual Centered on (0, 0) -->
        <rect x="-14" y="-12" width="28" height="24" rx="4" fill="#d97706" stroke="#f59e0b" stroke-width="1.8"/>
        <!-- Antenna Beacon -->
        <line x1="0" y1="-12" x2="0" y2="-22" stroke="#94a3b8" stroke-width="1.8"/>
        <circle cx="0" cy="-22" r="3" fill="#ef4444" class="story-anim-antenna-pulse"/>
    </g>
</g>
```

---

## 4. Character Visor & Facial Blueprint

Astronaut and sci-fi hero heads are structured with 4 concentric depth layers:
1. **Comms Skullcap & Hair Base:** Dark base (`#0f172a` or `#334155`) defining the character's hair silhouette and side comms cap.
2. **Inner Face Details:**
   - Big expressive eyes: white sclera, vibrant colored iris (`#38bdf8`), dark pupil with a crisp white highlight dot.
   - Distinct communicative eyebrows (curious tilt or friendly arch).
   - Warm open smile with white tooth sheen.
3. **Helmet Collar & Outer Shell:** White/silver helmet framing (`stroke-width="3"`) with collar seal ring.
4. **Transparent Visor Bubble & Glare Arc:**
   - Semi-transparent tinted fill: `fill="rgba(56, 189, 248, 0.15)"` with `stroke="#38bdf8"`.
   - Upper left glare arc: `<path d="M-18 -8 Q-12 -22 6 -20" stroke="rgba(255,255,255,0.7)" stroke-width="2.2" stroke-linecap="round" fill="none"/>`.
   - Microphone boom: `<path d="M-14 8 Q-6 16 0 12" stroke="#64748b" stroke-width="2"/>` ending with `<circle cx="0" cy="12" r="2" fill="#38bdf8"/>`.

---

## 5. Catalyst Prop Icons & Toolbar Assets
- All story catalyst picker buttons (`.asset-chip-btn`) must use recognizable, modern vector icons matching their in-scene high-tech counterparts.
- Avoid archaic/obsolete real-world hardware icons (e.g. 1980s 3.5" floppy disks / floppy drives) for sci-fi props.
- Silicon memory chips use modern IC/QFP packaging with multi-directional gold connection pins, orientation indices, and glowing quantum bus nodes.
- Buttons enforce `white-space: nowrap` and SVG icons align with `vertical-align: -0.15em; width: 1.15em; height: 1.15em;`.

---

## 6. Pre-Commit Quality Checklist
- [ ] Ground baseline strictly on $Y = 175$.
- [ ] No visual elements clipping above $Y = 14$.
- [ ] All animated groups decouple static `transform="translate(X,Y)"` from animated child `<g class="...">`.
- [ ] Blinking status lights cycle using `story-anim-led-1/2/3`.
- [ ] Interactive click handlers include `e.stopPropagation()` and audio feedback.
- [ ] Zero external binary assets.

---

## 7. Deep-Sea & Marine Biology Palette Tokens

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--abyss-midnight` | `#030b17` | Abyssal deep-sea void, trench backdrop |
| `--azure-ocean` | `#0c4a6e` | Sunlit reef midground water, dome ocean view |
| `--biolum-cyan` | `#38bdf8` | Coral neon polyps, visor rings, beacon signals |
| `--biolum-emerald` | `#10b981` | Sea turtle shell scutes, kelp fronds, sonar rings |
| `--thermal-orange` | `#f97316` | Black smoker mineral chimneys, volcanic fissure |
| `--specimen-glass` | `rgba(56,189,248,0.2)` | Specimen jar fill, pressure dome panels |
| `--maya-wetsuit` | `#ec4899` | Maya's magenta suit accents & swimming flippers |

---

## 8. Marine Animation Keyframe Catalog

- `.story-anim-swim-6steps`: 6-stroke horizontal swimming progression forward toward $X = 280$.
- `.story-anim-fin-kick-left` / `-right`: Dynamic alternating flutter kick at 0.75s cycle.
- `.story-anim-hair-float`: Flowing ponytail ocean current physics at 2.0s alternate.
- `.story-anim-propeller-spin`: High-speed 360° thruster blade rotation (0.35s linear).
- `.story-anim-astrolabe-spin` / `-rev`: Counter-rotating concentric brass rings (10s & 6s).
- `.story-anim-smoker-billow`: Hydrothermal vent mineral plume billow (2.2s ease-out).
- `.story-anim-uv-strobe`: Strobe flash pulses with lavender/violet glow (2.8s).
- `.story-anim-sonar-ring-1` / `-2`: Expanding acoustic sonar pings with staggered delay.

---

## 9. Reading Skills Practise Living Scene Component Catalog

### Spatial Geometry & Baseline Invariants (`viewBox="0 0 540 320"`)
- **Universal Ground Plane:** $Y = 220$ across the full stage.
- **Open Doorway Interior:** $X = 25 \sim 135, Y = 45 \sim 220$ with warm indoor ambient light gradient (`#indoorWarmGlow`).
- **Threshold Plane:** $Y = 220$ where interior floor meets garden snow. Characters stand at $X = 68$ (Adult) and $X = 112$ (Youth).
- **Snow Floor Yard:** $X = 135 \sim 540, Y = 220$ baseline supporting resting food pieces and scampering wildlife.
- **Focal Natural Landmark:** Right quadrant ($X = 430 \sim 480$) with climbing wildlife and snow cushions.

### Color Tokens for Storybook Living Scenes
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--sky-morning-ice` | `#bae6fd` $\rightarrow$ `#f8fafc` | Atmospheric pale winter morning linear gradient |
| `--indoor-amber` | `#fde68a` $\rightarrow$ `#ffedd5` | Warm home interior doorway glow |
| `--bark-deep-oak` | `#292524` $\rightarrow$ `#44403c` | Majestic tree trunk & heavy boughs |
| `--sq-fur-copper` | `#ea580c` $\rightarrow$ `#7c2d12` | Rich squirrel fur gradient |
| `--mom-knit-rose` | `#be185d` | Mother's cozy cardigan coat |
| `--anna-jacket-coral` | `#f43f5e` | Anna's vibrant coral winter jacket |
| `--bread-golden-crust` | `#fed7aa` / `#d97706` | Bread pieces tossed & resting on snow |
| `--chestnut-gloss` | `#78350f` / `#451a03` | Chestnuts in bowl, in air, & on ground |

### Kinetic Animation Invariants
1. **Throwing Cycles (`.mom-arm-throw`, `.anna-arm-throw`):**
   - Must use `transform-origin: 0px 0px` centered at shoulder.
   - Infinite looping cycles with distinct wind-up, forward thrust, release flick, and return.
2. **Ballistic Projectile Landing (`.food-chestnut-drop`, `.food-bread-drop`):**
   - Parabolic arc from release point to ground baseline at $Y = 220$.
   - Must bounce slightly upon impact and settle on the floor.
   - NEVER fade opacity to 0 in mid-air (`opacity: 1` preserved through impact and resting state).
   - Accompanied by impact snow puff particles (`.snow-puff-1`, `.snow-puff-2`).
3. **Animal Bounding Scamper (`.sq-run-cycle`, `.sq-run-body-rig`):**
   - Multi-step leaping cycle (crouch $\rightarrow$ airborne stretch $\rightarrow$ touchdown).
   - Articulated front paws and hind legs.
   - Synchronized tracking ground contact shadow at $Y = 220$.

---

## 10. Living Prop Kinetic FX & Character Anatomy Standards

This section defines the visual physics, kinetic animation classes, and anatomical blueprint standards for interactive story builder cartridges.

### 10.1 The 3-Phase Living Prop Kinetic Standard
Props must never appear as flat, inert, static stickers stamped onto the canvas. Every prop must actively interact with the environment across all 3 story panels:

```
[Panel 1: Ambient Kinetic Motion]  ──>  [Panel 2: Velocity & Impact Collision]  ──>  [Panel 3: Victory Radiance]
• Rising bubbles / spinning wheels       • Trajectory dashed arcs (stroke-dash)       • Sparkle burst stars (✨)
• Fluttering ribbons / tail streamers    • Ground impact dust puffs (💨)              • Radiance glow halos
• Unraveling yarn / floating gliders     • Stuck/wedged mechanical displacement       • Celebratory particle float
```

#### Phase 1: Scene 1 Ambient Kinetic Motion
- **Floating Props (Bubbles, Kites, Gliders):**
  - Must use gentle multi-axis translation and floating physics (`.story-anim-bubble-float`, `.story-anim-float-gentle`).
  - Bubbles must feature iridescent surface sheen arcs and wobble with organic scale variation (0.95 $\sim$ 1.05).
- **Rolling / Wheeled Props (Scooter, Ball, Discs):**
  - Moving wheels must rotate continuously (`.story-anim-wheel-spin` or `.story-anim-prop-vibrate`).
  - Trailing speed dust or ground vibration lines must ground the motion along $Y = 175$.
- **Flexible / Tethered Props (Yarn, Feather Wand, Teaser Ribbons):**
  - Trailing thread, string, or feathers must flutter dynamically behind the movement (`.story-anim-ribbon-wave`, `.story-anim-feather-sway`).

#### Phase 2: Scene 2 Velocity & Collision Physics
- **Ballistic Trajectory Trails:**
  - High-velocity arcs must display dashed vector trails (`stroke-dasharray="4,4"`, `opacity="0.6"`) illustrating the trajectory that led into the obstacle.
- **Ground / Surface Impact Particles:**
  - Points of contact against the landmark must display impact shockwave dust puffs:
    ```html
    <!-- Impact collision dust puff -->
    <path d="M-8 2 Q-4 -6 0 0 Q4 -6 8 2" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.75"/>
    <circle cx="-6" cy="-2" r="1.5" fill="#cbd5e1" opacity="0.7"/>
    <circle cx="6" cy="-2" r="1.5" fill="#cbd5e1" opacity="0.7"/>
    ```
- **Physical Displacement & Stuck States:**
  - Props must physically penetrate, wedge into, or tilt against the landmark (e.g., kite tail tangled in bench slats, ball wedged under roof eaves, scooter tilted against bridge post).

#### Phase 3: Scene 3 Victory Radiance & Celebration FX
- **Radiance Star Bursts (`.story-anim-sparkle-burst`):**
  - Every retrieved prop in Scene 3 must be crowned with 4-point golden/cyan sparkle stars:
    ```html
    <g class="story-anim-sparkle-burst">
      <path d="M0 -7 Q1 -1 7 0 Q1 1 0 7 Q-1 1 -7 0 Q-1 -1 0 -7 Z" fill="#facc15" filter="drop-shadow(0 0 4px #fef08a)"/>
    </g>
    ```
- **Ambient Victory Glow:**
  - Include soft radial background glow (`fill="url(#victorySunburst)"` or `filter="drop-shadow(0 0 10px rgba(250, 204, 21, 0.4))"`).
- **Hero Joy Pose:**
  - The hero must exhibit celebratory body language (raised paws, lifted hands, upright smiling head, waving tail).

---

### 10.2 Character Anatomical Blueprints

#### A. Adult Feline Blueprint (Cleo the Silver-Grey Tabby)
- **Anatomy & Posture:**
  - Graceful arched spine (`d="M-14 2 Q-4 -8 10 -4 Q20 0 24 10"`), raised muscular hind haunches (`ellipse rx="10" ry="14"`).
  - Slender articulated legs resting firmly on ground baseline $Y = 175$.
  - S-curved expressive tail with rhythmic feline wave animation (`.story-anim-cat-tail`).
- **Color Palette & Markings:**
  - Base coat: Silver-grey gradient (`#94a3b8` $\rightarrow$ `#64748b`).
  - Tabby stripes: Distinct charcoal chevron stripes on spine, haunches, and forehead (`#334155`).
  - Forehead marking: Traditional feline "M" pattern centered between the ears.
  - Chest & Paws: Crisp clean white bib (`#f8fafc`) and four white paws ("mittens").
  - Eyes: Striking almond-shaped emerald green eyes (`#10b981`) with thin dark vertical slit pupils and white catchlight highlight.

#### B. Adult Canine Blueprint (Dell the Golden Hound)
- **Anatomy & Posture:**
  - Broad, upright athletic chest and defined canine ribcage.
  - Alert quadruped stance grounded firmly at $Y = 175$.
  - Expressive fluffy golden tail with rapid wagging animation (`.story-anim-dog-wag`).
- **Color Palette & Markings:**
  - Base coat: Warm amber-gold gradient (`#f59e0b` $\rightarrow$ `#d97706`).
  - Muzzle: Dark tan/chocolate muzzle with glossy black nose dot and white reflection ping.
  - Ears: Long floppy hound ears with soft pink inner ear fold shading (`#fbcfe8`).
  - Eyes: Large, loyal round warm-brown eyes with dual white pupil catchlights.

#### C. Human Youth Blueprint (Leo & Eve)
- **Anatomy & Posture:**
  - Child proportion (head-to-body ratio $\sim 1:3.5$ for youth appeal).
  - Dynamic walking/running leg articulation grounded at $Y = 175$.
- **Features & Costumes:**
  - Hair physics: Volumetric hair (e.g., Eve's high auburn ponytail with ambient bounce keyframe; Leo's tousled brown hair peeking under adventure cap).
  - Clothing: Vibrant primary/secondary color blocking (e.g., Eve's teal/coral hoodie; Leo's cobalt blue vest and khaki shorts).
  - Facial expression: Big round expressive eyes with upper eyelid arcs, arched eyebrows, and warm open smiles.

---

### 10.3 Reusable Kinetic CSS Class Catalog

| CSS Class | Target Element | Physics / Movement Description | Cycle Duration |
| :--- | :--- | :--- | :--- |
| `.story-anim-sparkle-burst` | Victory stars (`✨`) in Scene 3 | Scale pulse ($0.7 \rightarrow 1.25$) with synchronous opacity breath ($0.3 \rightarrow 1.0$) | $1.4\text{s}$ ease-in-out infinite |
| `.story-anim-prop-vibrate` | Wheeled / mechanical props | Subtle micro-vibration simulating rolling surface friction | $0.2\text{s}$ linear infinite |
| `.story-anim-bubble-float` | Soap bubbles / floating spheres | Dual-axis floating bob ($-8\text{px} \sim +4\text{px}$) with organic wobble scale | $2.4\text{s}$ ease-in-out infinite |
| `.story-anim-float-gentle` | Gliders, kites, leaves | Gentle pendulum tilt ($-4^\circ \sim +6^\circ$) and vertical drift | $3.0\text{s}$ ease-in-out infinite |
| `.story-anim-cat-tail` | Feline tails | Organic dual-pivot rhythmic feline tail flick | $2.2\text{s}$ ease-in-out infinite |
| `.story-anim-dog-wag` | Canine tails | Rapid enthusiastic wagging arc ($-18^\circ \sim +18^\circ$) | $0.4\text{s}$ ease-in-out infinite |
| `.story-anim-wheel-spin` | Toy wheels / propellers | Continuous $360^\circ$ rotational spin | $0.6\text{s}$ linear infinite |
| `.story-anim-ribbon-wave` | Strings, ribbons, streamers | Sine-wave flutter displacement | $1.2\text{s}$ ease-in-out infinite |
| `.story-anim-wind-stream-1/2` | Wind gust streamline paths | Racing `stroke-dashoffset` simulating air currents | $1.8\sim2.4\text{s}$ linear infinite |
| `.story-anim-wind-leaf-1/2/3` | Tumbling autumn leaves | Multi-axis rotation ($-25^\circ \sim +45^\circ$) and drifting displacement | $2.6\sim3.4\text{s}$ ease-in-out infinite |
| `.story-anim-rainbow-glow` | Sky rainbow arc bands | Shimmering opacity respiration ($0.6 \leftrightarrow 0.95$) | $3.0\text{s}$ ease-in-out infinite |
| `.story-anim-sun-burst` | Peeking sunshine corona | Continuous $360^\circ$ ambient rotation with soft drop shadow | $12.0\text{s}$ linear infinite |
| `.story-anim-raindrop-1/2/3` | Slanting sun-shower droplets | Continuous diagonal falling translation with staggered offsets | $0.75\sim0.95\text{s}$ linear infinite |
| `.story-anim-rain-ripple` | Ground puddle rings | Expanding ripple scaling ($0.2 \rightarrow 2.0$) with opacity decay | $1.4\text{s}$ ease-out infinite |
| `.story-anim-wing-left/right` | Butterfly wings | High-frequency horizontal scale flap ($1.0 \rightarrow 0.18$) | $0.18\text{s}$ ease-in-out infinite |
| `.story-anim-butterfly-float-1/2/3` | Butterfly whole bodies | Looping Bezier floating drift ($\Delta X \pm 14\text{px}, \Delta Y \pm 12\text{px}$) | $3.6\sim4.4\text{s}$ ease-in-out infinite |
| `.story-anim-star-twinkle` | Evening twilight star | Pulsing scale ($0.8 \rightarrow 1.25$) with $45^\circ$ rotation flare | $2.2\text{s}$ ease-in-out infinite |
| `.story-anim-firefly-glow-1/2/3` | Magic firefly auras | Staggered asynchronous lime-gold glow pulsation ($0.3 \leftrightarrow 1.0$) | $1.6\sim2.1\text{s}$ ease-in-out infinite |
| `.story-anim-firefly-bob-1/2` | Magic firefly whole groups | Subtle vertical wave bobbing ($\pm 7\text{px}$) | $2.8\sim3.2\text{s}$ ease-in-out infinite |
| `.story-anim-twist-badge` | Upper corner twist pill | Gentle hovering vertical float ($\Delta Y = -3\text{px}$) | $2.5\text{s}$ ease-in-out infinite |

---

## 11. Super-Vector Catalyst Props & Motion Graphics Specification

All story catalyst props across all 3 tiers (Beginner, Intermediate, Advanced) and future cartridges must adhere to the **Super-Vector Living Motion Graphics Standard**.

### 11.1 The 4-Part Pedestal Stage Assembly

When displayed in the comic stage during panel playback, catalyst props must be wrapped in this 4-part environmental structure:

```
                  [Ambient Plankton / Sparkle Particles]
                         ✨ (story-anim-star-twinkle-fast)
                                     │
    ┌────────────────────────────────┴────────────────────────────────┐
    │                                                                 │
    │         [Dynamic Living Prop Assembly Centered on (0, 0)]       │
    │   Nested inside <g class="story-anim-prop-surge / hover">       │
    │                                                                 │
    └────────────────────────────────┬────────────────────────────────┘
                                     │
                      [Ground Baseline: Y = 4 on Pedestal]
          ═══════════════════════════╧═══════════════════════════
           ( ) Concentric Energy Aura Rings (story-anim-catalyst-glow-ring)
           (•) Soft Contact Shadow Ellipse (rgba(2, 6, 23, 0.55))
```

### 11.2 Catalyst Prop Animation Class Catalog

| Kinetic Category | CSS Class | Visual Effect & Keyframe Physics | Common Prop Archetypes |
| :--- | :--- | :--- | :--- |
| **Stage Container** | `.story-anim-prop-hover-gentle` | Smooth $\pm 5\text{px}$ sinusoidal vertical floating bob ($2.4\text{s}$) | Panel 1 & 2 baseline state |
| **Stage Container** | `.story-anim-prop-surge` | High-energy pulsating vertical surge & scale breath ($1.6\text{s}$) | Panel 3 climax & resolution |
| **Stage Container** | `.story-anim-prop-bounce-active` | Rhythmic buoyant vertical bob with tilt wobble ($1.8\text{s}$) | Floating buoys, water spheres |
| **Stage Container** | `.story-anim-prop-wobble-play` | Rapid micro-vibration & organic angle tilt ($0.45\text{s}$) | Chisel tools, shells, sediment corers |
| **Energy & Core** | `.story-anim-plasma-pulse` | Pulsing radial luminescence & filter glow ($1.5\text{s}$) | Thermal probes, coral jars, battery cells |
| **Energy & Core** | `.story-anim-crystal-glow` | High-intensity core breathing glow ($1.8\text{s}$) | Quartz crystals, transmitter diodes |
| **Status LEDs** | `.story-anim-led-1/2/3` | Asynchronous 3-phase telemetry indicator blinking | Control consoles, probes, trackers |
| **Rotational** | `.story-anim-astrolabe-spin` | Continuous $360^\circ$ planar rotation ($8.0\text{s}$ linear) | Propeller turbines, tape spools, gimbals |
| **Rotational** | `.story-anim-wheel-spin` | High-speed continuous rotation ($1.2\text{s}$ linear) | Cable spool drums, rover guide rollers |
| **Optical** | `.story-anim-laser-tracer` | Traveling `stroke-dashoffset` pulse along beam path ($1.0\text{s}$) | Rangefinder lasers, scan lines, cables |
| **Optical** | `.story-anim-radar-ping` | Concentric expanding wavefront with opacity decay ($2.0\text{s}$) | Sonar pingers, drifter beacons, crystals |
| **Optical** | `.story-anim-sound-wave-ping` | Secondary harmonic wavefront expansion ($1.6\text{s}$) | Seismic profilers, sonar beacons, buoys |
| **Surface Finish** | `.story-anim-gleam-sheen` | High-contrast specular metallic gleam streak sweep ($2.2\text{s}$) | Gold doubloons, prisms, scanners |
| **Fluidic** | `.story-anim-feather-sway` | Pendulum sway with anchor `transform-origin: 0px 0px` ($2.5\text{s}$) | Seaweed ribbons, drogue anchors |
| **Atmospheric** | `.story-anim-star-twinkle-fast` | Rapid scintillation flare & scale twinkle ($1.2\text{s}$) | Vent bubbles, plankton motes, sparks |
| **Discharge** | `.story-anim-spark-1` | High-frequency jitter & opacity flickering ($0.3\text{s}$) | Grapple claws, electrical contacts |

### 11.3 Quality Invariant Checklist for New Props
1. **Physical Independence:** The prop must be a standalone manipulable item, never clothing or wearable gear.
2. **Double Animation Rule:** At least 2 active micro-animations running concurrently without competing for the same transform property.
3. **Strict Nested Transform Pattern:** Decouple XML positioning `<g transform="translate(X,Y)">` from CSS keyframe `<g class="...">`.
4. **Pedestal Integration:** Must sit on the 4-part stage wrapper when mounted.
5. **Modern Vector Picker Icon:** If Unicode emojis are outdated (e.g. floppy disk for modern chip), embed an inline SVG micro-badge in the toolbar button.

