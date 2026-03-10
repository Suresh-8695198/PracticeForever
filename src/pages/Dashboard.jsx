import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { useStreak } from '../context/StreakContext';
import ProgressRing from '../components/common/ProgressRing';
import StreakCard from '../components/dashboard/StreakCard';
import {
    Target,
    TrendingUp,
    Award,
    Calendar,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();
    const { getCareerProgress, progress } = useProgress();
    const { currentStreak, getActivityForMonth } = useStreak();

    const careerProgress = getCareerProgress();
    const currentDate = new Date();
    const activities = getActivityForMonth(currentDate.getFullYear(), currentDate.getMonth());

    // Get last 7 days for mini calendar
    const last7Days = activities.slice(-7);

    return (
        <div className="min-h-screen bg-dark-950 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Welcome Header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        Welcome back, {user?.name}! 👋
                    </h1>
                    <p className="text-gray-400">
                        {currentStreak > 0
                            ? `You're on a ${currentStreak} day streak! Keep it up! 🔥`
                            : "Start your learning journey today!"}
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Overall Progress */}
                    <div className="lg:col-span-2 card">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white">Overall Progress</h2>
                            {careerProgress && (
                                <Link
                                    to="/career"
                                    className="text-accent-orange hover:text-accent-orange/80 text-sm font-medium flex items-center gap-1"
                                >
                                    View Details
                                    <ArrowRight size={16} />
                                </Link>
                            )}
                        </div>

                        {careerProgress ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Progress Ring */}
                                <div className="flex flex-col items-center justify-center">
                                    <ProgressRing
                                        percentage={careerProgress.percentage}
                                        size={160}
                                        strokeWidth={12}
                                        label="Complete"
                                    />
                                    <h3 className="mt-4 text-lg font-semibold text-white">
                                        {careerProgress.career.title}
                                    </h3>
                                </div>

                                {/* Stats */}
                                <div className="space-y-4">
                                    <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            {careerProgress.completedCount} / {careerProgress.totalTasks}
                                        </div>
                                        <div className="text-sm text-gray-400">Tasks Completed</div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="p-3 bg-dark-800/50 rounded-lg border border-accent-green/20 text-center">
                                            <div className="text-lg font-bold text-accent-green">
                                                {careerProgress.easyCompleted}
                                            </div>
                                            <div className="text-xs text-gray-400">Easy</div>
                                        </div>
                                        <div className="p-3 bg-dark-800/50 rounded-lg border border-accent-yellow/20 text-center">
                                            <div className="text-lg font-bold text-accent-yellow">
                                                {careerProgress.mediumCompleted}
                                            </div>
                                            <div className="text-xs text-gray-400">Medium</div>
                                        </div>
                                        <div className="p-3 bg-dark-800/50 rounded-lg border border-red-500/20 text-center">
                                            <div className="text-lg font-bold text-red-400">
                                                {careerProgress.hardCompleted}
                                            </div>
                                            <div className="text-xs text-gray-400">Hard</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <Target className="mx-auto mb-4 text-gray-600" size={48} />
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    No Career Path Selected
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Choose a career path to start your learning journey
                                </p>
                                <Link to="/career" className="btn-primary inline-flex items-center gap-2">
                                    <Sparkles size={18} />
                                    Choose Career Path
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Streak Card */}
                    <div>
                        <StreakCard />
                    </div>
                </div>

                {/* Activity Calendar */}
                <div className="card mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Calendar size={24} />
                            This Week's Activity
                        </h2>
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                        {last7Days.map((day, idx) => {
                            const date = new Date(day.date);
                            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                            const dayNum = date.getDate();

                            return (
                                <div key={idx} className="text-center">
                                    <div className="text-xs text-gray-500 mb-2">{dayName}</div>
                                    <div
                                        className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${day.active
                                                ? 'bg-accent-orange text-white shadow-glow'
                                                : 'bg-dark-800 text-gray-600'
                                            }`}
                                    >
                                        {dayNum}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/career" className="card-interactive group">
                        <Target className="text-accent-orange mb-3 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="font-semibold text-white mb-1">Career Path</h3>
                        <p className="text-sm text-gray-400">Continue learning</p>
                    </Link>

                    <Link to="/progress" className="card-interactive group">
                        <TrendingUp className="text-accent-green mb-3 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="font-semibold text-white mb-1">Track Progress</h3>
                        <p className="text-sm text-gray-400">View analytics</p>
                    </Link>

                    <Link to="/companies" className="card-interactive group">
                        <Award className="text-accent-blue mb-3 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="font-semibold text-white mb-1">Companies</h3>
                        <p className="text-sm text-gray-400">Prepare for interviews</p>
                    </Link>

                    <Link to="/communication" className="card-interactive group">
                        <Sparkles className="text-accent-purple mb-3 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="font-semibold text-white mb-1">Communication</h3>
                        <p className="text-sm text-gray-400">Practice speaking</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
