import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, ChevronRight, ChevronLeft, Download,
  Landmark, Building2, Globe, Banknote, Shield, Train, Users,
  BookOpen, FileText, Bell, Clock, Search, ExternalLink,
  CheckCircle, TrendingUp, Star, Zap, Award, Target,
  Calendar, Newspaper, GraduationCap, Briefcase, MapPin
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import {
  sscData, bankingData, railwayData, policeData, statePscData,
  latestNotifications, syllabusHub, pyqHub, dailyStudyTips, motivationalQuotes
} from '../../data/exams/govt-exams-data';

// ─── MODULE COLOR CONFIG ───────────────────────────
const moduleConfig = {
  ssc: { color: '#1565C0', light: '#E3F2FD', icon: Building2, label: 'SSC' },
  banking: { color: '#00695C', light: '#E0F2F1', icon: Banknote, label: 'Banking' },
  railway: { color: '#C62828', light: '#FFEBEE', icon: Train, label: 'Railways' },
  police: { color: '#37474F', light: '#ECEFF1', icon: Shield, label: 'Police' },
  statepsc: { color: '#6A1B9A', light: '#F3E5F5', icon: MapPin, label: 'State PSC' },
  notifications: { color: '#E65100', light: '#FFF3E0', icon: Bell, label: 'Notifications' },
  pyq: { color: '#1B5E20', light: '#E8F5E9', icon: FileText, label: 'PYQ Vault' },
  syllabus: { color: '#4527A0', light: '#EDE7F6', icon: BookOpen, label: 'Syllabus' }
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
        <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: config.light }}>
          <config.icon size={22} style={{ color: config.color }} />
        </div>
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
        <div className={`w-8 h-8 rounded flex items-center justify-center transition-all ${isDark ? 'bg-[#21262d]' : 'bg-slate-50'}`}
             style={{ '--hover-bg': config.color }}>
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
  const [engagement, setEngagement] = useState(14280);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const base = 14000 + Math.sin((now.getHours() * 60 + now.getMinutes() - 480) * (Math.PI / 720)) * 3000;
    setEngagement(Math.floor(base + Math.random() * 500));
    const t = setInterval(() => {
      setEngagement(p => p + (Math.random() > 0.35 ? Math.floor(Math.random() * 4) : -Math.floor(Math.random() * 2)));
    }, 3500 + Math.random() * 2500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const q = setInterval(() => setQuoteIdx(i => (i + 1) % motivationalQuotes.length), 8000);
    return () => clearInterval(q);
  }, []);

  const tabs = [
    { id: 'overview', label: 'All Exams', icon: Target },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'syllabus', label: 'Syllabus Hub', icon: BookOpen },
    { id: 'pyq', label: 'PYQ Vault', icon: FileText },
    { id: 'tips', label: 'Study Tips', icon: Zap }
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

            {/* Live Stats Strip */}
            <div className={`flex items-center gap-5 ${cl.surface} border ${cl.border} rounded-lg px-5 py-4`}>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="relative"><div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping absolute" /><div className="w-1.5 h-1.5 rounded-full bg-red-500 relative" /></div>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub}`}>Live</span>
                </div>
                <p className="text-lg font-extrabold"><LiveNumber value={engagement} /><span className="text-[11px] font-medium text-emerald-500 ml-1">active</span></p>
              </div>
              <div className={`w-px h-10 ${isDark ? 'bg-[#30363d]' : 'bg-slate-200'}`} />
              <div>
                <p className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub} mb-1`}>Modules</p>
                <p className="text-lg font-extrabold">10 <span className={`text-[11px] font-medium ${cl.sub}`}>exams</span></p>
              </div>
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
                <tab.icon size={14} />
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

              {/* Quick Access — TNPSC & UPSC */}
              <div>
                <h2 className="text-[15px] font-bold mb-5 flex items-center gap-2">
                  <Star size={15} style={{ color: '#E65100' }} /> Featured Modules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: 'TNPSC', desc: 'Tamil Nadu PSC — Groups 1, 2, 2A & 4 examination prep.', path: '/exams/tnpsc', color: '#065f46', light: '#ecfdf5', icon: Landmark, tag: 'Tamil Nadu' },
                    { title: 'UPSC', desc: 'Civil Services — IAS, IPS, IFS elite preparation module.', path: '/exams/upsc', color: '#002147', light: '#eff6ff', icon: Award, tag: 'National' }
                  ].map((item, i) => (
                    <Link href={item.path} key={i}>
                      <motion.div whileHover={{ y: -2 }} className={`group relative p-7 rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-slate-200'}`}
                        style={{ borderTopColor: item.color, borderTopWidth: '3px' }}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.light }}>
                            <item.icon size={24} style={{ color: item.color }} />
                          </div>
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
                    <GraduationCap size={15} style={{ color: '#E65100' }} /> All Exam Modules
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
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: '#FFF3E0' }}>
                      <Bell size={22} style={{ color: '#E65100' }} />
                    </div>
                    <h3 className={`text-[17px] font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Notifications</h3>
                    <p className={`text-[12px] ${cl.sub} mb-5`}>Live exam alerts from all commissions</p>
                    <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-bold text-emerald-600">8 Active Alerts</span></div>
                  </div>
                  {/* PYQ Card */}
                  <div onClick={() => setActiveTab('pyq')} className={`cursor-pointer group relative h-full p-6 rounded-lg border-2 transition-all overflow-hidden ${isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-slate-200'}`}>
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#1B5E20' }} />
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: '#E8F5E9' }}>
                      <FileText size={22} style={{ color: '#1B5E20' }} />
                    </div>
                    <h3 className={`text-[17px] font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>PYQ Vault</h3>
                    <p className={`text-[12px] ${cl.sub} mb-5`}>Previous year papers from all exams</p>
                    <span className="text-[10px] font-bold" style={{ color: '#1B5E20' }}>500+ Papers Available</span>
                  </div>
                  {/* Syllabus Card */}
                  <div onClick={() => setActiveTab('syllabus')} className={`cursor-pointer group relative h-full p-6 rounded-lg border-2 transition-all overflow-hidden ${isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-slate-200'}`}>
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#4527A0' }} />
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: '#EDE7F6' }}>
                      <BookOpen size={22} style={{ color: '#4527A0' }} />
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
                    <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#FFF3E0' }}>
                      <Bell size={16} style={{ color: '#E65100' }} />
                    </div>
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
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#FFF3E0' }}>
                  <Zap size={18} style={{ color: '#E65100' }} />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={quoteIdx} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                    <p className="text-[13px] font-medium italic leading-relaxed">"{motivationalQuotes[quoteIdx].quote}"</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${cl.sub} mt-1`}>— {motivationalQuotes[quoteIdx].author}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Coming Soon */}
              <div className={`border-2 border-dashed ${cl.border} rounded-lg p-8 text-center`}>
                <Clock size={28} className={`mx-auto mb-3 ${cl.sub}`} />
                <h3 className="text-[16px] font-bold mb-1">More Modules Coming Soon</h3>
                <p className={`text-[12px] ${cl.sub}`}>Defence Exams, Teaching Exams (CTET/TET), Insurance Exams & more updates weekly.</p>
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
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : `${n.color}08` }}>
                            <Bell size={16} style={{ color: n.color }} />
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
                        <ExternalLink size={14} className={`${cl.sub} shrink-0`} />
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
                        <div className="w-9 h-9 rounded flex items-center justify-center" style={{ backgroundColor: `${s.color}12` }}>
                          <BookOpen size={16} style={{ color: s.color }} />
                        </div>
                        <h3 className="text-[14px] font-bold">{s.exam}</h3>
                      </div>
                      {s.link !== '#' && <a href={s.link} target="_blank" rel="noopener noreferrer" className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub} hover:text-orange-600 flex items-center gap-1`}>Official <ExternalLink size={10} /></a>}
                    </div>
                    <div className="p-5 space-y-4">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>Prelims / Phase I</h4>
                        <ul className="space-y-1.5">
                          {s.prelims.map((p, j) => (
                            <li key={j} className={`text-[12px] ${cl.sub} flex items-start gap-2`}>
                              <CheckCircle size={12} className="mt-0.5 shrink-0" style={{ color: s.color }} />
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
                              <CheckCircle size={12} className="mt-0.5 shrink-0 opacity-50" style={{ color: s.color }} />
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
                      <FileText size={16} style={{ color: ex.color }} />
                      <h3 className="text-[14px] font-bold">{ex.exam}</h3>
                    </div>
                    <div className="p-4 space-y-4">
                      {ex.years.map((yr, j) => (
                        <div key={j}>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: ex.color }}>Archive {yr.year}</h4>
                          <ul className="space-y-1.5">
                            {yr.papers.map((p, k) => (
                              <li key={k} className={`text-[12px] ${cl.sub} flex items-center gap-2`}>
                                <Download size={11} style={{ color: ex.color }} />
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
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFF3E0' }}>
                        <Zap size={16} style={{ color: '#E65100' }} />
                      </div>
                      <h3 className="text-[14px] font-bold">{tip.title}</h3>
                    </div>
                    <p className={`text-[13px] ${cl.sub} leading-relaxed`}>{tip.tip}</p>
                  </div>
                ))}
              </div>
              {/* Recommended Books section */}
              <div className={`${cl.surface} border ${cl.border} rounded-lg p-6`}>
                <h3 className="text-[14px] font-bold mb-4 flex items-center gap-2">
                  <BookOpen size={15} style={{ color: '#E65100' }} /> Top Recommended Books
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[...sscData.importantBooks, ...bankingData.importantBooks.slice(0, 2)].map((book, i) => (
                    <div key={i} className={`text-[12px] ${cl.sub} flex items-center gap-2 py-1.5`}>
                      <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                      {book}
                    </div>
                  ))}
                </div>
              </div>
              <div className={`border-2 border-dashed ${cl.border} rounded-lg p-8 text-center`}>
                <Clock size={24} className={`mx-auto mb-2 ${cl.sub}`} />
                <h4 className="text-[14px] font-bold mb-1">More Study Strategies Coming Soon</h4>
                <p className={`text-[11px] ${cl.sub}`}>Subject-wise preparation plans, topper interviews & strategy videos.</p>
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
