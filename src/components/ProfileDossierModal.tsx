import React from "react";
import { 
  X, 
  Sparkles, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  Briefcase,
  ArrowRight,
  Download
} from "lucide-react";
import { profileData } from "../data/profile";

interface ProfileDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onExplorePortfolio: () => void;
  onOpenResumeCenter: () => void;
}

export const ProfileDossierModal: React.FC<ProfileDossierModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onExplorePortfolio,
  onOpenResumeCenter
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 transition-all ${
        darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-900"
      }`}>
        
        {/* Header Ribbon */}
        <div className="relative h-28 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 p-6 flex items-start justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/20 text-white backdrop-blur-md uppercase tracking-wider">
            Verified Candidate Dossier
          </span>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Avatar & Identity */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 mb-4">
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[3px] shadow-xl">
              <div className={`w-full h-full rounded-[21px] ${darkMode ? "bg-slate-950" : "bg-white"} flex items-center justify-center font-extrabold text-2xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-mono`}>
                DP
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => { onClose(); onOpenResumeCenter(); }}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => { onClose(); onExplorePortfolio(); }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 ${
                  darkMode ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-slate-100 border-slate-300 text-slate-800"
                }`}
              >
                <span>Enter Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* Name & Academic Credentials */}
          <div className="space-y-1 mb-5">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-100">
              {profileData.name}
            </h2>
            <div className="text-xs font-semibold text-indigo-400 font-mono">
              {profileData.roleTitle}
            </div>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 pt-1">
              <span>{profileData.degree}</span>
              <span>•</span>
              <span>{profileData.institution}</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">CGPA: {profileData.cgpa}</span>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-6">
            <a 
              href={`mailto:${profileData.contact.email}`}
              className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="truncate">{profileData.contact.email}</span>
            </a>

            <a 
              href={`tel:${profileData.phone}`}
              className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 {profileData.phone}</span>
            </a>

            <a 
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <Github className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">github.com/Deepu365</span>
            </a>

            <a 
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="truncate">linkedin.com/in/deepika-pamoti</span>
            </a>
          </div>

          {/* Career Objective Box */}
          <div className={`p-4 rounded-2xl border mb-6 ${
            darkMode ? "bg-indigo-950/30 border-indigo-800/40" : "bg-indigo-50/70 border-indigo-200"
          }`}>
            <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold block mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Objective</span>
            </span>
            <p className={`text-xs sm:text-sm leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}>
              {profileData.careerObjective}
            </p>
          </div>

          {/* Quick Key Achievements Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className={`p-3 rounded-xl border ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <span className="text-amber-400 font-bold font-mono block text-sm">SIH Winner</span>
              <span className="text-[10px] text-slate-400">National Champion</span>
            </div>
            <div className={`p-3 rounded-xl border ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <span className="text-cyan-400 font-bold font-mono block text-sm">Patent</span>
              <span className="text-[10px] text-slate-400">CCTV Face Rec</span>
            </div>
            <div className={`p-3 rounded-xl border ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <span className="text-emerald-400 font-bold font-mono block text-sm">3 Internships</span>
              <span className="text-[10px] text-slate-400">Pixelwind & APSCHE</span>
            </div>
            <div className={`p-3 rounded-xl border ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <span className="text-purple-400 font-bold font-mono block text-sm">NCC B & C</span>
              <span className="text-[10px] text-slate-400">JNTU-GV Parade</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
