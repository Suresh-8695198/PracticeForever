import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Rocket, Users, Shield, Award } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const AboutUs = () => {
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
                <title>About Us | PracticeForever Story</title>
                <meta name="description" content="Learn about PracticeForever, India's premier career preparation platform. Meet our developers and understand our mission to help students achieve their goals." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <div className="max-w-6xl mx-auto px-5 md:px-10">
                {/* Header */}
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
                                Our <span className="text-blue-600">Story.</span>
                            </h1>
                            <p className={`text-lg md:text-xl font-semibold ${textColor} opacity-100 max-w-xl`}>
                                Empowering India's next generation of professionals through accessible, high-quality career preparation.
                            </p>
                        </div>
                        <div className="w-24 h-24 hover:scale-110 transition-transform hidden md:block">
                            <img 
                                src="https://img.icons8.com/3d-fluency/188/rocket.png" 
                                alt="Mission" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </motion.header>

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="lg:col-span-8 space-y-20"
                    >
                        {/* Who We Are */}
                        <motion.section variants={fadeUp} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Users className="text-blue-600" size={28} />
                                <h2 className={`text-2xl md:text-3xl font-bold ${textColor}`} style={headFont}>Who We Are</h2>
                            </div>
                            <div className={`text-lg leading-relaxed ${subTextColor} space-y-4 font-bold`}>
                                <p>
                                    PracticeForever was founded by <strong>Suresh G</strong> and <strong>Hari Gayathiri M</strong>, two passionate developers who recognized the massive gap in quality career preparation resources for Indian students.
                                </p>
                                <p>
                                    What started as a small project to help our peers has grown into a comprehensive platform serving thousands of candidates preparing for TNPSC, SSC, Banking, and IT interviews.
                                </p>
                            </div>
                        </motion.section>

                        {/* Our Mission */}
                        <motion.section variants={fadeUp} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Target className="text-blue-600" size={28} />
                                <h2 className={`text-2xl md:text-3xl font-bold ${textColor}`} style={headFont}>Our Mission</h2>
                            </div>
                            <div className={`text-lg leading-relaxed ${subTextColor} font-bold`}>
                                <p>
                                    Our mission is simple: to make career success a reality for everyone, regardless of their background. We believe that with the right practice tools and real-time analytics, every student can unlock their potential and secure their dream job.
                                </p>
                            </div>
                        </motion.section>

                        {/* What We Offer */}
                        <motion.section variants={fadeUp} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Award className="text-blue-600" size={28} />
                                <h2 className={`text-2xl md:text-3xl font-bold ${textColor}`} style={headFont}>What We Offer</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Exam Mastery", desc: "Comprehensive mock tests for TNPSC, SSC, and Banking exams." },
                                    { title: "Aptitude Pro", desc: "Expertly curated quantitative, logical, and verbal practice." },
                                    { title: "Coding Labs", desc: "Real-world interview problems for top software companies." },
                                    { title: "Daily Insights", desc: "Real-time current affairs updates to keep you ahead." }
                                ].map((item, i) => (
                                    <div key={i} className={`p-6 border-2 ${borderColor} rounded-xl hover:border-blue-600 transition-all`}>
                                        <h4 className="text-blue-600 font-bold mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                                        <p className={`font-bold ${textColor}`}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </motion.div>

                    {/* Right Side Stats/Values */}
                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="lg:col-span-4"
                    >
                        <div className={`p-8 md:p-12 border-4 border-blue-600/10 ${isDark ? 'bg-blue-600/5' : 'bg-blue-50'} rounded-3xl sticky top-32`}>
                            <h3 className={`text-xl font-bold mb-8 ${textColor}`} style={headFont}>Our Core Values</h3>
                            <ul className="space-y-8">
                                {[
                                    { icon: <Shield size={20} />, title: "Integrity", desc: "Accurate content and transparent data." },
                                    { icon: <Rocket size={20} />, title: "Innovation", desc: "Modern UI and gamified learning." },
                                    { icon: <Users size={20} />, title: "Community", desc: "Built by students, for students." }
                                ].map((value, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-10 h-10 shrink-0 bg-blue-600 text-white rounded-full flex items-center justify-center">
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h5 className={`font-bold ${textColor}`}>{value.title}</h5>
                                            <p className={`text-sm ${subTextColor} font-bold opacity-60`}>{value.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-12 pt-12 border-t border-blue-600/10">
                                <p className={`text-[13px] font-bold italic opacity-40 leading-relaxed text-center ${textColor}`}>
                                    "Your journey to greatness starts with a single practice session."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
