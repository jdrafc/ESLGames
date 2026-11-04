/* ==========================================================================
   SENIOR STORY BUILDER & COMIC CREATOR ENGINE (AGES 8-10)
   Modular Comic Stage Controller & Presentation Engine
   Cartridges registered via js/story-builder/universe-registry.js
   ========================================================================== */

var STORY_UNIVERSES_DATA = (typeof window !== 'undefined' && window.STORY_UNIVERSES_DATA) || {
    beginner: [],
    intermediate: [],
    advanced: []
};

function getStoryUniversesList(level) {
    if (typeof getStoryUniverses === 'function') {
        const list = getStoryUniverses(level);
        if (list && list.length > 0) return list;
    }
    const lvl = level || (appState && appState.storyBuilder && appState.storyBuilder.level) || 'intermediate';
    let list = STORY_UNIVERSES_DATA[lvl] || STORY_UNIVERSES_DATA.intermediate || [];
    if (!Array.isArray(list)) list = [list];
    return list;
}

function getActiveStoryUniverse(level, universeIndex) {
    const list = getStoryUniversesList(level);
    const idx = (typeof universeIndex === 'number')
        ? universeIndex
        : ((appState && appState.storyBuilder && typeof appState.storyBuilder.universeIndex === 'number') ? appState.storyBuilder.universeIndex : 0);
    return list[idx] || list[0];
}

/**
 * Generates an engaging, natural ESL story title from chosen hero and setting.
 * Formula: [Hero]'s [Setting] Adventure
 * Examples:
 * - "Max the Puppy" + "Sunny Oak Park" -> "Max the Puppy's Sunny Oak Park Adventure"
 * - "Ranger Sam" + "The Warm Bench" -> "Ranger Sam's Warm Bench Adventure"
 * - "Leo" + "Leo's Backyard" -> "Leo's Backyard Adventure"
 * - "Dr. Eve" + "Quantum Energy Lab" -> "Dr. Eve's Quantum Energy Lab Adventure"
 * - "Dr. Tide" + "Azure Coral Reef" -> "Dr. Tide's Azure Coral Reef Adventure"
 */
