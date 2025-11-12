import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Sparkles,
  Award,
  BarChart3,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, LazyMotion, domAnimation } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Herosec from "../components/Herosec.jsx";
import FeaturedHack from "../components/FeaturedHack.jsx";
import AiFeatures from "../components/AiFeatures.jsx";
import HowIt from "@/components/HowIt";
import TrustedBy from '@/components/TrustedBy';

const HackHubLanding = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const lenisRef = useRef(null);

  // ✅ Smooth scroll setup (lightweight easing)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => t,
      smoothWheel: true,
      smoothTouch: true,
    });

    lenisRef.current = lenis;
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(frame);
  }, []);

  // ✅ Optimized mouse move (throttled + blur optimized)
  useEffect(() => {
    let timeout;
    const handleMouseMove = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      }, 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Animated Background (lighter blur, smoother) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-52 h-52 bg-blue-500/10 rounded-full blur-xl transition-transform duration-1000 will-change-transform"
          style={{
            transform: `translate(${mousePos.x * 0.02}px, ${
              mousePos.y * 0.02
            }px)`,
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-52 h-52 bg-purple-500/10 rounded-full blur-xl transition-transform duration-1000 will-change-transform"
          style={{
            transform: `translate(${-mousePos.x * 0.02}px, ${
              -mousePos.y * 0.02
            }px)`,
            bottom: "10%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-52 h-52 bg-cyan-500/10 rounded-full blur-xl transition-transform duration-1000 will-change-transform"
          style={{
            transform: `translate(${mousePos.x * 0.01}px, ${
              -mousePos.y * 0.01
            }px)`,
            top: "50%",
            right: "20%",
          }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      <LazyMotion features={domAnimation}>
        {/* Hero Section */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <Herosec />
</motion.div>


        {/* Featured Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <FeaturedHack />
        </motion.div>
        {/* AI Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <AiFeatures />
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <HowIt />
        </motion.div>

        {/* Trusted By */}
        <TrustedBy />

        {/* CTA Section */}
        <motion.section
          className="py-16 px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-2xl p-10 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start?
              </h2>
              <p className="text-base md:text-lg text-gray-300 font-light mb-8 max-w-xl mx-auto">
                Join thousands of innovators and start your hackathon journey
                today with AI-powered tools.
              </p>
              <button className="px-8 py-3 md:px-10 md:py-4 bg-white text-black rounded-full font-medium text-base md:text-lg hover:scale-105 transition-all hover:shadow-2xl hover:shadow-white/20">
                Get Started Free
              </button>
            </div>
          </div>
        </motion.section>
      </LazyMotion>

      {/* Footer */}
      <Footer />

      {/* CSS tweaks */}
      <style jsx>{`
        html,
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        ::-webkit-scrollbar {
          display: none;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HackHubLanding;
