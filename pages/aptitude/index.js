import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronRight, ArrowRight, Search, Target, BookOpen, Clock, 
  Zap, Award, ArrowLeft
} from 'lucide-react';
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
      "Statement and Assumption", "Course of Action", "Statement and Conclusion",
      "Theme Detection", "Cause and Effect", "Statement and Argument", "Logical Deduction"
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
      "Completing Statements", "Ordering of Sentences", "Paragraph Formation", "Closet Test",
      "Comprehension", "One Word Substitutes", "Idioms and Phrases", "Change of Voice",
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
  const [searchQuery, setSearchQuery] = useState('');

  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const cardBg = isDark ? 'bg-[#141414] border-[#222]' : 'bg-white border-gray-100';
  const headFont = { fontFamily: 'Outfit, sans-serif' };
  const bodyFont = { fontFamily: 'Outfit, sans-serif' };

  const filteredData = aptitudeData.map(section => ({
    ...section,
    topics: section.topics.filter(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.topics.length > 0);

  return (
    <div className={`min-h-screen pt-24 pb-20 ${bg}`} style={bodyFont}>
      <Head>
        <title>Aptitude & Reasoning Hub | Career Platform</title>
        <meta name="description" content="Prepare for placements with thousands of practice questions across quantitative, logical and verbal reasoning." />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection isDark={isDark} />

        {/* Categories Grid */}
        <div className="space-y-32">
          {filteredData.map((section, sIdx) => (
            <section key={section.category}>
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-2">
                {section.topics.map((topic, tIdx) => (
                  <Link 
                    key={topic} 
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
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="shrink-0 w-6 h-6 transition-transform group-hover:scale-110">
                        <img 
                          src="https://img.icons8.com/3d-fluency/94/folder-invoices.png" 
                          alt="" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span 
                        className="topic-span text-[14px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 group-hover:translate-x-1 keep-color"
                        style={{ ...bodyFont }}
                      >
                        {topic}
                      </span>
                    </div>
                    <ChevronRight 
                      size={14} 
                      className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      style={{ color: section.color }}
                    />
                  </Link>
                ))}
              </div>
            </section>
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
