import React from 'react';
import Head from 'next/head';
import AnimatedLogo from '../components/common/AnimatedLogo';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function LogoDemo() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center gap-16 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f3ef]'}`}>
      <Head>
        <title>Animated Logo Demo | PracticeForever</title>
      </Head>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-2.5 rounded-lg transition-all border z-50 ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200' : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-800'}`}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Title */}
      <div className="text-center">
        <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Animated Logo Preview</p>
        <p className={`text-xs ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Hover over any logo to replay the animation</p>
      </div>

      {/* Small */}
      <div className="text-center">
        <p className={`text-xs font-medium mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Small (Navbar)</p>
        <div className={`inline-flex items-center px-6 py-3 rounded-xl border ${isDark ? 'bg-[#111] border-zinc-800' : 'bg-white border-zinc-200'}`}>
          <AnimatedLogo size="sm" />
        </div>
      </div>

      {/* Medium */}
      <div className="text-center">
        <p className={`text-xs font-medium mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Medium (Default)</p>
        <div className={`inline-flex items-center px-8 py-4 rounded-xl border ${isDark ? 'bg-[#111] border-zinc-800' : 'bg-white border-zinc-200'}`}>
          <AnimatedLogo size="md" />
        </div>
      </div>

      {/* Large */}
      <div className="text-center">
        <p className={`text-xs font-medium mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Large (Hero)</p>
        <div className={`inline-flex items-center px-10 py-6 rounded-xl border ${isDark ? 'bg-[#111] border-zinc-800' : 'bg-white border-zinc-200'}`}>
          <AnimatedLogo size="lg" />
        </div>
      </div>

      {/* XL */}
      <div className="text-center">
        <p className={`text-xs font-medium mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Extra Large (Landing Page)</p>
        <div className={`inline-flex items-center px-12 py-8 rounded-xl border ${isDark ? 'bg-[#111] border-zinc-800' : 'bg-white border-zinc-200'}`}>
          <AnimatedLogo size="xl" loopInterval={8000} />
        </div>
      </div>

      {/* Transparent background demo */}
      <div className="text-center pb-16">
        <p className={`text-xs font-medium mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Transparent Background (Direct Use)</p>
        <AnimatedLogo size="lg" loopInterval={6000} />
      </div>
    </div>
  );
}
