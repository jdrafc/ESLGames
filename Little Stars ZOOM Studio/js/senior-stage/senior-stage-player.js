/**
 * ============================================================================
 * SENIOR TEACHER STAGE: PLAYER ENGINE
 * ============================================================================
 * Clean, decoupled presentation engine for live Zoom classrooms (Ages 8-10):
 * - Renders 3 universal games: ☝️/✌️ True or False, 🅰️/🅱️ Word Fits, 🔤 Mystery Word
 * - 3 CEFR Tiers (🟢 A1 Beginner, 🟡 A2 Intermediate, 🟣 B1 Advanced)
 * - Camera Gesture Pointers (☝️ 1 Finger vs ✌️ 2 Fingers)
 * - Clear Vocal Narrations with TTS Voice Synthesis & browser fallback
 * - Blitz Timers, Heart Rewards, and Confetti Integration
 * ============================================================================
 */

(function(window) {
    'use strict';

    class SeniorStagePlayer {
        constructor() {
            this.currentLevel = 'intermediate';
            this.activeChallengeType = 'all'; // 'all', 'tf', 'ww', 'mw'
            this.currentItem = null;
            this.selectedOptionIndex = null;
            this.currentStepIndex = 0;
            this.steps = null;
            this.currentPromptHTML = '';
            this.isAnswerRevealed = false;
            this.hasAwardedStar = false;
            this.timerInterval = null;
            this.timerRemaining = 0;
            this.usedItemIds = new Set();

            this.dom = {};
        }

        getAudio() {
            if (typeof window !== 'undefined' && window.audioEngine) return window.audioEngine;
            if (typeof audioEngine !== 'undefined') return audioEngine;
            return null;
        }

        init() {
            this.cacheDOM();
            if (!this.dom.stageView) return;

            this.initLevel();
            this.bindEvents();
            this.updateActiveChallengeUI();
            this.loadNextQuestion(false); // Silent pre-render; do NOT speak until stage is opened!
        }

        onEnterStage() {
            this.cacheDOM();
            this.initLevel();
            this.updateActiveChallengeUI();
            if (!this.currentItem) {
                this.loadNextQuestion(true);
            } else {
                this.updateScoreDisplay();
                this.speakCurrentQuestion(true);
            }
        }

        cacheDOM() {
            this.dom.stageView = document.getElementById('view-teacher-senior');
            this.dom.levelSelect = document.getElementById('select-senior-stage-level');
            this.dom.categoryBadge = document.getElementById('senior-stage-category');
            this.dom.visualDisplay = document.getElementById('senior-stage-visual');
            this.dom.promptDisplay = document.getElementById('senior-stage-prompt');
            this.dom.optionsContainer = document.getElementById('senior-stage-options');
            this.dom.pillA = document.getElementById('senior-pill-opt-a');
            this.dom.pillB = document.getElementById('senior-pill-opt-b');
            this.dom.answerBox = document.getElementById('senior-stage-answer-box');
            this.dom.answerTitle = document.getElementById('senior-stage-answer-text');
            this.dom.answerExplanation = document.getElementById('senior-stage-explanation-text');
            this.dom.btnNextQuestion = document.getElementById('btn-senior-next-question') || document.getElementById('btn-senior-toggle-answer');
            this.dom.btnRepeatAudio = document.getElementById('btn-senior-repeat-audio');
            this.dom.btnPromptSpeak = document.getElementById('btn-senior-prompt-speak');
            this.dom.timerDisplay = document.getElementById('senior-stage-timer-display');
            this.dom.btnAwardHeart = document.getElementById('btn-senior-stage-award');

            this.dom.btnTf = document.getElementById('tbtn-senior-tf');
            this.dom.btnWw = document.getElementById('tbtn-senior-ww');
            this.dom.btnMw = document.getElementById('tbtn-senior-mw');
            this.dom.btnRand = document.getElementById('tbtn-senior-random');
        }

        initLevel() {
            if (typeof appState !== 'undefined' && appState.seniorStageLevel) {
                this.currentLevel = appState.seniorStageLevel;
            } else if (typeof appState !== 'undefined' && appState.eslLevelReading) {
                this.currentLevel = appState.eslLevelReading;
            } else {
                this.currentLevel = 'intermediate';
            }

            if (this.dom.levelSelect) {
                this.dom.levelSelect.value = this.currentLevel;
            }
        }

        getCartridge(level) {
            const lvl = level || this.currentLevel;
            if (lvl === 'beginner' && window.STAGE_CARTRIDGE_BEGINNER) {
                return window.STAGE_CARTRIDGE_BEGINNER;
            }
            if (lvl === 'advanced' && window.STAGE_CARTRIDGE_ADVANCED) {
                return window.STAGE_CARTRIDGE_ADVANCED;
            }
            return window.STAGE_CARTRIDGE_INTERMEDIATE || window.STAGE_CARTRIDGE_BEGINNER;
        }

        bindEvents() {
            // Level Selector
            if (this.dom.levelSelect) {
                this.dom.levelSelect.addEventListener('change', (e) => {
                    this.currentLevel = e.target.value;
                    if (typeof appState !== 'undefined') {
                        appState.seniorStageLevel = this.currentLevel;
                        if (typeof saveState === 'function') saveState();
                    }
                    this.usedItemIds.clear();
                    this.loadNextQuestion(true);
                    const audio = this.getAudio();
                    if (audio) audio.playClick();
                });
            }

            // Quick Challenge Mode Buttons
            if (this.dom.btnTf) this.dom.btnTf.addEventListener('click', () => this.setChallengeMode('tf'));
            if (this.dom.btnWw) this.dom.btnWw.addEventListener('click', () => this.setChallengeMode('ww'));
            if (this.dom.btnMw) this.dom.btnMw.addEventListener('click', () => this.setChallengeMode('mw'));
            if (this.dom.btnRand) this.dom.btnRand.addEventListener('click', () => this.setChallengeMode('all'));

            // Next Question / Skip Button
            if (this.dom.btnNextQuestion) {
                this.dom.btnNextQuestion.addEventListener('click', () => {
                    this.loadNextQuestion(true);
                    const audio = this.getAudio();
                    if (audio) audio.playClick();
                });
            }

            // Vocal Narration Speakers
            if (this.dom.btnRepeatAudio) {
                this.dom.btnRepeatAudio.addEventListener('click', () => this.speakCurrentQuestion(true));
            }
            if (this.dom.btnPromptSpeak) {
                this.dom.btnPromptSpeak.addEventListener('click', () => this.speakCurrentQuestion(true));
            }

            // Interactive Click on Gestures / Options
            if (this.dom.pillA) {
                this.dom.pillA.addEventListener('click', () => this.handleOptionClick(0));
            }
            if (this.dom.pillB) {
                this.dom.pillB.addEventListener('click', () => this.handleOptionClick(1));
            }

            // Timers
            document.querySelectorAll('[data-senior-timer]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const val = btn.getAttribute('data-senior-timer');
                    if (val === 'stop') {
                        this.stopTimer();
                    } else {
                        const secs = parseInt(val, 10);
                        this.startTimer(secs);
                    }
                });
            });

            // Award Heart Button
            if (this.dom.btnAwardHeart) {
                this.dom.btnAwardHeart.addEventListener('click', () => {
                    this.awardHeart(this.dom.btnAwardHeart);
                    const audio = this.getAudio();
                    if (audio && typeof audio.speakCorrectPraise === 'function') {
                        audio.speakCorrectPraise();
                    } else if (audio && typeof audio.speak === 'function') {
                        audio.speak("That's correct, well done!", true);
                    }
                });
            }

            // Fullscreen Button
            const btnFs = document.getElementById('btn-senior-stage-fullscreen');
            if (btnFs) {
                btnFs.addEventListener('click', () => {
                    this.toggleFullscreen();
                });
            }

            // Winner Celebration Button
            const btnWinner = document.getElementById('btn-senior-stage-winner');
            if (btnWinner) {
                btnWinner.addEventListener('click', () => {
                    if (typeof openModal === 'function') {
                        openModal('modal-winner');
                        const audio = this.getAudio();
                        if (audio) audio.playFanfare();
                        if (typeof triggerConfetti === 'function') triggerConfetti();
                    }
                });
            }
        }

        setChallengeMode(type) {
            this.activeChallengeType = type;
            this.updateActiveChallengeUI();
            this.loadNextQuestion(true);
            const audio = this.getAudio();
            if (audio) audio.playClick();
        }

        updateActiveChallengeUI() {
            if (this.dom.btnTf) this.dom.btnTf.classList.toggle('active', this.activeChallengeType === 'tf');
            if (this.dom.btnWw) this.dom.btnWw.classList.toggle('active', this.activeChallengeType === 'ww');
            if (this.dom.btnMw) this.dom.btnMw.classList.toggle('active', this.activeChallengeType === 'mw');
            if (this.dom.btnRand) this.dom.btnRand.classList.toggle('active', this.activeChallengeType === 'all');
        }

        loadNextQuestion(autoSpeak = true) {
            if (this.activeChallengeType && this.activeChallengeType !== 'all') {
                this.loadQuestionByType(this.activeChallengeType, autoSpeak);
            } else {
                this.loadRandomQuestion(autoSpeak);
            }
        }

        loadQuestionByType(type, autoSpeak = true) {
            const cartridge = this.getCartridge();
            if (!cartridge || !cartridge.items || cartridge.items.length === 0) return;

            const pool = cartridge.items.filter(item => item.gameType === type);
            if (pool.length === 0) return;

            this.selectAndRenderItem(pool, autoSpeak);
        }

        loadRandomQuestion(autoSpeak = true) {
            const cartridge = this.getCartridge();
            if (!cartridge || !cartridge.items || cartridge.items.length === 0) return;

            this.selectAndRenderItem(cartridge.items, autoSpeak);
        }

        selectAndRenderItem(pool, autoSpeak = true) {
            let available = pool.filter(it => !this.usedItemIds.has(it.id));
            if (available.length === 0) {
                pool.forEach(it => this.usedItemIds.delete(it.id));
                available = pool.filter(it => it.id !== (this.currentItem ? this.currentItem.id : null));
                if (available.length === 0) available = pool;
            }

            const chosen = available[Math.floor(Math.random() * available.length)];
            this.usedItemIds.add(chosen.id);
            this.currentItem = chosen;
            this.renderQuestion(chosen, autoSpeak);
        }

        renderQuestion(item, autoSpeak = true) {
            this.isAnswerRevealed = false;
            this.selectedOptionIndex = null;
            this.hasAwardedStar = false;
            this.currentStepIndex = 0;
            this.steps = (item.steps && Array.isArray(item.steps) && item.steps.length > 0) ? item.steps : null;

            // Prepare prompt display: first blank is active [   ], second blank is locked [X]
            let promptHTML = item.prompt;
            if (this.steps && this.steps.length > 1) {
                promptHTML = promptHTML
                    .replace(/\[\s*(?:1|___|_|\s*)\s*\]/i, '<span class="senior-active-blank">[ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>')
                    .replace(/\[\s*(?:2|X)\s*\]/i, '<span class="senior-locked-blank">[ X ]</span>');
            }
            this.currentPromptHTML = promptHTML;

            // Reset UI States
            if (this.dom.answerBox) this.dom.answerBox.classList.add('hidden');

            // Set Badges
            if (this.dom.categoryBadge) {
                this.dom.categoryBadge.innerText = item.category || 'ZOOM CHALLENGE';
            }

            // Set Visual Graphic
            if (this.dom.visualDisplay) {
                const icon = item.visualIcon || '⭐';
                this.dom.visualDisplay.innerText = icon;
            }

            // Render current step buttons and prompt
            this.renderCurrentStep();

            // ONLY auto-speak if explicitly requested AND the senior stage is actually visible on screen!
            const isStageVisible = this.dom.stageView && !this.dom.stageView.classList.contains('hidden');
            if (autoSpeak && isStageVisible) {
                this.speakCurrentQuestion(true);
            }
            this.updateScoreDisplay();
        }

        getCurrentStep() {
            if (this.steps && this.steps[this.currentStepIndex]) {
                return this.steps[this.currentStepIndex];
            }
            return {
                options: this.currentItem.options,
                gestures: this.currentItem.gestures,
                answerIndex: this.currentItem.answerIndex,
                answerText: this.currentItem.answerText,
                placeholder: null
            };
        }

        renderCurrentStep() {
            if (!this.currentItem) return;

            // Reset pill visual classes
            if (this.dom.pillA) {
                this.dom.pillA.classList.remove('selected', 'winner', 'loser', 'incorrect-guess');
            }
            if (this.dom.pillB) {
                this.dom.pillB.classList.remove('selected', 'winner', 'loser', 'incorrect-guess');
            }

            const step = this.getCurrentStep();

            // Render Prompt (with any completed steps filled in)
            if (this.dom.promptDisplay) {
                this.dom.promptDisplay.innerHTML = this.currentPromptHTML;
            }

            // Set Gesture Options (1 Finger vs 2 Fingers) for this step
            if (this.dom.pillA) {
                const textA = (step.gestures && step.gestures[0]) || `☝️ 1 Finger: ${step.options[0]}`;
                this.dom.pillA.innerHTML = `<span class="gesture-icon">☝️</span> <span class="gesture-text">${textA.replace('☝️ ', '')}</span>`;
            }
            if (this.dom.pillB) {
                const textB = (step.gestures && step.gestures[1]) || `✌️ 2 Fingers: ${step.options[1]}`;
                this.dom.pillB.innerHTML = `<span class="gesture-icon">✌️</span> <span class="gesture-text">${textB.replace('✌️ ', '')}</span>`;
            }
        }

        cleanForTTS(str) {
            if (!str) return '';
            return str
                // Remove all emojis
                .replace(/[\u{1F300}-\u{1FAFF}\u{200D}\u{2300}-\u{23FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}]/gu, '')
                // Replace bracketed blanks like [ _ ], [ - ], [_], [-], [   ], [X], [ 1 ], [ 2 ] with natural pause
                .replace(/\[\s*(?:[-_.X12]|\s*)\s*\]/gi, '... ')
                // Replace multi-underscores with natural pause
                .replace(/_+/g, '... ')
                // Replace spelled-out hyphens between letters like S - U - N with pauses/commas so TTS never says "dash"
                .replace(/\s*[-–—]\s*/g, ', ')
                // Remove any remaining stray brackets, hyphens, dashes, or underscores
                .replace(/[\[\]_—–]/g, '')
                // Normalize spaces and punctuation
                .replace(/\s{2,}/g, ' ')
                .replace(/\s+\./g, '.')
                .replace(/\s+\?/g, '?')
                .replace(/\s+,/g, ',')
                .replace(/,\s*,/g, ',')
                .trim();
        }

        speakCurrentQuestion(priority = true) {
            if (!this.currentItem) return;
            // Never speak if the stage view is hidden!
            if (this.dom.stageView && this.dom.stageView.classList.contains('hidden')) return;

            const audio = this.getAudio();

            // Prepare clear, natural vocal phrasing for ESL Zoom learners
            let textToSpeak = '';
            if (this.currentItem.gameType === 'tf') {
                const clean = this.cleanForTTS(this.currentItem.prompt);
                textToSpeak = `True or false? ${clean}`;
            } else if (this.currentItem.gameType === 'ww') {
                // Ultra simple direct prompt
                textToSpeak = 'Fill in the missing word.';
            } else if (this.currentItem.gameType === 'mw') {
                // Ultra simple direct question
                textToSpeak = 'Which letter completes the word?';
            } else {
                textToSpeak = this.cleanForTTS(this.currentItem.prompt);
            }

            if (audio && typeof audio.speak === 'function') {
                audio.speak(textToSpeak, priority);
            } else if ('speechSynthesis' in window) {
                if (priority) window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(textToSpeak);
                u.rate = 0.90;
                window.speechSynthesis.speak(u);
            }
        }

        handleOptionClick(optIndex) {
            if (!this.currentItem) return;
            if (this.isAnswerRevealed) return;

            const step = this.getCurrentStep();
            const isCorrect = (optIndex === step.answerIndex);
            const clickedPill = (optIndex === 0) ? this.dom.pillA : this.dom.pillB;
            const otherPill = (optIndex === 0) ? this.dom.pillB : this.dom.pillA;
            const gesture = (optIndex === 0) ? '☝️ 1 Finger' : '✌️ 2 Fingers';
            const optText = step.options[optIndex];

            const audio = this.getAudio();

            if (isCorrect) {
                // Correct for this step
                if (clickedPill) {
                    clickedPill.classList.remove('loser', 'selected', 'incorrect-guess');
                    clickedPill.classList.add('winner');
                    clickedPill.innerHTML = `<span class="gesture-icon">🌟</span> <span class="gesture-text">${gesture}: ${optText} ✅ Correct!</span>`;
                }
                if (otherPill) {
                    otherPill.classList.remove('winner', 'selected', 'incorrect-guess');
                    otherPill.classList.add('loser');
                }

                // Fill in this step in the sentence on screen!
                const filledWord = `<span class="senior-filled-step">${step.answerText}</span>`;
                if (this.currentPromptHTML.includes('senior-active-blank')) {
                    this.currentPromptHTML = this.currentPromptHTML.replace(/<span class="senior-active-blank">.*?<\/span>/i, filledWord);
                } else if (step.placeholder) {
                    this.currentPromptHTML = this.currentPromptHTML.replace(step.placeholder, filledWord);
                }

                const isLastStep = !this.steps || (this.currentStepIndex >= this.steps.length - 1);

                if (!isLastStep) {
                    // Unlock the second blank: replace [X] or locked blank with the active blank!
                    this.currentPromptHTML = this.currentPromptHTML.replace(
                        /<span class="senior-locked-blank">.*?<\/span>|\[\s*X\s*\]/i,
                        '<span class="senior-active-blank">[ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>'
                    );

                    if (this.dom.promptDisplay) {
                        this.dom.promptDisplay.innerHTML = this.currentPromptHTML;
                    }

                    // Intermediate Step Complete!
                    if (audio && typeof audio.playTone === 'function') {
                        audio.playTone(587.33, 'triangle', 0.15); // D5 cheerful step tone
                    }

                    // Brief 450ms pause so student sees the green checkmark, then smoothly load step 2!
                    setTimeout(() => {
                        this.currentStepIndex++;
                        this.renderCurrentStep();
                    }, 450);
                } else {
                    if (this.dom.promptDisplay) {
                        this.dom.promptDisplay.innerHTML = this.currentPromptHTML;
                    }

                    // ALL STEPS COMPLETE! FINAL VICTORY!
                    this.isAnswerRevealed = true;

                    // Award Heart to Scoreboard (1 heart per card)
                    if (!this.hasAwardedStar) {
                        this.hasAwardedStar = true;
                        this.awardHeart(clickedPill);
                    } else {
                        // Already awarded heart for this card, pop celebration graphic
                        if (typeof spawnHeartPopGraphic === 'function') {
                            spawnHeartPopGraphic(clickedPill, 1);
                        } else if (typeof spawnStarPopGraphic === 'function') {
                            spawnStarPopGraphic(clickedPill, 1);
                        } else if (typeof window.spawnStarPopGraphic === 'function') {
                            window.spawnStarPopGraphic(clickedPill, 1);
                        }
                        if (audio && typeof audio.playCorrect === 'function') {
                            audio.playCorrect();
                        }
                    }

                    // Vocal feedback: "That's correct, well done!"
                    if (audio && typeof audio.speakCorrectPraise === 'function') {
                        audio.speakCorrectPraise();
                    } else if (audio && typeof audio.speak === 'function') {
                        audio.speak("That's correct, well done!", true);
                    } else if ('speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        const u = new SpeechSynthesisUtterance("That's correct, well done!");
                        u.rate = 0.92;
                        window.speechSynthesis.speak(u);
                    }

                    // Show Explanation Box
                    if (this.dom.answerBox) {
                        this.dom.answerBox.classList.remove('hidden');
                    }
                    if (this.dom.answerTitle) {
                        this.dom.answerTitle.innerHTML = `✅ <strong>${this.currentItem.answerText}</strong>`;
                    }
                    if (this.dom.answerExplanation) {
                        this.dom.answerExplanation.innerText = this.currentItem.explanation || '';
                    }

                }
            } else {
                // Incorrect choice for this step
                if (clickedPill) {
                    clickedPill.classList.remove('winner', 'selected');
                    clickedPill.classList.add('incorrect-guess');
                    clickedPill.innerHTML = `<span class="gesture-icon">❌</span> <span class="gesture-text">${gesture}: ${optText} (Incorrect)</span>`;
                }

                // Audio cue
                if (audio && typeof audio.playGentleTry === 'function') {
                    audio.playGentleTry();
                } else if (audio && typeof audio.playWrong === 'function') {
                    audio.playWrong();
                }

                // Vocal feedback: "Good try, try again!"
                if (audio && typeof audio.speakRetryPrompt === 'function') {
                    audio.speakRetryPrompt();
                } else if (audio && typeof audio.speak === 'function') {
                    audio.speak("Good try, try again!", true);
                } else if ('speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                    const u = new SpeechSynthesisUtterance("Good try, try again!");
                    u.rate = 0.92;
                    window.speechSynthesis.speak(u);
                }
            }
        }

        toggleAnswer() {
            this.loadNextQuestion(true);
        }

        awardHeart(targetElement = null) {
            if (typeof window.awardPractiseStar === 'function') {
                window.awardPractiseStar(targetElement, 1);
            } else if (typeof window.awardHeartToActiveStudent === 'function') {
                window.awardHeartToActiveStudent(targetElement, 1);
            } else if (typeof window.awardStars === 'function') {
                window.awardStars(targetElement, 1);
            }

            const audio = this.getAudio();
            if (audio && typeof audio.playHeart === 'function') {
                audio.playHeart();
            } else if (audio && typeof audio.playStarCollect === 'function') {
                audio.playStarCollect();
            }

            setTimeout(() => this.updateScoreDisplay(), 50);
        }

        updateScoreDisplay() {
            const badge = document.getElementById('senior-stage-score-stars');
            if (!badge) return;
            badge.innerText = (typeof quizStars !== 'undefined') ? quizStars : 0;
        }

        startTimer(seconds) {
            this.stopTimer();
            this.timerRemaining = seconds;
            this.updateTimerDisplay();

            if (this.dom.timerDisplay) {
                this.dom.timerDisplay.classList.remove('timer-warning', 'timer-urgent');
            }

            const audio = this.getAudio();
            if (audio) audio.playPop();

            this.timerInterval = setInterval(() => {
                this.timerRemaining--;
                this.updateTimerDisplay();

                const a = this.getAudio();
                if (this.timerRemaining <= 5 && this.timerRemaining > 0) {
                    if (this.dom.timerDisplay) this.dom.timerDisplay.classList.add('timer-urgent');
                    if (a) a.playClick();
                } else if (this.timerRemaining <= 10 && this.timerRemaining > 0) {
                    if (this.dom.timerDisplay) this.dom.timerDisplay.classList.add('timer-warning');
                }

                if (this.timerRemaining <= 0) {
                    this.stopTimer();
                    if (a) {
                        a.playFanfare();
                        a.speak('Time is up!');
                    } else if ('speechSynthesis' in window) {
                        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Time is up!'));
                    }
                    if (this.dom.timerDisplay) {
                        this.dom.timerDisplay.innerText = '00:00 - TIME!';
                    }
                }
            }, 1000);
        }

        stopTimer() {
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        }

        updateTimerDisplay() {
            if (!this.dom.timerDisplay) return;
            const m = Math.floor(this.timerRemaining / 60);
            const s = this.timerRemaining % 60;
            const text = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            this.dom.timerDisplay.innerText = text;
        }

        toggleFullscreen() {
            const card = document.getElementById('senior-stage-presentation-card');
            if (!card) return;
            if (!document.fullscreenElement) {
                card.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen().catch(() => {});
            }
        }
    }

    // Instantiate and expose globally
    const seniorStagePlayer = new SeniorStagePlayer();
    window.seniorStagePlayer = seniorStagePlayer;

    // Auto-init on DOMContentLoaded or immediate if document already ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => seniorStagePlayer.init());
    } else {
        seniorStagePlayer.init();
    }

})(window);
