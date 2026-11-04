/* ==========================================================================
   7. QUIZ GAMES ENGINE
   ========================================================================== */

let currentQuizType = null;
let currentQuizQuestion = null;
let quizStars = 0;

function awardHeartToActiveStudent(targetElement = null, count = 1) {
    if (typeof targetElement === 'number') {
        count = targetElement;
        targetElement = null;
    }

    quizStars += count;
    if (typeof appState !== 'undefined' && appState.activeStudentId) {
        let student = appState.students.find(s => s.id === appState.activeStudentId);
        if (!student && appState.students.length > 0) {
            student = appState.students[0];
            appState.activeStudentId = student.id;
        }
        if (student) {
            student.stars = (student.stars || 0) + count;
            if (typeof saveState === 'function') saveState();
            if (typeof renderScoreboard === 'function') renderScoreboard();
        }
    }
    updateHeartsDisplay();

    // Trigger Popping Glowing Heart Graphic right at the awarded element
    if (typeof spawnHeartPopGraphic === 'function') {
        spawnHeartPopGraphic(targetElement, count);
    } else if (typeof spawnStarPopGraphic === 'function') {
        spawnStarPopGraphic(targetElement, count);
    }
}

function updateHeartsDisplay() {
    // Synchronize all Today's Hearts badges across all Junior & Senior views
    document.querySelectorAll('.today-hearts-count').forEach(el => {
        el.innerText = quizStars;
    });

    const scoreElemQuiz = document.getElementById('quiz-score-stars');
    if (scoreElemQuiz) scoreElemQuiz.innerText = quizStars;

    const scoreElemQuizStage = document.getElementById('quiz-stage-score-stars');
    if (scoreElemQuizStage) scoreElemQuizStage.innerText = quizStars;

    const scoreElemTeacher = document.getElementById('teacher-score-stars');
    if (scoreElemTeacher) scoreElemTeacher.innerText = quizStars;

    const scoreElemSenior = document.getElementById('senior-stage-score-stars');
    if (scoreElemSenior) scoreElemSenior.innerText = quizStars;

    // Update navbar all-time running tally
    const navStarCountElem = document.getElementById('nav-star-count');
    if (navStarCountElem && typeof appState !== 'undefined') {
        const activeSt = appState.activeStudentId ? appState.students.find(s => s.id === appState.activeStudentId) : null;
        if (activeSt) navStarCountElem.innerText = activeSt.stars || 0;
    }
}

function bindAllScoreBadgeResetListeners() {
    document.querySelectorAll('.quiz-score-badge.clickable-badge').forEach(badge => {
        if (!badge.dataset.resetBound) {
            badge.dataset.resetBound = 'true';
            badge.addEventListener('click', resetActiveStudentHearts);
        }
    });
}

function resetActiveStudentHearts() {
    // Only reset Today's Hearts (session tally); student's all-time lifetime total is preserved!
    quizStars = 0;
    updateHeartsDisplay();
    audioEngine.playClick();
}

// Bind all score badge reset click listeners
bindAllScoreBadgeResetListeners();
window.updateHeartsDisplay = updateHeartsDisplay;
window.bindAllScoreBadgeResetListeners = bindAllScoreBadgeResetListeners;

const quizMenu = document.getElementById('quiz-menu');
const quizGameArea = document.getElementById('quiz-game-area');

document.querySelectorAll('.quiz-card').forEach(card => {
    card.addEventListener('click', () => {
        const quizType = card.getAttribute('data-quiz');
        if (quizType) {
            currentQuizType = quizType;

            // Dynamic title update on stage
            const h3Elem = card.querySelector('h3');
            if (h3Elem && document.getElementById('quiz-game-title')) {
                document.getElementById('quiz-game-title').innerText = h3Elem.innerText;
            }

            // Switch to dedicated standalone view section for the quiz game
            switchView('view-quiz-stage');
        }
    });
});

/* ==========================================================================
   7.1 STANDALONE "FIND THE LETTER" GAME ENGINE
   ========================================================================== */
let letterGameTarget = null;
let letterGameChoices = [];

