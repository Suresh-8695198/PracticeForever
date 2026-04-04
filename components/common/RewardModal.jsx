import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Zap, Star } from 'lucide-react';

const RewardModal = ({ isOpen, onClose, pointsAwarded = 50, title = "Awesome Job!" }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: "spring", bounce: 0.4 } 
          }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-sky-500" />
            
            <div className="p-8 flex flex-col items-center text-center">
              <motion.div 
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                className="w-20 h-20 mb-5 rounded-full bg-slate-50 border-4 border-white shadow-sm flex items-center justify-center relative"
              >
                  <img src="https://img.icons8.com/color/96/star--v1.png" className="w-12 h-12" alt="Star" />
                  
                  {/* Delicate decorative stars */}
                  <motion.div
                    animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1 -right-1 text-sky-400"
                  >
                    <Star fill="currentColor" size={14} />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -4, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-1 -left-2 text-indigo-400"
                  >
                    <Star fill="currentColor" size={12} />
                  </motion.div>
              </motion.div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 font-medium mb-6">
                Your progress has been synchronized to the global leaderboard. Keeping learning!
              </p>
              
              <div className="flex items-center justify-center gap-2 bg-sky-50 text-sky-700 px-6 py-3 rounded-lg w-full mb-6 border border-sky-100">
                <Zap size={18} className="text-sky-500 fill-sky-500" />
                <span className="font-bold text-lg">+{pointsAwarded} XP</span>
              </div>
              
              <button 
                onClick={onClose}
                className="h-11 w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium text-[14px] transition-all active:scale-95"
              >
                Continue Learning
              </button>
            </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RewardModal;
