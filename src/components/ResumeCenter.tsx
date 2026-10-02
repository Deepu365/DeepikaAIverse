import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Globe, 
  BrainCircuit, 
  Terminal, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { profileData } from "../data/profile";
import { ResumePreviewModal } from "./ResumePreviewModal";

interface ResumeCenterProps {
  darkMode: boolean;
}

const interestIcons: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-purple-400" />,
  Globe: <Globe className="w-5 h-5 text-blue-400" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
};

// Exact details for the 3 domain resumes
const domainDetails: Record<string, any> = {
  "ai-ml-genai": {
    roleTitle: "AI, Machine Learning & Generative AI Engineer",
    resumeFile: "/resumes/Deepika_Pamoti_AI_ML_GenAI_Resume.pdf",
    summary: "B.Tech CSE (AI&DS) student (CGPA: 8.3) with hands-on experience in Python, Machine Learning, Computer Vision, and Generative AI. Published patent inventor for CCTV face recognition attendance tracking, GenAI developer intern at Pixelwind, and Data Science intern at APSCHE.",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "RAG Architecture", "Computer Vision", "OpenCV", "FAISS Vector Store", "Gemini API", "Python", "Flask", "React.js"],
    projects: [
      "CCTV-Based Automated Classroom Attendance System (Patent Published)",
      "MediCare AI – RAG Medical Information Chatbot (FAISS & Gemini API)",
      "APSCHE Predictive Machine Learning Analytics"
    ],
    experience: [
      "Pixelwind Technologies – Generative AI Developer Intern (2 Months, April 2026 – June 2026)",
      "APSCHE – Data Science Intern (2 Months, May 2025 – July 2025)",
      "Lead Integration Developer – Patent Published RTSP CCTV Face Recognition"
    ],
    certifications: [
      "Google Cloud – Introduction to Generative AI",
      "Great Learning – Machine Learning",
      "AI Summit Quiz Winner",
      "HackerRank – Python (3★)"
    ]
  },
  "full-stack-web": {
    roleTitle: "Full-Stack Web & Software Developer",
    resumeFile: "/resumes/Deepika_Pamoti_Full_Stack_Resume.pdf",
    summary: "Full-Stack Software Engineer proficient in React.js, Node.js, Express.js, MongoDB, SQL, and REST APIs. National Champion at Smart India Hackathon and author of the production-deployed CivicSense platform.",
    skills: ["React.js", "Node.js", "Express.js", "REST APIs", "HTML5 & CSS3", "JavaScript (ES6+)", "MongoDB", "SQL", "Tailwind CSS", "Vercel"],
    projects: [
      "CivicSense – Citizen Services Platform (Live App)",
      "AI Mock Interview Platform (React, Node.js, Express & LLMs)",
      "Smart Tourism & Traveler Safety Platform"
    ],
    experience: [
      "Pixelwind Technologies – Backend Developer Intern (6 Months, July 2026 – Present)",
      "Smart India Hackathon Winner – National Champion (Full-Stack Prototype)"
    ],
    certifications: [
      "IBM – Front-End Developer Professional Certificate",
      "Cisco – Backend Developer",
      "Linux Foundation – Node.js Essentials"
    ]
  },
  "python-backend": {
    roleTitle: "Python & Backend Systems Engineer",
    resumeFile: "/resumes/Deepika_Pamoti_Python_Backend_Resume.pdf",
    summary: "Skilled backend developer with 6-month active internship experience at Pixelwind Technologies engineering server-side REST APIs, database models (SQL & MongoDB), and Python microservices.",
    skills: ["Python", "Java", "Flask", "Node.js", "Express.js", "SQL", "MongoDB", "REST APIs", "Postman", "OpenCV", "Git"],
    projects: [
      "Classroom Attendance System REST API (Python Flask & OpenCV)",
      "MediCare AI Backend Service (Flask, FAISS & MongoDB)",
      "Backend API Microservices at Pixelwind Technologies"
    ],
    experience: [
      "Pixelwind Technologies – Backend Developer Intern (6 Months, July 2026 – Present)",
      "APSCHE – Data Science Intern (2 Months, Python & Pandas)"
    ],
    certifications: [
      "Cisco – Backend Developer",
      "HackerRank – Python (3-Star ★★★)",
      "HackerRank – SQL",
      "Linux Foundation – Node.js Essentials"
    ]
  }
};

