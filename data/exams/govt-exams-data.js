// ═══════════════════════════════════════════════════
// Government Exams Comprehensive Data Hub
// All exam modules with real, SEO-friendly content
// ═══════════════════════════════════════════════════

// ─── SSC DATA ───────────────────────────────────────
export const sscData = {
  title: "Staff Selection Commission",
  shortTitle: "SSC",
  tagline: "Gateway to Central Government Services",
  officialSite: "https://ssc.gov.in",
  color: "#1565C0",
  colorLight: "#E3F2FD",
  heroDesc: "India's largest recruitment body for Group B & C posts in Central Ministries, Departments, and Organizations. SSC conducts CGL, CHSL, MTS, GD, CPO, Stenographer, and JE examinations annually.",
  stats: {
    vacancies: "67,000+",
    candidates: "3.5 Cr+",
    examsPerYear: "8+",
    avgSalary: "₹25,500 - ₹1,51,100",
    ageLimit: "18-32 years",
    qualification: "10th / 12th / Graduate"
  },
  exams: [
    {
      id: "cgl",
      name: "SSC CGL 2026",
      fullName: "Combined Graduate Level Examination",
      eligibility: "Graduate from recognized university",
      ageLimit: "18-32 years",
      posts: "Income Tax Inspector, Auditor, Accountant, SI (CBI), Inspector (Customs/Preventive Officer)",
      salary: "₹44,900 - ₹1,42,400",
      stages: "Tier I (Computer Based) → Tier II (Computer Based) → Tier III (Descriptive) → Skill Test",
      link: "https://ssc.gov.in/portal/CGL"
    },
    {
      id: "chsl",
      name: "SSC CHSL 2026",
      fullName: "Combined Higher Secondary Level",
      eligibility: "12th Pass from recognized board",
      ageLimit: "18-27 years",
      posts: "LDC, Junior Secretariat Assistant, Postal Assistant, Data Entry Operator",
      salary: "₹25,500 - ₹81,100",
      stages: "Tier I (Computer Based) → Tier II (Descriptive + Skill Test)",
      link: "https://ssc.gov.in/portal/CHSL"
    },
    {
      id: "mts",
      name: "SSC MTS 2026",
      fullName: "Multi Tasking Staff",
      eligibility: "10th Pass",
      ageLimit: "18-25 years",
      posts: "Peon, Daftary, Jamadar, Junior Gestetner Operator, Chowkidar, Safaiwala",
      salary: "₹18,000 - ₹56,900",
      stages: "Paper I (Computer Based) → Paper II (Descriptive)",
      link: "https://ssc.gov.in/portal/MTS"
    },
    {
      id: "gd",
      name: "SSC GD 2026",
      fullName: "General Duty Constable",
      eligibility: "10th Pass",
      ageLimit: "18-23 years",
      posts: "BSF, CISF, CRPF, SSB, ITBP, NIA, SSF Constable",
      salary: "₹21,700 - ₹69,100",
      stages: "CBE → Physical Efficiency Test → Physical Standard Test → Medical",
      link: "https://ssc.gov.in/portal/GDConstable"
    }
  ],
  syllabus: {
    "Tier I": [
      "General Intelligence & Reasoning (25 questions)",
      "General Awareness (25 questions)",
      "Quantitative Aptitude (25 questions)",
      "English Comprehension (25 questions)"
    ],
    "Tier II": [
      "Quantitative Abilities (Paper I - 100 questions)",
      "English Language & Comprehension (Paper II - 200 questions)",
      "Statistics (Paper III - 100 questions)",
      "General Studies - Finance & Economics (Paper IV - 100 questions)"
    ]
  },
  notifications: [
    { title: "SSC CGL 2026 Notification Released", date: "Mar 15, 2026", status: "Active", link: "https://ssc.gov.in" },
    { title: "SSC CHSL 2026 Apply Online", date: "Mar 10, 2026", status: "Active", link: "https://ssc.gov.in" },
    { title: "SSC MTS 2025 Final Result Declared", date: "Feb 28, 2026", status: "Result", link: "https://ssc.gov.in" },
    { title: "SSC GD Constable 2026 - Physical Test Schedule", date: "Mar 20, 2026", status: "Upcoming", link: "https://ssc.gov.in" }
  ],
  pyq: [
    { year: "2024", papers: [
      { title: "SSC CGL Tier-I 2024 (All Shifts)", link: "https://ssc.gov.in", type: "pdf" },
      { title: "SSC CHSL Tier-I 2024", link: "https://ssc.gov.in", type: "pdf" },
      { title: "SSC MTS 2024 Paper-I", link: "https://ssc.gov.in", type: "pdf" }
    ]},
    { year: "2023", papers: [
      { title: "SSC CGL Tier-I 2023 (All Shifts)", link: "https://ssc.gov.in", type: "pdf" },
      { title: "SSC CGL Tier-II 2023", link: "https://ssc.gov.in", type: "pdf" },
      { title: "SSC CHSL 2023 All Papers", link: "https://ssc.gov.in", type: "pdf" }
    ]}
  ],
  importantBooks: [
    "Lucent's General Knowledge",
    "Kiran's SSC Mathematics",
    "Neetu Singh - English for SSC",
    "Rakesh Yadav - Advance Maths"
  ]
};

