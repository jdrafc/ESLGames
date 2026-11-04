/* ==========================================================================
   6.9 SENIOR STEM & SCIENCE LAB ENGINE (AGES 8-10)
   ========================================================================== */

const STEM_SCIENCE_DATA = (typeof window !== 'undefined' && window.STEM_SCIENCE_DATA) ? window.STEM_SCIENCE_DATA : {
    beginner: [],
    intermediate: [],
    advanced: []
};
if (typeof window !== 'undefined') {
    window.STEM_SCIENCE_DATA = STEM_SCIENCE_DATA;
}

/* --- STEM DIAGRAM & EXPERIMENT SVG CARTRIDGES ---
   Interactive diagrams and experiment apparatuses are registered modularly via js/stem/stem-registry.js.
   New lab topics can be plugged in without modifying this player engine.
   -------------------------------------------------------------------------- */

/* --- SENIOR STEM CONTROLLER ENGINE --- */
function getSeniorStemContext() {
    const eslLevel = appState.eslLevelStem || 'intermediate';
    let topicsList = STEM_SCIENCE_DATA[eslLevel] || STEM_SCIENCE_DATA.intermediate;
    if (!Array.isArray(topicsList)) {
        topicsList = [topicsList];
    }
    if (typeof appState.stemTopicIndex !== 'number' || appState.stemTopicIndex >= topicsList.length) {
        appState.stemTopicIndex = 0;
    }
    const stemData = topicsList[appState.stemTopicIndex] || topicsList[0];
    const currentSubTab = appState.stemSubTab || 'diagram';
    return { eslLevel, topicsList, stemData, topicIndex: appState.stemTopicIndex, currentSubTab };
}

function renderSeniorStemStage() {
    const { eslLevel, topicsList, stemData, topicIndex, currentSubTab } = getSeniorStemContext();

    // Level Dropdown sync
    const levelSelect = document.getElementById('select-stem-esl-level');
    if (levelSelect) {
        levelSelect.value = eslLevel;
        if (!levelSelect.dataset.bound) {
            levelSelect.dataset.bound = 'true';
            levelSelect.addEventListener('change', (e) => {
                stopStemDiagramExplore();
                appState.eslLevelStem = e.target.value;
                appState.stemTopicIndex = 0;
                appState.stemItemIndex = 0;
                appState.stemTested = false;
                appState.stemUserPrediction = null;
                saveState();
                renderSeniorStemStage();
            });
        }
    }

    // Topic Dropdown sync & population
    const topicSelect = document.getElementById('select-stem-topic');
    if (topicSelect) {
        topicSelect.innerHTML = topicsList.map((t, idx) => `
            <option value="${idx}">${t.title}</option>
        `).join('');
        topicSelect.value = topicIndex;

        if (!topicSelect.dataset.bound) {
            topicSelect.dataset.bound = 'true';
            topicSelect.addEventListener('change', (e) => {
                stopStemDiagramExplore();
                appState.stemTopicIndex = parseInt(e.target.value, 10) || 0;
                appState.stemItemIndex = 0;
                appState.stemTested = false;
                appState.stemUserPrediction = null;
                saveState();
                renderSeniorStemStage();
            });
        }
    }

    // Sub-Tab Switcher
    const tabDiagram = document.getElementById('tab-stem-diagram');
    const tabExperiment = document.getElementById('tab-stem-experiment');
    const panelDiagram = document.getElementById('stem-diagram-panel');
    const panelExperiment = document.getElementById('stem-experiment-panel');

    if (currentSubTab === 'experiment') {
        if (tabDiagram) tabDiagram.classList.remove('active');
        if (tabExperiment) tabExperiment.classList.add('active');
        if (panelDiagram) panelDiagram.classList.add('hidden');
        if (panelExperiment) panelExperiment.classList.remove('hidden');
        renderSeniorStemExperiment();
    } else {
        if (tabDiagram) tabDiagram.classList.add('active');
        if (tabExperiment) tabExperiment.classList.remove('active');
        if (panelDiagram) panelDiagram.classList.remove('hidden');
        if (panelExperiment) panelExperiment.classList.add('hidden');
        renderSeniorStemDiagram();
    }
}