export const ResumeCenter: React.FC<ResumeCenterProps> = ({ darkMode }) => {
  const [selectedInterestId, setSelectedInterestId] = useState<string>("ai-ml-genai");
  const [previewResumeData, setPreviewResumeData] = useState<any | null>(null);

  const activeInterest = profileData.areasOfInterest.find(a => a.id === selectedInterestId) || profileData.areasOfInterest[0];
  const activeDetails = domainDetails[selectedInterestId] || domainDetails["ai-ml-genai"];

  // Direct and clean download without any alert banner
  const handleDownload = () => {
    const fileName = activeInterest.resumeFileName;
    const link = document.createElement("a");
    link.href = `/resumes/${fileName}`;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPreview = () => {
    setPreviewResumeData({
      roleTitle: activeDetails.roleTitle,
      resumeFile: activeInterest.resumeFileName,
      description: activeInterest.shortDesc,
      skills: activeDetails.skills,
      projects: activeDetails.projects,
      experience: activeDetails.experience,
      certifications: activeDetails.certifications,
      summary: activeDetails.summary,
      keyStrengths: [
        "Verified production internships at Pixelwind & APSCHE",
        "Published patent integration developer (CCTV Face Recognition)",
        "Winner of Smart India Hackathon (SIH)",
        "SITAM CSE (AI&DS) with 8.3 CGPA"
      ]
    });
  };

  return (
    <section id="resumes" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Targeted 3 Domain Resumes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Resume Center (3 Specialized Domains)
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Select any of the 3 primary engineering domains to view aligned skills, projects, and download the exact role-specific resume PDF.
          </p>
        </div>

        {/* Exactly 3 Selectable Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {profileData.areasOfInterest.map((interest) => {
            const isSelected = selectedInterestId === interest.id;
            return (
              <button
                key={interest.id}
                onClick={() => setSelectedInterestId(interest.id)}
                className={`p-5 rounded-3xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-xl shadow-indigo-600/30 scale-105"
                    : darkMode
                      ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850"
                      : "bg-white border-slate-200 text-slate-800 hover:border-indigo-300 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-indigo-400"
                  }`}>
                    {interestIcons[interest.icon] || <FileText className="w-5 h-5" />}
                  </div>
                  {isSelected ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse" />
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">Track</span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-base leading-tight mb-1.5">
                    {interest.name}
                  </h3>
                  <p className={`text-xs line-clamp-2 mb-3 leading-relaxed ${
                    isSelected ? "text-indigo-100" : "text-slate-400"
                  }`}>
                    {interest.shortDesc}
                  </p>
                  <span className={`text-[11px] font-mono font-bold flex items-center gap-1 ${
                    isSelected ? "text-white" : "text-indigo-400"
                  }`}>
                    <span>Download PDF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Focus Box */}
        <div className={`rounded-3xl border p-6 sm:p-8 transition-all ${
          darkMode ? "bg-slate-900/80 border-slate-800 shadow-2xl" : "bg-white border-slate-200 shadow-lg"
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                <span>ACTIVE DOMAIN RESUME</span>
                <span>•</span>
                <span className="font-bold">{activeInterest.name}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100">
                {activeDetails.roleTitle}
              </h3>
              <p className={`mt-1 text-xs sm:text-sm max-w-2xl leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}>
                {activeDetails.summary}
              </p>
            </div>

            {/* Action Buttons: Preview & Download */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleOpenPreview}
                className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Preview Tailored Resume</span>
              </button>

              <button
                onClick={handleDownload}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                  darkMode ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-100 border-slate-300 text-slate-800"
                }`}
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Details Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 text-xs">
            
            {/* Left: Aligned Skills & Target Role Highlights */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <span className="font-mono text-xs uppercase text-indigo-400 font-bold block mb-2">
                  Tailored Technical Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDetails.skills.map((s: string, idx: number) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-lg border font-mono ${
                        darkMode ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs uppercase text-emerald-400 font-bold block mb-2">
                  Relevant Experience Highlights
                </span>
                <div className="space-y-1.5">
                  {activeDetails.experience.map((exp: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Featured Projects & Verified Target File */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <span className="font-mono text-xs uppercase text-cyan-400 font-bold block mb-2">
                  Highlighted Domain Projects
                </span>
                <div className="space-y-1.5">
                  {activeDetails.projects.map((proj: string, idx: number) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between ${
                        darkMode ? "bg-slate-950/60 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <span className="font-semibold">{proj}</span>
                      <span className="text-[10px] font-mono text-indigo-400">Featured</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs uppercase text-amber-400 font-bold block mb-1">
                  Target PDF File
                </span>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                  <span className="text-slate-400 truncate">{activeInterest.resumeFileName}</span>
                  <span className="text-emerald-400 shrink-0 ml-2">READY TO DOWNLOAD</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>SITAM Vizianagaram • CGPA: 8.3 • Phone: 6300496052</span>
            <span>ATS Single-Page PDF Format</span>
          </div>
        </div>

      </div>

      {/* Tailored Resume ATS Preview Modal */}
      <ResumePreviewModal
        resume={previewResumeData}
        onClose={() => setPreviewResumeData(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
