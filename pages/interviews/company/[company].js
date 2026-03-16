import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Search, ArrowLeft, ArrowRight, BookOpen, Clock, 
  Hash, LayoutGrid, Calculator, Brain, Languages, PieChart, Shapes, CircleHelp, Wand2,
  Command, RotateCcw, Target, FileCode, Users
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

// ─── Company Data ───
const companyData = {
  tcs: { name: "Tata Consultancy Services (TCS)", domain: "tcs.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", examType: 'NQT / Digital / Prime', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  infosys: { name: "Infosys", domain: "infosys.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", examType: 'Systems Engineer / Specialist', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  wipro: { name: "Wipro", domain: "wipro.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", examType: 'NLTH / Elite / Turbo', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  cognizant: { name: "Cognizant", domain: "cognizant.com", color: "#10b981", bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", examType: 'GenC / GenC Next', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  accenture: { name: "Accenture", domain: "accenture.com", color: "#a855f7", bgGradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)", examType: 'Cognitive & Technical Assessment', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_logo.svg" },
  ibm: { name: "IBM", domain: "ibm.com", color: "#1e40af", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)", examType: 'Associate System Engineer', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  "tech-mahindra": { name: "Tech Mahindra", domain: "techmahindra.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", examType: 'Elevate Test', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Tech_Mahindra_New_Logo.svg" },
  capgemini: { name: "Capgemini", domain: "capgemini.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", examType: 'Exceller / Analyst' },
  hcl: { name: "HCLTech", domain: "hcltech.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", examType: 'First Careers', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/HCLTech_Logo.svg" },
  ltimindtree: { name: "LTIMindtree", domain: "ltimindtree.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", examType: 'Graduate Engineer', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/LTIMindtree_Logo.svg" },
  mphasis: { name: "Mphasis", domain: "mphasis.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", examType: 'AMCAT Pattern' },
  hexaware: { name: "Hexaware", domain: "hexaware.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", examType: 'Mavericks Program' },
  microsoft: { name: "Microsoft", domain: "microsoft.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)", examType: 'SDE 1 / SDE 2', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  google: { name: "Google", domain: "google.com", color: "#ea4335", bgGradient: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)", examType: 'Software Engineer', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  amazon: { name: "Amazon", domain: "amazon.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", examType: 'SDE / AWS Assessments', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  apple: { name: "Apple", domain: "apple.com", color: "#000000", bgGradient: "linear-gradient(135deg, #52525b 0%, #27272a 100%)", examType: 'Core Engineering', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  meta: { name: "Meta", domain: "meta.com", color: "#06b6d4", bgGradient: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)", examType: 'Software Engineer', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  netflix: { name: "Netflix", domain: "netflix.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)", examType: 'Senior Software Engineer', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  cisco: { name: "Cisco", domain: "cisco.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Network / SDE' },
  adobe: { name: "Adobe", domain: "adobe.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", examType: 'MTS / Engineering' },
  vmware: { name: "VMware", domain: "vmware.com", color: "#6366f1", bgGradient: "linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)", examType: 'Member of Technical Staff' },
  salesforce: { name: "Salesforce", domain: "salesforce.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", examType: 'AMTS / SMTS' },
  servicenow: { name: "ServiceNow", domain: "servicenow.com", color: "#10b981", bgGradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)", examType: 'Software Engineer' },
  uber: { name: "Uber", domain: "uber.com", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", examType: 'SDE 1 / SDE 2' },
  zoho: { name: "Zoho", domain: "zoho.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", examType: 'Member Technical Staff', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Zoho_Logo.svg" },
  atlassian: { name: "Atlassian", domain: "atlassian.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Graduate / Developer' },
  paypal: { name: "PayPal", domain: "paypal.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", examType: 'Software Engineer' },
  intuit: { name: "Intuit", domain: "intuit.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Software Engineer 1/2' },
  linkedin: { name: "LinkedIn", domain: "linkedin.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", examType: 'Software Engineer' },
  freshworks: { name: "Freshworks", domain: "freshworks.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", examType: 'Software Engineer' },
  flipkart: { name: "Flipkart", domain: "flipkart.com", color: "#eab308", bgGradient: "linear-gradient(135deg, #fde047 0%, #ca8a04 100%)", examType: 'SDE 1 / SDE 2' },
  swiggy: { name: "Swiggy", domain: "swiggy.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", examType: 'SDE' },
  zomato: { name: "Zomato", domain: "zomato.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", examType: 'Software Engineer' },
  paytm: { name: "Paytm", domain: "paytm.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", examType: 'Backend / Fullstack Engineer' },
  razorpay: { name: "Razorpay", domain: "razorpay.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Software Engineer' },
  cred: { name: "CRED", domain: "cred.club", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", examType: 'Backend / Frontend Engineer' },
  oyo: { name: "OYO", domain: "oyorooms.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", examType: 'SDE 1' },
  ola: { name: "Ola", domain: "olacabs.com", color: "#84cc16", bgGradient: "linear-gradient(135deg, #a3e635 0%, #65a30d 100%)", examType: 'SDE 1 / SDE 2' },
  makemytrip: { name: "MakeMyTrip", domain: "makemytrip.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", examType: 'Software Engineer' },
  dream11: { name: "Dream11", domain: "dream11.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", examType: 'SDE' },
  phonepe: { name: "PhonePe", domain: "phonepe.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", examType: 'Software Engineer' },
  postman: { name: "Postman", domain: "postman.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", examType: 'Software Engineer' },
  browserstack: { name: "BrowserStack", domain: "browserstack.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", examType: 'Software Engineer' },
  chargebee: { name: "Chargebee", domain: "chargebee.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fde047 0%, #d97706 100%)", examType: 'Software Engineer' },
  "pine-labs": { name: "Pine Labs", domain: "pinelabs.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)", examType: 'Software Engineer' },
  zerodha: { name: "Zerodha", domain: "zerodha.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", examType: 'Software Systems Engineer' },
  meesho: { name: "Meesho", domain: "meesho.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", examType: 'SDE 1 / SDE 2' },
  "cure-fit": { name: "Cure.fit", domain: "cult.fit", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", examType: 'SDE' },
  upstox: { name: "Upstox", domain: "upstox.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", examType: 'Software Engineer' },
  deloitte: { name: "Deloitte", domain: "deloitte.com", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", examType: 'Analyst / Consultant' },
  pwc: { name: "PwC", domain: "pwc.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", examType: 'Technology Associate' },
  ey: { name: "EY", domain: "ey.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", examType: 'Advanced Analyst' },
  kpmg: { name: "KPMG", domain: "kpmg.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Analyst' },
  "goldman-sachs": { name: "Goldman Sachs", domain: "goldmansachs.com", color: "#a855f7", bgGradient: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)", examType: 'Analyst / Associate' },
  "morgan-stanley": { name: "Morgan Stanley", domain: "morganstanley.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)", examType: 'Technology Analyst' },
  jpmorgan: { name: "JPMorgan Chase", domain: "jpmorganchase.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #4ade80 0%, #15803d 100%)", examType: 'Software Engineer' },
  barclays: { name: "Barclays", domain: "barclays.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", examType: 'BA4 / BA3 Developer' },
};

// ─── Company-Specific Content (Rounds & Topics) ───
const companyContent = {
  tcs: {
    rounds: [
      { 
        id: 'nqt-foundation', name: 'Foundation Round', 
        description: 'TCS NQT Foundation Section (Mandatory for all)',
        iconImage: 'https://img.icons8.com/arcade/64/math-folder.png',
        tabColor: '#3b82f6',
        icon: Calculator,
        sections: [
          {
            category: "Numerical Ability",
            icon: "https://img.icons8.com/3d-fluency/96/calculator.png",
            color: "#3b82f6",
            bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            topics: ["Number System", "H.C.F. & L.C.M. of Numbers", "Decimal Fractions", "Simplification", "Square Roots & Cube Roots", "Percentage", "Average", "Ratio & Proportion", "Partnership", "Time & Work", "Pipes & Cistern", "Time & Distance", "Problems on Trains", "Boats & Streams", "Alligation or Mixture", "Simple Interest", "Compound Interest", "Area", "Volume & Surface Areas", "Calendar", "Clocks", "Stocks & Shares", "Permutations & Combination", "Probability", "Odd Man Out & Series"]
          },
          {
            category: "Verbal Ability",
            icon: "https://img.icons8.com/3d-fluency/94/brick.png",
            color: "#10b981",
            bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            topics: ["Reading Comprehension", "Sentence Correction", "Sentence Completion", "Synonyms & Antonyms", "Cloze Test", "Fill in the Blanks", "Error Spotting", "Prepositions & Conjunctions"]
          },
          {
            category: "Reasoning Ability",
            icon: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png",
            color: "#8b5cf6",
            bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
            topics: ["Number Series", "Blood Relations", "Coding-Decoding", "Syllogism", "Seating Arrangement", "Data Sufficiency", "Inferred Meaning", "Logical Sequence", "Visual Reasoning"]
          }
        ]
      },
      { 
        id: 'nqt-advanced', name: 'Advanced Round', 
        description: 'Advanced Quantitative & Reasoning for Digital/Prime roles',
        iconImage: 'https://img.icons8.com/3d-fluency/94/prize.png',
        tabColor: '#ef4444',
        icon: Target,
        sections: [
          {
            category: "Advanced Quantitative",
            icon: "https://img.icons8.com/3d-fluency/94/statistics.png",
            color: "#ef4444",
            bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
            topics: ["Probability (Advanced)", "Permutations & Combinations", "Algebra", "Geometry & Trigonometry", "Mensuration (Advanced)", "Elementary Statistics"]
          },
          {
            category: "Advanced Coding",
            icon: "https://img.icons8.com/3d-fluency/94/code.png",
            color: "#f59e0b",
            bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            topics: ["Array & String Manipulation", "Pattern Printing Logic", "Hands-on Coding Questions", "Complexity Analysis", "Google DSA PYQs"]
          }
        ]
      },
      { 
        id: 'technical', name: 'Technical Round', 
        description: 'TR Interview Preparation - TR & MR Questions',
        iconImage: 'https://img.icons8.com/3d-fluency/94/source-code.png',
        tabColor: '#8b5cf6',
        icon: FileCode,
        sections: [
          {
            category: "CS Fundamentals",
            icon: "https://img.icons8.com/3d-fluency/94/database.png",
            color: "#06b6d4",
            bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
            topics: ["Operating Systems", "Computer Networks", "DBMS & SQL", "CS Fundamentals MCQs", "Cybersecurity Basics"]
          },
          {
            category: "Programming Theory",
            icon: "https://img.icons8.com/3d-fluency/94/command-line.png",
            color: "#6366f1",
            bgGradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
            topics: ["C / C++ Basics", "Java OOPS Concepts", "Python Fundamentals", "Data Structures Theory"]
          }
        ]
      },
      { 
        id: 'hr', name: 'HR Interview', 
        description: 'Behavioral & Management Round Preparation',
        iconImage: 'https://img.icons8.com/3d-fluency/94/conference-call.png',
        tabColor: '#ec4899',
        icon: Users,
        sections: [
          {
            category: "HR Interview Prep",
            icon: "https://img.icons8.com/3d-fluency/94/group.png",
            color: "#ec4899",
            bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
            topics: ["Tell me about yourself", "Strengths & Weaknesses", "Why TCS?", "Situation Based Scenarios", "Resume Deep Dive", "Project Discussions", "Role Awareness"]
          }
        ]
      }
    ]
  },
  default: {
    rounds: [
      {
        id: 'general', name: 'Integrated Preparation',
        description: 'General Interview & Aptitude Preparation',
        icon: Target,
        sections: [
          { category: "Quantitative Aptitude", icon: "https://img.icons8.com/3d-fluency/96/calculator.png", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", topics: ["Percentage", "Time & Work", "Ratio & Proportion", "Number System", "Probability", "Permutations & Combinations"] },
          { category: "Logical Reasoning", icon: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", topics: ["Number Series", "Blood Relations", "Coding-Decoding", "Syllogism", "Seating Arrangement", "Data Sufficiency"] },
          { category: "Verbal Ability", icon: "https://img.icons8.com/3d-fluency/94/brick.png", color: "#10b981", bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", topics: ["Reading Comprehension", "Sentence Correction", "Synonyms & Antonyms", "Cloze Test", "Fill in the Blanks"] },
          { category: "Technical / Coding", icon: "https://img.icons8.com/3d-fluency/94/code.png", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", topics: ["Pseudo Code", "C / C++ Basics", "Data Structures", "DBMS & SQL", "OOPS Concepts", "Hands-on Coding"] },
          { category: "HR Interview Prep", icon: "https://img.icons8.com/3d-fluency/94/group.png", color: "#ec4899", bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)", topics: ["Tell me about yourself", "Strengths & Weaknesses", "Why this company?", "Situation Based Scenarios", "Resume Deep Dive"] }
        ]
      }
    ]
  }
};

const CompanyDetail = () => {
  const router = useRouter();
  const { company } = router.query;
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRoundTab, setActiveRoundTab] = useState(0);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Define content data early as it's needed by effects
  const currentContent = companyContent[company?.toLowerCase()] || companyContent.default;
  const currentCompany = companyData[company?.toLowerCase()] || { 
    name: company ? company.toString().toUpperCase() : 'Company', 
    domain: "example.com", color: "#3b82f6", 
    bgGradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    examType: "General Assessment"
  };

  // Sync activeRoundTab with URL query parameter
  useEffect(() => {
    if (router.isReady && router.query.tab !== undefined) {
      const tabIdx = parseInt(router.query.tab);
      if (!isNaN(tabIdx) && tabIdx >= 0 && tabIdx < currentContent.rounds.length) {
        setActiveRoundTab(tabIdx);
      }
    }
  }, [router.isReady, router.query.tab, currentContent.rounds.length]);

  const handleTabChange = (idx) => {
    setActiveRoundTab(idx);
    setSearchQuery('');
    // Update URL shallowly so it's preserved on back navigation
    router.push({
      pathname: router.pathname,
      query: { ...router.query, tab: idx }
    }, undefined, { shallow: true });
  };

  const headFont = { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
  const bodyFont = { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };

  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f8fafc] text-gray-900';

  if (!company && !router.isReady) return null;

  const activeRound = currentContent.rounds[activeRoundTab] || currentContent.rounds[0];

  const filteredSections = activeRound.sections.map(section => ({
    ...section,
    topics: section.topics.filter(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.topics.length > 0);

  const confirmResetRound = async () => {
    setIsResetting(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    activeRound.sections.forEach(section => {
      section.topics.forEach(topic => {
        const topicSlug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        localStorage.removeItem(`progress_company_${company}_${topicSlug}`);
      });
    });
    setShowResetModal(false);
    setIsResetting(false);
  };

  const themeColor = currentCompany.color;

  return (
    <div className={`min-h-screen pt-24 pb-20 ${bg}`} style={bodyFont}>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[400px] bg-white dark:bg-[#121212] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5"
              style={headFont}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mb-6">
                  <RotateCcw size={32} className="text-rose-500" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-black text-gray-900 dark:text-white mb-3 tracking-tight">Reset Progress?</h3>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                  This will permanently clear your progress for all topics in <span className="text-rose-500 font-bold uppercase tracking-wider text-[12px]">{activeRound.name}</span>. This action cannot be undone.
                </p>
                <div className="flex flex-col w-full gap-3">
                  <button 
                    onClick={confirmResetRound}
                    disabled={isResetting}
                    className="h-14 w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white rounded-2xl font-black text-[15px] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    {isResetting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : "Confirm Reset"}
                  </button>
                  <button 
                    onClick={() => setShowResetModal(false)}
                    className="h-14 w-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 rounded-2xl font-bold text-[14px] transition-all active:scale-[0.98]"
                  >
                    Keep My Progress
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Head>
        <title>{currentCompany.name} Interview Prep | Career Platform</title>
        <meta name="description" content={`Prepare for ${currentCompany.name} interviews with topic-wise questions.`} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══ Back Link ═══ */}
        <Link href="/interviews/company" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-blue-500 mt-4 mb-4 transition-colors">
          <ArrowLeft size={16} /> All Companies
        </Link>

        {/* ═══ Premium Banner Card ═══ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full rounded-[24px] overflow-hidden p-6 md:p-10 mb-10 border transition-all"
          style={{
            backgroundColor: isDark ? 'rgba(20, 20, 20, 0.9)' : `${themeColor}08`,
            borderColor: isDark ? '#222' : `${themeColor}20`
          }}
        >
          {/* Square Grid Background Pattern */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="company-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect x="2" y="2" width="36" height="36" rx="6" fill="none" stroke={themeColor} strokeWidth="1.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#company-grid)" />
            </svg>
          </div>
          {/* Subtle corner glow */}
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: `${themeColor}15`, filter: 'blur(60px)' }} />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full pointer-events-none" style={{ background: `${themeColor}10`, filter: 'blur(40px)' }} />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 text-left">
            <div className="flex-1">
              <h1 
                className="text-2xl lg:text-3xl font-[800] tracking-tight mb-3 leading-[1.2] keep-color" 
                style={{ 
                  ...headFont,
                  backgroundImage: isDark 
                    ? `linear-gradient(135deg, #fff 0%, ${themeColor} 100%)` 
                    : `linear-gradient(135deg, #000 0%, ${themeColor} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >
                {currentCompany.name} <br className="hidden md:block" />
                Interview Preparation
              </h1>
              <p className="text-sm md:text-base text-gray-500 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
                Explore specialized {currentCompany.name} interview rounds organized by stage, difficulty level, and real exam patterns.
              </p>
            </div>

            <div className="shrink-0">
              <button 
                onMouseEnter={() => setIsExploreHovered(true)}
                onMouseLeave={() => setIsExploreHovered(false)}
                className="px-8 py-3.5 rounded-full font-extrabold text-[15px] transition-all duration-300 active:scale-95 keep-color border-none"
                style={{ 
                  backgroundColor: isExploreHovered ? themeColor : (isDark ? '#ffffff' : '#111111'),
                  color: isExploreHovered ? '#ffffff' : (isDark ? '#111111' : '#ffffff')
                }}
              >
                Explore Topics
              </button>
            </div>
          </div>
        </motion.div>

        {/* ═══ Search Bar — Exact match to Aptitude page ═══ */}
        <div className="mb-10">
          <div className={`
            group flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 p-1.5 sm:rounded-lg rounded-2xl border transition-all duration-300
            ${isDark ? 'bg-[#141414] border-[#222]' : 'bg-white border-gray-200'}
          `}
          style={{ borderColor: isDark ? '#222' : `${themeColor}20` }}>
            <div className="flex items-center flex-1 px-4 sm:px-0">
              <div className="sm:pl-5 pr-3">
                <Search size={22} className="text-gray-400" style={{ color: themeColor }} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search: ${activeRound.sections[0]?.topics[0] || 'Topics'}...`}
                className="flex-1 py-3.5 sm:py-2.5 bg-transparent outline-none text-[16px] font-medium placeholder:text-gray-400 dark:text-white"
              />
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-[#222] rounded-md border border-gray-100 dark:border-[#333]">
                <Command size={12} className="text-gray-400" />
                <span className="text-[11px] font-bold text-gray-500">K</span>
              </div>
            </div>
            <button 
              className="px-6 py-3.5 sm:py-2.5 text-white font-extrabold text-[15px] rounded-xl sm:rounded-lg transition-all active:scale-[0.98] shadow-sm keep-color"
              style={{ backgroundColor: themeColor }}
            >
              Search
            </button>
          </div>

          {/* ═══ Round Tabs with Icons & Distinct Colors ═══ */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {currentContent.rounds.map((round, idx) => {
              const rColor = round.tabColor || themeColor;
              return (
                <button
                  key={round.id}
                  onClick={() => handleTabChange(idx)}
                  className={`
                    flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[12px] font-bold transition-all border keep-color
                    ${activeRoundTab === idx 
                      ? 'border-opacity-100 shadow-sm' 
                      : 'bg-white dark:bg-[#141414] border-gray-100 dark:border-[#222] text-gray-500 hover:text-opacity-80'}
                  `}
                  style={{ 
                    backgroundColor: activeRoundTab === idx ? `${rColor}12` : '',
                    borderColor: activeRoundTab === idx ? rColor : '',
                    color: rColor
                  }}
                >
                  {round.iconImage && (
                    <img src={round.iconImage} alt="" className="w-5 h-5 object-contain" />
                  )}
                  {round.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══ Section List — Exact match to Aptitude page ═══ */}
        <div className="space-y-20">
          {filteredSections.map((section) => (
            <div key={section.category}>
              {/* Category Heading Section — Match Aptitude exactly */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img src={section.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 
                      className="text-xl md:text-[23px] font-bold tracking-tight mb-0.5 keep-color" 
                      style={{ 
                        ...headFont,
                        backgroundImage: section.bgGradient,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        display: 'inline-block'
                      }}
                    >
                      {section.category}
                    </h2>
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {section.topics.length} PRACTICE MODULES AVAILABLE
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50/80 dark:bg-[#141414] px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <img src="https://img.icons8.com/3d-fluency/94/like--v3.png" alt="Fully Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
                    <span>Fully Completed</span>
                  </div>
                  <div className="hidden sm:block w-px h-3.5 bg-gray-200 dark:bg-gray-800"></div>
                  <div className="flex items-center gap-2">
                    <img src="https://img.icons8.com/3d-fluency/94/like--v8.png" alt="Partially Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
                    <span>Partially Completed</span>
                  </div>
                  <div className="hidden sm:block w-px h-3.5 bg-gray-200 dark:bg-gray-800"></div>
                  <button 
                    onClick={() => setShowResetModal(true)}
                    className="flex items-center gap-1.5 text-rose-500 hover:text-rose-600 transition-colors"
                  >
                    <RotateCcw size={13} strokeWidth={2.5} />
                    <span>Reset All Progress</span>
                  </button>
                </div>
              </div>

              {/* Topics Grid — Exact match to Aptitude page */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-2">
                {section.topics.map((topic) => {
                  const pathTopic = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');
                  return (
                    <Link 
                      key={topic} 
                      href={`/interviews/company/${company}/${pathTopic}?tab=${activeRoundTab}`}
                      className="group flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 transition-all duration-300"
                      onMouseEnter={(e) => {
                        const span = e.currentTarget.querySelector('.topic-span');
                        if (span) {
                          span.style.backgroundImage = section.bgGradient;
                          span.style.WebkitBackgroundClip = 'text';
                          span.style.backgroundClip = 'text';
                          span.style.WebkitTextFillColor = 'transparent';
                          span.style.color = 'transparent';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const span = e.currentTarget.querySelector('.topic-span');
                        if (span) {
                          span.style.backgroundImage = '';
                          span.style.WebkitBackgroundClip = '';
                          span.style.backgroundClip = '';
                          span.style.WebkitTextFillColor = '';
                          span.style.color = '';
                        }
                      }}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                        <div className="shrink-0 w-6 h-6 transition-transform group-hover:scale-110 duration-300">
                          <img 
                            src="https://img.icons8.com/3d-fluency/94/folder-invoices.png" 
                            alt="" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-1 min-w-0">
                          <span 
                            className="topic-span text-[14px] font-medium tracking-tight truncate keep-color"
                            style={{ ...bodyFont }}
                          >
                            {topic}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <ChevronRight 
                          size={14} 
                          className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          style={{ color: section.color }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ═══ Section Navigation — Back to Companies ═══ */}
        <div className="mt-32 py-16 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
          <Link href="/interviews/company" className="group flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-blue-600 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
               <ArrowLeft size={24} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
            </div>
            <h2 
              className="text-xl md:text-3xl font-bold tracking-tight" 
              style={headFont}
            >
              <span className="text-black dark:text-white keep-color">Back to </span>
              <span className="text-blue-600 dark:text-blue-400 keep-color">Company Catalog</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
