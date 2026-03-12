export const questions = [
  {
    "id": 1,
    "text": "A and B together can complete a work in 20 days, B and C together in 60 days, and C alone in 120 days. In how many days can A and C together complete the work?",
    "options": [
      { "id": "A", "text": "20 days" },
      { "id": "B", "text": "24 days" },
      { "id": "C", "text": "30 days" },
      { "id": "D", "text": "36 days" }
    ],
    "answer": "A",
    "explanation": "Rate of (B + C) = 1/60\nRate of C = 1/120\nRate of B = (B + C) - C = 1/60 - 1/120 = 1/120\nRate of (A + B) = 1/20\nRate of A = (A + B) - B = 1/20 - 1/120 = 5/120 = 1/24\nRate of (A + C) = 1/24 + 1/120 = (5 + 1)/120 = 6/120 = 1/20\nSo, A and C together take 20 days."
  },
  {
    "id": 2,
    "text": "The efficiency of A is 200% more than C and the efficiency of D is 25% less than C. If A and B together can complete a work in 14 days and C and D together in 36 days, how many days will B alone take to complete the work?",
    "options": [
      { "id": "A", "text": "42 days" },
      { "id": "B", "text": "45 days" },
      { "id": "C", "text": "48 days" },
      { "id": "D", "text": "40 days" }
    ],
    "answer": "A",
    "explanation": "Efficiency Ratio A:C = 300:100 = 3:1\nEfficiency Ratio D:C = 75:100 = 3:4\nLet Rate of C = 4x, then Rate of D = 3x and Rate of A = 12x.\nRate of (C + D) = 4x + 3x = 7x = 1/36\nx = 1 / (36 * 7) = 1/252\nRate of A = 12 * (1/252) = 1/21\nRate of (A + B) = 1/14\nRate of B = 1/14 - 1/21 = (3 - 2)/42 = 1/42\nB alone takes 42 days."
  },
  {
    "id": 3,
    "text": "A and B together can complete 3/4 of a work in 9 days. B and C together can complete 2/3 of the work in 80/7 days. A and C together can complete 75% of the work in 10 days. In how many days can A alone complete the work?",
    "options": [
      { "id": "A", "text": "12 days" },
      { "id": "B", "text": "24 days" },
      { "id": "C", "text": "20 days" },
      { "id": "D", "text": "16 days" }
    ],
    "answer": "C",
    "explanation": "Whole work time:\n(A + B) = 9 * 4/3 = 12 days\n(B + C) = (80/7) * 3/2 = 120/7 days\n(A + C) = 10 * 4/3 = 40/3 days\n2(A + B + C) rate = 1/12 + 7/120 + 3/40 = (10 + 7 + 9)/120 = 26/120 = 13/60\n(A + B + C) rate = 13/120\nRate of A = (A + B + C) - (B + C) = 13/120 - 7/120 = 6/120 = 1/20\nA alone takes 20 days."
  },
  {
    "id": 4,
    "text": "A alone can complete a work in 50 days, (A + B) in 30 days, and (A + B + C) in 20 days. Find the time taken by B and C together to complete the work if B increases its efficiency by 25% and C by 20%.",
    "options": [
      { "id": "A", "text": "27 3/11 days" },
      { "id": "B", "text": "25 4/11 days" },
      { "id": "C", "text": "26 3/11 days" },
      { "id": "D", "text": "24 3/11 days" }
    ],
    "answer": "A",
    "explanation": "Rate A = 1/50\nRate B = 1/30 - 1/50 = 2/150 = 1/75\nRate C = 1/20 - 1/30 = 1/60\nNew Rate B = (1/75) * 1.25 = 1/60\nNew Rate C = (1/60) * 1.20 = 1/50\nCombined Rate (B + C) = 1/60 + 1/50 = 11/300\nTime = 300/11 = 27 3/11 days."
  },
  {
    "id": 5,
    "text": "A and B together can complete a work in 6 days and the ratio of their efficiency is 3:2. If (A + B + C) can complete it in 4 days and the total wages are Rs. 4500, find the wages of C.",
    "options": [
      { "id": "A", "text": "Rs. 1000" },
      { "id": "B", "text": "Rs. 1800" },
      { "id": "C", "text": "Rs. 1500" },
      { "id": "D", "text": "Rs. 2000" }
    ],
    "answer": "C",
    "explanation": "Rate (A + B) = 1/6. Ratio A:B efficiency = 3:2.\nRate A = (3/5) * (1/6) = 1/10\nRate B = (2/5) * (1/6) = 1/15\nRate (A + B + C) = 1/4\nRate C = 1/4 - 1/6 = 1/12\nWage for C = (Rate C / Total Rate) * Total Wages = (1/12 / 1/4) * 4500 = (1/3) * 4500 = Rs. 1500."
  },
  {
    "id": 6,
    "text": "A alone can complete a work in 72 days and the ratio of efficiency A:C is 2:3. If (A + B + C) can do it in 16 days and total wages are Rs. 4500, find the wages of B.",
    "options": [
      { "id": "A", "text": "Rs. 2400" },
      { "id": "B", "text": "Rs. 180" },
      { "id": "C", "text": "Rs. 2000" },
      { "id": "D", "text": "Rs. 3200" }
    ],
    "answer": "C",
    "explanation": "Rate A = 1/72. Eff A:C = 2:3 => Rate C = (3/2) * (1/72) = 1/48.\nRate (A + B + C) = 1/16.\nRate B = 1/16 - (1/72 + 1/48) = 1/16 - 5/144 = (9 - 5)/144 = 4/144 = 1/36.\nWages B = (Rate B / Total Rate) * Total Wages = (1/36 / 1/16) * 4500 = (16/36) * 4500 = (4/9) * 4500 = Rs. 2000."
  },
  {
    "id": 7,
    "text": "4 men and 6 women can complete a work in 5 days, while 6 men and 4 women do it in 4 days. In how many days can 4 men and 2 women complete the same work?",
    "options": [
      { "id": "A", "text": "6.25 days" },
      { "id": "B", "text": "4.25 days" },
      { "id": "C", "text": "12.25 days" },
      { "id": "D", "text": "10.25 days" }
    ],
    "answer": "A",
    "explanation": "5(4M + 6W) = 4(6M + 4W) => 20M + 30W = 24M + 16W => 4M = 14W => 2M = 7W.\nTotal work = 5(4M + 6W) = 5(14W + 6W) = 100W units.\nGroup (4M + 2W) = (14W + 2W) = 16W units.\nTime = 100 / 16 = 6.25 days."
  },
  {
    "id": 8,
    "text": "Raj completes a work in 10 days. Vel and Yuktha together in 8 days. Yuktha and Raj together in 5 days. In how many days can Vel alone do the work?",
    "options": [
      { "id": "A", "text": "15 days" },
      { "id": "B", "text": "20 days" },
      { "id": "C", "text": "25 days" },
      { "id": "D", "text": "30 days" },
      { "id": "E", "text": "40 days" }
    ],
    "answer": "E",
    "explanation": "Rate Raj = 1/10. Rate (Raj + Yuktha) = 1/5.\nRate Yuktha = 1/5 - 1/10 = 1/10.\nRate (Vel + Yuktha) = 1/8.\nRate Vel = 1/8 - 1/10 = (5 - 4)/40 = 1/40.\nVel takes 40 days."
  },
  {
    "id": 9,
    "text": "A can complete a work in 18 days and B in 9 days. They start together, but after 3 days B leaves. In how many days will the remaining work be completed by A alone?",
    "options": [
      { "id": "A", "text": "9 days" },
      { "id": "B", "text": "10 days" },
      { "id": "C", "text": "12 days" },
      { "id": "D", "text": "14 days" }
    ],
    "answer": "A",
    "explanation": "Rate (A + B) = 1/18 + 1/9 = 3/18 = 1/6.\nWork done in 3 days = 3 * (1/6) = 1/2.\nRemaining work = 1/2.\nTime for A = (1/2) / (1/18) = 9 days."
  },
  {
    "id": 10,
    "text": "A alone completes a work in 56 days. The efficiency of B is 40% more than A, and the ratio of B to C efficiency is 7:8. If they start together, but A leaves 11 days before and B leaves 5 days before completion, in how many days is the work finished?",
    "options": [
      { "id": "A", "text": "19.5 days" },
      { "id": "B", "text": "18.5 days" },
      { "id": "C", "text": "20.5 days" },
      { "id": "D", "text": "15.5 days" }
    ],
    "answer": "B",
    "explanation": "Rate A = 1/56.\nRate B = 1.4 * (1/56) = 1/40.\nRate C = (8/7) * (1/40) = 1/35.\nLet total time be x days.\n(x-11)/56 + (x-5)/40 + x/35 = 1\nLCM = 280\n5(x-11) + 7(x-5) + 8x = 280\n5x - 55 + 7x - 35 + 8x = 280\n20x = 370 => x = 18.5 days."
  }
];
