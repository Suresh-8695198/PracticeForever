import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronRight, ArrowRight, Search, Target, BookOpen, Clock, 
  Zap, Award, ArrowLeft, RotateCcw, X, Info
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import axios from 'axios';
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
import { useTheme } from '../../context/ThemeContext';
import HeroSection from '../../components/aptitude/HeroSection';

const aptitudeData = [
  {
    category: "Quantitative Aptitude",
    path: "/aptitude/quantitative",
    icon: "https://img.icons8.com/3d-fluency/94/calculator.png",
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    description: "Numerical ability and mathematical problem-solving questions.",
    topics: [
      "Numbers", "H.C.F. & L.C.M. of Numbers", "Decimal Fractions", "Simplification",
      "Square Roots & Cube Roots", "Permutations and Combination",
      "Problems on Trains", "Numbers and Ages",
      "Percentage problems", "Boats and Streams", "Ratio & Proportion", "Pipes and Cistern",
      "Surds and Indices", "Averages", "Simple Interest and Compound Interest", "Heights and Distances",
      "Profit and Loss", "Discount", "Partnership", "Mixture and Alligation",
      "Time and Distance", "Time & Work", "Volume & Surface Areas",
      "Clocks and Calendar", "Stocks & Shares", "Probability",
      "Odd Man Out & Series"
    ]
  },
  {
    category: "Logical Reasoning",
    path: "/aptitude/logical",
    icon: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png",
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    description: "Analytical thinking, patterns, and logical deduction tests.",
    topics: [
      "Number Series", "Letter and Symbol Series", "Verbal Classification", "Essential Part",
      "Analogies", "Artificial Language", "Matching Definitions", "Making Judgments",
      "Verbal Reasoning", "Logical Problems", "Logical Games", "Analyzing Arguments",
      "Statement and Assumption", "Course of Action", "Statement and Conclusion"
    ]
  },
  {
    category: "Verbal Ability",
    path: "/aptitude/verbal",
    icon: "https://img.icons8.com/3d-fluency/94/brick.png",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    description: "English language proficiency, grammar, and vocabulary.",
    topics: [
      "Spotting Errors", "Synonyms", "Antonyms", "Selecting Words", "Spellings",
      "Sentence Formation", "Ordering of Words", "Sentence Correction", "Sentence Improvement",
      "Sentence Completion", "Ordering of Statements", "Paragraph Formation", "Cloze Test",
      "Comprehension", "One Word Substitution", "Idioms and Phrases", "Change of Voice",
      "Change of Speech", "Verbal Analogies"
    ]
  },
  {
    category: "Data Interpretation",
    path: "/aptitude/di",
    icon: "https://img.icons8.com/3d-fluency/94/line-chart.png",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    description: "Analysis of graphs, tables, and statistical data insights.",
    topics: [
      "Tabulation", "Bar Graphs", "Pie Charts", "Line Graphs"
    ]
  },
  {
    category: "Non-Verbal Reasoning",
    path: "/aptitude/non-verbal",
    icon: "https://img.icons8.com/3d-fluency/94/rubiks-cube.png",
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    description: "Spatial reasoning, visual logic, and abstract pattern tests.",
    topics: [
      "Series", "Analogy", "Classification", "Analytical Reasoning", "Mirror Images",
      "Water Images", "Embedded Images", "Pattern Completion", "Figure Matrix",
      "Paper Folding", "Paper Cutting", "Rule Detection", "Grouping of Images",
      "Dot Situation", "Shape Construction", "Image Analysis", "Cubes and Dice"
    ]
  }
];

