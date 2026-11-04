/* ==========================================================================
   6.8 SENIOR ADVANCED VOCABULARY & SPELLING ENGINE (AGES 8-10)
   ========================================================================== */

let seniorSpellingRevealedIndices = new Set();
let seniorSpellingAnimationTimer = null;

function speakSeniorVocabCurrent() {
    const { wordList } = getSeniorVocabContext();
    const item = wordList[appState.seniorVocabIndex || 0];
    if (item && typeof audioEngine !== 'undefined' && audioEngine.soundEnabled) {
        if (appState.seniorVocabSubTab === 'spelling') {
            audioEngine.speak(`Spelling Bee challenge! Listen to the word: ${item.word}`, true);
        } else {
            audioEngine.speak(item.word, true);
        }
    }
}
window.speakSeniorVocabCurrent = speakSeniorVocabCurrent;

function getSeniorVocabContext() {
    const eslLevel = appState.eslLevelVocab || 'intermediate';
    let vocabLevelDict = null;
    if (typeof SeniorVocabRegistry !== 'undefined' && SeniorVocabRegistry.getVocab) {
        vocabLevelDict = SeniorVocabRegistry.getVocab(eslLevel);
    }
    if (!vocabLevelDict && typeof SENIOR_VOCAB_DATA !== 'undefined') {
        vocabLevelDict = SENIOR_VOCAB_DATA[eslLevel] || SENIOR_VOCAB_DATA.intermediate;
    }
    const defaultCat = 'head_words';
    const categoryKey = appState.seniorVocabCategory || defaultCat;
    const wordList = vocabLevelDict ? (vocabLevelDict[categoryKey] || vocabLevelDict.head_words || vocabLevelDict.prefixes || vocabLevelDict.prefix_suffix || []) : [];
    return { eslLevel, vocabLevelDict, categoryKey, wordList };
}

