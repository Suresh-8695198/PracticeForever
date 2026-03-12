import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop';
            const sh = 'scrollHeight';
            const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            setScrollProgress(percent);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group ${scrollProgress > 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            title="Back to Top"
        >
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[1.5px]">
                <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="100, 100"
                    strokeDashoffset={100 - scrollProgress}
                    className="text-amber-400 transition-all duration-150"
                    pathLength="100"
                    strokeLinecap="round"
                />
            </svg>
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 rotate-90 text-zinc-800 dark:text-zinc-200 group-hover:-translate-y-1 transition-transform relative z-10" strokeWidth={2.5} />
            <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-0.5 relative z-10">Top</span>
        </button>
    );
};

export default ScrollToTop;
