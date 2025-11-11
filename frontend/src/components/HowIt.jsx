import React from "react";
import { FaLightbulb, FaCogs, FaRocket } from "react-icons/fa"; // Example icons

const steps = [
  {
    title: "Idea Generation",
    desc: "Brainstorm and come up with innovative solutions to common problems.",
    icon: <FaLightbulb size={40} />,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Development",
    desc: "Transform your idea into a functional product with code and design.",
    icon: <FaCogs size={40} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Launch",
    desc: "Deploy your product and reach your target audience effectively.",
    icon: <FaRocket size={40} />,
    color: "from-green-500 to-teal-500",
  },
];

const HowIt = () => {
  return (
    <section id="about" className=" px-6 relative">
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
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} mb-8 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-white">{step.icon}</div>
                </div>
                <div className="text-sm font-semibold text-gray-500 mb-3 tracking-wider uppercase">
                  Step {idx + 1}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed max-w-sm mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIt;