function renderSeniorVocabStage(resetSpellingReveal = true) {
    const { eslLevel } = getSeniorVocabContext();

    const eslVocabSelect = document.getElementById('select-vocab-esl-level');
    if (eslVocabSelect) {
        eslVocabSelect.value = eslLevel;
        if (!eslVocabSelect.dataset.bound) {
            eslVocabSelect.dataset.bound = 'true';
            eslVocabSelect.addEventListener('change', (e) => {
                appState.eslLevelVocab = e.target.value;
                appState.seniorVocabIndex = 0;
                if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                    appState.seniorVocabCategory = 'head_words';
                }
                saveState();
                renderSeniorVocabStage(true);
                speakSeniorVocabCurrent();
            });
        }
    }

    const catSelect = document.getElementById('select-vocab-category');
    if (catSelect) {
        if (eslLevel === 'beginner') {
            const beginnerOpts = [
                { val: 'head_words', label: '🐶 Head Words (un- = NOT, re- = AGAIN)' },
                { val: 'tail_words', label: '🐕 Tail Words (-er = PERSON, -ful / -less)' },
                { val: 'compound', label: '☀️ Word Math (Compound Words)' }
            ];
            if (catSelect.dataset.eslLevel !== 'beginner') {
                catSelect.dataset.eslLevel = 'beginner';
                catSelect.innerHTML = beginnerOpts.map(o => `<option value="${o.val}">${o.label}</option>`).join('');
                if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                    appState.seniorVocabCategory = 'head_words';
                }
            }
        } else if (eslLevel === 'intermediate') {
            const intermediateOpts = [
                { val: 'head_words', label: '🐶 Head Words (dis- = DO NOT, mis- = WRONG WAY)' },
                { val: 'tail_words', label: '🐕 Tail Words (-ly = IN A WAY, -able / un-...-able)' },
                { val: 'compound', label: '☀️ Word Math (Compound Words)' }
            ];
            if (catSelect.dataset.eslLevel !== 'intermediate') {
                catSelect.dataset.eslLevel = 'intermediate';
                catSelect.innerHTML = intermediateOpts.map(o => `<option value="${o.val}">${o.label}</option>`).join('');
                if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                    appState.seniorVocabCategory = 'head_words';
                }
            }
        } else {
            const advancedOpts = [
                { val: 'head_words', label: '🐶 Head Words (im-/in- = NOT, over-/under-)' },
                { val: 'tail_words', label: '🐕 Tail Words (-tion/-sion = SHUN, -ous = FULL OF)' },
                { val: 'compound', label: '☀️ Word Math (Compound Words)' }
            ];
            if (catSelect.dataset.eslLevel !== 'advanced') {
                catSelect.dataset.eslLevel = 'advanced';
                catSelect.innerHTML = advancedOpts.map(o => `<option value="${o.val}">${o.label}</option>`).join('');
                if (!['head_words', 'tail_words', 'compound'].includes(appState.seniorVocabCategory)) {
                    appState.seniorVocabCategory = 'head_words';
                }
            }
        }
        catSelect.value = appState.seniorVocabCategory || 'head_words';
    }

    const { wordList } = getSeniorVocabContext();

    if (appState.seniorVocabIndex >= wordList.length) {
        appState.seniorVocabIndex = 0;
    }

    const item = wordList[appState.seniorVocabIndex || 0];
    if (!item) return;

    if (resetSpellingReveal) {
        seniorSpellingRevealedIndices.clear();
        if (seniorSpellingAnimationTimer) {
            clearTimeout(seniorSpellingAnimationTimer);
            seniorSpellingAnimationTimer = null;
        }
    }

    const currentSubTab = appState.seniorVocabSubTab || 'study';

    // Update Tab UI Elements
    const tabStudy = document.getElementById('tab-vocab-study');
    const tabSpelling = document.getElementById('tab-vocab-spelling');
    const panelStudy = document.getElementById('vocab-study-panel');
    const panelSpelling = document.getElementById('vocab-spelling-panel');
    const btnBreakdownAudio = document.getElementById('btn-vocab-breakdown-audio');
    const btnVocabAward = document.getElementById('btn-vocab-award');

    if (currentSubTab === 'spelling') {
        if (tabStudy) tabStudy.classList.remove('active');
        if (tabSpelling) tabSpelling.classList.add('active');
        if (panelStudy) panelStudy.classList.add('hidden');
        if (panelSpelling) panelSpelling.classList.remove('hidden');
        if (btnBreakdownAudio) btnBreakdownAudio.classList.add('hidden');
        if (btnVocabAward) btnVocabAward.classList.add('hidden');
        renderSeniorSpellingBee(item, wordList);
    } else {
        if (tabStudy) tabStudy.classList.add('active');
        if (tabSpelling) tabSpelling.classList.remove('active');
        if (panelStudy) panelStudy.classList.remove('hidden');
        if (panelSpelling) panelSpelling.classList.add('hidden');
        if (btnBreakdownAudio) btnBreakdownAudio.classList.remove('hidden');
        if (btnVocabAward) btnVocabAward.classList.remove('hidden');

        // Render Headings & Badges
        document.getElementById('vocab-cat-badge').innerText = item.categoryLabel;
        document.getElementById('vocab-index-badge').innerText = `Word ${appState.seniorVocabIndex + 1} of ${wordList.length}`;
        document.getElementById('vocab-target-word').innerText = item.word;
        document.getElementById('vocab-word-phonetic').innerText = item.phonetic;

        // Beginner Visuals (Math Equation, Teacher Tip)
        const mathEqElem = document.getElementById('vocab-math-equation');
        const tipContainer = document.getElementById('vocab-teacher-tip-container');
        const tipText = document.getElementById('vocab-teacher-tip-text');

        // Visuals: Math Equation & Teacher Tip (used for Beginner & Intermediate)
        if (mathEqElem) {
            if (item.equation) {
                mathEqElem.innerText = item.equation;
                mathEqElem.classList.remove('hidden');
            } else {
                mathEqElem.classList.add('hidden');
            }
        }
        if (tipContainer && tipText) {
            if (item.teacherTip) {
                tipText.innerText = item.teacherTip;
                tipContainer.classList.remove('hidden');
            } else {
                tipContainer.classList.add('hidden');
            }
        }

        // Render Morphological Breakdown Blocks
        const morphContainer = document.getElementById('vocab-morph-breakdown');
        morphContainer.innerHTML = item.parts.map((p, i) => `
            ${i > 0 ? '<span class="morph-plus">+</span>' : ''}
            <div class="morph-block morph-${p.type}" title="${p.meaning}">
                <div class="morph-text">${p.text}</div>
                <div style="font-size:0.75rem; font-weight:600; opacity:0.85;">${p.meaning}</div>
            </div>
        `).join('');

        // Bind morph block clicks to audio
        morphContainer.querySelectorAll('.morph-block').forEach(b => {
            b.addEventListener('click', () => {
                const text = b.querySelector('.morph-text').innerText;
                audioEngine.speak(text, true);
            });
        });

        // Render Definition & Sentence Context
        document.getElementById('vocab-def-text').innerText = item.definition;
        document.getElementById('vocab-sentence-text').innerText = `"${item.sentence}"`;
    }
}

