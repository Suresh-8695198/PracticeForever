import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { TrendingUp, Flame, Target, Award } from 'lucide-react';

const StatsCard = ({ icon: Icon, label, value, color, trend }) => {
    const { isDark } = useTheme();

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={`relative overflow-hidden rounded-2xl p-6 ${isDark
                    ? 'bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
        >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />

            <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${color}`}>
                    <Icon size={24} className="text-white" />
                </div>

                {/* Value */}
                <div className={`text-4xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {value}
                </div>

                {/* Label */}
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    {label}
                </div>

                {/* Trend indicator */}
                {trend && (
                    <div className="flex items-center gap-1 mt-2">
                        <TrendingUp size={16} className="text-green-500" />
                        <span className="text-sm font-medium text-green-500">
                            +{trend}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const ProgressBar = ({ current, total, color, label }) => {
    const { isDark } = useTheme();
    const percentage = Math.min((current / total) * 100, 100);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {label}
                </span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {current}/{total}
                </span>
            </div>

            <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-gray-200'
                }`}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${color} relative`}
                >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </motion.div>
            </div>
        </div>
    );
};

const StreakCounter = ({ streak, isDark }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10 }}
            className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl ${isDark
                    ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30'
                    : 'bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300'
                }`}
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <Flame size={32} className="text-orange-500" />
            </motion.div>

            <div>
                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {streak}
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    Day Streak
                </div>
            </div>
        </motion.div>
    );
};

const PointsDisplay = ({ points, isDark }) => {
    return (
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark
                ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30'
                : 'bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-300'
            }`}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
                <Award size={20} className="text-yellow-500" />
            </motion.div>
            <span className={`text-lg font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                {points.toLocaleString()}
            </span>
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                XP
            </span>
        </div>
    );
};

export { StatsCard, ProgressBar, StreakCounter, PointsDisplay };
