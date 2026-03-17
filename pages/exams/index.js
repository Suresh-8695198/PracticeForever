import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Search, 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  ClipboardList, 
  Timer,
  Award,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ExamsLandingPage = () => {
    const { isDark } = useTheme();
    
    const bg = isDark ? 'bg-[#0a0b0d]' : 'bg-[#fcfcfc]';
    const textColor = isDark ? 'text-white' : 'text-black';
    const subTextColor = isDark ? 'text-gray-100' : 'text-black font-medium';
    const cardBg = isDark ? 'bg-white/[0.03]' : 'bg-white';
    const borderColor = isDark ? 'border-white/[0.08]' : 'border-black/[0.1]';

    const headFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
    const bodyFont = { fontFamily: "'Inter', sans-serif" };

    const examCategories = [
        { 
            title: 'TNPSC', 
            fullName: 'Tamil Nadu Public Service Commission',
            desc: 'Group 1, 2, 4 and other technical exams for TN state services.',
            path: '/exams/tnpsc',
            icon: 'https://img.icons8.com/3d-fluency/94/temple.png',
            count: '15+ Modules',
            color: 'text-amber-600',
            bg: 'bg-amber-600/10'
        },
        { 
            title: 'SSC', 
            fullName: 'Staff Selection Commission',
            desc: 'CGL, CHSL, MTS and JE exams for central government departments.',
            path: '/exams/ssc',
            icon: 'https://img.icons8.com/3d-fluency/94/document.png',
            count: '24+ Modules',
            color: 'text-blue-600',
            bg: 'bg-blue-600/10',
            comingSoon: true
        },
        { 
            title: 'Banking', 
            fullName: 'Bank PO & Clerk Exams',
            desc: 'IBPS, SBI, and RBI recruitment preparation for banking careers.',
            path: '/exams/banking',
            icon: 'https://img.icons8.com/3d-fluency/94/bank.png',
            count: '12+ Modules',
            color: 'text-green-600',
            bg: 'bg-green-600/10',
            comingSoon: true
        }
    ];

    const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
    const stagger = { show: { transition: { staggerChildren: 0.1 } } };

    return (
        <div className={`min-h-screen pt-32 md:pt-44 pb-20 ${bg}`} style={bodyFont}>
            <Head>
                <title>Exams Hub | Government Exam Preparation | PracticeForever</title>
                <meta name="description" content="Access study materials and mock tests for TNPSC, SSC, Banking, and other government exams. Your one-stop destination for state and central services prep." />
            </Head>

            <div className="max-w-7xl mx-auto px-5 md:px-10">
                
                {/* Header Section */}
                <motion.header 
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mb-20 text-center space-y-6"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/5 rounded-full border border-blue-600/10">
                        <GraduationCap size={16} className="text-blue-600" />
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Master Your Exams</span>
                    </div>
                    <h1 className={`text-4xl md:text-7xl font-black tracking-tight ${textColor}`} style={headFont}>
                        All Exams <span className="text-blue-600">Hub.</span>
                    </h1>
                    <p className={`text-lg md:text-xl font-semibold opacity-60 max-w-2xl mx-auto ${textColor}`}>
                        Select your goal and start practicing with our precision-curated exam modules and real-time performance tracking.
                    </p>
                </motion.header>

                {/* Exam Categories Grid */}
                <motion.div 
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {examCategories.map((exam, i) => (
                        <motion.div 
                            key={i}
                            variants={fadeUp}
                            className={`group p-10 border-2 ${borderColor} ${cardBg} rounded-3xl relative overflow-hidden flex flex-col h-full`}
                        >
                            {exam.comingSoon && (
                                <div className="absolute top-6 right-6 px-3 py-1 bg-gray-500/10 text-gray-500 text-[9px] font-black rounded-lg uppercase tracking-widest border border-gray-500/20">
                                    Coming Soon
                                </div>
                            )}
                            
                            <div className={`w-16 h-16 ${exam.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <img src={exam.icon} alt={exam.title} className="w-10 h-10 object-contain" />
                            </div>

                            <div className="mb-6">
                                <h4 className={`text-[10px] font-black ${exam.color} uppercase tracking-widest mb-2`}>{exam.fullName}</h4>
                                <h3 className={`text-3xl font-black ${textColor}`}>{exam.title}</h3>
                            </div>

                            <p className={`text-[15px] opacity-60 leading-relaxed font-bold mb-10 flex-grow ${textColor}`}>
                                {exam.desc}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-8 border-t border-black/[0.05] dark:border-white/[0.05]">
                                <span className={`text-[11px] font-black ${textColor} opacity-40 uppercase tracking-widest`}>{exam.count}</span>
                                {exam.comingSoon ? (
                                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Locked</span>
                                ) : (
                                    <Link href={exam.path} className="text-blue-600 font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                        Enter <ArrowRight size={14} strokeWidth={3} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Stats / Trust Section */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-32 p-10 md:p-20 bg-blue-600 rounded-[50px] shadow-2xl shadow-blue-600/20 relative overflow-hidden"
                >
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl invisible md:visible"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight" style={headFont}>
                                Why millions trust <br /> PracticeForever.
                            </h2>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { icon: <ClipboardList />, title: "Updated Syllabus", desc: "Real-time updates as per official notification." },
                                    { icon: <Timer />, title: "Live Simulation", desc: "Exam-like pressure with timed virtual tests." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="text-white/80">{item.icon}</div>
                                        <h5 className="text-white font-bold text-lg">{item.title}</h5>
                                        <p className="text-white/60 text-xs font-bold leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                                <img 
                                    src="https://img.icons8.com/3d-fluency/188/medal.png" 
                                    alt="Trust Medal" 
                                    className="relative w-48 h-48 md:w-64 md:h-64 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* FAQ Link */}
                <div className="mt-24 text-center">
                    <p className={`text-[11px] font-black uppercase tracking-[0.4em] mb-4 ${textColor} opacity-30`}>Need custom study plan?</p>
                    <Link href="/contact" className="text-blue-600 font-black text-xs uppercase tracking-widest border-b-2 border-blue-600/20 hover:border-blue-600 transition-all pb-1">
                        Consult Our Exam Experts
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ExamsLandingPage;
