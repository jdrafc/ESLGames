/* ==========================================================================
   8. TEACHER ZOOM PRESENTATION STAGE & TOOLS
   ========================================================================== */

let teacherTimerInterval = null;
let timerSecondsLeft = 0;

const teacherDisplay = document.getElementById('teacher-stage-display');
const teacherCategory = document.getElementById('teacher-stage-category');
const teacherAnswerBox = document.getElementById('teacher-answer-box');
const teacherAnswerText = document.getElementById('teacher-answer-text');
const btnToggleAnswer = document.getElementById('btn-toggle-answer');

let currentTeacherVocalAnswer = '';
let hasAwardedHeartForCurrentCard = false;

function resetAnswerBoxToHidden() {
    hasAwardedHeartForCurrentCard = false;
    if (teacherAnswerBox) {
        teacherAnswerBox.classList.add('hidden');
    }
    if (btnToggleAnswer) {
        btnToggleAnswer.innerText = '👁️ Show Answer (+1 ❤️)';
        btnToggleAnswer.className = 'btn btn-block btn-primary';
    }
}

if (btnToggleAnswer && teacherAnswerBox) {
    const updateAnswerToggleUI = () => {
        const isHidden = teacherAnswerBox.classList.contains('hidden');
        if (isHidden) {
            btnToggleAnswer.innerText = '👁️ Show Answer (+1 ❤️)';
            btnToggleAnswer.className = 'btn btn-block btn-primary';
        } else {
            btnToggleAnswer.innerText = '🙈 Hide Answer';
            btnToggleAnswer.className = 'btn btn-block btn-amber';
        }
    };

    // Initialize label state
    updateAnswerToggleUI();

    btnToggleAnswer.addEventListener('click', () => {
        const isCurrentlyHidden = teacherAnswerBox.classList.contains('hidden');
        teacherAnswerBox.classList.toggle('hidden');
        audioEngine.playClick();
        updateAnswerToggleUI();

        // When revealing the answer (student got it correct):
        if (isCurrentlyHidden) {
            // Award +1 Heart to active student if not already awarded for this card
            if (!hasAwardedHeartForCurrentCard) {
                hasAwardedHeartForCurrentCard = true;
                if (typeof window.awardPractiseStar === 'function') {
                    window.awardPractiseStar(btnToggleAnswer, 1, 'Teacher Stage Correct Answer!');
                } else if (typeof awardHeartToActiveStudent === 'function') {
                    awardHeartToActiveStudent(btnToggleAnswer, 1);
                    if (typeof triggerConfetti === 'function') triggerConfetti();
                }
            }

            // Speak vocal answer if available
            if (currentTeacherVocalAnswer) {
                audioEngine.speak(`That is correct. ${currentTeacherVocalAnswer}`, true);
            }
        }
    });
}

document.getElementById('tbtn-rand-letter').addEventListener('click', () => {
    resetAnswerBoxToHidden();
    const item = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
    teacherCategory.innerText = 'BEGINNING LETTER GUESS';
    teacherDisplay.innerHTML = `<div style="width:130px;height:130px;margin:0 auto;">${getSVGGraphic(item.icon, '#6c5ce7')}</div><div style="font-size:1.6rem;margin-top:10px;">What letter does ${item.word} start with?</div>`;
    teacherAnswerText.innerText = `${item.letter} - ${item.word} (${item.sound})`;
    currentTeacherVocalAnswer = `${item.word} begins with ${item.letter}!`;
    audioEngine.speak(`What letter does ${item.word} start with?`);
});

document.getElementById('tbtn-rand-number').addEventListener('click', () => {
    resetAnswerBoxToHidden();
    const count = Math.floor(Math.random() * 8) + 1;
    const item = NUMBERS_DATA[count - 1];
    let iconsHTML = '';
    for (let i = 0; i < count; i++) {
        iconsHTML += `<div style="width:40px;height:40px;display:inline-block;margin:4px;">${getSVGGraphic('apple', '#ff5252')}</div>`;
    }
    teacherCategory.innerText = 'COUNTING GUESS';
    teacherDisplay.innerHTML = `<div>${iconsHTML}</div><div style="font-size:1.6rem;margin-top:10px;">How many objects do you see?</div>`;
    teacherAnswerText.innerText = `${item.digit} (${item.word})`;
    currentTeacherVocalAnswer = `there are ${item.word} objects!`;
    audioEngine.speak(`How many objects do you see?`);
});

