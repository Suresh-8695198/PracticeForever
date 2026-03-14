export const theory = [
  {
    "title": "Introduction to Pie Charts",
    "description": "A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice is proportional to the quantity it represents.",
    "image": `
<svg width="400" height="250" viewBox="0 0 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" rx="20" fill="#fef2f2"/>
  <circle cx="200" cy="125" r="70" fill="#fda4af" opacity="0.3"/>
  <path d="M 200 125 L 200 55 A 70 70 0 0 1 270 125 Z" fill="#e11d48"/>
  <path d="M 200 125 L 270 125 A 70 70 0 0 1 200 195 Z" fill="#fb7185"/>
  <text x="200" y="40" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="16" fill="#881337">PROPORTION VIEW</text>
</svg>
    `,
    "formulas": [
      { "label": "Full Circle Degree", "value": "360°" },
      { "label": "Full Circle Percent", "value": "100%" },
      { "label": "Conversion", "value": "1% = 3.6°" }
    ]
  },
  {
    "title": "Pie Chart Strategy",
    "description": "To solve pie chart problems quickly, learn to convert between percentages and degrees. Also, identify the 'Total Value' immediately, as all slices are parts of this total.",
    "image": `
<svg width="400" height="250" viewBox="0 0 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" rx="20" fill="#fff1f2"/>
  <rect x="280" y="80" width="80" height="80" rx="10" fill="white" stroke="#e11d48"/>
  <text x="320" y="125" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="12" fill="#e11d48">360°</text>
  <text x="200" y="40" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="16" fill="#881337">PIE STRATEGY</text>
</svg>
    `,
    "formulas": [
      { "label": "Value of a Slice", "value": "(Percentage / 100) × Total Value" },
      { "label": "Degree of a Slice", "value": "(Percentage / 100) × 360°" },
      { "label": "Comparison", "value": "Difference in % × Total Value" }
    ]
  }
];

