import React from "react";
<<<<<<< HEAD

import { ChevronRight, Sparkles, Award, BarChart3, Globe, ArrowRight } from 'lucide-react';
=======
import ElectricBorder from "./ElectricBorder.jsx";
import {
  ChevronRight,
  Sparkles,
  Award,
  BarChart3,
  Globe,
  ArrowRight,
} from "lucide-react";
>>>>>>> 1ace19cc1d99b0a7e08d6a3eda529cb204413320
import BlurText from "./blurtxt";
import { useState } from "react";

export default function Herosec() {
  const [stats] = useState([
    {
      value: "10,000+",
      label: "Global Hackathons",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      value: "500+",
      label: "Active Organizers",
      icon: <Award className="w-6 h-6" />,
    },
    {
      value: "50,000+",
      label: "Participants",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      value: "80%",
      label: "Time Saved",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ]);
  return (
    <section className="relative pt-30 pb-20 px-6 ">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-10 hover:bg-white/10 transition-colors">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-light text-gray-300">
            Powered by Advanced AI Technology
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-none">
          Revolutionizing
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Hackathon Management
          </span>
        </h1>

        <p className="text-sm font-light text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed">
          Experience the future of collaborative innovation. Manage, judge, and
          discover hackathons with intelligent automation and transparent
          evaluation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
          <button className="group px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-light text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center space-x-3">
            <span className="text-m">Explore Hackathons</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-7 py-3 bg-white/5 backdrop-blur-xl text-white rounded-full font-light text-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105 flex items-center space-x-3">
            <span>Watch Demo</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-4xl mx-auto">
          {stats.map((stat) => (
            

              <div className="group cursor-pointer bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105">
                <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform inline-block">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-light">
                  {stat.label}
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
