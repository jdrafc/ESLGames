/* ==========================================================================
   5. UI ROUTER & VIEW MANAGEMENT
   ========================================================================== */

let haltSpeechTimer = null;
let entrySpeechTimer = null;

function haltAllAudioAndSpeech() {
    if (entrySpeechTimer) {
        clearTimeout(entrySpeechTimer);
        entrySpeechTimer = null;
    }
    if (haltSpeechTimer) {
        clearTimeout(haltSpeechTimer);
        haltSpeechTimer = null;
    }
    if (typeof stopAllJuniorSlideshows === 'function') {
        stopAllJuniorSlideshows();
    }
    if (typeof stopKaraokeReadAlong === 'function') {
        stopKaraokeReadAlong();
    }
    if (typeof stopStoryAudio === 'function') {
        stopStoryAudio();
    }
    if (typeof stopSeniorStem === 'function') {
        stopSeniorStem();
    } else if (typeof stopStemDiagramExplore === 'function') {
        stopStemDiagramExplore();
    }
    if (typeof stopSeniorVocab === 'function') {
        stopSeniorVocab();
    }
    if (window.seniorStagePlayer && typeof window.seniorStagePlayer.stopTimer === 'function') {
        window.seniorStagePlayer.stopTimer();
    }
    if (typeof audioEngine !== 'undefined' && audioEngine.stop) {
        audioEngine.stop();
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}
window.haltAllAudioAndSpeech = haltAllAudioAndSpeech;

function queueEntrySpeech(speakFnName, viewId) {
    if (entrySpeechTimer) {
        clearTimeout(entrySpeechTimer);
        entrySpeechTimer = null;
    }
    entrySpeechTimer = setTimeout(() => {
        if (appState.currentView === viewId && typeof window[speakFnName] === 'function') {
            window[speakFnName]();
        }
        entrySpeechTimer = null;
    }, 120);
}
window.queueEntrySpeech = queueEntrySpeech;
window.queueJuniorEntrySpeech = queueEntrySpeech;

function switchView(targetViewId, pushToHistory = true) {
    // Close any open modals if switching views
    closeAllModals(false);

    // Stop active speech, STEM walkthroughs, timers, and audio immediately
    haltAllAudioAndSpeech();

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
    const target = document.getElementById(targetViewId);
    if (target) {
        target.classList.remove('hidden');

        if (pushToHistory && appState.currentView !== targetViewId) {
            history.pushState({ type: 'view', viewId: targetViewId }, '', `#${targetViewId}`);
        }

        appState.currentView = targetViewId;
        saveState();
        audioEngine.playClick();

        // Ensure window snaps to top home position instantly
        const resetScroll = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };
        resetScroll();
        setTimeout(resetScroll, 0);
        setTimeout(resetScroll, 50);

        // Refresh specific mode views on entry
        if (targetViewId === 'view-alphabet') {
            renderAlphabetStage();
            queueEntrySpeech('speakAlphabetCurrent', 'view-alphabet');
        }
        if (targetViewId === 'view-phonics') {
            renderPhonicsStage();
            queueEntrySpeech('speakPhonicsCurrent', 'view-phonics');
        }
        if (targetViewId === 'view-colours') {
            renderColourStage();
            queueEntrySpeech('speakColourCurrent', 'view-colours');
        }
        if (targetViewId === 'view-numbers') {
            renderNumberStage();
            queueEntrySpeech('speakNumberCurrent', 'view-numbers');
        }
        if (targetViewId === 'view-shapes') {
            renderShapeStage();
            queueEntrySpeech('speakShapeCurrent', 'view-shapes');
        }
        if (targetViewId === 'view-words') {
            appState.wordIndex = 0;
            saveState();
            renderWordStage();
            queueEntrySpeech('speakWordCurrent', 'view-words');
        }
        if (targetViewId === 'view-quiz-stage') generateNewQuizQuestion();
        if (targetViewId === 'view-reading-senior') renderSeniorReadingStage();
        if (targetViewId === 'view-reading-practise') renderReadingPractiseStage();
        if (targetViewId === 'view-vocab-senior') {
            appState.seniorVocabIndex = 0;
            saveState();
            renderSeniorVocabStage(true);
            queueEntrySpeech('speakSeniorVocabCurrent', 'view-vocab-senior');
        }
        if (targetViewId === 'view-stem-senior') {
            appState.stemTested = false;
            appState.stemUserPrediction = null;
            saveState();
            renderSeniorStemStage();
        }
        if (targetViewId === 'view-story-senior') {
            renderSeniorStoryBuilder();
        }
        if (targetViewId === 'view-teacher-senior' && window.seniorStagePlayer) {
            window.seniorStagePlayer.onEnterStage();
        }

        // Always synchronize Today's Hearts session score and bind badges across all views
        if (typeof updateHeartsDisplay === 'function') {
            updateHeartsDisplay();
        }
        if (typeof bindAllScoreBadgeResetListeners === 'function') {
            bindAllScoreBadgeResetListeners();
        }
    }
}

/* Modal Router & History Stack Handling */
function openModal(modalId, pushToHistory = true) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        audioEngine.playClick();
        if (pushToHistory) {
            history.pushState({ type: 'modal', modalId: modalId }, '', `#modal-${modalId}`);
        }
    }
}

function closeModal(modalId, popHistory = true) {
    const modal = document.getElementById(modalId);
    if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        if (popHistory && history.state && history.state.type === 'modal' && history.state.modalId === modalId) {
            history.back();
        }
    }
}

function closeAllModals(popHistory = false) {
    // Halt any active speech narration or autoplay timers from modals immediately
    haltAllAudioAndSpeech();

    document.querySelectorAll('.modal-overlay').forEach(m => {
        if (!m.classList.contains('hidden')) {
            m.classList.add('hidden');
        }
    });
}

// Set initial history state for direct landing / refreshes
history.replaceState({ type: 'view', viewId: appState.currentView || 'view-home' }, '', `#${appState.currentView || 'view-home'}`);

// Listen for browser Back / Forward buttons
window.addEventListener('popstate', (event) => {
    // Immediately stop all speech, STEM walkthroughs, timers, and audio on browser navigation
    haltAllAudioAndSpeech();

    // If a modal is currently open, close it first
    const openModalElem = document.querySelector('.modal-overlay:not(.hidden)');
    if (openModalElem) {
        openModalElem.classList.add('hidden');
        return;
    }

    if (event.state) {
        if (event.state.type === 'modal' && event.state.modalId) {
            openModal(event.state.modalId, false);
        } else if (event.state.viewId) {
            switchView(event.state.viewId, false);
        }
    } else {
        const homeView = appState.studioMode === 'senior' ? 'view-home-senior' : 'view-home';
        switchView(homeView, false);
    }
});

// Bind Navigation Buttons
document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        switchView(target);
    });
});

document.getElementById('nav-brand').addEventListener('click', () => {
    const homeView = appState.studioMode === 'senior' ? 'view-home-senior' : 'view-home';
    switchView(homeView);
});

