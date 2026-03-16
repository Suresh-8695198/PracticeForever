import React, { useState, useEffect, useRef } from 'react';
import { User, Edit2, Share2, Activity, Code, Trophy, ChevronDown, X, Download, Image as ImageIcon, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import api from '../utils/api';

const ProfilePage = () => {
    const [selectedYear, setSelectedYear] = useState('2026');
    const [platform, setPlatform] = useState('PracticeForever');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Modal States
    const [showEditModal, setShowEditModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [shareImage, setShareImage] = useState(null);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const [showUsername, setShowUsername] = useState(true);

    // Edit Form State
    const [editForm, setEditForm] = useState({ name: '', title: '', skills: '' });

    // Heatmap State
    const [hoveredDay, setHoveredDay] = useState(null);

    const dashboardRef = useRef(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await api.get('/users/profile');
                setUserData(data);
                setEditForm({
                    name: data.name,
                    title: data.title,
                    skills: data.skills ? data.skills.join(', ') : ''
                });
            } catch (error) {
                console.log("Using fallback mock data (Backend might be offline or no token)", error);
                // Fallback Mock Data
                setUserData({
                    name: 'Suresh G',
                    title: 'Student',
                    progress: {
                        dsa: {
                            total: 998,
                            solved: 67,
                            easy: { solved: 39, total: 306 },
                            medium: { solved: 24, total: 438 },
                            hard: { solved: 4, total: 254 }
                        },
                        sheet: 'No sheet progress available'
                    },
                    submissions: [{ date: '2026-01-04', count: 5 }]
                });
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleShareProfile = async () => {
        setIsGeneratingImage(true);
        setShowShareModal(true);

        // Wait for modal to open slightly
        setTimeout(async () => {
            if (dashboardRef.current) {
                try {
                    const canvas = await html2canvas(dashboardRef.current, {
                        backgroundColor: '#0a0a0a', // Match bg-dark-950
                        scale: 1,
                    });
                    setShareImage(canvas.toDataURL('image/png'));
                } catch (err) {
                    console.error("Failed to capture profile", err);
                } finally {
                    setIsGeneratingImage(false);
                }
            }
        }, 500);
    };

    const downloadImage = () => {
        if (shareImage) {
            const link = document.createElement('a');
            link.href = shareImage;
            link.download = 'practice-forever-profile.png';
            link.click();
        }
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        // Here you would optimally make an API call to update the user
        // For now, we update local state
        setUserData(prev => ({
            ...prev,
            name: editForm.name,
            title: editForm.title,
            skills: editForm.skills.split(',').map(s => s.trim())
        }));
        setShowEditModal(false);
        // api.put('/users/profile', { ...editForm }); // Example backend call
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-dark-950 flex items-center justify-center">
                <div className="spinner w-12 h-12 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!userData) return null;

    // Heatmap Logic
    // const [hoveredDay, setHoveredDay] = useState(null); // Moved to top

    const getYearDates = (year) => {
        const dates = [];
        const startDate = new Date(`${year}-01-01`);
        const endDate = new Date(`${year}-12-31`);

        // Adjust start to the previous Monday to align grid
        const dayOfWeek = startDate.getDay(); // 0 = Sun, 1 = Mon...
        // If we want Monday to be the first row (or start of week), we might need logic.
        // Standard contribution graphs often start col 1 with Jan 1.
        // Let's create a flat array of 365 days and let CSS grid handle the flow OR build week columns.
        // Building week columns is safer for "Month" alignment.

        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const yearDates = getYearDates(selectedYear);
    const submissionsMap = new Map(userData?.submissions?.map(s => [s.date, s.count]) || []);

    const getSubmissionCount = (date) => {
        const dateStr = date.toISOString().split('T')[0];
        return submissionsMap.get(dateStr) || 0;
    };

    // Calculate Stats
    const totalSubmissions = Array.from(submissionsMap.values()).reduce((a, b) => a + b, 0);
    const activeDays = submissionsMap.size;

    let currentStreak = 0;
    let maxStreak = 0;
    let lastDateHadSubmission = null;

    // Sort submissions by date to calculate streak correctly
    const sortedSubmissionDates = Array.from(submissionsMap.keys()).sort();

    for (const dateStr of sortedSubmissionDates) {
        if (submissionsMap.get(dateStr) > 0) {
            const currentDate = new Date(dateStr);
            if (lastDateHadSubmission) {
                const diffTime = Math.abs(currentDate - lastDateHadSubmission);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays === 1) {
                    currentStreak++;
                } else if (diffDays > 1) {
                    currentStreak = 1; // Streak broken, start new
                }
            } else {
                currentStreak = 1;
            }
            lastDateHadSubmission = currentDate;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0; // No submission, streak broken
        }
    }

    // Render Grid
    // We want 53 columns (weeks) x 7 rows (days).
    // Week 1 starts at array index that matches day of week of Jan 1.
    // Actually easier: simply map 371 cells (53*7) and fill with valid dates.

    const generateGrid = () => {
        const grid = [];
        const startDate = new Date(`${selectedYear}-01-01`);
        // Find the Monday before or on Jan 1st to start the grid cleanly
        const offset = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1; // Mon=0, Sun=6
        // Actually typical simple view: just list days. CSS Grid `grid-flow-col` takes care of weeks if we have 7 rows.
        // Jan 1 2026 is a Thursday.

        // To match the image perfectly where months align:
        // We'll stick to the "grid-flow-col" approach but ensure we pad the start so Jan 1 is in the correct row.

        // 0 = Sun, 1 = Mon ... 6 = Sat.
        // We want 7 rows. Mon (1) to Sun (0/7).
        // Let's assume Row 1 = Mon.

        const firstDay = new Date(`${selectedYear}-01-01`);
        // We want to pad until we hit the correct weekday for Jan 1.
        // JS getDay(): Sun=0, Mon=1...Sat=6.
        // If we want Mon on top, Sun on bottom.
        // Map JS Day to Row Index (0-6):
        // Mon(1)->0, Tue(2)->1 ... Sat(6)->5, Sun(0)->6.
        const getRowIndex = (d) => {
            const day = d.getDay();
            return day === 0 ? 6 : day - 1;
        };

        const startPadding = getRowIndex(firstDay);

        const allCells = [];
        // Add padding nulls
        for (let i = 0; i < startPadding; i++) allCells.push(null);
        // Add actual dates
        yearDates.forEach(d => allCells.push(d));

        return allCells;
    };

    const gridCells = generateGrid();

    return (
        <div className="min-h-screen bg-dark-950 pt-28 pb-8 relative">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
                    {/* Sidebar Profile Card */}
                    <div className="bg-dark-card items-start h-auto lg:h-[calc(100vh-140px)] relative lg:sticky lg:top-28 rounded-2xl border border-dark-border p-6 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center border border-dark-border text-gray-400">
                                <User size={32} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-accent-orange">{userData.name}</h2>
                                <p className="text-sm text-gray-500">{userData.title}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 w-full mt-2">
                            <button
                                onClick={() => setShowEditModal(true)}
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-gray-400 rounded-lg text-sm transition-colors border border-dark-border"
                            >
                                <Edit2 size={16} />
                                Edit Profile
                            </button>
                            <button
                                onClick={handleShareProfile}
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-gray-400 rounded-lg text-sm transition-colors border border-dark-border"
                            >
                                <Share2 size={16} />
                                Share Profile
                            </button>
                        </div>
                    </div>

                    {/* Main Content (Ref for Capture) */}
                    <div ref={dashboardRef} className="space-y-6">
                        {/* Top Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* DSA Progress */}
                            <div className="bg-dark-card rounded-2xl border border-dark-border p-6 relative overflow-hidden">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-semibold text-white">DSA Progress</h3>
                                    <div className="flex bg-dark-800 rounded-lg p-1">
                                        <button
                                            onClick={() => setPlatform('PracticeForever')}
                                            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${platform === 'PracticeForever' ? 'bg-dark-700 text-white' : 'text-gray-500 hover:text-white'}`}
                                        >
                                            PracticeForever
                                        </button>
                                        <button
                                            onClick={() => setPlatform('LeetCode')}
                                            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${platform === 'LeetCode' ? 'bg-dark-700 text-white' : 'text-gray-500 hover:text-white'}`}
                                        >
                                            LeetCode
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center mb-8 relative">
                                    <div className="relative w-32 h-32">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="64" cy="64" r="56" stroke="#1e1e1e" strokeWidth="8" fill="none" />
                                            <circle cx="64" cy="64" r="56" stroke="#22c55e" strokeWidth="8" fill="none"
                                                strokeDasharray="351.86" strokeDashoffset={351.86 * (1 - (userData.progress.dsa.easy.solved / userData.progress.dsa.total))} strokeLinecap="round" />
                                            <circle cx="64" cy="64" r="56" stroke="#eab308" strokeWidth="8" fill="none"
                                                strokeDasharray="351.86" strokeDashoffset={351.86 * (1 - (userData.progress.dsa.medium.solved / userData.progress.dsa.total))} className="transform origin-center rotate-[144deg]" strokeLinecap="round" />
                                            <circle cx="64" cy="64" r="56" stroke="#ef4444" strokeWidth="8" fill="none"
                                                strokeDasharray="351.86" strokeDashoffset={351.86 * (1 - (userData.progress.dsa.hard.solved / userData.progress.dsa.total))} className="transform origin-center rotate-[216deg]" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <div className="text-2xl font-bold text-white">{userData.progress.dsa.solved}</div>
                                            <div className="text-xs text-gray-500">{userData.progress.dsa.total}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-xs text-gray-400 mt-auto">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-accent-green"></div>
                                        <span>Easy {userData.progress.dsa.easy.solved}/{userData.progress.dsa.easy.total}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-accent-yellow"></div>
                                        <span>Medium {userData.progress.dsa.medium.solved}/{userData.progress.dsa.medium.total}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <span>Hard {userData.progress.dsa.hard.solved}/{userData.progress.dsa.hard.total}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Sheet Progress */}
                            <div className="bg-dark-card rounded-2xl border border-dark-border p-6 flex flex-col">
                                <h3 className="font-semibold text-white mb-6">Sheet Progress</h3>
                                <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                                    {userData.progress.sheet}
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="bg-dark-card rounded-2xl border border-dark-border p-6 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-semibold text-white">Skills</h3>
                                    <button onClick={() => setShowEditModal(true)} className="text-xs text-accent-orange hover:text-white transition-colors">Edit</button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {userData.skills && userData.skills.length > 0 ? (
                                        userData.skills.map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-dark-800 text-gray-300 text-xs rounded-lg border border-dark-border">
                                                {skill}
                                            </span>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 text-sm">Add skills via Edit Profile</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submission Heatmap */}
                        <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold text-white">{totalSubmissions} submissions in the year</span>
                                    <button className="flex items-center gap-2 px-3 py-1 bg-dark-800 rounded-lg text-sm text-white border border-dark-border">
                                        {selectedYear} <ChevronDown size={14} />
                                    </button>
                                </div>
                                <div className="flex bg-dark-800 rounded-lg p-1">
                                    <button className="px-3 py-1 rounded-md text-xs font-medium bg-dark-700 text-white">PracticeForever</button>
                                    <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 hover:text-white">LeetCode</button>
                                </div>
                            </div>

                            {/* Heatmap Grid */}
                            <div className="w-full overflow-x-auto pb-4">
                                <div className="min-w-[800px] flex gap-1">
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex text-xs text-gray-500 mb-2 pl-8 justify-between w-full">
                                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                                        </div>
                                        <div className="flex gap-1 h-32">
                                            <div className="flex flex-col justify-between text-[10px] text-gray-500 mr-2 py-1">
                                                <span>Mon</span>
                                                <span>Wed</span>
                                                <span>Fri</span>
                                            </div>

                                            {/* Dynamic Grid */}
                                            <div className="flex-1 grid grid-flow-col grid-rows-7 gap-1 relative">
                                                {gridCells.map((date, i) => {
                                                    if (!date) return <div key={i} className="w-3 h-3"></div>;

                                                    const count = getSubmissionCount(date);
                                                    const isActive = count > 0;
                                                    const dateStr = date.toLocaleDateString('en-GB').split('/').join('-'); // DD-MM-YYYY format mostly

                                                    return (
                                                        <div
                                                            key={i}
                                                            onMouseEnter={() => setHoveredDay({ date: dateStr, count, x: i })} // Store simplistic x to help but tooltip needs absolute pos
                                                            onMouseLeave={() => setHoveredDay(null)}
                                                            className={`w-3 h-3 rounded-sm ${isActive ? 'bg-yellow-500' : 'bg-dark-800/50 hover:bg-dark-700'} cursor-pointer relative group`}
                                                        >
                                                            {/* Tooltip specific to this node (simplest way to position) */}
                                                            <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20">
                                                                <div className="bg-dark-800 text-white text-xs rounded-lg py-1 px-3 whitespace-nowrap border border-dark-border shadow-xl">
                                                                    <div className="font-semibold text-center">{dateStr}</div>
                                                                    <div className="text-gray-400 text-center">Total: {count}</div>
                                                                </div>
                                                                {/* Triangle */}
                                                                <div className="w-2 h-2 bg-dark-800 border-r border-b border-dark-border transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs text-gray-500 mt-4 pt-4 border-t border-dark-border">
                                <div className="flex gap-6">
                                    <span>Active Days - {activeDays}</span>
                                    <span>Max Streak - {maxStreak}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm bg-dark-800/50"></div>
                                        <span>Not visited yet</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
                                        <span>Achieved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bottom Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-dark-card rounded-2xl border border-dark-border p-6 min-h-[200px] flex flex-col">
                                <h3 className="font-semibold text-white mb-4">Coding Profiles</h3>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="p-4 bg-dark-800 rounded-full text-gray-600">
                                        <Code size={24} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-dark-card rounded-2xl border border-dark-border p-6 min-h-[200px] flex flex-col">
                                <h3 className="font-semibold text-white mb-4">Contests</h3>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="p-4 bg-dark-800 rounded-full text-gray-600">
                                        <Trophy size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            <AnimatePresence>
                {showEditModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="bg-dark-card border border-dark-border rounded-2xl p-6 w-full max-w-md shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Edit Profile</h3>
                                <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>
                            <form onSubmit={handleUpdateProfile} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={editForm.name}
                                        onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                                        className="w-full bg-dark-800 border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-orange"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={editForm.title}
                                        onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                                        className="w-full bg-dark-800 border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-orange"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Skills (comma separated)</label>
                                    <textarea
                                        value={editForm.skills}
                                        onChange={e => setEditForm({ ...editForm, skills: e.target.value })}
                                        className="w-full bg-dark-800 border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-orange min-h-[100px]"
                                    />
                                </div>
                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowEditModal(false)}
                                        className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-800 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-accent-orange text-white rounded-lg font-medium hover:bg-accent-orange/90 transition-colors"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Share Profile Modal */}
            <AnimatePresence>
                {showShareModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="bg-dark-950 border border-white/10 rounded-2xl p-6 w-full max-w-2xl shadow-2xl relative"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Share your profile</h3>
                                <button onClick={() => setShowShareModal(false)} className="text-gray-400 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Toolbar */}
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 p-4 bg-dark-900 rounded-xl border border-white/5">
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange text-white rounded-lg text-sm font-medium">
                                        <ImageIcon size={18} />
                                        Image
                                    </button>
                                    <button
                                        onClick={downloadImage}
                                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                        title="Download Image"
                                    >
                                        <Download size={20} />
                                    </button>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-400">Show username</span>
                                    <button
                                        onClick={() => setShowUsername(!showUsername)}
                                        className={`w-12 h-6 rounded-full p-1 transition-colors ${showUsername ? 'bg-accent-green' : 'bg-gray-700'}`}
                                    >
                                        <motion.div
                                            animate={{ x: showUsername ? 24 : 0 }}
                                            className="w-4 h-4 bg-white rounded-full shadow-sm"
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Preview Area */}
                            <div className="bg-black/50 rounded-xl p-4 border border-white/5 overflow-hidden flex items-center justify-center min-h-[300px]">
                                {isGeneratingImage ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="spinner w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin" />
                                        <p className="text-gray-400 text-sm">Generating preview...</p>
                                    </div>
                                ) : shareImage ? (
                                    <div className="relative w-full">
                                        <img src={shareImage} alt="Profile Preview" className="w-full rounded-lg shadow-2xl border border-white/5" />
                                        {!showUsername && (
                                            // Overlay to hide username in preview if needed (hacky, easier to allow canvas redraw)
                                            <div className="absolute top-4 left-4 w-40 h-10 bg-black z-10" />
                                            /* Note: Real removal would require re-generating canvas, for now this is just UI Mockup logic */
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">Failed to generate preview</p>
                                )}
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfilePage;
