import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ComingSoon = ({ topicName, category }) => {
  const { isDark } = useTheme();

  const card = isDark ? 'bg-[#111111]/80 border-[#1f1f1f]' : 'bg-white border-[#f0f0f0] shadow-sm';
  const text = isDark ? 'text-white' : 'text-[#1a1a1a]';
  const textMuted = isDark ? 'text-gray-400' : 'text-[#666666]';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const categories = [
    { name: 'Govt Exams', icon: "https://img.icons8.com/3d-fluency/94/open-book.png", path: '/exams', bg: 'bg-blue-500/10' },
    { name: 'Aptitude', icon: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png", path: '/aptitude', bg: 'bg-purple-500/10' },
    { name: 'Current Affairs', icon: "https://img.icons8.com/3d-fluency/94/news.png", path: '/current-affairs', bg: 'bg-rose-500/10' },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4">
      <motion.div 
        className="max-w-4xl w-full text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <img src="https://img.icons8.com/3d-fluency/94/book.png" alt="" className="w-5 h-5 object-contain" />
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500">Resource Library</span>
          </div>
        </motion.div>

        <motion.div 
          className="relative mb-10 flex justify-center"
          variants={itemVariants}
        >
          <div className={`p-8 rounded-full ${isDark ? 'bg-[#161616]' : 'bg-white'} shadow-xl border border-white/5 relative z-10`}>
             <img src="https://img.icons8.com/3d-fluency/188/microscope.png" alt="" className="w-20 h-20 object-contain" />
          </div>
          <motion.div 
            className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-3xl opacity-30"
            style={{ background: '#3b82f6' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <h1 className={`text-3xl md:text-5xl font-black mb-4 tracking-tight ${text}`}>
            Explore <span className="text-blue-500">{topicName ? topicName : 'Our Library'}</span>
          </h1>
          <p className={`text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed ${textMuted} font-medium`}>
            {topicName ? `Dive into specialized preparation strategies and foundational resources for ${topicName}.` : "Explore curated preparation materials for your upcoming examinations."} 
            Our platform continuously incorporates the latest high-yield topics and curated problem sets from industry experts.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            href={category ? `/aptitude/${category}` : "/"}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white text-[13px] font-black rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
          >
            <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="" className="w-5 h-5 object-contain" />
            View Active Modules
          </Link>
          <div className="text-[12px] font-bold text-gray-500 tracking-tight">
            Premium Verification
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
            <div className="flex items-center gap-4 mb-8">
                <div className={`h-px flex-1 ${isDark ? 'bg-white/5' : 'bg-gray-100'}`} />
                <h2 className={`text-[9px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    Featured Learning Paths
                </h2>
                <div className={`h-px flex-1 ${isDark ? 'bg-white/5' : 'bg-gray-100'}`} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => (
                    <Link 
                        key={cat.name}
                        href={cat.path}
                        className={`flex flex-col items-center p-5 rounded-2xl border transition-all hover:scale-[1.03] group ${card}`}
                    >
                        <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-3 ${cat.bg} group-hover:scale-110 transition-transform`}>
                            <img src={cat.icon} alt={cat.name} className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className={`text-[12px] font-bold ${text}`}>{cat.name}</h3>
                    </Link>
                ))}
            </div>
        </motion.div>
        
        {/* Search Mockup */}
        <motion.div 
            variants={itemVariants}
            className={`mt-12 p-6 rounded-2xl border flex flex-col md:flex-row items-center gap-4 text-left ${card}`}
        >
            <div className="p-2 rounded-xl bg-[#FFC107]/10 flex items-center justify-center">
                <img src="https://img.icons8.com/3d-fluency/94/search.png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex-1">
                <h4 className={`text-[14px] font-bold ${text}`}>Looking for something specific?</h4>
                <p className={`text-[12px] ${textMuted}`}>Try searching our comprehensive database of 8,100+ questions.</p>
            </div>
            <Link 
                href="/search" 
                className={`w-full md:w-auto px-6 py-2 rounded-lg border text-[12px] font-bold transition-all ${
                    isDark ? 'border-white/10 hover:bg-white/5 text-white' : 'border-gray-200 hover:bg-gray-50 text-gray-900'
                }`}
            >
                Start Search
            </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
