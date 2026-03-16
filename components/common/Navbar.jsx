import React, { useState, useEffect, useRef, useCallback } from 'react';
import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useSession, signIn, signOut as nextSignOut } from 'next-auth/react';
import {
    Sun, Moon, Search, Menu, X, ChevronDown, ArrowRight,
    User, LogOut, LayoutDashboard, Target, Bell, Flame, Trophy, Newspaper, RotateCcw,
    // Category icons
    Landmark, Brain, Terminal, Mic, Rss, Timer, Library, Feather, Handshake, Package,
    // Government Exam subs
    MapPin, ScrollText, Banknote, Train, ShieldCheck, Building, BellRing, History, ListChecks,
    // Aptitude subs
    Calculator, GitFork, Languages, PieChart, Shapes, CircleHelp, Wand2,
    // Programming subs
    FileCode, Code2, Coffee, Braces, Network, Workflow, LayoutTemplate, KeyRound,
    // Interview subs
    UserCheck, Wrench, Building2, MessagesSquare, FileSearch, Video,
    // Current Affairs subs
    CalendarDays, CalendarClock, CalendarRange, BookMarked, Flag, Globe2,
    // Mock Tests subs
    Award, Code, AlarmClock,
    // Study Materials subs
    FileText, FileDown, Scroll, Sigma, GraduationCap,
    // Blog subs
    TrendingUp, Lightbulb, MonitorPlay, Zap, Medal,
    // Jobs subs
    Laptop, CalendarCheck,
} from 'lucide-react';
import {
    FcGraduationCap, FcCalculator, FcDocument, FcOrganization,
    FcSurvey, FcGlobe, FcBullish, FcCalendar, FcReading,
    FcLibrary, FcIdea, FcElectronics, FcDataProtection,
    FcConferenceCall, FcBusinessContact, FcTreeStructure,
    FcAlarmClock, FcDownload, FcAbout, FcApproval,
    FcCurrencyExchange, FcShipped, FcDeployment, FcViewDetails,
    FcMindMap, FcPieChart, FcMakeDecision,
    FcCommandLine, FcProcess, FcFlowChart, FcGenealogy,
    FcTimeline, FcTemplate, FcKey,
    FcBriefcase, FcRules, FcVideoCall,
    FcNews, FcBookmark, FcStatistics,
    FcQuestions, FcSearch,
    FcRating, FcGoodDecision, FcPuzzle, FcInspection,
    FcTodoList, FcList, FcNumericalSorting12,
    FcPositiveDynamic, FcVoicePresentation, FcSportsMode, FcVip,
    FcSmartphoneTablet, FcPodiumWithSpeaker, FcCollaboration, FcInTransit, FcLineChart,
} from 'react-icons/fc';