// ─── BANKING DATA ────────────────────────────────────
export const bankingData = {
  title: "Banking Examinations",
  shortTitle: "Banking",
  tagline: "Your Path to Indian Banking Sector",
  officialSite: "https://ibps.in",
  color: "#00695C",
  colorLight: "#E0F2F1",
  heroDesc: "IBPS and SBI conduct recruitment for Probationary Officers, Clerks, and Specialist Officers across nationalized banks, Regional Rural Banks, and the Reserve Bank of India.",
  stats: {
    vacancies: "45,000+",
    candidates: "2.8 Cr+",
    examsPerYear: "6+",
    avgSalary: "₹36,000 - ₹1,80,000",
    ageLimit: "20-30 years",
    qualification: "Graduate (Any Discipline)"
  },
  exams: [
    {
      id: "ibps-po",
      name: "IBPS PO 2026",
      fullName: "Institute of Banking Personnel Selection - Probationary Officer",
      eligibility: "Graduate with minimum 60%",
      ageLimit: "20-30 years",
      posts: "Probationary Officer in 11 Nationalized Banks",
      salary: "₹52,000 - ₹1,45,000 (including DA & other allowances)",
      stages: "Prelims → Mains → Interview",
      link: "https://ibps.in"
    },
    {
      id: "sbi-po",
      name: "SBI PO 2026",
      fullName: "State Bank of India Probationary Officer",
      eligibility: "Graduate from recognized university",
      ageLimit: "21-30 years",
      posts: "Probationary Officer in SBI",
      salary: "₹63,000 - ₹1,80,000",
      stages: "Prelims → Mains → Interview → Group Exercise",
      link: "https://sbi.co.in/web/careers"
    },
    {
      id: "ibps-clerk",
      name: "IBPS Clerk 2026",
      fullName: "IBPS Clerical Cadre",
      eligibility: "Graduate from recognized university",
      ageLimit: "20-28 years",
      posts: "Clerk in 11 Nationalized Banks",
      salary: "₹26,000 - ₹75,000",
      stages: "Prelims → Mains → Provisional Allotment",
      link: "https://ibps.in"
    },
    {
      id: "rbi-grade-b",
      name: "RBI Grade B 2026",
      fullName: "Reserve Bank of India Grade B Officer",
      eligibility: "Master's degree OR Graduate with 60%",
      ageLimit: "21-30 years",
      posts: "Officers in Grade B (DR) - General / DEPR / DSIM",
      salary: "₹1,05,000 - ₹2,50,000 (CTC approx.)",
      stages: "Phase I → Phase II → Interview",
      link: "https://rbi.org.in"
    }
  ],
  syllabus: {
    "Prelims": [
      "English Language (30 questions - 30 marks)",
      "Quantitative Aptitude (35 questions - 35 marks)",
      "Reasoning Ability (35 questions - 35 marks)"
    ],
    "Mains": [
      "Reasoning & Computer Aptitude (45 questions - 60 marks)",
      "Data Analysis & Interpretation (35 questions - 60 marks)",
      "General / Economy / Banking Awareness (40 questions - 40 marks)",
      "English Language (35 questions - 40 marks)"
    ]
  },
  notifications: [
    { title: "IBPS PO XIV 2026 Notification Out", date: "Mar 18, 2026", status: "Active", link: "https://ibps.in" },
    { title: "SBI Clerk 2026 - Apply Online Started", date: "Mar 12, 2026", status: "Active", link: "https://sbi.co.in/web/careers" },
    { title: "RBI Grade B 2026 Notification", date: "Mar 5, 2026", status: "Active", link: "https://rbi.org.in" },
    { title: "IBPS RRB Clerk 2026 - Prelims Admit Card", date: "Feb 25, 2026", status: "Upcoming", link: "https://ibps.in" }
  ],
  pyq: [
    { year: "2024", papers: [
      { title: "IBPS PO Prelims 2024 (All Slots)", link: "https://ibps.in", type: "pdf" },
      { title: "SBI PO Mains 2024", link: "https://sbi.co.in", type: "pdf" },
      { title: "RBI Grade B Phase I 2024", link: "https://rbi.org.in", type: "pdf" }
    ]},
    { year: "2023", papers: [
      { title: "IBPS PO Prelims & Mains 2023", link: "https://ibps.in", type: "pdf" },
      { title: "SBI Clerk Prelims 2023", link: "https://sbi.co.in", type: "pdf" }
    ]}
  ],
  importantBooks: [
    "A Modern Approach to Verbal & Non-Verbal Reasoning - R.S. Aggarwal",
    "Quantitative Aptitude for Competitive Exams - R.S. Aggarwal",
    "Banking Awareness - Arihant Publications",
    "Word Power Made Easy - Norman Lewis"
  ]
};

