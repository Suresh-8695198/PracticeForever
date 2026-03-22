export const upscNotifications = [
  {
    id: 'notif-1',
    title: "Civil Services (Preliminary) Examination, 2025 Notification",
    date: "Feb 12, 2025",
    status: "Active",
    link: "https://upsc.gov.in/whats-new"
  },
  {
    id: 'notif-2',
    title: "CMS Exam 2024 Interview Schedule",
    date: "March 15, 2026",
    status: "Interview",
    link: "https://upsc.gov.in/whats-new"
  },
  {
    id: 'notif-3',
    title: "IES/ISS Exam 2025 - Detailed Application Form",
    date: "March 10, 2026",
    status: "Active",
    link: "https://upsc.gov.in/whats-new"
  },
  {
    id: 'notif-4',
    title: "Engineering Services (Preliminary) 2025 Results",
    date: "March 5, 2026",
    status: "Released",
    link: "https://upsc.gov.in/whats-new"
  }
];

export const upscPreviousPapers = [
  {
    year: "2024",
    icon: "archive",
    exams: [
      {
        title: "Civil Services (Prelims) - GS Paper I",
        link: "https://upsc.gov.in/sites/default/files/CSP-24-GS-P1.pdf",
        icon: "pdf"
      },
      {
        title: "Civil Services (Prelims) - CSAT Paper II",
        link: "https://upsc.gov.in/sites/default/files/CSP-24-CSAT-P2.pdf",
        icon: "pdf"
      },
      {
        title: "CSE Mains 2024 - Essay Paper",
        link: "https://upsc.gov.in/sites/default/files/CSM24-Essay.pdf",
        icon: "pdf"
      }
    ]
  },
  {
    year: "2023",
    icon: "archive",
    exams: [
      {
        title: "Civil Services (Prelims) GS Paper I",
        link: "https://upsc.gov.in/sites/default/files/QP-CSP-23-GS-I-290523.pdf",
        icon: "pdf"
      },
      {
        title: "Civil Services (Prelims) CSAT Paper II",
        link: "https://upsc.gov.in/sites/default/files/QP-CSP-23-CSAT-II-290523.pdf",
        icon: "pdf"
      }
    ]
  }
];

export const upscSyllabus = {
  "Preliminary Examination": {
    pdfLink: "https://upsc.gov.in/examinations/revised-syllabus-scheme",
    items: [
      {
        subject: "General Studies Paper I",
        content: "Current events, History of India, Geography, Polity and Governance, Economic and Social Development, General Science.",
        icon: "globe"
      },
      {
        subject: "CSAT Paper II (Qualifying)",
        content: "Comprehension, Interpersonal skills, Logical reasoning, Decision making, General mental ability, Math (Class X level).",
        icon: "brain"
      }
    ]
  },
  "Main Examination": {
    pdfLink: "https://upsc.gov.in/examinations/revised-syllabus-scheme",
    items: [
      {
        subject: "GS Paper I (Heritage & Geography)",
        content: "Indian Heritage and Culture, History and Geography of the World and Society.",
        icon: "landmark"
      },
      {
        subject: "GS Paper II (Polity & Governance)",
        content: "Governance, Constitution, Polity, Social Justice and International relations.",
        icon: "scale"
      },
      {
        subject: "GS Paper III (Economy & Env)",
        content: "Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management.",
        icon: "trending-up"
      },
      {
        subject: "GS Paper IV (Ethics & Integrity)",
        content: "Ethics, Integrity and Aptitude. Case studies on various moral and ethical dilemmas.",
        icon: "shield-check"
      }
    ]
  }
};

export const upscCareers = [
  {
    id: 'ias',
    title: "Indian Administrative Service (IAS)",
    icon: "briefcase",
    description: "The premier civil service of India, responsible for implementing government policies.",
    entry: "Civil Services Exam (CSE)",
    link: "https://www.upsc.gov.in/"
  },
  {
    id: 'ips',
    title: "Indian Police Service (IPS)",
    icon: "shield",
    description: "Responsible for internal security, public order, and law enforcement in India.",
    entry: "Civil Services Exam (CSE)",
    link: "https://www.upsc.gov.in/"
  },
  {
    id: 'ifs',
    title: "Indian Foreign Service (IFS)",
    icon: "award",
    description: "Diplomatic service of India, representing the country in international forums.",
    entry: "Civil Services Exam (CSE)",
    link: "https://www.upsc.gov.in/"
  }
];

export const upscResources = [
  {
    category: "Essential NCERTs",
    items: [
      { title: "History (Standard 6-12)", link: "https://ncert.nic.in/textbook.php", icon: "book" },
      { title: "Polity (Standard 9-12)", link: "https://ncert.nic.in/textbook.php", icon: "book" },
      { title: "Geography (Standard 6-12)", link: "https://ncert.nic.in/textbook.php", icon: "book" }
    ]
  },
  {
    category: "Standard Reference Books",
    items: [
      { title: "Indian Polity - M. Laxmikanth", link: "#", icon: "feather" },
      { title: "Modern History - Spectrum", link: "#", icon: "pen-tool" },
      { title: "Economy - Ramesh Singh", link: "#", icon: "dollar-sign" }
    ]
  }
];