document.getElementById('tbtn-rand-colour').addEventListener('click', () => {
    resetAnswerBoxToHidden();
    const item = COLOURS_DATA[Math.floor(Math.random() * COLOURS_DATA.length)];
    teacherCategory.innerText = 'COLOUR GUESS';
    teacherDisplay.innerHTML = `<div style="width:130px;height:130px;background:${item.hex};border-radius:50%;margin:0 auto;box-shadow:0 8px 20px rgba(0,0,0,0.2);"></div><div style="font-size:1.6rem;margin-top:10px;">What color is this?</div>`;
    teacherAnswerText.innerText = `${item.name} (${item.objectLabel})`;
    currentTeacherVocalAnswer = `the color is ${item.name}!`;
    audioEngine.speak(`What color is this?`);
});

document.getElementById('tbtn-rand-shape').addEventListener('click', () => {
    resetAnswerBoxToHidden();
    const item = SHAPES_DATA[Math.floor(Math.random() * SHAPES_DATA.length)];
    teacherCategory.innerText = 'SHAPE GUESS';
    teacherDisplay.innerHTML = `<div style="width:130px;height:130px;margin:0 auto;">${getSVGGraphic(item.icon, '#00b894')}</div><div style="font-size:1.6rem;margin-top:10px;">What shape is this?</div>`;
    teacherAnswerText.innerText = `${item.name} - ${item.desc}`;
    currentTeacherVocalAnswer = `the shape is a ${item.name}!`;
    audioEngine.speak(`What shape is this?`);
});

document.getElementById('tbtn-rand-word').addEventListener('click', () => {
    resetAnswerBoxToHidden();
    const item = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
    teacherCategory.innerText = 'WORD FLASHCARD GUESS';
    teacherDisplay.innerHTML = `<div style="width:130px;height:130px;margin:0 auto;">${getSVGGraphic(item.icon, '#e84393')}</div><div style="font-size:1.6rem;margin-top:10px;">What word is this picture?</div>`;
    teacherAnswerText.innerText = `${item.word} (${item.spelling})`;
    currentTeacherVocalAnswer = `the word is ${item.word}!`;
    audioEngine.speak(`What word is this picture?`);
});

const btnRandQuiz = document.getElementById('tbtn-rand-quiz');
if (btnRandQuiz) {
    btnRandQuiz.addEventListener('click', () => {
        resetAnswerBoxToHidden();
        const item = SIMPLE_WORDS_DATA[Math.floor(Math.random() * SIMPLE_WORDS_DATA.length)];
        teacherCategory.innerText = 'RANDOM QUIZ QUESTION';
        teacherDisplay.innerHTML = `<div style="width:110px;height:110px;margin:0 auto;">${getSVGGraphic(item.icon, '#ff793f')}</div><div style="font-size:1.6rem;margin-top:8px;">What object is this?</div>`;
        teacherAnswerText.innerText = item.word;
        currentTeacherVocalAnswer = `the object is a ${item.word}!`;
        audioEngine.speak(`What object is this?`);
    });
}

// Zoom Timers
document.querySelectorAll('[data-timer]').forEach(btn => {
    btn.addEventListener('click', () => {
        const secs = parseInt(btn.getAttribute('data-timer'));
        startTeacherTimer(secs);
    });
});

