import React from "react";
import { 
  Lightbulb, 
  Globe2, 
  ShieldCheck, 
  MapPin, 
  Send, 
  FileText, 
  ExternalLink,
  Presentation,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { innovationData } from "../data/innovation";

interface InnovationProps {
  darkMode: boolean;
}

export const Innovation: React.FC<InnovationProps> = ({ darkMode }) => {
  return (
    <section id="innovation" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Product Innovation & Company Idea Proposals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Company Idea Proposal & Prototype
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Technical innovation proposal and startup prototype proposed to solve real-world traveler safety and local trust verification.
          </p>
        </div>

        {/* Innovation Proposal Visual Card */}
        {innovationData.map((item) => (
          <div
            key={item.id}
            className={`rounded-3xl border p-6 sm:p-8 transition-all ${
              darkMode
                ? "bg-slate-900/90 border-amber-500/30 shadow-xl shadow-amber-950/20"
                : "bg-white border-amber-200 shadow-md"
            }`}
          >
            {/* Header with Idea Submission Receipt Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 text-slate-100">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Proposal Stage
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  {item.status}
                </span>
              </div>
            </div>

            {/* Visual Pitch Deck & Concept Showcase */}
            <div className="py-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Visual Slide Deck Proposal Graphic */}
                <div className="lg:col-span-6 rounded-2xl border border-amber-500/30 bg-slate-950 p-4 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-900 pb-2">
                    <div className="flex items-center gap-1.5">
                      <Presentation className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400 font-bold">SUBMISSION SLIDE DECK</span>
                    </div>
                    <span>Concept Paper v1.2</span>
                  </div>

                  {/* Simulated Proposal Slide Screen */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-amber-300">
                      <span>SLIDE 03: EXECUTIVE PROBLEM & SOLUTION</span>
                      <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">PROPOSAL</span>
                    </div>
                    <div className="text-xs font-bold text-slate-100 font-sans">
                      "Bridging Safety Gaps in Smart Destination Ecosystems"
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-sans">
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                        <strong className="text-rose-400 block mb-0.5">Problem:</strong>
                        Unverified tourist guides & ambiguous emergency numbers in remote zones.
                      </div>
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                        <strong className="text-emerald-400 block mb-0.5">Solution:</strong>
                        One-tap trusted verification portal with GPS SOS beacon.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                    <span>Target: Smart Tourism & Hospitality Tech</span>
                    <span className="text-emerald-400">PROPOSAL REGISTERED</span>
                  </div>
                </div>

                {/* Narrative & Pillars */}
                <div className="lg:col-span-6 space-y-4">
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    {item.summary}
                  </p>

                  <div className="space-y-2">
                    {item.keyPillars.map((p, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                          darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-200 block text-xs">{p.title}</strong>
                          <span className="text-[11px] text-slate-400 leading-snug">{p.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.techFocus.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
