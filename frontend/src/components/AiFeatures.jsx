import React from "react";
import { Brain, BarChart3, Cpu, Users, Zap, Globe, ArrowRight } from 'lucide-react';

export default function AiFeatures() {
  const features = [
    { icon: <Brain className="w-4 h-4" />, text: "AI-assisted judging for fair evaluation" },
    { icon: <BarChart3 className="w-4 h-4" />, text: "Real-time transparent leaderboards" },
    { icon: <Cpu className="w-4 h-4" />, text: "Automated workflow management" },
    { icon: <Users className="w-4 h-4" />, text: "Smart team matching algorithms" },
    { icon: <Zap className="w-4 h-4" />, text: "Instant notifications and updates" },
    { icon: <Globe className="w-4 h-4" />, text: "Advanced analytics dashboard" }
  ];

  return (
    <section id="features" className="py-16 md:py-20 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated Rings - Smaller */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }} />
              </div>
              <div className="absolute inset-6 md:inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-purple-500/20 animate-ping" style={{ animationDuration: '2s' }} />
              </div>
              
              {/* Center Icon - Smaller */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                  <Brain className="w-14 h-14 md:w-16 md:h-16 text-white" />
                </div>
              </div>
              
              {/* Floating Cards - Compact */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-28 h-20 md:w-32 md:h-24 bg-white/10 backdrop-blur-2xl rounded-xl border border-white/20 p-3 shadow-xl animate-float">
                <div className="flex items-center space-x-1.5 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs text-gray-400">Live</span>
                </div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </div>
              
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-28 h-20 md:w-32 md:h-24 bg-white/10 backdrop-blur-2xl rounded-xl border border-white/20 p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-1.5 mb-1">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-gray-400">Active</span>
                </div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-gray-500">Evals</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Powered by
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Advanced AI
              </span>
            </h2>
            <p className="text-base md:text-lg font-light text-gray-400 mb-8 leading-relaxed">
              Experience the next generation of hackathon management with intelligent automation and transparent evaluation.
            </p>
            
            {/* Features List - Compact */}
            <div className="space-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <span className="text-sm md:text-base text-gray-300 font-light leading-relaxed pt-1.5">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Button - Compact */}
            <button className="mt-8 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-light text-base md:text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center space-x-2">
              <span>Explore AI Features</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
