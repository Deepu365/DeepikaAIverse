/**
 * Voice Greeting & Audio Narration Service for Deepika Pamoti's Portfolio.
 * Uses Web Speech API with smooth speech synthesis and Web Audio chime cues.
 */

export const GREETING_SCRIPT = 
  "Hello and welcome! I am Deepika Pamoti, a B.Tech AI and Data Science engineer from SITAM with an 8.5 CGPA. " +
  "I am a Smart India Hackathon Winner, published patent author, and full-stack developer. " +
  "Click 'Open Deepika's Portfolio' below to explore my live deployed projects, engineering research, and domain resumes.";

class VoiceGreetingService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;
  private listeners: Set<(speaking: boolean) => void> = new Set();
  private textProgressListeners: Set<(text: string) => void> = new Set();

  constructor() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public subscribe(listener: (speaking: boolean) => void): () => void {
    this.listeners.add(listener);
    listener(this.isSpeaking);
    return () => this.listeners.delete(listener);
  }

  private notify(speaking: boolean) {
    this.isSpeaking = speaking;
    this.listeners.forEach((l) => l(speaking));
  }

  public speak(
    text: string = GREETING_SCRIPT, 
    onEndCallback?: () => void
  ) {
    if (!this.synth) {
      console.warn("SpeechSynthesis not supported in this browser");
      return;
    }

    try {
      this.stop();

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      // Select a clear, articulate female or natural English voice if available
      const voices = this.synth.getVoices();
      const preferredVoice = voices.find(
        (v) =>
          (v.name.includes("India") ||
           v.name.includes("Natural") ||
           v.name.includes("Female") ||
           v.name.includes("Samantha") ||
           v.name.includes("Google") ||
           v.name.includes("Zira")) &&
          v.lang.startsWith("en")
      ) || voices.find((v) => v.lang.startsWith("en"));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.rate = 0.95; // Clear and measured cadence
      utterance.pitch = 1.05; // Friendly warm pitch

      utterance.onstart = () => {
        this.notify(true);
      };

      utterance.onend = () => {
        this.notify(false);
        this.currentUtterance = null;
        if (onEndCallback) onEndCallback();
      };

      utterance.onerror = (e) => {
        console.warn("SpeechSynthesis error:", e);
        this.notify(false);
        this.currentUtterance = null;
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn("Could not execute speech synthesis", err);
      this.notify(false);
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.notify(false);
    this.currentUtterance = null;
  }

  public getSpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const voiceGreeting = new VoiceGreetingService();
