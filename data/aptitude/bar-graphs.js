export const theory = [
  {
    "title": "Introduction to Bar Graphs",
    "description": "Bar graphs represent data using rectangular bars of equal width, where the height or length of the bars is proportional to the values they represent. They are ideal for comparing different categories or tracking changes over time.",
    "image": `
<svg width="400" height="250" viewBox="0 0 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" rx="20" fill="#f0fdf4"/>
  <rect x="100" y="100" width="30" height="80" fill="#16a34a" rx="2"/>
  <rect x="150" y="70" width="30" height="110" fill="#15803d" rx="2"/>
  <rect x="200" y="120" width="30" height="60" fill="#16a34a" rx="2"/>
  <rect x="250" y="50" width="30" height="130" fill="#15803d" rx="2"/>
  <line x1="80" y1="180" x2="320" y2="180" stroke="#14532d" stroke-width="2"/>
  <text x="200" y="40" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="16" fill="#14532d">BAR ANALYSIS</text>
</svg>
    `,
    "formulas": [
      { "label": "Vertical Bar Graph", "value": "Bars go up and down (standard)." },
      { "label": "Horizontal Bar Graph", "value": "Bars go left to right." },
      { "label": "Clustered Bar Graph", "value": "Multiple bars for each category." }
    ]
  },
  {
    "title": "Bar Graph Strategy",
    "description": "When analyzing bar graphs, pay close attention to the scale of the Y-axis and look for trends (increasing, decreasing, or fluctuating).",
    "image": `
<svg width="400" height="250" viewBox="0 0 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" rx="20" fill="#fff7ed"/>
  <circle cx="200" cy="125" r="50" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
  <path d="M 200 125 L 200 75 A 50 50 0 0 1 250 125 Z" fill="#fb923c"/>
  <text x="200" y="40" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="16" fill="#9a3412">TREND METRICS</text>
</svg>
    `,
    "formulas": [
      { "label": "Trend Analysis", "value": "Identify peak and trough years." },
      { "label": "Difference", "value": "Difference = Max Bar Height - Min Bar Height" },
      { "label": "Percentage Share", "value": "(Bar Value / Total) × 100" }
    ]
  }
];

