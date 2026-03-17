import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '@/context/ThemeContext';
import { 
  Save, 
  ArrowLeft, 
  HelpCircle, 
  Search, 
  Plus, 
  Minus,
  CheckCircle2,
  ListRestart,
  Clock,
  Layout
} from 'lucide-react';

export default function CreateMockTest() {
  const { isDark } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [search, setSearch] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    exam_type: 'General',
    duration: 60,
    total_questions: 0
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await api.get('/questions?limit=100');
      if (res.data.success) {
        setAvailableQuestions(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleQuestion = (question) => {
    const exists = selectedQuestions.find(q => q.id === question.id);
    if (exists) {
      setSelectedQuestions(selectedQuestions.filter(q => q.id !== question.id));
    } else {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) {
        alert('Please enter an exam title');
        return;
    }
    if (selectedQuestions.length === 0) {
      alert('Please select at least one question for the test');
      return;
    }
    
    setLoading(true);
    try {
      await api.post('/mock-tests', {
        ...formData,
        total_questions: selectedQuestions.length,
        question_ids: selectedQuestions.map(q => q.id)
      });
      router.push('/admin/mock-tests');
    } catch (err) {
      console.error(err);
      alert('Failed to create mock test. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const filteredQuestions = availableQuestions.filter(q => 
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  const containerClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
  const inputBg = isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-gray-200 text-gray-900';
  const textTitle = isDark ? 'text-white' : 'text-gray-900';
  const textMuted = isDark ? 'text-zinc-500' : 'text-gray-400';

  return (
    <AdminLayout title="Exam Creator">
      <Head>
        <title>Create Mock Test | Admin</title>
      </Head>

      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        <div className="flex items-center justify-between">
          <button onClick={() => router.back()} className={`flex items-center gap-2 transition-colors text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            <ArrowLeft size={14} /> Back to List
          </button>
          
          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all disabled:opacity-50"
          >
            {loading ? 'Assembling...' : <><Save size={18} /> Launch Exam</>}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Settings Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`${containerClass} border rounded-2xl p-8 space-y-8 sticky top-24 transition-colors`}>
              <h3 className={`text-xs font-bold uppercase tracking-widest border-b pb-4 flex items-center gap-2 ${isDark ? 'text-amber-500 border-zinc-800' : 'text-amber-600 border-gray-100'}`}>
                 <Layout size={16} /> Configuration
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className={`block text-[10px] font-bold uppercase tracking-wider mb-2 ${textMuted}`}>Exam Title</label>
                  <input 
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className={`w-full border rounded-lg py-2.5 px-4 text-sm font-bold outline-none focus:ring-2 focus:ring-amber-500/10 ${inputBg}`}
                    placeholder="e.g. Daily General Aptitude"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-wider mb-2 ${textMuted}`}>Exam Type</label>
                    <select 
                      value={formData.exam_type}
                      onChange={e => setFormData({...formData, exam_type: e.target.value})}
                      className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 appearance-none cursor-pointer ${inputBg}`}
                    >
                      <option>General</option>
                      <option>UPSC</option>
                      <option>SSC</option>
                      <option>Programming</option>
                      <option>Banking</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-wider mb-2 ${textMuted}`}>Duration (Min)</label>
                    <div className="relative">
                       <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                       <input 
                        type="number"
                        value={formData.duration}
                        onChange={e => setFormData({...formData, duration: parseInt(e.target.value)})}
                        className={`w-full border rounded-lg py-2.5 pl-10 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 ${inputBg}`}
                      />
                    </div>
                  </div>
                </div>

                <div className={`border-2 border-dashed rounded-2xl p-6 text-center transition-colors ${isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-gray-50 border-gray-100'}`}>
                   <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Total Selection</p>
                   <p className={`text-4xl font-black text-amber-500`}>{selectedQuestions.length}</p>
                   <p className={`text-[10px] font-bold mt-2 uppercase tracking-tighter ${textMuted}`}>Questions in Exam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Question Selector Section */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
               <h3 className={`text-sm font-bold flex items-center gap-2 ml-2 ${textTitle}`}>
                 <ListRestart size={18} className="text-amber-500" /> Question Repository
               </h3>
               <div className="relative min-w-[200px]">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search logic..."
                    className={`w-full border rounded-lg py-2 pl-9 pr-3 text-[11px] font-bold outline-none focus:ring-2 focus:ring-amber-500/10 transition-all ${inputBg}`}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
               </div>
            </div>

            <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredQuestions.length === 0 ? (
                <div className={`text-center py-20 rounded-2xl border-2 border-dashed ${isDark ? 'border-zinc-800 text-zinc-700' : 'border-gray-100 text-gray-300'}`}>
                  <p className="font-bold text-sm">No questions found</p>
                </div>
              ) : filteredQuestions.map((q) => {
                const isSelected = selectedQuestions.find(sq => sq.id === q.id);
                return (
                  <div 
                    key={q.id}
                    onClick={() => toggleQuestion(q)}
                    className={`cursor-pointer border rounded-xl p-5 flex items-center justify-between transition-all duration-300 ${
                      isSelected 
                      ? isDark ? 'bg-amber-500/5 border-amber-500/50 shadow-sm' : 'bg-amber-50/50 border-amber-200 shadow-sm'
                      : isDark ? 'bg-[#121212] border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 hover:bg-gray-50/50 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-4 flex-1">
                       <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                         isSelected 
                         ? 'bg-amber-500 border-amber-500 text-white' 
                         : isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-500' : 'bg-gray-50 border-gray-100 text-gray-400'
                       }`}>
                          {isSelected ? <CheckCircle2 size={16} /> : <HelpCircle size={16} />}
                       </div>
                       <div className="overflow-hidden">
                          <p className={`text-sm font-semibold leading-relaxed transition-colors line-clamp-2 ${isSelected ? textTitle : isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                            {q.question}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                             <span className={`text-[10px] font-bold uppercase tracking-wider ${textMuted}`}>ID: {q.id}</span>
                             <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${textMuted}`}>
                               Difficulty: <span className={`font-black ${q.difficulty === 'hard' ? 'text-red-500' : q.difficulty === 'easy' ? 'text-emerald-500' : 'text-amber-500'}`}>{q.difficulty}</span>
                             </span>
                          </div>
                       </div>
                    </div>
                    <div className={`transition-all ${isSelected ? 'rotate-180 text-amber-500' : 'text-gray-300'}`}>
                       {isSelected ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${isDark ? '#27272a' : '#e4e4e7'}; border-radius: 10px; }
      `}</style>
    </AdminLayout>
  );
}