function generateStoryTitle(hero, setting) {
    const heroName = (typeof hero === 'string' ? hero : (hero && hero.name) || 'Hero').trim();
    let settingName = (typeof setting === 'string' ? setting : (setting && setting.name) || 'Adventure').trim();

    // Strip leading "The " from setting (e.g. "The Warm Bench" -> "Warm Bench")
    settingName = settingName.replace(/^The\s+/i, '');

    // Handle possessive in setting name (e.g. "Leo's Backyard")
    if (settingName.toLowerCase().startsWith(heroName.toLowerCase() + "'s ")) {
        return `${settingName} Adventure`;
    }
    if (/^[A-Za-z]+'s\s+/i.test(settingName)) {
        settingName = settingName.replace(/^[A-Za-z]+'s\s+/i, '');
    }

    let possessiveHero = heroName;
    if (!possessiveHero.endsWith("'s")) {
        if (possessiveHero.endsWith("'")) {
            possessiveHero += "s";
        } else {
            possessiveHero += "'s";
        }
    }

    return `${possessiveHero} ${settingName} Adventure`;
}

if (typeof window !== 'undefined') {
    window.getStoryUniversesList = getStoryUniversesList;
    window.getActiveStoryUniverse = getActiveStoryUniverse;
    window.generateStoryTitle = generateStoryTitle;
}

function getUniversePropsForContext(universe, sb) {
    if (!universe) return [];
    if (typeof universe.getPropsForCharacter === 'function' && sb && sb.characterId) {
        return universe.getPropsForCharacter(sb.characterId) || [];
    }
    return universe.props || [];
}

// Dynamic Story Generator: creates an engaging, complete ESL story arc based on selected Setting, Hero, Prop & Twist
function generateStoryPanels(sb, universe) {
    const level = sb.level || 'intermediate';
    const hero = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
    const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];
    const setting = universe.settings.find(s => s.id === sb.settingId) || universe.settings[0];
    const availableProps = getUniversePropsForContext(universe, sb);
    const prop = availableProps.find(p => p.id === sb.propId) || availableProps[0] || (universe.props && universe.props[0]);
    const twist = sb.activeTwist;

    sb.lastPropId = sb.propId;
    sb.lastCharId = sb.characterId;
    sb.lastSettingId = sb.settingId;

    // Dynamically update the story title based on chosen Hero and Setting
    if (universe && universe.isPlaceholder) {
        sb.customTitle = `${universe.masterTitle || 'Storyboard'}: Slot Ready`;
    } else {
        sb.customTitle = generateStoryTitle(hero, setting);
    }

    // Check if the cartridge provides its own dynamic story arc generator
    if (universe && typeof universe.generateStoryPanels === 'function') {
        const customPanels = universe.generateStoryPanels(hero, setting, prop, twist);
        if (customPanels && customPanels.length > 0) {
            sb.panels = customPanels;
            return;
        }
    }

    if (level === 'beginner') {
        if (typeof generateBeginnerStoryPanels === 'function') {
            sb.panels = generateBeginnerStoryPanels(hero, setting, prop, twist);
            return;
        }
        // 🟢 Level 1: Beginner (3 Panels - True Hero-Driven Story)
        let p1Cap = `One sunny morning, ${hero.name} arrived at ${setting.name} with the ${prop.name}.`;
        let p1Speech = `Ready for a wonderful day at ${setting.name}! Let's have fun!`;
        if (hero.id === 'max') {
            p1Cap = `One sunny morning, Max the Puppy ran happily into ${setting.name} carrying the ${prop.name}.`;
            p1Speech = `Woof woof! I am so excited to explore ${setting.name} today!`;
        } else if (hero.id === 'leo') {
            p1Cap = `One sunny morning, Leo walked happily into ${setting.name} carrying the ${prop.name}.`;
            p1Speech = `It is a beautiful morning in ${setting.name}! Let's play!`;
        } else if (hero.id === 'cleo') {
            p1Cap = `One sunny morning, Cleo the Cat crept playfully into ${setting.name}, batting gently at the ${prop.name}.`;
            p1Speech = `Meow! Let's see what secrets are hiding in ${setting.name}!`;
        } else if (hero.id === 'sam') {
            p1Cap = `One sunny morning, Ranger Sam patrolled ${setting.name}, carefully holding the ${prop.name}.`;
            p1Speech = `Welcome to ${setting.name}! Let's make sure all animals are safe!`;
        }

        const isBackyard = (setting.id === 'backyard');
        const isCreek = (setting.id === 'creek');
        const isWarmBench = (setting.id === 'bench_area');
        const obstacleText = isBackyard ? 'the wooden doghouse' : (isCreek ? 'the wooden bridge' : (isWarmBench ? 'the warm wooden bench' : 'the park bench'));
        const obstacleShort = isBackyard ? 'the doghouse' : (isCreek ? 'the wooden bridge' : 'the bench');
        const prepWord = isBackyard ? 'inside' : 'under';
        const prepInto = isBackyard ? 'into' : 'under';

        let p2Cap = twist ? `Suddenly, ${twist.text}` : `Suddenly, while playing in ${setting.name}, the ${prop.name} bounced away and rolled ${prepWord} ${obstacleText}!`;
        let p2Speech = twist ? twist.dialogue : `Oh no! Look ${prepWord} ${obstacleShort}! Where did the ${prop.name} go?!`;
        if (hero.id === 'max') p2Speech = `Woof! The ${prop.name} rolled right ${prepInto} ${obstacleShort}!`;
        if (hero.id === 'leo') p2Speech = `Oh no! My ${prop.name} bounced ${prepWord} ${obstacleShort}!`;
        if (hero.id === 'cleo') p2Speech = `Meow! I see the ${prop.name} hiding ${prepWord} ${obstacleShort}!`;
        if (hero.id === 'sam') p2Speech = `Hold on! The ${prop.name} slipped ${prepInto} ${obstacleShort}!`;

        let p3Cap = `In the end, ${hero.name} safely recovered the ${prop.name} from ${prepWord} ${obstacleShort} and celebrated!`;
        let p3Speech = `We did it! Teamwork solved the problem at ${setting.name}!`;
        if (hero.id === 'max') {
            p3Cap = `In the end, Max the Puppy squeezed ${prepWord} ${obstacleShort}, safely retrieved the ${prop.name}, and wagged his tail happily!`;
            p3Speech = `Woof woof! I got the ${prop.name} back!`;
        } else if (hero.id === 'leo') {
            p3Cap = `In the end, Leo reached ${prepWord} ${obstacleShort}, safely recovered the ${prop.name}, and cheered with joy!`;
            p3Speech = `Hooray! I recovered the ${prop.name}! Mission complete!`;
        } else if (hero.id === 'cleo') {
            p3Cap = `In the end, Cleo the Cat pounced ${prepInto} ${obstacleShort}, safely retrieved the ${prop.name}, and purred proudly!`;
            p3Speech = `Purr! I found the ${prop.name} safe and sound!`;
        } else if (hero.id === 'sam') {
            p3Cap = `In the end, Ranger Sam carefully retrieved the ${prop.name} from ${prepWord} ${obstacleShort}, keeping ${setting.name} tidy and safe!`;
            p3Speech = `Safety restored! Great job recovering the ${prop.name}!`;
        }

        sb.panels = [
            { panelIndex: 0, roleBadge: 'Beginning', caption: p1Cap, speech1: p1Speech, speech2: '' },
            { panelIndex: 1, roleBadge: 'The Problem', caption: p2Cap, speech1: p2Speech, speech2: '' },
            { panelIndex: 2, roleBadge: 'Solution', caption: p3Cap, speech1: p3Speech, speech2: '' }
        ];
    } else if (level === 'advanced') {
        // 🔴 Level 3: Advanced (4 Panels - Single Hero Dialogue matching Levels 1 & 2)
        let p1Cap = `Deep beneath the surface of ${setting.name}, ${hero.name} steered through the cool ocean currents equipped with the ${prop.name}.`;
        let p1Speech1 = `Calibrating subsea telemetry. Ambient clarity in ${setting.name} is optimal today.`;
        if (hero.id === 'dr_tide') p1Speech1 = `Calibrating thermal monitors in ${setting.name}. Ambient reef clarity is optimal today.`;
        if (hero.id === 'kai') p1Speech1 = `Submersible thrusters online. Scanning navigation channels into ${setting.name}.`;

        let p2Cap = `Through the observation dome, the ${prop.name} illuminated rare bioluminescent organisms flourishing throughout ${setting.name}.`;
        let p2Speech1 = `Look at the radiant fluorescence! The ${prop.name} is revealing pigments never documented before.`;
        if (hero.id === 'dr_tide') p2Speech1 = `Fascinating! The ${prop.name} reveals bioluminescent pigments never recorded in this bay!`;
        if (hero.id === 'kai') p2Speech1 = `Telemetry confirmed. The ${prop.name} is logging vibrant ultraviolet readings.`;

        let p3Cap = twist ? `Without warning, ${twist.text}` : `Without warning, a violent thermal surge ripped through ${setting.name}, threatening the delicate ${prop.name}!`;
        let p3Speech1 = twist ? twist.dialogue : `Hold steady! The sudden current is pushing us toward the fragile ridge!`;
        if (!twist && hero.id === 'dr_tide') p3Speech1 = `Thermal spike detected! We must protect the ${prop.name} and stabilize our depth!`;
        if (!twist && hero.id === 'kai') p3Speech1 = `Engaging auxiliary thrusters! Navigating away from the hydrothermal surge!`;

        let p4Cap = `With courageous precision, ${hero.name} secured the ${prop.name}, permanently safeguarding ${setting.name}.`;
        let p4Speech1 = `All environmental telemetry logged and confirmed! This fragile sanctuary at ${setting.name} is protected.`;
        if (hero.id === 'dr_tide') p4Speech1 = `A historic conservation victory! Twilight Bay's marine habitat is officially protected.`;
        if (hero.id === 'kai') p4Speech1 = `Submersible secured and all mission data verified! Expedition a complete success.`;

        sb.panels = [
            { panelIndex: 0, roleBadge: 'Setup', caption: p1Cap, speech1: p1Speech1, speech2: '' },
            { panelIndex: 1, roleBadge: 'Catalyst', caption: p2Cap, speech1: p2Speech1, speech2: '' },
            { panelIndex: 2, roleBadge: 'Climax & Twist', caption: p3Cap, speech1: p3Speech1, speech2: '' },
            { panelIndex: 3, roleBadge: 'Resolution', caption: p4Cap, speech1: p4Speech1, speech2: '' }
        ];
    } else {
        // 🟡 Level 2: Intermediate (4 Panels)
        let p1Cap = `First, ${hero.name} calibrated diagnostic monitors inside ${setting.name} to inspect the ${prop.name}.`;
        let p1Speech = `All diagnostic sensors at ${setting.name} are aligned and recording telemetry.`;
        if (hero.id === 'leo') p1Speech = `Cadet Leo reporting for duty! The ${prop.name} telemetry readings are locked in.`;
        if (hero.id === 'rover') p1Speech = `Beep-boop! Rover scanner confirms energy frequencies at ${setting.name} are optimal.`;
        if (hero.id === 'vance') p1Speech = `Command status is nominal. Stand by for the ${prop.name} synchronization sequence.`;

        let p2Cap = `Next, the ${prop.name} pulsed with vibrant quantum energy, illuminating the chamber inside ${setting.name}.`;
        let p2Speech = `Remarkable! Look at the waveform harmonic frequency emitting from the ${prop.name}!`;
        if (hero.id === 'leo') p2Speech = `Look at the crystal core! The ${prop.name} is projecting encoded starmap coordinates!`;
        if (hero.id === 'rover') p2Speech = `Woof-beep! High-frequency quantum radiation detected inside ${setting.name}!`;
        if (hero.id === 'vance') p2Speech = `Alert all stations! The ${prop.name} has unlocked a confidential transmission!`;

        let p3Cap = twist ? `Suddenly, ${twist.text}` : `Suddenly, an unexpected power surge rattled ${setting.name} because the ${prop.name} overloaded the circuit grid!`;
        let p3Speech = twist ? twist.dialogue : `Hold steady! We have sixty seconds before the power containment field collapses!`;
        if (!twist && hero.id === 'leo') p3Speech = `The power core is fluctuating! We must reroute auxiliary shields to ${setting.name}!`;
        if (!twist && hero.id === 'rover') p3Speech = `Warning! System overload detected! Engaging automated cyber-damping fields!`;
        if (!twist && hero.id === 'vance') p3Speech = `Emergency protocols engaged! Protect the ${prop.name} and stabilize the perimeter!`;

        let p4Cap = `In the end, ${hero.name} harmonized the quantum frequencies, safeguarding the ${prop.name} and saving ${setting.name}.`;
        let p4Speech = `The connection is restored! Our expedition at ${setting.name} is a complete success.`;
        if (hero.id === 'leo') p4Speech = `Frequencies aligned! We saved the station and decoded the quantum secret!`;
        if (hero.id === 'rover') p4Speech = `Telemetry 100% nominal! Rover tail wag-protocol initiated!`;
        if (hero.id === 'vance') p4Speech = `Outstanding courage, crew. The mission at ${setting.name} is completely secure.`;

        sb.panels = [
            { panelIndex: 0, roleBadge: 'Setting', caption: p1Cap, speech1: p1Speech, speech2: '' },
            { panelIndex: 1, roleBadge: 'The Discovery', caption: p2Cap, speech1: p2Speech, speech2: '' },
            { panelIndex: 2, roleBadge: 'Climax & Twist', caption: p3Cap, speech1: p3Speech, speech2: '' },
            { panelIndex: 3, roleBadge: 'Resolution', caption: p4Cap, speech1: p4Speech, speech2: '' }
        ];
    }
}
/* --- CONTROLLER & EVENT HANDLERS --- */
function getSeniorStoryContext() {
    if (!appState.storyBuilder) {
        appState.storyBuilder = {
            level: 'intermediate',
            universeIndex: 0,
            settingId: 'quantum_lab',
            characterId: 'dr_eve',
            secondaryCharId: 'leo',
            propId: 'quantum_key',
            customTitle: "Dr. Eve's Quantum Energy Lab Adventure",
            activeTwist: null,
            panels: []
        };
    }
    const sb = appState.storyBuilder;
    if (!sb.level) sb.level = 'intermediate';
    if (typeof sb.universeIndex !== 'number') sb.universeIndex = 0;

    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);

    // Fallbacks if active selections don't exist in current universe
    if (!universe.settings.some(s => s.id === sb.settingId)) sb.settingId = universe.defaultSetting;
    if (!universe.characters.some(c => c.id === sb.characterId)) sb.characterId = universe.defaultChar;
    if (!universe.characters.some(c => c.id === sb.secondaryCharId)) sb.secondaryCharId = universe.defaultSecondaryChar;
    const availableProps = getUniversePropsForContext(universe, sb);
    if (!availableProps.some(p => p.id === sb.propId)) sb.propId = availableProps[0] ? availableProps[0].id : universe.defaultProp;
    if (!sb.customTitle || sb.customTitle === universe.defaultTitle) {
        const curHero = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
        const curSetting = universe.settings.find(s => s.id === sb.settingId) || universe.settings[0];
        sb.customTitle = universe.isPlaceholder ? `${universe.masterTitle}: Slot Ready` : generateStoryTitle(curHero, curSetting);
    }

    return sb;
}

