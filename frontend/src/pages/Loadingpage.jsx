import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function LoadingPage({
  onFinish,
  text = "Loading HackHub...", // default loading text
  duration = 3000, // default loading duration in ms
  bgColor = "black", // default background color
  splineScene = "https://prod.spline.design/MEf5nleh2009rD9k/scene.splinecode", // default spline scene
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    // Simulate Spline load time (or real load with onLoad callback)
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "auto";
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [duration]);

  // Call parent callback when loading finishes
  useEffect(() => {
    if (isLoaded && onFinish) {
      onFinish();
    }
  }, [isLoaded, onFinish]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ zIndex: 9999, backgroundColor: bgColor }}
    >
      {/* Loading Text */}
      <h1
        style={{
          position: "absolute",
          top: "40px",
          width: "100%",
          textAlign: "center",
          color: "#fff",
          fontSize: "28px",
          letterSpacing: "2px",
          fontWeight: "600",
          animation: "pulse 1.5s infinite",
          zIndex: 10,
        }}
      >
        {text}
      </h1>

      {/* Spline 3D Animation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <Spline
          scene={splineScene}
          onLoad={() => console.log("Spline loaded")}
        />
      </div>

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
