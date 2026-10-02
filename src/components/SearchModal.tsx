import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  X, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Award, 
  Briefcase, 
  Trophy,
  ExternalLink
} from "lucide-react";
import { projectsData } from "../data/projects";
import { skillCategories } from "../data/skills";
import { certificationsData } from "../data/certifications";
import { experienceData } from "../data/experience";
import { hackathonsData } from "../data/hackathons";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onNavigateSection: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onNavigateSection
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    // Search Projects
    const matchedProjects = projectsData.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q)) ||
      p.categoryBadge.toLowerCase().includes(q) ||
      p.domains.some(d => d.toLowerCase().includes(q))
    );

    // Search Skills
    const matchedSkills: { name: string; category: string }[] = [];
    for (const cat of skillCategories) {
      for (const s of cat.skills) {
        if (s.name.toLowerCase().includes(q) || cat.name.toLowerCase().includes(q)) {
          matchedSkills.push({ name: s.name, category: cat.name });
        }
      }
    }

    // Search Certifications
    const matchedCerts = certificationsData.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.issuer.toLowerCase().includes(q) ||
      c.keyTopics.some((t: string) => t.toLowerCase().includes(q)) ||
      c.skillsAcquired.some((s: string) => s.toLowerCase().includes(q))
    );

    // Search Hackathons
    const matchedHackathons = hackathonsData.filter(h => 
      h.name.toLowerCase().includes(q) ||
      h.projectTitle.toLowerCase().includes(q) ||
      h.problemStatement.toLowerCase().includes(q) ||
      h.technologies.some(t => t.toLowerCase().includes(q))
    );

    // Search Experience
    const matchedExperience = experienceData.filter(e => 
      e.role.toLowerCase().includes(q) ||
      e.company.toLowerCase().includes(q) ||
      e.technologiesWorkedOn.some(t => t.toLowerCase().includes(q))
    );

    const totalMatches = 
      matchedProjects.length + 
      matchedSkills.length + 
      matchedCerts.length + 
      matchedHackathons.length + 
      matchedExperience.length;

    return {
      totalMatches,
      projects: matchedProjects,
      skills: matchedSkills,
      certifications: matchedCerts,
      hackathons: matchedHackathons,
      experience: matchedExperience
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl z-10 overflow-hidden ${
        darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-300 text-slate-900"
      }`}>
        
        {/* Search Input Bar */}
        <div className={`p-4 border-b flex items-center gap-3 ${
          darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
        }`}>
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, certifications, experience (e.g. Python, Vision, RAG)..."
            autoFocus
            className={`w-full bg-transparent text-sm sm:text-base font-medium focus:outline-none placeholder:text-slate-500 ${
              darkMode ? "text-slate-100" : "text-slate-900"
            }`}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-slate-500 hover:text-slate-300 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg border text-slate-400 hover:text-white ${
              darkMode ? "bg-slate-800 border-slate-700" : "bg-slate-200 border-slate-300"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="py-8 text-center text-xs text-slate-400">
              <span className="font-mono block mb-1">QUICK SHORTCUTS:</span>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                {["Python", "Computer Vision", "RAG", "React", "Patent", "Hackathon"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchResults && searchResults.totalMatches === 0 && (
            <div className="py-8 text-center text-xs text-slate-400">
              No direct matches found for "{query}". Try searching for Python, React, Vision, RAG, or Patent.
            </div>
          )}

          {searchResults && searchResults.totalMatches > 0 && (
            <div className="space-y-4">
              
              {/* Projects Result */}
              {searchResults.projects.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Projects ({searchResults.projects.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.projects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onNavigateSection("projects");
                          onClose();
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                          darkMode ? "bg-slate-950/60 border-slate-800 hover:bg-slate-800" : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-200">{p.name}</div>
                          <div className="text-[11px] text-slate-400 truncate">{p.tagline}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Result */}
              {searchResults.skills.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Skills & Technologies ({searchResults.skills.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {searchResults.skills.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateSection("skills");
                          onClose();
                        }}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/40 border border-cyan-800/60 text-cyan-300 hover:bg-cyan-900/50 cursor-pointer"
                      >
                        {s.name} <span className="text-[10px] text-slate-400">({s.category.split(" ")[0]})</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hackathons Result */}
              {searchResults.hackathons.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono uppercase text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Hackathons ({searchResults.hackathons.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.hackathons.map((h) => (
                      <button
                        key={h.id}
                        onClick={() => {
                          onNavigateSection("hackathons");
                          onClose();
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                          darkMode ? "bg-slate-950/60 border-slate-800 hover:bg-slate-800" : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-200">{h.name}</div>
                          <div className="text-[11px] text-amber-400">{h.badge} • {h.projectTitle}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications Result */}
              {searchResults.certifications.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certifications ({searchResults.certifications.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.certifications.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onNavigateSection("certifications");
                          onClose();
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                          darkMode ? "bg-slate-950/60 border-slate-800 hover:bg-slate-800" : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-200">{c.name}</div>
                          <div className="text-[11px] text-slate-400">{c.issuer}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Result */}
              {searchResults.experience.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono uppercase text-purple-400 font-bold mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Experience ({searchResults.experience.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.experience.map((e) => (
                      <button
                        key={e.id}
                        onClick={() => {
                          onNavigateSection("experience");
                          onClose();
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                          darkMode ? "bg-slate-950/60 border-slate-800 hover:bg-slate-800" : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-200">{e.role} at {e.company}</div>
                          <div className="text-[11px] text-slate-400">{e.duration}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className={`px-4 py-2.5 border-t text-[11px] font-mono flex items-center justify-between ${
          darkMode ? "bg-slate-950 border-slate-800 text-slate-500" : "bg-slate-100 border-slate-200 text-slate-600"
        }`}>
          <span>Press ESC to exit</span>
          <span>Client-side instant index</span>
        </div>

      </div>
    </div>
  );
};
