/* ==========================================================================
   6. LEARNING MODES CONTROLLERS
   ========================================================================== */

// --- 6.1 ALPHABET MODE ---
let alphaPlayAllTimer = null;

function renderAlphabetStage() {
    const item = ALPHABET_DATA[appState.alphaIndex];
    document.getElementById('alpha-upper').innerText = item.letter;
    document.getElementById('alpha-lower').innerText = item.lower;
    document.getElementById('alpha-word').innerText = item.word;

    const container = document.getElementById('alpha-svg-container');
    container.innerHTML = getSVGGraphic(item.icon, '#6c5ce7');
}

function speakAlphabetCurrent() {
    const item = ALPHABET_DATA[appState.alphaIndex];
    if (item && typeof audioEngine !== 'undefined' && audioEngine.soundEnabled) {
        audioEngine.speak(`${item.letter}, for ${item.word}`, true);
    }
}
window.speakAlphabetCurrent = speakAlphabetCurrent;

const btnAlphaReset = document.getElementById('btn-alpha-reset');
if (btnAlphaReset) {
    btnAlphaReset.addEventListener('click', () => {
        appState.alphaIndex = 0;
        renderAlphabetStage();
        speakAlphabetCurrent();
    });
}

document.getElementById('btn-alpha-next').addEventListener('click', () => {
    appState.alphaIndex = (appState.alphaIndex + 1) % ALPHABET_DATA.length;
    renderAlphabetStage();
    speakAlphabetCurrent();
});

document.getElementById('btn-alpha-prev').addEventListener('click', () => {
    appState.alphaIndex = (appState.alphaIndex - 1 + ALPHABET_DATA.length) % ALPHABET_DATA.length;
    renderAlphabetStage();
    speakAlphabetCurrent();
});

document.getElementById('btn-alpha-random').addEventListener('click', () => {
    appState.alphaIndex = Math.floor(Math.random() * ALPHABET_DATA.length);
    renderAlphabetStage();
    speakAlphabetCurrent();
});

document.getElementById('btn-alpha-speak').addEventListener('click', () => {
    speakAlphabetCurrent();
});

document.getElementById('btn-alpha-playall').addEventListener('click', function() {
    if (alphaPlayAllTimer) {
        clearInterval(alphaPlayAllTimer);
        alphaPlayAllTimer = null;
        this.innerText = '▶️ Play All A–Z';
    } else {
        this.innerText = '⏸️ Stop Slideshow';
        // Always start at letter "A" (index 0)
        appState.alphaIndex = 0;
        renderAlphabetStage();
        
        const speakCurrentCard = () => {
            const current = ALPHABET_DATA[appState.alphaIndex];
            // Speak format: "A... A is for Apple"
            audioEngine.speak(`${current.letter}... ${current.letter} is for ${current.word}`, true);
        };

        // Speak A immediately upon clicking
        speakCurrentCard();

        alphaPlayAllTimer = setInterval(() => {
            appState.alphaIndex++;
            if (appState.alphaIndex >= ALPHABET_DATA.length) {
                // Reached end of Z, stop automatically
                clearInterval(alphaPlayAllTimer);
                alphaPlayAllTimer = null;
                document.getElementById('btn-alpha-playall').innerText = '▶️ Play All A–Z';
                return;
            }
            renderAlphabetStage();
            speakCurrentCard();
        }, 3800);
    }
});

// --- 6.2 PHONICS MODE ---
let phonicsPlayAllTimer = null;

function renderPhonicsStage() {
    const item = ALPHABET_DATA[appState.phonicsIndex];
    document.getElementById('phonics-letter').innerText = `${item.letter}${item.lower}`;
    document.getElementById('phonics-sound').innerText = `Sound: ${item.sound}`;
    document.getElementById('phonics-phrase').innerText = `"${item.phrase}"`;
    document.getElementById('phonics-svg-container').innerHTML = getSVGGraphic(item.icon, '#a29bfe');
}

