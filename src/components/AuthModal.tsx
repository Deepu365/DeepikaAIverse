import React, { useState } from "react";
import { 
  X, 
  LogIn, 
  UserPlus, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Mail, 
  Lock, 
  UserCheck 
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  initialMode: "login" | "register";
  onClose: () => void;
  darkMode: boolean;
  onSuccess: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  darkMode,
  onSuccess
}) => {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const recruiterName = name || (email.split("@")[0] || "Recruiter");
    localStorage.setItem("deepika_portfolio_recruiter", recruiterName);
    setTimeout(() => {
      onSuccess(recruiterName);
      onClose();
    }, 1000);
  };

  const handleGuestAccess = () => {
    localStorage.setItem("deepika_portfolio_recruiter", "Guest Recruiter");
    onSuccess("Guest Recruiter");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className={`relative w-full max-w-md rounded-3xl border shadow-2xl z-10 overflow-hidden ${
        darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
      }`}>
        
        {/* Modal Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200"
        }`}>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              {mode === "login" ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-bold text-sm">
                {mode === "login" ? "Recruiter / Visitor Login" : "Recruiter Registration"}
              </h3>
              <p className="text-[11px] text-slate-400">
                Access candidate dossier & download verified portfolios
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-slate-100">Welcome to Deepika's Portfolio!</h4>
              <p className="text-xs text-slate-400">Unlocking full recruiter dossier and direct resume center...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {mode === "register" && (
                <>
                  <div>
                    <label className="block font-mono text-slate-400 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-3 py-2 rounded-xl border ${
                        darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-slate-400 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. MNC Tech / Startup"
                      className={`w-full px-3 py-2 rounded-xl border ${
                        darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block font-mono text-slate-400 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="recruiter@company.com"
                  className={`w-full px-3 py-2 rounded-xl border ${
                    darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label className="block font-mono text-slate-400 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full px-3 py-2 rounded-xl border ${
                    darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-300 text-slate-900"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{mode === "login" ? "Sign In & Unlock Dossier" : "Complete Registration"}</span>
              </button>

              <div className="relative py-2 flex items-center justify-center">
                <div className="border-t border-slate-800 w-full" />
                <span className="bg-slate-900 px-2 text-[10px] font-mono text-slate-500 uppercase absolute">
                  Or
                </span>
              </div>

              <button
                type="button"
                onClick={handleGuestAccess}
                className={`w-full py-2 rounded-xl font-medium text-xs border transition-colors flex items-center justify-center gap-1.5 ${
                  darkMode ? "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Continue as Guest Recruiter (Instant Access)</span>
              </button>

              <div className="pt-2 text-center text-xs">
                {mode === "login" ? (
                  <span className="text-slate-400">
                    New recruiter?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("register")}
                      className="text-indigo-400 font-semibold hover:underline"
                    >
                      Register here
                    </button>
                  </span>
                ) : (
                  <span className="text-slate-400">
                    Already registered?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="text-indigo-400 font-semibold hover:underline"
                    >
                      Login here
                    </button>
                  </span>
                )}
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
