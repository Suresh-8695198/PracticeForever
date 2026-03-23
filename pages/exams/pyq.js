import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { pyqHub } from '../../data/exams/govt-exams-data';

const i8 = { pyq: 'https://img.icons8.com/color/96/documents.png', download: 'https://img.icons8.com/color/48/download--v1.png' };
const I8 = ({ src, alt = '', size = 22 }) => <img src={src} alt={alt} width={size} height={size} className="inline-block" style={{ width: size, height: size }} />;

const PYQPage = () => {
  const { isDark } = useTheme();
  const cl = { bg: isDark ? 'bg-[#0d1117]' : 'bg-[#f6f8fa]', surface: isDark ? 'bg-[#161b22]' : 'bg-white', border: isDark ? 'border-[#30363d]' : 'border-[#d0d7de]', text: isDark ? 'text-[#e6edf3]' : 'text-[#1f2328]', sub: isDark ? 'text-[#8b949e]' : 'text-[#656d76]' };
  const accent = '#1B5E20';

  return (
    <div className={`min-h-screen ${cl.bg} ${cl.text} pt-[72px]`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Head><title>Previous Year Question Papers — SSC, IBPS, RRB, UPSC, Police PYQ Vault</title><meta name="description" content="Download previous year question papers for SSC CGL, IBPS PO, RRB NTPC, UPSC CSE, Police SI exams. 500+ papers available." /></Head>
      <div className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-3"><Link href="/exams" className={`inline-flex items-center gap-2 text-[12px] font-bold ${cl.sub}`}><ArrowLeft size={14} /> Back to All Exams</Link></div></div>
      <section className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-10"><div className="flex items-start gap-5"><I8 src={i8.pyq} alt="PYQ" size={48} /><div>
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: accent, backgroundColor: isDark ? 'rgba(27,94,32,0.1)' : '#E8F5E9' }}>Question Vault</span>
        <h1 className="text-2xl md:text-3xl font-extrabold mt-2">Previous Year Question Papers</h1>
        <p className={`text-[13px] ${cl.sub} mt-2 max-w-xl leading-relaxed`}>Access 500+ previous year papers from all major government exams. Sourced from official commission websites.</p>
      </div></div></div></section>

      <main className="max-w-[1280px] mx-auto px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pyqHub.map((ex, i) => (
            <div key={i} className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
              <div className="p-4 flex items-center gap-3" style={{ borderBottom: `2px solid ${ex.color}` }}><I8 src={i8.pyq} alt="" size={20} /><h3 className="text-[14px] font-bold">{ex.exam}</h3></div>
              <div className="p-4 space-y-4">
                {ex.years.map((yr, j) => (
                  <div key={j}><h4 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: ex.color }}>Archive {yr.year}</h4>
                    <ul className="space-y-1.5">{yr.papers.map((p, k) => (<li key={k} className={`text-[12px] ${cl.sub} flex items-center gap-2`}><I8 src={i8.download} alt="" size={13} /> {p}</li>))}</ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className={`text-[11px] ${cl.sub} text-center mt-6`}>Papers sourced from official commission websites. More archives being added weekly.</p>
      </main>
    </div>
  );
};
export default PYQPage;
