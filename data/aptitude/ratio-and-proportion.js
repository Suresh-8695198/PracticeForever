export const questions = [
  {
    "id": 1,
    "text": "In an examination, the number of passed candidates was five times the number of failed candidates. If there had been 40 less candidates appeared and 20 more candidates had failed, then the ratio of passed to failed candidates becomes 3: 1. Then find the total number of candidates failed initially.",
    "options": [
      { "id": "A", "text": "70" },
      { "id": "B", "text": "60" },
      { "id": "C", "text": "50" },
      { "id": "D", "text": "300" }
    ],
    "answer": "B",
    "explanation": "Let failed = X, Passed = 5X. Total candidates = 6X.\nIf 40 less appeared, new total = 6X - 40.\nIf 20 more failed, new failed = X + 20.\nNew passed = (6X - 40) - (X + 20) = 5X - 60.\n\nRatio: (5X - 60) / (X + 20) = 3 / 1\n5X - 60 = 3X + 60\n2X = 120 => X = 60.\nInitial failed candidates = 60."
  },
  {
    "id": 2,
    "text": "The ratio of the number of literate and illiterate population in the city is 8:5. If 40% of the illiterate population are female and the number of literate male population in the city is 9600 and the number of literate population is 8400 more than the number of illiterate population, then find the number of female population in the city?",
    "options": [
      { "id": "A", "text": "18200" },
      { "id": "B", "text": "18400" },
      { "id": "C", "text": "18600" },
      { "id": "D", "text": "18800" }
    ],
    "answer": "B",
    "explanation": "Let literate = 8x, illiterate = 5x.\n8x - 5x = 8400 => 3x = 8400 => x = 2800.\nLiterate = 22400, Illiterate = 14000.\nTotal population = 22400 + 14000 = 36400.\n\nIlliterate population detail: 40% are female => 60% are male.\nIlliterate male = 0.60 * 14000 = 8400.\nTotal male = Literate male + Illiterate male = 9600 + 8400 = 18000.\nFemale population = Total - Male = 36400 - 18000 = 18400."
  },
  {
    "id": 3,
    "text": "The total population of town A is 2/5th of the total population of town B and the ratio of the total population of town A to C is 4:7. If the total population of towns A and C together is 150 more than that of town B, then find the total population of town C?",
    "options": [
      { "id": "A", "text": "700" },
      { "id": "B", "text": "1400" },
      { "id": "C", "text": "1050" },
      { "id": "D", "text": "840" }
    ],
    "answer": "C",
    "explanation": "A = 2/5 B => B = 5/2 A = 2.5A.\nRatio A:C = 4:7.\nLet A = 4x, C = 7x. Then B = 2.5 * 4x = 10x.\n\nCondition: A + C = B + 150\n4x + 7x = 10x + 150\n11x - 10x = 150 => x = 150.\nPopulation of Town C = 7x = 7 * 150 = 1050."
  },
  {
    "id": 4,
    "text": "The ratio of the total number of male and females in a company is 4:5. If 18 employees resigned from the company and 12 new male employees and 10 new female employees joined the company, then the ratio becomes 14:15. Find the initial number of employees in the company.",
    "options": [
      { "id": "A", "text": "89" },
      { "id": "B", "text": "54" },
      { "id": "C", "text": "65" },
      { "id": "D", "text": "45" }
    ],
    "answer": "B",
    "explanation": "Initial male = 4x, initial female = 5x.\nAssuming 18 resigned in the same ratio 4:5 (Male: 8, Female: 10).\nNew Male = 4x - 8 + 12 = 4x + 4.\nNew Female = 5x - 10 + 10 = 5x.\n\nRatio (4x + 4) / 5x = 14 / 15\n15(4x + 4) = 14 * 5x\n60x + 60 = 70x => 10x = 60 => x = 6.\nInitial total = 9x = 9 * 6 = 54."
  },
  {
    "id": 5,
    "text": "The ratio of the expenditure to savings of Rajesh is 2:1 and 25% of the income of Nallu is equal to 40% of the income of Rajesh. If the expenditure of Nallu is double the expenditure of Rajesh, then the savings of Nallu is what percentage of the savings of Rajesh?",
    "options": [
      { "id": "A", "text": "70%" },
      { "id": "B", "text": "30%" },
      { "id": "C", "text": "80%" },
      { "id": "D", "text": "50%" }
    ],
    "answer": "C",
    "explanation": "Rajesh: Income = Exp + Sav. Exp:Sav = 2:1 => Exp = 2x, Sav = x, Income = 3x.\nNallu: 0.25 * Income_N = 0.40 * 3x => Income_N = (0.40 / 0.25) * 3x = 1.6 * 3x = 4.8x.\nExp_N = 2 * Exp_R = 2 * 2x = 4x.\nSav_N = Income_N - Exp_N = 4.8x - 4x = 0.8x.\n\nSavings of Nallu as % of Rajesh = (0.8x / x) * 100 = 80%."
  },
  {
    "id": 6,
    "text": "Ratio of the income to the expenditure of A and B is 5:4 and 8:7 respectively and the sum of their savings is Rs.9000 and the savings of A is Rs.1000 more than that of B. Find the difference between their incomes.",
    "options": [
      { "id": "A", "text": "Rs.7000" },
      { "id": "B", "text": "Rs.4500" },
      { "id": "C", "text": "Rs.6000" },
      { "id": "D", "text": "Rs.8000" }
    ],
    "answer": "A",
    "explanation": "Sav_A + Sav_B = 9000, Sav_A - Sav_B = 1000 => Sav_A = 5000, Sav_B = 4000.\nFor A: Income:Exp = 5:4 => Sav = 1 unit = 5000. Income_A = 5 * 5000 = 25000.\nFor B: Income:Exp = 8:7 => Sav = 1 unit = 4000. Income_B = 8 * 4000 = 32000.\nDifference = 32000 - 25000 = Rs.7000."
  },
  {
    "id": 7,
    "text": "The income of Gray is 125% of the income of Parker and the income of Robert is 50% more than that of Parker. If the difference between the income of Gray and Robert is Rs.2100, then find the income of Parker?",
    "options": [
      { "id": "A", "text": "Rs.8400" },
      { "id": "B", "text": "Rs.7200" },
      { "id": "C", "text": "Rs.9600" },
      { "id": "D", "text": "Rs.8200" }
    ],
    "answer": "A",
    "explanation": "Parker = x, Gray = 1.25x, Robert = 1.5x.\nRobert - Gray = 1.5x - 1.25x = 0.25x.\n0.25x = 2100 => x = 2100 / 0.25 = 8400.\nIncome of Parker = Rs.8400."
  },
  {
    "id": 8,
    "text": "The ratio of the investment of Pavi to Rihana is 15:8 and the investment period of Pavi and Rihana is x and 3x respectively. If the total profit of the business is Rs.3900, then find the difference between the profit share of Pavi and Rihana.",
    "options": [
      { "id": "A", "text": "Rs.900" },
      { "id": "B", "text": "Rs.1500" },
      { "id": "C", "text": "Rs.750" },
      { "id": "D", "text": "Rs.600" }
    ],
    "answer": "A",
    "explanation": "Profit share ratio = (Inv_1 * Time_1) : (Inv_2 * Time_2)\n= (15 * x) : (8 * 3x) = 15 : 24 = 5 : 8.\nTotal Profit units = 5 + 8 = 13.\n13 units = 3900 => 1 unit = 300.\nDifference (8 - 5) = 3 units = 3 * 300 = Rs.900."
  },
  {
    "id": 9,
    "text": "The income of Gokila is 25% less than that of Shri and the expenditure of Gokila is 12.5% more than that of Shri. If the savings of Shri and Gokila is Rs.6000 and Rs.3000 respectively, then find the expenditure of Gokila.",
    "options": [
      { "id": "A", "text": "Rs.4500" },
      { "id": "B", "text": "Rs.6300" },
      { "id": "C", "text": "Rs.5400" },
      { "id": "D", "text": "Rs.3600" }
    ],
    "answer": "A",
    "explanation": "Income Ratio (G:S) = 75:100 = 3:4. Exp Ratio (G:S) = 112.5:100 = 9:8.\nLet Income S = 4x, Exp S = 8y. Let Income G = 3x, Exp G = 9y.\n4x - 8y = 6000 ... (i)\n3x - 9y = 3000 ... (ii)\nMultiplying (i) by 3 and (ii) by 4:\n12x - 24y = 18000\n12x - 36y = 12000\nSubstracting: 12y = 6000 => y = 500.\nExp of Gokila = 9y = 9 * 500 = Rs.4500."
  },
  {
    "id": 10,
    "text": "The ratio of the number of Boys to Girls who participated in a dance competition is 4:5. 45% of the girls got selected. If the number of girls who are not selected is 176. Then find the total number of students who participated in the competition?",
    "options": [
      { "id": "A", "text": "523" },
      { "id": "B", "text": "546" },
      { "id": "C", "text": "576" },
      { "id": "D", "text": "584" }
    ],
    "answer": "C",
    "explanation": "Girls = 5x. Not selected girls = 100% - 45% = 55%.\n55% of 5x = 176\n2.75x = 176 => x = 64.\nTotal students = Boys + Girls = 4x + 5x = 9x = 9 * 64 = 576."
  }
];
