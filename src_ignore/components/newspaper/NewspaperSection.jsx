import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import {
    Newspaper,
    CheckCircle,
    TrendingUp,
    Flame,
    Star,
    Award,
    Zap,
    Target,
    Lock,
    Unlock,
    ChevronRight
} from 'lucide-react';
import { newspaperConfig, badges, tierConfig, levelConfig } from '../../data/newspaperData';

const NewspaperSection = () => {
    const { isDark } = useTheme();

    // Load from localStorage or use defaults
    const [userProgress, setUserProgress] = useState(() => {
        const saved = localStorage.getItem('newspaperProgress');
        return saved ? JSON.parse(saved) : {
            totalPoints: 0,
            articlesRead: 0,
            currentStreak: 0,
            longestStreak: 0,
            lastReadDate: null,
            readDates: [],
            unlockedBadges: []
        };
    });

    const [todayRead, setTodayRead] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const [newBadges, setNewBadges] = useState([]);

    // Save to localStorage whenever progress changes
    useEffect(() => {
        localStorage.setItem('newspaperProgress', JSON.stringify(userProgress));
    }, [userProgress]);

    // Check if today's article is already read
    useEffect(() => {
        const today = new Date().toDateString();
        setTodayRead(userProgress.readDates.includes(today));
    }, [userProgress.readDates]);

    // Calculate current level
    const getCurrentLevel = () => {
        for (let i = levelConfig.length - 1; i >= 0; i--) {
            if (userProgress.totalPoints >= levelConfig[i].pointsRequired) {
                return levelConfig[i];
            }
        }
        return levelConfig[0];
    };

    const getNextLevel = () => {
        const currentLevel = getCurrentLevel();
        const currentIndex = levelConfig.findIndex(l => l.level === currentLevel.level);
        return levelConfig[currentIndex + 1] || levelConfig[levelConfig.length - 1];
    };

    const currentLevel = getCurrentLevel();
    const nextLevel = getNextLevel();
    const levelProgress = currentLevel.level < 10
        ? ((userProgress.totalPoints - currentLevel.pointsRequired) / (nextLevel.pointsRequired - currentLevel.pointsRequired)) * 100
        : 100;

    // Handle marking article as read
    const handleMarkAsRead = () => {
        const today = new Date().toDateString();

        // Check streak
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        const newStreak = userProgress.readDates.includes(yesterdayStr)
            ? userProgress.currentStreak + 1
            : 1;

        const newProgress = {
            ...userProgress,
            totalPoints: userProgress.totalPoints + newspaperConfig.dailySource.pointsPerRead,
            articlesRead: userProgress.articlesRead + 1,
            currentStreak: newStreak,
            longestStreak: Math.max(userProgress.longestStreak, newStreak),
            lastReadDate: today,
            readDates: [...userProgress.readDates, today]
        };

        // Check for new badges
        const earnedBadges = badges.filter(badge => {
            if (userProgress.unlockedBadges.includes(badge.id)) return false;

            if (badge.type === 'articles' && newProgress.articlesRead >= badge.requirement) return true;
            if (badge.type === 'streak' && newProgress.currentStreak >= badge.requirement) return true;
            if (badge.type === 'points' && newProgress.totalPoints >= badge.requirement) return true;

            return false;
        });

        if (earnedBadges.length > 0) {
            setNewBadges(earnedBadges);
            setShowCelebration(true);
            newProgress.unlockedBadges = [
                ...userProgress.unlockedBadges,
                ...earnedBadges.map(b => b.id)
            ];
            setTimeout(() => setShowCelebration(false), 3000);
        }

        setUserProgress(newProgress);
        setTodayRead(true);
    };

    // Get badge progress
    const getBadgeProgress = (badge) => {
        if (badge.type === 'articles') {
            return Math.min((userProgress.articlesRead / badge.requirement) * 100, 100);
        }
        if (badge.type === 'streak') {
            return Math.min((userProgress.currentStreak / badge.requirement) * 100, 100);
        }
        if (badge.type === 'points') {
            return Math.min((userProgress.totalPoints / badge.requirement) * 100, 100);
        }
        return 0;
    };

    return (
        <div className="space-y-8">
            {/* Stats Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Level Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`col-span-2 md:col-span-1 rounded-2xl p-6 border-2 ${isDark
                            ? 'bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30'
                            : 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-300'
                        }`}
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                            }`}>
                            <Star size={24} className="text-purple-500" />
                        </div>
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            {currentLevel.level}
                        </span>
                    </div>
                    <div className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        {currentLevel.title}
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-gray-200'
                        }`}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${levelProgress}%` }}
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                        />
                    </div>
                </motion.div>

                {/* Points Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl p-6 border-2 ${isDark
                            ? 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30'
                            : 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300'
                        }`}
                >
                    <div className={`p-2 rounded-lg inline-flex mb-3 ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-100'
                        }`}>
                        <Zap size={24} className="text-yellow-500" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {userProgress.totalPoints}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Total Points
                    </div>
                </motion.div>

                {/* Streak Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl p-6 border-2 ${isDark
                            ? 'bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30'
                            : 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-300'
                        }`}
                >
                    <div className={`p-2 rounded-lg inline-flex mb-3 ${isDark ? 'bg-orange-500/20' : 'bg-orange-100'
                        }`}>
                        <Flame size={24} className="text-orange-500" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {userProgress.currentStreak}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Day Streak
                    </div>
                </motion.div>

                {/* Articles Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl p-6 border-2 ${isDark
                            ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30'
                            : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300'
                        }`}
                >
                    <div className={`p-2 rounded-lg inline-flex mb-3 ${isDark ? 'bg-green-500/20' : 'bg-green-100'
                        }`}>
                        <Newspaper size={24} className="text-green-500" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {userProgress.articlesRead}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Articles Read
                    </div>
                </motion.div>
            </div>

            {/* Daily Reading Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-3xl p-8 border-2 ${todayRead
                        ? isDark
                            ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30'
                            : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300'
                        : isDark
                            ? 'bg-gradient-to-br from-dark-card to-dark-bg border-primary-yellow/30'
                            : 'bg-white border-gray-200 shadow-xl'
                    }`}
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className={`p-6 rounded-2xl ${todayRead
                                ? 'bg-green-500/20'
                                : 'bg-gradient-to-br from-blue-500 to-purple-600'
                            }`}>
                            <Newspaper size={48} className={todayRead ? 'text-green-500' : 'text-white'} />
                        </div>
                        <div>
                            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                {newspaperConfig.dailySource.name}
                            </h3>
                            <p className={`text-lg mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                {todayRead ? '✅ Completed Today!' : 'Read today\'s article'}
                            </p>
                            <div className="flex items-center gap-2">
                                <Zap size={20} className="text-yellow-500" />
                                <span className={`font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'
                                    }`}>
                                    +{newspaperConfig.dailySource.pointsPerRead} Points
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a
                            href={newspaperConfig.dailySource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-8 py-4 rounded-xl font-bold text-center transition-all ${isDark
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                                } shadow-lg hover:shadow-xl`}
                        >
                            Open Newspaper
                        </a>

                        <button
                            onClick={handleMarkAsRead}
                            disabled={todayRead}
                            className={`px-8 py-4 rounded-xl font-bold transition-all ${todayRead
                                    ? isDark
                                        ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
                                        : 'bg-green-100 text-green-700 cursor-not-allowed'
                                    : 'bg-primary-yellow hover:bg-yellow-500 text-black shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {todayRead ? (
                                <span className="flex items-center justify-center gap-2">
                                    <CheckCircle size={20} />
                                    Marked as Read
                                </span>
                            ) : (
                                'Mark as Read'
                            )}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Badges Section */}
            <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    <Award size={28} className="text-primary-yellow" />
                    Achievements & Badges
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {badges.map((badge) => {
                        const isUnlocked = userProgress.unlockedBadges.includes(badge.id);
                        const progress = getBadgeProgress(badge);
                        const tierStyle = tierConfig[badge.tier];

                        return (
                            <motion.div
                                key={badge.id}
                                whileHover={{ scale: isUnlocked ? 1.05 : 1.02 }}
                                className={`relative rounded-2xl p-6 border-2 transition-all ${isUnlocked
                                        ? `bg-gradient-to-br ${tierStyle.color} ${tierStyle.borderColor} shadow-lg ${tierStyle.glowColor}`
                                        : isDark
                                            ? 'bg-dark-card border-dark-border opacity-60'
                                            : 'bg-gray-50 border-gray-200 opacity-60'
                                    }`}
                            >
                                {/* Lock overlay for locked badges */}
                                {!isUnlocked && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl backdrop-blur-sm">
                                        <Lock size={32} className="text-white" />
                                    </div>
                                )}

                                <div className="text-center">
                                    <div className="text-5xl mb-3">{badge.image}</div>
                                    <h4 className={`font-bold mb-1 ${isUnlocked ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {badge.name}
                                    </h4>
                                    <p className={`text-xs mb-3 ${isUnlocked ? 'text-white/80' : isDark ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                        {badge.description}
                                    </p>

                                    {!isUnlocked && (
                                        <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-gray-300'
                                            }`}>
                                            <div
                                                className={`h-full bg-gradient-to-r ${tierStyle.color} transition-all duration-500`}
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    )}

                                    {isUnlocked && (
                                        <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                                            <Unlock size={12} />
                                            Unlocked
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Celebration Modal */}
            <AnimatePresence>
                {showCelebration && newBadges.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ type: 'spring', damping: 15 }}
                            className={`max-w-md w-full mx-4 rounded-3xl p-12 text-center ${isDark ? 'bg-dark-card border-2 border-primary-yellow' : 'bg-white border-2 border-primary-yellow'
                                }`}
                        >
                            <div className="text-6xl mb-6">🎉</div>
                            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                New Badge Unlocked!
                            </h2>
                            {newBadges.map(badge => (
                                <div key={badge.id} className="mb-4">
                                    <div className="text-6xl mb-2">{badge.image}</div>
                                    <div className={`text-xl font-bold ${isDark ? 'text-primary-yellow' : 'text-yellow-600'
                                        }`}>
                                        {badge.name}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NewspaperSection;