function initStoryBuilderState() {
    const sb = getSeniorStoryContext();
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);
    const templates = (universe && universe.templates) || [];

    // Ensure valid setting & character & prop for this universe
    const hasValidSetting = universe.settings.some(s => s.id === sb.settingId);
    const hasValidHero = universe.characters.some(c => c.id === sb.characterId);
    let availableProps = getUniversePropsForContext(universe, sb);
    const hasValidProp = availableProps.some(p => p.id === sb.propId);
    if (!hasValidSetting || !hasValidHero || !hasValidProp) {
        if (!hasValidSetting) sb.settingId = universe.defaultSetting;
        if (!hasValidHero) sb.characterId = universe.defaultChar;
        availableProps = getUniversePropsForContext(universe, sb);
        if (!availableProps.some(p => p.id === sb.propId)) {
            sb.propId = availableProps[0] ? availableProps[0].id : universe.defaultProp;
        }
        sb.secondaryCharId = universe.defaultSecondaryChar;
        const curHero = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
        const curSetting = universe.settings.find(s => s.id === sb.settingId) || universe.settings[0];
        sb.customTitle = universe.isPlaceholder ? `${universe.masterTitle}: Slot Ready` : generateStoryTitle(curHero, curSetting);
        sb.panels = [];
    }

    // Clean any saved panels from localStorage that contain trailing emojis/symbols and clear legacy secondary speech
    if (sb.panels && Array.isArray(sb.panels)) {
        const emojiFilterRegex = /[\u{1F300}-\u{1FAFF}\u{200D}\u{2300}-\u{23FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}]/gu;
        sb.panels.forEach(p => {
            if (p.speech1 && emojiFilterRegex.test(p.speech1)) {
                p.speech1 = p.speech1.replace(emojiFilterRegex, '').replace(/\s{2,}/g, ' ').trim();
            }
            p.speech2 = '';
        });
    }

    const activeProp = availableProps.find(p => p.id === sb.propId) || availableProps[0];

    // Detect stale panels from previous sessions/localStorage (e.g. legacy collar/leash or mismatched prop text)
    const isStale = !sb.panels || !templates.length || sb.panels.length !== templates.length ||
        (sb.lastPropId && sb.lastPropId !== sb.propId) ||
        (sb.lastCharId && sb.lastCharId !== sb.characterId) ||
        (sb.lastSettingId && sb.lastSettingId !== sb.settingId) ||
        (sb.panels[0] && typeof sb.panels[0].caption === 'string' && activeProp && !sb.panels[0].caption.includes(activeProp.name)) ||
        (sb.panels[0] && typeof sb.panels[0].caption === 'string' && (sb.panels[0].caption.includes('Collar') || sb.panels[0].caption.includes('Leash') || sb.panels[0].caption.includes('eagerly sniffing'))) ||
        (sb.panels[1] && typeof sb.panels[1].caption === 'string' && (sb.settingId === 'backyard' || sb.settingId === 'creek') && sb.panels[1].caption.includes('bench'));

    if (isStale) {
        generateStoryPanels(sb, universe);
        sb.lastPropId = sb.propId;
        sb.lastCharId = sb.characterId;
        sb.lastSettingId = sb.settingId;
        saveState();
    }
}

