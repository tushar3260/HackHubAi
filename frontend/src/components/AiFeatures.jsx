import react from "react";
import { Brain, BarChart3, Cpu, Users, Zap, Globe, ArrowRight } from 'lucide-react';
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
    
    <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square">
                {/* Animated Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-purple-500/20 animate-ping" style={{ animationDuration: '2s' }} />
                </div>
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                    <Brain className="w-20 h-20 text-white" />
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute top-8 right-8 w-36 h-28 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-4 shadow-xl animate-float">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-xs text-gray-400">Live Status</span>
                  </div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-xs text-gray-500">Accuracy Rate</div>
                </div>
                
                <div className="absolute bottom-8 left-8 w-36 h-28 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400">Processing</span>
                  </div>
                  <div className="text-3xl font-bold text-white">50K+</div>
                  <div className="text-xs text-gray-500">Evaluations</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Powered by
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Advanced AI
                </span>
              </h2>
              <p className="text-xl font-light text-gray-400 mb-10 leading-relaxed">
                Experience the next generation of hackathon management with intelligent automation and transparent evaluation.
              </p>
              
              <div className="space-y-5">
                {features.map((feature, idx) => (
                  <div key={idx} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <span className="text-gray-300 font-light leading-relaxed pt-2">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-12 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-light text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center space-x-3">
                <span>Explore AI Features</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}