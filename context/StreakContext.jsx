import { createContext, useContext, useState, useEffect } from 'react';

const StreakContext = createContext();

export const useStreak = () => {
    const context = useContext(StreakContext);
    if (!context) {
        throw new Error('useStreak must be used within StreakProvider');
    }
    return context;
};

export const StreakProvider = ({ children }) => {
    const [streakData, setStreakData] = useState({
        currentStreak: 0,
        bestStreak: 0,
        lastActivityDate: null,
        activityCalendar: {}
    });

    useEffect(() => {
        const stored = localStorage.getItem('streakData');
        if (stored) {
            try {
                setStreakData(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse streak data", e);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('streakData', JSON.stringify(streakData));
    }, [streakData]);

    const checkAndUpdateStreak = () => {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = streakData.lastActivityDate;

        if (!lastDate) {
            // First activity ever
            setStreakData(prev => ({
                ...prev,
                currentStreak: 1,
                bestStreak: 1,
                lastActivityDate: today,
                activityCalendar: { ...prev.activityCalendar, [today]: true }
            }));
            return;
        }

        if (lastDate === today) {
            // Already logged today
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastDate === yesterdayStr) {
            // Continuing streak
            const newStreak = streakData.currentStreak + 1;
            setStreakData(prev => ({
                ...prev,
                currentStreak: newStreak,
                bestStreak: Math.max(prev.bestStreak, newStreak),
                lastActivityDate: today,
                activityCalendar: { ...prev.activityCalendar, [today]: true }
            }));
        } else {
            // Streak broken
            setStreakData(prev => ({
                ...prev,
                currentStreak: 1,
                lastActivityDate: today,
                activityCalendar: { ...prev.activityCalendar, [today]: true }
            }));
        }
    };

    const getActivityForMonth = (year, month) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const activities = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            activities.push({
                date: dateStr,
                active: !!streakData.activityCalendar[dateStr]
            });
        }

        return activities;
    };

    const value = {
        currentStreak: streakData.currentStreak,
        bestStreak: streakData.bestStreak,
        lastActivityDate: streakData.lastActivityDate,
        checkAndUpdateStreak,
        getActivityForMonth,
        activityCalendar: streakData.activityCalendar
    };

    return <StreakContext.Provider value={value}>{children}</StreakContext.Provider>;
};