// ─── RAILWAY DATA ────────────────────────────────────
export const railwayData = {
  title: "Railway Examinations",
  shortTitle: "Railways",
  tagline: "Indian Railways - The Lifeline of the Nation",
  officialSite: "https://indianrailways.gov.in",
  color: "#C62828",
  colorLight: "#FFEBEE",
  heroDesc: "Railway Recruitment Boards (RRBs) conduct nationwide examinations for recruitment to various posts including Loco Pilot, Technician, NTPC, Group D, and Junior Engineers across Indian Railways.",
  stats: {
    vacancies: "1,03,000+",
    candidates: "4.5 Cr+",
    examsPerYear: "5+",
    avgSalary: "₹21,700 - ₹1,12,400",
    ageLimit: "18-33 years",
    qualification: "10th / ITI / Diploma / Degree"
  },
  exams: [
    {
      id: "rrb-ntpc",
      name: "RRB NTPC 2026",
      fullName: "Non-Technical Popular Category",
      eligibility: "Graduate / 12th Pass (post-wise)",
      ageLimit: "18-33 years",
      posts: "Station Master, Goods Guard, Commercial Apprentice, Traffic Assistant, Accounts Clerk",
      salary: "₹25,500 - ₹81,100",
      stages: "CBT-1 → CBT-2 → Skill Test / Typing Test → Document Verification",
      link: "https://indianrailways.gov.in"
    },
    {
      id: "rrb-alp",
      name: "RRB ALP 2026",
      fullName: "Assistant Loco Pilot & Technician",
      eligibility: "10th + ITI or Diploma in Engineering",
      ageLimit: "18-28 years",
      posts: "Assistant Loco Pilot, Technician Grade III",
      salary: "₹25,500 - ₹81,100",
      stages: "CBT-1 → CBT-2 → Computer Based Aptitude Test → Document Verification",
      link: "https://indianrailways.gov.in"
    },
    {
      id: "rrb-je",
      name: "RRB JE 2026",
      fullName: "Junior Engineer",
      eligibility: "Diploma / Degree in relevant Engineering branch",
      ageLimit: "18-33 years",
      posts: "Junior Engineer (Civil, Mechanical, Electrical, Electronics, IT)",
      salary: "₹35,400 - ₹1,12,400",
      stages: "CBT-1 → CBT-2 → Document Verification & Medical",
      link: "https://indianrailways.gov.in"
    },
    {
      id: "rrb-group-d",
      name: "RRB Group D 2026",
      fullName: "Level 1 Posts (Group D)",
      eligibility: "10th Pass + ITI or equivalent",
      ageLimit: "18-33 years",
      posts: "Track Maintainer Grade IV, Helper, Assistant Points Man",
      salary: "₹18,000 - ₹56,900",
      stages: "CBT → Physical Efficiency Test → Document Verification & Medical",
      link: "https://indianrailways.gov.in"
    }
  ],
  syllabus: {
    "CBT Stage-1": [
      "Mathematics (30 questions)",
      "General Intelligence & Reasoning (30 questions)",
      "General Awareness (15 questions)",
      "General Science (25 questions)"
    ],
    "CBT Stage-2": [
      "General Awareness (50 questions)",
      "Mathematics (35 questions)",
      "General Intelligence & Reasoning (35 questions)",
      "General Science (30 questions)"
    ]
  },
  notifications: [
    { title: "RRB NTPC 2026 Notification - 35,277 Vacancies", date: "Mar 14, 2026", status: "Active", link: "https://indianrailways.gov.in" },
    { title: "RRB ALP & Technician 2026 - Apply Online", date: "Mar 8, 2026", status: "Active", link: "https://indianrailways.gov.in" },
    { title: "RRB Group D 2025 PET Admit Card", date: "Feb 20, 2026", status: "Released", link: "https://indianrailways.gov.in" },
    { title: "RRB JE 2026 Revised Vacancy List", date: "Mar 1, 2026", status: "Update", link: "https://indianrailways.gov.in" }
  ],
  pyq: [
    { year: "2024", papers: [
      { title: "RRB NTPC CBT-1 2024 (All Phases)", link: "#", type: "pdf" },
      { title: "RRB Group D 2024 (All Shifts)", link: "#", type: "pdf" },
      { title: "RRB ALP & Technician CBT-1 2024", link: "#", type: "pdf" }
    ]},
    { year: "2023", papers: [
      { title: "RRB NTPC CBT-2 2023", link: "#", type: "pdf" },
      { title: "RRB JE CBT-1 & CBT-2 2023", link: "#", type: "pdf" }
    ]}
  ],
  importantBooks: [
    "Lucent's General Knowledge",
    "RRB NTPC Guide by Disha Experts",
    "General Science for Railway Exams - Kiran",
    "Fast Track Objective Arithmetic - Rajesh Verma"
  ]
};

