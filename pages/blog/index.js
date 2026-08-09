import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search, Calendar, User, Tag, Clock, ArrowRight, BookOpen } from 'lucide-react';
import axios from 'axios';
import { useTheme } from '@/context/ThemeContext';
import { API_BASE_URL } from '@/utils/api';

export default function BlogIndex({ initialBlogs }) {
  const { isDark } = useTheme();
  const router = useRouter();
  const { category: queryCategory } = router.query;

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(queryCategory || 'all');

  const bg = isDark ? 'bg-[#0f0f11] text-zinc-100' : 'bg-[#f8f9fa] text-zinc-950';
  const cardBg = isDark ? 'bg-[#18181b]/60 border-zinc-800/80' : 'bg-white border-zinc-200/50 shadow-sm';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-500';
  const filterActiveBg = 'bg-amber-500 text-white';
  const filterInactiveBg = isDark ? 'bg-zinc-800 text-zinc-300 border-zinc-700/60' : 'bg-white text-zinc-600 border-zinc-200';

  // Available categories for UI representation
  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'career', name: 'Career Guideline' },
    { id: 'exam-prep', name: 'Exam Prep' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'productivity', name: 'Productivity' }
  ];

  // Client-side filtration
  const filteredBlogs = (initialBlogs || []).filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (blog.content || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const blogCat = (blog.category_name || 'General').toLowerCase();
    const matchesCategory = activeCategory === 'all' || 
                            blogCat.includes(activeCategory.replace('-', '')) || 
                            activeCategory.replace('-', '').includes(blogCat);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen pt-28 pb-20 ${bg}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
      <Head>
        <title>Insights & Editorial Studio | Practice Forever</title>
        <meta name="description" content="Read expert guidance, placement preparation tutorials, technical tricks, and exam preparation tips to advance your career." />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Studio Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-black uppercase tracking-widest">
            <BookOpen size={12} />
            Practice Forever Editorial
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500">
            Insights & Career Guidance
          </h1>
          <p className={`text-base md:text-lg ${textMuted} font-medium leading-relaxed`}>
            Unlock expert perspectives, system analysis, interview advice, and educational content drafted by seasoned engineers and mentors.
          </p>
        </div>

        {/* Controls Layout */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 items-center w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl border transition-all active:scale-[0.98] ${
                  activeCategory === cat.id ? filterActiveBg : filterInactiveBg
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-amber-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full text-xs font-semibold py-3 pl-11 pr-5 rounded-xl border outline-none transition-all ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus:border-amber-500' 
                  : 'bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-300 focus:border-amber-600'
              }`}
            />
          </div>
        </div>

        {/* Grid List */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 border border-dashed rounded-3xl border-zinc-300 dark:border-zinc-800">
            <p className={`text-base font-bold ${textMuted}`}>No articles match your search criteria yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => {
              const readTime = Math.max(2, Math.ceil((blog.content || '').split(' ').length / 200));
              const publishDate = new Date(blog.created_at || Date.now()).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <div 
                  key={blog.id}
                  className={`flex flex-col h-full border rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${cardBg}`}
                >
                  <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-wider text-amber-500">
                    <Tag size={10} />
                    <span>{blog.category_name || 'General'}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold leading-tight tracking-tight mb-3 line-clamp-2 hover:text-amber-500 transition-colors">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  <p className={`text-xs leading-relaxed ${textMuted} mb-6 line-clamp-3`}>
                    {blog.content ? blog.content.replace(/[#*`_]/g, '') : 'No description available.'}
                  </p>

                  <div className="mt-auto pt-6 border-t border-zinc-200/50 dark:border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-xs font-extrabold uppercase">
                        {blog.author_name ? blog.author_name.charAt(0) : 'A'}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold">{blog.author_name || 'Administrator'}</p>
                        <p className="text-[9px] text-zinc-500 font-medium">{publishDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-bold">
                      <Clock size={12} />
                      <span>{readTime} Min Read</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/blog`);
    return {
      props: {
        initialBlogs: res.data.success ? res.data.data : []
      }
    };
  } catch (err) {
    console.error('ServerSideProps for Blog list failed:', err.message);
    return {
      props: {
        initialBlogs: []
      }
    };
  }
}
