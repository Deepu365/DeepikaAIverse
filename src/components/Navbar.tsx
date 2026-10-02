import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  FileText, 
  ArrowUpRight 
} from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Patent", href: "#patent", highlight: true },
  { name: "Idea Proposal", href: "#innovation" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "#resume-center" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenSearch }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map(link => {
        const id = link.href.replace("#", "");
        return { id, el: document.getElementById(id) };
      });

      const scrollPosition = window.scrollY + 120;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20" 
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className={`w-full h-full rounded-[10px] ${darkMode ? "bg-slate-950" : "bg-white"} flex items-center justify-center font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono`}>
                DP
              </div>
            </div>
            <div>
              <span className={`font-bold tracking-tight text-base sm:text-lg block transition-colors ${darkMode ? "text-slate-100 group-hover:text-white" : "text-slate-900 group-hover:text-indigo-600"}`}>
                Deepika Pamoti
              </span>
              <span className={`text-[11px] block font-mono tracking-wider ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                AI & Data Science • 8.5 CGPA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                    isActive
                      ? darkMode
                        ? "text-white bg-indigo-500/15 font-semibold"
                        : "text-indigo-700 bg-indigo-50 font-semibold"
                      : darkMode
                        ? "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                  {link.highlight && (
                    <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse align-middle" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs flex items-center gap-2 transition-all border ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
              title="Search portfolio (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-indigo-400" />
              <span className="hidden md:inline font-normal">Search</span>
              <kbd className={`hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded ${
                darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-200 text-slate-600"
              }`}>
                ⌘K
              </kbd>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all border ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800 text-amber-400 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Quick Access Button */}
            <a
              href="#resume-center"
              onClick={(e) => handleNavClick(e, "#resume-center")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-sm shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resumes</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg transition-all border ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900"
              }`}
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b px-4 pt-3 pb-5 transition-all max-h-[80vh] overflow-y-auto ${
          darkMode 
            ? "bg-slate-950/95 border-slate-800 backdrop-blur-xl" 
            : "bg-white/95 border-slate-200 backdrop-blur-xl shadow-xl"
        }`}>
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between ${
                    isActive
                      ? darkMode
                        ? "bg-indigo-600/20 text-indigo-300 font-semibold"
                        : "bg-indigo-50 text-indigo-700 font-semibold"
                      : darkMode
                        ? "text-slate-300 hover:bg-slate-900"
                        : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.highlight && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                      PATENT
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/40 flex items-center justify-between">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-semibold text-indigo-400 flex items-center gap-1"
            >
              Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-slate-500 font-mono">
              B.Tech AI & Data Science
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