// ─────────────────────────────────────────────
//  NAV DATA  (icon, color, description per category + sub)
// ─────────────────────────────────────────────
const mainCategories = [
    {
        title: 'Government Exams', path: '/exams',
        Icon: Landmark, colorCls: 'text-blue-500', bgCls: 'bg-blue-500/10',
        description: 'Prepare for TNPSC, UPSC, SSC, Banking and all state & central govt exams.',
        subcategories: [
            { name: 'TNPSC', path: '/exams/tnpsc', Icon: MapPin },
            { name: 'UPSC', path: '/exams/upsc', Icon: Landmark },
            { name: 'SSC', path: '/exams/ssc', Icon: ScrollText },
            { name: 'Banking Exams', path: '/exams/banking', Icon: Banknote },
            { name: 'Railway Exams', path: '/exams/railway', Icon: Train },
            { name: 'Police Exams', path: '/exams/police', Icon: ShieldCheck },
            { name: 'State PSC', path: '/exams/state-psc', Icon: Building },
            { name: 'Exam Notifications', path: '/exams/notifications', Icon: BellRing },
            { name: 'Previous Year Questions', path: '/exams/pyq', Icon: History },
            { name: 'Exam Syllabus', path: '/exams/syllabus', Icon: ListChecks },
        ],
    },
    {
        title: 'Aptitude & Reasoning', path: '/aptitude',
        Icon: Brain, colorCls: 'text-purple-500', bgCls: 'bg-purple-500/10',
        description: 'Crack placements with Quants, Logical Reasoning, Verbal & DI.',
        subcategories: [
            { name: 'Quantitative Aptitude', path: '/aptitude/quantitative', Icon: Calculator },
            { name: 'Logical Reasoning', path: '/aptitude/logical', Icon: GitFork },
            { name: 'Verbal Ability', path: '/aptitude/verbal', Icon: Languages },
            { name: 'Data Interpretation', path: '/aptitude/di', Icon: PieChart },
            { name: 'Non-Verbal Reasoning', path: '/aptitude/non-verbal', Icon: Shapes },
            { name: 'Practice Questions', path: '/aptitude/practice', Icon: CircleHelp },
            { name: 'Shortcut Tricks', path: '/aptitude/tricks', Icon: Wand2 },
        ],
    },
    {
        title: 'Programming', path: '/programming',
        Icon: Terminal, colorCls: 'text-green-500', bgCls: 'bg-green-500/10',
        description: 'Learn C, Java, Python, DSA, Web Dev & Cybersecurity from scratch.',
        subcategories: [
            { name: 'C Programming', path: '/programming/c', Icon: FileCode },
            { name: 'C++', path: '/programming/cpp', Icon: Code2 },
            { name: 'Java', path: '/programming/java', Icon: Coffee },
            { name: 'Python', path: '/programming/python', Icon: Terminal },
            { name: 'JavaScript', path: '/programming/javascript', Icon: Braces },
            { name: 'Data Structures', path: '/programming/data-structures', Icon: Network },
            { name: 'Algorithms', path: '/programming/algorithms', Icon: Workflow },
            { name: 'Web Development', path: '/programming/web', Icon: LayoutTemplate },
            { name: 'Cybersecurity Basics', path: '/programming/cybersecurity', Icon: KeyRound },
        ],
    },
    {
        title: 'Interview Preparation', path: '/interviews',
        Icon: Mic, colorCls: 'text-orange-500', bgCls: 'bg-orange-500/10',
        description: 'HR, Technical, GD, Resume tips & company-specific questions.',
        subcategories: [
            { name: 'HR Interview Questions', path: '/interviews/hr', Icon: UserCheck },
            { name: 'Technical Interview', path: '/interviews/technical', Icon: Wrench },
            { name: 'Company Wise Questions', path: '/interviews/company', Icon: Building2 },
            { name: 'Group Discussion', path: '/interviews/gd', Icon: MessagesSquare },
            { name: 'Resume & Portfolio Tips', path: '/interviews/resume', Icon: FileSearch },
            { name: 'Mock Interviews', path: '/interviews/mock', Icon: Video },
        ],
    },
    {
        title: 'Current Affairs', path: '/current-affairs',
        Icon: Rss, colorCls: 'text-red-500', bgCls: 'bg-red-500/10',
        description: 'Daily, weekly & monthly updates, quizzes and GK for all exams.',
        subcategories: [
            { name: 'Daily Current Affairs', path: '/current-affairs/daily', Icon: CalendarDays },
            { name: 'Weekly Current Affairs', path: '/current-affairs/weekly', Icon: CalendarClock },
            { name: 'Monthly Current Affairs', path: '/current-affairs/monthly', Icon: CalendarRange },
            { name: 'Current Affairs Quiz', path: '/current-affairs/quiz', Icon: CircleHelp },
            { name: 'Government Schemes', path: '/current-affairs/schemes', Icon: Flag },
            { name: 'Important GK Topics', path: '/current-affairs/gk', Icon: Globe2 },
        ],
    },
    {
        title: 'Mock Tests', path: '/mock-tests',
        Icon: Timer, colorCls: 'text-cyan-500', bgCls: 'bg-cyan-500/10',
        description: 'Timed, exam-pattern practice tests to track your real progress.',
        subcategories: [
            { name: 'Aptitude Tests', path: '/mock-tests/aptitude', Icon: Calculator },
            { name: 'Government Exam Tests', path: '/mock-tests/govt', Icon: Award },
            { name: 'Programming MCQs', path: '/mock-tests/programming', Icon: Code },
            { name: 'Technical Tests', path: '/mock-tests/technical', Icon: Wrench },
            { name: 'Full Length Practice Tests', path: '/mock-tests/full-length', Icon: AlarmClock },
        ],
    },
    {
        title: 'Study Materials', path: '/study-materials',
        Icon: Library, colorCls: 'text-indigo-500', bgCls: 'bg-indigo-500/10',
        description: 'Free notes, PDFs, cheat sheets and formula books for every exam.',
        subcategories: [
            { name: 'Notes', path: '/study-materials/notes', Icon: FileText },
            { name: 'PDFs', path: '/study-materials/pdfs', Icon: FileDown },
            { name: 'Cheat Sheets', path: '/study-materials/cheat-sheets', Icon: Scroll },
            { name: 'Important Formulas', path: '/study-materials/formulas', Icon: Sigma },
            { name: 'Exam Guides', path: '/study-materials/guides', Icon: GraduationCap },
        ],
    },
    {
        title: 'Blog', path: '/blog',
        Icon: Feather, colorCls: 'text-pink-500', bgCls: 'bg-pink-500/10',
        description: 'Career guidance, exam tips, tutorials and student success stories.',
        subcategories: [
            { name: 'Career Guidance', path: '/blog/career', Icon: TrendingUp },
            { name: 'Exam Preparation Tips', path: '/blog/exam-prep', Icon: Lightbulb },
            { name: 'Programming Tutorials', path: '/blog/tutorials', Icon: MonitorPlay },
            { name: 'Productivity', path: '/blog/productivity', Icon: Zap },
            { name: 'Student Success Stories', path: '/blog/success', Icon: Medal },
        ],
    },
    {
        title: 'Jobs & Internships', path: '/jobs',
        Icon: Handshake, colorCls: 'text-emerald-500', bgCls: 'bg-emerald-500/10',
        description: 'IT jobs, government jobs, internships and placement drives.',
        subcategories: [
            { name: 'IT Jobs', path: '/jobs/it', Icon: Laptop },
            { name: 'Government Jobs', path: '/jobs/govt', Icon: Building2 },
            { name: 'Internships', path: '/jobs/internships', Icon: GraduationCap },
            { name: 'Walk-In Drives', path: '/jobs/walkin', Icon: CalendarCheck },
            { name: 'Placement Updates', path: '/jobs/placement', Icon: TrendingUp },
        ],
    },
    {
        title: 'Resources', path: '/resources',
        Icon: Package, colorCls: 'text-yellow-500', bgCls: 'bg-yellow-500/10',
        description: 'Curated tools, links and reference materials for serious learners.',
        subcategories: null,
    },
];

