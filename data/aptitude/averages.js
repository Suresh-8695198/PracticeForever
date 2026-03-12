export const questions = [
  {
    "id": 1,
    "text": "In a furniture shop, there are some tables and some office chairs. The average price of tables is Rs.2800 and that of office chairs is Rs.2500 and the average price of both office chairs and tables is Rs.2590. If the number of tables is 15, find the average of total number of tables and office chairs in the shop.",
    "options": [
      { "id": "A", "text": "22" },
      { "id": "B", "text": "18" },
      { "id": "C", "text": "25" },
      { "id": "D", "text": "35" }
    ],
    "answer": "C",
    "explanation": "Let x be the number of office chairs.\nTotal price of tables = 2800 * 15 = 42000\nTotal price of chairs = 2500 * x\nAverage price = (42000 + 2500x) / (x + 15) = 2590\n42000 + 2500x = 2590x + 38850\n90x = 3150\nx = 35\nTotal items = 15 tables + 35 chairs = 50\nAverage of total number of tables and chairs = (15 + 35) / 2 = 25"
  },
  {
    "id": 2,
    "text": "In a class, the average weight of 15 boys is 60 kg and the average weight of 10 girls is 50 kg. If two girls newly joined the class, then the average weight of the class decreased by 1 kg. Find the total weight of two new girls joined the class.",
    "options": [
      { "id": "A", "text": "92 kg" },
      { "id": "B", "text": "85 kg" },
      { "id": "C", "text": "74 kg" },
      { "id": "D", "text": "110 kg" }
    ],
    "answer": "B",
    "explanation": "Initial total students = 15 + 10 = 25\nInitial total weight = (15 * 60) + (10 * 50) = 900 + 500 = 1400 kg\nInitial average = 1400 / 25 = 56 kg\n\nAfter 2 girls join, total students = 27\nNew average = 56 - 1 = 55 kg\nNew total weight = 55 * 27 = 1485 kg\nWeight of 2 new girls = 1485 - 1400 = 85 kg"
  },
  {
    "id": 3,
    "text": "The average height of 100 students is 84 cm and the average height of boys is 80 cm and the average height of girls is 90 cm. Find the ratio of the number of boys to girls in the class.",
    "options": [
      { "id": "A", "text": "8:5" },
      { "id": "B", "text": "9:7" },
      { "id": "C", "text": "4:1" },
      { "id": "D", "text": "3:2" }
    ],
    "answer": "D",
    "explanation": "Using Alligation Method:\nAverage height of boys = 80 cm\nAverage height of girls = 90 cm\nCombined average = 84 cm\n\nRatio (Boys:Girls) = (90 - 84) : (84 - 80) = 6 : 4 = 3 : 2"
  },
  {
    "id": 4,
    "text": "If P’s age 4 years ago, is equal to Q’s age 6 years hence. In 10 years hence, their average age will be 45 years. Find the present age of P?",
    "options": [
      { "id": "A", "text": "44 years" },
      { "id": "B", "text": "45 years" },
      { "id": "C", "text": "42 years" },
      { "id": "D", "text": "40 years" },
      { "id": "E", "text": "46 years" }
    ],
    "answer": "D",
    "explanation": "P - 4 = Q + 6 => P - Q = 10 ... (i)\nAfter 10 years, average = 45 => Total age = 90\n(P + 10) + (Q + 10) = 90 => P + Q = 70 ... (ii)\n\nAdding (i) and (ii):\n2P = 80 => P = 40 years."
  },
  {
    "id": 5,
    "text": "A bus covers 25% of the distance in 2 hours, 20% of the rest of the distance in 2 hours, and the rest 120 km distance in 5 hours. Find the average speed of the bus.",
    "options": [
      { "id": "A", "text": "18.22 km/hr" },
      { "id": "B", "text": "15.82 km/hr" },
      { "id": "C", "text": "19.56 km/hr" },
      { "id": "D", "text": "18.82 km/hr" },
      { "id": "E", "text": "22.22 km/hr" }
    ],
    "answer": "E",
    "explanation": "Let total distance be D.\nRemaining distance after covering 25% = 75% of D.\nAfter covering 20% of rest (20% of 75% = 15% of D), remaining = 75% - 15% = 60% of D.\n60% of D = 120 km => D = (120/60) * 100 = 200 km.\n\nTotal time taken = 2h + 2h + 5h = 9 hours.\nAverage speed = Total distance / Total time = 200 / 9 = 22.22 km/hr"
  },
  {
    "id": 6,
    "text": "Average weight of 20 persons is x kg. Two person’s weights 42kg and 44 kg are wrongly entered as (x – 8) kg and (2x/3 + 4) and when the average weight is calculated with the correct weight, then the average weight increases by 0.5kg. Find the value of x.",
    "options": [
      { "id": "A", "text": "48" },
      { "id": "B", "text": "44" },
      { "id": "C", "text": "40" },
      { "id": "D", "text": "36" }
    ],
    "answer": "A",
    "explanation": "Sum of 20 persons = 20x\nCorrect sum = 20x - (x - 8) - (2x/3 + 4) + 42 + 44\nNew average = (Correct Sum) / 20 = x + 0.5\nCorrect Sum = 20x + 10\n19x + 8 - 2x/3 - 4 + 86 = 20x + 10\n-x - 2x/3 + 90 = 10\n-5x/3 = -80 => 5x = 240 => x = 48"
  },
  {
    "id": 7,
    "text": "The average mark scored by x students in a class is 75 and the average mark scored by boys in the class is 69 and the average mark scored by girls in the class is 85. The number of girls in the class is what percentage of the number of boys in the same class?",
    "options": [
      { "id": "A", "text": "70%" },
      { "id": "B", "text": "60%" },
      { "id": "C", "text": "80%" },
      { "id": "D", "text": "50%" }
    ],
    "answer": "B",
    "explanation": "Using Alligation Method:\nAverage marks of boys = 69\nAverage marks of girls = 85\nCombined average = 75\n\nRatio (Boys:Girls) = (85 - 75) : (75 - 69) = 10 : 6 = 5 : 3\nNumber of girls as % of boys = (3/5) * 100 = 60%"
  },
  {
    "id": 8,
    "text": "The average marks obtained by A, B and C is x and the average marks obtained by A and B is (x + 4) marks and the average marks obtained by B and C is x. If half of the marks obtained by A is 52 less than the total marks obtained by B, find the total marks obtained by A and C.",
    "options": [
      { "id": "A", "text": "168" },
      { "id": "B", "text": "184" },
      { "id": "C", "text": "176" },
      { "id": "D", "text": "180" }
    ],
    "answer": "A",
    "explanation": "A + B + C = 3x\nA + B = 2(x + 4) = 2x + 8 => C = 3x - (2x + 8) = x - 8\nB + C = 2x => A = 3x - 2x = x\nB = (A + B) - A = (2x + 8) - x = x + 8\n\nCondition: A/2 = B - 52\nx/2 = (x + 8) - 52\nx/2 = x - 44 => x/2 = 44 => x = 88\nA = x = 88, C = x - 8 = 80\nSum (A + C) = 88 + 80 = 168"
  },
  {
    "id": 9,
    "text": "Average weight of 40 students in a class is x kg and when the weight of two teachers is included, the average weight increases by 1 kg and the total weight of the two teachers is (2.4x + 24) kg and the average weight of the boys and girls is (x + 3) kg and (x – 5) kg respectively. Find the number of boys in the class.",
    "options": [
      { "id": "A", "text": "18" },
      { "id": "B", "text": "22" },
      { "id": "C", "text": "25" },
      { "id": "D", "text": "15" }
    ],
    "answer": "C",
    "explanation": "Initial total weight = 40x\nAfter including teachers, total weight = 40x + (2.4x + 24) = 42.4x + 24\nNew average = 42.4x + 24 / 42 = x + 1\n42.4x + 24 = 42x + 42 => 0.4x = 18 => x = 45\n\nAverage of boys = x + 3 = 48 kg\nAverage of girls = x - 5 = 40 kg\nCombined average for 40 students = x = 45 kg\nRatio (Boys:Girls) = (45 - 40) : (48 - 45) = 5 : 3\nNumber of boys = (5/8) * 40 = 25"
  },
  {
    "id": 10,
    "text": "Average weight of 20 students is 48 kg and the three students whose weight are 46 kg, 44 kg and 38 kg is wrongly entered as x kg, (x + 2) kg and (x – 4) kg and when the original weight is included the average weight is increased by 0.5kg. Find the value of x.",
    "options": [
      { "id": "A", "text": "32" },
      { "id": "B", "text": "36" },
      { "id": "C", "text": "45" },
      { "id": "D", "text": "40" }
    ],
    "answer": "D",
    "explanation": "Initial sum = 20 * 48 = 960\nNew sum = 960 - [x + (x + 2) + (x - 4)] + [46 + 44 + 38]\nNew sum = 960 - (3x - 2) + 128 = 1090 - 3x\nNew average = 48 + 0.5 = 48.5\n(1090 - 3x) / 20 = 48.5\n1090 - 3x = 970 => 3x = 120 => x = 40"
  },
  {
    "id": 11,
    "text": "Average mark of 43 students in a class is 17. If marks of two students excluded, then the average mark of the class is decreased by 2 marks. Find the average mark of 2 students whose marks are excluded.",
    "options": [
      { "id": "A", "text": "56" },
      { "id": "B", "text": "54" },
      { "id": "C", "text": "68" },
      { "id": "D", "text": "48" },
      { "id": "E", "text": "58" }
    ],
    "answer": "E",
    "explanation": "Total sum = 43 * 17 = 731\nSum after excluding 2 students = (43 - 2) * (17 - 2) = 41 * 15 = 615\nSum of excluded students = 731 - 615 = 116\nAverage marks of excluded students = 116 / 2 = 58"
  },
  {
    "id": 12,
    "text": "The Average number of students in school A, B, C, D and E together is 259 and the average number of students in schools A and B together is 271 and the average number of students in schools D and E together is 239. If the ratio of the number of students in schools A and C is 11:25, then find the students in school B?",
    "options": [
      { "id": "A", "text": "493" },
      { "id": "B", "text": "507" },
      { "id": "C", "text": "345" },
      { "id": "D", "text": "421" }
    ],
    "answer": "D",
    "explanation": "Total students (A+B+C+D+E) = 259 * 5 = 1295\nA + B = 2 * 271 = 542\nD + E = 2 * 239 = 478\nC = 1295 - (A+B) - (D+E) = 1295 - 542 - 478 = 275\nGiven A:C = 11:25. So A = (11/25) * 275 = 11 * 11 = 121\nB = (A+B) - A = 542 - 121 = 421"
  },
  {
    "id": 13,
    "text": "Average weight of 30 students is 27 kg and when the weight of two teachers is included, the average weight increases by 3 kg. If the weight of one teacher is 40 kg more than the other teacher and the sum of the weight of the teacher with heavy weight and the total weight of the girl students is 455 kg, then find the number of boys in the class. The average weight of the girl students is 30 kg.",
    "options": [
      { "id": "A", "text": "12" },
      { "id": "B", "text": "14" },
      { "id": "C", "text": "11" },
      { "id": "D", "text": "18" }
    ],
    "answer": "D",
    "explanation": "Initial weight = 30 * 27 = 810 kg\nAfter teachers, new total = 32 * (27 + 3) = 32 * 30 = 960 kg\nSum of teachers' weights = 960 - 810 = 150 kg\nLet weights be T1 and T1 + 40. Then 2T1 + 40 = 150 => T1 = 55 kg.\nHeavy teacher weight = 55 + 40 = 95 kg.\nTotal weight of girls = 455 - 95 = 360 kg.\nNumber of girls = Total girls weight / Avg girls weight = 360 / 30 = 12.\nNumber of boys = 30 - 12 = 18."
  },
  {
    "id": 14,
    "text": "In a company, there are 24 employees. If 6 new employees joined the company, then the total salary of the employees is increased by Rs.1200 and the average salary of the company is also increased by Rs.10. Find the average salary of employees initially?",
    "options": [
      { "id": "A", "text": "Rs.150" },
      { "id": "B", "text": "Rs.210" },
      { "id": "C", "text": "Rs.120" },
      { "id": "D", "text": "Rs.180" }
    ],
    "answer": "A",
    "explanation": "Let initial average salary = x.\nTotal initial salary = 24x.\nAfter 6 new employees, total employees = 30.\nNew total salary = 24x + 1200.\nNew average = (24x + 1200) / 30 = x + 10\n24x + 1200 = 30x + 300\n6x = 900 => x = 150."
  },
  {
    "id": 15,
    "text": "Average of five consecutive odd numbers A, B, C, D and E is N. Ratio of the numbers C to F is 5:4 and the number D is 10% less than the number G. If the product of the lowest and highest numbers is 609, then find the average of the numbers F and G together?",
    "options": [
      { "id": "A", "text": "52" },
      { "id": "B", "text": "25" },
      { "id": "C", "text": "44" },
      { "id": "D", "text": "31" }
    ],
    "answer": "B",
    "explanation": "Let numbers be n, n+2, n+4, n+6, n+8.\nAverage N = C = n+4.\nProduct A * E = n(n+8) = 609\nn^2 + 8n - 609 = 0 => (n+29)(n-21) = 0 => n = 21 (as it's positive).\nNumbers: 21, 23, 25, 27, 29.\nC = 25. Given C:F = 5:4 => F = (4/5) * 25 = 20.\nD = 10% less than G => 27 = 0.9G => G = 30.\nAverage (F+G)/2 = (20 + 30) / 2 = 25."
  },
  {
    "id": 16,
    "text": "The average run obtained by a batsman in x innings is 72. The batsman scored 98 runs and 100 runs in the next two innings respectively and thereby increasing the average score by 3 runs. Find the value of x.",
    "options": [
      { "id": "A", "text": "16" },
      { "id": "B", "text": "20" },
      { "id": "C", "text": "14" },
      { "id": "D", "text": "12" }
    ],
    "answer": "A",
    "explanation": "Total runs in x innings = 72x.\nRuns after 2 more innings = 72x + 98 + 100 = 72x + 198.\nNew average = (72x + 198) / (x + 2) = 72 + 3 = 75\n72x + 198 = 75x + 150\n3x = 48 => x = 16."
  },
  {
    "id": 17,
    "text": "In a class, the average weight of 25 students is x kg. If two new students joined the class whose weight is 59 kg and 75 kg, then the average weight of the class is increased by 5%. Find the value of x?",
    "options": [
      { "id": "A", "text": "36" },
      { "id": "B", "text": "54" },
      { "id": "C", "text": "25" },
      { "id": "D", "text": "40" }
    ],
    "answer": "D",
    "explanation": "Initial total weight = 25x.\nAfter joining, new total = 25x + 59 + 75 = 25x + 134.\nNew total students = 27.\nNew average = (25x + 134) / 27 = 1.05x\n25x + 134 = 28.35x\n3.35x = 134 => x = 40."
  },
  {
    "id": 18,
    "text": "There are 40 students in a class and their average height is x cm. The ratio of the number of boys to girls in the class is 5:3. If the average height of boys is (x-12) cm and the average height of girls is 140 cm, then find 50% of the value of x?",
    "options": [
      { "id": "A", "text": "80 cm" },
      { "id": "B", "text": "90 cm" },
      { "id": "C", "text": "70 cm" },
      { "id": "D", "text": "60 cm" }
    ],
    "answer": "D",
    "explanation": "Ratio B:G = 5:3 => Boys = 25, Girls = 15.\nTotal sum = 40x.\nSum = 25 * (x - 12) + 15 * 140\n40x = 25x - 300 + 2100\n15x = 1800 => x = 120.\n50% of x = 60."
  },
  {
    "id": 19,
    "text": "Average weight of 20 persons is x kg. Two person’s weights 42kg and 44 kg are wrongly entered as (x – 8) kg and (2x/3 + 4) and when the average weight is calculated with the correct weight, then the average weight increases by 0.5kg. Find the value of x.",
    "options": [
      { "id": "A", "text": "48" },
      { "id": "B", "text": "44" },
      { "id": "C", "text": "40" },
      { "id": "D", "text": "36" }
    ],
    "answer": "A",
    "explanation": "Correct average - Wrong average = 0.5\n(Sum + 42 + 44)/20 - (Sum + x-8 + 2x/3+4)/20 = 0.5\nSimplified: [86 - (5x/3 - 4)]/20 = 0.5\n90 - 5x/3 = 10\n80 = 5x/3 => x = 48."
  },
  {
    "id": 20,
    "text": "Average of the present age of A, B and C is equal to the age of C after 5 years. Present age of A is 2/3rd of the sum of the present age of B and C. B is 6 years elder than C. Find the present age of A.",
    "options": [
      { "id": "A", "text": "21 years" },
      { "id": "B", "text": "18 years" },
      { "id": "C", "text": "24 years" },
      { "id": "D", "text": "15 years" }
    ],
    "answer": "C",
    "explanation": "(A + B + C) / 3 = C + 5 => A + B + C = 3C + 15 => A + B = 2C + 15 ... (i)\nA = (2/3)(B + C) => 3A = 2B + 2C ... (ii)\nB = C + 6 ... (iii)\n\nFrom (i): A + (C + 6) = 2C + 15 => A - C = 9 => C = A - 9\nFrom (iii): B = (A - 9) + 6 = A - 3\nSubstitute into (ii): 3A = 2(A - 3) + 2(A - 9)\n3A = 2A - 6 + 2A - 18\n3A = 4A - 24 => A = 24 years."
  }
];
