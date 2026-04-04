import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useSession } from 'next-auth/react';
import { useProgress } from '../../context/ProgressContext';
import { useStreak } from '../../context/StreakContext';
import api from '../../utils/api';
import { Trophy, Medal } from 'lucide-react';

const Leaderboard = () => {
    const { user: authUser } = useAuth();
    const { data: session } = useSession();
    const user = session?.user || authUser;
    const { progress } = useProgress();
    const { currentStreak } = useStreak();
    const [globalUsers, setGlobalUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchLeaderboard = async () => {
        try {
            const response = await api.get('/users/leaderboard');
            if (Array.isArray(response.data)) {
                setGlobalUsers(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch leaderboard:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial Fetch & LIVE Polling Hook
    useEffect(() => {
        fetchLeaderboard();
        
        // Poll for live leaderboard updates every 15 seconds
        const interval = setInterval(() => {
            fetchLeaderboard();
        }, 15000);
        
        return () => clearInterval(interval);
    }, []);

    const userPoints = useMemo(() => {
        const taskPoints = (progress?.completedTasks?.length || 0) * 10;
        const streakBonus = currentStreak * 50;
        const caReadings = typeof window !== 'undefined' ? parseInt(localStorage.getItem('ca_readings_count') || '0', 10) : 0;
        const caPoints = caReadings * 50;
        return 100 + taskPoints + streakBonus + caPoints;
    }, [progress, currentStreak]);

    const userLevel = Math.floor(userPoints / 500) + 1;

    // Sync Local Session XP to Database
    useEffect(() => {
        if (!user || userPoints === 0) return;
        
        const syncPoints = async () => {
            try {
                await api.post('/users/update-points', { points: userPoints, level: userLevel });
            } catch (err) {
                console.error("Failed to sync points", err);
            }
        };
        
        // Debounce sync slightly to prevent spamming on rapid task completions
        const timeoutId = setTimeout(() => {
            syncPoints();
        }, 2000);
        
        return () => clearTimeout(timeoutId);
    }, [userPoints, userLevel, user]);

    // Dynamically build the list containing actual DB users + current logged-in session user stats. No simulated/mock data.
    const allUsers = useMemo(() => {
        const filteredGlobal = globalUsers.filter(u => u.id !== user?.id && u.email !== user?.email);
        
        let list = [...filteredGlobal];
        
        if (user) {
            const currentUser = {
                id: user.id || 'me',
                name: user.name || "Anonymous",
                // Use professional clean initials instead of 3D avatars
                image: user.image || `https://api.dicebear.com/7.x/initials/svg?seed=${user.name || 'A'}&backgroundColor=0284c7&textColor=ffffff`,
                points: Math.max(userPoints, user.points || 0),
                level: Math.max(userLevel, user.level || 1),
                isMe: true
            };
            list.push(currentUser);
        }

        list.sort((a, b) => (b.points || 0) - (a.points || 0));
        return list.map((u, index) => ({ ...u, rank: index + 1 }));
    }, [user, userPoints, userLevel, globalUsers]);

    return (
        <div className="pro-leaderboard-container">
            <div className="pro-leaderboard-header">
                <h1 className="pro-leaderboard-title">Global Rankings</h1>
                <p className="pro-leaderboard-subtitle">Real-time learning progress across the platform</p>
            </div>

            <div className="pro-leaderboard-content">
                {isLoading ? (
                    <div className="pro-loader-container">
                        <div className="pro-loader" />
                        <span>Syncing live data...</span>
                    </div>
                ) : (
                    <table className="pro-leaderboard-table">
                        <thead>
                            <tr>
                                <th className="pro-th rank-col">Rank</th>
                                <th className="pro-th">Learner</th>
                                <th className="pro-th text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.length > 0 ? allUsers.map((u) => (
                                <tr key={u.id} className={`pro-tr ${u.isMe ? 'is-me' : ''} rank-${u.rank}`}>
                                    <td className="pro-td rank-col">
                                        <div className="pro-rank">
                                            {u.rank === 1 ? (
                                                <Trophy size={18} fill="#ca8a04" color="#ca8a04" />
                                            ) : u.rank === 2 ? (
                                                <Medal size={18} fill="#94a3b8" color="#64748b" />
                                            ) : u.rank === 3 ? (
                                                <Medal size={18} fill="#b45309" color="#92400e" />
                                            ) : (
                                                u.rank
                                            )}
                                        </div>
                                    </td>
                                    <td className="pro-td">
                                        <div className="pro-user-info">
                                            {/* Standardized professional clean avatar, fallback if needed */}
                                            <img src={u.image || `https://api.dicebear.com/7.x/initials/svg?seed=${u.name || 'U'}&backgroundColor=e2e8f0&textColor=475569`} alt={u.name} className="pro-avatar" />
                                            <div>
                                                <div className="pro-name">
                                                    {u.name} 
                                                    {u.isMe && <span className="pro-badge-me">You</span>}
                                                </div>
                                                <div className="pro-level">Level {u.level}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pro-td text-right">
                                        <div className="pro-points">
                                            {u.points.toLocaleString()} XP
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="3" className="pro-empty">No learners found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;
