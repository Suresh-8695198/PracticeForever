import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Landmark, Building2, Shield, Globe, Banknote, LineChart, Lightbulb, History
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const exams = [
    {
        id: 'tnpsc',
        title: 'TNPSC Exam.',
        desc: 'Official state-level civil services path for Tamil Nadu. Groups 1, 2, & 4.',
        path: '/exams/tnpsc',
        icon: Landmark,
        tag: 'Recommended'
    },
    {
        id: 'upsc',
        title: 'UPSC Merit.',
        desc: 'Indian administrative service modules. IAS, IPS, and IFS tracks.',
        path: '/exams/upsc',
        icon: Building2,
        tag: 'Elite'
    },
    {
        id: 'ssc',
        title: 'SSC Central.',
        desc: 'Staff selection for diverse central ministries and departments.',
        path: '/exams/ssc',
        icon: Globe,
        tag: 'Federal'
    },
    {
        id: 'banking',
        title: 'Banking HQ.',
        desc: 'IBPS, SBI, and RBI specific quantitative and verbal tracks.',
        path: '/exams/banking',
        icon: Banknote,
        tag: 'Corporate'
    }
];

const ExamsLandingPage = () => {
    const { isDark } = useTheme();

    const colors = {
        bg: isDark ? 'bg-[#121212]' : 'bg-[#f4f7f6]',
        surface: isDark ? 'bg-[#1e1e1e]' : 'bg-white',
        border: isDark ? 'border-[#333]' : 'border-[#d1d5db]',
        text: isDark ? 'text-[#e5e7eb]' : 'text-[#1f2937]',
        subtext: isDark ? 'text-[#9ca3af]' : 'text-[#4b5563]',
    };

    return (
        <div className={`min-h-screen ${colors.bg} ${colors.text} font-sans pt-[72px]`}>
            <Head>
                <title>Exams | Institutional Hub</title>
                <meta name="description" content="A structural ecosystem for national and state-level competitive preparation." />
            </Head>

            <main className="max-w-[1280px] mx-auto px-6 py-12 lg:py-20">
                
                {/* Header Section - Minimalist */}
                <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-10 border-b ${colors.border}`}>
                     <div className="space-y-3">
                         <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                             Competitive <span className="text-[#059669]">Assessment Hub</span>
                         </h1>
                         <p className={`text-[14px] ${colors.subtext} font-medium max-w-xl leading-relaxed`}>
                             A structural ecosystem for national and state-level competitive preparation. 
                             Verified resources, precision-engineered for serious aspirants.
                         </p>
                     </div>

                     <div className="flex items-center gap-2">
                          <div className={`px-5 py-4 border ${colors.border} ${colors.surface} rounded-md text-center min-w-[120px]`}>
                              <p className="text-[9px] font-bold uppercase tracking-widest text-[#059669] mb-1">Rank</p>
                              <p className="text-xl font-bold">#Verified</p>
                          </div>
                          <div className={`px-5 py-4 border ${colors.border} ${colors.surface} rounded-md text-center min-w-[120px]`}>
                              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Placement</p>
                              <p className="text-xl font-bold">84%</p>
                          </div>
                     </div>
                </div>

                {/* Exam Grid - Small Cards, No Shadow-Glow */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {exams.map((exam, idx) => (
                        <Link href={exam.path} key={exam.id}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`group p-8 border ${colors.border} ${colors.surface} rounded-md hover:border-[#059669] transition-all duration-200 cursor-pointer flex flex-col justify-between h-[360px]`}
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <exam.icon size={42} />
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{exam.tag}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold group-hover:text-[#059669] transition-colors">{exam.title}</h3>
                                        <p className={`text-[14px] ${colors.subtext} font-medium leading-relaxed`}>{exam.desc}</p>
                                    </div>
                                </div>

                                <div className={`pt-6 border-t ${colors.border} flex items-center justify-between`}>
                                     <div className="flex -space-x-2">
                                          {[1,2,3].map(i => (
                                              <div key={i} className={`w-8 h-8 rounded-full border-2 ${isDark ? 'border-[#1e1e1e]' : 'border-white'} bg-slate-200 dark:bg-neutral-700`} />
                                          ))}
                                     </div>
                                     <div className="h-10 w-10 bg-slate-50 dark:bg-neutral-800 rounded flex items-center justify-center group-hover:bg-[#059669] group-hover:text-white transition-all">
                                         <ArrowRight size={18} />
                                     </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Status Row */}
                 <div className="mt-16 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                     <div className="space-y-4">
                         <LineChart size={32} className="text-emerald-500" />
                         <h4 className="text-[16px] font-bold">Data Integration.</h4>
                         <p className={`text-[12px] ${colors.subtext} leading-relaxed font-medium`}>Direct pipelines from official commission notification servers.</p>
                     </div>
                     <div className="space-y-4">
                         <Lightbulb size={32} className="text-amber-500" />
                         <h4 className="text-[16px] font-bold">Verified Content.</h4>
                         <p className={`text-[12px] ${colors.subtext} leading-relaxed font-medium`}>Every paper vault is cross-checked by year-specific toppers.</p>
                     </div>
                     <div className="space-y-4">
                         <History size={32} className="text-blue-500" />
                         <h4 className="text-[16px] font-bold">Verified Roadmap.</h4>
                         <p className={`text-[12px] ${colors.subtext} leading-relaxed font-medium`}>Follow a structural path verified by commission protocol.</p>
                     </div>
                </div>
            </main>
        </div>
    );
};

export default ExamsLandingPage;
