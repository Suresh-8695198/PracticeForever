import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import api from '../../utils/api';
import { useTheme } from '../../context/ThemeContext';
import { ShieldCheck, Moon, Sun, Lock } from 'lucide-react';

export default function AdminLogin() {
  const { isDark, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const bgClass = isDark ? 'bg-black text-white' : 'bg-[#fafafa] text-gray-900';
  const cardBg = isDark ? 'bg-[#121212] border-zinc-800 shadow-2xl' : 'bg-white border-gray-100 shadow-xl';
  const inputBg = isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900';

  return (
    <div className={`min-h-screen transition-colors duration-500 flex items-center justify-center p-6 relative overflow-hidden ${bgClass}`}>
      <Head>
        <title>Identity Check | Career Platform Admin</title>
      </Head>

      {/* Theme Toggle in Corner */}
      <button 
        onClick={toggleTheme}
        className={`absolute top-8 right-8 p-3 rounded-full transition-all border ${isDark ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800' : 'bg-white border-gray-200 text-gray-400 hover:bg-gray-100 shadow-sm'}`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[160px] ${isDark ? 'bg-amber-500/5' : 'bg-amber-500/20'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[160px] ${isDark ? 'bg-amber-500/5' : 'bg-amber-500/20'}`}></div>
      </div>
      
      <div className={`w-full max-w-[440px] border rounded-[2rem] p-10 md:p-14 relative z-10 transition-all duration-500 ${cardBg}`}>
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 group cursor-default overflow-hidden relative">
            <ShieldCheck size={32} className="text-white relative z-10" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
          <h1 className={`text-2xl font-bold tracking-tight mb-2`}>Personnel Authentication</h1>
          <p className={`text-xs font-semibold uppercase tracking-widest text-amber-500`}>Career Platform Admin</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-4 rounded-xl text-xs font-bold text-center animate-shake">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className={`block text-[10px] font-bold uppercase tracking-widest ml-2 ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border py-4 px-6 rounded-xl outline-none focus:ring-2 focus:ring-amber-500/10 transition-all font-semibold text-sm ${inputBg}`}
              placeholder="admin@platform.com"
              required
            />
          </div>

          <div className="space-y-2">
             <div className="flex items-center justify-between ml-2">
                <label className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}>Security Key</label>
             </div>
             <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border py-4 px-6 rounded-xl outline-none focus:ring-2 focus:ring-amber-500/10 transition-all font-semibold text-sm ${inputBg}`}
                  placeholder="••••••••"
                  required
                />
                <Lock size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 opacity-40" />
             </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 text-white font-bold py-4 rounded-xl hover:bg-amber-600 active:scale-95 transition-all shadow-lg shadow-amber-500/20 text-sm disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Access Command Center'}
            </button>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isDark ? 'text-zinc-800' : 'text-gray-200'}`}>
            Secure Server-Side Node Synchronization
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
}
