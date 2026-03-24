import React, { useState, useMemo } from 'react';
import HRTopicPage from './hr-topic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, MessageSquare, 
  Bookmark, ChevronLeft, ChevronRight,
  Printer, Check, X, Lightbulb, BookOpen,
  Save, Info, Award, Star, Heart, Flame, Lock,
  Plus, Minus, Maximize2, Search, RotateCcw, Code
} from 'lucide-react';
import { useTheme } from '../../../../context/ThemeContext';
import { topicData as aptitudeData } from '../../../../data/aptitude';
import { useSession, signIn } from 'next-auth/react';
import ElectricBorder from '../../../../components/common/ElectricBorder';
import ComingSoon from '@/components/common/ComingSoon';
import axios from 'axios';

// Import TCS topic-specific question data
import { questions as numberSystemQ } from '../../../../data/company/tcs/topics/number-system';
import { questions as hcfLcmQ } from '../../../../data/company/tcs/topics/hcf-lcm';
import { questions as decimalFractionsQ } from '../../../../data/company/tcs/topics/decimal-fractions';
import { questions as simplificationQ } from '../../../../data/company/tcs/topics/simplification';
import { questions as sqrtCbrtQ } from '../../../../data/company/tcs/topics/square-roots-cube-roots';
import { questions as percentageQ } from '../../../../data/company/tcs/topics/percentage';
import { questions as averageQ } from '../../../../data/company/tcs/topics/average';
import { questions as ratioProportionQ } from '../../../../data/company/tcs/topics/ratio-proportion';
import { questions as timeWorkQ } from '../../../../data/company/tcs/topics/time-work';
import { questions as timeDistanceQ } from '../../../../data/company/tcs/topics/time-distance';
import { questions as simpleInterestQ } from '../../../../data/company/tcs/topics/simple-interest';
import { questions as mixedNumericalQ } from '../../../../data/company/tcs/numerical-ability'; // Using the main file as fallback

// Additional Numerical Topic Imports
import { questions as partnershipQ } from '../../../../data/company/tcs/topics/partnership';
import { questions as pipesCisternQ } from '../../../../data/company/tcs/topics/pipes-cistern';
import { questions as problemsOnTrainsQ } from '../../../../data/company/tcs/topics/problems-on-trains';
import { questions as boatsStreamsQ } from '../../../../data/company/tcs/topics/boats-streams';
import { questions as alligationMixtureQ } from '../../../../data/company/tcs/topics/alligation-mixture';
import { questions as compoundInterestQ } from '../../../../data/company/tcs/topics/compound-interest';
import { questions as areaQ } from '../../../../data/company/tcs/topics/area';
import { questions as volumeSurfaceAreasQ } from '../../../../data/company/tcs/topics/volume-surface-areas';
import { questions as calendarQ } from '../../../../data/company/tcs/topics/calendar';
import { questions as clocksQ } from '../../../../data/company/tcs/topics/clocks';
import { questions as stocksSharesQ } from '../../../../data/company/tcs/topics/stocks-shares';
import { questions as permutationsCombinationsQ } from '../../../../data/company/tcs/topics/permutations-combinations';
import { questions as probabilityQ } from '../../../../data/company/tcs/topics/probability';
import { questions as oddManOutSeriesQ } from '../../../../data/company/tcs/topics/odd-man-out-series';

// Section-level fallbacks
import { questions as verbalAbilityQ } from '../../../../data/company/tcs/verbal-ability';
import { questions as reasoningAbilityQ } from '../../../../data/company/tcs/reasoning-ability';

// New Verbal Topic Imports
import { questions as readingComprehensionQ } from '../../../../data/company/tcs/topics/reading-comprehension';
import { questions as sentenceCorrectionQ } from '../../../../data/company/tcs/topics/sentence-correction';
import { questions as sentenceCompletionQ } from '../../../../data/company/tcs/topics/sentence-completion';
import { questions as synonymsAntonymsQ } from '../../../../data/company/tcs/topics/synonyms-antonyms';
import { questions as clozeTestQ } from '../../../../data/company/tcs/topics/cloze-test';
import { questions as fillInTheBlanksQ } from '../../../../data/company/tcs/topics/fill-in-the-blanks';
import { questions as errorSpottingQ } from '../../../../data/company/tcs/topics/error-spotting';
import { questions as prepositionsConjunctionsQ } from '../../../../data/company/tcs/topics/prepositions-conjunctions';

// New Reasoning Topic Imports
import { questions as numberSeriesQ } from '../../../../data/company/tcs/topics/number-series';
import { questions as bloodRelationsQ } from '../../../../data/company/tcs/topics/blood-relations';
import { questions as codingDecodingQ } from '../../../../data/company/tcs/topics/coding-decoding';
import { questions as syllogismQ } from '../../../../data/company/tcs/topics/syllogism';
import { questions as seatingArrangementQ } from '../../../../data/company/tcs/topics/seating-arrangement';
import { questions as dataSufficiencyQ } from '../../../../data/company/tcs/topics/data-sufficiency';
import { questions as inferredMeaningQ } from '../../../../data/company/tcs/topics/inferred-meaning';
import { questions as logicalSequenceQ } from '../../../../data/company/tcs/topics/logical-sequence';
import { questions as visualReasoningQ } from '../../../../data/company/tcs/topics/visual-reasoning';

// Advanced Quantitative Imports
import { questions as algebraQ } from '../../../../data/company/tcs/topics/algebra';
import { questions as geometryTrigonometryQ } from '../../../../data/company/tcs/topics/geometry-trigonometry';
import { questions as probabilityAdvancedQ } from '../../../../data/company/tcs/topics/probability-advanced';
import { questions as mensurationAdvancedQ } from '../../../../data/company/tcs/topics/mensuration-advanced';
import { questions as elementaryStatisticsQ } from '../../../../data/company/tcs/topics/elementary-statistics';

// Advanced Coding Imports
import { questions as arrayStringManipulationQ } from '../../../../data/company/tcs/topics/array-string-manipulation';
import { questions as patternPrintingLogicQ } from '../../../../data/company/tcs/topics/pattern-printing-logic';
import { questions as handsOnCodingQuestionsQ } from '../../../../data/company/tcs/topics/hands-on-coding-questions';
import { questions as complexityAnalysisQ } from '../../../../data/company/tcs/topics/complexity-analysis';
import { questions as googleDsaPyqsQ } from '../../../../data/company/tcs/topics/google-dsa-pyqs';