function renderSeniorSpellingBee(item, wordList) {
    const cleanWord = (item.spellWord || item.word).replace(/[^a-zA-Z]/g, '').toUpperCase();
    
    // Badges
    const catBadge = document.getElementById('spelling-cat-badge');
    const lenBadge = document.getElementById('spelling-length-badge');
    if (catBadge) catBadge.innerText = `🐝 Spelling Bee: ${item.categoryLabel}`;
    if (lenBadge) lenBadge.innerText = `${cleanWord.length} Letters • Word ${appState.seniorVocabIndex + 1} of ${wordList.length}`;

    // Definition & Masked Sentence
    const defElem = document.getElementById('spelling-def-text');
    const sentenceElem = document.getElementById('spelling-sentence-masked');
    if (defElem) defElem.innerText = item.definition;
    
    if (sentenceElem) {
        const rootWord = item.word.split('/')[0].trim();
        const regex = new RegExp(`\\b${rootWord}\\b`, 'gi');
        let masked = item.sentence.replace(regex, '__________');
        if (masked === item.sentence) {
            masked = item.sentence.replace(new RegExp(cleanWord, 'gi'), '__________');
        }
        sentenceElem.innerText = `"${masked}"`;
    }

    // Math Clue in Spelling Bee
    const mathClueItem = document.getElementById('spelling-math-clue-item');
    const mathClueText = document.getElementById('spelling-math-clue-text');
    if (mathClueItem && mathClueText) {
        if (item.equation) {
            const parts = item.equation.split('=');
            const clue = parts.length > 1 ? `${parts[0].trim()} = ❓` : item.equation;
            mathClueText.innerText = clue;
            mathClueItem.classList.remove('hidden');
        } else {
            mathClueItem.classList.add('hidden');
        }
    }

    // Render Letter Tiles
    const tilesContainer = document.getElementById('spelling-tiles-container');
    if (tilesContainer) {
        tilesContainer.innerHTML = cleanWord.split('').map((letter, i) => {
            const isRevealed = seniorSpellingRevealedIndices.has(i);
            return `
                <div class="spelling-tile ${isRevealed ? 'revealed-tile' : 'hidden-tile'}" data-letter-idx="${i}" data-letter="${letter}">
                    ${isRevealed ? letter : '?'}
                </div>
            `;
        }).join('');

        // Click individual tile to reveal or pronounce
        tilesContainer.querySelectorAll('.spelling-tile').forEach(tile => {
            tile.addEventListener('click', () => {
                const idx = parseInt(tile.getAttribute('data-letter-idx'));
                const letter = tile.getAttribute('data-letter');
                
                if (!seniorSpellingRevealedIndices.has(idx)) {
                    seniorSpellingRevealedIndices.add(idx);
                    tile.classList.remove('hidden-tile');
                    tile.classList.add('revealed-tile');
                    tile.innerText = letter;
                    audioEngine.speak(letter, true);

                    // Check if all are now revealed
                    if (seniorSpellingRevealedIndices.size === cleanWord.length) {
                        setTimeout(() => {
                            audioEngine.speak(item.word, false);
                            triggerConfetti();
                            audioEngine.playCorrect();
                        }, 500);
                    }
                } else {
                    audioEngine.speak(letter, true);
                }
            });
        });
    }
}

