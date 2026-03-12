import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import api from '../../utils/api';
import AnimatedLogo from '../../components/common/AnimatedLogo';
import { useTheme } from '../../context/ThemeContext';
import { 
  ShieldCheck, 
  Moon, 
  Sun, 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2, 
  CheckCircle2, 
  Shield 
} from 'lucide-react';

export default function AdminLogin() {
  const { isDark, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/admin/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('adminUser', JSON.stringify(response.data.admin));
        router.push('/admin/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Identity verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const bgClass = isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f3ef]';
  const cardBg = isDark ? 'bg-[#121212] border-zinc-800 shadow-[0_8px_40px_-4px_rgba(0,0,0,0.6)]' : 'bg-white border-[#ecebe6] shadow-[0_8px_40px_-4px_rgba(0,0,0,0.04)]';
  const textPrimary = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const inputBg = isDark ? 'bg-[#0a0a0a] border-zinc-800 focus:border-[#c89b3c] focus:ring-[#c89b3c]/20 text-white placeholder:text-zinc-600' : 'bg-[#fdfcfb] border-[#e7e5df] focus:border-[#c89b3c] focus:ring-[#c89b3c]/20 text-zinc-900 placeholder:text-zinc-400';
  
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 sm:p-6 transition-colors duration-300 ${bgClass} font-sans relative overflow-hidden`}>
      <Head>
        <title>Admin Access | Practice Forever</title>
      </Head>

      {/* Subtle Texture Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className={`absolute top-6 right-6 p-2 rounded-lg transition-all border z-50 ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200' : 'bg-white border-[#ecebe6] text-zinc-500 hover:text-zinc-800 shadow-sm'}`}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className={`w-full max-w-[960px] flex flex-col lg:flex-row items-stretch justify-center relative z-10 rounded-none overflow-hidden border shadow-none ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
        
        {/* Login Form Side */}
        <div className={`w-full lg:w-1/2 flex flex-col p-8 sm:p-12 lg:p-14 transition-all duration-300 ${isDark ? 'bg-[#121212]' : 'bg-white'}`}>
          <div className="flex flex-col mb-8 text-center sm:text-left">
            <div className="flex items-center gap-0 mb-4 justify-center sm:justify-start">
              <img src="/logo.png" alt="Logo" className="h-14 w-auto object-contain" />
              <div className="ml-[-10px]">
                <AnimatedLogo size="md" loopInterval={15000} />
              </div>
            </div>
            <p className={`text-[15px] font-medium ${textSecondary}`}>Administrator Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 flex-1 flex flex-col justify-center">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 p-3.5 rounded-[12px] text-[13px] font-medium animate-shake flex items-start gap-2.5">
                <Shield size={16} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed">{error}</span>
              </div>
            )}

            <div className="space-y-2 group relative">
              <label className={`block text-[13px] font-semibold tracking-wide ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border rounded-[12px] outline-none py-3.5 px-4 text-[15px] transition-all bg-transparent focus:border-[#c89b3c] focus:ring-0 ${isDark ? 'border-zinc-800 text-white placeholder:text-zinc-600' : 'border-zinc-200 text-zinc-900 placeholder:text-zinc-400'}`}
                  placeholder="admin@practiceforever.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 group relative">
              <div className="flex items-center justify-between">
                <label className={`block text-[13px] font-semibold tracking-wide ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  Password
                </label>
                <button type="button" className="text-[13px] font-semibold text-zinc-500 hover:text-[#c89b3c] transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border rounded-[12px] outline-none py-3.5 pl-4 pr-12 text-[15px] transition-all bg-transparent focus:border-[#c89b3c] focus:ring-0 ${isDark ? 'border-zinc-800 text-white placeholder:text-zinc-600' : 'border-zinc-200 text-zinc-900 placeholder:text-zinc-400'}`}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-zinc-600 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 pb-1">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input
                    type="checkbox"
                    checked={rememberDevice}
                    onChange={(e) => setRememberDevice(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className={`w-5 h-5 border-[1.5px] rounded-[6px] bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 peer-checked:bg-[#c89b3c] peer-checked:border-[#c89b3c] transition-colors`}></div>
                  <CheckCircle2 size={13} className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3.5} />
                </div>
                <span className={`text-[14px] font-medium ${textSecondary} group-hover:text-zinc-900 dark:group-hover:text-white transition-colors`}>Remember this device</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c89b3c] text-white font-semibold py-4 px-4 rounded-[12px] hover:bg-[#b58c35] active:scale-[0.98] transition-all shadow-none text-[15px] disabled:opacity-70 flex items-center justify-center gap-2 focus:outline-none mt-4"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              {loading ? 'Authenticating...' : 'Sign In to Admin Console'}
            </button>
          </form>

          <div className="mt-8 pt-7 border-t border-zinc-200/80 dark:border-zinc-800/80 text-center flex flex-col items-center justify-center gap-1.5">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 text-[13px] font-bold tracking-wide">
              <Lock size={14} className="text-[#c89b3c]" />
              <span>Secure Admin Access</span>
            </div>
            <p className="text-[12px] text-zinc-500 font-medium">
              Protected with multi-layer authentication
            </p>
          </div>
        </div>

        {/* Right Feature Panel */}
        <div id="admin-right-panel" className={`hidden lg:flex lg:w-1/2 flex-col justify-center p-12 lg:p-14 transition-all duration-300 relative overflow-hidden bg-[#c89b3c]`}>
          
          {/* Checked Square Grid Background Pattern */}
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,1) 1.5px, transparent 1.5px)', 
              backgroundSize: '32px 32px' 
            }}
          ></div>

          <div className="max-w-sm mx-auto lg:mx-0 relative z-10 text-white">
            <h2 className="text-[32px] sm:text-[36px] font-bold tracking-tight mb-5 leading-[1.15] !text-white !text-shadow-none">
              Elevate your platform management.
            </h2>
            
            <p className="text-[15px] sm:text-[16px] leading-[1.6] mb-10 font-medium !text-white/95 !text-shadow-none">
              Access comprehensive tools designed for modern educational platform administration and student success tracking.
            </p>
            
            <div className="space-y-6">
              {[
                "Manage practice tests and curriculum",
                "Track student analytics and performance",
                "Update question banks in real-time"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-none">
                    <CheckCircle2 size={18} strokeWidth={2.5} className="!text-white" />
                  </div>
                  <span className="text-[15px] sm:text-[16px] font-semibold tracking-wide leading-snug !text-white !text-shadow-none">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
}
