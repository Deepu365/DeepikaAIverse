import React from "react";
import { 
  Bot, 
  Sparkles, 
  Binary, 
  Camera, 
  LayoutDashboard, 
  Terminal, 
  ArrowUpRight 
} from "lucide-react";
import { whatIBuildData } from "../data/skills";

interface WhatIBuildProps {
  darkMode: boolean;
  onExploreProjects: () => void;
}

const buildIcons: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6 text-indigo-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  Binary: <Binary className="w-6 h-6 text-emerald-400" />,
  Camera: <Camera className="w-6 h-6 text-amber-400" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
  Terminal: <Terminal className="w-6 h-6 text-sky-400" />,
};

export const WhatIBuild: React.FC<WhatIBuildProps> = ({ darkMode, onExploreProjects }) => {
  return (
    <section className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              What I Build
            </h2>
            <p className={`mt-2 text-base max-w-2xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              From real-time computer vision surveillance pipelines to RAG conversational systems and responsive civic web apps.
            </p>
          </div>

          <button
            onClick={onExploreProjects}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group cursor-pointer"
          >
            <span>See live projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIBuildData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] flex flex-col justify-between ${
                darkMode
                  ? "bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900"
                  : "bg-white border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300"
              }`}
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 w-fit mb-4">
                  {buildIcons[item.icon] || <Bot className="w-6 h-6 text-indigo-400" />}
                </div>

                <h3 className={`font-bold text-lg mb-2 tracking-tight ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Technologies Pill Row */}
              <div className="pt-4 border-t border-slate-800/40">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                  Engineered With
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        darkMode
                          ? "bg-slate-950 border-slate-800 text-slate-300"
                          : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