// ─── POLICE DATA ─────────────────────────────────────
export const policeData = {
  title: "Police Examinations",
  shortTitle: "Police",
  tagline: "Serve & Protect — Join India's Police Forces",
  officialSite: "https://recruitment.ssc.gov.in",
  color: "#37474F",
  colorLight: "#ECEFF1",
  heroDesc: "Central and State Police recruitment for Constable, Sub-Inspector, and higher posts through SSC CPO, State Police Commissions, CAPF, and dedicated recruitment boards.",
  stats: {
    vacancies: "82,000+",
    candidates: "3.2 Cr+",
    examsPerYear: "10+",
    avgSalary: "₹21,700 - ₹1,32,000",
    ageLimit: "18-28 years",
    qualification: "10th / 12th / Graduate"
  },
  exams: [
    {
      id: "ssc-cpo",
      name: "SSC CPO 2026",
      fullName: "Central Police Organisation - Sub Inspector",
      eligibility: "Graduate from recognized university",
      ageLimit: "20-25 years",
      posts: "Sub Inspector in Delhi Police, CAPF (BSF, CISF, CRPF, ITBP, SSB)",
      salary: "₹35,400 - ₹1,12,400",
      stages: "Paper I → Paper II → Physical Standard Test → Physical Endurance Test → Medical",
      link: "https://ssc.gov.in"
    },
    {
      id: "capf-ac",
      name: "CAPF AC 2026",
      fullName: "Central Armed Police Forces - Assistant Commandant",
      eligibility: "Bachelor's degree from recognized university",
      ageLimit: "20-25 years",
      posts: "Assistant Commandant in BSF, CRPF, CISF, ITBP, SSB",
      salary: "₹56,100 - ₹1,77,500",
      stages: "Paper I → Paper II → Physical & Medical → Interview",
      link: "https://upsc.gov.in"
    },
    {
      id: "delhi-police-constable",
      name: "Delhi Police Constable 2026",
      fullName: "Delhi Police Constable (Executive)",
      eligibility: "12th Pass from recognized board",
      ageLimit: "18-25 years",
      posts: "Constable (Executive) in Delhi Police",
      salary: "₹21,700 - ₹69,100",
      stages: "CBT → Physical Endurance & Measurement Test → Medical",
      link: "https://delhipolice.gov.in"
    },
    {
      id: "state-si",
      name: "State SI Recruitment",
      fullName: "State Sub-Inspector Recruitment (Various States)",
      eligibility: "Graduate (varies by state)",
      ageLimit: "21-28 years (varies)",
      posts: "Sub Inspector of Police in respective state police forces",
      salary: "₹35,400 - ₹1,12,400 (7th CPC)",
      stages: "Written Test → Physical Test → Interview → Document Verification",
      link: "#"
    }
  ],
  syllabus: {
    "Paper I (SSC CPO)": [
      "General Intelligence & Reasoning (50 questions - 50 marks)",
      "General Knowledge & Awareness (50 questions - 50 marks)",
      "Quantitative Aptitude (50 questions - 50 marks)",
      "English Comprehension (50 questions - 50 marks)"
    ],
    "Physical Standards": [
      "Male: 170 cm height, 80 cm chest (5 cm expansion)",
      "Female: 157 cm height",
      "1600m race in 6.5 min (Male), 1000m in 4 min (Female)",
      "Long Jump: 3.56m (Male), 2.70m (Female)"
    ]
  },
  notifications: [
    { title: "SSC CPO 2026 - SI in Delhi Police & CAPF", date: "Mar 16, 2026", status: "Active", link: "https://ssc.gov.in" },
    { title: "UPSC CAPF AC 2026 Notification", date: "Mar 10, 2026", status: "Active", link: "https://upsc.gov.in" },
    { title: "Delhi Police Constable 2026 - 6,000 Vacancies", date: "Feb 28, 2026", status: "Active", link: "https://delhipolice.gov.in" },
    { title: "UP Police SI 2026 - Application Started", date: "Mar 1, 2026", status: "Active", link: "#" }
  ],
  pyq: [
    { year: "2024", papers: [
      { title: "SSC CPO Paper-I 2024 (All Shifts)", link: "#", type: "pdf" },
      { title: "Delhi Police Constable 2024 CBT", link: "#", type: "pdf" },
      { title: "CAPF AC 2024 Paper I & II", link: "#", type: "pdf" }
    ]},
    { year: "2023", papers: [
      { title: "SSC CPO 2023 Paper-I & Paper-II", link: "#", type: "pdf" },
      { title: "CAPF AC 2023 All Papers", link: "#", type: "pdf" }
    ]}
  ],
  importantBooks: [
    "Kiran's SSC CPO Guide",
    "BSF / CISF / CRPF - Arihant",
    "Physical Fitness for Police - Standard Guide",
    "General Knowledge Manual - Pearson"
  ]
};