let isStemExploreRunning = false;
let stemExploreTimeout = null;
let earthOrbitAnimFrame = null;

function triggerEarthOrbitAnimation() {
    const globe = document.getElementById('stem-earth-globe');
    if (!globe) return;
    if (globe.dataset.orbiting === 'true') return;
    globe.dataset.orbiting = 'true';

    if (earthOrbitAnimFrame) {
        cancelAnimationFrame(earthOrbitAnimFrame);
        earthOrbitAnimFrame = null;
    }

    const startTime = performance.now();
    const duration = 3600; // 3.6 seconds for full smooth orbit

    function animateOrbit(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Counterclockwise elliptical orbit enclosing Sun at (45, 125)
        // Center (135, 92), Rx = 115, Ry = 66
        // Start at (250, 92), completes one full orbital revolution around the Sun and returns home
        const angle = -progress * 2 * Math.PI;
        const dx = 115 * (Math.cos(angle) - 1);
        const dy = 66 * Math.sin(angle);
        const rot = progress * 360; // Axial rotation during orbital revolution

        globe.setAttribute('transform', `translate(${dx.toFixed(2)}, ${dy.toFixed(2)})`);

        if (progress < 1) {
            earthOrbitAnimFrame = requestAnimationFrame(animateOrbit);
        } else {
            globe.setAttribute('transform', 'translate(0, 0)');
            delete globe.dataset.orbiting;
            earthOrbitAnimFrame = null;
        }
    }

    earthOrbitAnimFrame = requestAnimationFrame(animateOrbit);
}

function stopStemDiagramExplore() {
    if (stemExploreTimeout) {
        clearTimeout(stemExploreTimeout);
        stemExploreTimeout = null;
    }
    if (isStemExploreRunning) {
        isStemExploreRunning = false;
        audioEngine.stop();
    }
    if (earthOrbitAnimFrame) {
        cancelAnimationFrame(earthOrbitAnimFrame);
        earthOrbitAnimFrame = null;
        const globe = document.getElementById('stem-earth-globe');
        if (globe) {
            globe.setAttribute('transform', 'translate(0, 0)');
            delete globe.dataset.orbiting;
        }
    }
    const btn = document.getElementById('btn-stem-diagram-explore-all');
    if (btn) btn.innerText = '▶️ Play All Parts';
}

let stemTestTimeout = null;

