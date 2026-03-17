import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Trophy, Star, Sparkles, Crown, X } from 'lucide-react';

const RewardModal = ({ show, reward, onClose }) => {
    const { isDark } = useTheme();

    if (!show || !reward) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                onClick={onClose}
            >
                {/* Confetti background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                y: -100,
                                x: Math.random() * window.innerWidth,
                                rotate: 0,
                                opacity: 1
                            }}
                            animate={{
                                y: window.innerHeight + 100,
                                rotate: 360,
                                opacity: 0
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                delay: Math.random() * 0.5,
                                ease: 'linear'
                            }}
                            className={`absolute w-3 h-3 ${['bg-yellow-400', 'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500'][i % 5]
                                }`}
                            style={{
                                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{
                        type: 'spring',
                        damping: 15,
                        stiffness: 200
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative max-w-lg w-full"
                >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${reward.color} opacity-30 blur-3xl rounded-3xl`} />

                    {/* Main card */}
                    <div className={`relative rounded-3xl p-12 ${isDark
                            ? 'bg-gradient-to-br from-dark-card to-dark-bg border-2 border-primary-yellow/30'
                            : 'bg-gradient-to-br from-white to-gray-50 border-2 border-primary-yellow/50'
                        } shadow-2xl overflow-hidden`}>
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }} />
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isDark
                                    ? 'hover:bg-white/10 text-gray-400 hover:text-white'
                                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <X size={24} />
                        </button>

                        {/* Content */}
                        <div className="relative text-center">
                            {/* Animated icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                    scale: [0, 1.2, 1],
                                    rotate: [0, 360, 360]
                                }}
                                transition={{
                                    duration: 0.8,
                                    times: [0, 0.6, 1]
                                }}
                                className="mb-6"
                            >
                                <div className={`inline-flex p-8 rounded-full bg-gradient-to-br ${reward.color} shadow-2xl`}>
                                    <span className="text-8xl">{reward.icon}</span>
                                </div>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                                    }`}
                            >
                                🎉 Congratulations! 🎉
                            </motion.h2>

                            {/* Reward name */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mb-6"
                            >
                                <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${reward.color} shadow-lg`}>
                                    <span className="text-2xl font-bold text-white">
                                        {reward.reward}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Points */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                            >
                                You've reached <span className="font-bold text-primary-yellow">{reward.points} XP</span>!
                            </motion.p>

                            {/* Continue button */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="px-8 py-4 bg-primary-yellow text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                Continue Learning
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default RewardModal;
