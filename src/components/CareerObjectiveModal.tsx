import React from "react";
import { 
  X, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  ArrowRight,
  Download
} from "lucide-react";
import { profileData } from "../data/profile";

interface CareerObjectiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onOpenResumeCenter: () => void;
}

export const CareerObjectiveModal: React.FC<CareerObjectiveModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onOpenResumeCenter
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className={`relative w-full max-w-xl rounded-3xl border shadow-2xl z-10 overflow-hidden ${
        darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-900"
      }`}>
        
        {/* Modal Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200"
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">Professional Career Objective</h3>
              <p className="text-[11px] text-slate-400 font-mono">
                {profileData.name} • B.Tech AI&DS (8.3 CGPA)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className={`p-4 rounded-2xl border leading-relaxed text-sm ${
            darkMode ? "bg-slate-950/80 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
          }`}>
            <p>{profileData.careerObjective}</p>
          </div>

          {/* Target Role Alignments */}
          <div>
            <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold block mb-2">
              Primary Role Alignments in MNC Engineering Teams
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                "AI / ML Engineer",
                "GenAI & LLM Solutions Developer",
                "Python Backend Developer",
                "Full-Stack Web Developer",
                "Java Software Engineer",
                "Associate Software Engineer (SDE)"
              ].map((role, idx) => (
                <div 
                  key={idx} 
                  className={`p-2 rounded-xl border flex items-center gap-2 ${
                    darkMode ? "bg-slate-950/40 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Internship Anchor */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/60 text-xs">
            <div className="text-slate-400 font-mono text-[11px]">
              Ready for immediate 2027 recruitment drives
            </div>

            <button
              onClick={() => { onClose(); onOpenResumeCenter(); }}
              className="px-4 py-2 rounded-xl font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shadow-md shadow-indigo-600/30 cursor-pointer"
            >
              <span>Download Tailored Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
