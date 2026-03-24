import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { bankingData } from '../../data/exams/govt-exams-data';

const i8 = {
  banking: 'https://img.icons8.com/color/96/bank-building.png',
  check: 'https://img.icons8.com/color/48/checkmark--v1.png',
  book: 'https://img.icons8.com/color/48/open-book--v1.png',
  doc: 'https://img.icons8.com/color/48/documents.png',
  salary: 'https://img.icons8.com/color/48/money-bag.png',
  calendar: 'https://img.icons8.com/color/48/planner.png',
  target: 'https://img.icons8.com/color/48/goal--v1.png',
};
const I8 = ({ src, alt = '', size = 22 }) => <img src={src} alt={alt} width={size} height={size} className="inline-block" style={{ width: size, height: size }} />;

import GoogleAd from '../../components/common/GoogleAd';

const BankingPage = () => {
  const { isDark } = useTheme();
  const cl = { bg: isDark ? 'bg-[#0d1117]' : 'bg-[#f6f8fa]', surface: isDark ? 'bg-[#161b22]' : 'bg-white', border: isDark ? 'border-[#30363d]' : 'border-[#d0d7de]', text: isDark ? 'text-[#e6edf3]' : 'text-[#1f2328]', sub: isDark ? 'text-[#8b949e]' : 'text-[#656d76]' };
  const accent = '#00695C';

  return (
    <div className={`min-h-screen ${cl.bg} ${cl.text} pt-[72px]`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Head>
        <title>Banking Exams 2026 — IBPS PO, SBI PO, Clerk, RBI | Preparation Guide</title>
        <meta name="description" content="Prepare for IBPS PO, SBI PO, IBPS Clerk, RBI Grade B exams. Eligibility, syllabus, salary, previous year papers and expert strategies." />
      </Head>
      <div className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-3"><Link href="/exams" className={`inline-flex items-center gap-2 text-[12px] font-bold ${cl.sub}`}><ArrowLeft size={14} /> Back to All Exams</Link></div></div>

      <section className={`border-b ${cl.border}`}>
        <div className="max-w-[1280px] mx-auto px-5 py-10">
          <div className="flex items-start gap-5">
            <I8 src={i8.banking} alt="Banking" size={48} />
            <div>
              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: accent, backgroundColor: isDark ? 'rgba(0,105,92,0.1)' : '#E0F2F1' }}>Banking Sector</span>
              <h1 className="text-2xl md:text-3xl font-extrabold mt-2">{bankingData.shortTitle}</h1>
              <p className={`text-[13px] ${cl.sub} mt-2 max-w-xl leading-relaxed`}>{bankingData.tagline}</p>
              <a href={bankingData.officialSite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold" style={{ color: accent }}>Official Website <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="max-w-[1280px] mx-auto px-5">
        <GoogleAd adSlot="YOUR_AD_SLOT_ID_HERE" />
      </div>

      <main className="max-w-[1280px] mx-auto px-5 py-8 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ label: 'Vacancies', value: bankingData.stats.vacancies, icon: i8.target }, { label: 'Exams/Year', value: bankingData.stats.examsPerYear, icon: i8.calendar }, { label: 'Age Limit', value: bankingData.stats.ageLimit, icon: i8.doc }, { label: 'Qualification', value: bankingData.stats.qualification, icon: i8.book }].map((s, i) => (
            <div key={i} className={`${cl.surface} border ${cl.border} rounded-lg p-4`}>
              <div className="flex items-center gap-2 mb-2"><I8 src={s.icon} alt="" size={18} /><span className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub}`}>{s.label}</span></div>
              <p className="text-[16px] font-extrabold" style={{ color: accent }}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
          <div className={`p-5 border-b ${cl.border}`}><h2 className="text-[15px] font-bold flex items-center gap-2"><I8 src={i8.doc} alt="" size={18} /> Banking Examinations</h2></div>
          <div className="divide-y" style={{ borderColor: isDark ? '#30363d' : '#e2e8f0' }}>
            {bankingData.exams.map((exam, i) => (
              <div key={i} className="p-5">
                <h3 className="text-[14px] font-bold mb-3">{exam.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[{ label: 'Eligibility', value: exam.eligibility }, { label: 'Age Limit', value: exam.ageLimit }, { label: 'Salary', value: exam.salary }].map((d, j) => (
                    <div key={j}><span className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub}`}>{d.label}</span><p className="text-[12px] font-medium mt-0.5">{d.value}</p></div>
                  ))}
                </div>
                <div className="mt-3"><span className={`text-[9px] font-bold uppercase tracking-widest ${cl.sub}`}>Stages</span>
                  <div className="flex flex-wrap gap-2 mt-1.5">{(typeof exam.stages === 'string' ? exam.stages.split(' → ') : exam.stages || []).map((s, k) => <span key={k} className="text-[10px] font-bold px-2.5 py-1 rounded border" style={{ color: accent, borderColor: `${accent}30`, backgroundColor: isDark ? 'rgba(0,105,92,0.06)' : '#E0F2F1' }}>{s}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${cl.surface} border ${cl.border} rounded-lg p-5`}>
          <h2 className="text-[15px] font-bold mb-4 flex items-center gap-2"><I8 src={i8.book} alt="" size={18} /> Recommended Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {bankingData.importantBooks.map((book, i) => (<div key={i} className={`flex items-center gap-2 py-1.5 text-[12px] ${cl.sub}`}><I8 src={i8.check} alt="" size={14} /> {book}</div>))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default BankingPage;