function startTeacherTimer(duration) {
    clearInterval(teacherTimerInterval);
    timerSecondsLeft = duration;
    updateTimerDisplay();

    teacherTimerInterval = setInterval(() => {
        timerSecondsLeft--;
        updateTimerDisplay();
        if (timerSecondsLeft <= 0) {
            clearInterval(teacherTimerInterval);
            audioEngine.playFanfare();
            audioEngine.speak("Time is up!");
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSecondsLeft / 60);
    const secs = timerSecondsLeft % 60;
    const fmt = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('teacher-timer-digits').innerText = fmt;
}

document.getElementById('btn-timer-reset').addEventListener('click', () => {
    clearInterval(teacherTimerInterval);
    timerSecondsLeft = 0;
    updateTimerDisplay();
});

/* ==========================================================================
   9. STUDENT SCOREBOARD & REWARDS
   ========================================================================== */

const modalScoreboard = document.getElementById('modal-scoreboard');
document.getElementById('btn-scoreboard').addEventListener('click', () => {
    renderScoreboard();
    openModal('modal-scoreboard');
});

function updateActiveStudentNav() {
    const navContainer = document.getElementById('nav-active-student');
    const navAvatar = document.getElementById('nav-student-avatar');
    const navName = document.getElementById('nav-student-name');

    if (!navContainer) return;

    const activeStudent = appState.students.find(s => s.id === appState.activeStudentId);
    if (activeStudent) {
        const avatar = getStudentAvatar(activeStudent.name, activeStudent.gender);
        navAvatar.innerText = avatar;
        navName.innerText = activeStudent.name;
        navContainer.classList.remove('hidden');
    } else {
        navContainer.classList.add('hidden');
    }
}

window.selectStudent = function(id) {
    appState.activeStudentId = id;
    saveState();
    updateActiveStudentNav();
    renderScoreboard();

    const student = appState.students.find(s => s.id === id);
    if (student) {
        audioEngine.speak(`${student.name} selected for class!`, true);
    }

    // Close modal and return to main dashboard
    closeModal('modal-scoreboard');
    switchView('view-home');
};

window.toggleStudentGender = function(id) {
    const st = appState.students.find(s => s.id === id);
    if (st) {
        const currentAvatar = getStudentAvatar(st.name, st.gender);
        // Toggle explicit gender between boy and girl
        if (currentAvatar === '👧') {
            st.gender = 'boy';
        } else {
            st.gender = 'girl';
        }
        saveState();
        updateActiveStudentNav();
        renderScoreboard();
        audioEngine.playClick();
    }
};

function renderScoreboard() {
    const list = document.getElementById('scoreboard-list');
    list.innerHTML = '';

    // Sort students by stars
    const sorted = [...appState.students].sort((a, b) => b.stars - a.stars);

    let totalStars = 0;
    sorted.forEach((st, idx) => {
        totalStars += st.stars;
        const isSelected = st.id === appState.activeStudentId;
        const avatar = getStudentAvatar(st.name, st.gender);

        const card = document.createElement('div');
        card.className = `student-card ${isSelected ? 'active-selected' : ''}`;
        card.innerHTML = `
            <div class="student-info">
                <span class="student-rank">#${idx + 1}</span>
                <button class="btn btn-xs btn-purple" onclick="toggleStudentGender('${st.id}')" title="Click to toggle Boy/Girl picture">
                    ${avatar} ${avatar === '👧' ? 'Girl' : 'Boy'}
                </button>
                <span class="student-name">${st.name} ${isSelected ? '⭐' : ''}</span>
            </div>
            <div class="student-score-controls">
                <button class="btn btn-xs ${isSelected ? 'btn-gold' : 'btn-teal'}" onclick="selectStudent('${st.id}')">
                    ${isSelected ? '✓ Selected' : '👉 Select Student'}
                </button>
                <button class="btn btn-xs btn-amber" onclick="updateStudentScore('${st.id}', 1)">❤️ +1</button>
                <span class="score-display">${st.stars} ❤️ Total ${isSelected ? `(Today: +${typeof quizStars !== 'undefined' ? quizStars : 0})` : ''}</span>
                <button class="btn btn-xs btn-gray" onclick="updateStudentScore('${st.id}', -1)">-1</button>
                <button class="btn btn-xs btn-orange" onclick="resetStudentScore('${st.id}')" title="Reset this student's all-time hearts to 0">🔄 Reset</button>
                <button class="btn btn-xs btn-red" onclick="removeStudent('${st.id}')">🗑️</button>
            </div>
        `;
        list.appendChild(card);
    });

    // Calculate total score for active student (or sum total if no student selected)
    const activeSt = appState.activeStudentId ? appState.students.find(s => s.id === appState.activeStudentId) : null;
    const currentStudentScore = activeSt ? (activeSt.stars || 0) : totalStars;

    const navStarCountElem = document.getElementById('nav-star-count');
    if (navStarCountElem) {
        navStarCountElem.innerText = currentStudentScore;
    }

    // Refresh Today's Hearts display across badges without overwriting session tally
    if (typeof updateHeartsDisplay === 'function') {
        updateHeartsDisplay();
    }
}

window.updateStudentScore = function(id, delta) {
    const st = appState.students.find(s => s.id === id);
    if (st) {
        st.stars = Math.max(0, st.stars + delta);
        saveState();
        renderScoreboard();
        if (delta > 0) {
            audioEngine.playTone(600, 'sine', 0.15);
            triggerConfetti();
        }
    }
};

window.resetStudentScore = function(id) {
    const st = appState.students.find(s => s.id === id);
    if (st) {
        st.stars = 0;
        saveState();
        renderScoreboard();
        audioEngine.playClick();
    }
};

window.removeStudent = function(id) {
    appState.students = appState.students.filter(s => s.id !== id);
    saveState();
    updateActiveStudentNav();
    renderScoreboard();
};

document.getElementById('form-add-student').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('input-student-name');
    const genderSelect = document.getElementById('select-student-gender');
    const name = input.value.trim();
    const genderVal = genderSelect ? genderSelect.value : 'auto';

    if (name) {
        appState.students.push({
            id: 'st_' + Date.now(),
            name: name,
            stars: 0,
            points: 0,
            gender: genderVal !== 'auto' ? genderVal : null
        });
        input.value = '';
        if (genderSelect) genderSelect.value = 'auto';
        saveState();
        renderScoreboard();
    }
});