function startFindTheLetterGame() {
    const promptText = document.getElementById('letter-part1-prompt');
    const optionsGrid = document.getElementById('letter-part1-grid');

    optionsGrid.innerHTML = '';

    // Pick 1 Target and 3 Distractors from ALPHABET_DATA
    letterGameTarget = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
    const distractors = ALPHABET_DATA.filter(a => a.letter !== letterGameTarget.letter)
        .sort(() => 0.5 - Math.random()).slice(0, 3);
    letterGameChoices = [letterGameTarget, ...distractors].sort(() => 0.5 - Math.random());

    promptText.innerText = `Which button is letter ${letterGameTarget.letter}?`;

    // Speak Prompt
    audioEngine.speak(`Find the letter ${letterGameTarget.letter}`, true);

    // Bind Repeat button
    const repeatBtn = document.getElementById('btn-letter-repeat-speech');
    if (repeatBtn) {
        repeatBtn.onclick = () => {
            audioEngine.speak(`Find the letter ${letterGameTarget.letter}`, true);
        };
    }

    // Render 4 Letter Option buttons
    letterGameChoices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerText = `${c.letter} ${c.lower}`;
        btn.onclick = () => {
            if (c.letter === letterGameTarget.letter) {
                btn.classList.add('correct');
                audioEngine.playCorrect();
                audioEngine.speak(`Great job! That is letter ${c.letter}!`, true);
                triggerConfetti();
                awardHeartToActiveStudent(btn, 1);

                // Automatically generate new letter question after 3.0s
                setTimeout(startFindTheLetterGame, 3000);
            } else {
                btn.classList.add('wrong');
                audioEngine.playWrong();
                audioEngine.speak(`Try again! Find letter ${letterGameTarget.letter}`, true);
            }
        };
        optionsGrid.appendChild(btn);
    });
}

document.getElementById('btn-quiz-repeat-prompt').addEventListener('click', () => {
    if (currentQuizQuestion && currentQuizQuestion.prompt) {
        audioEngine.speak(currentQuizQuestion.prompt);
    }
});

