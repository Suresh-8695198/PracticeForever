import React, { useEffect, useState, useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import {
    Calendar, Clock, ChevronRight,
    LayoutGrid, BookOpen, Search,
    Share2, Printer, ChevronLeft, Star, PhoneCall,
    HelpCircle, CheckCircle2, Languages
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MARCH_12_ARTICLE, MARCH_11_ARTICLE } from '../../data/current-affairs-data';

const HIGHLIGHT_MAP = {
    "Lok Sabha": "highlight-blue",
    "resolution": "highlight-blue",
    "removal of Speaker": "highlight-blue",
    "Om Birla": "highlight-yellow",
    "partisan behaviour": "highlight-blue",
    "Kiren Rijiju": "highlight-yellow",
    "attack on democracy": "highlight-blue",
    "majority of the House members": "highlight-blue",
    "parliamentary neutrality": "highlight-blue",
    "democratic functioning": "highlight-blue",

    "natural gas shortage": "highlight-green",
    "United States": "highlight-purple",
    "Norway": "highlight-purple",
    "LPG production increased by 10%": "highlight-orange",
    "household supply": "highlight-green",
    "supply chain delays": "highlight-green",
    "energy security": "highlight-green",

    "Orunodoi welfare scheme": "highlight-teal",
    "₹3,600 crore": "highlight-orange",
    "₹9,000 financial assistance": "highlight-orange",
    "40 lakh women": "highlight-orange",
    "₹4,000 Bihu bonus": "highlight-orange",
    "Below Poverty Line (BPL) families": "highlight-teal",
    "launched in 2020": "highlight-orange",
    "₹17,000 crore distributed": "highlight-orange",

    "UPSC Civil Services Examination": "highlight-red",
    "Anuj Agnihotri": "highlight-yellow",
    "Rank 1": "highlight-orange",
    "1071 marks": "highlight-orange",
    "52.88%": "highlight-orange",
    "2025 total marks": "highlight-orange",
    "Mains: 1750 marks": "highlight-orange",
    "Interview: 275 marks": "highlight-orange",
    "958 candidates selected": "highlight-orange",

    "Rajasthan Assembly": "highlight-blue",
    "Two-child norm": "highlight-blue",
    "Urban Local Body elections": "highlight-blue",
    "Rajasthan Municipalities Act, 2009": "highlight-blue",
    "Section 24": "highlight-blue",
    "local governance": "highlight-blue",

    "Chandigarh": "highlight-yellow",
    "99.93% literacy rate": "highlight-orange",
    "ULLAS programme": "highlight-teal",
    "National Education Policy (NEP) 2020": "highlight-teal",
    "95% literacy benchmark": "highlight-orange",

    "Green Budget": "highlight-eco",
    "Delhi government": "highlight-blue",
    "2026–27": "highlight-orange",
    "clean energy": "highlight-eco",
    "pollution control": "highlight-eco",
    "water conservation": "highlight-eco",
    "waste management": "highlight-eco",
    "environmental sustainability": "highlight-eco",
    "green jobs": "highlight-eco",

    // NEW March 12 Keywords
    "Article 94": "highlight-blue",
    "Article 21": "highlight-blue",
    "Strait of Hormuz": "highlight-purple",
    "Persian Gulf": "highlight-purple",
    "passive euthanasia": "highlight-teal",
    "persistent vegetative state": "highlight-teal",
    "Vijayanagara Empire": "highlight-orange",
    "Lakkundi village": "highlight-yellow",
    "Taranjit Singh Sandhu": "highlight-yellow",
    "Jagdambika Pal": "highlight-yellow",
    "Amit Shah": "highlight-yellow",
    "Rahul Gandhi": "highlight-yellow",
    "GHADC elections": "highlight-teal"
};

// Sort keys by length descending to match longer phrases first
const SORTED_HIGHLIGHT_KEYS = Object.keys(HIGHLIGHT_MAP).sort((a, b) => b.length - a.length);
const HIGHLIGHT_REGEX = new RegExp(SORTED_HIGHLIGHT_KEYS.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'gi');

const applyWordHighlights = (html) => {
    if (!html) return '';
    // To avoid breaking HTML tags, we split by tags and only process text nodes
    const parts = html.split(/(<[^>]+>)/g);
    return parts.map(part => {
        if (part.startsWith('<')) return part;
        return part.replace(HIGHLIGHT_REGEX, (match) => {
            const key = SORTED_HIGHLIGHT_KEYS.find(k => k.toLowerCase() === match.toLowerCase());
            const className = HIGHLIGHT_MAP[key];
            return `<span class="${className}">${match}</span>`;
        });
    }).join('');
};

// Helper to extract first image URL for SEO previews
const extractHeroImage = (content) => {
    if (!content) return '/images/current-affairs-og.jpg';
    const match = content.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : '/images/current-affairs-og.jpg';
};

const ResponsiveAd = ({ type = 'horizontal', label = 'Advertisement', className = '' }) => (
    <div className={`w-full bg-zinc-50 dark:bg-zinc-900/30 border-2 border-dashed border-zinc-200/60 dark:border-zinc-800/60 rounded-xl flex flex-col items-center justify-center p-4 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 my-8 ${type === 'short' ? 'h-[90px]' : type === 'horizontal' ? 'h-[120px] md:h-[150px]' : 'h-[280px]'} ${className}`}>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">{label}</span>
        <div className="w-12 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
    </div>
);

// Helper to extract Quick Revision Points from HTML content
const extractRevisionPoints = (content) => {
    if (!content) return [];
    const revMatch = content.match(/<h4>Quick Revision Points<\/h4>([\s\S]*?)(?=<h4>|$)/i);
    if (!revMatch) return [];
    const revContent = revMatch[1];
    const liMatches = revContent.match(/<li>([\s\S]*?)<\/li>/gi);
    if (!liMatches) return [];
    return liMatches.map(li => li.replace(/<\/?li>/gi, '').trim().replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&'));
};

const extractMCQs = (content) => {
    if (!content) return [];
    
    // Fallback for demo when content is missing or in wrong format
    if (content.includes('Daily Current Affairs') && !content.toLowerCase().includes('frequently asked questions')) {
        return [
            { id: 'q-d1', question: "Who topped the UPSC Civil Services Examination 2026?", options: ["Anuj Agnihotri", "Sanjay Kumar", "Priya Singh", "Rohit Verma"].sort(() => Math.random()-0.5), correctAnswer: "Anuj Agnihotri", explanation: "Anuj Agnihotri secured Rank 1 with 1071 marks." },
            { id: 'q-d2', question: "What is the literacy rate achieved by Chandigarh?", options: ["99.93%", "81.20%", "95.00%", "99.00%"].sort(() => Math.random()-0.5), correctAnswer: "99.93%", explanation: "Chandigarh achieved 99.93% literacy rate under the ULLAS programme." }
        ];
    }
    
    // Match FAQ section
    const faqsMatch = content.match(/(?:Frequently Asked Questions|FAQs?|FAQ)[\s\S]*?(?:<\/h4>|:)([\s\S]*?)(?=<hr|$)/i);
    if (!faqsMatch) return [];
    
    const questionBlocks = faqsMatch[1].split(/<h4[^>]*>|<strong>\d+\.|<b>\d+\./gi).filter(b => b.trim().length > 15);
    
    return questionBlocks.map((block, idx) => {
        const parts = block.split(/<\/h4>|<p>/i).map(p => p.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
        const question = parts[0] || "";
        const answerText = parts[1] || "";
        
        let options = [];
        const qLow = question.toLowerCase();
        if (qLow.includes('upsc')) {
            options = ["Anuj Agnihotri", "Sanjay Kumar", "Priya Singh", "Rohit Verma"];
        } else if (qLow.includes('orunodoi')) {
            options = ["Welfare scheme for women", "Industrial policy", "Agricultural grant", "Education loan"];
        } else if (qLow.includes('green budget')) {
            options = ["Sustainable development sector", "Heavy industry sector", "Tourism sector", "Defense sector"];
        } else if (qLow.includes('natural gas')) {
            options = ["High demand and import delays", "Low production only", "Pipeline leakage", "Export surge"];
        } else {
            options = [answerText.substring(0, 30), "Policy changes", "Economic growth", "Institutional reforms"];
        }
        
        if (!options.some(o => answerText.toLowerCase().includes(o.toLowerCase()) || o.toLowerCase().includes(answerText.toLowerCase()))) {
            options[0] = answerText;
        }
        
        if (question.length < 5) return null;

        return {
            id: `q-${idx}`,
            question,
            options: options.filter(Boolean).sort(() => Math.random() - 0.5),
            correctAnswer: answerText,
            explanation: answerText
        };
    }).filter(Boolean).slice(0, 3);
};

const CurrentAffairs = () => {
    const { isDark } = useTheme();
    const router = useRouter();
    const { category: urlCategory } = router.query;
    
    // UI Colors mapping to the premium Vision IAS style format
    const bg = isDark ? 'bg-[#0f0f11]' : 'bg-[#f8f9fa]';
    const cardBg = isDark ? 'bg-[#18181b]' : 'bg-white';
    const borderColor = isDark ? 'border-zinc-800' : 'border-zinc-200';
    const textColor = isDark ? 'text-zinc-100' : 'text-zinc-900';
    const mutedColor = isDark ? 'text-zinc-500' : 'text-zinc-500';

    // Helper to get local date in YYYY-MM-DD
    const getLocalISODate = () => {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    };

    // State
    const [selectedDate, setSelectedDate] = useState('2026-03-12');
    const [articles, setArticles] = useState([]);
    const [allArticles, setAllArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [activeCategory, setActiveCategory] = useState(urlCategory || 'daily');
    const [feedback, setFeedback] = useState(null);
    const [rating, setRating] = useState(0);
    const [stats, setStats] = useState({
        responses: 124,
        rating: 4.8,
        count: 85
    });
    
    const [quizAnswers, setQuizAnswers] = useState({});
    const [activeQuizId, setActiveQuizId] = useState(null);
    const [currentLang, setCurrentLang] = useState('en');

    // Memoize extractions to prevent re-shuffling on scroll/render
    const articleMCQs = useMemo(() => {
        return selectedArticle ? extractMCQs(selectedArticle.content) : [];
    }, [selectedArticle]);

    const revisionPoints = useMemo(() => {
        return selectedArticle ? extractRevisionPoints(selectedArticle.content) : [];
    }, [selectedArticle]);



    useEffect(() => {
        // Load Google Translate Script
        if (typeof window !== 'undefined' && !window.googleTranslateElementInit) {
            const addScript = document.createElement('script');
            addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            addScript.async = true;
            document.body.appendChild(addScript);

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,ta',
                    autoDisplay: false
                }, 'google_translate_element');
            };
        }
    }, []);

    const toggleLanguage = (lang) => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
            setCurrentLang(lang);
        }
    };

    const handleQuizOption = (qId, option) => {
        if (quizAnswers[qId]) return; // Prevent re-answering
        setQuizAnswers(prev => ({ ...prev, [qId]: option }));
    };

    const handleFeedback = (id) => {
        if (feedback === id) return;
        setFeedback(id);
        setStats(prev => ({ ...prev, responses: prev.responses + 1 }));
    };

    const handleRating = (val) => {
        setRating(val);
        setStats(prev => {
            const newCount = prev.count + 1;
            const newRating = ((prev.rating * prev.count) + val) / newCount;
            return {
                ...prev,
                count: newCount,
                rating: Number(newRating.toFixed(1))
            };
        });
    };

    // Update category when URL changes
    useEffect(() => {
        if (urlCategory) {
            setActiveCategory(urlCategory);
        }
    }, [urlCategory]);

    // Fetch all articles (Completely Static Version)
    useEffect(() => {
        const dailyArticles = [MARCH_12_ARTICLE, MARCH_11_ARTICLE];
        setAllArticles(dailyArticles);
        setLoading(false);
    }, []);

    // Filter articles by selected local date
    useEffect(() => {
        if (allArticles.length > 0) {
            const filtered = allArticles.filter(a => {
                const articleDate = a.publish_date.substring(0, 10);
                return articleDate === selectedDate;
            });
            setArticles(filtered);
            setSelectedArticle(filtered.length > 0 ? filtered[0] : null);

            // If no articles for today, fallback to the latest available day
            if (filtered.length === 0 && selectedDate === getLocalISODate()) {
                if (allArticles.length > 0) {
                    const latestDate = allArticles[0].publish_date.substring(0, 10);
                    setSelectedDate(latestDate);
                }
            }
        }
    }, [selectedDate, allArticles]);

    // Render Formatted Date
    const formatDisplayDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const formatShortDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const pageTitle = selectedArticle ? `${selectedArticle.title} | Daily Current Affairs` : 'Daily Current Affairs for UPSC, SSC, Banking & Exams';
    const pageDescription = selectedArticle ? `Read ${selectedArticle.title}. Stay updated with the latest national and international news, constitutional facts, and quick revision points for competitive exams.` : 'Stay ahead in your exam preparation with our comprehensive Daily Current Affairs. Get news analysis, quick revision points, and practice quizzes for UPSC, SSC, and Banking exams.';
    const canonicalURL = typeof window !== 'undefined' ? window.location.href : 'https://yourwebsite.com/current-affairs';
    const heroImage = selectedArticle ? extractHeroImage(selectedArticle.content) : '/images/current-affairs-og.jpg';
    const siteDomain = 'https://yourwebsite.com'; // Replace with actual domain
    const absoluteHeroImage = heroImage.startsWith('http') ? heroImage : `${siteDomain}${heroImage}`;

    return (
        <div className={`min-h-screen ${bg} ${textColor} font-sans selection:bg-rose-200 selection:text-rose-900 pb-20 pt-[80px]`}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="current affairs, daily news, upsc current affairs, ssc news, banking exam updates, general knowledge, govt job preparation, india current affairs, global news highlights" />
                
                {/* ── GOOGLE DISCOVER OPTIMIZATION ── */}
                <meta name="robots" content="max-image-preview:large" />
                <meta name="thumbnail" content={absoluteHeroImage} />
                
                {/* ── OPEN GRAPH / FACEBOOK ── */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={absoluteHeroImage} />
                <meta property="og:url" content={canonicalURL} />
                <meta property="og:site_name" content="Career Platform" />
                <meta property="article:published_time" content={selectedArticle?.publish_date} />
                <meta property="article:section" content="Current Affairs" />
                
                {/* ── TWITTER ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={absoluteHeroImage} />
                
                <link rel="canonical" href={canonicalURL} />

                {/* ── JSON-LD STRUCTURED DATA (Google News/Discover) ── */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": selectedArticle?.title || "Daily Current Affairs Analysis",
                        "image": [
                            absoluteHeroImage
                        ],
                        "datePublished": selectedArticle ? new Date(selectedArticle.publish_date).toISOString() : new Date().toISOString(),
                        "dateModified": new Date().toISOString(),
                        "author": [{
                            "@type": "Organization",
                            "name": "Career Platform Editorial",
                            "url": siteDomain
                        }],
                        "publisher": {
                            "@type": "Organization",
                            "name": "Career Platform",
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteDomain}/logo.png`
                            }
                        },
                        "description": pageDescription,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": canonicalURL
                        }
                    })}
                </script>
            </Head>
            
            {/* ── BREADCRUMB ── */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-6 pb-2">
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-400">
                    <Link href="/" className="hover:text-amber-500 transition-colors">HOME</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-zinc-600 dark:text-zinc-300">CURRENT AFFAIRS</span>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
                
                {/* ── TOP UTILITY ROW ── */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Calendar className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                            <span className="text-[14px] font-bold text-zinc-800 dark:text-zinc-200">Select Date:</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className={`flex-1 sm:flex-initial flex items-center border ${borderColor} rounded-md px-3 py-1.5 ${cardBg} shadow-sm`}>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={e => setSelectedDate(e.target.value)}
                                    className={`bg-transparent w-full sm:w-auto text-[14px] font-semibold outline-none ${isDark ? '[color-scheme:dark]' : ''}`}
                                />
                            </div>
                            <div className="bg-[#ef4c66] hover:bg-[#d94159] transition-colors cursor-pointer text-white text-[13px] font-bold px-4 py-2 rounded-md shadow-sm whitespace-nowrap">
                                {formatShortDate(selectedDate)}
                            </div>
                        </div>
                    </div>

                    {/* ── COMPACT LANGUAGE SWITCHER ── */}
                    <div className="flex items-center shrink-0">
                        <div className={`flex items-center p-1 rounded-[8px] ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'} border ${isDark ? 'border-zinc-700' : 'border-zinc-200'} transition-colors`}>
                            <button 
                                onClick={() => toggleLanguage('en')}
                                className={`
                                    relative flex items-center gap-2 px-3.5 py-1.5 rounded-[5px] text-[11px] font-bold tracking-widest transition-all duration-200
                                    ${currentLang === 'en' 
                                        ? 'bg-emerald-600 text-white' 
                                        : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                                    }
                                `}
                            >
                                <Languages className={`w-3.5 h-3.5 ${currentLang === 'en' ? 'text-emerald-100' : 'text-zinc-400'}`} />
                                ENGLISH
                            </button>
                            <button 
                                onClick={() => toggleLanguage('ta')}
                                className={`
                                    flex items-center px-4 py-1.5 rounded-[5px] text-[14px] font-bold transition-all duration-200
                                    ${currentLang === 'ta' 
                                        ? 'bg-emerald-600 text-white' 
                                        : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                                    }
                                `}
                            >
                                தமிழ்
                            </button>
                        </div>
                        {/* Hidden Google Translate Element */}
                        <div id="google_translate_element" className="pointer-events-none opacity-0 absolute"></div>
                    </div>
                </div>

                <ResponsiveAd type="short" label="Top Banner Ad" className="lg:hidden mb-6 mt-0" />

                <div className="flex flex-col lg:flex-row gap-10">
                    
                    {/* ── MAIN ARTICLE AREA ── */}
                    <main className="flex-1">
                        {loading ? (
                            <div className="space-y-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={`h-40 rounded-xl animate-pulse ${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`} />
                                ))}
                            </div>
                        ) : articles.length === 0 ? (
                            <div className={`text-center py-24 rounded-xl border ${borderColor} ${cardBg} shadow-sm`}>
                                <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${isDark ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                                    <BookOpen size={32} className="text-zinc-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">No Current Affairs for this date</h3>
                                <p className={`text-sm ${mutedColor}`}>
                                    Check previous dates using the calendar picker above.
                                </p>
                            </div>
                        ) : selectedArticle ? (
                            <div className={`rounded-xl border ${borderColor} ${cardBg} shadow-sm p-6 md:p-10 relative overflow-hidden`}>
                                
                                {/* Top colored bar decoration */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400" />

                                {/* Category Indicator */}
                                <div className="flex items-center gap-3 border-b-2 border-amber-400 pb-2 mb-8 max-w-max">
                                    <div className="w-4 h-4 rounded-sm bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center" />
                                    <span className="font-bold text-[14px] text-zinc-900 dark:text-zinc-100 tracking-wide">
                                        {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Current Affairs
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 
                                    className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.2] sm:leading-[1.15] mb-6 drop-shadow-sm"
                                    dangerouslySetInnerHTML={{ __html: applyWordHighlights(selectedArticle.title) }}
                                />

                                <ResponsiveAd type="short" className="my-6" />

                                {/* Meta Info */}
                                <div className={`flex flex-wrap items-center gap-4 sm:gap-6 text-[13px] font-medium mb-8 ${mutedColor}`}>
                                    <div className="flex items-center gap-1.5 opacity-80">
                                        <Calendar className="w-4 h-4" />
                                        {formatDisplayDate(selectedArticle.publish_date)}
                                    </div>
                                    <div className="flex items-center gap-1.5 opacity-80">
                                        <Clock className="w-4 h-4" />
                                        {Math.max(1, Math.ceil((selectedArticle.content?.length || 0) / 1000))} min read
                                    </div>
                                </div>

                                {/* Tags as minimal pills */}
                                {selectedArticle.tags && (
                                    <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-zinc-100 dark:border-zinc-800/50">
                                        <span className="text-[13px] font-bold text-zinc-800 dark:text-zinc-200 mr-2">Tags:</span>
                                        {selectedArticle.tags.split(',').map((tag, i) => (
                                            <span key={i} className={`px-3 py-1 text-[12px] font-semibold rounded bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default`}>
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Article Source */}
                                {selectedArticle.source && (
                                    <p className="text-[#e0565b] font-bold text-[15px] mb-8">
                                        Source: <span className="underline decoration-2 underline-offset-4 decoration-[#e0565b]/30">{selectedArticle.source}</span>
                                    </p>
                                )}

                                {/* Featured Image */}
                                {selectedArticle.featured_image && (
                                    <div className="mb-12">
                                        <img
                                            src={selectedArticle.featured_image}
                                            alt={selectedArticle.title}
                                            className="w-full h-auto object-contain max-h-[800px]"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    </div>
                                )}

                                {/* Rich Text Prose Content */}
                                <div
                                    className={`
                                        text-[17px] leading-[1.85] tracking-[0.01em] text-zinc-800 dark:text-zinc-300
                                        font-medium
                                        [&>p]:mb-6 [&>p:empty]:hidden
                                        [&>h1]:text-[32px] [&>h1]:font-black [&>h1]:mt-12 [&>h1]:mb-6 [&>h1]:leading-tight [&>h1]:text-black dark:[&>h1]:text-white [&>h1]:tracking-tight
                                        [&>h2]:text-[26px] [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-5 [&>h2]:leading-tight [&>h2]:text-black dark:[&>h2]:text-white [&>h2]:tracking-tight
                                        [&>h3]:text-[20px] [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-black dark:[&>h3]:text-white
                                        [&>h4]:text-[18px] [&>h4]:font-bold [&>h4]:mt-6 [&>h4]:mb-3 [&>h4]:text-black dark:[&>h4]:text-zinc-100
                                        [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2 [&>ol>li]:pl-2
                                        [&>blockquote]:border-l-4 [&>blockquote]:border-amber-400 [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-zinc-600 dark:[&>blockquote]:text-zinc-400 [&>blockquote]:mb-6 [&>blockquote]:py-1 [&>blockquote]:bg-amber-50 dark:[&>blockquote]:bg-amber-500/5 [&>blockquote]:rounded-r-lg
                                        
                                        [&_strong]:font-bold [&_strong]:px-1.5 [&_strong]:py-[1px] [&_strong]:rounded-[3px]
                                        [&_strong:nth-of-type(3n+1)]:text-rose-700 [&_strong:nth-of-type(3n+1)]:bg-rose-100/70 dark:[&_strong:nth-of-type(3n+1)]:text-rose-400 dark:[&_strong:nth-of-type(3n+1)]:bg-rose-500/15
                                        [&_strong:nth-of-type(3n+2)]:text-emerald-700 [&_strong:nth-of-type(3n+2)]:bg-emerald-100/70 dark:[&_strong:nth-of-type(3n+2)]:text-emerald-400 dark:[&_strong:nth-of-type(3n+2)]:bg-emerald-500/15
                                        [&_strong:nth-of-type(3n)]:text-blue-700 [&_strong:nth-of-type(3n)]:bg-blue-100/70 dark:[&_strong:nth-of-type(3n)]:text-blue-400 dark:[&_strong:nth-of-type(3n)]:bg-blue-500/15
                                        
                                        [&_h1_strong]:!bg-transparent [&_h1_strong]:!text-black dark:[&_h1_strong]:!text-white [&_h1_strong]:!px-0
                                        [&_h2_strong]:!bg-transparent [&_h2_strong]:!text-black dark:[&_h2_strong]:!text-white [&_h2_strong]:!px-0
                                        [&_h3_strong]:!bg-transparent [&_h3_strong]:!text-black dark:[&_h3_strong]:!text-white [&_h3_strong]:!px-0
                                        [&_h4_strong]:!bg-transparent [&_h4_strong]:!text-black dark:[&_h4_strong]:!text-zinc-100 [&_h4_strong]:!px-0
                                        
                                        [&_a]:text-blue-600 dark:[&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-2
                                        [&_img]:max-w-full [&_img]:max-h-[600px] [&_img]:h-auto [&_img]:object-contain [&_img]:my-8
                                    `} news-feed-content
                                    dangerouslySetInnerHTML={{ 
                                        __html: selectedArticle.content 
                                            ? applyWordHighlights(selectedArticle.content)
                                                .replace(/(?:<strong>|<b>)([\s\S]*?)(?:<\/strong>|<\/b>)/gi, (match, p1) => {
                                                    const text = p1.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
                                                    
                                                    // 1. Is it a Numbered Question? (e.g. "1. Who...")
                                                    if (/^\d+\./.test(text)) {
                                                        // Explicitly clear floats and break out of inline flow with block divs.
                                                        // This forces separated spacing even if trapped inside a single <p> with <br>s
                                                        return `<div class="my-10 border-t-[3px] border-dotted border-zinc-200 dark:border-zinc-800 first-of-type:hidden block clear-both w-full"></div><h4 class="block mt-4 mb-3 clear-both">${p1}</h4>`;
                                                    }
                                                    
                                                    // 2. Is it a Callout Box Title?
                                                    if (/^(Quick Revision Points|Quick Revision|Frequently Asked Questions|FAQs|FAQ)$/i.test(text)) {
                                                        return `<h4>${p1}</h4>`;
                                                    }

                                                    // 3. Is it an Answer / Sentence? 
                                                    if (text.endsWith('.') && !/^\d+\./.test(text) && text.length > 25) {
                                                        return `<p class="!mt-1 !mb-6 !font-medium !leading-[1.7] text-zinc-700 dark:text-zinc-300">${p1}</p>`;
                                                    }

                                                    // 4. Leave short keywords untouched to get the dynamic pink/green/blue pills
                                                    return match;
                                                })
                                                .replace(/<img([^>]*)class="([^"]*)"/gi, '<img$1class="$2 !h-auto !max-h-[600px] !object-contain !border-0 !shadow-none !rounded-none"')
                                                .replace(/(<h4>(?:<[^>]*>|\s|&nbsp;)*(?:Quick Revision Points|Quick Revision)(?:<[^>]*>|\s|&nbsp;)*<\/h4>)([\s\S]*?)(?=(?:<hr|<h[1-6]>|$))/gi, '<div class="my-10 bg-[#fffef4] dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 rounded-r-lg rounded-l-sm p-6 md:p-8 relative overflow-hidden group border-l-[5px] border-l-amber-400"><div class="absolute -bottom-10 -right-4 opacity-[0.25] dark:opacity-[0.15] pointer-events-none w-56 h-56 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#fdd835" d="M24,4C15.2,4,8,11.2,8,20c0,4.6,1.9,8.7,4.9,11.7l1.1,1.1V36c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-3.2l1.1-1.1C38.1,28.7,40,24.6,40,20C40,11.2,32.8,4,24,4z"/><path fill="#fbc02d" d="M34.9,31.7l-1.1-1.1c-2.6-2.6-4.1-6-4.1-9.6c0-7.7-6.3-14-14-14C19.2,5.2,21.5,4,24,4c8.8,0,16,7.2,16,16 c0,4.6-1.9,8.7-4.9,11.7L34.9,31.7z"/><path fill="#455a64" d="M18,36h12v4h-12zM21,41h6v3h-6z"/></svg></div><div class="relative z-10 [&>h4]:!text-zinc-800 dark:[&>h4]:!text-amber-400 [&>h4]:!font-medium [&>h4]:!text-[18px] [&>h4]:!mt-0 [&>h4]:!mb-4 [&>h4]:border-b [&>h4]:border-amber-200/60 dark:[&>h4]:border-amber-800/40 [&>h4]:pb-4">$1<div class="revision-bullet [&_ul]:!list-none [&_ul]:!pl-0 [&_li]:!mb-3 [&_li]:!text-[15.5px] [&_li]:!leading-[1.7] [&_li]:!text-zinc-800 dark:[&_li]:!text-zinc-300">$2</div></div></div>')
                                                .replace(/(<h4>(?:<[^>]*>|\s|&nbsp;)*(?:Frequently Asked Questions|FAQs|FAQ)(?:<[^>]*>|\s|&nbsp;)*<\/h4>)([\s\S]*?)(?=(?:<hr(?! class="my-10)|<h[1-3]>|<h4[^>]*>(?:Quick Revision|Why in News|Key Highlights|Conclusion))|$)/gi, (match, title, content) => {
                                                    // Strip out any dotted borders that were accidentally injected inside the FAQ area
                                                    let cleanContent = content
                                                        .replace(/<div class="my-10 border-t-\[3px\][^>]*><\/div>/gi, '')
                                                        .replace(/<hr class="my-10 border-t-\[3px\][^>]*>/gi, '');

                                                    // Convert Question Headers (<h4> or <strong>) into interactive <details> tag patterns
                                                    let processed = cleanContent.replace(/(?:<p[^>]*>)?(?:<br\s*\/?>|\s|&nbsp;)*(?:<h4[^>]*>|<strong[^>]*>|<b[^>]*>)(.*?)(?:<\/h4>|<\/strong>|<\/b>)(?:<br\s*\/?>|\s|&nbsp;)*(?:<\/p>)?/gi, 
                                                    `</p></div></details>
<details class="mb-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm group overflow-hidden">
    <summary class="flex justify-between items-center font-bold p-5 cursor-pointer list-none text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 select-none [&::-webkit-details-marker]:hidden">
        <span class="pr-5 text-[16px] leading-[1.4]">$1</span>
        <span class="transition-transform duration-300 group-open:-rotate-180 flex-shrink-0 text-blue-500 bg-blue-50 dark:bg-blue-500/10 p-1.5 rounded-full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
    </summary>
    <div class="px-5 pb-5 pt-1 text-zinc-600 dark:text-zinc-400 text-[15.5px] leading-[1.8] border-t border-zinc-100 dark:border-zinc-800/60 mt-2 pt-4">
        <p>`);

                                                    // Clean up any dangling tags to maintain perfect HTML semantics
                                                    processed = processed.replace(/^[\s\S]*?<\/details>/i, ''); 
                                                    if (processed.trim().length > 0) {
                                                        processed += '</p></div></details>';
                                                    }
                                                    
                                                    return `<div class="my-10 bg-[#f8f9fc] dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/40 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                                                                <div class="relative z-10 [&>h4]:!text-blue-900 dark:[&>h4]:!text-blue-400 [&>h4]:!font-bold [&>h4]:!text-[22px] [&>h4]:!mt-0 [&>h4]:!mb-6 [&>h4]:pb-4 [&>h4]:border-b [&>h4]:border-blue-200/60 dark:[&>h4]:border-blue-800/40">
                                                                    ${title}
                                                                    <div class="faq-accordion-container mt-6">
                                                                        ${processed}
                                                                    </div>
                                                                </div>
                                                            </div>`;
                                                })
                                            : ''
                                    }}
                                />

                                <ResponsiveAd type="horizontal" label="End of Article Ad" className="mt-12 mb-0" />

                                {/* ── BOTTOM ACTIONS ── */}
                                <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-10 mt-12 border-t ${borderColor} bg-zinc-50 dark:bg-zinc-800/30 -mx-6 md:-mx-10 -mb-6 md:-mb-10 px-6 md:px-10 pb-10`}>

                                    <button 
                                        onClick={() => window.print()} 
                                        className={`flex items-center justify-center gap-2 px-6 py-4 sm:py-3 bg-white dark:bg-zinc-900 border ${borderColor} text-zinc-800 dark:text-zinc-200 text-[14px] font-bold rounded shadow-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95`}
                                    >
                                        <Printer className="w-4 h-4 text-[#e0565b]" /> PRINT THIS ARTICLE
                                    </button>
                                    
                                    <div className="hidden sm:block flex-1" />
                                    
                                    {/* Article Navigation inside card */}
                                    <div className="flex justify-center gap-3 mt-2 sm:mt-0">
                                        <button className={`w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded border ${borderColor} bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm`}>
                                            <ChevronLeft className="w-5 h-5 text-zinc-500" />
                                        </button>
                                        <button className={`w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded border ${borderColor} bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm`}>
                                            <ChevronRight className="w-5 h-5 text-zinc-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <ResponsiveAd type="horizontal" label="In-Content Horizontal Ad" className="lg:hidden" />

                        {/* ── FEEDBACK COMPONENT ── */}
                        {selectedArticle && (
                            <div className="mt-16 text-center max-w-3xl mx-auto">
                                <h3 className="text-[24px] font-bold text-zinc-900 dark:text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Tell us what you think!</h3>
                                <div className="flex items-center justify-center gap-2 mb-10">
                                    <div className="flex -space-x-2">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className={`text-[13px] font-medium ${mutedColor}`}>{stats.responses} Responses</p>
                                </div>
                                
                                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-14">
                                    {[
                                        { id: '100', icon: 'https://img.icons8.com/fluency/96/thumb-up--v1.png', label: 'This helped!' },
                                        { id: 'heart', icon: 'https://img.icons8.com/fluency/96/filled-like.png', label: 'Can do better..' },
                                        { id: 'update', icon: 'https://img.icons8.com/fluency/96/restart--v1.png', label: 'Update needed..' },
                                    ].map(item => (
                                        <button 
                                            key={item.id}
                                            onClick={() => handleFeedback(item.id)}
                                            className={`flex flex-col items-center gap-3 transition-all hover:-translate-y-1.5 ${feedback === item.id ? 'opacity-100 scale-110 drop-shadow-md' : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'}`}
                                        >
                                            <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] flex items-center justify-center transition-transform group-hover:scale-110">
                                                <img 
                                                    src={item.icon} 
                                                    alt={item.label} 
                                                    className="w-full h-full object-contain"
                                                    crossOrigin="anonymous" 
                                                />
                                            </div>
                                            <span className={`text-[10px] sm:text-[11px] font-bold max-w-[70px] sm:max-w-[80px] leading-tight ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800/50 max-w-[280px] mx-auto">
                                    <p className={`text-[12px] font-bold mb-4 uppercase tracking-widest ${mutedColor}`}>{stats.count} Ratings</p>
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <button 
                                                key={star} 
                                                onClick={() => handleRating(star)}
                                                className="transition-transform hover:scale-120 active:scale-90"
                                            >
                                                <Star className={`w-8 h-8 ${rating >= star || (rating === 0 && stats.rating >= star) ? 'fill-amber-400 text-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]' : 'fill-zinc-100 text-zinc-100 dark:fill-zinc-800 dark:text-zinc-800'}`} />
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-[20px] font-black text-zinc-900 dark:text-white tracking-tight">{stats.rating}</span>
                                        <span className="text-[14px] font-bold text-zinc-400">/ 5.0</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>

                    {/* ── RIGHT SIDEBAR ── */}
                    <aside className="lg:w-[360px] shrink-0 space-y-6">
                        
                        {/* Headlines Widget */}
                        <div className={`rounded-xl overflow-hidden border ${borderColor} ${cardBg} shadow-sm`}>
                            <div className="bg-[#f09c22] p-4 flex items-center gap-3">
                                <LayoutGrid className="w-5 h-5 text-white opacity-90" />
                                <h3 className="text-[13px] font-black uppercase tracking-[0.1em] force-white" style={{ color: 'white' }}>
                                    HEADLINES — {formatDisplayDate(selectedDate).toUpperCase()}
                                </h3>
                            </div>
                            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60 p-1.5">
                                {articles.length > 0 ? (
                                    articles.map(article => (
                                        <button 
                                            key={article.id}
                                            onClick={() => {
                                                setSelectedArticle(article);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className={`w-full text-left p-3.5 text-[14px] font-medium leading-relaxed rounded-lg transition-colors ${selectedArticle?.id === article.id ? 'bg-amber-50 dark:bg-zinc-800 text-amber-700 dark:text-amber-400 font-bold' : 'text-zinc-700 dark:text-zinc-300 hover:text-[#e0565b] dark:hover:text-[#ff6b70] hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}`}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: applyWordHighlights(article.title) }} />
                                        </button>
                                    ))
                                ) : (
                                    <div className="p-6 text-center text-[13px] text-zinc-500 font-medium">No updates posted for this date.</div>
                                )}
                            </div>
                        </div>

                        {/* Quick Revision Card — NEW */}
                        {selectedArticle && extractRevisionPoints(selectedArticle.content).length > 0 && (
                            <div className={`rounded-xl overflow-hidden border ${borderColor} ${cardBg} shadow-sm`}>
                                <div className="bg-[#ef4c66] p-4 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                                        <Star className="w-3.5 h-3.5 text-white fill-white" />
                                    </div>
                                    <h3 className="text-[13px] font-black uppercase tracking-[0.1em] force-white" style={{ color: 'white' }}>
                                        QUICK REVISION
                                    </h3>
                                </div>
                                <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60 p-1.5">
                                    {revisionPoints.slice(0, 8).map((point, i) => (
                                        <div 
                                            key={i} 
                                            className="p-3.5 text-[13px] font-bold text-zinc-700 dark:text-zinc-200 leading-relaxed flex gap-3 group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                                        >
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ef4c66] shrink-0 shadow-[0_0_8px_rgba(239,76,102,0.4)]" />
                                            <span dangerouslySetInnerHTML={{ __html: applyWordHighlights(point) }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* MCQ Sidebar Widget — NEW */}
                        {selectedArticle && articleMCQs.length > 0 && (
                            <div className={`rounded-xl overflow-hidden border ${borderColor} ${cardBg} shadow-sm`}>
                                <div className="bg-[#4169e1] p-4 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                                        <HelpCircle className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <h3 className="text-[13px] font-black uppercase tracking-[0.1em] force-white" style={{ color: 'white' }}>
                                        PRACTICE QUIZ
                                    </h3>
                                </div>
                                <div className="p-5 space-y-6">
                                    {articleMCQs.map((q, qIdx) => (
                                        <div key={q.id} className="space-y-4">
                                            <p className="text-[14.5px] font-bold leading-relaxed text-zinc-800 dark:text-zinc-200">
                                                {qIdx + 1}. {q.question}
                                            </p>
                                            <div className="grid gap-2">
                                                {q.options.map((opt, oIdx) => {
                                                    const isSelected = quizAnswers[q.id] === opt;
                                                    const isCorrect = q.correctAnswer.toLowerCase().includes(opt.toLowerCase()) || opt.toLowerCase().includes(q.correctAnswer.toLowerCase());
                                                    const hasAnswered = !!quizAnswers[q.id];
                                                    
                                                    let btnClass = `w-full text-left p-3 rounded-lg text-[13px] font-medium transition-all border ${borderColor}`;
                                                    if (!hasAnswered) {
                                                        btnClass += ` hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:border-blue-400 dark:hover:border-blue-500`;
                                                    } else if (isSelected) {
                                                        btnClass += isCorrect ? ' bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-500/10' : ' bg-rose-50 border-rose-500 text-rose-700 dark:bg-rose-500/10';
                                                    } else if (isCorrect) {
                                                        btnClass += ' bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-500/10 opacity-60';
                                                    } else {
                                                        btnClass += ' opacity-40';
                                                    }

                                                    return (
                                                        <button 
                                                            key={oIdx}
                                                            onClick={() => handleQuizOption(q.id, opt)}
                                                            disabled={hasAnswered}
                                                            className={btnClass}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 ${isSelected ? 'border-current' : 'border-zinc-300 dark:border-zinc-600'}`}>
                                                                    {String.fromCharCode(65 + oIdx)}
                                                                </span>
                                                                {opt}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            {quizAnswers[q.id] && (
                                                <div className={`p-3 rounded-lg text-[12px] leading-relaxed border animate-in fade-in slide-in-from-top-1 ${quizAnswers[q.id].toLowerCase().includes(q.correctAnswer.toLowerCase()) || q.correctAnswer.toLowerCase().includes(quizAnswers[q.id].toLowerCase()) ? 'bg-emerald-50/50 border-emerald-100 text-emerald-800 dark:bg-emerald-500/5 dark:border-emerald-900/30' : 'bg-rose-50/50 border-rose-100 text-rose-800 dark:bg-rose-500/5 dark:border-rose-900/30'}`}>
                                                    <span className="font-bold uppercase tracking-wider text-[10px] block mb-1">Explanation:</span>
                                                    {q.explanation}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-zinc-50 dark:bg-zinc-900/40 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                                    <p className="text-[11px] text-center text-zinc-500 font-medium italic">
                                        Answer all questions to test your understanding!
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Advertisement Slot 1 */}
                        <ResponsiveAd type="vertical" label="Sidebar Ad 1" className="!my-0" />

                        {/* Advertisement Slot 2 */}
                        <ResponsiveAd type="horizontal" label="Sidebar Ad 2" className="!my-0" />
                        
                        <div className="pt-4">
                            <ResponsiveAd type="short" label="Promotional Slot" className="!my-0" />
                        </div>
                        
                    </aside>
                </div>
            </div>
            
        </div>
    );
};

export default CurrentAffairs;
