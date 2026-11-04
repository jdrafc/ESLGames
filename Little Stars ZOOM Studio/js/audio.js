/* ==========================================================================
   3. WEB AUDIO & SPEECH SYNTHESIS ENGINE
   ========================================================================== */

class AudioEngine {
    constructor() {
        this.ctx = null;
        this.soundEnabled = true;
        this.speechSynth = window.speechSynthesis || null;
        this.speechRate = 0.9;
        this.selectedVoice = null;
        
        this.initAudioContext();
        this.loadVoices();

        window.audioEngine = this;
    }

    initAudioContext() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }

    resumeContext() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    pickBestVoice(voices, savedVoiceName = null) {
        if (!voices || !voices.length) return null;

        // 1. If user explicitly selected a custom voice, respect that choice
        // (excluding legacy desktop defaults Zira/David so we can upgrade cleanly to Google UK English Female)
        if (savedVoiceName && 
            savedVoiceName !== 'Microsoft Zira - English (United States)' && 
            savedVoiceName !== 'Microsoft David - English (United States)') {
            const exact = voices.find(v => v.name === savedVoiceName);
            if (exact) return exact;
        }

        // 2. Priority 1: Google UK English Female / Woman
        let found = voices.find(v => {
            const n = v.name.toLowerCase();
            return n.includes('google') && (n.includes('uk') || n.includes('british')) && (n.includes('female') || n.includes('woman'));
        });
        if (found) return found;

        // 3. Priority 2: Any British / UK English Female voice (e.g. Sonia Natural, Libby, Hazel, Victoria)
        found = voices.find(v => {
            const n = v.name.toLowerCase();
            const l = v.lang.toLowerCase();
            const isUK = l.startsWith('en-gb') || l.startsWith('en_gb') || n.includes('uk') || n.includes('great britain') || n.includes('united kingdom');
            const isFemale = n.includes('female') || n.includes('woman') || n.includes('sonia') || n.includes('libby') || n.includes('hazel') || n.includes('victoria');
            return isUK && isFemale;
        });
        if (found) return found;

        // 4. Priority 3: Any Google UK English voice
        found = voices.find(v => {
            const n = v.name.toLowerCase();
            return n.includes('google') && (n.includes('uk') || n.includes('british'));
        });
        if (found) return found;

        // 5. Priority 4: Any Google English voice (e.g. Google US English)
        found = voices.find(v => {
            const n = v.name.toLowerCase();
            return n.includes('google') && (n.includes('female') || n.includes('woman') || n.includes('us english'));
        });
        if (found) return found;

        // 6. Priority 5: Any UK / British English voice
        found = voices.find(v => {
            const l = v.lang.toLowerCase();
            return l.startsWith('en-gb') || l.startsWith('en_gb');
        });
        if (found) return found;

        // 7. Priority 6: Standard Natural / Warm English Female (Jenny, Aria, Samantha)
        found = voices.find(v => {
            const n = v.name.toLowerCase();
            const l = v.lang.toLowerCase();
            return l.startsWith('en') && (n.includes('jenny') || n.includes('aria') || n.includes('female') || n.includes('samantha') || n.includes('zira'));
        });
        if (found) return found;

        // 8. Priority 7: Any English voice
        found = voices.find(v => v.lang.toLowerCase().startsWith('en'));
        return found || voices[0];
    }

    loadVoices() {
        if (!this.speechSynth) return;
        const populate = () => {
            const voices = this.speechSynth.getVoices();
            if (!voices.length) return;

            const savedVoiceName = appState?.settings?.speechVoice;
            this.selectedVoice = this.pickBestVoice(voices, savedVoiceName);

            if (this.selectedVoice && appState && appState.settings) {
                appState.settings.speechVoice = this.selectedVoice.name;
                if (typeof saveState === 'function') saveState();
            }

            const selectElem = document.getElementById('set-speech-voice');
            if (selectElem) {
                selectElem.innerHTML = voices.map(v => `<option value="${v.name}" ${this.selectedVoice && v.name === this.selectedVoice.name ? 'selected' : ''}>${v.name} (${v.lang})</option>`).join('');
            }
        };
        populate();
        if (this.speechSynth.onvoiceschanged !== undefined) {
            this.speechSynth.onvoiceschanged = populate;
        }
    }

    setVoice(voiceName) {
        if (!this.speechSynth) return;
        const voices = this.speechSynth.getVoices();
        const v = voices.find(voice => voice.name === voiceName);
        if (v) {
            this.selectedVoice = v;
        }
    }

    // Web Audio Synthesized Sound Effects
    playTone(freq, type = 'sine', duration = 0.2) {
        if (!this.soundEnabled || !this.ctx) return;
        this.resumeContext();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playCorrect() {
        this.playTone(523.25, 'triangle', 0.15); // C5
        setTimeout(() => this.playTone(659.25, 'triangle', 0.15), 100); // E5
        setTimeout(() => this.playTone(783.99, 'triangle', 0.3), 200); // G5
    }

    playSuccess() {
        this.playCorrect();
    }

    playStar() {
        // Bright shimmering arpeggiated star chime with high sparkle
        this.playTone(523.25, 'triangle', 0.12); // C5
        setTimeout(() => this.playTone(659.25, 'triangle', 0.12), 70);  // E5
        setTimeout(() => this.playTone(783.99, 'triangle', 0.14), 140); // G5
        setTimeout(() => this.playTone(1046.50, 'sine', 0.28), 210);    // C6 high star sparkle
    }

    playHeart() {
        this.playStar();
    }

    playStarCollect() {
        this.playStar();
    }

    playWrong() {
        this.playTone(220, 'sawtooth', 0.2); // A3
        setTimeout(() => this.playTone(196, 'sawtooth', 0.3), 150); // G3
    }

    playGentleTry() {
        // Soft, friendly descending tone for encouraging feedback (non-punitive)
        this.playTone(392, 'sine', 0.15); // G4
        setTimeout(() => this.playTone(329.63, 'sine', 0.22), 110); // E4
    }

    playClick() {
        this.playTone(400, 'sine', 0.05);
    }

    playReactorZap() {
        if (!this.soundEnabled || !this.ctx) return;
        this.resumeContext();
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(680, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.32);
            gain.gain.setValueAtTime(0.28, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.32);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.32);
        } catch(e) {}
    }

    playSplash() {
        this.playTone(320, 'sine', 0.1);
        setTimeout(() => this.playTone(480, 'triangle', 0.15), 60);
        setTimeout(() => this.playTone(600, 'sine', 0.2), 120);
    }

    playSnap() {
        this.playTone(680, 'square', 0.04);
        setTimeout(() => this.playTone(500, 'triangle', 0.06), 40);
    }

    playFanfare() {
        [440, 554.37, 659.25, 880].forEach((freq, idx) => {
            setTimeout(() => this.playTone(freq, 'triangle', 0.25), idx * 120);
        });
    }

    stop() {
        if (this.speechSynth) this.speechSynth.cancel();
    }

    // Speech Synthesis Pronunciation
    speak(text, priority = false, onEndCallback = null) {
        if (!this.speechSynth) {
            if (onEndCallback) onEndCallback();
            return;
        }
        if (priority) this.speechSynth.cancel();

        // Sanitize text: remove emojis, pictographs and decorative symbols so speech synthesis will never announce symbol definitions (e.g. "party popper", "paw prints", "star")
        const cleanText = typeof text === 'string'
            ? text.replace(/[\u{1F300}-\u{1FAFF}\u{200D}\u{2300}-\u{23FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}]/gu, '').replace(/\s{2,}/g, ' ').trim()
            : text;

        if (!cleanText) {
            if (onEndCallback) onEndCallback();
            return;
        }

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = this.speechRate || 0.92;
        utterance.pitch = 1.25; // Friendly, warm, slightly higher pitch for a cute female teacher tone

        // Ensure teacher voice matches dashboard settings or preferred UK English default
        if (this.speechSynth) {
            const savedVoiceName = (typeof appState !== 'undefined' && appState?.settings?.speechVoice) || null;
            if (!this.selectedVoice || (savedVoiceName && this.selectedVoice.name !== savedVoiceName)) {
                const voices = this.speechSynth.getVoices();
                this.selectedVoice = this.pickBestVoice(voices, savedVoiceName);
            }
        }

        if (this.selectedVoice) utterance.voice = this.selectedVoice;

        if (onEndCallback) {
            let called = false;
            const finish = () => {
                if (!called) {
                    called = true;
                    onEndCallback();
                }
            };
            utterance.onend = finish;
            utterance.onerror = finish;
        }

        this.currentUtterance = utterance; // Prevent GC before onend in Chromium
        this.speechSynth.speak(utterance);
    }

    speakCorrectPraise(onEndCallback = null) {
        const praises = [
            "That's correct, well done!",
            "Good job! That's right!"
        ];
        const phrase = praises[Math.floor(Math.random() * praises.length)];
        this.speak(phrase, true, onEndCallback);
        return phrase;
    }

    speakRetryPrompt(onEndCallback = null) {
        const retries = [
            "Good try, try again!",
            "Almost, try again!"
        ];
        const phrase = retries[Math.floor(Math.random() * retries.length)];
        this.speak(phrase, true, onEndCallback);
        return phrase;
    }
}