function generateNewQuizQuestion() {
    const questionText = document.getElementById('quiz-question-text');
    const questionVisual = document.getElementById('quiz-question-visual');
    const optionsGrid = document.getElementById('quiz-options-grid');

    questionVisual.innerHTML = '';
    optionsGrid.innerHTML = '';
    optionsGrid.classList.remove('memory-grid-layout');
    optionsGrid.classList.remove('hidden');

    switch (currentQuizType) {
        case 'letter': {
            const target = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
            const distractors = ALPHABET_DATA.filter(a => a.letter !== target.letter)
                .sort(() => 0.5 - Math.random()).slice(0, 3);
            const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

            currentQuizQuestion = {
                prompt: `Find the letter ${target.letter}`,
                correct: target.letter
            };

            questionText.innerText = `Which one is letter ${target.letter}?`;
            choices.forEach(c => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.innerText = `${c.letter} ${c.lower}`;
                btn.onclick = () => handleQuizAnswer(c.letter === target.letter, btn);
                optionsGrid.appendChild(btn);
            });
            break;
        }

        case 'colour': {
            const target = COLOURS_DATA[Math.floor(Math.random() * COLOURS_DATA.length)];
            const distractors = COLOURS_DATA.filter(c => c.name !== target.name)
                .sort(() => 0.5 - Math.random()).slice(0, 3);
            const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

            currentQuizQuestion = {
                prompt: `Find the colour ${target.name}`,
                correct: target.name
            };

            questionText.innerText = `Which tile is ${target.name}?`;
            choices.forEach(c => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.style.backgroundColor = c.hex;
                btn.style.minHeight = '110px';
                btn.style.borderRadius = '24px';
                btn.style.border = '5px solid #ffffff';
                btn.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                btn.innerText = ''; // Pure color tile only - no text label!
                btn.onclick = () => handleQuizAnswer(c.name === target.name, btn);
                optionsGrid.appendChild(btn);
            });
            break;
        }

        case 'shape': {
            const target = SHAPES_DATA[Math.floor(Math.random() * SHAPES_DATA.length)];
            const distractors = SHAPES_DATA.filter(s => s.name !== target.name)
                .sort(() => 0.5 - Math.random()).slice(0, 3);
            const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

            currentQuizQuestion = {
                prompt: `Find the ${target.name}`,
                correct: target.name
            };

            questionText.innerText = `Which shape is a ${target.name}?`;
            choices.forEach(c => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.innerHTML = `<div style="width:60px;height:60px;">${getSVGGraphic(c.icon, '#6c5ce7')}</div><span>${c.name}</span>`;
                btn.onclick = () => handleQuizAnswer(c.name === target.name, btn);
                optionsGrid.appendChild(btn);
            });
            break;
        }

        case 'counting': {
            const count = Math.floor(Math.random() * 8) + 1; // 1 to 8
            currentQuizQuestion = {
                prompt: `How many apples do you see?`,
                correct: count
            };

            questionText.innerText = `How many objects do you see?`;
            for (let i = 0; i < count; i++) {
                const span = document.createElement('div');
                span.style.width = '50px';
                span.style.height = '50px';
                span.innerHTML = getSVGGraphic('apple', '#ff5252');
                questionVisual.appendChild(span);
            }

            const choices = [count, count + 1, Math.max(1, count - 1), count + 2].sort(() => 0.5 - Math.random());
            choices.forEach(num => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.innerText = num.toString();
                btn.onclick = () => handleQuizAnswer(num === count, btn);
                optionsGrid.appendChild(btn);
            });
            break;
        }

        case 'wordstart': {
            const target = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
            const correctLetter = target.word.charAt(0).toUpperCase();

            currentQuizQuestion = {
                prompt: `Which letter starts the word ${target.word}?`,
                correct: correctLetter
            };

            questionText.innerText = `Which letter starts the word "${target.word}"?`;
            questionVisual.innerHTML = `<div style="width:90px;height:90px;margin:0 auto;">${getSVGGraphic(target.icon, '#00cec9')}</div>`;

            const distractors = ALPHABET_DATA.filter(a => a.letter !== correctLetter)
                .sort(() => 0.5 - Math.random()).slice(0, 3).map(a => a.letter);
            const choices = [correctLetter, ...distractors].sort(() => 0.5 - Math.random());

            choices.forEach(l => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.innerText = l;
                btn.onclick = () => handleQuizAnswer(l === correctLetter, btn);
                optionsGrid.appendChild(btn);
            });
            break;
        }

        case 'picmatch': {
            const target = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
            currentQuizQuestion = {
                prompt: `Which picture is a ${target.word}?`,
                correct: target.word
            };

            questionText.innerText = `Which picture is a ${target.word}?`;

            const distractors = SIMPLE_WORDS_DATA.filter(w => w.word !== target.word)
                .sort(() => 0.5 - Math.random()).slice(0, 3);
            const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

            choices.forEach(w => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.innerHTML = `<div style="width:70px;height:70px;margin:0 auto;">${getSVGGraphic(w.icon, '#00cec9')}</div><span>${w.word}</span>`;
                btn.onclick = () => handleQuizAnswer(w.word === target.word, btn);
                optionsGrid.appendChild(btn);
            });
            break;
        }

        case 'truefalse': {
            const item = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
            const isTrue = Math.random() < 0.5;
            let displayedWord = item.word;

            if (!isTrue) {
                const wrongItems = SIMPLE_WORDS_DATA.filter(w => w.word !== item.word);
                displayedWord = wrongItems[Math.floor(Math.random() * wrongItems.length)].word;
            }

            currentQuizQuestion = {
                prompt: `Is this picture a ${displayedWord}?`,
                correct: isTrue ? 'True' : 'False'
            };

            questionText.innerText = `Is this a ${displayedWord}?`;
            questionVisual.innerHTML = `<div style="width:90px;height:90px;margin:0 auto;">${getSVGGraphic(item.icon, '#e84393')}</div>`;

            ['True', 'False'].forEach(ans => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.style.fontSize = '1.3rem';
                btn.innerText = ans === 'True' ? '👍 Yes / True' : '👎 No / False';
                btn.onclick = () => handleQuizAnswer((ans === 'True') === isTrue, btn);
                optionsGrid.appendChild(btn);
            });
            break;
        }

        case 'memory': {
            questionText.innerText = `Find matching pairs!`;
            currentQuizQuestion = {
                prompt: "Find matching pairs!",
                correct: ""
            };
            optionsGrid.classList.add('memory-grid-layout');
            setupMemoryGame();
            break;
        }

        default: {
            // Fallback picture match
            const target = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
            questionText.innerText = `Which picture is a ${target.word}?`;
            currentQuizQuestion = { prompt: `Find the ${target.word}`, correct: target.word };

            const distractors = SIMPLE_WORDS_DATA.filter(w => w.word !== target.word)
                .sort(() => 0.5 - Math.random()).slice(0, 3);
            const choices = [target, ...distractors].sort(() => 0.5 - Math.random());

            choices.forEach(w => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.innerHTML = `<div style="width:70px;height:70px;margin:0 auto;">${getSVGGraphic(w.icon, '#00cec9')}</div>`;
                btn.onclick = () => handleQuizAnswer(w.word === target.word, btn);
                optionsGrid.appendChild(btn);
            });
        }
    }

    if (currentQuizQuestion && currentQuizQuestion.prompt) {
        audioEngine.speak(currentQuizQuestion.prompt);
    }
}