// ─── STATE PSC DATA ──────────────────────────────────
export const statePscData = {
  title: "State Public Service Commissions",
  shortTitle: "State PSC",
  tagline: "State Civil Services — Serve Your State",
  officialSite: "#",
  color: "#6A1B9A",
  colorLight: "#F3E5F5",
  heroDesc: "Each Indian state has its own Public Service Commission that recruits officers for state-level Group A, B, and C services. Includes UPPSC, MPPSC, BPSC, RPSC, KPSC, WBPSC, and more.",
  stats: {
    totalCommissions: "28+",
    vacancies: "1,20,000+",
    examsPerYear: "50+",
    avgSalary: "₹25,500 - ₹2,09,200",
    qualification: "Graduate / Post Graduate"
  },
  commissions: [
    { id: "uppsc", name: "UPPSC", state: "Uttar Pradesh", site: "https://uppsc.up.nic.in", color: "#4CAF50" },
    { id: "mppsc", name: "MPPSC", state: "Madhya Pradesh", site: "https://mppsc.mp.gov.in", color: "#FF9800" },
    { id: "bpsc", name: "BPSC", state: "Bihar", site: "https://bpsc.bih.nic.in", color: "#E91E63" },
    { id: "rpsc", name: "RPSC", state: "Rajasthan", site: "https://rpsc.rajasthan.gov.in", color: "#009688" },
    { id: "kpsc", name: "KPSC", state: "Karnataka", site: "https://kpsc.kar.nic.in", color: "#795548" },
    { id: "wbpsc", name: "WBPSC", state: "West Bengal", site: "https://wbpsc.gov.in", color: "#3F51B5" },
    { id: "gpsc", name: "GPSC", state: "Gujarat", site: "https://gpsc.gujarat.gov.in", color: "#FF5722" },
    { id: "appsc", name: "APPSC", state: "Andhra Pradesh", site: "https://psc.ap.gov.in", color: "#607D8B" },
    { id: "tspsc", name: "TSPSC", state: "Telangana", site: "https://tspsc.gov.in", color: "#F44336" },
    { id: "hpsc", name: "HPSC", state: "Haryana", site: "https://hpsc.gov.in", color: "#00BCD4" },
    { id: "jpsc", name: "JPSC", state: "Jharkhand", site: "https://jpsc.gov.in", color: "#4DB6AC" },
    { id: "opsc", name: "OPSC", state: "Odisha", site: "https://opsc.gov.in", color: "#8BC34A" }
  ],
  notifications: [
    { title: "UPPSC PCS 2026 Prelims Notification", date: "Mar 15, 2026", status: "Active", link: "https://uppsc.up.nic.in" },
    { title: "BPSC 70th CCE Result Declared", date: "Mar 10, 2026", status: "Result", link: "https://bpsc.bih.nic.in" },
    { title: "MPPSC State Service Exam 2026", date: "Mar 8, 2026", status: "Active", link: "https://mppsc.mp.gov.in" },
    { title: "RPSC RAS Prelims 2026 - Date Announced", date: "Feb 25, 2026", status: "Upcoming", link: "https://rpsc.rajasthan.gov.in" },
    { title: "KPSC KAS 2026 - Notification Expected", date: "Mar 20, 2026", status: "Upcoming", link: "https://kpsc.kar.nic.in" }
  ],
  commonSyllabus: [
    "Indian History & Culture",
    "Indian & World Geography",
    "Indian Polity & Constitution",
    "Economy & Economic Development",
    "General Science & Technology",
    "Current Affairs (National & International)",
    "State-Specific Geography, History & Culture",
    "Environmental Ecology & Biodiversity"
  ],
  importantBooks: [
    "Laxmikanth - Indian Polity",
    "Spectrum - Modern Indian History",
    "Mrunal Patel - Economy Notes",
    "State Board Textbooks for State GK"
  ]
};

