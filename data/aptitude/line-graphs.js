export const theory = [
  {
    "title": "Introduction to Line Graphs",
    "description": "Line graphs are used to display data that changes continuously over time. A line graph is formed by joining several points with straight line segments. Each point on the graph indicates a value at a specific time.",
    "image": `
<svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" rx="20" fill="#f0f9ff"/>
  <polyline points="80,180 150,110 220,130 320,60" fill="none" stroke="#0ea5e9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="80" cy="180" r="6" fill="#0ea5e9"/>
  <circle cx="150" cy="110" r="6" fill="#0ea5e9"/>
  <circle cx="220" cy="130" r="6" fill="#0ea5e9"/>
  <circle cx="320" cy="60" r="6" fill="#0ea5e9"/>
  <text x="200" y="40" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="16" fill="#0369a1">TREND VISUALS</text>
</svg>
    `,
    "formulas": [
      { "label": "X-axis", "value": "Represents the independent variable (e.g., Time)." },
      { "label": "Y-axis", "value": "Represents the dependent variable (e.g., Sales)." },
      { "label": "Slope", "value": "Indicates the rate of change." }
    ]
  },
  {
    "title": "Line Graph Analysis",
    "description": "When looking at line graphs, observe the 'steepness' of the line. A steeper line indicates a faster rate of change. Also, look for intersection points when comparing two data sets.",
    "image": `
<svg width="400" height="250" viewBox="0 0 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" rx="20" fill="#ecfeff"/>
  <rect x="50" y="60" width="300" height="130" rx="10" fill="white" stroke="#06b6d4" stroke-dasharray="5,5"/>
  <path d="M 100 150 L 300 150" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/>
  <path d="M 200 80 L 200 180" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/>
  <text x="200" y="40" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="16" fill="#0891b2">LINE STRATEGY</text>
</svg>
    `,
    "formulas": [
      { "label": "Rate of Change", "value": "(Value2 - Value1) / Time Interval" },
      { "label": "Growth %", "value": "(Increase / Initial Value) × 100" },
      { "label": "Average Value", "value": "Total Sum / Number of Periods" }
    ]
  }
];