function renderSeniorStoryBuilder() {
    initStoryBuilderState();
    const sb = getSeniorStoryContext();
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);
    const universesList = getStoryUniversesList(sb.level);

    // 1. Level Dropdown
    const levelSelect = document.getElementById('select-story-esl-level');
    if (levelSelect) {
        levelSelect.value = sb.level;
        if (!levelSelect.dataset.bound) {
            levelSelect.dataset.bound = 'true';
            levelSelect.addEventListener('change', (e) => {
                stopStoryAudio();
                const newLevel = e.target.value;
                sb.level = newLevel;
                sb.universeIndex = 0;
                const newUniv = getActiveStoryUniverse(newLevel, 0);
                sb.settingId = newUniv.defaultSetting;
                sb.characterId = newUniv.defaultChar;
                sb.secondaryCharId = newUniv.defaultSecondaryChar;
                sb.propId = newUniv.defaultProp;
                sb.activeTwist = null;
                generateStoryPanels(sb, newUniv);
                saveState();
                renderSeniorStoryBuilder();
                audioEngine.speak(`Switched to ${newUniv.masterTitle || 'Storyboard 1'}!`, true);
            });
        }
    }

    // 1b. Universe Dropdown (Generic Cartridge Master Titles: Storyboard 1, Storyboard 2...)
    const universeSelect = document.getElementById('select-story-universe');
    if (universeSelect) {
        universeSelect.innerHTML = universesList.map((u, idx) => `
            <option value="${idx}">${u.masterTitle || `Storyboard ${idx + 1}`}${u.isPlaceholder ? ' (Slot Ready)' : ''}</option>
        `).join('');
        universeSelect.value = sb.universeIndex || 0;

        if (!universeSelect.dataset.bound) {
            universeSelect.dataset.bound = 'true';
            universeSelect.addEventListener('change', (e) => {
                stopStoryAudio();
                const newIdx = parseInt(e.target.value, 10) || 0;
                sb.universeIndex = newIdx;
                const newUniv = getActiveStoryUniverse(sb.level, newIdx);
                sb.settingId = newUniv.defaultSetting;
                sb.characterId = newUniv.defaultChar;
                sb.secondaryCharId = newUniv.defaultSecondaryChar;
                sb.propId = newUniv.defaultProp;
                sb.activeTwist = null;
                generateStoryPanels(sb, newUniv);
                saveState();
                renderSeniorStoryBuilder();
                audioEngine.speak(`Switched to ${newUniv.masterTitle}!`, true);
            });
        }
    }

    // 2. Badges, Title & Reading Anchor Tag
    const levelBadge = document.getElementById('story-level-badge');
    const panelsBadge = document.getElementById('story-panels-count-badge');
    const titleDisplay = document.getElementById('story-custom-title');
    const anchorTag = document.getElementById('story-anchor-tag');

    if (levelBadge) {
        levelBadge.innerText = universe.levelLabel;
    }
    if (panelsBadge) {
        panelsBadge.innerText = sb.level === 'beginner' ? '3 Panels' : '4 Panels';
    }
    if (anchorTag) {
        anchorTag.innerText = universe.isPlaceholder
            ? `🔗 ${universe.anchorTitle}`
            : `🔗 Based on Reading Lab: "${universe.anchorTitle}"`;
    }
    if (titleDisplay) {
        const displayTitle = sb.customTitle || universe.masterTitle || 'Story Adventure';
        if ('value' in titleDisplay && titleDisplay.tagName === 'INPUT') {
            titleDisplay.value = displayTitle;
            titleDisplay.readOnly = true;
        } else {
            titleDisplay.innerText = displayTitle;
        }
    }

    // 3. Render Universe Asset Pickers (Settings, Characters, Props)
    renderStoryAssetPickers();

    // 4. Render Active Twist Banner
    const twistBanner = document.getElementById('story-twist-active-banner');
    const twistText = document.getElementById('story-active-twist-text');
    if (twistBanner && twistText) {
        if (sb.activeTwist) {
            twistText.innerText = sb.activeTwist.text;
            twistBanner.classList.remove('hidden');
        } else {
            twistBanner.classList.add('hidden');
        }
    }

    const btnClearTwist = document.getElementById('btn-clear-twist');
    if (btnClearTwist && !btnClearTwist.dataset.bound) {
        btnClearTwist.dataset.bound = 'true';
        btnClearTwist.addEventListener('click', () => {
            sb.activeTwist = null;
            generateStoryPanels(sb, universe);
            saveState();
            renderSeniorStoryBuilder();
        });
    }

    // 5. Render Vocabulary Bank (Reading Story Words ⭐ + Morphology Words)
    renderStoryVocabularyBank();

    // 6. Render Comic Panels
    renderStoryComicPanels();

    // 7. Bind Toolbar & Global Actions
    bindStoryBuilderGlobalActions();
}