function speakPhonicsCurrent() {
    const current = ALPHABET_DATA[appState.phonicsIndex];
    if (current && typeof audioEngine !== 'undefined' && audioEngine.soundEnabled) {
        audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
    }
}
window.speakPhonicsCurrent = speakPhonicsCurrent;

const btnPhonicsReset = document.getElementById('btn-phonics-reset');
if (btnPhonicsReset) {
    btnPhonicsReset.addEventListener('click', () => {
        appState.phonicsIndex = 0;
        renderPhonicsStage();
        speakPhonicsCurrent();
    });
}

document.getElementById('btn-phonics-next').addEventListener('click', () => {
    appState.phonicsIndex = (appState.phonicsIndex + 1) % ALPHABET_DATA.length;
    renderPhonicsStage();
    speakPhonicsCurrent();
});

document.getElementById('btn-phonics-prev').addEventListener('click', () => {
    appState.phonicsIndex = (appState.phonicsIndex - 1 + ALPHABET_DATA.length) % ALPHABET_DATA.length;
    renderPhonicsStage();
    speakPhonicsCurrent();
});

document.getElementById('btn-phonics-random').addEventListener('click', () => {
    appState.phonicsIndex = Math.floor(Math.random() * ALPHABET_DATA.length);
    renderPhonicsStage();
    speakPhonicsCurrent();
});

document.getElementById('btn-phonics-speak').addEventListener('click', () => {
    speakPhonicsCurrent();
});

const btnPhonicsPlayAll = document.getElementById('btn-phonics-playall');
if (btnPhonicsPlayAll) {
    btnPhonicsPlayAll.addEventListener('click', function() {
        if (phonicsPlayAllTimer) {
            clearInterval(phonicsPlayAllTimer);
            phonicsPlayAllTimer = null;
            this.innerText = '▶️ Play All A–Z';
        } else {
            this.innerText = '⏸️ Stop Slideshow';
            // Always start at letter "A" (index 0)
            appState.phonicsIndex = 0;
            renderPhonicsStage();

            const speakCurrentPhonics = () => {
                const current = ALPHABET_DATA[appState.phonicsIndex];
                // Speak format twice: "a... a... apple"
                audioEngine.speak(`${current.lower}... ${current.lower}... ${current.word}`, true);
            };

            speakCurrentPhonics();

            phonicsPlayAllTimer = setInterval(() => {
                appState.phonicsIndex++;
                if (appState.phonicsIndex >= ALPHABET_DATA.length) {
                    clearInterval(phonicsPlayAllTimer);
                    phonicsPlayAllTimer = null;
                    btnPhonicsPlayAll.innerText = '▶️ Play All A–Z';
                    return;
                }
                renderPhonicsStage();
                speakCurrentPhonics();
            }, 3800);
        }
    });
}

// --- 6.3 COLOURS MODE ---
let colourPlayAllTimer = null;

function renderColourStage() {
    const item = COLOURS_DATA[appState.colourIndex];
    
    // Display colour name and associated object (e.g. "Red (Red Strawberry)")
    const nameElem = document.getElementById('colour-name');
    nameElem.innerText = `${item.name} (${item.objectLabel})`;
    nameElem.style.color = item.hex === '#ffffff' ? '#2d3436' : item.hex;

    document.getElementById('colour-svg-container').innerHTML = getSVGGraphic(item.shape, item.hex === '#ffffff' ? '#2d3436' : item.hex);

    // Render color palette bubbles
    const palette = document.getElementById('colour-palette');
    palette.innerHTML = COLOURS_DATA.map((c, i) => `
        <div class="colour-bubble" style="background-color: ${c.hex}; ${c.hex === '#ffffff' ? 'border: 3px solid #b2bec3;' : ''}" title="${c.objectLabel}" data-col-idx="${i}"></div>
    `).join('');

    palette.querySelectorAll('.colour-bubble').forEach(b => {
        b.addEventListener('click', (e) => {
            appState.colourIndex = parseInt(e.currentTarget.getAttribute('data-col-idx'));
            renderColourStage();
            speakColourCurrent();
        });
    });
}

