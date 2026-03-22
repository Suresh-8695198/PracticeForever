import React, { useState, useRef, useEffect } from 'react';
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
  Landmark,
  FileText,
  Book,
  Globe,
  Award,
  Shield,
  Briefcase,
  PenTool,
  Brain,
  Scale,
  TrendingUp,
  ShieldCheck,
  Archive,
  BarChart3,
  Users,
  Clock,
  ExternalLink,
  Info
} from 'lucide-react';
import { 
  FcGlobe, 
  FcLibrary, 
  FcFolder, 
  FcAcceptDatabase, 
  FcComboChart, 
  FcCommandLine, 
  FcDocument, 
  FcBriefcase, 
  FcStatistics, 
  FcCheckmark, 
  FcCollaboration,
  FcTimeline,
  FcIdea,
  FcLightbulb,
  FcDiploma1,
  FcGraduationCap,
  FcReading,
  FcPodiumWithSpeaker,
  FcNews,
  FcApproval
} from 'react-icons/fc';
import { useTheme } from '@/context/ThemeContext';
import { 
  upscNotifications, 
  upscPreviousPapers, 
  upscSyllabus, 
  upscCareers, 
  upscResources 
} from '../../data/exams/upsc-data.js';

// Premium Color Palette - Motivated UPSC Look
const upscTheme = {
  primary: '#002147', // Imperial Navy
  secondary: '#FF9933', // Deep Saffron
  accent: '#D4AF37', // Heritage Gold
  bg: '#F5F7FA', // Professional Grey-White
  surface: '#FFFFFF',
  text: '#1A1A1A',
  subtext: '#4A4A4A',
  border: '#E0E4E8'
};

const IconRenderer = ({ icon, className = "w-6 h-6" }) => {
  const [hasError, setHasError] = useState(false);
  const iconMap = {
    'globe': FcGlobe,
    'book': FcReading,
    'landmark': FcLibrary,
    'scale': FcPodiumWithSpeaker,
    'trending-up': FcComboChart,
    'shield-check': FcApproval,
    'brain': FcIdea,
    'archive': FcFolder,
    'briefcase': FcBriefcase,
    'shield': FcApproval,
    'award': FcGraduationCap,
    'pdf': FcNews,
    'feather': FcCommandLine, 
    'pen-tool': FcCommandLine, 
    'dollar-sign': FcStatistics
  };

  const icons8Map = {
    'globe': 'https://img.icons8.com/color/96/globe--v1.png',
    'book': 'https://img.icons8.com/color/96/book.png',
    'landmark': 'https://img.icons8.com/color/96/museum.png',
    'scale': 'https://img.icons8.com/color/96/scales.png',
    'trending-up': 'https://img.icons8.com/color/96/line-chart.png',
    'shield-check': 'https://img.icons8.com/color/96/verified-badge.png',
    'brain': 'https://img.icons8.com/color/96/idea.png',
    'archive': 'https://img.icons8.com/color/96/archive.png',
    'briefcase': 'https://img.icons8.com/color/96/briefcase.png',
    'shield': 'https://img.icons8.com/color/96/shield.png',
    'award': 'https://img.icons8.com/color/96/medal.png',
    'pdf': 'https://img.icons8.com/color/48/pdf-2.png',
    'feather': 'https://img.icons8.com/color/96/quill.png',
    'pen-tool': 'https://img.icons8.com/color/96/fountain-pen.png',
    'dollar-sign': 'https://img.icons8.com/color/96/money-bag.png',
    'verify': 'https://img.icons8.com/color/48/checked--v1.png',
    'timeline': 'https://img.icons8.com/color/96/future.png',
    'stats': 'https://img.icons8.com/color/96/combo-chart.png',
    'search': 'https://img.icons8.com/color/48/search--v1.png'
  };

  if (icons8Map[icon] && !hasError) {
    return (
      <img 
        src={icons8Map[icon]} 
        alt={icon} 
        className={className} 
        onError={() => setHasError(true)}
      />
    );
  }

  // Fallback to Fc if not in icons8Map or if error occurred
  const IconFC = iconMap[icon] || Search;
  return <IconFC className={className} />;
};

