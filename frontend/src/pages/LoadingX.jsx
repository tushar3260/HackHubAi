import React, { useState, useEffect } from "react";
import { Sparkles, Zap, Code2, Cpu, Rocket } from "lucide-react";

export default function LoadingX() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  const loadingStages = [
    { text: "Initializing", progress: 0 },
    { text: "Loading AI Models", progress: 25 },
    { text: "Connecting Servers", progress: 50 },
    { text: "Syncing Data", progress: 75 },
    { text: "Almost Ready", progress: 90 },
    { text: "Ready!", progress: 100 },
  ];

  useEffect(() => {
    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        setLoadingText(loadingStages[currentStage].text);
        setProgress(loadingStages[currentStage].progress);
        currentStage++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950 to-black flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite"
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Icon with rotating rings */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin" />
          
          {/* Middle rotating ring */}
          <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-blue-500 border-l-cyan-500 animate-spin-reverse" 
            style={{ animationDuration: "2s" }} 
          />
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 animate-pulse shadow-[0_0_50px_rgba(147,51,234,0.8)]" />
          
          {/* Center icon */}
          <div className="relative z-10 flex items-center justify-center">
            <Rocket className="w-12 h-12 text-white animate-bounce drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </div>

          {/* Orbiting icons */}
          {[
            { Icon: Sparkles, delay: 0, color: "text-yellow-400" },
            { Icon: Zap, delay: 0.5, color: "text-blue-400" },
            { Icon: Code2, delay: 1, color: "text-pink-400" },
            { Icon: Cpu, delay: 1.5, color: "text-purple-400" },
          ].map(({ Icon, delay, color }, idx) => (
            <div
              key={idx}
              className="absolute inset-0 animate-orbit"
              style={{ animationDelay: `${delay}s` }}
            >
              <Icon className={`absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 ${color} drop-shadow-[0_0_10px_currentColor]`} />
            </div>
          ))}
        </div>

        {/* Loading text with gradient */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            {loadingText}
          </h2>
          
          {/* Animated dots */}
          <div className="flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce shadow-[0_0_15px_rgba(147,51,234,0.8)]"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 space-y-3">
          {/* Bar container */}
          <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-purple-500/30">
            {/* Glowing background track */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30 animate-pulse" />
            
            {/* Progress fill */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full shadow-[0_0_20px_rgba(147,51,234,0.8)]"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>

            {/* Moving light */}
            <div 
              className="absolute top-0 h-full w-20 bg-white/30 blur-xl animate-slide"
              style={{ animationDuration: "2s" }}
            />
          </div>

          {/* Progress percentage */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-purple-300 font-medium">{progress}%</span>
            <span className="text-gray-500">Loading...</span>
          </div>
        </div>

        {/* Glowing effect underneath */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes slide {
          0% {
            left: -100px;
          }
          100% {
            left: 100%;
          }
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-orbit {
          animation: orbit 4s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-slide {
          animation: slide 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}