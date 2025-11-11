import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Zap, Target, TrendingUp, ChevronRight, Sparkles, Award, BarChart3, Globe, Cpu, Brain, Rocket, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Herosec from '../components/Herosec.jsx';
import FeaturedHack from '../components/FeaturedHack.jsx';
import AiFeatures from '../components/AiFeatures.jsx';
import HowIt from '@/components/HowIt';
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
      

      {/* AI Features */}
      <AiFeatures />


      {/* How It Works Section */}
      <HowIt />
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
      <Footer />

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