function speakColourCurrent() {
    const current = COLOURS_DATA[appState.colourIndex];
    if (current && typeof audioEngine !== 'undefined' && audioEngine.soundEnabled) {
        audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
    }
}
window.speakColourCurrent = speakColourCurrent;

document.getElementById('btn-colour-next').addEventListener('click', () => {
    appState.colourIndex = (appState.colourIndex + 1) % COLOURS_DATA.length;
    renderColourStage();
    speakColourCurrent();
});

document.getElementById('btn-colour-prev').addEventListener('click', () => {
    appState.colourIndex = (appState.colourIndex - 1 + COLOURS_DATA.length) % COLOURS_DATA.length;
    renderColourStage();
    speakColourCurrent();
});

document.getElementById('btn-colour-random').addEventListener('click', () => {
    appState.colourIndex = Math.floor(Math.random() * COLOURS_DATA.length);
    renderColourStage();
    speakColourCurrent();
});

document.getElementById('btn-color-speak').addEventListener('click', () => {
    speakColourCurrent();
});

const btnColourPlayAll = document.getElementById('btn-colour-playall');
if (btnColourPlayAll) {
    btnColourPlayAll.addEventListener('click', function() {
        if (colourPlayAllTimer) {
            clearInterval(colourPlayAllTimer);
            colourPlayAllTimer = null;
            this.innerText = '▶️ Play All Colours';
        } else {
            this.innerText = '⏸️ Stop Slideshow';
            // Always start at first colour Red (index 0)
            appState.colourIndex = 0;
            renderColourStage();

            const speakCurrentColour = () => {
                const current = COLOURS_DATA[appState.colourIndex];
                audioEngine.speak(`${current.name}... ${current.objectLabel}`, true);
            };

            speakCurrentColour();

            colourPlayAllTimer = setInterval(() => {
                appState.colourIndex++;
                if (appState.colourIndex >= COLOURS_DATA.length) {
                    clearInterval(colourPlayAllTimer);
                    colourPlayAllTimer = null;
                    btnColourPlayAll.innerText = '▶️ Play All Colours';
                    return;
                }
                renderColourStage();
                speakCurrentColour();
            }, 3800);
        }
    });
}

// --- 6.4 NUMBERS & COUNTING MODE ---
function renderNumberStage() {
    const item = NUMBERS_DATA[appState.numberIndex];
    document.getElementById('number-digit').innerText = item.digit;
    document.getElementById('number-word').innerText = item.word;

    const grid = document.getElementById('number-objects-grid');
    grid.innerHTML = '';

    for (let i = 1; i <= item.digit; i++) {
        const objDiv = document.createElement('div');
        objDiv.className = 'count-object-item';
        objDiv.innerHTML = getSVGGraphic('apple', '#ff7675');
        objDiv.addEventListener('click', () => {
            objDiv.classList.add('counted');
            audioEngine.playTone(300 + i * 20, 'sine', 0.1);
            audioEngine.speak(i.toString(), true);
        });
        grid.appendChild(objDiv);
    }
}

function speakNumberCurrent() {
    const current = NUMBERS_DATA[appState.numberIndex];
    if (current && typeof audioEngine !== 'undefined' && audioEngine.soundEnabled) {
        audioEngine.speak(current.word, true);
    }
}
window.speakNumberCurrent = speakNumberCurrent;

document.getElementById('btn-number-next').addEventListener('click', () => {
    appState.numberIndex = (appState.numberIndex + 1) % NUMBERS_DATA.length;
    renderNumberStage();
    speakNumberCurrent();
});

