import React, { useState } from "react";
import { 
  Sparkles, 
  Target, 
  Layers, 
  BrainCircuit, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  ArrowRight,
  TrendingUp,
  RotateCcw
} from "lucide-react";
import { 
  generateCareerRecommendation, 
  CareerRecommendationResult 
} from "../services/careerRecommendation";

interface CareerNavigatorProps {
  darkMode: boolean;
  onSelectResumeDomain: (domain: string) => void;
}

const suggestedRoles = [
  "AI/ML Engineer",
  "GenAI Developer",
  "Python Developer",
  "Full-Stack Developer",
  "Computer Vision Engineer",
  "Software Development Engineer (SDE)",
  "Data Scientist"
];

const availableSkillTags = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "OpenCV",
  "PyTorch",
  "Generative AI",
  "RAG",
  "FAISS",
  "Gemini API",
  "React",
  "Node.js",
  "Flask",
  "Express.js",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Pandas",
  "NumPy",
  "Git",
  "Docker / Linux"
];

export const CareerNavigator: React.FC<CareerNavigatorProps> = ({ 
  darkMode,
  onSelectResumeDomain
}) => {
  const [targetRole, setTargetRole] = useState("AI/ML Engineer");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "Python", 
    "Machine Learning", 
    "Computer Vision", 
    "React", 
    "Generative AI"
  ]);
  const [experienceLevel, setExperienceLevel] = useState<
    "Fresher / Student" | "Early Career (0-1 yr)" | "Junior (1-2 yrs)" | "Transitioning"
  >("Fresher / Student");

  const [result, setResult] = useState<CareerRecommendationResult>(() => 
    generateCareerRecommendation({
      targetRole: "AI/ML Engineer",
      currentSkills: ["Python", "Machine Learning", "Computer Vision", "React", "Generative AI"],
      experienceLevel: "Fresher / Student"
    })
  );

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleRunEvaluation = () => {
    const res = generateCareerRecommendation({
      targetRole,
      currentSkills: selectedSkills,
      experienceLevel
    });
    setResult(res);
  };

  const handleReset = () => {
    setTargetRole("AI/ML Engineer");
    setSelectedSkills(["Python", "Machine Learning", "Computer Vision", "React"]);
    setExperienceLevel("Fresher / Student");
    setResult(generateCareerRecommendation({
      targetRole: "AI/ML Engineer",
      currentSkills: ["Python", "Machine Learning", "Computer Vision", "React"],
      experienceLevel: "Fresher / Student"
    }));
  };

  return (
    <section id="career-navigator" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            AI Career Navigator
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Analyze role requirements against Deepika's competencies, identify skill alignments, surface gap roadmaps, and match the optimal resume.
          </p>
        </div>

        {/* Two-Column Diagnostic Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Form */}
          <div className={`lg:col-span-5 rounded-3xl border p-6 sm:p-7 space-y-6 ${
            darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-md"
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/50">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-200">
                  Role & Competency Query
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="text-[11px] font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Target Role Input */}
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                1. Target Role / Position
              </label>
              <input
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="e.g. AI/ML Engineer, Full-Stack Developer..."
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                }`}
              />

              {/* Suggested Pills */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {suggestedRoles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setTargetRole(role)}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                      targetRole === role
                        ? "bg-indigo-600 text-white border-indigo-500"
                        : darkMode
                          ? "bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200"
                          : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Current / Desired Skills Matrix */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-mono uppercase text-slate-400 font-semibold">
                  2. Select Desired Technical Skills
                </label>
                <span className="text-[10px] font-mono text-indigo-400">
                  {selectedSkills.length} SELECTED
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 rounded-xl bg-slate-950/40 border border-slate-800/80">
                {availableSkillTags.map((skill) => {
                  const isChecked = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                          : darkMode
                            ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                            : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {isChecked ? `✓ ${skill}` : `+ ${skill}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Experience Level Selector */}
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                3. Candidate Seniority Band
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {(["Fresher / Student", "Early Career (0-1 yr)", "Junior (1-2 yrs)", "Transitioning"] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setExperienceLevel(lvl)}
                    className={`p-2 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                      experienceLevel === lvl
                        ? "bg-indigo-600 text-white border-indigo-500 font-semibold"
                        : darkMode
                          ? "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                          : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={handleRunEvaluation}
              className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Profile Match Analysis</span>
            </button>

            <div className="text-[10px] font-mono text-slate-500 text-center">
              Powered by local deterministic recommendation engine • Zero latency • 100% resilient
            </div>
          </div>

          {/* Right Column: Structured Output Diagnostics */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`rounded-3xl border p-6 sm:p-8 transition-all ${
              darkMode ? "bg-slate-900/80 border-slate-800 shadow-xl" : "bg-white border-slate-200 shadow-md"
            }`}>
              
              {/* Output Header with Match Gauge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
                <div>
                  <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold block mb-1">
                    DIAGNOSTIC RESULT
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-100">
                    {result.domain} Track
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {result.roleTitle}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      Profile Match Score
                    </span>
                    <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                      {result.matchScore}%
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Strategic Recruiter Summary */}
              <div className="py-5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Strategic Profile Fit
                </span>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}>
                  {result.strategicAdvice}
                </p>
              </div>

              {/* Matched Skills vs Gaps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Matched Skills */}
                <div className={`p-4 rounded-xl border ${
                  darkMode ? "bg-emerald-950/20 border-emerald-900/40" : "bg-emerald-50/60 border-emerald-200"
                }`}>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>ALIGNED CORE SKILLS</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {result.relevantSkills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-900/40 border border-emerald-700/50 text-emerald-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill Gaps to Bridge */}
                <div className={`p-4 rounded-xl border ${
                  darkMode ? "bg-amber-950/20 border-amber-900/40" : "bg-amber-50/60 border-amber-200"
                }`}>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>SKILL GAPS / UPSKILL ROADMAP</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {result.skillGaps.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-900/40 border border-amber-700/50 text-amber-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Relevant Highlighted Projects */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-3">
                  Direct Proof-of-Work Projects
                </span>
                <div className="space-y-2">
                  {result.relevantProjects.map((p, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs ${
                        darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-200">{p.name}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{p.description}</div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {p.technologies.slice(0, 3).map((t, ti) => (
                          <span key={ti} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Resume Action Box */}
              <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
                darkMode ? "bg-indigo-950/30 border-indigo-800/60" : "bg-indigo-50 border-indigo-200"
              }`}>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-indigo-400" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold block">
                      RECOMMENDED RESUME FOR THIS MATCH
                    </span>
                    <div className="font-bold text-sm text-slate-100 font-mono">
                      {result.resumeFileName}
                    </div>
                  </div>
                </div>

                <a
                  href="#resume-center"
                  onClick={() => onSelectResumeDomain(result.domain)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/20"
                >
                  <span>Open in Resume Center</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
