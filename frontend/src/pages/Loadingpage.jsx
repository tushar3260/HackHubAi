import React from 'react';
import Spline from '@splinetool/react-spline';

export default function LoadingPage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Text on top */}
      <h1
        style={{
          position: 'absolute',
          top: '40px',
          width: '100%',
          textAlign: 'center',
          color: '#fff',
          fontSize: '28px',
          letterSpacing: '2px',
          fontWeight: '600',
          animation: 'pulse 1.5s infinite',
          zIndex: 10,
        }}
      >
        Loading HackHub...
      </h1>

      {/* Fullscreen Spline animation */}
      <Spline
        scene="https://prod.spline.design/MEf5nleh2009rD9k/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      {/* Simple pulse animation (inline CSS) */}
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
