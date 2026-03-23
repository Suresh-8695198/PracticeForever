import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { latestNotifications } from '../../data/exams/govt-exams-data';

const i8 = { bell: 'https://img.icons8.com/color/96/appointment-reminders.png', external: 'https://img.icons8.com/color/48/external-link.png' };
const I8 = ({ src, alt = '', size = 22 }) => <img src={src} alt={alt} width={size} height={size} className="inline-block" style={{ width: size, height: size }} />;

const StatusBadge = ({ status }) => {
  const styles = { Active: 'bg-emerald-50 text-emerald-700 border-emerald-200', Upcoming: 'bg-amber-50 text-amber-700 border-amber-200', Result: 'bg-blue-50 text-blue-700 border-blue-200', Released: 'bg-indigo-50 text-indigo-700 border-indigo-200', Update: 'bg-orange-50 text-orange-700 border-orange-200' };
  return <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${styles[status] || styles.Active}`}>{status}</span>;
};

const NotificationsPage = () => {
  const { isDark } = useTheme();
  const cl = { bg: isDark ? 'bg-[#0d1117]' : 'bg-[#f6f8fa]', surface: isDark ? 'bg-[#161b22]' : 'bg-white', border: isDark ? 'border-[#30363d]' : 'border-[#d0d7de]', text: isDark ? 'text-[#e6edf3]' : 'text-[#1f2328]', sub: isDark ? 'text-[#8b949e]' : 'text-[#656d76]' };
  const accent = '#E65100';

  return (
    <div className={`min-h-screen ${cl.bg} ${cl.text} pt-[72px]`} style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Head><title>Exam Notifications 2026 — SSC, IBPS, RRB, UPSC, State PSC Live Alerts</title><meta name="description" content="Live exam notifications from SSC, IBPS, RRB, UPSC, TNPSC and all State PSC portals. Stay updated with latest recruitment alerts." /></Head>
      <div className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-3"><Link href="/exams" className={`inline-flex items-center gap-2 text-[12px] font-bold ${cl.sub}`}><ArrowLeft size={14} /> Back to All Exams</Link></div></div>
      <section className={`border-b ${cl.border}`}><div className="max-w-[1280px] mx-auto px-5 py-10"><div className="flex items-start gap-5"><I8 src={i8.bell} alt="Notifications" size={48} /><div>
        <div className="flex items-center gap-3 mb-2"><span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded" style={{ color: accent, backgroundColor: isDark ? 'rgba(230,81,0,0.1)' : '#FFF3E0' }}>Live Feed</span>
          <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-bold text-emerald-600">Live</span></div>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold">Exam Notifications 2026</h1>
        <p className={`text-[13px] ${cl.sub} mt-2 max-w-xl leading-relaxed`}>Official exam notifications from all commissions. Updated daily from UPSC, SSC, IBPS, RRB, TNPSC & State PSC portals.</p>
      </div></div></div></section>

      <main className="max-w-[1280px] mx-auto px-5 py-8 space-y-6">
        <div className={`${cl.surface} border ${cl.border} rounded-lg overflow-hidden`}>
          <div className={`divide-y ${isDark ? 'divide-[#30363d]' : 'divide-slate-100'}`}>
            {latestNotifications.map(n => (
              <a key={n.id} href={n.link} target="_blank" rel="noopener noreferrer" className={`block p-5 transition-all group ${isDark ? 'hover:bg-[#21262d]' : 'hover:bg-slate-50'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <I8 src={i8.bell} alt="" size={24} />
                    <div>
                      <h4 className="text-[14px] font-bold mb-1.5 group-hover:text-orange-600 transition-colors">{n.title}</h4>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`text-[11px] font-medium ${cl.sub}`}>{n.date}</span>
                        <StatusBadge status={n.status} />
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border" style={{ color: n.color, borderColor: `${n.color}30` }}>{n.category}</span>
                      </div>
                    </div>
                  </div>
                  <I8 src={i8.external} alt="" size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
        <p className={`text-[11px] ${cl.sub} text-center`}>Sources: UPSC, SSC, IBPS, RRB, TNPSC & State PSC official portals. Updated daily.</p>
      </main>
    </div>
  );
};
export default NotificationsPage;
