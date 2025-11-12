import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Shuffle from "./Shuffle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* -------- LOGO SECTION -------- */}
        <div className="flex items-center space-x-3 group cursor-pointer select-none">
          <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-white relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* -------- HACKHUB AI TEXT (FIXED + SHUFFLE ANIMATED) -------- */}
          <span className="relative text-xl font-semibold tracking-tight">
            {/* Base visible gradient text */}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(139,92,246,0.4)]">
              HackHub AI
            </span>

            {/* Shuffle animation overlay */}
            <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Shuffle
                text="HackHub AI"
                shuffleDirection="right"
                duration={0.4}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={false}
                triggerOnHover={true}
                respectReducedMotion={true}
              />
            </span>
          </span>
        </div>

        {/* -------- NAV LINKS -------- */}
        <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium font-grotesk tracking-wide">

          {[
            "Home",
            "About",
            "Features",
            "Hackathons",
            "Organize Your Hackathon",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* -------- SIGN IN BUTTON -------- */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleLoginClick}
           className="px-7 py-2.5 text-sm font-semibold font-grotesk 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             rounded-full shadow-md text-white tracking-wide
             transition-all duration-300 
             hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]
             hover:scale-105 hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