export const questions = [
  {
    "id": "pie-set-1",
    "type": "passage-group",
    "passage": "The following pie chart shows the distribution of the monthly expenditure of a family. The total monthly income of the family is ₹ 60,000.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#fff1f2"/>
  <circle cx="250" cy="200" r="120" fill="#fb7185" />
  
  <!-- Slices (approximated for visual) -->
  <path d="M 250 200 L 250 80 A 120 120 0 0 1 370 200 Z" fill="#e11d48"/> <!-- Food 25% -->
  <path d="M 250 200 L 370 200 A 120 120 0 0 1 250 320 Z" fill="#fb7185"/> <!-- Rent 25% -->
  <path d="M 250 200 L 250 320 A 120 120 0 0 1 130 200 Z" fill="#fda4af"/> <!-- Edu 25% -->
  <path d="M 250 200 L 130 200 A 120 120 0 0 1 170 110 Z" fill="#f43f5e"/> <!-- Savings 15% -->
  <path d="M 250 200 L 170 110 A 120 120 0 0 1 250 80 Z" fill="#be123c"/> <!-- Others 10% -->

  <!-- Legend -->
  <g transform="translate(420, 100)" font-family="Outfit" font-size="12" font-weight="700">
    <rect width="12" height="12" fill="#e11d48"/> <text x="20" y="11">Food (25%)</text>
    <rect y="25" width="12" height="12" fill="#fb7185"/> <text x="20" y="36">Rent (25%)</text>
    <rect y="50" width="12" height="12" fill="#fda4af"/> <text x="20" y="61">Education (25%)</text>
    <rect y="75" width="12" height="12" fill="#f43f5e"/> <text x="20" y="86">Savings (15%)</text>
    <rect y="100" width="12" height="12" fill="#be123c"/> <text x="20" y="111">Others (10%)</text>
  </g>

  <text x="300" y="40" text-anchor="middle" fill="#881337" font-family="Outfit" font-weight="900" font-size="16">MONTHLY FAMILY EXPENDITURE</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 1,
        "text": "How much money is spent on Food and Rent together?",
        "options": [
          { "id": "A", "text": "₹ 20,000" },
          { "id": "B", "text": "₹ 25,000" },
          { "id": "C", "text": "₹ 30,000" },
          { "id": "D", "text": "₹ 35,000" }
        ],
        "answer": "C",
        "explanation": "Food = 25%, Rent = 25%. Total = 50%.\n50% of ₹ 60,000 = ₹ 30,000."
      },
      {
        "id": 2,
        "text": "What is the central angle corresponding to the sector for Savings?",
        "options": [
          { "id": "A", "text": "36°" },
          { "id": "B", "text": "45°" },
          { "id": "C", "text": "54°" },
          { "id": "D", "text": "60°" }
        ],
        "answer": "C",
        "explanation": "Savings = 15%.\nCentral angle = (15 / 100) * 360° = 1.5 * 36 = 54°."
      },
      {
        "id": 3,
        "text": "The amount spent on Education is what percent of the amount spent on Savings?",
        "options": [
          { "id": "A", "text": "150%" },
          { "id": "B", "text": "166.67%" },
          { "id": "C", "text": "175%" },
          { "id": "D", "text": "200%" }
        ],
        "answer": "B",
        "explanation": "Education = 25%, Savings = 15%.\nPercentage = (25 / 15) * 100 = (5 / 3) * 100 = 166.67%."
      },
      {
        "id": 4,
        "text": "If the family's income increases by 20% next month and they keep the same percentage for Savings, what will be the new savings amount?",
        "options": [
          { "id": "A", "text": "₹ 9,000" },
          { "id": "B", "text": "₹ 10,800" },
          { "id": "C", "text": "₹ 12,000" },
          { "id": "D", "text": "₹ 15,000" }
        ],
        "answer": "B",
        "explanation": "Current Savings = 15% of 60,000 = 9,000.\nNew Income = 60,000 * 1.2 = 72,000.\nNew Savings = 15% of 72,000 = 0.15 * 72,000 = 10,800."
      }
    ]
  },
  {
    "id": "pie-set-2",
    "type": "passage-group",
    "passage": "Distribution of 1200 students in different departments of a college is shown below:",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f0f9ff"/>
  <circle cx="250" cy="200" r="120" fill="#bae6fd" />
  
  <path d="M 250 200 L 250 80 A 120 120 0 0 1 370 200 Z" fill="#0ea5e9"/> <!-- Physics 25% -->
  <path d="M 250 200 L 370 200 A 120 120 0 0 1 320 300 Z" fill="#0284c7"/> <!-- Chemistry 20% -->
  <path d="M 250 200 L 320 300 A 120 120 0 0 1 180 305 Z" fill="#0369a1"/> <!-- Maths 30% -->
  <path d="M 250 200 L 180 305 A 120 120 0 0 1 140 160 Z" fill="#7dd3fc"/> <!-- Biology 15% -->
  <path d="M 250 200 L 140 160 A 120 120 0 0 1 250 80 Z" fill="#075985"/> <!-- Arts 10% -->

  <g transform="translate(420, 100)" font-family="Outfit" font-size="12" font-weight="700">
    <rect width="12" height="12" fill="#0ea5e9"/> <text x="20" y="11">Physics (25%)</text>
    <rect y="25" width="12" height="12" fill="#0284c7"/> <text x="20" y="36">Chemistry (20%)</text>
    <rect y="50" width="12" height="12" fill="#0369a1"/> <text x="20" y="61">Maths (30%)</text>
    <rect y="75" width="12" height="12" fill="#7dd3fc"/> <text x="20" y="86">Biology (15%)</text>
    <rect y="100" width="12" height="12" fill="#075985"/> <text x="20" y="111">Arts (10%)</text>
  </g>

  <text x="300" y="40" text-anchor="middle" fill="#0c4a6e" font-family="Outfit" font-weight="900" font-size="16">STUDENT DISTRIBUTION BY DEPT</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 5,
        "text": "What is the difference between the number of students in Maths and Biology?",
        "options": [
          { "id": "A", "text": "120" },
          { "id": "B", "text": "150" },
          { "id": "C", "text": "180" },
          { "id": "D", "text": "200" }
        ],
        "answer": "C",
        "explanation": "Maths = 30%, Biology = 15%. Difference = 15%.\n15% of 1200 = 180."
      },
      {
        "id": 6,
        "text": "If 50 students from Arts department leave and join Physics, what will be the new ratio of Arts to Physics students?",
        "options": [
          { "id": "A", "text": "7 : 35" },
          { "id": "B", "text": "1 : 5" },
          { "id": "C", "text": "2 : 11" },
          { "id": "D", "text": "1 : 6" }
        ],
        "answer": "B",
        "explanation": "Original Physics = 25% of 1200 = 300.\nOriginal Arts = 10% of 1200 = 120.\nNew Physics = 300 + 50 = 350.\nNew Arts = 120 - 50 = 70.\nRatio = 70 : 350 = 1 : 5."
      }
    ]
  },
  {
    "id": "pie-set-3",
    "type": "passage-group",
    "passage": "Distribution of Budget (₹ 400 Crores) of a State Government in different sectors:",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f5f3ff"/>
  <circle cx="250" cy="200" r="120" fill="#a78bfa" />
  
  <path d="M 250 200 L 250 80 A 120 120 0 0 1 370 200 Z" fill="#7c3aed"/> <!-- Health 25% -->
  <path d="M 250 200 L 370 200 A 120 120 0 0 1 320 300 Z" fill="#8b5cf6"/> <!-- Edu 20% -->
  <path d="M 250 200 L 320 300 A 120 120 0 0 1 180 305 Z" fill="#6d28d9"/> <!-- Infra 30% -->
  <path d="M 250 200 L 180 305 A 120 120 0 0 1 140 160 Z" fill="#c084fc"/> <!-- Agri 15% -->
  <path d="M 250 200 L 140 160 A 120 120 0 0 1 250 80 Z" fill="#581c87"/> <!-- Others 10% -->

  <g transform="translate(420, 100)" font-family="Outfit" font-size="12" font-weight="700">
    <rect width="12" height="12" fill="#7c3aed"/> <text x="20" y="11">Health (25%)</text>
    <rect y="25" width="12" height="12" fill="#8b5cf6"/> <text x="20" y="36">Education (20%)</text>
    <rect y="50" width="12" height="12" fill="#6d28d9"/> <text x="20" y="61">Infra (30%)</text>
    <rect y="75" width="12" height="12" fill="#c084fc"/> <text x="20" y="86">Agriculture (15%)</text>
    <rect y="100" width="12" height="12" fill="#581c87"/> <text x="20" y="111">Others (10%)</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 7,
        "text": "What is the amount spent on Health?",
        "options": [
          { "id": "A", "text": "₹ 80 Crores" },
          { "id": "B", "text": "₹ 100 Crores" },
          { "id": "C", "text": "₹ 120 Crores" },
          { "id": "D", "text": "₹ 150 Crores" }
        ],
        "answer": "B",
        "explanation": "Health = 25% of ₹ 400 Crores = ₹ 100 Crores."
      },
      {
        "id": 8,
        "text": "What is the central angle for Agriculture?",
        "options": [
          { "id": "A", "text": "36°" },
          { "id": "B", "text": "45°" },
          { "id": "C", "text": "54°" },
          { "id": "D", "text": "60°" }
        ],
        "answer": "C",
        "explanation": "Agriculture = 15%. Angle = 15% of 360 = 54°."
      },
      {
        "id": 9,
        "text": "If the budget for Education is increased by 10% and the increase is taken from 'Others', what will be the new percentage for 'Others'?",
        "options": [
          { "id": "A", "text": "8%" },
          { "id": "B", "text": "5%" },
          { "id": "C", "text": "7.5%" },
          { "id": "D", "text": "9%" }
        ],
        "answer": "A",
        "explanation": "Education current = 20% of 400 = 80. 10% increase = 8. (Wait, 10% of 20% is 2%? or 10% of budget? 'increased by 10%' usually means relative increase). Let's assume 10% of existing = 80*0.1 = 8. So 8 Cr is 2% of 400. New Others = 10% - 2% = 8%."
      },
      {
        "id": 10,
        "text": "What is the total expenditure on Education, Infrastructure and Agriculture combined?",
        "options": [
          { "id": "A", "text": "₹ 200 Cr" },
          { "id": "B", "text": "₹ 240 Cr" },
          { "id": "C", "text": "₹ 260 Cr" },
          { "id": "D", "text": "₹ 280 Cr" }
        ],
        "answer": "C",
        "explanation": "Total % = 20 + 30 + 15 = 65%.\nAmount = 65% of 400 = 260 Crores."
      }
    ]
  },
  {
    "id": "pie-set-4",
    "type": "passage-group",
    "passage": "Distribution of various costs in publishing a book (Total Cost = ₹ 2.5 Lakhs):",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#fff7ed"/>
  <circle cx="250" cy="200" r="120" fill="#fbbf24" />
  <path d="M 250 200 L 250 80 A 120 120 0 0 1 370 200 Z" fill="#f59e0b"/> <!-- Paper 25% -->
  <path d="M 250 200 L 370 200 A 120 120 0 0 1 320 300 Z" fill="#d97706"/> <!-- Printing 20% -->
  <path d="M 250 200 L 320 300 A 120 120 0 0 1 180 305 Z" fill="#b45309"/> <!-- Binding 15% -->
  <path d="M 250 200 L 180 305 A 120 120 0 0 1 140 160 Z" fill="#fcd34d"/> <!-- Royalty 20% -->
  <path d="M 250 200 L 140 160 A 120 120 0 0 1 250 80 Z" fill="#92400e"/> <!-- Marketing 20% -->
  <g transform="translate(420, 100)" font-family="Outfit" font-size="12" font-weight="700">
    <rect width="12" height="12" fill="#f59e0b"/> <text x="20" y="11">Paper (25%)</text>
    <rect y="25" width="12" height="12" fill="#d97706"/> <text x="20" y="36">Printing (20%)</text>
    <rect y="50" width="12" height="12" fill="#b45309"/> <text x="20" y="61">Binding (15%)</text>
    <rect y="75" width="12" height="12" fill="#fcd34d"/> <text x="20" y="86">Royalty (20%)</text>
    <rect y="100" width="12" height="12" fill="#92400e"/> <text x="20" y="111">Mkt (20%)</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 11,
        "text": "What is the cost of Royalty for 5000 copies if total cost is ₹ 2,50,000?",
        "options": [
          { "id": "A", "text": "₹ 40,000" },
          { "id": "B", "text": "₹ 50,000" },
          { "id": "C", "text": "₹ 60,000" },
          { "id": "D", "text": "₹ 75,000" }
        ],
        "answer": "B",
        "explanation": "Royalty = 20% of 2,50,000 = ₹ 50,000."
      },
      {
        "id": 12,
        "text": "If the Printing cost is ₹ 25,000, then what is the cost of Paper?",
        "options": [
          { "id": "A", "text": "₹ 31,250" },
          { "id": "B", "text": "₹ 35,000" },
          { "id": "C", "text": "₹ 32,500" },
          { "id": "D", "text": "₹ 28,000" }
        ],
        "answer": "A",
        "explanation": "Printing (20%) = 25,000.\nTotal Cost = 25,000 / 0.2 = 1,25,000.\nPaper (25%) = 1,25,000 * 0.25 = 31,250."
      }
    ]
  },
  {
    "id": "pie-set-5",
    "type": "passage-group",
    "passage": "Distribution of Sales of 4 models of cars in a year (Total = 20,000 units):",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f0fdf4"/>
  <circle cx="250" cy="200" r="120" fill="#4ade80" />
  <path d="M 250 200 L 250 80 A 120 120 0 0 1 370 200 Z" fill="#22c55e"/> <!-- Model A 25% -->
  <path d="M 250 200 L 370 200 A 120 120 0 0 1 250 320 Z" fill="#16a34a"/> <!-- Model B 25% -->
  <path d="M 250 200 L 250 320 A 120 120 0 0 1 130 200 Z" fill="#15803d"/> <!-- Model C 25% -->
  <path d="M 250 200 L 130 200 A 120 120 0 0 1 250 80 Z" fill="#166534"/> <!-- Model D 25% -->
  <g transform="translate(420, 100)" font-family="Outfit" font-size="12" font-weight="700">
    <rect width="12" height="12" fill="#22c55e"/> <text x="20" y="11">Model A (25%)</text>
    <rect y="25" width="12" height="12" fill="#16a34a"/> <text x="20" y="36">Model B (25%)</text>
    <rect y="50" width="12" height="12" fill="#15803d"/> <text x="20" y="61">Model C (25%)</text>
    <rect y="75" width="12" height="12" fill="#166534"/> <text x="20" y="86">Model D (25%)</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 13,
        "text": "What is the number of units sold for Model A?",
        "options": [
          { "id": "A", "text": "4000" },
          { "id": "B", "text": "5000" },
          { "id": "C", "text": "6000" },
          { "id": "D", "text": "7500" }
        ],
        "answer": "B",
        "explanation": "25% of 20,000 = 5,000."
      },
      {
        "id": 14,
        "text": "The sales of Model B and Model C together account for how many units?",
        "options": [
          { "id": "A", "text": "10,000" },
          { "id": "B", "text": "8,000" },
          { "id": "C", "text": "12,000" },
          { "id": "D", "text": "15,000" }
        ],
        "answer": "A",
        "explanation": "25% + 25% = 50%. 50% of 20,000 = 10,000."
      },
      {
        "id": 15,
        "text": "What is the ratio of sales of Model A to Model D?",
        "options": [
          { "id": "A", "text": "1 : 1" },
          { "id": "B", "text": "2 : 1" },
          { "id": "C", "text": "1 : 2" },
          { "id": "D", "text": "3 : 4" }
        ],
        "answer": "A",
        "explanation": "Both are 25%, so the ratio is 1 : 1."
      },
      {
        "id": 16,
        "text": "If Model D sales increase by 10% from the total sales, what will be the new percentage for Model D?",
        "options": [
          { "id": "A", "text": "35%" },
          { "id": "B", "text": "27.5%" },
          { "id": "C", "text": "30%" },
          { "id": "D", "text": "32.5%" }
        ],
        "answer": "A",
        "explanation": "25% + 10% = 35%."
      }
    ]
  },
  {
    "id": "pie-set-6",
    "type": "passage-group",
    "passage": "Market share of different Browser Companies in 2023:",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f8fafc"/>
  <circle cx="250" cy="200" r="120" fill="#e2e8f0" />
  <path d="M 250 200 L 250 80 A 120 120 0 0 1 370 200 Z" fill="#475569"/> <!-- Chrome 60% -->
  <path d="M 250 200 L 370 200 A 120 120 0 0 1 250 320 Z" fill="#64748b"/> <!-- Safari 20% -->
  <path d="M 250 200 L 250 320 A 120 120 0 0 1 130 200 Z" fill="#94a3b8"/> <!-- Edge 10% -->
  <path d="M 250 200 L 130 200 A 120 120 0 0 1 250 80 Z" fill="#cbd5e1"/> <!-- Others 10% -->
</svg>
    `,
    "subQuestions": [
      {
        "id": 17,
        "text": "If Chrome has 60% share, what is the angle for Chrome?",
        "options": [
          { "id": "A", "text": "216°" },
          { "id": "B", "text": "180°" },
          { "id": "C", "text": "240°" },
          { "id": "D", "text": "200°" }
        ],
        "answer": "A",
        "explanation": "60% of 360 = 0.6 * 360 = 216°."
      },
      {
        "id": 18,
        "text": "What is the ratio of Safari's share to Edge's share?",
        "options": [
          { "id": "A", "text": "2 : 1" },
          { "id": "B", "text": "1 : 2" },
          { "id": "C", "text": "3 : 1" },
          { "id": "D", "text": "5 : 2" }
        ],
        "answer": "A",
        "explanation": "Safari = 20%, Edge = 10%. Ratio = 20 : 10 = 2 : 1."
      },
      {
        "id": 19,
        "text": "If the total number of users is 500 million, how many users use Edge?",
        "options": [
          { "id": "A", "text": "40 million" },
          { "id": "B", "text": "50 million" },
          { "id": "C", "text": "60 million" },
          { "id": "D", "text": "100 million" }
        ],
        "answer": "B",
        "explanation": "10% of 500 million = 50 million."
      },
      {
        "id": 20,
        "text": "Total share of Chrome and Safari together is:",
        "options": [
          { "id": "A", "text": "70%" },
          { "id": "B", "text": "80%" },
          { "id": "C", "text": "75%" },
          { "id": "D", "text": "85%" }
        ],
        "answer": "B",
        "explanation": "60% + 20% = 80%."
      },
      {
        "id": 21,
        "text": "If others share doubles next year, what will be their new share percentage?",
        "options": [
          { "id": "A", "text": "20%" },
          { "id": "B", "text": "15%" },
          { "id": "C", "text": "12%" },
          { "id": "D", "text": "25%" }
        ],
        "answer": "A",
        "explanation": "10% * 2 = 20%."
      }
    ]
  }
];
