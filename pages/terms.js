import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Globe, Gavel, Scale } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TermsOfService = () => {
    const { isDark } = useTheme();
    
    const bg = isDark ? 'bg-[#0a0b0d]' : 'bg-[#fcfcfc]';
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
                <title>Terms & Conditions | PracticeForever</title>
                <meta name="description" content="View the Terms and Conditions for using PracticeForever. Understand your rights and responsibilities when using our career preparation tools." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <div className="max-w-5xl mx-auto px-5 md:px-10">
                {/* Minimalist Header */}
                <motion.header 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <Link href="/" className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                            <ArrowLeft size={18} />
                        </Link>
                        <div className="h-px flex-1 bg-black/5 dark:bg-white/5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black dark:text-white">Document / MSA</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${textColor}`} style={headFont}>
                                Terms & <span className="text-amber-500">Conditions</span>
                            </h1>
                            <p className="text-[11px] font-black text-amber-600 uppercase tracking-widest">Effective Date: March 2026</p>
                        </div>
                        <div className="shrink-0 w-20 h-20 grayscale hover:grayscale-0 transition-all">
                            <img 
                                src="https://img.icons8.com/3d-fluency/94/law.png" 
                                alt="Law Icon" 
                                className="w-full h-full object-contain"
                                onError={(e) => { e.target.src = 'https://img.icons8.com/color/94/law.png' }}
                            />
                        </div>
                    </div>
                </motion.header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
                    {/* Floating Side Nav for Desktop */}
                    <aside className="lg:col-span-3 lg:sticky lg:top-32 h-fit space-y-6 hidden lg:block">
                        <nav className="space-y-4">
                            {['License', 'Usage', 'Liability', 'General'].map((text, i) => (
                                <a key={i} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[#000] dark:text-white hover:text-amber-600 cursor-pointer transition-all">
                                    <span className="text-amber-500">0{i+1}</span> {text}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <motion.main 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="lg:col-span-9 space-y-16 md:space-y-24"
                    >
                        
                        <motion.section variants={fadeUp}>
                            <h2 className={`text-2xl font-black mb-6 ${textColor}`} style={headFont}>01/ Platform License</h2>
                            <div className={`text-[15px] md:text-[16px] leading-relaxed font-medium space-y-6 ${subTextColor}`}>
                                <p>
                                    PracticeForever grants you a limited, non-exclusive, non-transferable license to access our career tools and educational material for personal preparation. 
                                </p>
                                <p>
                                    Redistributing our content for commercial profit, or using automated scrapers to harvest our database questions, is strictly prohibited and will result in immediate account suspension.
                                </p>
                            </div>
                        </motion.section>

                        <motion.section variants={fadeUp}>
                            <h2 className={`text-2xl font-black mb-6 ${textColor}`} style={headFont}>02/ Acceptable Usage</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Ethical Practicing", desc: "Users must not attempt to manipulate mastery scores or leaderboard rankings using scripts." },
                                    { title: "One Account Policy", desc: "Subscriptions or accounts are for single individual use only and cannot be shared." }
                                ].map((item, i) => (
                                    <div key={i} className={`pb-6 border-b ${borderColor}`}>
                                        <h4 className="text-[12px] font-black uppercase tracking-widest text-amber-600 mb-2">{item.title}</h4>
                                        <p className={`text-[15px] font-bold ${textColor}`}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section variants={fadeUp}>
                            <div className="p-8 md:p-10 border-4 border-black/5 dark:border-white/5 rounded-sm">
                                <h3 className={`text-xl font-black mb-4 ${textColor}`} style={headFont}>Liability Disclaimer</h3>
                                <p className={`text-[15px] md:text-[16px] leading-relaxed font-medium ${subTextColor}`}>
                                    All materials on PracticeForever are provided 'as is'. We do not guarantee jobs, exam scores, or university placements. We provide the infrastructure for growth, but your success depends on your dedication.
                                </p>
                            </div>
                        </motion.section>

                        <motion.footer variants={fadeUp} className="pt-20 border-t border-black/[0.05] dark:border-white/[0.05]">
                            <p className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white mb-6">Have Questions?</p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <a href="mailto:contact@practiceforever.app" className="inline-flex h-14 px-8 items-center bg-black text-white dark:bg-white dark:text-black font-black text-[13px] uppercase tracking-widest hover:scale-105 transition-transform">
                                    Contact Team
                                </a>
                                <Link href="/privacy" className="inline-flex h-14 px-8 items-center border border-black/10 dark:border-white/10 font-black text-[13px] uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                                    Privacy Policy
                                </Link>
                            </div>
                        </motion.footer>

                    </motion.main>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
