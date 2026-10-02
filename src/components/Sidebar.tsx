import React, { useState } from "react";
import { 
  Home, 
  User, 
  Cpu, 
  Layers, 
  Award, 
  Lightbulb, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  BookCheck, 
  FileText, 
  Mail, 
  Sun, 
  Moon, 
  Search, 
  LogIn, 
  UserPlus, 
  Github, 
  Linkedin, 
  Globe, 
  Phone,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  RotateCcw
} from "lucide-react";
import { profileData } from "../data/profile";

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
  onOpenAuth: (mode: "login" | "register") => void;
  onProfileClick: () => void;
  onOpenWelcomeGate?: () => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "patent", label: "Patent", icon: Award, badge: "IP" },
  { id: "innovation", label: "Idea Proposal", icon: Lightbulb },
  { id: "hackathons", label: "Hackathons", icon: Trophy, badge: "SIH" },
  { id: "experience", label: "Experience", icon: Briefcase, count: "3" },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: BookCheck },
  { id: "achievements", label: "Achievements", icon: Sparkles },
  { id: "resumes", label: "Resumes", icon: FileText, highlight: true },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  darkMode,
  setDarkMode,
  onOpenSearch,
  onOpenAuth,
  onProfileClick,
  onOpenWelcomeGate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-40 h-16 px-4 flex items-center justify-between border-b backdrop-blur-md transition-colors ${
        darkMode ? "bg-slate-950/90 border-slate-800 text-slate-100" : "bg-white/90 border-slate-200 text-slate-900"
      }`}>
        <button 
          onClick={onProfileClick}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1.5px] cursor-pointer">
            <div className={`w-full h-full rounded-full ${darkMode ? "bg-slate-950" : "bg-white"} flex items-center justify-center font-bold text-xs text-indigo-400 font-mono`}>
              DP
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
          </div>
          <div>
            <span className="font-bold text-xs block leading-tight">Deepika Pamoti</span>
            <span className="text-[10px] text-slate-400 font-mono">B.Tech AI&DS</span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className={`p-2 rounded-lg border ${
              darkMode ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
            }`}
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-indigo-400" />
          </button>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg border ${
              darkMode ? "bg-slate-900 border-slate-800 text-amber-400" : "bg-slate-100 border-slate-200 text-slate-700"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              darkMode ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-slate-100 border-slate-200 text-slate-800"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Desktop Fixed Left Sidebar */}
      <aside 
        className={`hidden lg:flex fixed top-0 left-0 bottom-0 z-40 w-64 flex-col justify-between border-r backdrop-blur-xl transition-all duration-300 ${
          darkMode 
            ? "bg-slate-950/95 border-slate-800/80 text-slate-200" 
            : "bg-white/95 border-slate-200 text-slate-800 shadow-xl shadow-slate-200/50"
        }`}
      >
        {/* Top: Profile Identity Card with Clickable Avatar */}
        <div className="p-5 border-b border-slate-800/60">
          <div 
            onClick={onProfileClick}
            className={`p-3 rounded-2xl border transition-all cursor-pointer group hover:scale-[1.02] ${
              darkMode 
                ? "bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900" 
                : "bg-slate-50 border-slate-200 hover:border-indigo-300 shadow-sm"
            }`}
            title="Click to view Deepika's Full Profile Dossier"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-md shadow-indigo-500/20 group-hover:rotate-3 transition-transform">
                  <div className={`w-full h-full rounded-[14px] ${darkMode ? "bg-slate-950" : "bg-white"} flex items-center justify-center font-bold text-sm bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-mono`}>
                    DP
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm truncate text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {profileData.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 block truncate">
                  AI & Data Science • 8.3 CGPA
                </span>
                <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                  Available for Roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Scrollable Left Nav Items with Animations */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 text-xs">
          {onOpenWelcomeGate && (
            <button
              onClick={onOpenWelcomeGate}
              className={`w-full px-3 py-2 mb-2 rounded-xl flex items-center justify-between text-left font-medium transition-all group border ${
                darkMode ? "bg-indigo-950/30 border-indigo-800/40 text-indigo-300 hover:bg-indigo-900/40" : "bg-indigo-50 border-indigo-200 text-indigo-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-bold">Welcome Gate</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-200">
                AI GATE
              </span>
            </button>
          )}

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full px-3 py-2 rounded-xl flex items-center justify-between text-left font-medium transition-all group relative cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/25 font-semibold"
                    : darkMode
                      ? "text-slate-400 hover:text-slate-100 hover:bg-slate-900/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive ? "text-white" : "text-indigo-400"
                  }`} />
                  <span className="text-xs">{item.label}</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.badge && (
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {item.count && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                    }`}>
                      {item.count}
                    </span>
                  )}
                  {isActive && (
                    <ChevronRight className="w-3.5 h-3.5 text-white animate-pulse" />
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom: Socials Dock & Theme Switch */}
        <div className="p-3 border-t border-slate-800/60 space-y-2">
          {/* Social Media Link Icons */}
          <div className="grid grid-cols-4 gap-1 text-slate-400">
            <a
              href={`mailto:${profileData.contact.email}`}
              className={`p-2 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                darkMode ? "bg-slate-900 border-slate-800 hover:text-white hover:border-indigo-500" : "bg-slate-100 border-slate-200 hover:text-slate-900"
              }`}
              title={`Email: ${profileData.contact.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                darkMode ? "bg-slate-900 border-slate-800 hover:text-white hover:border-slate-700" : "bg-slate-100 border-slate-200 hover:text-slate-900"
              }`}
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                darkMode ? "bg-slate-900 border-slate-800 hover:text-white hover:border-blue-500" : "bg-slate-100 border-slate-200 hover:text-blue-600"
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            </a>

            <a
              href={profileData.contact.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border flex items-center justify-center transition-all hover:scale-105 ${
                darkMode ? "bg-slate-900 border-slate-800 hover:text-white hover:border-cyan-500" : "bg-slate-100 border-slate-200 hover:text-slate-900"
              }`}
              title="Live Vercel Deployment"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>

          {/* AI Welcome Gate Button */}
          {onOpenWelcomeGate && (
            <button
              onClick={onOpenWelcomeGate}
              className="w-full py-2 px-3 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/30 border border-indigo-500/25 text-indigo-300 font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01]"
              title="Return to interactive AI avatar screen"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI Welcome Screen</span>
            </button>
          )}

          {/* Quick Utility Strip */}
          <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-slate-500">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1 hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3" />
              <span>Search (⌘K)</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded hover:text-amber-400 transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`w-72 h-full flex flex-col justify-between border-r shadow-2xl ${
            darkMode ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800"
          }`}>
            <div className="p-4 border-b flex items-center justify-between border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px]">
                  <div className={`w-full h-full rounded-[10px] ${darkMode ? "bg-slate-950" : "bg-white"} flex items-center justify-center font-bold text-xs text-indigo-400 font-mono`}>
                    DP
                  </div>
                </div>
                <div>
                  <span className="font-bold text-xs block">{profileData.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">B.Tech AI&DS</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg border border-slate-800 text-slate-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1 text-xs">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between font-medium ${
                      isActive 
                        ? "bg-indigo-600 text-white font-semibold" 
                        : darkMode ? "text-slate-400 hover:bg-slate-900" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-indigo-400" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-4 border-t border-slate-800/80 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onProfileClick(); }}
                className="w-full py-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Candidate Dossier</span>
              </button>

              {onOpenWelcomeGate && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenWelcomeGate(); }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AI Welcome Screen</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
