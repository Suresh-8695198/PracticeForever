import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Bell, Clock, Timer, BookOpen, GraduationCap, FileText } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const HandDrawnCircle = ({ children, className }) => (
  <div className={`relative inline-flex items-center justify-center p-6 ${className}`}>
    <svg className="absolute inset-0 w-full h-full text-white/40" viewBox="0 0 200 100" fill="none" preserveAspectRatio="none">
      <path 
        d="M10,50 C10,20 190,20 190,50 C190,80 10,80 10,50 Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeDasharray="5,5"
      />
      <path 
        d="M15,45 C20,15 180,15 185,45 C190,75 25,85 15,45" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
    </svg>
    <span className="relative z-10 font-[1000] italic tracking-tight text-white text-sm md:text-base">{children}</span>
  </div>
);

const TimeBlock = ({ value, label }) => (
  <div className="flex flex-col items-center flex-1">
    <div className="w-full aspect-square max-w-[110px] rounded-[1.5rem] md:rounded-[2.2rem] bg-white text-[#5E00B3] flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.3)] border-2 md:border-4 border-yellow-400 relative overflow-hidden">
      <span className="text-2xl md:text-5xl font-[1000] italic tracking-tighter">
        {value}
      </span>
    </div>
    <span className="mt-3 text-[10px] md:text-[12px] font-[1000] uppercase tracking-[0.2em] text-yellow-300 drop-shadow-sm">{label}</span>
  </div>
);

export default function MockTestsComingSoon() {
  const { isDark } = useTheme();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-04-15T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#5E00B3] selection:bg-yellow-400 selection:text-black overflow-x-hidden relative font-sans flex flex-col">
      <Head>
        <title>SOMETHING BIG! IS COMING | PracticeForever</title>
      </Head>

      {/* Background Doodles & Text - Zero Icons, 100% Human Feel */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none select-none overflow-hidden font-black italic uppercase">
        <div className="absolute top-10 left-10 text-8xl -rotate-12 text-white">TEST</div>
        <div className="absolute bottom-20 right-10 text-9xl rotate-12 text-white">PREP</div>
        <div className="absolute top-1/2 left-10 -translate-y-1/2 rotate-90 text-[10rem] text-white">MOCK</div>
        <div className="absolute bottom-10 left-1/4 text-6xl text-white">TNPSC</div>
        <div className="absolute top-1/4 right-10 text-6xl -rotate-12 text-white">SSC</div>
        
        {/* Hand-drawn scribble paths */}
        <svg className="absolute inset-0 w-full h-full text-white/40" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M50,150 Q150,50 250,150 T450,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <path d="M800,200 C850,300 950,300 900,200" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M100,800 Q200,900 300,800 T500,800" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="850" cy="750" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-24 flex flex-col items-center w-full">
        
        {/* Top Badge */}
        <div className="opacity-100">
          <HandDrawnCircle className="mb-2 md:mb-6 scale-90 md:scale-100">Success Awaits</HandDrawnCircle>
        </div>

        {/* Main Heading Text - Highly Responsive */}
        <div className="text-center mb-6 md:mb-10 relative w-full">
          <h2 className="text-white text-[12vw] md:text-[5rem] font-[1000] italic tracking-tightest leading-[0.8] uppercase opacity-70"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
          >
            Something
          </h2>

          <div className="relative group flex items-center justify-center py-4 md:py-8">
            <h1 className="text-yellow-400 text-[28vw] md:text-[15rem] font-[1000] italic tracking-tighter leading-none uppercase drop-shadow-[0_15px_60px_rgba(255,193,7,0.3)]">
              BIG!
            </h1>
            
            {/* Get Ready Badge Overlay - 'Slapped on' Offset Position */}
            <div className="absolute bg-[#5E00B3] border-[3px] md:border-4 border-white px-5 md:px-12 py-2 md:py-5 rounded-xl md:rounded-2xl shadow-2xl z-20"
              style={{ top: '55%', transform: 'translateY(-50%) rotate(-8deg) translateX(10px)' }}
            >
              <span className="text-white font-[1000] text-sm md:text-5xl italic tracking-widest whitespace-nowrap uppercase">GET READY!</span>
            </div>
          </div>

          <h2 className="text-white text-[12vw] md:text-[5rem] font-[1000] italic tracking-tight leading-[0.8] uppercase">
            is Coming
          </h2>
        </div>

        {/* Timer Section - Responsive Grid */}
        <div className="flex w-full max-w-2xl gap-3 md:gap-8 mb-16 md:mb-24">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Mins" />
          <TimeBlock value={timeLeft.seconds} label="Secs" />
        </div>

        {/* Arrow Scribble - Pointing to the bottom badge */}
        <div className="absolute left-[15%] bottom-[15%] hidden lg:block text-yellow-400 opacity-60 -rotate-10">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <path d="M10,10 C30,0 70,30 30,70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <path d="M20,50 L30,70 L50,65" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom CTA & Badge */}
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0">
            <Link href="/" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white text-[#5E00B3] rounded-[1.5rem] md:rounded-[2.2rem] font-[1000] text-sm md:text-xl italic tracking-widest hover:bg-yellow-400 hover:text-black transition-all active:scale-[0.97] shadow-2xl flex items-center justify-center gap-3">
              <ArrowLeft size={22} strokeWidth={4} /> BACK HOME
            </Link>
            <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-yellow-400 text-black rounded-[1.5rem] md:rounded-[2.2rem] font-[1000] text-sm md:text-xl italic tracking-widest hover:bg-white transition-all active:scale-[0.97] shadow-2xl flex items-center justify-center gap-3">
              NOTIFY ME <Bell size={22} strokeWidth={4} />
            </button>
          </div>

          <div className="mb-10 -rotate-3 scale-90 md:scale-110">
            <HandDrawnCircle>Start Preparing Today</HandDrawnCircle>
          </div>
        </div>
      </div>


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
        .font-sans {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </div>
  );
}
