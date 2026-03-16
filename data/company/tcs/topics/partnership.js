export const questions = [
  {
    id: 1,
    text: "A and B started a business with investments of ₹20,000 and ₹30,000 respectively. If the total profit at the end of the year is ₹15,000, what is A's share?",
    options: [
      { id: "A", text: "₹5,000" },
      { id: "B", text: "₹6,000" },
      { id: "C", text: "₹7,500" },
      { id: "D", text: "₹9,000" }
    ],
    answer: "B",
    explanation: "Investment ratio A:B = 20000:30000 = 2:3. \nTotal parts = 2 + 3 = 5. \nA's share = (2/5) × 15000 = ₹6,000."
  },
  {
    id: 2,
    text: "X, Y and Z invested ₹10,000, ₹15,000 and ₹20,000 for periods of 12, 8 and 6 months respectively. What is the ratio of their profits?",
    options: [
      { id: "A", text: "1:1:1" },
      { id: "B", text: "2:3:4" },
      { id: "C", text: "12:12:12" },
      { id: "D", text: "10:15:20" }
    ],
    answer: "A",
    explanation: "Profit Ratio = (Investment × Time). \nX: (10000 × 12) = 120,000 \nY: (15000 × 8) = 120,000 \nZ: (20000 × 6) = 120,000 \nRatio = 1:1:1."
  },
  {
    id: 3,
    text: "A invests ₹500 more than B. B's investment is ₹2,000. If A's share in a total profit of ₹900 is ₹500, how long was A's investment if B invested for 10 months?",
    options: [
      { id: "A", text: "8 months" },
      { id: "B", text: "12 months" },
      { id: "C", text: "10 months" },
      { id: "D", text: "15 months" }
    ],
    answer: "A",
    explanation: "A's investment = 2000 + 500 = 2500. \nRatio of profits = A's share : B's share = 500 : (900-500) = 5:4. \n(Investment_A × Time_A) / (Investment_B × Time_B) = 5/4 \n(2500 × T) / (2000 × 10) = 5/4 \n2500T / 20000 = 5/4 \nT/8 = 5/4 -> T = 10 months? Wait. \n2500T/20000 = 5/4 \nT/8 = 5/4 -> T = 10. \nLet's recheck: 2500*10 = 25000, 2000*10 = 20000. Ratio 25:20 = 5:4. Correct."
  }
];
