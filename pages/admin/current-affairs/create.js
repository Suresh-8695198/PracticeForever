import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '../../../context/ThemeContext';
import { Save, ArrowLeft, Image as ImageIcon, Calendar } from 'lucide-react';

// Quill Editor with SSR: false to prevent hydration errors
const ReactQuill = dynamic(() => import('react-quill'), { 
    ssr: false,
    loading: () => <div className="h-64 bg-zinc-900 rounded-xl animate-pulse"></div>
});
import 'react-quill/dist/quill.snow.css';

export default function CreateCurrentAffairs() {
    const { isDark } = useTheme();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: 'daily',
        publish_date: new Date().toISOString().split('T')[0],
        tags: '',
        featured_image: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.content) {
            alert('Title and Content are required');
            return;
        }
        setLoading(true);
        try {
            await api.post('/current-affairs', formData);
            router.push('/admin/current-affairs');
        } catch (err) {
            console.error(err);
            alert('Failed to publish. Ensure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const containerClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
    const inputClass = isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-gray-200 text-gray-900';
    const labelClass = isDark ? 'text-zinc-500' : 'text-gray-500';

    return (
        <AdminLayout title="Operational Update">
            <Head>
                <title>New Current Affair | Admin</title>
            </Head>

            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header Actions */}
                <div className="flex items-center justify-between">
                    <button onClick={() => router.back()} className={`flex items-center gap-2 transition-colors group ${isDark ? 'text-zinc-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                        <div className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-zinc-900 group-hover:bg-zinc-800' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                            <ArrowLeft size={16} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider">Back to List</span>
                    </button>
                    
                    <button 
                        onClick={handleSubmit} 
                        disabled={loading}
                        className="flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all disabled:opacity-50"
                    >
                        {loading ? 'Publishing...' : <><Save size={18} /> Publish Entry</>}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className={`${containerClass} border rounded-2xl p-8 space-y-6`}>
                            <div>
                                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 ${labelClass}`}>Headlines</label>
                                <input 
                                    type="text"
                                    value={formData.title}
                                    onChange={e => setFormData({...formData, title: e.target.value})}
                                    className={`w-full border rounded-xl py-3.5 px-6 font-bold text-lg outline-none focus:ring-2 focus:ring-amber-500/10 transition-all ${inputClass}`}
                                    placeholder="Enter publication headline..."
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className={`block text-xs font-bold uppercase tracking-wider ml-1 ${labelClass}`}>Detailed Narrative</label>
                                <div className={`quill-wrapper border rounded-xl overflow-hidden transition-colors ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-white'}`}>
                                    <ReactQuill 
                                        theme="snow" 
                                        value={formData.content}
                                        onChange={content => setFormData({...formData, content})}
                                        className="min-h-[300px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Settings */}
                    <div className="space-y-6">
                        <div className={`${containerClass} border rounded-2xl p-6 space-y-5`}>
                            <h3 className={`text-xs font-bold uppercase tracking-widest border-b pb-4 ${isDark ? 'text-zinc-400 border-zinc-800' : 'text-gray-400 border-gray-100'}`}>Content Meta</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 ${labelClass}`}>
                                        <Calendar size={12} /> Live Date
                                    </label>
                                    <input 
                                        type="date"
                                        value={formData.publish_date}
                                        onChange={e => setFormData({...formData, publish_date: e.target.value})}
                                        className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 ${inputClass}`}
                                    />
                                </div>

                                <div>
                                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${labelClass}`}>Category</label>
                                    <select 
                                        value={formData.category}
                                        onChange={e => setFormData({...formData, category: e.target.value})}
                                        className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 appearance-none cursor-pointer ${inputClass}`}
                                    >
                                        <option value="daily">Daily News</option>
                                        <option value="weekly">Weekly Insights</option>
                                        <option value="monthly">Monthly Digest</option>
                                        <option value="featured">Featured Event</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${labelClass}`}>Tags</label>
                                    <input 
                                        type="text"
                                        value={formData.tags}
                                        onChange={e => setFormData({...formData, tags: e.target.value})}
                                        className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 ${inputClass}`}
                                        placeholder="e.g. UPSC, Economy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`${containerClass} border rounded-2xl p-6`}>
                           <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-4 ${labelClass}`}>
                                <ImageIcon size={14} /> Cover Media URL
                            </label>
                            <input 
                                type="text"
                                value={formData.featured_image}
                                onChange={e => setFormData({...formData, featured_image: e.target.value})}
                                className={`w-full border rounded-lg py-2.5 px-4 text-[10px] font-mono outline-none focus:ring-2 focus:ring-amber-500/10 mb-4 ${inputClass}`}
                                placeholder="https://unsplash.com/photo..."
                            />
                            <div className={`w-full aspect-video border-2 border-dashed rounded-xl flex flex-col items-center justify-center ${isDark ? 'bg-black border-zinc-800 text-zinc-800' : 'bg-gray-50 border-gray-200 text-gray-200'}`}>
                                {formData.featured_image ? (
                                    <img src={formData.featured_image} className="w-full h-full object-cover rounded-xl" alt="Preview" />
                                ) : (
                                    <>
                                        <ImageIcon size={32} className="mb-1 opacity-50" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">No Preview</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                .ql-toolbar.ql-snow {
                    border: none !important;
                    border-bottom: 1px solid ${isDark ? '#27272a' : '#f4f4f5'} !important;
                    background: ${isDark ? '#18181b' : '#fafafa'} !important;
                    padding: 8px !important;
                }
                .ql-container.ql-snow {
                    border: none !important;
                    font-family: inherit !important;
                    font-size: 14px !important;
                }
                .ql-editor {
                    min-height: 300px;
                    color: ${isDark ? '#fff' : '#000'} !important;
                }
                .ql-stroke {
                    stroke: ${isDark ? '#71717a' : '#94a3b8'} !important;
                }
                .ql-fill {
                    fill: ${isDark ? '#71717a' : '#94a3b8'} !important;
                }
                .ql-picker {
                    color: ${isDark ? '#71717a' : '#94a3b8'} !important;
                }
            `}</style>
        </AdminLayout>
    );
}