document.getElementById('btn-number-prev').addEventListener('click', () => {
    appState.numberIndex = (appState.numberIndex - 1 + NUMBERS_DATA.length) % NUMBERS_DATA.length;
    renderNumberStage();
    speakNumberCurrent();
});

document.getElementById('btn-number-random').addEventListener('click', () => {
    appState.numberIndex = Math.floor(Math.random() * NUMBERS_DATA.length);
    renderNumberStage();
    speakNumberCurrent();
});

document.getElementById('btn-number-speak').addEventListener('click', () => {
    speakNumberCurrent();
});

// --- 6.5 SHAPES MODE ---
let shapePlayAllTimer = null;

function renderShapeStage() {
    const item = SHAPES_DATA[appState.shapeIndex];
    document.getElementById('shape-name').innerText = item.name;
    document.getElementById('shape-svg-container').innerHTML = getSVGGraphic(item.icon, '#55efc4');
}

function speakShapeCurrent() {
    const current = SHAPES_DATA[appState.shapeIndex];
    if (current && typeof audioEngine !== 'undefined' && audioEngine.soundEnabled) {
        audioEngine.speak(current.name, true);
    }
}
window.speakShapeCurrent = speakShapeCurrent;

const btnShapeReset = document.getElementById('btn-shape-reset');
if (btnShapeReset) {
    btnShapeReset.addEventListener('click', () => {
        appState.shapeIndex = 0;
        renderShapeStage();
        speakShapeCurrent();
    });
}

document.getElementById('btn-shape-next').addEventListener('click', () => {
    appState.shapeIndex = (appState.shapeIndex + 1) % SHAPES_DATA.length;
    renderShapeStage();
    speakShapeCurrent();
});

document.getElementById('btn-shape-prev').addEventListener('click', () => {
    appState.shapeIndex = (appState.shapeIndex - 1 + SHAPES_DATA.length) % SHAPES_DATA.length;
    renderShapeStage();
    speakShapeCurrent();
});

document.getElementById('btn-shape-random').addEventListener('click', () => {
    appState.shapeIndex = Math.floor(Math.random() * SHAPES_DATA.length);
    renderShapeStage();
    speakShapeCurrent();
});

document.getElementById('btn-shape-speak').addEventListener('click', () => {
    speakShapeCurrent();
});

const btnShapePlayAll = document.getElementById('btn-shape-playall');
if (btnShapePlayAll) {
    btnShapePlayAll.addEventListener('click', function() {
        if (shapePlayAllTimer) {
            clearInterval(shapePlayAllTimer);
            shapePlayAllTimer = null;
            this.innerText = '▶️ Play All Shapes';
        } else {
            this.innerText = '⏸️ Stop Slideshow';
            // Always start at Circle (index 0)
            appState.shapeIndex = 0;
            renderShapeStage();

            const speakCurrentShape = () => {
                const current = SHAPES_DATA[appState.shapeIndex];
                audioEngine.speak(current.name, true);
            };

            speakCurrentShape();

            shapePlayAllTimer = setInterval(() => {
                appState.shapeIndex++;
                if (appState.shapeIndex >= SHAPES_DATA.length) {
                    clearInterval(shapePlayAllTimer);
                    shapePlayAllTimer = null;
                    btnShapePlayAll.innerText = '▶️ Play All Shapes';
                    return;
                }
                renderShapeStage();
                speakCurrentShape();
            }, 2500);
        }
    });
}

// --- 6.6 SIMPLE WORDS MODE ---
let wordPlayAllTimer = null;

function renderWordStage() {
    const item = SIMPLE_WORDS_DATA[appState.wordIndex];
    document.getElementById('word-card-name').innerText = item.word;
    document.getElementById('word-spelling').innerText = item.spelling;
    document.getElementById('word-svg-container').innerHTML = getSVGGraphic(item.icon, '#ffeaa7');
}

