import React, { useState } from "react";
import { 
  BookCheck, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Layout, 
  Server, 
  Terminal, 
  Code2, 
  Database, 
  Sparkles, 
  BrainCircuit, 
  Cpu 
} from "lucide-react";
import { certificationsData, Certification } from "../data/certifications";

interface CertificationsProps {
  darkMode: boolean;
}

const certIcons: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-blue-400" />,
  Server: <Server className="w-6 h-6 text-emerald-400" />,
  Terminal: <Terminal className="w-6 h-6 text-teal-400" />,
  Code2: <Code2 className="w-6 h-6 text-amber-400" />,
  Database: <Database className="w-6 h-6 text-purple-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-rose-400" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
  Cpu: <Cpu className="w-6 h-6 text-sky-400" />,
  Award: <Award className="w-6 h-6 text-red-400" />,
};

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <BookCheck className="w-3.5 h-3.5" />
            <span>Interactive Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Professional Certifications
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Click any certification card to open detailed verification curriculum, skills acquired, and industry relevance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`p-5 rounded-3xl border transition-all hover:scale-[1.02] flex flex-col justify-between cursor-pointer group ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {certIcons[cert.iconName] || <Award className="w-6 h-6 text-indigo-400" />}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                    {cert.verifiedStatus}
                  </span>
                </div>

                <h3 className={`font-bold text-base leading-snug mb-1 group-hover:text-indigo-400 transition-colors ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}>
                  {cert.name}
                </h3>

                <div className="text-xs font-semibold text-indigo-400 font-mono mb-3">
                  {cert.issuer}
                </div>

                <p className={`text-xs leading-relaxed line-clamp-2 mb-3 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {cert.credentialSummary}
                </p>

                {/* Skills tags preview */}
                <div className="flex flex-wrap gap-1">
                  {cert.skillsAcquired.slice(0, 3).map((sk, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {sk}
                    </span>
                  ))}
                  {cert.skillsAcquired.length > 3 && (
                    <span className="text-[10px] font-mono text-slate-500 py-0.5">
                      +{cert.skillsAcquired.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-indigo-400">
                <span>View Full Curriculum</span>
                <span>Click Card →</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certification Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setSelectedCert(null)} aria-hidden="true" />

          <div className={`relative w-full max-w-lg rounded-3xl border shadow-2xl z-10 overflow-hidden ${
            darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-indigo-400 border border-slate-700">
                  {certIcons[selectedCert.iconName] || <Award className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-100 leading-tight">
                    {selectedCert.name}
                  </h4>
                  <div className="text-xs text-indigo-400 font-mono mt-0.5">
                    Issued by {selectedCert.issuer}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <p className={`leading-relaxed text-sm ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}>
                {selectedCert.credentialSummary}
              </p>

              <div>
                <span className="font-mono text-xs font-bold text-indigo-400 uppercase block mb-2">
                  Verified Skills Acquired
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsAcquired.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-800/50 text-indigo-300 font-mono text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase block mb-2">
                  Curriculum & Exam Topics
                </span>
                <div className="space-y-1.5">
                  {selectedCert.keyTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-3 rounded-xl border ${
                darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-100 border-slate-200"
              }`}>
                <span className="font-mono text-[10px] text-slate-500 uppercase block mb-0.5">
                  Industry Relevance
                </span>
                <p className="text-slate-300 font-medium">
                  {selectedCert.industryRelevance}
                </p>
              </div>
            </div>

            <div className={`px-6 py-3 border-t text-xs flex items-center justify-between ${
              darkMode ? "bg-slate-950 border-slate-800 text-slate-500" : "bg-slate-100 border-slate-200 text-slate-600"
            }`}>
              <span>Credential Holder: Deepika Pamoti</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-indigo-400 font-semibold hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