const btnResetScores = document.getElementById('btn-reset-scores');
if (btnResetScores) {
    btnResetScores.addEventListener('click', () => {
        if (confirm("Reset scores to 0 for all students?")) {
            appState.students.forEach(st => st.stars = 0);
            quizStars = 0;
            saveState();
            renderScoreboard();
            updateHeartsDisplay();
        }
    });
}

// Winner Celebration Modal Trigger
document.getElementById('btn-celebrate-winner').addEventListener('click', () => {
    modalScoreboard.classList.add('hidden');
    const topStudent = [...appState.students].sort((a, b) => b.stars - a.stars)[0];
    if (topStudent) {
        document.getElementById('winner-name').innerText = topStudent.name;
        document.getElementById('winner-stars').innerText = '❤️'.repeat(Math.min(topStudent.stars, 7));
        openModal('modal-winner');
        audioEngine.playFanfare();
        triggerConfetti();
    }
});

document.getElementById('btn-close-winner').addEventListener('click', () => {
    closeModal('modal-winner');
});

/* ==========================================================================
   10. LESSON PLANNER & HUD
   ========================================================================== */

const modalPlanner = document.getElementById('modal-planner');
document.getElementById('btn-planner').addEventListener('click', () => {
    renderPlanner();
    openModal('modal-planner');
});

function renderPlanner() {
    const plansList = document.getElementById('saved-plans-list');
    plansList.innerHTML = appState.plans.map(p => `
        <button class="plan-item-btn ${p.id === appState.activePlanId ? 'active' : ''}" onclick="selectPlan('${p.id}')">
            ${p.title}
        </button>
    `).join('');

    const activePlan = appState.plans.find(p => p.id === appState.activePlanId) || appState.plans[0];
    if (activePlan) {
        document.getElementById('plan-title-input').value = activePlan.title;
        const actList = document.getElementById('plan-activities-list');
        actList.innerHTML = activePlan.activities.map((act, i) => `
            <div class="activity-row">
                <span style="font-weight:700;">#${i+1}</span>
                <input type="text" class="act-name" value="${act.name}" placeholder="Activity Name">
                <input type="number" class="act-dur" value="${act.duration}" min="1" max="60"> min
                <input type="text" class="act-obj" value="${act.obj}" placeholder="Objective">
            </div>
        `).join('');
    }
}

