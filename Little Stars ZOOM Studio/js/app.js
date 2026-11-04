/* ==========================================================================
   13. APP INITIALIZATION
   ========================================================================== */

// Apply saved theme & font size
document.body.className = `${appState.settings.theme} ${appState.settings.fontSize}`;
audioEngine.loadVoices();
renderAlphabetStage();
renderPhonicsStage();
renderColourStage();
renderNumberStage();
renderShapeStage();
renderWordStage();
renderScoreboard();
updateActiveStudentNav();

// Disable automatic browser scroll restoration on refresh/load
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Always start fresh sessions on the main Home Dashboard snapped to top according to selected mode
if (appState.studioMode === 'senior') {
    switchView('view-home-senior');
} else {
    switchView('view-home');
}
window.scrollTo(0, 0);

console.log("LittleStars Zoom Teacher Studio Initialized Successfully.");