function renderStoryAssetPickers() {
    const sb = getSeniorStoryContext();
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);

    // Settings Picker
    const setRow = document.getElementById('picker-settings-row');
    const setLabel = document.getElementById('selected-setting-label');
    if (setRow) {
        setRow.innerHTML = universe.settings.map(s => `
            <button class="asset-chip-btn ${s.id === sb.settingId ? 'active' : ''}" data-set-id="${s.id}">
                <span class="chip-icon">${s.icon}</span>
                <span>${s.name}</span>
            </button>
        `).join('');

        setRow.querySelectorAll('.asset-chip-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const sid = btn.getAttribute('data-set-id');
                sb.settingId = sid;
                generateStoryPanels(sb, universe);
                saveState();
                renderSeniorStoryBuilder();
                audioEngine.playClick();
            });
        });
    }
    if (setLabel) {
        const activeSet = universe.settings.find(s => s.id === sb.settingId);
        if (activeSet) setLabel.innerText = activeSet.name;
    }

    // Character Picker
    const charRow = document.getElementById('picker-characters-row');
    const charLabel = document.getElementById('selected-char-label');
    if (charRow) {
        charRow.innerHTML = universe.characters.map(c => `
            <button class="asset-chip-btn ${c.id === sb.characterId ? 'active' : ''}" data-char-id="${c.id}">
                <span class="chip-icon">${c.icon}</span>
                <span>${c.name}</span>
            </button>
        `).join('');

        charRow.querySelectorAll('.asset-chip-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cid = btn.getAttribute('data-char-id');
                sb.characterId = cid;
                const remaining = universe.characters.filter(c => c.id !== cid);
                sb.secondaryCharId = remaining[0] ? remaining[0].id : universe.defaultSecondaryChar;

                // Sync props inventory to new character
                const heroProps = getUniversePropsForContext(universe, sb);
                if (!heroProps.some(p => p.id === sb.propId)) {
                    sb.propId = heroProps[0] ? heroProps[0].id : universe.defaultProp;
                }

                generateStoryPanels(sb, universe);
                saveState();
                renderSeniorStoryBuilder();
                audioEngine.playClick();
            });
        });
    }
    if (charLabel) {
        const activeChar = universe.characters.find(c => c.id === sb.characterId);
        if (activeChar) charLabel.innerText = activeChar.name;
    }

    // Props Picker (Dynamically scoped to active character's 6 tailored props)
    const propRow = document.getElementById('picker-props-row');
    const propLabel = document.getElementById('selected-prop-label');
    const heroProps = getUniversePropsForContext(universe, sb);
    if (propRow) {
        propRow.innerHTML = heroProps.map(p => {
            const iconContent = (p.id === 'data_chip' || p.id === 'memory_chip')
                ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><rect x="5" y="5" width="14" height="14" rx="2" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/><rect x="8.5" y="8.5" width="7" height="7" rx="1" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/><circle cx="12" cy="12" r="1.5" fill="#00f0ff"/><line x1="8.5" y1="2" x2="8.5" y2="5" stroke="#f59e0b" stroke-width="2"/><line x1="12" y1="2" x2="12" y2="5" stroke="#f59e0b" stroke-width="2"/><line x1="15.5" y1="2" x2="15.5" y2="5" stroke="#f59e0b" stroke-width="2"/><line x1="8.5" y1="19" x2="8.5" y2="22" stroke="#f59e0b" stroke-width="2"/><line x1="12" y1="19" x2="12" y2="22" stroke="#f59e0b" stroke-width="2"/><line x1="15.5" y1="19" x2="15.5" y2="22" stroke="#f59e0b" stroke-width="2"/><line x1="2" y1="8.5" x2="5" y2="8.5" stroke="#f59e0b" stroke-width="2"/><line x1="2" y1="12" x2="5" y2="12" stroke="#f59e0b" stroke-width="2"/><line x1="2" y1="15.5" x2="5" y2="15.5" stroke="#f59e0b" stroke-width="2"/><line x1="19" y1="8.5" x2="22" y2="8.5" stroke="#f59e0b" stroke-width="2"/><line x1="19" y1="12" x2="22" y2="12" stroke="#f59e0b" stroke-width="2"/><line x1="19" y1="15.5" x2="22" y2="15.5" stroke="#f59e0b" stroke-width="2"/></svg>`
                : p.icon;
            return `
                <button class="asset-chip-btn ${p.id === sb.propId ? 'active' : ''}" data-prop-id="${p.id}">
                    <span class="chip-icon">${iconContent}</span>
                    <span>${p.name}</span>
                </button>
            `;
        }).join('');

        propRow.querySelectorAll('.asset-chip-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pid = btn.getAttribute('data-prop-id');
                sb.propId = pid;
                generateStoryPanels(sb, universe);
                saveState();
                renderSeniorStoryBuilder();
                audioEngine.playClick();
            });
        });
    }
    if (propLabel) {
        const activeProp = heroProps.find(p => p.id === sb.propId) || heroProps[0];
        if (activeProp) propLabel.innerText = activeProp.name;
    }
}

function renderStoryVocabularyBank() {
    const container = document.getElementById('story-powerwords-container');
    if (!container) return;

    const sb = getSeniorStoryContext();
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);

    // Combine Reading Lab Words (marked ⭐) + Actionable Morphology Words
    let chipsHTML = (universe.readingVocab || []).map(v => `
        <button class="powerword-chip cat-anchor" data-word="${v.word}" title="Reading Lab Target Word: ${v.def}">
            <span>⭐ ${v.word}</span>
            <span class="chip-speaker">🔊</span>
        </button>
    `).join('');

    chipsHTML += (universe.morphology || []).map(m => `
        <button class="powerword-chip cat-${m.cat}" data-word="${m.word}" title="${m.suffix} • ${m.def}">
            <span>${m.word}</span>
            <span class="chip-speaker">🔊</span>
        </button>
    `).join('');

    container.innerHTML = chipsHTML;

    container.querySelectorAll('.powerword-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const word = btn.getAttribute('data-word');
            const vMatch = (universe.readingVocab || []).find(v => v.word.toLowerCase() === word.toLowerCase());
            const mMatch = (universe.morphology || []).find(m => m.word.toLowerCase() === word.toLowerCase());
            const defText = vMatch ? vMatch.def : mMatch ? mMatch.def : '';

            audioEngine.speak(`${word}. ${defText}`, true);

            // Insert into active panel caption
            const activeTextarea = document.querySelector('.panel-caption-textarea:focus') || document.querySelector('.panel-caption-textarea');
            if (activeTextarea) {
                const currentVal = activeTextarea.value.trim();
                activeTextarea.value = currentVal ? `${currentVal} ${word}` : word;
                activeTextarea.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });
}

function renderStoryComicPanels() {
    const sb = getSeniorStoryContext();
    const canvas = document.getElementById('story-comic-canvas');
    if (!canvas) return;

    const level = sb.level || 'intermediate';
    canvas.className = `story-comic-grid ${level === 'beginner' ? 'grid-3-panels' : 'grid-4-panels'}`;

    const universe = getActiveStoryUniverse(level, sb.universeIndex);
    const templates = (universe && universe.templates) || [];
    const mainChar = (universe && universe.characters && universe.characters.find(c => c.id === sb.characterId)) || (universe && universe.characters && universe.characters[0]) || { name: 'Hero', avatar: '🦸' };
    const secondChar = (universe && universe.characters && universe.characters.find(c => c.id === sb.secondaryCharId)) || (universe && universe.characters && universe.characters[1]) || { name: 'Companion', avatar: '🤝' };

    canvas.innerHTML = sb.panels.map((p, idx) => {
        const tmpl = templates[idx] || templates[0] || {};
        const isClimax = (idx === 2 || (level === 'beginner' && idx === 1));
        const panelSvg = getStoryComicSVG(sb.level, sb.settingId, sb.characterId, sb.propId, idx, level, sb.activeTwist, sb.secondaryCharId);

        let startersHTML = '';
        if (tmpl.starters) {
            startersHTML = tmpl.starters.map(st => `
                <button class="starter-pill" data-panel-idx="${idx}" data-insert="${st}">${st}</button>
            `).join('');
        }
        if (tmpl.connectors) {
            startersHTML += tmpl.connectors.map(c => `
                <button class="starter-pill connector-pill" data-panel-idx="${idx}" data-insert="${c}">${c}</button>
            `).join('');
        }

        return `
            <div class="comic-panel-card ${isClimax ? 'panel-climax' : ''}" data-panel-index="${idx}">
                <!-- Top Info Row -->
                <div class="panel-top-row">
                    <div class="panel-title-group">
                        <span class="panel-num-badge">Panel ${idx + 1}</span>
                        <span class="panel-role-badge">${p.roleBadge || tmpl.roleBadge}</span>
                    </div>
                    <div class="panel-actions">
                        <button class="btn btn-xs btn-blue btn-panel-speak" data-panel-idx="${idx}" title="Speak Panel">🔊 Say Panel</button>
                    </div>
                </div>

                <!-- Animated SVG Scene Canvas -->
                <div class="panel-svg-box">
                    ${panelSvg}
                </div>

                <!-- Narration / Caption Box -->
                <div class="panel-narration-wrapper">
                    <div class="narration-label-row">
                        <span>📝 Caption / Narration:</span>
                        <div class="starter-chips-row">
                            ${startersHTML}
                        </div>
                    </div>
                    <textarea class="panel-caption-textarea" data-panel-idx="${idx}" placeholder="Write scene narration...">${p.caption || ''}</textarea>
                </div>

                <!-- Speech Bubbles Section -->
                <div class="panel-dialogue-section">
                    <!-- Primary Character Speech Bubble -->
                    <div class="speech-bubble-row">
                        <div class="speech-char-avatar" title="${mainChar.name}">${mainChar.avatar}</div>
                        <div class="speech-bubble-bubble">
                            <input type="text" class="speech-bubble-input input-speech-1" data-panel-idx="${idx}" value="${p.speech1 || ''}" placeholder="${mainChar.name} says...">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Bind panel inputs to state
    canvas.querySelectorAll('.panel-caption-textarea').forEach(tx => {
        tx.addEventListener('input', (e) => {
            const idx = parseInt(e.target.getAttribute('data-panel-idx'));
            if (sb.panels[idx]) {
                sb.panels[idx].caption = e.target.value;
                saveState();
            }
        });
    });

    canvas.querySelectorAll('.input-speech-1').forEach(inp => {
        inp.addEventListener('input', (e) => {
            const idx = parseInt(e.target.getAttribute('data-panel-idx'));
            if (sb.panels[idx]) {
                sb.panels[idx].speech1 = e.target.value;
                saveState();
            }
        });
    });

    // Bind starter pills insertion
    canvas.querySelectorAll('.starter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const idx = parseInt(pill.getAttribute('data-panel-idx'));
            const toInsert = pill.getAttribute('data-insert');
            const textarea = canvas.querySelector(`.panel-caption-textarea[data-panel-idx="${idx}"]`);
            if (textarea) {
                const current = textarea.value.trim();
                if (!current) {
                    textarea.value = toInsert + ' ';
                } else if (pill.classList.contains('connector-pill')) {
                    textarea.value = `${current} ${toInsert} `;
                } else {
                    textarea.value = `${toInsert} ${current}`;
                }
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                audioEngine.playClick();
            }
        });
    });

    // Replay walk animation helper for a panel
    function replayPanelWalk(panelCard) {
        if (!panelCard) return;
        const animEls = panelCard.querySelectorAll('.story-anim-walk-6steps, .story-anim-swim-6steps, .story-anim-shadow-6steps, .story-anim-step-leg-left, .story-anim-step-leg-right, .story-anim-arm-6steps, .story-anim-fin-kick-left, .story-anim-fin-kick-right, .story-anim-hair-float');
        animEls.forEach(el => {
            el.style.animation = 'none';
            void el.offsetWidth; // trigger reflow
            el.style.animation = '';
        });
    }

    // Clicking the panel scene canvas replays the 6-step walk
    canvas.querySelectorAll('.comic-panel-card').forEach(card => {
        const svgBox = card.querySelector('.panel-svg-box');
        if (svgBox) {
            svgBox.title = "Click to replay 6-step walk";
            svgBox.addEventListener('click', (e) => {
                // Don't replay walk if clicking directly on an interactive reactor
                if (e.target.closest('.interactive-reactor')) return;
                replayPanelWalk(card);
            });
        }

        // Interactive Quantum Core Reactor: click toggles overdrive surge with sound & sparks
        const reactor = card.querySelector('.interactive-reactor');
        if (reactor) {
            reactor.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOverdrive = reactor.classList.toggle('reactor-surging');
                const statusText = card.querySelector('.reactor-status-text');
                if (statusText) {
                    statusText.textContent = isOverdrive ? '⚡ OVERDRIVE' : 'CORE STABLE';
                    statusText.setAttribute('fill', isOverdrive ? '#ef4444' : '#22c55e');
                }
                audioEngine.playReactorZap();
            });
        }
    });

    // Bind individual speak buttons (also replays walk during speech)
    canvas.querySelectorAll('.btn-panel-speak').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-panel-idx'));
            const card = canvas.querySelector(`.comic-panel-card[data-panel-index="${idx}"]`);
            replayPanelWalk(card);
            speakStoryPanel(idx);
        });
    });
}

