import { Calculator, Target, FileCode, Users } from 'lucide-react';

export const companyContent = {
  tcs: {
    rounds: [
      { 
        id: 'nqt-foundation', name: 'Foundation Round', 
        description: 'TCS NQT Foundation Section (Mandatory for all)',
        iconImage: 'https://img.icons8.com/arcade/64/math-folder.png',
        tabColor: '#3b82f6',
        icon: Calculator,
        sections: [
          {
            category: "Numerical Ability",
            icon: "https://img.icons8.com/3d-fluency/96/calculator.png",
            color: "#3b82f6",
            bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            topics: ["Number System", "H.C.F. & L.C.M. of Numbers", "Decimal Fractions", "Simplification", "Square Roots & Cube Roots", "Percentage", "Average", "Ratio & Proportion", "Partnership", "Time & Work", "Pipes & Cistern", "Time & Distance", "Problems on Trains", "Boats & Streams", "Alligation or Mixture", "Simple Interest", "Compound Interest", "Area", "Volume & Surface Areas", "Calendar", "Clocks", "Stocks & Shares", "Permutations & Combination", "Probability", "Odd Man Out & Series"]
          },
          {
            category: "Verbal Ability",
            icon: "https://img.icons8.com/3d-fluency/94/brick.png",
            color: "#10b981",
            bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            topics: ["Reading Comprehension", "Sentence Correction", "Sentence Completion", "Synonyms & Antonyms", "Cloze Test", "Fill in the Blanks", "Error Spotting", "Prepositions & Conjunctions"]
          },
          {
            category: "Reasoning Ability",
            icon: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png",
            color: "#8b5cf6",
            bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
            topics: ["Number Series", "Blood Relations", "Coding-Decoding", "Syllogism", "Seating Arrangement", "Data Sufficiency", "Inferred Meaning", "Logical Sequence", "Visual Reasoning"]
          }
        ]
      },
      { 
        id: 'nqt-advanced', name: 'Advanced Round', 
        description: 'Advanced Quantitative & Reasoning for Digital/Prime roles',
        iconImage: 'https://img.icons8.com/3d-fluency/94/prize.png',
        tabColor: '#ef4444',
        icon: Target,
        sections: [
          {
            category: "Advanced Quantitative",
            icon: "https://img.icons8.com/3d-fluency/94/statistics.png",
            color: "#ef4444",
            bgGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
            topics: ["Probability (Advanced)", "Permutations & Combinations", "Algebra", "Geometry & Trigonometry", "Mensuration (Advanced)", "Elementary Statistics"]
          },
          {
            category: "Advanced Coding",
            icon: "https://img.icons8.com/3d-fluency/94/code.png",
            color: "#f59e0b",
            bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            topics: ["Array & String Manipulation", "Pattern Printing Logic", "Hands-on Coding Questions", "Complexity Analysis", "Google DSA PYQs"]
          }
        ]
      },
      { 
        id: 'technical', name: 'Technical Round', 
        description: 'TR Interview Preparation - TR & MR Questions',
        iconImage: 'https://img.icons8.com/3d-fluency/94/source-code.png',
        tabColor: '#8b5cf6',
        icon: FileCode,
        sections: [
          {
            category: "CS Fundamentals",
            icon: "https://img.icons8.com/3d-fluency/94/database.png",
            color: "#06b6d4",
            bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
            topics: ["Operating Systems", "Computer Networks", "DBMS & SQL", "CS Fundamentals MCQs", "Cybersecurity Basics"]
          },
          {
            category: "Programming Theory",
            icon: "https://img.icons8.com/3d-fluency/94/command-line.png",
            color: "#6366f1",
            bgGradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
            topics: ["C / C++ Basics", "Java OOPS Concepts", "Python Fundamentals", "Data Structures Theory"]
          }
        ]
      },
      { 
        id: 'hr', name: 'HR Interview', 
        description: 'Behavioral & Management Round Preparation',
        iconImage: 'https://img.icons8.com/3d-fluency/94/conference-call.png',
        tabColor: '#ec4899',
        icon: Users,
        sections: [
          {
            category: "HR Interview Prep",
            icon: "https://img.icons8.com/3d-fluency/94/group.png",
            color: "#ec4899",
            bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
            topics: ["Tell me about yourself", "Strengths & Weaknesses", "Why TCS?", "Situation Based Scenarios", "Resume Deep Dive", "Project Discussions", "Role Awareness"]
          }
        ]
      }
    ]
  },
  default: {
    rounds: [
      {
        id: 'general', name: 'Integrated Preparation',
        description: 'General Interview & Aptitude Preparation',
        icon: Target,
        sections: [
          { category: "Quantitative Aptitude", icon: "https://img.icons8.com/3d-fluency/96/calculator.png", color: "#3b82f6", bgGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", topics: ["Percentage", "Time & Work", "Ratio & Proportion", "Number System", "Probability", "Permutations & Combinations"] },
          { category: "Logical Reasoning", icon: "https://img.icons8.com/3d-fluency/94/brain-3--v1.png", color: "#8b5cf6", bgGradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", topics: ["Number Series", "Blood Relations", "Coding-Decoding", "Syllogism", "Seating Arrangement", "Data Sufficiency"] },
          { category: "Verbal Ability", icon: "https://img.icons8.com/3d-fluency/94/brick.png", color: "#10b981", bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", topics: ["Reading Comprehension", "Sentence Correction", "Synonyms & Antonyms", "Cloze Test", "Fill in the Blanks"] },
          { category: "Technical / Coding", icon: "https://img.icons8.com/3d-fluency/94/code.png", color: "#f59e0b", bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", topics: ["Pseudo Code", "C / C++ Basics", "Data Structures", "DBMS & SQL", "OOPS Concepts", "Hands-on Coding"] },
          { category: "HR Interview Prep", icon: "https://img.icons8.com/3d-fluency/94/group.png", color: "#ec4899", bgGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)", topics: ["Tell me about yourself", "Strengths & Weaknesses", "Why this company?", "Situation Based Scenarios", "Resume Deep Dive"] }
        ]
      }
    ]
  }
};