function stopSeniorStem() {
    stopStemDiagramExplore();
    if (stemTestTimeout) {
        clearTimeout(stemTestTimeout);
        stemTestTimeout = null;
    }
    if (typeof audioEngine !== 'undefined' && audioEngine.stop) {
        audioEngine.stop();
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}
window.stopSeniorStem = stopSeniorStem;
window.stopStemDiagramExplore = stopStemDiagramExplore;

function selectStemHotspot(spotId, autoSpeak = true, onComplete = null) {
    const { stemData } = getSeniorStemContext();
    const spot = stemData.diagram.hotspots.find(h => h.id === spotId);
    if (!spot) return;

    // Highlight active hotspot in SVG
    const svgContainer = document.getElementById('stem-diagram-svg-container');
    if (svgContainer) {
        svgContainer.querySelectorAll('.stem-hotspot').forEach(h => h.classList.remove('active'));
        const el = svgContainer.querySelector(`.stem-hotspot[data-hotspot-id="${spot.id}"]`);
        if (el) el.classList.add('active');
    }

    // Trigger Earth orbit animation when Earth is selected
    if (spot.id === 'earth') {
        triggerEarthOrbitAnimation();
    }

    // Update hotspot info box UI
    const titleElem = document.getElementById('stem-hotspot-title');
    const descElem = document.getElementById('stem-hotspot-desc');
    if (titleElem) titleElem.innerText = spot.title;
    if (descElem) descElem.innerText = spot.desc;

    const tieinElem = document.getElementById('stem-hotspot-tiein');
    const tieinText = document.getElementById('stem-hotspot-tiein-text');
    if (tieinElem && tieinText) {
        tieinText.innerText = spot.tiein;
        tieinElem.classList.remove('hidden');
    }

    const btnSpeakHotspot = document.getElementById('btn-stem-speak-hotspot');
    if (btnSpeakHotspot) {
        btnSpeakHotspot.classList.remove('hidden');
        btnSpeakHotspot.onclick = () => {
            stopStemDiagramExplore();
            if (spot.id === 'earth') {
                triggerEarthOrbitAnimation();
            }
            audioEngine.speak(spot.speech, true);
        };
    }

    if (autoSpeak) {
        // Speak EXACTLY spot.speech (the identical dialogue for both manual click and auto walkthrough)
        audioEngine.speak(spot.speech, true, onComplete);
    }
}

function renderSeniorStemDiagram() {
    const { eslLevel, stemData } = getSeniorStemContext();

    // Badges
    const badgeElem = document.getElementById('stem-diagram-badge');
    const vocabTagElem = document.getElementById('stem-diagram-vocab-tag');
    if (badgeElem) badgeElem.innerText = stemData.badge;
    if (vocabTagElem) vocabTagElem.innerText = stemData.headTailFocus.split(',')[0];

    // Render Diagram SVG Canvas
    const svgContainer = document.getElementById('stem-diagram-svg-container');
    if (svgContainer) {
        const diagramType = stemData.diagramType || stemData.diagram?.type || eslLevel;
        svgContainer.innerHTML = getStemDiagramSVG(diagramType);

        // Bind click to each hotspot
        svgContainer.querySelectorAll('.stem-hotspot').forEach(el => {
            el.addEventListener('click', () => {
                stopStemDiagramExplore();
                const spotId = el.getAttribute('data-hotspot-id');
                selectStemHotspot(spotId, true);
            });
        });
    }
}

function renderSeniorStemExperiment() {
    const { eslLevel, stemData } = getSeniorStemContext();
    const items = stemData.experiment.items;

    if (appState.stemItemIndex >= items.length) {
        appState.stemItemIndex = 0;
    }

    const currentItem = items[appState.stemItemIndex || 0];
    if (!currentItem) return;

    // Say It First Speaking Banner
    const sentenceFrameElem = document.getElementById('stem-sentence-frame-text');
    if (sentenceFrameElem) {
        if (!appState.stemTested) {
            // Determine choices for current level
            let choiceA, choiceB, frameLead, frameTail;
            if (eslLevel === 'beginner') {
                choiceA = { id: 'float', label: '🛟 FLOAT' };
                choiceB = { id: 'sink', label: '⚓ SINK' };
                frameLead = `I think the [${currentItem.name}] will:`;
                frameTail = `!`;
            } else if (eslLevel === 'intermediate') {
                choiceA = { id: 'attract', label: '🧲 ATTRACT' };
                choiceB = { id: 'no_pull', label: '🚫 NOT PULL' };
                frameLead = `The magnet will:`;
                frameTail = `the [${currentItem.name}]!`;
            } else {
                choiceA = { id: 'conduct', label: '💡 LIGHT UP' };
                choiceB = { id: 'insulate', label: '⬛ STAY DARK' };
                frameLead = `The [${currentItem.name}] will make the bulb:`;
                frameTail = `!`;
            }

            sentenceFrameElem.innerHTML = `
                <span>Predict: "${frameLead}</span>
                <span class="stem-predict-choices">
                    <button class="btn-predict-pill ${appState.stemUserPrediction === choiceA.id ? 'active' : ''}" data-choice="${choiceA.id}">
                        ${choiceA.label}
                    </button>
                    <button class="btn-predict-pill ${appState.stemUserPrediction === choiceB.id ? 'active' : ''}" data-choice="${choiceB.id}">
                        ${choiceB.label}
                    </button>
                </span>
                <span>${frameTail}"</span>
            `;

            // Bind choice button clicks
            sentenceFrameElem.querySelectorAll('.btn-predict-pill').forEach(btn => {
                btn.addEventListener('click', () => {
                    const choice = btn.getAttribute('data-choice');
                    appState.stemUserPrediction = choice;
                    saveState();
                    renderSeniorStemExperiment();

                    // Speak full prediction sentence!
                    let speechText = '';
                    if (eslLevel === 'beginner') {
                        speechText = `I think the ${currentItem.speakName || currentItem.name} will ${choice}`;
                    } else if (eslLevel === 'intermediate') {
                        const verb = choice === 'attract' ? 'attract' : 'not pull';
                        speechText = `The magnet will ${verb} the ${currentItem.speakName || currentItem.name}!`;
                    } else {
                        const verb = choice === 'conduct' ? 'light up' : 'stay dark';
                        speechText = `The ${currentItem.speakName || currentItem.name} will make the bulb ${verb}!`;
                    }
                    audioEngine.speak(speechText, true);
                });
            });
        } else {
            sentenceFrameElem.innerHTML = `Result: <strong>"${currentItem.resultFrame}"</strong>`;
        }
    }

    // Test Item Chips Bar
    const itemsContainer = document.getElementById('stem-test-items-container');
    if (itemsContainer) {
        itemsContainer.innerHTML = items.map((it, idx) => `
            <button class="stem-item-chip ${idx === (appState.stemItemIndex || 0) ? 'active' : ''}" data-item-idx="${idx}">
                ${it.name}
            </button>
        `).join('');

        itemsContainer.querySelectorAll('.stem-item-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                appState.stemItemIndex = parseInt(chip.getAttribute('data-item-idx'));
                appState.stemTested = false;
                appState.stemUserPrediction = null;
                saveState();
                renderSeniorStemExperiment();
                const it = items[appState.stemItemIndex];
                if (it) {
                    if (eslLevel === 'beginner') {
                        audioEngine.speak(`Selected ${it.speakName || it.name}`, true);
                    } else {
                        audioEngine.speak(`Selected ${it.speakName || it.name}. Vote your prediction!`, true);
                    }
                }
            });
        });
    }

    // Render Experiment Simulator SVG
    const simContainer = document.getElementById('stem-sim-stage');
    if (simContainer) {
        const expType = stemData.experimentType || stemData.experiment?.type || eslLevel;
        simContainer.innerHTML = getStemExperimentSVG(expType, currentItem, appState.stemTested);
    }

    // Result Box
    const resultBox = document.getElementById('stem-result-box');
    if (resultBox) {
        if (appState.stemTested) {
            resultBox.classList.remove('hidden');

            let actualOutcome = '';
            if (eslLevel === 'beginner') actualOutcome = currentItem.floats ? 'float' : 'sink';
            else if (eslLevel === 'intermediate') actualOutcome = currentItem.magnetic ? 'attract' : 'no_pull';
            else actualOutcome = currentItem.conducts ? 'conduct' : 'insulate';

            const hasPred = !!appState.stemUserPrediction;
            const wasRight = hasPred && (appState.stemUserPrediction === actualOutcome);

            let badgeHeader = '';
            if (hasPred) {
                if (wasRight) {
                    badgeHeader = `🎉 Great Hypothesis! You were right!`;
                } else {
                    badgeHeader = `😮 Science Surprise! Here is what happened:`;
                }
            } else {
                badgeHeader = `🧪 Experiment Result:`;
            }

            const iconElem = document.getElementById('stem-result-icon');
            if (iconElem) iconElem.innerText = wasRight ? '🌟' : '💡';

            const titleElem = document.getElementById('stem-result-title');
            if (titleElem) titleElem.innerText = badgeHeader;

            const descElem = document.getElementById('stem-result-desc');
            if (descElem) descElem.innerText = currentItem.resultDesc;

            const speechElem = document.getElementById('stem-result-speech-text');
            if (speechElem) speechElem.innerText = `"${currentItem.resultFrame}"`;

            const tieinElem = document.getElementById('stem-result-tiein');
            if (tieinElem && !tieinElem.dataset.bound) {
                tieinElem.dataset.bound = 'true';
                tieinElem.style.cursor = 'pointer';
                tieinElem.addEventListener('click', () => {
                    const { stemData } = getSeniorStemContext();
                    const it = stemData.experiment.items[appState.stemItemIndex || 0];
                    if (it) audioEngine.speak(it.resultFrame, true);
                });
            }
        } else {
            resultBox.classList.add('hidden');
        }
    }
}

