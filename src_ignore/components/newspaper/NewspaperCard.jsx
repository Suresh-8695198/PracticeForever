import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import {
    Newspaper,
    ExternalLink,
    CheckCircle,
    Clock,
    TrendingUp,
    BookOpen,
    Globe
} from 'lucide-react';

const NewspaperCard = ({ source, onComplete, completed }) => {
    const { isDark } = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const difficultyColors = {
        easy: 'from-green-400 to-emerald-500',
        medium: 'from-yellow-400 to-orange-500',
        hard: 'from-red-400 to-pink-500'
    };

    const difficultyBadgeColors = {
        easy: isDark ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-700 border-green-300',
        medium: isDark ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border-yellow-300',
        hard: isDark ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-700 border-red-300'
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 ${completed
                    ? isDark
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-green-50 border-green-300'
                    : isDark
                        ? 'bg-dark-card border-dark-border hover:border-primary-yellow/50'
                        : 'bg-white border-gray-200 hover:border-primary-yellow/50 shadow-lg hover:shadow-xl'
                }`}
        >
            {/* Background gradient on hover */}
            <AnimatePresence>
                {isHovered && !completed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-br ${difficultyColors[source.difficulty]} opacity-5`}
                    />
                )}
            </AnimatePresence>

            {/* Completed checkmark */}
            {completed && (
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-4 right-4"
                >
                    <div className={`p-2 rounded-full ${isDark ? 'bg-green-500/20' : 'bg-green-100'
                        }`}>
                        <CheckCircle size={24} className="text-green-500" />
                    </div>
                </motion.div>
            )}

            <div className="relative">
                {/* Icon and category */}
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${difficultyColors[source.difficulty]}`}>
                        <span className="text-2xl">{source.icon}</span>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full border ${difficultyBadgeColors[source.difficulty]}`}>
                            {source.difficulty.toUpperCase()}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${isDark
                                ? 'bg-primary-yellow/20 text-primary-yellow border border-primary-yellow/30'
                                : 'bg-yellow-100 text-yellow-700 border border-yellow-300'
                            }`}>
                            +{source.points} XP
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {source.name}
                </h3>

                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                    <Globe size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        {source.category}
                    </span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                    <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${isDark
                                ? 'bg-primary-yellow text-black hover:bg-primary-yellow-light'
                                : 'bg-primary-yellow text-black hover:bg-yellow-500'
                            }`}
                    >
                        <BookOpen size={18} />
                        <span>Read Now</span>
                        <ExternalLink size={16} />
                    </a>

                    {!completed && (
                        <button
                            onClick={() => onComplete(source)}
                            className={`px-4 py-3 rounded-xl font-medium transition-all ${isDark
                                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                                    : 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-300'
                                }`}
                        >
                            <CheckCircle size={20} />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const DailyGoalCard = ({ isDark }) => {
    const [progress, setProgress] = useState(2);
    const total = 3;
    const percentage = (progress / total) * 100;

    return (
        <div className={`rounded-2xl p-6 border ${isDark
                ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30'
                : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300'
            }`}>
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Daily Goal
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Read {total} articles today
                    </p>
                </div>

                <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                    }`}>
                    <Clock size={24} className="text-purple-500" />
                </div>
            </div>

            {/* Progress bar */}
            <div className={`h-4 rounded-full overflow-hidden mb-3 ${isDark ? 'bg-dark-bg' : 'bg-gray-200'
                }`}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </motion.div>
            </div>

            <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {progress} of {total} completed
                </span>
                <span className={`text-sm font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                    {Math.round(percentage)}%
                </span>
            </div>
        </div>
    );
};

export { NewspaperCard, DailyGoalCard };
