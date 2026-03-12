import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

const footerLinks = [
  {
    heading: 'Government Exams',
    links: [
      { label: 'TNPSC Preparation',      path: '/exams/tnpsc' },
      { label: 'UPSC Civil Services',    path: '/exams/upsc' },
      { label: 'SSC CGL / CHSL',        path: '/exams/ssc' },
      { label: 'Banking Exams',          path: '/exams/banking' },
      { label: 'Railway RRB Exams',      path: '/exams/railway' },
      { label: 'Exam Notifications',     path: '/exams/notifications' },
    ],
  },
  {
    heading: 'Aptitude & Coding',
    links: [
      { label: 'Quantitative Aptitude',  path: '/aptitude/quantitative' },
      { label: 'Logical Reasoning',      path: '/aptitude/logical' },
      { label: 'Verbal Ability',         path: '/aptitude/verbal' },
      { label: 'Data Structures',        path: '/programming/data-structures' },
      { label: 'Python Programming',     path: '/programming/python' },
      { label: 'Java Programming',       path: '/programming/java' },
    ],
  },
  {
    heading: 'Preparation Resources',
    links: [
      { label: 'Mock Tests',             path: '/mock-tests' },
      { label: 'Daily Current Affairs',  path: '/current-affairs/daily' },
      { label: 'Study Notes & PDFs',     path: '/study-materials' },
      { label: 'Important Formulas',     path: '/study-materials/formulas' },
      { label: 'Previous Year Papers',   path: '/exams/pyq' },
      { label: 'Exam Syllabus',          path: '/exams/syllabus' },
    ],
  },
  {
    heading: 'Career & Jobs',
    links: [
      { label: 'Interview Questions',    path: '/interviews' },
      { label: 'HR Interview Guide',     path: '/interviews/hr' },
      { label: 'Government Jobs',        path: '/jobs/govt' },
      { label: 'IT Jobs for Freshers',   path: '/jobs/it' },
      { label: 'Walk-in Interviews',     path: '/jobs/walkin' },
      { label: 'Internship Openings',    path: '/jobs/internships' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Policy',       path: '/privacy' },
  { label: 'Terms of Use',         path: '/terms' },
  { label: 'Disclaimer',           path: '/disclaimer' },
  { label: 'Contact Us',           path: '/contact' },
  { label: 'Advertise',            path: '/advertise' },
];

export default function Footer() {
  const { isDark } = useTheme();

  const bg      = isDark ? 'bg-[#0a0a0a]'   : 'bg-[#f0f2f5]';
  const border  = isDark ? 'border-[#1e1e1e]': 'border-gray-200';
  const text    = isDark ? 'text-gray-300'   : 'text-gray-600';
  const heading = isDark ? 'text-white'      : 'text-gray-900';
  const muted   = isDark ? 'text-gray-600'   : 'text-gray-400';
  const linkBaseColor = isDark ? '#9ca3af' : '#6b7280';

  /* Animated yellow-underline link */
  const FooterLink = ({ to, label, small }) => (
    <Link
      href={to}
      style={{ textDecoration: 'none', display: 'inline-block', position: 'relative' }}
      onMouseEnter={e => {
        e.currentTarget.querySelector('[data-fl]').style.color = '#FFC107';
        e.currentTarget.querySelector('[data-fu]').style.transform = 'scaleX(1)';
        e.currentTarget.querySelector('[data-fu]').style.opacity = '1';
      }}
      onMouseLeave={e => {
        e.currentTarget.querySelector('[data-fl]').style.color = linkBaseColor;
        e.currentTarget.querySelector('[data-fu]').style.transform = 'scaleX(0)';
        e.currentTarget.querySelector('[data-fu]').style.opacity = '0';
      }}
    >
      <span data-fl style={{ fontSize: small ? 11.5 : 12.5, fontWeight: small ? 500 : 500, color: linkBaseColor, transition: 'color 0.17s ease' }}>
        {label}
      </span>
      <span data-fu style={{ position: 'absolute', left: 0, bottom: -2, width: '100%', height: 2, borderRadius: 2, background: '#FFC107', transform: 'scaleX(0)', opacity: 0, transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.17s ease', transformOrigin: 'left' }} />
    </Link>
  );

  return (
    <footer className={`relative overflow-hidden border-t ${border} ${bg}`} role="contentinfo">

      {/* ── Square grid background pattern ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="footer-sq-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <rect x="1" y="1" width="32" height="32" rx="5" fill="none"
              stroke={isDark ? 'rgba(255,255,255,0.045)' : 'rgba(0,0,0,0.048)'}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-sq-grid)" />
      </svg>

      {/* ── Main footer grid ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-0 mb-4">
              <img src="/logo.png" alt="PracticeForever Logo" className="h-9 w-auto object-contain" />
              <span
                className={`text-[15px] font-extrabold tracking-tight ${heading}`}
                style={{ fontFamily: "'Delius Swash Caps', cursive", fontWeight: 800, marginLeft: '-6px' }}
              >
                Practice<em style={{ fontStyle: 'normal', background:'linear-gradient(135deg,#FFC107 0%,#FF8C00 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Forever</em>
              </span>
            </Link>
            <p className={`text-[12.5px] leading-relaxed mb-5 ${text}`}>
              India's trusted career preparation platform for government exams, aptitude tests, coding interviews and daily current affairs.
            </p>
            {/* Exam coverage pills */}
            <div className="flex flex-wrap gap-1.5">
              {['TNPSC', 'UPSC', 'SSC', 'Banking', 'TCS', 'Infosys'].map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                    isDark
                      ? 'border-[#2a2a2a] text-gray-500'
                      : 'border-gray-300 text-gray-500'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p
                className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <FooterLink to={item.path} label={item.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats band ── */}
      <div className={`relative border-t border-b ${border} ${isDark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { num: '1M+',    lbl: 'Active Students' },
              { num: '8,100+', lbl: 'Practice Questions' },
              { num: '5M+',    lbl: 'Tests Taken' },
              { num: '10+',    lbl: 'Exam Categories' },
            ].map(({ num, lbl }, i) => (
              <div key={lbl} className={`px-6 py-5 text-center ${i !== 0 ? `border-l ${border}` : ''}`}>
                <p
                  className="text-lg font-extrabold"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    color: isDark ? '#FFC107' : '#1d4ed8',
                  }}
                >
                  {num}
                </p>
                <p className={`text-[11px] font-medium mt-0.5 ${muted}`}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={`relative ${isDark ? 'bg-[#080808]' : 'bg-[#e8eaed]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className={`text-[11.5px] ${muted}`}>
            &copy; {new Date().getFullYear()} PracticeForever. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {legalLinks.map((item, i) => (
              <span key={item.label} className="flex items-center gap-4">
                <FooterLink to={item.path} label={item.label} small />
                {i < legalLinks.length - 1 && (
                  <span className={`text-[11px] select-none ${muted}`}>&middot;</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}
