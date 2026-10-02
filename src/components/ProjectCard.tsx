import React from "react";
import { 
  Github, 
  ExternalLink, 
  Award, 
  ArrowRight,
  Camera,
  Smartphone,
  Lightbulb,
  Sparkles,
  Bot,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
  onOpenDetails: (project: Project) => void;
  onViewPatent: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  darkMode, 
  onOpenDetails,
  onViewPatent 
}) => {
  // Visual Mockup Component based on visualType
  const renderVisualMockup = () => {
    switch (project.visualType) {
      case "cctv-patent":
        return (
          <div className="relative h-44 rounded-2xl bg-slate-950 border border-cyan-500/30 overflow-hidden flex flex-col justify-between p-3 font-mono">
            {/* RTSP Stream Header */}
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-rose-400 font-bold">LIVE RTSP STREAM</span>
                <span>• CAM-04 (Lecture Hall A)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                PATENT PUBLISHED
              </span>
            </div>

            {/* Simulated Face Detection Box */}
            <div className="relative my-auto flex items-center justify-center">
              <div className="relative border-2 border-dashed border-cyan-400 p-3 rounded-xl bg-cyan-950/20 text-center animate-pulse">
                <div className="text-[11px] font-bold text-cyan-300">
                  [Deepika Pamoti - 99.4% Match]
                </div>
                <div className="text-[9px] text-slate-400">
                  Embedding distance: 0.12 • Verified Present
                </div>
                {/* Crosshairs */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
              </div>
            </div>

            {/* Ingestion metrics */}
            <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-900 pt-1">
              <span>FPS: 30.0 • OpenCV 4.x</span>
              <span className="text-emerald-400">STATUS: AUTO-LOGGED TO DB</span>
            </div>
          </div>
        );

      case "startup-pitch":
        return (
          <div className="relative h-44 rounded-2xl bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-950 border border-amber-500/30 overflow-hidden p-3 font-mono flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px]">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold flex items-center gap-1">
                <Lightbulb className="w-3 h-3" />
                <span>INNOVATION IDEA PROPOSAL</span>
              </span>
              <span className="text-slate-400">Tech Challenge Submission</span>
            </div>

            <div className="space-y-1.5 my-auto px-2">
              <div className="text-xs font-bold text-slate-100 font-sans">
                Smart Traveler Safety & Local Trust Platform
              </div>
              <div className="grid grid-cols-3 gap-1 text-[9px] text-center">
                <div className="p-1 rounded bg-slate-900/80 border border-slate-800 text-amber-300">
                  Trust Radar
                </div>
                <div className="p-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">
                  Rapid SOS
                </div>
                <div className="p-1 rounded bg-slate-900/80 border border-slate-800 text-emerald-300">
                  Verified Guide
                </div>
              </div>
            </div>

            <div className="text-[9px] text-slate-400 flex items-center justify-between border-t border-slate-900 pt-1">
              <span>Submitted for Tourism Tech Challenges</span>
              <span className="text-amber-400">PROTOTYPE READY</span>
            </div>
          </div>
        );

      case "mobile-app":
        return (
          <div className="relative h-44 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 overflow-hidden p-3 font-mono flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px]">
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold flex items-center gap-1">
                <Smartphone className="w-3 h-3" />
                <span>MOBILE-FIRST CIVIC TECH</span>
              </span>
              <span className="text-emerald-400 font-bold">LIVE APP</span>
            </div>

            <div className="space-y-1 my-auto px-2 text-xs">
              <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-[11px] font-sans font-semibold text-slate-200">Grievance #4092: Road Repair</span>
                </div>
                <span className="text-[10px] font-mono text-indigo-400">IN PROGRESS</span>
              </div>
              <div className="text-[9px] text-slate-400 font-sans">
                Geo-tagged citizen reports with municipal official dispatch
              </div>
            </div>

            <div className="text-[9px] text-slate-400 flex items-center justify-between border-t border-slate-900 pt-1">
              <span>React.js • Flask • MongoDB</span>
              <span className="text-indigo-300">SIH WINNING PLATFORM</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative h-44 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950/40 border border-purple-500/30 overflow-hidden p-3 font-mono flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px]">
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>AI & GENAI APPLICATION</span>
              </span>
              <span className="text-purple-300">FAISS / LLM</span>
            </div>

            <div className="space-y-1.5 my-auto px-2 text-xs">
              <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-purple-200">
                &gt; Context grounded via semantic search<br/>
                &gt; Diagnostic evaluation scorecard: 94/100
              </div>
            </div>

            <div className="text-[9px] text-slate-400 flex items-center justify-between border-t border-slate-900 pt-1">
              <span>Full-Stack Architecture</span>
              <span className="text-emerald-400">VERIFIED</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:scale-[1.01] ${
        darkMode
          ? "bg-slate-900/70 border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900"
          : "bg-white border-slate-200/90 shadow-sm hover:shadow-lg hover:border-indigo-300"
      }`}
    >
      <div className="p-5">
        
        {/* Visual Mockup Card Banner */}
        <div className="mb-4">
          {renderVisualMockup()}
        </div>

        {/* Top Badges & Category */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {project.categoryBadge}
          </span>

          {project.badge && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              <Award className="w-3 h-3" />
              <span>{project.badge}</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className={`text-lg font-bold tracking-tight mb-1 group-hover:text-indigo-400 transition-colors ${
          darkMode ? "text-slate-100" : "text-slate-900"
        }`}>
          {project.name}
        </h3>

        {/* Tagline */}
        <p className={`text-xs mb-3 font-medium line-clamp-2 ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}>
          {project.tagline}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                darkMode ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-slate-500 py-0.5">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

      </div>

      {/* Card Action Buttons Footer */}
      <div className={`p-4 pt-3 border-t flex flex-wrap items-center justify-between gap-2 ${
        darkMode ? "bg-slate-950/50 border-slate-800/60" : "bg-slate-50/70 border-slate-200/80"
      }`}>
        <div className="flex items-center gap-1.5 flex-wrap">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all shadow-sm"
              title="View Source on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm shadow-indigo-600/20"
              title="Open Live Application"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}

          {project.isPatentProject && (
            <button
              onClick={onViewPatent}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-600/30 transition-all cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Patent Info</span>
            </button>
          )}
        </div>

        <button
          onClick={() => onOpenDetails(project)}
          className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            darkMode ? "text-slate-300 hover:text-white hover:bg-slate-800" : "text-slate-700 hover:text-slate-900 hover:bg-slate-200"
          }`}
        >
          <span>Details</span>
          <ArrowRight className="w-3 h-3 text-indigo-400" />
        </button>
      </div>
    </div>
  );
};
