import React, { useState } from "react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Phone,
  Globe
} from "lucide-react";
import { profileData } from "../data/profile";

interface ContactProps {
  darkMode: boolean;
}

const areaOptions = [
  "Web Development",
  "AI / ML",
  "Gen AI",
  "Python Developer",
  "Java Developer",
  "Full Stack & Backend",
  "Other Opportunity",
];

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("Web Development");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please provide a valid email address.");
      return;
    }

    setError(null);
    setSubmitted(true);

    const mailtoSubject = encodeURIComponent(`[${areaOfInterest}] ${subject || "Portfolio Inquiry from " + name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Deepika,\n\nName: ${name}\nEmail: ${email}\nArea of Interest: ${areaOfInterest}\n\nMessage:\n${message}\n\nSent via Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${profileData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In Touch With Deepika
          </h2>
          <p className={`mt-2 text-base ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Available for campus hiring interviews, entry-level engineering positions, and technical collaborations.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Compact Direct Channels */}
          <div className={`lg:col-span-5 rounded-3xl border p-6 space-y-4 ${
            darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold block mb-1">
                Direct Contact Channels
              </span>
              <h3 className="text-lg font-bold text-slate-100">
                Deepika Pamoti
              </h3>
              <p className={`text-xs mt-0.5 leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                Palakonda / Visakhapatnam, Andhra Pradesh
              </p>
            </div>

            {/* Channels Grid with Compact Sizing */}
            <div className="space-y-2 text-xs">
              {/* Phone */}
              <a
                href={`tel:${profileData.phone}`}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all hover:scale-[1.01] ${
                  darkMode ? "bg-slate-950/60 border-slate-800 hover:border-emerald-500/50" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">Phone / Mobile</span>
                  <span className="font-bold text-slate-200">+91 {profileData.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${profileData.contact.email}`}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all hover:scale-[1.01] ${
                  darkMode ? "bg-slate-950/60 border-slate-800 hover:border-indigo-500/50" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">Email</span>
                  <span className="font-bold text-slate-200 truncate block">{profileData.contact.email}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex items-center justify-between transition-all hover:scale-[1.01] ${
                  darkMode ? "bg-slate-950/60 border-slate-800 hover:border-blue-500/50" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">LinkedIn</span>
                    <span className="font-bold text-slate-200">linkedin.com/in/deepika-pamoti</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              {/* GitHub */}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex items-center justify-between transition-all hover:scale-[1.01] ${
                  darkMode ? "bg-slate-950/60 border-slate-800 hover:border-slate-700" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-slate-200">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase block">GitHub</span>
                    <span className="font-bold text-slate-200">github.com/Deepu365</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              {/* Live Portfolio App Link */}
              <a
                href={profileData.contact.vercel}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex items-center justify-between transition-all hover:scale-[1.01] ${
                  darkMode ? "bg-slate-950/60 border-slate-800 hover:border-cyan-500/50" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase block">Live Deployed App</span>
                    <span className="font-bold text-slate-200 text-xs sm:text-sm">Deepika Portfolio Live App</span>
                    <span className="text-[10px] text-slate-400 font-mono block">ais-pre-ffvmyzen7ykgxhdxsyt6wc...run.app</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>

            <div className={`p-3 rounded-xl border text-[11px] font-mono ${
              darkMode ? "bg-slate-950/40 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
            }`}>
              Fluent in English & Telugu • Open to rotational shifts & relocation across Pan-India MNC tech hubs.
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className={`lg:col-span-7 rounded-3xl border p-6 sm:p-8 ${
            darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <h3 className="text-xl font-bold text-slate-100 mb-1">
              Send Direct Message
            </h3>
            <p className={`text-xs mb-5 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Fill in your details below to open a formatted mail draft to Deepika's inbox.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {submitted && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Mail client opened with your prefilled details! Or send directly to pamotideepika@gmail.com</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono uppercase text-slate-400 mb-1 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Recruiter / Tech Lead Name"
                    className={`w-full px-3 py-2 rounded-xl border ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-slate-400 mb-1 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={`w-full px-3 py-2 rounded-xl border ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono uppercase text-slate-400 mb-1 font-semibold">
                    Area of Interest *
                  </label>
                  <select
                    value={areaOfInterest}
                    onChange={(e) => setAreaOfInterest(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border cursor-pointer ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                  >
                    {areaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono uppercase text-slate-400 mb-1 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Role Opportunity / Interview Invitation"
                    className={`w-full px-3 py-2 rounded-xl border ${
                      darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono uppercase text-slate-400 mb-1 font-semibold">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about the role requirements, hiring rounds, or schedule..."
                  className={`w-full px-3 py-2 rounded-xl border ${
                    darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message (via Mail Client)</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
