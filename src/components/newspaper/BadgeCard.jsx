import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Trophy, Star, Sparkles, Crown, X } from 'lucide-react';

const BadgeCard = ({ badge, unlocked, onClick }) => {
    const { isDark } = useTheme();

    const rarityColors = {
        common: 'from-gray-400 to-gray-600',
        rare: 'from-blue-500 to-purple-600',
        epic: 'from-purple-500 to-pink-600',
        legendary: 'from-yellow-400 via-orange-500 to-red-600'
    };

    return (
        <motion.div
            whileHover={{ scale: unlocked ? 1.05 : 1.02, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(badge)}
            className={`relative cursor-pointer group ${unlocked ? '' : 'opacity-50 grayscale'
                }`}
        >
            {/* Hexagon Badge */}
            <div className={`relative w-24 h-24 mx-auto mb-3 ${unlocked ? 'animate-pulse-slow' : ''
                }`}>
                {/* Glow effect for unlocked badges */}
                {unlocked && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} blur-xl opacity-50 rounded-full`} />
                )}

                {/* Hexagon shape */}
                <div className={`relative w-full h-full flex items-center justify-center`}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <linearGradient id={`gradient-${badge.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" className={unlocked ? 'text-yellow-400' : 'text-gray-400'} stopColor="currentColor" />
                                <stop offset="100%" className={unlocked ? 'text-orange-500' : 'text-gray-600'} stopColor="currentColor" />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="50 1 95 25 95 75 50 99 5 75 5 25"
                            fill={`url(#gradient-${badge.id})`}
                            stroke={isDark ? '#fff' : '#000'}
                            strokeWidth="2"
                            className="drop-shadow-lg"
                        />
                    </svg>

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-3xl">
                        {unlocked ? badge.icon : '🔒'}
                    </div>
                </div>

                {/* Rarity indicator */}
                {unlocked && (
                    <div className="absolute -top-2 -right-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${rarityColors[badge.rarity]} flex items-center justify-center`}>
                            {badge.rarity === 'legendary' && <Crown size={14} className="text-white" />}
                            {badge.rarity === 'epic' && <Sparkles size={14} className="text-white" />}
                            {badge.rarity === 'rare' && <Star size={14} className="text-white" />}
                        </div>
                    </div>
                )}
            </div>

            {/* Badge name */}
            <h4 className={`text-center text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {badge.name}
            </h4>

            {/* Badge description */}
            <p className={`text-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                {unlocked ? badge.description : '???'}
            </p>
        </motion.div>
    );
};

const BadgeModal = ({ badge, onClose }) => {
    const { isDark } = useTheme();

    if (!badge) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: 'spring', damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`relative max-w-md w-full rounded-3xl p-8 ${isDark
                            ? 'bg-gradient-to-br from-dark-card to-dark-bg border border-dark-border'
                            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                        } shadow-2xl`}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isDark
                                ? 'hover:bg-white/10 text-gray-400 hover:text-white'
                                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        <X size={20} />
                    </button>

                    {/* Confetti background */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                        <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-10`} />
                    </div>

                    {/* Content */}
                    <div className="relative text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', damping: 10 }}
                            className="mb-6"
                        >
                            <div className="text-8xl mb-4">{badge.icon}</div>
                        </motion.div>

                        <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            {badge.name}
                        </h2>

                        <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            {badge.description}
                        </p>

                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${isDark
                                ? 'bg-white/10 text-gray-300'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                            {badge.requirement}
                        </div>

                        {badge.unlocked && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6"
                            >
                                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold ${isDark
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                        : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                                    } shadow-lg`}>
                                    <Trophy size={20} />
                                    <span>Unlocked!</span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export { BadgeCard, BadgeModal };
