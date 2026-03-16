import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactPage = () => {
    const { isDark } = useTheme();
    const [status, setStatus] = useState('idle');
    
    const bg = isDark ? 'bg-[#0a0b0d]' : 'bg-[#ffffff]';
    const textColor = isDark ? 'text-white' : 'text-black';
    const subTextColor = isDark ? 'text-gray-100' : 'text-black font-medium';
    const borderColor = isDark ? 'border-white/[0.2]' : 'border-black/[0.2]';

    const headFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
    const bodyFont = { fontFamily: "'Inter', sans-serif" };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => setStatus('success'), 2000);
    };

    const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
    const stagger = { show: { transition: { staggerChildren: 0.1 } } };

    return (
        <div className={`min-h-screen pt-32 md:pt-44 pb-20 ${bg}`} style={bodyFont}>
            <Head>
                <title>Contact Us | PracticeForever Help Desk</title>
                <meta name="description" content="Have questions about our career platform? Contact the PracticeForever support team for help with government exams, aptitude prep, or technical issues." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <div className="max-w-6xl mx-auto px-5 md:px-10">
                
                {/* Minimalist Contact Header */}
                <motion.header 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-16 md:mb-24"
                >
                    <Link href="/" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-blue-600">
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" strokeWidth={3} />
                        Back to Home
                    </Link>
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-12">
                        <div className="space-y-4">
                            <h1 className={`text-4xl md:text-7xl font-bold tracking-tight ${textColor}`} style={headFont}>
                                Get in <span className="text-blue-600">Touch.</span>
                            </h1>
                            <p className={`text-lg md:text-xl font-semibold ${textColor} opacity-100 max-w-sm`}>
                                Questions? Suggestions? Our support team is standing by.
                            </p>
                        </div>
                        <div className="w-24 h-24 hover:scale-110 transition-transform hidden md:block opacity-100">
                            <img 
                                src="https://img.icons8.com/3d-fluency/188/customer-support.png" 
                                alt="Support" 
                                className="w-full h-full object-contain"
                                onError={(e) => { e.target.src = 'https://img.icons8.com/color/188/customer-support.png' }}
                            />
                        </div>
                    </div>
                </motion.header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    
                    {/* Left Side: Contact Form */}
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="lg:col-span-7"
                    >
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-10 border-2 border-emerald-500/20 rounded-sm">
                                <CheckCircle2 size={64} className="text-emerald-500 mb-6" />
                                <h2 className={`text-2xl font-bold mb-4 ${textColor}`} style={headFont}>Message Sent!</h2>
                                <p className="font-semibold opacity-60">We'll get back to you within 24 hours.</p>
                                <button onClick={() => setStatus('idle')} className="mt-8 text-blue-600 font-bold text-sm uppercase tracking-widest underline decoration-2 underline-offset-8">Send another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className={`border-b-2 ${borderColor} focus-within:border-blue-600 transition-colors pb-4`}>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2 block">Name</label>
                                    <input 
                                        required
                                        type="text" 
                                        placeholder="Enter full name"
                                        className={`w-full bg-transparent outline-none text-xl md:text-3xl font-bold placeholder:text-black/60 ${textColor}`}
                                    />
                                </div>

                                <div className={`border-b-2 ${borderColor} focus-within:border-blue-600 transition-colors pb-4`}>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2 block">Email</label>
                                    <input 
                                        required
                                        type="email" 
                                        placeholder="your@email.com"
                                        className={`w-full bg-transparent outline-none text-xl md:text-3xl font-bold placeholder:text-black/60 ${textColor}`}
                                    />
                                </div>

                                <div className={`border-b-2 ${borderColor} focus-within:border-blue-600 transition-colors pb-4`}>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2 block">Message</label>
                                    <textarea 
                                        required
                                        rows="2"
                                        placeholder="How can we help?"
                                        className={`w-full bg-transparent outline-none text-xl md:text-3xl font-bold placeholder:text-black/60 resize-none mt-2 ${textColor}`}
                                    ></textarea>
                                </div>

                                <button 
                                    disabled={status === 'submitting'}
                                    className="h-16 md:h-20 w-full md:w-auto md:px-16 bg-blue-600 text-white font-bold text-lg transition-all hover:bg-black active:scale-[0.98] flex items-center justify-center gap-4 group disabled:opacity-50"
                                >
                                    {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                                    <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right Side: Channels */}
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="lg:col-span-5 space-y-16"
                    >
                        <section className="space-y-8">
                            <h4 className={`text-[11px] font-bold uppercase tracking-[0.3em] opacity-30 ${textColor}`}>Channels</h4>
                            <div className="space-y-8">
                                <motion.div variants={fadeUp} className="flex gap-6 items-start">
                                    <div className="w-10 h-10 shrink-0">
                                        <img src="https://img.icons8.com/3d-fluency/94/mail.png" alt="Email" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-600 mb-1">Our Primary Mail</p>
                                        <a href="mailto:contact@practiceforever.app" className={`text-lg md:text-xl font-semibold ${textColor} hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all pb-1`}>
                                            contact@practiceforever.app
                                        </a>
                                    </div>
                                </motion.div>
                                
                                <motion.div variants={fadeUp} className="flex gap-6 items-start">
                                    <div className="w-10 h-10 shrink-0">
                                        <img src="https://img.icons8.com/3d-fluency/94/user-group-man-woman.png" alt="Developers" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-600 mb-1">The Developers</p>
                                        <p className={`text-base md:text-lg font-semibold ${textColor} opacity-100 leading-snug`}>
                                            Developed with 🖤Practice<strong className="font-style  font-bold text-green-700">Forever</strong> by <br />
                                            Suresh G & Hari Gayathiri M
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        <motion.div variants={fadeUp} className="p-8 border-4 border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
                            <p className="text-[13px] font-semibold italic opacity-40 leading-relaxed text-center">
                                "We are a small team of passionate developers. We usually respond to all inquiries within 24-48 hours."
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