// ─── EXAM NOTIFICATIONS FEED ────────────────────────
export const latestNotifications = [
  {
    id: "n1",
    title: "UPSC CSE 2026 Notification - 1,000+ Vacancies",
    org: "UPSC",
    date: "Mar 19, 2026",
    status: "Active",
    link: "https://upsc.gov.in",
    category: "Central",
    color: "#FF9933"
  },
  {
    id: "n2",
    title: "SSC CGL 2026 - Online Application Open",
    org: "SSC",
    date: "Mar 15, 2026",
    status: "Active",
    link: "https://ssc.gov.in",
    category: "Central",
    color: "#1565C0"
  },
  {
    id: "n3",
    title: "IBPS PO XIV 2026 - Recruitment Started",
    org: "IBPS",
    date: "Mar 18, 2026",
    status: "Active",
    link: "https://ibps.in",
    category: "Banking",
    color: "#00695C"
  },
  {
    id: "n4",
    title: "RRB NTPC 2026 - 35,277 Posts Announced",
    org: "RRB",
    date: "Mar 14, 2026",
    status: "Active",
    link: "https://indianrailways.gov.in",
    category: "Railway",
    color: "#C62828"
  },
  {
    id: "n5",
    title: "TNPSC Group 2 2026 Preliminary Exam",
    org: "TNPSC",
    date: "Mar 12, 2026",
    status: "Upcoming",
    link: "https://tnpsc.gov.in",
    category: "State",
    color: "#065f46"
  },
  {
    id: "n6",
    title: "UPPSC PCS 2026 - 800+ Vacancies",
    org: "UPPSC",
    date: "Mar 15, 2026",
    status: "Active",
    link: "https://uppsc.up.nic.in",
    category: "State",
    color: "#6A1B9A"
  },
  {
    id: "n7",
    title: "SSC CPO 2026 - SI Delhi Police & CAPF",
    org: "SSC",
    date: "Mar 16, 2026",
    status: "Active",
    link: "https://ssc.gov.in",
    category: "Police",
    color: "#37474F"
  },
  {
    id: "n8",
    title: "SBI Clerk 2026 - 12,000+ Vacancies Expected",
    org: "SBI",
    date: "Mar 20, 2026",
    status: "Upcoming",
    link: "https://sbi.co.in",
    category: "Banking",
    color: "#00695C"
  }
];

