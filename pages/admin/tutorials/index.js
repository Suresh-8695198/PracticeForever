import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '../../../context/ThemeContext';
import { Terminal, Code2, Plus, Edit3, Trash2, Tag, Layers, ChevronRight, BookOpen } from 'lucide-react';

export default function TutorialList() {
    const { isDark } = useTheme();
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await api.get('/manage/tutorials');
                if (res.data.success) setTutorials(res.data.data);
            } catch (err) {} finally { setLoading(false); }
        };
        fetch();
    }, []);

    const containerClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textMuted = isDark ? 'text-zinc-500' : 'text-gray-400';

    return (
        <AdminLayout title="Tech Academy">
            <Head><title>Tutorial Management | Admin</title></Head>
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <h2 className={`text-2xl font-bold ${textMain}`}>Curricula Management</h2>
                        <p className={`text-xs font-bold uppercase tracking-wider ${textMuted}`}>Courses & Active Lessons</p>
                    </div>
                    <Link href="/admin/tutorials/create" className="bg-amber-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all flex items-center gap-2">
                        <Plus size={18}/> New Lesson
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? [1,2,3].map(i => <div key={i} className={`h-56 rounded-2xl animate-pulse ${isDark ? 'bg-zinc-900/50' : 'bg-gray-100'}`}></div>) : 
                    tutorials.length === 0 ? (
                        <div className="col-span-full py-24 text-center border-2 border-dashed border-gray-200 rounded-[2rem]">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-700' : 'bg-gray-50 border-gray-100 text-gray-300'}`}>
                                <BookOpen size={28} />
                            </div>
                            <p className={`font-bold text-sm ${textMuted}`}>No tutorial modules published</p>
                        </div>
                    ) :
                    tutorials.map(t => (
                        <div key={t.id} className={`${containerClass} border rounded-2xl p-8 hover:shadow-lg transition-all group flex flex-col h-full`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 border ${isDark ? 'bg-zinc-900 text-amber-500 border-zinc-800' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                <Terminal size={24} />
                            </div>
                            
                            <h3 className={`text-lg font-bold leading-tight mb-4 group-hover:text-amber-500 transition-colors ${textMain}`}>{t.title}</h3>
                            
                            <div className="flex items-center gap-4 mb-8">
                                <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${textMuted}`}>
                                    <Layers size={12} className="text-amber-500"/> {t.category_name}
                                </span>
                                <span className={`text-[10px] font-bold uppercase tracking-wider ${textMuted} opacity-40 ml-auto`}>ID: {t.id}</span>
                            </div>

                            <div className={`flex items-center justify-between pt-5 border-t mt-auto ${isDark ? 'border-zinc-800' : 'border-gray-100'}`}>
                                <div className="flex gap-2">
                                    <button className={`p-2 rounded-lg transition-all border ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white' : 'bg-white border-gray-200 text-gray-400 hover:text-gray-900 hover:shadow-sm'}`} title="Edit">
                                        <Edit3 size={16}/>
                                    </button>
                                    <button className={`p-2 rounded-lg transition-all border ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-red-500' : 'bg-white border-gray-200 text-gray-400 hover:text-red-500 hover:shadow-sm'}`} title="Delete">
                                        <Trash2 size={16}/>
                                    </button>
                                </div>
                                <span className={`text-[10px] font-mono transition-all ${textMuted} italic group-hover:text-amber-500`}>/{t.slug}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
