import React from 'react';
import { Zap, ChevronRight, Sparkles, Award, BarChart3, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-light bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                HackHub AI
              </span>
            </div>
            
            <div className="flex items-center space-x-10 text-sm font-light text-gray-400">
              {['Privacy', 'Terms', 'Support', 'Docs', 'Blog'].map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              {['Twitter', 'GitHub', 'Discord'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all">
                  <span className="text-xs text-gray-400">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center pt- border-t border-white/10">
            <p className="text-sm font-light text-gray-600">
              © 2025 HackHub AI. All rights reserved. Built with innovation and powered by AI.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;