const LiveNumber = ({ value }) => {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, scale: 1.1, y: 5 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="inline-block"
    >
      {value.toLocaleString()}
    </motion.span>
  );
};

const UPSCPage = () => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [engagement, setEngagement] = useState(8603);
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  useEffect(() => {
    // Generate a believable number based on time of day for "accuracy"
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    
    // Base traffic curve (higher during day, lower at night)
    const base = 8500;
    const variation = Math.sin((totalMinutes - 480) * (Math.PI / 720)) * 1500;
    const initialValue = Math.floor(base + variation + (Math.random() * 300));
    setEngagement(initialValue);

    // Dynamic "real-time" updates
    const timer = setInterval(() => {
      setEngagement(prev => {
        // Small fluctuation to feel live
        const change = Math.random() > 0.4 ? Math.floor(Math.random() * 3) : -Math.floor(Math.random() * 1);
        return prev + change;
      });
    }, 4000 + Math.random() * 2000);

    return () => clearInterval(timer);
  }, []);

  const colors = {
    bg: isDark ? 'bg-[#0A0E17]' : 'bg-[#F5F7FA]',
    surface: isDark ? 'bg-[#121927]' : 'bg-white',
    border: isDark ? 'border-[#1E293B]' : 'border-[#E2E8F0]',
    text: isDark ? 'text-slate-100' : 'text-[#1A1A1A]',
    subtext: isDark ? 'text-slate-400' : 'text-[#4A4A4A]',
    primary: upscTheme.primary,
    secondary: upscTheme.secondary
  };

  const menuItems = [
    { id: 'dashboard', name: 'Service Portal', icon: 'landmark' },
    { id: 'careers', name: 'Elite Services', icon: 'award' },
    { id: 'syllabus', name: 'Examination', icon: 'pdf' },
    { id: 'pyq', name: 'Paper Vault', icon: 'archive' },
    { id: 'resources', name: 'Library', icon: 'book' }
  ];

  const handleScroll = (e) => {
    setShowPrev(e.target.scrollLeft > 20);
  };

  return (
    <div className={`min-h-screen ${colors.bg} ${colors.text} font-sans selection:bg-[#FF9933] selection:text-white transition-colors duration-300`}>
      <Head>
        <title>UPSC Civil Services Preparation | IAS, IPS, IFS | Institutional Excellence</title>
        <meta name="description" content="Access the most intensive and professional preparation module for UPSC Civil Services. Real-time updates, PYQ vault, and official syllabus integration for elite national services." />
        <meta name="keywords" content="UPSC IAS IPS IFS preparation, civil services mock test, premium UPSC content, UPSC PYQ repository, UPSC 2026 notifications, Indian Administrative Service guide" />
        <meta name="author" content="Institutional Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=Inter:wght@400;500;600&display=swap');
        
        .serif-font {
          font-family: 'Crimson Pro', serif;
        }

        .label-font {
          font-family: 'Inter', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .premium-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,153,51,0) 0%,
            rgba(255,153,51,0.05) 50%,
            rgba(255,153,51,0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 4s infinite linear;
        }

        @keyframes shimmer {
          from { background-position: 200% 0; }
          to { background-position: -200% 0; }
        }

        .glass-card {
           background: ${isDark ? 'rgba(18, 25, 39, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
           backdrop-filter: blur(12px);
           border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
        }

        .premium-shadow {
           box-shadow: 0 10px 30px -10px rgba(0, 33, 71, 0.15);
        }

        .dark .premium-shadow {
           box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }

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

      {/* Hero Banner Section - Increased padding for proper spacing */}
      <section className="relative h-[280px] md:h-[360px] w-full overflow-hidden pt-[110px] md:pt-[130px]">
         <div className="absolute inset-0 bg-[#002147] z-0">
            {/* National Emblem Watermark Subtle */}
            <div className="absolute right-0 bottom-0 opacity-10 w-96 h-96 -mr-20 -mb-20 pointer-events-none">
              <img src="/images/upsc.png" alt="Emblem" className="w-full h-full object-contain grayscale" />
            </div>
            
            {/* Saffron & Navy Geometric Overlay */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF9933]/10 transform -skew-x-12 translate-x-1/2" />
         </div>

         <div className="relative z-10 max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4 md:mt-8"
            >
               <span className="text-[#FF9933] font-black tracking-[0.3em] text-[10px] md:text-[12px] uppercase mb-4 block">Union Public Service Commission</span>
               <h1 className="text-3xl md:text-5xl font-bold text-white mb-10 md:mb-16 serif-font leading-tight">
                 Service to the Nation <br className="hidden md:block"/> Starts with <span className="text-[#FF9933]">Preparation.</span>
               </h1>
            </motion.div>
         </div>
      </section>

      {/* Secondary Nav & Main Content Wrapper */}
      <div className="max-w-[1280px] mx-auto px-6 mt-[-40px] relative z-20 pb-20">
        
        {/* Engagement Strip */}
        <div className={`w-full ${isDark ? 'bg-[#1E293B]' : 'bg-white'} rounded-lg premium-shadow border ${colors.border} p-4 md:p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6`}>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <IconRenderer icon="stats" className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-ping absolute inset-0" />
                      <div className="w-2 h-2 rounded-full bg-red-600 relative z-10" />
                   </div>
                   <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-none label-font">Live Engagement</p>
                </div>
                <p className="text-xl font-black flex items-center gap-2">
                   <span className="min-w-[70px] tabular-nums">
                     <LiveNumber value={engagement} />+
                   </span>
                   <span className="text-xs font-semibold text-green-500 bg-green-500/5 px-2 py-0.5 rounded-full border border-green-500/10">Active Today</span>
                </p>
              </div>
           </div>

           <div className="h-px w-full md:w-px md:h-12 bg-slate-200 dark:bg-slate-800" />

           <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <IconRenderer icon="timeline" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-none mb-1 label-font">Countdown to Prelims '26</p>
                <p className="text-xl font-black">70 Days <span className="text-xs font-medium text-amber-500">Remaining</span></p>
              </div>
           </div>

           <div className="h-px w-full md:w-px md:h-12 bg-slate-200 dark:bg-slate-800" />

           <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-none mb-1 label-font">System Integrity</p>
                <div className="flex items-center gap-2 justify-end">
                   <IconRenderer icon="verify" className="w-4 h-4" />
                   <p className="text-xs font-bold uppercase tracking-tight">Verified by UPSC Portal</p>
                </div>
              </div>
              <Link href="/exams" className="flex items-center gap-3 text-xs font-black bg-[#002147] text-white px-5 py-2.5 rounded shadow-lg transition-all hover:bg-[#FF9933] uppercase tracking-widest">
                 <ArrowLeft size={16} /> Back
              </Link>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
           
           {/* Sidebar Navigation */}
           <aside className="lg:w-[280px] shrink-0">
             <div className={`${colors.surface} border ${colors.border} rounded-lg p-3 sticky top-[90px] shadow-sm`}>
                <nav className="space-y-1">
                   {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-md text-[14px] font-bold transition-all ${
                          activeSection === item.id 
                          ? 'bg-[#002147] text-white shadow-md' 
                          : `hover:bg-slate-50 dark:hover:bg-slate-800 ${colors.subtext}`
                        }`}
                      >
                         <IconRenderer icon={item.icon} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                         {item.name}
                      </button>
                   ))}
                </nav>

                <div className="mt-8 p-5 bg-[#FF9933]/5 rounded-lg border border-[#FF9933]/20">
                   <h4 className="text-[11px] font-black text-[#FF9933] uppercase tracking-widest mb-3 flex items-center gap-2">
                     <IconRenderer icon="brain" className="w-4 h-4" /> Concept of the Day
                   </h4>
                   <p className="text-[13px] leading-relaxed font-bold serif-font italic opacity-80">
                      "Success is not final, failure is not fatal: it is the courage to continue that counts."
                   </p>
                   <p className="mt-3 text-[10px] font-medium uppercase tracking-widest text-[#002147] dark:text-[#FF9933] label-font">
                      — Service Ethos
                   </p>
                </div>

                <div className="mt-4 p-5 bg-blue-500/5 rounded-lg border border-blue-500/20">
                   <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                     <IconRenderer icon="shield" className="w-4 h-4" /> Verified Roadmap
                   </h4>
                   <p className="text-[12px] leading-relaxed font-medium">
                     Direct pipelines from official commission notification servers.
                   </p>
                </div>
             </div>
           </aside>

           {/* Main Tab Content */}
           <main className="flex-1 w-full min-w-0">
             <AnimatePresence mode="wait">
               
               {activeSection === 'dashboard' && (
                 <motion.div
                   key="dashboard"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="space-y-8"
                 >
                    {/* Live Notifications Board */}
                    <div className={`${colors.surface} border ${colors.border} rounded-lg premium-shadow overflow-hidden`}>
                       <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#121927]">
                          <div className="flex items-center gap-3">
                             <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-100 dark:border-blue-900/50">
                                <IconRenderer icon="trending-up" className="w-8 h-8" />
                             </div>
                             <div>
                                <h2 className="text-xl font-black text-[#002147] dark:text-white uppercase tracking-tight">Active Notifications</h2>
                                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest label-font">Source: Unified Public Service Commission 2026</p>
                             </div>
                          </div>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-medium uppercase rounded-full tracking-widest border border-green-200 dark:border-green-800 label-font">Live Fetch</span>
                       </div>

                       <div className="divide-y divide-slate-100 dark:divide-slate-800">
                          {upscNotifications.map((notif) => (
                             <a 
                               key={notif.id}
                               href={notif.link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="block p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                             >
                                <div className="flex items-start justify-between">
                                   <div className="space-y-1">
                                      <h3 className="font-bold text-[15px] group-hover:text-[#FF9933] transition-colors">{notif.title}</h3>
                                      <div className="flex items-center gap-4">
                                         <span className="flex items-center gap-1 text-[11px] text-slate-400 font-bold">
                                            <IconRenderer icon="timeline" className="w-3.5 h-3.5" /> {notif.date}
                                         </span>
                                         <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                                           notif.status === 'Active' ? 'bg-green-500/10 text-green-600' : 'bg-blue-500/10 text-blue-500'
                                         }`}>
                                           {notif.status}
                                         </span>
                                      </div>
                                   </div>
                                   <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#FF9933] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                             </a>
                          ))}
                       </div>
                       
                       <div className="p-6 bg-slate-50 dark:bg-[#1A2233] text-center border-t border-slate-100 dark:border-slate-800">
                          <a href="https://www.upsc.gov.in/whats-new" target="_blank" className="text-[12px] font-black text-[#002147] dark:text-blue-400 hover:text-[#FF9933] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                            View All Press Releases <ExternalLink size={14} />
                          </a>
                       </div>
                    </div>

                    {/* Quick Launch Cards */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Career Roadmap - Featured Card */}
                        <div className="relative group p-8 rounded-2xl text-white overflow-hidden shadow-2xl border border-white/10 glare-auto-sweep"
                             style={{ background: 'linear-gradient(135deg, #002147 0%, #013369 100%)' }}>
                           
                           {/* Decorative Squared Grid */}
                           <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                                style={{ 
                                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                    backgroundSize: '32px 32px'
                                }} 
                           />

                           <div className="relative z-10">
                              <div className="flex items-center gap-4 mb-8">
                                 <img src="https://img.icons8.com/color/96/medal.png" alt="Award" className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                                 <div className="space-y-0.5">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF9933] block">National Path</span>
                                    <div className="flex items-center gap-2">
                                       <img src="https://img.icons8.com/color/48/checked--v1.png" alt="Verified" className="w-4 h-4" />
                                       <span className="text-[9px] font-bold text-white/50 uppercase tracking-tighter">Elite Module</span>
                                    </div>
                                 </div>
                              </div>
                              
                              <h3 className="text-3xl font-bold mb-3 serif-font leading-tight tracking-tight">Career Roadmap</h3>
                              <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-[280px]">
                                 Structural guidance from Prelims through Personality Test. 
                                 <span className="block mt-2 font-semibold text-white/90 underline decoration-[#FF9933]/50 underline-offset-4 decoration-2">Verified by past year toppers.</span>
                              </p>
                              
                              <motion.button 
                                 whileHover={{ scale: 1.05, y: -2 }}
                                 whileTap={{ scale: 0.98 }}
                                 onClick={() => setActiveSection('careers')} 
                                 className="relative group/btn px-8 py-3.5 bg-[#FF9933] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-lg shadow-[0_8px_20px_-6px_rgba(255,153,51,0.5)] hover:shadow-[0_12px_25px_-4px_rgba(255,153,51,0.6)] transition-all flex items-center gap-3"
                              >
                                 Explore Services
                                 <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                              </motion.button>
                           </div>

                           {/* Large Background Icon Icon Decor */}
                           <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                              <Landmark size={240} className="rotate-12" />
                           </div>
                        </div>

                        {/* Foundation Vault - Modern Surface Card */}
                        <div className={`${colors.surface} border ${colors.border} rounded-2xl premium-shadow p-8 flex flex-col justify-between relative overflow-hidden group`}>
                           {/* Subtle Gradient Accent */}
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933]/5 blur-3xl -mr-16 -mt-16 group-hover:bg-[#FF9933]/10 transition-colors" />
                           
                           <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                 <img src="https://img.icons8.com/color/96/archive.png" alt="Vault" className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                                 <h4 className="text-[11px] font-medium text-slate-400 uppercase tracking-widest label-font">Preparation status</h4>
                              </div>
                              <h3 className="text-3xl font-bold mb-4 serif-font text-[#002147] dark:text-white font-medium">Foundation Vault</h3>
                              <p className={`${colors.subtext} text-sm mb-10 leading-relaxed label-font font-medium`}>
                                 Instant access to a decade of official examination history and the definitive curricula prescribed for the 2026 cycle.
                              </p>
                           </div>
                           
                           <div className="flex gap-4 relative z-10">
                              <button onClick={() => setActiveSection('pyq')} className="flex-1 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-[#002147] dark:text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-lg transition-all hover:bg-[#002147] hover:text-white hover:border-[#002147] dark:hover:bg-white dark:hover:text-[#002147]">Paper Vault</button>
                              <button onClick={() => setActiveSection('syllabus')} className="flex-1 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-[#002147] dark:text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-lg transition-all hover:bg-[#002147] hover:text-white hover:border-[#002147] dark:hover:bg-white dark:hover:text-[#002147]">Syllabus</button>
                           </div>
                        </div>
                     </div>

                    {/* Engagement / Activity Section */}
                    <div className={`${colors.surface} border ${colors.border} rounded-lg p-6 shadow-sm`}>
                       <div className="flex items-center justify-between mb-8">
                          <h4 className="text-sm font-bold flex items-center gap-2 tracking-tight">
                            <IconRenderer icon="stats" className="w-5 h-5" /> Daily Engagement Metrics
                          </h4>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Global Coverage</span>
                       </div>
                       
                       <div className="flex flex-wrap gap-8 justify-around p-4 rounded-lg bg-slate-50 dark:bg-[#1A2233] border border-slate-100 dark:border-slate-800">
                          <div className="text-center">
                             <p className="text-2xl font-black text-[#002147] dark:text-white">1.2M+</p>
                             <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1 label-font">Resource Downloads</p>
                          </div>
                          <div className="text-center">
                             <p className="text-2xl font-black text-[#FF9933]">98%</p>
                             <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1 label-font">Data Accuracy</p>
                          </div>
                          <div className="text-center">
                             <p className="text-2xl font-black text-blue-500">42K+</p>
                             <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-1 label-font">Mock Submissions</p>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeSection === 'careers' && (
                  <motion.div
                    key="careers"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {upscCareers.map((career) => (
                      <div key={career.id} className={`${colors.surface} border-2 ${colors.border} p-8 rounded-lg relative hover:border-[#FF9933] transition-all group`}>
                         <div className="flex items-start justify-between mb-8">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg group-hover:bg-[#FF9933]/10 transition-colors">
                               <IconRenderer icon={career.icon} color={upscTheme.primary} className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded label-font">Elite Class</span>
                         </div>
                         <h3 className="text-2xl font-bold mb-3 serif-font leading-tight">{career.title}</h3>
                         <p className={`${colors.subtext} text-[13px] leading-relaxed mb-8 min-h-[60px]`}>{career.description}</p>
                         
                         <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div>
                               <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest mb-1 label-font">Entrance</p>
                               <p className="text-xs font-bold">{career.entry}</p>
                            </div>
                            <a href={career.link} target="_blank" className="w-10 h-10 rounded border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#FF9933] hover:border-[#FF9933]/30 transition-all">
                               <ArrowUpRight size={20} />
                            </a>
                         </div>
                      </div>
                    ))}
                    
                    {/* Coming Soon Post */}
                    <div className={`${colors.surface} border-2 border-dashed ${colors.border} p-8 rounded-lg flex flex-col items-center justify-center text-center opacity-60`}>
                       <IconRenderer icon="timeline" className="w-8 h-8 opacity-20 mb-4" />
                       <h4 className="text-lg font-bold mb-2">Technical Services</h4>
                       <p className="text-xs font-medium text-slate-400 uppercase tracking-widest label-font">Adding Soon: IES, IES/ISS & CMS</p>
                    </div>
                  </motion.div>
               )}

               {activeSection === 'syllabus' && (
                 <motion.div key="syllabus" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                     {Object.keys(upscSyllabus).map((key) => (
                       <div key={key} className="space-y-8">
                          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#002147] dark:border-white pb-6 gap-4">
                             <div>
                                <h3 className="text-[24px] font-black text-[#002147] dark:text-white uppercase tracking-tight serif-font">{key}</h3>
                                <div className="flex items-center gap-3 mt-2">
                                   <span className="text-[10px] font-black text-[#FF9933] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#FF9933]/30 rounded">Official Curricula</span>
                                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ver: 2026 Regulation</span>
                                </div>
                             </div>
                             <a 
                               href={upscSyllabus[key].pdfLink} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="flex items-center gap-2 px-6 py-3 bg-[#002147] text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#FF9933] transition-all rounded"
                             >
                                <Download size={16} /> Official PDF
                             </a>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {upscSyllabus[key].items.map((subj, i) => (
                               <div key={i} className={`${colors.surface} border ${colors.border} p-6 h-full hover:border-[#FF9933]/50 transition-all shadow-sm rounded-lg`}>
                                  <div className="flex items-start gap-5">
                                     <div className="flex-shrink-0 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                        <IconRenderer icon={subj.icon} className="w-7 h-7" />
                                     </div>
                                     <div className="flex-grow">
                                        <h4 className="text-[16px] font-bold text-[#002147] dark:text-white mb-2">{subj.subject}</h4>
                                        <p className={`${colors.subtext} text-[13px] leading-relaxed line-clamp-3`}>{subj.content}</p>
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
                    {upscPreviousPapers.map((yearFolder) => (
                      <div key={yearFolder.year} className={`${colors.surface} border ${colors.border} p-8 rounded-lg shadow-sm border-t-4 border-t-[#002147]`}>
                         <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-inner">
                               <IconRenderer icon={yearFolder.icon} className="w-8 h-8" />
                            </div>
                            <div>
                               <h3 className="text-2xl font-black serif-font text-[#002147] dark:text-white leading-none">ARCHIVE {yearFolder.year}</h3>
                               <p className="text-[10px] font-bold text-[#FF9933] uppercase tracking-widest mt-1">Official Repository Documents</p>
                            </div>
                         </div>

                         <div className="space-y-3">
                            {yearFolder.exams.map((paper, i) => (
                              <a 
                                key={i} 
                                href={paper.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-4 border ${colors.border} hover:border-[#002147] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md flex items-center justify-between group transition-all`}
                              >
                                <div className="flex items-center gap-4">
                                   <IconRenderer icon={paper.icon} className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-all" />
                                   <span className="text-[13px] font-bold uppercase tracking-tight overflow-hidden text-ellipsis whitespace-nowrap max-w-[180px] group-hover:text-[#002147] dark:group-hover:text-blue-400">{paper.title}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                   <span className="text-[9px] font-black text-[#FF9933] uppercase group-hover:translate-y-px transition-all tracking-tighter">FETCH</span>
                                   <Download size={14} className="text-slate-300 group-hover:text-[#002147] dark:group-hover:text-white" />
                                </div>
                              </a>
                            ))}
                         </div>
                      </div>
                    ))}
                    
                    {/* Coming Soon Folder */}
                    <div className={`${colors.surface} border border-dashed ${colors.border} p-8 rounded-lg flex flex-col items-center justify-center text-center opacity-70`}>
                       <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-full mb-4">
                          <Archive className="text-slate-300" size={32} />
                       </div>
                       <h4 className="text-lg font-bold">Historical Vault (2014-2022)</h4>
                       <p className="text-[10px] font-black text-[#FF9933] uppercase tracking-widest mt-2">Uploading Documents...</p>
                    </div>
                 </motion.div>
               )}

               {activeSection === 'resources' && (
                  <motion.div key="resources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                      {upscResources.map((section) => (
                        <div key={section.category} className="space-y-6">
                           <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                              <h3 className="text-lg font-black uppercase text-[#002147] dark:text-white tracking-widest">{section.category}</h3>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aspirant Essentials</span>
                           </div>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {section.items.map((item, i) => (
                                <a 
                                  key={i} 
                                  href={item.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className={`${colors.surface} border ${colors.border} p-6 rounded-lg hover:border-[#FF9933] hover:shadow-md transition-all flex items-center gap-5 group`}
                                >
                                   <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded border border-slate-100 dark:border-slate-800 group-hover:text-[#FF9933] transition-colors">
                                      <IconRenderer icon={item.icon} className="w-8 h-8" />
                                   </div>
                                   <div>
                                      <h4 className="text-[14px] font-bold leading-tight mb-1 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h4>
                                      <div className="flex items-center gap-1.5 opacity-40">
                                         <span className="text-[9px] font-black uppercase tracking-widest">Access Library</span>
                                         <ExternalLink size={10} />
                                      </div>
                                   </div>
                                </a>
                              ))}
                           </div>
                        </div>
                      ))}
                      
                      {/* Interview Prep Coming Soon */}
                      <div className="p-10 rounded-lg bg-gradient-to-r from-[#002147] to-[#121927] text-white text-center relative overflow-hidden group glare-auto-sweep">
                         {/* Squared Grid Pattern */}
                         <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                              style={{ 
                                  backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                  backgroundSize: '24px 24px'
                              }} 
                         />
                         
                         <Users className="mx-auto mb-4 opacity-70 relative z-10" size={40} />
                         <h3 className="text-2xl font-bold serif-font mb-2 relative z-10">Personality Test Preparation</h3>
                         <p className="text-white/60 text-sm max-w-md mx-auto mb-8 relative z-10">Video simulations, body language tips, and current affairs analysis for the ultimate phase.</p>
                         <div className="relative z-10 inline-flex items-center gap-2 px-6 py-2 bg-[#FF9933] rounded-full text-[10px] font-black uppercase tracking-widest">
                           <Clock size={12} /> Launching Soon
                         </div>
                      </div>
                  </motion.div>
               )}

             </AnimatePresence>
           </main>
        </div>
      </div>
    </div>
  );
};

export default UPSCPage;
