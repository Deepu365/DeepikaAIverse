import React from "react";
import { 
  Award, 
  Camera, 
  ScanFace, 
  Server, 
  Database, 
  Layout, 
  FileCheck2,
  Workflow,
  ShieldCheck,
  CheckCircle,
  Eye,
  Cpu
} from "lucide-react";

interface PatentProps {
  darkMode: boolean;
}

export const Patent: React.FC<PatentProps> = ({ darkMode }) => {
  const steps = [
    { step: "01", name: "CCTV / RTSP Ingest", desc: "Live classroom overhead video feed (30 FPS)", icon: Camera },
    { step: "02", name: "Face Detection", desc: "OpenCV bounding box spatial localization", icon: ScanFace },
    { step: "03", name: "Deep Embeddings", desc: "128-dim facial feature distance matching", icon: Cpu },
    { step: "04", name: "Flask REST API", desc: "Timestamp verification & duplicate filters", icon: Server },
    { step: "05", name: "Database Store", desc: "Daily student logs & lecture slots archival", icon: Database },
    { step: "06", name: "React Dashboard", desc: "Instant absentee reporting & visual analytics", icon: Layout },
  ];

  return (
    <section id="patent" className="py-20 border-b border-slate-800/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Intellectual Property</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Published Patent Architecture
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            "RTSP-Based Automated Classroom Attendance Monitoring System Using CCTV Face Recognition"
          </p>
        </div>

        {/* Premium Visual Patent Showcase Card */}
        <div className={`rounded-3xl border p-6 sm:p-8 transition-all ${
          darkMode 
            ? "bg-slate-900/90 border-cyan-500/30 shadow-2xl shadow-cyan-950/20" 
            : "bg-white border-cyan-200 shadow-xl"
        }`}>
          
          {/* Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <FileCheck2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    PATENT PUBLISHED
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Officially Published in Patent Journal
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Category: Computer Vision • AI • Automation • Full Stack
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">
                Deepika's Engineering Role
              </span>
              <span className="text-sm font-bold text-cyan-400 font-mono">
                Integration Developer
              </span>
            </div>
          </div>

          {/* Patent Visual Blueprint Graphic */}
          <div className="py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* CCTV Live Ingestion Visual Mockup */}
              <div className="lg:col-span-6 rounded-2xl border border-cyan-500/30 bg-slate-950 p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-900 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-rose-400 font-bold">RTSP STREAM MONITOR</span>
                  </div>
                  <span className="text-cyan-400">FPS: 30 • 1080p Feed</span>
                </div>

                {/* Simulated CCTV Multi-Face Detection Grid */}
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="border border-cyan-500/50 p-2 rounded-xl bg-cyan-950/20 text-center space-y-1">
                    <ScanFace className="w-6 h-6 text-cyan-400 mx-auto" />
                    <div className="text-[10px] text-cyan-300 font-bold">Student #101</div>
                    <div className="text-[9px] text-emerald-400 font-bold">99.2% MATCH</div>
                  </div>

                  <div className="border border-cyan-500/50 p-2 rounded-xl bg-cyan-950/20 text-center space-y-1">
                    <ScanFace className="w-6 h-6 text-cyan-400 mx-auto" />
                    <div className="text-[10px] text-cyan-300 font-bold">Student #102</div>
                    <div className="text-[9px] text-emerald-400 font-bold">98.8% MATCH</div>
                  </div>

                  <div className="border border-cyan-500/50 p-2 rounded-xl bg-cyan-950/20 text-center space-y-1">
                    <ScanFace className="w-6 h-6 text-cyan-400 mx-auto" />
                    <div className="text-[10px] text-cyan-300 font-bold">Student #103</div>
                    <div className="text-[9px] text-emerald-400 font-bold">99.5% MATCH</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] space-y-1 text-slate-300">
                  <div className="text-emerald-400 font-bold">&gt;&gt; INGESTION COMPLETE: 64/64 Students Logged</div>
                  <div>REST Endpoint: POST /api/v1/attendance/batch [Status: 200 OK]</div>
                  <div>Database Synced: MongoDB & MySQL relational audit records generated</div>
                </div>
              </div>

              {/* Responsibilities & Architecture Overview */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold block mb-1">
                    Core Technical Problem & Solution
                  </span>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Eliminates manual roll-calling and biometric fingerprint bottlenecks by automatically recognizing classroom student faces through overhead CCTV RTSP camera streams, logging timestamps directly to an institutional database.
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border ${
                  darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-100/70 border-slate-200"
                }`}>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-1">
                    Deepika's Direct Responsibility:
                  </span>
                  <p className="text-xs text-slate-300 font-medium">
                    Face Recognition Engine → Flask REST Microservices → Database Schemas → React Analytics Dashboard.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {["Python", "OpenCV", "Flask", "React", "MongoDB", "RTSP Streams", "REST APIs"].map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Architecture Pipeline Flow 6 Steps */}
          <div className="pt-6 border-t border-slate-800/60">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 flex items-center gap-1.5">
              <Workflow className="w-4 h-4" />
              <span>Full Pipeline Flow (Ingestion to Administrative Dashboard)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {steps.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex flex-col justify-between ${
                      darkMode ? "bg-slate-950/70 border-slate-800" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold text-cyan-400 mb-1">
                        <span>{st.step}</span>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="font-bold text-xs text-slate-200 mb-0.5">{st.name}</div>
                      <p className="text-[10px] text-slate-400 leading-snug">{st.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
