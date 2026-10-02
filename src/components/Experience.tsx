import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Server, 
  Database,
  ArrowRight
} from "lucide-react";
import { experienceData } from "../data/experience";

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industry Internships (3 Verified Roles)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience & Technical Internships
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Hands-on engineering across Backend API systems, Generative AI workflows, and practical Data Science pipelines.
          </p>
        </div>

        {/* 3 Internships Timeline */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-all relative overflow-hidden ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800 hover:border-indigo-500/40"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Top Banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    {idx === 0 ? <Server className="w-6 h-6 text-emerald-400" /> : idx === 1 ? <Sparkles className="w-6 h-6 text-indigo-400" /> : <Database className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                        {exp.role}
                      </h3>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        idx === 0 
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                          : "bg-slate-800 text-slate-400"
                      }`}>
                        {exp.badge}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-indigo-400 font-mono mt-0.5">
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period} ({exp.duration})</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className={`py-4 text-xs sm:text-sm leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold block mb-2">
                  Delivered Responsibilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {exp.responsibilities.map((resp, ri) => (
                    <div
                      key={ri}
                      className={`p-2.5 rounded-xl border flex items-start gap-2 text-xs ${
                        darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800/60">
                <span className="text-[10px] font-mono uppercase text-slate-500 mr-1">
                  Stack:
                </span>
                {exp.technologiesWorkedOn.map((tech, ti) => (
                  <span
                    key={ti}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 border border-slate-700 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
