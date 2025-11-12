import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Zap, Mail, Lock, User, Eye, EyeOff, Github, Chrome, ArrowRight, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LazySplineBackground = lazy(() => import('../components/SplineBackground')); 

const HackHubAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'user'
  });

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

  const preloadSplineAssets = () => {
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://prod.spline.design';
    document.head.appendChild(preconnect);
    
    const preloadScript = document.createElement('link');
    preloadScript.rel = 'preload';
    preloadScript.href = 'https://unpkg.com/@splinetool/runtime@0.9.x/build/spline-viewer.js';
    preloadScript.as = 'script';
    document.head.appendChild(preloadScript);
  };

  useEffect(() => {
    preloadSplineAssets(); 
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/login`,
        {
          email: formData.email,
          password: formData.password
        }
      );

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        setSuccess(response.data.message || 'Login successful! Redirecting...');
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.response?.data?.message || 
        'Login failed. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/register`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone || '',
          role: formData.role
        }
      );

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        setSuccess(response.data.message || 'Account created successfully! Redirecting...');
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      }
    } catch (err) {
      console.error('Register error:', err);
      setError(
        err.response?.data?.message || 
        'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin(e);
    } else {
      handleSignup(e);
    }
  };

  const features = [
    { icon: <Shield className="w-3.5 h-3.5" />, text: "Bank-level encryption" },
    { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "Instant account setup" },
    { icon: <Sparkles className="w-3.5 h-3.5" />, text: "AI-powered platform" }
  ];

  const SplineFallback = () => (
    <div className="fixed inset-0 bg-black/90 pointer-events-none z-0"></div>
  );

  return (
    <div className="h-screen bg-black text-white font-sans overflow-hidden flex items-center justify-center p-3 relative">
      
      <Suspense fallback={<SplineFallback />}>
        <LazySplineBackground />
      </Suspense>

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

      <a href="/" className="absolute top-3 left-3 md:top-4 md:left-4 flex items-center space-x-2 group cursor-pointer z-50">
        <div className="relative w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
          <Zap className="w-3.5 h-3.5 text-white relative z-10" />
        </div>
        <span className="text-sm md:text-base font-light tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          HackHub AI
        </span>
      </a>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-40">
        
        {/* Left Side */}
        <div className="hidden lg:block space-y-3">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              <Sparkles className="w-2.5 h-2.5 text-blue-400" />
              <span className="text-xs text-gray-400">AI-Powered Platform</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight leading-tight">
              Welcome to the
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future of Hackathons
              </span>
            </h1>
            
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Join thousands of innovators building the next generation of technology.
            </p>
          </div>

          <div className="space-y-1.5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 p-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-xs text-gray-300 font-light">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[{ value: '50K+', label: 'Users' }, { value: '1.2K+', label: 'Hackathons' }, { value: '98%', label: 'Success' }].map((stat, idx) => (
              <div key={idx} className="text-center p-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-4 border border-white/10 shadow-2xl relative z-30"> 
            
            <div className="flex items-center space-x-2 mb-3 p-1 bg-white/5 rounded-xl">
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                  setSuccess('');
                }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isLogin
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setError('');
                  setSuccess('');
                }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  !isLogin
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="text-center mb-3">
              <h2 className="text-xl font-bold text-white mb-0.5">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-xs text-gray-400 font-light">
                {isLogin 
                  ? 'Enter your credentials to continue' 
                  : 'Start your innovation journey today'}
              </p>
            </div>

            {error && (
              <div className="mb-2 p-2 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-2 p-2 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-xs">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-xs font-light text-gray-400 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required={!isLogin}
                        className="w-full pl-9 pr-2.5 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-light text-gray-400 mb-1">Phone Number (Optional)</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-2.5 pr-2.5 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-light text-gray-400 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-9 pr-2.5 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-light text-gray-400 mb-1">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full pl-9 pr-9 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-light text-gray-400 mb-1">Confirm Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required={!isLogin}
                      className="w-full pl-9 pr-2.5 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center space-x-1.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded bg-white/5 border-white/10 text-blue-600 focus:ring-blue-500"
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
                disabled={loading}
                className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                <span>{loading ? 'Please wait...' : (isLogin ? 'Login' : 'Create Account')}</span>
                {!loading && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 font-light mt-3">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setSuccess('');
                  setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phone: '',
                    role: 'user'
                  });
                }}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>

            {!isLogin && (
              <p className="text-center text-xs text-gray-500 font-light mt-2 leading-relaxed px-2">
                By signing up, you agree to our{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Terms</a>
                {' '}and{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
              </p>
            )}
          </div>

          <div className="lg:hidden mt-3 space-y-1.5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
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