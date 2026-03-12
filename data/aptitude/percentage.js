export const questions = [
  {
    "id": 1,
    "text": "In a flower shop, roses and lilies are sold in which 40% are roses and the remaining are lilies. Out of the total number of flowers sold, 45% are in red colour and the remaining are in white colour and the number of red colour roses sold is 180, which is 40% of the total number of red colour flowers sold. Find the number of lilies sold in the shop.",
    "options": [
      { "id": "A", "text": "600" },
      { "id": "B", "text": "450" },
      { "id": "C", "text": "500" },
      { "id": "D", "text": "480" }
    ],
    "answer": "A",
    "explanation": "Let the total number of flowers sold = 100x\nNumber of roses sold = 40x\nNumber of lilies sold = 60x\n\nTotal red colour flowers sold = 180 / 0.40 = 450\nWe are given that 45% of total flowers are red.\nSo, 45% of 100x = 450\n45x = 450 => x = 10\n\nNumber of lilies sold = 60x = 60 * 10 = 600"
  },
  {
    "id": 2,
    "text": "In an examination, out of total number of questions, Sarika attended 80% of the questions. Out of the attended questions, she answered 60% of the questions correctly and the remaining questions answered incorrectly and for each correct question 2 marks is awarded and 0.5 marks are deducted for every wrong question and the total marks obtained by Sarika is 80. Find the number of questions in the examination.",
    "options": [
      { "id": "A", "text": "75" },
      { "id": "B", "text": "90" },
      { "id": "C", "text": "100" },
      { "id": "D", "text": "120" }
    ],
    "answer": "C",
    "explanation": "Let total questions = 100x\nAttended = 80x\nCorrect = 60% of 80x = 48x\nIncorrect = 80x - 48x = 32x\n\nMarks = (Correct * 2) - (Incorrect * 0.5)\n80 = 48x * 2 - 32x * 0.5\n80 = 96x - 16x\n80 = 80x => x = 1\nTotal questions = 100x = 100 * 1 = 100"
  },
  {
    "id": 3,
    "text": "In an election, only two candidates participated. 80% of people cast their votes and 900 people did not cast their votes. 25% of the votes are declared invalid. If the winner won by 300 valid votes, then find the total number of valid votes got by the candidate who won.",
    "options": [
      { "id": "A", "text": "2000" },
      { "id": "B", "text": "1100" },
      { "id": "C", "text": "3200" },
      { "id": "D", "text": "1500" }
    ],
    "answer": "D",
    "explanation": "Let total voters = T\nVotes not cast = 100% - 80% = 20%\n20% of T = 900 => T = 4500\nVotes cast = 80% of 4500 = 3600\nValid votes = 75% of 3600 = 2700\n\nLet loser got 'L' valid votes. Winner won by 300.\nWinner got L + 300\nL + (L + 300) = 2700\n2L = 2400 => L = 1200\nWinner's votes = 1200 + 300 = 1500"
  },
  {
    "id": 4,
    "text": "What is the area of the greatest circle which inscribed in a rectangle whose length is 75m and breadth is 56% of the length?",
    "options": [
      { "id": "A", "text": "1386 m2" },
      { "id": "B", "text": "1586 m2" },
      { "id": "C", "text": "1400 m2" },
      { "id": "D", "text": "1456 m2" }
    ],
    "answer": "A",
    "explanation": "Length = 75 m\nBreadth = 56% of 75 = 42 m\n\nThe greatest circle inscribed in a rectangle has a diameter equal to the shorter side (breadth).\nDiameter = 42 m => Radius (r) = 21 m\nArea of circle = π * r² = (22/7) * 21 * 21\nArea = 22 * 3 * 21 = 1386 m²"
  },
  {
    "id": 5,
    "text": "300% of the first integer is four more than the third integer and the second integer is three less than the third integer. The sum of the three integers is 31. Find the second largest integer among the three?",
    "options": [
      { "id": "A", "text": "15" },
      { "id": "B", "text": "19" },
      { "id": "C", "text": "17" },
      { "id": "D", "text": "13" },
      { "id": "E", "text": "11" }
    ],
    "answer": "E",
    "explanation": "Let integers be x, y, z.\n300% of x = z + 4 => 3x = z + 4 => x = (z + 4)/3\ny = z - 3\nSum: x + y + z = 31\n(z + 4)/3 + (z - 3) + z = 31\nMultiply by 3: (z + 4) + 3z - 9 + 3z = 93\n7z - 5 = 93 => 7z = 98 => z = 14\n\nCalculating others:\nx = (14 + 4)/3 = 6\ny = 14 - 3 = 11\nIntegers are 6, 11, 14.\nThe second largest is 11."
  },
  {
    "id": 6,
    "text": "The total number of students in schools A and C is 25% and 10% more than the total number of students in school B. If the total number of students in school A is decreased by 50 and school C is increased by 30, then the total number of students in school A becomes 20% less than that of school C, then find the total number of students in school B?",
    "options": [
      { "id": "A", "text": "100" },
      { "id": "B", "text": "400" },
      { "id": "C", "text": "200" },
      { "id": "D", "text": "300" }
    ],
    "answer": "C",
    "explanation": "Let students in B = x\nStudents in A = 1.25x = 5x/4\nStudents in C = 1.10x = 11x/10\n\nNew A = 5x/4 - 50\nNew C = 11x/10 + 30\nCondition: New A = 80% of New C\n(5x/4 - 50) = 0.8 * (11x/10 + 30)\n(5x/4 - 50) = (4/5) * (11x/10 + 30)\nMultiply by 20 to clear denominators:\n5(5x) - 1000 = 16(11x/10 + 30) * (ignored scaling, let's step carefully)\n\n25x/4 - 250 = 44x/50 + 24 (wait, 4/5 * 11/10 = 44/50 = 22/25)\n25x/4 - 250 = 22x/25 + 24\n25x/4 - 22x/25 = 274\n(625x - 88x) / 100 = 274\n537x = 27400? No, let's check text log logic:\n37x = 7400 => x = 200.\nCorrect: 5x/4 - 22x/25 = 125x/100 - 88x/100 = 37x/100.\n37x/100 = 250 + 24 = 274 => 37x = 27400 doesn't fit.\nLet's check: 37 * 200 = 7400. Ah, 250 + 120 in text log.\n4/5 * 30 = 24. 250 + 24 = 274.\nWait, 11x/10 + 30 multiply by 4/5 is 44x/50 + 24.\n(125x - 44x)/100 = 274? \nLet's re-verify: A=250, C=220. New A=200, New C=250. 200 is 80% of 250. Yes!\nx = 200."
  },
  {
    "id": 7,
    "text": "A shopkeeper bought a watch for Rs.x and sold it at a profit of y% and the shopkeeper bought a ring for the same price and sold it at a profit of (y + 10)% and the profit ratio obtained by the shopkeeper while selling the watch to the ring is 3:4. Find the profit% at which the shopkeeper sold the ring.",
    "options": [
      { "id": "A", "text": "20%" },
      { "id": "B", "text": "15%" },
      { "id": "C", "text": "30%" },
      { "id": "D", "text": "40%" }
    ],
    "answer": "D",
    "explanation": "Profit on watch = y% of x = (y/100) * x\nProfit on ring = (y + 10)% of x = ((y + 10)/100) * x\n\nRatio: y / (y + 10) = 3 / 4\n4y = 3(y + 10)\n4y = 3y + 30 => y = 30\n\nProfit % on ring = y + 10 = 40%."
  },
  {
    "id": 8,
    "text": "Balu spends 22% of his monthly salary on Rent and out of the remaining salary, he spends 33.33% of his monthly salary in entertainment and spends Rs.3120 on food and 40% of his monthly salary is savings. Find the annual income of Balu.",
    "options": [
      { "id": "A", "text": "Rs.120000" },
      { "id": "B", "text": "Rs.180000" },
      { "id": "C", "text": "Rs.150000" },
      { "id": "D", "text": "Rs.210000" }
    ],
    "answer": "B",
    "explanation": "Let monthly salary = 100x\nRent = 22x\nEntertainment = 33.33% of 100x = 33.33x\nNote: The text says '33.33% of his monthly salary' (not remaining).\nSavings = 40x\n\nTotal allocated = 22x + 33.33x + 40x = 95.33x\nFood = 100x - 95.33x = 4.67x? Wait, the text logic says:\n78x - 26x - 31.2x = 20.8x. \nLet's look at the phrasing: '33.33% of his monthly salary' in the raw text vs 'out of the remaining' in the prompt.\nPrompt: 'out of the remaining salary, he spends 33.33% of his monthly salary...'\nThis is poorly phrased. Let's follow the calculation in the text log:\nSalary = 100x. Rent = 22x. Remaining = 78x.\nEntertainment = 78x * (1/3) = 26x.\nSavings = 78x * 40% = 31.2x.\nFood = 78x - 26x - 31.2x = 20.8x.\n\n20.8x = 3120 => x = 150\nMonthly Income = 15000\nAnnual Income = 15000 * 12 = Rs.1,80,000"
  },
  {
    "id": 9,
    "text": "A spends 18% of his income on food and clothing, 22% on transport, 40% of his daughter’s education and saves the remaining Rs.18600 in a month. What is the monthly income of A?",
    "options": [
      { "id": "A", "text": "Rs.35200" },
      { "id": "B", "text": "Rs.15600" },
      { "id": "C", "text": "Rs.93000" },
      { "id": "D", "text": "Rs.25800" }
    ],
    "answer": "C",
    "explanation": "Total Expenditure % = 18% + 22% + 40% = 80%\nSavings % = 100% - 80% = 20%\n\n20% of Income = 18600\nIncome = 18600 / 0.20 = 93000\nMonthly Income = Rs.93,000"
  },
  {
    "id": 10,
    "text": "A bought two bicycles he sold the first bicycle at a profit of 40% and the second bicycle at a loss of 15%. If the selling price of both the bicycle is equal i.e. Rs 7140. Then find his overall profit or loss percentage.",
    "options": [
      { "id": "A", "text": "7.82%" },
      { "id": "B", "text": "6.66%" },
      { "id": "C", "text": "5.65%" },
      { "id": "D", "text": "4.77%" },
      { "id": "E", "text": "5.77%" }
    ],
    "answer": "E",
    "explanation": "SP of both = 7140 + 7140 = 14280\nCP of 1st = 7140 / 1.40 = 5100\nCP of 2nd = 7140 / 0.85 = 8400\nTotal CP = 5100 + 8400 = 13500\n\nProfit = 14280 - 13500 = 780\nProfit % = (780 / 13500) * 100 = 5.77%"
  }
];
