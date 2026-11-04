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

    loadVoices() {
        if (!this.speechSynth) return;
        const populate = () => {
            const voices = this.speechSynth.getVoices();
            if (!voices.length) return;

            const savedVoiceName = appState?.settings?.speechVoice;
            let foundVoice = null;

            // 1. Try exact name match
            if (savedVoiceName) {
                foundVoice = voices.find(v => v.name === savedVoiceName);
            }

            // 2. Cross-browser Fuzzy Match (e.g. Edge "Microsoft Jenny" -> Chrome "Google US English / Zira / Female")
            if (!foundVoice && savedVoiceName) {
                const cleanSaved = savedVoiceName.toLowerCase();
                foundVoice = voices.find(v => {
                    const name = v.name.toLowerCase();
                    if (cleanSaved.includes('female') && name.includes('female')) return true;
                    if ((cleanSaved.includes('zira') || cleanSaved.includes('jenny') || cleanSaved.includes('aria')) && 
                        (name.includes('female') || name.includes('zira') || name.includes('jenny') || name.includes('natural') || name.includes('google us'))) return true;
                    return false;
                });
            }

            // 3. Heuristic fallback for warm female voice in target browser
            if (!foundVoice) {
                foundVoice = voices.find(v => v.lang.startsWith('en') && (
                    v.name.includes('Zira') || 
                    v.name.includes('Jenny') || 
                    v.name.includes('Ava') || 
                    v.name.includes('Aria') || 
                    v.name.includes('Samantha') || 
                    v.name.includes('Victoria') || 
                    v.name.includes('Female') ||
                    v.name.includes('Natural') ||
                    v.name.includes('Google US English')
                ));
            }

            if (!foundVoice) {
                foundVoice = voices.find(v => v.lang.startsWith('en'));
            }

            this.selectedVoice = foundVoice || voices[0];
            appState.settings.speechVoice = this.selectedVoice.name;

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

        // Ensure teacher voice matches dashboard settings or female default
        if (this.speechSynth) {
            const savedVoiceName = (typeof appState !== 'undefined' && appState?.settings?.speechVoice) || null;
            if (savedVoiceName && (!this.selectedVoice || this.selectedVoice.name !== savedVoiceName)) {
                const voices = this.speechSynth.getVoices();
                if (voices && voices.length) {
                    const matched = voices.find(v => v.name === savedVoiceName);
                    if (matched) this.selectedVoice = matched;
                }
            }
            if (!this.selectedVoice) {
                this.loadVoices();
            }
            if (!this.selectedVoice) {
                const voices = this.speechSynth.getVoices();
                if (voices && voices.length) {
                    this.selectedVoice = voices.find(v => v.lang.startsWith('en') && (
                        v.name.includes('Zira') || 
                        v.name.includes('Jenny') || 
                        v.name.includes('Ava') || 
                        v.name.includes('Aria') || 
                        v.name.includes('Samantha') || 
                        v.name.includes('Victoria') || 
                        v.name.includes('Female') ||
                        v.name.includes('Natural') ||
                        v.name.includes('Google US English')
                    )) || voices.find(v => v.lang.startsWith('en')) || voices[0];
                }
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

