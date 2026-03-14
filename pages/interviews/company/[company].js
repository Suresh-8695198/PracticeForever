import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, ChevronRight, Calculator, GitFork, Languages, FileCode, Users } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

// Mock company data (ideally fetched from an API/db)
const companyData = {
  // IT Services & Top MNCs
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
  
  // Tech Giants
  // Tech Giants
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
  
  // Software Products & Enterprise
  zoho: { name: "Zoho", domain: "zoho.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", examType: 'Member Technical Staff', logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Zoho_Logo.svg" },
  atlassian: { name: "Atlassian", domain: "atlassian.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Graduate / Developer' },
  paypal: { name: "PayPal", domain: "paypal.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", examType: 'Software Engineer' },
  intuit: { name: "Intuit", domain: "intuit.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Software Engineer 1/2' },
  linkedin: { name: "LinkedIn", domain: "linkedin.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", examType: 'Software Engineer' },
  
  // Indian Startups & Unicorns
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

  // Big 4 & Finance
  deloitte: { name: "Deloitte", domain: "deloitte.com", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", examType: 'Analyst / Consultant' },
  pwc: { name: "PwC", domain: "pwc.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", examType: 'Technology Associate' },
  ey: { name: "EY", domain: "ey.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", examType: 'Advanced Analyst' },
  kpmg: { name: "KPMG", domain: "kpmg.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", examType: 'Analyst' },
  "goldman-sachs": { name: "Goldman Sachs", domain: "goldmansachs.com", color: "#a855f7", bgGradient: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)", examType: 'Analyst / Associate' },
  "morgan-stanley": { name: "Morgan Stanley", domain: "morganstanley.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)", examType: 'Technology Analyst' },
  jpmorgan: { name: "JPMorgan Chase", domain: "jpmorganchase.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #4ade80 0%, #15803d 100%)", examType: 'Software Engineer' },
  barclays: { name: "Barclays", domain: "barclays.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", examType: 'BA4 / BA3 Developer' },
};

const companyTopics = [
  {
    category: "Quantitative Aptitude",
    icon: Calculator,
    iconImage: "https://img.icons8.com/3d-fluency/94/calculator.png",
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    topics: ["Percentage", "Time & Work", "Ratio & Proportion", "Number System", "Probability", "Permutations & Combinations"]
  },
  {
    category: "Logical Reasoning",
    icon: GitFork,
    iconImage: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png",
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    topics: ["Number Series", "Blood Relations", "Coding-Decoding", "Syllogism", "Seating Arrangement", "Data Sufficiency"]
  },
  {
    category: "Verbal Ability",
    icon: Languages,
    iconImage: "https://img.icons8.com/3d-fluency/94/brick.png",
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    topics: ["Reading Comprehension", "Sentence Correction", "Synonyms & Antonyms", "Cloze Test", "Fill in the Blanks"]
  },
  {
    category: "Technical / Coding",
    icon: FileCode,
    iconImage: "https://img.icons8.com/3d-fluency/94/code.png",
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    topics: ["Pseudo Code", "C / C++ Basics", "Data Structures", "DBMS & SQL", "OOPS Concepts", "Hands-on Coding"]
  },
  {
    category: "HR Interview Prep",
    icon: Users,
    iconImage: "https://img.icons8.com/3d-fluency/94/group.png",
    color: "#ec4899",
    bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    topics: ["Tell me about yourself", "Strengths & Weaknesses", "Why this company?", "Situation Based Scenarios", "Resume Deep Dive"]
  }
];

const CompanyDetail = () => {
  const { isDark } = useTheme();
  const router = useRouter();
  const { company } = router.query;
  const [searchQuery, setSearchQuery] = useState('');

  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const cardBg = isDark ? 'bg-[#141414] border-[#222]' : 'bg-white border-gray-100';
  const headFont = { fontFamily: 'Outfit, sans-serif' };
  const bodyFont = { fontFamily: 'Outfit, sans-serif' };

  if (!company) return <div className={`min-h-screen pt-32 text-center ${bg}`}>Loading...</div>;

  const currentCompany = companyData[company?.toLowerCase()] || { 
    name: company.toString().toUpperCase(), 
    domain: "example.com", 
    color: "#888", 
    bgGradient: "linear-gradient(135deg, #888, #555)",
    examType: "General Assessment"
  };

  const filteredData = companyTopics.map(section => ({
    ...section,
    topics: section.topics.filter(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.topics.length > 0);

  return (
    <div className={`min-h-screen pt-24 pb-20 ${bg}`} style={bodyFont}>
      <Head>
        <title>{currentCompany.name} Interview Prep | Career Platform</title>
        <meta name="description" content={`Prepare for ${currentCompany.name} interviews with topic-wise questions.`} />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Header */}
        <div className="mb-12 rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ background: isDark ? '#141414' : '#ffffff', border: `1px solid ${isDark ? '#222' : '#eee'}`, boxShadow: isDark ? 'none' : '0 10px 40px -10px rgba(0,0,0,0.05)' }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full filter blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ background: currentCompany.color }} />
            
            <Link href="/interviews/company" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-blue-500 mb-8 transition-colors">
                <ArrowLeft size={16} /> All Companies
            </Link>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-24 h-24 shrink-0 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-3.5">
                    <img 
                      src={currentCompany.logoUrl || `https://logo.clearbit.com/${currentCompany.domain}`} 
                      alt={`${currentCompany.name} Logo`}
                      onError={(e) => {
                          if (e.target.src.includes('clearbit')) {
                              e.target.src = `https://icon.horse/icon/${currentCompany.domain}`;
                          } else {
                              e.target.onerror = null; 
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                          }
                      }}
                      className="w-full h-full object-contain"
                    />
                    <div className="w-full h-full hidden items-center justify-center font-bold text-3xl text-white" style={{ background: currentCompany.bgGradient }}>
                       {currentCompany.name.charAt(0)}
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 truncate" style={headFont}>
                       {currentCompany.name}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-lg text-[13px] font-bold tracking-wide uppercase" style={{ color: currentCompany.color }}>
                            {currentCompany.examType}
                        </span>
                        <span className="text-gray-400 text-sm font-medium">Interview Questions & Answers</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-16">
            <div className={`flex items-center gap-3 w-full max-w-2xl px-5 h-14 rounded-2xl border transition-all ${isDark ? 'bg-[#141414] border-[#333] focus-within:border-blue-500' : 'bg-white border-gray-200 focus-within:border-blue-500 focus-within:shadow-md'}`}>
                <Search size={20} className="text-gray-400 shrink-0" />
                <input 
                    type="text" 
                    placeholder={`Search topics for ${currentCompany.name}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[15px] font-medium placeholder:text-gray-400"
                />
            </div>
        </div>

        {/* Section List */}
        <div className="space-y-24">
          {filteredData.map((section) => (
            <section key={section.category}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-110 shrink-0">
                    <img 
                      src={section.iconImage} 
                      alt={section.category} 
                      className="w-full h-full object-contain" 
                      onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <section.icon size={32} className="hidden opacity-80" style={{ color: section.color }} />
                  </div>
                  <div>
                    <h2 
                      className="text-xl md:text-[24px] font-bold tracking-tight mb-0.5" 
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
                    <p className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {section.topics.length} specific modules
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-3">
                {section.topics.map((topic) => {
                  const pathTopic = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  // For Demo, all link to nowhere or a dummy path since we haven't built the exact quiz pages for companies yet.
                  // We'll point them to /interviews/company/[company]/[topic]
                  return (
                    <Link 
                        key={topic} 
                        href={`/interviews/company/${company}/${pathTopic}`} 
                        className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${isDark ? 'border-transparent hover:bg-white/5 hover:border-white/10' : 'border-transparent hover:bg-white hover:border-gray-200'}`}
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
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div className="shrink-0 w-5 h-5 transition-transform group-hover:scale-110">
                            <img 
                                src="https://img.icons8.com/3d-fluency/94/folder-invoices.png" 
                                alt="" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span 
                            className="topic-span text-[15px] font-semibold tracking-tight truncate transition-colors"
                            style={{ ...bodyFont, color: isDark ? '#e5e5e5' : '#1a1a1a' }}
                        >
                            {topic}
                        </span>
                        </div>
                        <ChevronRight 
                            size={16} 
                            className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            style={{ color: section.color }}
                        />
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

      </main>
    </div>
  );
};

export default CompanyDetail;
