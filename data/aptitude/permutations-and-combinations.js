export const questions = [
  {
    "id": 1,
    "text": "In how many ways can five boys be made to stand in a row such that two of them, P and Q, are always together?",
    "options": [
      { "id": "A", "text": "24" },
      { "id": "B", "text": "48" },
      { "id": "C", "text": "12" },
      { "id": "D", "text": "36" }
    ],
    "answer": "B",
    "explanation": "Treat P and Q as a single unit. Now we have 4 units (the P-Q unit + 3 other boys). These 4 units can be arranged in 4! ways. Also, P and Q can be arranged among themselves in 2! ways.\nTotal ways = 4! * 2! = 24 * 2 = 48."
  },
  {
    "id": 2,
    "text": "In how many ways can the letters of the word 'WORDART' be arranged?",
    "options": [
      { "id": "A", "text": "720" },
      { "id": "B", "text": "360" },
      { "id": "C", "text": "5040" },
      { "id": "D", "text": "2520" }
    ],
    "answer": "D",
    "explanation": "Total letters in WORDART = 7. The letter 'R' is repeated twice.\nRequired number of ways = 7! / 2! = 5040 / 2 = 2520."
  },
  {
    "id": 3,
    "text": "In how many ways can the word 'TYPICAL' be arranged?",
    "options": [
      { "id": "A", "text": "5040" },
      { "id": "B", "text": "2520" },
      { "id": "C", "text": "10040" },
      { "id": "D", "text": "720" }
    ],
    "answer": "A",
    "explanation": "Total letters in TYPICAL = 7. No letters are repeated.\nRequired number of ways = 7! = 5040."
  },
  {
    "id": 4,
    "text": "In an auditorium, chairs were arranged such that the number of rows was 3 more than the number of columns. The chairs were rearranged by removing 4 columns and adding 8 rows without adding or removing any chair. How many people can sit in the auditorium?",
    "options": [
      { "id": "A", "text": "158" },
      { "id": "B", "text": "154" },
      { "id": "C", "text": "174" },
      { "id": "D", "text": "152" }
    ],
    "answer": "B",
    "explanation": "Let columns = x, then rows = x + 3.\nTotal chairs = x(x + 3).\nAfter rearrangement, columns = x - 4, rows = (x + 3) + 8 = x + 11.\nSince no chairs were added/removed: x(x + 3) = (x - 4)(x + 11)\nx² + 3x = x² + 7x - 44\n4x = 44 => x = 11.\nCapacity = 11 * (11 + 3) = 11 * 14 = 154."
  },
  {
    "id": 5,
    "text": "In how many ways can the word 'ENERGY' be arranged such that all vowels and consonants come together?",
    "options": [
      { "id": "A", "text": "48" },
      { "id": "B", "text": "36" },
      { "id": "C", "text": "24" },
      { "id": "D", "text": "18" }
    ],
    "answer": "A",
    "explanation": "Vowels: E, E (2). Consonants: N, R, G, Y (4).\nTreat vowels as one block and consonants as one block. These 2 blocks can be arranged in 2! ways.\nInternal arrangement for vowels (E,E) = 2! / 2! = 1 way.\nInternal arrangement for consonants (N,R,G,Y) = 4! = 24 ways.\nTotal ways = 2! * 1 * 24 = 2 * 24 = 48."
  },
  {
    "id": 6,
    "text": "In how many ways can a selection of 4 students having at least 2 girls be made from 4 girls and 5 boys?",
    "options": [
      { "id": "A", "text": "80" },
      { "id": "B", "text": "60" },
      { "id": "C", "text": "90" },
      { "id": "D", "text": "81" }
    ],
    "answer": "D",
    "explanation": "Possible cases:\n(2 girls, 2 boys) = 4C2 * 5C2 = 6 * 10 = 60\n(3 girls, 1 boy) = 4C3 * 5C1 = 4 * 5 = 20\n(4 girls, 0 boys) = 4C4 * 5C0 = 1 * 1 = 1\nTotal = 60 + 20 + 1 = 81."
  },
  {
    "id": 7,
    "text": "In how many ways can the word 'PRIDE' be arranged so that all vowels and consonants come together?",
    "options": [
      { "id": "A", "text": "12" },
      { "id": "B", "text": "18" },
      { "id": "C", "text": "24" },
      { "id": "D", "text": "32" }
    ],
    "answer": "C",
    "explanation": "Vowels: I, E (2). Consonants: P, R, D (3).\nTreat vowels block (2!) and consonants block (3!). The 2 blocks can be arranged in 2! ways.\nTotal ways = 2! * 2! * 3! = 2 * 2 * 6 = 24."
  },
  {
    "id": 8,
    "text": "In how many ways can a committee of 5 members be formed from 6 men and 7 women in which at least 3 men should be there?",
    "options": [
      { "id": "A", "text": "531" },
      { "id": "B", "text": "359" },
      { "id": "C", "text": "429" },
      { "id": "D", "text": "542" }
    ],
    "answer": "A",
    "explanation": "Cases:\n3 Men, 2 Women = 6C3 * 7C2 = 20 * 21 = 420\n4 Men, 1 Woman = 6C4 * 7C1 = 15 * 7 = 105\n5 Men, 0 Women = 6C5 * 7C0 = 6 * 1 = 6\nTotal = 420 + 105 + 6 = 531."
  },
  {
    "id": 9,
    "text": "How many 3-digit numbers can be formed from the digits 1, 2, 3, 5, 7 which are divisible by 5 and none of the digits is repeated?",
    "options": [
      { "id": "A", "text": "3" },
      { "id": "B", "text": "6" },
      { "id": "C", "text": "9" },
      { "id": "D", "text": "12" }
    ],
    "answer": "D",
    "explanation": "For the number to be divisible by 5, the last digit must be 5 (1 option).\nRemaining digits: 1, 2, 3, 7 (4 options).\nFirst digit can be chosen in 4 ways.\nSecond digit can be chosen in 3 ways.\nTotal numbers = 4 * 3 * 1 = 12."
  },
  {
    "id": 10,
    "text": "How many words of 4 consonants and 4 vowels can be formed out of 8 consonants and 5 vowels?",
    "options": [
      { "id": "A", "text": "240 * 5!" },
      { "id": "B", "text": "350 * 8!" },
      { "id": "C", "text": "240 * 8!" },
      { "id": "D", "text": "350 * 5!" }
    ],
    "answer": "B",
    "explanation": "Select 4 consonants: 8C4 = 70.\nSelect 4 vowels: 5C4 = 5.\nTotal combinations = 70 * 5 = 350.\nEach combination of 8 letters can be arranged in 8! ways.\nTotal words = 350 * 8!."
  },
  {
    "id": 11,
    "text": "The number of words that can be formed out of the letters of the word PICTURE, so that the vowels occupy even places is?",
    "options": [
      { "id": "A", "text": "120" },
      { "id": "B", "text": "144" },
      { "id": "C", "text": "165" },
      { "id": "D", "text": "188" }
    ],
    "answer": "B",
    "explanation": "PICTURE has 7 letters. Even places are 2nd, 4th, 6th (3 places).\nVowels: I, U, E (3). Consonants: P, C, T, R (4).\nArrange 3 vowels in 3 even places = 3! = 6 ways.\nArrange 4 consonants in remaining 4 places = 4! = 24 ways.\nTotal ways = 6 * 24 = 144."
  },
  {
    "id": 12,
    "text": "A bundle of five pencils is to be formed from bundle A (5 different pencils) and bundle B (4 different pencils), taking at least one from each. How many ways if pencils from A must be fewer than from B?",
    "options": [
      { "id": "A", "text": "95" },
      { "id": "B", "text": "85" },
      { "id": "C", "text": "75" },
      { "id": "D", "text": "45" }
    ],
    "answer": "D",
    "explanation": "Possible cases (Total 5, A < B, at least 1 each):\n1 from A, 4 from B = 5C1 * 4C4 = 5 * 1 = 5\n2 from A, 3 from B = 5C2 * 4C3 = 10 * 4 = 40\nTotal = 5 + 40 = 45."
  },
  {
    "id": 13,
    "text": "From 10 boys and 8 girls, a team of 8 players is selected. How many ways if at least 4 girls and at least 2 boys are in the team?",
    "options": [
      { "id": "A", "text": "21840" },
      { "id": "B", "text": "22680" },
      { "id": "C", "text": "21420" },
      { "id": "D", "text": "22480" }
    ],
    "answer": "B",
    "explanation": "Cases for (Girls, Boys) totaling 8:\n(4G, 4B) = 8C4 * 10C4 = 70 * 210 = 14700\n(5G, 3B) = 8C5 * 10C3 = 56 * 120 = 6720\n(6G, 2B) = 8C6 * 10C2 = 28 * 45 = 1260\nTotal = 14700 + 6720 + 1260 = 22680."
  },
  {
    "id": 14,
    "text": "In how many ways can 6 Teachers, 7 Doctors, and 8 Engineers be seated in a row such that all persons of the same profession sit together?",
    "options": [
      { "id": "A", "text": "6! 7! 8! 1!" },
      { "id": "B", "text": "6! 7! 8! 2!" },
      { "id": "C", "text": "6! 7! 8! 3!" },
      { "id": "D", "text": "6! 7! 8! 4!" }
    ],
    "answer": "C",
    "explanation": "Treat each profession as one unit. There are 3 units, which can be arranged in 3! ways.\nWithin each unit, teachers can be arranged in 6! ways, doctors in 7!, and engineers in 8!.\nTotal ways = 3! * 6! * 7! * 8!."
  },
  {
    "id": 15,
    "text": "A team of 11 players is selected from 6 defenders, 4 mid-fielders, and 5 strikers. How many ways to select at least 3 strikers?",
    "options": [
      { "id": "A", "text": "1200" },
      { "id": "B", "text": "1260" },
      { "id": "C", "text": "1160" },
      { "id": "D", "text": "1050" }
    ],
    "answer": "B",
    "explanation": "Total players to choose = 11. Strikers = 5, Non-strikers = 10. Cases:\n3 Strikers, 8 Others = 5C3 * 10C8 = 10 * 45 = 450\n4 Strikers, 7 Others = 5C4 * 10C7 = 5 * 120 = 600\n5 Strikers, 6 Others = 5C5 * 10C6 = 1 * 210 = 210\nTotal = 450 + 600 + 210 = 1260."
  },
  {
    "id": 20,
    "text": "In a group of 4 boys and 3 girls, three children are to be selected. How many ways can they be selected such that at least one boy is included?",
    "options": [
      { "id": "A", "text": "60" },
      { "id": "B", "text": "35" },
      { "id": "C", "text": "42" },
      { "id": "D", "text": "34" }
    ],
    "answer": "D",
    "explanation": "Total ways to select 3 from 7 = 7C3 = 35.\nWays to select 3 from ONLY girls (no boys) = 3C3 = 1.\nWays with at least one boy = 35 - 1 = 34."
  },
  {
    "id": 22,
    "text": "There are 17 buses running between Nagercoil and Madurai. In how many ways can a family go from Nagercoil to Madurai and return by a different bus?",
    "options": [
      { "id": "A", "text": "220" },
      { "id": "B", "text": "210" },
      { "id": "C", "text": "252" },
      { "id": "D", "text": "272" }
    ],
    "answer": "D",
    "explanation": "Ways to go = 17.\nWays to return (excluding the bus used to go) = 16.\nTotal ways = 17 * 16 = 272."
  },
  {
    "id": 24,
    "text": "When 3 fair dice are rolled simultaneously, in how many outcomes will at least one of the dice show 3?",
    "options": [
      { "id": "A", "text": "91" },
      { "id": "B", "text": "87" },
      { "id": "C", "text": "68" },
      { "id": "D", "text": "69" }
    ],
    "answer": "A",
    "explanation": "Total outcomes = 6 * 6 * 6 = 216.\nOutcomes where NO die shows 3 = 5 * 5 * 5 = 125.\nOutcomes with at least one 3 = 216 - 125 = 91."
  },
  {
    "id": 25,
    "text": "In a group of 6 girls and 5 boys, 3 members are selected. How many ways can they be selected such that at least one girl is included?",
    "options": [
      { "id": "A", "text": "195" },
      { "id": "B", "text": "210" },
      { "id": "C", "text": "155" },
      { "id": "D", "text": "180" }
    ],
    "answer": "C",
    "explanation": "Total ways (choose 3 from 11) = 11C3 = 165.\nWays to choose 3 boys only (no girls) = 5C3 = 10.\nWays with at least one girl = 165 - 10 = 155."
  },
  {
    "id": 29,
    "text": "A manager forms a 2-digit code from 0-9. The first digit cannot be 0, and the second cannot be an even number. How many ways to set the code?",
    "options": [
      { "id": "A", "text": "54" },
      { "id": "B", "text": "55" },
      { "id": "C", "text": "64" },
      { "id": "D", "text": "45" }
    ],
    "answer": "D",
    "explanation": "First digit (1-9) = 9 options.\nSecond digit (must be odd: 1, 3, 5, 7, 9) = 5 options.\nTotal codes = 9 * 5 = 45."
  }
];
