import React, { useState } from "react";
import { 
  Code2, 
  Globe, 
  Server, 
  BrainCircuit, 
  Database, 
  Terminal, 
  FileSpreadsheet,
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Cpu,
  Coffee,
  Palette,
  Send,
  Cloud,
  Presentation
} from "lucide-react";
import { skillCategories, SkillCategory } from "../data/skills";

interface SkillsProps {
  darkMode: boolean;
}

const iconRegistry: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
  Coffee: <Coffee className="w-5 h-5 text-orange-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  FileCode: <Code2 className="w-5 h-5 text-yellow-400" />,
  Layout: <Layers className="w-5 h-5 text-cyan-400" />,
  Globe: <Globe className="w-5 h-5 text-blue-400" />,
  Palette: <Palette className="w-5 h-5 text-pink-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  Network: <Globe className="w-5 h-5 text-teal-400" />,
  Send: <Send className="w-5 h-5 text-amber-400" />,
  Brain: <BrainCircuit className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  Camera: <Cpu className="w-5 h-5 text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  Table: <Database className="w-5 h-5 text-blue-400" />,
  GitBranch: <Code2 className="w-5 h-5 text-orange-400" />,
  Code: <Code2 className="w-5 h-5 text-indigo-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  FileText: <FileSpreadsheet className="w-5 h-5 text-blue-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
  Presentation: <Presentation className="w-5 h-5 text-orange-400" />,
};

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(skillCategories[0]);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [playbackOutput, setPlaybackOutput] = useState(skillCategories[0].demoSnippet.output);

  const handleSelectCategory = (cat: SkillCategory) => {
    setSelectedCategory(cat);
    setIsPlayingDemo(true);
    setPlaybackOutput("Connecting execution runtime...");
    setTimeout(() => {
      setPlaybackOutput(cat.demoSnippet.output);
      setIsPlayingDemo(false);
    }, 600);
  };

  const handleReplay = () => {
    setIsPlayingDemo(true);
    setPlaybackOutput("Re-executing pipeline benchmark...");
    setTimeout(() => {
      setPlaybackOutput(selectedCategory.demoSnippet.output);
      setIsPlayingDemo(false);
    }, 500);
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Categorized Skills & Runtime Demos
          </h2>
          <p className={`mt-3 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Click any category to open interactive technology icons and view live simulated execution streams.
          </p>
        </div>

        {/* Category Tabs / Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30 scale-105"
                    : darkMode
                      ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850"
                      : "bg-white border-slate-200 text-slate-800 hover:border-indigo-300 shadow-sm"
                }`}
              >
                <div className={`p-2 rounded-xl ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-800/60 text-indigo-400"
                }`}>
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs leading-tight">
                  {cat.shortLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display & Interactive Video/Terminal Playback */}
        <div className={`rounded-3xl border p-6 sm:p-8 transition-all ${
          darkMode ? "bg-slate-900/80 border-slate-800 shadow-2xl" : "bg-white border-slate-200 shadow-lg"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Skill Cards with Rich Icons */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-slate-800/60 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold uppercase">
                    Active Stack
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedCategory.skills.length} Verified Technologies
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-100">
                  {selectedCategory.name}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}>
                  {selectedCategory.description}
                </p>
              </div>

              {/* Skills Icons Grid with Click & Hover feedback */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCategory.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border transition-all hover:scale-[1.02] flex items-start gap-3 ${
                      darkMode 
                        ? "bg-slate-950/70 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900" 
                        : "bg-slate-50 border-slate-200 hover:border-indigo-300 shadow-sm"
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                      {iconRegistry[skill.icon] || <Code2 className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-bold text-xs text-slate-100 truncate">
                          {skill.name}
                        </h4>
                        {skill.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono block">
                        Proficiency: {skill.proficiency}
                      </span>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Simulated Video / Execution Terminal */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>RUNTIME SIMULATION BENCHMARK</span>
                </span>
                <button
                  onClick={handleReplay}
                  className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Re-run</span>
                </button>
              </div>

              {/* Code Sandbox Mockup */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl font-mono text-xs">
                {/* Editor Header */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] text-slate-400 ml-2">
                      snippet.{selectedCategory.demoSnippet.language}
                    </span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-indigo-400 font-bold">
                    VERIFIED CODE
                  </span>
                </div>

                {/* Code body */}
                <pre className="p-4 text-[11px] text-slate-300 overflow-x-auto leading-relaxed border-b border-slate-800/60 bg-slate-950/70">
                  <code>{selectedCategory.demoSnippet.code}</code>
                </pre>

                {/* Simulated Output Terminal */}
                <div className="p-4 bg-slate-950">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5">
                    <span>TERMINAL OUTPUT</span>
                    <span className={isPlayingDemo ? "text-amber-400 animate-pulse" : "text-emerald-400"}>
                      {isPlayingDemo ? "EXECUTING..." : "SUCCESS (0ms)"}
                    </span>
                  </div>
                  <pre className="text-[11px] font-mono text-emerald-400 whitespace-pre-line leading-relaxed">
                    {playbackOutput}
                  </pre>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-500 text-center">
                Hands-on code execution patterns from Deepika's GitHub repositories & internships
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
