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
  Eye,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Tag
} from 'lucide-react';

export default function CurrentAffairsList() {
  const { isDark } = useTheme();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/current-affairs?page=${page}&limit=10`);
      if (res.data.success) {
        setData(res.data.data);
        setTotal(res.data.pagination.total);
      }
    } catch (err) {
      console.error('Failed to fetch current affairs', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this news?')) return;
    try {
      await api.delete(`/current-affairs/${id}`);
      fetchItems();
    } catch (err) {
      alert('Failed to delete item');
    }
  };

  const containerBg = isDark ? 'bg-[#121212] border-zinc-800 shadow-2xl' : 'bg-white border-gray-200/60 shadow-sm';
  const tableHeaderBg = isDark ? 'bg-zinc-900/50' : 'bg-gray-50/50';
  const textMain = isDark ? 'text-white' : 'text-gray-900';
  const textSub = isDark ? 'text-zinc-500' : 'text-gray-500';
  const rowHover = isDark ? 'hover:bg-zinc-900/40' : 'hover:bg-gray-50/80';
  const inputBg = isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200';

  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Intelligence Feed">
      <Head>
        <title>Intelligence | Admin Panel</title>
      </Head>

      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-lg group">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${isDark ? 'text-zinc-600 group-focus-within:text-amber-500' : 'text-gray-400 group-focus-within:text-amber-600'}`} size={18} />
            <input 
              type="text" 
              placeholder="Search intelligence feed..." 
              className={`w-full ${inputBg} border rounded-xl py-3 pl-12 pr-6 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500/10 transition-all ${!isDark ? 'placeholder:text-gray-300' : 'placeholder:text-zinc-800 focus:border-amber-500'}`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <Link href="/admin/current-affairs/create" className="flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all active:scale-95">
            <Plus size={18} /> New Briefing
          </Link>
        </div>

        <div className={`${containerBg} border rounded-2xl overflow-hidden transition-colors`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`border-b ${isDark ? 'border-zinc-800' : 'border-gray-100'} ${tableHeaderBg}`}>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Date Line</th>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Briefing Headlines</th>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Classification</th>
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
                ) : filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-8 py-32 text-center">
                        <div className="flex flex-col items-center gap-4 opacity-30">
                            <Inbox size={48} className={isDark ? 'text-zinc-700' : 'text-gray-300'} />
                            <p className={`font-bold text-sm tracking-wide ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}>NO BRIEFINGS FOUND</p>
                        </div>
                    </td>
                  </tr>
                ) : filteredData.map((item) => (
                  <tr key={item.id} className={`${rowHover} transition-all group`}>
                    <td className="px-8 py-6">
                      <div className={`flex items-center gap-2.5 text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                        <Calendar size={14} className="text-amber-500" />
                        {new Date(item.publish_date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <p className={`text-sm font-bold ${textMain} group-hover:text-amber-500 transition-colors`}>{item.title}</p>
                        <div className="flex items-center gap-1.5 opacity-60">
                            <Tag size={10} className="text-amber-500" />
                            <p className={`text-[10px] font-bold uppercase tracking-tight ${textSub}`}>{item.tags || 'General Intelligence'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-md border uppercase tracking-wider ${isDark ? 'bg-zinc-800 text-zinc-400 border-zinc-700' : 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                        {item.category}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center justify-end gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                        <button className={`p-2 rounded-lg border transition-all ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white' : 'bg-white border-gray-200 text-gray-400 hover:text-gray-900 hover:shadow-sm'}`}>
                          <Eye size={16} />
                        </button>
                        <button className={`p-2 rounded-lg border transition-all ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-amber-500' : 'bg-white border-gray-200 text-gray-400 hover:text-amber-600 hover:shadow-sm'}`}>
                          <Edit3 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
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
              Page {page} of {Math.ceil(total / 10) || 1}
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
                disabled={filteredData.length < 10}
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