function speakWordCurrent() {
    const current = SIMPLE_WORDS_DATA[appState.wordIndex];
    if (current && typeof audioEngine !== 'undefined' && audioEngine.soundEnabled) {
        audioEngine.speak(current.word, true);
    }
}
window.speakWordCurrent = speakWordCurrent;

const btnWordReset = document.getElementById('btn-word-reset');
if (btnWordReset) {
    btnWordReset.addEventListener('click', () => {
        appState.wordIndex = 0;
        saveState();
        renderWordStage();
        speakWordCurrent();
    });
}

document.getElementById('btn-word-next').addEventListener('click', () => {
    appState.wordIndex = (appState.wordIndex + 1) % SIMPLE_WORDS_DATA.length;
    renderWordStage();
    speakWordCurrent();
});

document.getElementById('btn-word-prev').addEventListener('click', () => {
    appState.wordIndex = (appState.wordIndex - 1 + SIMPLE_WORDS_DATA.length) % SIMPLE_WORDS_DATA.length;
    renderWordStage();
    speakWordCurrent();
});

document.getElementById('btn-word-random').addEventListener('click', () => {
    appState.wordIndex = Math.floor(Math.random() * SIMPLE_WORDS_DATA.length);
    renderWordStage();
    speakWordCurrent();
});

document.getElementById('btn-word-speak').addEventListener('click', () => {
    speakWordCurrent();
});

const btnWordPlayAll = document.getElementById('btn-word-playall');
if (btnWordPlayAll) {
    btnWordPlayAll.addEventListener('click', function() {
        if (wordPlayAllTimer) {
            clearInterval(wordPlayAllTimer);
            wordPlayAllTimer = null;
            this.innerText = '▶️ Play All Words';
        } else {
            this.innerText = '⏸️ Stop Slideshow';
            // Always start at Cat (index 0)
            appState.wordIndex = 0;
            renderWordStage();

            const speakCurrentWord = () => {
                const current = SIMPLE_WORDS_DATA[appState.wordIndex];
                audioEngine.speak(current.word, true);
            };

            speakCurrentWord();

            wordPlayAllTimer = setInterval(() => {
                appState.wordIndex++;
                if (appState.wordIndex >= SIMPLE_WORDS_DATA.length) {
                    clearInterval(wordPlayAllTimer);
                    wordPlayAllTimer = null;
                    btnWordPlayAll.innerText = '▶️ Play All Words';
                    return;
                }
                renderWordStage();
                speakCurrentWord();
            }, 2500);
        }
    });
}


// Helper to halt all active Junior slideshow timers
function stopAllJuniorSlideshows() {
    if (alphaPlayAllTimer) {
        clearInterval(alphaPlayAllTimer);
        alphaPlayAllTimer = null;
        const btn = document.getElementById('btn-alpha-playall');
        if (btn) btn.innerText = '▶️ Play All A–Z';
    }
    if (phonicsPlayAllTimer) {
        clearInterval(phonicsPlayAllTimer);
        phonicsPlayAllTimer = null;
        const btn = document.getElementById('btn-phonics-playall');
        if (btn) btn.innerText = '▶️ Play All A–Z';
    }
    if (colourPlayAllTimer) {
        clearInterval(colourPlayAllTimer);
        colourPlayAllTimer = null;
        const btn = document.getElementById('btn-colour-playall');
        if (btn) btn.innerText = '▶️ Play All Colours';
    }
    if (shapePlayAllTimer) {
        clearInterval(shapePlayAllTimer);
        shapePlayAllTimer = null;
        const btn = document.getElementById('btn-shape-playall');
        if (btn) btn.innerText = '▶️ Play All Shapes';
    }
    if (wordPlayAllTimer) {
        clearInterval(wordPlayAllTimer);
        wordPlayAllTimer = null;
        const btn = document.getElementById('btn-word-playall');
        if (btn) btn.innerText = '▶️ Play All Words';
    }
}
window.stopAllJuniorSlideshows = stopAllJuniorSlideshows;
