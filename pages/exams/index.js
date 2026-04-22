import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import {
  sscData, bankingData, railwayData, policeData, statePscData,
  latestNotifications, syllabusHub, pyqHub, dailyStudyTips, motivationalQuotes
} from '../../data/exams/govt-exams-data';

// ─── ICONS8 COLOR ICON MAP ─────────────────────────
const i8 = {
  ssc: 'https://img.icons8.com/color/96/parliament.png',
  banking: 'https://img.icons8.com/color/96/bank-building.png',
  railway: 'https://img.icons8.com/color/96/train.png',
  police: 'https://img.icons8.com/color/96/policeman-male.png',
  statepsc: 'https://img.icons8.com/color/96/india-map.png',
  bell: 'https://img.icons8.com/color/96/appointment-reminders.png',
  pyq: 'https://img.icons8.com/color/96/documents.png',
  syllabus: 'https://img.icons8.com/color/96/open-book--v1.png',
  star: 'https://img.icons8.com/color/48/star--v1.png',
  target: 'https://img.icons8.com/color/48/goal--v1.png',
  graduation: 'https://img.icons8.com/color/48/graduation-cap.png',
  tnpsc: 'https://img.icons8.com/color/96/museum.png',
  upsc: 'https://img.icons8.com/color/96/medal2.png',
  zap: 'https://img.icons8.com/color/48/flash-on.png',
  clock: 'https://img.icons8.com/color/48/clock--v1.png',
  download: 'https://img.icons8.com/color/48/download--v1.png',
  check: 'https://img.icons8.com/color/48/checkmark--v1.png',
  bookopen: 'https://img.icons8.com/color/48/open-book--v1.png',
  calendar: 'https://img.icons8.com/color/48/planner.png',
  news: 'https://img.icons8.com/color/48/news.png',
  test: 'https://img.icons8.com/color/48/test-passed.png',
  papers: 'https://img.icons8.com/color/48/documents.png',
  external: 'https://img.icons8.com/color/48/external-link.png',
};

// ─── ICONS8 IMAGE COMPONENT ────────────────────────
const I8 = ({ src, alt = 'icon', size = 22 }) => (
  <img src={src} alt={alt} width={size} height={size} className="inline-block" style={{ width: size, height: size }} />
);

// ─── MODULE COLOR CONFIG ───────────────────────────
const moduleConfig = {
  ssc: { color: '#1565C0', light: '#E3F2FD', iconSrc: i8.ssc, label: 'SSC' },
  banking: { color: '#00695C', light: '#E0F2F1', iconSrc: i8.banking, label: 'Banking' },
  railway: { color: '#C62828', light: '#FFEBEE', iconSrc: i8.railway, label: 'Railways' },
  police: { color: '#37474F', light: '#ECEFF1', iconSrc: i8.police, label: 'Police' },
  statepsc: { color: '#6A1B9A', light: '#F3E5F5', iconSrc: i8.statepsc, label: 'State PSC' },
  notifications: { color: '#E65100', light: '#FFF3E0', iconSrc: i8.bell, label: 'Notifications' },
  pyq: { color: '#1B5E20', light: '#E8F5E9', iconSrc: i8.pyq, label: 'PYQ Vault' },
  syllabus: { color: '#4527A0', light: '#EDE7F6', iconSrc: i8.syllabus, label: 'Syllabus' }
};

// ─── LIVE NUMBER COMPONENT ─────────────────────────
const LiveNumber = ({ value }) => (
  <motion.span key={value} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="inline-block tabular-nums">
    {typeof value === 'number' ? value.toLocaleString() : value}
  </motion.span>
);

