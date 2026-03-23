import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { statePscData } from '../../data/exams/govt-exams-data';

const i8 = { main: 'https://img.icons8.com/color/96/india.png', check: 'https://img.icons8.com/color/48/checkmark--v1.png', book: 'https://img.icons8.com/color/48/open-book--v1.png', doc: 'https://img.icons8.com/color/48/documents.png', target: 'https://img.icons8.com/color/48/goal--v1.png' };
const I8 = ({ src, alt = '', size = 22 }) => <img src={src} alt={alt} width={size} height={size} className="inline-block" style={{ width: size, height: size }} />;

const StatePscPage = () => {
  const { isDark } = useTheme();
  const cl = { bg: isDark ? 'bg-[#0d1117]' : 'bg-[#f6f8fa]', surface: isDark ? 'bg-[#161b22]' : 'bg-white', border: isDark ? 'border-[#30363d]' : 'border-[#d0d7de]', text: isDark ? 'text-[#e6edf3]' : 'text-[#1f2328]', sub: isDark ? 'text-[#8b949e]' : 'text-[#656d76]' };
  const accent = '#6A1B9A';

  return (
    <div className={`min-h-screen ${cl.bg} ${cl.text} pt-[72px]`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Head><title>State PSC Exams 2026 — UPPSC, MPPSC, BPSC, RPSC & More | Guide</title><meta name="description" content="Prepare for State PSC exams — UPPSC, MPPSC, BPSC, RPSC, KPSC and 12+ state commissions. 1,20,000+ vacancies." /></Head>
      <div className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-3"><Link href="/exams" className={`inline-flex items-center gap-2 text-[12px] font-bold ${cl.sub}`}><ArrowLeft size={14} /> Back to All Exams</Link></div></div>
      <section className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-10"><div className="flex items-start gap-5"><I8 src={i8.main} alt="State PSC" size={48} /><div>
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: accent, backgroundColor: isDark ? 'rgba(106,27,154,0.1)' : '#F3E5F5' }}>State Public Service Commissions</span>
        <h1 className="text-2xl md:text-3xl font-extrabold mt-2">{statePscData.shortTitle}</h1>
        <p className={`text-[13px] ${cl.sub} mt-2 max-w-xl leading-relaxed`}>{statePscData.tagline}</p>
      </div></div></div></section>

      <main className="max-w-[1280px] mx-auto px-5 py-8 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className={`${cl.surface} border ${cl.border} rounded-lg p-4`}><div className="flex items-center gap-2 mb-2"><I8 src={i8.target} alt="" size={18} /><span className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub}`}>Total Commissions</span></div><p className="text-[16px] font-extrabold" style={{ color: accent }}>{statePscData.stats.totalCommissions}</p></div>
          <div className={`${cl.surface} border ${cl.border} rounded-lg p-4`}><div className="flex items-center gap-2 mb-2"><I8 src={i8.doc} alt="" size={18} /><span className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub}`}>Vacancies</span></div><p className="text-[16px] font-extrabold" style={{ color: accent }}>{statePscData.stats.vacancies}</p></div>
          <div className={`${cl.surface} border ${cl.border} rounded-lg p-4`}><div className="flex items-center gap-2 mb-2"><I8 src={i8.book} alt="" size={18} /><span className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub}`}>Qualification</span></div><p className="text-[16px] font-extrabold" style={{ color: accent }}>{statePscData.stats.qualification}</p></div>
        </div>

        <div className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
          <div className={`p-5 border-b ${cl.border}`}><h2 className="text-[15px] font-bold flex items-center gap-2"><I8 src={i8.doc} alt="" size={18} /> State Commissions</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {statePscData.commissions.map((c, i) => (
              <a key={i} href={c.site} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'bg-[#21262d] hover:bg-[#2d333b]' : 'bg-slate-50 hover:bg-slate-100'} rounded-lg p-4 transition-colors group`}>
                <h3 className="text-[13px] font-bold mb-1 group-hover:text-purple-600 transition-colors">{c.name}</h3>
                <p className={`text-[11px] ${cl.sub}`}>{c.state}</p>
                <div className="flex items-center gap-1 mt-2 text-[10px] font-bold" style={{ color: accent }}>Visit Portal <ArrowUpRight size={10} /></div>
              </a>
            ))}
          </div>
        </div>

        <div className={`${cl.surface} border ${cl.border} rounded-lg p-5`}><h2 className="text-[15px] font-bold mb-4 flex items-center gap-2"><I8 src={i8.book} alt="" size={18} /> Recommended Books</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-2">{statePscData.importantBooks.map((book, i) => (<div key={i} className={`flex items-center gap-2 py-1.5 text-[12px] ${cl.sub}`}><I8 src={i8.check} alt="" size={14} /> {book}</div>))}</div></div>
      </main>
    </div>
  );
};
export default StatePscPage;
