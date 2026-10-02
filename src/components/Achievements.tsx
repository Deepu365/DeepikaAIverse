import React from "react";
import { 
  Trophy, 
  Award, 
  ShieldCheck, 
  Users, 
  Mic, 
  Orbit, 
  ShieldAlert, 
  Target, 
  Check, 
  Sparkles,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { achievementsData, Achievement } from "../data/achievements";

interface AchievementsProps {
  darkMode: boolean;
}

const levelIcons: Record<string, React.ReactNode> = {
  Orbit: <Orbit className="w-5 h-5 text-indigo-400" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-400" />,
  Users: <Users className="w-5 h-5 text-cyan-400" />,
  Mic: <Mic className="w-5 h-5 text-purple-400" />,
  Target: <Target className="w-5 h-5 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-400" />,
  Award: <Award className="w-5 h-5 text-amber-400" />,
  Trophy: <Trophy className="w-5 h-5 text-yellow-400" />,
};

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  return (
    <section id="achievements" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Progression Ladder • Basic to Advanced</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Key Achievements & Campus Impact
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Organized from foundational collegiate activities to national championship honors and published intellectual property.
          </p>
        </div>

        {/* Level Progression Indicator Banner */}
        <div className="mb-10 p-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">Progression Hierarchy:</span>
            <span className="text-slate-400">Campus Activities (L1-L4) → Academic & Cadetship (L5-L6) → National IP & SIH (L7-L8)</span>
          </div>
          <span className="text-amber-400 font-bold hidden sm:inline">8 Verified Milestones</span>
        </div>

        {/* 8 Achievements Cards Ordered from Basic to Advanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-3xl border transition-all hover:scale-[1.01] flex flex-col justify-between ${
                item.orderLevel >= 7
                  ? darkMode 
                    ? "bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20" 
                    : "bg-white border-cyan-300 shadow-md"
                  : darkMode
                    ? "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div>
                {/* Level Ribbon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold bg-slate-800 text-indigo-300 border border-slate-700">
                      {item.levelBadge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700">
                    {levelIcons[item.icon] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-amber-400 mb-1">
                  {item.badge}
                </div>

                <h3 className={`font-bold text-lg mb-2 ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  {item.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED RECORD</span>
                <span className="text-indigo-400 font-semibold">Active Milestone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