window.selectPlan = function(id) {
    appState.activePlanId = id;
    saveState();
    renderPlanner();
};

document.getElementById('btn-start-lesson-hud').addEventListener('click', () => {
    closeModal('modal-planner');
    document.getElementById('active-lesson-hud').classList.remove('hidden');
    audioEngine.speak("Lesson started!");
});

/* ==========================================================================
   11. SETTINGS & LOCALSTORAGE BACKUP / EXPORT / IMPORT
   ========================================================================== */

const modalSettings = document.getElementById('modal-settings');
document.getElementById('btn-settings').addEventListener('click', () => {
    openModal('modal-settings');
});

// Quick Teacher Tools toolbar button (context-aware for Junior vs Senior)
const btnQuickTools = document.getElementById('btn-quick-teacher-tools');
if (btnQuickTools) {
    btnQuickTools.addEventListener('click', () => {
        if (typeof appState !== 'undefined' && appState.studioMode === 'senior') {
            switchView('view-teacher-senior');
        } else {
            switchView('view-teacher');
        }
    });
}

// Close Modals
document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modalOverlay = e.target.closest('.modal-overlay');
        if (modalOverlay) {
            closeModal(modalOverlay.id);
        } else {
            closeAllModals(true);
        }
    });
});

// Theme selector
const setElemTheme = document.getElementById('set-theme');
if (setElemTheme) {
    setElemTheme.value = appState.settings.theme || 'theme-default';
    setElemTheme.addEventListener('change', (e) => {
        document.body.className = `${e.target.value} ${appState.settings.fontSize}`;
        appState.settings.theme = e.target.value;
        saveState();
    });
}

// Font size selector
const setElemFont = document.getElementById('set-fontsize');
if (setElemFont) {
    setElemFont.value = appState.settings.fontSize || 'font-size-normal';
    setElemFont.addEventListener('change', (e) => {
        document.body.className = `${appState.settings.theme} ${e.target.value}`;
        appState.settings.fontSize = e.target.value;
        saveState();
    });
}

// Voice Selector Change Handler & LocalStorage Save
const voiceSelect = document.getElementById('set-speech-voice');
if (voiceSelect) {
    voiceSelect.addEventListener('change', (e) => {
        const chosenVoice = e.target.value;
        audioEngine.setVoice(chosenVoice);
        appState.settings.speechVoice = chosenVoice;
        saveState();
        audioEngine.speak("Voice updated!");
    });
}

// Speech Speed Rate Handler & LocalStorage Save
const speedSlider = document.getElementById('set-speech-speed');
if (speedSlider) {
    speedSlider.value = appState.settings.speechSpeed || 0.9;
    document.getElementById('val-speech-speed').innerText = `${speedSlider.value}x`;
    audioEngine.speechRate = parseFloat(speedSlider.value);

    speedSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        audioEngine.speechRate = val;
        appState.settings.speechSpeed = val;
        document.getElementById('val-speech-speed').innerText = `${val}x`;
        saveState();
    });
}

// Sound Effects Toggle Handler & LocalStorage Save
const soundToggle = document.getElementById('set-sound-toggle');
if (soundToggle) {
    soundToggle.checked = appState.settings.sound !== false;
    audioEngine.soundEnabled = soundToggle.checked;
    soundToggle.addEventListener('change', (e) => {
        audioEngine.soundEnabled = e.target.checked;
        appState.settings.sound = e.target.checked;
        saveState();
    });
}

// Data Import & Backup Trigger Buttons
const importInput = document.getElementById('input-import-file');
const importTrigger = document.getElementById('btn-data-import-trigger');
if (importTrigger && importInput) {
    importTrigger.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const imported = JSON.parse(evt.target.result);
                appState = imported;
                saveState();
                alert('Data imported successfully!');
                location.reload();
            } catch (err) {
                alert('Invalid JSON file format.');
            }
        };
        reader.readAsText(file);
    });
}

