import React from "react";
import { 
  GraduationCap, 
  Award, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Trophy 
} from "lucide-react";
import { profileData } from "../data/profile";

interface ProfileSnapshotProps {
  darkMode: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-400" />,
  Award: <Award className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-400" />,
  Trophy: <Trophy className="w-5 h-5 text-amber-400" />,
};

export const ProfileSnapshot: React.FC<ProfileSnapshotProps> = ({ darkMode }) => {
  return (
    <section className="py-8 border-b border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-4">
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 font-semibold">
            Candidate Snapshot • 30-Second Recruiter Summary
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {profileData.highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                darkMode
                  ? "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                  : "bg-white border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  {iconMap[item.icon] || <Cpu className="w-5 h-5 text-indigo-400" />}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  0{idx + 1}
                </span>
              </div>
              <h3 className={`font-bold text-sm sm:text-base leading-snug tracking-tight ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}>
                {item.label}
              </h3>
              <p className={`text-xs mt-0.5 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                {item.sublabel}
              </p>
              <div className="mt-2 text-[10px] font-mono text-indigo-400 truncate">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
