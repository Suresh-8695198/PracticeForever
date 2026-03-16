export const questions = [
  {
    id: 1,
    text: "Find the value of k for which the quadratic equation 2x² + kx + 3 = 0 has two equal roots.",
    options: [
      { id: "A", text: "±2√6" },
      { id: "B", text: "±√6" },
      { id: "C", text: "±4" },
      { id: "D", text: "±12" }
    ],
    answer: "A",
    explanation: "For equal roots, Discriminant (D) = b² - 4ac = 0. \nk² - 4(2)(3) = 0 \nk² - 24 = 0 \nk = ±√24 = ±2√6."
  },
  {
    id: 2,
    text: "The sum of the first three terms of an Arithmetic Progression is 30. If the first term is 6, what is the common difference?",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" }
    ],
    answer: "B",
    explanation: "Let terms be a, a+d, a+2d. \nSum = 3a + 3d = 30 \nSince a = 6, \n18 + 3d = 30 \n3d = 12 \nd = 4."
  },
  {
    id: 3,
    text: "If x + 1/x = 5, find the value of x² + 1/x².",
    options: [
      { id: "A", text: "23" },
      { id: "B", text: "25" },
      { id: "C", text: "27" },
      { id: "D", text: "10" }
    ],
    answer: "A",
    explanation: "(x + 1/x)² = x² + 2 + 1/x² \n5² = x² + 1/x² + 2 \n25 - 2 = x² + 1/x² \n23 = x² + 1/x²."
  },
  {
    id: 4,
    text: "Find the 10th term of the geometric progression: 2, 6, 18, 54, ...",
    options: [
      { id: "A", text: "2 * 3^9" },
      { id: "B", text: "2 * 3^10" },
      { id: "C", text: "6^9" },
      { id: "D", text: "18 * 3^8" }
    ],
    answer: "A",
    explanation: "First term (a) = 2, Common ratio (r) = 3. \nn-th term = a * r^(n-1). \n10th term = 2 * 3^(10-1) = 2 * 3^9."
  },
  {
    id: 5,
    text: "Solve for x: log₂(x - 1) = 3",
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "8" },
      { id: "C", text: "9" },
      { id: "D", text: "10" }
    ],
    answer: "C",
    explanation: "log₂ (x - 1) = 3 \nx - 1 = 2^3 \nx - 1 = 8 \nx = 9."
  },
  {
    id: 6,
    text: "Find the remainder when x³ - 3x² + 4x - 5 is divided by (x - 2).",
    options: [
      { id: "A", text: "-1" },
      { id: "B", text: "3" },
      { id: "C", text: "-5" },
      { id: "D", text: "1" }
    ],
    answer: "A",
    explanation: "By Remainder Theorem, remainder is f(2). \nf(2) = 2³ - 3(2)² + 4(2) - 5 \n= 8 - 12 + 8 - 5 = -1."
  },
  {
    id: 7,
    text: "If α and β are the roots of the equation x² - 5x + 6 = 0, find the value of (α² + β²).",
    options: [
      { id: "A", text: "13" },
      { id: "B", text: "25" },
      { id: "C", text: "12" },
      { id: "D", text: "19" }
    ],
    answer: "A",
    explanation: "Sum of roots (α + β) = -b/a = 5. \nProduct of roots (αβ) = c/a = 6. \nα² + β² = (α + β)² - 2αβ \n= 5² - 2(6) = 25 - 12 = 13."
  },
  {
    id: 8,
    text: "Solve for x and y: 3x + 2y = 12 and 2x + 3y = 13.",
    options: [
      { id: "A", text: "x=2, y=3" },
      { id: "B", text: "x=3, y=2" },
      { id: "C", text: "x=1, y=4" },
      { id: "D", text: "x=4, y=1" }
    ],
    answer: "A",
    explanation: "Adding equations: 5x + 5y = 25 -> x + y = 5. \nSubtracting equations: x - y = -1. \nAdding these two: 2x = 4 -> x = 2. \nSubstitute x=2 in x+y=5 -> y = 3."
  },
  {
    id: 9,
    text: "Find the sum to infinity of the geometric progression: 1, 1/3, 1/9, ...",
    options: [
      { id: "A", text: "3/2" },
      { id: "B", text: "2/3" },
      { id: "C", text: "4/3" },
      { id: "D", text: "1/2" }
    ],
    answer: "A",
    explanation: "First term (a) = 1, Common ratio (r) = 1/3. \nSum to infinity = a / (1 - r) \n= 1 / (1 - 1/3) = 1 / (2/3) = 3/2."
  },
  {
    id: 10,
    text: "If 4^x - 4^(x-1) = 24, find the value of x.",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "2.5" },
      { id: "C", text: "3" },
      { id: "D", text: "1.5" }
    ],
    answer: "B",
    explanation: "4^x - (4^x / 4) = 24 \n4^x (1 - 1/4) = 24 \n4^x (3/4) = 24 \n4^x = (24 * 4) / 3 = 32. \n(2²)^x = 2⁵ \n2^(2x) = 2⁵ \n2x = 5 -> x = 2.5."
  }
];
