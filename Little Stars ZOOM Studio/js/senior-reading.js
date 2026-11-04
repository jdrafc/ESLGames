/* ==========================================================================
   6.7 SENIOR STUDIO MODE SWITCHER & READING LAB ENGINE (AGES 8-10)
   ========================================================================== */

const btnModeJunior = document.getElementById('btn-mode-junior');
const btnModeSenior = document.getElementById('btn-mode-senior');

function updateStudioModeUI() {
    if (!btnModeJunior || !btnModeSenior) return;
    const currentMode = appState.studioMode || 'junior';
    
    if (currentMode === 'senior') {
        btnModeSenior.classList.add('active');
        btnModeJunior.classList.remove('active');
    } else {
        btnModeJunior.classList.add('active');
        btnModeSenior.classList.remove('active');
    }
}

if (btnModeJunior && btnModeSenior) {
    btnModeJunior.addEventListener('click', () => {
        appState.studioMode = 'junior';
        saveState();
        updateStudioModeUI();
        switchView('view-home');
    });

    btnModeSenior.addEventListener('click', () => {
        appState.studioMode = 'senior';
        saveState();
        updateStudioModeUI();
        switchView('view-home-senior');
    });

    updateStudioModeUI();
}

// Senior Reading Lab State
let currentStoryQuestionIndex = 0;

function getSeniorReadingStories(level) {
    if (typeof SeniorReadingRegistry !== 'undefined' && SeniorReadingRegistry.getStories) {
        const list = SeniorReadingRegistry.getStories(level);
        if (list && list.length > 0) return list;
    }
    if (typeof SENIOR_STORIES_DATA !== 'undefined' && SENIOR_STORIES_DATA[level] && SENIOR_STORIES_DATA[level].length > 0) {
        return SENIOR_STORIES_DATA[level];
    }
    return [];
}

function renderSeniorReadingStage() {
    const eslSelect = document.getElementById('select-reading-esl-level');
    if (eslSelect) {
        eslSelect.value = appState.eslLevelReading || 'intermediate';
        if (!eslSelect.dataset.bound) {
            eslSelect.dataset.bound = 'true';
            eslSelect.addEventListener('change', (e) => {
                appState.eslLevelReading = e.target.value;
                appState.seniorStoryIndex = 0;
                currentStoryQuestionIndex = 0;
                saveState();
                renderSeniorReadingStage();
            });
        }
    }

    const eslLevel = appState.eslLevelReading || 'intermediate';
    let storiesList = getSeniorReadingStories(eslLevel);
    if (!storiesList || storiesList.length === 0) {
        storiesList = getSeniorReadingStories('intermediate');
    }

    if (appState.seniorStoryIndex >= storiesList.length) {
        appState.seniorStoryIndex = 0;
    }

    const storySelect = document.getElementById('select-reading-story');
    if (storySelect) {
        storySelect.innerHTML = storiesList.map((st, i) => `
            <option value="${i}">${st.title}</option>
        `).join('');
        storySelect.value = appState.seniorStoryIndex || 0;

        if (!storySelect.dataset.bound) {
            storySelect.dataset.bound = 'true';
            storySelect.addEventListener('change', (e) => {
                appState.seniorStoryIndex = parseInt(e.target.value);
                currentStoryQuestionIndex = 0;
                saveState();
                renderSeniorReadingStage();
            });
        }
    }

    const story = storiesList[appState.seniorStoryIndex || 0];
    if (!story) return;

    // Render Header Badges & Title
    document.getElementById('reading-genre-badge').innerText = story.genre;
    document.getElementById('reading-level-badge').innerText = story.level;
    document.getElementById('reading-title').innerText = story.title;

    // Render Story Visual Objects Showcase in Pane 2
    const objectsContainer = document.getElementById('reading-objects-grid');
    if (objectsContainer && story.storyObjects) {
        objectsContainer.innerHTML = story.storyObjects.map(obj => `
            <div class="story-obj-card" data-obj-name="${obj.name}">
                <div class="story-obj-icon">${getSVGGraphic(obj.icon, obj.color || '#3b82f6')}</div>
                <div class="story-obj-label">${obj.name}</div>
            </div>
        `).join('');

        // Bind click to speak object name
        objectsContainer.querySelectorAll('.story-obj-card').forEach(card => {
            card.addEventListener('click', () => {
                const name = card.getAttribute('data-obj-name');
                audioEngine.speak(name, true);
            });
        });
    }

    // Highlight Vocabulary in Passage Text
    let passageHTML = story.passage;
    story.vocab.forEach(v => {
        const regex = new RegExp(`\\b(${v.word})\\b`, 'gi');
        passageHTML = passageHTML.replace(regex, `<span class="vocab-highlight" data-word="${v.word}" data-def="${v.def}">$1</span>`);
    });
    document.getElementById('reading-body-text').innerHTML = passageHTML;

    // Bind Vocabulary Highlights in Passage
    document.querySelectorAll('.vocab-highlight').forEach(el => {
        el.addEventListener('click', () => {
            const word = el.getAttribute('data-word');
            const def = el.getAttribute('data-def');
            audioEngine.speak(`${word}. Definition: ${def}`);
        });
    });

    // Render Vocab Spotlight Chips
    const vocabContainer = document.getElementById('vocab-chips-container');
    vocabContainer.innerHTML = story.vocab.map(v => `
        <button class="vocab-chip" data-word="${v.word}" data-def="${v.def}">
            📌 <strong>${v.word}</strong>
        </button>
    `).join('');

    vocabContainer.querySelectorAll('.vocab-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const word = chip.getAttribute('data-word');
            const def = chip.getAttribute('data-def');
            audioEngine.speak(`${word}. ${def}`);
        });
    });

    // Render Comprehension Question
    const qData = story.questions[currentStoryQuestionIndex];
    const qNumBadge = document.getElementById('reading-q-num');
    const qText = document.getElementById('reading-q-text');
    const qOptions = document.getElementById('reading-q-options');
    const qFeedback = document.getElementById('reading-q-feedback');

    qFeedback.classList.add('hidden');
    qFeedback.className = 'q-feedback hidden';

    if (qData) {
        qNumBadge.innerText = `Question ${currentStoryQuestionIndex + 1} of ${story.questions.length}`;
        qText.innerText = qData.q;

        qOptions.innerHTML = qData.options.map((opt, i) => `
            <button class="btn-q-option" data-opt-idx="${i}">
                ${String.fromCharCode(65 + i)}. ${opt}
            </button>
        `).join('');

        qOptions.querySelectorAll('.btn-q-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const chosenIdx = parseInt(btn.getAttribute('data-opt-idx'));
                if (chosenIdx === qData.correct) {
                    btn.classList.add('correct');
                    qFeedback.innerText = '✨ Correct! Excellent reading comprehension!';
                    qFeedback.className = 'q-feedback success';
                    qFeedback.classList.remove('hidden');
                    audioEngine.playTone(600, 'sine', 0.15);
                    triggerConfetti();
                    awardHeartToActiveStudent(btn, 1);
                    if (typeof audioEngine.speakCorrectPraise === 'function') {
                        audioEngine.speakCorrectPraise();
                    } else {
                        audioEngine.speak("That's correct, well done!", true);
                    }

                    setTimeout(() => {
                        if (currentStoryQuestionIndex + 1 < story.questions.length) {
                            currentStoryQuestionIndex++;
                            renderSeniorReadingStage();
                        }
                    }, 1800);
                } else {
                    btn.classList.add('wrong');
                    qFeedback.innerText = '❌ Try again! Re-read the passage carefully.';
                    qFeedback.className = 'q-feedback error';
                    qFeedback.classList.remove('hidden');
                    audioEngine.playTone(250, 'sawtooth', 0.2);
                    if (typeof audioEngine.speakRetryPrompt === 'function') {
                        audioEngine.speakRetryPrompt();
                    } else {
                        audioEngine.speak("Good try, try again!", true);
                    }
                }
            });
        });
    }

    // Render Discussion Tab Prompt
    document.getElementById('reading-discussion-prompt').innerText = `"${story.discussionPrompt}"`;
}

