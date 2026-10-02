import React from "react";
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Award, 
  Heart,
  Code2,
  RotateCcw,
  Sparkles
} from "lucide-react";
import { profileData } from "../data/profile";

interface FooterProps {
  darkMode: boolean;
  onReturnToGate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onReturnToGate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-900 text-slate-300 border-slate-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center font-bold text-sm text-cyan-400 font-mono">
                  DP
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-slate-100 block">
                  {profileData.name}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {profileData.degree} (2023–2027)
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {profileData.tagline} Focused on Computer Vision, Generative AI, RAG architectures, and responsive full-stack software development.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-1">
              <span>SITAM Vizianagaram</span>
              <span>•</span>
              <span className="text-emerald-400">CGPA: 8.5</span>
              <span>•</span>
              <span className="text-cyan-400">Patent Published</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-mono uppercase font-bold text-slate-200 mb-2 tracking-wider">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Patent", href: "#patent" },
                { name: "Idea Proposal", href: "#innovation" },
                { name: "Hackathons", href: "#hackathons" },
                { name: "Experience", href: "#experience" },
                { name: "Education", href: "#education" },
                { name: "Resume", href: "#resume-center" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-indigo-400 transition-colors py-0.5"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono uppercase font-bold text-slate-200 mb-2 tracking-wider text-xs">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">{profileData.contact.email}</span>
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                <span>github.com/Deepu365</span>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>linkedin.com/in/deepika-pamoti</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="text-slate-500">
            © {new Date().getFullYear()} Deepika Pamoti. All technical artifacts, code, and patents accurately attributed.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onReturnToGate && (
              <button
                onClick={onReturnToGate}
                className="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 hover:text-white border border-indigo-500/30 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105"
                title="Return to interactive AI avatar screen"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Welcome Screen</span>
              </button>
            )}

            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              MNC Recruiter Portfolio • Deployed
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer flex items-center gap-1 text-xs"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
