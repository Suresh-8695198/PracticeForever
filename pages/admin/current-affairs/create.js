import React, { useState, useCallback, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '../../../context/ThemeContext';
import {
    Save, ArrowLeft, Image as ImageIcon, Calendar,
    Upload, X, Eye, FileText, Tag, AlertCircle,
    CheckCircle, Loader2, Star, Globe, Trash2
} from 'lucide-react';

// Quill Editor with SSR: false
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <div className="h-64 bg-zinc-900 rounded-xl animate-pulse"></div>
});
import 'react-quill/dist/quill.snow.css';

export default function CreateCurrentAffairs() {
    const { isDark } = useTheme();
    const router = useRouter();
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(false);
    const [toast, setToast] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: 'daily',
        publish_date: new Date().toISOString().split('T')[0],
        tags: '',
        featured_image: '',
        source: '',
        importance: 'normal'
    });

    // Show toast notification
    const showToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3500);
    };

    // ── Image Upload Handler ──
    const handleImageUpload = async (file) => {
        if (!file) return;
        
        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (!allowedTypes.includes(file.type)) {
            showToast('Only image files are allowed (JPG, PNG, GIF, WebP, SVG)', 'error');
            return;
        }
        
        // Validate file size (10MB)
        if (file.size > 10 * 1024 * 1024) {
            showToast('Image must be under 10MB', 'error');
            return;
        }

        setUploading(true);
        try {
            const formPayload = new FormData();
            formPayload.append('image', file);

            const res = await api.post('/current-affairs/upload-image', formPayload, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (res.data.success) {
                const imageUrl = `http://localhost:5000${res.data.data.url}`;
                setFormData(prev => ({ ...prev, featured_image: imageUrl }));
                showToast('Image uploaded successfully!');
            }
        } catch (err) {
            console.error('Upload error:', err);
            showToast('Failed to upload image. Please try again.', 'error');
        } finally {
            setUploading(false);
        }
    };

    // Drag and drop handlers
    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleImageUpload(e.dataTransfer.files[0]);
        }
    }, []);

    const handleFileInput = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleImageUpload(e.target.files[0]);
        }
    };

    const removeImage = () => {
        setFormData(prev => ({ ...prev, featured_image: '' }));
    };
    // ── Document Content Extraction ──
    const handleDocUpload = async (file) => {
        const allowedTypes = [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/pdf'
        ];
        
        if (!allowedTypes.includes(file.type)) {
            showToast('Only .docx and .pdf files are allowed', 'error');
            return;
        }

        setLoading(true);
        try {
            const formPayload = new FormData();
            formPayload.append('document', file);

            const res = await api.post('/current-affairs/extract-document', formPayload, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (res.data.success) {
                const { content, title } = res.data.data;
                
                // Update form
                setFormData(prev => ({ 
                    ...prev, 
                    title: title || prev.title,
                    content: content
                }));
                
                showToast('Content extracted successfully!');
                
                // Ask for smart formatting
                setTimeout(() => {
                    if (window.confirm('Content extracted. Would you like to run Smart Formatting (Auto-Bold) now?')) {
                        autoBoldKeywords(content);
                    }
                }, 500);
            }
        } catch (err) {
            console.error('Doc extract error:', err);
            showToast('Failed to extract document. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleMagicDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleDocUpload(e.dataTransfer.files[0]);
        }
    };

    // ── Smart Formatting (Auto Bold) ──
    const autoBoldKeywords = (customContent = null) => {
        let content = customContent || formData.content;
        if (!content) return;
        
        // List of keywords to bold (Regex)
        const keywords = [
            /Why in News\?/gi,
            /Key Points:?/gi,
            /For Prelims:?/gi,
            /For Mains:?/gi,
            /Background:?/gi,
            /Significance:?/gi,
            /Way Forward:?/gi,
            /Context:?/gi,
            /GS Paper [1-4]/gi,
            /Syllabus:?/gi,
            /Source:?/gi,
            /Impact:?/gi,
            /Conclusion:?/gi,
            /Highlights:?/gi,
            /Objective:?/gi
        ];

        let modified = false;
        keywords.forEach(pattern => {
            content = content.replace(pattern, (match) => {
                modified = true;
                return `<strong>${match}</strong>`;
            });
        });

        if (modified) {
            setFormData(prev => ({ ...prev, content }));
            showToast('Smart formatting applied!');
        } else if (!customContent) {
            showToast('No new keywords found.', 'info');
        }
    };

    // ── Form Submit ──
    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        
        if (!formData.title.trim()) {
            showToast('Title is required', 'error');
            return;
        }
        if (!formData.content.trim() || formData.content === '<p><br></p>') {
            showToast('Content is required', 'error');
            return;
        }

        setLoading(true);
        try {
            await api.post('/current-affairs', formData);
            showToast('Published successfully! Redirecting...');
            setTimeout(() => router.push('/admin/current-affairs'), 1200);
        } catch (err) {
            console.error(err);
            showToast('Failed to publish. Ensure backend is running.', 'error');
        } finally {
            setLoading(false);
        }
    };

    // Tags helper
    const addTag = (tag) => {
        const currentTags = formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : [];
        if (!currentTags.includes(tag)) {
            currentTags.push(tag);
            setFormData(prev => ({ ...prev, tags: currentTags.join(', ') }));
        }
    };

    const suggestedTags = ['UPSC', 'SSC', 'Banking', 'TNPSC', 'Economy', 'Polity', 'Science', 'Defence', 'Environment', 'Sports', 'International', 'National'];

    // Quill modules — extended toolbar
    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['blockquote'],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean']
        ]
    };

    const containerClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
    const inputClass = isDark ? 'bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-700' : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400';
    const labelClass = isDark ? 'text-zinc-500' : 'text-gray-500';

    return (
        <AdminLayout title="Intelligence Feed">
            <Head>
                <title>New Current Affair | Admin</title>
            </Head>

            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-sm font-bold transition-all animate-in slide-in-from-top-4 duration-300 ${
                    toast.type === 'error' 
                        ? 'bg-red-500 text-white' 
                        : toast.type === 'info' ? 'bg-zinc-800 text-white' : 'bg-emerald-500 text-white'
                }`}>
                    {toast.type === 'error' ? <AlertCircle size={18} /> : (toast.type === 'info' ? <AlertCircle size={18} className="text-amber-500" /> : <CheckCircle size={18} />)}
                    {toast.message}
                </div>
            )}

            <div className="max-w-6xl mx-auto pb-10">
                {/* Header Actions - Static Fixed Background */}
                <div className="sticky top-0 z-[70] py-4 bg-[#fcfcfc]/90 dark:bg-black/90 backdrop-blur-md border-b dark:border-zinc-800 transition-all">
                    <div className="flex items-center justify-between">
                        <button onClick={() => router.back()} className={`flex items-center gap-2 transition-colors group ${isDark ? 'text-zinc-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                            <div className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-zinc-900 group-hover:bg-zinc-800' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                                <ArrowLeft size={16} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider">Back to List</span>
                        </button>
                        
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => autoBoldKeywords()}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${isDark ? 'bg-zinc-900 text-amber-400 hover:bg-zinc-800' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
                                title="Auto-bold competitive exam keywords"
                            >
                                <FileText size={14} /> Smart Format
                            </button>
                            <button 
                                onClick={() => setPreview(!preview)} 
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold border transition-all ${isDark ? 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900' : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                            >
                                <Eye size={14} /> {preview ? 'Edit Mode' : 'Preview'}
                            </button>
                            <button 
                                onClick={handleSubmit} 
                                disabled={loading}
                                className="flex items-center gap-2 bg-amber-500 text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-amber-600 transition-all disabled:opacity-50 active:scale-95"
                            >
                                {loading ? (
                                    <><Loader2 size={16} className="animate-spin" /> Processing...</>
                                ) : (
                                    <><Save size={16} /> Publish Entry</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── PREVIEW MODE ── */}
                {preview ? (
                    <div className={`${containerClass} border rounded-2xl p-8 space-y-6`}>
                        <div className="flex items-center gap-2 mb-4">
                            <Eye size={14} className="text-amber-500" />
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Preview Mode</span>
                        </div>
                        {formData.featured_image && (
                            <img src={formData.featured_image} alt="Cover" className="w-full max-h-80 object-cover rounded-xl" />
                        )}
                        <div className="flex items-center gap-3 text-xs">
                            <span className={`px-3 py-1 rounded-md font-bold uppercase ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-50 text-amber-700'}`}>{formData.category}</span>
                            <span className={labelClass}>{formData.publish_date}</span>
                            {formData.source && <span className={labelClass}>Source: {formData.source}</span>}
                        </div>
                        <h1 className="text-2xl font-black tracking-tight">{formData.title || 'Untitled'}</h1>
                        {formData.tags && (
                            <div className="flex flex-wrap gap-2">
                                {formData.tags.split(',').map((tag, i) => (
                                    <span key={i} className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-100 text-gray-600'}`}>
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div 
                            className="prose prose-sm dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: formData.content || '<p class="text-zinc-500">No content yet...</p>' }}
                        />
                    </div>
                ) : (
                    /* ── EDIT MODE ── */
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Content Form */}
                        <div className="lg:col-span-2 space-y-6">
                            
                            {/* Magic Import Area (NEW) */}
                            <div 
                                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                onDrop={handleMagicDrop}
                                className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all group ${
                                    isDark ? 'border-zinc-800 bg-zinc-900/40 hover:border-amber-500/50 hover:bg-amber-500/5' : 'border-emerald-100 bg-emerald-50/30 hover:border-emerald-500 hover:bg-emerald-50'
                                }`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${isDark ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500 text-white'}`}>
                                    <Upload size={28} />
                                </div>
                                <h3 className="text-lg font-black tracking-tight mb-1">Magic Import</h3>
                                <p className={`text-xs font-bold text-center max-w-[280px] leading-relaxed mb-6 ${labelClass}`}>
                                    Drop a <span className="text-amber-500 font-black">Word (.docx)</span> or <span className="text-rose-500 font-black">PDF</span> here to automatically extract content with headings.
                                </p>
                                <input 
                                    type="file" 
                                    id="doc-upload" 
                                    className="hidden" 
                                    accept=".docx,.pdf"
                                    onChange={(e) => e.target.files?.[0] && handleDocUpload(e.target.files[0])}
                                />
                                <label 
                                    htmlFor="doc-upload"
                                    className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest cursor-pointer transition-all shadow-lg active:scale-95 ${
                                        isDark ? 'bg-white text-black hover:bg-amber-500' : 'bg-zinc-900 text-white hover:bg-emerald-500'
                                    }`}
                                >
                                    Choose Document
                                </label>
                            </div>

                            <div className={`${containerClass} border rounded-2xl p-6 space-y-5`}>
                                {/* Title */}
                                <div>
                                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 ${labelClass}`}>
                                        Headline *
                                    </label>
                                    <input 
                                        type="text"
                                        value={formData.title}
                                        onChange={e => setFormData({...formData, title: e.target.value})}
                                        className={`w-full border rounded-xl py-3.5 px-5 font-bold text-lg outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all ${inputClass}`}
                                        placeholder="Enter headline..."
                                        required
                                    />
                                </div>

                                {/* Rich Text Editor */}
                                <div className="space-y-2">
                                    <label className={`block text-xs font-bold uppercase tracking-wider ml-1 ${labelClass}`}>
                                        Content *
                                    </label>
                                    <div className={`quill-wrapper border rounded-xl overflow-hidden transition-colors ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-white'}`}>
                                        <ReactQuill 
                                            theme="snow" 
                                            value={formData.content}
                                            onChange={content => setFormData({...formData, content})}
                                            className="min-h-[350px]"
                                            modules={quillModules}
                                            placeholder="Write your current affairs content here... You can add images, links, lists, headings etc."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Settings */}
                        <div className="space-y-5">
                            {/* Content Meta */}
                            <div className={`${containerClass} border rounded-2xl p-5 space-y-4`}>
                                <h3 className={`text-xs font-bold uppercase tracking-widest border-b pb-3 ${isDark ? 'text-zinc-400 border-zinc-800' : 'text-gray-400 border-gray-100'}`}>
                                    Content Meta
                                </h3>
                                
                                {/* Date */}
                                <div>
                                    <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1.5 ${labelClass}`}>
                                        <Calendar size={12} /> Publish Date
                                    </label>
                                    <input 
                                        type="date"
                                        value={formData.publish_date}
                                        onChange={e => setFormData({...formData, publish_date: e.target.value})}
                                        className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 ${inputClass}`}
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${labelClass}`}>Category</label>
                                    <select 
                                        value={formData.category}
                                        onChange={e => setFormData({...formData, category: e.target.value})}
                                        className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/20 appearance-none cursor-pointer ${inputClass}`}
                                    >
                                        <option value="daily">Daily News</option>
                                        <option value="weekly">Weekly Insights</option>
                                        <option value="monthly">Monthly Digest</option>
                                        <option value="featured">Featured Event</option>
                                        <option value="national">National</option>
                                        <option value="international">International</option>
                                        <option value="economy">Economy</option>
                                        <option value="science">Science & Tech</option>
                                        <option value="sports">Sports</option>
                                        <option value="environment">Environment</option>
                                        <option value="polity">Polity & Governance</option>
                                    </select>
                                </div>

                                {/* Importance */}
                                <div>
                                    <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1.5 ${labelClass}`}>
                                        <Star size={12} /> Importance
                                    </label>
                                    <div className="flex gap-2">
                                        {['normal', 'important', 'critical'].map(level => (
                                            <button
                                                key={level}
                                                onClick={() => setFormData({...formData, importance: level})}
                                                className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${
                                                    formData.importance === level
                                                        ? level === 'critical' ? 'bg-red-500 text-white border-red-500'
                                                        : level === 'important' ? 'bg-amber-500 text-white border-amber-500'
                                                        : 'bg-emerald-500 text-white border-emerald-500'
                                                        : isDark ? 'border-zinc-800 text-zinc-600 hover:border-zinc-700' : 'border-gray-200 text-gray-400 hover:border-gray-300'
                                                }`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Source */}
                                <div>
                                    <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1.5 ${labelClass}`}>
                                        <Globe size={12} /> Source
                                    </label>
                                    <input 
                                        type="text"
                                        value={formData.source}
                                        onChange={e => setFormData({...formData, source: e.target.value})}
                                        className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/20 ${inputClass}`}
                                        placeholder="e.g. PIB, The Hindu, LiveMint"
                                    />
                                </div>

                                {/* Tags */}
                                <div>
                                    <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1.5 ${labelClass}`}>
                                        <Tag size={12} /> Tags
                                    </label>
                                    <input 
                                        type="text"
                                        value={formData.tags}
                                        onChange={e => setFormData({...formData, tags: e.target.value})}
                                        className={`w-full border rounded-lg py-2.5 px-4 text-xs font-bold outline-none focus:ring-2 focus:ring-amber-500/20 mb-2 ${inputClass}`}
                                        placeholder="e.g. UPSC, Economy, Polity"
                                    />
                                    <div className="flex flex-wrap gap-1.5">
                                        {suggestedTags.map(tag => (
                                            <button
                                                key={tag}
                                                onClick={() => addTag(tag)}
                                                className={`text-[9px] font-bold px-2 py-1 rounded border transition-all hover:border-amber-500 hover:text-amber-500 ${isDark ? 'border-zinc-800 text-zinc-600' : 'border-gray-200 text-gray-400'}`}
                                            >
                                                + {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Cover Image Upload */}
                            <div className={`${containerClass} border rounded-2xl p-5`}>
                                <label className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3 ${labelClass}`}>
                                    <ImageIcon size={14} /> Cover Image
                                </label>

                                {/* Upload Zone */}
                                {!formData.featured_image ? (
                                    <div
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                        onClick={() => fileInputRef.current?.click()}
                                        className={`w-full aspect-video border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                                            dragActive
                                                ? 'border-amber-500 bg-amber-500/5'
                                                : isDark ? 'border-zinc-800 bg-black hover:border-zinc-700' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                                        } ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                                    >
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileInput}
                                            className="hidden"
                                        />
                                        {uploading ? (
                                            <>
                                                <Loader2 size={28} className="animate-spin text-amber-500 mb-2" />
                                                <span className="text-xs font-bold text-amber-500">Uploading...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Upload size={28} className={`mb-2 ${isDark ? 'text-zinc-700' : 'text-gray-300'}`} />
                                                <span className={`text-xs font-bold ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}>
                                                    {dragActive ? 'Drop image here!' : 'Click or drag image here'}
                                                </span>
                                                <span className={`text-[10px] mt-1 ${isDark ? 'text-zinc-800' : 'text-gray-300'}`}>
                                                    JPG, PNG, WebP, GIF — Max 10MB
                                                </span>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    /* Image Preview */
                                    <div className="relative group">
                                        <img 
                                            src={formData.featured_image} 
                                            alt="Cover preview" 
                                            className="w-full aspect-video object-cover rounded-xl"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-3">
                                            <button 
                                                onClick={() => fileInputRef.current?.click()}
                                                className="p-2.5 bg-white rounded-lg text-gray-900 hover:bg-amber-500 hover:text-white transition-colors"
                                                title="Replace image"
                                            >
                                                <Upload size={16} />
                                            </button>
                                            <button 
                                                onClick={removeImage}
                                                className="p-2.5 bg-white rounded-lg text-gray-900 hover:bg-red-500 hover:text-white transition-colors"
                                                title="Remove image"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileInput}
                                            className="hidden"
                                        />
                                    </div>
                                )}

                                {/* Or paste URL */}
                                <div className="mt-3">
                                    <div className={`flex items-center gap-2 mb-1.5 ${labelClass}`}>
                                        <div className={`flex-1 h-px ${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`} />
                                        <span className="text-[9px] font-bold uppercase tracking-widest">or paste URL</span>
                                        <div className={`flex-1 h-px ${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`} />
                                    </div>
                                    <input 
                                        type="text"
                                        value={formData.featured_image}
                                        onChange={e => setFormData({...formData, featured_image: e.target.value})}
                                        className={`w-full border rounded-lg py-2 px-3 text-[10px] font-mono outline-none focus:ring-2 focus:ring-amber-500/20 ${inputClass}`}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            </div>

                            {/* Word Count Info */}
                            <div className={`${containerClass} border rounded-2xl p-4`}>
                                <div className="flex items-center justify-between">
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${labelClass}`}>
                                        <FileText size={10} className="inline mr-1" /> Content Stats
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-3">
                                    <div className={`text-center p-2 rounded-lg ${isDark ? 'bg-zinc-900' : 'bg-gray-50'}`}>
                                        <span className={`block text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {formData.content ? formData.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length : 0}
                                        </span>
                                        <span className={`text-[9px] font-bold uppercase ${labelClass}`}>Words</span>
                                    </div>
                                    <div className={`text-center p-2 rounded-lg ${isDark ? 'bg-zinc-900' : 'bg-gray-50'}`}>
                                        <span className={`block text-sm font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {formData.content ? formData.content.replace(/<[^>]*>/g, '').length : 0}
                                        </span>
                                        <span className={`text-[9px] font-bold uppercase ${labelClass}`}>Characters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            <style jsx global>{`
                /* Premium Editor Styling */
                .quill-wrapper {
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 20px -10px rgba(0, 0, 0, 0.1);
                }
                
                .quill-wrapper:focus-within {
                    border-color: #f59e0b !important;
                    box-shadow: 0 10px 30px -15px rgba(245, 158, 11, 0.15);
                    transform: translateY(-1px);
                }

                .ql-toolbar.ql-snow {
                    border: none !important;
                    border-bottom: 1px solid ${isDark ? '#27272a' : '#f1f1f1'} !important;
                    background: ${isDark ? '#1a1a1c/90' : '#ffffff/90'} !important;
                    backdrop-filter: blur(8px);
                    padding: 12px 20px !important;
                    position: sticky;
                    top: 48px; /* Perfectly aligned below floating action bar */
                    z-index: 40;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    border-radius: 12px 12px 0 0;
                }

                /* Toolbar Button Refinements */
                .ql-snow.ql-toolbar button {
                    background: transparent;
                    border-radius: 6px;
                    width: 32px !important;
                    height: 32px !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    margin-right: 4px !important;
                }

                .ql-snow.ql-toolbar button:hover {
                    background: ${isDark ? '#27272a' : '#f9fafb'} !important;
                    color: #f59e0b !important;
                }

                .ql-snow.ql-toolbar button.ql-active {
                    background: ${isDark ? '#27272a' : '#f59e0b10'} !important;
                    color: #f59e0b !important;
                }

                .ql-snow.ql-toolbar button.ql-active .ql-stroke {
                    stroke: #f59e0b !important;
                }

                .ql-container.ql-snow {
                    border: none !important;
                    background: ${isDark ? '#121214' : '#ffffff'} !important;
                    border-radius: 0 0 12px 12px;
                }

                /* Distraction-Free Prose Content */
                .ql-editor {
                    min-height: 500px;
                    max-height: 800px;
                    overflow-y: auto;
                    color: ${isDark ? '#e4e4e7' : '#18181b'} !important;
                    padding: 40px 60px !important;
                    font-size: 17px !important;
                    line-height: 1.8 !important;
                    font-family: 'Inter', -apple-system, sans-serif !important;
                    letter-spacing: -0.01em !important;
                }

                /* Scrollbar for editor */
                .ql-editor::-webkit-scrollbar {
                    width: 6px;
                }
                .ql-editor::-webkit-scrollbar-thumb {
                    background: ${isDark ? '#27272a' : '#e5e7eb'};
                    border-radius: 10px;
                }

                .ql-editor.ql-blank::before {
                    color: ${isDark ? '#3f3f46' : '#a1a1aa'} !important;
                    left: 60px !important;
                    top: 40px !important;
                    font-style: normal !important;
                    opacity: 0.6;
                }

                /* Elegant Typography inside Editor */
                .ql-editor h1 {
                    font-size: 32px !important;
                    font-weight: 800 !important;
                    margin-bottom: 24px !important;
                    color: ${isDark ? '#ffffff' : '#09090b'} !important;
                    letter-spacing: -0.04em !important;
                }

                .ql-editor h2 {
                    font-size: 24px !important;
                    font-weight: 700 !important;
                    margin-top: 32px !important;
                    margin-bottom: 16px !important;
                }

                .ql-editor h3 {
                    font-size: 20px !important;
                    font-weight: 700 !important;
                    margin-top: 24px !important;
                }

                .ql-editor p {
                    margin-bottom: 20px !important;
                }

                .ql-editor strong {
                    font-weight: 700 !important;
                    color: ${isDark ? '#f59e0b' : '#d97706'} !important;
                }
                
                .ql-editor blockquote {
                    border-left: 4px solid #f59e0b !important;
                    background: ${isDark ? '#1a1a1c' : '#f9fafb'} !important;
                    padding: 20px 30px !important;
                    border-radius: 0 12px 12px 0;
                    margin: 24px 0 !important;
                    font-style: italic;
                    color: ${isDark ? '#a1a1aa' : '#4b5563'} !important;
                }

                .ql-editor ul, .ql-editor ol {
                    margin-bottom: 24px !important;
                    padding-left: 20px !important;
                }

                .ql-editor li {
                    margin-bottom: 10px !important;
                }

                .ql-stroke {
                    stroke: ${isDark ? '#a1a1aa' : '#64748b'} !important;
                    stroke-width: 2px !important;
                }
                
                .ql-fill {
                    fill: ${isDark ? '#a1a1aa' : '#64748b'} !important;
                }

                .ql-picker {
                    color: ${isDark ? '#a1a1aa' : '#64748b'} !important;
                    font-weight: 600 !important;
                }

                .ql-picker-label:hover {
                    color: #f59e0b !important;
                }

                .ql-editor img {
                    border-radius: 16px;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
                    margin: 20px 0;
                }
            `}</style>
        </AdminLayout>
    );
}
