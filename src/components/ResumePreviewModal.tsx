import React, { useState } from "react";
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Award,
  AlertCircle
} from "lucide-react";
import { DomainResume } from "../data/resumes";
import { profileData } from "../data/profile";

interface ResumePreviewModalProps {
  resume: DomainResume | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({ 
  resume, 
  onClose, 
  darkMode 
}) => {
  if (!resume) return null;

  const handleDownload = () => {
    // Direct silent download of configured PDF file
    const link = document.createElement("a");
    link.href = resume.resumeFile;
    link.download = resume.resumeFile.split("/").pop() || "Deepika_Pamoti_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl z-10 overflow-hidden ${
        darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-300 text-slate-900"
      }`}>
        
        {/* Modal Top Control Bar */}
        <div className={`px-6 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
          darkMode ? "bg-slate-950/90 border-slate-800" : "bg-slate-50 border-slate-200"
        }`}>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="text-xs font-mono font-bold text-indigo-400">
                TAILORED RECRUITER RESUME PREVIEW
              </div>
              <div className="text-sm font-bold text-slate-200">
                {resume.roleTitle}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                darkMode ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white" : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
              title="Print formatted ATS document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors border ${
                darkMode ? "bg-slate-800 border-slate-700 text-slate-400 hover:text-white" : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ATS-Formatted Resume Document Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Header */}
            <div className="text-center border-b pb-4 border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                {profileData.name}
              </h1>
              <div className="text-sm font-semibold text-indigo-700 mt-1 font-mono">
                {resume.roleTitle}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-500" />
                  {profileData.contact.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Github className="w-3 h-3 text-slate-500" />
                  github.com/Deepu365
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {profileData.location}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs leading-relaxed text-slate-700">
                {resume.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-slate-900">{profileData.degree}</strong>
                  <div className="text-slate-700">{profileData.institution}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-indigo-700">CGPA: 8.5 / 10</div>
                  <div className="text-slate-600">{profileData.duration}</div>
                </div>
              </div>
            </div>

            {/* Domain-Tailored Technical Skills */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Technical Stack & Domain Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {resume.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-800 text-[11px] font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Relevant Projects */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Highlighted Projects
              </h2>
              <div className="space-y-3 pt-1">
                {resume.projects.map((proj, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>• {proj}</span>
                      <span className="text-[10px] font-mono text-indigo-600 uppercase">Core Artifact</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work & Innovation Experience */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Professional Experience & Leadership
              </h2>
              <div className="space-y-2 text-xs text-slate-700">
                {resume.experience.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Honors */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Industry Certifications & Honors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 pt-1">
                {resume.certifications.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 font-semibold text-indigo-800">
                  <Award className="w-3 h-3 text-amber-600 shrink-0" />
                  <span>Smart India Hackathon Winner</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-cyan-800">
                  <Award className="w-3 h-3 text-cyan-600 shrink-0" />
                  <span>Patent Published: CCTV Face Attendance</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-3 border-t text-xs flex items-center justify-between ${
          darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
        }`}>
          <span className="font-mono text-[11px]">
            Target File: {resume.resumeFile}
          </span>
          <span className="text-[11px]">
            Deepika Pamoti • SITAM Vizianagaram
          </span>
        </div>

      </div>
    </div>
  );
};
