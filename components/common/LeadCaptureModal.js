import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const LeadCaptureModal = ({ isOpen, onClose, topicName }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Auto-close success state after 3s
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose();
        setTimeout(() => setIsSuccess(false), 500); // reset after exit animation
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      await axios.post('/api/leads', { 
        email, 
        interest: topicName || 'General Aptitude',
        source: 'Topic Page Modal'
      });
      setIsSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-32 bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors z-20"
            >
              <X size={18} />
            </button>

            <div className="p-8">
              {!isSuccess ? (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center mb-6">
                    <Sparkles size={28} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                    Master <span className="text-purple-600 dark:text-purple-400">{topicName || 'Aptitude'}</span>
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Unlock detailed step-by-step explanations, daily practice sets, and expert strategies delivered straight to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      />
                      {error && <p className="text-xs text-rose-500 mt-2 font-medium">{error}</p>}
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          Unlock Premium Resources
                        </>
                      )}
                    </button>
                  </form>
                  <p className="text-[10px] text-gray-400 text-center mt-6 font-medium">
                    By subscribing, you agree to our Terms and Privacy Policy. No spam, ever.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="w-20 h-20 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">You're In!</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check your inbox for your first set of premium resources.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
