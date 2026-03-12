import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Zap, Target, BookOpen, Clock, Command 
} from 'lucide-react';

const SUGGESTIONS = [
  { name: 'Percentage', level: 'Intermediate', count: 120 },
  { name: 'Number System', level: 'Beginner', count: 95 },
  { name: 'Problems on Trains', level: 'Advanced', count: 60 },
  { name: 'Time & Work', level: 'Intermediate', count: 110 },
  { name: 'Ratio & Proportion', level: 'Beginner', count: 85 },
];

const CATEGORIES = [
  'Arithmetic', 'Algebra', 'Logical Reasoning', 'Data Interpretation', 'Verbal Reasoning'
];

const HeroSection = ({ isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSuggestions = SUGGESTIONS.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-6 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Professional Banner Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative w-full rounded-[20px] overflow-hidden p-5 md:p-8 mb-6 border ${
          isDark ? 'bg-[#141414] border-[#222]' : 'bg-[#fffbeb] border-amber-100'
        }`}
      >
        {/* Background Organic Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           {/* Abstract SVG Blobs (matching reference) */}
           <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M100.5,41.5C124.6,65.3,135.5,103.4,124.8,131C114.1,158.6,81.8,175.7,51.8,172.5C21.8,169.3,-5.9,145.7,-19.1,116.3C-32.3,86.9,-30.9,51.7,-13.4,27.2C4,-2.7,37.5,-21.9,64.3,-18.2C91.1,-14.5,111.2,12.1,100.5,41.5Z" transform="translate(300 100)" />
              <path fill="#FF9800" d="M44.5,-61.2C58.1,-52.8,69.9,-41.4,76.5,-27.7C83.1,-14.1,84.4,1.8,81,16.5C77.5,31.2,69.2,44.7,57.7,54.7C46.1,64.7,31.3,71.2,15.7,74.5C0.1,77.7,-16.1,77.7,-30.9,73C-45.7,68.3,-59.1,58.8,-68.8,46.3C-78.4,33.7,-84.3,18.1,-84.3,2.2C-84.3,-13.7,-78.4,-29.9,-68.6,-43.3C-58.8,-56.7,-45.1,-67.3,-30.9,-75.4C-16.7,-83.5,-2,-88.9,11.2,-87.3C24.4,-85.7,31,-77,44.5,-61.2Z" transform="translate(150 150)" />
           </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-left">
            <h1 
              className="text-xl md:text-2xl lg:text-3xl font-[800] tracking-tight mb-2 leading-[1.2] keep-color" 
              style={{ 
                fontFamily: 'Outfit, sans-serif',
                backgroundImage: isDark 
                  ? 'linear-gradient(135deg, #fff 0%, #FFC107 100%)' 
                  : 'linear-gradient(135deg, #000 0%, #FF9800 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Quantitative Aptitude & <br className="hidden md:block" />
              Logical Reasoning Catalog
            </h1>
            <p 
              className="text-sm md:text-base text-gray-500 dark:text-zinc-400 max-w-xl leading-relaxed font-medium" 
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Explore aptitude topics organized by concept, difficulty level, and real exam patterns.
            </p>
          </div>

          <div className="shrink-0">
            <button className={`
              px-8 py-3.5 rounded-full font-extrabold text-[15px] transition-all
              ${isDark ? 'bg-white text-black hover:bg-amber-500 hover:text-white' : 'bg-black text-white hover:bg-[#FFC107] hover:text-black'}
              border-[3px] border-black dark:border-white active:translate-y-1
            `}>
              Explore Topics
            </button>
          </div>
        </div>
      </motion.div>

      {/* Professional Search & Filters Area */}
      <div className="relative max-w-4xl mx-auto" ref={searchRef}>
        <div className={`
          group flex items-center gap-4 p-1.5 rounded-lg border transition-all duration-300
          ${isDark ? 'bg-[#141414] border-[#222] focus-within:border-[#FFC107]/50' 
                  : 'bg-white border-gray-200 focus-within:border-[#FFC107]/30'}
        `}>
          <div className="pl-5">
            <Search size={22} className="text-gray-400 group-focus-within:text-[#FFC107] transition-colors" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search topics: Percentage, Time & Work, Number System..."
            className="flex-1 py-2.5 bg-transparent outline-none text-[16px] font-medium placeholder:text-gray-400 dark:text-white"
          />
          
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-[#222] rounded-md border border-gray-200 dark:border-[#333]">
            <Command size={12} className="text-gray-400" />
            <span className="text-[11px] font-bold text-gray-500">K</span>
          </div>

          <button className={`
            px-6 py-2.5 bg-[#FFC107] text-black font-extrabold text-[15px] rounded-lg
            hover:bg-[#FFB300] transition-all ml-2 active:scale-95
          `}>
             Search
          </button>
        </div>

        {/* Search Suggestions Dropdown */}
        <AnimatePresence>
          {showSuggestions && searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className={`
                absolute top-full left-0 right-0 mt-3 p-1.5 rounded-2xl border transition-all z-50
                ${isDark ? 'bg-[#1a1a1a] border-[#222]' 
                        : 'bg-white border-gray-200'}
              `}
            >
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item, i) => (
                  <button
                    key={i}
                    className={`
                      w-full flex items-center justify-between p-4 rounded-xl transition-all text-left
                      ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}
                    `}
                  >
                    <div>
                      <div className="font-bold text-[15px] dark:text-white text-black">{item.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{item.count} Questions</div>
                    </div>
                    <div className={`
                      px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider
                      ${item.level === 'Beginner' ? 'bg-green-500/10 text-green-500' : 
                        item.level === 'Intermediate' ? 'bg-[#FFC107]/10 text-[#FFC107]' : 
                        'bg-red-500/10 text-red-500'}
                    `}>
                      {item.level}
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500 text-sm font-medium">
                  No topics found matching "{searchQuery}"
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              className={`
                px-6 py-2 rounded-xl text-[12px] font-bold transition-all border
                ${isDark ? 'bg-[#141414] border-[#222] hover:border-[#FFC107]/50 text-gray-400 hover:text-[#FFC107]' 
                        : 'bg-white border-gray-100 hover:border-[#FFC107] text-gray-600 hover:text-[#FFC107]'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
