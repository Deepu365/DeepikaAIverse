import React, { useEffect } from "react";
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Trophy, 
  Cpu,
  UserCheck,
  GitBranch
} from "lucide-react";
import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl z-10 transition-all ${
          darkMode 
            ? "bg-slate-900 border-slate-700/80 text-slate-100" 
            : "bg-white border-slate-300 text-slate-900"
        }`}
      >
        {/* Modal Header */}
        <div className={`sticky top-0 z-20 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md ${
          darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white/90 border-slate-200"
        }`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">
                {project.categoryBadge || project.category || "Full Stack"}
              </span>
              {project.badge && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors border ${
              darkMode 
                ? "bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700" 
                : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm">
          
          {/* Overview */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
              System Overview & Purpose
            </h3>
            <p className={`leading-relaxed text-sm sm:text-base ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}>
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border ${
              darkMode ? "bg-rose-950/20 border-rose-900/40 text-slate-200" : "bg-rose-50/50 border-rose-200 text-slate-800"
            }`}>
              <div className="flex items-center gap-2 font-bold font-mono text-xs text-rose-400 mb-1.5 uppercase">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {project.problem}
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${
              darkMode ? "bg-emerald-950/20 border-emerald-900/40 text-slate-200" : "bg-emerald-50/50 border-emerald-200 text-slate-800"
            }`}>
              <div className="flex items-center gap-2 font-bold font-mono text-xs text-emerald-400 mb-1.5 uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Engineered Solution
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Specification */}
          <div className={`p-4 rounded-xl border font-mono ${
            darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200"
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-2 uppercase">
              <Layers className="w-4 h-4" />
              Technical Architecture Flow
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-3">
              Key Implemented Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                    darkMode ? "bg-slate-950/40 border-slate-800/80 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-xs leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          {project.myContribution && (
            <div className={`p-4 rounded-xl border ${
              darkMode ? "bg-indigo-950/20 border-indigo-900/40" : "bg-indigo-50/50 border-indigo-200"
            }`}>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 uppercase mb-1.5">
                <UserCheck className="w-4 h-4" />
                My Direct Contribution
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                {project.myContribution}
              </p>
            </div>
          )}

          {/* Implementation Highlights */}
          {project.implementation && project.implementation.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
                Implementation Details
              </h3>
              <ul className="space-y-1.5">
                {project.implementation.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="font-mono text-indigo-400 font-bold shrink-0">0{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Result */}
          {(project.challenges || project.result) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.challenges && (
                <div className={`p-4 rounded-xl border ${
                  darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                  <span className="font-mono text-xs font-semibold text-amber-400 block mb-1">
                    ENGINEERING CHALLENGES
                  </span>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.result && (
                <div className={`p-4 rounded-xl border ${
                  darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400 mb-1">
                    <Trophy className="w-3.5 h-3.5" />
                    VERIFIED OUTCOME
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {project.result}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Technologies Used Grid */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
              Full Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-mono px-2.5 py-1 rounded border ${
                    darkMode ? "bg-slate-950 border-slate-800 text-indigo-300" : "bg-slate-100 border-slate-200 text-indigo-700"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with External Links */}
        <div className={`px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
          darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200"
        }`}>
          <div className="flex items-center gap-2 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Application</span>
              </a>
            )}

            {project.githubStatusText && !project.githubUrl && (
              <span className="text-xs font-mono text-slate-400">
                {project.githubStatusText}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-medium border cursor-pointer ${
              darkMode 
                ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800" 
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
