import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '../../../context/ThemeContext';
import { 
  Plus, 
  Search, 
  Trash2, 
  Eye, 
  Clock, 
  FileCheck,
  Trophy,
  Activity
} from 'lucide-react';

export default function MockTestList() {
  const { isDark } = useTheme();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTests = async () => {
    setLoading(true);
    try {
      const res = await api.get('/mock-tests');
      if (res.data.success) {
        setTests(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch tests', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this mock test? This will remove all student attempts data too.')) return;
    try {
      await api.delete(`/mock-tests/${id}`);
      fetchTests();
    } catch (err) {
      alert('Failed to delete test');
    }
  };

  const filteredTests = tests.filter(test => 
    test.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
  const textMain = isDark ? 'text-white' : 'text-gray-900';
  const textMuted = isDark ? 'text-zinc-500' : 'text-gray-400';

  return (
    <AdminLayout title="Exam Center">
      <Head>
        <title>Manage Mock Tests | Admin</title>
      </Head>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by exam name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full border rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-amber-500/10 transition-all ${isDark ? 'bg-zinc-900 border-zinc-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
            />
          </div>
          
          <Link href="/admin/mock-tests/create" className="flex items-center gap-2 bg-amber-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all">
            <Plus size={18} /> New Test
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [1,2,3].map(i => (
              <div key={i} className={`h-56 rounded-2xl animate-pulse ${isDark ? 'bg-zinc-900/50' : 'bg-gray-100'}`}></div>
            ))
          ) : filteredTests.length === 0 ? (
            <div className="col-span-full py-24 text-center border-2 border-dashed border-gray-200 rounded-[2rem]">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-700' : 'bg-gray-50 border-gray-100 text-gray-300'}`}>
                <Trophy size={28} />
              </div>
              <p className={`font-bold text-sm ${textMuted}`}>No examination modules found</p>
            </div>
          ) : filteredTests.map((test) => (
            <div key={test.id} className={`${cardClass} border rounded-2xl p-6 hover:shadow-lg transition-all group relative overflow-hidden flex flex-col h-full`}>
               {/* Background Decorative Icon */}
               <div className={`absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${isDark ? 'text-white' : 'text-black'}`}>
                  <FileCheck size={100} />
               </div>

               <div className="relative z-10 flex flex-col h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${isDark ? 'bg-zinc-900 border-zinc-700 text-amber-500' : 'bg-amber-50 border-amber-100 text-amber-600'}`}>
                       {test.exam_type}
                    </span>
                    <span className={`text-[11px] font-bold flex items-center gap-1.5 ${textMuted}`}>
                       <Clock size={12} className="text-amber-500" /> {test.duration} MIN
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-lg font-bold leading-tight group-hover:text-amber-500 transition-colors ${textMain}`}>{test.title}</h3>
                  </div>
                  
                  <div className={`grid grid-cols-2 gap-4 py-4 border-y ${isDark ? 'border-zinc-800' : 'border-gray-100'}`}>
                    <div>
                       <span className={`block text-[10px] font-bold uppercase tracking-wider ${textMuted}`}>Questions</span>
                       <span className={`text-base font-bold ${textMain}`}>{test.total_questions}</span>
                    </div>
                    <div>
                       <span className={`block text-[10px] font-bold uppercase tracking-wider ${textMuted}`}>Status</span>
                       <div className="flex items-center gap-1.5 mt-1">
                          <Activity size={10} className="text-emerald-500" />
                          <span className="text-[10px] font-bold text-emerald-500 uppercase">Live</span>
                       </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Link href={`/admin/mock-tests/${test.id}`} className="flex-1">
                        <button className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${isDark ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>
                           <Eye size={14} /> View Module
                        </button>
                    </Link>
                    <button 
                      onClick={() => handleDelete(test.id)}
                      className={`p-2.5 rounded-lg transition-all border ${isDark ? 'border-zinc-800 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20' : 'border-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
                      title="Delete Test"
                    >
                       <Trash2 size={16} />
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