// CS Fundamentals Imports
import * as operatingSystemsQ from '../../../../data/company/tcs/topics/operating-systems';
import * as computerNetworksQ from '../../../../data/company/tcs/topics/computer-networks';
import * as dbmsSqlQ from '../../../../data/company/tcs/topics/dbms-sql';
import * as csFundamentalsMcqsQ from '../../../../data/company/tcs/topics/cs-fundamentals-mcqs';
import * as cybersecurityBasicsQ from '../../../../data/company/tcs/topics/cybersecurity-basics';

// Programming Theory Imports
import * as cCppBasicsQ from '../../../../data/company/tcs/topics/c-c-basics';
import * as javaOopsConceptsQ from '../../../../data/company/tcs/topics/java-oops-concepts';
import * as pythonFundamentalsQ from '../../../../data/company/tcs/topics/python-fundamentals';
import * as dataStructuresTheoryQ from '../../../../data/company/tcs/topics/data-structures-theory';

const companyTopicData = {
  tcs: {
    // Numerical Ability
    'number-system': numberSystemQ,
    'h-c-f-l-c-m-of-numbers': hcfLcmQ,
    'hcf-lcm': hcfLcmQ,
    'decimal-fractions': decimalFractionsQ,
    'simplification': simplificationQ,
    'square-roots-cube-roots': sqrtCbrtQ,
    'percentage': percentageQ,
    'average': averageQ,
    'ratio-proportion': ratioProportionQ,
    'partnership': partnershipQ,
    'time-work': timeWorkQ,
    'pipes-cistern': pipesCisternQ,
    'time-distance': timeDistanceQ,
    'problems-on-trains': problemsOnTrainsQ,
    'boats-streams': boatsStreamsQ,
    'alligation-or-mixture': alligationMixtureQ,
    'simple-interest': simpleInterestQ,
    'compound-interest': compoundInterestQ,
    'area': areaQ,
    'volume-surface-areas': volumeSurfaceAreasQ,
    'calendar': calendarQ,
    'clocks': clocksQ,
    'stocks-shares': stocksSharesQ,
    'permutations-combination': permutationsCombinationsQ,
    'probability': probabilityQ,
    'odd-man-out-series': oddManOutSeriesQ,
    // Verbal
    'reading-comprehension': readingComprehensionQ,
    'sentence-correction': sentenceCorrectionQ,
    'sentence-completion': sentenceCompletionQ,
    'synonyms-antonyms': synonymsAntonymsQ,
    'cloze-test': clozeTestQ,
    'fill-in-the-blanks': fillInTheBlanksQ,
    'error-spotting': errorSpottingQ,
    'prepositions-conjunctions': prepositionsConjunctionsQ,
    // Reasoning
    'number-series': numberSeriesQ,
    'blood-relations': bloodRelationsQ,
    'coding-decoding': codingDecodingQ,
    'syllogism': syllogismQ,
    'seating-arrangement': seatingArrangementQ,
    'data-sufficiency': dataSufficiencyQ,
    'inferred-meaning': inferredMeaningQ,
    'logical-sequence': logicalSequenceQ,
    'visual-reasoning': visualReasoningQ,
    // Advanced Quantitative
    'probability-advanced': probabilityAdvancedQ,
    'permutations-combinations': permutationsCombinationsQ,
    'permutations-combination': permutationsCombinationsQ,
    'algebra': algebraQ,
    'geometry-trigonometry': geometryTrigonometryQ,
    'mensuration-advanced': mensurationAdvancedQ,
    'elementary-statistics': elementaryStatisticsQ,
    // Advanced Coding
    'array-string-manipulation': arrayStringManipulationQ,
    'pattern-printing-logic': patternPrintingLogicQ,
    'hands-on-coding-questions': handsOnCodingQuestionsQ,
    'complexity-analysis': complexityAnalysisQ,
    'google-dsa-pyqs': googleDsaPyqsQ,
    // CS Fundamentals
    'operating-systems': operatingSystemsQ,
    'computer-networks': computerNetworksQ,
    'dbms-sql': dbmsSqlQ,
    'cs-fundamentals-mcqs': csFundamentalsMcqsQ,
    'cybersecurity-basics': cybersecurityBasicsQ,
    // Programming Theory
    'c-c-basics': cCppBasicsQ,
    'java-oops-concepts': javaOopsConceptsQ,
    'python-fundamentals': pythonFundamentalsQ,
    'data-structures-theory': dataStructuresTheoryQ,
  }
};

// HR topic slugs — these render the discussion-based HR page instead of MCQ
const HR_TOPIC_SLUGS = new Set([
  'tell-me-about-yourself',
  'strengths-weaknesses',
  'why-tcs',
  'situation-based-scenarios',
  'resume-deep-dive',
  'project-discussions',
  'role-awareness',
]);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const shuffleArray = (array, seed = 0) => {
  const shuffled = [...array];
  // Simple deterministic shuffle using a seed (question ID)
  // Converting string seed to a number
  let seedNum = typeof seed === 'string' ? 
    seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 
    seed;

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(((seedNum * (i + 1)) % 100) / 100 * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    seedNum = (seedNum * 9301 + 49297) % 233280; // Simple LCG for variety
  }
  return shuffled;
};

const processQuestion = (q) => {
  if (q.type === 'passage-group') {
    return {
      ...q,
      subQuestions: q.subQuestions.map(subQ => {
        if (!subQ.options) return subQ;
        const correctOpt = subQ.options.find(o => o.id === subQ.answer);
        const shuffled = shuffleArray(subQ.options, subQ.id || subQ.text);
        let newAnswer = subQ.answer;
        const finalOptions = shuffled.map((opt, idx) => {
          const newId = String.fromCharCode(65 + idx);
          if (opt === correctOpt) newAnswer = newId;
          return { ...opt, id: newId };
        });
        return { ...subQ, options: finalOptions, answer: newAnswer };
      })
    };
  } else {
    if (!q.options) return q;
    const correctOpt = q.options.find(o => o.id === q.answer);
    const shuffled = shuffleArray(q.options, q.id || q.text);
    let newAnswer = q.answer;
    const finalOptions = shuffled.map((opt, idx) => {
      const newId = String.fromCharCode(65 + idx);
      if (opt === correctOpt) newAnswer = newId;
      return { ...opt, id: newId };
    });
    return { ...q, options: finalOptions, answer: newAnswer };
  }
};

