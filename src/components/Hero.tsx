import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Mail, 
  Sparkles, 
  Layers, 
  Cpu, 
  Terminal,
  ShieldCheck,
  ChevronDown,
  Globe,
  Linkedin,
  Phone,
  Target,
  Award,
  BookOpen
} from "lucide-react";
import { profileData } from "../data/profile";
import { HolographicAICore } from "./HolographicAICore";

interface HeroProps {
  darkMode: boolean;
  onOpenCareerObjective: () => void;
  onExploreProjects: () => void;
  onExploreResumes: () => void;
  onContactClick: () => void;
  onProfileClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  darkMode,
  onOpenCareerObjective,
  onExploreProjects,
  onExploreResumes,
  onContactClick,
  onProfileClick
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for rotating roles
  useEffect(() => {
    const currentRole = profileData.rotatingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % profileData.rotatingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="relative pt-6 pb-16 md:pt-10 md:pb-20 overflow-hidden border-b border-slate-800/40"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Animated Roles & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top Status & Recruiter Gate */}
            <div className="flex flex-wrap items-center gap-2">
              <button 
                onClick={onProfileClick}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium transition-all cursor-pointer ${
                  darkMode 
                    ? "bg-slate-900/90 border-indigo-500/30 text-indigo-300 hover:border-indigo-400" 
                    : "bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100"
                }`}
                title="Click to view candidate profile dossier"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Deepika Pamoti • SITAM (8.5 CGPA)</span>
                <span className="text-[10px] font-mono underline text-indigo-400">View Dossier →</span>
              </button>

              <button
                onClick={onOpenCareerObjective}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:scale-105 transition-all cursor-pointer"
                title="Click to read Career Objective"
              >
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>Career Objective</span>
              </button>
            </div>

            {/* Main Name & Animated Roles */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight">
                <span className="block text-slate-100">{profileData.name}</span>
              </h1>
              
              {/* Animated Rotating Role Line */}
              <div className="h-10 flex items-center">
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono">
                  {displayedText}
                  <span className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Concise Bio */}
            <p className={`text-xs sm:text-sm leading-relaxed max-w-xl ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}>
              B.Tech Artificial Intelligence & Data Science student (CGPA: 8.3) with 3 verified internships in Backend & GenAI at Pixelwind and Data Science at APSCHE. Published patent inventor and Smart India Hackathon Winner.
            </p>

            {/* Institutional Mini Facts */}
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                SITAM Vizianagaram
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                CGPA: 8.3
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Patent Published
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                SIH Winner
              </span>
            </div>

            {/* CTAs Row */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onExploreProjects}
                className="px-4 py-2 rounded-xl font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onExploreResumes}
                className={`px-4 py-2 rounded-xl font-semibold text-xs border flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                  darkMode ? "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800" : "bg-white border-slate-300 text-slate-800"
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Domain Resumes</span>
              </button>

              <button
                onClick={onContactClick}
                className={`px-3.5 py-2 rounded-xl font-medium text-xs border flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                  darkMode ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white" : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Contact</span>
              </button>
            </div>

            {/* Compact Social Media Links */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">Connect:</span>
              
              <a
                href={`mailto:${profileData.contact.email}`}
                className={`p-1.5 rounded-lg border text-slate-400 hover:text-white transition-all ${
                  darkMode ? "bg-slate-900 border-slate-800 hover:border-indigo-500" : "bg-slate-100 border-slate-200"
                }`}
                title={`Email: ${profileData.contact.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-lg border text-slate-400 hover:text-white transition-all ${
                  darkMode ? "bg-slate-900 border-slate-800 hover:border-slate-700" : "bg-slate-100 border-slate-200"
                }`}
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-lg border text-slate-400 hover:text-blue-400 transition-all ${
                  darkMode ? "bg-slate-900 border-slate-800 hover:border-blue-500" : "bg-slate-100 border-slate-200"
                }`}
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <a
                href={profileData.contact.vercel}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-lg border text-slate-400 hover:text-cyan-400 transition-all ${
                  darkMode ? "bg-slate-900 border-slate-800 hover:border-cyan-500" : "bg-slate-100 border-slate-200"
                }`}
                title="Live Deployed Application"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className={`p-1.5 rounded-lg border text-slate-400 hover:text-emerald-400 transition-all ${
                  darkMode ? "bg-slate-900 border-slate-800 hover:border-emerald-500" : "bg-slate-100 border-slate-200"
                }`}
                title={`Call: +91 ${profileData.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Candidate Visual Card */}
          <div className="lg:col-span-5">
            <div 
              onClick={onProfileClick}
              className={`relative rounded-3xl p-5 sm:p-6 border shadow-2xl transition-all cursor-pointer group hover:scale-[1.01] ${
                darkMode 
                  ? "bg-gradient-to-b from-slate-900/90 to-slate-950 border-slate-800 hover:border-indigo-500/50 shadow-black/40" 
                  : "bg-white border-slate-200 shadow-slate-300/40 hover:border-indigo-300"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/40 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>deepika_pamoti.ai</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ACTIVE PROFILE
                </span>
              </div>

              {/* Avatar + Highlights Cluster */}
              <div className="py-2 space-y-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <HolographicAICore
                    size="sm"
                    onClick={onProfileClick}
                    interactive={true}
                    showStatusBadges={false}
                  />

                  <div className="text-center sm:text-left pt-1">
                    <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {profileData.name}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-400 font-bold">
                      B.Tech AI & Data Science
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      SITAM Vizianagaram • CGPA: 8.5
                    </p>
                    <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono">
                      <span>Click to view Candidate Dossier →</span>
                    </div>
                  </div>
                </div>

                {/* 3 Active Internship Badges */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-slate-500">
                    Verified Industry Internships
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-[11px] font-mono">
                    <div className={`px-2.5 py-1 rounded-lg border flex items-center justify-between ${
                      darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}>
                      <span className="truncate">Pixelwind • Backend Developer Intern</span>
                      <span className="text-[10px] text-emerald-400 shrink-0">6 Mos (Active)</span>
                    </div>

                    <div className={`px-2.5 py-1 rounded-lg border flex items-center justify-between ${
                      darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}>
                      <span className="truncate">Pixelwind • GenAI Developer Intern</span>
                      <span className="text-[10px] text-indigo-400 shrink-0">2 Mos</span>
                    </div>

                    <div className={`px-2.5 py-1 rounded-lg border flex items-center justify-between ${
                      darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}>
                      <span className="truncate">APSCHE • Data Science Intern</span>
                      <span className="text-[10px] text-cyan-400 shrink-0">2 Mos</span>
                    </div>
                  </div>
                </div>

                {/* Code verification snippet */}
                <div className={`p-3 rounded-xl border font-mono text-[10px] space-y-1 ${
                  darkMode ? "bg-slate-950/90 border-slate-800 text-slate-400" : "bg-slate-900 text-slate-300"
                }`}>
                  <div className="text-emerald-400">// CANDIDATE VERIFICATION MATRIX</div>
                  <div>const candidate = &#123;</div>
                  <div className="pl-3 text-slate-300">
                    patent: <span className="text-cyan-400">"RTSP CCTV Attendance"</span>,
                  </div>
                  <div className="pl-3 text-slate-300">
                    hackathon: <span className="text-amber-400">"Smart India Hackathon Winner"</span>,
                  </div>
                  <div className="pl-3 text-slate-300">
                    stack: <span className="text-indigo-300">["React", "Node", "Python", "Java", "SQL"]</span>
                  </div>
                  <div>&#125;;</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
