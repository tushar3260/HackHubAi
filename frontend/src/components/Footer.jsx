import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10 overflow-hidden">
      {/* subtle animated gradient line at top of footer */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[gradientFlow_6s_ease_infinite]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* upper section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-12">
          
          {/* logo section */}
          <div className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-light bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-wide">
              HackHub AI
            </span>
          </div>

          {/* navigation links */}
          <div className="flex items-center space-x-10 text-sm font-light text-gray-400">
            {['Privacy', 'Terms', 'Support', 'Docs', 'Blog'].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* social icons */}
          <div className="flex items-center space-x-4">
            {['Twitter', 'GitHub', 'Discord'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-xs text-gray-300 font-medium">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* divider + bottom text */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-sm font-light text-gray-500">
            © 2025 <span className="text-gray-300 font-normal">HackHub AI</span>. Built with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium">
              innovation
            </span>{' '}
            and powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-medium">AI</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