// ─── EXAM SYLLABUS HUB ─────────────────────────────
export const syllabusHub = [
  {
    exam: "UPSC CSE",
    icon: "landmark",
    color: "#FF9933",
    prelims: ["General Studies I (History, Geography, Polity, Economy, Science)", "CSAT (Comprehension, Reasoning, Maths)"],
    mains: ["Essay", "GS-I: Heritage & Geography", "GS-II: Polity & Governance", "GS-III: Economy, Tech & Env", "GS-IV: Ethics", "Optional Subject (2 papers)"],
    link: "https://upsc.gov.in"
  },
  {
    exam: "SSC CGL",
    icon: "building",
    color: "#1565C0",
    prelims: ["General Intelligence & Reasoning", "General Awareness", "Quantitative Aptitude", "English Comprehension"],
    mains: ["Quantitative Abilities", "English Language", "Statistics (for select posts)", "Finance & Economics (for select posts)"],
    link: "https://ssc.gov.in"
  },
  {
    exam: "IBPS PO",
    icon: "bank",
    color: "#00695C",
    prelims: ["English Language (30)", "Quantitative Aptitude (35)", "Reasoning Ability (35)"],
    mains: ["Reasoning & Computer Aptitude", "Data Analysis & Interpretation", "General/Banking Awareness", "English Language"],
    link: "https://ibps.in"
  },
  {
    exam: "RRB NTPC",
    icon: "train",
    color: "#C62828",
    prelims: ["Mathematics (30)", "General Intelligence & Reasoning (30)", "General Awareness (15)", "General Science (25)"],
    mains: ["Same subjects with higher difficulty - 120 questions in 90 min"],
    link: "https://indianrailways.gov.in"
  },
  {
    exam: "SSC CPO",
    icon: "shield",
    color: "#37474F",
    prelims: ["General Intelligence & Reasoning (50)", "General Knowledge & GS (50)", "Quantitative Aptitude (50)", "English Comprehension (50)"],
    mains: ["English Language & Comprehension (200 questions - 200 marks)"],
    link: "https://ssc.gov.in"
  },
  {
    exam: "State PSC",
    icon: "flag",
    color: "#6A1B9A",
    prelims: ["General Studies (History, Geography, Polity, Economy)", "CSAT / Aptitude (varies by state)"],
    mains: ["General Studies Papers (3-4)", "Optional Subject", "Essay (some states)", "State-specific content"],
    link: "#"
  }
];