// Tab switching bindings
const tabVocabStudy = document.getElementById('tab-vocab-study');
const tabVocabSpelling = document.getElementById('tab-vocab-spelling');
if (tabVocabStudy && tabVocabSpelling) {
    tabVocabStudy.addEventListener('click', () => {
        appState.seniorVocabSubTab = 'study';
        saveState();
        renderSeniorVocabStage(false);
    });

    tabVocabSpelling.addEventListener('click', () => {
        appState.seniorVocabSubTab = 'spelling';
        saveState();
        renderSeniorVocabStage(false);
        const { wordList } = getSeniorVocabContext();
        const item = wordList[appState.seniorVocabIndex || 0];
        if (item) {
            audioEngine.speak(`Spelling Bee challenge! Listen to the word: ${item.word}`, true);
        }
    });
}

// Spelling Bee Controls
const btnSpellSayWord = document.getElementById('btn-spell-say-word');
if (btnSpellSayWord) {
    btnSpellSayWord.addEventListener('click', () => {
        const { wordList } = getSeniorVocabContext();
        const item = wordList[appState.seniorVocabIndex || 0];
        if (item) audioEngine.speak(item.word, true);
    });
}

const btnSpellSaySentence = document.getElementById('btn-spell-say-sentence');
if (btnSpellSaySentence) {
    btnSpellSaySentence.addEventListener('click', () => {
        const { wordList } = getSeniorVocabContext();
        const item = wordList[appState.seniorVocabIndex || 0];
        if (item) {
            audioEngine.speak(`Listen to the sentence context: ${item.sentence}`, true);
        }
    });
}

const btnSpellHint = document.getElementById('btn-spell-hint');
if (btnSpellHint) {
    btnSpellHint.addEventListener('click', () => {
        const { wordList } = getSeniorVocabContext();
        const item = wordList[appState.seniorVocabIndex || 0];
        if (!item) return;

        const cleanWord = (item.spellWord || item.word).replace(/[^a-zA-Z]/g, '').toUpperCase();
        
        // Find first unrevealed letter index
        let targetIdx = -1;
        for (let i = 0; i < cleanWord.length; i++) {
            if (!seniorSpellingRevealedIndices.has(i)) {
                targetIdx = i;
                break;
            }
        }

        if (targetIdx !== -1) {
            seniorSpellingRevealedIndices.add(targetIdx);
            const tile = document.querySelector(`.spelling-tile[data-letter-idx="${targetIdx}"]`);
            if (tile) {
                tile.classList.remove('hidden-tile');
                tile.classList.add('revealed-tile');
                tile.innerText = cleanWord[targetIdx];
            }
            audioEngine.speak(`Hint: letter ${targetIdx + 1} is ${cleanWord[targetIdx]}`, true);

            if (seniorSpellingRevealedIndices.size === cleanWord.length) {
                setTimeout(() => {
                    audioEngine.speak(item.word, false);
                    triggerConfetti();
                    audioEngine.playCorrect();
                }, 500);
            }
        } else {
            audioEngine.speak("All letters are already revealed!", true);
        }
    });
}

const btnSpellReveal = document.getElementById('btn-spell-reveal');
if (btnSpellReveal) {
    btnSpellReveal.addEventListener('click', () => {
        const { wordList } = getSeniorVocabContext();
        const item = wordList[appState.seniorVocabIndex || 0];
        if (!item) return;

        const cleanWord = (item.spellWord || item.word).replace(/[^a-zA-Z]/g, '').toUpperCase();
        const tiles = document.querySelectorAll('.spelling-tile');

        if (seniorSpellingAnimationTimer) {
            clearTimeout(seniorSpellingAnimationTimer);
            seniorSpellingAnimationTimer = null;
        }

        // Animate letter-by-letter reveal
        let step = 0;
        function revealNextLetter() {
            if (step < cleanWord.length) {
                const currentLetter = cleanWord[step];
                seniorSpellingRevealedIndices.add(step);

                tiles.forEach((t, idx) => {
                    if (idx === step) {
                        t.classList.remove('hidden-tile');
                        t.classList.add('revealed-tile', 'speaking-tile');
                        t.innerText = currentLetter;
                    } else {
                        t.classList.remove('speaking-tile');
                    }
                });

                audioEngine.speak(currentLetter, true);
                step++;
                seniorSpellingAnimationTimer = setTimeout(revealNextLetter, 550);
            } else {
                tiles.forEach(t => t.classList.remove('speaking-tile'));
                seniorSpellingAnimationTimer = setTimeout(() => {
                    audioEngine.speak(item.word, true);
                    triggerConfetti();
                    audioEngine.playCorrect();
                    seniorSpellingAnimationTimer = null;
                }, 400);
            }
        }

        revealNextLetter();
    });
}

