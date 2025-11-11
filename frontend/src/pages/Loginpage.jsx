import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Zap, Mail, Lock, User, Eye, EyeOff, Github, Chrome, ArrowRight, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

// LAZILY LOAD THE STABLE SPLINE COMPONENT (Path verified from your last input)
const LazySplineBackground = lazy(() => import('../components/SplineBackground')); 

const HackHubAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const features = [
    { icon: <Shield className="w-4 h-4" />, text: "Bank-level encryption" },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Instant account setup" },
    { icon: <Sparkles className="w-4 h-4" />, text: "AI-powered platform" }
  ];

  const SplineFallback = () => (
    // Fallback UI (Ensures a solid dark background while Spline loads)
    <div className="fixed inset-0 bg-black/90 pointer-events-none z-0"></div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden flex items-center justify-center p-4 relative">
      
      {/* 🛑 SUSPENSE WRAPPER FOR SPLINE BACKGROUND */}
      <Suspense fallback={<SplineFallback />}>
        <LazySplineBackground />
      </Suspense>

      {/* Animated Background (Mouse movement effects) - Z-index ensures it's above Spline (z-0) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div 
          className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{ 
            transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
            bottom: '10%',
            right: '10%'
          }}
        />
      </div>

      {/* Logo (High Z-index: z-50) */}
      <a href="/" className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center space-x-2 group cursor-pointer z-50">
        <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
          <Zap className="w-4 h-4 text-white relative z-10" />
        </div>
        <span className="text-lg font-light tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          HackHub AI
        </span>
      </a>

      {/* Main Content Grid (High Z-index: z-40) */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-40">
        
        {/* Left Side - Compact */}
        <div className="hidden lg:block space-y-6">
          {/* ... Left side content ... */}
        </div>

        {/* Right Side - Compact Form Container */}
        <div className="w-full max-w-md mx-auto">
          {/* Form Panel: z-30 ensures it sits clearly above background layers (z-0, z-10) */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-2xl relative z-30"> 
            
            {/* Toggle Tabs - Compact */}
            <div className="flex items-center space-x-2 mb-6 p-1 bg-white/5 rounded-xl">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  isLogin
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  !isLogin
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form Header - Compact */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-sm text-gray-400 font-light">
                {isLogin 
                  ? 'Enter your credentials to continue' 
                  : 'Start your innovation journey today'}
              </p>
            </div>

            {/* Social Login - Compact */}
            <div className="space-y-2 mb-4">
              <button className="w-full flex items-center justify-center space-x-2 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                <Chrome className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-gray-300 font-light">Continue with Google</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-gray-300 font-light">Continue with GitHub</span>
              </button>
            </div>

            {/* Divider - Compact */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-transparent text-gray-500 font-light">Or continue with email</span>
              </div>
            </div>

            {/* Form - Compact */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-light text-gray-400 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-10 pr-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-light text-gray-400 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-light text-gray-400 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-light text-gray-400 mb-1.5">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center space-x-1.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 rounded bg-white/5 border-white/10 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-400 font-light group-hover:text-white transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-light transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>{isLogin ? 'Login' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Footer Text - Compact */}
            <p className="text-center text-xs text-gray-400 font-light mt-4">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>

            {!isLogin && (
              <p className="text-center text-xs text-gray-500 font-light mt-3 leading-relaxed px-2">
                By signing up, you agree to our{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Terms</a>
                {' '}and{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
              </p>
            )}
          </div>

          {/* Mobile Features - Compact */}
          <div className="lg:hidden mt-4 space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-2.5 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="text-gray-300 font-light text-xs">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackHubAuth;