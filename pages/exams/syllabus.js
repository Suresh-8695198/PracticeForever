import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { syllabusHub } from '../../data/exams/govt-exams-data';

const i8 = { syllabus: 'https://img.icons8.com/color/96/open-book--v1.png', check: 'https://img.icons8.com/color/48/checkmark--v1.png', external: 'https://img.icons8.com/color/48/external-link.png' };
const I8 = ({ src, alt = '', size = 22 }) => <img src={src} alt={alt} width={size} height={size} className="inline-block" style={{ width: size, height: size }} />;

const SyllabusPage = () => {
  const { isDark } = useTheme();
  const cl = { bg: isDark ? 'bg-[#0d1117]' : 'bg-[#f6f8fa]', surface: isDark ? 'bg-[#161b22]' : 'bg-white', border: isDark ? 'border-[#30363d]' : 'border-[#d0d7de]', text: isDark ? 'text-[#e6edf3]' : 'text-[#1f2328]', sub: isDark ? 'text-[#8b949e]' : 'text-[#656d76]' };
  const accent = '#4527A0';

  return (
    <div className={`min-h-screen ${cl.bg} ${cl.text} pt-[72px]`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Head><title>Exam Syllabus 2026 — UPSC, SSC, IBPS, RRB, Police, State PSC | Complete Hub</title><meta name="description" content="Complete syllabus for UPSC CSE, SSC CGL, IBPS PO, RRB NTPC, SSC CPO and State PSC exams. Prelims and Mains detailed breakdown." /></Head>
      <div className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-3"><Link href="/exams" className={`inline-flex items-center gap-2 text-[12px] font-bold ${cl.sub}`}><ArrowLeft size={14} /> Back to All Exams</Link></div></div>
      <section className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-10"><div className="flex items-start gap-5"><I8 src={i8.syllabus} alt="Syllabus" size={48} /><div>
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: accent, backgroundColor: isDark ? 'rgba(69,39,160,0.1)' : '#EDE7F6' }}>Syllabus Hub</span>
        <h1 className="text-2xl md:text-3xl font-extrabold mt-2">Complete Exam Syllabus</h1>
        <p className={`text-[13px] ${cl.sub} mt-2 max-w-xl leading-relaxed`}>Detailed Prelims & Mains syllabus for all major government exams. Official sources linked.</p>
      </div></div></div></section>

      <main className="max-w-[1280px] mx-auto px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {syllabusHub.map((s, i) => (
            <div key={i} className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
              <div className="p-5 border-b flex items-center justify-between" style={{ borderBottomColor: isDark ? '#30363d' : '#e2e8f0' }}>
                <div className="flex items-center gap-3"><I8 src={i8.syllabus} alt="" size={24} /><h3 className="text-[14px] font-bold">{s.exam}</h3></div>
                {s.link !== '#' && <a href={s.link} target="_blank" rel="noopener noreferrer" className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub} hover:text-purple-600 flex items-center gap-1`}>Official <I8 src={i8.external} alt="" size={10} /></a>}
              </div>
              <div className="p-5 space-y-4">
                <div><h4 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>Prelims / Phase I</h4>
                  <ul className="space-y-1.5">{s.prelims.map((p, j) => (<li key={j} className={`text-[12px] ${cl.sub} flex items-start gap-2`}><I8 src={i8.check} alt="" size={13} /> {p}</li>))}</ul>
                </div>
                <div><h4 className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>Mains / Phase II</h4>
                  <ul className="space-y-1.5">{s.mains.map((m, j) => (<li key={j} className={`text-[12px] ${cl.sub} flex items-start gap-2`}><I8 src={i8.check} alt="" size={13} /> {m}</li>))}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default SyllabusPage;
