import React, { useState } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import api, { API_BASE_URL } from '../../../utils/api';
import { useTheme } from '@/context/ThemeContext';
import { Upload, Image as ImageIcon, Link as LinkIcon, FileCheck, CloudUpload, Copy, Check } from 'lucide-react';

export default function MediaLibrary() {
    const { isDark } = useTheme();
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [lastUploaded, setLastUploaded] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleUpload = async (e) => {
        e.preventDefault();
        if(!file) return;
        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await api.post('/manage/media/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setLastUploaded(res.data.file);
            setFile(null); // Reset after upload
        } catch (err) {
            alert('Upload failed. Ensure backend server is running.');
        } finally {
            setUploading(false);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const cardClass = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200 shadow-sm';
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textMuted = isDark ? 'text-zinc-500' : 'text-gray-400';

    return (
        <AdminLayout title="Media Assets">
            <Head><title>Media Library | Admin</title></Head>
            <div className="max-w-4xl mx-auto space-y-10">
                {/* Header Information */}
                <div className="text-center space-y-2">
                    <h2 className={`text-2xl font-bold ${textMain}`}>Asset Ingestion</h2>
                    <p className={`text-sm ${textMuted}`}>Upload images and assets to use across your blogs and current affairs.</p>
                </div>

                {/* Upload Zone */}
                <div className={`${cardClass} border-2 border-dashed rounded-[2rem] p-12 md:p-20 flex flex-col items-center text-center transition-all`}>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${isDark ? 'bg-zinc-900 text-amber-500 border border-zinc-800' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                        <CloudUpload size={32} />
                    </div>
                    
                    <div className="space-y-2 mb-10">
                        <h3 className={`text-xl font-bold ${textMain}`}>Upload New Asset</h3>
                        <p className={`text-xs ${textMuted} max-w-xs mx-auto`}>JPG, PNG, WEBP or RAW formats. Maximum file size should be under 5MB for optimal performance.</p>
                    </div>
                    
                    <input type="file" onChange={e => setFile(e.target.files[0])} className="hidden" id="asset-upload" />
                    
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <label htmlFor="asset-upload" className={`cursor-pointer px-8 py-3.5 rounded-xl font-bold text-sm transition-all border ${
                            file 
                            ? 'bg-amber-500 text-white border-amber-500' 
                            : isDark ? 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                        }`}>
                            {file ? file.name : "Select File"}
                        </label>
                        
                        <button 
                            onClick={handleUpload}
                            disabled={!file || uploading}
                            className={`px-10 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center gap-2 ${
                                !file || uploading 
                                ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                                : 'bg-gray-900 text-white hover:bg-black dark:bg-amber-500 dark:text-white dark:hover:bg-amber-600'
                            }`}
                        >
                            {uploading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    <Upload size={18} />
                                    Upload Asset
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Feedback / Last Uploaded */}
                {lastUploaded && (
                    <div className={`${cardClass} border rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                        <div className={`w-32 h-24 rounded-xl overflow-hidden shrink-0 border ${isDark ? 'border-zinc-800' : 'border-gray-100 shadow-sm'}`}>
                            <img src={`${API_BASE_URL}${lastUploaded.path}`} className="w-full h-full object-cover" alt="Uploaded asset preview"/>
                        </div>
                        <div className="flex-1 min-w-0 w-full">
                            <div className="flex items-center gap-2 mb-1">
                                <FileCheck size={14} className="text-emerald-500" />
                                <h4 className="text-emerald-500 font-bold uppercase tracking-wider text-[10px]">Asset Successfully Stored</h4>
                            </div>
                            <p className={`font-bold truncate text-sm mb-3 ${textMain}`}>{lastUploaded.name}</p>
                            
                            <div className={`flex items-center gap-3 p-2.5 rounded-xl border ${isDark ? 'bg-black/40 border-zinc-800' : 'bg-gray-50 border-gray-100'}`}>
                                <LinkIcon size={14} className="text-zinc-500 shrink-0"/>
                                <span className={`text-[11px] font-mono truncate transition-all ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                                    {`${API_BASE_URL}${lastUploaded.path}`}
                                </span>
                                <button 
                                    onClick={() => copyToClipboard(`${API_BASE_URL}${lastUploaded.path}`)}
                                    className={`ml-auto p-1.5 rounded-lg transition-all ${isDark ? 'hover:bg-zinc-800 text-zinc-500 hover:text-white' : 'hover:bg-white text-gray-400 hover:text-gray-900 hover:shadow-sm'}`}
                                    title="Copy URL"
                                >
                                    {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
