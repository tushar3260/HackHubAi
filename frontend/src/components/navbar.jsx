import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HackHubLanding from '@/pages/Landingpage';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-light tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              HackHub AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-light">
            {['Home', 'About', 'Features', 'Hackathons', 'Organize Your Hackathon'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-white transition-colors relative group font-bold"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            
            <button 
            onClick={handleLoginClick}
            className="px-6 py-2.5 text-sm font-light bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
          
            Sign In
          </button>
          </div>
        </div>
      </nav>
    );
}