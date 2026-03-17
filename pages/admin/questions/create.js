import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '@/context/ThemeContext';
import { 
  Save, 
  ArrowLeft, 
  HelpCircle, 
  CheckCircle2, 
  Brain,
  MessageSquare
} from 'lucide-react';

export default function CreateQuestion() {
  const { isDark } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    question: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    correct_answer: 'A',
    explanation: '',
    difficulty: 'medium',
    category_id: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.question || !formData.option_a || !formData.option_b) {
      alert('Question and at least 2 options are required');
      return;
    }
    setLoading(true);
    try {
      await api.post('/questions', formData);
      router.push('/admin/questions');
    } catch (err) {
      console.error(err);
      alert('Failed to save question. Check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const containerClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
  const inputBg = isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-gray-200 text-gray-900';
  const textTitle = isDark ? 'text-white' : 'text-gray-900';
  const textMuted = isDark ? 'text-zinc-500' : 'text-gray-400';

  return (
    <AdminLayout title="Question Studio">
      <Head>
        <title>Add Question | Admin</title>
      </Head>

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-8 pb-20">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => router.back()} className={`flex items-center gap-2 transition-colors group text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            <ArrowLeft size={14} /> Back to Records
          </button>
          
          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all disabled:opacity-50"
          >
            {loading ? 'Storing...' : <><Save size={18} /> Save Question</>}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12 space-y-8">
            <div className={`${containerClass} border rounded-2xl p-8 md:p-10 space-y-8`}>
              <div className="space-y-4">
                 <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${textMuted}`}>
                    <HelpCircle size={14} className="text-amber-500" /> Question Prompt
                 </label>
                 <textarea 
                    value={formData.question}
                    onChange={e => setFormData({...formData, question: e.target.value})}
                    rows={3}
                    className={`w-full border rounded-xl p-6 text-xl font-bold outline-none focus:ring-2 focus:ring-amber-500/10 placeholder:opacity-30 transition-all resize-none ${inputBg}`}
                    placeholder="Enter the aptitude question prompt..."
                    required
                 />
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['A', 'B', 'C', 'D'].map((opt) => (
                  <div key={opt} className="relative group">
                    <label className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border transition-all ${
                      formData.correct_answer === opt 
                      ? 'bg-amber-500 text-white border-amber-500' 
                      : isDark ? 'bg-zinc-800 text-zinc-500 border-zinc-700' : 'bg-gray-50 text-gray-400 border-gray-200'
                    }`}>
                      {opt}
                    </label>
                    <input 
                      type="text"
                      value={formData[`option_${opt.toLowerCase()}`]}
                      onChange={e => setFormData({...formData, [`option_${opt.toLowerCase()}`]: e.target.value})}
                      placeholder={`Option ${opt} value`}
                      className={`w-full border rounded-xl py-4 pl-16 pr-12 text-sm font-semibold outline-none transition-all ${inputBg} ${
                        formData.correct_answer === opt ? 'border-amber-500/50 ring-2 ring-amber-500/5' : ''
                      }`}
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, correct_answer: opt})}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all ${
                        formData.correct_answer === opt ? 'text-amber-500' : 'text-gray-300 hover:text-amber-400 opacity-40 hover:opacity-100'
                      }`}
                    >
                      <CheckCircle2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Metadata Section */}
               <div className={`${containerClass} border rounded-2xl p-8 space-y-6`}>
                 <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider pb-4 border-b ${isDark ? 'text-zinc-400 border-zinc-800' : 'text-gray-400 border-gray-100'}`}>
                    <Brain size={14} className="text-amber-500" /> Categorization
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className={`text-[10px] font-bold uppercase ml-1 ${textMuted}`}>Difficulty</label>
                       <select 
                          value={formData.difficulty}
                          onChange={e => setFormData({...formData, difficulty: e.target.value})}
                          className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 ${inputBg}`}
                       >
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className={`text-[10px] font-bold uppercase ml-1 ${textMuted}`}>Subject</label>
                       <select 
                          value={formData.category_id}
                          onChange={e => setFormData({...formData, category_id: parseInt(e.target.value)})}
                          className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 ${inputBg}`}
                       >
                          <option value={1}>Quantitative</option>
                          <option value={2}>Reasoning</option>
                          <option value={3}>Verbal</option>
                          <option value={4}>Data Interpretation</option>
                       </select>
                    </div>
                 </div>
               </div>

               {/* Explanation Section */}
               <div className={`${containerClass} border rounded-2xl p-8 space-y-4`}>
                 <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider pb-4 border-b ${isDark ? 'text-zinc-400 border-zinc-800' : 'text-gray-400 border-gray-100'}`}>
                    <MessageSquare size={14} className="text-amber-500" /> Solution Guide
                 </div>
                 <textarea 
                    value={formData.explanation}
                    onChange={e => setFormData({...formData, explanation: e.target.value})}
                    rows={4}
                    className={`w-full border rounded-lg p-4 text-xs font-medium outline-none focus:ring-2 focus:ring-amber-500/10 transition-all resize-none ${inputBg}`}
                    placeholder="Provide the logic for the correct solution..."
                 />
                 <div className={`${isDark ? 'bg-zinc-900/50 text-zinc-500 border-zinc-800' : 'bg-gray-50 text-gray-500 border-gray-100'} border p-3 rounded-lg flex items-center gap-3`}>
                    <div className={`w-6 h-6 rounded-md bg-amber-500 flex items-center justify-center text-white font-bold text-[10px]`}>i</div>
                    <p className="text-[10px] font-medium leading-tight">Step-by-step logic improves student engagement.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
