export const questions = [
  {
    "id": 1,
    "text": "Find the simplest value of (3√8 - 2√12 + √20) / (3√18 - 2√27 + √45).",
    "options": [
      { "id": "A", "text": "3√2" },
      { "id": "B", "text": "4√2" },
      { "id": "C", "text": "3√9" },
      { "id": "D", "text": "4√8" },
      { "id": "E", "text": "2/3" }
    ],
    "answer": "E",
    "explanation": "Numerator: 3(2√2) - 2(2√3) + 2√5 = 6√2 - 4√3 + 2√5 = 2(3√2 - 2√3 + √5).\nDenominator: 3(3√2) - 2(3√3) + 3√5 = 9√2 - 6√3 + 3√5 = 3(3√2 - 2√3 + √5).\nRatio = 2/3."
  },
  {
    "id": 2,
    "text": "Simplify: 1/(3 - √8) - 1/(√8 - √7) + 1/(√7 - √6) - 1/(√6 - √5).",
    "options": [
      { "id": "A", "text": "4 - √2" },
      { "id": "B", "text": "4 - √3" },
      { "id": "C", "text": "4 - √5" },
      { "id": "D", "text": "3 - √5" }
    ],
    "answer": "D",
    "explanation": "Rationalizing each term:\n1/(3 - √8) = 3 + √8\n1/(√8 - √7) = √8 + √7\n1/(√7 - √6) = √7 + √6\n1/(√6 - √5) = √6 + √5\nExpression: (3 + √8) - (√8 + √7) + (√7 + √6) - (√6 + √5) = 3 - √5."
  },
  {
    "id": 3,
    "text": "Find the value of 1/(√2 + 1) + 1/(√3 + √2) + 1/(√4 + √3) + ... + 1/(√100 + √99).",
    "options": [
      { "id": "A", "text": "5" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "9" },
      { "id": "D", "text": "20" }
    ],
    "answer": "C",
    "explanation": "Rationalizing each term: 1/(√n + √(n-1)) = √n - √(n-1).\nSeries: (√2 - 1) + (√3 - √2) + (√4 - √3) + ... + (√100 - √99).\nThis is a telescoping series where terms cancel out: -1 + √100 = -1 + 10 = 9."
  },
  {
    "id": 6,
    "text": "If 2^a = 3^b = 6^(-c), then find the value of 1/a + 1/b + 1/c.",
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "2" },
      { "id": "C", "text": "3" },
      { "id": "D", "text": "0" }
    ],
    "answer": "D",
    "explanation": "Let 2^a = 3^b = 6^(-c) = k.\nThen 2 = k^(1/a), 3 = k^(1/b), 6 = k^(-1/c).\nSince 2 * 3 = 6:\nk^(1/a) * k^(1/b) = k^(-1/c)\nk^(1/a + 1/b) = k^(-1/c)\n1/a + 1/b = -1/c => 1/a + 1/b + 1/c = 0."
  },
  {
    "id": 8,
    "text": "If a = 3 + 2√2 and ax = 1, then find the value of a^2 + ax + x^2.",
    "options": [
      { "id": "A", "text": "45" },
      { "id": "B", "text": "48" },
      { "id": "C", "text": "35" },
      { "id": "D", "text": "52" }
    ],
    "answer": "C",
    "explanation": "a = 3 + 2√2.\nx = 1/a = 1/(3 + 2√2) = 3 - 2√2.\na + x = (3 + 2√2) + (3 - 2√2) = 6.\nax = 1.\na^2 + ax + x^2 = (a + x)^2 - ax = 6^2 - 1 = 36 - 1 = 35."
  },
  {
    "id": 11,
    "text": "Simplify: (√24 + √216) / √96.",
    "options": [
      { "id": "A", "text": "3" },
      { "id": "B", "text": "4" },
      { "id": "C", "text": "9" },
      { "id": "D", "text": "2" }
    ],
    "answer": "D",
    "explanation": "√24 = 2√6.\n√216 = 6√6.\n√96 = 4√6.\nExpression: (2√6 + 6√6) / 4√6 = 8√6 / 4√6 = 2."
  },
  {
    "id": 12,
    "text": "Simplify: (√32 + √48) / (√8 + √12).",
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "4" },
      { "id": "C", "text": "5" },
      { "id": "D", "text": "2" }
    ],
    "answer": "D",
    "explanation": "Numerator: √32 + √48 = 4√2 + 4√3 = 4(√2 + √3).\nDenominator: √8 + √12 = 2√2 + 2√3 = 2(√2 + √3).\nRatio: 4/2 = 2."
  },
  {
    "id": 15,
    "text": "Simplify: √8 - √4 - √2.",
    "options": [
      { "id": "A", "text": "√2 - 2" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "0" },
      { "id": "D", "text": "√2 - 1" }
    ],
    "answer": "A",
    "explanation": "√8 = 2√2.\n√4 = 2.\nExpression: 2√2 - 2 - √2 = √2 - 2."
  },
  {
    "id": 20,
    "text": "Simplify: [64^(2/3) * 2^(-2) / 8^0]^(1/2).",
    "options": [
      { "id": "A", "text": "2" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "3" },
      { "id": "D", "text": "6" }
    ],
    "answer": "A",
    "explanation": "64^(2/3) = (4^3)^(2/3) = 4^2 = 16.\n2^(-2) = 1/4.\n8^0 = 1.\nInside brackets: 16 * (1/4) / 1 = 4.\nExpression: 4^(1/2) = 2."
  },
  {
    "id": 23,
    "text": "If x = 7 + 4√3, then find the value of √x + 1/√x.",
    "options": [
      { "id": "A", "text": "5" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "4" },
      { "id": "D", "text": "2" }
    ],
    "answer": "C",
    "explanation": "x = 7 + 4√3 = 4 + 3 + 2(2)(√3) = 2^2 + (√3)^2 + 2(2)(√3) = (2 + √3)^2.\n√x = 2 + √3.\n1/√x = 1/(2 + √3) = 2 - √3.\n√x + 1/√x = (2 + √3) + (2 - √3) = 4."
  },
  {
    "id": 29,
    "text": "If 3^(x+y) = 81 and 81^(x-y) = 3, find the value of x.",
    "options": [
      { "id": "A", "text": "22/3" },
      { "id": "B", "text": "17/8" },
      { "id": "C", "text": "23/2" },
      { "id": "D", "text": "2.5" }
    ],
    "answer": "B",
    "explanation": "3^(x+y) = 3^4 => x + y = 4 ... (i)\n(3^4)^(x-y) = 3^1 => 4(x - y) = 1 => x - y = 1/4 ... (ii)\nAdding (i) & (ii): 2x = 4 + 1/4 = 17/4.\nx = 17/8."
  },
  {
    "id": 36,
    "text": "Simplify: (√3 + 1/√3)^2.",
    "options": [
      { "id": "A", "text": "12/5" },
      { "id": "B", "text": "24/9" },
      { "id": "C", "text": "34/7" },
      { "id": "D", "text": "16/3" }
    ],
    "answer": "D",
    "explanation": "(a + b)^2 = a^2 + b^2 + 2ab.\n(√3)^2 + (1/√3)^2 + 2(√3)(1/√3) = 3 + 1/3 + 2 = 5 + 1/3 = 16/3."
  },
  {
    "id": 41,
    "text": "Simplify: √3√3√3√3√3.... (infinite times).",
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "2" },
      { "id": "C", "text": "9" },
      { "id": "D", "text": "3" }
    ],
    "answer": "D",
    "explanation": "Let x = √3√3√3....\nThen x = √(3x).\nSquaring both sides: x^2 = 3x.\nx(x - 3) = 0. Since x > 0, x = 3."
  },
  {
    "id": 47,
    "text": "Find the value of √(12 + √(12 + √(12 + ... infinite))).",
    "options": [
      { "id": "A", "text": "5" },
      { "id": "B", "text": "10" },
      { "id": "C", "text": "15" },
      { "id": "D", "text": "4" }
    ],
    "answer": "D",
    "explanation": "Let x = √(12 + x).\nx^2 = 12 + x.\nx^2 - x - 12 = 0.\n(x - 4)(x + 3) = 0.\nSince x is positive, x = 4."
  },
  {
    "id": 50,
    "text": "Calculate: (256)^0.16 * (16)^0.18.",
    "options": [
      { "id": "A", "text": "4" },
      { "id": "B", "text": "8" },
      { "id": "C", "text": "3" },
      { "id": "D", "text": "16" }
    ],
    "answer": "A",
    "explanation": "256 = 16^2.\n(16^2)^0.16 * 16^0.18.\n16^0.32 * 16^0.18 = 16^(0.32 + 0.18) = 16^0.5.\n16^0.5 = √16 = 4."
  }
];
