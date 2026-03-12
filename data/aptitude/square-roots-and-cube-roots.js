export const questions = [
  {
    "id": 1,
    "text": "How many perfect squares lie between 120 and 300?",
    "options": [
      { "id": "A", "text": "5" },
      { "id": "B", "text": "6" },
      { "id": "C", "text": "7" },
      { "id": "D", "text": "8" }
    ],
    "answer": "C",
    "explanation": "Perfect squares between 120 and 300 are:\n11² = 121\n12² = 144\n13² = 169\n14² = 196\n15² = 225\n16² = 256\n17² = 289\nTotal count = 7."
  },
  {
    "id": 2,
    "text": "What smallest number must be added to 710 so that the sum is a perfect cube?",
    "options": [
      { "id": "A", "text": "11" },
      { "id": "B", "text": "14" },
      { "id": "C", "text": "19" },
      { "id": "D", "text": "21" }
    ],
    "answer": "C",
    "explanation": "The closest perfect cube greater than 710 is 9³ = 729.\nRequired number to be added = 729 - 710 = 19."
  },
  {
    "id": 3,
    "text": "The smallest natural number which is a perfect square and which ends in 3 identical digits lies between:",
    "options": [
      { "id": "A", "text": "1000 and 2000" },
      { "id": "B", "text": "2000 and 3000" },
      { "id": "C", "text": "3000 and 4000" },
      { "id": "D", "text": "4000 and 5000" }
    ],
    "answer": "A",
    "explanation": "The smallest such number is 1444 [= (38)²]. It ends in three '4's and lies between 1000 and 2000."
  },
  {
    "id": 4,
    "text": "The largest four digit number which is a perfect cube is:",
    "options": [
      { "id": "A", "text": "7000" },
      { "id": "B", "text": "8000" },
      { "id": "C", "text": "9261" },
      { "id": "D", "text": "9999" }
    ],
    "answer": "C",
    "explanation": "21³ = 9261\n22³ = 10648 (Five digits)\nSo, 9261 is the largest four-digit perfect cube."
  },
  {
    "id": 5,
    "text": "The least number by which 294 must be multiplied to make it a perfect square is:",
    "options": [
      { "id": "A", "text": "2" },
      { "id": "B", "text": "3" },
      { "id": "C", "text": "4" },
      { "id": "D", "text": "6" }
    ],
    "answer": "D",
    "explanation": "294 = 2 * 147 = 2 * 3 * 49 = 2 * 3 * 7 * 7.\nTo be a perfect square, each prime factor must have an even power.\n2 and 3 have power 1, so multiply by 2 * 3 = 6."
  },
  {
    "id": 6,
    "text": "What is the smallest number by which 3600 must be divided to make it a perfect cube?",
    "options": [
      { "id": "A", "text": "50" },
      { "id": "B", "text": "250" },
      { "id": "C", "text": "450" },
      { "id": "D", "text": "500" }
    ],
    "answer": "C",
    "explanation": "3600 = 36 * 100 = 6² * 10² = (2*3)² * (2*5)² = 2⁴ * 3² * 5².\nTo make it a cube, we group into cubes: 2³ * (2¹ * 3² * 5²).\nDivide by the extra factors: 2 * 9 * 25 = 450."
  },
  {
    "id": 7,
    "text": "1250 oranges were distributed among a group of girls. Each girl got twice as many oranges as the number of girls. Find the number of girls.",
    "options": [
      { "id": "A", "text": "25" },
      { "id": "B", "text": "35" },
      { "id": "C", "text": "45" },
      { "id": "D", "text": "65" }
    ],
    "answer": "A",
    "explanation": "Let number of girls = x.\nEach girl gets 2x oranges.\nTotal = x * 2x = 1250 => 2x² = 1250 => x² = 625 => x = 25."
  },
  {
    "id": 8,
    "text": "Find the smallest number by which 5808 should be multiplied so that the product becomes a perfect square.",
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "2" },
      { "id": "C", "text": "3" },
      { "id": "D", "text": "5" }
    ],
    "answer": "C",
    "explanation": "5808 = 2⁴ * 3 * 11².\nTo balance the powers (all should be even), multiply by 3."
  },
  {
    "id": 9,
    "text": "A company pays the team per run as much as the total runs. Which cannot be the total amount spent (must be a perfect square)?",
    "options": [
      { "id": "A", "text": "21,904" },
      { "id": "B", "text": "56,169" },
      { "id": "C", "text": "1,01,761" },
      { "id": "D", "text": "1,21,108" }
    ],
    "answer": "D",
    "explanation": "A perfect square cannot end in digits 2, 3, 7, or 8. Option D ends in 8."
  },
  {
    "id": 10,
    "text": "The smallest perfect square that is divisible by 7! is:",
    "options": [
      { "id": "A", "text": "19600" },
      { "id": "B", "text": "44100" },
      { "id": "C", "text": "176400" },
      { "id": "D", "text": "705600" }
    ],
    "answer": "C",
    "explanation": "7! = 5040 = 2⁴ * 3² * 5 * 7.\nTo make it a square, multiply by factors with odd powers (5 and 7).\nSmallest square = 5040 * 5 * 7 = 176400."
  },
  {
    "id": 11,
    "text": "A man born in the first half of the 19th century was x years old in the year x². He was born in:",
    "options": [
      { "id": "A", "text": "1806" },
      { "id": "B", "text": "1812" },
      { "id": "C", "text": "1825" },
      { "id": "D", "text": "1836" }
    ],
    "answer": "A",
    "explanation": "Year x² in the 19th century: 43² = 1849.\nAge x = 43.\nBirth Year = 1849 - 43 = 1806."
  },
  {
    "id": 12,
    "text": "Find x if (15)² + (18)² - 20 = √x.",
    "options": [
      { "id": "A", "text": "22" },
      { "id": "B", "text": "23" },
      { "id": "C", "text": "x = 529" },
      { "id": "D", "text": "279841" }
    ],
    "answer": "D",
    "explanation": "√x = 225 + 324 - 20 = 529.\nx = 529² = 279841."
  }
];
