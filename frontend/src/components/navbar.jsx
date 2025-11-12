import React, { useState, useEffect } from "react";
import { Globe2, Sparkles, ChevronDown, LogOut, User as UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "@/pages/Loadingpage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState("home");
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ Check for logged in user
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
    }
  }, []);

  const handleLoginClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowDropdown(false);
    navigate('/');
  };

  // smooth scroll handler
  const handleScrollTo = (id) => {
    setActiveLink(id);
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
            ? "bg-black/40 backdrop-blur-3xl border-b border-white/10 shadow-[0_0_40px_rgba(120,0,255,0.4)]"
            : "bg-transparent border-transparent"
        }`}
        style={{
          background: scrolled
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`
            : "transparent",
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo with 3D effect */}
          <div
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-3 group cursor-pointer select-none relative z-10"
          >
            <div className="relative w-10 h-10 perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 transform-gpu shadow-[0_0_30px_rgba(147,51,234,0.5)] group-hover:shadow-[0_0_50px_rgba(147,51,234,0.8)]">
                <Globe2 className="w-5 h-5 text-white relative z-10 group-hover:rotate-180 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 animate-pulse" />
                <Sparkles className="absolute w-3 h-3 text-white/70 top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50 rounded-xl blur-2xl -z-10 group-hover:blur-3xl opacity-50 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <div className="relative">
              <span className="text-2xl font-light tracking-tight bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent group-hover:brightness-150 transition-all duration-500 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                HackHub AI
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
            </div>
          </div>

          {/* Nav Links with magnetic effect */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold relative z-10">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Features", id: "features" },
              { label: "Hackathons", id: "hackathons" },
              { label: "Organize", id: "organize" },
            ].map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="relative text-gray-400 hover:text-white transition-all duration-500 group px-3 py-2"
              >
                <span className="relative z-10 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)]">
                  {item.label}
                </span>
                
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(147,51,234,0.8)] ${
                  activeLink === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10" />
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                        animation: `burst 0.6s ease-out ${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* ✅ User Profile / Sign In Button */}
          <div className="flex items-center space-x-3 relative z-10">
            {user ? (
              // ✅ User Profile Display
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 group backdrop-blur-xl shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] transition-all duration-500 group-hover:scale-110">
                    <span className="text-white text-sm font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-white text-sm font-medium drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]">
                    {user.name}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* ✅ Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-3 w-56 bg-black/90 backdrop-blur-2xl border border-purple-500/30 rounded-2xl shadow-[0_0_40px_rgba(147,51,234,0.4)] overflow-hidden animate-slideDown">
                    <div className="p-4 border-b border-purple-500/20">
                      <p className="text-white text-sm font-medium">{user.name}</p>
                      <p className="text-gray-400 text-xs mt-1">{user.email}</p>
                    </div>
                    
                    <button 
                      onClick={() => navigate('/profile')}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-purple-600/20 transition-all duration-300 group"
                    >
                      <UserIcon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                      <span className="text-white text-sm">Profile</span>
                    </button>
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/20 transition-all duration-300 group border-t border-purple-500/20"
                    >
                      <LogOut className="w-4 h-4 text-red-400 group-hover:text-red-300" />
                      <span className="text-red-400 text-sm group-hover:text-red-300">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // ✅ Original Sign In Button (unchanged)
              <button
                onClick={handleLoginClick}
                className="relative px-7 py-3 text-sm font-medium rounded-full overflow-hidden group
                bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                hover:shadow-[0_0_40px_rgba(147,51,234,0.8),0_0_80px_rgba(147,51,234,0.4)] 
                transition-all duration-700 hover:scale-110 active:scale-95
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-600 before:via-purple-600 before:to-blue-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-1000"
              >
                <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  Sign In
                  <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                </span>
                
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-border animate-spin-slow" 
                    style={{ animationDuration: "3s" }} 
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-1000 animate-pulse" />
                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom glow line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-pulse" />
        )}
      </nav>

      <style jsx>{`
        @keyframes burst {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -150%) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </>
  );
}
