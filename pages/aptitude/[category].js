import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Search, ArrowLeft, ArrowRight, BookOpen, Clock, 
  Hash, LayoutGrid, Calculator, Brain, Languages, PieChart, Shapes, CircleHelp, Wand2,
  Command, RotateCcw
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { topicData } from '../../data/aptitude';

const aptitudeCatalog = {
  'quantitative': {
    title: 'Quantitative Aptitude',
    subtitle: 'Numerical Ability',
    description: 'Master mathematical concepts, arithmetic, and problem-solving techniques for all competitive exams.',
    icon: "https://img.icons8.com/3d-fluency/96/calculator.png",
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    topics: [
      "Number System", "H.C.F. & L.C.M. of Numbers", "Decimal Fractions", "Simplification",
      "Square Roots & Cube Roots", "Permutations and Combination",
      "Problems on Trains", "Numbers and Ages",
      "Percentage problems", "Boats and Streams", "Ratio & Proportion", "Pipes and Cistern",
      "Surds and Indices", "Averages", "Simple Interest and Compound Interest", "Heights and Distances",
      "Profit and Loss", "Discount", "Partnership", "Mixture and Alligation",
      "Time and Distance", "Time & Work", "Volume & Surface Areas",
      "Clocks and Calendar", "Stocks & Shares", "Probability",
      "Odd Man Out & Series"
    ],
    symbols: [
      "https://img.icons8.com/3d-fluency/94/pi.png",
      "https://img.icons8.com/3d-fluency/94/ruler.png"
    ]
  },
  'logical': {
    title: 'Logical Reasoning',
    subtitle: 'Analytical Thinking',
    description: 'Develop logical deduction, pattern recognition, and critical thinking skills required for technical rounds.',
    icon: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png",
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    topics: [
      "Number Series", "Letter and Symbol Series", "Verbal Classification", "Essential Part",
      "Analogies", "Artificial Language", "Matching Definitions", "Making Judgments",
      "Verbal Reasoning", "Logical Problems", "Logical Games", "Analyzing Arguments",
      "Statement and Assumption", "Course of Action", "Statement and Conclusion"
    ],
    symbols: [
      "https://img.icons8.com/3d-fluency/94/brain.png",
      "https://img.icons8.com/3d-fluency/94/idea.png"
    ]
  },
  'verbal': {
    title: 'Verbal Ability',
    subtitle: 'Language Excellence',
    description: 'Enhance your English proficiency with grammar, vocabulary, and reading comprehension practice.',
    icon: "https://img.icons8.com/3d-fluency/94/brick.png",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    topics: [
      "Spotting Errors", "Synonyms", "Antonyms", "Selecting Words", "Spellings",
      "Sentence Formation", "Ordering of Words", "Sentence Correction", "Sentence Improvement",
      "Sentence Completion", "Ordering of Statements", "Paragraph Formation", "Cloze Test",
      "Comprehension", "One Word Substitution", "Idioms and Phrases", "Change of Voice",
      "Change of Speech", "Verbal Analogies"
    ],
    symbols: [
      "https://img.icons8.com/3d-fluency/94/alphabet.png",
      "https://img.icons8.com/3d-fluency/94/book.png"
    ]
  },
  'di': {
    title: 'Data Interpretation',
    subtitle: 'Data Analysis',
    description: 'Learn to analyze complex charts, tables, and graphs to extract meaningful business insights.',
    icon: "https://img.icons8.com/3d-fluency/94/line-chart.png",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    topics: [
      "Tabulation", "Bar Graphs", "Pie Charts", "Line Graphs"
    ],
    symbols: [
      "https://img.icons8.com/3d-fluency/94/line-chart.png",
      "https://img.icons8.com/3d-fluency/94/pie-chart.png"
    ]
  },
  'non-verbal': {
    title: 'Non-Verbal Reasoning',
    subtitle: 'Spatial Logic',
    description: 'Practice visual reasoning and spatial orientation through shapes, images, and pattern logic.',
    icon: "https://img.icons8.com/3d-fluency/94/rubiks-cube.png",
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    topics: [
      "Series", "Analogy", "Classification", "Analytical Reasoning", "Mirror Images",
      "Water Images", "Embedded Images", "Pattern Completion", "Figure Matrix",
      "Paper Folding", "Paper Cutting", "Rule Detection", "Grouping of Images",
      "Dot Situation", "Shape Construction", "Image Analysis", "Cubes and Dice"
    ],
    symbols: [
      "https://img.icons8.com/3d-fluency/94/rubiks-cube.png",
      "https://img.icons8.com/3d-fluency/94/geometric-shapes.png"
    ]
  }
};

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [progressData, setProgressData] = useState({});
  const [showResetModal, setShowResetModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const data = useMemo(() => aptitudeCatalog[category] || aptitudeCatalog['quantitative'], [category]);

  React.useEffect(() => {
    if (!data || !data.topics) return;
    
    const newProgress = {};
    
    const shuffleArray = (array, seed = 0) => {
      const shuffled = [...array];
      let seedNum = typeof seed === 'string' ? 
        seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : seed;

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(((seedNum * (i + 1)) % 100) / 100 * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        seedNum = (seedNum * 9301 + 49297) % 233280;
      }
      return shuffled;
    };

    const getCorrectAnswer = (q) => {
      if (!q.options) return q.answer;
      const correctOpt = q.options.find(o => o.id === q.answer);
      const shuffled = shuffleArray(q.options, q.id || q.text);
      let newAnswer = q.answer;
      shuffled.forEach((opt, idx) => {
        if (opt === correctOpt) newAnswer = String.fromCharCode(65 + idx);
      });
      return newAnswer;
    };

    data.topics.forEach(topic => {
      const topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
      const key = topicSlug.toLowerCase();
      const spacedKey = topicSlug.replace(/-/g, ' ').toLowerCase();
      const tData = topicData[key] || topicData[spacedKey] || [];
      const baseData = Array.isArray(tData) ? { questions: tData, theory: [] } : tData;
      const questions = baseData.questions || [];
      
      let total = 0;
      let solved = 0;
      
      const flatQuestions = questions.reduce((acc, q) => {
        if (q.type === 'passage-group' && q.subQuestions) {
          total += q.subQuestions.length;
          return [...acc, ...q.subQuestions];
        }
        total += 1;
        return [...acc, q];
      }, []);

      let localAttempts = {};
      try {
        const stored = localStorage.getItem(`progress_${topicSlug}`);
        if (stored) {
          localAttempts = JSON.parse(stored);
        }
      } catch(e) {}

      if (total > 0) {
        flatQuestions.forEach(q => {
          const attempts = localAttempts[q.id] || [];
          const ans = getCorrectAnswer(q);
          if (attempts.includes(ans)) {
            solved++;
          }
        });
      }
      
      newProgress[topicSlug] = { solved, total };
    });
    
    setProgressData(newProgress);
  }, [category, data]);

  const confirmResetCategory = async () => {
    setIsResetting(true);
    // Add small delay for perception
    await new Promise(resolve => setTimeout(resolve, 600));
    
    data.topics.forEach(topic => {
      const topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
      localStorage.removeItem(`progress_${topicSlug}`);
    });
    
    setProgressData({});
    setShowResetModal(false);
    setIsResetting(false);
  };

  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-100';
  const headFont = { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
  const bodyFont = { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };

  const filteredTopics = data.topics.filter(topic => 
    topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!category && !router.isReady) return null;

  return (
    <div className={`min-h-screen pt-24 pb-20 ${bg}`} style={bodyFont}>
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
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mb-6">
                  <RotateCcw size={32} className="text-rose-500" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[24px] font-black text-gray-900 dark:text-white mb-3 tracking-tight">Reset Category?</h3>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                  This will permanently clear your progress for all topics in <span className="text-rose-500 font-bold uppercase tracking-wider text-[12px]">{data.title}</span>. This action cannot be undone.
                </p>
                
                <div className="flex flex-col w-full gap-3">
                  <button 
                    onClick={confirmResetCategory}
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
        <title>{data.title} - Prep Guide | Career Platform</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Banner Card - Matching Reference with Dynamic Colors */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full rounded-[24px] overflow-hidden p-6 md:p-10 mt-8 mb-10 border transition-all"
          style={{
            backgroundColor: isDark ? 'rgba(20, 20, 20, 0.9)' : `${data.color}08`, // 8% opacity for very light tint
            borderColor: isDark ? '#222' : `${data.color}20` // 12% opacity for subtle border
          }}
        >
          {/* Abstract Background Blobs - Exact Match to Reference Image */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.25]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <g className="opacity-40">
                {/* Organic Left Shape - Different Style */}
                <path 
                  fill={data.color} 
                  d="M140.5,41.5C164.6,65.3,175.5,103.4,164.8,131C154.1,158.6,121.8,175.7,91.8,172.5C61.8,169.3,34.1,145.7,20.9,116.3C7.7,86.9,9.1,51.7,26.6,27.2C44.1,-2.7,77.5,-21.9,104.3,-18.2C131.1,-14.5,151.2,12.1,140.5,41.5Z" 
                  transform="translate(250 80) scale(0.8)" 
                />
                {/* Organic Right Shape - Different Style */}
                <path 
                  fill={data.color} 
                  d="M150,120C180,150,220,180,250,170C280,160,300,120,290,80C280,40,240,20,200,25C160,30,120,90,150,120Z" 
                  transform="translate(550 50) scale(0.7)" 
                />
              </g>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-center md:text-left">
            <div className="flex-1">
              <h1 
                className="text-2xl md:text-2xl lg:text-3xl font-[800] tracking-tight mb-3 leading-[1.2] keep-color" 
                style={{ 
                  ...headFont,
                  backgroundImage: isDark 
                    ? `linear-gradient(135deg, #fff 0%, ${data.color} 100%)` 
                    : `linear-gradient(135deg, #000 0%, ${data.color} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >
                {data.title} & <br className="hidden md:block" />
                Problem Solving Catalog
              </h1>
              <p className="text-sm md:text-base text-gray-500 dark:text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                Explore specialized {data.title.toLowerCase()} topics organized by concept, difficulty level, and real exam patterns.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
                <button 
                  onMouseEnter={() => setIsExploreHovered(true)}
                  onMouseLeave={() => setIsExploreHovered(false)}
                  className="w-full md:w-auto px-8 py-3.5 rounded-full font-extrabold text-[15px] transition-all duration-300 active:scale-95 keep-color border-none"
                  style={{ 
                    backgroundColor: isExploreHovered ? data.color : (isDark ? '#ffffff' : '#111111'),
                    color: isExploreHovered ? '#ffffff' : (isDark ? '#111111' : '#ffffff')
                  }}
                >
                  Explore Topics
                </button>
            </div>
          </div>
        </motion.div>

        {/* Search Bar & Categories - Synced with Hub */}
        <div className="mb-20">
          <div className={`
            group flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 p-1.5 sm:rounded-lg rounded-2xl border transition-all duration-300
            ${isDark ? 'bg-[#141414] border-[#222]' : 'bg-white border-gray-200'}
          `}
          style={{ borderColor: isDark ? '#222' : `${data.color}20` }}>
            <div className="flex items-center flex-1 px-4 sm:px-0">
              <div className="sm:pl-5 pr-3">
                <Search size={22} className="text-gray-400" style={{ color: data.color }} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search: ${data.topics[0]}...`}
                className="flex-1 py-3.5 sm:py-2.5 bg-transparent outline-none text-[16px] font-medium placeholder:text-gray-400 dark:text-white"
              />
              
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-[#222] rounded-md border border-gray-100 dark:border-[#333]">
                <Command size={12} className="text-gray-400" />
                <span className="text-[11px] font-bold text-gray-500">K</span>
              </div>
            </div>

            <button 
              className="px-6 py-3.5 sm:py-2.5 text-white font-extrabold text-[15px] rounded-xl sm:rounded-lg transition-all active:scale-[0.98] shadow-sm keep-color"
              style={{ backgroundColor: data.color }}
            >
               Search
            </button>
          </div>

          {/* Quick Filter Tags Below Search */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {Object.keys(aptitudeCatalog).map((key) => (
              <Link
                key={key}
                href={`/aptitude/${key}`}
                className={`
                  px-6 py-2 rounded-xl text-[12px] font-bold transition-all border keep-color
                  ${category === key 
                    ? 'border-opacity-100' 
                    : 'bg-white dark:bg-[#141414] border-gray-100 dark:border-[#222] text-gray-500 hover:text-opacity-80'}
                `}
                style={{ 
                  backgroundColor: category === key ? `${data.color}10` : '',
                  borderColor: category === key ? data.color : '',
                  color: category === key ? data.color : ''
                }}
              >
                {aptitudeCatalog[key].title}
              </Link>
            ))}
          </div>
        </div>
        {/* Category Heading Section - Match Hub exactly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img src={data.icon} alt="" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 
                className="text-xl md:text-[23px] font-bold tracking-tight mb-0.5 keep-color" 
                style={{ 
                  ...headFont,
                  backgroundImage: data.bgGradient,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >
                {data.title}
              </h2>
              <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {data.topics.length} PRACTICE MODULES AVAILABLE
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50/80 dark:bg-[#141414] px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <img src="https://img.icons8.com/3d-fluency/94/like--v3.png" alt="Fully Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
              <span>Fully Completed</span>
            </div>
            <div className="hidden sm:block w-px h-3.5 bg-gray-200 dark:bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <img src="https://img.icons8.com/3d-fluency/94/like--v8.png" alt="Partially Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
              <span>Partially Completed</span>
            </div>
            <div className="hidden sm:block w-px h-3.5 bg-gray-200 dark:bg-gray-800"></div>
            <button 
              onClick={() => setShowResetModal(true)}
              className="flex items-center gap-1.5 text-rose-500 hover:text-rose-600 transition-colors"
            >
              <RotateCcw size={13} strokeWidth={2.5} />
              <span>Reset All Progress</span>
            </button>
          </div>
        </div>

        {/* Topics List - Premium & Consistent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-2">
          {filteredTopics.map((topic, index) => {
            const topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
            const topicProgress = progressData[topicSlug] || { solved: 0, total: 0 };
            const isCompleted = topicProgress.total > 0 && topicProgress.solved === topicProgress.total;
            const isPartiallyCompleted = topicProgress.total > 0 && topicProgress.solved > 0 && topicProgress.solved < topicProgress.total;
            
            let heartIcon = null;
            if (isCompleted) {
              heartIcon = "https://img.icons8.com/3d-fluency/94/like--v3.png";
            } else if (isPartiallyCompleted) {
              heartIcon = "https://img.icons8.com/3d-fluency/94/like--v8.png";
            }

            return (
            <Link 
              key={topic} 
              href={`/aptitude/${category}/${topicSlug}`}
              className="group flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 transition-all duration-300"
              onMouseEnter={(e) => {
                const span = e.currentTarget.querySelector('.topic-span');
                if (span) {
                  span.style.backgroundImage = data.bgGradient;
                  span.style.WebkitBackgroundClip = 'text';
                  span.style.backgroundClip = 'text';
                  span.style.WebkitTextFillColor = 'transparent';
                  span.style.color = 'transparent';
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
                <div className="shrink-0 w-6 h-6 transition-transform group-hover:scale-110 duration-300">
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
              <div className="flex items-center gap-2 shrink-0">
                {heartIcon && (
                  <div className="flex items-center justify-center relative w-5 h-5">
                    <img 
                      src={heartIcon} 
                      alt="Progress" 
                      className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <ChevronRight 
                  size={14} 
                  className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: data.color }}
                />
              </div>
            </Link>
          );
          })}
        </div>

        {/* Section Navigation */}
        <div className="mt-32 py-16 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
          <Link href="/aptitude" className="group flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-blue-600 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
               <ArrowLeft size={24} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
            </div>
            <h2 
              className="text-xl md:text-3xl font-bold tracking-tight" 
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              <span className="text-black dark:text-white keep-color">Back to </span>
              <span className="text-blue-600 dark:text-blue-400 keep-color">Aptitude Catalog</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
