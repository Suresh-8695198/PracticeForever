import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import AnimatedLogo from './AnimatedLogo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useSession, signIn, signOut as nextSignOut } from 'next-auth/react';
import {
    Sun, Moon, Search, Menu, X, ChevronDown, ArrowRight,
    User, LogOut, LayoutDashboard, Target, Bell, Flame, Trophy, Newspaper, RotateCcw, Smartphone,
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
    // {
    //     title: 'Programming', path: '/programming',
    //     Icon: Terminal, colorCls: 'text-green-500', bgCls: 'bg-green-500/10',
    //     description: 'Learn C, Java, Python, DSA, Web Dev & Cybersecurity from scratch.',
    //     subcategories: [
    //         { name: 'C Programming', path: '/programming/c', Icon: FileCode },
    //         { name: 'C++', path: '/programming/cpp', Icon: Code2 },
    //         { name: 'Java', path: '/programming/java', Icon: Coffee },
    //         { name: 'Python', path: '/programming/python', Icon: Terminal },
    //         { name: 'JavaScript', path: '/programming/javascript', Icon: Braces },
    //         { name: 'Data Structures', path: '/programming/data-structures', Icon: Network },
    //         { name: 'Algorithms', path: '/programming/algorithms', Icon: Workflow },
    //         { name: 'Web Development', path: '/programming/web', Icon: LayoutTemplate },
    //         { name: 'Cybersecurity Basics', path: '/programming/cybersecurity', Icon: KeyRound },
    //     ],
    // },
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
    // {
    //     title: 'Mock Tests', path: '/mock-tests',
    //     Icon: Timer, colorCls: 'text-cyan-500', bgCls: 'bg-cyan-500/10',
    //     description: 'Timed, exam-pattern practice tests to track your real progress.',
    //     subcategories: [
    //         { name: 'Aptitude Tests', path: '/mock-tests/aptitude', Icon: Calculator },
    //         { name: 'Government Exam Tests', path: '/mock-tests/govt', Icon: Award },
    //         { name: 'Programming MCQs', path: '/mock-tests/programming', Icon: Code },
    //         { name: 'Technical Tests', path: '/mock-tests/technical', Icon: Wrench },
    //         { name: 'Full Length Practice Tests', path: '/mock-tests/full-length', Icon: AlarmClock },
    //     ],
    // },
    // {
    //     title: 'Study Materials', path: '/study-materials',
    //     Icon: Library, colorCls: 'text-indigo-500', bgCls: 'bg-indigo-500/10',
    //     description: 'Free notes, PDFs, cheat sheets and formula books for every exam.',
    //     subcategories: [
    //         { name: 'Notes', path: '/study-materials/notes', Icon: FileText },
    //         { name: 'PDFs', path: '/study-materials/pdfs', Icon: FileDown },
    //         { name: 'Cheat Sheets', path: '/study-materials/cheat-sheets', Icon: Scroll },
    //         { name: 'Important Formulas', path: '/study-materials/formulas', Icon: Sigma },
    //         { name: 'Exam Guides', path: '/study-materials/guides', Icon: GraduationCap },
    //     ],
    // },
    // {
    //     title: 'Blog', path: '/blog',
    //     Icon: Feather, colorCls: 'text-pink-500', bgCls: 'bg-pink-500/10',
    //     description: 'Career guidance, exam tips, tutorials and student success stories.',
    //     subcategories: [
    //         { name: 'Career Guidance', path: '/blog/career', Icon: TrendingUp },
    //         { name: 'Exam Preparation Tips', path: '/blog/exam-prep', Icon: Lightbulb },
    //         { name: 'Programming Tutorials', path: '/blog/tutorials', Icon: MonitorPlay },
    //         { name: 'Productivity', path: '/blog/productivity', Icon: Zap },
    //         { name: 'Student Success Stories', path: '/blog/success', Icon: Medal },
    //     ],
    // },
    // {
    //     title: 'Jobs & Internships', path: '/jobs',
    //     Icon: Handshake, colorCls: 'text-emerald-500', bgCls: 'bg-emerald-500/10',
    //     description: 'IT jobs, government jobs, internships and placement drives.',
    //     subcategories: [
    //         { name: 'IT Jobs', path: '/jobs/it', Icon: Laptop },
    //         { name: 'Government Jobs', path: '/jobs/govt', Icon: Building2 },
    //         { name: 'Internships', path: '/jobs/internships', Icon: GraduationCap },
    //         { name: 'Walk-In Drives', path: '/jobs/walkin', Icon: CalendarCheck },
    //         { name: 'Placement Updates', path: '/jobs/placement', Icon: TrendingUp },
    //     ],
    // },
    // {
    //     title: 'Resources', path: '/resources',
    //     Icon: Package, colorCls: 'text-yellow-500', bgCls: 'bg-yellow-500/10',
    //     description: 'Curated tools, links and reference materials for serious learners.',
    //     subcategories: null,
    // },
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

// ── BRAND ICON MAP (Original Language Logos) ──
const BRAND_ICON_MAP = {
    'C Programming': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
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
    const [c1, c2] = accentMap[cat.colorCls] ?? ['#065f46', '#064e3b'];

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
                                <rect x='0' y='0' width='26' height='26' rx='4' fill='none' stroke='rgba(255,255,255,0.15)' strokeWidth='1' />
                            </pattern>
                        </defs>
                        <rect width='100%' height='100%' fill={`url(#grid-${cat.title.replace(/\s/g, '')})`} />
                    </svg>

                    {/* Content */}
                    <div className='relative z-10 flex flex-col gap-3'>
                        {/* Category info pill */}
                        <div className='flex items-center gap-2 px-2 py-1 rounded bg-white/10 border border-white/20 w-fit'>
                            <CatFcIcon size={18} />
                            <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.04em' }}>
                                {cat.subcategories.length} Topics
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
                        style={{ background: '#ffffff', border: 'none', textDecoration: 'none', padding: '8px 12px', borderRadius: 6 }}
                    >
                        <span className="relative">
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#333' }}>Explore all</span>
                            <span
                                className="absolute left-0 bottom-[-2px] h-[1.5px] w-0 transition-all duration-300 group-hover:w-full"
                                style={{ backgroundColor: '#1a1a1a', display: 'block' }}
                            />
                        </span>
                        <ArrowRight size={13} strokeWidth={2} color='#111' className='transition-transform group-hover:translate-x-0.5' />
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
                            const BrandIcon = BRAND_ICON_MAP[sub.name];
                            const FcIcon = SUB_FC_ICON_MAP[sub.name] || FcDocument;
                            return (
                                <Link
                                    key={sub.name}
                                    href={sub.path}
                                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px', borderRadius: 8, transition: 'all 0.2s ease', position: 'relative' }}
                                    className="group"
                                >
                                    {/* Icon */}
                                    <span style={{ display: 'inline-flex', flexShrink: 0 }} className="group-hover:scale-110 transition-transform duration-200">
                                        {BrandIcon ? (
                                            <img src={BrandIcon} alt={sub.name} style={{ width: 22, height: 22, objectFit: 'contain' }} />
                                        ) : (
                                            <FcIcon size={22} />
                                        )}
                                    </span>
                                    {/* Label */}
                                    <span className="relative">
                                        <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#e5e5e5' : '#1a1a1a' }} className="transition-colors duration-200">
                                            {sub.name}
                                        </span>
                                        <span
                                            className="absolute left-0 bottom-[-2px] h-[1.5px] w-0 transition-all duration-300 group-hover:w-full"
                                            style={{ backgroundColor: c1, display: 'block' }}
                                        />
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
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstall = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstall);
        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    }, []);

    const handleInstallClick = () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                setDeferredPrompt(null);
            }
        });
    };

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
                    30% { transform: scale(1.1) rotate(-3deg); }
                    50% { transform: scale(0.95) rotate(3deg); }
                    70% { transform: scale(1.05) rotate(-1deg); }
                    100% { transform: scale(1) rotate(0); }
                }
                .luxury-shadow {
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
                }
                .dark .luxury-shadow {
                    box-shadow: 0 10px 40px -15px rgba(0,0,0,0.5);
                }
            `}</style>

            {/* ══ TOP BAR ══ */}
            <div className={`h-[72px] flex items-center border-b transition-all duration-300 ${isDark ? 'border-slate-800 bg-[#0f1115]/90' : 'border-slate-100 bg-white/90'}`}>
                <div className='w-full max-w-[1440px] mx-auto px-4 lg:px-8 flex items-center gap-4'>

                    {/* Logo */}
                    <Link href='/' className='flex items-center gap-0 shrink-0 group/logo logo-container'>
                        <Image
                            src='/logo.png'
                            alt='Logo'
                            width={48}
                            height={48}
                            priority={true}
                            className='h-10 sm:h-14 w-auto object-contain logo-icon transition-transform duration-300'
                        />
                        <span className='block ml-[-8px] sm:ml-[-12px] scale-[0.6] min-[400px]:scale-[0.7] min-[540px]:scale-[0.85] sm:scale-100 origin-left'>
                            <AnimatedLogo size="sm" loopInterval={30000} />
                        </span>
                    </Link>

                    {/* Search Bar - Fixed Single Line */}
                    <div className='hidden xl:flex items-center px-4 py-1.5 h-8 bg-white/10 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-md gap-3 cursor-pointer group transition-all duration-200 min-w-[180px] max-w-[280px] flex-1'>
                        <Search size={14} className='text-slate-400 group-hover:text-emerald-500 shrink-0' />
                        <span className='text-[11px] text-slate-400 font-medium truncate whitespace-nowrap'>Search materials, exams...</span>
                        <kbd className={`hidden md:flex ml-auto items-center px-1.5 py-0.5 rounded text-[10px] font-medium border shrink-0 ${isDark ? 'border-white/10 text-white/40' : 'border-black/5 text-black/40'
                            }`}>⌘K</kbd>
                    </div>

                    {/* Feature Buttons - Recovered ORIGINAL PROPER STYLE */}
                    <div className='hidden 2xl:flex items-center gap-1.5 flex-1 justify-center max-w-[960px]'>
                        {[
                            { label: 'Mock Tests', path: '/mock-tests', LIcon: Target, bg: 'bg-orange-600', iconBg: 'bg-orange-700' },
                            { label: 'Daily Affairs', path: '/current-affairs/daily', LIcon: Globe2, bg: 'bg-indigo-600', iconBg: 'bg-indigo-700' },
                            { label: 'Exams hub', path: '/current-affairs', LIcon: Newspaper, bg: 'bg-emerald-600', iconBg: 'bg-emerald-700' },
                            { label: 'Leaderboard', path: '/dashboard', LIcon: Trophy, bg: 'bg-pink-600', iconBg: 'bg-pink-700' },
                            { label: 'Library', path: '/study-materials', LIcon: Library, bg: 'bg-purple-600', iconBg: 'bg-purple-700' },
                        ].map(({ label, path, LIcon, bg, iconBg }) => (
                            <Link
                                key={label}
                                href={path}
                                className={`flex items-center h-8 rounded-md overflow-hidden border border-white/5 transition-all duration-200 ${bg} hover:brightness-110 active:scale-[0.98] shadow-sm shrink-0`}
                            >
                                <span className={`flex items-center justify-center w-8 h-8 ${iconBg} shrink-0`}>
                                    <LIcon size={13} color='white' strokeWidth={2.5} />
                                </span>
                                <span className='px-3.5 text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap leading-[1] mt-[0.5px]'>
                                    {label}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className='flex-1' />

                    {/* Right controls */}
                    <div className='flex items-center gap-1'>
                        {/* Notification Bell - Desktop only */}
                        <button
                            aria-label="Notifications"
                            className={`hidden md:flex relative w-9 h-9 rounded-lg items-center justify-center transition-all duration-150 ${isDark
                                ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/20'
                                : 'bg-amber-50 text-amber-500 hover:bg-amber-100 border border-amber-200'
                                }`}>
                            <Bell size={16} />
                            <span className='absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 border-2 border-white' style={{ borderColor: isDark ? '#0f0f0f' : '#fff' }} />
                        </button>

                        {/* Theme Toggle */}
                        <button
                            aria-label="Toggle Theme"
                            onClick={toggleTheme} className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-150 shrink-0 ${isDark
                                ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20'
                                : 'bg-sky-50 text-sky-500 hover:bg-sky-100 border border-sky-200'
                                }`}>
                            {isDark ? <Sun size={14} className="sm:w-4" /> : <Moon size={14} className="sm:w-4" />}
                        </button>

                        {isAuthenticated && user ? (
                            <div className='relative ml-1'>
                                <button
                                    onClick={() => setProfileOpen(p => !p)}
                                    className={`flex items-center gap-1 sm:gap-2 h-8 sm:h-10 px-1 sm:px-2.5 rounded-lg sm:rounded-xl border transition-all duration-200 shrink-0 ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10 text-gray-200' : 'border-gray-200 hover:border-gray-300 bg-gray-50/50 text-gray-700'
                                        }`}
                                >
                                    {user?.image && (
                                        <Image
                                            src={user.image}
                                            alt={user.name || 'User'}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-white/20 object-cover"
                                        />
                                    )}
                                    <div className={`user-initial-fallback w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#FFC107] to-[#FF9800] text-black font-bold text-[9px] sm:text-[11px] items-center justify-center ${user?.image ? 'hidden' : 'flex'}`}>
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </div>
                                    <span className='hidden min-[600px]:block text-[12px] sm:text-[13.5px] font-bold tracking-tight'>{user?.name?.split(' ')[0]}</span>
                                    <ChevronDown size={10} className={`hidden sm:block sm:w-3 transition-transform duration-300 opacity-60 ${profileOpen ? 'rotate-180' : ''}`} />
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
                                                {user?.image && (
                                                    <Image
                                                        src={user.image}
                                                        alt={user.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                                                    />
                                                )}
                                                <div className={`dropdown-initial-fallback w-10 h-10 rounded-full bg-amber-500 text-black font-bold items-center justify-center text-lg ${user?.image ? 'hidden' : 'flex'}`}>
                                                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <p className={`text-[15px] font-bold tracking-tight truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
                                                    <p className='text-[11px] text-gray-500 font-medium truncate opacity-70'>{user?.email}</p>
                                                </div>
                                            </div>
                                            <div className='p-2 flex flex-col gap-1'>
                                                {[
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
                                                    className={`flex items-center gap-3 px-4 py-3 text-[13.5px] font-bold rounded-xl text-red-500 transition-all`}
                                                >
                                                    <LogOut size={17} /> Sign Out
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className='flex items-center gap-1.5 ml-auto'>
                                <button
                                    onClick={() => signIn('google')}
                                    className={`hidden md:flex h-11 px-6 items-center gap-3 text-[14px] font-bold rounded-xl border transition-colors ${isDark
                                        ? 'border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20'
                                        : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                                        }`}
                                >
                                    <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="Google" />
                                    <span className="whitespace-nowrap">Sign in with Google</span>
                                </button>
                            </div>
                        )}

                        {/* Burger Button - Enhanced visibility */}
                        <button
                            aria-label="Open Menu"
                            className={`md:hidden shrink-0 ml-1 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all shadow-sm ${isDark
                                ? 'bg-white/5 text-gray-100 hover:bg-white/10 border border-white/5'
                                : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'
                                }`}
                            onClick={() => setMobileOpen(true)}
                        >
                            <Menu size={18} strokeWidth={2.5} className="sm:w-[22px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ══ NAV STRIP (Desktop) ══ */}
            <div className={`hidden md:block border-b backdrop-blur-md ${isDark ? 'bg-[#0f0f0f]/80 border-[#1a1a1a]' : 'bg-white/80 border-gray-100'}`}>
                {/* outer relative container — mega panel is positioned relative to this */}
                <div className='relative w-full max-w-[1440px] mx-auto px-2 lg:px-6'>
                    <div className='flex items-center justify-center gap-x-2 overflow-x-auto no-scrollbar'>

                        {/* Home */}
                        <Link href='/' className="shrink-0 flex items-center h-11 px-2.5 group relative">
                            <span className={`text-[12.5px] font-semibold transition-colors ${location.pathname === '/'
                                ? 'text-[#FFC107]'
                                : isDark
                                    ? 'text-gray-100 hover:text-white'
                                    : 'text-gray-800 hover:text-black'
                                }`}>Home</span>
                            <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${location.pathname === '/' ? 'w-full bg-[#FFC107]' : 'w-0 group-hover:w-full bg-[#FFC107]/60'
                                }`} style={{ display: 'block' }} />
                        </Link>

                        {mainCategories.map((cat) => (
                            <div
                                key={cat.title}
                                className='relative shrink-0'
                                onMouseEnter={() => handleMenuEnter(cat.title)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <button className={`group relative flex items-center gap-1 h-11 px-2.5 text-[12.5px] font-semibold transition-colors whitespace-nowrap ${activeMenu === cat.title || isActive(cat.path)
                                    ? 'text-[#FFC107]'
                                    : isDark
                                        ? 'text-gray-100 hover:text-white'
                                        : 'text-gray-800 hover:text-black'
                                    }`}>
                                    {cat.title}
                                    {cat.subcategories && (
                                        <ChevronDown size={12} className={`transition-transform duration-150 ${activeMenu === cat.title ? 'rotate-180 text-[#FFC107]' : 'opacity-60 group-hover:opacity-100'
                                            }`} />
                                    )}
                                    <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${activeMenu === cat.title || isActive(cat.path) ? 'w-full bg-[#FFC107]' : 'w-0 group-hover:w-full bg-[#FFC107]/60'
                                        }`} />
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] md:hidden'
                        onClick={() => setMobileOpen(false)}
                    />
                )}
                {mobileOpen && (
                    <motion.aside
                        initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 left-0 w-[280px] min-[360px]:w-[320px] sm:w-[380px] z-[9999] flex flex-col border-r border-white/5"
                        style={{ backgroundColor: isDark ? '#0a0a0a' : '#ffffff', height: '100dvh' }}
                    >
                        {/* Drawer header */}
                        <div className={`flex items-center justify-between px-3 h-16 border-b ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                            <Link href='/' onClick={() => setMobileOpen(false)} className='flex items-center min-w-0 flex-1 mr-2'>
                                <div className="flex items-center gap-1 min-w-0">
                                    <Image
                                        src='/logo.png'
                                        alt='Logo'
                                        width={32}
                                        height={32}
                                        className='h-7 sm:h-8 w-auto object-contain shrink-0'
                                    />
                                    <div className='overflow-hidden hidden min-[320px]:block scale-[0.9] origin-left'>
                                        <AnimatedLogo size="sm" loopInterval={30000} className="whitespace-nowrap" />
                                    </div>
                                </div>
                            </Link>
                            <div className='flex items-center gap-0.5 shrink-0'>
                                {/* Notifications in Sidebar */}
                                <button className={`relative w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark
                                    ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
                                    : 'bg-amber-50 text-amber-500 hover:bg-amber-100'
                                    }`}>
                                    <Bell size={16} />
                                    <span className='absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 border-2 border-white' style={{ borderColor: isDark ? '#0f0f0f' : '#fff' }} />
                                </button>
                                <button onClick={() => setMobileOpen(false)} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'text-gray-400 hover:bg-[#1e1e1e]' : 'text-gray-500 hover:bg-gray-100'}`}>
                                    <X size={18} />
                                </button>
                            </div>
                        </div>


                        {/* Search - Enhanced for visibility */}
                        <div className='p-4 pt-2'>
                            <div className={`flex items-center gap-3 rounded-xl border px-4 h-11 transition-all ${isDark
                                ? 'bg-white/5 border-white/10 focus-within:border-amber-500/50 focus-within:bg-white/10'
                                : 'bg-gray-50 border-gray-200 focus-within:border-amber-500/50 focus-within:bg-white focus-within:shadow-sm'
                                }`}>
                                <Search size={16} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                                <input
                                    type='text'
                                    placeholder='Search for exams or topics...'
                                    className='flex-1 bg-transparent text-sm outline-none font-medium placeholder:font-normal'
                                />
                            </div>
                        </div>

                        {/* Nav items - Forced visibility and height */}
                        <nav className='flex-1 overflow-y-auto px-1 py-1 custom-scrollbar' style={{ minHeight: '0' }}>
                            <div className="px-2 mb-4">
                                <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-3 px-2 ${isDark ? 'text-white' : 'text-black'}`}>Main</h4>
                                <Link href='/' onClick={() => setMobileOpen(false)} className={`flex items-center h-12 px-4 text-[14px] font-bold rounded-2xl mb-1.5 transition-all ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                    Home
                                </Link>
                            </div>

                            <div className="px-2">
                                <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-3 px-2 ${isDark ? 'text-white' : 'text-black'}`}>Explore Categories</h4>
                                <div className="flex flex-col gap-1.5">
                                    {mainCategories.map((cat) => {
                                        const CatIcon = cat.Icon;
                                        const isExpanded = mobileExpanded === cat.title;
                                        return (
                                            <div key={cat.title} className='mb-0.5'>
                                                {cat.subcategories ? (
                                                    <button
                                                        onClick={() => setMobileExpanded(isExpanded ? null : cat.title)}
                                                        className={`w-full flex items-center justify-between h-12 px-4 text-[14px] font-bold rounded-2xl transition-all ${isExpanded
                                                            ? isDark ? 'bg-white/10 text-amber-500 shadow-lg' : 'bg-amber-50 text-amber-900 shadow-sm'
                                                            : isDark ? 'text-gray-200 hover:bg-white/5' : 'text-gray-800 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        <div className='flex items-center gap-3'>
                                                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${cat.bgCls} ${cat.colorCls}`}>
                                                                <CatIcon size={16} strokeWidth={2.5} />
                                                            </div>
                                                            {cat.title}
                                                        </div>
                                                        <ChevronDown size={16} strokeWidth={3} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-amber-500' : 'text-gray-400'}`} />
                                                    </button>
                                                ) : (
                                                    <Link href={cat.path} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 h-12 px-4 text-[14px] font-bold rounded-2xl transition-all ${isDark ? 'text-gray-200 hover:bg-white/5' : 'text-gray-800 hover:bg-gray-50'}`}>
                                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${cat.bgCls} ${cat.colorCls}`}>
                                                            <CatIcon size={16} strokeWidth={2.5} />
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
                                                            <div className={`ml-4 mt-2 mb-2 rounded-[20px] border overflow-hidden ${isDark ? 'bg-black/40 border-white/5' : 'bg-white shadow-inner border-gray-100'}`}>
                                                                {cat.subcategories.map((sub) => {
                                                                    const BrandIcon = BRAND_ICON_MAP[sub.name];
                                                                    const SubIcon = sub.Icon;
                                                                    return (
                                                                        <Link
                                                                            key={sub.name}
                                                                            href={sub.path}
                                                                            onClick={() => setMobileOpen(false)}
                                                                            className={`flex items-center gap-3.5 px-5 py-3.5 text-[13px] font-bold border-b last:border-0 transition-colors ${isDark
                                                                                ? 'text-gray-400 border-white/5 hover:text-white hover:bg-white/5'
                                                                                : 'text-gray-600 border-gray-50 hover:text-amber-600 hover:bg-amber-50/30'
                                                                                }`}
                                                                        >
                                                                            {BrandIcon ? (
                                                                                <img src={BrandIcon} alt={sub.name} style={{ width: 17, height: 17, objectFit: 'contain' }} className="shrink-0" />
                                                                            ) : (
                                                                                <SubIcon size={15} strokeWidth={2.5} className={`shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                                                                            )}
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
                                </div>
                            </div>
                        </nav>

                        <div className="mt-auto">
                            {!isAuthenticated ? (
                                <div className={`p-5 border-t ${isDark ? 'border-white/5 bg-white/2' : 'border-gray-100 bg-gray-50/50'}`}>
                                    <button
                                        onClick={() => signIn('google')}
                                        className={`w-full h-12 flex items-center justify-center gap-3 rounded-xl border font-bold text-[14px] transition-colors ${isDark
                                            ? 'bg-white/5 border-white/10 text-white'
                                            : 'bg-white border-gray-200 text-black'
                                            }`}
                                    >
                                        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="Google" />
                                        Continue with Google
                                    </button>
                                    <p className={`text-[10px] text-center mt-3 font-medium opacity-50 ${isDark ? 'text-white' : 'text-black'}`}>
                                        Fast & Secure Access
                                    </p>
                                </div>
                            ) : (
                                <div className={`p-4 border-t flex items-center gap-3 mt-auto ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold shadow-md">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
                                        <button onClick={logout} className="text-[11px] font-black text-red-500 uppercase tracking-widest mt-0.5">Sign Out</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Navbar;
