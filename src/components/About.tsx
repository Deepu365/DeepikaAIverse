import React from "react";
import { 
  GraduationCap, 
  Cpu, 
  Code2, 
  Lightbulb, 
  CheckCircle2, 
  Compass,
  Hammer,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { profileData } from "../data/profile";
import { useProfilePhoto } from "../utils/photoManager";

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { photo } = useProfilePhoto();
  const fourCards = [
    {
      title: "Education",
      subtitle: "B.Tech CSE (AI&DS)",
      desc: "SITAM Vizianagaram (8.3 CGPA) with solid algorithmic & software foundations.",
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      accent: "border-indigo-500/30",
    },
    {
      title: "Focus",
      subtitle: "AI/ML + GenAI",
      desc: "Computer Vision pipelines, RAG with FAISS, and LLM applications.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      accent: "border-cyan-500/30",
    },
    {
      title: "Development",
      subtitle: "Backend + Full Stack",
      desc: "React SPAs, Node/Flask RESTful APIs, SQL, and MongoDB schemas.",
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      accent: "border-purple-500/30",
    },
    {
      title: "Innovation",
      subtitle: "Patent & Hackathons",
      desc: "Published CCTV attendance patent & Smart India Hackathon Winner.",
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      accent: "border-amber-500/30",
    },
  ];

  return (
    <section id="about" className="py-16 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            About Deepika
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            AI + Software Engineering + Problem Solving
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Building production-ready software solutions from data ingestion to cloud deployment.
          </p>
        </div>

        {/* Narrative & Pillars Grid - Condensed & Punchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-10">
          
          {/* Main Story Narrative (Condensed) */}
          <div className="lg:col-span-7">
            <div className={`p-6 rounded-3xl border ${
              darkMode ? "bg-slate-900/70 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full border-2 border-cyan-400 p-0.5 bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-lg shadow-indigo-600/30">
                  <img
                    src={photo}
                    alt="Deepika Pamoti"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" title="Verified Candidate" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5">
                    <span>Deepika Pamoti</span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">8.5 CGPA</span>
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono font-medium">B.Tech AI & Data Science • SITAM</p>
                  <p className="text-[10px] text-slate-400 font-mono">Patent Author • SIH National Champion</p>
                </div>
              </div>

              <div className={`space-y-2.5 text-xs sm:text-sm leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                <p>
                  Final-year B.Tech CSE (AI & Data Science) student at Satya Institute of Technology and Management (CGPA: 8.5). Passionate about turning complex AI models into scalable, user-facing software.
                </p>
                <p>
                  Hands-on industry experience includes 6 months as Backend Developer Intern and 2 months as GenAI Developer Intern at Pixelwind Technologies, alongside Data Science practicals at APSCHE.
                </p>
              </div>

              {/* Core Attributes Checklist */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  "Clean Python & JavaScript codebases",
                  "Applied Computer Vision & RAG pipelines",
                  "Smart India Hackathon (SIH) Winner",
                  "NCC 'B' & 'C' Certified Cadet"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Three Dimensions (BUILD, INNOVATE, PROVE) */}
          <div className="lg:col-span-5 space-y-2.5">
            {profileData.dimensions.map((dim, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] ${
                  darkMode 
                    ? "bg-slate-900/80 border-slate-800 hover:border-slate-700" 
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    {idx === 0 && <Hammer className="w-3.5 h-3.5 text-indigo-400" />}
                    {idx === 1 && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                    {idx === 2 && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
                    <h4 className="font-mono font-bold text-xs tracking-wider text-indigo-400">
                      {dim.title}
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                    {dim.tag}
                  </span>
                </div>
                <div className="text-[11px] font-bold text-slate-200 mb-0.5">
                  {dim.subtitle}
                </div>
                <p className={`text-[11px] leading-snug ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {dim.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Four Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {fourCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all hover:-translate-y-0.5 ${card.accent} ${
                darkMode ? "bg-slate-900/60" : "bg-white shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  {card.icon}
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-500 block">
                    {card.title}
                  </span>
                  <h4 className="font-bold text-xs text-slate-100">
                    {card.subtitle}
                  </h4>
                </div>
              </div>
              <p className={`text-[11px] leading-snug ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
