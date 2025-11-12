import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiOpenai,
  SiVercel,
  SiGit,
  SiGithub,
  SiPython,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact className="text-cyan-400" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-400" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-sky-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-green-500" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb className="text-green-400" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPython className="text-yellow-400" />, title: "Python", href: "https://python.org" },
  { node: <SiOpenai className="text-emerald-400" />, title: "OpenAI", href: "https://openai.com" },
  { node: <SiGit className="text-orange-500" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-gray-300" />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
];

const TrustedBy = () => {
  return (
    <div className="relative w-full py-10 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f14] to-black overflow-hidden">
      {/* Section Title */}
      <h2 className="text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-2xl sm:text-3xl font-grotesk font-bold tracking-wide">
        Powered by Modern Tech Stack ⚙️
      </h2>

      {/* Glowing Container */}
      <div className="relative mx-auto max-w-6xl h-[90px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(147,51,234,0.25)] overflow-hidden">

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradientFlow"></div>

        {/* Logo Loop */}
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={45}
          hoverSpeed={10}
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Technology Stack Logos"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
