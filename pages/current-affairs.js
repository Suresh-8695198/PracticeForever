import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
    Calendar, Clock, Download, ChevronRight, Star,
    PhoneCall, LayoutGrid, Info, BookOpen,
    ListIcon, ExternalLink, CalendarDays, Search,
    ArrowRight, Share2, Printer, ChevronLeft, HelpCircle,
    Trophy, Globe, Shield, Leaf, Train, Scale, Heart,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const CurrentAffairs = () => {
    const { isDark } = useTheme();
    const borderColor = isDark ? 'border-zinc-800' : 'border-zinc-100';
    const cardBg = isDark ? 'bg-zinc-900' : 'bg-white';

    // State for selected date
    const today = '2026-03-10';
    const [selectedDate, setSelectedDate] = useState(today);

    useEffect(() => {
        // If today's content is not posted, auto-select 9 March
        const headlines10March = [];
        if (selectedDate === today && headlines10March.length === 0) {
            setSelectedDate('2026-03-09');
            document.title = "Daily Current Affairs 9 March 2026 – UPSC, SSC, Banking Exam Preparation";
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", "Read the latest current affairs for 9 March 2026. Important news for UPSC, SSC, Banking, Railway, TNPSC and other competitive exams explained in simple language.");
            }
        } else {
            document.title = `Daily Current Affairs ${selectedDate === today ? '10 March 2026' : '9 March 2026'} – UPSC, SSC, Banking Exam Preparation`;
        }
        window.scrollTo(0, 0);
    }, [selectedDate]);

    // Headlines for 9 March
    const headlines9March = [
        "International Women's Day 2026",
        "State of the World's Migratory Species",
        "Raisina Dialogue 2026",
        "Jan Aushadhi Diwas 2026",
        "India Wins the ICC Men's T20 World Cup 2026",
        "Essential Commodities Act, 1955",
        "RBI's OMO Purchases",
        "Jal Mahotsav 2026",
        "Protocol for the President during a State Visit"
    ];

    // Headlines for 10 March (empty for now)
    const headlines10March = [];

    // Rendered headlines
    const headlines = selectedDate === '2026-03-09' ? headlines9March : headlines10March;

    // Date selector UI
    const dateSelector = (
        <div className="flex gap-2 items-center mb-6">
            <span className="text-[13px] font-bold">Select Date:</span>
            <input
                type="date"
                value={selectedDate}
                min="2026-03-09"
                max="2026-03-10"
                onChange={e => setSelectedDate(e.target.value)}
                className="border border-zinc-300 rounded px-2 py-1 text-[13px] bg-transparent"
            />
            <button
                className="bg-rose-500 text-white px-3 py-1 rounded text-[13px] font-bold ml-2"
                onClick={() => setSelectedDate('2026-03-09')}
            >View 9 March</button>
            <button
                className="bg-cyan-500 text-white px-3 py-1 rounded text-[13px] font-bold ml-2"
                onClick={() => setSelectedDate('2026-03-10')}
            >View Today</button>
        </div>
    );

    return (
        <div className={`min-h-screen ${isDark ? 'bg-[#0f0f11]' : 'bg-[#fff]'} text-zinc-900 dark:text-zinc-100 font-sans selection:bg-rose-100 selection:text-rose-900 pb-20 pt-[120px]`}>

            {/* ── TOP UTILITY BAR ── */}
            <div className={`border-b border-zinc-100 dark:border-zinc-800 ${isDark ? 'bg-zinc-900/50' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-[11px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-1">
                            HOME <ChevronRight className="w-3 h-3 translate-y-[-1px]" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {dateSelector}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* ── MAIN CONTENT AREA (Left) ── */}
                    <main className="lg:col-span-8 space-y-8">

                        {/* Category Breadcrumb */}
                        <div className="space-y-3">
                            <h4 className="text-[14px] font-bold text-zinc-800 dark:text-zinc-200">{selectedDate === '2026-03-09' ? '🏏 Sports' : 'No Current Affairs Posted'}</h4>
                            <div className="h-[2px] w-full bg-zinc-100 dark:bg-zinc-800 relative">
                                <div className="absolute left-0 top-0 h-full w-48 bg-amber-400" />
                            </div>
                        </div>

                        {/* Title Section */}
                        <div className="space-y-4">
                            {selectedDate === '2026-03-09' ? (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-3xl md:text-3xl font-bold tracking-tight text-rose-500 leading-tight">
                                            India Wins ICC T20 World Cup 2026
                                        </h1>
                                        <div className="flex gap-2">
                                            <button className="p-1.5 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                                            <button className="p-1.5 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"><ChevronRight className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} className={`w-3.5 h-3.5 ${star <= 4 ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'}`} />
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        <span className="text-[12px] font-bold text-zinc-400">Tags:</span>
                                        {['GS Paper – 1 Sports', 'GS Paper – 2 International Relations', 'GS Paper – 3 Economy & Tourism'].map(tag => (
                                            <span key={tag} className={`${isDark ? 'bg-zinc-800' : 'bg-zinc-100'} px-2.5 py-1 text-[11px] font-medium opacity-60 rounded italic`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-xl font-bold text-zinc-500 py-10">No Current Affairs posted for today. Please select a previous date.</div>
                            )}
                        </div>

                        {/* SYLLABUS BOX (Drishti Style) */}
                        {selectedDate === '2026-03-09' && (
                            <div className={`p-8 rounded-3xl ${isDark ? 'bg-rose-500/5' : 'bg-rose-50'} border ${isDark ? 'border-rose-500/10' : 'border-rose-100'} shadow-sm`}>
                                <div className="space-y-6 text-[15px] leading-relaxed">
                                    <p>
                                        <span className="text-zinc-900 dark:text-zinc-100 font-black mr-2">For Prelims:</span>
                                        <span className="text-rose-600 dark:text-rose-400 font-bold">ICC T20 World Cup</span>, <span className="text-rose-600 dark:text-rose-400 font-bold">Narendra Modi Stadium</span>, <span className="text-rose-600 dark:text-rose-400 font-bold">Jasprit Bumrah</span>, <span className="text-rose-600 dark:text-rose-400 font-bold">Sanju Samson</span>, <span className="text-rose-600 dark:text-rose-400 font-bold">New Zealand Cricket Team</span>
                                    </p>
                                    <p>
                                        <span className="text-zinc-900 dark:text-zinc-100 font-black mr-2">For Mains:</span>
                                        Role of sports diplomacy, importance of sports achievements in strengthening national identity and global reputation
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="text-[13px] font-bold text-rose-500">Source:PIB</div>

                        {selectedDate === '2026-03-09' ? (
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-zinc-200 border-l-4 border-rose-500 pl-4 py-1">Why in News?</h2>
                                    <p className="text-[16px] leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
                                        The Indian Men's Cricket Team secured a historic victory in the <strong className="text-rose-600 dark:text-rose-400">ICC Men's T20 World Cup 2026</strong>, defeating New Zealand in a thrilling final match at the Narendra Modi Stadium, Ahmedabad. This marks another major milestone in India's sporting achievements on the global stage.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-zinc-200 border-l-4 border-rose-500 pl-4 py-1">Key Points</h2>
                                    <ul className="space-y-4">
                                        <li className="flex gap-4 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                                            <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                                                <strong className="text-zinc-900 dark:text-white block mb-1">Unbeaten Streak:</strong>
                                                India remained unbeaten throughout the tournament, showcasing exceptional teamwork and strategic brilliance across all phases of the game.
                                            </p>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                                            <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                                                <strong className="text-zinc-900 dark:text-white block mb-1">Player of the Tournament:</strong>
                                                Jasprit Bumrah was named the Player of the Tournament for his exceptional bowling performance, taking 22 wickets at an incredible economy rate.
                                            </p>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                                            <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                                                <strong className="text-zinc-900 dark:text-white block mb-1">Final Match Highlights:</strong>
                                                Sanju Samson's crucial 85* runs and hard-hitting finishing by the lower order helped India set a massive target of 215, which New Zealand failed to chase down.
                                            </p>
                                        </li>
                                    </ul>
                                </section>

                                <section className={`p-6 rounded-2xl ${isDark ? 'bg-[#1a1a1a]' : 'bg-zinc-50'} border ${borderColor}`}>
                                    <h2 className="text-lg font-bold mb-4 text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                                        <Info className="w-5 h-5 text-rose-500" />
                                        About the ICC T20 World Cup
                                    </h2>
                                    <p className="text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                                        The ICC Men's T20 World Cup is the international championship of Twenty20 cricket. Organized by cricket's governing body, the International Cricket Council (ICC), the tournament currently consists of 20 teams.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">First Edition</p>
                                            <p className="text-lg font-black text-rose-500">2007</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Admin</p>
                                            <p className="text-[14px] font-black text-rose-500 mt-1">ICC</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Format</p>
                                            <p className="text-[14px] font-black text-rose-500 mt-1">T20I</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Most Titles</p>
                                            <p className="text-[14px] font-black text-rose-500 mt-1">India / England</p>
                                        </div>
                                    </div>
                                </section>

                                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-8 mt-12">
                                    <h3 className="text-lg font-bold mb-4">UPSC Prelims Practice Question</h3>
                                    <div className={`p-6 rounded-xl border ${borderColor} ${cardBg} space-y-4`}>
                                        <p className="font-medium text-[15px]">Q. Consider the following statements regarding the ICC T20 World Cup:</p>
                                        <ol className="list-decimal list-inside space-y-2 text-[14.5px] text-zinc-600 dark:text-zinc-400 ml-2">
                                            <li>The first ever ICC T20 World Cup was held in South Africa in 2007.</li>
                                            <li>It is organized every 4 years by the International Cricket Council (ICC).</li>
                                            <li>India and West Indies are the only teams to win it more than once.</li>
                                        </ol>
                                        <p className="font-medium text-[15px] pt-4">Which of the statements given above is/are correct?</p>
                                        <div className="grid grid-cols-2 gap-3 mt-4">
                                            <div className={`p-3 border ${borderColor} rounded-lg text-[14px]`}>A) 1 only</div>
                                            <div className={`p-3 border ${borderColor} rounded-lg text-[14px]`}>B) 1 and 3 only</div>
                                            <div className={`p-3 border ${borderColor} rounded-lg text-[14px]`}>C) 2 and 3 only</div>
                                            <div className={`p-3 border ${borderColor} rounded-lg text-[14px]`}>D) 1, 2 and 3</div>
                                        </div>

                                        <details className="mt-4 group">
                                            <summary className="cursor-pointer text-sm font-bold text-rose-500 hover:text-rose-600 list-none flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" /> View Answer
                                            </summary>
                                            <div className="mt-4 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-lg text-[14px] text-zinc-700 dark:text-zinc-300">
                                                <strong className="text-zinc-900 dark:text-white">Answer: A (1 only)</strong>
                                                <p className="mt-2"><strong>Explanation:</strong> Statement 1 is correct. The first edition was held in 2007 in South Africa, which India won. Statement 2 is incorrect as the tournament is generally held every two years. Statement 3 is incorrect as England has also won it twice (2010, 2022) alongside West Indies, and India has now won it multiple times.</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-lg font-bold text-zinc-500 py-20">No Current Affairs posted for today. Please select a previous date to view content.</div>
                        )}
                    </main>

                    {/* ── SIDEBAR AREA (Right) ── */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* News of the day (Standardized Header) */}
                        <section className={`rounded-xl overflow-hidden border ${borderColor} ${cardBg} shadow-md`}>
                            <div className="bg-amber-500 px-4 py-3 flex items-center gap-3 text-white">
                                <LayoutGrid className="w-5 h-5 shrink-0" />
                                <h3 className="font-black uppercase tracking-widest text-[12px]">News of the day</h3>
                            </div>
                            <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {headlines.map((h, i) => (
                                    <Link key={i} href="/current-affairs" className={`block p-4 text-[13.5px] font-medium ${h.includes('Jal Mahotsav') ? 'text-rose-500' : 'text-zinc-700 dark:text-zinc-300'} hover:text-rose-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all leading-snug`}>
                                        {h}
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* More Links (Standardized Header) */}
                        <section className={`rounded-xl overflow-hidden border ${borderColor} ${cardBg} shadow-md`}>
                            <div className="bg-rose-500 px-4 py-3 flex items-center gap-3 text-white">
                                <LayoutGrid className="w-5 h-5 rotate-45 shrink-0" />
                                <h3 className="font-black uppercase tracking-widest text-[12px]">More Links</h3>
                            </div>
                            <div className="p-2">
                                {[
                                    "UPSC Prelims Test Series",
                                    "Daily Current Affairs and Editorials",
                                    "Daily Mains Answer Writing Practice",
                                    "Practice Quiz",
                                    "Prepare For State PCS",
                                    "Summary of Important Reports"
                                ].map((link, i) => (
                                    <button key={i} className="w-full text-left p-3.5 text-[13px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-lg flex items-center justify-between group transition-all">
                                        {link} <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Archives by Date (Standardized Header) */}
                        <section className={`rounded-xl overflow-hidden border ${borderColor} ${cardBg} shadow-sm`}>
                            <div className="bg-cyan-500 px-4 py-3 flex items-center gap-3 text-white">
                                <CalendarDays className="w-5 h-5 shrink-0" />
                                <h3 className="font-black uppercase tracking-widest text-[12px]">Archives by Date</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Date From" className={`flex-1 p-2.5 border border-zinc-200 dark:border-zinc-700 rounded bg-transparent text-xs outline-none focus:border-cyan-500 transition-colors`} />
                                    <input type="text" placeholder="Date To" className={`flex-1 p-2.5 border border-zinc-200 dark:border-zinc-700 rounded bg-transparent text-xs outline-none focus:border-cyan-500 transition-colors`} />
                                </div>
                                <button className="w-full bg-cyan-500 text-white py-2.5 rounded text-[13px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">Go</button>
                            </div>
                        </section>

                        {/* Ad Placement Containers */}
                        <div className="space-y-6">
                            <div className={`rounded-xl border border-dashed ${isDark ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-300 bg-zinc-50'} p-10 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer transition-all hover:border-zinc-400`}>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-60 transition-opacity">Advertisement</div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold opacity-40 uppercase tracking-tighter">Promote Your Brand</h4>
                                    <p className="text-[10px] font-medium opacity-30 leading-tight max-w-[140px]">Reach thousands of competitive aspirants daily.</p>
                                </div>
                                <button className="mt-2 text-[9px] font-black uppercase tracking-widest px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full opacity-40 group-hover:opacity-100 transition-all hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900">Enquire Now</button>
                            </div>

                            <div className={`rounded-xl border border-zinc-100 dark:border-zinc-800 ${isDark ? 'bg-zinc-900/80 shadow-lg' : 'bg-white shadow-md'} overflow-hidden relative aspect-[4/5] flex items-center justify-center p-8 group cursor-pointer`}>
                                <div className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest opacity-20">Ad Placement Slot #2</div>
                                <div className="text-center space-y-4">
                                    <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full mx-auto flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold opacity-30 uppercase tracking-widest leading-relaxed">High Performance <br /> Advertising Slot</p>
                                </div>
                                <div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                    </aside>
                </div>
            </div>

            {/* Floating Buttons */}
            <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-[200]">
                <button className="w-10 h-10 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all self-end" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ChevronLeft className="w-6 h-6 rotate-90" />
                </button>
            </div>

        </div>
    );
};

export default CurrentAffairs;
