export const theory = [
  {
    "title": "Numbers Patterns",
    "image": "/images/aptitude/series/theory_numbers.png",
    "formulas": [
      { "label": "Odd/Even/Prime", "value": "Identify numbers that don't fit the parity or primality of the set." },
      { "label": "Multiples", "value": "Each number in the set is a multiple of a certain digit (e.g., 5, 11)." },
      { "label": "Middle Digit Sum", "value": "Middle digit is the sum or product of the other two (e.g., 165: 1+5=6)." }
    ]
  },
  {
    "title": "Power & Root Series",
    "image": "/images/aptitude/series/theory_powers.png",
    "formulas": [
      { "label": "Perfect Squares", "value": "1, 4, 9, 16, 25, 36, 49..." },
      { "label": "Perfect Cubes", "value": "1, 8, 27, 64, 125, 216..." },
      { "label": "Algebraic Series", "value": "Patterns like (n² - 1), (n² + 1), or (n³ - n)." }
    ]
  },
  {
    "title": "Progressions",
    "image": "/images/aptitude/series/theory_progressions.png",
    "formulas": [
      { "label": "Arithmetic (A.P.)", "value": "Common difference between terms: x, x+d, x+2d..." },
      { "label": "Geometric (G.P.)", "value": "Common ratio between terms: x, xr, xr²..." },
      { "label": "Cumulative", "value": "Third number is the sum of previous two: 2, 4, 6, 10, 16..." }
    ]
  }
];

