import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, Shield, Lock, Eye, Database } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PrivacyPolicy = () => {
    const { isDark } = useTheme();
    
    const bg = isDark ? 'bg-[#0a0b0d]' : 'bg-[#ffffff]';
    const textColor = isDark ? 'text-white' : 'text-black';
    const subTextColor = isDark ? 'text-gray-100' : 'text-black font-medium';
    const borderColor = isDark ? 'border-white/[0.12]' : 'border-black/[0.15]';

    const headFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
    const bodyFont = { fontFamily: "'Inter', sans-serif" };

    const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
    const stagger = { show: { transition: { staggerChildren: 0.1 } } };

    return (
        <div className={`min-h-screen pt-32 md:pt-44 pb-20 ${bg}`} style={bodyFont}>
            <Head>
                <title>Privacy Policy | PracticeForever</title>
                <meta name="description" content="Privacy Policy for PracticeForever career platform. Learn how we secure your data." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <div className="max-w-4xl mx-auto px-5 md:px-10">
                {/* Navigation */}
                <motion.header 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-12 md:mb-20"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-600 hover:opacity-70 transition-opacity mb-8">
                        <ArrowLeft size={14} strokeWidth={3} />
                        Back to Home
                    </Link>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-8 border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0">
                                <img 
                                    src="https://img.icons8.com/3d-fluency/94/shield.png" 
                                    alt="Privacy Icon" 
                                    className="w-full h-full object-contain"
                                    onError={(e) => { e.target.src = 'https://img.icons8.com/color/94/shield.png' }}
                                />
                            </div>
                            <h1 className={`text-3xl md:text-5xl font-bold tracking-tight ${textColor}`} style={headFont}>
                                Privacy <span className="text-blue-600">Policy</span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <CalendarDays size={16} className="text-blue-600" />
                            <span className={`text-[12px] font-semibold uppercase tracking-wider ${textColor}`}>Admin Updated: Mar 2026</span>
                        </div>
                    </div>
                </motion.header>

                {/* Content Layout */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="space-y-16 md:space-y-20"
                >
                    
                    {/* Section 1 */}
                    <motion.section variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">Section 01</span>
                            </div>
                            <h2 className={`text-xl md:text-2xl font-bold ${textColor}`} style={headFont}>Data Ownership</h2>
                        </div>
                        <div className={`lg:col-span-8 space-y-5 text-[15px] md:text-[16px] leading-relaxed font-medium ${subTextColor}`}>
                            <p>
                                We prioritize your data sovereignty. At <strong className="font-bold">PracticeForever</strong>, we do not sell your personal information to third-party advertisers or recruitment agencies. Any data collected is strictly used to enhance your personal learning dashboard and question-tracking metrics.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">Section 02</span>
                            </div>
                            <h2 className={`text-xl md:text-2xl font-bold ${textColor}`} style={headFont}>Collection Scope</h2>
                        </div>
                        <div className="lg:col-span-8 space-y-8">
                            <p className={`text-[15px] md:text-[16px] leading-relaxed font-medium ${subTextColor}`}>
                                We maintain a minimal data collection footprint. Our systems are designed to store only what is essential for platform continuity:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className={`p-6 border ${borderColor} rounded-2xl bg-gray-50/50 dark:bg-white/5`}>
                                    <h4 className={`text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2`}>Identity</h4>
                                    <p className={`text-[13px] font-semibold ${textColor}`}>Basic Google Auth profile data: Email, Name, and Profile Image.</p>
                                </div>
                                <div className={`p-6 border ${borderColor} rounded-2xl bg-gray-50/50 dark:bg-white/5`}>
                                    <h4 className={`text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-2`}>Analytics</h4>
                                    <p className={`text-[13px] font-semibold ${textColor}`}>Progress tracking across Aptitude, DSA, and Interview modules.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">Section 03</span>
                            </div>
                            <h2 className={`text-xl md:text-2xl font-bold ${textColor}`} style={headFont}>Ad Transparency</h2>
                        </div>
                        <div className={`lg:col-span-8 space-y-6 text-[15px] md:text-[16px] leading-relaxed font-medium ${subTextColor}`}>
                            <p>
                                We partner with Google AdSense to sustain our free educational layer. Google use cookies to serve ads based on your previous interaction with PracticeForever. 
                            </p>
                            <div className="p-6 border-l-4 border-black dark:border-white bg-black/[0.02] dark:bg-white/5">
                                <p className="text-[14px] font-bold italic">"You can manage your ad personalization settings via your Google Account at any time."</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Footer */}
                    <motion.footer variants={fadeUp} className="pt-20 mt-10 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
                        <div className="w-14 h-14 mb-6">
                            <img src="https://img.icons8.com/3d-fluency/94/help.png" alt="Help" className="w-full h-full object-contain" />
                        </div>
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.4em] mb-4 ${textColor}`}>PracticeForever Team</p>
                        <a href="mailto:admin@practiceforever.app" className={`text-2xl font-bold ${textColor} border-b-2 border-blue-600 pb-1 hover:border-black transition-all`}>
                            admin@practiceforever.app
                        </a>
                    </motion.footer>

                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
