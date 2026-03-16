export const questions = [
  {
    id: 1,
    text: "Find the missing term in the series: 3, 12, 48, 192, ?",
    options: [
      { id: "A", text: "240" },
      { id: "B", text: "432" },
      { id: "C", text: "768" },
      { id: "D", text: "576" }
    ],
    answer: "C",
    explanation: "The pattern is a geometric progression where each term is multiplied by 4.\n3 × 4 = 12\n12 × 4 = 48\n48 × 4 = 192\n192 × 4 = 768."
  },
  {
    id: 2,
    text: "What comes next in the series: 2, 5, 11, 23, 47, ?",
    options: [
      { id: "A", text: "71" },
      { id: "B", text: "95" },
      { id: "C", text: "91" },
      { id: "D", text: "102" }
    ],
    answer: "B",
    explanation: "The pattern is (Previous Term × 2) + 1.\n2 × 2 + 1 = 5\n5 × 2 + 1 = 11\n11 × 2 + 1 = 23\n23 × 2 + 1 = 47\n47 × 2 + 1 = 95."
  },
  {
    id: 3,
    text: "Identify the wrong number in the series: 10, 25, 45, 54, 60, 75, 80",
    options: [
      { id: "A", text: "25" },
      { id: "B", text: "45" },
      { id: "C", text: "54" },
      { id: "D", text: "75" }
    ],
    answer: "C",
    explanation: "The series should be multiples of 5 or follow a consistent difference. All numbers except 54 are multiples of 5 and follow a pattern of increasing differences or specific intervals. 54 does not fit the 'multiple of 5' logic common in such TCS series."
  },
  {
    id: 4,
    text: "Find the next term: 1, 4, 9, 16, 25, ?",
    options: [
      { id: "A", text: "30" },
      { id: "B", text: "36" },
      { id: "C", text: "49" },
      { id: "D", text: "42" }
    ],
    answer: "B",
    explanation: "The series consists of squares of consecutive natural numbers.\n1^2 = 1\n2^2 = 4\n3^2 = 9\n4^2 = 16\n5^2 = 25\n6^2 = 36."
  },
  {
    id: 5,
    text: "Find the missing number: 7, 10, 8, 11, 9, 12, ?",
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "10" },
      { id: "C", text: "12" },
      { id: "D", text: "13" }
    ],
    answer: "B",
    explanation: "It's an alternating series:\n7 (+3) = 10\n10 (-2) = 8\n8 (+3) = 11\n11 (-2) = 9\n9 (+3) = 12\n12 (-2) = 10."
  },
  {
    id: 6,
    text: "Find the missing term: 10, 100, 200, 310, ?",
    options: [
      { id: "A", text: "400" },
      { id: "B", text: "410" },
      { id: "C", text: "420" },
      { id: "D", text: "430" }
    ],
    answer: "D",
    explanation: "The differences are increasing by 10 each time:\n100 - 10 = 90\n200 - 100 = 100\n310 - 200 = 110\nNext diff should be 120. 310 + 120 = 430."
  },
  {
    id: 7,
    text: "What replaces the question mark? 0.5, 0.55, 0.65, 0.8, ?",
    options: [
      { id: "A", text: "0.9" },
      { id: "B", text: "0.82" },
      { id: "C", text: "1" },
      { id: "D", text: "0.95" }
    ],
    answer: "C",
    explanation: "The pattern of differences is: +0.05, +0.10, +0.15. The next difference should be +0.20.\n0.8 + 0.20 = 1.0."
  },
  {
    id: 8,
    text: "Find the wrong number: 4, 9, 19, 39, 79, 160, 319",
    options: [
      { id: "A", text: "39" },
      { id: "B", text: "160" },
      { id: "C", text: "79" },
      { id: "D", text: "319" }
    ],
    answer: "B",
    explanation: "The pattern is (Term × 2) + 1.\n4 × 2 + 1 = 9\n9 × 2 + 1 = 19\n19 × 2 + 1 = 39\n39 × 2 + 1 = 79\n79 × 2 + 1 = 159. But the given term is 160.\n159 × 2 + 1 = 319."
  },
  {
    id: 9,
    text: "Complete the series: 3, 5, 9, 17, 33, ?",
    options: [
      { id: "A", text: "44" },
      { id: "B", text: "65" },
      { id: "C", text: "64" },
      { id: "D", text: "49" }
    ],
    answer: "B",
    explanation: "The differences are 2, 4, 8, 16... (Powers of 2).\n3 + 2 = 5\n5 + 4 = 9\n9 + 8 = 17\n17 + 16 = 33\n33 + 32 = 65."
  },
  {
    id: 10,
    text: "Find the missing number: 11, 13, 17, 19, 23, 25, ?",
    options: [
      { id: "A", text: "27" },
      { id: "B", text: "29" },
      { id: "C", text: "31" },
      { id: "D", text: "37" }
    ],
    answer: "B",
    explanation: "The pattern is +2, +4, +2, +4...\n11 + 2 = 13\n13 + 4 = 17\n17 + 2 = 19\n19 + 4 = 23\n23 + 2 = 25\n25 + 4 = 29."
  }
];