function speakStoryPanel(idx, onComplete = null) {
    const sb = getSeniorStoryContext();
    const p = sb.panels[idx];
    if (!p) return;

    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);
    const mainChar = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
    const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];

    // Omit panel numbering from speech so reel plays like an immersive storybook/movie
    let captionText = (p.caption || '').trim();
    if (captionText && !captionText.endsWith('.') && !captionText.endsWith('!') && !captionText.endsWith('?')) {
        captionText += '.';
    }
    let dialogue = captionText;
    if (p.speech1) {
        dialogue += dialogue ? ` ${mainChar.name} says: "${p.speech1}".` : `${mainChar.name} says: "${p.speech1}".`;
    }

    isStoryAudioPlaying = true;
    if (typeof window !== 'undefined') {
        window.isStoryAudioPlaying = true;
    }
    audioEngine.speak(dialogue, true, () => {
        if (!isReelAutoplaying) {
            isStoryAudioPlaying = false;
            if (typeof window !== 'undefined') {
                window.isStoryAudioPlaying = false;
            }
        }
        if (onComplete) onComplete();
    });
}

function bindStoryBuilderGlobalActions() {
    // Twist modal triggers
    const btnTwist1 = document.getElementById('btn-story-twist-trigger');
    const btnTwist2 = document.getElementById('btn-story-twist-bottom');
    const openTwistHandler = () => {
        openModal('modal-story-twist');
        resetTwistModalDisplay();
    };
    if (btnTwist1 && !btnTwist1.dataset.bound) {
        btnTwist1.dataset.bound = 'true';
        btnTwist1.addEventListener('click', openTwistHandler);
    }
    if (btnTwist2 && !btnTwist2.dataset.bound) {
        btnTwist2.dataset.bound = 'true';
        btnTwist2.addEventListener('click', openTwistHandler);
    }

    // Spin Twist button in modal
    const btnSpin = document.getElementById('btn-spin-twist');
    if (btnSpin && !btnSpin.dataset.bound) {
        btnSpin.dataset.bound = 'true';
        btnSpin.addEventListener('click', spinMysteryTwist);
    }

    // Apply Twist button in modal
    const btnApplyTwist = document.getElementById('btn-apply-twist');
    if (btnApplyTwist && !btnApplyTwist.dataset.bound) {
        btnApplyTwist.dataset.bound = 'true';
        btnApplyTwist.addEventListener('click', applySelectedTwistToStory);
    }

    // Presentation Reel triggers
    const btnPresent1 = document.getElementById('btn-story-present-trigger');
    const btnPresent2 = document.getElementById('btn-story-present-bottom');
    const openPresentHandler = () => {
        openStoryReelPresentation();
    };
    if (btnPresent1 && !btnPresent1.dataset.bound) {
        btnPresent1.dataset.bound = 'true';
        btnPresent1.addEventListener('click', openPresentHandler);
    }
    if (btnPresent2 && !btnPresent2.dataset.bound) {
        btnPresent2.dataset.bound = 'true';
        btnPresent2.addEventListener('click', openPresentHandler);
    }

    // Copy Story Script
    const btnCopy = document.getElementById('btn-story-copy-script');
    if (btnCopy && !btnCopy.dataset.bound) {
        btnCopy.dataset.bound = 'true';
        btnCopy.addEventListener('click', copyStoryScriptToClipboard);
    }

    // Reset Story
    const btnReset = document.getElementById('btn-story-reset-all');
    if (btnReset && !btnReset.dataset.bound) {
        btnReset.dataset.bound = 'true';
        btnReset.addEventListener('click', () => {
            const sb = getSeniorStoryContext();
            const univ = getActiveStoryUniverse(sb.level, sb.universeIndex);
            sb.activeTwist = null;
            sb.settingId = univ.defaultSetting;
            sb.characterId = univ.defaultChar;
            sb.secondaryCharId = univ.defaultSecondaryChar;
            sb.propId = univ.defaultProp;
            generateStoryPanels(sb, univ);
            saveState();
            renderSeniorStoryBuilder();
            audioEngine.playClick();
            audioEngine.speak(`Reset story! Ready to write ${univ.masterTitle || 'Storyboard 1'}!`, true);
        });
    }

    // Read Full Comic Aloud
    const btnReadFull = document.getElementById('btn-story-read-full');
    if (btnReadFull && !btnReadFull.dataset.bound) {
        btnReadFull.dataset.bound = 'true';
        btnReadFull.addEventListener('click', readFullComicSequentially);
    }

    // Award Hearts
    const btnAward = document.getElementById('btn-story-award');
    if (btnAward && !btnAward.dataset.bound) {
        btnAward.dataset.bound = 'true';
        btnAward.addEventListener('click', () => {
            awardHeartToActiveStudent(btnAward, 3);
            triggerConfetti();
            audioEngine.playFanfare();
            audioEngine.speak("Super storytelling! 3 hearts awarded!");
        });
    }
}

