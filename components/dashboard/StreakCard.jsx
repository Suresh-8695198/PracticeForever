import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useStreak } from '../../context/StreakContext';

const StreakCard = () => {
    const { currentStreak, bestStreak } = useStreak();

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-dark-text">Daily Streak</h3>
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
                    <Flame className="text-primary-yellow" size={24} />
                </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <motion.div
                    className="text-center p-4 bg-dark-card-hover rounded-lg border border-primary-yellow/20"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(255, 193, 7, 0.5)' }}
                >
                    <motion.div
                        className="text-3xl font-bold text-primary-yellow mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.3 }}
                    >
                        {currentStreak}
                    </motion.div>
                    <div className="text-sm text-dark-text-secondary">Current Streak</div>
                </motion.div>

                <motion.div
                    className="text-center p-4 bg-dark-card-hover rounded-lg border border-accent-success/20"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(76, 175, 80, 0.5)' }}
                >
                    <motion.div
                        className="text-3xl font-bold text-accent-success mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.4 }}
                    >
                        {bestStreak}
                    </motion.div>
                    <div className="text-sm text-dark-text-secondary">Best Streak</div>
                </motion.div>
            </div>

            <motion.div
                className="mt-4 p-3 bg-primary-yellow/10 rounded-lg border border-primary-yellow/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p className="text-sm text-dark-text text-center">
                    🎯 Complete at least 1 task daily to maintain your streak!
                </p>
            </motion.div>
        </motion.div>
    );
};

export default StreakCard;
