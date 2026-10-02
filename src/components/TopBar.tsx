import React from "react";
import { 
  Search, 
  ExternalLink, 
  Phone, 
  Mail, 
  FileText, 
  Sparkles, 
  Award, 
  Globe, 
  DoorOpen,
  RefreshCw 
} from "lucide-react";
import { profileData } from "../data/profile";

interface TopBarProps {
  darkMode: boolean;
  onOpenSearch: () => void;
  onOpenAuth?: (mode: "login" | "register") => void;
  onSelectResume: () => void;
  onProfileClick: () => void;
  onOpenWelcomeGate?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  darkMode,
  onOpenSearch,
  onSelectResume,
  onProfileClick,
  onOpenWelcomeGate
}) => {
  return (
    <header className={`sticky top-0 z-30 h-14 hidden lg:flex items-center justify-between px-6 border-b backdrop-blur-md transition-colors ${
      darkMode 
        ? "bg-slate-950/80 border-slate-800/80 text-slate-200" 
        : "bg-white/80 border-slate-200 text-slate-800 shadow-sm"
    }`}>
      {/* Left: Quick Recruiter Context */}
      <div className="flex items-center gap-3 text-xs font-mono">
        <button
          onClick={onProfileClick}
          className="flex items-center gap-2 hover:text-indigo-400 transition-colors cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-300 group-hover:text-indigo-400">
            Deepika Pamoti
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
            8.5 CGPA
          </span>
        </button>

        {onOpenWelcomeGate && (
          <>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenWelcomeGate}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-white bg-indigo-600/20 hover:bg-indigo-600/50 px-2 py-0.5 rounded-full border border-indigo-500/30 transition-all cursor-pointer text-[11px] font-mono hover:scale-105"
              title="Return to AI Avatar Welcome Screen"
            >
              <Sparkles className="w-3 h-3 text-cyan-400 animate-spin-slow" />
              <span>AI Welcome Gate</span>
            </button>
          </>
        )}

        <span className="text-slate-600">|</span>

        <a 
          href={profileData.contact.vercel}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          title="Open Live Deployed Portfolio App"
        >
          <Globe className="w-3 h-3 text-cyan-400" />
          <span className="text-[11px]">Live App</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>

        <span className="text-slate-600">|</span>

        <a 
          href={`tel:${profileData.phone}`}
          className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <Phone className="w-3 h-3 text-emerald-400" />
          <span className="text-[11px]">{profileData.phone}</span>
        </a>
      </div>

      {/* Right: Search, Dossier & Resumes */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onOpenSearch}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono border flex items-center gap-2 transition-all cursor-pointer ${
            darkMode 
              ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700" 
              : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
          }`}
          title="Search portfolio (Ctrl+K)"
        >
          <Search className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-sans text-[11px]">Search (⌘K)</span>
        </button>

        <button
          onClick={onSelectResume}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shadow-sm shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>3 Resumes</span>
        </button>

        <button
          onClick={onProfileClick}
          className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Dossier</span>
        </button>
      </div>
    </header>
  );
};