/* --- MYSTERY TWIST SPINNER ENGINE --- */
let selectedSpunTwist = null;

function resetTwistModalDisplay() {
    const card = document.getElementById('twist-display-card');
    const icon = document.getElementById('twist-display-icon');
    const title = document.getElementById('twist-display-title');
    const desc = document.getElementById('twist-display-desc');
    const btnApply = document.getElementById('btn-apply-twist');

    if (card) card.classList.remove('spinning');
    if (icon) icon.innerText = '🎲';
    if (title) title.innerText = 'Mystery Twist Ready!';
    if (desc) desc.innerText = 'Click the button below to spin a thrilling plot twist for your story conflict!';
    if (btnApply) btnApply.classList.add('hidden');
    selectedSpunTwist = null;
}

function spinMysteryTwist() {
    const card = document.getElementById('twist-display-card');
    const icon = document.getElementById('twist-display-icon');
    const title = document.getElementById('twist-display-title');
    const desc = document.getElementById('twist-display-desc');
    const btnApply = document.getElementById('btn-apply-twist');
    const btnSpin = document.getElementById('btn-spin-twist');

    if (!card) return;
    if (btnSpin) btnSpin.disabled = true;
    card.classList.add('spinning');

    const sb = getSeniorStoryContext();
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);
    const pool = universe.twists;

    let shuffleCount = 0;
    const maxShuffles = 18;

    const interval = setInterval(() => {
        shuffleCount++;
        const randIdx = Math.floor(Math.random() * pool.length);
        const item = pool[randIdx];

        if (icon) icon.innerText = item.icon;
        if (title) title.innerText = item.title;
        if (desc) desc.innerText = item.text;
        audioEngine.playClick();

        if (shuffleCount >= maxShuffles) {
            clearInterval(interval);
            card.classList.remove('spinning');
            if (btnSpin) btnSpin.disabled = false;

            selectedSpunTwist = item;
            audioEngine.playFanfare();
            triggerConfetti();
            audioEngine.speak(selectedSpunTwist.title + "! " + selectedSpunTwist.text, true);

            if (btnApply) {
                btnApply.classList.remove('hidden');
                btnApply.innerText = `⚡ Insert into Conflict Panel`;
            }
        }
    }, 90);
}

function applySelectedTwistToStory() {
    if (!selectedSpunTwist) return;
    const sb = getSeniorStoryContext();
    sb.activeTwist = selectedSpunTwist;
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);
    generateStoryPanels(sb, universe);
    saveState();
    closeModal('modal-story-twist');
    renderSeniorStoryBuilder();
    audioEngine.playFanfare();
    audioEngine.speak("Twist added to your story climax! Let's write how the heroes solve it!", true);
}

/* --- STORY REEL PRESENTATION ENGINE & AUDIO MANAGEMENT --- */
let currentReelPanelIndex = 0;
let isReelAutoplaying = false;
let reelAutoplayTimeout = null;
let isStoryAudioPlaying = false;
let wholeComicTimer = null;

if (typeof window !== 'undefined') {
    window.isReelAutoplaying = false;
    window.isStoryAudioPlaying = false;
}

function stopStoryAudio() {
    isReelAutoplaying = false;
    isStoryAudioPlaying = false;
    if (typeof window !== 'undefined') {
        window.isReelAutoplaying = false;
        window.isStoryAudioPlaying = false;
    }

    if (reelAutoplayTimeout) {
        clearTimeout(reelAutoplayTimeout);
        reelAutoplayTimeout = null;
    }
    if (wholeComicTimer) {
        clearTimeout(wholeComicTimer);
        wholeComicTimer = null;
    }

    if (typeof audioEngine !== 'undefined' && audioEngine.stop) {
        audioEngine.stop();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    document.querySelectorAll('.panel-speaking-active, .starter-speaking').forEach(el => {
        el.classList.remove('panel-speaking-active', 'starter-speaking');
    });

    const btnAutoplay = document.getElementById('btn-story-reel-autoplay');
    if (btnAutoplay) {
        btnAutoplay.innerHTML = '▶️ Autoplay Scene';
    }
}
if (typeof window !== 'undefined') {
    window.stopStoryAudio = stopStoryAudio;
}

function isStoryAudioActive() {
    return isReelAutoplaying || isStoryAudioPlaying || (typeof window !== 'undefined' && (window.isReelAutoplaying || window.isStoryAudioPlaying));
}
if (typeof window !== 'undefined') {
    window.isStoryAudioActive = isStoryAudioActive;
}

// Global capturing click listener: any click outside active audio triggers immediately stops vocals
document.addEventListener('click', (e) => {
    if (!isStoryAudioActive()) return;

    if (e.target.closest('#btn-story-reel-autoplay') ||
        e.target.closest('#btn-story-reel-play') ||
        e.target.closest('#btn-story-read-comic') ||
        e.target.closest('.btn-panel-speak')) {
        return;
    }

    stopStoryAudio();
}, true);

// Global keyboard shortcut: Escape key halts story audio
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isStoryAudioActive()) {
        stopStoryAudio();
    }
});

// Stop audio when switching tabs
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isStoryAudioActive()) {
        stopStoryAudio();
    }
});

function openStoryReelPresentation() {
    currentReelPanelIndex = 0;
    openModal('modal-story-reel');
    renderStoryReelActivePanel();
    bindStoryReelControls();
    // Automatically launch scene presentation with visuals & vocals
    runStorySceneAutoplay();
}