const CompanyTopicPageInner = () => {
  const router = useRouter();
  const { company, topic } = router.query;
  const { isDark } = useTheme();
  const { data: session } = useSession();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPage, setJumpPage] = useState('');
  const [attempts, setAttempts] = useState({}); 
  const [loading, setLoading] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [hideSync, setHideSync] = useState(false);
  const [openExplanations, setOpenExplanations] = useState({}); 
  const [subIndices, setSubIndices] = useState({}); 
  const questionsPerPage = 5;
  
  const [modalImage, setModalImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Load local progress on mount
  React.useEffect(() => {
    if (company && topic) {
      const storageKey = `progress_company_${company}_${topic}`;
      const localData = localStorage.getItem(storageKey);
      if (localData) {
        setAttempts(JSON.parse(localData));
      }
    }
  }, [topic]);

  // Fetch progress from backend on mount/session change
  React.useEffect(() => {
    const fetchProgress = async () => {
      if (session?.user?.backendId && topic) {
        setLoading(true);
        try {
          const res = await axios.get(`${API_BASE}/api/progress/${session.user.backendId}/${topic}`);
          const backendAttempts = {};
          res.data.forEach(p => {
            backendAttempts[p.questionId] = p.attempts;
          });
          setAttempts(prev => {
            const merged = { ...prev, ...backendAttempts };
            const storageKey = `progress_company_${company}_${topic}`;
            localStorage.setItem(storageKey, JSON.stringify(merged));
            return merged;
          });
        } catch (error) {
          console.error("Failed to fetch progress:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProgress();
  }, [session, topic]);

  const topicModule = useMemo(() => {
    if (!company || !topic) return { questions: [], theory: [] };
    const key = topic.toLowerCase();
    const spacedKey = topic.replace(/-/g, ' ').toLowerCase();
    
    // Check company-specific data first, then aptitude fallback
    let data = companyTopicData[company.toLowerCase()]?.[key] || companyTopicData[company.toLowerCase()]?.[spacedKey];
    
    if (!data) {
       // Fallback to aptitude data if not found in company data
       data = aptitudeData[key] || aptitudeData[spacedKey] || [];
    }

    const baseData = Array.isArray(data) ? { questions: data, theory: [] } : data;
    
    return {
      ...baseData,
      questions: baseData.questions.map(q => processQuestion(q))
    };
  }, [topic]);

  const allQuestions = topicModule.questions;
  const theoryData = topicModule.theory;

  const totalPages = Math.ceil(allQuestions.length / questionsPerPage);
  
  const currentQuestions = useMemo(() => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    return allQuestions.slice(startIndex, startIndex + questionsPerPage);
  }, [allQuestions, currentPage]);

  const topicName = topic ? topic.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Topic';
  const companyName = company ? company.toUpperCase() : 'Company';
  
  const bg = isDark ? 'bg-[#0a0b0d] text-[#e4e4e7]' : 'bg-[#ffffff] text-zinc-900';
  const editorialFont = { fontFamily: '"Plus Jakarta Sans", sans-serif' };

  const flatQuestions = useMemo(() => {
    return allQuestions.reduce((acc, q) => {
      if (q.type === 'passage-group') {
        return [...acc, ...q.subQuestions];
      }
      return [...acc, q];
    }, []);
  }, [allQuestions]);

  const currentFlatQuestions = useMemo(() => {
    return currentQuestions.reduce((acc, q) => {
      if (q.type === 'passage-group') {
        return [...acc, ...q.subQuestions];
      }
      return [...acc, q];
    }, []);
  }, [currentQuestions]);

  if (!router.isReady) return null;

  if (!loading && (!allQuestions || allQuestions.length === 0)) {
    return (
      <div className={`min-h-screen pt-28 ${bg}`}>
        <ComingSoon topicName={topicName} category={company} />
      </div>
    );
  }

  const handleOptionClick = async (qId, optId, correctAnswer) => {
    const currentAttempts = attempts[qId] || [];
    if (currentAttempts.includes(correctAnswer)) return; 

    const newAttempts = [...currentAttempts, optId];
    setAttempts(prev => {
      const updated = { ...prev, [qId]: newAttempts };
      const storageKey = `progress_company_${company}_${topic}`;
      if (company && topic) localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });

    if (optId === correctAnswer) {
      setOpenExplanations(prev => ({ ...prev, [qId]: true }));
    }

    // Save to backend if logged in
    if (session?.user?.backendId && topic) {
      try {
        await axios.post(`${API_BASE}/api/progress`, {
          userId: session.user.backendId,
          questionId: qId,
          topic: topic,
          attempts: newAttempts,
          isSolved: newAttempts.includes(correctAnswer)
        });
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    }
  };

  const toggleExplanation = (qId) => {
    setOpenExplanations(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleResetTopic = () => {
    console.log("Reset button clicked");
    setShowResetModal(true);
  };

  const confirmResetTopic = async () => {
    if (!topic) return;
    
    setIsResetting(true);
    try {
      if (session?.user?.backendId) {
        await axios.delete(`${API_BASE}/api/progress/${session.user.backendId}/${topic}`);
      }
      
      setAttempts({});
      const storageKey = `progress_company_${company}_${topic}`;
      localStorage.removeItem(storageKey);
      
      setShowResetModal(false);
    } catch (error) {
      console.error("Failed to reset progress:", error);
      alert('Error resetting progress. Please try again.');
    } finally {
      setIsResetting(false);
    }
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
                className="w-full h-full flex items-center justify-center p-4 md:p-8 will-change-transform"
              >
                  <RenderMedia
                    src={modalImage}
                    className="max-w-full max-h-full w-full object-contain drop-shadow-[0_0_80px_rgba(0,0,0,0.6)] select-none pointer-events-auto"
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

  const activeTabQuery = router.query.tab !== undefined ? `&tab=${router.query.tab}` : '';
  const companyBackUrl = `/interviews/company/${company}${router.query.tab !== undefined ? `?tab=${router.query.tab}` : ''}`;

  const navItems = [
    { name: 'Quantitative\nProficiency', img: 'https://img.icons8.com/3d-fluency/94/calculator.png', href: `/interviews/company/${company}?section=numerical${activeTabQuery}`, color: 'bg-[#2563eb]' },
    { name: 'Data\nInterpretation', img: 'https://img.icons8.com/3d-fluency/94/line-chart.png', href: `/interviews/company/${company}?section=numerical${activeTabQuery}`, color: 'bg-[#10b981]' },
    { name: 'Verbal\nAbility', img: 'https://img.icons8.com/3d-fluency/94/brick.png', href: `/interviews/company/${company}?section=verbal${activeTabQuery}`, color: 'bg-[#7c3aed]' },
    { name: 'Logical\nReasoning', img: 'https://img.icons8.com/3d-fluency/94/brain-3--v1.png', href: `/interviews/company/${company}?section=reasoning${activeTabQuery}`, color: 'bg-[#f59e0b]' }
  ];


  const solvedCount = flatQuestions.filter(q => {
    const qAttempts = attempts[q.id] || [];
    return qAttempts.includes(q.answer);
  }).length;

  const masteryPercentage = flatQuestions.length > 0 ? Math.round((solvedCount / flatQuestions.length) * 100) : 0;


  const pageSolvedCount = currentFlatQuestions.filter(q => {
    const qAttempts = attempts[q.id] || [];
    return qAttempts.includes(q.answer);
  }).length;

  const isPageMastered = pageSolvedCount === currentFlatQuestions.length && currentFlatQuestions.length > 0;

  const RenderMedia = ({ src, className = "" }) => {
    if (!src) return null;
    const s = typeof src === 'string' ? src.trim() : "";
    
    if (s.startsWith('<svg')) {
      return (
        <div 
          className={className} 
          dangerouslySetInnerHTML={{ __html: src }} 
        />
      );
    }
    
    if (s.startsWith('/') || s.startsWith('http')) {
      return <img src={src} className={`${className} max-w-full h-auto block`} alt="" />;
    }
    
    return (
      <div className={`flex items-center justify-center p-6 text-sm italic text-gray-400 dark:text-gray-500 bg-gray-50/50 dark:bg-white/5 border border-dashed border-gray-200 dark:border-white/10 rounded-xl ${className}`}>
        {src}
      </div>
    );
  };

  const formatText = (text) => {
    if (!text) return null;
    
    // Keywords for code-editor style highlighting
    const keywordStyles = {
      // Types & Objects
      "HashMap": "text-[#f472b6] dark:text-[#f472b6] font-black", // Pink
      "Map": "text-[#f472b6] dark:text-[#f472b6] font-black",
      "Set": "text-[#fbbf24] dark:text-[#fbbf24] font-black", // Amber
      "Array": "text-[#38bdf8] dark:text-[#38bdf8] font-black", // Sky blue
      "String": "text-[#2dd4bf] dark:text-[#2dd4bf] font-black", // Teal
      "Integer": "text-[#f87171] dark:text-[#f87171] font-black", // Red
      
      // Complexity
      "O(n)": "text-[#a78bfa] dark:text-[#a78bfa] font-black font-mono", // Purple
      "O(1)": "text-[#a78bfa] dark:text-[#a78bfa] font-black font-mono",
      "O(log n)": "text-[#a78bfa] dark:text-[#a78bfa] font-black font-mono",
      "O(n^2)": "text-[#a78bfa] dark:text-[#a78bfa] font-black font-mono",
      "Time Complexity": "text-[#94a3b8] dark:text-[#94a3b8] text-[11px] font-black uppercase tracking-widest",
      "Space Complexity": "text-[#94a3b8] dark:text-[#94a3b8] text-[11px] font-black uppercase tracking-widest",
      
      // Logic Concepts
      "prefix sum": "text-[#fb923c] dark:text-[#fb923c] font-black italic underline decoration-orange-500/30", // Orange
      "cumulative sum": "text-[#fb923c] dark:text-[#fb923c] font-black italic",
      "two pointers": "text-[#4ade80] dark:text-[#4ade80] font-black italic", // Green
      "sliding window": "text-[#4ade80] dark:text-[#4ade80] font-black italic",
      "dynamic programming": "text-indigo-400 font-black",
      
      // Code keywords
      "`currentSum`": "text-[#818cf8] dark:text-[#818cf0] font-mono bg-white/5 px-1 rounded",
      "`currentSum - k`": "text-[#818cf8] dark:text-[#818cf0] font-mono bg-white/5 px-1 rounded",
      "`k`": "text-[#f471b6] font-mono",
    };

    // First split by bold marks
    const boldParts = text.split(/(\*\*.*?\*\*)/g);
    
    return boldParts.map((boldPart, i) => {
      if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
        return (
          <strong key={`bold-${i}`} className="font-extrabold text-[#7c3aed] dark:text-[#a78bfa] bg-[#7c3aed]/5 dark:bg-[#a78bfa]/10 px-1 rounded">
            {boldPart.slice(2, -2)}
          </strong>
        );
      }

      // If not bold, check for keywords
      let currentPart = [boldPart];
      Object.keys(keywordStyles).forEach(kw => {
        const newSegments = [];
        currentPart.forEach(segment => {
          if (typeof segment !== 'string') {
            newSegments.push(segment);
            return;
          }
          
          const regex = new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
          const splits = segment.split(regex);
          
          splits.forEach((s, idx) => {
            if (s === kw) {
              newSegments.push(<span key={kw + idx} className={keywordStyles[kw]}>{s}</span>);
            } else if (s) {
              newSegments.push(s);
            }
          });
        });
        currentPart = newSegments;
      });

      return <React.Fragment key={i}>{currentPart}</React.Fragment>;
    });
  };

  const MarkdownTable = ({ content }) => {
    const rows = content.trim().split('\n');
    
    const parseRow = (row) => {
      let cells = row.trim().split('|');
      if (cells[0] === '') cells.shift();
      if (cells[cells.length - 1] === '') cells.pop();
      return cells.map(c => c.trim().replace(/\*\*/g, ''));
    };

    const headerRow = parseRow(rows[0]);
    const dataRows = rows.slice(2).map(row => parseRow(row));
    
    // SVG Dimensions & Styling Constants
    const cellWidth = 140;
    const headerHeight = 50;
    const rowHeight = 45;
    const padding = 20;
    const totalWidth = headerRow.length * cellWidth + (padding * 2);
    const totalHeight = (dataRows.length + 1) * rowHeight + headerHeight + (padding * 2);

    return (
      <div className="my-8 group relative overflow-hidden border border-gray-100 dark:border-white/5 bg-white dark:bg-[#0f1115] transition-all cursor-zoom-in">
        <div className="overflow-x-auto scrollbar-hide">
          <svg 
            width={totalWidth} 
            height={totalHeight} 
            viewBox={`0 0 ${totalWidth} ${totalHeight}`}
            className="w-full h-auto min-w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <rect width={totalWidth} height={totalHeight} fill="none" />
            
            {/* Table Container */}
            <g transform={`translate(${padding}, ${padding})`}>
              {/* Header Mask/Background - Solid Green Color */}
              <rect 
                width={totalWidth - (padding * 2)} 
                height={headerHeight} 
                fill={isDark ? "#065f46" : "#059669"} 
              />
              
              {/* Header Text */}
              {headerRow.map((cell, i) => (
                <text 
                  key={i}
                  x={i * cellWidth + cellWidth / 2} 
                  y={headerHeight / 2} 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  fill="white"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  {cell}
                </text>
              ))}

              {/* Data Rows */}
              {dataRows.map((row, rowIndex) => (
                <g key={rowIndex} transform={`translate(0, ${headerHeight + rowIndex * rowHeight})`}>
                  {/* Row background with alternating color - Sharp Corners */}
                  <rect 
                    width={totalWidth - (padding * 2)} 
                    height={rowHeight} 
                    fill={isDark ? (rowIndex % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent') : (rowIndex % 2 === 0 ? '#f8fafc' : 'white')} 
                    stroke={isDark ? "rgba(255,255,255,0.05)" : "#f1f5f9"}
                    strokeWidth="0.5"
                  />
                  
                  {row.map((cell, cellIndex) => (
                    <text 
                      key={cellIndex}
                      x={cellIndex * cellWidth + cellWidth / 2} 
                      y={rowHeight / 2} 
                      textAnchor="middle" 
                      dominantBaseline="middle"
                      fill={isDark ? (cellIndex === 0 ? '#34d399' : '#e2e8f0') : (cellIndex === 0 ? '#059669' : '#334155')}
                      style={{ 
                        fontFamily: 'Outfit, sans-serif', 
                        fontWeight: cellIndex === 0 ? 800 : 700, 
                        fontSize: '13px'
                      }}
                    >
                      {cell}
                    </text>
                  ))}
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
    );
  };

  const MarkdownContent = ({ content }) => {
    if (!content) return null;
    
    // Check if content contains a table block
    if (content.includes('|---') || content.includes('| :---')) {
      // Improved regex to capture a whole table block (Header + Separator + Rows)
      const parts = content.split(/(\n?\|(?:(?!\n\|).)*\|\n\|(?:\s*[:-]+\s*\|)+\n(?:\|(?:(?!\n\|).)*\|(?:\n|$))+)/g);
      
      return (
        <div className="space-y-4">
          {parts.map((part, i) => {
            if (part.trim().startsWith('|') && (part.includes('|---') || part.includes('| :---'))) {
              return <MarkdownTable key={i} content={part} />;
            }
            if (!part.trim()) return null;
            return (
              <p key={i} className="text-[16px] leading-relaxed font-medium text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {formatText(part)}
              </p>
            );
          })}
        </div>
      );
    }

    return (
      <p className="text-[16px] leading-relaxed font-medium text-gray-800 dark:text-gray-200 whitespace-pre-line">
        {formatText(content)}
      </p>
    );
  };

  return (
    <div className={`min-h-screen pt-28 pb-8 ${bg}`} style={editorialFont}>
      {/* Professional Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[400px] bg-white dark:bg-[#121212] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mb-6">
                  <RotateCcw size={32} className="text-rose-500" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[24px] font-black text-gray-900 dark:text-white mb-3 tracking-tight">Reset Progress?</h3>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                  This will permanently clear your solved status for all questions in <span className="text-rose-500 font-bold uppercase tracking-wider text-[12px]">{topicName}</span>. This action cannot be undone.
                </p>
                
                <div className="flex flex-col w-full gap-3">
                  <button 
                    onClick={confirmResetTopic}
                    disabled={isResetting}
                    className="h-14 w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white rounded-2xl font-black text-[15px] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    {isResetting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Confirm Reset"
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
      <Head>
        <title>{topicName} | {companyName} | Career Platform</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className={`max-w-6xl mx-auto px-4 md:px-8`} style={{ fontFamily: '"Outfit", sans-serif' }}>
        
        {/* Editorial Navigation Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-5 border-b border-gray-100 dark:border-gray-800">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black dark:text-white/40 mb-1">
              <Link href="/interviews/company" className="hover:text-blue-600 transition-colors">COMPANIES</Link>
              <span className="opacity-30">/</span>
              <Link href={companyBackUrl} className="hover:text-blue-600 transition-colors">{companyName}</Link>
              <span className="opacity-30">/</span>
              <span>{topicName}</span>
            </nav>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white">
              {topicName} <span className="text-black/20 dark:text-white/20 font-normal">Practice Exercise</span>
            </h1>
          </div>
        </div>

        {/* Clean Professional Google Sync Prompt */}
        {!session && !hideSync && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:bottom-10 md:right-10 z-[100]"
          >
            <ElectricBorder
              color="#FFC107"
              speed={1}
              chaos={0.08}
              borderRadius={24}
            >
              <div className="w-full md:w-[340px] bg-white dark:bg-[#121212] rounded-2xl overflow-hidden shadow-2xl md:shadow-none">
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Cloud Synchronization</span>
                  <button 
                    onClick={() => setHideSync(true)}
                    className="w-6 h-6 rounded flex items-center justify-center text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    aria-label="Close"
                  >
                    <X size={14} strokeWidth={3} />
                  </button>
                </div>

                <div className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6">
                    <img 
                      src="https://img.icons8.com/isometric/100/cloud-sync.png" 
                      className="w-20 h-20" 
                      alt="Sync" 
                    />
                  </div>
                  
                  <h3 className="text-[22px] font-black text-gray-900 dark:text-white leading-tight mb-2">Save your progress</h3>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                    Sign in with Google to automatically back up your solved questions across all your devices.
                  </p>
                  
                  <button 
                    onClick={() => signIn('google')}
                    className="w-full h-12 bg-[#4285f4] hover:bg-[#3367d6] text-white rounded-lg font-bold text-[14px] transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-4 h-4" alt="Google" />
                    </div>
                    Continue with Google
                  </button>
                </div>
              </div>
            </ElectricBorder>
          </motion.div>
        )}

        {(session || Object.keys(attempts).length > 0) && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden mb-10 p-5 rounded-3xl border flex flex-col sm:flex-row items-center sm:justify-between gap-6 transition-colors duration-500"
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background: isDark 
                ? 'linear-gradient(145deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.02) 100%)' 
                : 'linear-gradient(145deg, #f0fdf4 0%, #ffffff 100%)',
              borderColor: isDark ? 'rgba(16, 185, 129, 0.2)' : '#d1fae5'
            }}
          >
            {/* Moving Grid Background Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.15]">
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes grid-move {
                  0% { transform: translate(0, 0); }
                  100% { transform: translate(30px, 30px); }
                }
                .grid-pattern {
                  background-image: 
                    linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
                  background-size: 30px 30px;
                  width: calc(100% + 30px);
                  height: calc(100% + 30px);
                  animation: grid-move 3s linear infinite;
                }
              ` }} />
              <div className="grid-pattern" />
            </div>

            <div className="relative z-10 flex items-center gap-5 w-full sm:w-auto">
              <div className="flex-shrink-0">
                <img src={session ? "https://img.icons8.com/isometric/100/checked-checkbox.png" : "https://img.icons8.com/isometric/100/time-machine.png"} className="w-10 h-10 drop-shadow-sm" alt="Stats" />
              </div>
              <div>
                <p className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] mb-1 keep-color text-emerald-800 dark:text-emerald-400">
                  {session ? "Cloud Backup Enabled" : "Local Progress Tracking"}
                </p>
                <p 
                  className="text-[16px] font-extrabold tracking-tight drop-shadow-sm" 
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500">
                    {session ? "Continuity active for" : "Mastery progress for"}
                  </span>{' '}
                  <span className="text-gray-900 dark:text-white underline decoration-rose-500/40 decoration-[3px] underline-offset-4">
                    {session ? session.user.name : "This Browser"}
                  </span>
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 select-none">
                  <img src={session ? "https://img.icons8.com/color/48/verified-account--v1.png" : "https://img.icons8.com/color/48/clock--v1.png"} className="w-4 h-4" alt="Status" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-900 dark:text-white font-mono">
                    {session ? "Real-time Sync" : "Saved Locally"}
                  </span>
                </div>
              </div>

              <motion.button 
                onClick={handleResetTopic}
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-10 pl-5 pr-1 rounded-full flex items-center gap-2.5 border-none group shadow-md"
                style={{ 
                  backgroundColor: '#FFC107',
                }}
              >
                <span className="text-[11px] font-black text-black tracking-[0.12em] uppercase">Reset Your Progress</span>
                
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:rotate-180 duration-500">
                  <RotateCcw size={15} strokeWidth={3} color="#000000" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}

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
                    backgroundImage: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Theory & Concepts
                </h2>
                <p className="text-[10px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest opacity-70">
                  Quick Theory Reference
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {theoryData.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Decorative Number Overlay */}
                  <div className="flex items-center gap-3 mb-6">
                    <span 
                      className="text-[11px] font-black transition-all duration-500 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-purple-600 shadow-lg shadow-purple-500/20 keep-color"
                      style={{ color: '#ffffff' }}
                    >
                      0{idx + 1}
                    </span>
                    <div className="h-px flex-1 bg-zinc-100 dark:bg-white/5" />
                  </div>

                  {item.image && (
                    <div 
                      className="group/img relative aspect-[16/10] w-full rounded-2xl bg-zinc-50 dark:bg-white/5 mb-8 overflow-hidden flex items-center justify-center p-4 sm:p-8 cursor-zoom-in border border-zinc-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                      onClick={() => {
                        setModalImage(item.image);
                        setZoomLevel(1);
                      }}
                    >
                      <RenderMedia 
                        src={item.image} 
                        className="w-full h-full max-h-[300px] object-contain drop-shadow-2xl transition-transform duration-700 group-hover/img:scale-105" 
                      />
                      <div className="absolute inset-0 bg-purple-600/0 group-hover/img:bg-purple-600/[0.02] flex items-center justify-center transition-all">
                        <Maximize2 size={24} className="text-purple-600 opacity-0 group-hover/img:opacity-100 transition-all scale-75 group-hover/img:scale-100" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h3 className="text-[18px] font-[900] text-zinc-900 dark:text-white uppercase tracking-tighter leading-none">
                      {item.title}
                    </h3>
                    
                    {item.formulas ? (
                      <div className="grid grid-cols-1 gap-4 pt-2">
                        {item.formulas.map((f, fIdx) => (
                          <div key={fIdx} className="flex flex-col border-l-2 border-zinc-100 dark:border-white/10 pl-4 py-1">
                            <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">{f.label}</span>
                            <span 
                              className="text-[15px] font-[800] tabular-nums keep-color"
                              style={{ color: '#8b5cf6' }}
                            >
                              {f.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (item.description || item.content) && (
                      <div className="text-[14.5px] font-medium leading-[1.6]">
                        <MarkdownContent content={item.description || item.content} />
                      </div>
                    )}
                  </div>
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
                const isSolved = q.type === 'descriptive' 
                  ? qAttempts.includes('SOLVED')
                  : qAttempts.includes(q.answer);

                return (
                  <React.Fragment key={q.id}>
                    <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 100 } }
                    }}
                    className="pb-6 mb-6 border-b border-gray-100 dark:border-gray-800 last:border-0 last:mb-0"
                  >
                    {q.type === 'passage-group' ? (
                      <div className="space-y-6">
                        {/* Common Passage / Stimulus */}
                        <div className="bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 rounded-2xl p-6 mb-8">
                           <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                              <Info size={12} /> Common Information
                           </div>
                           <MarkdownContent content={q.passage} />
                           {q.image && (
                             <div 
                               className="group/img relative w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 p-6 mt-6 transition-all cursor-zoom-in flex justify-center shadow-sm hover:shadow-md"
                               onClick={() => {
                                 setModalImage(q.image);
                                 setZoomLevel(1);
                               }}
                             >
                               <RenderMedia src={q.image} className="w-full max-w-full sm:max-w-[600px] h-auto object-contain transition-transform duration-500 group-hover/img:scale-105" />
                               <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 flex items-center justify-center transition-all">
                                 <Maximize2 size={24} className="text-gray-400 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                               </div>
                             </div>
                           )}
                        </div>

                        {/* Sub-question Carousel UI */}
                        {(() => {
                           const subIdx = subIndices[q.id] || 0;
                           const currentSub = q.subQuestions[subIdx];
                           const subAttempts = attempts[currentSub.id] || [];
                           const isSubSolved = subAttempts.includes(currentSub.answer);
                           const isLastSub = subIdx === q.subQuestions.length - 1;

                           return (
                             <div className="space-y-6">
                               <div className="flex items-center justify-between mb-4">
                                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
                                     Sub-Question {subIdx + 1} of {q.subQuestions.length}
                                  </h4>
                                  <div className="flex gap-2">
                                     {q.subQuestions.map((_, i) => (
                                       <button 
                                         key={i}
                                         onClick={() => setSubIndices(prev => ({ ...prev, [q.id]: i }))}
                                         className={`w-2 h-2 rounded-full transition-all ${subIdx === i ? 'w-6 bg-blue-600' : 'bg-gray-200 dark:bg-white/20'}`}
                                       />
                                     ))}
                                  </div>
                               </div>

                               <div className="text-[16px] font-medium text-gray-800 dark:text-gray-200 leading-relaxed pl-8 border-l-4 border-blue-500/20">
                                  <MarkdownContent content={currentSub.text} />
                               </div>

                               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1.5 mb-5 pl-8">
                                 {currentSub.options.map((opt) => {
                                   const hasAttempted = subAttempts.includes(opt.id);
                                   const isCorrect = opt.id === currentSub.answer;
                                   
                                   let dotColor = "border-gray-200 dark:border-gray-700 text-black/60 dark:text-white/60 bg-white dark:bg-transparent";
                                   if (hasAttempted) {
                                     dotColor = isCorrect ? "border-emerald-500 bg-emerald-500 text-white" : "border-rose-500 bg-rose-500 text-white";
                                   }

                                   return (
                                     <button
                                       key={opt.id}
                                       disabled={isSubSolved && !hasAttempted}
                                       onClick={() => handleOptionClick(currentSub.id, opt.id, currentSub.answer)}
                                       className={`flex items-center gap-3 py-1.5 group transition-all text-left ${isSubSolved && !hasAttempted ? "opacity-30 cursor-default" : "cursor-pointer"}`}
                                     >
                                       <div className={`w-8 h-8 shrink-0 rounded-full border-2 flex items-center justify-center text-[13.5px] font-black transition-colors ${dotColor}`}>
                                          {opt.id}
                                       </div>
                                       <span 
                                         className="text-[16px] font-medium leading-snug transition-all underline-offset-4 group-hover:underline"
                                         style={{ color: hasAttempted ? (isCorrect ? '#059669' : '#dc2626') : (isDark ? '#94a3b8' : '#000000') }}
                                       >
                                         {opt.text}
                                       </span>
                                     </button>
                                   );
                                 })}
                               </div>

                               <div className="flex items-center justify-between pl-8">
                                  <div className="flex items-center gap-4">
                                     <button 
                                       onClick={() => toggleExplanation(currentSub.id)}
                                       className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider font-sans flex items-center gap-2 transition-all ${openExplanations[currentSub.id] ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"}`}
                                     >
                                        <Lightbulb size={12} /> {openExplanations[currentSub.id] ? "Hide Solution" : "View Solution"}
                                     </button>
                                     
                                     {isSubSolved && !isLastSub && (
                                       <button 
                                         onClick={() => setSubIndices(prev => ({ ...prev, [q.id]: subIdx + 1 }))}
                                         className="px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider font-sans bg-blue-600 text-white flex items-center gap-2 animate-bounce"
                                       >
                                         Next Sub-Question <ChevronRight size={12} />
                                       </button>
                                     )}
                                  </div>
                                  
                                  {isSubSolved && (
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#fef9c3] dark:bg-yellow-500/20 border-2 border-yellow-300 rounded-lg">
                                       <Check size={10} className="text-black stroke-[4]" />
                                       <span className="text-[10px] font-black uppercase tracking-widest">Solved</span>
                                    </div>
                                  )}
                               </div>

                               <AnimatePresence>
                                 {openExplanations[currentSub.id] && (
                                   <motion.div 
                                     initial={{ opacity: 0, height: 0 }}
                                     animate={{ opacity: 1, height: 'auto' }}
                                     exit={{ opacity: 0, height: 0 }}
                                     className="mt-4 pl-8 overflow-hidden"
                                   >
                                     <div className="p-5 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 rounded-xl">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">Explanation</h4>
                                        <p className="text-[16px] font-medium text-gray-700 dark:text-gray-300 leading-relaxed">{currentSub.explanation}</p>
                                     </div>
                                   </motion.div>
                                 )}
                               </AnimatePresence>
                             </div>
                           );
                        })()}
                      </div>
                    ) : q.type === 'descriptive' ? (
                      <div className="space-y-6">
                        <div className="flex items-start gap-4 mb-4">
                           <span className="text-[18px] font-black text-gray-400 mt-1">{qNum}.</span>
                           <div className="flex flex-col gap-5 w-full">
                              <div className="text-[18px] font-bold text-gray-900 dark:text-gray-100 leading-tight">
                                <MarkdownContent content={q.text} />
                              </div>
                              
                              {q.image && (
                                <div 
                                  className="group/img relative w-full max-w-full sm:max-w-[400px] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 bg-zinc-50 dark:bg-white/5 p-4 transition-all cursor-zoom-in"
                                  onClick={() => {
                                    setModalImage(q.image);
                                    setZoomLevel(1);
                                  }}
                                >
                                  <RenderMedia src={q.image} className="w-full h-auto object-contain transition-transform duration-500 group-hover/img:scale-105" />
                                </div>
                              )}

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {q.sampleInput && (
                                  <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-100 dark:border-zinc-800">
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Sample Input</h5>
                                    <pre className="text-[13px] font-mono text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">{q.sampleInput}</pre>
                                  </div>
                                )}
                                {q.sampleOutput && (
                                  <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-100 dark:border-zinc-800">
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Sample Output</h5>
                                    <pre className="text-[13px] font-mono text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">{q.sampleOutput}</pre>
                                  </div>
                                )}
                              </div>

                              {q.constraints && (
                                <div className="flex flex-wrap gap-2">
                                  {Array.isArray(q.constraints) ? q.constraints.map((c, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-zinc-100 dark:bg-white/5 rounded-md text-[11px] font-bold text-zinc-500 uppercase tracking-tighter">
                                      {c}
                                    </span>
                                  )) : (
                                    <span className="text-[12px] text-zinc-500">Constraints: {q.constraints}</span>
                                  )}
                                </div>
                              )}

                              <div className="flex items-center justify-between mt-2 pt-4 border-t border-zinc-50 dark:border-white/5">
                                <div className="flex items-center gap-4">
                                  <button 
                                      onClick={() => toggleExplanation(q.id)}
                                      className={`px-5 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all ${openExplanations[q.id] ? "bg-zinc-900 text-white shadow-md" : "bg-amber-500 text-white hover:bg-amber-600 shadow-md"}`}
                                    >
                                      <Code size={16} /> {openExplanations[q.id] ? "Hide Solution" : "View Approach & Code"}
                                    </button>
                                  
                                  {!isSolved && (
                                    <button 
                                      onClick={() => handleOptionClick(q.id, 'SOLVED', 'SOLVED')}
                                      className="px-5 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100 transition-all font-sans"
                                    >
                                      Mark as Solved
                                    </button>
                                  )}
                                </div>

                                  {isSolved && (
                                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl shadow-md">
                                      <Check size={14} strokeWidth={4} />
                                    <span className="text-[11px] font-black uppercase tracking-widest">Mastered</span>
                                  </div>
                                )}
                              </div>

                              <AnimatePresence>
                                {openExplanations[q.id] && (
                                  <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-8 bg-[#0c0d0e] rounded-xl border border-white/10 shadow-lg relative overflow-hidden group/box force-white">
                                      {/* Subtle decorative accent */}
                                      <div className="absolute top-0 right-0 w-1 h-32 bg-amber-500/20" />
                                      
                                      <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-500 mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                          <Lightbulb size={14} /> 
                                        </div>
                                        Optimal Logic & Implementation
                                      </h4>
                                      <div className="space-y-6 relative z-10">
                                        <div className="text-[16px] leading-[1.7] text-white/80 font-medium">
                                          <MarkdownContent content={q.explanation} />
                                        </div>
                                        {q.code && (
                                          <div className="relative group">
                                            <pre className="relative p-5 bg-black rounded-xl text-[13px] font-mono text-emerald-400 overflow-x-auto border border-white/5 shadow-inner">
                                              <code>{q.code}</code>
                                            </pre>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                           </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="mb-4">
                          <div className="text-[16px] font-medium text-gray-800 dark:text-gray-200 leading-relaxed flex items-start">
                            <span className="mr-3">{qNum}.</span>
                            <div className="flex flex-col gap-4 w-full">
                              <MarkdownContent content={q.text} />
                              {q.image && (
                                <div 
                                  className="group/img relative w-full max-w-full sm:max-w-[280px] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 bg-zinc-50 dark:bg-white/5 p-6 md:p-8 self-start md:self-center transition-all cursor-zoom-in"
                                  onClick={() => {
                                    setModalImage(q.image);
                                    setZoomLevel(1);
                                  }}
                                >
                                  <RenderMedia src={q.image} className="w-full h-auto object-contain dark:invert-[0.1] transition-transform duration-500 group-hover/img:scale-105" />
                                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 flex items-center justify-center transition-all">
                                    <Maximize2 size={24} className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
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
                                textColor = "text-emerald-500 font-semibold";
                              } else {
                                dotColor = "border-rose-500 bg-rose-500 text-white";
                                textColor = "text-rose-500 font-semibold";
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
                                  className={`w-8 h-8 shrink-0 rounded-full border-2 flex items-center justify-center text-[13.5px] font-bold transition-colors ${dotColor}`}
                                >
                                  {opt.id}
                                </motion.div>
                                <div className="flex flex-col gap-2 flex-1">
                                  <span 
                                    className="text-[16px] font-medium leading-snug transition-all decoration-1 underline-offset-4 group-hover:underline"
                                    style={{ 
                                      color: hasAttempted 
                                        ? (isCorrect ? '#059669' : '#dc2626') 
                                        : (isDark ? '#94a3b8' : '#000000') 
                                    }}
                                  >
                                    {opt.text}
                                  </span>
                                  {opt.image && (
                                    <div className="w-full max-w-[120px] rounded-lg overflow-hidden bg-gray-50 dark:bg-white/10 p-2 border border-black/5">
                                      <RenderMedia src={opt.image} className="w-full h-auto object-contain" />
                                    </div>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Compact Footer Actions */}
                        <div className="flex items-center justify-between pl-8">
                          <div className="flex items-center gap-4">
                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => toggleExplanation(q.id)}
                              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider font-sans flex items-center gap-2 transition-all border border-transparent ${openExplanations[q.id] ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 shadow-sm"}`}
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
                                <div className="text-[16px] leading-relaxed font-medium text-black dark:text-gray-200 whitespace-pre-line mb-4">
                                  {formatText(q.explanation)}
                                </div>
                                {q.explanationImage && (
                                  <div 
                                    className="group/img relative w-full max-w-[400px] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 p-4 transition-all cursor-zoom-in"
                                    onClick={() => {
                                      setModalImage(q.explanationImage);
                                      setZoomLevel(1);
                                    }}
                                  >
                                    <RenderMedia 
                                      src={q.explanationImage} 
                                      className="w-full h-auto object-contain transition-transform duration-500 group-hover/img:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 flex items-center justify-center transition-all">
                                      <Maximize2 size={24} className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
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
                <div className="force-white keep-color !text-white px-6 sm:px-10 h-11 flex items-center bg-[#1a1a1a] rounded-full border border-white/20 shadow-lg w-full sm:w-auto justify-center" style={{ color: '#ffffff' }}>
                  <span className="force-white keep-color !text-white text-[18px] sm:text-[20px] font-bold font-sans" style={{ color: '#ffffff' }}>{currentPage}</span>
                  <span className="mx-4 sm:mx-6 force-white keep-color !text-white font-semibold font-sans text-[12px] sm:text-[13px] uppercase tracking-wider" style={{ color: '#ffffff' }}>OF</span>
                  <span className="force-white keep-color !text-white text-[18px] sm:text-[20px] font-bold font-sans" style={{ color: '#ffffff' }}>{totalPages}</span>
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
                    { name: 'Numerical\nAbility', img: 'https://img.icons8.com/3d-fluency/94/calculator.png', href: `/interviews/company/${company}?section=numerical`, active: true, color: 'bg-[#2563eb]' },
                    { name: 'Verbal\nAbility', img: 'https://img.icons8.com/3d-fluency/94/brick.png', href: `/interviews/company/${company}?section=verbal`, active: false, color: 'bg-[#7c3aed]' },
                    { name: 'Reasoning\nAbility', img: 'https://img.icons8.com/3d-fluency/94/brain-3--v1.png', href: `/interviews/company/${company}?section=reasoning`, active: false, color: 'bg-[#f59e0b]' },
                    { name: 'Coding\nRound', img: 'https://img.icons8.com/3d-fluency/94/code.png', href: `/interviews/company/${company}?section=coding`, active: false, color: 'bg-[#10b981]' }
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
                        const pageFlatQuestions = pageQuestions.reduce((acc, q) => {
                          if (q.type === 'passage-group') {
                            return [...acc, ...q.subQuestions];
                          }
                          return [...acc, q];
                        }, []);
                        const isThisPageMastered = pageFlatQuestions.length > 0 && 
                                                 pageFlatQuestions.every(q => (attempts[q.id] || []).includes(q.answer));
                        
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
                             {pageSolvedCount} / {currentFlatQuestions.length} <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Correct</span>
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
                             animate={{ width: `${(pageSolvedCount / currentFlatQuestions.length) * 100}%` }}
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
                                 {Math.round((pageSolvedCount / currentFlatQuestions.length) * 100)}%
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
          <Link href={`/interviews/company/${company}`} className="group flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-blue-600 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.1)]">
               <ArrowLeft size={24} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold tracking-tight">
              <span className="text-black dark:text-white keep-color">Back to </span>
              <span className="text-blue-600 dark:text-blue-400 keep-color">
                {companyName} Catalog
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

// Wrapper that decides which page to render
const CompanyTopicPage = () => {
  const router = useRouter();
  const { topic } = router.query;

  // If this is an HR topic, render the IndiaBix-style discussion page
  if (topic && HR_TOPIC_SLUGS.has(topic.toLowerCase())) {
    return <HRTopicPage />;
  }

  return <CompanyTopicPageInner />;
};

export default CompanyTopicPage;
