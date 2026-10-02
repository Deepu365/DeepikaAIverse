/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Hero } from "./components/Hero";
import { ProfileSnapshot } from "./components/ProfileSnapshot";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Patent } from "./components/Patent";
import { Innovation } from "./components/Innovation";
import { Hackathons } from "./components/Hackathons";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { ResumeCenter } from "./components/ResumeCenter";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { AuthModal } from "./components/AuthModal";
import { ProfileDossierModal } from "./components/ProfileDossierModal";
import { CareerObjectiveModal } from "./components/CareerObjectiveModal";
import { WelcomeGate } from "./components/WelcomeGate";
import { CyberParticlesBackground } from "./components/CyberParticlesBackground";
import { CyberHUDTerminal } from "./components/CyberHUDTerminal";
import { RefreshCw } from "lucide-react";
import { soundFX } from "./services/soundEffects";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("deepika_portfolio_theme");
    return saved !== null ? saved === "dark" : true;
  });

  const [hasEnteredPortfolio, setHasEnteredPortfolio] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("home");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [profileDossierOpen, setProfileDossierOpen] = useState(false);
  const [careerObjectiveOpen, setCareerObjectiveOpen] = useState(false);
  const [recruiterName, setRecruiterName] = useState<string | null>(() => {
    return localStorage.getItem("deepika_portfolio_recruiter");
  });

  useEffect(() => {
    localStorage.setItem("deepika_portfolio_theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.className = "bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.className = "bg-slate-50 text-slate-900 antialiased selection:bg-indigo-500/20 selection:text-indigo-900";
    }
  }, [darkMode]);

  // Section observer to update activeSection on scroll
  useEffect(() => {
    const sections = [
      "home", "about", "skills", "projects", "patent", "innovation",
      "hackathons", "experience", "education", "certifications",
      "achievements", "resumes", "contact"
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleOpenAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (name: string) => {
    setRecruiterName(name);
    setHasEnteredPortfolio(true);
  };

  const handleExitToFirstScreen = () => {
    soundFX.playPortalOpen();
    setHasEnteredPortfolio(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-200 ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      {/* Dynamic Cyber Particle Constellation Background */}
      <CyberParticlesBackground darkMode={darkMode} />

      {/* 00. Initial Welcome Gate Screen: Shows AI avatar & Open Deepika's Portfolio trigger */}
      {!hasEnteredPortfolio && (
        <WelcomeGate
          darkMode={darkMode}
          onEnterPortfolio={() => setHasEnteredPortfolio(true)}
        />
      )}

      {/* Desktop Left Sidebar & Mobile Drawer Navigation */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAuth={handleOpenAuth}
        onProfileClick={() => setProfileDossierOpen(true)}
        onOpenWelcomeGate={handleExitToFirstScreen}
      />

      {/* Main Content Area framed beside the Left Sidebar */}
      <div className="lg:pl-64 flex flex-col min-h-screen relative z-10">
        {/* Top Header Bar */}
        <TopBar
          darkMode={darkMode}
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenAuth={handleOpenAuth}
          onSelectResume={() => scrollToSection("resumes")}
          onProfileClick={() => setProfileDossierOpen(true)}
          onOpenWelcomeGate={handleExitToFirstScreen}
        />

        {/* Candidate & Recruiter active status bar */}
        <div className="px-4 sm:px-6 py-2 bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-transparent border-b border-indigo-500/20 text-xs text-indigo-300 flex flex-wrap items-center justify-between gap-2 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CANDIDATE: <strong>Deepika Pamoti</strong></span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline text-[11px]">SITAM B.Tech AI & Data Science (8.5 CGPA)</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-cyan-400 font-mono hidden md:inline">
              VERIFIED CANDIDATE
            </span>
            <button
              onClick={handleExitToFirstScreen}
              className="px-2.5 py-1 rounded-full bg-indigo-600/30 hover:bg-indigo-600/60 border border-indigo-500/40 text-[11px] text-indigo-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
              title="Return to AI Welcome Screen"
            >
              <RefreshCw className="w-3 h-3 text-cyan-400 animate-spin-slow" />
              <span>AI Welcome Screen</span>
            </button>
          </div>
        </div>

        <main className="flex-1">
          {/* 01. Hero with Animated Role Rotator */}
          <Hero
            darkMode={darkMode}
            onOpenCareerObjective={() => setCareerObjectiveOpen(true)}
            onExploreProjects={() => scrollToSection("projects")}
            onExploreResumes={() => scrollToSection("resumes")}
            onContactClick={() => scrollToSection("contact")}
            onProfileClick={() => setProfileDossierOpen(true)}
          />

          {/* 02. Recruiter Snapshot (CGPA 8.3, Sitam clg, 3 Internships, Patent, SIH) */}
          <ProfileSnapshot darkMode={darkMode} />

          {/* 03. About Deepika */}
          <About darkMode={darkMode} />

          {/* 04. Categorized Skills with Interactive Video / Terminal Execution */}
          <Skills darkMode={darkMode} />

          {/* 05. Domain-Wise Projects with Animated Mockup Screens (CivicSense, Mock Interview, Smart Tourism, CCTV Patent, MediCare AI) */}
          <Projects
            darkMode={darkMode}
            onNavigatePatent={() => scrollToSection("patent")}
          />

          {/* 06. Published Patent Architecture (CCTV Attendance Monitoring with live scan visual) */}
          <Patent darkMode={darkMode} />

          {/* 07. Startup / Innovation Concept (Smart Travel & Tourism pitch deck visual) */}
          <Innovation darkMode={darkMode} />

          {/* 08. Hackathons & Competitions (SIH Winner) */}
          <Hackathons darkMode={darkMode} />

          {/* 09. Work Experience (3 Internships: Pixelwind Backend, Pixelwind GenAI, APSCHE Data Science) */}
          <Experience darkMode={darkMode} />

          {/* 10. Academic Education (B.Tech, Intermediate MPC, 10th SSC) */}
          <Education darkMode={darkMode} />

          {/* 11. Industry Certifications (Clickable with full curriculum modals) */}
          <Certifications darkMode={darkMode} />

          {/* 12. Key Achievements & Campus Activities (Ordered Basic to Advanced, Tech Orbit, Eagle Club, Anchor) */}
          <Achievements darkMode={darkMode} />

          {/* 13. Areas of Interest & 3 Domain Resumes (AI/ML & GenAI, Full-Stack Web, Python Backend) */}
          <ResumeCenter darkMode={darkMode} />

          {/* 14. Direct Contact & Communication */}
          <Contact darkMode={darkMode} />

          {/* 15. Review Complete & Return to Entrance Section - "avagana firts ki vellai" */}
          <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto text-center">
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              darkMode 
                ? "glass-panel border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-purple-950/30 shadow-2xl shadow-indigo-950/50" 
                : "bg-white border-indigo-200 shadow-xl"
            }`}>
              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>CANDIDATE DOSSIER REVIEW COMPLETED</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Done Reviewing Deepika Pamoti's Portfolio?
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                  Thank you for reviewing Deepika Pamoti's software engineering portfolio and credentials (SITAM • 8.5 CGPA). 
                  Click below to return to the interactive AI Welcome Screen.
                </p>

                <button
                  onClick={handleExitToFirstScreen}
                  className="mt-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-600/40 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 animate-spin-slow text-cyan-300" />
                  <span>← Return to AI Welcome Screen</span>
                </button>

                <span className="text-[11px] font-mono text-slate-500">
                  Returns to the interactive 3D Holographic AI candidate screen
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} onReturnToGate={handleExitToFirstScreen} />
      </div>

      {/* Global Interactive Modals */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        darkMode={darkMode}
        onNavigateSection={scrollToSection}
      />

      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        darkMode={darkMode}
        onSuccess={handleAuthSuccess}
      />

      <ProfileDossierModal
        isOpen={profileDossierOpen}
        onClose={() => setProfileDossierOpen(false)}
        darkMode={darkMode}
        onExplorePortfolio={() => scrollToSection("about")}
        onOpenResumeCenter={() => scrollToSection("resumes")}
      />

      <CareerObjectiveModal
        isOpen={careerObjectiveOpen}
        onClose={() => setCareerObjectiveOpen(false)}
        darkMode={darkMode}
        onOpenResumeCenter={() => scrollToSection("resumes")}
      />

      {/* Floating Interactive Cyber HUD Terminal */}
      <CyberHUDTerminal
        onNavigate={scrollToSection}
        onOpenGate={() => setHasEnteredPortfolio(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
