import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  BookOpen, ArrowLeft, Search, FileText, Download, CheckCircle2, 
  Sparkles, Layers, Code, Brain, Target, ShieldCheck, ChevronRight
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const materialCategories = [
  { id: 'all', name: 'All Resources' },
  { id: 'aptitude', name: 'Aptitude Formulas' },
  { id: 'reasoning', name: 'Reasoning Rules' },
  { id: 'coding', name: 'Coding & CS Notes' },
  { id: 'gk', name: 'GK & Exam Summaries' }
];

const studyResources = [
  {
    title: "Quantitative Aptitude Master Formula Sheet",
    category: "aptitude",
    type: "Quick Reference PDF Guide",
    description: "Complete formula collection covering Speed, Time & Work, Compound Interest, Mensuration, Permutations, and Probability.",
    topics: ["Percentage Formulas", "HCF & LCM Short Tricks", "Time & Distance Equations", "Logarithms & Indices"],
    link: "/aptitude/quantitative",
    updated: "Updated 2026 Edition"
  },
  {
    title: "Logical & Non-Verbal Reasoning Rulebook",
    category: "reasoning",
    type: "Concept & Rules Cheat Sheet",
    description: "Step-by-step shortcuts for Syllogisms, Blood Relations, Clock & Calendar logic, and Seating Arrangement rules.",
    topics: ["Syllogism Venn Diagrams", "Calendar Day Calculations", "Direction Sense Tricks", "Coding-Decoding Tables"],
    link: "/aptitude/logical",
    updated: "Verified Rules"
  },
  {
    title: "Data Structures & Time Complexity Cheat Sheet",
    category: "coding",
    type: "Technical Interview Guide",
    description: "Big-O notation breakdown for Arrays, Linked Lists, Trees, Graphs, Sorting Algorithms, and Dynamic Programming fundamentals.",
    topics: ["Big-O Chart", "Array vs LinkedList", "Tree Traversals", "Graph BFS/DFS"],
    link: "/interviews",
    updated: "CS Essentials"
  },
  {
    title: "English Grammar & Spotting Errors Rulebook",
    category: "reasoning",
    type: "Verbal Ability Notes",
    description: "Top 50 high-frequency English grammar rules tested in SSC CGL, Banking PO, and Campus Placement Verbal rounds.",
    topics: ["Subject-Verb Agreement", "Tense Usage Rules", "Preposition Tricks", "Active/Passive Voice"],
    link: "/aptitude/verbal",
    updated: "High Priority"
  },
  {
    title: "TNPSC General Tamil & Indian Polity Summary",
    category: "gk",
    type: "State PSC Study Guide",
    description: "Key summary notes on Tamil literature, freedom movement in Tamil Nadu, Constitution articles, and Panchayati Raj.",
    topics: ["Sangam Period Literature", "Indian Constitution Articles", "TN Administrative Units", "Unit 8 & 9 Highlights"],
    link: "/exams/tnpsc",
    updated: "Revised Syllabus"
  },
  {
    title: "UPSC & SSC Indian Economy & Science Key Facts",
    category: "gk",
    type: "General Studies Sheet",
    description: "Quick revision notes on Five Year Plans, Economic Indicators, Physics/Chemistry/Biology daily science concepts.",
    topics: ["Five Year Plans", "RBI & Monetary Policy", "Scientific Instruments", "SI Units & Constants"],
    link: "/exams/upsc",
    updated: "Exam Ready"
  }
];

const formulaSnippets = [
  {
    topic: "Percentage & Change",
    formula: "Percentage Increase = [(New Value - Original Value) / Original Value] × 100",
    tip: "If a quantity increases by x% and then decreases by x%, net change is always a decrease of (x/10)%."
  },
  {
    topic: "Time & Work (Pipes)",
    formula: "If A completes work in 'a' days and B in 'b' days, together they take (a × b) / (a + b) days.",
    tip: "Convert daily work into fractions (1/a + 1/b) for multi-worker problems."
  },
  {
    topic: "Speed, Distance & Time",
    formula: "Average Speed = (2 × s1 × s2) / (s1 + s2) when equal distances are covered at s1 and s2.",
    tip: "Multiply km/h by 5/18 to convert to m/s; multiply m/s by 18/5 to convert to km/h."
  },
  {
    topic: "Compound Interest",
    formula: "Amount A = P(1 + r/100)^n; CI = A - P",
    tip: "For half-yearly compounding, halve the rate (r/2) and double time periods (2n)."
  }
];

export default function StudyMaterialsPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const bg = isDark ? 'bg-[#0a0b0d] text-zinc-100' : 'bg-[#ffffff] text-zinc-950';
  const cardBg = isDark ? 'bg-[#141518] border-white/10' : 'bg-gray-50 border-gray-200';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const headingFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

  const filteredResources = studyResources.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen pt-28 md:pt-36 pb-20 ${bg}`}>
      <Head>
        <title>Syllabus Notes, Formulas & Study Materials | PracticeForever</title>
        <meta name="description" content="Access free study notes, formula cheat sheets, aptitude tricks, computer science notes, and TNPSC/SSC revision guides." />
        <meta name="keywords" content="Aptitude formula PDF, quantitative shortcuts, TNPSC study notes, computer science notes, logical reasoning cheat sheet" />
        <link rel="canonical" href="https://practiceforever.app/study-materials" />
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
              Educational Notes & Reference Library
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight" style={headingFont}>
              Syllabus Guides & <span className="text-blue-600">Formula Sheets</span>
            </h1>
            <p className={`text-base md:text-lg leading-relaxed ${textMuted}`}>
              Curated study notes, quick-reference formula cheat sheets, and exam topic summaries designed to streamline your daily learning and final revision.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border ${cardBg} max-w-sm shrink-0 space-y-3`}>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
              <h3 className="text-sm font-bold">100% Free Educational Resources</h3>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              All notes and formula summaries are open access for students preparing for competitive and placement exams.
            </p>
          </div>
        </div>

        {/* Category Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {materialCategories.map(cat => (
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

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 text-zinc-400" size={16} />
            <input
              type="text"
              placeholder="Search formula or topic..."
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

        {/* Study Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map((res, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-sm group`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-blue-500/10 text-blue-600">
                    {res.updated}
                  </span>
                  <BookOpen size={18} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
                </div>

                <div>
                  <h2 className="text-base font-bold tracking-tight mb-1" style={headingFont}>
                    {res.title}
                  </h2>
                  <p className="text-xs font-semibold text-blue-600">{res.type}</p>
                </div>

                <p className={`text-xs leading-relaxed ${textMuted}`}>
                  {res.description}
                </p>

                <div className="pt-2 border-t border-gray-100 dark:border-white/5">
                  <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block mb-2">Key Coverage:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {res.topics.map((t, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-200/60 dark:bg-white/10 text-zinc-700 dark:text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <Link
                  href={res.link}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  Access Study Module
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Aptitude Formula Highlights */}
        <div className={`p-8 md:p-10 rounded-3xl border ${cardBg} mb-16`}>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight mb-2" style={headingFont}>
              High-Frequency Formula Highlights
            </h2>
            <p className={`text-xs md:text-sm ${textMuted}`}>
              Quickly revise fundamental formulas frequently tested in corporate aptitude elimination assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formulaSnippets.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 space-y-2">
                <span className="text-xs font-black uppercase text-blue-600 tracking-wider">{item.topic}</span>
                <p className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 bg-blue-500/10 p-2.5 rounded-lg border border-blue-500/20">
                  {item.formula}
                </p>
                <p className={`text-xs ${textMuted} italic`}>
                  <strong>Pro Tip:</strong> {item.tip}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