const btnBackup = document.getElementById('btn-data-backup');
if (btnBackup) {
    btnBackup.addEventListener('click', () => {
        localStorage.setItem('little_stars_backup', JSON.stringify(appState));
        alert('Backup created successfully!');
    });
}

const btnRestore = document.getElementById('btn-data-restore');
if (btnRestore) {
    btnRestore.addEventListener('click', () => {
        const backup = localStorage.getItem('little_stars_backup');
        if (backup) {
            appState = JSON.parse(backup);
            saveState();
            alert('Backup restored!');
            location.reload();
        } else {
            alert('No backup found.');
        }
    });
}

// Fullscreen Toggle
document.getElementById('btn-fullscreen').addEventListener('click', toggleFullScreen);
document.getElementById('btn-teacher-fullscreen').addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}

// Export Data JSON
document.getElementById('btn-data-export').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `littlestars_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
});

// Reset Data
document.getElementById('btn-data-reset').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all students, scores, and custom lesson plans?")) {
        localStorage.removeItem('little_stars_state');
        location.reload();
    }
});

/* ==========================================================================
   12. HEART BURST & CELEBRATION CANVAS PARTICLE ENGINE
   ========================================================================== */

const canvas = document.getElementById('celebration-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function triggerConfetti() {
    particles = [];
    const colors = ['#ff5252', '#ff7675', '#d63031', '#e84393', '#fd79a8', '#f43f5e'];

    for (let i = 0; i < 65; i++) {
        particles.push({
            type: 'heart',
            x: canvas.width / 2 + (Math.random() - 0.5) * 120,
            y: canvas.height / 2 + (Math.random() - 0.5) * 80,
            vx: (Math.random() - 0.5) * 18,
            vy: (Math.random() - 0.7) * 18,
            size: Math.random() * 18 + 14,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: (Math.random() - 0.5) * 40,
            vRot: (Math.random() - 0.5) * 2,
            opacity: 1
        });
    }
    requestAnimationFrame(renderConfetti);
}

function triggerBalloons() {
    particles = [];
    const colors = ['#ff7675', '#74b9ff', '#a29bfe', '#55efc4', '#ffeaa7', '#fd79a8', '#fdcb6e'];

    for (let i = 0; i < 28; i++) {
        particles.push({
            type: 'balloon',
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 80,
            vx: (Math.random() - 0.5) * 1.6,
            vy: -(Math.random() * 3.2 + 3.2),
            size: Math.random() * 14 + 22,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: (Math.random() - 0.5) * 0.25,
            vRot: (Math.random() - 0.5) * 0.02,
            opacity: 1
        });
    }
    if (typeof audioEngine !== 'undefined') {
        audioEngine.playTone(523.25, 'sine', 0.2);
        setTimeout(() => audioEngine.playTone(659.25, 'sine', 0.25), 100);
        setTimeout(() => audioEngine.playTone(783.99, 'sine', 0.35), 200);
    }
    requestAnimationFrame(renderConfetti);
}

function triggerFireworks() {
    particles = [];
    const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];
    const centers = [
        { x: canvas.width * 0.25, y: canvas.height * 0.36 },
        { x: canvas.width * 0.50, y: canvas.height * 0.24 },
        { x: canvas.width * 0.75, y: canvas.height * 0.36 }
    ];

    centers.forEach((center, cIdx) => {
        for (let i = 0; i < 35; i++) {
            const angle = (Math.PI * 2 / 35) * i + (Math.random() - 0.5) * 0.35;
            const speed = Math.random() * 8 + 4;
            particles.push({
                type: 'firework',
                x: center.x,
                y: center.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 6 + 4,
                color: colors[(cIdx * 2 + i) % colors.length],
                opacity: 1,
                decay: Math.random() * 0.015 + 0.012
            });
        }
    });

    if (typeof audioEngine !== 'undefined') audioEngine.playFanfare();
    requestAnimationFrame(renderConfetti);
}

function triggerApplause() {
    if (typeof audioEngine !== 'undefined') {
        audioEngine.playFanfare();
        for (let i = 0; i < 14; i++) {
            setTimeout(() => {
                audioEngine.playTone(380 + Math.random() * 260, 'triangle', 0.07);
            }, i * 65 + Math.random() * 25);
        }
        setTimeout(() => {
            audioEngine.speak("Fantastic work, super stars!", true);
        }, 320);
    }
    triggerConfetti();
}

function drawHeart(ctx, x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size * 0.8, 0, size);
    ctx.bezierCurveTo(0, size * 0.8, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawBalloon(ctx, x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    // Balloon oval
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.75, size, 0, 0, Math.PI * 2);
    ctx.fill();
    // Highlight reflection
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.beginPath();
    ctx.ellipse(-size * 0.25, -size * 0.35, size * 0.18, size * 0.32, -Math.PI / 8, 0, Math.PI * 2);
    ctx.fill();
    // Balloon knot
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(-size * 0.15, size);
    ctx.lineTo(size * 0.15, size);
    ctx.lineTo(0, size * 1.15);
    ctx.closePath();
    ctx.fill();
    // Wavy string
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.55)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, size * 1.15);
    ctx.bezierCurveTo(size * 0.2, size * 1.5, -size * 0.2, size * 1.9, size * 0.1, size * 2.4);
    ctx.stroke();
    ctx.restore();
}

function drawStar(ctx, x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * size, -Math.sin((18 + i * 72) * Math.PI / 180) * size);
        ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * (size * 0.45), -Math.sin((54 + i * 72) * Math.PI / 180) * (size * 0.45));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
        if (p.type === 'balloon') {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.vRot;
            if (p.y > -p.size * 3) {
                active = true;
                ctx.save();
                ctx.globalAlpha = Math.max(0, p.opacity);
                drawBalloon(ctx, p.x, p.y, p.size, p.color);
                ctx.restore();
            }
        } else if (p.type === 'firework') {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.12; // Gravity
            p.opacity -= (p.decay || 0.015);
            if (p.opacity > 0) {
                active = true;
                ctx.save();
                ctx.globalAlpha = Math.max(0, p.opacity);
                drawStar(ctx, p.x, p.y, p.size, p.color);
                ctx.restore();
            }
        } else {
            // Heart particle
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25; // Gentle gravity
            p.rotation += p.vRot;
            p.opacity -= 0.012;

            if (p.opacity > 0) {
                active = true;
                ctx.save();
                ctx.globalAlpha = Math.max(0, p.opacity);
                drawHeart(ctx, p.x, p.y, p.size, p.color);
                ctx.restore();
            }
        }
    });

    if (active) {
        requestAnimationFrame(renderConfetti);
    }
}

// Global window exposure
window.triggerConfetti = triggerConfetti;
window.triggerBalloons = triggerBalloons;
window.triggerFireworks = triggerFireworks;
window.triggerApplause = triggerApplause;

// Junior Teacher Stage Event Listeners
const btnTriggerConfetti = document.getElementById('btn-trigger-confetti');
if (btnTriggerConfetti) {
    btnTriggerConfetti.addEventListener('click', (e) => {
        triggerConfetti();
        if (typeof audioEngine !== 'undefined') audioEngine.playFanfare();
        if (typeof awardHeartToActiveStudent === 'function') awardHeartToActiveStudent(e.currentTarget, 1);
    });
}

const btnTriggerBalloons = document.getElementById('btn-trigger-balloons');
if (btnTriggerBalloons) {
    btnTriggerBalloons.addEventListener('click', () => triggerBalloons());
}

const btnTriggerFireworks = document.getElementById('btn-trigger-fireworks');
if (btnTriggerFireworks) {
    btnTriggerFireworks.addEventListener('click', () => triggerFireworks());
}

const btnTriggerCheers = document.getElementById('btn-trigger-cheers');
if (btnTriggerCheers) {
    btnTriggerCheers.addEventListener('click', () => triggerApplause());
}