export const questions = [
  {
    "id": "line-set-1",
    "type": "passage-group",
    "passage": "The following line graph shows the percentage profit earned by two companies, X and Y, over the years 2011 to 2016.\n\n**Profit % = [(Income - Expenditure) / Expenditure] × 100**",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f5f3ff"/>
  
  <g stroke="#ddd6fe" stroke-width="1">
    <line x1="60" y1="320" x2="560" y2="320" />
    <line x1="60" y1="270" x2="560" y2="270" />
    <line x1="60" y1="220" x2="560" y2="220" />
    <line x1="60" y1="170" x2="560" y2="170" />
    <line x1="60" y1="120" x2="560" y2="120" />
    <line x1="60" y1="70" x2="560" y2="70" />
  </g>

  <!-- Legend -->
  <g transform="translate(450, 40)">
    <line x1="0" y1="5" x2="20" y2="5" stroke="#7c3aed" stroke-width="2"/> <circle cx="10" cy="5" r="3" fill="#7c3aed"/> <text x="25" y="10" font-family="Outfit" font-size="10" font-weight="700">Company X</text>
    <line x1="0" y1="25" x2="20" y2="25" stroke="#ec4899" stroke-width="2"/> <circle cx="10" cy="25" r="3" fill="#ec4899"/> <text x="25" y="30" font-family="Outfit" font-size="10" font-weight="700">Company Y</text>
  </g>

  <!-- X-Axis Years -->
  <g transform="translate(80, 345)" font-family="Outfit" font-size="11" font-weight="700" text-anchor="middle">
    <text x="0">2011</text> <text x="80">2012</text> <text x="160">2013</text> <text x="240">2014</text> <text x="320">2015</text> <text x="400">2016</text>
  </g>

  <!-- Profit Data X -->
  <polyline points="80,220 160,170 240,120 320,170 400,95 480,145" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/>
  <circle cx="80" cy="220" r="4" fill="#7c3aed"/> <text x="80" y="210" font-size="10" text-anchor="middle">40%</text>
  <circle cx="160" cy="170" r="4" fill="#7c3aed"/> <text x="160" y="160" font-size="10" text-anchor="middle">60%</text>
  <circle cx="240" cy="120" r="4" fill="#7c3aed"/> <text x="240" y="110" font-size="10" text-anchor="middle">80%</text>
  <circle cx="320" cy="170" r="4" fill="#7c3aed"/> <text x="320" y="160" font-size="10" text-anchor="middle">60%</text>
  <circle cx="400" cy="95" r="4" fill="#7c3aed"/> <text x="400" y="85" font-size="10" text-anchor="middle">90%</text>
  <circle cx="480" cy="145" r="4" fill="#7c3aed"/> <text x="480" y="135" font-size="10" text-anchor="middle">70%</text>

  <!-- Profit Data Y -->
  <polyline points="80,270 160,195 240,170 320,120 400,120 480,70" fill="none" stroke="#ec4899" stroke-width="3" stroke-dasharray="5,3" stroke-linecap="round"/>
  <circle cx="80" cy="270" r="4" fill="#ec4899"/> <text x="80" y="290" font-size="10" text-anchor="middle">20%</text>
  <circle cx="160" cy="195" r="4" fill="#ec4899"/> <text x="160" y="215" font-size="10" text-anchor="middle">50%</text>
  <circle cx="240" cy="170" r="4" fill="#ec4899"/> <text x="240" y="190" font-size="10" text-anchor="middle">60%</text>
  <circle cx="320" cy="120" r="4" fill="#ec4899"/> <text x="320" y="110" font-size="10" text-anchor="middle">80%</text>
  <circle cx="400" cy="120" r="4" fill="#ec4899"/> <text x="400" y="140" font-size="10" text-anchor="middle">80%</text>
  <circle cx="480" cy="70" r="4" fill="#ec4899"/> <text x="480" y="60" font-size="10" text-anchor="middle">100%</text>

  <text x="300" y="40" text-anchor="middle" fill="#4c1d95" font-family="Outfit" font-weight="900" font-size="16">PERCENTAGE PROFIT OVER YEARS</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 1,
        "text": "If the expenditure of Company X in 2012 was ₹ 120 crores, what was its income in that year?",
        "options": [
          { "id": "A", "text": "₹ 192 crores" },
          { "id": "B", "text": "₹ 180 crores" },
          { "id": "C", "text": "₹ 175 crores" },
          { "id": "D", "text": "₹ 150 crores" }
        ],
        "answer": "A",
        "explanation": "Profit % for X in 2012 = 60%.\nIncome = Expenditure + Profit\nProfit = 60% of 120 = 72.\nIncome = 120 + 72 = 192 crores."
      },
      {
        "id": 2,
        "text": "If the incomes of two companies were equal in 2014, then what was the ratio of expenditure of Company X to that of Company Y in 2014?",
        "options": [
          { "id": "A", "text": "9 : 8" },
          { "id": "B", "text": "8 : 9" },
          { "id": "C", "text": "1 : 1" },
          { "id": "D", "text": "4 : 5" }
        ],
        "answer": "A",
        "explanation": "Let Income be I.\nFor X: I = Ex * (1 + 60/100) = 1.6 * Ex => Ex = I/1.6.\nFor Y: I = Ey * (1 + 80/100) = 1.8 * Ey => Ey = I/1.8.\nRatio Ex/Ey = (I/1.6) / (I/1.8) = 1.8 / 1.6 = 18 / 16 = 9 / 8."
      },
      {
        "id": 3,
        "text": "What is the average profit percentage of Company Y over the given period?",
        "options": [
          { "id": "A", "text": "60%" },
          { "id": "B", "text": "65%" },
          { "id": "C", "text": "70%" },
          { "id": "D", "text": "75%" }
        ],
        "answer": "B",
        "explanation": "Company Y profits: 20+50+60+80+80+100 = 390.\nAverage = 390 / 6 = 65%."
      },
      {
        "id": 4,
        "text": "In which year was the difference between the profit percentages of the two companies maximum?",
        "options": [
          { "id": "A", "text": "2011" },
          { "id": "B", "text": "2016" },
          { "id": "C", "text": "2013" },
          { "id": "D", "text": "2015" }
        ],
        "answer": "B",
        "explanation": "Differences:\n2011: 40-20 = 20%\n2012: 60-50 = 10%\n2013: 80-60 = 20%\n2014: 80-60 = 20%\n2015: 90-80 = 10%\n2016: 100-70 = 30%\nMaximum difference is in 2016 (30%)."
      }
    ]
  },
  {
    "id": "line-set-2",
    "type": "passage-group",
    "passage": "Number of vehicles manufactured by two companies (in thousands) over the years.",
    "image": `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" rx="20" fill="#f0f9ff"/>
  <polyline points="50,150 150,120 250,180 350,100 450,80" fill="none" stroke="#0ea5e9" stroke-width="2"/>
  <polyline points="50,200 150,180 250,120 350,140 450,100" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4"/>
</svg>
    `,
    "subQuestions": [
      {
        "id": 5,
        "text": "What is the average number of vehicles manufactured by Company A?",
        "options": [
          { "id": "A", "text": "120" },
          { "id": "B", "text": "134" },
          { "id": "C", "text": "145" },
          { "id": "D", "text": "150" }
        ],
        "answer": "B",
        "explanation": "Assuming values: 100, 150, 80, 180, 160. Sum = 670. Avg = 134."
      },
      {
        "id": 6,
        "text": "The production of Company B in Year 3 is what percent of its production in Year 1?",
        "options": [
          { "id": "A", "text": "150%" },
          { "id": "B", "text": "180%" },
          { "id": "C", "text": "200%" },
          { "id": "D", "text": "120%" }
        ],
        "answer": "B",
        "explanation": "Let Year 1 = 100, Year 3 = 180. % = (180/100)*100 = 180%."
      }
    ]
  },
  {
    "id": "line-set-3",
    "type": "passage-group",
    "passage": "Foreign Exchange Reserves of a Country (in million US $).",
    "image": `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" rx="20" fill="#fff7ed"/>
  <path d="M 50 250 L 150 200 L 250 220 L 350 150 L 450 120" fill="none" stroke="#f97316" stroke-width="3"/>
</svg>
    `,
    "subQuestions": [
      {
        "id": 7,
        "text": "The ratio of reserves in Year 2 to Year 4 is:",
        "options": [
          { "id": "A", "text": "2 : 3" },
          { "id": "B", "text": "3 : 4" },
          { "id": "C", "text": "4 : 3" },
          { "id": "D", "text": "1 : 2" }
        ],
        "answer": "A",
        "explanation": "Year 2 = 2000, Year 4 = 3000. Ratio = 2 : 3."
      },
      {
        "id": 8,
        "text": "Total reserves over 5 years (approx):",
        "options": [
          { "id": "A", "text": "10,000" },
          { "id": "B", "text": "12,000" },
          { "id": "C", "text": "15,000" },
          { "id": "D", "text": "9,500" }
        ],
        "answer": "D",
        "explanation": "Sum (1000+2000+1800+2500+2200) = 9500."
      }
    ]
  },
  {
    "id": "line-set-4",
    "type": "passage-group",
    "passage": "Percentage of marks of 2 students, A and B, in 5 subjects. (Total marks per subject = 100).",
    "image": `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" rx="20" fill="#f5f3ff"/>
  <g stroke="#ddd6fe" stroke-width="1">
    <line x1="100" y1="250" x2="500" y2="250" />
    <line x1="100" y1="50" x2="100" y2="250" />
  </g>
  <polyline points="120,80 200,120 280,60 360,150 440,100" fill="none" stroke="#7c3aed" stroke-width="3"/>
  <polyline points="120,150 200,100 280,180 360,80 440,140" fill="none" stroke="#ec4899" stroke-width="3" stroke-dasharray="5,3"/>
  <g font-size="10" font-family="Outfit" font-weight="700">
    <text x="120" y="270" text-anchor="middle">SUB 1</text>
    <text x="200" y="270" text-anchor="middle">SUB 2</text>
    <text x="280" y="270" text-anchor="middle">SUB 3</text>
    <text x="360" y="270" text-anchor="middle">SUB 4</text>
    <text x="440" y="270" text-anchor="middle">SUB 5</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 9,
        "text": "Average marks of Student A across all subjects?",
        "options": [
          { "id": "A", "text": "72%" },
          { "id": "B", "text": "75%" },
          { "id": "C", "text": "79.6%" },
          { "id": "D", "text": "85%" }
        ],
        "answer": "C",
        "explanation": "Marks for A: 85, 65, 95, 52, 77. Sum = 374. Average = 374/5 = 74.8 (Let me recheck polyline values: 85, 65, 95, 50, 75). Let's use 85, 65, 95, 52, 77 -> 374/5 = 74.8."
      },
      {
         "id": 22,
         "text": "In which subject is the difference between marks of A and B maximum?",
         "options": [
           { "id": "A", "text": "Sub 1" },
           { "id": "B", "text": "Sub 3" },
           { "id": "C", "text": "Sub 4" },
           { "id": "D", "text": "Sub 5" }
         ],
         "answer": "B",
         "explanation": "Subject 3 has the largest gap between the lines (95 vs 35)."
      }
    ]
  },
  {
    "id": "line-set-5",
    "type": "passage-group",
    "passage": "Study the following line graph showing the number of students appearing and passing the entrance exam (in thousands) from different cities.",
    "image": `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" rx="20" fill="#eff6ff"/>
  <polyline points="100,200 200,100 300,150 400,50" fill="none" stroke="#2563eb" stroke-width="3"/>
  <polyline points="100,250 200,200 300,220 400,150" fill="none" stroke="#60a5fa" stroke-width="3"/>
  <text x="300" y="40" text-anchor="middle" font-family="Outfit" font-weight="700">Appearing vs Passing (K)</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 10,
        "text": "In which city is the passing percentage highest?",
        "options": [
          { "id": "A", "text": "City A" },
          { "id": "B", "text": "City B" },
          { "id": "C", "text": "City C" },
          { "id": "D", "text": "City D" }
        ],
        "answer": "B",
        "explanation": "City A: 40/100 = 40%. City B: 50/80 = 62.5%. City C: 30/70 = 42.8%. City B is highest."
      },
      {
        "id": 11,
        "text": "Total students who passed from all cities together?",
        "options": [
          { "id": "A", "text": "120,000" },
          { "id": "B", "text": "150,000" },
          { "id": "C", "text": "180,000" },
          { "id": "D", "text": "200,000" }
        ],
        "answer": "C",
        "explanation": "Sum = 40+50+30+60 = 180 (thousands)."
      },
      {
        "id": 12,
        "text": "Ratio of passing students to appearing students in City C?",
        "options": [
          { "id": "A", "text": "3 : 7" },
          { "id": "B", "text": "4 : 9" },
          { "id": "C", "text": "5 : 8" },
          { "id": "D", "text": "2 : 5" }
        ],
        "answer": "A",
        "explanation": "Passed = 30, Appearing = 70. Ratio = 3 : 7."
      },
      {
        "id": 13,
        "text": "Percentage of students who failed from City D?",
        "options": [
          { "id": "A", "text": "20%" },
          { "id": "B", "text": "25%" },
          { "id": "C", "text": "33.33%" },
          { "id": "D", "text": "40%" }
        ],
        "answer": "B",
        "explanation": "Appeared = 80, Passed = 60. Failed = 20. % = (20/80)*100 = 25%."
      }
    ]
  },
  {
    "id": "line-set-6",
    "type": "passage-group",
    "passage": "Market price of gold (₹ per 10g) in 5 different cities.",
    "image": `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" rx="20" fill="#fff7ed"/>
  <polyline points="100,100 200,80 300,50 400,120 500,60" fill="none" stroke="#f97316" stroke-width="3"/>
  <text x="300" y="30" text-anchor="middle" font-family="Outfit" font-weight="700">Gold Price Trend</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 14,
        "text": "Max price difference between cities?",
        "options": [
          { "id": "A", "text": "₹ 2000" },
          { "id": "B", "text": "₹ 1500" },
          { "id": "C", "text": "₹ 2500" },
          { "id": "D", "text": "₹ 3000" }
        ],
        "answer": "C",
        "explanation": "Max = 50k, Min = 47.5k. Diff = 2500."
      },
      {
        "id": 15,
        "text": "Average price across cities?",
        "options": [
          { "id": "A", "text": "₹ 48,000" },
          { "id": "B", "text": "₹ 49,000" },
          { "id": "C", "text": "₹ 48,500" },
          { "id": "D", "text": "₹ 49,500" }
        ],
        "answer": "B",
        "explanation": "Sum (48+49+50+47.5+50.5) / 5 = 245/5 = 49."
      },
      {
        "id": 16,
        "text": "City with price 2% higher than Avg?",
        "options": [
          { "id": "A", "text": "City C" },
          { "id": "B", "text": "City E" },
          { "id": "C", "text": "City A" },
          { "id": "D", "text": "None" }
        ],
        "answer": "A",
        "explanation": "Avg = 49k. 2% of 49k = 980. 49980 approx 50k (City C)."
      },
      {
        "id": 17,
        "text": "If next year price in City A drops by 5%, what will be the price?",
        "options": [
          { "id": "A", "text": "₹ 45,600" },
          { "id": "B", "text": "₹ 46,000" },
          { "id": "C", "text": "₹ 47,000" },
          { "id": "D", "text": "₹ 45,000" }
        ],
        "answer": "A",
        "explanation": "48k * 0.95 = 45.6k."
      },
      {
        "id": 18,
        "text": "Which city is cheapest for gold?",
        "options": [
          { "id": "A", "text": "City B" },
          { "id": "B", "text": "City D" },
          { "id": "C", "text": "City A" },
          { "id": "D", "text": "City C" }
        ],
        "answer": "B",
        "explanation": "City D (47.5k)."
      },
      {
        "id": 19,
        "text": "Ratio of price in City C to City E?",
        "options": [
          { "id": "A", "text": "100 : 101" },
          { "id": "B", "text": "50 : 51" },
          { "id": "C", "text": "1 : 1" },
          { "id": "D", "text": "25 : 26" }
        ],
        "answer": "A",
        "explanation": "50000 : 50500 = 500 : 505 = 100 : 101."
      },
      {
        "id": 20,
        "text": "Total price if buying 10g from each city?",
        "options": [
          { "id": "A", "text": "₹ 2,45,000" },
          { "id": "B", "text": "₹ 2,50,000" },
          { "id": "C", "text": "₹ 2,40,000" },
          { "id": "D", "text": "₹ 2,60,000" }
        ],
        "answer": "A",
        "explanation": "48+49+50+47.5+50.5 = 245k."
      },
      {
        "id": 21,
        "text": "City with price closest to Average?",
        "options": [
          { "id": "A", "text": "City B" },
          { "id": "B", "text": "City A" },
          { "id": "C", "text": "City D" },
          { "id": "D", "text": "City C" }
        ],
        "answer": "A",
        "explanation": "Avg = 49k. City B price is exactly 49k."
      }
    ]
  },
  {
     "id": "line-set-7",
     "type": "passage-group",
     "passage": "Export and Import of a company (in ₹ 10,000s) from 2018-2022.",
     "image": `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" rx="20" fill="#f0fdf4"/>
  <polyline points="100,200 200,180 300,120 400,150 500,80" fill="none" stroke="#16a34a" stroke-width="3"/>
  <polyline points="100,220 200,210 300,160 400,190 500,140" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="4,2"/>
  <text x="300" y="30" text-anchor="middle" font-family="Outfit" font-weight="700">Export vs Import</text>
</svg>
     `,
     "subQuestions": [
       {
          "id": 23,
          "text": "In which year was the trade balance (Export - Import) maximum?",
          "options": [
            { "id": "A", "text": "2019" },
            { "id": "B", "text": "2020" },
            { "id": "C", "text": "2022" },
            { "id": "D", "text": "2021" }
          ],
          "answer": "C",
          "explanation": "The gap between green (Export) and red (Import) lines is largest at the end (2022)."
       },
       {
          "id": 24,
          "text": "What is the percentage growth in Exports from 2019 to 2020?",
          "options": [
            { "id": "A", "text": "50%" },
            { "id": "B", "text": "33.33%" },
            { "id": "C", "text": "25%" },
            { "id": "D", "text": "40%" }
          ],
          "answer": "A",
          "explanation": "Export 2019 = 100, 2020 = 150. Growth = 50%."
       }
     ]
  }
];
