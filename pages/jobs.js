import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Briefcase, ArrowLeft, Search, Building2, GraduationCap, CheckCircle2, 
  Sparkles, FileText, ChevronRight, Filter, Compass, HelpCircle, ShieldCheck
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const jobCategories = [
  { id: 'all', name: 'All Career Pathways' },
  { id: 'it', name: 'IT & Software Engineering' },
  { id: 'gov', name: 'Government & Public Sector' },
  { id: 'banking', name: 'Banking & Financial' }
];

const hiringGuides = [
  {
    company: "TCS (Tata Consultancy Services)",
    role: "Ninja & Digital Candidate Drives",
    type: "it",
    rounds: "Aptitude Test + Coding + Technical & HR Interview",
    eligibility: "B.E/B.Tech/M.E/M.Tech/MCA/M.Sc with min 60% aggregate",
    keyTopics: "Quantitative Aptitude, Programming Logic, Hands-on Coding (Python/Java/C++)",
    link: "/interviews/company/tcs",
    badge: "Active Hiring Track"
  },
  {
    company: "Infosys",
    role: "System Engineer & Specialist Programmer",
    type: "it",
    rounds: "Online Assessment (Reasoning, Verbal, Mathematical) + Interview",
    eligibility: "Graduates with consistent academic record",
    keyTopics: "Logical Reasoning, Data Structures, Pseudo-code, DBMS",
    link: "/interviews/company/infosys",
    badge: "Active Hiring Track"
  },
  {
    company: "TNPSC Recruitment",
    role: "Group 2, 2A & Group 4 Cadre Services",
    type: "gov",
    rounds: "Preliminary Exam + Mains Exam + Certificate Verification",
    eligibility: "Degree / SSLC based on post specification",
    keyTopics: "General Tamil/English, General Studies, Mental Ability (Aptitude)",
    link: "/exams/tnpsc",
    badge: "State Level Drive"
  },
  {
    company: "SSC CGL / CHSL",
    role: "Combined Graduate / Higher Secondary Level",
    type: "gov",
    rounds: "Tier 1 CBT + Tier 2 CBT + Skill Test",
    eligibility: "Any recognized Bachelor's Degree / 12th Pass",
    keyTopics: "General Intelligence, Quantitative Aptitude, English Comprehension, GA",
    link: "/exams/ssc",
    badge: "Central Government"
  },
  {
    company: "IBPS & SBI Banking",
    role: "Probationary Officers (PO) & Clerical Cadre",
    type: "banking",
    rounds: "Prelims (Timed) + Mains + Interview (PO)",
    eligibility: "Graduation in any discipline",
    keyTopics: "Data Interpretation, Puzzles, Financial Awareness, Speed Maths",
    link: "/exams/banking",
    badge: "Banking Sector"
  },
  {
    company: "Wipro & Accenture",
    role: "Project Engineer & Associate Software Engineer",
    type: "it",
    rounds: "Cognitive Assessment + Technical & HR Discussion",
    eligibility: "Engineering and Science Graduates",
    keyTopics: "Communication Skills, Analytical Ability, Fundamental Coding",
    link: "/interviews/company/wipro",
    badge: "IT Service Drives"
  }
];

const preparationChecklist = [
  {
    step: "01",
    title: "Master Quantitative & Logical Foundation",
    desc: "Over 85% of corporate and government preliminary elimination rounds focus on Aptitude. Complete our structured topic-wise modules."
  },
  {
    step: "02",
    title: "Solve Technical & Subject-Specific MCQs",
    desc: "Target core domain subjects including Data Structures, General Studies, and English Verbal proficiency to clear cut-offs."
  },
  {
    step: "03",
    title: "Simulate Timed Practice Tests",
    desc: "Practice with timed mock assessments to improve accuracy and eliminate time pressure during real exam drives."
  },
  {
    step: "04",
    title: "Prepare Technical & HR Interview Answers",
    desc: "Review real past interview questions and structured responses for top companies to present your skills with confidence."
  }
];