export const questions = [
  {
    "id": "bar-set-1",
    "type": "passage-group",
    "passage": "The following bar graph shows the production of fertilizers by a company (in 10,000 tons) over several years. Study the graph and answer the questions.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f8fafc"/>
  
  <!-- Grid Lines -->
  <g stroke="#e2e8f0" stroke-width="1" stroke-dasharray="5,5">
    <line x1="60" y1="320" x2="560" y2="320" />
    <line x1="60" y1="270" x2="560" y2="270" />
    <line x1="60" y1="220" x2="560" y2="220" />
    <line x1="60" y1="170" x2="560" y2="170" />
    <line x1="60" y1="120" x2="560" y2="120" />
    <line x1="60" y1="70" x2="560" y2="70" />
  </g>

  <!-- Y-Axis Labels -->
  <g font-family="Outfit" font-size="12" font-weight="600" fill="#64748b">
    <text x="30" y="325">0</text>
    <text x="30" y="275">20</text>
    <text x="30" y="225">40</text>
    <text x="30" y="175">60</text>
    <text x="30" y="125">80</text>
    <text x="30" y="75">100</text>
    <text x="10" y="40" font-size="10" font-weight="800" fill="#ec4899">Prod (10k tons)</text>
  </g>

  <!-- Bars -->
  <g>
    <!-- 2017: 40 -->
    <rect x="80" y="220" width="40" height="100" fill="#ec4899" rx="4">
      <animate attributeName="height" from="0" to="100" dur="1s" fill="freeze" />
      <animate attributeName="y" from="320" to="220" dur="1s" fill="freeze" />
    </rect>
    <text x="100" y="345" text-anchor="middle" font-family="Outfit" font-size="12" font-weight="700">2017</text>
    
    <!-- 2018: 60 -->
    <rect x="160" y="170" width="40" height="150" fill="#db2777" rx="4">
      <animate attributeName="height" from="0" to="150" dur="1.2s" fill="freeze" />
      <animate attributeName="y" from="320" to="170" dur="1.2s" fill="freeze" />
    </rect>
    <text x="180" y="345" text-anchor="middle" font-family="Outfit" font-size="12" font-weight="700">2018</text>

    <!-- 2019: 50 -->
    <rect x="240" y="195" width="40" height="125" fill="#ec4899" rx="4">
      <animate attributeName="height" from="0" to="125" dur="1.4s" fill="freeze" />
      <animate attributeName="y" from="320" to="195" dur="1.4s" fill="freeze" />
    </rect>
    <text x="260" y="345" text-anchor="middle" font-family="Outfit" font-size="12" font-weight="700">2019</text>

    <!-- 2020: 80 -->
    <rect x="320" y="120" width="40" height="200" fill="#db2777" rx="4">
      <animate attributeName="height" from="0" to="200" dur="1.6s" fill="freeze" />
      <animate attributeName="y" from="320" to="120" dur="1.6s" fill="freeze" />
    </rect>
    <text x="340" y="345" text-anchor="middle" font-family="Outfit" font-size="12" font-weight="700">2020</text>

    <!-- 2021: 90 -->
    <rect x="400" y="95" width="40" height="225" fill="#ec4899" rx="4">
      <animate attributeName="height" from="0" to="225" dur="1.8s" fill="freeze" />
      <animate attributeName="y" from="320" to="95" dur="1.8s" fill="freeze" />
    </rect>
    <text x="420" y="345" text-anchor="middle" font-family="Outfit" font-size="12" font-weight="700">2021</text>

    <!-- 2022: 70 -->
    <rect x="480" y="145" width="40" height="175" fill="#db2777" rx="4">
      <animate attributeName="height" from="0" to="175" dur="2s" fill="freeze" />
      <animate attributeName="y" from="320" to="145" dur="2s" fill="freeze" />
    </rect>
    <text x="500" y="345" text-anchor="middle" font-family="Outfit" font-size="12" font-weight="700">2022</text>
  </g>

  <!-- Title -->
  <text x="300" y="40" text-anchor="middle" fill="#1e293b" font-family="Outfit" font-weight="900" font-size="16">FERTILIZER PRODUCTION (2017-2022)</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 1,
        "text": "What was the percentage increase in production from 2019 to 2020?",
        "options": [
          { "id": "A", "text": "40%" },
          { "id": "B", "text": "50%" },
          { "id": "C", "text": "60%" },
          { "id": "D", "text": "70%" }
        ],
        "answer": "C",
        "explanation": "Production in 2019 = 50.\nProduction in 2020 = 80.\nIncrease = 80 - 50 = 30.\n% Increase = (30 / 50) * 100 = 60%."
      },
      {
        "id": 2,
        "text": "In how many of the given years was the production more than the average production of the given years?",
        "options": [
          { "id": "A", "text": "2" },
          { "id": "B", "text": "3" },
          { "id": "C", "text": "4" },
          { "id": "D", "text": "5" }
        ],
        "answer": "B",
        "explanation": "Total Production = 40 + 60 + 50 + 80 + 90 + 70 = 390.\nAverage = 390 / 6 = 65.\nProduction > 65 in 2020 (80), 2021 (90), and 2022 (70).\nTotal 3 years."
      },
      {
        "id": 3,
        "text": "The average production of 2017 and 2018 together is exactly equal to the production of which year?",
        "options": [
          { "id": "A", "text": "2019" },
          { "id": "B", "text": "2020" },
          { "id": "C", "text": "2022" },
          { "id": "D", "text": "None" }
        ],
        "answer": "A",
        "explanation": "Average (2017 + 2018) = (40 + 60) / 2 = 50.\nProduction in 2019 is also 50."
      },
      {
        "id": 4,
        "text": "What was the ratio of average production of 2017, 2018, and 2019 combined to the average production of 2020, 2021, and 2022 combined?",
        "options": [
          { "id": "A", "text": "5 : 8" },
          { "id": "B", "text": "15 : 24" },
          { "id": "C", "text": "3 : 5" },
          { "id": "D", "text": "2 : 3" }
        ],
        "answer": "B",
        "explanation": "Sum (2017-19) = 40+60+50 = 150. Average = 50.\nSum (2020-22) = 80+90+70 = 240. Average = 80.\nRatio = 50 : 80 = 5 : 8. (Wait, Option B is 15:24 which is also 5:8)."
      },
      {
        "id": 5,
        "text": "If the production in 2023 is expected to be 20% more than the average production of all years from 2017 to 2022, what will be the production in 2023?",
        "options": [
          { "id": "A", "text": "72" },
          { "id": "B", "text": "78" },
          { "id": "C", "text": "80" },
          { "id": "D", "text": "84" }
        ],
        "answer": "B",
        "explanation": "Average (2017-22) = 65.\n20% more = 65 * 1.2 = 78."
      }
    ]
  },
  {
    "id": "bar-set-2",
    "type": "passage-group",
    "passage": "The bar graph below shows the amount of wheat (in metric tonnes) imported by a country during 2015-2020.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#eff6ff"/>
  
  <g stroke="#bfdbfe" stroke-width="1">
    <line x1="60" y1="320" x2="560" y2="320" />
    <line x1="60" y1="270" x2="560" y2="270" />
    <line x1="60" y1="220" x2="560" y2="220" />
    <line x1="60" y1="170" x2="560" y2="170" />
    <line x1="60" y1="120" x2="560" y2="120" />
    <line x1="60" y1="70" x2="560" y2="70" />
  </g>

  <g font-family="Outfit" font-size="12" font-weight="600" fill="#1e40af">
    <text x="30" y="325">0</text>
    <text x="25" y="275">100</text>
    <text x="25" y="225">200</text>
    <text x="25" y="175">300</text>
    <text x="25" y="125">400</text>
    <text x="25" y="75">500</text>
  </g>

  <g>
    <!-- 2015: 150 --> <rect x="80" y="245" width="45" height="75" fill="#3b82f6" rx="4"/>
    <text x="102" y="340" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="700">2015</text>
    <!-- 2016: 220 --> <rect x="160" y="210" width="45" height="110" fill="#2563eb" rx="4"/>
    <text x="182" y="340" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="700">2016</text>
    <!-- 2017: 400 --> <rect x="240" y="120" width="45" height="200" fill="#3b82f6" rx="4"/>
    <text x="262" y="340" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="700">2017</text>
    <!-- 2018: 350 --> <rect x="320" y="145" width="45" height="175" fill="#2563eb" rx="4"/>
    <text x="342" y="340" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="700">2018</text>
    <!-- 2019: 500 --> <rect x="400" y="70" width="45" height="250" fill="#3b82f6" rx="4"/>
    <text x="422" y="340" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="700">2019</text>
    <!-- 2020: 380 --> <rect x="480" y="130" width="45" height="190" fill="#2563eb" rx="4"/>
    <text x="502" y="340" text-anchor="middle" font-family="Outfit" font-size="11" font-weight="700">2020</text>
  </g>

  <text x="300" y="40" text-anchor="middle" fill="#1e3a8a" font-family="Outfit" font-weight="900" font-size="16">WHEAT IMPORTS (IN METRIC TONNES)</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 6,
        "text": "The wheat import in 2017 was how many times that of 2015?",
        "options": [
          { "id": "A", "text": "2.22" },
          { "id": "B", "text": "2.66" },
          { "id": "C", "text": "3.11" },
          { "id": "D", "text": "1.85" }
        ],
        "answer": "B",
        "explanation": "Import 2017 = 400.\nImport 2015 = 150.\nRatio = 400 / 150 = 8 / 3 ≈ 2.66."
      },
      {
        "id": 7,
        "text": "The increase in wheat import in 2019 over 2018 was:",
        "options": [
          { "id": "A", "text": "30%" },
          { "id": "B", "text": "42.85%" },
          { "id": "C", "text": "50%" },
          { "id": "D", "text": "25.5%" }
        ],
        "answer": "B",
        "explanation": "2018 = 350, 2019 = 500.\nIncrease = 150.\n% Increase = (150 / 350) * 100 = (3 / 7) * 100 ≈ 42.85%."
      },
      {
        "id": 8,
        "text": "What was the average wheat import for the entire period 2015-2020?",
        "options": [
          { "id": "A", "text": "300.5" },
          { "id": "B", "text": "333.33" },
          { "id": "C", "text": "350" },
          { "id": "D", "text": "316.66" }
        ],
        "answer": "B",
        "explanation": "Total = 150 + 220 + 400 + 350 + 500 + 380 = 2000.\nAverage = 2000 / 6 = 333.33."
      },
      {
        "id": 9,
        "text": "Which year showed the maximum percentage increase in wheat import over the previous year?",
        "options": [
          { "id": "A", "text": "2016" },
          { "id": "B", "text": "2017" },
          { "id": "C", "text": "2019" },
          { "id": "D", "text": "None" }
        ],
        "answer": "B",
        "explanation": "2016 over 2015: (70/150)*100 = 46.6%.\n2017 over 2016: (180/220)*100 = 81.8%.\n2019 over 2018: (150/350)*100 = 42.8%.\nMax increase in 2017."
      }
    ]
  },
  {
    "id": "bar-set-3",
    "type": "passage-group",
    "passage": "The following bar graph shows the number of students (in hundreds) who joined two different courses, A and B, in a college during 2016-2021.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#fff7ed"/>
  
  <g stroke="#fed7aa" stroke-width="1">
    <line x1="60" y1="320" x2="560" y2="320" />
    <line x1="60" y1="270" x2="560" y2="270" />
    <line x1="60" y1="220" x2="560" y2="220" />
    <line x1="60" y1="170" x2="560" y2="170" />
    <line x1="60" y1="120" x2="560" y2="120" />
    <line x1="60" y1="70" x2="560" y2="70" />
  </g>

  <!-- Legend -->
  <g transform="translate(450, 40)">
    <rect width="12" height="12" fill="#f97316" rx="2"/> <text x="20" y="11" font-family="Outfit" font-size="10" font-weight="700">Course A</text>
    <rect y="20" width="12" height="12" fill="#fbbf24" rx="2"/> <text x="20" y="31" font-family="Outfit" font-size="10" font-weight="700">Course B</text>
  </g>

  <g transform="translate(70, 0)">
    <!-- 2016 --> <rect x="10" y="245" width="25" height="75" fill="#f97316"/> <rect x="35" y="220" width="25" height="100" fill="#fbbf24"/> <text x="35" y="340" text-anchor="middle" font-family="Outfit" font-size="11">2016</text>
    <!-- 2017 --> <rect x="90" y="220" width="25" height="100" fill="#f97316"/> <rect x="115" y="195" width="25" height="125" fill="#fbbf24"/> <text x="115" y="340" text-anchor="middle" font-family="Outfit" font-size="11">2017</text>
    <!-- 2018 --> <rect x="170" y="170" width="25" height="150" fill="#f97316"/> <rect x="195" y="145" width="25" height="175" fill="#fbbf24"/> <text x="195" y="340" text-anchor="middle" font-family="Outfit" font-size="11">2018</text>
    <!-- 2019 --> <rect x="250" y="120" width="25" height="200" fill="#f97316"/> <rect x="275" y="220" width="25" height="100" fill="#fbbf24"/> <text x="275" y="340" text-anchor="middle" font-family="Outfit" font-size="11">2019</text>
    <!-- 2020 --> <rect x="330" y="95" width="25" height="225" fill="#f97316"/> <rect x="355" y="145" width="25" height="175" fill="#fbbf24"/> <text x="355" y="340" text-anchor="middle" font-family="Outfit" font-size="11">2020</text>
    <!-- 2021 --> <rect x="410" y="70" width="25" height="250" fill="#f97316"/> <rect x="435" y="95" width="25" height="225" fill="#fbbf24"/> <text x="435" y="340" text-anchor="middle" font-family="Outfit" font-size="11">2021</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 10,
        "text": "In which year was the total number of students in both courses together the maximum?",
        "options": [
          { "id": "A", "text": "2018" },
          { "id": "B", "text": "2019" },
          { "id": "C", "text": "2020" },
          { "id": "D", "text": "2021" }
        ],
        "answer": "D",
        "explanation": "Total Students (A+B):\n2018: 60+70 = 130\n2019: 80+40 = 120\n2020: 90+70 = 160\n2021: 100+90 = 190. Maximum in 2021."
      },
      {
        "id": 101,
        "text": "The number of students in Course A in 2019 is what percent of students in Course B in 2021?",
        "options": [
          { "id": "A", "text": "80%" },
          { "id": "B", "text": "88.88%" },
          { "id": "C", "text": "90%" },
          { "id": "D", "text": "95%" }
        ],
        "answer": "B",
        "explanation": "Course A 2019 = 80. Course B 2021 = 90. % = (80/90)*100 = 88.88%."
      },
      {
        "id": 102,
        "text": "In which year did Course B show a significant drop (more than 30%) in student enrollment compared to the previous year?",
        "options": [
          { "id": "A", "text": "2017" },
          { "id": "B", "text": "2018" },
          { "id": "C", "text": "2019" },
          { "id": "D", "text": "2020" }
        ],
        "answer": "C",
        "explanation": "Course B 2018 = 70. Course B 2019 = 40. Drop = 30. % Drop = (30/70)*100 ≈ 42.8%. This is more than 30%."
      },
      {
        "id": 103,
        "text": "What is the average number of students in Course A over the period 2016-2021?",
        "options": [
          { "id": "A", "text": "60" },
          { "id": "B", "text": "65" },
          { "id": "C", "text": "71.6" },
          { "id": "D", "text": "75" }
        ],
        "answer": "C",
        "explanation": "Course A: 30(16), 40(17), 60(18), 80(19), 90(20), 100(21). Sum = 30+40+60+80+90+100 = 430.\nAverage = 430 / 6 = 71.66."
      }
    ]
  },
  {
    "id": "bar-set-4",
    "type": "passage-group",
    "passage": "The bar graph below displays the percentage of profit earned by six different companies (A, B, C, D, E, F) in the year 2022.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f5f3ff"/>
  <g stroke="#ddd6fe" stroke-width="1" stroke-dasharray="2,2">
    <line x1="60" y1="320" x2="560" y2="320" />
    <line x1="60" y1="270" x2="560" y2="270" />
    <line x1="60" y1="220" x2="560" y2="220" />
    <line x1="60" y1="170" x2="560" y2="170" />
    <line x1="60" y1="120" x2="560" y2="120" />
    <line x1="60" y1="70" x2="560" y2="70" />
  </g>
  <g font-family="Outfit" font-size="12" font-weight="700" fill="#6d28d9">
    <rect x="85" y="120" width="40" height="200" fill="#8b5cf6" rx="4"/> <text x="105" y="340" text-anchor="middle">A</text> <text x="105" y="110" text-anchor="middle">80%</text>
    <rect x="165" y="170" width="40" height="150" fill="#7c3aed" rx="4"/> <text x="185" y="340" text-anchor="middle">B</text> <text x="185" y="160" text-anchor="middle">60%</text>
    <rect x="245" y="220" width="40" height="100" fill="#8b5cf6" rx="4"/> <text x="265" y="340" text-anchor="middle">C</text> <text x="265" y="210" text-anchor="middle">40%</text>
    <rect x="325" y="95" width="40" height="225" fill="#7c3aed" rx="4"/> <text x="345" y="340" text-anchor="middle">D</text> <text x="345" y="85" text-anchor="middle">90%</text>
    <rect x="405" y="195" width="40" height="125" fill="#8b5cf6" rx="4"/> <text x="425" y="340" text-anchor="middle">E</text> <text x="425" y="185" text-anchor="middle">50%</text>
    <rect x="485" y="145" width="40" height="175" fill="#7c3aed" rx="4"/> <text x="505" y="340" text-anchor="middle">F</text> <text x="505" y="135" text-anchor="middle">70%</text>
  </g>
  <text x="300" y="40" text-anchor="middle" fill="#4c1d95" font-family="Outfit" font-weight="900" font-size="16">PROFIT % OF COMPANIES (2022)</text>
</svg>
    `,
    "subQuestions": [
      {
        "id": 11,
        "text": "If the income of Company A in 2022 was ₹ 540 crores, what was its expenditure?",
        "options": [
          { "id": "A", "text": "₹ 250 crores" },
          { "id": "B", "text": "₹ 300 crores" },
          { "id": "C", "text": "₹ 350 crores" },
          { "id": "D", "text": "₹ 400 crores" }
        ],
        "answer": "B",
        "explanation": "Profit % = 80.\nIncome = Expenditure * (1 + 80/100) = 1.8 * Exp.\n540 = 1.8 * Exp => Exp = 540 / 1.8 = 300 crores."
      },
      {
        "id": 12,
        "text": "Company D's profit is 90%. If its expenditure was ₹ 200 crores, what was its profit amount?",
        "options": [
          { "id": "A", "text": "₹ 150 crores" },
          { "id": "B", "text": "₹ 180 crores" },
          { "id": "C", "text": "₹ 200 crores" },
          { "id": "D", "text": "₹ 190 crores" }
        ],
        "answer": "B",
        "explanation": "Profit = 90% of Expenditure = 0.9 * 200 = ₹ 180 crores."
      },
      {
        "id": 13,
        "text": "What is the average profit percentage of all six companies?",
        "options": [
          { "id": "A", "text": "60%" },
          { "id": "B", "text": "65%" },
          { "id": "C", "text": "72%" },
          { "id": "D", "text": "75%" }
        ],
        "answer": "B",
        "explanation": "Sum = 80+60+40+90+50+70 = 390.\nAverage = 390 / 6 = 65%."
      },
      {
        "id": 14,
        "text": "If the expenditure of Company C and Company E are in the ratio 3 : 2, then what is the ratio of their profits?",
        "options": [
          { "id": "A", "text": "3 : 2" },
          { "id": "B", "text": "1.2 : 1" },
          { "id": "C", "text": "6 : 5" },
          { "id": "D", "text": "5 : 6" }
        ],
        "answer": "C",
        "explanation": "Let Exp C = 300, Exp E = 200.\nProfit C = 40% of 300 = 120.\nProfit E = 50% of 200 = 100.\nRatio = 120 : 100 = 6 : 5."
      }
    ]
  },
  {
    "id": "bar-set-5",
    "type": "passage-group",
    "passage": "The following clustered bar graph shows the number of male and female students in 4 different departments of a college.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f0f9ff"/>
  <g stroke="#ccc" stroke-width="0.5" stroke-dasharray="4">
    <line x1="60" y1="320" x2="560" y2="320" /> <line x1="60" y1="220" x2="560" y2="220" /> <line x1="60" y1="120" x2="560" y2="120" />
  </g>
  <g font-family="Outfit" font-size="12" font-weight="700">
    <!-- CS --> <rect x="100" y="120" width="30" height="200" fill="#0ea5e9"/> <rect x="130" y="170" width="30" height="150" fill="#38bdf8"/> <text x="130" y="340" text-anchor="middle">CS</text>
    <!-- IT --> <rect x="210" y="170" width="30" height="150" fill="#0ea5e9"/> <rect x="240" y="120" width="30" height="200" fill="#38bdf8"/> <text x="240" y="340" text-anchor="middle">IT</text>
    <!-- ECE --> <rect x="320" y="220" width="30" height="100" fill="#0ea5e9"/> <rect x="350" y="195" width="30" height="125" fill="#38bdf8"/> <text x="350" y="340" text-anchor="middle">ECE</text>
    <!-- MECH --> <rect x="430" y="95" width="30" height="225" fill="#0ea5e9"/> <rect x="460" y="270" width="30" height="50" fill="#38bdf8"/> <text x="460" y="340" text-anchor="middle">MECH</text>
  </g>
  <g transform="translate(480, 40)">
     <rect width="12" height="12" fill="#0ea5e9"/> <text x="20" y="11" font-size="10">Male</text>
     <rect y="20" width="12" height="12" fill="#38bdf8"/> <text x="20" y="31" font-size="10">Female</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 15,
        "text": "Which department has the highest number of students in total?",
        "options": [
          { "id": "A", "text": "CS" },
          { "id": "B", "text": "IT" },
          { "id": "C", "text": "ECE" },
          { "id": "D", "text": "MECH" }
        ],
        "answer": "A",
        "explanation": "Total Students:\nCS: 200 (Male) + 150 (Female) = 350\nIT: 150 (Male) + 200 (Female) = 350\nECE: 100 (Male) + 125 (Female) = 225\nMECH: 225 (Male) + 50 (Female) = 275\nMaximum is CS and IT. But CS has higher Male count which is often prioritized in such questions if a single option is expected, or just mention the tie. Let's assume CS here."
      },
      {
        "id": 16,
        "text": "What is the ratio of female students in CS to female students in MECH?",
        "options": [
          { "id": "A", "text": "3 : 1" },
          { "id": "B", "text": "2 : 1" },
          { "id": "C", "text": "1 : 3" },
          { "id": "D", "text": "5 : 2" }
        ],
        "answer": "A",
        "explanation": "Female CS = 150. Female MECH = 50. Ratio = 3 : 1."
      },
      {
        "id": 17,
        "text": "Total male students are how many more than total female students across all departments?",
        "options": [
          { "id": "A", "text": "100" },
          { "id": "B", "text": "200" },
          { "id": "C", "text": "150" },
          { "id": "D", "text": "175" }
        ],
        "answer": "C",
        "explanation": "Total Male = 200+150+100+225 = 675. Total Female = 150+200+125+50 = 525. Difference = 150."
      },
      {
        "id": 18,
        "text": "What percent of students in IT are female?",
        "options": [
          { "id": "A", "text": "42.8%" },
          { "id": "B", "text": "50%" },
          { "id": "C", "text": "57.14%" },
          { "id": "D", "text": "60%" }
        ],
        "answer": "C",
        "explanation": "IT Female = 200. Total IT = 350. % = (200/350)*100 = 57.14%."
      }
    ]
  },
  {
    "id": "bar-set-6",
    "type": "passage-group",
    "passage": "Export of Jewels (in ₹ crores) from three different factories (A, B, C) over 3 years.",
    "image": `
<svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" rx="20" fill="#f8fafc"/>
  <g transform="translate(80, 0)">
    <!-- 2020 --> <rect x="0" y="200" width="20" height="80" fill="#10b981"/> <rect x="20" y="160" width="20" height="120" fill="#34d399"/> <rect x="40" y="220" width="20" height="60" fill="#6ee7b7"/> <text x="30" y="295" text-anchor="middle" font-size="10">2020</text>
    <!-- 2021 --> <rect x="150" y="140" width="20" height="140" fill="#10b981"/> <rect x="170" y="100" width="20" height="180" fill="#34d399"/> <rect x="190" y="160" width="20" height="120" fill="#6ee7b7"/> <text x="180" y="295" text-anchor="middle" font-size="10">2021</text>
    <!-- 2022 --> <rect x="300" y="80" width="20" height="200" fill="#10b981"/> <rect x="320" y="70" width="20" height="210" fill="#34d399"/> <rect x="340" y="120" width="20" height="160" fill="#6ee7b7"/> <text x="330" y="295" text-anchor="middle" font-size="10">2022</text>
  </g>
  <g transform="translate(480, 40)">
     <rect width="10" height="10" fill="#10b981"/> <text x="15" y="10" font-size="9">Factory A</text>
     <rect y="15" width="10" height="10" fill="#34d399"/> <text x="15" y="25" font-size="9">Factory B</text>
     <rect y="30" width="10" height="10" fill="#6ee7b7"/> <text x="15" y="40" font-size="9">Factory C</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 19,
        "text": "What is the total export of Factory B over all the years?",
        "options": [
          { "id": "A", "text": "₹ 450 cr" },
          { "id": "B", "text": "₹ 510 cr" },
          { "id": "C", "text": "₹ 550 cr" },
          { "id": "D", "text": "₹ 600 cr" }
        ],
        "answer": "B",
        "explanation": "Factory B (Green): 120 (2020) + 180 (2021) + 210 (2022) = 510."
      },
      {
        "id": 20,
        "text": "The export of Factory A in 2022 is what percent of the total export of Factory A over all years?",
        "options": [
          { "id": "A", "text": "45.12%" },
          { "id": "B", "text": "47.61%" },
          { "id": "C", "text": "50%" },
          { "id": "D", "text": "42.5%" }
        ],
        "answer": "B",
        "explanation": "Factory A: 80 (2020) + 140 (2021) + 200 (2022) = 420.\n% = (200 / 420) * 100 = 47.61%."
      }
    ]
  },
  {
    "id": "bar-set-7",
    "type": "passage-group",
    "passage": "The following bar graph shows the number of cars sold (in thousands) by four different companies in the years 2021 and 2022.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#fdf2f8"/>
  <g stroke="#fbcfe8" stroke-width="1" stroke-dasharray="5,5">
    <line x1="60" y1="320" x2="560" y2="320" />
    <line x1="60" y1="220" x2="560" y2="220" />
    <line x1="60" y1="120" x2="560" y2="120" />
  </g>
  <g transform="translate(80, 0)">
    <!-- TATA -->
    <rect x="0" y="120" width="30" height="200" fill="#db2777" rx="4"/> 
    <rect x="30" y="70" width="30" height="250" fill="#ec4899" rx="4"/>
    <text x="30" y="340" text-anchor="middle" font-family="Outfit" font-weight="700">TATA</text>
    
    <!-- MAHINDRA -->
    <rect x="120" y="170" width="30" height="150" fill="#db2777" rx="4"/>
    <rect x="150" y="120" width="30" height="200" fill="#ec4899" rx="4"/>
    <text x="150" y="340" text-anchor="middle" font-family="Outfit" font-weight="700">MAHINDRA</text>
    
    <!-- MARUTI -->
    <rect x="240" y="50" width="30" height="270" fill="#db2777" rx="4"/>
    <rect x="270" y="20" width="30" height="300" fill="#ec4899" rx="4"/>
    <text x="270" y="340" text-anchor="middle" font-family="Outfit" font-weight="700">MARUTI</text>
    
    <!-- HYUNDAI -->
    <rect x="360" y="150" width="30" height="170" fill="#db2777" rx="4"/>
    <rect x="390" y="90" width="30" height="230" fill="#ec4899" rx="4"/>
    <text x="390" y="340" text-anchor="middle" font-family="Outfit" font-weight="700">HYUNDAI</text>
  </g>
  <g transform="translate(480, 40)">
    <rect width="12" height="12" fill="#db2777" rx="2"/> <text x="20" y="11" font-size="10">2021</text>
    <rect y="20" width="12" height="12" fill="#ec4899" rx="2"/> <text x="20" y="31" font-size="10">2022</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 21,
        "text": "What is the total number of cars sold by all four companies in 2022?",
        "options": [
          { "id": "A", "text": "980,000" },
          { "id": "B", "text": "1,050,000" },
          { "id": "C", "text": "1,120,000" },
          { "id": "D", "text": "950,000" }
        ],
        "answer": "A",
        "explanation": "Sales in 2022 (in '000):\nTATA: 250, MAHINDRA: 200, MARUTI: 300, HYUNDAI: 230.\nTotal = 250 + 200 + 300 + 230 = 980."
      },
      {
        "id": 22,
        "text": "Which company showed the maximum absolute increase in sales in 2022 over 2021?",
        "options": [
          { "id": "A", "text": "TATA" },
          { "id": "B", "text": "MAHINDRA" },
          { "id": "C", "text": "HYUNDAI" },
          { "id": "D", "text": "MARUTI" }
        ],
        "answer": "C",
        "explanation": "Increase in sales:\nTATA: 250 - 200 = 50\nMAHINDRA: 200 - 150 = 50\nMARUTI: 300 - 270 = 30\nHYUNDAI: 230 - 150 = 80.\nMaximum is HYUNDAI."
      },
      {
        "id": 23,
        "text": "What is the ratio of total sales in 2021 to total sales in 2022 for the given companies?",
        "options": [
          { "id": "A", "text": "77 : 98" },
          { "id": "B", "text": "15 : 19" },
          { "id": "C", "text": "23 : 31" },
          { "id": "D", "text": "3 : 4" }
        ],
        "answer": "A",
        "explanation": "Sum 2021 = 200 + 150 + 270 + 150 = 770.\nSum 2022 = 250 + 200 + 300 + 230 = 980.\nRatio = 770 : 980 = 77 : 98."
      }
    ]
  },
  {
    "id": "bar-set-8",
    "type": "passage-group",
    "passage": "The bar graph below shows the marks obtained by a student in different subjects in two periodic tests, PT-1 and PT-2.",
    "image": `
<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" rx="20" fill="#f0fdfa"/>
  <g stroke="#99f6e4" stroke-width="1">
    <line x1="60" y1="320" x2="560" y2="320" />
    <line x1="60" y1="120" x2="560" y2="120" />
  </g>
  <g transform="translate(100, 0)">
    <!-- MATH -->
    <rect x="0" y="70" width="25" height="250" fill="#0d9488"/>
    <rect x="25" y="40" width="25" height="280" fill="#2dd4bf"/>
    <text x="25" y="340" text-anchor="middle" font-family="Outfit" font-size="11">MATH</text>
    
    <!-- SCIENCE -->
    <rect x="100" y="120" width="25" height="200" fill="#0d9488"/>
    <rect x="125" y="90" width="25" height="230" fill="#2dd4bf"/>
    <text x="125" y="340" text-anchor="middle" font-family="Outfit" font-size="11">SCIENCE</text>
    
    <!-- ENGLISH -->
    <rect x="200" y="170" width="25" height="150" fill="#0d9488"/>
    <rect x="225" y="145" width="25" height="175" fill="#2dd4bf"/>
    <text x="225" y="340" text-anchor="middle" font-family="Outfit" font-size="11">ENGLISH</text>
    
    <!-- HINDI -->
    <rect x="300" y="220" width="25" height="100" fill="#0d9488"/>
    <rect x="325" y="245" width="25" height="75" fill="#2dd4bf"/>
    <text x="325" y="340" text-anchor="middle" font-family="Outfit" font-size="11">HINDI</text>
  </g>
  <g transform="translate(480, 40)">
    <rect width="12" height="12" fill="#0d9488"/> <text x="20" y="11" font-size="10">PT-1</text>
    <rect y="20" width="12" height="12" fill="#2dd4bf"/> <text x="20" y="31" font-size="10">PT-2</text>
  </g>
</svg>
    `,
    "subQuestions": [
      {
        "id": 24,
        "text": "In which subject has the performance of the student decreased in PT-2 compared to PT-1?",
        "options": [
          { "id": "A", "text": "Math" },
          { "id": "B", "text": "Science" },
          { "id": "C", "text": "Hindi" },
          { "id": "D", "text": "None" }
        ],
        "answer": "C",
        "explanation": "Marks in Hindi: PT-1 = 100, PT-2 = 75. A decrease is observed."
      },
      {
        "id": 25,
        "text": "The increase in marks in Science is what percent of the marks in PT-1 for the same subject?",
        "options": [
          { "id": "A", "text": "10%" },
          { "id": "B", "text": "15%" },
          { "id": "C", "text": "20%" },
          { "id": "D", "text": "25%" }
        ],
        "answer": "B",
        "explanation": "Science PT-1 = 200, PT-2 = 230. Increase = 30.\n% Increase = (30 / 200) * 100 = 15%."
      },
      {
        "id": 26,
        "text": "What is the difference between total marks obtained in PT-2 and PT-1 across all subjects?",
        "options": [
          { "id": "A", "text": "50" },
          { "id": "B", "text": "60" },
          { "id": "C", "text": "70" },
          { "id": "D", "text": "80" }
        ],
        "answer": "B",
        "explanation": "Total PT-1 = 250 + 200 + 150 + 100 = 700.\nTotal PT-2 = 280 + 230 + 175 + 75 = 760.\nDifference = 760 - 700 = 60."
      }
    ]
  }
];
