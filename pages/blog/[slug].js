import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, ArrowLeft, BookOpen, Share2 } from 'lucide-react';
import axios from 'axios';
import { useTheme } from '@/context/ThemeContext';
import { API_BASE_URL } from '@/utils/api';

export default function BlogPostDetail({ blog }) {
  const { isDark } = useTheme();

  if (!blog) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-[#0f0f11] text-zinc-100' : 'bg-[#f8f9fa] text-zinc-900'}`}>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-extrabold">Publication Not Found</h2>
          <p className="text-zinc-500">The requested story could not be found or has been withdrawn.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-amber-600 transition-all">
            <ArrowLeft size={16} /> Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const bg = isDark ? 'bg-[#0f0f11] text-zinc-100' : 'bg-[#f8f9fa] text-zinc-950';
  const containerBg = isDark ? 'bg-[#18181b]/50 border-zinc-800' : 'bg-white border-zinc-200/50 shadow-sm';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const borderCol = isDark ? 'border-zinc-800' : 'border-zinc-200/60';

  const readTime = Math.max(2, Math.ceil((blog.content || '').split(' ').length / 200));
  const publishDate = new Date(blog.created_at || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={`min-h-screen pt-28 pb-20 ${bg}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
      <Head>
        <title>{blog.title} | Practice Forever Blog</title>
        <meta name="description" content={blog.content ? blog.content.substring(0, 160).replace(/[#*`_]/g, '') : "Read article details on Practice Forever."} />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link href="/blog" className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-amber-500 transition-colors ${textMuted}`}>
            <ArrowLeft size={14} strokeWidth={2.5} />
            Back to Editorial List
          </Link>
        </div>

        {/* Article Layout */}
        <article className={`border rounded-[2rem] p-8 md:p-12 overflow-hidden ${containerBg}`}>
          
          {/* Header Metadata */}
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest">
              <Tag size={10} />
              {blog.category_name || 'General'}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              {blog.title}
            </h1>

            {/* Author details card */}
            <div className={`flex flex-wrap items-center justify-between gap-6 pt-4 border-t ${borderCol}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-sm font-extrabold uppercase">
                  {blog.author_name ? blog.author_name.charAt(0) : 'A'}
                </div>
                <div>
                  <p className="text-xs font-black">{blog.author_name || 'Administrator'}</p>
                  <p className="text-[10px] text-zinc-500 font-medium">Published on {publishDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-zinc-500 text-xs font-bold">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{readTime} Min Read</span>
                </div>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article URL copied to clipboard!");
                  }}
                  className="flex items-center gap-1.5 hover:text-amber-500 transition-colors cursor-pointer"
                >
                  <Share2 size={14} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Article Main Content Body */}
          <div className={`text-[15px] md:text-[16px] leading-relaxed font-normal whitespace-pre-wrap tracking-wide space-y-6 ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>
            {blog.content}
          </div>

        </article>

        {/* Footer Editorial Box */}
        <div className={`mt-12 p-8 border rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left ${containerBg}`}>
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
            <BookOpen size={30} />
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider mb-2 text-amber-500">Practice Forever Insights</h4>
            <p className={`text-xs ${textMuted} leading-relaxed`}>
              We are dedicated to compiling top-tier guides, mock interviews, and training materials. Subscribe to our placement newsletters or keep exploring our mock catalogs.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    const res = await axios.get(`${API_BASE_URL}/api/blog/${slug}`);
    return {
      props: {
        blog: res.data.success ? res.data.data : null
      }
    };
  } catch (err) {
    console.error(`getServerSideProps for blog [slug] (${slug}) failed:`, err.message);
    return {
      props: {
        blog: null
      }
    };
  }
}
