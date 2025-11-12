import React from "react";
<<<<<<< HEAD
import ElectricBorder from "./ElectricBorder.jsx";
import TextType from './TextType';
import {
  ChevronRight,
  Sparkles,
  Award,
  BarChart3,
  Globe,
  ArrowRight,
} from "lucide-react";
=======

import { ChevronRight, Sparkles, Award, BarChart3, Globe, ArrowRight } from 'lucide-react';
>>>>>>> 3fcd4f7b5caf8190221b2ed36caaa2aae4ef504e
import BlurText from "./blurtxt";
import { useState } from "react";

export default function Herosec() {
  const text1 = "Revolutionizing";
  const text2 = "Hackathon Management";
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
        <div className="inline-flex items-center space-x-2 px-6 py-2.5 
bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 
mb-10 transition-all duration-300 ease-in-out 
hover:bg-white/20 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group">

          {/* Glowing Dot */}
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping absolute opacity-75"></div>
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full relative"></div>
          </div>

          {/* Sparkles Icon */}
          <Sparkles className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />

          {/* Text */}
          <span className="text-[13px] font-medium text-gray-200 tracking-wide group-hover:text-white transition-colors duration-300">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">Advanced AI</span> Technology
          </span>
        </div>

<<<<<<< HEAD

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-none">
          Revolutionizing
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Hackathon Management
          </span>
        </h1>
=======
         {/* Heading Animation */}
        <div className="min-h-auto bg-black flex items-center justify-center p-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-center">
            <div className="mb-4">
              {text1.split("").map((char, i) => (
                <span
                  key={i}
                  className="char-animate"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="gradient-line">
              {text2.split("").map((char, i) => (
                <span
                  key={i}
                  className="gradient-char"
                  style={{ animationDelay: `${1.2 + i * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h1>

          <style jsx>{`
            .char-animate {
              display: inline-block;
              opacity: 0;
              animation: charFadeIn 0.8s ease-out forwards;
            }

            .gradient-line {
              display: inline-block;
            }

            .gradient-char {
              display: inline-block;
              opacity: 0;
              background: linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899);
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              animation: charFloatIn 1s ease-out forwards, shine 3s linear infinite;
              filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.5));
            }

            @keyframes charFadeIn {
              from {
                opacity: 0;
                transform: translateY(80px) rotateX(-90deg);
                filter: blur(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0) rotateX(0deg);
                filter: blur(0px);
              }
            }

            @keyframes charFloatIn {
              0% {
                opacity: 0;
                transform: translateY(120px) scale(0.3) rotateZ(-15deg);
                filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0)) blur(15px);
              }
              50% {
                transform: translateY(-10px) scale(1.1) rotateZ(2deg);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1) rotateZ(0deg);
                filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.5)) blur(0px);
              }
            }

            @keyframes shine {
              to {
                background-position: 200% center;
              }
            }
          `}</style>
        </div>

>>>>>>> 3fcd4f7b5caf8190221b2ed36caaa2aae4ef504e

        <p className="text-m text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-grotesk">
          


<TextType 
  text={["Experience the future of collaborative innovation. Manage, judge, and discover hackathons with intelligent automation and transparent evaluation."]}
  typingSpeed={35}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">

  {/* 🔥 Primary Button — Explore Hackathons */}
  <button className="group relative px-8 py-3.5 rounded-full overflow-hidden font-grotesk text-lg text-white 
  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
  shadow-md shadow-purple-500/30 transition-all duration-500 ease-out 
  hover:scale-110 hover:shadow-[0_0_25px_rgba(147,51,234,0.6)]">

    {/* moving gradient shine layer */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-md animate-shine"></span>

    <span className="relative flex items-center space-x-3">
      <span className="text-[15px] tracking-wide font-semibold">Explore Hackathons</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </button>

  {/* 🎥 Secondary Button — Watch Demo */}
  <button className="group relative px-8 py-3.5 rounded-full font-grotesk text-lg text-gray-200 
  border border-white/10 bg-white/5 backdrop-blur-2xl 
  hover:bg-white/15 transition-all duration-300 hover:scale-105 
  flex items-center space-x-3 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">

    <span className="text-[15px] tracking-wide font-medium">Watch Demo</span>
    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center 
    group-hover:bg-white/20 transition-all duration-300">
      <ChevronRight className="w-4 h-4 text-white" />
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