const btnSpellAward = document.getElementById('btn-spell-award');
if (btnSpellAward) {
    btnSpellAward.addEventListener('click', () => {
        awardHeartToActiveStudent(btnSpellAward, 2);
        triggerConfetti();
        audioEngine.playFanfare();
        audioEngine.speak("Super spelling! 2 hearts awarded!");
    });
}

// Category Selector Handler
const vocabCatSelect = document.getElementById('select-vocab-category');
if (vocabCatSelect) {
    vocabCatSelect.addEventListener('change', (e) => {
        appState.seniorVocabCategory = e.target.value;
        appState.seniorVocabIndex = 0;
        saveState();
        renderSeniorVocabStage(true);
        speakSeniorVocabCurrent();
    });
}

// Top Header Speak Button
const btnVocabSpeak = document.getElementById('btn-vocab-speak');
if (btnVocabSpeak) {
    btnVocabSpeak.addEventListener('click', () => {
        speakSeniorVocabCurrent();
    });
}

const btnVocabBreakdownAudio = document.getElementById('btn-vocab-breakdown-audio');
if (btnVocabBreakdownAudio) {
    btnVocabBreakdownAudio.addEventListener('click', () => {
        const { wordList } = getSeniorVocabContext();
        const item = wordList[appState.seniorVocabIndex || 0];
        if (item) {
            if (item.equation) {
                const cleanEq = item.equation
                    .replace(/\+/g, ' plus ')
                    .replace(/=/g, ' equals ')
                    .replace(/[^\w\s+=-]/gi, '')
                    .replace(/\s+/g, ' ')
                    .trim();
                audioEngine.speak(`${cleanEq}! ${item.word} means ${item.definition}`, true);
            } else {
                const partsStr = item.parts.map(p => p.text).join(' plus ');
                audioEngine.speak(`${item.word} is formed by ${partsStr}.`, true);
            }
        }
    });
}

const btnVocabReset = document.getElementById('btn-vocab-reset');
if (btnVocabReset) {
    btnVocabReset.addEventListener('click', () => {
        appState.seniorVocabIndex = 0;
        saveState();
        renderSeniorVocabStage(true);
        speakSeniorVocabCurrent();
    });
}

const btnVocabNext = document.getElementById('btn-vocab-next');
if (btnVocabNext) {
    btnVocabNext.addEventListener('click', () => {
        const { wordList } = getSeniorVocabContext();
        appState.seniorVocabIndex = (appState.seniorVocabIndex + 1) % wordList.length;
        saveState();
        renderSeniorVocabStage(true);
        speakSeniorVocabCurrent();
    });
}

const btnVocabPrev = document.getElementById('btn-vocab-prev');
if (btnVocabPrev) {
    btnVocabPrev.addEventListener('click', () => {
        const { wordList } = getSeniorVocabContext();
        appState.seniorVocabIndex = (appState.seniorVocabIndex - 1 + wordList.length) % wordList.length;
        saveState();
        renderSeniorVocabStage(true);
        speakSeniorVocabCurrent();
    });
}

const btnVocabAward = document.getElementById('btn-vocab-award');
if (btnVocabAward) {
    btnVocabAward.addEventListener('click', () => {
        awardHeartToActiveStudent(btnVocabAward, 1);
        triggerConfetti();
        audioEngine.speak("Great word study!");
    });
}

function stopSeniorVocab() {
    if (seniorSpellingAnimationTimer) {
        clearTimeout(seniorSpellingAnimationTimer);
        seniorSpellingAnimationTimer = null;
    }
}
window.stopSeniorVocab = stopSeniorVocab;

