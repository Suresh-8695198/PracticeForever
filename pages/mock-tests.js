import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Brain, CheckCircle, Target, TrendingUp } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function MockTestsLanding() {
  const { isDark } = useTheme();
  
  const bg = isDark ? 'bg-[#0a0b0d]' : 'bg-[#f8fafc]';
  const text = isDark ? 'text-white' : 'text-slate-900';
  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';
  const cardBg = isDark ? 'bg-[#141414] border-white/5' : 'bg-white border-slate-200';

  const strategies = [
    { title: "Time Management", desc: "Learn how to allocate your time effectively across different sections.", icon: <Timer className="w-6 h-6 text-amber-500" /> },
    { title: "Accuracy First", desc: "Focus on reducing negative marks by attempting questions you are confident about.", icon: <Target className="w-6 h-6 text-blue-500" /> },
    { title: "Pattern Analysis", desc: "Understand the recurring themes and question formats in your target exams.", icon: <Brain className="w-6 h-6 text-purple-500" /> },
  ];

  return (
    <div className={`min-h-screen pt-28 pb-20 ${bg} font-sans`}>
      <Head>
        <title>Mock Tests & Preparation Strategy | PracticeForever</title>
        <meta name="description" content="Access our comprehensive mock test strategies and practice modules for TNPSC, SSC, and Placement exams. Build your speed and accuracy." />
      </Head>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <h1 className={`text-3xl md:text-5xl font-black mb-4 tracking-tight ${text}`}>
            Preparation & <span className="text-blue-500">Mock Tests</span>
          </h1>
          <p className={`text-base md:text-lg max-w-3xl leading-relaxed ${mutedText}`}>
            Evaluating your knowledge through mock tests is the most critical phase of your preparation. 
            Before diving into full-length 3-hour mock tests, we highly recommend mastering individual concepts 
            through our targeted practice modules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className={`${cardBg} rounded-2xl border p-8 shadow-sm`}>
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className={`text-xl font-bold mb-3 ${text}`}>Phase 1: Topic-wise Practice</h2>
            <p className={`text-sm leading-relaxed mb-6 ${mutedText}`}>
              Build a strong foundation by practicing questions chapter by chapter. This helps in understanding 
              the core concepts and identifying your weak areas without the pressure of a ticking clock.
            </p>
            <Link href="/aptitude" className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
              Start Topic Practice
            </Link>
          </div>

          <div className={`${cardBg} rounded-2xl border p-8 shadow-sm`}>
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className={`text-xl font-bold mb-3 ${text}`}>Phase 2: Comprehensive Evaluation</h2>
            <p className={`text-sm leading-relaxed mb-6 ${mutedText}`}>
              Once you have completed the topic-wise practice, simulate the actual exam environment. 
              Our full-length mock test series is being calibrated to match the exact difficulty of 2026 exam patterns.
            </p>
            <div className={`px-4 py-3 rounded-xl border ${isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-amber-50 border-amber-200'} text-amber-600 font-bold text-sm text-center`}>
              Full Mock Modules Updating for 2026
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className={`text-2xl font-black mb-8 ${text}`}>Core Preparation Strategies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`${cardBg} border p-6 rounded-2xl`}>
              <div className="mb-4">{strategies[0].icon}</div>
              <h3 className={`font-bold mb-2 ${text}`}>{strategies[0].title}</h3>
              <p className={`text-sm ${mutedText}`}>{strategies[0].desc}</p>
            </div>
            <div className={`${cardBg} border p-6 rounded-2xl`}>
              <div className="mb-4">{strategies[1].icon}</div>
              <h3 className={`font-bold mb-2 ${text}`}>{strategies[1].title}</h3>
              <p className={`text-sm ${mutedText}`}>{strategies[1].desc}</p>
            </div>
            <div className={`${cardBg} border p-6 rounded-2xl`}>
              <div className="mb-4">{strategies[2].icon}</div>
              <h3 className={`font-bold mb-2 ${text}`}>{strategies[2].title}</h3>
              <p className={`text-sm ${mutedText}`}>{strategies[2].desc}</p>
            </div>
          </div>
        </div>

        {/* AdSense SEO Long Form Content */}
        <div className={`mb-12 rounded-2xl border p-8 md:p-10 ${cardBg}`}>
          <h2 className={`text-2xl font-black mb-6 ${text}`}>The Importance of Mock Tests in Competitive Exams</h2>
          <div className={`space-y-4 text-[15px] leading-relaxed ${mutedText}`}>
            <p>
              In the highly competitive landscape of Indian examinations—such as the Staff Selection Commission (SSC), Banking selections (IBPS, SBI PO), UPSC Civil Services, and state-level exams like TNPSC—mere studying is never enough. Every year, millions of candidates memorize the entire syllabus but fail to secure a passing rank. The differentiating factor between an aspirant and a selected candidate is the rigorous practice of mock tests under timed, simulated exam conditions.
            </p>
            <p>
              Simulated testing enables you to understand your relative strengths and weaknesses before the actual exam day. It helps entirely eliminate the "exam fear" or panic that occurs when facing new, complex problems. Through continuous evaluation using mock tests, you can track exactly how much time you are spending on Quantitative Aptitude versus Logical Reasoning, allowing you to optimize your strategy and attempt easier questions first to secure baseline cutoff marks.
            </p>
            <p>
              Furthermore, mock tests meticulously reflect the latest exam patterns. They expose you to the exact weightage of topics—from Daily Current Affairs to advanced algebra—as ordained by the respective examination commissions. We strongly suggest starting your preparation with topic-specific mock assessments to build conceptual clarity, and gradually escalating to full-length, 3-hour comprehensive tests a month prior to your tier-1 or preliminary exam. This scientifically proven testing loop guarantees maximum retention and drastically reduces negative marking.
            </p>
          </div>
        </div>

        <div className={`rounded-3xl p-8 md:p-12 text-center border ${isDark ? 'bg-[#1a1a1a] border-white/5' : 'bg-white border-slate-200'} shadow-xl`}>
          <TrendingUp className="w-12 h-12 mx-auto text-blue-500 mb-6" />
          <h2 className={`text-2xl md:text-3xl font-black mb-4 ${text}`}>Ready to elevate your performance?</h2>
          <p className={`max-w-2xl mx-auto text-sm md:text-base mb-8 leading-relaxed ${mutedText}`}>
            Consistent practice is the key to cracking any competitive exam. Start with our aptitude modules 
            and track your daily progress.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/exams" className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
              Explore Govt Exams
            </Link>
            <Link href="/interviews" className={`px-8 py-3.5 border font-bold rounded-xl transition-colors ${isDark ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-800 hover:bg-slate-50'}`}>
              Interview Preparation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

