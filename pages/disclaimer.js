import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DisclaimerPage = () => {
    const { isDark } = useTheme();
    
    const bg = isDark ? 'bg-[#0a0b0d]' : 'bg-[#ffffff]';
    const textColor = isDark ? 'text-white' : 'text-black';
    const subTextColor = isDark ? 'text-gray-100' : 'text-black font-medium';
    const accentColor = "#e11d48"; // Rose 600

    const headFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
    const bodyFont = { fontFamily: "'Inter', sans-serif" };

    const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
    const stagger = { show: { transition: { staggerChildren: 0.1 } } };

    return (
        <div className={`min-h-screen pt-32 md:pt-44 pb-20 ${bg}`} style={bodyFont}>
            <Head>
                <title>Legal Disclaimer | PracticeForever</title>
                <meta name="description" content="Official disclaimer for PracticeForever. Read about our content accuracy, professional results, and liability policies." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <article className="max-w-4xl mx-auto px-5 md:px-10">
                
                <motion.header 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-16 md:mb-20"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.4em] text-rose-600 mb-12 hover:gap-4 transition-all">
                        <ArrowLeft size={14} strokeWidth={3} />
                        Back to Home
                    </Link>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b pb-10 border-gray-100 dark:border-white/5">
                        <div className="space-y-2">
                            <h1 className={`text-4xl md:text-5xl font-black tracking-tight ${textColor}`} style={headFont}>
                                Service <span className="text-rose-600">Disclaimer</span>
                            </h1>
                            <p className="text-[12px] font-bold text-rose-600 uppercase tracking-widest">Transparency Notice</p>
                        </div>
                        <div className="w-20 h-20 grayscale-0 opacity-100 hover:scale-110 transition-all shrink-0">
                            <img 
                                src="https://img.icons8.com/3d-fluency/188/warning-shield.png" 
                                alt="Warning Icon" 
                                className="w-full h-full object-contain"
                                onError={(e) => { e.target.src = 'https://img.icons8.com/color/188/warning-shield.png' }}
                            />
                        </div>
                    </div>
                </motion.header>

                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="space-y-12 md:space-y-16"
                >
                    
                    <motion.section variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <h2 className="lg:col-span-4 text-xl font-black uppercase tracking-widest opacity-20 hidden lg:block">01/ Content</h2>
                        <div className="lg:col-span-8 space-y-6">
                            <h3 className={`text-xl md:text-2xl font-bold ${textColor}`} style={headFont}>Information Accuracy</h3>
                            <p className={`text-[15px] md:text-[16px] leading-[1.8] font-medium ${subTextColor}`}>
                                PracticeForever provides its career preparation content on an "as-is" basis. While our engineering team works to ensure the accuracy of Aptitude, DSA, and Interview Prep materials, we do not guarantee that the site will be error-free or that all information is 100% accurate at all times.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <h2 className="lg:col-span-4 text-xl font-black uppercase tracking-widest opacity-20 hidden lg:block">02/ Outcomes</h2>
                        <div className="lg:col-span-8 space-y-6">
                            <h3 className={`text-xl md:text-2xl font-bold ${textColor}`} style={headFont}>Professional Results</h3>
                            <p className={`text-[15px] md:text-[16px] leading-[1.8] font-medium ${subTextColor}`}>
                                We provide tutorials and practice environments, not professional recruitment or legal career advice. Use of PracticeForever does not guarantee job placement, successful interviews, or specific academic outcomes.
                            </p>
                        </div>
                    </motion.section>

                    <motion.div variants={fadeUp} className="p-8 md:p-10 border-2 border-rose-500/10 bg-rose-500/[0.02] dark:bg-rose-500/[0.05]">
                        <p className={`text-[15px] md:text-[16px] font-bold italic leading-relaxed text-center ${textColor}`}>
                            "The use of any information provided on this platform is strictly at your own risk. We are not liable for any personal or professional consequences resulting from site usage."
                        </p>
                    </motion.div>

                    <motion.footer variants={fadeUp} className="pt-20 text-center opacity-100">
                        <div className="flex flex-wrap justify-center gap-8 mb-4">
                            <Link href="/privacy" className={`text-[11px] font-black uppercase tracking-widest ${textColor} hover:text-rose-600 transition-colors border-b border-black/20`}>Privacy Policy</Link>
                            <Link href="/terms" className={`text-[11px] font-black uppercase tracking-widest ${textColor} hover:text-rose-600 transition-colors border-b border-black/20`}>Terms of Service</Link>
                        </div>
                        <p className="text-[10px] uppercase font-black tracking-[0.4em] text-black/80 dark:text-white/80">Official Legal Hub 2026</p>
                    </motion.footer>

                </motion.div>
            </article>
        </div>
    );
};

export default DisclaimerPage;
