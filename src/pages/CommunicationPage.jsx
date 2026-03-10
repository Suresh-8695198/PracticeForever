import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { communicationData } from '../data/communicationData';
import NewspaperSection from '../components/newspaper/NewspaperSection';
import {
    MessageCircle,
    Youtube,
    CheckCircle2,
    Circle,
    ChevronDown,
    Award,
    ExternalLink,
    Calendar,
    BookOpen,
    Newspaper
} from 'lucide-react';

const CommunicationPage = () => {
    const { isDark } = useTheme();
    const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum' or 'newspaper'
    const [expandedWeeks, setExpandedWeeks] = useState({ 1: true });
    const [completedDays, setCompletedDays] = useState({});

    const toggleWeek = (weekId) => {
        setExpandedWeeks(prev => ({
            ...prev,
            [weekId]: !prev[weekId]
        }));
    };

    const toggleDayComplete = (dayId, e) => {
        e.stopPropagation();
        setCompletedDays(prev => ({
            ...prev,
            [dayId]: !prev[dayId]
        }));
    };

    const totalDays = communicationData.weeks.reduce((acc, week) => acc + week.days.length, 0);
    const completedCount = Object.values(completedDays).filter(Boolean).length;
    const progressPercentage = Math.round((completedCount / totalDays) * 100);

    return (
        <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDark ? 'bg-dark-950' : 'bg-gray-50'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="mb-12 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-primary-yellow/5 blur-[100px] rounded-full pointer-events-none" />
                    <div className={`inline-flex items-center justify-center p-3 rounded-2xl mb-6 ring-1 ring-primary-yellow/20 ${isDark ? 'bg-primary-yellow/10' : 'bg-primary-yellow/10'
                        }`}>
                        <MessageCircle size={32} className="text-primary-yellow" />
                    </div>
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Master English Communication
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        A structured journey from basics to fluency with gamified learning.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className={`flex gap-4 mb-8 p-2 rounded-2xl ${isDark ? 'bg-dark-card border border-dark-border' : 'bg-white border border-gray-200 shadow-md'
                    }`}>
                    <button
                        onClick={() => setActiveTab('curriculum')}
                        className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${activeTab === 'curriculum'
                                ? isDark
                                    ? 'bg-primary-yellow text-black shadow-lg'
                                    : 'bg-primary-yellow text-black shadow-lg'
                                : isDark
                                    ? 'text-gray-400 hover:text-white hover:bg-dark-bg'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        <BookOpen size={24} />
                        <span>Learning Curriculum</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('newspaper')}
                        className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${activeTab === 'newspaper'
                                ? isDark
                                    ? 'bg-primary-yellow text-black shadow-lg'
                                    : 'bg-primary-yellow text-black shadow-lg'
                                : isDark
                                    ? 'text-gray-400 hover:text-white hover:bg-dark-bg'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        <Newspaper size={24} />
                        <span>Daily Newspaper</span>
                    </button>
                </div>

                {/* Content based on active tab */}
                {activeTab === 'newspaper' ? (
                    <NewspaperSection />
                ) : (
                    <>
                        {/* Progress Card */}
                        <div className={`card mb-12 border-primary-yellow/10 relative overflow-hidden group hover:border-primary-yellow/30 transition-all ${isDark
                                ? 'bg-gradient-to-br from-dark-card to-dark-card/50'
                                : 'bg-white shadow-lg border-gray-200'
                            }`}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100" />

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="relative">
                                        <svg className="w-24 h-24 transform -rotate-90">
                                            <circle
                                                className={isDark ? 'text-dark-border' : 'text-gray-200'}
                                                strokeWidth="8"
                                                stroke="currentColor"
                                                fill="transparent"
                                                r="40"
                                                cx="48"
                                                cy="48"
                                            />
                                            <circle
                                                className="text-primary-yellow transition-all duration-1000 ease-out"
                                                strokeWidth="8"
                                                strokeDasharray={251.2}
                                                strokeDashoffset={251.2 - (251.2 * progressPercentage) / 100}
                                                strokeLinecap="round"
                                                stroke="currentColor"
                                                fill="transparent"
                                                r="40"
                                                cx="48"
                                                cy="48"
                                            />
                                        </svg>
                                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {progressPercentage}%
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                                            }`}>Your Journey</h3>
                                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                            {completedCount} of {totalDays} days completed
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className={`text-center px-6 py-3 rounded-xl border ${isDark
                                            ? 'bg-dark-bg/50 border-dark-border'
                                            : 'bg-gray-50 border-gray-200'
                                        }`}>
                                        <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                                            }`}>8</div>
                                        <div className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Weeks</div>
                                    </div>
                                    <div className={`text-center px-6 py-3 rounded-xl border ${isDark
                                            ? 'bg-dark-bg/50 border-dark-border'
                                            : 'bg-gray-50 border-gray-200'
                                        }`}>
                                        <div className="text-2xl font-bold text-primary-yellow mb-1">{56}</div>
                                        <div className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                                            }`}>Lessons</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Curriculum weeks */}
                        <div className="space-y-6">
                            {communicationData.weeks.map((week) => {
                                const isExpanded = expandedWeeks[week.id];
                                const weekCompletedCount = week.days.filter(d => completedDays[d.id]).length;
                                const isWeekComplete = weekCompletedCount === week.days.length;

                                return (
                                    <div
                                        key={week.id}
                                        className={`card border transition-all duration-300 ${isExpanded
                                                ? isDark ? 'border-primary-yellow/30 bg-dark-card' : 'border-primary-yellow/30 bg-white ring-1 ring-primary-yellow/30'
                                                : isDark ? 'border-dark-border bg-dark-card/50' : 'border-gray-200 bg-white/60 hover:bg-white'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleWeek(week.id)}
                                            className="w-full flex items-center justify-between p-2 group"
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isWeekComplete
                                                        ? 'bg-accent-success/20 text-accent-success'
                                                        : isDark
                                                            ? 'bg-dark-bg text-primary-yellow group-hover:bg-primary-yellow group-hover:text-black'
                                                            : 'bg-gray-100 text-primary-yellow group-hover:bg-primary-yellow group-hover:text-black'
                                                    }`}>
                                                    {isWeekComplete ? <Award size={24} /> : <Calendar size={24} />}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h3 className={`text-lg font-bold transition-colors ${isDark
                                                                ? 'text-white group-hover:text-primary-yellow'
                                                                : 'text-gray-900 group-hover:text-primary-yellow-dark'
                                                            }`}>
                                                            {week.title}
                                                        </h3>
                                                        <span className={`text-xs font-mono py-0.5 px-2 rounded border ${isDark
                                                                ? 'bg-dark-bg border-dark-border text-gray-400'
                                                                : 'bg-gray-100 border-gray-200 text-gray-500'
                                                            }`}>
                                                            Week {week.id}
                                                        </span>
                                                    </div>
                                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'
                                                        }`}>
                                                        {week.subtitle} • <span className={
                                                            isDark ? 'text-gray-500' : 'text-gray-400'
                                                        }>{week.focus}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right hidden sm:block">
                                                    <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'
                                                        }`}>
                                                        {weekCompletedCount}/{week.days.length} Done
                                                    </div>
                                                    <div className={`w-24 h-1.5 rounded-full mt-1 overflow-hidden ${isDark ? 'bg-dark-bg' : 'bg-gray-200'
                                                        }`}>
                                                        <div
                                                            className="h-full bg-primary-yellow transition-all duration-500"
                                                            style={{ width: `${(weekCompletedCount / week.days.length) * 100}%` }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={`p-2 rounded-full transition-transform duration-300 ${isExpanded
                                                        ? 'rotate-180 ' + (isDark ? 'bg-dark-bg' : 'bg-gray-100')
                                                        : ''
                                                    }`}>
                                                    <ChevronDown size={20} className={
                                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                                    } />
                                                </div>
                                            </div>
                                        </button>

                                        {/* Days Grid */}
                                        <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                                            }`}>
                                            <div className="overflow-hidden">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {week.days.map((day) => {
                                                        const isCompleted = completedDays[day.id];

                                                        return (
                                                            <div
                                                                key={day.id}
                                                                className={`relative flex flex-col p-5 rounded-xl border transition-all duration-200 group hover:-translate-y-1 ${isCompleted
                                                                        ? 'bg-accent-success/5 border-accent-success/20'
                                                                        : isDark
                                                                            ? 'bg-dark-bg border-dark-border hover:border-primary-yellow/30'
                                                                            : 'bg-gray-50 border-gray-200 hover:border-primary-yellow/50 hover:bg-white hover:shadow-md'
                                                                    }`}
                                                            >
                                                                <div className="flex items-start justify-between mb-3">
                                                                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${isCompleted
                                                                            ? 'bg-accent-success/20 text-accent-success'
                                                                            : isDark
                                                                                ? 'bg-dark-card text-primary-yellow'
                                                                                : 'bg-white text-primary-yellow border border-gray-200'
                                                                        }`}>
                                                                        {day.day}
                                                                    </span>
                                                                    <button
                                                                        onClick={(e) => toggleDayComplete(day.id, e)}
                                                                        className={`transition-all duration-200 ${isCompleted
                                                                                ? 'text-accent-success scale-110'
                                                                                : isDark
                                                                                    ? 'text-gray-600 hover:text-gray-400'
                                                                                    : 'text-gray-400 hover:text-gray-600'
                                                                            }`}
                                                                    >
                                                                        {isCompleted ? <CheckCircle2 size={24} className="fill-current" /> : <Circle size={24} />}
                                                                    </button>
                                                                </div>

                                                                <h4 className={`text-lg font-bold mb-2 ${isCompleted
                                                                        ? 'text-gray-400 line-through'
                                                                        : isDark ? 'text-white' : 'text-gray-900'
                                                                    }`}>
                                                                    {day.topic}
                                                                </h4>

                                                                <p className={`text-sm mb-4 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'
                                                                    }`}>
                                                                    {day.description}
                                                                </p>

                                                                {day.link && (
                                                                    <a
                                                                        href={day.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className={`mt-auto flex items-center justify-between p-3 rounded-lg border group/link transition-all ${isDark
                                                                                ? 'bg-dark-card border-dark-border hover:border-red-500/50 hover:bg-red-500/5'
                                                                                : 'bg-white border-gray-200 hover:border-red-500/50 hover:bg-red-50'
                                                                            }`}
                                                                    >
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="p-1.5 rounded-full bg-red-500/10 text-red-500 group-hover/link:bg-red-500 group-hover/link:text-white transition-colors">
                                                                                <Youtube size={16} />
                                                                            </div>
                                                                            <span className={`text-sm font-medium transition-colors ${isDark
                                                                                    ? 'text-gray-300 group-hover/link:text-white'
                                                                                    : 'text-gray-700 group-hover/link:text-gray-900'
                                                                                }`}>
                                                                                {day.channel}
                                                                            </span>
                                                                        </div>
                                                                        <ExternalLink size={16} className={`group-hover/link:text-red-500 ${isDark ? 'text-gray-600' : 'text-gray-400'
                                                                            }`} />
                                                                    </a>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CommunicationPage;