// Tab Navigation bindings for STEM
const tabStemDiagram = document.getElementById('tab-stem-diagram');
const tabStemExperiment = document.getElementById('tab-stem-experiment');
if (tabStemDiagram && tabStemExperiment) {
    tabStemDiagram.addEventListener('click', () => {
        stopStemDiagramExplore();
        appState.stemSubTab = 'diagram';
        saveState();
        renderSeniorStemStage();
    });

    tabStemExperiment.addEventListener('click', () => {
        stopStemDiagramExplore();
        appState.stemSubTab = 'experiment';
        saveState();
        renderSeniorStemStage();
        const { stemData } = getSeniorStemContext();
        audioEngine.speak(`Virtual Experiment Lab: ${stemData.experiment.title}`, true);
    });
}

// Top Header Speak Concept
const btnStemSpeakSummary = document.getElementById('btn-stem-speak-summary');
if (btnStemSpeakSummary) {
    btnStemSpeakSummary.addEventListener('click', () => {
        stopStemDiagramExplore();
        const { stemData } = getSeniorStemContext();
        audioEngine.speak(`${stemData.title}. ${stemData.conceptSummary}`, true);
    });
}

// Diagram "Play All Parts" / "Stop Walkthrough"
function startStemDiagramExplore() {
    const { stemData } = getSeniorStemContext();
    const spots = stemData.diagram.hotspots;
    if (!spots || spots.length === 0) return;

    isStemExploreRunning = true;
    const btn = document.getElementById('btn-stem-diagram-explore-all');
    if (btn) btn.innerText = '⏸️ Stop Walkthrough';

    let idx = 0;

    function step() {
        if (!isStemExploreRunning) return;

        if (idx >= spots.length) {
            stopStemDiagramExplore();
            triggerConfetti();
            audioEngine.playFanfare();
            audioEngine.speak("Great exploration of all parts!");
            return;
        }

        const spot = spots[idx];
        idx++;

        let hasAdvanced = false;
        const advance = () => {
            if (hasAdvanced || !isStemExploreRunning) return;
            hasAdvanced = true;
            if (stemExploreTimeout) clearTimeout(stemExploreTimeout);
            // Pause comfortably (1000ms) after the full sentence completes before next part
            stemExploreTimeout = setTimeout(() => {
                if (isStemExploreRunning) step();
            }, 1000);
        };

        // Speaks EXACTLY spot.speech (the identical dialogue to clicking individual part)
        selectStemHotspot(spot.id, true, advance);

        // Safety fallback timeout based on sentence length (so it never hangs even if browser audio muted)
        const fallbackMs = Math.max(5000, (spot.speech.length / 10) * 1000 + 4000);
        stemExploreTimeout = setTimeout(advance, fallbackMs);
    }

    step();
}

