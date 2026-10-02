import React, { useState } from "react";
import { 
  Terminal, 
  ChevronUp, 
  ChevronDown, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Cpu, 
  FileText, 
  Code, 
  ShieldCheck,
  Eye,
  RotateCcw
} from "lucide-react";
import { soundFX } from "../services/soundEffects";

interface CyberHUDTerminalProps {
  onNavigate: (sectionId: string) => void;
  onOpenGate: () => void;
  darkMode: boolean;
}

export const CyberHUDTerminal: React.FC<CyberHUDTerminalProps> = ({
  onNavigate,
  onOpenGate,
  darkMode
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.getIsMuted());

  const toggleSound = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  const handleCommand = (sectionId: string) => {
    soundFX.playClick();
    onNavigate(sectionId);
  };

  return (
    <aside aria-label="Cyber Console" className="fixed bottom-4 right-4 z-40 select-none">
      {/* Expanded Terminal Panel */}
      {isOpen && (
        <div className={`mb-2 w-72 sm:w-80 rounded-2xl border shadow-2xl backdrop-blur-xl p-3.5 animate-in fade-in slide-in-from-bottom-3 duration-200 ${
          darkMode 
            ? "bg-slate-900/95 border-indigo-500/40 text-slate-100 shadow-indigo-950/80" 
            : "bg-white/95 border-indigo-300 text-slate-900 shadow-slate-400/40"
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/50 text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>DEEPIKA.OS // v4.2</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSound}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title={isMuted ? "Unmute Audio FX" : "Mute Audio FX"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Telemetry Status lines */}
          <div className="font-mono text-[10px] space-y-1 mb-3 text-slate-400">
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-emerald-400 font-bold">READY TO HIRE</span>
            </div>
            <div className="flex justify-between">
              <span>PATENT:</span>
              <span className="text-cyan-400">CCTV ATTENDANCE</span>
            </div>
            <div className="flex justify-between">
              <span>CGPA:</span>
              <span className="text-indigo-400">8.5 / 10.0</span>
            </div>
          </div>

          {/* Quick Action Commands */}
          <div className="space-y-1">
            <div className="text-[9px] font-mono uppercase text-slate-500 font-bold tracking-wider mb-1">
              Recruiter Quick Shortcuts
            </div>

            <button
              onClick={() => handleCommand("projects")}
              className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between bg-slate-800/60 hover:bg-indigo-600/30 text-slate-200 hover:text-white transition-all cursor-pointer border border-transparent hover:border-indigo-500/40"
            >
              <span className="flex items-center gap-1.5">
                <Code className="w-3 h-3 text-cyan-400" />
                <span>&gt; inspect projects</span>
              </span>
              <span className="text-[10px] text-slate-400">5 Works</span>
            </button>

            <button
              onClick={() => handleCommand("resumes")}
              className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between bg-slate-800/60 hover:bg-indigo-600/30 text-slate-200 hover:text-white transition-all cursor-pointer border border-transparent hover:border-indigo-500/40"
            >
              <span className="flex items-center gap-1.5">
                <FileText className="w-3 h-3 text-indigo-400" />
                <span>&gt; download 3 resumes</span>
              </span>
              <span className="text-[10px] text-emerald-400">PDFs</span>
            </button>

            <button
              onClick={() => handleCommand("patent")}
              className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between bg-slate-800/60 hover:bg-indigo-600/30 text-slate-200 hover:text-white transition-all cursor-pointer border border-transparent hover:border-indigo-500/40"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-purple-400" />
                <span>&gt; view patent blueprint</span>
              </span>
              <span className="text-[10px] text-purple-400">IP</span>
            </button>

            <button
              onClick={() => {
                soundFX.playPortalOpen();
                onOpenGate();
              }}
              className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between bg-indigo-600/25 hover:bg-indigo-600 text-indigo-200 hover:text-white transition-all cursor-pointer border border-indigo-500/40"
              title="Return to interactive AI avatar screen"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-300" />
                <span>&gt; launch AI avatar screen</span>
              </span>
              <span className="text-[9px] uppercase font-bold text-cyan-300">Entrance</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          soundFX.playClick();
          setIsOpen(!isOpen);
        }}
        className="px-3.5 py-2 rounded-2xl bg-slate-900 border border-indigo-500/50 shadow-xl shadow-indigo-950/80 text-white flex items-center gap-2 text-xs font-mono font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer group"
      >
        <div className="relative">
          <Cpu className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <span>AI HUD</span>
        {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
      </button>
    </aside>
  );
};