// ─── PREVIOUS YEAR QUESTION PAPERS HUB ──────────────
export const pyqHub = [
  {
    exam: "UPSC CSE",
    color: "#FF9933",
    years: [
      { year: "2024", papers: ["Prelims GS Paper-I", "Prelims CSAT Paper-II", "Mains Essay"] },
      { year: "2023", papers: ["Prelims GS Paper-I", "Prelims CSAT Paper-II", "Mains GS-I", "Mains GS-II"] },
      { year: "2022", papers: ["Prelims GS Paper-I", "Prelims CSAT Paper-II"] }
    ]
  },
  {
    exam: "SSC CGL",
    color: "#1565C0",
    years: [
      { year: "2024", papers: ["Tier-I (All Shifts)", "Tier-II Mathematics", "Tier-II English"] },
      { year: "2023", papers: ["Tier-I (All Shifts)", "Tier-II (All Papers)"] }
    ]
  },
  {
    exam: "IBPS PO",
    color: "#00695C",
    years: [
      { year: "2024", papers: ["Prelims (All Slots)", "Mains (All Sections)"] },
      { year: "2023", papers: ["Prelims (All Slots)", "Mains (All Sections)"] }
    ]
  },
  {
    exam: "RRB NTPC",
    color: "#C62828",
    years: [
      { year: "2024", papers: ["CBT-1 Phase I-V", "CBT-2 (Level 2,3,4,5,6)"] },
      { year: "2023", papers: ["CBT-1 All Phases", "CBT-2 All Levels"] }
    ]
  },
  {
    exam: "SSC CPO",
    color: "#37474F",
    years: [
      { year: "2024", papers: ["Paper-I (All Shifts)"] },
      { year: "2023", papers: ["Paper-I (All Shifts)", "Paper-II English"] }
    ]
  },
  {
    exam: "TNPSC",
    color: "#065f46",
    years: [
      { year: "2024", papers: ["Group-II Prelims", "Group-IV General Knowledge"] },
      { year: "2023", papers: ["Group-I Prelims", "Group-II & IIA"] }
    ]
  }
];

// ─── DAILY STUDY TIPS ────────────────────────────────
export const dailyStudyTips = [
  {
    title: "Revision Schedule",
    tip: "Follow the 1-7-30 revision technique: Revise new topics after 1 day, then 7 days, then 30 days for long-term memory retention.",
    icon: "calendar"
  },
  {
    title: "Previous Papers",
    tip: "Solve at least 5 years of PYQ before attempting any competitive exam. 30-40% questions are often repeated from previous patterns.",
    icon: "papers"
  },
  {
    title: "Current Affairs",
    tip: "Read one newspaper daily (The Hindu / Indian Express). Make short notes of 10 important news items for quick revision during exam time.",
    icon: "news"
  },
  {
    title: "Mock Tests",
    tip: "Attempt at least 2 full-length mock tests every week. Analyze mistakes and maintain an error log for each subject.",
    icon: "test"
  }
];

// ─── MOTIVATIONAL QUOTES ─────────────────────────────
export const motivationalQuotes = [
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" }
];
