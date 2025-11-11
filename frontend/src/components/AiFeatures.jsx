import React from "react";
import { Brain, BarChart3, Cpu, Users, Zap, Globe } from 'lucide-react';

export default function AiFeatures() {
  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-assisted judging for fair evaluation" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Real-time transparent leaderboards" },
    { icon: <Cpu className="w-5 h-5" />, text: "Automated workflow management" },
    { icon: <Users className="w-5 h-5" />, text: "Smart team matching algorithms" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant notifications and updates" },
    { icon: <Globe className="w-5 h-5" />, text: "Advanced analytics dashboard" }
  ];

  return (
    <section id="features" className="py-16 md:py-20 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Powered by
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced AI
            </span>
          </h2>
          <p className="text-base md:text-lg font-light text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Experience the next generation of hackathon management with intelligent automation and transparent evaluation.
          </p>
        </div>
        
        {/* Features Grid - 2 Columns - No Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <div className="text-white">{feature.icon}</div>
              </div>
              <span className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
