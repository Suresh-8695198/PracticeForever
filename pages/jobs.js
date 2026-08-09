import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Briefcase, ArrowLeft, Send, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function JobsPlaceholder() {
  const { isDark } = useTheme();

  const bg = isDark ? 'bg-[#0f0f11] text-zinc-100' : 'bg-[#f8f9fa] text-zinc-950';
  const cardBg = isDark ? 'bg-[#18181b]/50 border-zinc-800' : 'bg-white border-zinc-200/50 shadow-sm';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-500';

  return (
    <div className={`min-h-screen pt-28 pb-20 flex flex-col items-center justify-center ${bg}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
      <Head>
        <title>Careers, Placement & Job Boards | Practice Forever</title>
        <meta name="description" content="Explore job openings, internships, and off-campus placements. Our corporate hiring network portal is launching soon." />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-xl mx-auto px-6 text-center space-y-8">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-black uppercase tracking-widest animate-pulse">
          <Sparkles size={12} />
          Portal Launching Soon
        </div>

        {/* Icon container */}
        <div className="relative w-24 h-24 mx-auto rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group hover:rotate-12 transition-transform duration-500">
          <Briefcase size={40} strokeWidth={1.5} />
        </div>

        {/* Text descriptions */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Placement & Job Boards
          </h1>
          <p className={`text-sm md:text-base leading-relaxed ${textMuted}`}>
            We are building a unified hub matching top recruiters from IT and product firms with qualified applicants. Track off-campus notifications and apply to verified positions directly.
          </p>
        </div>

        {/* Interactive Newsletter Box */}
        <div className={`border rounded-2xl p-6 ${cardBg}`}>
          <h3 className="text-xs font-black uppercase tracking-wider mb-2 text-amber-500">Get Notified First</h3>
          <p className={`text-xs ${textMuted} mb-4`}>
            Enter your email to receive weekly digests of upcoming off-campus drives.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="name@example.com" 
              className={`flex-1 text-xs py-3 px-4 rounded-xl border outline-none transition-all ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-100 focus:border-amber-500' 
                  : 'bg-white border-zinc-200 text-zinc-900 focus:border-amber-600'
              }`}
            />
            <button 
              onClick={() => alert("Thank you! You've been subscribed successfully.")}
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl px-4 py-3 flex items-center justify-center transition-all active:scale-95"
            >
              <Send size={14} />
            </button>
          </div>
        </div>

        {/* Back Link */}
        <div>
          <Link href="/" className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-amber-500 transition-colors ${textMuted}`}>
            <ArrowLeft size={14} strokeWidth={2.5} />
            Back to Home Hub
          </Link>
        </div>

      </div>
    </div>
  );
}
