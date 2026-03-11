import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '../../../context/ThemeContext';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  CheckCircle2,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Inbox
} from 'lucide-react';

export default function QuestionsList() {
  const { isDark } = useTheme();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ category: '', difficulty: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const { category, difficulty } = filters;
      const res = await api.get(`/questions?page=${page}&limit=10&category_id=${category}&difficulty=${difficulty}`);
      if (res.data.success) {
        setQuestions(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch questions', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [page, filters]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this question? This cannot be undone.')) return;
    try {
      await api.delete(`/questions/${id}`);
      fetchQuestions();
    } catch (err) {
      alert('Failed to delete question');
    }
  };

  const getDifficultyColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'easy': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      case 'medium': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'hard': return 'text-red-500 bg-red-500/10 border-red-500/20';
      default: return isDark ? 'text-zinc-500 bg-zinc-800' : 'text-gray-500 bg-gray-100';
    }
  };

  const containerBg = isDark ? 'bg-[#121212] border-zinc-800 shadow-2xl' : 'bg-white border-gray-200/60 shadow-sm';
  const tableHeaderBg = isDark ? 'bg-zinc-900/50' : 'bg-gray-50/50';
  const textMain = isDark ? 'text-white' : 'text-gray-900';
  const textSub = isDark ? 'text-zinc-500' : 'text-gray-500';
  const rowHover = isDark ? 'hover:bg-zinc-900/40' : 'hover:bg-gray-50/80';
  const inputBg = isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200';

  const filteredQuestions = questions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout title="Question Bank">
      <Head>
        <title>Inventory | Admin Panel</title>
      </Head>

      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-sm group">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${isDark ? 'text-zinc-600 group-focus-within:text-amber-500' : 'text-gray-400 group-focus-within:text-amber-600'}`} size={18} />
              <input 
                type="text" 
                placeholder="Search question records..." 
                className={`w-full ${inputBg} border rounded-xl py-3 pl-12 pr-6 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500/10 transition-all ${!isDark ? 'placeholder:text-gray-300' : 'placeholder:text-zinc-800'}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select 
              value={filters.difficulty}
              onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
              className={`border rounded-xl px-4 py-3 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 transition-all ${inputBg} cursor-pointer`}
            >
              <option value="">All Tiers</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          
          <Link href="/admin/questions/create" className="flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all active:scale-95">
            <Plus size={18} /> Add New Entry
          </Link>
        </div>

        <div className={`${containerBg} border rounded-2xl overflow-hidden transition-colors`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`border-b ${isDark ? 'border-zinc-800' : 'border-gray-100'} ${tableHeaderBg}`}>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub} w-[50%]`}>Logical Structure</th>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Difficulty Tier</th>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Subject Path</th>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub} text-right`}>Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-zinc-800/40' : 'divide-gray-50'}`}>
                {loading ? (
                  [1,2,3,4].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="4" className="px-8 py-10"><div className={`h-4 ${isDark ? 'bg-zinc-900' : 'bg-gray-100'} rounded-lg w-full opacity-40`}></div></td>
                    </tr>
                  ))
                ) : filteredQuestions.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-8 py-32 text-center">
                        <div className="flex flex-col items-center gap-4 opacity-30">
                            <Inbox size={48} className={isDark ? 'text-zinc-700' : 'text-gray-300'} />
                            <p className={`font-bold text-sm tracking-wide ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}>NO RECORDS FOUND</p>
                        </div>
                    </td>
                  </tr>
                ) : filteredQuestions.map((q) => (
                  <tr key={q.id} className={`${rowHover} transition-all group`}>
                    <td className="px-8 py-6">
                      <div className="flex gap-5">
                        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                          <HelpCircle size={18} />
                        </div>
                        <div className="space-y-1.5 min-w-0">
                          <p className={`text-sm font-bold leading-relaxed truncate ${textMain} group-hover:text-amber-500 transition-colors`}>{q.question}</p>
                          <div className="flex items-center gap-3">
                             <div className={`flex items-center gap-1.5 text-[10px] font-bold ${textSub}`}>
                                <span>Correct:</span>
                                <span className={`px-1.5 py-0.5 rounded ${isDark ? 'bg-zinc-800 text-amber-500' : 'bg-amber-50 text-amber-600'}`}>Option {q.correct_answer}</span>
                             </div>
                             {q.explanation && (
                               <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                                 <CheckCircle2 size={12} /> Solution Ready
                               </span>
                             )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border tracking-wider ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className={`flex items-center gap-2 text-xs font-bold ${textSub}`}>
                         <BarChart3 size={14} className="text-amber-500" />
                         {q.category_name || 'Aptitude'}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center justify-end gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                        <button className={`p-2 rounded-lg border transition-all ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white' : 'bg-white border-gray-200 text-gray-400 hover:text-gray-900 hover:shadow-sm'}`}>
                          <Edit3 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(q.id)}
                          className={`p-2 rounded-lg border transition-all ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-red-500' : 'bg-white border-gray-200 text-gray-400 hover:text-red-600 hover:shadow-sm'}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={`px-8 py-6 border-t ${isDark ? 'border-zinc-800' : 'border-gray-50'} flex items-center justify-between`}>
            <div className={`text-[10px] font-bold ${textSub} uppercase tracking-wider opacity-60`}>
                Page {page}
            </div>
            <div className="flex items-center gap-2">
              <button 
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
                className={`p-2 rounded-lg border transition-all disabled:opacity-30 ${isDark ? 'border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-900' : 'border-gray-200 text-gray-400 hover:text-gray-900 bg-white shadow-sm'}`}
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                disabled={filteredQuestions.length < 10}
                onClick={() => setPage(p => p + 1)}
                className={`p-2 rounded-lg border transition-all disabled:opacity-30 ${isDark ? 'border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-900' : 'border-gray-200 text-gray-400 hover:text-gray-900 bg-white shadow-sm'}`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
