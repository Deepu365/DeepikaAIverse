import React from "react";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  BookOpen 
} from "lucide-react";
import { educationList } from "../data/education";

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="education" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education (B.Tech, Intermediate & 10th)
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Comprehensive academic track record across engineering, pre-university mathematics, and secondary schooling.
          </p>
        </div>

        {/* 3 Education Cards */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              className={`rounded-3xl border p-6 sm:p-8 transition-all ${
                darkMode ? "bg-slate-900/80 border-slate-800 hover:border-indigo-500/40" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold uppercase">
                        {edu.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mt-1">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-semibold text-slate-400 font-mono">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{edu.scoreLabel}: {edu.score}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 space-y-2">
                {edu.highlights.map((hl, hi) => (
                  <div key={hi} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