export const questions = [
  {
    "id": 1,
    "text": "Find the odd man out: 3, 5, 11, 14, 17, 21",
    "options": [
      { "id": "A", "text": "21" },
      { "id": "B", "text": "17" },
      { "id": "C", "text": "14" },
      { "id": "D", "text": "3" }
    ],
    "answer": "C",
    "explanation": "Each of the numbers except 14 is an odd number. The number '14' is the only EVEN number."
  },
  {
    "id": 2,
    "text": "Find the odd man out: 8, 27, 64, 100, 125, 216, 343",
    "image": "/images/aptitude/series/powers.png",
    "options": [
      { "id": "A", "text": "27" },
      { "id": "B", "text": "100" },
      { "id": "C", "text": "125" },
      { "id": "D", "text": "343" }
    ],
    "answer": "B",
    "explanation": "The pattern is 2³, 3³, 4³, 5³, 6³, 7³. However, 100 is not a perfect cube (it's 10²)."
  },
  {
    "id": 3,
    "text": "Find the odd man out: 10, 25, 45, 54, 60, 75, 80",
    "options": [
      { "id": "A", "text": "10" },
      { "id": "B", "text": "45" },
      { "id": "C", "text": "54" },
      { "id": "D", "text": "75" }
    ],
    "answer": "C",
    "explanation": "Each of the numbers except 54 is a multiple of 5."
  },
  {
    "id": 4,
    "text": "Find the odd man out: 396, 462, 572, 427, 671, 264",
    "options": [
      { "id": "A", "text": "396" },
      { "id": "B", "text": "427" },
      { "id": "C", "text": "671" },
      { "id": "D", "text": "264" }
    ],
    "answer": "B",
    "explanation": "In each number except 427, the middle digit is the sum of the other two digits (e.g., 3+6=9, 4+2=6). In 427, 4+7 ≠ 2."
  },
  {
    "id": 5,
    "text": "Find the odd man out: 6, 9, 15, 21, 24, 28, 30",
    "options": [
      { "id": "A", "text": "28" },
      { "id": "B", "text": "21" },
      { "id": "C", "text": "24" },
      { "id": "D", "text": "30" }
    ],
    "answer": "A",
    "explanation": "Each of the numbers except 28 is a multiple of 3."
  },
  {
    "id": 6,
    "text": "Find the odd man out: 1, 4, 9, 16, 23, 25, 36",
    "options": [
      { "id": "A", "text": "9" },
      { "id": "B", "text": "23" },
      { "id": "C", "text": "25" },
      { "id": "D", "text": "36" }
    ],
    "answer": "B",
    "explanation": "Each of the numbers except 23 is a perfect square."
  },
  {
    "id": 7,
    "text": "Find the odd man out: 1, 4, 9, 16, 20, 36, 49",
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "9" },
      { "id": "C", "text": "20" },
      { "id": "D", "text": "49" }
    ],
    "answer": "C",
    "explanation": "The pattern is 1², 2², 3², 4², 5², 6², 7². But instead of 5² (25), it is 20."
  },
  {
    "id": 8,
    "text": "Find the odd man out: 2, 5, 10, 17, 26, 37, 50, 64",
    "options": [
      { "id": "A", "text": "50" },
      { "id": "B", "text": "26" },
      { "id": "C", "text": "37" },
      { "id": "D", "text": "64" }
    ],
    "answer": "D",
    "explanation": "The pattern is (n²+1): (1²+1)=2, (2²+1)=5, (3²+1)=10, (4²+1)=17, (5²+1)=26, (6²+1)=37, (7²+1)=50. But 64 is 8² (should be 65)."
  },
  {
    "id": 9,
    "text": "Find the odd man out: 10, 14, 16, 18, 21, 24, 26",
    "options": [
      { "id": "A", "text": "26" },
      { "id": "B", "text": "24" },
      { "id": "C", "text": "21" },
      { "id": "D", "text": "18" }
    ],
    "answer": "C",
    "explanation": "Each of the numbers except 21 is an even number."
  },
  {
    "id": 10,
    "text": "Find the odd man out: 16, 25, 36, 72, 144, 196, 225",
    "options": [
      { "id": "A", "text": "36" },
      { "id": "B", "text": "72" },
      { "id": "C", "text": "196" },
      { "id": "D", "text": "225" }
    ],
    "answer": "B",
    "explanation": "Each of the numbers except 72 is a perfect square."
  },
  {
    "id": 11,
    "text": "Find the odd man out: 331, 482, 551, 263, 383, 362, 284",
    "options": [
      { "id": "A", "text": "263" },
      { "id": "B", "text": "383" },
      { "id": "C", "text": "331" },
      { "id": "D", "text": "551" }
    ],
    "answer": "B",
    "explanation": "In each number except 383, the product of the first and third digits equals the middle digit (e.g., 3*1=3, 4*2=8). In 383, 3*3=9, not 8."
  },
  {
    "id": 12,
    "text": "Find the odd man out: 835, 734, 642, 751, 853, 981, 532",
    "options": [
      { "id": "A", "text": "751" },
      { "id": "B", "text": "853" },
      { "id": "C", "text": "981" },
      { "id": "D", "text": "532" }
    ],
    "answer": "A",
    "explanation": "In each number except 751, the difference between the first and third digit equals the middle digit (e.g., 8-5=3, 7-4=3). In 751, 7-1=6, not 5."
  },
  {
    "id": 13,
    "text": "Find the odd man out: 41, 43, 47, 53, 61, 71, 73, 81",
    "options": [
      { "id": "A", "text": "61" },
      { "id": "B", "text": "71" },
      { "id": "C", "text": "73" },
      { "id": "D", "text": "81" }
    ],
    "answer": "D",
    "explanation": "Each of the numbers except 81 is a prime number. 81 is divisible by 3 and 9."
  },
  {
    "id": 14,
    "text": "Find the odd man out: 3, 5, 7, 12, 17, 19",
    "image": "/images/aptitude/series/primes.png",
    "options": [
      { "id": "A", "text": "19" },
      { "id": "B", "text": "17" },
      { "id": "C", "text": "5" },
      { "id": "D", "text": "12" }
    ],
    "answer": "D",
    "explanation": "Each of the numbers is a prime number except 12."
  },
  {
    "id": 15,
    "text": "Find the missing number in the series: 8, 16, 32, 64, 128, 256, ___, 1024",
    "options": [
      { "id": "A", "text": "423" },
      { "id": "B", "text": "512" },
      { "id": "C", "text": "896" },
      { "id": "D", "text": "980" }
    ],
    "answer": "B",
    "explanation": "Each preceding number is multiplied by 2: 256 * 2 = 512."
  },
  {
    "id": 16,
    "text": "Find the missing number in the series: 11, 13, 17, 19, 23, 29, _____",
    "options": [
      { "id": "A", "text": "31" },
      { "id": "B", "text": "33" },
      { "id": "C", "text": "51" },
      { "id": "D", "text": "None of the above" }
    ],
    "answer": "A",
    "explanation": "The numbers 11, 13, 17, 19, 23, and 29 are all consecutive prime numbers. The next prime number is 31."
  },
  {
    "id": 17,
    "text": "Find the missing number in the series: 15, 33, 69, 141, ___, 573, 1149",
    "options": [
      { "id": "A", "text": "151" },
      { "id": "B", "text": "169" },
      { "id": "C", "text": "285" },
      { "id": "D", "text": "456" }
    ],
    "answer": "C",
    "explanation": "Each number is twice the previous number plus 3: (141 * 2) + 3 = 282 + 3 = 285."
  },
  {
    "id": 18,
    "text": "Find the missing number in the series: 6, 24, ___ , 120, 210, 336",
    "options": [
      { "id": "A", "text": "36" },
      { "id": "B", "text": "60" },
      { "id": "C", "text": "72" },
      { "id": "D", "text": "95" }
    ],
    "answer": "B",
    "explanation": "The pattern is n³ - n: 2³-2=6, 3³-3=24, 4³-4=60, 5³-5=120, 6³-6=210."
  },
  {
    "id": 19,
    "text": "Find the odd man out: 9, 16, 25, 36, 125, 169, 196, 225",
    "options": [
      { "id": "A", "text": "36" },
      { "id": "B", "text": "196" },
      { "id": "C", "text": "169" },
      { "id": "D", "text": "125" }
    ],
    "answer": "D",
    "explanation": "All numbers except 125 are perfect squares (3², 4², 5², 6², 13², 14², 15²). 125 is a perfect cube (5³)."
  },
  {
    "id": 20,
    "text": "Find the odd man out: 121, 275, 396, 385, 891, 932",
    "options": [
      { "id": "A", "text": "275" },
      { "id": "B", "text": "396" },
      { "id": "C", "text": "891" },
      { "id": "D", "text": "932" }
    ],
    "answer": "D",
    "explanation": "In all numbers except 932, the middle digit is the sum of the other two digits. In 932, 9+2=11, not 3."
  },
  {
    "id": 21,
    "text": "Find the odd man out: 6, 9, 11, 12, 14, 15, 25",
    "options": [
      { "id": "A", "text": "9" },
      { "id": "B", "text": "11" },
      { "id": "C", "text": "14" },
      { "id": "D", "text": "25" }
    ],
    "answer": "B",
    "explanation": "Each number is composite except 11, which is a prime number."
  },
  {
    "id": 22,
    "text": "Find the wrong number in the series: 9, 12, 17, 20, 25, 28, 34, 36, 41",
    "image": "/images/aptitude/series/difference.png",
    "options": [
      { "id": "A", "text": "25" },
      { "id": "B", "text": "28" },
      { "id": "C", "text": "34" },
      { "id": "D", "text": "41" }
    ],
    "answer": "C",
    "explanation": "The differences alternate between +3 and +5: 9(+3)=12, 12(+5)=17, 17(+3)=20, 20(+5)=25, 25(+3)=28. Next should be 28(+5)=33, not 34."
  },
  {
    "id": 23,
    "text": "Find the wrong number in the series: 34, 105, 424, 2123, 12756",
    "options": [
      { "id": "A", "text": "12756" },
      { "id": "B", "text": "2123" },
      { "id": "C", "text": "424" },
      { "id": "D", "text": "34" }
    ],
    "answer": "B",
    "explanation": "The pattern is (Preceding number * n) + n: (34*3)+3=105, (105*4)+4=424, (424*5)+5=2125. Thus, 2123 is wrong."
  },
  {
    "id": 24,
    "text": "Find the wrong number in the series: 6, 12, 20, 30, 42, 54, 72, 90, 110",
    "options": [
      { "id": "A", "text": "20" },
      { "id": "B", "text": "42" },
      { "id": "C", "text": "54" },
      { "id": "D", "text": "90" }
    ],
    "answer": "C",
    "explanation": "The pattern is x * (x+1): 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42, 7*8=56. Thus, 54 is wrong (should be 56)."
  }
];
