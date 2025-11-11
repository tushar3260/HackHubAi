import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Zap, Target, TrendingUp, ChevronRight, Sparkles, Award, BarChart3, Globe, Cpu, Brain, Rocket, Star, ArrowRight } from 'lucide-react';
import Navbar from './navbar';
import Herosec from './Herosec.jsx';
import FeaturedHack from './FeaturedHack.jsx';
import AiFeatures from './AiFeatures.jsx';
const HackHubLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  

  const steps = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Organize",
      desc: "Create and manage hackathons with AI-powered tools",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Participate",
      desc: "Join exciting challenges and collaborate with innovators",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Evaluate",
      desc: "Fair AI-assisted judging with transparent results",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-assisted judging for fair evaluation" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Real-time transparent leaderboards" },
    { icon: <Cpu className="w-5 h-5" />, text: "Automated workflow management" },
    { icon: <Users className="w-5 h-5" />, text: "Smart team matching algorithms" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant notifications and updates" },
    { icon: <Globe className="w-5 h-5" />, text: "Advanced analytics dashboard" }
  ];

  

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
            bottom: '10%',
            right: '10%'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: `translate(${mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px)`,
            top: '50%',
            right: '20%'
          }}
        />
      </div>

      <Navbar />

      <Herosec />

      {/* Featured Hackathons */}
      
      <FeaturedHack />
      {/* How It Works */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-5 tracking-tight">How It Works</h2>
            <p className="text-xl font-light text-gray-400">Three simple steps to innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} mb-8 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-3 tracking-wider uppercase">Step {idx + 1}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-sm mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <AiFeatures />

      {/* Trusted By */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-light text-gray-600 mb-12 tracking-widest uppercase">Trusted by innovators worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Tesla'].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <div className="text-3xl font-light text-gray-700 hover:text-gray-500 transition-colors cursor-pointer">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl p-16 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Start?</h2>
            <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
              Join thousands of innovators and start your hackathon journey today with AI-powered tools.
            </p>
            <button className="px-12 py-5 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-all hover:shadow-2xl hover:shadow-white/20">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-sm font-light text-gray-600">
              © 2025 HackHub AI. All rights reserved. Built with innovation and powered by AI.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HackHubLanding;