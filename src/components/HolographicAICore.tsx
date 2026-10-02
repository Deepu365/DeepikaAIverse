import React, { useState, useRef } from "react";
import { Sparkles, BrainCircuit, Activity, Cpu, ShieldCheck } from "lucide-react";
import { soundFX } from "../services/soundEffects";
import { DEFAULT_PHOTO } from "../utils/photoManager";

interface HolographicAICoreProps {
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  interactive?: boolean;
  className?: string;
  showStatusBadges?: boolean;
  imageSrc?: string;
  isSpeaking?: boolean;
}

export const HolographicAICore: React.FC<HolographicAICoreProps> = ({
  size = "md",
  onClick,
  interactive = true,
  className = "",
  showStatusBadges = true,
  imageSrc = DEFAULT_PHOTO,
  isSpeaking = false,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 10,
      y: (x / (rect.width / 2)) * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFX.playHover();
  };

  const handleClick = () => {
    soundFX.playClick();
    if (onClick) onClick();
  };

  const dimClasses = {
    sm: "w-32 h-32 sm:w-36 sm:h-36",
    md: "w-48 h-48 sm:w-56 sm:h-56",
    lg: "w-60 h-60 sm:w-68 sm:h-68",
  }[size];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative inline-block perspective-1000 select-none ${
        interactive ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
    >
      {/* Outer ambient holographic glow */}
      <div className={`absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-600/30 to-purple-600/30 blur-2xl transition-all duration-300 ${
        isSpeaking ? "scale-115 opacity-100 animate-pulse" : "opacity-80"
      }`} />

      {/* Main Core Container */}
      <div className={`relative ${dimClasses} rounded-full p-2.5 flex items-center justify-center`}>
        
        {/* Outer Rotating Cyber Gyroscopic Ring */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="url(#coreGradient)"
            strokeWidth="2.5"
            strokeDasharray="14 8 4 8"
            className="opacity-80"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="30 40 10 20"
            className="opacity-60"
          />
          <defs>
            <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner Counter-Rotating Telemetry Ring */}
        <svg
          className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-reverse pointer-events-none"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="#a855f7"
            strokeWidth="1.8"
            strokeDasharray="6 14 18 6"
            className="opacity-70"
          />
          {/* Tick marks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
            <line
              key={idx}
              x1="100"
              y1="6"
              x2="100"
              y2="13"
              stroke="#38bdf8"
              strokeWidth="2"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </svg>

        {/* Central Round Circular Black Coat Photo Aperture */}
        <div className="relative w-full h-full rounded-full bg-slate-950 border-3 border-indigo-500/70 shadow-2xl overflow-hidden p-1 flex items-center justify-center">
          
          {/* Circular Photo */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border border-cyan-400/40">
            <img
              src={imageSrc}
              alt="Deepika Pamoti in black coat"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover rounded-full transition-transform duration-500 ${
                isHovered ? "scale-108" : "scale-100"
              }`}
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = "/deepika_black_coat.jpg";
              }}
            />

            {/* Subtle holographic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-cyan-500/10 pointer-events-none" />

            {/* Futuristic Cyber Laser Scanline Beam Sweeping Across Photo */}
            <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[0.5px] animate-scanline pointer-events-none shadow-[0_0_14px_#38bdf8]" />
          </div>

          {/* Biometric Active Status Ring */}
          <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-20 pointer-events-none">
            <span className="px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-cyan-400/60 text-[9px] font-mono font-bold text-cyan-300 flex items-center gap-1 shadow-lg backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{isSpeaking ? "VOICE ACTIVE" : "DEEPIKA PAMOTI"}</span>
            </span>
          </div>

        </div>

        {/* Floating Mini Status Orb: Patent & SIH */}
        {showStatusBadges && (
          <>
            <div className="absolute -top-1 -right-1 z-20 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-400/60 shadow-lg text-[9px] font-mono font-bold text-cyan-300 flex items-center gap-1 backdrop-blur-md">
              <Sparkles className="w-2.5 h-2.5 text-cyan-300 animate-spin-slow" />
              <span>SIH Winner</span>
            </div>

            <div className="absolute -bottom-1 -left-1 z-20 px-2 py-0.5 rounded-full bg-slate-900/90 border border-indigo-400/60 shadow-lg text-[9px] font-mono font-bold text-indigo-300 flex items-center gap-1 backdrop-blur-md">
              <ShieldCheck className="w-2.5 h-2.5 text-indigo-300" />
              <span>8.5 CGPA</span>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
