import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Timer, ArrowLeft, Bell, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function MockTestsComingSoon() {
  const { isDark } = useTheme();

  const bg = isDark ? 'bg-[#0a0a0a] text-gray-100' : 'bg-gray-50 text-gray-900';
  const card = isDark ? 'bg-[#141414] border-[#242424]' : 'bg-white border-gray-100 shadow-xl';

  return (
    <div className={`min-h-screen pt-32 pb-20 px-4 ${bg}`}>
      <Head>
        <title>Mock Tests Coming Soon | PracticeForever</title>
        <meta name="description" content="Our full-featured Mock Test module is under development. Get ready for the most realistic preparation experience." />
      </Head>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-widest mb-8"
        >
          <Sparkles size={14} /> Under Development
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
        >
          Something <span className="text-[#FFC107]">Powerful</span> <br />is Brewing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          We are building a world-class Mock Test engine with real-time analytics, AI-driven feedback, and realistic exam patterns.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            { icon: Timer, title: 'Timed Exams', desc: 'Experience the pressure of real exams with our smart timer.' },
            { icon: ShieldCheck, title: 'Quality Questions', desc: 'Curated by toppers for TNPSC, SSC, and IT rounds.' },
            { icon: Rocket, title: 'Live Performance', desc: 'Instant result analysis and state-wide rankings.' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className={`p-6 rounded-2xl border ${card}`}
            >
              <feature.icon className="text-[#FFC107] mb-4" size={28} />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFC107] text-black rounded-xl font-black hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-amber-500/20">
            Notify Me When Launched <Bell size={18} />
          </button>
        </div>

        <p className="mt-12 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          Expected Launch: April 2026
        </p>
      </div>
    </div>
  );
}
