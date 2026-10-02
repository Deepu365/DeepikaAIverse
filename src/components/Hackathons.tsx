import React from "react";
import { 
  Trophy, 
  Github, 
  ExternalLink, 
  Flame, 
  Target, 
  Award, 
  GitBranch, 
  Zap,
  ArrowRight
} from "lucide-react";
import { hackathonsData, hackathonTimelineStages } from "../data/hackathons";

interface HackathonsProps {
  darkMode: boolean;
}

export const Hackathons: React.FC<HackathonsProps> = ({ darkMode }) => {
  return (
    <section id="hackathons" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hackathons & National Competitions
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Proven ability to ideate, prototype, architect, and deploy production-grade software under intense competitive timelines.
          </p>
        </div>

        {/* Hackathon Visual Timeline: IDEA → PROBLEM → PROTOTYPE → DEVELOPMENT → DEMO → RESULT */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400 font-bold">
              <Zap className="w-4 h-4" />
              <span>Sprint Methodology: From Problem To Podium</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              Validated Across National Hackathons
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {hackathonTimelineStages.map((stage, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border relative transition-all hover:scale-[1.02] ${
                  darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="text-xs font-mono font-bold text-amber-400 mb-1">
                  {stage.stage}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {stage.description}
                </p>

                {idx < hackathonTimelineStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-400">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="space-y-6">
          {hackathonsData.map((hackathon) => (
            <div
              key={hackathon.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-all ${
                darkMode
                  ? "bg-slate-900/70 border-slate-800/80 hover:border-amber-500/40"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-100">
                        {hackathon.name}
                      </h3>
                      {hackathon.edition && (
                        <span className="text-[11px] font-mono text-slate-400">
                          ({hackathon.edition})
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-indigo-400 font-mono mt-0.5">
                      Project: {hackathon.projectTitle}
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {hackathon.badge}
                </span>
              </div>

              {/* Details Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-5 text-xs sm:text-sm">
                
                {/* Left: Problem & Contribution */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <span className="font-mono text-xs uppercase font-semibold text-rose-400 block mb-1">
                      Problem Statement
                    </span>
                    <p className={`text-xs leading-relaxed ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}>
                      {hackathon.problemStatement}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase font-semibold text-cyan-400 block mb-1">
                      My Direct Contribution
                    </span>
                    <p className={`text-xs leading-relaxed ${
                      darkMode ? "text-slate-300" : "text-slate-700"
                    }`}>
                      {hackathon.myContribution}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase font-semibold text-emerald-400 block mb-1">
                      Outcome & Recognition
                    </span>
                    <p className="text-xs font-medium text-emerald-400">
                      {hackathon.outcome}
                    </p>
                  </div>
                </div>

                {/* Right: Technologies & Links */}
                <div className="lg:col-span-4 flex flex-col justify-between p-4 rounded-2xl border bg-slate-950/50 border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                      Stack Used In Sprint
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hackathon.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 border border-slate-700 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/60">
                    {hackathon.githubUrl && (
                      <a
                        href={hackathon.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {hackathon.liveDemoUrl && (
                      <a
                        href={hackathon.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