function renderStoryReelActivePanel() {
    const sb = getSeniorStoryContext();
    const stage = document.getElementById('story-reel-stage');
    const indicator = document.getElementById('story-reel-indicator');
    const modalTitle = document.getElementById('story-reel-title');
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);

    if (modalTitle) {
        modalTitle.innerText = `🎬 ${sb.customTitle || universe.masterTitle || universe.defaultTitle}`;
    }

    const totalPanels = sb.panels.length;
    if (currentReelPanelIndex >= totalPanels) currentReelPanelIndex = totalPanels - 1;
    if (currentReelPanelIndex < 0) currentReelPanelIndex = 0;

    if (indicator) {
        indicator.innerText = `Scene ${currentReelPanelIndex + 1} of ${totalPanels}`;
    }

    const p = sb.panels[currentReelPanelIndex];
    if (!p || !stage) return;

    const mainChar = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
    const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];
    const panelSvg = getStoryComicSVG(sb.level, sb.settingId, sb.characterId, sb.propId, currentReelPanelIndex, sb.level, sb.activeTwist, sb.secondaryCharId);

    stage.innerHTML = `
        <div class="reel-svg-wrapper">
            ${panelSvg}
        </div>
        <div class="reel-caption-banner">
            <strong>Narration:</strong> "${p.caption || '...'}"
        </div>
        <div class="reel-speech-container">
            ${p.speech1 ? `
                <div class="reel-speech-item">
                    <span>${mainChar.avatar}</span>
                    <span><strong>${mainChar.name}:</strong> "${p.speech1}"</span>
                </div>
            ` : ''}
        </div>
    `;
}

function bindStoryReelControls() {
    const btnPrev = document.getElementById('btn-story-reel-prev');
    const btnNext = document.getElementById('btn-story-reel-next');
    const btnPlay = document.getElementById('btn-story-reel-play');
    const btnAutoplay = document.getElementById('btn-story-reel-autoplay');

    if (btnPrev && !btnPrev.dataset.bound) {
        btnPrev.dataset.bound = 'true';
        btnPrev.addEventListener('click', () => {
            stopStoryAudio();
            if (currentReelPanelIndex > 0) {
                currentReelPanelIndex--;
                renderStoryReelActivePanel();
                audioEngine.playClick();
                runStorySceneAutoplay();
            }
        });
    }

    if (btnNext && !btnNext.dataset.bound) {
        btnNext.dataset.bound = 'true';
        btnNext.addEventListener('click', () => {
            stopStoryAudio();
            const sb = getSeniorStoryContext();
            if (currentReelPanelIndex < sb.panels.length - 1) {
                currentReelPanelIndex++;
                renderStoryReelActivePanel();
                audioEngine.playClick();
                runStorySceneAutoplay();
            }
        });
    }

    if (btnPlay && !btnPlay.dataset.bound) {
        btnPlay.dataset.bound = 'true';
        btnPlay.addEventListener('click', () => {
            runStorySceneAutoplay();
        });
    }

    if (btnAutoplay && !btnAutoplay.dataset.bound) {
        btnAutoplay.dataset.bound = 'true';
        btnAutoplay.addEventListener('click', () => {
            if (isReelAutoplaying || isStoryAudioPlaying) {
                stopStoryAudio();
            } else {
                runStorySceneAutoplay();
            }
        });
    }
}

function runStorySceneAutoplay() {
    stopStoryAudio();
    isReelAutoplaying = true;
    isStoryAudioPlaying = true;
    if (typeof window !== 'undefined') {
        window.isReelAutoplaying = true;
        window.isStoryAudioPlaying = true;
    }

    renderStoryReelActivePanel();

    const btnAutoplay = document.getElementById('btn-story-reel-autoplay');
    if (btnAutoplay) {
        btnAutoplay.innerHTML = '⏹️ Stop Scene';
    }

    speakStoryPanel(currentReelPanelIndex, () => {
        isReelAutoplaying = false;
        isStoryAudioPlaying = false;
        if (typeof window !== 'undefined') {
            window.isReelAutoplaying = false;
            window.isStoryAudioPlaying = false;
        }
        if (btnAutoplay) {
            btnAutoplay.innerHTML = '▶️ Autoplay Scene';
        }

        const sb = getSeniorStoryContext();
        if (currentReelPanelIndex === sb.panels.length - 1) {
            triggerConfetti();
            audioEngine.playFanfare();
            const btnNextReel = document.getElementById('btn-story-reel-next');
            awardHeartToActiveStudent(btnNextReel, 2);
            audioEngine.speak("Fantastic story presentation! Give yourself a big round of applause!");
        }
    });
}

function runStoryReelAutoplay() {
    runStorySceneAutoplay();
}

if (typeof window !== 'undefined') {
    window.runStorySceneAutoplay = runStorySceneAutoplay;
    window.runStoryReelAutoplay = runStoryReelAutoplay;
}

function readFullComicSequentially() {
    stopStoryAudio();
    isStoryAudioPlaying = true;
    const sb = getSeniorStoryContext();
    let idx = 0;

    function nextPanel() {
        if (!isStoryAudioPlaying) return;
        if (idx >= sb.panels.length) {
            isStoryAudioPlaying = false;
            triggerConfetti();
            audioEngine.playFanfare();
            audioEngine.speak("Fantastic story! Give yourself a round of applause!");
            return;
        }
        speakStoryPanel(idx, () => {
            if (!isStoryAudioPlaying) return;
            idx++;
            wholeComicTimer = setTimeout(nextPanel, 1000);
        });
    }

    audioEngine.speak(`Here is our story: ${sb.customTitle}`, true, () => {
        if (!isStoryAudioPlaying) return;
        wholeComicTimer = setTimeout(nextPanel, 800);
    });
}

function copyStoryScriptToClipboard() {
    const sb = getSeniorStoryContext();
    const universe = getActiveStoryUniverse(sb.level, sb.universeIndex);
    const mainChar = universe.characters.find(c => c.id === sb.characterId) || universe.characters[0];
    const secondChar = universe.characters.find(c => c.id === sb.secondaryCharId) || universe.characters[1];
    const setObj = universe.settings.find(s => s.id === sb.settingId) || universe.settings[0];
    const activePropsList = getUniversePropsForContext(universe, sb);
    const propObj = activePropsList.find(p => p.id === sb.propId) || activePropsList[0] || (universe.props && universe.props[0]);

    let script = `📖 ${sb.customTitle || universe.masterTitle || universe.defaultTitle}\n`;
    script += `🔗 Sequel to Reading Lab: "${universe.anchorTitle}"\n`;
    script += `🌍 Setting: ${setObj.name} | 🦸 Main Character: ${mainChar.name} | ⚡ Catalyst Prop: ${propObj.name}\n`;
    script += `Level: ${sb.level.toUpperCase()}\n\n`;

    sb.panels.forEach((p, idx) => {
        script += `[Panel ${idx + 1}: ${p.roleBadge}]\n`;
        script += `Narration: ${p.caption}\n`;
        if (p.speech1) {
            script += `${mainChar.name}: "${p.speech1}"\n`;
        }
        script += `\n`;
    });

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(script).then(() => {
            triggerConfetti();
            audioEngine.playCorrect();
            audioEngine.speak("Story script copied to clipboard! Ready to paste into Zoom chat!", true);
        }).catch(() => {
            fallbackCopyText(script);
        });
    } else {
        fallbackCopyText(script);
    }
}

function fallbackCopyText(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        triggerConfetti();
        audioEngine.playCorrect();
        audioEngine.speak("Story script copied to clipboard!", true);
    } catch (err) {
        alert("Could not copy automatically. You can copy the text manually.");
    }
    document.body.removeChild(ta);
}

