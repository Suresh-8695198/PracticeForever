import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Building2, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import TiltedCard from '../../../components/ui/TiltedCard';

const companies = [
  // IT Services & Top MNCs
  { id: "tcs", name: "TCS", domain: "tcs.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", description: "Tata Consultancy Services - Interview Questions & Experience", topicsCount: 15 },
  { id: "infosys", name: "Infosys", domain: "infosys.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", description: "Infosys Placement Papers & Interview Topics", topicsCount: 12 },
  { id: "wipro", name: "Wipro", domain: "wipro.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", description: "Wipro Core & Logical Reasoning Questions", topicsCount: 10 },
  { id: "cognizant", name: "Cognizant", domain: "cognizant.com", color: "#10b981", bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg", description: "Cognizant GenC & Next Interview Patterns", topicsCount: 14 },
  { id: "accenture", name: "Accenture", domain: "accenture.com", color: "#a855f7", bgGradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_logo.svg", description: "Accenture Cognitive Assessment & Coding", topicsCount: 16 },
  { id: "ibm", name: "IBM", domain: "ibm.com", color: "#1e40af", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", description: "IBM Cognitive Ability & English Assessment", topicsCount: 11 },
  { id: "tech-mahindra", name: "Tech Mahindra", domain: "techmahindra.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Tech_Mahindra_New_Logo.svg", description: "Tech Mahindra Aptitude & Technical Questions", topicsCount: 9 },
  { id: "capgemini", name: "Capgemini", domain: "capgemini.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", description: "Capgemini Pseudo Code & English Test", topicsCount: 13 },
  { id: "hcl", name: "HCLTech", domain: "hcltech.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/HCLTech_Logo.svg", description: "HCL Technical & HR Interview Preps", topicsCount: 8 },
  { id: "ltimindtree", name: "LTIMindtree", domain: "ltimindtree.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/LTIMindtree_Logo.svg", description: "LTIMindtree Coding & Core CS Subjects", topicsCount: 10 },
  { id: "mphasis", name: "Mphasis", domain: "mphasis.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", description: "Mphasis AMCAT Pattern & Technical Questions", topicsCount: 9 },
  { id: "hexaware", name: "Hexaware", domain: "hexaware.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", description: "Hexaware Aptitude & Logical Reasoning", topicsCount: 7 },
  
  // Tech Giants (FAANG & Similar)
  { id: "microsoft", name: "Microsoft", domain: "microsoft.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", description: "Microsoft DSA, System Design & HR", topicsCount: 20 },
  { id: "google", name: "Google", domain: "google.com", color: "#ea4335", bgGradient: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", description: "Google Coding Interviews & Data Structures", topicsCount: 22 },
  { id: "amazon", name: "Amazon", domain: "amazon.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", description: "Amazon Leadership Principles & Tech Questions", topicsCount: 18 },
  { id: "apple", name: "Apple", domain: "apple.com", color: "#000000", bgGradient: "linear-gradient(135deg, #52525b 0%, #27272a 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", description: "Apple Core Technical & Architectural Rounds", topicsCount: 15 },
  { id: "meta", name: "Meta", domain: "meta.com", color: "#06b6d4", bgGradient: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", description: "Meta System Design & Front-End Architecture", topicsCount: 17 },
  { id: "netflix", name: "Netflix", domain: "netflix.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", description: "Netflix Distributed Systems & Core Engineering", topicsCount: 14 },
  { id: "cisco", name: "Cisco", domain: "cisco.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", description: "Cisco Networking & Systems Questions", topicsCount: 16 },
  { id: "adobe", name: "Adobe", domain: "adobe.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", description: "Adobe DSA & API Design Interviews", topicsCount: 14 },
  { id: "vmware", name: "VMware", domain: "vmware.com", color: "#6366f1", bgGradient: "linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)", description: "VMware OS Concepts & Virtualization Tech", topicsCount: 11 },
  { id: "salesforce", name: "Salesforce", domain: "salesforce.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", description: "Salesforce Apex & Web Engineering Prep", topicsCount: 12 },
  { id: "servicenow", name: "ServiceNow", domain: "servicenow.com", color: "#10b981", bgGradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)", description: "ServiceNow Platform & CS Fundamentals", topicsCount: 11 },
  { id: "uber", name: "Uber", domain: "uber.com", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", description: "Uber Geolocation Algorithms & Scalability", topicsCount: 15 },
  
  // Software Products & Enterprise
  { id: "zoho", name: "Zoho", domain: "zoho.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Zoho_Logo.svg", description: "Zoho Advanced C/C++ Programming & Logical", topicsCount: 22 },
  { id: "atlassian", name: "Atlassian", domain: "atlassian.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", description: "Atlassian Low-Level Design & Code Review", topicsCount: 13 },
  { id: "paypal", name: "PayPal", domain: "paypal.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", description: "PayPal Java, Spring Boot & DB Schema", topicsCount: 13 },
  { id: "intuit", name: "Intuit", domain: "intuit.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", description: "Intuit Frontend & Full Stack Assessments", topicsCount: 12 },
  { id: "linkedin", name: "LinkedIn", domain: "linkedin.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", description: "LinkedIn Graph Algorithms & Scalability", topicsCount: 15 },
  
  // Indian Startups & Unicorns
  { id: "freshworks", name: "Freshworks", domain: "freshworks.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Freshworks_Logo.svg", description: "Freshworks Full Stack & System Rounds", topicsCount: 12 },
  { id: "flipkart", name: "Flipkart", domain: "flipkart.com", color: "#eab308", bgGradient: "linear-gradient(135deg, #fde047 0%, #ca8a04 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/Flipkart_logo.svg", description: "Flipkart Machine Coding & E-Commerce Logic", topicsCount: 16 },
  { id: "swiggy", name: "Swiggy", domain: "swiggy.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.svg", description: "Swiggy Data Structures & LLD", topicsCount: 14 },
  { id: "zomato", name: "Zomato", domain: "zomato.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Zomato_logo.svg", description: "Zomato React Native & Algorithm Rounds", topicsCount: 12 },
  { id: "paytm", name: "Paytm", domain: "paytm.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Paytm_logo.svg", description: "Paytm Backend Design & SQL Queries", topicsCount: 14 },
  { id: "razorpay", name: "Razorpay", domain: "razorpay.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg", description: "Razorpay FinTech Coding & API Design", topicsCount: 15 },
  { id: "cred", name: "CRED", domain: "cred.club", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/CRED_logo.svg", description: "CRED High UI/UX Standards & Arch Rounds", topicsCount: 11 },
  { id: "oyo", name: "OYO", domain: "oyorooms.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", description: "OYO Arrays, Strings & Logical Scenarios", topicsCount: 10 },
  { id: "ola", name: "Ola", domain: "olacabs.com", color: "#84cc16", bgGradient: "linear-gradient(135deg, #a3e635 0%, #65a30d 100%)", description: "Ola Path Finding Algorithms & Scale", topicsCount: 12 },
  { id: "makemytrip", name: "MakeMyTrip", domain: "makemytrip.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", description: "MakeMyTrip Java / Spring Boot Prep", topicsCount: 11 },
  { id: "dream11", name: "Dream11", domain: "dream11.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", description: "Dream11 Concurrency & Scale Management", topicsCount: 12 },
  { id: "phonepe", name: "PhonePe", domain: "phonepe.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", description: "PhonePe Real-Time Payment Architecture", topicsCount: 14 },
  { id: "postman", name: "Postman", domain: "postman.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", description: "Postman Core Javascript & API Tests", topicsCount: 13 },
  { id: "browserstack", name: "BrowserStack", domain: "browserstack.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", description: "BrowserStack Core CS & Systems", topicsCount: 10 },
  { id: "chargebee", name: "Chargebee", domain: "chargebee.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fde047 0%, #d97706 100%)", description: "Chargebee Subscriptions & FinTech DB", topicsCount: 9 },
  { id: "pine-labs", name: "Pine Labs", domain: "pinelabs.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)", description: "Pine Labs Core Programming Prep", topicsCount: 8 },
  { id: "zerodha", name: "Zerodha", domain: "zerodha.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", description: "Zerodha Financial Trading Tech", topicsCount: 9 },
  { id: "meesho", name: "Meesho", domain: "meesho.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", description: "Meesho E-Commerce DSA & LLD", topicsCount: 12 },
  { id: "cure-fit", name: "Cure.fit", domain: "cult.fit", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", description: "Cure.fit Full Stack & Web Architecture", topicsCount: 10 },
  { id: "upstox", name: "Upstox", domain: "upstox.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", description: "Upstox Trading Platforms & Optimizations", topicsCount: 11 },

  // Big 4 & Finance
  { id: "deloitte", name: "Deloitte", domain: "deloitte.com", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg", description: "Deloitte Aptitude, Verbal & Tech Rounds", topicsCount: 12 },
  { id: "pwc", name: "PwC", domain: "pwc.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg", description: "PwC Cyber Security & Consulting", topicsCount: 10 },
  { id: "ey", name: "EY", domain: "ey.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg", description: "EY GDS Logical Deductions & Analytics", topicsCount: 11 },
  { id: "kpmg", name: "KPMG", domain: "kpmg.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg", description: "KPMG Audit & Tech Advisory Questions", topicsCount: 9 },
  { id: "goldman-sachs", name: "Goldman Sachs", domain: "goldmansachs.com", color: "#a855f7", bgGradient: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Goldman_Sachs.svg", description: "Goldman Sachs Math, Puzzles & DSA", topicsCount: 18 },
  { id: "morgan-stanley", name: "Morgan Stanley", domain: "morganstanley.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)", description: "Morgan Stanley Java, Concurrency", topicsCount: 16 },
  { id: "jpmorgan", name: "JPMorgan Chase", domain: "jpmorganchase.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #4ade80 0%, #15803d 100%)", description: "JPMC Code For Good & Quant Questions", topicsCount: 15 },
  { id: "barclays", name: "Barclays", domain: "barclays.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", description: "Barclays C++ & FinTech Infrastructure", topicsCount: 12 },
];

const CompanyInterviews = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const cardBg = isDark ? 'bg-[#141414] border-[#222] hover:border-gray-700' : 'bg-white border-gray-100 hover:border-gray-200';
  const headFont = { fontFamily: 'Outfit, sans-serif' };
  const bodyFont = { fontFamily: 'Outfit, sans-serif' };

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    company.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen pt-24 pb-20 ${bg}`} style={bodyFont}>
      <Head>
        <title>Top IT Companies Interview Prep | Career Platform</title>
        <meta name="description" content="Company-wise interview questions, placement papers, and preparation guides for TCS, Infosys, Wipro, and more." />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Hero Section */}
        <div className="relative overflow-hidden rounded-3xl mb-16 p-8 md:p-12 lg:p-16" style={{ background: isDark ? '#141414' : '#ffffff', border: `1px solid ${isDark ? '#222' : '#eee'}` }}>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl" style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }}>
               <Building2 size={32} color="#fff" />
             </div>
             
             <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-4" style={headFont}>
                <span className={isDark ? "text-white" : "text-gray-900"}>Company-Wise </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Interview Prep</span>
             </h1>
             
             <p className="max-w-2xl text-[15px] md:text-lg mb-8 opacity-80 font-medium">
                Explore placement papers, core topics, aptitude, and logical reasoning questions frequently asked by top IT product and service-based companies. 
             </p>

             {/* Search Bar */}
             <div className="w-full max-w-xl relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by company (e.g., TCS, Google, Infosys)..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full h-12 md:h-14 pl-12 pr-4 rounded-2xl border text-[14px] md:text-[15px] font-medium outline-none transition-all ${
                    isDark 
                    ? 'bg-[#0f0f0f] border-[#333] focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]'
                  }`}
                />
             </div>
          </div>
        </div>

        {/* Header for list */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
           <div>
              <h2 className="text-2xl font-bold tracking-tight mb-1" style={headFont}>Top IT Companies</h2>
              <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400">Select a company to view their hiring patterns and questions</p>
           </div>
           <div className="px-3 py-1.5 rounded-lg text-[12px] font-bold tracking-wider" style={{ background: isDark ? '#222' : '#f1f5f9', color: isDark ? '#aaa' : '#64748b' }}>
              {filteredCompanies.length} COMPANIES
           </div>
        </div>

        {/* Grid of Companies */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.map((company, idx) => (
              <Link 
                key={company.id} 
                href={`/interviews/company/${company.id}`}
                className="block outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
              >
                <TiltedCard
                  imageSrc=""
                  altText=""
                  captionText=""
                  containerHeight="260px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.03}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  className="z-10"
                >
                  <div className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 w-full h-full ${cardBg}`}>
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                      style={{ background: `linear-gradient(135deg, ${company.color}11 0%, transparent 100%)` }}
                    />

                <div className="relative z-10 flex items-start gap-4 mb-5">
                   {/* Logo Container */}
                   <div className="w-16 h-16 shrink-0 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110 p-2">
                      <img 
                        src={company.logoUrl || `https://logo.clearbit.com/${company.domain}`} 
                        alt={`${company.name} Logo`}
                        onError={(e) => {
                          if (e.target.src.includes('clearbit')) {
                            e.target.src = `https://icon.horse/icon/${company.domain}`;
                          } else {
                            e.target.onerror = null; 
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }
                        }}
                        className="w-full h-full object-contain"
                      />
                      {/* Fallback Text Logo */}
                      <div className="w-full h-full hidden items-center justify-center font-bold text-xl text-white" style={{ background: company.bgGradient }}>
                         {company.name.charAt(0)}
                      </div>
                   </div>

                   <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-[18px] font-bold tracking-tight mb-1 truncate text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
                        {company.name}
                      </h3>
                      <div className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-gray-100 dark:bg-[#222] text-gray-500 dark:text-gray-400 uppercase">
                        {company.topicsCount} Topics
                      </div>
                   </div>
                </div>

                <p className="text-[13px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6 line-clamp-2 relative z-10">
                   {company.description}
                </p>

                   <div className="mt-auto relative z-10 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800/50">
                      <span className="text-[12px] font-semibold flex items-center gap-1.5" style={{ color: company.color }}>
                         Explore Questions
                      </span>
                      <div className="w-6 h-6 rounded-full bg-gray-50 dark:bg-[#222] flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors">
                         <ArrowRight size={12} className="text-gray-400 group-hover:translate-x-0.5 transition-all" style={{ color: company.color }} />
                      </div>
                   </div>
                  </div>
                </TiltedCard>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
             <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 dark:bg-[#222] flex items-center justify-center mb-4">
                <Search size={24} className="text-gray-400" />
             </div>
             <h3 className="text-lg font-bold mb-2">No companies found</h3>
             <p className="text-[14px] text-gray-500">We couldn't find any match for "{searchQuery}". Try a different name.</p>
          </div>
        )}

        {/* Back Navigation */}
        <div className="mt-32 py-12 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
          <Link href="/" className="group flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-blue-600 transition-all duration-300 shadow-sm">
               <ArrowLeft size={20} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
            </div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight" style={headFont}>
              <span className={isDark ? "text-white" : "text-gray-900"}>Back to </span>
              <span className="text-blue-600 dark:text-blue-400">Career Hub</span>
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CompanyInterviews;
