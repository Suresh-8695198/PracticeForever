export const questions = [
  {
    "id": 1,
    "text": "Find the largest fraction among the following: 1/2, 3/4, 5/6, 6/11, 2/3, 8/9, 6/7.",
    "options": [
      { "id": "a", "text": "1/2" },
      { "id": "b", "text": "8/9" },
      { "id": "c", "text": "3/4" },
      { "id": "d", "text": "6/7" }
    ],
    "answer": "b",
    "explanation": "Converting to decimals:\n1/2 = 0.5\n3/4 = 0.75\n5/6 = 0.833\n6/11 = 0.545\n2/3 = 0.667\n8/9 = 0.888\n6/7 = 0.857\nThe largest decimal is 0.888, which corresponds to 8/9."
  },
  {
    "id": 2,
    "text": "Which of the following fractions is the smallest?",
    "options": [
      { "id": "a", "text": "93/15" },
      { "id": "b", "text": "83/26" },
      { "id": "c", "text": "105/112" },
      { "id": "d", "text": "41/17" }
    ],
    "answer": "c",
    "explanation": "Checking values:\n93/15 = 6.2\n83/26 ≈ 3.19\n105/112 ≈ 0.937\n41/17 ≈ 2.41\nClearly, 105/112 is the only fraction less than 1, making it the smallest."
  },
  {
    "id": 3,
    "text": "Which of the following is a terminating decimal?",
    "options": [
      { "id": "a", "text": "1/64" },
      { "id": "b", "text": "1/24" },
      { "id": "c", "text": "1/96" },
      { "id": "d", "text": "1/48" }
    ],
    "answer": "a",
    "explanation": "A fraction in its simplest form results in a terminating decimal if and only if the prime factorization of its denominator contains only 2s and 5s.\n64 = 2^6 (Only 2s) -> Terminating\n24 = 2^3 * 3 (Contains 3) -> Recurring\n96 = 2^5 * 3 (Contains 3) -> Recurring\n48 = 2^4 * 3 (Contains 3) -> Recurring"
  },
  {
    "id": 4,
    "text": "Simplify 0.623 where 23 is recurring (0.6232323...).",
    "options": [
      { "id": "a", "text": "623/999" },
      { "id": "b", "text": "6 23/999" },
      { "id": "c", "text": "617/990" },
      { "id": "d", "text": "623/990" }
    ],
    "answer": "c",
    "explanation": "Formula for non-pure recurring decimals: (Total Number - Non-recurring part) / (9 for each recurring digit followed by 0 for each non-recurring digit).\nNumber = 623. Non-recurring part = 6.\nRecurring digits = 2 (so 99). Non-recurring decimal digits = 1 (so one 0).\nFraction = (623 - 6) / 990 = 617 / 990."
  },
  {
    "id": 5,
    "text": "How many parts of a day is 3 minutes 36 seconds?",
    "options": [
      { "id": "a", "text": "1/200" },
      { "id": "b", "text": "1/300" },
      { "id": "c", "text": "1/400" },
      { "id": "d", "text": "1/500" }
    ],
    "answer": "c",
    "explanation": "Total seconds in a day = 24 * 60 * 60 = 86400 seconds.\n3 minutes 36 seconds = (3 * 60) + 36 = 180 + 36 = 216 seconds.\nFraction = 216 / 86400 = 1 / 400."
  },
  {
    "id": 6,
    "text": "What is the sum of 5/12 and its inverse?",
    "options": [
      { "id": "a", "text": "12/57" },
      { "id": "b", "text": "18/93" },
      { "id": "c", "text": "120/37" },
      { "id": "d", "text": "169/60" }
    ],
    "answer": "d",
    "explanation": "Sum = 5/12 + 12/5\nLCM of 12 and 5 = 60.\nSum = (5*5 + 12*12) / 60 = (25 + 144) / 60 = 169 / 60."
  },
  {
    "id": 7,
    "text": "The difference between a fraction and its inverse is 3/4. What is the difference between their cubes?",
    "options": [
      { "id": "a", "text": "123/819" },
      { "id": "b", "text": "173/68" },
      { "id": "c", "text": "171/64" },
      { "id": "d", "text": "189/96" }
    ],
    "answer": "c",
    "explanation": "Let fraction be x. x - 1/x = 3/4.\nWe need x^3 - 1/x^3.\nUsing (x - 1/x)^3 = x^3 - 1/x^3 - 3(x - 1/x):\n(3/4)^3 = x^3 - 1/x^3 - 3(3/4)\n27/64 = x^3 - 1/x^3 - 9/4\nx^3 - 1/x^3 = 27/64 + 9/4 = 27/64 + 144/64 = 171/64."
  },
  {
    "id": 8,
    "text": "The sum of two fractions is 11/12. If one of these fractions is 5/6, what is the other fraction?",
    "options": [
      { "id": "a", "text": "1/7" },
      { "id": "b", "text": "1/9" },
      { "id": "c", "text": "3/23" },
      { "id": "d", "text": "1/12" }
    ],
    "answer": "d",
    "explanation": "Other fraction = Total sum - Known fraction\n= 11/12 - 5/6 = 11/12 - 10/12 = 1/12."
  },
  {
    "id": 9,
    "text": "Which of the following fractions is greater than 8/13 but smaller than 12/17?",
    "options": [
      { "id": "a", "text": "1/2" },
      { "id": "b", "text": "2/3" },
      { "id": "c", "text": "7/8" },
      { "id": "d", "text": "3/8" }
    ],
    "answer": "b",
    "explanation": "8/13 ≈ 0.615\n12/17 ≈ 0.705\nChecking options:\n1/2 = 0.5 (Smaller than 0.615)\n2/3 = 0.667 (Between 0.615 and 0.705)\n7/8 = 0.875 (Greater than 0.705)\n3/8 = 0.375 (Smaller than 0.615)"
  },
  {
    "id": 10,
    "text": "If 3 is added to both the numerator and denominator of a fraction, it becomes 11/12. If 4 is subtracted from both, it becomes 4/5. Find the fraction.",
    "options": [
      { "id": "a", "text": "8/9" },
      { "id": "b", "text": "6/13" },
      { "id": "c", "text": "3/4" },
      { "id": "d", "text": "3/5" }
    ],
    "answer": "a",
    "explanation": "Testing option A (8/9):\nAdd 3: (8+3)/(9+3) = 11/12. (Correct)\nSubtract 4: (8-4)/(9-4) = 4/5. (Correct)\nSo the fraction is 8/9."
  },
  {
    "id": 11,
    "text": "Simplify: 1/(5 - 2√3).",
    "options": [
      { "id": "a", "text": "(5 - 2√3)/16" },
      { "id": "b", "text": "(5 + 2√3)/13" },
      { "id": "c", "text": "(5 - 2√3)/14" },
      { "id": "d", "text": "(5 + 2√3)/12" }
    ],
    "answer": "b",
    "explanation": "Rationalizing the denominator:\nMultiply numerator and denominator by (5 + 2√3).\nNumerator = 5 + 2√3.\nDenominator = (5)^2 - (2√3)^2 = 25 - (4 * 3) = 25 - 12 = 13.\nResult = (5 + 2√3) / 13."
  },
  {
    "id": 12,
    "text": "Roshan had 1/4 of a cake, Yashi had 2/3, and Tanya had the rest. How much did Tanya have?",
    "options": [
      { "id": "a", "text": "4/7" },
      { "id": "b", "text": "1/12" },
      { "id": "c", "text": "1/6" },
      { "id": "d", "text": "2/6" }
    ],
    "answer": "b",
    "explanation": "Total cake = 1.\nTanya's share = 1 - (1/4 + 2/3)\nSum of shares = (3 + 8) / 12 = 11/12.\nTanya's share = 1 - 11/12 = 1/12."
  },
  {
    "id": 13,
    "text": "Find the fraction value of 0.6 recurring (0.666...).",
    "options": [
      { "id": "a", "text": "1/3" },
      { "id": "b", "text": "2/3" },
      { "id": "c", "text": "5/3" },
      { "id": "d", "text": "4/3" }
    ],
    "answer": "b",
    "explanation": "For a pure recurring decimal with one recurring digit: Digit / 9.\n0.66... = 6 / 9 = 2 / 3."
  },
  {
    "id": 14,
    "text": "If 120/150 is equivalent to 4/x, find the value of x.",
    "options": [
      { "id": "a", "text": "18" },
      { "id": "b", "text": "6" },
      { "id": "c", "text": "19" },
      { "id": "d", "text": "5" }
    ],
    "answer": "d",
    "explanation": "120/150 = 12/15 = 4/5.\nComparing 4/5 with 4/x, we get x = 5."
  },
  {
    "id": 15,
    "text": "Saina Nehwal has won 54 out of 81 matches. Find the number of matches lost as a decimal.",
    "options": [
      { "id": "a", "text": "0.333" },
      { "id": "b", "text": "0.066" },
      { "id": "c", "text": "0.55" },
      { "id": "d", "text": "0.667" }
    ],
    "answer": "a",
    "explanation": "Matches lost = 81 - 54 = 27.\nLost fraction = 27 / 81 = 1 / 3.\nDecimal value = 0.333..."
  }
];