export default function JobsPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const bg = isDark ? 'bg-[#0a0b0d] text-zinc-100' : 'bg-[#ffffff] text-zinc-950';
  const cardBg = isDark ? 'bg-[#141518] border-white/10' : 'bg-gray-50 border-gray-200';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const headingFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

  const filteredGuides = hiringGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.type === selectedCategory;
    const matchesSearch = guide.company.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          guide.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.keyTopics.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen pt-28 md:pt-36 pb-20 ${bg}`}>
      <Head>
        <title>Careers & Recruitment Guides | PracticeForever</title>
        <meta name="description" content="Explore recruitment patterns, selection processes, eligibility criteria, and preparation roadmaps for top IT companies and government job drives." />
        <meta name="keywords" content="Off campus drives 2026, TCS NQT preparation, Infosys placement guide, TNPSC recruitment syllabus, SSC CGL job roadmap" />
        <link rel="canonical" href="https://practiceforever.app/jobs" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft size={14} strokeWidth={2.5} />
            Back to Home Hub
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-8 border-b pb-10 border-gray-200 dark:border-white/10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-black uppercase tracking-wider">
              <Sparkles size={12} />
              Career Preparation & Hiring Portal
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight" style={headingFont}>
              Corporate & Government <span className="text-blue-600">Career Guides</span>
            </h1>
            <p className={`text-base md:text-lg leading-relaxed ${textMuted}`}>
              Detailed selection procedures, eligibility criteria, exam patterns, and targeted practice resources for major campus drives and competitive service examinations.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border ${cardBg} max-w-sm shrink-0 space-y-3`}>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
              <h3 className="text-sm font-bold">Verified Preparation Pathways</h3>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              All guides are curated based on official syllabus notifications and verified candidate experiences.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {jobCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : isDark
                      ? 'bg-white/5 text-zinc-300 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 text-zinc-400" size={16} />
            <input
              type="text"
              placeholder="Search company or exam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs outline-none transition-all ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-white focus:border-blue-500'
                  : 'bg-white border-gray-300 text-zinc-900 focus:border-blue-600'
              }`}
            />
          </div>
        </div>

        {/* Hiring Guides Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredGuides.map((guide, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-sm group`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-blue-500/10 text-blue-600">
                    {guide.badge}
                  </span>
                  <Building2 size={18} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
                </div>

                <div>
                  <h2 className="text-lg font-bold tracking-tight mb-1" style={headingFont}>
                    {guide.company}
                  </h2>
                  <p className="text-xs font-semibold text-blue-600">{guide.role}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-white/5 text-xs">
                  <div>
                    <span className="font-bold text-zinc-500 dark:text-zinc-400">Selection Process: </span>
                    <span className={textMuted}>{guide.rounds}</span>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-500 dark:text-zinc-400">Key Syllabus: </span>
                    <span className={textMuted}>{guide.keyTopics}</span>
                  </div>
                  <div>
                    <span className="font-bold text-zinc-500 dark:text-zinc-400">Eligibility: </span>
                    <span className={textMuted}>{guide.eligibility}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <Link
                  href={guide.link}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  View Preparation Guide
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Preparation Roadmap Guide */}
        <div className={`p-8 md:p-10 rounded-3xl border ${cardBg} mb-16`}>
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3" style={headingFont}>
              4-Step Career Preparation Strategy
            </h2>
            <p className={`text-sm md:text-base ${textMuted}`}>
              Whether your goal is securing an IT software engineer offer or qualifying for a state/central government cadre, structured preparation guarantees higher success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationChecklist.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 space-y-3">
                <span className="text-2xl font-black text-blue-600 font-mono">{item.step}</span>
                <h3 className="text-sm font-bold leading-snug" style={headingFont}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informational FAQ for Candidates */}
        <div className={`p-8 md:p-10 rounded-3xl border ${cardBg}`}>
          <h2 className="text-2xl font-extrabold mb-6 tracking-tight" style={headingFont}>
            Frequently Asked Questions by Job Candidates
          </h2>
          <div className="space-y-6 text-xs md:text-sm">
            <div>
              <h3 className="font-bold mb-1 text-blue-600">Q: How do corporate aptitude rounds differ from government entrance exams?</h3>
              <p className={textMuted}>
                Corporate IT placement drives (TCS, Infosys, Wipro) focus on speed, basic mathematical logic, and data interpretation, alongside introductory programming questions. Government exams (TNPSC, SSC, Banking) feature higher quantitative difficulty, speed math, and dedicated General Awareness/State History modules.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-1 text-blue-600">Q: How often are exam syllabi and practice questions updated on PracticeForever?</h3>
              <p className={textMuted}>
                Our question bank and syllabus breakdown documents are reviewed regularly to match official notifications issued by exam boards and corporate recruiting bodies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
