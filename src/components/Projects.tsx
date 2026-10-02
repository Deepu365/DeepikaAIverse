import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projectsData, Project } from "../data/projects";
import { Layers, Globe, BrainCircuit, Sparkles, Terminal, Coffee } from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
  onNavigatePatent: () => void;
}

const domainTabs = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "Web Development", label: "Web Development", icon: Globe },
  { id: "AI / ML", label: "AI / ML", icon: BrainCircuit },
  { id: "Gen AI", label: "Gen AI", icon: Sparkles },
  { id: "Python Developer", label: "Python Developer", icon: Terminal },
  { id: "Java Developer", label: "Java Developer", icon: Coffee },
];

export const Projects: React.FC<ProjectsProps> = ({ darkMode, onNavigatePatent }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedDomain === "all"
    ? projectsData
    : projectsData.filter((p) => p.domains.includes(selectedDomain as any));

  return (
    <section id="projects" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Domain-Wise Project Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects & Visual Systems
          </h2>
          <p className={`mt-3 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Click each domain tab to filter matching projects with interactive live streams, patent blueprints, and mobile UI mockups.
          </p>
        </div>

        {/* Domain Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {domainTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedDomain === tab.id;
            const count = tab.id === "all" 
              ? projectsData.length 
              : projectsData.filter(p => p.domains.includes(tab.id as any)).length;

            return (
              <button
                key={tab.id}
                onClick={() => setSelectedDomain(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105 font-semibold"
                    : darkMode
                      ? "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isSelected
                    ? "bg-indigo-800/80 text-white"
                    : darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-200 text-slate-600"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
              onOpenDetails={(p) => setActiveModalProject(p)}
              onViewPatent={onNavigatePatent}
            />
          ))}
        </div>

      </div>

      {/* Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
