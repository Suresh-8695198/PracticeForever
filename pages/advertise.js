import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, BarChart3, Users2, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AdvertisePage = () => {
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
                <title>Advertise & Partner | PracticeForever</title>
                <meta name="description" content="Partner with PracticeForever to reach thousands of students preparing for career milestones. Discover native advertising and sponsorship opportunities." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <div className="max-w-6xl mx-auto px-5 md:px-10">
                
                {/* Clean Header */}
                <motion.header 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-16 md:mb-24"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-[900] uppercase tracking-widest text-blue-600 mb-12 hover:translate-x-[-2px] transition-transform">
                        <ArrowLeft size={14} strokeWidth={3} />
                        Back to Home
                    </Link>
                    
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b-4 border-black dark:border-white pb-12">
                        <h1 className={`text-4xl md:text-7xl font-[900] tracking-tighter leading-none ${textColor}`} style={headFont}>
                            Advertise<span className="text-blue-600">.</span>
                        </h1>
                        <p className={`text-lg md:text-xl font-black ${textColor} opacity-100 max-w-sm lg:text-right`}>
                            Empowering students with a high-quality career talent ecosystem for modern preparation.
                        </p>
                    </div>
                </motion.header>

                <div className="space-y-24 md:space-y-32">
                    
                    {/* Performance Stats */}
                    <motion.section 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                    >
                        {[
                            { img: "https://img.icons8.com/3d-fluency/94/conference.png", val: "Rising", label: "Student Hub" },
                            { img: "https://img.icons8.com/3d-fluency/94/timer.png", val: "Focused", label: "Study Sessions" },
                            { img: "https://img.icons8.com/3d-fluency/94/ok.png", val: "Verified", label: "Preparation" },
                            { img: "https://img.icons8.com/3d-fluency/94/line-chart.png", val: "Growth", label: "Daily Logic" }
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                                <div className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all">
                                    <img 
                                        src={stat.img} 
                                        className="w-full h-full object-contain" 
                                        alt={stat.label}
                                        onError={(e) => { e.target.src = 'https://img.icons8.com/color/94/bar-chart.png' }}
                                    />
                                </div>
                                <h3 className={`text-2xl md:text-3xl font-[950] ${textColor}`} style={headFont}>{stat.val}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.section>

                    {/* Solutions */}
                    <motion.section 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20"
                    >
                        <div className="lg:col-span-4">
                            <h2 className={`text-3xl font-black mb-6 ${textColor}`} style={headFont}>Native Ads & Partnerships.</h2>
                            <p className={`text-base leading-relaxed ${subTextColor} font-black`}>
                                We move beyond banner noise. Your brand becomes a part of the learner's milestone.
                            </p>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
                            {[
                                { title: "Topic Sponsorship", desc: "Integrate into aptitude theory and interview module content." },
                                { title: "Lead Generation", desc: "Direct outreach to top-scoring students in specific modules." },
                                { title: "Display Media", desc: "Premium placements in non-intrusive zones across the platform." },
                                { title: "Career Newsletters", desc: "Reach our weekly subscriber base via email partnership." }
                            ].map((sol, i) => (
                                <div key={i} className="space-y-3">
                                    <h4 className={`text-lg font-black ${textColor} border-l-4 border-blue-600 pl-4`}>{sol.title}</h4>
                                    <p className={`text-[15px] font-bold ${subTextColor} opacity-100 leading-relaxed`}>{sol.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Final CTA */}
                    <section className="pt-20 border-t border-black/5 dark:border-white/5 flex flex-col items-center">
                        <div className="w-20 h-20 mb-10 shrink-0">
                            <img src="https://img.icons8.com/3d-fluency/188/handshake.png" className="w-full h-full" alt="Team" />
                        </div>
                        <h2 className={`text-3xl md:text-5xl font-black mb-10 text-center ${textColor}`} style={headFont}>Start a Partnership.</h2>
                        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                            <a href="mailto:contact@practiceforever.app" className="h-16 flex-1 bg-black text-white dark:bg-white dark:text-black font-black text-sm uppercase tracking-widest flex items-center justify-center hover:scale-105 transition-transform">
                                Partner Enquiry
                            </a>
                            <Link href="/contact" className={`h-16 flex-1 border border-black/10 dark:border-white/10 font-bold text-sm flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5`}>
                                Contact Us
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default AdvertisePage;
