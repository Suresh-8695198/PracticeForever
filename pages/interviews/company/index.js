import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Building2, ChevronRight, ArrowRight, ArrowLeft, Command, RotateCcw, X, Info } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
import axios from 'axios';
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
import { useTheme } from '@/context/ThemeContext';
import TiltedCard from '../../../components/ui/TiltedCard';
import PixelCard from '../../../components/ui/PixelCard';

const companies = [
  // IT Services & Top MNCs
  { id: "tcs", name: "TCS", domain: "tcs.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #2563eb 0% , #1d4ed8 100%)", logoUrl: "https://icon.horse/icon/tcs.com", description: "Tata Consultancy Services - Interview Questions & Experience", topicsCount: 15 },
  { id: "infosys", name: "Infosys", domain: "infosys.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", description: "Infosys Placement Papers & Interview Topics", topicsCount: 12 },
  { id: "wipro", name: "Wipro", domain: "wipro.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", description: "Wipro Core & Logical Reasoning Questions", topicsCount: 10 },
  { id: "cognizant", name: "Cognizant", domain: "cognizant.com", color: "#10b981", bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg", description: "Cognizant GenC & Next Interview Patterns", topicsCount: 14 },
  { id: "accenture", name: "Accenture", domain: "accenture.com", color: "#a855f7", bgGradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_logo.svg", description: "Accenture Cognitive Assessment & Coding", topicsCount: 16 },
  { id: "ibm", name: "IBM", domain: "ibm.com", color: "#1e40af", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", description: "IBM Cognitive Ability & English Assessment", topicsCount: 11 },
  { id: "tech-mahindra", name: "Tech Mahindra", domain: "techmahindra.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Tech_Mahindra_New_Logo.svg", description: "Tech Mahindra Aptitude & Technical Questions", topicsCount: 9 },
  { id: "capgemini", name: "Capgemini", domain: "capgemini.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", logoUrl: "https://www.logo.wine/a/logo/Capgemini/Capgemini-Logo.wine.svg", description: "Capgemini Pseudo Code & English Test", topicsCount: 13 },
  { id: "hcl", name: "HCLTech", domain: "hcl.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/HCLTech_Logo.svg", description: "HCL Technical & HR Interview Preps", topicsCount: 8 },
  { id: "ltimindtree", name: "LTIMindtree", domain: "ltimindtree.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", logoUrl: "https://icon.horse/icon/ltimindtree.com", description: "LTIMindtree Coding & Core CS Subjects", topicsCount: 10 },
  { id: "mphasis", name: "Mphasis", domain: "mphasis.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mphasis_logo.svg", description: "Mphasis AMCAT Pattern & Technical Questions", topicsCount: 9 },
  { id: "hexaware", name: "Hexaware", domain: "hexaware.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Hexaware_Logo_2022.svg", description: "Hexaware Aptitude & Logical Reasoning", topicsCount: 7 },
  
  // Tech Giants (FAANG & Similar)
  { id: "microsoft", name: "Microsoft", domain: "microsoft.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", description: "Microsoft DSA, System Design & HR", topicsCount: 20 },
  { id: "google", name: "Google", domain: "google.com", color: "#ea4335", bgGradient: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", description: "Google Coding Interviews & Data Structures", topicsCount: 22 },
  { id: "amazon", name: "Amazon", domain: "amazon.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg", description: "Amazon Leadership Principles & Tech Questions", topicsCount: 18 },
  { id: "apple", name: "Apple", domain: "apple.com", color: "#000000", bgGradient: "linear-gradient(135deg, #52525b 0%, #27272a 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", description: "Apple Core Technical & Architectural Rounds", topicsCount: 15 },
  { id: "meta", name: "Meta", domain: "meta.com", color: "#06b6d4", bgGradient: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", description: "Meta System Design & Front-End Architecture", topicsCount: 17 },
  { id: "netflix", name: "Netflix", domain: "netflix.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", description: "Netflix Distributed Systems & Core Engineering", topicsCount: 14 },
  { id: "cisco", name: "Cisco", domain: "cisco.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", description: "Cisco Networking & Systems Questions", topicsCount: 16 },
  { id: "adobe", name: "Adobe", domain: "adobe.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/Adobe_Corporate_Logo.png", description: "Adobe DSA & API Design Interviews", topicsCount: 14 },
  { id: "vmware", name: "VMware", domain: "vmware.com", color: "#6366f1", bgGradient: "linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/VMware.svg", description: "VMware OS Concepts & Virtualization Tech", topicsCount: 11 },
  { id: "salesforce", name: "Salesforce", domain: "salesforce.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", description: "Salesforce Apex & Web Engineering Prep", topicsCount: 12 },
  { id: "servicenow", name: "ServiceNow", domain: "servicenow.com", color: "#10b981", bgGradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/ServiceNow_logo.svg", description: "ServiceNow Platform & CS Fundamentals", topicsCount: 11 },
  { id: "uber", name: "Uber", domain: "uber.com", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg", description: "Uber Geolocation Algorithms & Scalability", topicsCount: 15 },
  
  // Software Products & Enterprise
  { id: "zoho", name: "Zoho", domain: "zoho.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", logoUrl: "https://www.zoho.com/sites/zweb/images/commonroot/zoho-logo-web.svg", description: "Zoho Advanced C/C++ Programming & Logical", topicsCount: 22 },
  { id: "atlassian", name: "Atlassian", domain: "atlassian.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Atlassian_Logo.svg", description: "Atlassian Low-Level Design & Code Review", topicsCount: 13 },
  { id: "paypal", name: "PayPal", domain: "paypal.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", description: "PayPal Java, Spring Boot & DB Schema", topicsCount: 13 },
  { id: "intuit", name: "Intuit", domain: "intuit.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Intuit_logo.svg", description: "Intuit Frontend & Full Stack Assessments", topicsCount: 12 },
  { id: "linkedin", name: "LinkedIn", domain: "linkedin.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg", description: "LinkedIn Graph Algorithms & Scalability", topicsCount: 15 },
  
  // Indian Startups & Unicorns
  { id: "freshworks", name: "Freshworks", domain: "freshworks.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Freshworks_Logo.svg", description: "Freshworks Full Stack & System Rounds", topicsCount: 12 },
  { id: "flipkart", name: "Flipkart", domain: "flipkart.com", color: "#eab308", bgGradient: "linear-gradient(135deg, #fde047 0%, #ca8a04 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flipkart_logo.png", description: "Flipkart Machine Coding & E-Commerce Logic", topicsCount: 16 },
  { id: "swiggy", name: "Swiggy", domain: "swiggy.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.png", description: "Swiggy Data Structures & LLD", topicsCount: 14 },
  { id: "zomato", name: "Zomato", domain: "zomato.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png", description: "Zomato React Native & Algorithm Rounds", topicsCount: 12 },
  { id: "paytm", name: "Paytm", domain: "paytm.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", logoUrl: "https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg", description: "Paytm Backend Design & SQL Queries", topicsCount: 14 },
  { id: "razorpay", name: "Razorpay", domain: "razorpay.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg", description: "Razorpay FinTech Coding & API Design", topicsCount: 15 },
  { id: "cred", name: "CRED", domain: "cred.club", color: "#000000", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/CRED_logo.svg", description: "CRED High UI/UX Standards & Arch Rounds", topicsCount: 11 },
  { id: "oyo", name: "OYO", domain: "oyorooms.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Oyo_Rooms_Logo.svg", description: "OYO Arrays, Strings & Logical Scenarios", topicsCount: 10 },
  { id: "ola", name: "Ola", domain: "olacabs.com", color: "#84cc16", bgGradient: "linear-gradient(135deg, #a3e635 0%, #65a30d 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ola_Cabs_logo.svg", description: "Ola Path Finding Algorithms & Scale", topicsCount: 12 },
  { id: "makemytrip", name: "MakeMyTrip", domain: "makemytrip.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Makemytrip_logo.png", description: "MakeMyTrip Java / Spring Boot Prep", topicsCount: 11 },
  { id: "dream11", name: "Dream11", domain: "dream11.com", color: "#ef4444", bgGradient: "linear-gradient(135deg, #fca5a5 0%, #dc2626 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Dream11_Logo.png", description: "Dream11 Concurrency & Scale Management", topicsCount: 12 },
  { id: "phonepe", name: "PhonePe", domain: "phonepe.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/PhonePe_Logo.svg", description: "PhonePe Real-Time Payment Architecture", topicsCount: 14 },
  { id: "postman", name: "Postman", domain: "postman.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png", description: "Postman Core Javascript & API Tests", topicsCount: 13 },
  { id: "browserstack", name: "BrowserStack", domain: "browserstack.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Browserstack-logo.svg", description: "BrowserStack Core CS & Systems", topicsCount: 10 },
  { id: "chargebee", name: "Chargebee", domain: "chargebee.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fde047 0%, #d97706 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Chargebee_Logo.svg", description: "Chargebee Subscriptions & FinTech DB", topicsCount: 9 },
  { id: "pine-labs", name: "Pine Labs", domain: "pinelabs.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pine_Labs_Logo.svg", description: "Pine Labs Core Programming Prep", topicsCount: 8 },
  { id: "zerodha", name: "Zerodha", domain: "zerodha.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Zerodha_logo.png", description: "Zerodha Financial Trading Tech", topicsCount: 9 },
  { id: "meesho", name: "Meesho", domain: "meesho.com", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Meesho_logo.png", description: "Meesho E-Commerce DSA & LLD", topicsCount: 12 },
  { id: "cure-fit", name: "Cure.fit", domain: "cult.fit", color: "#ec4899", bgGradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Cult.fit_Logo.png", description: "Cure.fit Full Stack & Web Architecture", topicsCount: 10 },
  { id: "upstox", name: "Upstox", domain: "upstox.com", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Upstox_logo.png", description: "Upstox Trading Platforms & Optimizations", topicsCount: 11 },
  
  // Big 4 & Finance
  { id: "deloitte", name: "Deloitte", domain: "deloitte.com", color: "#86efac", bgGradient: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg", description: "Deloitte Aptitude, Verbal & Tech Rounds", topicsCount: 12 },
  { id: "pwc", name: "PwC", domain: "pwc.com", color: "#f97316", bgGradient: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg", description: "PwC Cyber Security & Consulting", topicsCount: 10 },
  { id: "ey", name: "EY", domain: "ey.com", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg", description: "EY GDS Logical Deductions & Analytics", topicsCount: 11 },
  { id: "kpmg", name: "KPMG", domain: "kpmg.com", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/KPMG_blue_logo.svg", description: "KPMG Audit & Tech Advisory Questions", topicsCount: 9 },
  { id: "goldman-sachs", name: "Goldman Sachs", domain: "goldmansachs.com", color: "#a855f7", bgGradient: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs_logo.svg", description: "Goldman Sachs Math, Puzzles & DSA", topicsCount: 18 },
  { id: "morgan-stanley", name: "Morgan Stanley", domain: "morganstanley.com", color: "#0284c7", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Morgan_Stanley_logo.svg", description: "Morgan Stanley Java, Concurrency", topicsCount: 16 },
  { id: "jpmorgan", name: "JPMorgan Chase", domain: "jpmorganchase.com", color: "#16a34a", bgGradient: "linear-gradient(135deg, #4ade80 0%, #15803d 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_inverted.svg", description: "JPMC Code For Good & Quant Questions", topicsCount: 15 },
  { id: "barclays", name: "Barclays", domain: "barclays.com", color: "#0ea5e9", bgGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Barclays_Logo.svg", description: "Barclays C++ & FinTech Infrastructure", topicsCount: 12 },
];

const CompanyInterviews = () => {
  const { isDark } = useTheme();
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const [showResetModal, setShowResetModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const bg = isDark ? 'bg-[#0f0f0f] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const cardBg = isDark ? 'bg-[#141414] border-zinc-600' : 'bg-white border-zinc-400 shadow-md';
  const headFont = { fontFamily: 'Outfit, sans-serif' };
  const bodyFont = { fontFamily: 'Outfit, sans-serif' };

  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const stagger = { show: { transition: { staggerChildren: 0.05 } } };

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    company.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const confirmResetAll = async () => {
    setIsResetting(true);
    try {
      if (session?.user?.backendId) {
        try {
           await axios.delete(`${API_BASE}/api/progress/${session.user.backendId}/all-interviews`);
        } catch(e) { console.log("Backend reset not supported or failed") }
      }
      
      // Clear all local progress keys for company interviews
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('progress_company_')) {
          localStorage.removeItem(key);
        }
      });
      
      window.location.reload(); 
    } catch (error) {
      console.error("Reset failed:", error);
      alert("Failed to reset progress.");
    } finally {
      setIsResetting(false);
      setShowResetModal(false);
    }
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 ${bg}`} style={bodyFont}>
      <Head>
        <title>Top IT Companies Interview Prep | Career Platform</title>
        <meta name="description" content="Company-wise interview questions, placement papers, and preparation guides for TCS, Infosys, Wipro, and more." />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Performance Optimization: Resource Hints for faster logo loading */}
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.logo.wine" />
        <link rel="dns-prefetch" href="https://icon.horse" />
        <link rel="dns-prefetch" href="https://logo.clearbit.com" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Banner Card & Search Area */}
        <div className="relative mb-16 w-full max-w-6xl mx-auto">
          {/* Top Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative w-full rounded-[20px] overflow-hidden p-6 md:p-10 mb-6 border ${
              isDark ? 'bg-[#141414] border-[#222]' : 'bg-[#fff0f6] border-pink-100'
            }`}
          >
            {/* Background Organic Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#db2777" d="M100.5,41.5C124.6,65.3,135.5,103.4,124.8,131C114.1,158.6,81.8,175.7,51.8,172.5C21.8,169.3,-5.9,145.7,-19.1,116.3C-32.3,86.9,-30.9,51.7,-13.4,27.2C4,-2.7,37.5,-21.9,64.3,-18.2C91.1,-14.5,111.2,12.1,100.5,41.5Z" transform="translate(300 100)" />
                  <path fill="#f472b6" d="M44.5,-61.2C58.1,-52.8,69.9,-41.4,76.5,-27.7C83.1,-14.1,84.4,1.8,81,16.5C77.5,31.2,69.2,44.7,57.7,54.7C46.1,64.7,31.3,71.2,15.7,74.5C0.1,77.7,-16.1,77.7,-30.9,73C-45.7,68.3,-59.1,58.8,-68.8,46.3C-78.4,33.7,-84.3,18.1,-84.3,2.2C-84.3,-13.7,-78.4,-29.9,-68.6,-43.3C-58.8,-56.7,-45.1,-67.3,-30.9,-75.4C-16.7,-83.5,-2,-88.9,11.2,-87.3C24.4,-85.7,31,-77,44.5,-61.2Z" transform="translate(150 150)" />
               </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-4">
              <div className="flex-1 text-left">
                <h1 
                  className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-[800] tracking-tight mb-2 leading-[1.2] keep-color" 
                  style={{ 
                    fontFamily: 'Outfit, sans-serif',
                    backgroundImage: isDark 
                      ? 'linear-gradient(135deg, #fff 0%, #ec4899 100%)' 
                      : 'linear-gradient(135deg, #000 0%, #db2777 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Company-Wise <br className="hidden sm:block" />
                  Interview Prep
                </h1>
                <p 
                  className="text-sm md:text-base text-gray-600 dark:text-zinc-400 max-w-xl leading-relaxed font-medium mt-3" 
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Explore placement papers, core topics, aptitude, and logical reasoning questions frequently asked by top IT product and service-based companies.
                </p>
              </div>

              <div className="shrink-0 flex items-center justify-center">
                <button className={`
                  w-full sm:w-auto px-8 py-3.5 rounded-full font-extrabold text-[15px] transition-all
                  ${isDark ? 'bg-white text-black hover:bg-pink-500 hover:text-white' : 'bg-black text-white hover:bg-pink-500 hover:text-white'}
                  border-[3px] border-black dark:border-white active:translate-y-1
                `}>
                  Explore Companies
                </button>
              </div>
            </div>
          </motion.div>

          {/* Connected Search Area */}
          <div className="relative w-full max-w-4xl mx-auto -mt-10 px-4 md:px-0 z-20">
            <div className={`
              group flex items-center gap-2 sm:gap-4 p-1.5 sm:p-2 rounded-xl border transition-all duration-300 shadow-xl
              ${isDark ? 'bg-[#1a1a1a] border-[#333] focus-within:border-pink-500/50' 
                      : 'bg-white border-gray-100 focus-within:border-pink-300'}
            `}>
              <div className="pl-2 sm:pl-4">
                <Search size={20} className="text-gray-400 group-focus-within:text-pink-500 transition-colors" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search companies..."
                className="flex-1 py-2 sm:py-3 bg-transparent outline-none text-[14px] sm:text-[16px] font-medium placeholder:text-gray-400 dark:text-white min-w-0"
              />
              
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-[#222] rounded-md border border-gray-200 dark:border-[#333]">
                <Command size={14} className="text-gray-400" />
                <span className="text-[12px] font-bold text-gray-500">K</span>
              </div>

              <button className={`
                px-4 sm:px-7 py-2 sm:py-3 bg-pink-500 text-white font-extrabold text-[13px] sm:text-[15px] rounded-lg
                hover:bg-pink-600 transition-all ml-1 active:scale-95 shadow-md shadow-pink-500/20
              `}>
                 Search
              </button>
            </div>
          </div>
        </div>

        {/* Global Progress Actions */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-6 mb-16 p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm">
           <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <img src="https://img.icons8.com/3d-fluency/94/like--v3.png" alt="Fully Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
                <span>Fully Completed</span>
              </div>
              <div className="hidden sm:block w-px h-3.5 bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex items-center gap-2">
                <img src="https://img.icons8.com/3d-fluency/94/like--v8.png" alt="Partially Completed" className="w-[18px] h-[18px] object-contain drop-shadow-sm" />
                <span>Partially Completed</span>
              </div>
           </div>

           <button 
             onClick={() => setShowResetModal(true)}
             className="flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-500 text-[11px] font-black uppercase tracking-widest hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all active:scale-95"
           >
             <RotateCcw size={14} strokeWidth={3} />
             Reset All Interview Progress
           </button>
        </div>

        {/* Reset Confirmation Modal */}
        <AnimatePresence>
          {showResetModal && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowResetModal(false)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-[400px] bg-white dark:bg-[#121212] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mb-6">
                    <RotateCcw size={32} className="text-rose-500" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-[24px] font-black text-gray-900 dark:text-white mb-3 tracking-tight">Reset All?</h3>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                    This will permanently clear your progress across <span className="text-rose-500 font-bold">ALL Company Interview preparations</span>. This action cannot be undone.
                  </p>
                  
                  <div className="flex flex-col w-full gap-3">
                    <button 
                      onClick={confirmResetAll}
                      disabled={isResetting}
                      className="h-14 w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white rounded-2xl font-black text-[15px] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                      {isResetting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Confirm Absolute Reset"
                      )}
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

        {/* SEO Long Form Content for AdSense */}
        <div className={`mb-12 p-6 md:p-8 rounded-2xl border ${isDark ? 'bg-[#141414] border-zinc-700' : 'bg-white border-pink-100'} shadow-sm`}>
           <h2 className="text-2xl font-bold tracking-tight mb-4" style={headFont}>How to Crack IT Company Placement Interviews</h2>
           <div className="space-y-4 text-sm md:text-[15px] text-gray-600 dark:text-zinc-300 leading-relaxed font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
             <p>
               Securing a job at top IT product and service-based companies like TCS, Infosys, Amazon, or Google requires a systematic preparation strategy. The recruitment process generally comprises several strict filtering rounds. Typically, it begins with an Online Assessment (OA) which tests your Quantitative Aptitude, Logical Reasoning, Verbal Ability, and fundamental Coding skills. A strong grasp of Data Structures and Algorithms (DSA) is essential for clearing this stage.
             </p>
             <p>
               Once you clear the OA, the technical interview rounds dive deep into your core Computer Science knowledge. Companies extensively evaluate candidates on Operating Systems, Database Management Systems (DBMS), Computer Networks, and Object-Oriented Programming (OOP) concepts. Moreover, your technical projects and real-world implementation skills are thoroughly cross-examined.
             </p>
             <p>
               For roles in product companies (like FAANG or Tier-1 startups), System Design (both Low-Level and High-Level Design) becomes a crucial differentiator. Conversely, service-based giants (like TCS, Cognizant, Wipro) heavily emphasize fundamental programming knowledge, pseudo-code analysis, and agile adaptability. Our company-wise specific preparation resources below provide actual past placement papers, categorized interview experiences, and focused reading material tailored exactly to the unique hiring patterns of each organization.
             </p>
           </div>
        </div>

        {/* Header for list */}
        <motion.div 
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           variants={fadeUp}
           className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-800"
        >
           <div>
              <h2 className="text-2xl font-bold tracking-tight mb-1" style={headFont}>Top IT Companies</h2>
              <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400">Select a company to view their hiring patterns and questions</p>
           </div>
           <div className="px-3 py-1.5 rounded-lg text-[12px] font-bold tracking-wider" style={{ background: isDark ? '#222' : '#f1f5f9', color: isDark ? '#aaa' : '#64748b' }}>
              {filteredCompanies.length} COMPANIES
           </div>
        </motion.div>

        {/* Grid of Companies */}
        {filteredCompanies.length > 0 ? (
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0"
          >
            {filteredCompanies.map((company, idx) => (
              <motion.div key={company.id} variants={fadeUp}>
                <Link 
                  href={`/interviews/company/${company.id}`}
                  className="block outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl h-full"
                >
                <PixelCard
                  variant="default"
                  colors={`${company.color},${company.color}88,${company.color}44`}
                  gap={7}
                  speed={30}
                  className={`w-full h-full border rounded-2xl transition-all duration-300 ${cardBg} group-hover:shadow-lg`}
                  style={{ 
                    transitionProperty: 'border-color, box-shadow, transform'
                  }}
                >
                  <div 
                    className="group relative flex flex-col p-6 w-full h-full transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.parentElement.style.borderColor = company.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.parentElement.style.borderColor = '';
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                      style={{ background: `linear-gradient(135deg, ${company.color}22 0%, transparent 100%)` }}
                    />

                <div className="relative z-10 flex items-start gap-4 mb-5">
                   {/* Logo Container */}
                   <div className="w-16 h-16 shrink-0 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110 p-2 relative">
                      <img 
                        src={company.logoUrl || `https://icon.horse/icon/${company.domain}`} 
                        alt={`${company.name} Logo`}
                        loading={idx < 4 ? "eager" : "lazy"}
                        decoding="async"
                        {...(idx < 4 ? { fetchpriority: "high" } : {})}
                        onError={(e) => {
                          const domain = company.domain;
                          if (e.target.src === company.logoUrl) {
                            e.target.src = `https://icon.horse/icon/${domain}`;
                          } else if (e.target.src.includes('icon.horse')) {
                            e.target.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                          } else if (e.target.src.includes('favicons')) {
                            e.target.src = `https://logo.clearbit.com/${domain}`;
                          } else if (e.target.src.includes('clearbit')) {
                            e.target.src = `https://unavatar.io/${domain}`;
                          } else {
                            e.target.onerror = null; 
                            e.target.style.display = 'none';
                            const fallback = e.target.parentElement.querySelector('.fallback-logo');
                            if (fallback) fallback.style.display = 'flex';
                            const skeleton = e.target.parentElement.querySelector('.loading-skeleton');
                            if (skeleton) skeleton.style.display = 'none';
                          }
                        }}
                        onLoad={(e) => {
                          const skeleton = e.target.parentElement.querySelector('.loading-skeleton');
                          const fallback = e.target.parentElement.querySelector('.fallback-logo');
                          if (fallback) fallback.style.display = 'none';
                          if (skeleton) {
                            skeleton.classList.remove('animate-pulse');
                            skeleton.style.opacity = '0';
                            setTimeout(() => {
                              skeleton.style.display = 'none';
                            }, 300);
                          }
                          e.target.style.opacity = '1';
                        }}
                        className="w-full h-full object-contain relative z-20 transition-opacity duration-500 opacity-0"
                      />
                      {/* Loading Skeleton */}
                      <div className="loading-skeleton absolute inset-0 bg-gray-100 dark:bg-zinc-800 animate-pulse z-30 transition-opacity duration-300 pointer-events-none"></div>
                      {/* Fallback Text Logo */}
                      <div className="fallback-logo absolute inset-0 hidden items-center justify-center font-extrabold text-2xl text-white z-10" style={{ background: company.bgGradient || company.color }}>
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
                </PixelCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
