import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '../../../context/ThemeContext';
import { 
  Save, 
  ArrowLeft, 
  Image as ImageIcon, 
  Type, 
  Link as LinkIcon,
  Globe,
  Tag
} from 'lucide-react';

const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <div className="h-64 bg-zinc-900 rounded-2xl animate-pulse"></div>
});
import 'react-quill/dist/quill.snow.css';

export default function CreateBlogPost() {
  const { isDark } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    category_id: 1,
    tags: '',
    featured_image: '',
    published_date: new Date().toISOString()
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('Title and Content are required');
      return;
    }
    setLoading(true);
    try {
      await api.post('/blog', formData);
      router.push('/admin/blog-posts');
    } catch (err) {
      console.error(err);
      alert('Failed to publish post. Check backend logs.');
    } finally {
      setLoading(false);
    }
  };

  const containerClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
  const inputBg = isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-gray-200 text-gray-900';
  const textTitle = isDark ? 'text-white' : 'text-gray-900';
  const textMuted = isDark ? 'text-zinc-500' : 'text-gray-400';

  return (
    <AdminLayout title="Drafting Story">
      <Head>
        <title>New Blog Post | Admin</title>
      </Head>

      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-8 pb-20">
        <div className={`flex items-center justify-between sticky top-0 z-20 py-4 border-b transition-all ${isDark ? 'bg-black/80 border-zinc-800' : 'bg-[#fcfcfc]/80 border-gray-100'} backdrop-blur-md mb-4`}>
          <button type="button" onClick={() => router.back()} className={`flex items-center gap-2 transition-colors group ${isDark ? 'text-zinc-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            <div className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-zinc-900 group-hover:bg-zinc-800' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
              <ArrowLeft size={16} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Discard</span>
          </button>
          
          <div className="flex items-center gap-6">
            <span className={`hidden md:block text-[10px] font-bold uppercase tracking-widest ${textMuted}`}>Drafting in realtime</span>
            <button 
              type="submit" 
              disabled={loading}
              className="flex items-center gap-2 bg-amber-500 text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all disabled:opacity-50"
            >
              {loading ? 'Publishing...' : <><Save size={18} /> Publish Story</>}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className={`${containerClass} border rounded-2xl p-8 space-y-8 transition-colors`}>
              <div className="space-y-4">
                <div className={`flex items-center gap-2 mb-2 ${textMuted}`}>
                  <Type size={16} />
                  <label className="text-xs font-bold uppercase tracking-wider">Headline</label>
                </div>
                <input 
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className={`w-full bg-transparent border-b-2 py-4 text-3xl font-bold outline-none transition-all placeholder:opacity-20 ${isDark ? 'border-zinc-800 focus:border-amber-500 text-white placeholder:text-zinc-500' : 'border-gray-100 focus:border-amber-500 text-gray-900 placeholder:text-gray-300'}`}
                  placeholder="The Story Begins Here..."
                  required
                />
                <div className={`flex items-center gap-2 text-xs font-medium ${textMuted}`}>
                  <LinkIcon size={12} />
                  <span>careerplatform.com/blog/</span>
                  <input 
                    type="text"
                    value={formData.slug}
                    onChange={e => setFormData({...formData, slug: e.target.value})}
                    className={`bg-transparent border-none outline-none font-bold text-amber-500 px-1 py-0.5 rounded`}
                  />
                </div>
              </div>

              <div className="space-y-4">
                 <div className={`flex items-center gap-2 mb-2 ${textMuted}`}>
                  <Globe size={16} />
                  <label className="text-xs font-bold uppercase tracking-wider">Content Body</label>
                </div>
                <div className={`quill-wrapper border rounded-xl overflow-hidden min-h-[500px] ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-100'}`}>
                  <ReactQuill 
                    theme="snow" 
                    value={formData.content}
                    onChange={content => setFormData({...formData, content})}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`${containerClass} border rounded-2xl p-6 space-y-5 transition-colors`}>
              <h4 className={`text-xs font-bold uppercase tracking-widest border-b pb-4 ${isDark ? 'text-zinc-400 border-zinc-800' : 'text-gray-400 border-gray-100'}`}>Settings</h4>
              
              <div className="space-y-5">
                <div>
                  <label className={`block text-[10px] font-bold uppercase mb-2 ${textMuted}`}>Categorize</label>
                  <select 
                    value={formData.category_id}
                    onChange={e => setFormData({...formData, category_id: e.target.value})}
                    className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 appearance-none cursor-pointer ${inputBg}`}
                  >
                    <option value={1}>Technology</option>
                    <option value={2}>Preparation</option>
                    <option value={3}>Success Stories</option>
                  </select>
                </div>

                <div>
                   <label className={`flex items-center gap-2 text-[10px] font-bold uppercase mb-2 ${textMuted}`}>
                    <Tag size={12} /> Keywords
                   </label>
                   <input 
                    type="text"
                    value={formData.tags}
                    onChange={e => setFormData({...formData, tags: e.target.value})}
                    placeholder="react, tips, career"
                    className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/10 ${inputBg}`}
                  />
                </div>
              </div>
            </div>

            <div className={`${containerClass} border rounded-2xl p-6 transition-colors`}>
               <div className="flex items-center justify-between mb-4">
                  <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${textMuted}`}>
                    <ImageIcon size={14} /> Thumbnail
                  </label>
               </div>
               <div className="space-y-4">
                  <input 
                    type="text"
                    value={formData.featured_image}
                    onChange={e => setFormData({...formData, featured_image: e.target.value})}
                    placeholder="Image URL..."
                    className={`w-full border rounded-lg py-2 px-4 text-[10px] font-mono outline-none focus:ring-2 focus:ring-amber-500/10 ${inputBg}`}
                  />
                  <div className={`aspect-[4/5] border-2 border-dashed rounded-xl flex flex-col items-center justify-center relative overflow-hidden group ${isDark ? 'bg-black border-zinc-800 text-zinc-800' : 'bg-gray-50 border-gray-100 text-gray-200'}`}>
                    {formData.featured_image ? (
                      <img src={formData.featured_image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                    ) : (
                      <>
                        <ImageIcon size={32} className="mb-1 opacity-20" />
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-20">Preview</span>
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
            padding: 10px !important;
          }
          .ql-container.ql-snow {
            border: none !important;
            font-size: 16px !important;
          }
          .ql-editor {
            min-height: 500px;
            color: ${isDark ? '#fff' : '#000'} !important;
            line-height: 1.8;
          }
          .ql-stroke { stroke: ${isDark ? '#71717a' : '#94a3b8'} !important; }
          .ql-fill { fill: ${isDark ? '#71717a' : '#94a3b8'} !important; }
          .ql-picker { color: ${isDark ? '#71717a' : '#94a3b8'} !important; }
          .ql-editor.ql-blank::before { color: ${isDark ? '#27272a' : '#94a3b8'} !important; font-style: normal; opacity: 0.3; }
        `}</style>
      </form>
    </AdminLayout>
  );
}
