export const questions = [
  {
    id: 1,
    text: "In how many ways can the letters of the word 'LEADER' be arranged?",
    options: [
      { id: "A", text: "72" },
      { id: "B", text: "144" },
      { id: "C", text: "360" },
      { id: "D", text: "720" }
    ],
    answer: "C",
    explanation: "The word LEADER has 6 letters, where E is repeated twice. \nWays = 6! / 2! = (720 / 2) = 360."
  },
  {
    id: 2,
    text: "How many 3-digit numbers can be formed from the digits 2, 3, 5, 6, 7 and 9, which are divisible by 5 and none of the digits is repeated?",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "10" },
      { id: "C", text: "15" },
      { id: "D", text: "20" }
    ],
    answer: "D",
    explanation: "For a number to be divisible by 5, its unit digit must be 5. \nDigits available: 2, 3, 5, 6, 7, 9. \nUnit digit fixed as 5 (1 way). \nTens place can be filled by remaining 5 digits. \nHundreds place can be filled by remaining 4 digits. \nTotal numbers = 5 * 4 * 1 = 20."
  },
  {
    id: 3,
    text: "In how many ways can a committee of 5 members be formed from 6 men and 4 women, such that at least 3 men are included?",
    options: [
      { id: "A", text: "186" },
      { id: "B", text: "210" },
      { id: "C", text: "156" },
      { id: "D", text: "120" }
    ],
    answer: "A",
    explanation: "Possible combinations: \n1. 3 Men, 2 Women: 6C3 * 4C2 = 20 * 6 = 120 \n2. 4 Men, 1 Woman: 6C4 * 4C1 = 15 * 4 = 60 \n3. 5 Men, 0 Women: 6C5 * 4C0 = 6 * 1 = 6 \nTotal = 120 + 60 + 6 = 186."
  },
  {
    id: 4,
    text: "A box contains 5 red, 4 white and 3 blue marbles. In how many ways can 3 marbles be drawn from the box, if at least one is red?",
    options: [
      { id: "A", text: "220" },
      { id: "B", text: "185" },
      { id: "C", text: "150" },
      { id: "D", text: "115" }
    ],
    answer: "B",
    explanation: "Total marbles = 12. \nTotal ways to draw 3 marbles = 12C3 = (12*11*10)/(3*2*1) = 220. \nWays to draw 3 marbles with NO red marble (from 4 white + 3 blue = 7 marbles) = 7C3 = (7*6*5)/(3*2*1) = 35. \nWays with at least one red = 220 - 35 = 185."
  },
  {
    id: 5,
    text: "How many words can be formed by using all letters of the word 'MATHEMATICS' such that vowels are always together?",
    options: [
      { id: "A", text: "4989600" },
      { id: "B", text: "120960" },
      { id: "C", text: "45360" },
      { id: "D", text: "25200" }
    ],
    answer: "B",
    explanation: "Word: MATHEMATICS (11 letters). \nVowels: A, E, A, I (4). Consonants: M, T, H, M, T, C, S (7). \nTreat 4 vowels as 1 unit. Total units = 7 + 1 = 8. \nArrangements of units: 8! / (2! 2!) [M, T repeat] = 40320 / 4 = 10080. \nArrangements within vowel unit: 4! / 2! [A repeats] = 12. \nTotal = 10080 * 12 = 120960."
  },
  {
    id: 6,
    text: "In how many ways can 7 people be seated around a circular table?",
    options: [
      { id: "A", text: "5040" },
      { id: "B", text: "720" },
      { id: "C", text: "120" },
      { id: "D", text: "40320" }
    ],
    answer: "B",
    explanation: "Circular permutations = (n-1)!. \nWays = (7-1)! = 6! = 720."
  },
  {
    id: 7,
    text: "How many ways can a team of 11 be chosen from 15 players if 2 particular players must be included?",
    options: [
      { id: "A", text: "715" },
      { id: "B", text: "1365" },
      { id: "C", text: "286" },
      { id: "D", text: "2002" }
    ],
    answer: "A",
    explanation: "If 2 players are fixed, we need to choose 9 more from 13. \nWays = 13C9 = 13C4 = (13 * 12 * 11 * 10) / (4 * 3 * 2 * 1) = 715."
  },
  {
     id: 8,
     text: "In how many ways can 5 boys and 5 girls be seated in a row such that no two girls are together?",
     options: [
       { id: "A", text: "10!" },
       { id: "B", text: "5! * 6!" },
       { id: "C", text: "5! * 5!" },
       { id: "D", text: "5! * 6P5" }
     ],
     answer: "D",
     explanation: "Arrange 5 boys in 5! ways. There are 6 gaps created (_ B _ B _ B _ B _ B _). \n5 girls can be placed in these 6 gaps in 6P5 ways. \nTotal = 5! * 6P5."
  },
  {
    id: 9,
    text: "How many diagonals are there in a polygon with 10 sides?",
    options: [
      { id: "A", text: "35" },
      { id: "B", text: "45" },
      { id: "C", text: "20" },
      { id: "D", text: "50" }
    ],
    answer: "A",
    explanation: "Formula for diagonals: n(n-3)/2. \nFor n=10, Diagonals = 10(7)/2 = 35."
  },
  {
    id: 10,
    text: "How many 4-digit numbers can be formed using the digits 0, 1, 2, 3, 4, 5 (repetition not allowed)?",
    options: [
      { id: "A", text: "360" },
      { id: "B", text: "300" },
      { id: "C", text: "120" },
      { id: "D", text: "720" }
    ],
    answer: "B",
    explanation: "First digit cannot be 0 (5 choices: 1,2,3,4,5). \nSecond digit can be 0 or remaining digits (5 choices). \nThird digit: 4 choices. Fourth digit: 3 choices. \nTotal = 5 * 5 * 4 * 3 = 300."
  }
];
