import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline'; 

// Function to check if the browser supports WebGL (critical for Spline)
const supportsWebGL = () => {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
};

const SplineBackground = () => {
    const [hasError, setHasError] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || hasError) {
        return <div className="fixed inset-0 bg-black pointer-events-none z-0"></div>;
    }

    try {
        return (
            <div className="fixed inset-0 pointer-events-none z-0">
                <Spline
                    scene="https://prod.spline.design/0TQgTwLLLogTlQmH/scene.splinecode" 
                    // 🛑 CORRECTED: Removed 'blur-sm' for a clearer background.
                    className="w-full h-full opacity-30" 
                    onError={() => setHasError(true)} 
                />
            </div>
        );
    } catch (e) {
        console.error("Critical synchronous error during Spline render:", e);
        return <div className="fixed inset-0 bg-black pointer-events-none z-0"></div>;
    }
};

export default SplineBackground;