// Bind Read Aloud Button
const btnReadAloud = document.getElementById('btn-reading-readaloud');
const btnStopRead = document.getElementById('btn-reading-stop');

if (btnReadAloud) {
    btnReadAloud.addEventListener('click', () => {
        const eslLevel = appState.eslLevelReading || 'intermediate';
        const storiesList = getSeniorReadingStories(eslLevel);
        const story = storiesList[appState.seniorStoryIndex || 0] || storiesList[0];
        if (story) {
            audioEngine.speak(`${story.title}. ${story.passage}`);
            btnReadAloud.classList.add('hidden');
            if (btnStopRead) btnStopRead.classList.remove('hidden');
        }
    });
}

if (btnStopRead) {
    btnStopRead.addEventListener('click', () => {
        audioEngine.stop();
        btnStopRead.classList.add('hidden');
        if (btnReadAloud) btnReadAloud.classList.remove('hidden');
    });
}

// Reading Lab Tab Switcher
const tabQuestions = document.getElementById('tab-btn-questions');
const tabDiscussion = document.getElementById('tab-btn-discussion');
const contentQuestions = document.getElementById('tab-content-questions');
const contentDiscussion = document.getElementById('tab-content-discussion');

if (tabQuestions && tabDiscussion) {
    tabQuestions.addEventListener('click', () => {
        tabQuestions.classList.add('active');
        tabDiscussion.classList.remove('active');
        contentQuestions.classList.remove('hidden');
        contentDiscussion.classList.add('hidden');
    });

    tabDiscussion.addEventListener('click', () => {
        tabDiscussion.classList.add('active');
        tabQuestions.classList.remove('active');
        contentDiscussion.classList.remove('hidden');
        contentQuestions.classList.add('hidden');
    });
}

// Award Discussion Hearts Button
const btnDiscussAward = document.getElementById('btn-discuss-award');
if (btnDiscussAward) {
    btnDiscussAward.addEventListener('click', () => {
        awardHeartToActiveStudent(btnDiscussAward, 2);
        triggerConfetti();
        audioEngine.speak("Great discussion! 2 hearts awarded!");
    });
}