// ─── NOTIFICATION STATUS BADGE ─────────────────────
const StatusBadge = ({ status }) => {
  const styles = {
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Upcoming: 'bg-amber-50 text-amber-700 border-amber-200',
    Result: 'bg-blue-50 text-blue-700 border-blue-200',
    Released: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Update: 'bg-orange-50 text-orange-700 border-orange-200'
  };
  return (
    <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${styles[status] || styles.Active}`}>
      {status}
    </span>
  );
};

// ─── EXAM MODULE CARD ──────────────────────────────
const ExamModuleCard = ({ data, config, href, isDark }) => (
  <Link href={href || '#'}>
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`group relative h-full p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 overflow-hidden ${
        isDark ? 'bg-[#161b22] border-[#30363d] hover:border-opacity-100' : 'bg-white border-slate-200 hover:border-opacity-100'
      }`}
      style={{ '--module-color': config.color, borderColor: isDark ? '#30363d' : '#e2e8f0' }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = config.color}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#30363d' : '#e2e8f0'}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: config.color }} />
      
      <div className="flex items-start justify-between mb-5">
        <I8 src={config.iconSrc} alt={config.label} size={32} />
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded" 
              style={{ color: config.color, backgroundColor: config.light }}>
          {data.stats?.examsPerYear || data.stats?.totalCommissions || '4+'} Exams
        </span>
      </div>

      <h3 className={`text-[17px] font-bold mb-2 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {data.shortTitle}
      </h3>
      <p className={`text-[12px] leading-relaxed mb-5 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        {data.tagline}
      </p>

      <div className={`pt-4 border-t flex items-center justify-between ${isDark ? 'border-[#30363d]' : 'border-slate-100'}`}>
        <div>
          <p className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Vacancies</p>
          <p className="text-[14px] font-bold" style={{ color: config.color }}>{data.stats?.vacancies || data.stats?.totalCommissions || '—'}</p>
        </div>
        <div className={`w-8 h-8 rounded flex items-center justify-center transition-all ${isDark ? 'bg-[#21262d]' : 'bg-slate-50'}`}>
          <ArrowRight size={14} className={`transition-transform group-hover:translate-x-0.5 ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
        </div>
      </div>
    </motion.div>
  </Link>
);

// ─── MAIN PAGE COMPONENT ───────────────────────────
const ExamsLandingPage = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [quoteIdx, setQuoteIdx] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const q = setInterval(() => setQuoteIdx(i => (i + 1) % motivationalQuotes.length), 8000);
    return () => clearInterval(q);
  }, []);

  const tabs = [
    { id: 'overview', label: 'All Exams', iconSrc: i8.target },
    { id: 'notifications', label: 'Notifications', iconSrc: i8.bell },
    { id: 'syllabus', label: 'Syllabus Hub', iconSrc: i8.syllabus },
    { id: 'pyq', label: 'PYQ Vault', iconSrc: i8.pyq },
    { id: 'tips', label: 'Study Tips', iconSrc: i8.zap }
  ];

  const cl = {
    bg: isDark ? 'bg-[#0d1117]' : 'bg-[#f6f8fa]',
    surface: isDark ? 'bg-[#161b22]' : 'bg-white',
    border: isDark ? 'border-[#30363d]' : 'border-[#d0d7de]',
    text: isDark ? 'text-[#e6edf3]' : 'text-[#1f2328]',
    sub: isDark ? 'text-[#8b949e]' : 'text-[#656d76]',
  };

  return (
    <div className={`min-h-screen ${cl.bg} ${cl.text} font-sans pt-[72px]`} style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
      <Head>
        <title>Government Exams 2026 — SSC, Banking, Railway, Police, State PSC | Complete Preparation Hub</title>
        <meta name="description" content="Prepare for SSC CGL, IBPS PO, RRB NTPC, Police SI, UPSC, State PSC exams. Access official notifications, previous year papers, detailed syllabus, and expert study tips. India's most comprehensive govt exam preparation portal." />
        <meta name="keywords" content="govt exams 2026, SSC CGL, IBPS PO, RRB NTPC, police exam, state PSC, UPSC, exam notification, previous year papers, exam syllabus, government jobs India" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* ═══ HERO SECTION ═══ */}
      <section className={`relative border-b ${cl.border} overflow-hidden`}>
        <div className="max-w-[1280px] mx-auto px-5 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: '#E65100', borderColor: '#E65100', backgroundColor: isDark ? 'rgba(230,81,0,0.08)' : '#FFF3E0' }}>
                  Updated Daily
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${cl.sub}`}>March 2026</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                Government Exam <span style={{ color: '#E65100' }}>Preparation Hub</span>
              </h1>
              <p className={`text-[13px] ${cl.sub} leading-relaxed max-w-xl`}>
                Your one-stop destination for SSC, Banking, Railway, Police, and State PSC exam preparation.
                Official notifications, verified syllabus, previous year papers, and expert strategies.
              </p>
            </div>

            {/* Platform Trust Signals */}
            <div className={`flex flex-col gap-2 ${cl.surface} border ${cl.border} rounded-lg px-5 py-4 max-w-sm`}>
              <div className="flex items-center gap-2">
                <I8 src={i8.check} alt="Verified" size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">Verified Study Material</span>
              </div>
              <p className={`text-[12px] leading-relaxed ${cl.sub}`}>
                All our previous year questions (PYQs) and mock assessments are strictly aligned with the latest commission guidelines, ensuring zero guesswork for your 2026 attempt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TAB NAVIGATION ═══ */}
      <nav className={`sticky top-[72px] z-30 border-b ${cl.border} ${isDark ? 'bg-[#0d1117]/95' : 'bg-[#f6f8fa]/95'} backdrop-blur-md`}>
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-[12px] font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? `${isDark ? 'bg-[#21262d] text-white' : 'bg-white text-slate-900'} border ${cl.border}`
                    : `${cl.sub} hover:${isDark ? 'bg-[#161b22]' : 'bg-white'}`
                }`}
              >
                <I8 src={tab.iconSrc} alt={tab.label} size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="max-w-[1280px] mx-auto px-5 py-8 md:py-12">
        <AnimatePresence mode="wait">

          {/* ─── OVERVIEW TAB ─── */}
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-10">

              {/* AdSense SEO Long Form Content */}
              <div className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden p-6 md:p-8`}>
                 <h2 className="text-2xl font-extrabold leading-tight mb-4">Complete Blueprint for Govt Exam Success in 2026</h2>
                 <div className={`space-y-4 text-[14px] leading-relaxed ${cl.sub}`}>
                   <p>
                     Securing a government job in India—whether through the Staff Selection Commission (SSC), Banking boards (IBPS/SBI), or State Public Service Commissions (like TNPSC and UPPSC)—demands unwavering dedication and a structured study paradigm. Candidates are evaluated across multiple competencies: Quantitative Aptitude, Logical Reasoning, General Awareness, and English Comprehension.
                   </p>
                   <p>
                     The most successful aspirants rely heavily on analyzing Previous Year Questions (PYQs). PYQs act as a compass, revealing the exam setter's mindset, the weightage of different topics, and the subtle changes in question patterns over the years. By integrating daily mock tests with comprehensive syllabus coverage, aspirants can drastically reduce their margin of error. 
                   </p>
                   <p>
                     We strongly advise candidates to stay updated with official employment news and commission notifications. Do not rely on unverified rumors. Use our daily updated Current Affairs dashboard and meticulously verified syllabus hubs to streamline your preparation process. Start localizing your weaknesses today by navigating through the specific exam modules below.
                   </p>
                 </div>
              </div>

              {/* Quick Access — TNPSC & UPSC */}
              <div>
                <h2 className="text-[15px] font-bold mb-5 flex items-center gap-2">
                  <I8 src={i8.star} alt="Featured" size={16} /> Featured Modules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: 'TNPSC', desc: 'Tamil Nadu PSC — Groups 1, 2, 2A & 4 examination prep.', path: '/exams/tnpsc', color: '#065f46', light: '#ecfdf5', iconSrc: i8.tnpsc, tag: 'Tamil Nadu' },
                    { title: 'UPSC', desc: 'Civil Services — IAS, IPS, IFS elite preparation module.', path: '/exams/upsc', color: '#002147', light: '#eff6ff', iconSrc: i8.upsc, tag: 'National' }
                  ].map((item, i) => (
                    <Link href={item.path} key={i}>
                      <motion.div whileHover={{ y: -2 }} className={`group relative p-7 rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-slate-200'}`}
                        style={{ borderTopColor: item.color, borderTopWidth: '3px' }}>
                        <div className="flex items-start justify-between mb-4">
                          <I8 src={item.iconSrc} alt={item.title} size={36} />
                          <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: item.color, backgroundColor: item.light }}>{item.tag}</span>
                        </div>
                        <h3 className={`text-xl font-extrabold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                        <p className={`text-[12px] ${cl.sub} leading-relaxed mb-5`}>{item.desc}</p>
                        <div className="flex items-center gap-2 text-[11px] font-bold" style={{ color: item.color }}>
                          Explore Module <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* All Exam Modules Grid */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-[15px] font-bold flex items-center gap-2">
                    <I8 src={i8.graduation} alt="Modules" size={16} /> All Exam Modules
                  </h2>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${cl.sub}`}>8 Categories</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ExamModuleCard data={sscData} config={moduleConfig.ssc} isDark={isDark} />
                  <ExamModuleCard data={bankingData} config={moduleConfig.banking} isDark={isDark} />
                  <ExamModuleCard data={railwayData} config={moduleConfig.railway} isDark={isDark} />
                  <ExamModuleCard data={policeData} config={moduleConfig.police} isDark={isDark} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  <ExamModuleCard data={statePscData} config={moduleConfig.statepsc} isDark={isDark} />
                  {/* Notifications Card */}
                  <div onClick={() => setActiveTab('notifications')} className={`cursor-pointer group relative h-full p-6 rounded-lg border-2 transition-all overflow-hidden ${isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-slate-200'}`}>
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#E65100' }} />
                    <div className="mb-5">
                      <I8 src={i8.bell} alt="Notifications" size={32} />
                    </div>
                    <h3 className={`text-[17px] font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Notifications</h3>
                    <p className={`text-[12px] ${cl.sub} mb-5`}>Live exam alerts from all commissions</p>
                    <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-bold text-emerald-600">8 Active Alerts</span></div>
                  </div>
                  {/* PYQ Card */}
                  <div onClick={() => setActiveTab('pyq')} className={`cursor-pointer group relative h-full p-6 rounded-lg border-2 transition-all overflow-hidden ${isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-slate-200'}`}>
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#1B5E20' }} />
                    <div className="mb-5">
                      <I8 src={i8.pyq} alt="PYQ" size={32} />
                    </div>
                    <h3 className={`text-[17px] font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>PYQ Vault</h3>
                    <p className={`text-[12px] ${cl.sub} mb-5`}>Previous year papers from all exams</p>
                    <span className="text-[10px] font-bold" style={{ color: '#1B5E20' }}>500+ Papers Available</span>
                  </div>
                  {/* Syllabus Card */}
                  <div onClick={() => setActiveTab('syllabus')} className={`cursor-pointer group relative h-full p-6 rounded-lg border-2 transition-all overflow-hidden ${isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-slate-200'}`}>
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#4527A0' }} />
                    <div className="mb-5">
                      <I8 src={i8.syllabus} alt="Syllabus" size={32} />
                    </div>
                    <h3 className={`text-[17px] font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Syllabus Hub</h3>
                    <p className={`text-[12px] ${cl.sub} mb-5`}>Complete syllabus for every major exam</p>
                    <span className="text-[10px] font-bold" style={{ color: '#4527A0' }}>6 Exam Syllabi</span>
                  </div>
                </div>
              </div>

              {/* Latest Notifications Preview */}
              <div className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
                <div className={`p-5 border-b ${cl.border} flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <I8 src={i8.bell} alt="Notifications" size={22} />
                    <div>
                      <h3 className="text-[14px] font-bold">Latest Exam Notifications</h3>
                      <p className={`text-[10px] ${cl.sub} font-medium uppercase tracking-widest`}>From all commissions</p>
                    </div>
                  </div>
                  <button onClick={() => setActiveTab('notifications')} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1" style={{ color: '#E65100' }}>
                    View All <ChevronRight size={12} />
                  </button>
                </div>
                <div className={`divide-y ${isDark ? 'divide-[#30363d]' : 'divide-slate-100'}`}>
                  {latestNotifications.slice(0, 4).map(n => (
                    <a key={n.id} href={n.link} target="_blank" rel="noopener noreferrer" className={`block p-4 transition-all ${isDark ? 'hover:bg-[#21262d]' : 'hover:bg-slate-50'} group`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: n.color }} />
                          <div>
                            <h4 className="text-[13px] font-bold">{n.title}</h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className={`text-[10px] font-medium ${cl.sub}`}>{n.date}</span>
                              <StatusBadge status={n.status} />
                              <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ color: n.color, backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : `${n.color}10` }}>{n.org}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className={`${cl.sub} group-hover:text-orange-600 transition-colors`} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Motivational Quote */}
              <div className={`${cl.surface} border ${cl.border} rounded-lg p-6 flex items-center gap-5`}>
                <I8 src={i8.zap} alt="Quote" size={26} />
                <AnimatePresence mode="wait">
                  <motion.div key={quoteIdx} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                    <p className="text-[13px] font-medium italic leading-relaxed">"{motivationalQuotes[quoteIdx].quote}"</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${cl.sub} mt-1`}>— {motivationalQuotes[quoteIdx].author}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ─── NOTIFICATIONS TAB ─── */}
          {activeTab === 'notifications' && (
            <motion.div key="notif" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-extrabold">Exam Notifications 2026</h2>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-bold text-emerald-600">Live Feed</span></div>
              </div>
              <div className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
                <div className={`divide-y ${isDark ? 'divide-[#30363d]' : 'divide-slate-100'}`}>
                  {latestNotifications.map(n => (
                    <a key={n.id} href={n.link} target="_blank" rel="noopener noreferrer" className={`block p-5 transition-all group ${isDark ? 'hover:bg-[#21262d]' : 'hover:bg-slate-50'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 mt-0.5">
                            <I8 src={i8.bell} alt="Alert" size={24} />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-bold mb-1.5 group-hover:text-orange-600 transition-colors">{n.title}</h4>
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className={`text-[11px] font-medium ${cl.sub}`}>{n.date}</span>
                              <StatusBadge status={n.status} />
                              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border" style={{ color: n.color, borderColor: `${n.color}30` }}>{n.category}</span>
                            </div>
                          </div>
                        </div>
                        <I8 src={i8.external} alt="Link" size={14} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <p className={`text-[11px] ${cl.sub} text-center`}>Sources: UPSC, SSC, IBPS, RRB, TNPSC & State PSC official portals. Updated daily.</p>
            </motion.div>
          )}

          {/* ─── SYLLABUS TAB ─── */}
          {activeTab === 'syllabus' && (
            <motion.div key="syl" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">
              <h2 className="text-[18px] font-extrabold">Complete Syllabus Hub</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {syllabusHub.map((s, i) => (
                  <div key={i} className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
                    <div className="p-5 border-b flex items-center justify-between" style={{ borderBottomColor: isDark ? '#30363d' : '#e2e8f0' }}>
                      <div className="flex items-center gap-3">
                        <I8 src={i8.syllabus} alt="Syllabus" size={24} />
                        <h3 className="text-[14px] font-bold">{s.exam}</h3>
                      </div>
                      {s.link !== '#' && <a href={s.link} target="_blank" rel="noopener noreferrer" className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub} hover:text-orange-600 flex items-center gap-1`}>Official <I8 src={i8.external} alt="Link" size={10} /></a>}
                    </div>
                    <div className="p-5 space-y-4">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>Prelims / Phase I</h4>
                        <ul className="space-y-1.5">
                          {s.prelims.map((p, j) => (
                            <li key={j} className={`text-[12px] ${cl.sub} flex items-start gap-2`}>
                              <I8 src={i8.check} alt="✓" size={13} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>Mains / Phase II</h4>
                        <ul className="space-y-1.5">
                          {s.mains.map((m, j) => (
                            <li key={j} className={`text-[12px] ${cl.sub} flex items-start gap-2`}>
                              <I8 src={i8.check} alt="✓" size={13} />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ─── PYQ TAB ─── */}
          {activeTab === 'pyq' && (
            <motion.div key="pyq" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">
              <h2 className="text-[18px] font-extrabold">Previous Year Question Papers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {pyqHub.map((ex, i) => (
                  <div key={i} className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
                    <div className="p-4 flex items-center gap-3" style={{ borderBottom: `2px solid ${ex.color}` }}>
                      <I8 src={i8.pyq} alt="Papers" size={18} />
                      <h3 className="text-[14px] font-bold">{ex.exam}</h3>
                    </div>
                    <div className="p-4 space-y-4">
                      {ex.years.map((yr, j) => (
                        <div key={j}>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: ex.color }}>Archive {yr.year}</h4>
                          <ul className="space-y-1.5">
                            {yr.papers.map((p, k) => (
                              <li key={k} className={`text-[12px] ${cl.sub} flex items-center gap-2`}>
                                <I8 src={i8.download} alt="Download" size={13} />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className={`text-[11px] ${cl.sub} text-center`}>Papers sourced from official commission websites. More archives being added weekly.</p>
            </motion.div>
          )}

          {/* ─── STUDY TIPS TAB ─── */}
          {activeTab === 'tips' && (
            <motion.div key="tips" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-6">
              <h2 className="text-[18px] font-extrabold">Daily Study Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {dailyStudyTips.map((tip, i) => (
                  <div key={i} className={`${cl.surface} border ${cl.border} rounded-lg p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <I8 src={i8.zap} alt="Tip" size={24} />
                      <h3 className="text-[14px] font-bold">{tip.title}</h3>
                    </div>
                    <p className={`text-[13px] ${cl.sub} leading-relaxed`}>{tip.tip}</p>
                  </div>
                ))}
              </div>
              {/* Recommended Books section */}
              <div className={`${cl.surface} border ${cl.border} rounded-lg p-6`}>
                <h3 className="text-[14px] font-bold mb-4 flex items-center gap-2">
                  <I8 src={i8.bookopen} alt="Books" size={16} /> Top Recommended Books
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[...sscData.importantBooks, ...bankingData.importantBooks.slice(0, 2)].map((book, i) => (
                    <div key={i} className={`text-[12px] ${cl.sub} flex items-center gap-2 py-1.5`}>
                      <I8 src={i8.check} alt="✓" size={13} />
                      {book}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ExamsLandingPage;
