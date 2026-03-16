import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import Head from 'next/head';
import {
  Search, ChevronRight, ArrowRight,
} from 'lucide-react';


const Home = () => {
  const { isDark } = useTheme();
  const [notices, setNotices] = useState([
    'TNPSC Group 2 Notification 2026 Released — Apply before 30 Mar',
    'Python Roadmap 2026 Updated — New DSA section added',
    'TCS NQT Registration Open — Last date 15 Apr 2026',
    'Daily Current Affairs – March 2026 — Read now',
    'SSC CGL 2026 Exam Date Announced — Prepare with mock tests',
    'Free Aptitude PDFs Released — Download today',
  ]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [techRes, genRes] = await Promise.all([
          fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json'),
          fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json')
        ]);
        
        const techData = await techRes.json();
        const genData = await genRes.json();
        
        let combined = [];
        const customUpdates = [
          'TNPSC Group 4 Notification: New Vacancies Announced for 2026',
          'IT Interview Alert: TCS & Infosys hiring for Batch 2024-25',
          'Exam Update: SSC CGL Tier 1 Registration starting next week',
          'Career Guide: Top 10 DSA Questions for Amazon & Google Interviews'
        ];

        if (techData.articles) {
          const itNews = techData.articles.slice(0, 5).map(a => `IT Update: ${a.title}`);
          combined = [...combined, ...itNews];
        }
        if (genData.articles) {
          const examNews = genData.articles.slice(0, 5).map(a => `Exam News: ${a.title}`);
          combined = [...combined, ...examNews];
        }

        const finalFeed = [...customUpdates, ...combined];
        setNotices(finalFeed);
      } catch (err) {
        console.log("Using default notices as fallback");
      }
    };
    fetchNews();
  }, []);


  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f4f5f7] text-gray-900';
  const card = isDark ? 'bg-[#141414] border-[#242424]' : 'bg-white border-gray-200';
  const muted = isDark ? 'text-gray-200' : 'text-black font-semibold';
  const divider = isDark ? 'border-[#242424]' : 'border-gray-200';
  const altBg = isDark ? 'bg-[#111111]' : 'bg-white';
  const headFont = { fontFamily: 'Manrope, sans-serif' };
  const bodyFont = { fontFamily: 'Plus Jakarta Sans, sans-serif' };

  /* ── data ── */
  const trendingTopics = [
    { title: 'TNPSC Group 2 Preparation Guide 2026', path: '/exams/tnpsc', tag: 'Govt Exam' },
    { title: 'Python Programming Roadmap for Beginners', path: '/programming/python', tag: 'Programming' },
    { title: 'TCS NQT Interview Questions and Answers', path: '/interviews/company', tag: 'Interview' },
    { title: 'Daily Current Affairs for Competitive Exams', path: '/current-affairs/daily', tag: 'Current Affairs' },
    { title: 'Top Aptitude Questions for Campus Placements', path: '/aptitude/quantitative', tag: 'Aptitude' },
    { title: 'Data Structures Interview Questions', path: '/programming/data-structures', tag: 'DSA' },
  ];

  const learningPaths = [
    { title: 'Government Exam Preparation', desc: 'TNPSC, UPSC, SSC, Banking, Railway — curated study materials and mock tests.', path: '/exams', cta: 'Start Preparation', accent: '#1d4ed8', grad: ['#FFC107', '#F59E0B', '#D97706'], accentBg: 'rgba(29,78,216,0.08)', iconUrl: 'https://img.icons8.com/3d-fluency/94/book-shelf.png', stat: '10+ Exams', tag: 'Govt Exams', textColor: '#fff', textMuted: 'rgba(255,255,255,0.82)', chipBg: 'rgba(255,255,255,0.2)', tagBg: 'rgba(0,0,0,0.25)', divBorder: 'rgba(255,255,255,0.2)', arrowBg: 'rgba(255,255,255,0.25)', arrowColor: '#fff' },
    { title: 'Aptitude & Reasoning', desc: 'Quantitative aptitude, logical reasoning, data interpretation and verbal ability.', path: '/aptitude', cta: 'Practice Now', accent: '#7c3aed', grad: ['#c0392b', '#a93226', '#7b241c'], accentBg: 'rgba(109,40,217,0.08)', iconUrl: 'https://img.icons8.com/keek/100/math-folder.png', stat: '3,700+ Qs', tag: 'Placement', textColor: '#fff', textMuted: 'rgba(255,255,255,0.82)', chipBg: 'rgba(255,255,255,0.2)', tagBg: 'rgba(0,0,0,0.25)', divBorder: 'rgba(255,255,255,0.2)', arrowBg: 'rgba(255,255,255,0.25)', arrowColor: '#fff' },
    { title: 'Programming & Coding', desc: 'Python, Java, C++, data structures and algorithms for coding interviews.', path: '/programming', cta: 'Start Learning', accent: '#15803d', grad: ['#00796b', '#00695c', '#004d40'], accentBg: 'rgba(21,128,61,0.08)', iconUrl: 'https://img.icons8.com/external-prettycons-flat-prettycons/47/external-coding-web-seo-prettycons-flat-prettycons.png', stat: '9 Languages', tag: 'Coding', textColor: '#fff', textMuted: 'rgba(255,255,255,0.82)', chipBg: 'rgba(255,255,255,0.2)', tagBg: 'rgba(0,0,0,0.25)', divBorder: 'rgba(255,255,255,0.2)', arrowBg: 'rgba(255,255,255,0.25)', arrowColor: '#fff' },
    { title: 'Interview Preparation', desc: 'HR interviews, technical rounds, company-specific questions with answer guides.', path: '/interviews', cta: 'Prepare Now', accent: '#b45309', grad: ['#8e24aa', '#7b1fa2', '#6a1b9a'], accentBg: 'rgba(180,83,9,0.08)', iconUrl: 'https://img.icons8.com/external-nawicon-outline-color-nawicon/64/external-Interview-recruitment-nawicon-outline-color-nawicon.png', stat: '800+ Qs', tag: 'Interview', textColor: '#fff', textMuted: 'rgba(255,255,255,0.82)', chipBg: 'rgba(255,255,255,0.2)', tagBg: 'rgba(0,0,0,0.25)', divBorder: 'rgba(255,255,255,0.2)', arrowBg: 'rgba(255,255,255,0.25)', arrowColor: '#fff' },
  ];

  const practiceCategories = [
    { label: 'Quantitative Aptitude Questions', path: '/aptitude/quantitative', count: '2,000+', icon: 'https://img.icons8.com/color/48/math.png' },
    { label: 'Logical Reasoning Questions', path: '/aptitude/logical', count: '1,500+', icon: 'https://img.icons8.com/color/48/idea.png' },
    { label: 'Verbal Ability Questions', path: '/aptitude/verbal', count: '1,200+', icon: 'https://img.icons8.com/color/48/rubiks-cube.png' },
    { label: 'Programming MCQs', path: '/mock-tests/programming', count: '3,000+', icon: 'https://img.icons8.com/color/48/source-code.png' },
    { label: 'Technical Interview Questions', path: '/interviews/technical', count: '800+', icon: 'https://img.icons8.com/color/48/interview.png' },
    { label: 'Data Structures Practice', path: '/programming/data-structures', count: '600+', icon: 'https://img.icons8.com/color/48/mind-map.png' },
  ];

  const mockTests = [
    { label: 'TNPSC Group Exams Mock Test', path: '/mock-tests/govt', tag: 'Govt Exam' },
    { label: 'SSC CGL / CHSL Mock Test', path: '/mock-tests/govt', tag: 'Govt Exam' },
    { label: 'Aptitude Placement Test', path: '/mock-tests/aptitude', tag: 'Placement' },
    { label: 'Programming MCQ Test', path: '/mock-tests/programming', tag: 'Coding' },
  ];

  const mockFeatures = [
    'Real exam-pattern questions with explanations',
    'Timed test with auto-submit on time over',
    'Instant score and subject-wise analysis',
    'Performance history and leaderboard',
  ];

  const currentAffairsLinks = [
    { label: 'Daily Current Affairs', path: '/current-affairs/daily', icon: 'https://img.icons8.com/color/48/news.png' },
    { label: 'Weekly Current Affairs', path: '/current-affairs/weekly', icon: 'https://img.icons8.com/color/48/calendar--v1.png' },
    { label: 'Monthly Current Affairs', path: '/current-affairs/monthly', icon: 'https://img.icons8.com/color/48/timetable.png' },
    { label: 'Current Affairs Quiz', path: '/current-affairs/quiz', icon: 'https://img.icons8.com/color/48/help.png' },
  ];

  const studyMaterials = [
    { label: 'Exam Preparation Notes', path: '/study-materials/notes', type: 'Notes' },
    { label: 'Important Formulas for Aptitude', path: '/study-materials/formulas', type: 'Formula' },
    { label: 'Programming Cheat Sheets', path: '/study-materials/cheat-sheets', type: 'Cheat Sheet' },
    { label: 'Interview Preparation Guides', path: '/interviews/resume', type: 'Guide' },
    { label: 'Downloadable PDFs', path: '/study-materials/pdfs', type: 'PDF' },
  ];

  const blogPosts = [
    { title: 'How to Prepare for TNPSC Group 2 Exam', path: '/blog/career', tag: 'Govt Exam' },
    { title: 'Top 50 Python Interview Questions for Freshers', path: '/blog/tutorials', tag: 'Programming' },
    { title: 'Best Strategy to Crack Aptitude Tests', path: '/blog/exam-prep', tag: 'Aptitude' },
    { title: 'Data Structures Explained for Beginners', path: '/blog/tutorials', tag: 'DSA' },
    { title: 'How to Prepare for Technical Interviews', path: '/blog/career', tag: 'Interview' },
  ];

  const jobs = [
    { label: 'Government Job Notifications', path: '/jobs/govt' },
    { label: 'IT Jobs for Freshers', path: '/jobs/it' },
    { label: 'Internship Opportunities', path: '/jobs/internships' },
    { label: 'Walk-in Interview Updates', path: '/jobs/walkin' },
  ];

  const whyUs = [
    { text: 'Comprehensive preparation for government exams and placements', icon: 'https://img.icons8.com/color/48/diploma.png' },
    { text: 'Thousands of practice questions and topic-wise mock tests', icon: 'https://img.icons8.com/color/48/test-tube.png' },
    { text: 'Updated daily current affairs and study materials', icon: 'https://img.icons8.com/color/48/globe-earth.png' },
    { text: 'Beginner-friendly programming tutorials with examples', icon: 'https://img.icons8.com/color/48/api.png' },
    { text: 'Free resources for students and job seekers', icon: 'https://img.icons8.com/color/48/library.png' },
    { text: 'Performance tracking and detailed analytics', icon: 'https://img.icons8.com/color/48/growing-money.png' },
  ];

  const quickLinks = [
    { label: 'TNPSC Questions', path: '/exams/tnpsc' },
    { label: 'Python Interview Questions', path: '/programming/python' },
    { label: 'Aptitude Practice', path: '/aptitude/quantitative' },
    { label: 'Current Affairs 2026', path: '/current-affairs/daily' },
    { label: 'TCS Interview Questions', path: '/interviews/company' },
    { label: 'Data Structures Questions', path: '/programming/data-structures' },
    { label: 'UPSC Preparation', path: '/exams/upsc' },
    { label: 'SSC CGL Mock Test', path: '/mock-tests/govt' },
    { label: 'Logical Reasoning PDF', path: '/study-materials/pdfs' },
    { label: 'Java Interview Questions', path: '/programming/java' },
  ];

  const tagColor = {
    'Govt Exam': { bg: isDark ? 'rgba(59,130,246,0.15)' : '#F3F4F6', text: isDark ? '#60a5fa' : '#374151', cardBg: { light: '#eff6ff', dark: '#0d1b33' } },
    'Programming': { bg: isDark ? 'rgba(34,197,94,0.15)' : '#ecfcf3', text: isDark ? '#4ade80' : '#115e59', cardBg: { light: '#f0fdf4', dark: '#0d2618' } },
    'Coding': { bg: isDark ? 'rgba(34,197,94,0.15)' : '#E6F8F3', text: isDark ? '#4ade80' : '#000000', cardBg: { light: '#f0fdf4', dark: '#0d2618' } },
    'Interview': { bg: isDark ? 'rgba(245,158,11,0.15)' : '#fef3c7', text: isDark ? '#fbbf24' : '#92400e', cardBg: { light: '#fffbeb', dark: '#2a1a05' } },
    'Current Affairs': { bg: isDark ? 'rgba(239,68,68,0.15)' : '#fef2f2', text: isDark ? '#f87171' : '#991b1b', cardBg: { light: '#fff5f5', dark: '#2a0d0d' } },
    'Aptitude': { bg: isDark ? 'rgba(139,92,246,0.15)' : '#f3e8ff', text: isDark ? '#a78bfa' : '#5b21b6', cardBg: { light: '#f5f3ff', dark: '#1a0d33' } },
    'DSA': { bg: isDark ? 'rgba(14,165,233,0.15)' : '#e0f2fe', text: isDark ? '#38bdf8' : '#0369a1', cardBg: { light: '#f0f9ff', dark: '#0a1e2a' } },
    'Placement': { bg: isDark ? 'rgba(249,115,22,0.15)' : '#FFF1E8', text: isDark ? '#fb923c' : '#000000', cardBg: { light: '#fffbeb', dark: '#2a1a05' } },
  };

  const Tag = ({ label }) => {
    const c = tagColor[label] ?? { bg: 'rgba(75,85,99,0.08)', text: '#4b5563' };
    return (
      <span style={{ background: c.bg, color: c.text, fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 3, letterSpacing: '0.03em' }}>
        {label}
      </span>
    );
  };

  const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } };
  const stagger = { show: { transition: { staggerChildren: 0.06 } } };

  /* ── Reusable section heading ── */
  const SectionHead = ({ title, sub, to, linkLabel, iconUrl }) => (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-10 border-b ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2.5">
            {iconUrl && (
            <Image src={iconUrl} alt="" width={30} height={30} className="w-[30px] h-[30px] object-contain shrink-0" loading="lazy" />
          )}
          <h2 className="text-[22px] sm:text-[24px] font-[900] tracking-tight antialiased"
            style={{
              background: isDark ? 'linear-gradient(to right, #fbbf24, #f59e0b, #ffffff)' : 'linear-gradient(to right, #1e3a8a, #1d4ed8, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }}>
            {title}
          </h2>
        </div>
        {sub && <p className={`text-[14px] leading-relaxed max-w-2xl font-bold ${isDark ? 'text-gray-100' : 'text-black'}`}>{sub}</p>}
      </div>
      {to && (
        <Link href={to} className="flex items-center gap-1.5 text-[13px] font-bold whitespace-nowrap group pb-1">
          <span className={`transition-colors ${isDark ? 'text-amber-400 group-hover:text-amber-300' : 'text-[#1d4ed8] group-hover:text-[#1e3a8a]'}`}>{linkLabel || 'View All'}</span>
          <ChevronRight size={15} className={`transition-transform group-hover:translate-x-1.5 ${isDark ? 'text-amber-400' : 'text-[#1d4ed8]'}`} />
        </Link>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen pt-[72px] md:pt-[104px] ${bg} selection:bg-blue-100 selection:text-blue-900`} style={bodyFont}>
      <Head>
        <title>PracticeForever | Master Govt Exams, Aptitude & Coding Interviews</title>
        <meta name="description" content="Prepare for TNPSC, SSC, Banking, and IT interviews with PracticeForever. 8,000+ practice questions, daily current affairs, and subject-wise mock tests." />
        <meta name="keywords" content="TNPSC preparation, aptitude test practice, coding interviews, daily current affairs 2026, mock tests, SSC CGL prep, placement exams" />
      </Head>

      {/* ══ 1. TOP ANNOUNCEMENT BAR ══ */}
      <div className={`border-b overflow-hidden ${isDark ? 'border-[#1e1e1e] bg-[#111]' : 'border-amber-200 bg-amber-50'}`}>
        <style>{`
          @keyframes notice-slide {
            0%   { transform:translateY(0); opacity:1; }
            13%  { transform:translateY(0); opacity:1; }
            16.6%{ transform:translateY(-16.6667%); opacity:1; }
            30%  { transform:translateY(-16.6667%); opacity:1; }
            33.3%{ transform:translateY(-33.3333%); opacity:1; }
            46%  { transform:translateY(-33.3333%); opacity:1; }
            50%  { transform:translateY(-50%); opacity:1; }
            63%  { transform:translateY(-50%); opacity:1; }
            66.6%{ transform:translateY(-66.6667%); opacity:1; }
            80%  { transform:translateY(-66.6667%); opacity:1; }
            83.3%{ transform:translateY(-83.3333%); opacity:1; }
            96%  { transform:translateY(-83.3333%); opacity:1; }
            100% { transform:translateY(-100%); }
          }
          @keyframes draw-underline {
            0%, 20% { stroke-dashoffset: 220; opacity: 0; }
            20% { opacity: 1; }
            98% { stroke-dashoffset: 0; opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes marker-move {
            0%, 5% { transform: translate(0, 0) rotate(-5deg); opacity: 0; }
            5% { opacity: 1; }
            80% { transform: translate(212px, 0) rotate(5deg); opacity: 1; }
            100% { transform: translate(212px, 0) rotate(5deg); opacity: 0; }
          }
          @keyframes badge-pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
          }
          @keyframes live-pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
          }
        `}</style>
        <style>{`
          .hover-pause:hover { animation-play-state: paused !important; }
          @media (max-width: 768px) {
            .ticker-strip { flex-direction: column !important; height: auto !important; padding: 2px 0 !important; align-items: flex-start !important; }
            .ticker-badge { margin-bottom: 0px !important; margin-left: 8px !important; scale: 0.8; transform-origin: left; }
            .ticker-content { width: 100% !important; padding-left: 8px !important; height: 16px !important; margin-top: -2px !important; }
            .live-strip { height: auto !important; padding: 2px 0 !important; }
            .live-badge-container { position: relative !important; padding-left: 8px !important; padding-bottom: 0px !important; background: transparent !important; scale: 0.8; transform-origin: left; }
            .live-ticker { padding-left: 8px !important; height: 30px !important; margin-top: -4px !important; }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex items-center ticker-strip h-8 sm:h-10">
          <span className="shrink-0 ticker-badge" style={{ display: 'inline-flex', alignItems: 'center', height: 24 }}>
            <span style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              height: 24,
              padding: '0 4px 0 10px',
              background: '#ff0000',
              borderRadius: '12px 0 0 12px',
              color: '#ffffff'
            }}>
              <strong style={{
                color: '#ffffff',
                fontWeight: 900,
                fontSize: 10,
                letterSpacing: '0.04em',
                position: 'relative',
                zIndex: 2,
                fontStyle: 'normal',
                animation: 'live-pulse 2s infinite'
              }}>
                LATEST
              </strong>
              {/* Right triangle tip */}
              <span style={{
                position: 'absolute',
                left: '100%',
                top: 0,
                width: 0,
                height: 0,
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                borderLeft: '10px solid #ff0000',
                zIndex: 1
              }} />
            </span>
          </span>
          <div className="ticker-content" style={{ flex: 1, overflow: 'hidden', height: 22, position: 'relative' }}>
            <div 
                  className="hover-pause"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 32,
                    animation: notices.length > 0 ? 'notice-ticker 240s linear infinite' : 'none',
                    whiteSpace: 'nowrap',
                    width: 'max-content'
                  }}>
                  {notices.map((msg, i) => (
                    <em key={i} style={{ fontStyle: 'normal', display: 'inline-flex', alignItems: 'center', height: 22, fontSize: 11, sm: { fontSize: 12 }, fontWeight: 600, color: isDark ? '#d4d4d4' : '#92400e', letterSpacing: '0.01em' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: isDark ? '#fbbf24' : '#d97706', marginRight: 8, flexShrink: 0 }} />
                      {msg}
                    </em>
                  ))}
                  {/* Clone for loop */}
                  {notices.map((msg, i) => (
                    <em key={`clone-${i}`} style={{ fontStyle: 'normal', display: 'inline-flex', alignItems: 'center', height: 22, fontSize: 11, sm: { fontSize: 12 }, fontWeight: 600, color: isDark ? '#d4d4d4' : '#92400e', letterSpacing: '0.01em' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: isDark ? '#fbbf24' : '#d97706', marginRight: 8, flexShrink: 0 }} />
                      {msg}
                    </em>
                  ))}
                </div>
          </div>
        </div>
      </div>

      {/* ══ MARQUEE STRIP ══ */}
      <div className="live-strip" style={{ position: 'relative', overflow: 'hidden', height: 46, borderBottom: `1px solid ${isDark ? '#1c1c1c' : '#e8e8e8'}`, background: isDark ? '#0b0b0b' : '#ffffff' }}>
        <style>{`
          @keyframes mq-ticker { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
          @keyframes notice-ticker { 0% { transform:translateX(0) } 100% { transform:translateX(-100%) } }
          .mq-ticker { display:flex; width:max-content; align-items:center; height:46px; animation:mq-ticker 64s linear infinite; }
          .mq-ticker:hover { animation-play-state:paused; }
          .mq-item:hover .mq-title { color: #FFC107 !important; }
        `}</style>

        {/* Left anchor — LIVE label */}
        <div className="live-badge-container" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, zIndex: 10, display: 'flex', alignItems: 'center', pointerEvents: 'none', background: isDark ? 'linear-gradient(to right,#0b0b0b 76%,transparent)' : 'linear-gradient(to right,#ffffff 76%,transparent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, paddingLeft: 10, paddingRight: 40 }}>
            {/* LIVE arrow badge — reduced size */}
            <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, height: 22 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', height: 22, borderRadius: '11px 0 0 11px', background: '#16a34a', overflow: 'hidden' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, background: '#15803d', flexShrink: 0 }}>
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.5L8.5 5L2 8.5V1.5Z" fill="white" />
                  </svg>
                </span>
                <em style={{ fontStyle: 'normal', fontSize: 10, fontWeight: 900, letterSpacing: '0.12em', color: '#fff', padding: '0 6px 0 5px', whiteSpace: 'nowrap', animation: 'live-pulse 1.5s infinite ease-in-out' }}>
                  LIVE
                </em>
              </span>
              <svg width="10" height="22" viewBox="0 0 13 28" style={{ display: 'block', flexShrink: 0 }}>
                <polygon points="0,0 13,14 0,28" fill="#16a34a" />
              </svg>
            </span>
            {/* Double chevron arrows */}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0, marginLeft: 6, flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4L9 8L5 12" stroke={isDark ? '#333' : '#bbb'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: -4 }}>
                <path d="M5 4L9 8L5 12" stroke={isDark ? '#252525' : '#d8d8d8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
        {/* Right fade */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, zIndex: 10, width: 52, background: isDark ? 'linear-gradient(to left,#0b0b0b,transparent)' : 'linear-gradient(to left,#ffffff,transparent)', pointerEvents: 'none' }} />

        {/* Scrolling items */}
        <div className="mq-ticker live-ticker" style={{ paddingLeft: 'clamp(100px, 20vw, 148px)' }}>
          {[
            { label: 'Government Exam Prep', cat: 'Govt Exams', stat: 'Top Resources', color: '#3b7dd8', icon: '▣' },
            { label: 'Aptitude & Reasoning', cat: 'Aptitude', stat: '200+ topics', color: '#9457f5', icon: '◈' },
            { label: 'Programming & DSA', cat: 'Coding', stat: '30+ languages', color: '#10a37f', icon: '◉' },
            { label: 'Full Mock Tests', cat: 'Mock Tests', stat: 'Subject Wise', color: '#e04b4b', icon: '◎' },
            { label: 'Daily Current Affairs', cat: 'News & GK', stat: 'Updated daily', color: '#e08c0a', icon: '◆' },
            { label: 'Interview Prep', cat: 'Careers', stat: 'Detailed Q&A', color: '#d946a8', icon: '◐' },
            { label: 'Free Study PDFs', cat: 'Resources', stat: 'Full Access', color: '#0891b2', icon: '◑' },
            // duplicate for seamless loop
            { label: 'Government Exam Prep', cat: 'Govt Exams', stat: 'Top Resources', color: '#3b7dd8', icon: '▣' },
            { label: 'Aptitude & Reasoning', cat: 'Aptitude', stat: '200+ topics', color: '#9457f5', icon: '◈' },
            { label: 'Programming & DSA', cat: 'Coding', stat: '30+ languages', color: '#10a37f', icon: '◉' },
            { label: 'Full Mock Tests', cat: 'Mock Tests', stat: 'Subject Wise', color: '#e04b4b', icon: '◎' },
            { label: 'Daily Current Affairs', cat: 'News & GK', stat: 'Updated daily', color: '#e08c0a', icon: '◆' },
            { label: 'Interview Prep', cat: 'Careers', stat: 'Detailed Q&A', color: '#d946a8', icon: '◐' },
            { label: 'Free Study PDFs', cat: 'Resources', stat: 'Full Access', color: '#0891b2', icon: '◑' },
          ].map((item, i) => (
            <span key={i} className="mq-item" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, cursor: 'default' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '0 20px', whiteSpace: 'nowrap' }}>
                {/* Unique geometric icon in item color */}
                <em style={{ fontStyle: 'normal', fontSize: 12, lineHeight: 1, color: item.color, flexShrink: 0, opacity: 0.9 }}>
                  {item.icon}
                </em>
                {/* Category — colored, uppercase */}
                <em style={{ fontStyle: 'normal', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color, whiteSpace: 'nowrap' }}>
                  {item.cat}
                </em>
                {/* Title — dark, clearly readable */}
                <em className="mq-title" style={{ fontStyle: 'normal', fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em', color: isDark ? '#e0e0e0' : '#111111', whiteSpace: 'nowrap', transition: 'color 0.15s ease' }}>
                  {item.label}
                </em>
                {/* Stat — noticeably visible */}
                <em style={{ fontStyle: 'normal', fontSize: 11, fontWeight: 700, color: isDark ? '#d4d4d4' : '#000000', whiteSpace: 'nowrap' }}>
                  {item.stat}
                </em>
              </span>
              {/* Slash separator */}
              <em style={{ fontStyle: 'normal', fontSize: 16, fontWeight: 300, color: isDark ? '#2a2a2a' : '#d8d8d8', flexShrink: 0, lineHeight: 1, userSelect: 'none' }}>/</em>
            </span>
          ))}
        </div>
      </div>

      {/* ══ 1. HERO ══ */}
      <section className={`border-b ${divider} ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-8">
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex-1 min-w-0">
              <p className={`text-[11.5px] font-black uppercase tracking-[0.15em] mb-4 ${isDark ? 'text-amber-400' : 'text-amber-700'}`} style={bodyFont}>
                India's Career Preparation Platform
              </p>
              <h1 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem] font-extrabold tracking-tight mb-5 leading-[1.15]" style={headFont}>
                Prepare Better. Achieve Your{' '}
                <em style={{ position: 'relative', display: 'inline-block', fontStyle: 'normal', background: 'linear-gradient(to right, #FFC107, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Goals Faster.
                  <img
                    src="https://img.icons8.com/color/48/pen.png"
                    alt=""
                    style={{
                      position: 'absolute',
                      left: -24,
                      bottom: -12,
                      width: 32,
                      height: 32,
                      zIndex: 20,
                      pointerEvents: 'none',
                      animation: 'marker-move 3s linear infinite',
                      transformOrigin: 'bottom right'
                    }}
                  />
                  {/* Marker-style curved underline */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 16"
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', left: '-2px', bottom: '-6px', width: 'calc(100% + 4px)', height: '14px', overflow: 'visible', pointerEvents: 'none' }}
                  >
                    <path
                      d="M4 10 C 30 3, 80 14, 110 8 C 140 2, 178 13, 216 7"
                      fill="none"
                      stroke="#FFC107"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        opacity: 0.85,
                        strokeDasharray: 212,
                        strokeDashoffset: 212,
                        animation: 'draw-underline 3s linear infinite'
                      }}
                    />
                    {/* Second slightly offset stroke for marker thickness effect */}
                    <path
                      d="M4 13 C 30 6, 80 17, 110 11 C 140 5, 178 16, 216 10"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        opacity: 0.45,
                        strokeDasharray: 220,
                        strokeDashoffset: 220,
                        animation: 'draw-underline 3s linear infinite'
                      }}
                    />
                  </svg>
                </em>
              </h1>

              <p className={`text-[15px] md:text-[16px] mb-8 max-w-2xl leading-relaxed ${muted}`} style={bodyFont}>
                Practice aptitude questions, prepare for government exams, learn programming, and stay updated with daily current affairs - all in one platform built for students preparing for competitive exams and technical careers.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
                <div className={`flex-1 max-w-lg flex items-center rounded border ${isDark ? 'bg-[#1a1a1a] border-[#333]' : 'bg-white border-gray-300'} focus-within:border-[#FFC107] focus-within:ring-2 focus-within:ring-[#FFC107]/20 transition-all`}>
                  <Search size={15} className={`ml-3 shrink-0 ${muted}`} />
                  <input
                    type="text"
                    placeholder="Search exams, questions, tutorials or study materials…"
                    className="flex-1 px-3 py-2.5 text-[13.5px] bg-transparent outline-none placeholder-gray-400"
                    style={bodyFont}
                  />
                    <button className="m-1 px-4 py-2 sm:py-1.5 bg-[#FFC107] text-black text-[12.5px] font-bold rounded hover:bg-amber-400 transition-colors whitespace-nowrap" style={bodyFont}>
                      Search
                    </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/exams" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFC107] text-black text-[13px] font-bold rounded hover:bg-amber-400 transition-colors" style={bodyFont}>
                  Start Preparation
                </Link>
                <Link href="/mock-tests" className={`inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded border transition-colors ${isDark ? 'border-[#333] text-gray-200 hover:border-[#555]' : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'}`} style={bodyFont}>
                  Take Mock Test
                </Link>
                <Link href="/current-affairs/daily" className={`inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold rounded border transition-colors ${isDark ? 'border-[#333] text-gray-200 hover:border-[#555]' : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'}`} style={bodyFont}>
                  Today's Current Affairs
                </Link>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="hidden lg:flex shrink-0 items-center justify-center" style={{ width: 480 }}>
              <Image
                src="/hero-new.png"
                alt="Career Preparation"
                width={480}
                height={420}
                priority={true}
                className="w-full h-auto object-contain max-h-[420px]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══ STATS BAR — Animated ══ */}
      {(() => {
        const statsRef = useRef(null);
        const [statsVisible, setStatsVisible] = useState(false);
        const [counts, setCounts] = useState([0, 0, 0, 0]);
        const statsData = [
          { target: 100, suffix: '%', lbl: 'Trust Factor', icon: '👨‍🎓' },
          { target: 8100, suffix: '+', lbl: 'Curated Questions', icon: '📝' },
          { target: 10, suffix: '+', lbl: 'Exam Categories', icon: '🎯' },
          { target: 40, suffix: '%', lbl: 'Avg. Accuracy Boost', icon: '📈' },
        ];

        useEffect(() => {
          const el = statsRef.current;
          if (!el) return;
          const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); }
          }, { threshold: 0.3 });
          obs.observe(el);
          return () => obs.disconnect();
        }, []);

        useEffect(() => {
          if (!statsVisible) return;
          const duration = 1800;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 4);
            setCounts(statsData.map(s => {
              const val = Math.round(s.target * eased);
              return val > s.target ? s.target : val;
            }));
            if (step >= steps) { clearInterval(timer); setCounts(statsData.map(s => s.target)); }
          }, interval);
          return () => clearInterval(timer);
        }, [statsVisible]);

        const formatNum = (n, i) => {
          if (i === 1) return n.toLocaleString();
          return n.toString();
        };

        return (
          <div ref={statsRef} className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFC107 0%, #F59E0B 40%, #E8A317 70%, #D97706 100%)' }}>
            <style>{`
              @keyframes stats-grid-drift {
                0%   { transform: translate(0, 0); }
                100% { transform: translate(28px, 28px); }
              }
              @keyframes stats-shimmer {
                0%   { transform: translateX(-100%) skewX(-15deg); }
                100% { transform: translateX(300%) skewX(-15deg); }
              }

              @keyframes stats-card-in {
                0%   { opacity:0; transform: translateY(16px) scale(0.96); }
                100% { opacity:1; transform: translateY(0) scale(1); }
              }
              @keyframes stats-num-pop {
                0%   { transform: scale(0.8); opacity:0; }
                60%  { transform: scale(1.06); }
                100% { transform: scale(1); opacity:1; }
              }
              @keyframes stats-border-glow {
                0%, 100% { opacity: 0.2; }
                50%      { opacity: 0.5; }
              }
            `}</style>

            {/* Animated drifting grid */}
            <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
              <svg
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '-28px',
                  width: 'calc(100% + 56px)',
                  height: 'calc(100% + 56px)',
                  animation: 'stats-grid-drift 4s linear infinite',
                }}
              >
                <defs>
                  <pattern id="stats-grid-anim-next" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect x="1" y="1" width="26" height="26" rx="4" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#stats-grid-anim-next)" />
              </svg>
            </div>

            {/* Shimmer light */}
            <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '40%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                animation: 'stats-shimmer 4.5s ease-in-out infinite',
                animationDelay: '1s',
              }} />
            </div>



            {/* Warm glow accents */}
            <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.1)', filter: 'blur(50px)' }} />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(180,100,0,0.12)', filter: 'blur(50px)' }} />

            {/* Stats content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4">
                {statsData.map((s, i) => (
                  <div
                    key={s.lbl}
                    className="px-4 sm:px-6 py-5 sm:py-6 text-center"
                    style={{
                      borderLeft: i !== 0 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                      animation: statsVisible ? `stats-card-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards` : 'none',
                      animationDelay: `${i * 0.12}s`,
                      opacity: statsVisible ? undefined : 0,
                    }}
                  >
                    <em style={{
                      fontStyle: 'normal', display: 'block', fontSize: 26, fontWeight: 900,
                      color: '#fff', ...headFont, letterSpacing: '-0.03em',
                      animation: statsVisible ? `stats-num-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : 'none',
                      animationDelay: `${0.3 + i * 0.12}s`,
                      opacity: statsVisible ? undefined : 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}>
                      {formatNum(counts[i], i)}{s.suffix}
                    </em>
                    <em style={{
                      fontStyle: 'normal', display: 'block', fontSize: 11.5, fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)', marginTop: 4, ...bodyFont,
                      letterSpacing: '0.03em', textTransform: 'uppercase',
                    }}>
                      {s.lbl}
                    </em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {/* ══ 2. TRENDING TOPICS ══ */}
      <section className={`py-12 ${isDark ? 'bg-[#111111]' : 'bg-[#f8fafc]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title="Trending Preparation Topics" sub="Most searched topics by students preparing for exams and interviews." to="/blog" iconUrl="https://img.icons8.com/color/48/positive-dynamic.png" />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {trendingTopics.map((t) => (
              <motion.div key={t.title} variants={fadeUp}>
                <Link href={t.path}
                  style={{ background: (tagColor[t.tag]?.cardBg ?? { light: '#f9fafb', dark: '#141414' })[isDark ? 'dark' : 'light'] }}
                  className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-md border transition-colors hover:border-[#FFC107]/60 group ${isDark ? 'border-[#242424]' : 'border-gray-200'}`}>
                  <div className="min-w-0">
                    <p className={`text-[13px] font-semibold leading-snug group-hover:text-[#FFC107] transition-colors truncate`}>{t.title}</p>
                    <div className="mt-1.5"><Tag label={t.tag} /></div>
                  </div>
                  <ChevronRight size={14} className={`shrink-0 ${muted} group-hover:text-[#FFC107] group-hover:translate-x-1 transition-all`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 3. LEARNING PATHS ══ */}
      <section className={`py-12 border-t ${divider} ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#fffbeb]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title="Learning Paths" sub="Choose your preparation track and start building skills step by step." iconUrl="https://img.icons8.com/color/48/books.png" />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {learningPaths.map((lp) => {

              const [g1, g2, g3] = lp.grad;
              const pid = lp.tag.replace(/\s+/g, '-');
              return (
                <motion.div key={lp.title} variants={fadeUp}>
                  <Link href={lp.path}
                    className="flex flex-col h-full rounded-xl overflow-hidden group shadow-md hover:shadow-2xl hover:brightness-[1.02]"
                    style={{
                      textDecoration: 'none',
                      background: `linear-gradient(145deg, ${g1} 0%, ${g2} 55%, ${g3} 100%)`,
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Decorative dot-grid pattern overlay */}
                    <div className="relative flex-1 flex flex-col p-5" style={{ isolation: 'isolate' }}>
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <defs>
                          <pattern id={`grid-${pid}`} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="16" height="16" rx="3" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${pid})`} />
                      </svg>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon + stat row */}
                        <div className="flex items-start justify-between mb-5">
                          {/* Icon — Icons8 3D Fluency */}
                          <Image src={lp.iconUrl} alt='' width={48} height={48} loading="lazy" style={{ display: 'block', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }} />
                          {/* Stat — plain text, no bg */}
                          <em
                            style={{ fontStyle: 'normal', fontSize: 11, fontWeight: 700, color: lp.textMuted, letterSpacing: '0.04em', textTransform: 'uppercase' }}
                          >
                            {lp.stat}
                          </em>
                        </div>

                        {/* Title — em bypasses body.light h3 { color:#000 !important } */}
                        <em
                          style={{ fontStyle: 'normal', display: 'block', fontSize: 15, fontWeight: 800, marginBottom: 8, lineHeight: 1.3, letterSpacing: '-0.02em', fontFamily: 'Manrope, sans-serif', color: lp.textColor }}
                        >
                          {lp.title}
                        </em>

                        {/* Description — em bypasses body.light p { color:#000 !important } */}
                        <em
                          style={{ fontStyle: 'normal', display: 'block', fontSize: 12, lineHeight: 1.7, flex: 1, fontFamily: 'Plus Jakarta Sans, sans-serif', color: lp.textMuted }}
                        >
                          {lp.desc}
                        </em>

                        {/* CTA footer */}
                        <div
                          className="mt-5 pt-4 flex items-center justify-between"
                          style={{ borderTop: `1px solid ${lp.divBorder}` }}
                        >
                          <em
                            style={{ fontStyle: 'normal', fontSize: 12.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, color: lp.textColor, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {lp.cta}
                            <em style={{ fontStyle: 'normal', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '50%', background: lp.arrowBg, flexShrink: 0 }}>
                              <ChevronRight size={11} color={lp.arrowColor} strokeWidth={2.5} />
                            </em>
                          </em>
                          {/* Tag */}
                          <em
                            style={{ fontStyle: 'normal', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 4, background: lp.tagBg, color: lp.textColor, letterSpacing: '0.04em' }}
                          >
                            {lp.tag}
                          </em>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══ 4. PRACTICE QUESTIONS ══ */}
      <section className={`py-12 border-t ${divider} ${isDark ? 'bg-[#111]' : 'bg-[#f0fdf4]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <SectionHead title="Practice Questions" sub="Topic-wise questions with explanations for exams and interviews." to="/aptitude" linkLabel="All Categories" iconUrl="https://img.icons8.com/color/48/test-passed.png" />
              <div className={`rounded-xl border overflow-hidden transition-all duration-400 ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-100'}`}>
                <div className="flex flex-col">
                  {practiceCategories.map((p, i) => (
                    <Link key={p.label} href={p.path}
                      className={`flex items-center justify-between px-7 py-4 group transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] ${i !== 0 ? `border-t ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'}` : ''}`}>
                      <div className="flex items-center gap-3.5">
                        <Image src={p.icon} alt={p.label} width={24} height={24} className="w-6 h-6 object-contain shrink-0 transition-transform duration-300 group-hover:scale-110" />
                        <span className={`text-[13.5px] font-semibold transition-colors group-hover:text-[#FFC107] ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{p.label}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-[12.5px] font-bold ${isDark ? 'text-gray-400' : 'text-gray-900'}`}>{p.count} Q</span>
                        <ChevronRight size={14} className={`transition-transform group-hover:translate-x-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/aptitude" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#FFC107] text-black text-[13.5px] font-bold rounded-lg hover:bg-amber-400 transition-all duration-200">
                Start Practicing <ChevronRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
            {/* Stats sidebar */}
            <div className={`lg:w-[300px] shrink-0 rounded-xl border p-7 transition-all duration-400 ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-100'}`}>
              <p className={`text-[12px] font-extrabold uppercase tracking-[0.1em] mb-7 ${isDark ? 'text-gray-400' : 'text-gray-900'}`}>Platform Statistics</p>
              <div className="space-y-6">
                {[
                  { k: 'Total Questions', v: '8,100', r: '+', color: '#1d4ed8' },
                  { k: 'Trust Score', v: '100', r: '%', color: '#059669' },
                  { k: 'Exam Modules', v: '12', r: '+', color: '#7c3aed' },
                  { k: 'Skill Improvement', v: '40', r: '%', color: '#d97706' },
                ].map((item) => (
                  <div key={item.k} className={`flex justify-between items-center pb-6 border-b text-[13.5px] last:border-0 last:pb-0 ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'}`}>
                    <span className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.k}</span>
                    <strong className="text-[15.5px] flex items-center gap-0.5">
                      <em style={{ color: isDark ? '#FFC107' : item.color, fontStyle: 'normal' }}>{item.v}</em>
                      <em style={{ color: isDark ? '#f3f4f6' : '#111827', fontStyle: 'normal' }}>{item.r}</em>
                    </strong>
                  </div>
                ))}
              </div>
              <Link href="/mock-tests" className={`mt-8 block w-full text-center py-2.5 rounded-lg text-[13px] font-bold transition-colors ${isDark ? 'bg-white/10 text-amber-400 hover:bg-white/20' : 'bg-[#ec4899] text-white hover:bg-[#db2777]'}`}>
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. MOCK TESTS ══ */}
      <section className={`py-16 border-t ${divider} ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#fdf8f6]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title="Mock Tests" sub="Timed, exam-pattern tests for government exams, placements and technical rounds." to="/mock-tests" linkLabel="All Tests" iconUrl="https://img.icons8.com/color/48/timer.png" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-2">
            {/* Feature checklist */}
            <div className={`rounded-xl p-8 border transition-all duration-400 ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-100'}`}>
              <p className="font-bold text-[15px] mb-6 tracking-tight">Why Take Our Mock Tests?</p>
              <ul className={`space-y-4 mb-8`}>
                {mockFeatures.map((f) => (
                  <li key={f} className={`flex items-start gap-4 text-[13.5px] font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40C057/verified-account.png"
                      alt="Check"
                      className="mt-0.5 w-[22px] h-[22px] shrink-0 object-contain drop-shadow-[0_2px_4px_rgba(64,192,87,0.2)]"
                    />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/mock-tests" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFC107] text-black text-[13.5px] font-bold rounded-lg hover:bg-amber-400 transition-all duration-200">
                Start Mock Test <ChevronRight size={15} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Test list */}
            <div className={`rounded-xl border overflow-hidden transition-all duration-400 ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-100'}`}>
              <div className={`px-7 py-5 border-b ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'}`}>
                <p className={`text-[12px] font-extrabold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-900'}`}>Available Tests</p>
              </div>
              <div className="flex flex-col">
                {mockTests.map((m, i) => (
                  <Link key={m.label} href={m.path}
                    className={`flex items-center justify-between px-7 py-4 group transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] ${i !== 0 ? `border-t ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'}` : ''}`}>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <p className={`text-[14px] font-semibold transition-colors truncate group-hover:text-[#FFC107] ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{m.label}</p>
                      <div>
                        <Tag label={m.tag} />
                      </div>
                    </div>
                    <span className={`text-[13px] font-bold flex shrink-0 items-center gap-1 transition-transform group-hover:translate-x-1 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                      Start <ChevronRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
              <div className={`px-7 py-4 border-t bg-black/[0.01] dark:bg-white/[0.01] ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'}`}>
                <Link href="/mock-tests" className={`text-[12.5px] font-bold text-[#FFC107] hover:text-amber-500 transition-colors flex items-center gap-1.5 w-max`}>
                  View all tests <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. CURRENT AFFAIRS ══ */}
      <section className={`py-16 border-t ${divider} ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f8fafc]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            title="Daily Current Affairs"
            sub="Stay updated with national and international news for TNPSC, UPSC, SSC and Banking exams."
            to="/current-affairs/daily"
            linkLabel="Explore More"
            iconUrl="https://img.icons8.com/color/48/news.png"
          />

          <div className="flex flex-col xl:flex-row gap-10">
            {/* Grid-based category explorer */}
            <div className="flex-1">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-[1px] ${isDark ? 'bg-[#2a2a2a]' : 'bg-gray-200'} border ${isDark ? 'border-[#2a2a2a]' : 'border-gray-200'} overflow-hidden rounded-xl`}>
                {currentAffairsLinks.map((ca) => (
                  <Link
                    key={ca.label}
                    href={ca.path}
                    className={`flex items-center gap-4 ${isDark ? 'bg-[#141414]' : 'bg-white'} p-6 transition-all duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] group`}
                  >
                    <div className="p-3 bg-gray-100/50 dark:bg-white/5 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <img src={ca.icon} alt="" className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className={`text-[15px] font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'} group-hover:text-[#2563eb] transition-colors`}>{ca.label}</p>
                      <p className={`text-[13px] ${isDark ? 'text-gray-500' : 'text-gray-500'} mt-0.5`}>Latest updates & analysis</p>
                    </div>
                    <ChevronRight size={16} className={`text-gray-300 group-hover:text-[#2563eb] transition-all group-hover:translate-x-1`} />
                  </Link>
                ))}
              </div>

              <div className={`mt-8 flex flex-col sm:flex-row gap-6 items-center justify-between p-7 ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'} border rounded-xl`}>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2 text-[11px] font-[900] uppercase tracking-widest">
                    <img src="https://img.icons8.com/color/48/new--v1.png" className="w-5 h-5 shrink-0" alt="" />
                    <em style={{ color: '#7c3aed', WebkitTextFillColor: '#7c3aed', fontStyle: 'normal' }}>LIVE ANALYSIS</em>
                  </div>
                  <p className={`text-[14.5px] font-[900] tracking-tight ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })} Edition is now available.</p>
                </div>
                <Link href="/current-affairs/daily" className="px-7 py-3 bg-[#FFC107] text-black text-[13px] font-[900] uppercase tracking-wider rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2.5 shrink-0">
                  Read Analysis <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Sidebar with tabular feel */}
            <div className="xl:w-[320px] shrink-0">
              <div className={`border rounded-xl overflow-hidden ${isDark ? 'bg-[#111] border-[#2a2a2a]' : 'bg-white border-gray-100 shadow-sm'}`}>
                <div className={`px-6 py-4 border-b ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'} bg-black/[0.01] dark:bg-white/[0.01]`}>
                  <p className={`text-[12px] font-[900] uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-900'}`}>Covered Exams</p>
                </div>
                <div className={`divide-y ${isDark ? 'divide-[#2a2a2a]' : 'divide-gray-100'}`}>
                  {[
                    { name: 'TNPSC Group 1, 2, 4', icon: 'university' },
                    { name: 'UPSC Civil Services', icon: 'briefcase' },
                    { name: 'SSC CGL / CHSL', icon: 'building' },
                    { name: 'Banking — IBPS, SBI', icon: 'bank' },
                    { name: 'Railway RRB Exams', icon: 'train' }
                  ].map((e) => (
                    <div key={e.name} className="flex items-center gap-4 px-6 py-4 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors group">
                      <img src={`https://img.icons8.com/color/48/${e.icon}.png`} alt="" className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <span className={`text-[13.5px] font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'} group-hover:text-blue-600 transition-colors`}>{e.name}</span>
                    </div>
                  ))}
                </div>
                <div className={`p-4 bg-black/[0.02] dark:bg-white/[0.02] border-t ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'}`}>
                  <p className="text-[11.5px] text-gray-400 dark:text-gray-500 text-center font-medium italic">Content updated every 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7. STUDY MATERIALS ══ */}
      <section className={`py-12 border-t ${divider} ${altBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title="Free Study Materials" sub="Notes, PDFs, formula sheets and exam guides curated by experts." to="/study-materials" iconUrl="https://img.icons8.com/color/48/folder-invoices.png" />
          <div className={`rounded-md border overflow-hidden ${card}`}>
            {studyMaterials.map((s, i) => (
              <Link key={s.label} href={s.path}
                className={`flex items-center justify-between px-5 py-3.5 group transition-colors hover:bg-[#FFC107]/5 ${i !== 0 ? `border-t ${divider}` : ''}`}>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${isDark ? 'bg-[#1e1e1e] text-gray-400' : 'bg-gray-100 text-gray-500'}`}>{s.type}</span>
                  <span className="text-[13px] font-semibold">{s.label}</span>
                </div>
                <ChevronRight size={13} className={muted} />
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/study-materials" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFC107] text-black text-sm font-bold rounded-md hover:bg-amber-400 transition-colors">
              Browse All Materials <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 8. BLOG ══ */}
      <section className={`py-12 border-t ${divider} ${isDark ? 'bg-[#111]' : 'bg-[#f7f8fa]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title="Career & Exam Articles" sub="Preparation guides, tips and tutorials written by subject experts." to="/blog" linkLabel="All Articles" iconUrl="https://img.icons8.com/color/48/content.png" />
          <div className={`rounded-md border overflow-hidden ${card}`}>
            {blogPosts.map((b, i) => (
              <Link key={b.title} href={b.path}
                className={`flex items-center justify-between gap-4 px-5 py-3.5 group transition-colors hover:bg-[#FFC107]/5 ${i !== 0 ? `border-t ${divider}` : ''}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`text-xs font-bold shrink-0 w-6 tabular-nums ${muted}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[13px] font-semibold truncate">{b.title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Tag label={b.tag} />
                  <ChevronRight size={13} className={muted} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. JOBS & INTERNSHIPS ══ */}
      <section className={`py-12 border-t ${divider} ${altBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title="Jobs & Internship Opportunities" sub="Latest government jobs, IT openings, internships and campus drives." to="/jobs" linkLabel="View All Jobs" iconUrl="https://img.icons8.com/color/48/briefcase.png" />
          <div className={`rounded-md border overflow-hidden ${card}`}>
            {jobs.map((j, i) => (
              <Link key={j.label} href={j.path}
                className={`flex items-center justify-between px-5 py-3.5 group transition-colors hover:bg-[#FFC107]/5 ${i !== 0 ? `border-t ${divider}` : ''}`}>
                <span className="text-[13px] font-semibold">{j.label}</span>
                <ChevronRight size={13} className={muted} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 10. WHY CHOOSE US ══ */}
      <section className={`py-16 border-t ${divider} ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f8fafc]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead title="Why Students Choose PracticeForever" iconUrl="https://img.icons8.com/color/48/shield.png" />

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left — Hero Stat */}
            <div className={`lg:w-[320px] shrink-0 rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden ${isDark ? 'bg-[#141414]' : 'bg-[#6d28d9]'}`}>
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div style={{ position: 'absolute', top: '-100%', left: '-100%', width: '60%', height: '300%', background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)', animation: 'glare 4s ease-in-out infinite' }} />
              </div>
              <style>{`@keyframes glare { 0%, 100% { transform: translateX(-100%) translateY(-30%); } 50% { transform: translateX(350%) translateY(30%); } }`}</style>
              <div className="relative z-10">
                <img src="https://img.icons8.com/color/48/crowd.png" alt="" className="w-10 h-10 mb-6" />
                <p className="text-[52px] md:text-[64px] font-[900] tracking-tighter leading-none" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>2026<span style={{ color: '#FFC107', WebkitTextFillColor: '#FFC107' }}>+</span></p>
                <p className="text-[13px] font-bold uppercase tracking-widest mt-3" style={{ color: 'rgba(255,255,255,0.7)', WebkitTextFillColor: 'rgba(255,255,255,0.7)' }}>Updated Content</p>
              </div>
              <p className="relative z-10 text-[13px] leading-relaxed mt-8 font-medium" style={{ color: 'rgba(255,255,255,0.7)', WebkitTextFillColor: 'rgba(255,255,255,0.7)' }}>Engineered for learners preparing for government exams, competitive placements, and coding interviews.</p>
            </div>

            {/* Right — Stats + Features */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Secondary Stats */}
              <div className="grid grid-cols-3 gap-5">
                {[
                  { num: '8,100+', label: 'Questions', color: '#059669', icon: 'https://img.icons8.com/color/48/multiple-choice.png' },
                  { num: 'Live', label: 'Daily Analysis', color: '#7c3aed', icon: 'https://img.icons8.com/color/48/timer.png' },
                  { num: 'Verified', label: 'Quality Hub', color: '#D97706', icon: 'https://img.icons8.com/color/48/good-quality.png' },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl p-5 border ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-100'}`}>
                    <img src={s.icon} alt="" className="w-6 h-6 mb-3" />
                    <p className="text-[24px] md:text-[28px] font-[900] tracking-tight leading-none" style={{ color: s.color }}>{s.num}</p>
                    <p className={`text-[11px] font-bold uppercase tracking-wider mt-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className={`flex-1 rounded-xl border ${isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-100'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {whyUs.map((w, i) => (
                    <div key={w.text} className={`flex items-center gap-4 px-6 py-[18px] ${isDark ? 'border-[#2a2a2a]' : 'border-gray-100'} ${i >= 2 ? 'border-t' : ''} ${i % 2 !== 0 ? 'sm:border-l' : ''} ${i === 1 ? 'border-t sm:border-t-0' : ''}`}>
                      <span className={`text-[11px] font-[900] tabular-nums shrink-0 w-5 text-center ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>{String(i + 1).padStart(2, '0')}</span>
                      <img src={w.icon} alt="" className="w-7 h-7 object-contain shrink-0" />
                      <p className={`text-[13px] font-semibold leading-snug ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{w.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Strip */}
          <div className={`mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-xl px-8 py-6 ${isDark ? 'bg-[#141414] border border-[#2a2a2a]' : 'bg-white border border-gray-100'}`}>
            <div>
              <p className={`text-[15px] font-[900] tracking-tight ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Ready to start your preparation?</p>
              <p className={`text-[13px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Create your free account and access all resources instantly.</p>
            </div>
            <Link href="/register" className="px-7 py-3 bg-[#FFC107] text-black text-[13px] font-[900] uppercase tracking-wider rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2.5 shrink-0">
              Get Started Free <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 11. CTA ══ */}
      <section className={`py-14 border-t ${divider} ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-md border p-8 md:p-12 text-center ${card}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>Get Started Today — It's Free</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">Begin Your Preparation Journey</h2>
            <p className={`text-sm mb-8 max-w-lg mx-auto leading-relaxed ${muted}`}>
              Access high-quality resources for government exams, technical interviews and placements on PracticeForever.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FFC107] text-black text-sm font-bold rounded-md hover:bg-amber-400 transition-colors">
                Register Free
              </Link>
              <Link href="/exams" className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-md border transition-colors ${isDark ? 'border-[#333] text-gray-200 hover:border-[#555]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                Browse Exams
              </Link>
              <Link href="/mock-tests" className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-md border transition-colors ${isDark ? 'border-[#333] text-gray-200 hover:border-[#555]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                Take Mock Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 12. SEO TOPIC LINKS ══ */}
      <section className={`py-8 border-t ${divider} ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${muted}`}>Quick Topic Links</p>
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((ql) => (
              <Link key={ql.label} href={ql.path}
                className={`text-xs font-medium px-3 py-1.5 rounded border transition-colors hover:border-[#FFC107]/60 hover:text-[#FFC107] ${isDark ? 'border-[#262626] text-gray-400' : 'border-gray-200 text-gray-500'}`}>
                {ql.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
