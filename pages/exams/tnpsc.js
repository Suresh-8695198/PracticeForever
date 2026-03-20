import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft,
  Download,
  ArrowUpRight,
  Search,
} from 'lucide-react';
import { 
  FcLineChart, 
  FcGlobe, 
  FcGraduationCap, 
  FcDocument, 
  FcLibrary,
  FcTimeline,
  FcApproval,
  FcPodiumWithSpeaker,
  FcWorkflow,
  FcIdea,
  FcSportsMode,
  FcCollaboration
} from 'react-icons/fc';
import { useTheme } from '@/context/ThemeContext';
import { 
  tnpscNotifications, 
  previousYearPapers, 
  studyMaterials, 
  examGroups, 
  syllabus 
} from '../../data/exams/tnpsc-data.js';

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    React.useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative group w-full h-full overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={current}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                    className="absolute inset-0"
                >
                    <img 
                        src={slides[current].img} 
                        alt="Motivation Quote" 
                        className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05]"
                    />
                    {/* Institutional Green Bottom Gradient Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-[#064e3b]/90 via-[#064e3b]/30 to-transparent pointer-events-none z-10" />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center bg-black/40 hover:bg-[#059669] text-white border border-white/10 rounded-md transition-all z-10 hidden md:flex"
            >
                <ArrowLeft size={16} />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center bg-black/40 hover:bg-[#059669] text-white border border-white/10 rounded-md transition-all z-10 hidden md:flex"
            >
                <ChevronRight size={18} />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
                {slides.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setCurrent(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const TNPSCPage = () => {
    const { isDark } = useTheme();
    const [activeSection, setActiveSection] = useState('overview');
    
    // Sober Institutional Palette - Zero AI "Gloss"
    const colors = {
        bg: isDark ? 'bg-[#121212]' : 'bg-[#f4f7f6]',
        surface: isDark ? 'bg-[#1e1e1e]' : 'bg-white',
        border: isDark ? 'border-[#333]' : 'border-[#d1d5db]',
        text: isDark ? 'text-[#e5e7eb]' : 'text-[#1f2937]',
        subtext: isDark ? 'text-[#9ca3af]' : 'text-[#4b5563]',
        accent: 'bg-[#065f46]', // Institutional Forest Green
        accentText: 'text-[#065f46]'
    };

    const sideNav = [
        { id: 'overview', name: 'Dashboard', icon: FcLineChart },
        { id: 'groups', name: 'Exam Portfolio', icon: FcLibrary },
        { id: 'syllabus', name: 'Syllabus', icon: FcDocument },
        { id: 'pyq', name: 'Previous Papers', icon: FcWorkflow },
        { id: 'resources', name: 'Study Library', icon: FcIdea }
    ];

    const [showPrev, setShowPrev] = useState(false);
    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        if (e.target.scrollLeft > 20) {
            setShowPrev(true);
        } else {
            setShowPrev(false);
        }
    };

    return (
        <div className={`min-h-screen ${colors.bg} ${colors.text} font-sans selection:bg-[#065f46] selection:text-white overflow-x-hidden`}>
            <Head>
                <title>TNPSC | Institutional Portal</title>
                <meta name="description" content="Official preparation portal for TNPSC aspirants. Solid data, professional architecture." />
            </Head>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                @keyframes glare-sweep {
                    0% { transform: translateX(-150%) skewX(-35deg); opacity: 0; }
                    10% { opacity: 1; }
                    90% { transform: translateX(150%) skewX(-35deg); opacity: 1; }
                    100% { transform: translateX(150%) skewX(-35deg); opacity: 0; }
                }

                .glare-auto-sweep::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255,255,255,0.08) 45%,
                        rgba(255,255,255,0.15) 50%,
                        rgba(255,255,255,0.08) 55%,
                        transparent 100%
                    );
                    animation: glare-sweep 3s infinite cubic-bezier(0.19, 1, 0.22, 1);
                    pointer-events: none;
                    z-index: 1;
                }
            `}</style>

            {/* Standard Header - Robust Overflow Protection */}
            <div className="flex pt-[72px] w-full overflow-x-hidden">
                
                {/* Minimalist Sidebar */}
                <aside className={`hidden xl:flex flex-col w-[240px] h-[calc(100vh-72px)] sticky top-[72px] border-r ${colors.border} ${colors.surface} p-4`}>
                    <div className="mb-6">
                        <Link href="/exams" className={`flex items-center gap-2 px-3 py-2 rounded-md text-[12px] font-bold transition-all border ${colors.border} hover:bg-slate-100 dark:hover:bg-neutral-800`}>
                            <ArrowLeft size={14} />
                            Back to Exams
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <nav className="space-y-1">
                            {sideNav.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-[13px] font-bold transition-all ${
                                        activeSection === item.id 
                                        ? 'bg-[#065f46] text-white' 
                                        : `hover:bg-slate-100 dark:hover:bg-neutral-800 ${colors.subtext}`
                                    }`}
                                >
                                    <item.icon size={18} />
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                    {/* Main Content Area - Optimized Spacing & Mobile Support */}
                    <main className="flex-1 bg-[#fcfdfc] dark:bg-[#0a0a0a] min-h-screen px-4 md:px-10 pt-8 md:pt-12 pb-20 overflow-x-hidden">
                         <div className="max-w-[1200px] mx-auto w-full">
                            {/* Page Header - Professional & Institutional */}
                            <motion.header 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-8 md:mb-12 w-full"
                            >
                                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                    <div className="space-y-1.5 focus:outline-none">
                                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] dark:text-white">
                                            TNPSC <span className="text-[#059669]">Aspirant Workspace</span>
                                        </h1>
                                        <p className="text-[12px] md:text-[13px] text-black dark:text-white font-medium">
                                            Verified data-integration for the Tamil Nadu Public Service Commission.
                                        </p>
                                    </div>
                                    <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1 hidden md:block mx-8 mb-3" />
                                </div>

                                {/* Mobile Navigation - Intelligent Visibility & Scroll Control */}
                                <div className="xl:hidden mt-8 relative w-full group">
                                     {/* Directional Fade Overlays */}
                                     {showPrev && (
                                         <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-[#fcfdfc] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                                     )}
                                     <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-[#fcfdfc] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                                     
                                     {/* Persistent Controls - Intelligent Visibility */}
                                     {showPrev && (
                                         <button 
                                             onClick={() => {
                                                 if(scrollRef.current) scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
                                             }}
                                             className="absolute left-0 top-[3px] z-20 flex items-center justify-center h-[38px] w-10 rounded-md border border-[#059669]/20 bg-white/90 dark:bg-[#1a1a1a]/90 text-[#059669] shadow-lg backdrop-blur-sm active:scale-95 transition-all"
                                         >
                                             <ChevronLeft size={20} strokeWidth={3} />
                                         </button>
                                     )}

                                     <button 
                                        onClick={() => {
                                            if(scrollRef.current) {
                                                scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
                                                setShowPrev(true);
                                            }
                                        }}
                                        className="absolute right-0 top-[3px] z-20 flex items-center justify-center h-[38px] w-10 rounded-md border border-[#059669]/20 bg-white/90 dark:bg-[#1a1a1a]/90 text-[#059669] shadow-lg backdrop-blur-sm active:scale-95 transition-all"
                                    >
                                        <ChevronRight size={20} strokeWidth={3} />
                                     </button>

                                     <div 
                                        ref={scrollRef}
                                        onScroll={handleScroll}
                                        className="overflow-x-auto no-scrollbar scroll-smooth w-full"
                                    >
                                         <div className="flex items-center gap-2 pb-4 px-12 min-w-max">
                                             {sideNav.map((item) => (
                                                 <button
                                                     key={item.id}
                                                     onClick={() => setActiveSection(item.id)}
                                                     className={`flex items-center gap-2.5 px-4 py-2.5 rounded-md text-[13px] font-bold transition-all border whitespace-nowrap shadow-sm ${
                                                         activeSection === item.id 
                                                         ? 'bg-[#064e3b] text-white border-[#064e3b]' 
                                                         : `bg-white dark:bg-[#1a1a1a] ${colors.border} ${colors.subtext} hover:bg-slate-50`
                                                     }`}
                                                 >
                                                     <item.icon size={16} />
                                                     {item.name}
                                                 </button>
                                             ))}
                                         </div>
                                     </div>
                                </div>
                            </motion.header>

                            <AnimatePresence mode="wait">
                                {activeSection === 'overview' && (
                                    <motion.div 
                                        key="overview"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-8 md:space-y-12"
                                    >
                                        {/* Motivation Carousel - Refined Desktop Size & Spacing */}
                                        <div className="relative h-[300px] md:h-[460px] w-full overflow-hidden rounded-md border border-[#d1d5db] dark:border-[#333] bg-black shadow-lg">
                                             <Carousel 
                                                 slides={[
                                                     { img: '/images/exams/tnpsc_motivation1.png' },
                                                     { img: '/images/exams/tnpsc_quote2.png' },
                                                     { img: '/images/exams/tnpsc_quote3.png' },
                                                     { img: '/images/exams/tnpsc_quote4.png' },
                                                     { img: '/images/exams/tnpsc_quote5.png' }
                                                 ]}
                                             />
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                             {/* Notifications */}
                                              <div className="lg:col-span-8">
                                                    {/* Official Board Notifications */}
                                                    <div className="relative p-6 bg-white dark:bg-neutral-900 rounded-md border border-slate-200 dark:border-neutral-800 min-h-[400px]">
                                                        <div className="relative z-10">
                                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-neutral-800">
                                                                <div className="flex items-center gap-4">
                                                                    <div className="p-2.5 bg-slate-50 dark:bg-neutral-800 rounded border border-slate-100 dark:border-neutral-700">
                                                                        <FcGlobe size={28} />
                                                                    </div>
                                                                    <div>
                                                                        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-neutral-100 uppercase">Board notifications</h2>
                                                                        <div className="flex items-center gap-2 mt-1">
                                                                            <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-bold uppercase tracking-widest">
                                                                                Source: tnpsc.gov.in
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="flex flex-col items-start md:items-end">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-[11px] font-bold text-slate-700 dark:text-neutral-300 uppercase tracking-wider">OFFICIAL BULLETIN</span>
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                                    </div>
                                                                    <span className="text-[10px] text-black dark:text-white font-bold uppercase tracking-widest">
                                                                        Updated: {new Date().toLocaleDateString('en-GB')}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="grid gap-2">
                                                                {tnpscNotifications.map((notif) => (
                                                                    <a 
                                                                        key={notif.id}
                                                                        href={notif.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="group flex items-center justify-between p-4 bg-white dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 hover:border-[#059669]/50 transition-all duration-200"
                                                                    >
                                                                        <div className="flex items-center gap-4">
                                                                            <div className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-neutral-800 border border-slate-100 dark:border-neutral-800`}>
                                                                                {notif.status === 'Active' ? <FcApproval size={20} /> : <FcTimeline size={20} />}
                                                                            </div>
                                                                            <div>
                                                                                <h3 className="font-bold text-[15px] text-slate-900 dark:text-neutral-100 group-hover:text-[#065f46] transition-colors">
                                                                                    {notif.title}
                                                                                </h3>
                                                                                <div className="flex items-center gap-3 mt-1">
                                                                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                                                                                        notif.status === 'Active' ? 'text-green-600' : 
                                                                                        notif.status === 'Upcoming' ? 'text-amber-500' : 'text-slate-400'
                                                                                    }`}>
                                                                                        {notif.status}
                                                                                    </span>
                                                                                    <span className="text-[11px] text-black dark:text-white font-bold tracking-tight">{notif.date}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="w-8 h-8 rounded border border-slate-100 dark:border-neutral-800 flex items-center justify-center text-slate-300 group-hover:text-[#065f46] group-hover:border-[#059669]/30 transition-all">
                                                                            <ArrowUpRight size={16} />
                                                                        </div>
                                                                    </a>
                                                                ))}
                                                            </div>

                                                            <div className="mt-8 flex justify-center">
                                                                 <button className="text-[11px] font-bold text-slate-400 hover:text-[#059669] uppercase tracking-widest transition-colors flex items-center gap-1.5">
                                                                      Full Exam Calendar <ArrowUpRight size={14} />
                                                                 </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                              </div>

                                             {/* Side - Career Inspiration */}
                                             <div className="lg:col-span-4 space-y-6">
                                                  <div 
                                                       onMouseMove={(e) => {
                                                            const rect = e.currentTarget.getBoundingClientRect();
                                                            const x = e.clientX - rect.left;
                                                            const y = e.clientY - rect.top;
                                                            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                                            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                                       }}
                                                       className={`relative group p-6 bg-[#064e3b] rounded-md text-white overflow-hidden shadow-sm transition-all hover:shadow-md border border-[#059669]/30 card-glare-container glare-auto-sweep`}
                                                  >
                                                       {/* Precision Grid Pattern */}
                                                       <div className="absolute inset-0 opacity-[0.12] pointer-events-none" 
                                                            style={{ 
                                                                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                                                backgroundSize: '20px 20px'
                                                            }} 
                                                       />
                                                       
                                                       {/* Reactive Mouse Glare Effect */}
                                                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" 
                                                            style={{
                                                                background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
                                                            }}
                                                       />

                                                       <div className="relative z-10">
                                                            <FcSportsMode size={48} className="filter brightness-0 invert mb-4" />
                                                            <h3 className="text-xl font-bold mb-2">Elite Assessment</h3>
                                                            <p className="text-[12px] opacity-80 leading-relaxed mb-6">
                                                                Professional grade simulation of the actual TNPSC environment.
                                                            </p>
                                                            <button className="w-full py-3 bg-white text-[#064e3b] font-bold text-[11px] uppercase tracking-widest rounded transition-all hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.99] shadow-sm">
                                                                Launch Simulator
                                                            </button>
                                                       </div>
                                                  </div>

                                                  <div className={`p-5 border ${colors.border} ${colors.surface} rounded-md`}>
                                                       <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mb-4 text-slate-400">
                                                            <FcCollaboration size={16} /> Aspirant Quote
                                                       </h4>
                                                       <p className="text-sm font-medium leading-relaxed italic opacity-80">
                                                            "Preparation is the key to confidence. Master the basics, and the rest will follow."
                                                       </p>
                                                       <p className="text-[10px] font-bold text-[#059669] mt-3 uppercase tracking-widest">— Mentors Choice</p>
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Minimalist Path */}
                                        <div className="pt-6">
                                             <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                                 <FcTimeline size={24} /> Roadmap to Service
                                             </h3>
                                             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                  {[
                                                      { step: '01', title: 'Fundamentals', icon: FcGraduationCap, desc: '6th-12th Samacheer Books' },
                                                      { step: '02', title: 'Pattern Analysis', icon: FcWorkflow, desc: '10 Years PYQ Vault' },
                                                      { step: '03', title: 'Mock Mastery', icon: FcIdea, desc: 'Timed Exam Simulation' },
                                                      { step: '04', title: 'Final Review', icon: FcApproval, desc: 'Current Affairs & GK' },
                                                  ].map((path, i) => (
                                                      <div key={i} className={`p-5 border ${colors.border} ${colors.surface} rounded-md h-full`}>
                                                           <span className="text-[10px] font-bold text-[#059669] mb-3 block">{path.step}</span>
                                                           <h4 className="text-[14px] font-bold mb-1 text-black dark:text-white">{path.title}</h4>
                                                           <p className="text-[11px] text-black dark:text-white/80 leading-relaxed font-medium">{path.desc}</p>
                                                      </div>
                                                  ))}
                                             </div>
                                        </div>
                                    </motion.div>
                                )}
                        
                        {activeSection === 'groups' && (
                            <motion.div key="groups" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {examGroups.map((group) => (
                                    <div key={group.id} className="flex flex-col h-full group">
                                        <a 
                                            href={group.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className={`flex-grow p-8 bg-white dark:bg-neutral-950 border-2 ${colors.border} hover:border-[#059669] transition-all relative overflow-hidden flex flex-col`}
                                        >
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="p-3 bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded">
                                                    <img src={group.icon} alt={group.title} className="w-10 h-10 grayscale-0 group-hover:scale-110 transition-transform" />
                                                </div>
                                                <ArrowUpRight className="text-slate-300 group-hover:text-[#059669] transition-colors" size={24} />
                                            </div>
                                            <h3 className="text-[17px] font-black text-black dark:text-white uppercase tracking-tight mb-3 leading-tight">{group.title}</h3>
                                            <p className="text-[12px] text-black dark:text-white/70 font-medium leading-relaxed mb-6 flex-grow">{group.description}</p>
                                            <div className="pt-4 border-t border-slate-100 dark:border-neutral-800">
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Official Scale</span>
                                                <span className="text-[13px] font-black text-black dark:text-white">{group.salary}</span>
                                            </div>
                                        </a>
                                        <a 
                                            href={group.pdfLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="mt-2 py-3 bg-black dark:bg-white text-white dark:text-black text-[9px] font-black uppercase tracking-[0.2em] text-center hover:bg-[#059669] dark:hover:bg-[#059669] dark:hover:text-white transition-all flex items-center justify-center gap-2"
                                        >
                                            <Download size={12} />
                                            Download 2026 Planner
                                        </a>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeSection === 'syllabus' && (
                            <motion.div key="syllabus" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
                                {Object.keys(syllabus).map((key) => (
                                    <div key={key} className="space-y-8">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-slate-900 dark:border-white pb-4 gap-4">
                                            <div>
                                                <h3 className="text-[20px] font-black uppercase text-black dark:text-white tracking-widest">{key} Curriculum</h3>
                                                <p className="text-[9px] font-black text-[#059669] uppercase tracking-widest mt-1">Verified: 2026 Board Syllabus</p>
                                            </div>
                                            <a 
                                                href={syllabus[key].pdfLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-[9px] font-black uppercase tracking-widest hover:bg-[#059669] dark:hover:bg-[#059669] dark:hover:text-white transition-all"
                                            >
                                                <Download size={14} />
                                                Download Official PDF
                                            </a>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {syllabus[key].items.map((subj, i) => (
                                                <div key={i} className={`group bg-white dark:bg-neutral-950 border-2 ${colors.border} p-6 h-full hover:border-[#059669] transition-all relative`}>
                                                    <div className="flex items-start gap-6">
                                                        <div className="flex-shrink-0 p-3 bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded">
                                                            <img src={subj.icon} alt={subj.subject} className="w-10 h-10 grayscale-0 group-hover:scale-110 transition-transform" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <h4 className="text-[15px] font-black text-black dark:text-white uppercase tracking-tight leading-none">{subj.subject}</h4>
                                                                <span className="text-[8px] font-black text-white bg-[#059669] px-2 py-0.5 rounded-full uppercase tracking-widest">OFFICIAL</span>
                                                            </div>
                                                            <p className="text-[12px] text-black dark:text-white/80 font-medium leading-relaxed mb-4">{subj.content}</p>
                                                            <div className="pt-3 border-t border-slate-100 dark:border-neutral-800">
                                                                <span className="text-[9px] font-black text-black dark:text-white/60 uppercase tracking-widest leading-none">Official Curriculum Category</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeSection === 'pyq' && (
                            <motion.div key="pyq" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {previousYearPapers.map((yearFolder) => (
                                    <div key={yearFolder.year} className={`p-8 border-2 ${colors.border} bg-white dark:bg-neutral-950 rounded-none relative overflow-hidden`}>
                                        <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-900 dark:border-white pb-4">
                                            <div className="p-2 bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded">
                                                <img src={yearFolder.icon} alt={yearFolder.year} className="w-10 h-10" />
                                            </div>
                                            <div>
                                                <h3 className="text-[22px] font-black text-black dark:text-white leading-none">ARCHIVE {yearFolder.year}</h3>
                                                <p className="text-[9px] font-bold text-[#059669] uppercase tracking-widest mt-1">Official Board Documents</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            {yearFolder.exams.map((paper, i) => (
                                                <a 
                                                    key={i} 
                                                    href={paper.link} 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`p-4 border ${colors.border} hover:border-[#059669] flex items-center justify-between group transition-all`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <img src={paper.icon} alt="pdf" className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
                                                        <span className="text-[13px] font-bold text-black dark:text-white uppercase tracking-tight">{paper.title}</span>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <span className="text-[8px] font-black text-[#059669] uppercase tracking-widest">DOWNLOAD</span>
                                                        <span className="text-[7px] font-bold text-slate-400 uppercase">OFFICIAL REPOSITORY</span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeSection === 'resources' && (
                            <motion.div key="resources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                                {studyMaterials.map((section) => (
                                    <div key={section.category} className="space-y-6">
                                        <div className="border-b-2 border-slate-900 dark:border-white pb-2 flex items-center justify-between">
                                            <h3 className="text-[18px] font-black uppercase text-black dark:text-white tracking-widest">{section.category}</h3>
                                            <span className="text-[9px] font-bold text-[#059669] uppercase tracking-widest">Official Repositories</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {section.items.map((item, i) => (
                                                <a 
                                                    key={i} 
                                                    href={item.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className={`p-6 bg-white dark:bg-neutral-950 border-2 ${colors.border} hover:border-[#059669] transition-all flex items-center gap-4 group`}
                                                >
                                                    <div className="flex-shrink-0 p-3 bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded">
                                                        <img src={item.icon} alt={item.title} className="w-10 h-10 group-hover:scale-110 transition-transform" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h4 className="text-[13px] font-black text-black dark:text-white uppercase leading-tight mb-1">{item.title}</h4>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[8px] font-black text-[#059669] uppercase tracking-widest">DOWNLOAD</span>
                                                            <ArrowUpRight size={10} className="text-[#059669]" />
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                </main>
            </div>
        </div>
    );
};

export default TNPSCPage;
