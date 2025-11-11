import React, { useState } from "react";
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

export default function FeaturedHack() {
  const [activeCard, setActiveCard] = useState(null);

  const hackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge 2025",
      date: "Dec 15-17, 2025",
      type: "Online",
      participants: "2.5k+",
      prize: "$50,000",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "FinTech Revolution Hackathon",
      date: "Jan 20-22, 2026",
      type: "Hybrid",
      participants: "1.8k+",
      prize: "$35,000",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Healthcare Tech Sprint",
      date: "Feb 10-12, 2026",
      type: "Offline",
      participants: "1.2k+",
      prize: "$40,000",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "Climate Action Hackathon",
      date: "Mar 5-7, 2026",
      type: "Online",
      participants: "3k+",
      prize: "$60,000",
      gradient: "from-orange-500/20 to-yellow-500/20"
    }
  ];

  return (
    <section id="hackathons" className="py-3 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-5 tracking-tight">
            Featured Hackathons
          </h2>
          <p className="text font-light text-gray-400">
            Join the world's most innovative challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hackathons.map((hack, idx) => (
            <div
              key={hack.id}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group relative bg-gradient-to-br ${hack.gradient} backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:border-white/30 cursor-pointer overflow-hidden ${
                activeCard === idx ? 'scale-105 -translate-y-3 shadow-2xl shadow-blue-500/20' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-xl border border-white/20">
                    {hack.type}
                  </span>
                  <TrendingUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6 leading-tight group-hover:text-blue-300 transition-colors">
                  {hack.title}
                </h3>
                
                <div className="space-y-3 mb-8 text-sm font-light text-gray-400">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{hack.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>{hack.participants} Registered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-medium">{hack.prize} Prize Pool</span>
                  </div>
                </div>
                
                <button className="w-full py-3.5 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-medium border border-white/20 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:border-transparent transition-all group-hover:shadow-lg group-hover:shadow-blue-500/50">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
