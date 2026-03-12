import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, MessageSquare, 
  Bookmark, ChevronLeft, ChevronRight,
  Printer, Check, X, Lightbulb, BookOpen,
  Save, Info, Award, Star, Heart, Flame, Lock,
  Plus, Minus, Maximize2, Search
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { topicData } from '../../../data/aptitude';

const QuestionPage = () => {
  const router = useRouter();
  const { category, topic } = router.query;
  const { isDark } = useTheme();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPage, setJumpPage] = useState('');
  const [attempts, setAttempts] = useState({}); 
  const [openExplanations, setOpenExplanations] = useState({}); 
  const questionsPerPage = 5;
  
  const [modalImage, setModalImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const topicModule = useMemo(() => {
    if (!topic) return { questions: [], theory: [] };
    const key = topic.toLowerCase();
    const spacedKey = topic.replace(/-/g, ' ').toLowerCase();
    const data = topicData[key] || topicData[spacedKey] || [];
    return Array.isArray(data) ? { questions: data, theory: [] } : data;
  }, [topic]);

  const allQuestions = topicModule.questions;
  const theoryData = topicModule.theory;

  const totalPages = Math.ceil(allQuestions.length / questionsPerPage);
  
  const currentQuestions = useMemo(() => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    return allQuestions.slice(startIndex, startIndex + questionsPerPage);
  }, [allQuestions, currentPage]);

  const topicName = topic ? topic.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Topic';
  
  const bg = isDark ? 'bg-[#0a0b0d] text-[#e4e4e7]' : 'bg-[#ffffff] text-zinc-900';
  const editorialFont = { fontFamily: '"Plus Jakarta Sans", sans-serif' };

  if (!router.isReady) return null;

  const handleOptionClick = (qId, optId, correctAnswer) => {
    const currentAttempts = attempts[qId] || [];
    if (currentAttempts.includes(correctAnswer)) return; 

    const newAttempts = [...currentAttempts, optId];
    setAttempts(prev => ({ ...prev, [qId]: newAttempts }));

    if (optId === correctAnswer) {
      setOpenExplanations(prev => ({ ...prev, [qId]: true }));
    }
  };

  const toggleExplanation = (qId) => {
    setOpenExplanations(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleJumpPage = (e) => {
    e.preventDefault();
    const pageNum = parseInt(jumpPage);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setJumpPage('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const ImageModal = () => (
    <AnimatePresence>
      {modalImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setModalImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-0 right-0 m-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            >
              <X size={24} />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#111]/90 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-2xl z-20">
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.1))}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 !text-white flex items-center justify-center transition-colors"
                title="Zoom Out"
              >
                <Minus size={20} className="text-white" />
              </button>
              
              <div className="flex flex-col items-center min-w-[70px]">
                <span className="!text-white keep-color text-[9px] font-black uppercase tracking-[0.2em] opacity-50" style={{ color: '#ffffff' }}>Scale</span>
                <span className="!text-white keep-color font-black text-sm tabular-nums" style={{ color: '#ffffff' }}>{Math.round(zoomLevel * 100)}%</span>
              </div>

              <button
                onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.1))}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 !text-white flex items-center justify-center transition-colors"
                title="Zoom In"
              >
                <Plus size={20} className="text-white" />
              </button>
              
              <div className="w-px h-6 bg-white/10 mx-2" />
              
              <button
                onClick={() => setZoomLevel(1)}
                className="!text-white keep-color text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
                style={{ color: '#ffffff' }}
              >
                Reset
              </button>
            </div>

            {/* Image Container */}
            <div className="w-full h-full overflow-hidden flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: zoomLevel }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 30,
                  restDelta: 0.001
                }}
                className="w-full h-full flex items-center justify-center p-8 will-change-transform"
              >
                <img
                  src={modalImage}
                  alt="Large view"
                  className="max-w-full max-h-full object-contain drop-shadow-[0_0_80px_rgba(0,0,0,0.6)] select-none pointer-events-auto"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const AdPlaceholder = ({ type = "sidebar" }) => (
    <div className={`relative overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex items-center justify-center transition-all group hover:border-gray-200 dark:hover:border-white/10 ${type === 'sidebar' ? 'aspect-[4/5] w-full' : 'w-full py-12 mb-8'}`}>
      <div className="absolute top-3 left-3 flex items-center gap-1.5 opacity-30 group-hover:opacity-50 transition-opacity">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
        <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Sponsored</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300/20 dark:border-zinc-700/20 flex items-center justify-center">
            <Info size={16} className="text-zinc-400" />
        </div>
        <div className="text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Advertisement</p>
           <p className="text-[9px] font-bold text-zinc-400/60 mt-1">Professional Placement Area</p>
        </div>
      </div>
    </div>
  );

  const navItems = [
    { name: 'Quantitative', img: 'https://img.icons8.com/3d-fluency/94/calculator.png', href: '/aptitude/quantitative', active: category === 'quantitative' },
    { name: 'Data Interpretation', img: 'https://img.icons8.com/3d-fluency/94/line-chart.png', href: '/aptitude/di', active: category === 'di' },
    { name: 'Verbal Ability', img: 'https://img.icons8.com/3d-fluency/94/brick.png', href: '/aptitude/verbal', active: category === 'verbal' },
    { name: 'Logical Reasoning', img: 'https://img.icons8.com/3d-fluency/94/brain-3--v1.png', href: '/aptitude/logical', active: category === 'logical' }
  ];

  const solvedCount = Object.keys(attempts).filter(k => {
    const q = allQuestions.find(qq => String(qq.id) === String(k));
    return q && (attempts[k] || []).includes(q.answer);
  }).length;
  const masteryPercentage = allQuestions.length > 0 ? Math.round((solvedCount / allQuestions.length) * 100) : 0;
  const pageSolvedCount = currentQuestions.filter(q => {
    const qAttempts = attempts[q.id] || [];
    return qAttempts.includes(q.answer);
  }).length;
  const isPageMastered = pageSolvedCount === currentQuestions.length && currentQuestions.length > 0;

  return (
    <div className={`min-h-screen pt-28 pb-8 ${bg}`} style={editorialFont}>
      <Head>
        <title>{topicName} | Career Platform</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Editorial Navigation Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-5 border-b border-gray-100 dark:border-gray-800">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/40 mb-1">
              <Link href="/aptitude" className="hover:text-blue-600 transition-colors">Aptitude</Link>
              <span className="opacity-30">/</span>
              <span>{category}</span>
            </nav>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white">
              {topicName} <span className="text-black/20 dark:text-white/20 font-normal">Practice Exercise</span>
            </h1>
          </div>
        </div>

        {/* Theory Section - Essential Formulas */}
        {theoryData && theoryData.length > 0 && currentPage === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-110 shrink-0">
                <img 
                  src="https://img.icons8.com/3d-fluency/94/open-book.png" 
                  alt="Theory" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h2 
                  className="text-xl md:text-2xl font-[900] tracking-tight leading-none mb-1.5 keep-color"
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Essential Formulas
                </h2>
                <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest opacity-70">
                  Quick Theory Reference
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {theoryData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-[24px] p-6"
                >
                  {item.image && (
                    <div 
                      className="group/img relative aspect-square w-full rounded-2xl bg-zinc-50 dark:bg-white/5 mb-6 overflow-hidden flex items-center justify-center p-4 cursor-zoom-in"
                      onClick={() => {
                        setModalImage(item.image);
                        setZoomLevel(1);
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover/img:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 flex items-center justify-center transition-all">
                        <Maximize2 size={24} className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-[18px] font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                  {item.formulas ? (
                    <div className="space-y-3">
                      {item.formulas.map((f, fIdx) => (
                        <div key={fIdx} className="flex flex-col gap-0.5">
                          <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{f.label}</span>
                          <span 
                            className="text-[14px] font-[800] tabular-nums keep-color"
                            style={{ color: '#2563eb' }}
                          >
                            {f.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : item.description && (
                    <p className="text-[14px] font-bold text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Feed */}
          <div className="lg:col-span-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="bg-white dark:bg-transparent rounded-2xl"
            >
              {currentQuestions.map((q, index) => {
                const qNum = (currentPage - 1) * questionsPerPage + index + 1;
                const qAttempts = attempts[q.id] || [];
                const isSolved = qAttempts.includes(q.answer);

                return (
                  <React.Fragment key={q.id}>
                    <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 100 } }
                    }}
                    className="pb-6 mb-6 border-b border-gray-100 dark:border-gray-800 last:border-0 last:mb-0"
                  >
                    <div className="mb-4">
                      <h3 className="text-[16px] font-bold text-black dark:text-gray-100 leading-relaxed flex items-start">
                        <span className="mr-3 text-black/30 font-black">{qNum}.</span>
                        <div className="flex flex-col gap-4 w-full">
                          <span>{q.text}</span>
                          {q.image && (
                            <div 
                              className="group/img relative w-full max-w-[280px] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 bg-zinc-50 dark:bg-white/5 p-6 md:p-8 self-start md:self-center transition-all cursor-zoom-in"
                              onClick={() => {
                                setModalImage(q.image);
                                setZoomLevel(1);
                              }}
                            >
                              <img src={q.image} alt="Question diagram" className="w-full h-auto object-contain dark:invert-[0.1] transition-transform duration-500 group-hover/img:scale-105" />
                              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 flex items-center justify-center transition-all">
                                <Maximize2 size={24} className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          )}
                        </div>
                      </h3>
                    </div>

                    {/* Compact Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1.5 mb-5 pl-8">
                      {q.options.map((opt) => {
                        const hasAttempted = qAttempts.includes(opt.id);
                        const isCorrect = opt.id === q.answer;
                        
                        let dotColor = "border-gray-200 dark:border-gray-700 text-black/60 dark:text-white/60 bg-white dark:bg-transparent";
                        let textColor = "text-gray-600 dark:text-gray-400";
                        
                        if (hasAttempted) {
                          if (isCorrect) {
                            dotColor = "border-emerald-500 bg-emerald-500 text-white";
                            textColor = "text-emerald-500 font-black";
                          } else {
                            dotColor = "border-rose-500 bg-rose-500 text-white";
                            textColor = "text-rose-500 font-black";
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            disabled={isSolved && !hasAttempted}
                            onClick={() => handleOptionClick(q.id, opt.id, q.answer)}
                            className={`flex items-center gap-3 py-1.5 group transition-all text-left ${isSolved && !hasAttempted ? "opacity-30 cursor-default" : "cursor-pointer"}`}
                          >
                            <motion.div 
                              initial={false}
                              animate={hasAttempted ? { scale: [0.8, 1.1, 1], rotate: isCorrect ? [0, -10, 0] : [0, 10, 0] } : { scale: 1 }}
                              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                              className={`w-7 h-7 shrink-0 rounded-full border-2 flex items-center justify-center text-[12.5px] font-black transition-colors ${dotColor}`}
                            >
                              {opt.id}
                            </motion.div>
                            <span 
                              className="text-[15px] font-black leading-snug transition-all decoration-1 underline-offset-4 group-hover:underline"
                              style={{ 
                                color: hasAttempted 
                                  ? (isCorrect ? '#059669' : '#dc2626') 
                                  : (isDark ? '#94a3b8' : '#64748b') 
                              }}
                            >
                              {opt.text}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Compact Footer Actions */}
                    <div className="flex items-center justify-between pl-8">
                      <div className="flex items-center gap-4">
                        <motion.button 
                          whileHover={{ scale: 1.02, backgroundColor: '#000', color: '#fff' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleExplanation(q.id)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] flex items-center gap-2 transition-all border border-transparent ${openExplanations[q.id] ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"}`}
                        >
                          <Lightbulb size={12} className={openExplanations[q.id] ? "text-yellow-400" : ""} /> {openExplanations[q.id] ? "Hide Solution" : "View Solution"}
                        </motion.button>
                        
                        <div className="flex items-center gap-1">
                           <motion.button 
                             whileHover={{ y: -2, color: isDark ? '#fff' : '#000' }}
                             className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 dark:text-zinc-600 transition-all">
                              <MessageSquare size={16} />
                           </motion.button>
                           <motion.button 
                             whileHover={{ y: -2, color: isDark ? '#fff' : '#000' }}
                             className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 dark:text-zinc-600 transition-all">
                              <Bookmark size={16} />
                           </motion.button>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isSolved && (
                          <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#fef9c3] dark:bg-yellow-500/20 border-2 border-yellow-300 dark:border-yellow-500/30 rounded-lg"
                          >
                             <div className="w-4 h-4 rounded bg-yellow-400 flex items-center justify-center">
                               <Check size={10} className="text-black stroke-[4]" />
                             </div>
                             <span className="text-[10px] font-black text-yellow-800 dark:text-yellow-400 uppercase tracking-widest">Solved</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <AnimatePresence>
                      {openExplanations[q.id] && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pl-8 overflow-hidden"
                        >
                          <div className="relative p-5 bg-[#f0f9ff] dark:bg-[#0c4a6e]/10 border border-[#bae6fd] dark:border-[#0c4a6e]/20 rounded-xl">
                            <h4 className="flex items-center gap-2 text-[10px] font-black text-[#0284c7] dark:text-[#7dd3fc] uppercase tracking-[0.2em] mb-3 border-b border-[#bae6fd] dark:border-white/10 pb-2">
                               Explanation
                            </h4>
                            <div className="text-[15px] leading-relaxed font-bold text-black dark:text-gray-200 whitespace-pre-line">
                              {q.explanation}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  {index === 2 && <AdPlaceholder type="feed" />}
                </React.Fragment>
              );
            })}
              <AdPlaceholder type="feed" />
            </motion.div>

            {/* Premium Segmented Pagination (Fully Responsive) */}
            <div className="flex flex-col items-center gap-8 md:gap-10 py-8 border-t border-gray-100 dark:border-gray-800 mt-6 pt-8 px-4">
              
              {/* Primary Navigation Row */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl">
                {/* Previous Button */}
                <motion.button 
                  whileHover={currentPage !== 1 ? { scale: 1.02 } : {}}
                  whileTap={currentPage !== 1 ? { scale: 0.98 } : {}}
                  onClick={() => {
                    if (currentPage === 1) return;
                    setCurrentPage(p => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`group flex items-center rounded-xl overflow-hidden shadow-lg transition-all flex-1 sm:flex-none ${currentPage === 1 ? 'opacity-20 cursor-not-allowed' : ''}`}
                >
                  <div className="bg-[#8cc63f] px-3 sm:px-4 h-12 sm:h-14 flex items-center justify-center">
                    <ChevronLeft size={18} strokeWidth={4} className="!text-white" />
                  </div>
                  <div className="bg-[#1a1a1a] flex-1 sm:flex-none px-5 h-12 sm:h-14 flex items-center justify-center">
                    <span className="force-white keep-color !text-white font-black text-[11px] sm:text-[12px] uppercase tracking-[0.15em] whitespace-nowrap" style={{ color: '#ffffff' }}>Prev</span>
                  </div>
                </motion.button>

                {/* Page Number Bar */}
                <div className="flex items-center bg-[#1a1a1a] rounded-xl overflow-hidden shadow-xl border border-white/10 h-12 sm:h-14 order-last sm:order-none w-full sm:w-auto mt-2 sm:mt-0">
                  {(() => {
                    const pages = [];
                    // Show 3 pages on mobile, 5 on desktop
                    const maxVisible = 5; 
                    let start = Math.max(1, currentPage - 2);
                    let end = Math.min(totalPages, start + maxVisible - 1);
                    
                    if (end - start < maxVisible - 1) {
                      start = Math.max(1, end - maxVisible + 1);
                    }

                    for (let p = start; p <= end; p++) {
                      pages.push(p);
                    }

                    return pages.map((p, i) => (
                      <button
                        key={p}
                        onClick={() => {
                          setCurrentPage(p);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`force-white keep-color flex-1 sm:w-12 h-full text-[14px] sm:text-[15px] font-black transition-all border-r border-white/5 last:border-0 ${
                          currentPage === p 
                            ? 'bg-[#8cc63f] !text-white shadow-inner' 
                            : '!text-white/60 hover:!text-white hover:bg-white/10'
                        }`}
                        style={{ color: currentPage === p ? '#ffffff' : 'rgba(255, 255, 255, 0.6)' }}
                      >
                        {p}
                      </button>
                    ));
                  })()}
                </div>

                {/* Next Button */}
                <motion.button 
                  whileHover={currentPage !== totalPages ? { scale: 1.02 } : {}}
                  whileTap={currentPage !== totalPages ? { scale: 0.98 } : {}}
                  onClick={() => {
                    if (currentPage === totalPages) return;
                    setCurrentPage(p => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`group flex items-center rounded-xl overflow-hidden shadow-lg transition-all flex-1 sm:flex-none ${currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : ''}`}
                >
                  <div className="bg-[#1a1a1a] flex-1 sm:flex-none px-5 h-12 sm:h-14 flex items-center justify-center">
                    <span className="force-white keep-color !text-white font-black text-[11px] sm:text-[12px] uppercase tracking-[0.15em] whitespace-nowrap" style={{ color: '#ffffff' }}>Next</span>
                  </div>
                  <div className="bg-[#8cc63f] px-3 sm:px-4 h-12 sm:h-14 flex items-center justify-center">
                     <ChevronRight size={18} strokeWidth={4} className="!text-white" />
                  </div>
                </motion.button>
              </div>

              {/* Utility Row (Responsive Stack) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                {/* Jump to Page */}
                <form 
                  onSubmit={handleJumpPage} 
                  className="group flex items-center bg-[#1a1a1a] rounded-full h-11 pl-5 pr-2 border border-white/10 transition-all shadow-md sm:w-auto"
                >
                  <label htmlFor="jump-input" className="force-white keep-color !text-white text-[10px] font-black uppercase tracking-[0.1em] mr-3 whitespace-nowrap" style={{ color: '#ffffff' }}>Jump to</label>
                  <div className="flex items-center bg-white rounded-lg px-2 border border-white/20 group-focus-within:border-[#8cc63f] transition-all">
                    <input 
                      id="jump-input"
                      type="text" 
                      value={jumpPage}
                      onChange={(e) => setJumpPage(e.target.value)}
                      placeholder="0" 
                      className="w-12 h-7 text-center text-[14px] font-black bg-transparent outline-none !text-black placeholder:text-black/30"
                      style={{ color: '#000000' }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="ml-2 w-7 h-7 rounded-lg bg-[#8cc63f] !text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronRight size={14} strokeWidth={4} className="text-white" />
                  </button>
                </form>

                {/* Page Counter (Ultra Clear & Fully Responsive) */}
                <div className="force-white keep-color !text-white px-6 sm:px-10 h-11 flex items-center bg-[#1a1a1a] rounded-full border border-white/20 shadow-lg w-full sm:w-auto justify-center" style={{ color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
                  <span className="force-white keep-color !text-white text-[18px] sm:text-[22px] font-black tracking-tighter" style={{ color: '#ffffff' }}>{currentPage}</span>
                  <span className="mx-4 sm:mx-6 force-white keep-color !text-white font-bold text-[12px] sm:text-[14px] uppercase tracking-[0.1em]" style={{ color: '#ffffff' }}>OF</span>
                  <span className="force-white keep-color !text-white text-[18px] sm:text-[22px] font-black tracking-tighter" style={{ color: '#ffffff' }}>{totalPages}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
               <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 px-4">Subject Feed</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 pb-8">
                  {[
                    { name: 'Quantitative\nProficiency', img: 'https://img.icons8.com/3d-fluency/94/calculator.png', href: '/aptitude/quantitative', active: category === 'quantitative', color: 'bg-[#2563eb]' },
                    { name: 'Data\nInterpretation', img: 'https://img.icons8.com/3d-fluency/94/line-chart.png', href: '/aptitude/di', active: category === 'di', color: 'bg-[#10b981]' },
                    { name: 'Verbal\nAbility', img: 'https://img.icons8.com/3d-fluency/94/brick.png', href: '/aptitude/verbal', active: category === 'verbal', color: 'bg-[#7c3aed]' },
                    { name: 'Logical\nReasoning', img: 'https://img.icons8.com/3d-fluency/94/brain-3--v1.png', href: '/aptitude/logical', active: category === 'logical', color: 'bg-[#f59e0b]' }
                  ].map((cat, i) => (
                    <Link 
                      key={i} 
                      href={cat.href}
                      className={`relative aspect-[4/3] lg:aspect-[4/3] rounded-3xl p-4 md:p-5 overflow-hidden group transition-all duration-700 shadow-2xl ${cat.color} ${cat.active ? 'ring-[5px] ring-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] scale-[1.05] z-20' : 'hover:scale-[1.03] z-10 opacity-90 hover:opacity-100'}`}
                    >
                      {/* 100% Hand-Crafted Blueprint Decorative Layer (No AI feel) */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Static Technical Circle */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-white/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                        
                        {/* Technical Accent Dots */}
                        <div className="absolute bottom-4 right-4 flex gap-1">
                           <div className="w-1 h-1 rounded-full bg-white/40" />
                           <div className="w-1 h-1 rounded-full bg-white/40" />
                           <div className="w-1 h-1 rounded-full bg-white/10" />
                        </div>

                        {/* Corner Bracket */}
                        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/20" />
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div 
                          className="text-center text-[10px] font-black leading-tight uppercase tracking-[0.2em] whitespace-pre-line drop-shadow-md !text-white"
                          style={{ color: '#ffffff' }}
                        >
                          {cat.name}
                        </div>
                        
                        <div className="flex-1 flex items-center justify-center">
                          <img 
                            src={cat.img} 
                            alt="" 
                            className={`w-16 h-16 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)] transition-transform duration-500 ${cat.active ? 'scale-110' : 'group-hover:scale-105'}`} 
                          />
                        </div>
                      </div>

                      {/* Professional Glass Highlight */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none transition-opacity duration-700 ${cat.active ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`} />
                      
                      {/* Active Scanning Beam - Immersive Digital Effect */}
                      {cat.active && (
                        <motion.div 
                          initial={{ left: '-150%' }}
                          animate={{ left: '150%' }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none z-20"
                        />
                      )}
                    </Link>
                  ))}
                </div>
            </div>

            <div className="space-y-4">
              {/* Mastery Dashboard - Clean Grid Aesthetic */}
              <div className="relative bg-[#facc15] rounded-xl p-6 flex items-center justify-between overflow-hidden group shadow-inner">
                 {/* 100% Hand-Crafted Decorative Technical Pattern */}
                 <div className="absolute inset-0 pointer-events-none">
                    {/* Primary Technical Grid Square BG */}
                    <svg className="absolute w-full h-full opacity-[0.5]" xmlns="http://www.w3.org/2000/svg">
                       <defs>
                          <pattern id="techGridSquare" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                             <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="1.2" strokeOpacity="1" />
                          </pattern>
                       </defs>
                       <rect width="100%" height="100%" fill="url(#techGridSquare)" />
                    </svg>
                 </div>

                 <div className="relative z-10 w-16 h-16 shrink-0">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="5" fill="transparent" className="opacity-30" />
                      <motion.circle 
                        cx="32" cy="32" r="28" stroke="white" strokeWidth="6" fill="transparent" 
                        strokeDasharray={175.84}
                        initial={{ strokeDashoffset: 175.84 }}
                        animate={{ strokeDashoffset: 175.84 - (175.84 * masteryPercentage) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                       <span className="text-[14px] font-black text-white leading-none drop-shadow-sm">{masteryPercentage}%</span>
                    </div>
                 </div>
                 
                 <div className="relative z-10 flex-1 px-5 space-y-2">
                    <div>
                       <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/90 drop-shadow-sm">Core Proficiency</p>
                       <h4 className="text-[18px] font-black text-white uppercase tracking-tight drop-shadow-sm">Total Mastery</h4>
                    </div>
                    <div className="flex flex-wrap gap-2.5 max-w-[400px]">
                      {[
                        "medal", "trophy", "crown", 
                        "bird", "butterfly", "clover", 
                        "sun", "rocket", "fire", 
                        "heart", "star"
                      ].map((icon, idx) => {
                        const pageStartIndex = idx * questionsPerPage;
                        const pageEndIndex = pageStartIndex + questionsPerPage;
                        const pageQuestions = allQuestions.slice(pageStartIndex, pageEndIndex);
                        const isThisPageMastered = pageQuestions.length > 0 && 
                                                 pageQuestions.every(q => attempts[q.id]?.includes(q.answer));
                        
                        return (
                          <div key={idx} className="relative group">
                            <motion.div 
                              animate={{ 
                                y: isThisPageMastered ? [0, -2, 0] : 0,
                                scale: isThisPageMastered ? [1, 1.1, 1] : 1
                              }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}
                              className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-700 overflow-hidden ${isThisPageMastered ? 'bg-white shadow-lg border-white/50' : 'bg-white/5 border-white/10 opacity-20'}`}
                              title={`Page ${idx + 1} Mastery`}
                            >
                               <img 
                                 src={`https://img.icons8.com/3d-fluency/94/${icon}.png`} 
                                 alt={`Page ${idx + 1}`}
                                 onError={(e) => {
                                   e.target.onerror = null;
                                   e.target.src = "https://img.icons8.com/3d-fluency/94/gift.png";
                                 }}
                                 className={`w-7 h-7 transition-all duration-700 ${isThisPageMastered ? 'grayscale-0 scale-110' : 'grayscale brightness-150'}`}
                               />
                            </motion.div>
                            
                            {!isThisPageMastered && (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                <div className="w-6 h-6 bg-black/40 backdrop-blur-[2px] rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                                  <Lock size={10} className="text-white" strokeWidth={3} />
                                </div>
                              </div>
                            )}

                            {/* Tiny Indicator Dot */}
                            {isThisPageMastered && (
                              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full border border-white shadow-sm animate-pulse" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                 </div>
              </div>

              {/* Efficiency Card - Handcrafted Gamified Experience */}
              <div className={`relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-[32px] p-7 shadow-2xl shadow-black/5 overflow-hidden group transition-all duration-1000`}>
                 {/* 100% Handcrafted Decorative Motifs (No AI feel) */}
                 <div className="absolute inset-0 pointer-events-none">
                    {/* Shifting Organic Void 1 */}
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.3, 1],
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        rotate: [0, 45, 0]
                      }}
                      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute -top-1/2 -right-1/4 w-full h-full blur-[100px] opacity-20 transition-colors duration-1000 ${isPageMastered ? 'bg-orange-400' : (pageSolvedCount > 0 ? 'bg-emerald-400' : 'bg-zinc-200')}`}
                    />
                    
                    {/* Shifting Organic Void 2 */}
                    <motion.div 
                      animate={{ 
                        scale: [1.3, 1, 1.3],
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                        rotate: [0, -30, 0]
                      }}
                      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute -bottom-1/2 -left-1/4 w-full h-full blur-[100px] opacity-15 transition-colors duration-1000 ${isPageMastered ? 'bg-amber-300' : (pageSolvedCount > 0 ? 'bg-emerald-200' : 'bg-zinc-100')}`}
                    />

                    {/* Spirit Sparks (Floating Particles) */}
                    <AnimatePresence>
                       {(pageSolvedCount > 0) && [1, 2, 3, 4].map(i => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, y: 40, x: (i * 40) }}
                            animate={{ 
                               opacity: [0, 0.4, 0], 
                               scale: [0, 1, 0.5],
                               y: -150,
                               x: (i * 40) + (Math.sin(i) * 50)
                            }}
                            transition={{ 
                               duration: 4 + Math.random() * 2, 
                               repeat: Infinity, 
                               delay: i * 0.8,
                               ease: "easeOut" 
                            }}
                            className={`absolute bottom-0 w-1.5 h-1.5 rounded-full blur-[1px] ${isPageMastered ? 'bg-orange-400' : 'bg-emerald-400'}`}
                          />
                       ))}
                    </AnimatePresence>
                 </div>

                 {/* Content - Elevated Layer */}
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                       <div className="space-y-1.5 text-left">
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 opacity-60">Current Progress</p>
                          <h5 className="text-[20px] font-black text-zinc-900 dark:text-white leading-none tracking-tight">
                             {pageSolvedCount} / {currentQuestions.length} <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Correct</span>
                          </h5>
                       </div>
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${isPageMastered ? 'bg-orange-500/10 shadow-xl shadow-orange-500/10' : 'bg-emerald-500/5'}`}>
                          <motion.img 
                            src="https://img.icons8.com/3d-fluency/94/fire-element.png" 
                            alt="fire" 
                            className={`w-11 h-11 object-contain transition-all ${pageSolvedCount > 0 ? "grayscale-0" : "grayscale opacity-10"}`}
                            animate={pageSolvedCount > 0 ? { 
                              y: [0, -8, 0],
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0]
                            } : {}}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                       </div>
                    </div>
                    
                    <div className="space-y-5">
                       <div className="relative h-2.5 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(pageSolvedCount / currentQuestions.length) * 100}%` }}
                            className={`h-full relative transition-all duration-1000 ${isPageMastered ? 'bg-gradient-to-r from-orange-400 to-amber-600 shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'bg-gradient-to-r from-emerald-400 to-emerald-600'}`} 
                          >
                             {/* Gloss Shine Effect */}
                             <motion.div 
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2" 
                             />
                          </motion.div>
                       </div>
                       
                       <div className="flex items-center justify-between">
                          <div className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-sm ${isPageMastered ? 'bg-orange-500 text-white border-orange-400' : (pageSolvedCount > 0 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-zinc-50 text-zinc-400 border-zinc-100')}`}>
                             {isPageMastered ? "On Fire!" : (pageSolvedCount > 0 ? "Heating Up" : "Start Solving")}
                          </div>
                          <div className="flex items-center gap-1.5">
                             <span className={`text-[16px] font-black tabular-nums ${isPageMastered ? 'text-orange-500' : (pageSolvedCount > 0 ? 'text-emerald-500' : 'text-zinc-400')}`}>
                                {Math.round((pageSolvedCount / currentQuestions.length) * 100)}%
                             </span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            <AdPlaceholder type="sidebar" />
            
            <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-transparent">
               <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-4 px-2">Promoted Content</h4>
               <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="group cursor-pointer">
                      <div className="aspect-video w-full rounded-xl bg-gray-50 dark:bg-white/5 mb-3 overflow-hidden border border-transparent group-hover:border-zinc-200 dark:group-hover:border-zinc-800 transition-all flex items-center justify-center">
                         <span className="text-[9px] font-black text-zinc-300 uppercase tracking-widest">Image Area</span>
                      </div>
                      <div className="px-2">
                        <div className="h-2 w-2/3 bg-zinc-100 dark:bg-zinc-800 rounded mb-2" />
                        <div className="h-2 w-1/2 bg-zinc-50 dark:bg-zinc-900 rounded" />
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </aside>
        </div>

        {/* Catalog Navigation */}
        <div className="mt-32 py-16 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
          <Link href={`/aptitude/${category}`} className="group flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-blue-600 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
               <ArrowLeft size={24} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold tracking-tight">
              <span className="text-black dark:text-white keep-color">Back to </span>
              <span className="text-blue-600 dark:text-blue-400 keep-color">
                {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Aptitude'} Catalog
              </span>
            </h2>
          </Link>
        </div>
      </div>
      
      <ImageModal />
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body.light { background-color: #ffffff !important; }
      `}</style>
    </div>
  );
};

export default QuestionPage;