const btnStemDiagramExploreAll = document.getElementById('btn-stem-diagram-explore-all');
if (btnStemDiagramExploreAll) {
    btnStemDiagramExploreAll.addEventListener('click', () => {
        if (isStemExploreRunning) {
            stopStemDiagramExplore();
        } else {
            startStemDiagramExplore();
        }
    });
}

// Diagram Award Hearts
const btnStemDiagramAward = document.getElementById('btn-stem-diagram-award');
if (btnStemDiagramAward) {
    btnStemDiagramAward.addEventListener('click', () => {
        awardHeartToActiveStudent(btnStemDiagramAward, 2);
        triggerConfetti();
        audioEngine.playFanfare();
        audioEngine.speak("2 hearts awarded for great science observation!");
    });
}

// Experiment Hear Frame
const btnStemSpeakFrame = document.getElementById('btn-stem-speak-frame');
if (btnStemSpeakFrame) {
    btnStemSpeakFrame.addEventListener('click', () => {
        const { eslLevel, stemData } = getSeniorStemContext();
        const item = stemData.experiment.items[appState.stemItemIndex || 0];
        if (!item) return;

        if (appState.stemTested) {
            audioEngine.speak(item.resultFrame, true);
        } else if (appState.stemUserPrediction) {
            let speechText = '';
            if (eslLevel === 'beginner') {
                speechText = `I think the ${item.speakName || item.name} will ${appState.stemUserPrediction}`;
            } else if (eslLevel === 'intermediate') {
                const verb = appState.stemUserPrediction === 'attract' ? 'attract' : 'not pull';
                speechText = `The magnet will ${verb} the ${item.speakName || item.name}!`;
            } else {
                const verb = appState.stemUserPrediction === 'conduct' ? 'light up' : 'stay dark';
                speechText = `The ${item.speakName || item.name} will make the bulb ${verb}!`;
            }
            audioEngine.speak(speechText, true);
        } else {
            if (eslLevel === 'beginner') {
                audioEngine.speak(`I think the ${item.speakName || item.name} will float, or sink? Vote your prediction!`, true);
            } else if (eslLevel === 'intermediate') {
                audioEngine.speak(`Will the magnet attract or not pull the ${item.speakName || item.name}? Vote your prediction!`, true);
            } else {
                audioEngine.speak(`Will the ${item.speakName || item.name} make the bulb light up or stay dark? Vote your prediction!`, true);
            }
        }
    });
}

