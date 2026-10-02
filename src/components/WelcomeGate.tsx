import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  Play,
  Square,
  GraduationCap
} from "lucide-react";
import { HolographicAICore } from "./HolographicAICore";
import { soundFX } from "../services/soundEffects";
import { voiceGreeting, GREETING_SCRIPT } from "../services/voiceGreeting";
import { DEFAULT_PHOTO } from "../utils/photoManager";

interface WelcomeGateProps {
  darkMode: boolean;
  onEnterPortfolio: () => void;
  registeredUser?: string | null;
  onRegisterUser?: (name: string) => void;
}

export const WelcomeGate: React.FC<WelcomeGateProps> = ({
  darkMode,
  onEnterPortfolio
}) => {
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const unsubscribe = voiceGreeting.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });

    return () => {
      voiceGreeting.stop();
      unsubscribe();
    };
  }, []);

  const handleToggleVoice = () => {
    if (isSpeaking) {
      voiceGreeting.stop();
      soundFX.playClick();
    } else {
      soundFX.playSuccess();
      setShowTranscript(true);
      voiceGreeting.speak(GREETING_SCRIPT);
    }
  };

  const handleOpenPortfolio = () => {
    voiceGreeting.stop();
    soundFX.playPortalOpen();
    setIsUnlocking(true);
    setTimeout(() => {
      onEnterPortfolio();
    }, 450);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto transition-all duration-500 ${
      isUnlocking ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
    } bg-slate-950 text-slate-100`}>
      
      {/* Background Cyber Grid & Radiant Beams */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/25 to-cyan-500/25 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Glassmorphic Terminal Card */}
      <div className="relative w-full max-w-lg my-auto rounded-3xl border border-indigo-500/40 bg-slate-900/95 backdrop-blur-2xl p-6 sm:p-8 text-center shadow-2xl shadow-indigo-950/70 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Top Glowing Ambient Border Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] font-bold">
            <BrainCircuit className="w-4 h-4 animate-pulse text-cyan-400" />
            <span>AI CANDIDATE PORTAL</span>
          </div>

          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1 font-semibold">
            <GraduationCap className="w-3 h-3 text-cyan-300" />
            <span>SITAM • 8.5 CGPA</span>
          </span>
        </div>

        {/* Centerpiece: Direct Black Coat Photo in Circular Gyroscopic Holographic Core */}
        <div className="my-3 flex justify-center">
          <HolographicAICore
            size="md"
            imageSrc={DEFAULT_PHOTO}
            onClick={handleToggleVoice}
            interactive={true}
            isSpeaking={isSpeaking}
          />
        </div>

        {/* Candidate Identity & Credentials */}
        <div className="space-y-1 mb-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Deepika Pamoti
          </h1>
          
          <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">
            B.Tech AI & Data Science • SITAM (8.5 CGPA)
          </p>

          <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
            Smart India Hackathon Winner • Published RTSP CCTV Patent • 3 Internships (Pixelwind & APSCHE)
          </p>
        </div>

        {/* Voice Introduction Player Bar */}
        <div className={`p-3 rounded-2xl border transition-all mb-4 ${
          isSpeaking 
            ? "bg-indigo-950/70 border-cyan-400/60 shadow-lg shadow-cyan-500/20" 
            : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
        }`}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-left">
              <button
                type="button"
                onClick={handleToggleVoice}
                className={`p-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center ${
                  isSpeaking
                    ? "bg-rose-500 hover:bg-rose-600 text-white animate-pulse"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 hover:scale-105"
                }`}
                title={isSpeaking ? "Stop Voice Introduction" : "Play Voice Introduction"}
              >
                {isSpeaking ? (
                  <Square className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                )}
              </button>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white">
                    {isSpeaking ? "Speaking: Deepika Pamoti" : "Deepika's Voice Introduction"}
                  </span>
                  {isSpeaking && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </div>
                <span className="text-[10px] text-slate-400 font-mono block">
                  {isSpeaking ? "Click button to stop audio" : "Click to hear voice greeting & summary"}
                </span>
              </div>
            </div>

            {/* Live Audio Equalizer Waveform Bars */}
            <div className="flex items-center gap-1 h-6">
              {[8, 16, 24, 14, 20, 10, 18, 12].map((height, idx) => (
                <span
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-150 ${
                    isSpeaking 
                      ? "bg-gradient-to-t from-cyan-400 to-indigo-400 animate-pulse" 
                      : "bg-slate-700 h-2"
                  }`}
                  style={{
                    height: isSpeaking ? `${height}px` : "6px",
                    animationDelay: `${idx * 0.1}s`,
                    animationDuration: "0.6s"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Subtitle Transcript Bubble when Playing */}
          {showTranscript && (
            <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 text-[11px] text-cyan-200/90 font-mono text-left bg-slate-900/60 p-2 rounded-xl leading-relaxed">
              <span className="text-cyan-400 font-bold block mb-0.5">🎙️ AUDIO TRANSCRIPT:</span>
              "{GREETING_SCRIPT}"
            </div>
          )}
        </div>

        {/* Prominent "Open Deepika's Portfolio" Button */}
        <button
          onClick={handleOpenPortfolio}
          className="w-full py-3.5 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-xl shadow-indigo-600/40 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer group"
        >
          <Sparkles className="w-4 h-4 text-cyan-300 animate-spin-slow" />
          <span>✨ Open Deepika's Portfolio ✨</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-2.5 text-[11px] font-mono text-slate-400">
          Click the photo or button to explore the full interactive portfolio & resume
        </p>

      </div>
    </div>
  );
};
