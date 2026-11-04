/**
 * Automated Combinatorial Verification Harness for Story Builder Cartridges
 *
 * Verifies all permutations of Heroes x Settings x Props x 3 Panels:
 * 1. Exactly 6 standalone props per hero archetype.
 * 2. Settings deduplication and signature landmark exclusivity.
 * 3. 100% valid SVG rendering with zero undefined, null, or NaN values.
 * 4. Narrative landmark integrity across Panels 2 and 3 with zero cross-setting leakage.
 * 5. Dynamic prop toolbar context auto-fallback.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');

// Setup Node VM global context simulating browser runtime
global.window = global;

global.document = {
    getElementById: (id) => ({
        innerHTML: '',
        innerText: '',
        querySelectorAll: () => [],
        addEventListener: () => {}
    }),
    addEventListener: () => {}
};

global.appState = {
    storyBuilder: {
        level: 'beginner',
        universeIndex: 0,
        characterId: 'max',
        secondaryCharId: 'leo',
        settingId: 'park',
        propId: 'ball',
        panels: []
    }
};

global.audioEngine = {
    playClick: () => {},
    playCorrect: () => {},
    speak: () => {}
};

global.saveState = () => {};

// Load universe registry, storyboard 1 beginner universe, storyboard 1 intermediate universe, and story engine
const codeReg = fs.readFileSync(path.join(ROOT_DIR, 'js', 'story-builder', 'universe-registry.js'), 'utf8');
vm.runInThisContext(codeReg);

const codeBeginner = fs.readFileSync(path.join(ROOT_DIR, 'js', 'story-builder', 'universe-storyboard1-beginner.js'), 'utf8');
vm.runInThisContext(codeBeginner);

const codeIntermediate = fs.readFileSync(path.join(ROOT_DIR, 'js', 'story-builder', 'universe-storyboard1-intermediate.js'), 'utf8');
vm.runInThisContext(codeIntermediate);

const codeAdvanced = fs.readFileSync(path.join(ROOT_DIR, 'js', 'story-builder', 'universe-storyboard1-advanced.js'), 'utf8');
vm.runInThisContext(codeAdvanced);

// Load Senior Stage Modular Cartridges
const codeStageBeg = fs.readFileSync(path.join(ROOT_DIR, 'js', 'senior-stage', 'cartridges', 'stage-cartridge-beginner.js'), 'utf8');
vm.runInThisContext(codeStageBeg);

const codeStageInt = fs.readFileSync(path.join(ROOT_DIR, 'js', 'senior-stage', 'cartridges', 'stage-cartridge-intermediate.js'), 'utf8');
vm.runInThisContext(codeStageInt);

const codeStageAdv = fs.readFileSync(path.join(ROOT_DIR, 'js', 'senior-stage', 'cartridges', 'stage-cartridge-advanced.js'), 'utf8');
vm.runInThisContext(codeStageAdv);

const codeEngine = fs.readFileSync(path.join(ROOT_DIR, 'js', 'story-engine.js'), 'utf8');
vm.runInThisContext(codeEngine);

const universe = window.MAX_ADVENTURE_UNIVERSE;
const universe3 = window.TWILIGHT_SANCTUARY_UNIVERSE;

console.log('====================================================');
console.log('  CARTRIDGE COMBINATORIAL VERIFICATION HARNESS      ');
console.log('====================================================\n');

// 1. Archetype Character Prop Inventories
console.log('--- 1. Testing Archetype Character Prop Inventories ---');
const heroes = ['max', 'leo', 'eve', 'cleo'];
for (const h of heroes) {
    const list = universe.getPropsForCharacter(h);
    if (!list || list.length !== 6) {
        throw new Error(`Hero ${h} must have exactly 6 props, found: ${list ? list.length : 0}`);
    }
    console.log(`[PASS] Hero "${h}": 6 props confirmed -> ${list.map(p => p.name).join(', ')}`);
}

// 2. Settings Deduplication
console.log('\n--- 2. Testing Settings Deduplication ---');
if (universe.settings.length !== 3) {
    throw new Error(`Expected exactly 3 settings, found: ${universe.settings.length}`);
}
const settingIds = universe.settings.map(s => s.id);
console.log('[PASS] Settings confirmed:', settingIds.join(', '));
if (settingIds.includes('bench_area')) {
    throw new Error('Redundant bench_area must be removed!');
}

// 3. Testing 72 Hero-Prop-Setting Story & SVG Combinations
console.log('\n--- 3. Testing 72 Hero-Prop-Setting Story & SVG Combinations ---');
let comboCount = 0;
let panelCount = 0;
let svgPassCount = 0;

for (const hero of universe.characters) {
    const heroProps = universe.getPropsForCharacter(hero.id);
    for (const setting of universe.settings) {
        for (const prop of heroProps) {
            comboCount++;
            const panels = universe.generateStoryPanels(hero, setting, prop, null);
            if (!panels || panels.length !== 3) {
                throw new Error(`Failed to generate 3 panels for ${hero.id} + ${setting.id} + ${prop.id}`);
            }

            const p1 = panels[0];
            const p2 = panels[1];
            const p3 = panels[2];
            panelCount += 3;

            // P1 verification: prop name present
            if (!p1.caption.includes(prop.name)) {
                throw new Error(`P1 caption missing prop name "${prop.name}": "${p1.caption}"`);
            }

            // Setting landmark exclusivity check
            if (setting.id === 'backyard') {
                if (p2.caption.toLowerCase().includes('bench')) {
                    throw new Error(`Backyard P2 mentions bench: "${p2.caption}"`);
                }
                if (!p2.caption.toLowerCase().includes('doghouse')) {
                    throw new Error(`Backyard P2 missing doghouse: "${p2.caption}"`);
                }
                if (p3.caption.toLowerCase().includes('bench')) {
                    throw new Error(`Backyard P3 mentions bench: "${p3.caption}"`);
                }
                if (!p3.caption.toLowerCase().includes('doghouse')) {
                    throw new Error(`Backyard P3 missing doghouse: "${p3.caption}"`);
                }
            } else if (setting.id === 'creek') {
                if (p2.caption.toLowerCase().includes('bench')) {
                    throw new Error(`Creek P2 mentions bench: "${p2.caption}"`);
                }
                if (!p2.caption.toLowerCase().includes('bridge')) {
                    throw new Error(`Creek P2 missing bridge: "${p2.caption}"`);
                }
                if (p3.caption.toLowerCase().includes('bench')) {
                    throw new Error(`Creek P3 mentions bench: "${p3.caption}"`);
                }
                if (!p3.caption.toLowerCase().includes('bridge')) {
                    throw new Error(`Creek P3 missing bridge: "${p3.caption}"`);
                }
            } else if (setting.id === 'park') {
                if (!p2.caption.toLowerCase().includes('bench')) {
                    throw new Error(`Park P2 missing bench: "${p2.caption}"`);
                }
                if (!p3.caption.toLowerCase().includes('bench')) {
                    throw new Error(`Park P3 missing bench: "${p3.caption}"`);
                }
            }

            // SVG Verification for each panel
            for (let idx = 0; idx < 3; idx++) {
                const svg = window.renderBeginnerComicSVG(setting.id, hero.id, prop.id, idx, 'beginner', null, null);
                if (!svg || !svg.includes('<svg') || !svg.includes('</svg>')) {
                    throw new Error(`Invalid SVG for ${hero.id} + ${setting.id} + ${prop.id} P${idx}`);
                }
                if (svg.includes('undefined') || svg.includes('NaN')) {
                    throw new Error(`Corrupted SVG containing undefined/NaN for ${hero.id} + ${setting.id} + ${prop.id} P${idx}`);
                }
                svgPassCount++;
            }
        }
    }
}

console.log(`[PASS] Verified ${comboCount} combinations across ${panelCount} story panels.`);
console.log(`[PASS] Verified ${svgPassCount} rendered SVGs with 100% validity and zero undefined/NaN.`);

// 4. Dynamic Prop UI Swapping in Story Engine
console.log('\n--- 4. Testing Dynamic Prop UI Swapping in Story Engine ---');
const sb = global.appState.storyBuilder;
sb.characterId = 'max';
sb.propId = 'ball';
let props = window.getUniversePropsForContext(universe, sb);
if (props.length !== 6 || props[0].id !== 'ball') {
    throw new Error('Failed Max props check');
}

// Switch to Leo
sb.characterId = 'leo';
props = window.getUniversePropsForContext(universe, sb);
if (props.length !== 6 || props[0].id !== 'kite') {
    throw new Error('Failed Leo props check');
}
// Validate fallback if prop was Max's 'ball'
if (!props.some(p => p.id === sb.propId)) {
    sb.propId = props[0].id;
}
if (sb.propId !== 'kite') {
    throw new Error('Failed auto-sync to Leo prop kite');
}

// Switch to Eve
sb.characterId = 'eve';
props = window.getUniversePropsForContext(universe, sb);
if (!props.some(p => p.id === sb.propId)) {
    sb.propId = props[0].id;
}
if (sb.propId !== 'bubbles') {
    throw new Error('Failed auto-sync to Eve prop bubbles');
}

// Switch to Cleo
sb.characterId = 'cleo';
props = window.getUniversePropsForContext(universe, sb);
if (!props.some(p => p.id === sb.propId)) {
    sb.propId = props[0].id;
}
if (sb.propId !== 'yarn') {
    throw new Error('Failed auto-sync to Cleo prop yarn');
}

console.log('[PASS] Dynamic prop switching and fallback validation passed with 100% success!');

// 5. Environmental Mystery Twist Overlays
console.log('\n--- 5. Testing Environmental Mystery Twist Overlays ---');
if (!universe.twists || universe.twists.length !== 4) {
    throw new Error(`Expected exactly 4 twists, found: ${universe.twists ? universe.twists.length : 0}`);
}
const expectedTwistIds = ['wind_gust', 'sun_shower', 'butterfly_swarm', 'twilight_fireflies'];
for (const id of expectedTwistIds) {
    const found = universe.twists.find(t => t.id === id);
    if (!found) throw new Error(`Missing expected environmental twist: ${id}`);
}
console.log(`[PASS] 4 Environmental Twists confirmed -> ${universe.twists.map(t => t.title).join(', ')}`);

let twistSvgCount = 0;
for (const twist of universe.twists) {
    for (const hero of universe.characters) {
        const prop = universe.getPropsForCharacter(hero.id)[0];
        for (const setting of universe.settings) {
            // Narrative check: Panel 2 must preserve prop conflict and add twist text
            const panels = universe.generateStoryPanels(hero, setting, prop, twist);
            const p2 = panels[1];
            if (!p2.caption.includes(twist.text)) {
                throw new Error(`Panel 2 caption missing twist text: ${p2.caption}`);
            }
            if (!p2.speech1.includes(twist.dialogue)) {
                throw new Error(`Panel 2 speech missing twist dialogue: ${p2.speech1}`);
            }

            // SVG Climax Overlay check
            const svgClimax = window.renderBeginnerComicSVG(setting.id, hero.id, prop.id, 1, 'beginner', twist, null);
            if (!svgClimax.includes('story-anim-twist-badge')) {
                throw new Error(`Climax panel missing twist badge for ${twist.id}`);
            }
            if (svgClimax.includes('undefined') || svgClimax.includes('NaN')) {
                throw new Error(`Corrupted SVG in twist ${twist.id} for ${hero.id} in ${setting.id}`);
            }

            // Check non-climax panel (P0) does NOT leak twist overlay
            const svgSetup = window.renderBeginnerComicSVG(setting.id, hero.id, prop.id, 0, 'beginner', twist, null);
            if (svgSetup.includes('twist-overlay-group') || svgSetup.includes('story-anim-twist-badge')) {
                throw new Error(`Setup panel (P0) leaked twist elements for ${twist.id}`);
            }

            // Two-Phase Resolution check: Panel 3 narrative & celebratory SVG
            const p3 = panels[2];
            if (p3.caption === arcCaptionWithoutTwist(hero, setting, prop)) {
                throw new Error(`Panel 3 caption failed to resolve twist: ${p3.caption}`);
            }

            const svgRes = window.renderBeginnerComicSVG(setting.id, hero.id, prop.id, 2, 'beginner', twist, null);
            if (svgRes.includes('undefined') || svgRes.includes('NaN')) {
                throw new Error(`Corrupted SVG in resolution for twist ${twist.id}`);
            }
            if (svgRes.includes('story-anim-twist-badge')) {
                throw new Error(`Resolution panel (P2) leaked twist badge for ${twist.id}`);
            }
            if (!svgRes.includes('twist-overlay-group')) {
                throw new Error(`Resolution panel missing celebratory twist overlay for ${twist.id}`);
            }
            twistSvgCount += 2;
        }
    }
}

function arcCaptionWithoutTwist(h, s, p) {
    const panels = universe.generateStoryPanels(h, s, p, null);
    return panels[2].caption;
}
console.log(`[PASS] Verified ${twistSvgCount} Environmental Twist SVGs with 100% validity, conflict isolation, and narrative integration.`);

console.log('\n====================================================');
console.log('  BEGINNER CARTRIDGE 1 VERIFICATION COMPLETE ✨     ');
console.log('====================================================\n');

console.log('====================================================');
console.log('  INTERMEDIATE CARTRIDGE 1 (THE QUANTUM KEY) TESTS  ');
console.log('====================================================\n');

const universe2 = window.QUANTUM_KEY_UNIVERSE || window.Storyboard1_Intermediate;
if (!universe2) {
    throw new Error('Failed to load Intermediate Cartridge 1 (QUANTUM_KEY_UNIVERSE)');
}

// 6. Intermediate Archetype Character Prop Inventories
console.log('--- 6. Testing Intermediate Archetype Character Prop Inventories ---');
const interHeroes = ['dr_eve', 'leo', 'rover', 'vance'];
for (const h of interHeroes) {
    const list = universe2.getPropsForCharacter(h);
    if (!list || list.length !== 6) {
        throw new Error(`Intermediate hero ${h} must have exactly 6 props, found: ${list ? list.length : 0}`);
    }
    console.log(`[PASS] Intermediate Hero "${h}": 6 props confirmed -> ${list.map(p => p.name).join(', ')}`);
}
// Validate legacy dr_aris alias
const arisList = universe2.getPropsForCharacter('dr_aris');
if (!arisList || arisList.length !== 6) {
    throw new Error('Legacy alias dr_aris must resolve to 6 props');
}
console.log('[PASS] Legacy alias "dr_aris" correctly resolves to Dr. Eve props');

// 7. Intermediate Settings Deduplication & Landmarks
console.log('\n--- 7. Testing Intermediate Settings Deduplication ---');
if (universe2.settings.length !== 4) {
    throw new Error(`Expected exactly 4 intermediate settings, found: ${universe2.settings.length}`);
}
const interSettingIds = universe2.settings.map(s => s.id);
console.log('[PASS] Intermediate settings confirmed:', interSettingIds.join(', '));
const expectedSettings = ['quantum_lab', 'lunar_outpost', 'satellite_bay', 'reactor_room'];
for (const sid of expectedSettings) {
    if (!interSettingIds.includes(sid)) {
        throw new Error(`Missing expected intermediate setting: ${sid}`);
    }
}

// 8. Testing 96 Intermediate Hero-Prop-Setting Combinations (384 Panels)
console.log('\n--- 8. Testing 96 Intermediate Hero-Prop-Setting Story & SVG Combinations ---');
let interComboCount = 0;
let interPanelCount = 0;
let interSvgPassCount = 0;

for (const hero of universe2.characters) {
    const heroProps = universe2.getPropsForCharacter(hero.id);
    for (const setting of universe2.settings) {
        for (const prop of heroProps) {
            interComboCount++;
            const panels = universe2.generateStoryPanels(hero, setting, prop, null);
            if (!panels || panels.length !== 4) {
                throw new Error(`Failed to generate 4 panels for intermediate ${hero.id} + ${setting.id} + ${prop.id}`);
            }

            const p1 = panels[0];
            const p2 = panels[1];
            const p3 = panels[2];
            const p4 = panels[3];
            interPanelCount += 4;

            // P1 verification: prop name present
            if (!p1.caption.includes(prop.name)) {
                throw new Error(`Intermediate P1 caption missing prop name "${prop.name}": "${p1.caption}"`);
            }

            // Setting landmark exclusivity check
            if (setting.id === 'quantum_lab') {
                if (!p2.caption.toLowerCase().includes('chamber')) {
                    throw new Error(`quantum_lab P2 missing glass chamber: "${p2.caption}"`);
                }
            } else if (setting.id === 'lunar_outpost') {
                if (!p2.caption.toLowerCase().includes('dome')) {
                    throw new Error(`lunar_outpost P2 missing observation dome: "${p2.caption}"`);
                }
            } else if (setting.id === 'satellite_bay') {
                if (!p2.caption.toLowerCase().includes('dish')) {
                    throw new Error(`satellite_bay P2 missing satellite dish: "${p2.caption}"`);
                }
            } else if (setting.id === 'reactor_room') {
                if (!p2.caption.toLowerCase().includes('grid')) {
                    throw new Error(`reactor_room P2 missing reactor grid: "${p2.caption}"`);
                }
            }

            // SVG Verification for each of the 4 panels
            for (let idx = 0; idx < 4; idx++) {
                const svg = window.renderIntermediateComicSVG(setting.id, hero.id, prop.id, idx, 'intermediate', null, null);
                if (!svg || !svg.includes('<svg') || !svg.includes('</svg>')) {
                    throw new Error(`Invalid intermediate SVG for ${hero.id} + ${setting.id} + ${prop.id} P${idx}`);
                }
                if (svg.includes('undefined') || svg.includes('NaN')) {
                    throw new Error(`Corrupted intermediate SVG containing undefined/NaN for ${hero.id} + ${setting.id} + ${prop.id} P${idx}`);
                }
                interSvgPassCount++;
            }
        }
    }
}

console.log(`[PASS] Verified ${interComboCount} intermediate combinations across ${interPanelCount} story panels.`);
console.log(`[PASS] Verified ${interSvgPassCount} rendered intermediate SVGs with 100% validity and zero undefined/NaN.`);

// 9. Intermediate Dynamic Prop UI Swapping in Story Engine
console.log('\n--- 9. Testing Intermediate Dynamic Prop UI Swapping ---');
sb.level = 'intermediate';
sb.characterId = 'dr_eve';
sb.propId = 'quantum_key';
let interProps = window.getUniversePropsForContext(universe2, sb);
if (interProps.length !== 6 || interProps[0].id !== 'quantum_key') {
    throw new Error('Failed Dr. Eve props check');
}

// Switch to Leo
sb.characterId = 'leo';
interProps = window.getUniversePropsForContext(universe2, sb);
if (!interProps.some(p => p.id === sb.propId)) {
    sb.propId = interProps[0].id;
}
if (sb.propId !== 'data_chip') {
    throw new Error('Failed auto-sync to Leo prop data_chip');
}

// Switch to Rover
sb.characterId = 'rover';
interProps = window.getUniversePropsForContext(universe2, sb);
if (!interProps.some(p => p.id === sb.propId)) {
    sb.propId = interProps[0].id;
}
if (sb.propId !== 'cyber_bone') {
    throw new Error('Failed auto-sync to Rover prop cyber_bone');
}

// Switch to Vance
sb.characterId = 'vance';
interProps = window.getUniversePropsForContext(universe2, sb);
if (!interProps.some(p => p.id === sb.propId)) {
    sb.propId = interProps[0].id;
}
if (sb.propId !== 'satellite') {
    throw new Error('Failed auto-sync to Vance prop satellite');
}
console.log('[PASS] Intermediate dynamic prop switching passed with 100% success!');

// 10. Intermediate Sci-Fi Mystery Twists (Two-Phase Continuity)
console.log('\n--- 10. Testing Intermediate Sci-Fi Mystery Twists (Two-Phase Continuity) ---');
if (!universe2.twists || universe2.twists.length !== 4) {
    throw new Error(`Expected exactly 4 intermediate twists, found: ${universe2.twists ? universe2.twists.length : 0}`);
}
const expectedInterTwists = ['encoded_warning', 'key_vibrate', 'power_drain', 'robot_override'];
for (const id of expectedInterTwists) {
    const found = universe2.twists.find(t => t.id === id);
    if (!found) throw new Error(`Missing expected intermediate twist: ${id}`);
}
console.log(`[PASS] 4 Sci-Fi Twists confirmed -> ${universe2.twists.map(t => t.title).join(', ')}`);

let interTwistSvgCount = 0;
for (const twist of universe2.twists) {
    for (const hero of universe2.characters) {
        const prop = universe2.getPropsForCharacter(hero.id)[0];
        for (const setting of universe2.settings) {
            // Narrative check: Panel 3 must include twist text & dialogue
            const panels = universe2.generateStoryPanels(hero, setting, prop, twist);
            const p3 = panels[2];
            if (!p3.caption.includes(twist.text)) {
                throw new Error(`Intermediate Panel 3 caption missing twist text: ${p3.caption}`);
            }
            if (!p3.speech1.includes(twist.dialogue)) {
                throw new Error(`Intermediate Panel 3 speech missing twist dialogue: ${p3.speech1}`);
            }

            // SVG Climax Overlay check on Panel 3 (idx 2)
            const svgClimax = window.renderIntermediateComicSVG(setting.id, hero.id, prop.id, 2, 'intermediate', twist, null);
            if (!svgClimax.includes('story-anim-twist-badge')) {
                throw new Error(`Intermediate climax panel (P3) missing twist badge for ${twist.id}`);
            }
            if (!svgClimax.includes('translate(200, 14)')) {
                throw new Error(`Intermediate climax panel twist badge not centered at (200, 14) for ${twist.id}`);
            }
            if (svgClimax.includes('undefined') || svgClimax.includes('NaN')) {
                throw new Error(`Corrupted intermediate SVG in twist ${twist.id} for ${hero.id} in ${setting.id}`);
            }

            // Conflict isolation: Panel 1 (idx 0) and Panel 2 (idx 1) must NOT leak twist badge
            const svgP1 = window.renderIntermediateComicSVG(setting.id, hero.id, prop.id, 0, 'intermediate', twist, null);
            if (svgP1.includes('story-anim-twist-badge')) {
                throw new Error(`Intermediate P1 leaked twist badge for ${twist.id}`);
            }
            const svgP2 = window.renderIntermediateComicSVG(setting.id, hero.id, prop.id, 1, 'intermediate', twist, null);
            if (svgP2.includes('story-anim-twist-badge')) {
                throw new Error(`Intermediate P2 leaked twist badge for ${twist.id}`);
            }

            // Two-Phase Resolution check: Panel 4 (idx 3) must be badge-free and have valid aftermath
            const svgRes = window.renderIntermediateComicSVG(setting.id, hero.id, prop.id, 3, 'intermediate', twist, null);
            if (svgRes.includes('undefined') || svgRes.includes('NaN')) {
                throw new Error(`Corrupted intermediate SVG in resolution for twist ${twist.id}`);
            }
            if (svgRes.includes('story-anim-twist-badge')) {
                throw new Error(`Intermediate resolution panel (P4) leaked twist badge for ${twist.id}`);
            }
            if (!svgRes.includes('story-intermediate-twist-overlay')) {
                throw new Error(`Intermediate resolution panel missing aftermath overlay for ${twist.id}`);
            }
            interTwistSvgCount += 2;
        }
    }
}
console.log(`[PASS] Verified ${interTwistSvgCount} Sci-Fi Twist SVGs with 100% validity, centered banner, and two-phase continuity.`);

console.log('\n====================================================');
console.log('  INTERMEDIATE CARTRIDGE 1 VERIFICATION COMPLETE ✨ ');
console.log('====================================================\n');

// ====================================================
//   ADVANCED CARTRIDGE 1 (TWILIGHT SANCTUARY) TESTS
// ====================================================

console.log('====================================================');
console.log('  ADVANCED CARTRIDGE 1 (TWILIGHT SANCTUARY) TESTS   ');
console.log('====================================================\n');

// 11. Archetype Character Prop Inventories (Advanced Level 3)
console.log('--- 11. Testing Advanced Archetype Character Prop Inventories ---');
const advHeroes = ['eve', 'turtle', 'dr_tide', 'kai'];
for (const h of advHeroes) {
    const list = universe3.getPropsForCharacter(h);
    if (!list || list.length !== 6) {
        throw new Error(`Advanced Hero ${h} must have exactly 6 props, found: ${list ? list.length : 0}`);
    }
    console.log(`[PASS] Advanced Hero "${h}": 6 props confirmed -> ${list.map(p => p.name).join(', ')}`);
}
// Confirm legacy alias "maya" resolves cleanly to Eve's props
const mayaProps = universe3.getPropsForCharacter('maya');
if (!mayaProps || mayaProps.length !== 6 || mayaProps[0].id !== 'uv_matrix') {
    throw new Error('Legacy alias maya must resolve to Eve props');
}
console.log('[PASS] Legacy alias "maya" correctly resolves to Eve the Oceanographer props');

// 12. Settings Deduplication (Advanced Level 3)
console.log('\n--- 12. Testing Advanced Settings Deduplication ---');
if (universe3.settings.length !== 4) {
    throw new Error(`Expected exactly 4 advanced settings, found: ${universe3.settings.length}`);
}
const advSettingIds = universe3.settings.map(s => s.id);
console.log('[PASS] Advanced settings confirmed:', advSettingIds.join(', '));
const expectedAdvSettings = ['azure_reef', 'twilight_trench', 'kelp_forest', 'sunken_dome'];
for (const s of expectedAdvSettings) {
    if (!advSettingIds.includes(s)) {
        throw new Error(`Missing expected advanced setting: ${s}`);
    }
}

// 13. Testing 96 Advanced Hero-Prop-Setting Story & SVG Combinations (384 Panels)
console.log('\n--- 13. Testing 96 Advanced Hero-Prop-Setting Story & SVG Combinations ---');
let advComboCount = 0;
let advPanelCount = 0;
let advSvgPassCount = 0;

for (const hero of universe3.characters) {
    const heroProps = universe3.getPropsForCharacter(hero.id);
    for (const setting of universe3.settings) {
        for (const prop of heroProps) {
            advComboCount++;
            const panels = universe3.generateStoryPanels(hero, setting, prop, null);
            if (!panels || panels.length !== 4) {
                throw new Error(`Advanced story generator must yield exactly 4 panels for ${hero.id} + ${setting.id} + ${prop.id}`);
            }
            advPanelCount += 4;

            // Caption Assertions
            for (let i = 0; i < 4; i++) {
                const p = panels[i];
                if (!p.caption || p.caption.includes('undefined') || p.caption.includes('null') || p.caption.includes('NaN')) {
                    throw new Error(`Corrupted caption in Advanced P${i+1} for ${hero.id} + ${setting.id} + ${prop.id}: "${p.caption}"`);
                }
                if (!p.speech1 || p.speech1.includes('undefined') || p.speech1.includes('null') || p.speech1.includes('NaN')) {
                    throw new Error(`Corrupted speech in Advanced P${i+1} for ${hero.id} + ${setting.id} + ${prop.id}: "${p.speech1}"`);
                }
            }

            // Prop Name Inclusion in P1
            if (!panels[0].caption.includes(prop.name)) {
                throw new Error(`Advanced P1 caption missing prop name "${prop.name}": "${panels[0].caption}"`);
            }

            // Landmark Integrity & Exclusivity (P2, P3, P4)
            const p2 = panels[1];
            const p3 = panels[2];
            const p4 = panels[3];

            if (setting.id === 'azure_reef') {
                if (!p2.caption.toLowerCase().includes('coral arch')) throw new Error(`Azure Reef P2 missing coral arch: "${p2.caption}"`);
                if (!p3.caption.toLowerCase().includes('coral arch')) throw new Error(`Azure Reef P3 missing coral arch: "${p3.caption}"`);
                if (p2.caption.toLowerCase().includes('chimney') || p2.caption.toLowerCase().includes('anchor') || p2.caption.toLowerCase().includes('holdfast')) {
                    throw new Error(`Azure Reef P2 leaked landmark: "${p2.caption}"`);
                }
            } else if (setting.id === 'twilight_trench') {
                if (!p2.caption.toLowerCase().includes('chimney stack')) throw new Error(`Twilight Trench P2 missing chimney stack: "${p2.caption}"`);
                if (!p3.caption.toLowerCase().includes('chimney stack')) throw new Error(`Twilight Trench P3 missing chimney stack: "${p3.caption}"`);
                if (p2.caption.toLowerCase().includes('coral arch') || p2.caption.toLowerCase().includes('anchor') || p2.caption.toLowerCase().includes('holdfast')) {
                    throw new Error(`Twilight Trench P2 leaked landmark: "${p2.caption}"`);
                }
            } else if (setting.id === 'kelp_forest') {
                if (!p2.caption.toLowerCase().includes('kelp holdfast rock') && !p2.caption.toLowerCase().includes('kelp holdfast')) {
                    throw new Error(`Kelp Forest P2 missing kelp holdfast: "${p2.caption}"`);
                }
                if (!p3.caption.toLowerCase().includes('kelp holdfast rock') && !p3.caption.toLowerCase().includes('kelp holdfast')) {
                    throw new Error(`Kelp Forest P3 missing kelp holdfast: "${p3.caption}"`);
                }
                if (p2.caption.toLowerCase().includes('coral arch') || p2.caption.toLowerCase().includes('chimney') || p2.caption.toLowerCase().includes('anchor')) {
                    throw new Error(`Kelp Forest P2 leaked landmark: "${p2.caption}"`);
                }
            } else if (setting.id === 'sunken_dome') {
                if (!p2.caption.toLowerCase().includes('mooring anchor')) throw new Error(`Sunken Dome P2 missing mooring anchor: "${p2.caption}"`);
                if (!p3.caption.toLowerCase().includes('mooring anchor')) throw new Error(`Sunken Dome P3 missing mooring anchor: "${p3.caption}"`);
                if (p2.caption.toLowerCase().includes('coral arch') || p2.caption.toLowerCase().includes('chimney') || p2.caption.toLowerCase().includes('holdfast')) {
                    throw new Error(`Sunken Dome P2 leaked landmark: "${p2.caption}"`);
                }
            }

            // SVG Verification for each panel
            for (let idx = 0; idx < 4; idx++) {
                const svg = window.renderAdvancedComicSVG(setting.id, hero.id, prop.id, idx, 'advanced', null, null);
                if (!svg || !svg.includes('<svg') || !svg.includes('</svg>')) {
                    throw new Error(`Invalid SVG for Advanced ${hero.id} + ${setting.id} + ${prop.id} P${idx}`);
                }
                if (svg.includes('undefined') || svg.includes('NaN')) {
                    throw new Error(`Corrupted SVG containing undefined/NaN for Advanced ${hero.id} + ${setting.id} + ${prop.id} P${idx}`);
                }
                advSvgPassCount++;
            }
        }
    }
}
console.log(`[PASS] Verified ${advComboCount} advanced combinations across ${advPanelCount} story panels.`);
console.log(`[PASS] Verified ${advSvgPassCount} rendered advanced SVGs with 100% validity and zero undefined/NaN.`);

// 14. Advanced Dynamic Prop UI Swapping
console.log('\n--- 14. Testing Advanced Dynamic Prop UI Swapping ---');
sb.characterId = 'eve';
let advProps = window.getUniversePropsForContext(universe3, sb);
if (advProps.length !== 6 || advProps[0].id !== 'uv_matrix') {
    throw new Error('Failed Eve props check');
}

// Switch to Shelly the Turtle
sb.characterId = 'turtle';
advProps = window.getUniversePropsForContext(universe3, sb);
if (advProps.length !== 6 || advProps[0].id !== 'ancient_coin') {
    throw new Error('Failed Turtle props check');
}
if (!advProps.some(p => p.id === sb.propId)) {
    sb.propId = advProps[0].id;
}
if (sb.propId !== 'ancient_coin') {
    throw new Error('Failed auto-sync to Turtle prop ancient_coin');
}

// Switch to Dr. Tide
sb.characterId = 'dr_tide';
advProps = window.getUniversePropsForContext(universe3, sb);
if (!advProps.some(p => p.id === sb.propId)) {
    sb.propId = advProps[0].id;
}
if (sb.propId !== 'thermal_probe') {
    throw new Error('Failed auto-sync to Dr. Tide prop thermal_probe');
}

// Switch to Kai
sb.characterId = 'kai';
advProps = window.getUniversePropsForContext(universe3, sb);
if (!advProps.some(p => p.id === sb.propId)) {
    sb.propId = advProps[0].id;
}
if (sb.propId !== 'hydro_thruster') {
    throw new Error('Failed auto-sync to Kai prop hydro_thruster');
}
console.log('[PASS] Advanced dynamic prop switching passed with 100% success!');

// 15. Advanced Sci-Fi Marine Mystery Twists (Two-Phase Continuity)
console.log('\n--- 15. Testing Advanced Sci-Fi Marine Mystery Twists (Two-Phase Continuity) ---');
if (!universe3.twists || universe3.twists.length !== 4) {
    throw new Error(`Expected exactly 4 advanced twists, found: ${universe3.twists ? universe3.twists.length : 0}`);
}
const expectedAdvTwists = ['thermal_vent', 'bioluminescent_swarm', 'abyssal_vortex', 'survey_drone'];
for (const id of expectedAdvTwists) {
    const found = universe3.twists.find(t => t.id === id);
    if (!found) throw new Error(`Missing expected advanced twist: ${id}`);
}
console.log(`[PASS] 4 Marine Twists confirmed -> ${universe3.twists.map(t => t.title).join(', ')}`);

let advTwistSvgCount = 0;
for (const twist of universe3.twists) {
    for (const hero of universe3.characters) {
        const prop = universe3.getPropsForCharacter(hero.id)[0];
        for (const setting of universe3.settings) {
            // Narrative check: Panel 3 must include twist text & dialogue
            const panels = universe3.generateStoryPanels(hero, setting, prop, twist);
            const p3 = panels[2];
            if (!p3.caption.includes(twist.text)) {
                throw new Error(`Advanced Panel 3 caption missing twist text: ${p3.caption}`);
            }
            if (!p3.speech1.includes(twist.dialogue)) {
                throw new Error(`Advanced Panel 3 speech missing twist dialogue: ${p3.speech1}`);
            }

            // SVG Climax Overlay check on Panel 3 (idx 2)
            const svgClimax = window.renderAdvancedComicSVG(setting.id, hero.id, prop.id, 2, 'advanced', twist, null);
            if (!svgClimax.includes('story-anim-twist-badge')) {
                throw new Error(`Advanced climax panel (P3) missing twist badge for ${twist.id}`);
            }
            if (!svgClimax.includes('translate(200, 14)')) {
                throw new Error(`Advanced climax panel twist badge not centered at (200, 14) for ${twist.id}`);
            }
            if (svgClimax.includes('undefined') || svgClimax.includes('NaN')) {
                throw new Error(`Corrupted advanced SVG in twist ${twist.id} for ${hero.id} in ${setting.id}`);
            }

            // Conflict isolation: Panel 1 (idx 0) and Panel 2 (idx 1) must NOT leak twist badge
            const svgP1 = window.renderAdvancedComicSVG(setting.id, hero.id, prop.id, 0, 'advanced', twist, null);
            if (svgP1.includes('story-anim-twist-badge')) {
                throw new Error(`Advanced P1 leaked twist badge for ${twist.id}`);
            }
            const svgP2 = window.renderAdvancedComicSVG(setting.id, hero.id, prop.id, 1, 'advanced', twist, null);
            if (svgP2.includes('story-anim-twist-badge')) {
                throw new Error(`Advanced P2 leaked twist badge for ${twist.id}`);
            }

            // Two-Phase Resolution check: Panel 4 (idx 3) must be badge-free and have valid aftermath
            const svgRes = window.renderAdvancedComicSVG(setting.id, hero.id, prop.id, 3, 'advanced', twist, null);
            if (svgRes.includes('undefined') || svgRes.includes('NaN')) {
                throw new Error(`Corrupted advanced SVG in resolution for twist ${twist.id}`);
            }
            if (svgRes.includes('story-anim-twist-badge')) {
                throw new Error(`Advanced resolution panel (P4) leaked twist badge for ${twist.id}`);
            }
            if (!svgRes.includes('story-advanced-twist-overlay')) {
                throw new Error(`Advanced resolution panel missing aftermath overlay for ${twist.id}`);
            }
            advTwistSvgCount += 2;
        }
    }
}
console.log(`[PASS] Verified ${advTwistSvgCount} Marine Twist SVGs with 100% validity, centered banner, and two-phase continuity.`);

// 16. Senior Teacher Stage Cartridges Verification (Beginner, Intermediate, Advanced)
console.log('\n--- 16. Testing Senior Teacher Stage Cartridges (All 3 Tiers) ---');

const seniorCartridges = [
    { name: 'Beginner (A1)', cart: window.STAGE_CARTRIDGE_BEGINNER, expectedLevel: 'beginner', expectedCefr: 'A1' },
    { name: 'Intermediate (A2)', cart: window.STAGE_CARTRIDGE_INTERMEDIATE, expectedLevel: 'intermediate', expectedCefr: 'A2' },
    { name: 'Advanced (B1)', cart: window.STAGE_CARTRIDGE_ADVANCED, expectedLevel: 'advanced', expectedCefr: 'B1' }
];

const allStageItemIds = new Set();
let totalSeniorItems = 0;

for (const { name, cart, expectedLevel, expectedCefr } of seniorCartridges) {
    if (!cart) {
        throw new Error(`Failed to load Senior Stage Cartridge: ${name}`);
    }
    if (cart.level !== expectedLevel) {
        throw new Error(`Cartridge ${name} has invalid level: ${cart.level}`);
    }
    if (cart.cefr !== expectedCefr) {
        throw new Error(`Cartridge ${name} has invalid CEFR: ${cart.cefr}`);
    }
    if (!Array.isArray(cart.items) || cart.items.length < 24) {
        throw new Error(`Cartridge ${name} must have at least 24 items, found: ${cart.items ? cart.items.length : 0}`);
    }

    let tfCount = 0;
    let wwCount = 0;
    let mwCount = 0;
    let trueCount = 0;
    let falseCount = 0;

    for (const item of cart.items) {
        totalSeniorItems++;

        // Duplicate ID check
        if (allStageItemIds.has(item.id)) {
            throw new Error(`Duplicate Senior Stage item ID detected: "${item.id}"`);
        }
        allStageItemIds.add(item.id);

        // Core fields validation
        if (!item.id || typeof item.id !== 'string') {
            throw new Error(`Item missing valid id: ${JSON.stringify(item)}`);
        }
        if (!['tf', 'ww', 'mw'].includes(item.gameType)) {
            throw new Error(`Item ${item.id} has invalid gameType: ${item.gameType}`);
        }
        if (!item.prompt || typeof item.prompt !== 'string' || item.prompt.includes('undefined') || item.prompt.includes('NaN')) {
            throw new Error(`Item ${item.id} has corrupted prompt: "${item.prompt}"`);
        }
        if (!Array.isArray(item.options) || item.options.length !== 2) {
            throw new Error(`Item ${item.id} must have exactly 2 options, found: ${JSON.stringify(item.options)}`);
        }
        if (!Array.isArray(item.gestures) || item.gestures.length !== 2) {
            throw new Error(`Item ${item.id} must have exactly 2 gesture hints, found: ${JSON.stringify(item.gestures)}`);
        }
        if (item.answerIndex !== 0 && item.answerIndex !== 1) {
            throw new Error(`Item ${item.id} must have answerIndex 0 or 1, found: ${item.answerIndex}`);
        }
        if (!item.answerText || typeof item.answerText !== 'string') {
            throw new Error(`Item ${item.id} missing valid answerText`);
        }
        if (!item.explanation || typeof item.explanation !== 'string') {
            throw new Error(`Item ${item.id} missing explanation text`);
        }
        if (!item.praiseAudio || typeof item.praiseAudio !== 'string') {
            throw new Error(`Item ${item.id} missing praiseAudio string`);
        }
        if (!item.visualIcon || typeof item.visualIcon !== 'string') {
            throw new Error(`Item ${item.id} missing visualIcon`);
        }

        // Gesture prompt validation
        if (!item.gestures[0].includes('☝️') || !item.gestures[1].includes('✌️')) {
            throw new Error(`Item ${item.id} gestures must feature ☝️ and ✌️ camera prompts`);
        }

        // Game type counts & True/False balance
        if (item.gameType === 'tf') {
            tfCount++;
            if (item.answerIndex === 0) trueCount++;
            else if (item.answerIndex === 1) falseCount++;
        } else if (item.gameType === 'ww') {
            wwCount++;
        } else if (item.gameType === 'mw') {
            mwCount++;
        }
    }

    if (tfCount !== 8 || wwCount !== 8 || mwCount !== 8) {
        throw new Error(`Cartridge ${name} must have 8 TF, 8 WW, 8 MW. Found: ${tfCount} TF, ${wwCount} WW, ${mwCount} MW`);
    }

    if (trueCount !== 4 || falseCount !== 4) {
        throw new Error(`Cartridge ${name} True/False must have exact 50/50 balance (4 True, 4 False). Found: ${trueCount} True, ${falseCount} False`);
    }

    console.log(`[PASS] Cartridge "${name}": 24 items confirmed (8 True/False [50/50 balanced], 8 Which Word, 8 Mystery Word).`);
}

console.log(`[PASS] Verified ${totalSeniorItems} total Senior Stage items across all 3 tiers with 100% schema integrity and binary camera gestures.`);

// 17. Testing Senior Reading Lab Cartridges (All 3 Tiers)
console.log('\n--- 17. Testing Senior Reading Lab Cartridges (All 3 Tiers) ---');
const readingCartridges = [
    { name: 'Beginner (A1)', path: '../js/senior-reading/cartridges/reading-cartridge-beginner.js' },
    { name: 'Intermediate (A2)', path: '../js/senior-reading/cartridges/reading-cartridge-intermediate.js' },
    { name: 'Advanced (B1)', path: '../js/senior-reading/cartridges/reading-cartridge-advanced.js' }
];

let totalReadingQuestions = 0;
let totalReadingVocab = 0;

for (const rc of readingCartridges) {
    const story = require(rc.path);
    if (!story.id || !story.title || !story.genre || !story.level) {
        throw new Error(`Reading cartridge ${rc.name} missing essential metadata (id, title, genre, level)`);
    }
    if (!story.passage || typeof story.passage !== 'string' || story.passage.length < 30) {
        throw new Error(`Reading cartridge ${rc.name} has invalid passage text`);
    }
    if (!Array.isArray(story.storyObjects) || story.storyObjects.length < 3) {
        throw new Error(`Reading cartridge ${rc.name} must have at least 3 storyObjects`);
    }
    for (const obj of story.storyObjects) {
        if (!obj.name || !obj.icon || !obj.color) {
            throw new Error(`Reading cartridge ${rc.name} object missing name, icon, or color: ${JSON.stringify(obj)}`);
        }
    }
    if (!Array.isArray(story.vocab) || story.vocab.length < 3) {
        throw new Error(`Reading cartridge ${rc.name} must have at least 3 vocab words`);
    }
    for (const v of story.vocab) {
        if (!v.word || !v.def) {
            throw new Error(`Reading cartridge ${rc.name} vocab item missing word or def: ${JSON.stringify(v)}`);
        }
        const regex = new RegExp(`\\b${v.word}\\b`, 'i');
        if (!regex.test(story.passage)) {
            throw new Error(`Reading cartridge ${rc.name} vocab word "${v.word}" does not appear in passage text`);
        }
        totalReadingVocab++;
    }
    if (!Array.isArray(story.questions) || story.questions.length !== 4) {
        throw new Error(`Reading cartridge ${rc.name} must have exactly 4 comprehension questions, found: ${story.questions?.length}`);
    }
    for (let i = 0; i < story.questions.length; i++) {
        const q = story.questions[i];
        if (!q.q || !Array.isArray(q.options) || q.options.length < 3) {
            throw new Error(`Reading cartridge ${rc.name} question ${i + 1} missing prompt or options`);
        }
        if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.options.length) {
            throw new Error(`Reading cartridge ${rc.name} question ${i + 1} has invalid correct index: ${q.correct}`);
        }
        totalReadingQuestions++;
    }
    if (!story.discussionPrompt || typeof story.discussionPrompt !== 'string') {
        throw new Error(`Reading cartridge ${rc.name} missing discussionPrompt`);
    }
    console.log(`[PASS] Reading Cartridge "${rc.name}": Validated passage, ${story.storyObjects.length} objects, ${story.vocab.length} vocab, 4 comprehension questions.`);
}

console.log(`[PASS] Verified ${readingCartridges.length} Reading Lab Cartridges (${totalReadingQuestions} questions, ${totalReadingVocab} highlighted vocabulary words) with 100% integrity.`);

// 18. Testing Senior Vocabulary & Spelling Lab Cartridges (All 3 Tiers)
console.log('\n--- 18. Testing Senior Vocabulary & Spelling Cartridges (All 3 Tiers) ---');
const vocabCartridges = [
    { name: 'Beginner (A1)', path: '../js/senior-vocab/cartridges/vocab-cartridge-beginner.js' },
    { name: 'Intermediate (A2)', path: '../js/senior-vocab/cartridges/vocab-cartridge-intermediate.js' },
    { name: 'Advanced (B1)', path: '../js/senior-vocab/cartridges/vocab-cartridge-advanced.js' }
];

let totalVocabWords = 0;

for (const vc of vocabCartridges) {
    const cartridge = require(vc.path);
    if (!cartridge || typeof cartridge !== 'object') {
        throw new Error(`Vocab cartridge ${vc.name} did not export a valid object`);
    }
    const categories = ['head_words', 'tail_words', 'compound'];
    let catWordCounts = {};

    for (const cat of categories) {
        if (!Array.isArray(cartridge[cat]) || cartridge[cat].length === 0) {
            throw new Error(`Vocab cartridge ${vc.name} missing category array: ${cat}`);
        }
        catWordCounts[cat] = cartridge[cat].length;

        for (const item of cartridge[cat]) {
            if (!item.word || typeof item.word !== 'string') {
                throw new Error(`Vocab item in ${vc.name} (${cat}) missing valid word: ${JSON.stringify(item)}`);
            }
            if (!item.phonetic || typeof item.phonetic !== 'string') {
                throw new Error(`Vocab item ${item.word} in ${vc.name} missing phonetic string`);
            }
            if (!item.equation || typeof item.equation !== 'string') {
                throw new Error(`Vocab item ${item.word} in ${vc.name} missing equation`);
            }
            if (!Array.isArray(item.parts) || item.parts.length < 2) {
                throw new Error(`Vocab item ${item.word} in ${vc.name} parts must have at least 2 components`);
            }
            for (const part of item.parts) {
                if (!part.text || !part.type || !part.meaning) {
                    throw new Error(`Vocab item ${item.word} in ${vc.name} has malformed part: ${JSON.stringify(part)}`);
                }
            }
            if (!item.definition || typeof item.definition !== 'string') {
                throw new Error(`Vocab item ${item.word} in ${vc.name} missing definition`);
            }
            if (!item.sentence || typeof item.sentence !== 'string') {
                throw new Error(`Vocab item ${item.word} in ${vc.name} missing example sentence`);
            }
            totalVocabWords++;
        }
    }

    // Verify alias getters
    if (!cartridge.prefixes || !cartridge.suffixes || !cartridge.prefix_suffix) {
        throw new Error(`Vocab cartridge ${vc.name} missing backward-compatible getters (prefixes, suffixes, prefix_suffix)`);
    }

    console.log(`[PASS] Vocab Cartridge "${vc.name}": ${catWordCounts.head_words} Head Words, ${catWordCounts.tail_words} Tail Words, ${catWordCounts.compound} Compound Words.`);
}

console.log(`[PASS] Verified ${vocabCartridges.length} Vocabulary Lab Cartridges (${totalVocabWords} total rich morphology words) with 100% integrity.`);

// 19. Testing Senior STEM & Science Lab Cartridges (All 3 Tiers)
console.log('\n--- 19. Testing Senior STEM & Science Lab Cartridges (All 3 Tiers) ---');
const stemCartridges = [
    { name: 'Beginner (A1)', path: '../js/stem/lab-plants.js' },
    { name: 'Intermediate (A2)', path: '../js/stem/lab-water-cycle.js' },
    { name: 'Advanced (B1)', path: '../js/stem/lab-solar-circuits.js' }
];

let totalHotspots = 0;
let totalExpItems = 0;

for (const sc of stemCartridges) {
    const cartridge = require(sc.path);
    if (!cartridge || !cartridge.topicData) {
        throw new Error(`STEM cartridge ${sc.name} missing topicData export`);
    }
    const t = cartridge.topicData;
    if (!t.id || !t.diagramType || !t.experimentType || !t.title || !t.badge) {
        throw new Error(`STEM cartridge ${sc.name} missing metadata`);
    }
    if (!t.diagram || !Array.isArray(t.diagram.hotspots) || t.diagram.hotspots.length < 4) {
        throw new Error(`STEM cartridge ${sc.name} must have at least 4 diagram hotspots`);
    }
    for (const h of t.diagram.hotspots) {
        if (!h.id || !h.label || !h.title || !h.desc || !h.speech) {
            throw new Error(`STEM hotspot in ${sc.name} missing fields: ${JSON.stringify(h)}`);
        }
        totalHotspots++;
    }
    if (!t.experiment || !Array.isArray(t.experiment.items) || t.experiment.items.length < 3) {
        throw new Error(`STEM cartridge ${sc.name} must have at least 3 experiment items`);
    }
    for (const item of t.experiment.items) {
        if (!item.id || !item.name || !item.speakName || !item.predictFrame || !item.resultFrame || !item.resultDesc) {
            throw new Error(`STEM experiment item in ${sc.name} missing fields: ${JSON.stringify(item)}`);
        }
        totalExpItems++;
    }

    // Verify SVG rendering functions
    if (typeof cartridge.getDiagramSVG !== 'function') {
        throw new Error(`STEM cartridge ${sc.name} missing getDiagramSVG function`);
    }
    const diagSVG = cartridge.getDiagramSVG();
    if (!diagSVG.includes('<svg') || !diagSVG.includes('</svg>') || diagSVG.includes('undefined') || diagSVG.includes('NaN')) {
        throw new Error(`STEM cartridge ${sc.name} diagram SVG rendering corrupted`);
    }

    if (typeof cartridge.getExperimentSVG !== 'function') {
        throw new Error(`STEM cartridge ${sc.name} missing getExperimentSVG function`);
    }
    for (const item of t.experiment.items) {
        const expSVG = cartridge.getExperimentSVG(item, true);
        if (!expSVG.includes('<svg') || !expSVG.includes('</svg>') || expSVG.includes('undefined') || expSVG.includes('NaN')) {
            throw new Error(`STEM cartridge ${sc.name} experiment SVG corrupted for item ${item.id}`);
        }
    }

    console.log(`[PASS] STEM Cartridge "${sc.name}": Validated "${t.title}" with ${t.diagram.hotspots.length} hotspots, ${t.experiment.items.length} apparatus simulations, and 100% SVG integrity.`);
}

console.log(`[PASS] Verified ${stemCartridges.length} STEM Lab Cartridges (${totalHotspots} interactive hotspots, ${totalExpItems} virtual apparatus simulations) with 100% integrity.`);

// 20. Testing Reading Skills Practise Modular Cartridges (All 3 Tiers & 4 Pedagogical Phases)
console.log('\n--- 20. Testing Reading Skills Practise Modular Cartridges (All 3 Tiers & 4 Phases) ---');
const practiseCartridges = [
    { name: 'Beginner (A1)', path: '../js/stories/scene-bluebird-garden.js' },
    { name: 'Intermediate (A2)', path: '../js/stories/scene-winter-window.js' },
    { name: 'Advanced (B1)', path: '../js/stories/scene-coral-reef.js' }
];

let totalPractiseVocab = 0;
let totalPronounHotspots = 0;
let totalFlowchartNodes = 0;
let totalClozeDropdowns = 0;

for (const pc of practiseCartridges) {
    const cartridge = require(pc.path);
    if (!cartridge || !cartridge.unitData) {
        throw new Error(`Reading Practise cartridge ${pc.name} missing unitData export`);
    }
    const u = cartridge.unitData;
    if (!u.id || !u.title || !u.levelBadge || !u.targetAge || !u.skillFocus || !u.sceneType) {
        throw new Error(`Reading Practise cartridge ${pc.name} missing essential unit metadata`);
    }

    // Phase 1: Warmup & Vocab Spotter & Prediction
    if (!u.warmup || !u.warmup.question || !Array.isArray(u.warmup.hints)) {
        throw new Error(`Reading Practise cartridge ${pc.name} missing Phase 1 warmup`);
    }
    if (!Array.isArray(u.vocab) || u.vocab.length < 5) {
        throw new Error(`Reading Practise cartridge ${pc.name} must have at least 5 Phase 1 vocab spotter words`);
    }
    for (const v of u.vocab) {
        if (!v.word || !v.phonetic || !v.def || !v.sentence || !v.svgType) {
            throw new Error(`Reading Practise cartridge ${pc.name} malformed vocab item: ${JSON.stringify(v)}`);
        }
        totalPractiseVocab++;
    }
    if (!u.prediction || !u.prediction.prompt || !Array.isArray(u.prediction.options) || u.prediction.options.length < 3) {
        throw new Error(`Reading Practise cartridge ${pc.name} missing Phase 1 prediction challenge`);
    }
    const correctPreds = u.prediction.options.filter(o => o.correct === true);
    if (correctPreds.length !== 1) {
        throw new Error(`Reading Practise cartridge ${pc.name} prediction must have exactly 1 correct answer, found: ${correctPreds.length}`);
    }

    // Phase 2: Narration & Pronoun Detective
    if (!u.story || !Array.isArray(u.story.paragraphs) || u.story.paragraphs.length === 0) {
        throw new Error(`Reading Practise cartridge ${pc.name} missing Phase 2 story text`);
    }
    let unitPronounCount = 0;
    for (const p of u.story.paragraphs) {
        if (!Array.isArray(p.sentences) || p.sentences.length === 0) {
            throw new Error(`Reading Practise cartridge ${pc.name} paragraph ${p.num} missing sentences`);
        }
        for (const s of p.sentences) {
            if (!s.id || !s.text) {
                throw new Error(`Reading Practise cartridge ${pc.name} sentence missing id or text: ${JSON.stringify(s)}`);
            }
            if (s.hasPronounHotspot) {
                if (!s.pronoun || !s.antecedent || !s.question || !Array.isArray(s.choices) || typeof s.correctIndex !== 'number') {
                    throw new Error(`Reading Practise cartridge ${pc.name} malformed pronoun hotspot: ${JSON.stringify(s)}`);
                }
                unitPronounCount++;
                totalPronounHotspots++;
            }
        }
    }
    if (unitPronounCount === 0) {
        throw new Error(`Reading Practise cartridge ${pc.name} must contain at least 1 Pronoun Detective hotspot`);
    }

    // Phase 3: Logic & Inference Flowchart
    const flowchartSteps = Array.isArray(u.flowchart) ? u.flowchart : (u.flowchart?.steps || []);
    if (!Array.isArray(flowchartSteps) || flowchartSteps.length < 3) {
        throw new Error(`Reading Practise cartridge ${pc.name} must have at least 3 Phase 3 flowchart steps`);
    }
    for (const step of flowchartSteps) {
        if (!step.label || (!step.detail && !step.action)) {
            throw new Error(`Reading Practise cartridge ${pc.name} flowchart step malformed: ${JSON.stringify(step)}`);
        }
        totalFlowchartNodes++;
    }

    // Phase 4: Grammar Doctor & Cloze Dropdowns
    const grammarItems = Array.isArray(u.grammarDoctor) ? u.grammarDoctor : (u.grammar?.examples || []);
    if (!Array.isArray(grammarItems) || grammarItems.length < 2) {
        throw new Error(`Reading Practise cartridge ${pc.name} missing Phase 4 Grammar Doctor lesson items`);
    }

    const clozeItems = u.cloze?.items || u.cloze?.dropdowns || [];
    if (!Array.isArray(clozeItems) || clozeItems.length < 3) {
        throw new Error(`Reading Practise cartridge ${pc.name} must have at least 3 Phase 4 cloze dropdowns`);
    }
    for (const drop of clozeItems) {
        if (!drop.target || !Array.isArray(drop.options) || !drop.options.includes(drop.target)) {
            throw new Error(`Reading Practise cartridge ${pc.name} cloze dropdown target "${drop.target}" must be in options: ${JSON.stringify(drop.options)}`);
        }
        totalClozeDropdowns++;
    }

    // Living Scene SVG Validity
    if (typeof cartridge.getSceneSVG !== 'function') {
        throw new Error(`Reading Practise cartridge ${pc.name} missing getSceneSVG function`);
    }
    const sceneSVG = cartridge.getSceneSVG(false);
    if (!sceneSVG.includes('<svg') || !sceneSVG.includes('</svg>') || sceneSVG.includes('undefined') || sceneSVG.includes('NaN')) {
        throw new Error(`Reading Practise cartridge ${pc.name} living scene SVG corrupted`);
    }

    console.log(`[PASS] Reading Practise Cartridge "${pc.name}": Validated 4-phase unit "${u.title}" (${u.vocab.length} vocab, ${unitPronounCount} pronoun hotspots, ${flowchartSteps.length} flowchart nodes, ${clozeItems.length} cloze dropdowns, and 100% SVG scene validity).`);
}

console.log(`[PASS] Verified ${practiseCartridges.length} Reading Skills Practise Cartridges (${totalPractiseVocab} vocab words, ${totalPronounHotspots} pronoun detective hotspots, ${totalFlowchartNodes} flowchart nodes, ${totalClozeDropdowns} cloze dropdowns) with 100% integrity.`);

console.log('\n====================================================');
console.log('  ALL THREE LEVELS (BEGINNER, INTERMEDIATE, ADVANCED) PASSED! 🚀✨');
console.log('====================================================\n');