// Experiment Test Hypothesis Button
const btnStemTest = document.getElementById('btn-stem-test');
if (btnStemTest) {
    btnStemTest.addEventListener('click', () => {
        const { eslLevel, stemData } = getSeniorStemContext();
        const item = stemData.experiment.items[appState.stemItemIndex || 0];
        if (!item) return;

        appState.stemTested = true;
        saveState();
        renderSeniorStemExperiment();

        let actualOutcome = '';
        if (eslLevel === 'beginner') actualOutcome = item.floats ? 'float' : 'sink';
        else if (eslLevel === 'intermediate') actualOutcome = item.magnetic ? 'attract' : 'no_pull';
        else actualOutcome = item.conducts ? 'conduct' : 'insulate';

        const wasRight = appState.stemUserPrediction && (appState.stemUserPrediction === actualOutcome);

        // Reaction and automatic heart award
        const handleReaction = () => {
            const cleanResultFrame = (item.resultFrame || '').replace(/\[|\]/g, '');
            if (wasRight) {
                audioEngine.playFanfare();
                triggerConfetti();
                const resultBox = document.getElementById('stem-result-box') || btnTest;
                awardHeartToActiveStudent(resultBox, 1);
                audioEngine.speak("That's correct, well done! " + cleanResultFrame, true);
            } else {
                if (eslLevel === 'beginner') {
                    if (item.floats) audioEngine.playCorrect();
                    else audioEngine.playTone(200, 'triangle', 0.25);
                } else if (eslLevel === 'intermediate') {
                    audioEngine.playCorrect();
                } else {
                    if (item.conducts) audioEngine.playCorrect();
                    else audioEngine.playWrong();
                }
                if (appState.stemUserPrediction) {
                    audioEngine.speak("Good try! " + cleanResultFrame, true);
                } else {
                    audioEngine.speak(cleanResultFrame, true);
                }
            }
        };

        if (stemTestTimeout) {
            clearTimeout(stemTestTimeout);
            stemTestTimeout = null;
        }

        if (eslLevel === 'beginner') {
            audioEngine.playSplash();
            stemTestTimeout = setTimeout(handleReaction, 400);
        } else if (eslLevel === 'intermediate') {
            if (item.magnetic) audioEngine.playSnap();
            else audioEngine.playClick();
            stemTestTimeout = setTimeout(handleReaction, 400);
        } else {
            audioEngine.playClick();
            stemTestTimeout = setTimeout(handleReaction, 400);
        }
    });
}

// Experiment Retest Button
const btnStemRetest = document.getElementById('btn-stem-retest');
if (btnStemRetest) {
    btnStemRetest.addEventListener('click', () => {
        stopSeniorStem();
        appState.stemTested = false;
        appState.stemUserPrediction = null;
        saveState();
        renderSeniorStemExperiment();
        audioEngine.speak("Reset! Vote your prediction to retest!", true);
    });
}

// Experiment Award Hearts
const btnStemExperimentAward = document.getElementById('btn-stem-experiment-award');
if (btnStemExperimentAward) {
    btnStemExperimentAward.addEventListener('click', () => {
        awardHeartToActiveStudent(btnStemExperimentAward, 2);
        triggerConfetti();
        audioEngine.playFanfare();
        audioEngine.speak("Super science hypothesis! 2 hearts awarded!");
    });
}