// ─────────────────────────────────────────────
//  MEGA MENU PANEL (shared, desktop)
// ─────────────────────────────────────────────

// react-icons/fc — flat color icons (Icons8-style) — unique icon per sub-item
const SUB_FC_ICON_MAP = {
    // Government Exams
    'TNPSC': FcGlobe,
    'UPSC': FcOrganization,
    'SSC': FcDocument,
    'Banking Exams': FcCurrencyExchange,
    'Railway Exams': FcShipped,
    'Police Exams': FcDataProtection,
    'State PSC': FcDeployment,
    'Exam Notifications': FcCalendar,
    'Previous Year Questions': FcReading,
    'Exam Syllabus': FcViewDetails,
    // Aptitude
    'Quantitative Aptitude': FcCalculator,
    'Logical Reasoning': FcMindMap,
    'Verbal Ability': FcAbout,
    'Data Interpretation': FcBullish,
    'Non-Verbal Reasoning': FcPieChart,
    'Practice Questions': FcSurvey,
    'Shortcut Tricks': FcMakeDecision,
    // Programming
    'C Programming': FcCommandLine,
    'C++': FcProcess,
    'Java': FcLibrary,
    'Python': FcFlowChart,
    'JavaScript': FcGenealogy,
    'Data Structures': FcTreeStructure,
    'Algorithms': FcTimeline,
    'Web Development': FcTemplate,
    'Cybersecurity Basics': FcKey,
    // Interview
    'HR Interview Questions': FcBusinessContact,
    'Technical Interview': FcElectronics,
    'Company Wise Questions': FcBriefcase,
    'Group Discussion': FcConferenceCall,
    'Resume & Portfolio Tips': FcRules,
    'Mock Interviews': FcVideoCall,
    // Current Affairs
    'Daily Current Affairs': FcNews,
    'Weekly Current Affairs': FcBookmark,
    'Monthly Current Affairs': FcStatistics,
    'Current Affairs Quiz': FcQuestions,
    'Government Schemes': FcApproval,
    'Important GK Topics': FcSearch,
    // Mock Tests
    'Aptitude Tests': FcRating,
    'Government Exam Tests': FcGoodDecision,
    'Programming MCQs': FcPuzzle,
    'Technical Tests': FcInspection,
    'Full Length Practice Tests': FcAlarmClock,
    // Study Materials
    'Notes': FcTodoList,
    'PDFs': FcDownload,
    'Cheat Sheets': FcList,
    'Important Formulas': FcNumericalSorting12,
    'Exam Guides': FcGraduationCap,
    // Blog
    'Career Guidance': FcPositiveDynamic,
    'Exam Preparation Tips': FcIdea,
    'Programming Tutorials': FcVoicePresentation,
    'Productivity': FcSportsMode,
    'Student Success Stories': FcVip,
    // Jobs
    'IT Jobs': FcSmartphoneTablet,
    'Government Jobs': FcPodiumWithSpeaker,
    'Internships': FcCollaboration,
    'Walk-In Drives': FcInTransit,
    'Placement Updates': FcLineChart,
};

const accentMap = {
    'text-blue-500': ['#3b82f6', '#1d4ed8'],
    'text-purple-500': ['#a855f7', '#7c3aed'],
    'text-green-500': ['#22c55e', '#15803d'],
    'text-orange-500': ['#f97316', '#c2410c'],
    'text-red-500': ['#ef4444', '#b91c1c'],
    'text-cyan-500': ['#06b6d4', '#0e7490'],
    'text-indigo-500': ['#6366f1', '#4338ca'],
    'text-pink-500': ['#ec4899', '#be185d'],
    'text-emerald-500': ['#10b981', '#065f46'],
    'text-yellow-500': ['#eab308', '#a16207'],
};

const CAT_FC_ICON_MAP = {
    'Government Exams': FcOrganization,
    'Aptitude & Reasoning': FcCalculator,
    'Programming': FcElectronics,
    'Interview Preparation': FcConferenceCall,
    'Current Affairs': FcCalendar,
    'Mock Tests': FcAlarmClock,
    'Study Materials': FcLibrary,
    'Blog': FcIdea,
    'Jobs & Internships': FcBullish,
    'Resources': FcReading,
};