const AptitudePage = () => {
  const { isDark } = useTheme();
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const cardBg = isDark ? 'bg-[#141414] border-[#222]' : 'bg-white border-gray-100';
  const headFont = { fontFamily: 'Outfit, sans-serif' };
  const bodyFont = { fontFamily: 'Outfit, sans-serif' };

  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const stagger = { show: { transition: { staggerChildren: 0.05 } } };

  const filteredData = aptitudeData.map(section => ({
    ...section,
    topics: section.topics.filter(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.topics.length > 0);

  const confirmResetAll = async () => {
    setIsResetting(true);
    try {
      if (session?.user?.backendId) {
        // We could have a bulk reset endpoint or just clear local if unsure
        // For now, let's clear local and maybe ping an endpoint if it exists
        try {
           await axios.delete(`${API_BASE}/api/progress/${session.user.backendId}/all-aptitude`);
        } catch(e) { console.log("Backend reset not supported or failed") }
      }
      
      // Clear all local progress keys for aptitude
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('progress_aptitude_')) {
          localStorage.removeItem(key);
        }
      });
      
      window.location.reload(); // Refresh to reflect cleared status
    } catch (error) {
      console.error("Reset failed:", error);
      alert("Failed to reset progress.");
    } finally {
      setIsResetting(false);
      setShowResetModal(false);
    }
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 ${bg}`} style={bodyFont}>
      <Head>
        <title>Aptitude & Reasoning Hub | Career Platform</title>
        <meta name="description" content="Prepare for placements with thousands of practice questions across quantitative, logical and verbal reasoning." />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection isDark={isDark} />

        {/* Global Progress Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm">
           <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <img src="https://img.icons8.com/3d-fluency/94/like--v3.png" alt="Fully Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
                <span>Fully Completed</span>
              </div>
              <div className="hidden sm:block w-px h-3.5 bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex items-center gap-2">
                <img src="https://img.icons8.com/3d-fluency/94/like--v8.png" alt="Partially Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
                <span>Partially Completed</span>
              </div>
           </div>

           <button 
             onClick={() => setShowResetModal(true)}
             className="flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-500 text-[11px] font-black uppercase tracking-widest hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all active:scale-95"
           >
             <RotateCcw size={14} strokeWidth={3} />
             Reset All Aptitude Progress
           </button>
        </div>

        {/* Reset Confirmation Modal */}
        <AnimatePresence>
          {showResetModal && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowResetModal(false)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-[400px] bg-white dark:bg-[#121212] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mb-6">
                    <RotateCcw size={32} className="text-rose-500" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-[24px] font-black text-gray-900 dark:text-white mb-3 tracking-tight">Reset All?</h3>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                    This will permanently clear your progress across <span className="text-rose-500 font-bold">ALL Aptitude modules</span>. This action cannot be undone.
                  </p>
                  
                  <div className="flex flex-col w-full gap-3">
                    <button 
                      onClick={confirmResetAll}
                      disabled={isResetting}
                      className="h-14 w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white rounded-2xl font-black text-[15px] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                      {isResetting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Confirm Absolute Reset"
                      )}
                    </button>
                    
                    <button 
                      onClick={() => setShowResetModal(false)}
                      className="h-14 w-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 rounded-2xl font-bold text-[14px] transition-all active:scale-[0.98]"
                    >
                      Keep My Progress
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Categories Grid */}
        <div className="space-y-32">
          {filteredData.map((section, sIdx) => (
            <motion.section 
              key={section.category}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-5">
                  <div 
                    className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                  >
                    <img 
                      src={section.icon} 
                      alt={section.category} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <h2 
                      className="text-xl md:text-[23px] font-bold tracking-tight mb-0.5 keep-color" 
                      style={{ 
                        ...headFont, 
                        backgroundImage: section.bgGradient,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        display: 'inline-block'
                      }}
                    >
                      {section.category}
                    </h2>
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {section.topics.length} practice modules available
                    </p>
                  </div>
                </div>
                <Link 
                  href={section.path} 
                  className="group flex items-center gap-1.5 text-[13px] font-bold transition-all hover:opacity-80 keep-color"
                  style={{ 
                    backgroundImage: section.bgGradient,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}
                >
                  Explore <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" style={{ color: section.color }} />
                </Link>
              </div>

              <motion.div 
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-2"
              >
                {section.topics.map((topic, tIdx) => (
                  <motion.div key={topic} variants={fadeUp}>
                    <Link 
                      href={`${section.path}/${topic.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="group flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 transition-all duration-300"
                      onMouseEnter={(e) => {
                        const span = e.currentTarget.querySelector('.topic-span');
                        if (span) {
                          span.style.backgroundImage = section.bgGradient;
                          span.style.WebkitBackgroundClip = 'text';
                          span.style.backgroundClip = 'text';
                          span.style.WebkitTextFillColor = 'transparent';
                          span.style.color = 'transparent';
                          span.style.display = 'inline-block';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const span = e.currentTarget.querySelector('.topic-span');
                        if (span) {
                          span.style.backgroundImage = '';
                          span.style.WebkitBackgroundClip = '';
                          span.style.backgroundClip = '';
                          span.style.WebkitTextFillColor = '';
                          span.style.color = '';
                        }
                      }}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                        <div className="shrink-0 w-6 h-6 transition-transform group-hover:scale-110">
                          <img 
                            src="https://img.icons8.com/3d-fluency/94/folder-invoices.png" 
                            alt="" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-1 min-w-0">
                          <span 
                            className="topic-span text-[14px] font-medium tracking-tight truncate keep-color"
                            style={{ ...bodyFont }}
                          >
                            {topic}
                          </span>
                        </div>
                      </div>
                      <ChevronRight 
                        size={14} 
                        className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: section.color }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>
        
        {/* Hub Navigation */}
        <div className="mt-32 py-16 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
          <Link href="/" className="group flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-blue-600 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
               <ArrowLeft size={24} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
            </div>
            <h2 
              className="text-xl md:text-3xl font-bold tracking-tight" 
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-black dark:text-white keep-color">Back to </span>
              <span className="text-blue-600 dark:text-blue-400 keep-color">Career Hub</span>
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AptitudePage;
