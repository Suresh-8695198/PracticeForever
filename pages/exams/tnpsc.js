import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  ClipboardList, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Search,
  Users,
  Timer
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { tnpscNotifications, tnpscGroup4Mock } from '../../data/exams/tnpsc-data.js';

const TNPSCPage = () => {
    const { isDark } = useTheme();
    const [activeTab, setActiveTab] = useState('overview');
    
    const bg = isDark ? 'bg-[#0a0b0d]' : 'bg-[#fcfcfc]';
    const textColor = isDark ? 'text-white' : 'text-black';
    const subTextColor = isDark ? 'text-gray-100' : 'text-black font-medium';
    const cardBg = isDark ? 'bg-white/[0.03]' : 'bg-white';
    const borderColor = isDark ? 'border-white/[0.08]' : 'border-black/[0.1]';

    const headFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
    const bodyFont = { fontFamily: "'Inter', sans-serif" };

    const examGroups = [
        { id: 'group1', title: 'Group I', desc: 'Deputy Collector, DSP, Assistant Commissioner.', level: 'Degree Level' },
        { id: 'group2', title: 'Group II/IIA', desc: 'Municipal Commissioner, Sub Registrar, Assistant.', level: 'Degree Level' },
        { id: 'group4', title: 'Group IV', desc: 'VAO, Typist, Junior Assistant, Bill Collector.', level: 'SSLC Level' }
    ];

    const syllabus = {
        'group4': [
            { subject: 'General Tamil / English', weight: '100 Marks', topic: 'Language proficiency, Grammar, Literature.' },
            { subject: 'Aptitude & Mental Ability', weight: '25 Marks', topic: 'Numbers, Ratio, Profit & Loss, Logical reasoning.' },
            { subject: 'General Studies', weight: '75 Marks', topic: 'History, Polity, Economics, Indian National Movement.' }
        ],
        'group2': [
            { subject: 'General Studies (Prelims)', weight: '175 Marks', topic: 'Detailed syllabus including Unit 8 & Unit 9.' },
            { subject: 'Aptitude (Prelims)', weight: '25 Marks', topic: 'Standard mental ability questions.' },
            { subject: 'Main Written Exam', weight: '300 Marks', topic: 'Descriptive type - Administration of TN, Social Issues.' }
        ]
    };

    const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
    const stagger = { show: { transition: { staggerChildren: 0.1 } } };

    return (
        <div className={`min-h-screen pt-28 md:pt-40 pb-20 ${bg}`} style={bodyFont}>
            <Head>
                <title>TNPSC Exam Preparation 2026 | PracticeForever</title>
                <meta name="description" content="Master TNPSC Group 1, 2, and 4 exams with PracticeForever. Access official syllabus, daily current affairs, and comprehensive mock tests for Tamil Nadu state services." />
            </Head>

            <div className="max-w-7xl mx-auto px-5 md:px-10">
                
                {/* Modern Breadcrumb / Back Navigation */}
                <motion.div variants={fadeUp} initial="hidden" animate="show">
                    <Link href="/" className="group inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 mb-12">
                        <ArrowLeft size={14} strokeWidth={3} className="group-hover:-translate-x-2 transition-transform" />
                        Go Back
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 transition-all">
                    <motion.div 
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20">
                            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">State Services Hub</span>
                        </div>
                        <h1 className={`text-5xl md:text-8xl font-black tracking-tight leading-[1.1] ${textColor}`} style={headFont}>
                            TNPSC <span className="text-blue-600">Mastery.</span>
                        </h1>
                        <p className={`text-xl font-semibold opacity-80 max-w-2xl leading-relaxed ${textColor}`}>
                            Precision-engineered preparation for Tamil Nadu Public Service Commission. Stay updated, practice harder, and secure your career in the state government.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="h-16 px-10 bg-blue-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-black transition-all flex items-center gap-3">
                                Start Free Mock Test <ArrowRight size={18} />
                            </button>
                            <button className={`h-16 px-10 border-2 ${borderColor} font-bold text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all ${textColor}`}>
                                Download Syllabus
                            </button>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
                            <img 
                                src="https://img.icons8.com/3d-fluency/300/graduation-cap.png" 
                                alt="TNPSC Study" 
                                className="relative z-10 w-full h-full object-contain animate-bounce-slow"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Content Tabs Navigation */}
                <div className="flex border-b overflow-x-auto no-scrollbar mb-16 gap-10 md:gap-16 scroll-smooth">
                    {['Overview', 'Exam Groups', 'Syllabus', 'Mastery Tools'].map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={`pb-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative shrink-0 ${
                                activeTab === tab.toLowerCase() ? 'text-blue-600' : 'text-gray-400'
                            }`}
                        >
                            {tab}
                            {activeTab === tab.toLowerCase() && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content Panels */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div 
                            key="overview"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                                {tnpscNotifications.map((item, i) => (
                                    <div key={i} className={`p-10 border-2 ${borderColor} ${cardBg} hover:border-blue-600 transition-all rounded-2xl group relative`}>
                                        <div className="absolute top-6 right-8">
                                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                                                item.status === 'Active' ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'
                                            }`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className="w-12 h-12 bg-blue-600/10 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                                            <Calendar size={20} />
                                        </div>
                                        <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{item.title}</h3>
                                        <p className={`text-[10px] opacity-40 uppercase tracking-widest mb-6 ${textColor}`}>{item.date}</p>
                                        <a href={item.link} className="text-blue-600 font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                                            View Official <ArrowRight size={12} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className={`p-10 border-4 ${borderColor} rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-10`}>
                                <div className="space-y-4">
                                    <h3 className={`text-2xl font-black ${textColor}`}>Daily Current Affairs for TNPSC</h3>
                                    <p className={`font-semibold opacity-60 ${textColor}`}>Stay updated with Tamil Nadu specific state issues and national news.</p>
                                </div>
                                <Link href="/current-affairs/daily" className="h-16 px-10 bg-black text-white dark:bg-white dark:text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center">
                                    Read Today's News
                                </Link>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'exam groups' && (
                        <motion.div 
                            key="groups"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {examGroups.map((group, i) => (
                                <div key={i} className={`p-10 border-2 ${borderColor} ${cardBg} rounded-3xl group relative overflow-hidden h-full flex flex-col`}>
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.05] grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                        <Award size={64} className="text-blue-600" />
                                    </div>
                                    <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">{group.level}</h4>
                                    <h3 className={`text-3xl font-black mb-6 ${textColor}`}>{group.title}</h3>
                                    <p className={`text-sm opacity-70 leading-relaxed mb-10 flex-grow font-bold ${textColor}`}>
                                        {group.desc}
                                    </p>
                                    <button className="w-full h-14 border border-blue-600/30 text-blue-600 font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'syllabus' && (
                        <motion.div 
                            key="syllabus"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-16"
                        >
                            <div className="space-y-8">
                                <h3 className={`text-3xl font-black ${textColor}`} style={headFont}>Group IV Syllabus Breakdown</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {syllabus.group4.map((item, i) => (
                                        <div key={i} className={`p-8 border-2 ${borderColor} rounded-2xl`}>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-black rounded-lg uppercase">{item.weight}</span>
                                                <BookOpen size={18} className="text-blue-600" />
                                            </div>
                                            <h4 className={`text-lg font-bold mb-3 ${textColor}`}>{item.subject}</h4>
                                            <p className={`text-xs opacity-60 leading-relaxed font-semibold ${textColor}`}>{item.topic}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'mastery tools' && (
                        <motion.div 
                            key="tools"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-12"
                        >
                            <div className="bg-blue-600 rounded-[40px] p-10 md:p-20 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                                    <Search size={400} />
                                </div>
                                <div className="relative z-10 max-w-2xl space-y-10">
                                    <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Advanced Test <br />Simulation Lab.</h3>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <p className="text-5xl font-black">200+</p>
                                            <p className="text-xs uppercase font-bold tracking-widest opacity-80">Full Mock Exams</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-5xl font-black">Daily</p>
                                            <p className="text-xs uppercase font-bold tracking-widest opacity-80">Unit-wise Quizzes</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="h-16 px-10 bg-white text-blue-600 font-bold text-sm uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-all">
                                            Unlock All Access
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={`p-10 border-2 ${borderColor} rounded-3xl space-y-8`}>
                                <h4 className={`text-xs font-black text-blue-600 uppercase tracking-widest`}>Sample Question Preview</h4>
                                <div className="space-y-6">
                                    <p className={`text-xl font-bold ${textColor}`}>{tnpscGroup4Mock[0].question}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {tnpscGroup4Mock[0].options.map((opt, i) => (
                                            <div key={i} className={`p-4 border ${borderColor} rounded-xl font-bold text-sm ${textColor} opacity-60`}>
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-xl">
                                        <p className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-2">Answer Tooltip</p>
                                        <p className="text-green-600 font-bold text-sm">Correct Answer: {tnpscGroup4Mock[0].answer}</p>
                                        <p className={`text-xs mt-2 opacity-60 ${textColor} font-semibold`}>{tnpscGroup4Mock[0].explanation}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* FAQ / Support Footer */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-32 pt-20 border-t border-black/[0.05] dark:border-white/[0.05] text-center"
                >
                    <div className="max-w-xl mx-auto space-y-8">
                        <Timer size={48} className="mx-auto text-blue-600 opacity-20" />
                        <h3 className={`text-3xl font-black ${textColor}`}>Ready to start your journey?</h3>
                        <p className={`opacity-60 font-semibold ${textColor}`}>Our support team includes former TNPSC aspirants who can guide you through the preparation phase.</p>
                        <div className="flex justify-center gap-6">
                            <Link href="/contact" className="text-blue-600 font-black text-[11px] uppercase tracking-widest hover:translate-x-2 transition-all inline-flex items-center gap-2">
                                Contact Experts <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default TNPSCPage;
