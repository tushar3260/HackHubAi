import React, { useState, useEffect } from "react";
import { Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "@/pages/Loadingpage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    setLoading(true); // show loading
    setTimeout(() => {
      setLoading(false); // hide loading
      navigate("/login"); // navigate after delay
    }, 1500); // 1.5 seconds delay
  };

  const handleScrollTo = (id) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
          <LoadingPage />
        </div>
      )}

      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          scrolled
            ? "bg-black/60 backdrop-blur-3xl border-b border-white/10 shadow-[0_0_25px_rgba(120,0,255,0.3)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-500">
              <Globe2 className="w-5 h-5 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
            </div>
            <span className="text-xl font-light tracking-tight bg-gradient-to-r from-white via-purple-400 to-gray-400 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
              HackHub AI
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-bold">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Features", id: "features" },
              { label: "Hackathons", id: "hackathons" },
              { label: "Organize", id: "organize" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="relative text-gray-400 hover:text-white transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </button>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLoginClick}
              className="relative px-6 py-2.5 text-sm font-light rounded-full 
              overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 
              hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] 
              transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 opacity-0 hover:opacity-100 blur-md transition-all duration-700"></div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