function handleQuizAnswer(isCorrect, btnElem) {
    if (isCorrect) {
        btnElem.classList.add('correct');
        audioEngine.playCorrect();
        audioEngine.speak("Great job! That's correct!");
        triggerConfetti();
        awardHeartToActiveStudent(btnElem, 1);
        setTimeout(generateNewQuizQuestion, 3000);
    } else {
        btnElem.classList.add('wrong');
        audioEngine.playWrong();
        audioEngine.speak("Try again!");
    }
}

// Memory Matching Game Setup
function setupMemoryGame() {
    const optionsGrid = document.getElementById('quiz-options-grid');
    optionsGrid.innerHTML = '';

    const allIcons = [
        'apple', 'bear', 'cat', 'dog', 'elephant', 'fish', 'giraffe', 'house', 
        'icecream', 'jellyfish', 'kite', 'lion', 'moon', 'nest', 'owl', 'penguin', 
        'queen', 'rocket', 'sun', 'star', 'heart', 'tree', 'bird', 'book', 
        'car', 'monkey', 'umbrella', 'violin', 'watermelon', 'xylophone', 'yacht', 
        'zebra', 'ball', 'duck', 'banana', 'milk', 'cake'
    ];

    // Pick 4 random icons for 4 pairs (8 cards total)
    const chosenIcons = allIcons.sort(() => 0.5 - Math.random()).slice(0, 4);
    const cards = [...chosenIcons, ...chosenIcons].sort(() => 0.5 - Math.random());

    let flippedCards = [];
    let matchedPairs = 0;
    const totalPairs = chosenIcons.length;

    cards.forEach((icon) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.setAttribute('data-icon', icon);
        card.innerText = '❓';

        card.onclick = () => {
            if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) return;

            card.classList.add('flipped');
            card.innerHTML = `<div style="width:60px;height:60px;margin:0 auto;">${getSVGGraphic(icon, '#fdcb6e')}</div>`;
            audioEngine.playClick();
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                if (flippedCards[0].getAttribute('data-icon') === flippedCards[1].getAttribute('data-icon')) {
                    audioEngine.playCorrect();
                    triggerConfetti();
                    flippedCards[0].classList.add('matched');
                    flippedCards[1].classList.add('matched');
                    flippedCards = [];
                    matchedPairs++;

                    // Check if all pairs are matched
                    if (matchedPairs === totalPairs) {
                        if (typeof audioEngine.playHeart === 'function') {
                            audioEngine.playHeart();
                        } else if (typeof audioEngine.playStar === 'function') {
                            audioEngine.playStar();
                        }
                        awardHeartToActiveStudent(card, 1);
                        audioEngine.speak("Great memory matching! Here comes a new set!", true);
                        setTimeout(() => {
                            setupMemoryGame();
                        }, 3000);
                    }
                } else {
                    setTimeout(() => {
                        audioEngine.playWrong();
                        flippedCards.forEach(c => {
                            c.classList.remove('flipped');
                            c.innerText = '❓';
                        });
                        flippedCards = [];
                    }, 1000);
                }
            }
        };
        optionsGrid.appendChild(card);
    });
}