const MegaPanel = ({ cat, isDark, onMouseEnter, onMouseLeave }) => {
    if (!cat?.subcategories) return null;
    const CatIcon = cat.Icon;
    const CatFcIcon = CAT_FC_ICON_MAP[cat.title] || FcOrganization;
    const [c1, c2] = accentMap[cat.colorCls] ?? ['#FFC107', '#e5ad06'];

    return (
        <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`absolute left-0 right-0 top-full z-[300] overflow-hidden border-x border-b ${isDark
                ? 'border-[#2a2a2a]'
                : 'border-gray-200'
                }`}
        >
            <div className='flex min-h-[300px]'>

                {/* ── Left sidebar with SVG grid pattern ── */}
                <div
                    id='nav-mega-sidebar'
                    className='nav-mega-sidebar w-[220px] shrink-0 flex flex-col justify-between p-5 relative overflow-hidden'
                    style={{ background: `linear-gradient(145deg, ${c1}, ${c2}dd)` }}
                >
                    {/* SVG Grid Squares pattern */}
                    <svg className='absolute inset-0 w-full h-full' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                        <defs>
                            <pattern id={`grid-${cat.title.replace(/\s/g, '')}`} x='0' y='0' width='28' height='28' patternUnits='userSpaceOnUse'>
                                <rect x='0' y='0' width='26' height='26' rx='4' fill='none' stroke='rgba(255,255,255,0.22)' strokeWidth='1' />
                            </pattern>
                        </defs>
                        <rect width='100%' height='100%' fill={`url(#grid-${cat.title.replace(/\s/g, '')})`} />
                    </svg>

                    {/* Glow circles */}
                    <div className='absolute -right-10 -top-10 w-40 h-40 rounded-full'
                        style={{ background: 'rgba(255,255,255,0.12)', filter: 'blur(30px)' }} />
                    <div className='absolute -left-6 bottom-0 w-28 h-28 rounded-full'
                        style={{ background: 'rgba(255,255,255,0.08)', filter: 'blur(20px)' }} />

                    {/* Content */}
                    <div className='relative z-10 flex flex-col gap-3'>
                        {/* Category icon — color Fc icon, no box */}
                        <div className='sidebar-dark-pill flex items-center gap-3 px-3 py-2' style={{ background: 'rgba(255,255,255,0.95)' }}>
                            <CatFcIcon size={24} />
                            <div className='h-4 w-px' style={{ background: 'rgba(0,0,0,0.18)' }} />
                            <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.5)', letterSpacing: '0.04em' }}>
                                {cat.subcategories.length} topics
                            </span>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', lineHeight: 1.3 }}>
                                {cat.title}
                            </h3>
                            <p style={{ marginTop: 6, fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
                                {cat.description}
                            </p>
                        </div>

                    </div>

                    <Link
                        href={cat.path}
                        className='sidebar-dark-pill relative z-10 mt-3 inline-flex items-center justify-between gap-2 transition-all group'
                        style={{ background: '#ffffff', border: 'none', textDecoration: 'none', padding: '8px 12px' }}
                    >
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#333' }}>Explore all</span>
                        <ArrowRight size={13} strokeWidth={2} color='#555' className='transition-transform group-hover:translate-x-0.5' />
                    </Link>
                </div>

                {/* ── Right panel: clean editorial list ── */}
                <div className={`flex-1 p-5 pt-4 ${isDark ? 'bg-[#111]' : 'bg-white'}`}>

                    {/* Header */}
                    <div className='flex items-center gap-2.5 mb-3 pb-3' style={{ borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#ebebeb'}` }}>
                        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: isDark ? '#777' : '#888' }}>
                            Browse Topics
                        </span>
                        <div style={{ flex: 1 }} />
                        <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4, background: isDark ? '#222' : '#f3f3f3', color: isDark ? '#aaa' : '#555' }}>
                            {cat.subcategories.length}
                        </span>
                    </div>

                    {/* No-box clean list — 3 columns */}
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-0.5'>
                        {cat.subcategories.map((sub) => {
                            const FcIcon = SUB_FC_ICON_MAP[sub.name] || FcDocument;
                            return (
                                <Link
                                    key={sub.name}
                                    href={sub.path}
                                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px', borderRadius: 8, transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1)', position: 'relative', overflow: 'hidden' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateX(4px)';
                                        e.currentTarget.querySelector('[data-icon]').style.transform = 'scale(1.28) rotate(8deg)';
                                        e.currentTarget.querySelector('[data-label]').style.color = '#FFC107';
                                        e.currentTarget.querySelector('[data-underline]').style.transform = 'scaleX(1)';
                                        e.currentTarget.querySelector('[data-underline]').style.opacity = '1';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateX(0)';
                                        e.currentTarget.querySelector('[data-icon]').style.transform = 'scale(1) rotate(0deg)';
                                        e.currentTarget.querySelector('[data-label]').style.color = isDark ? '#e5e5e5' : '#1a1a1a';
                                        e.currentTarget.querySelector('[data-underline]').style.transform = 'scaleX(0)';
                                        e.currentTarget.querySelector('[data-underline]').style.opacity = '0';
                                    }}
                                >
                                    {/* Icon — spring bounce */}
                                    <span data-icon style={{ display: 'inline-flex', flexShrink: 0, transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>
                                        <FcIcon size={22} />
                                    </span>
                                    {/* Label + underline wrapper */}
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        <span data-label style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3, color: isDark ? '#e5e5e5' : '#1a1a1a', transition: 'color 0.18s ease' }}>
                                            {sub.name}
                                        </span>
                                        {/* Yellow underline */}
                                        <span data-underline style={{ position: 'absolute', left: 0, bottom: -2, width: '100%', height: 2, borderRadius: 2, background: '#FFC107', transform: 'scaleX(0)', opacity: 0, transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease', transformOrigin: 'left' }} />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ─────────────────────────────────────────────
//  NAVBAR
// ─────────────────────────────────────────────
const Navbar = () => {
    const { user: authUser, logout: authLogout, isAuthenticated: authIsAuthenticated } = useAuth();
    const { data: session } = useSession();
    const { isDark, toggleTheme } = useTheme();
    
    // Normalize user data
    const user = session?.user || authUser;
    const isAuthenticated = !!session || authIsAuthenticated;
    const logout = () => {
        if (session) nextSignOut();
        authLogout();
    };

    const handleResetAll = async () => {
        if (!isAuthenticated || !user) return;
        if (!confirm('WARNING: This will permanently delete ALL your solved questions progress across every topic. Are you sure?')) return;

        try {
            if (session?.user?.backendId) {
                await axios.delete(`http://localhost:5000/api/progress/${session.user.backendId}`);
            }
            
            // Clear all progress storage
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('progress_')) {
                    localStorage.removeItem(key);
                }
            });

            alert('All progress has been fully reset.');
            window.location.reload(); // Refresh to reflect changes
        } catch (error) {
            console.error("Failed to reset all progress:", error);
            alert('Store clear failed. Please check connection.');
        }
    };
    const router = useRouter();
    const location = { pathname: router.pathname };

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const navRef = useRef(null);
    const closeTimer = useRef(null);
    const enterTimer = useRef(null);
    const [logoTrigger, setLogoTrigger] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogoTrigger(true);
            setTimeout(() => setLogoTrigger(false), 2000);
        }, 30000); // 30,000ms = 30 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveMenu(null);
                setProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveMenu(null);
        setProfileOpen(false);
        setMobileExpanded(null);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleMenuEnter = useCallback((title) => {
        // Clear any pending close timers
        clearTimeout(closeTimer.current);
        
        // If a menu is ALREADY open, switch instantly for better UX
        // If NO menu is open, wait 150ms to confirm "hover intent" (prevents accidental "grazing" triggers)
        if (activeMenu) {
            clearTimeout(enterTimer.current);
            setActiveMenu(title);
        } else {
            clearTimeout(enterTimer.current);
            enterTimer.current = setTimeout(() => {
                setActiveMenu(title);
            }, 150);
        }
    }, [activeMenu]);

    const handleMenuLeave = useCallback(() => {
        clearTimeout(enterTimer.current);
        // Small delay before closing to allow crossing the gap between button and dropdown
        closeTimer.current = setTimeout(() => {
            setActiveMenu(null);
        }, 120);
    }, []);

    // Also close menu when mouse leaves the entire header area for maximum robustness
    const handleHeaderLeave = useCallback(() => {
        clearTimeout(enterTimer.current);
        clearTimeout(closeTimer.current);
        setActiveMenu(null);
        setProfileOpen(false);
    }, []);

    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');
    const activeCat = mainCategories.find(c => c.title === activeMenu) ?? null;

    return (
        <header
            ref={navRef}
            onMouseLeave={handleHeaderLeave}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${isDark ? 'bg-[#0f0f0f]/85' : 'bg-white/85'
                } ${scrolled ? (isDark ? 'shadow-[0_1px_0_#222]' : 'shadow-sm') : ''}`}
        >
            {/* ══ LOGO ANIMATION VARIANTS ══ */}
            <style>{`
                @keyframes logo-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .logo-container:hover .logo-icon {
                    animation: logo-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                @keyframes logo-bounce {
                    0% { transform: scale(1); }
                    30% { transform: scale(1.2) rotate(-5deg); }
                    50% { transform: scale(0.9) rotate(5deg); }
                    70% { transform: scale(1.1) rotate(-2deg); }
                    100% { transform: scale(1) rotate(0); }
                }
            `}</style>

            {/* ══ TOP BAR ══ */}
            <div className={`h-[60px] flex items-center border-b ${isDark ? 'border-[#222]' : 'border-gray-100'}`}>
                <div className='w-full max-w-[1440px] mx-auto px-1 lg:px-2 flex items-center gap-2'>

                    {/* Logo */}
                    <Link href='/' className='flex items-center gap-0 shrink-0 group/logo logo-container'>
                        <img
                            src='/logo.png'
                            alt='Logo'
                            className='h-14 w-auto object-contain logo-icon transition-transform duration-300'
                        />
                        <div className='hidden sm:block ml-[-12px]'>
                            <AnimatedLogo size="sm" loopInterval={30000} />
                        </div>
                    </Link>

                    {/* Search */}
                    <div className={`hidden md:flex w-[240px] lg:w-[300px] shrink-0 items-center rounded-lg border px-3 gap-2 h-9 transition-all duration-200 ${isDark
                        ? 'bg-[#1a1a1a] border-[#333] focus-within:border-[#FFC107] focus-within:shadow-[0_0_0_3px_rgba(255,193,7,0.12)]'
                        : 'bg-gray-50 border-gray-200 focus-within:border-[#FFC107] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(255,193,7,0.1)]'
                        }`}>
                        <Search size={14} className='text-gray-400 shrink-0' />
                        <input
                            type='text'
                            placeholder='Search exams, courses...'
                            className='flex-1 min-w-0 bg-transparent text-[13px] outline-none placeholder-gray-400'
                            spellCheck='false'
                        />
                        <kbd className={`text-[10px] font-medium px-1.5 py-0.5 rounded hidden lg:inline shrink-0 ${isDark ? 'bg-[#2a2a2a] text-gray-500' : 'bg-gray-200 text-gray-500'
                            }`}>⌘K</kbd>
                    </div>

                    {/* ── Quick Feature Pills ── */}
                    <div className='hidden xl:flex items-center gap-1.5 flex-1 justify-center'>
                        {[
                            { label: 'Free Mock Test', path: '/mock-tests', LIcon: Target, hot: true, bg: '#d97706', iconBg: '#92400e' },
                            { label: 'Daily GK', path: '/current-affairs/daily', LIcon: Globe2, bg: '#2563eb', iconBg: '#1e3a8a' },
                            { label: 'Latest News', path: '/current-affairs', LIcon: Newspaper, bg: '#16a34a', iconBg: '#14532d' },
                            { label: 'Leaderboard', path: '/dashboard', LIcon: Trophy, bg: '#db2777', iconBg: '#831843' },
                            { label: 'Study PDFs', path: '/study-materials', LIcon: Library, bg: '#7c3aed', iconBg: '#4c1d95' },
                        ].map(({ label, path, LIcon, hot, bg, iconBg }) => (
                            <Link
                                key={label}
                                href={path}
                                className='relative flex items-center h-[30px] rounded-[6px] whitespace-nowrap overflow-hidden transition-all duration-150 hover:-translate-y-px hover:shadow-lg hover:brightness-110'
                                style={{ background: bg }}
                            >
                                {hot && <span className='absolute top-0.5 right-0.5 w-[6px] h-[6px] rounded-full bg-white' style={{ opacity: 0.9 }} />}
                                {/* Icon zone — darker bg */}
                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, background: iconBg, flexShrink: 0 }}>
                                    <LIcon size={13} color='rgba(255,255,255,0.9)' strokeWidth={2.2} />
                                </span>
                                {/* Divider */}
                                <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                                {/* Label */}
                                <em style={{ padding: '0 11px 0 9px', fontSize: 12, fontWeight: 600, fontStyle: 'normal', color: '#fff', letterSpacing: '0.01em' }}>{label}</em>
                            </Link>
                        ))}
                    </div>
                    <div className='flex-1' />

                    {/* Right controls */}
                    <div className='flex items-center gap-1'>
                        {/* Notification Bell */}
                        <button className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150 ${isDark
                            ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/20'
                            : 'bg-amber-50 text-amber-500 hover:bg-amber-100 border border-amber-200'
                            }`}>
                            <Bell size={16} />
                            <span className='absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 border-2 border-white' style={{ borderColor: isDark ? '#0f0f0f' : '#fff' }} />
                        </button>

                        {/* Theme Toggle */}
                        <button onClick={toggleTheme} className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150 ${isDark
                            ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20'
                            : 'bg-sky-50 text-sky-500 hover:bg-sky-100 border border-sky-200'
                            }`}>
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>

                        {isAuthenticated && user ? (
                            <div className='relative ml-1'>
                                <button
                                    onClick={() => setProfileOpen(p => !p)}
                                    className={`flex items-center gap-2 h-10 px-2.5 rounded-xl border transition-all duration-200 ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10 text-gray-200' : 'border-gray-200 hover:border-gray-300 bg-gray-50/50 text-gray-700'
                                        }`}
                                >
                                    {user?.image ? (
                                        <img 
                                            src={user.image} 
                                            alt={user.name} 
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.style.display = 'none';
                                                const fallback = e.target.parentElement.querySelector('.user-initial-fallback');
                                                if (fallback) fallback.style.display = 'flex';
                                            }}
                                            className="w-7 h-7 rounded-full border border-white/20 object-cover" 
                                        />
                                    ) : null}
                                    <div className={`user-initial-fallback w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFC107] to-[#FF9800] text-black font-bold text-[11px] items-center justify-center ${user?.image ? 'hidden' : 'flex'}`}>
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </div>
                                    <span className='hidden lg:block text-[13.5px] font-bold tracking-tight'>{user?.name?.split(' ')[0]}</span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 opacity-60 ${profileOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {profileOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 12, scale: 0.95, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, y: 8, scale: 0.95, filter: 'blur(10px)' }}
                                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                            className={`absolute right-0 top-full mt-3 w-64 rounded-2xl border overflow-hidden z-[400] backdrop-blur-xl ${isDark ? 'bg-[#141414]/90 border-white/10' : 'bg-white border-gray-200'
                                                }`}
                                        >
                                            <div className={`px-5 py-4 border-b flex items-center gap-4 ${isDark ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50/50'}`}>
                                                {user?.image ? (
                                                    <img 
                                                        src={user.image} 
                                                        alt={user.name} 
                                                        referrerPolicy="no-referrer"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.style.display = 'none';
                                                            const fallback = e.target.parentElement.querySelector('.dropdown-initial-fallback');
                                                            if (fallback) fallback.style.display = 'flex';
                                                        }}
                                                        className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" 
                                                    />
                                                ) : null}
                                                <div className={`dropdown-initial-fallback w-10 h-10 rounded-full bg-amber-500 text-black font-bold items-center justify-center text-lg ${user?.image ? 'hidden' : 'flex'}`}>
                                                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <p className={`text-[15px] font-bold tracking-tight truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
                                                    <p className='text-[11px] text-gray-500 font-medium truncate opacity-70'>{user?.email}</p>
                                                </div>
                                            </div>
                                            <div className='p-2 flex flex-col gap-1'>
                                                { [
                                                    { label: 'My Dashboard', href: '/dashboard', Icon: LayoutDashboard },
                                                    { label: 'Personal Profile', href: '/profile', Icon: User },
                                                    { label: 'Weekly Stats', href: '/dashboard', Icon: Trophy },
                                                ].map((item) => (
                                                    <Link key={item.label} href={item.href} className={`flex items-center gap-3 px-4 py-3 text-[13.5px] font-bold rounded-xl transition-all ${isDark ? 'text-gray-300 hover:bg-white/10 hover:text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                                        <item.Icon size={17} className="opacity-70" /> {item.label}
                                                    </Link>
                                                ))}
                                                
                                                <button 
                                                    onClick={handleResetAll} 
                                                    className={`flex items-center gap-3 px-4 py-3 text-[13.5px] font-bold rounded-xl text-orange-600 dark:text-orange-400 transition-all ${isDark ? 'hover:bg-orange-500/10' : 'hover:bg-orange-50'}`}
                                                >
                                                    <RotateCcw size={17} className="opacity-70" /> Reset All Progress
                                                </button>

                                                <div className={`my-2 h-px ${isDark ? 'bg-white/5' : 'bg-gray-100'}`} />
                                                <button 
                                                    onClick={logout} 
                                                    className={`flex items-center gap-3 px-4 py-3 text-[13.5px] font-bold rounded-xl text-red-500 transition-all ${isDark ? 'hover:bg-red-500/10' : 'hover:bg-red-50'}`}
                                                >
                                                    <LogOut size={17} /> Sign Out
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className='flex items-center gap-2 ml-1'>
                                <button 
                                    onClick={() => signIn('google')}
                                    className={`hidden lg:flex h-10 px-4 items-center gap-3 text-[13px] font-bold rounded-xl border transition-all duration-300 ${isDark
                                    ? 'border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 hover:border-white/20'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                    }`}>
                                    <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-4 h-4" alt="Google" />
                                    Google Log In
                                </button>
                                <Link href='/register' className='h-10 px-5 flex items-center text-[13px] font-bold rounded-xl text-black transition-all duration-300 hover:scale-[1.02] active:scale-95' style={{ background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)' }}>
                                    Register
                                </Link>
                            </div>
                        )}

                        <button
                            className={`md:hidden ml-1 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'text-gray-300 hover:bg-[#1e1e1e]' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setMobileOpen(true)}
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ══ NAV STRIP (Desktop) ══ */}
            <div className={`hidden md:block border-b backdrop-blur-md ${isDark ? 'bg-[#0f0f0f]/80 border-[#1a1a1a]' : 'bg-white/80 border-gray-100'}`}>
                {/* outer relative container — mega panel is positioned relative to this */}
                <div className='relative w-full max-w-[1440px] mx-auto px-2 lg:px-6'>
                    <div className='flex items-center gap-x-0 overflow-x-auto no-scrollbar'>

                        {/* Home */}
                        <Link href='/' className={`shrink-0 flex items-center h-11 px-2.5 text-[12.5px] font-semibold border-b-2 transition-colors ${location.pathname === '/'
                            ? 'border-[#FFC107] text-[#FFC107]'
                            : isDark
                                ? 'border-transparent text-gray-100 hover:text-white hover:border-gray-600'
                                : 'border-transparent text-gray-800 hover:text-black hover:border-gray-300'
                            }`}>Home</Link>

                        {mainCategories.map((cat) => (
                            <div
                                key={cat.title}
                                className='relative shrink-0'
                                onMouseEnter={() => handleMenuEnter(cat.title)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <button className={`flex items-center gap-1 h-11 px-2.5 text-[12.5px] font-semibold border-b-2 transition-colors whitespace-nowrap ${activeMenu === cat.title || isActive(cat.path)
                                    ? 'border-[#FFC107] text-[#FFC107]'
                                    : isDark
                                        ? 'border-transparent text-gray-100 hover:text-white hover:border-gray-600'
                                        : 'border-transparent text-gray-800 hover:text-black hover:border-gray-300'
                                    }`}>
                                    {cat.title}
                                    {cat.subcategories && (
                                        <ChevronDown size={12} className={`transition-transform duration-150 ${activeMenu === cat.title ? 'rotate-180 text-[#FFC107]' : 'opacity-60'
                                            }`} />
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* ══ SHARED MEGA PANEL (drops from nav strip) ══ */}
                    <AnimatePresence>
                        {activeCat?.subcategories && (
                            <MegaPanel
                                cat={activeCat}
                                isDark={isDark}
                                onMouseEnter={() => handleMenuEnter(activeCat.title)}
                                onMouseLeave={handleMenuLeave}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* ══ MOBILE DRAWER ══ */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className='fixed inset-0 bg-black/50 z-[60] md:hidden'
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className={`fixed inset-y-0 left-0 w-[280px] sm:w-[320px] z-[70] flex flex-col shadow-2xl ${
                                isDark ? 'bg-[#111111]' : 'bg-white'
                            }`}
                        >
                            {/* Drawer header */}
                            <div className={`flex items-center justify-between px-4 h-14 border-b ${isDark ? 'border-[#222]' : 'border-gray-100'}`}>
                                <Link href='/' onClick={() => setMobileOpen(false)} className='flex items-center group/mobile-logo min-w-0'>
                                    <div className="flex items-center gap-0">
                                        <img src='/logo.png' alt='Logo' className='h-10 w-auto object-contain shrink-0' />
                                        <div className='ml-[-8px] scale-90 origin-left'>
                                            <AnimatedLogo size="sm" loopInterval={30000} />
                                        </div>
                                    </div>
                                </Link>
                                <button onClick={() => setMobileOpen(false)} className={`w-8 h-8 rounded-md flex items-center justify-center ${isDark ? 'text-gray-400 hover:bg-[#1e1e1e]' : 'text-gray-500 hover:bg-gray-100'}`}>
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Search */}
                            <div className='p-3'>
                                <div className={`flex items-center gap-2 rounded-lg border px-3 h-9 ${isDark ? 'bg-[#1a1a1a] border-[#333]' : 'bg-gray-50 border-gray-200'}`}>
                                    <Search size={14} className='text-gray-400' />
                                    <input type='text' placeholder='Search...' className='flex-1 bg-transparent text-sm outline-none' />
                                </div>
                            </div>

                            {/* Nav items */}
                            <nav className='flex-1 overflow-y-auto px-2 pb-4'>
                                <Link href='/' onClick={() => setMobileOpen(false)} className={`flex items-center h-11 px-3 text-[14px] font-medium rounded-lg mb-0.5 ${isDark ? 'text-gray-200 hover:bg-[#1a1a1a]' : 'text-gray-800 hover:bg-gray-50'}`}>
                                    Home
                                </Link>

                                {mainCategories.map((cat) => {
                                    const CatIcon = cat.Icon;
                                    const isExpanded = mobileExpanded === cat.title;
                                    return (
                                        <div key={cat.title} className='mb-0.5'>
                                            {cat.subcategories ? (
                                                <button
                                                    onClick={() => setMobileExpanded(isExpanded ? null : cat.title)}
                                                    className={`w-full flex items-center justify-between h-11 px-3 text-[14px] font-medium rounded-lg ${isExpanded
                                                        ? isDark ? 'bg-[#1a1a1a] text-[#FFC107]' : 'bg-yellow-50 text-[#b8860b]'
                                                        : isDark ? 'text-gray-200 hover:bg-[#1a1a1a]' : 'text-gray-800 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    <div className='flex items-center gap-2.5'>
                                                        <div className={`w-6 h-6 rounded-md flex items-center justify-center ${cat.bgCls} ${cat.colorCls}`}>
                                                            <CatIcon size={13} />
                                                        </div>
                                                        {cat.title}
                                                    </div>
                                                    <ChevronDown size={15} className={`transition-transform ${isExpanded ? 'rotate-180 text-[#FFC107]' : 'text-gray-400'}`} />
                                                </button>
                                            ) : (
                                                <Link href={cat.path} onClick={() => setMobileOpen(false)} className={`flex items-center gap-2.5 h-11 px-3 text-[14px] font-medium rounded-lg ${isDark ? 'text-gray-200 hover:bg-[#1a1a1a]' : 'text-gray-800 hover:bg-gray-50'}`}>
                                                    <div className={`w-6 h-6 rounded-md flex items-center justify-center ${cat.bgCls} ${cat.colorCls}`}>
                                                        <CatIcon size={13} />
                                                    </div>
                                                    {cat.title}
                                                </Link>
                                            )}

                                            <AnimatePresence initial={false}>
                                                {cat.subcategories && isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className='overflow-hidden'
                                                    >
                                                        <div className={`ml-3 mt-1 mb-1 rounded-xl border overflow-hidden ${isDark ? 'bg-[#0a0a0a] border-[#222]' : 'bg-gray-50 border-gray-100'}`}>
                                                            {cat.subcategories.map((sub) => {
                                                                const SubIcon = sub.Icon;
                                                                return (
                                                                    <Link
                                                                        key={sub.name}
                                                                        href={sub.path}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className={`flex items-center gap-3 px-4 py-2.5 text-[13px] border-b last:border-0 ${isDark
                                                                            ? 'text-gray-400 border-[#1a1a1a] hover:text-white hover:bg-[#141414]'
                                                                            : 'text-gray-600 border-gray-100 hover:text-gray-900 hover:bg-white'
                                                                            }`}
                                                                    >
                                                                        <SubIcon size={14} className={`shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                                                                        {sub.name}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </nav>

                            <div className="mt-auto">
                            {!isAuthenticated ? (
                                <div className={`p-4 border-t flex flex-col gap-2.5 ${isDark ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50/50'}`}>
                                    <Link href='/register' onClick={() => setMobileOpen(false)} className='flex items-center justify-center h-11 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-[14px] shadow-lg shadow-amber-500/20'>
                                        Register Free
                                    </Link>
                                    <Link href='/login' onClick={() => setMobileOpen(false)} className={`flex items-center justify-center h-11 rounded-xl border font-bold text-[14px] transition-all ${isDark ? 'border-white/10 text-gray-200 hover:bg-white/5' : 'border-gray-200 text-gray-700 hover:bg-white'}`}>
                                        Log In
                                    </Link>
                                </div>
                            ) : (
                                <div className={`p-4 border-t flex items-center gap-3 ${isDark ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50/50'}`}>
                                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">
                                        {user?.name?.charAt(0) || 'U'}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
                                        <button onClick={logout} className="text-[11px] font-bold text-red-500 uppercase tracking-wider">Sign Out</button>
                                    </div>
                                </div>
                            )}
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
