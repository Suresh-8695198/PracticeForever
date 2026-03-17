import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '@/context/ThemeContext';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Eye, 
  User, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  FileText,
  Calendar,
  CloudOff,
  Inbox
} from 'lucide-react';

export default function BlogList() {
  const { isDark } = useTheme();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/blog?page=${page}&limit=10`);
      if (res.data.success) {
        setBlogs(res.data.data);
        setTotal(res.data.pagination.total);
      }
    } catch (err) {
      console.error('Failed to fetch blogs', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this blog post forever?')) return;
    try {
      await api.delete(`/blog/${id}`);
      fetchBlogs();
    } catch (err) {
      alert('Failed to delete blog post');
    }
  };

  const containerBg = isDark ? 'bg-[#121212] border-zinc-800 shadow-2xl' : 'bg-white border-gray-200/60 shadow-sm';
  const tableHeaderBg = isDark ? 'bg-zinc-900/50' : 'bg-gray-50/50';
  const textMain = isDark ? 'text-white' : 'text-gray-900';
  const textSub = isDark ? 'text-zinc-500' : 'text-gray-500';
  const rowHover = isDark ? 'hover:bg-zinc-900/40' : 'hover:bg-gray-50/80';
  const inputBg = isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200';

  return (
    <AdminLayout title="Editorial Studio">
      <Head>
        <title>Manage Blogs | Admin</title>
      </Head>

      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-lg group">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${isDark ? 'text-zinc-600 group-focus-within:text-amber-500' : 'text-gray-400 group-focus-within:text-amber-600'}`} size={18} />
            <input 
              type="text" 
              placeholder="Search by publication title..." 
              className={`w-full ${inputBg} border rounded-xl py-3 pl-12 pr-6 text-sm font-semibold outline-none focus:ring-2 focus:ring-amber-500/10 transition-all ${!isDark ? 'placeholder:text-gray-300' : 'placeholder:text-zinc-800 focus:border-amber-500'}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Link href="/admin/blog-posts/create" className="flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all active:scale-95">
            <Plus size={18} /> Post New Story
          </Link>
        </div>

        <div className={`${containerBg} border rounded-2xl overflow-hidden transition-colors`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`border-b ${isDark ? 'border-zinc-800' : 'border-gray-100'} ${tableHeaderBg}`}>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Publication Details</th>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Audit & Records</th>
                  <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Health</th>
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
                ) : blogs.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-8 py-32 text-center">
                        <div className="flex flex-col items-center gap-4 opacity-30">
                            <Inbox size={48} className={isDark ? 'text-zinc-700' : 'text-gray-300'} />
                            <p className={`font-bold text-sm tracking-wide ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}>NO PUBLICATIONS FOUND</p>
                        </div>
                    </td>
                  </tr>
                ) : blogs.map((blog) => (
                  <tr key={blog.id} className={`${rowHover} transition-all group`}>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center overflow-hidden shrink-0 ${isDark ? 'bg-black border-zinc-800' : 'bg-gray-50 border-gray-100'}`}>
                          {blog.featured_image ? (
                            <img src={blog.featured_image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <FileText size={20} className={isDark ? 'text-zinc-800' : 'text-gray-200'} />
                          )}
                        </div>
                        <div className="space-y-1 min-w-0">
                          <p className={`text-sm font-bold truncate ${textMain} group-hover:text-amber-500 transition-colors`}>{blog.title}</p>
                          <p className={`text-[11px] font-medium font-mono ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}>/{blog.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-2">
                        <div className={`flex items-center gap-2 text-[10px] font-bold ${textSub}`}>
                          <User size={12} className="text-amber-500" /> {blog.author_name || 'Administrator'}
                        </div>
                        <div className={`flex items-center gap-2 text-[10px] font-bold ${isDark ? 'text-zinc-700' : 'text-gray-400'}`}>
                          <Calendar size={12} /> {new Date(blog.published_date).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span className={`text-[10px] font-bold uppercase tracking-wide ${textSub}`}>Live</span>
                      </div>
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
                          onClick={() => handleDelete(blog.id)}
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
              Records {((page-1)*10)+1} - {Math.min(page*10, total)} of {total}
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
                disabled={blogs.length < 10}
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
