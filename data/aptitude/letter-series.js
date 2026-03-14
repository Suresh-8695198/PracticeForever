export const theory = [
  {
    "title": "Alphabet Series",
    "description": "In this type, letters are arranged according to their alphabetical order or position. Common patterns include forward order, reverse order, skipping letters, and fixed intervals.",
    "image": "/images/aptitude/letter-series/alphabet-series.svg",
    "formulas": [
      { "label": "Forward Order", "value": "A=1, B=2 ... Z=26" },
      { "label": "Reverse Order", "value": "Z=1, Y=2 ... A=26" },
      { "label": "Example Pattern", "value": "A, D, G, J → (+3 increments)" }
    ]
  },
  {
    "title": "Continuous Pattern Series",
    "description": "This type contains repeating letter patterns or blocks. Some letters are missing, and you must identify the cyclic or alternating sequence to complete it.",
    "image": "/images/aptitude/letter-series/continuous-pattern.svg",
    "formulas": [
      { "label": "Repeating blocks", "value": "abc, abc, abc..." },
      { "label": "Alternating", "value": "abab, cdcd, abab..." },
      { "label": "Cyclic", "value": "abc, bca, cab..." }
    ]
  },
  {
    "title": "Mixed Series (Alpha-Numeric)",
    "description": "Mixed series contain both letters and numbers. Patterns may depend on alphabet positions combined with mathematical operations on the numbers.",
    "image": "/images/aptitude/letter-series/mixed-series.svg",
    "formulas": [
      { "label": "Rule 1", "value": "Analyze letters and numbers separately." },
      { "label": "Rule 2", "value": "Numbers often follow Arithmetic or Geometric progressions." },
      { "label": "Rule 3", "value": "Letters usually follow alphabetical skip patterns." }
    ]
  },
  {
    "title": "Pro Tips for Reasoning",
    "description": "Speed is key in competitive exams. Use these rules to identify patterns in seconds without manually counting.",
    "image": "/images/aptitude/letter-series/pro-tips.svg",
    "formulas": [
      { "label": "EJOTY Rule", "value": "E(5), J(10), O(15), T(20), Y(25)" },
      { "label": "Sum of 27", "value": "Opposite letters (A-Z) always sum to 27." },
      { "label": "Vowel Focus", "value": "Always check if patterns follow Vowels (A,E,I,O,U)." }
    ]
  }
];

export const questions = [
  {
    "id": 1,
    "text": "Find the next letter in the series: B, D, G, K, P, ?",
    "options": [
      { "id": "A", "text": "S" },
      { "id": "B", "text": "T" },
      { "id": "C", "text": "U" },
      { "id": "D", "text": "V" }
    ],
    "answer": "D",
    "explanation": "B (2) + 2 = D (4)\nD (4) + 3 = G (7)\nG (7) + 4 = K (11)\nK (11) + 5 = P (16)\nP (16) + 6 = V (22)\nThe gaps are increasing: +2, +3, +4, +5, +6."
  },
  {
    "id": 2,
    "text": "What should come in place of the question mark? SCD, TEF, UGH, ____, WKL",
    "options": [
      { "id": "A", "text": "CMN" },
      { "id": "B", "text": "UJI" },
      { "id": "C", "text": "VIJ" },
      { "id": "D", "text": "IJT" }
    ],
    "answer": "C",
    "explanation": "Each term consists of 3 letters:\n1st letter: S, T, U, (V), W (+1)\n2nd letter: C, E, G, (I), K (+2)\n3rd letter: D, F, H, (J), L (+2)\nResult: VIJ"
  },
  {
    "id": 3,
    "text": "Find the missing term: ELFA, GLHA, ILJA, ____, MLNA",
    "options": [
      { "id": "A", "text": "OLPA" },
      { "id": "B", "text": "KLMA" },
      { "id": "C", "text": "LLMA" },
      { "id": "D", "text": "KLLA" }
    ],
    "answer": "D",
    "explanation": "Letters 2 & 4 (L, A) are constant.\nLetters 1 & 3 follow +2 pattern:\nE+2=G, G+2=I, I+2=K\nF+2=H, H+2=J, J+2=L\nResult: KLLA"
  },
  {
    "id": 4,
    "text": "Find the next term in the series: F2, E4, D8, C16, ?",
    "options": [
      { "id": "A", "text": "B32" },
      { "id": "B", "text": "A32" },
      { "id": "C", "text": "B24" },
      { "id": "D", "text": "A24" }
    ],
    "answer": "A",
    "explanation": "Letters go backward: F, E, D, C, (B)\nNumbers double: 2, 4, 8, 16, (32)\nResult: B32"
  },
  {
    "id": 5,
    "text": "Which letters should complete the pattern? a _ b a _ b b _ a b _",
    "options": [
      { "id": "A", "text": "a b b a" },
      { "id": "B", "text": "b a a b" },
      { "id": "C", "text": "a b a b" },
      { "id": "D", "text": "b a b a" }
    ],
    "answer": "B",
    "explanation": "The pattern is 'a b b' repeating.\na (b) b | a (a) b | b (a) b | a b (b)\nMissing: b, a, a, b."
  },
  {
    "id": 6,
    "text": "Series: 2 ! 6 T @ 5 O 3 W # $ 8 E L 9 A % & S 1 D F 7 G I P 4 B M 0\nHow many elements are there which are immediately preceding a symbol and immediately preceded by a vowel?",
    "options": [
      { "id": "A", "text": "None" },
      { "id": "B", "text": "Two" },
      { "id": "C", "text": "Three" },
      { "id": "D", "text": "One" },
      { "id": "E", "text": "More than three" }
    ],
    "answer": "D",
    "explanation": "We need to find the pattern: Vowel -> Element -> Symbol.\nIn the given series, only 'A % &' follows this pattern where '%' is preceded by 'A' (vowel) and followed by '&' (symbol).",
    "explanationImage": "/images/aptitude/letter-series/alphanumeric-q1.svg"
  },
  {
    "id": 7,
    "text": "Series: 2 ! 6 T @ 5 O 3 W # $ 8 E L 9 A % & S 1 D F 7 G I P 4 B M 0\nIf all the symbols and numbers are dropped and then third, nine, ten, and thirteenth letters from the left end are dropped, then how many ten-letter meaningful words can be formed?",
    "options": [
      { "id": "A", "text": "Three" },
      { "id": "B", "text": "Two" },
      { "id": "C", "text": "One" },
      { "id": "D", "text": "None" },
      { "id": "E", "text": "More than three" }
    ],
    "answer": "B",
    "explanation": "After dropping symbols and numbers: T O W E L A S D F G I P B M\nDropping 3rd (W), 9th (F), 10th (G), 13th (B):\nRemaining letters: T O E L A S D I P M\nPossible words: DIPLOMATES, PLASTIDOME."
  },
  {
    "id": 8,
    "text": "Series: 2 ! 6 T @ 5 O 3 W # $ 8 E L 9 A % & S 1 D F 7 G I P 4 B M 0\nWhich of the following element is the fifth to the right of the seventh number from the right end?",
    "options": [
      { "id": "A", "text": "W" },
      { "id": "B", "text": "E" },
      { "id": "C", "text": "8" },
      { "id": "D", "text": "L" },
      { "id": "E", "text": "9" }
    ],
    "answer": "B",
    "explanation": "Numbers from the right: 0, 4, 7, 1, 9, 8, 3. The 7th number is '3'.\nMoving 5 elements to the right from '3': W(1), #(2), $(3), 8(4), E(5).\nThe element is 'E'.",
    "explanationImage": "/images/aptitude/letter-series/alphanumeric-q3.svg"
  },
  {
    "id": 9,
    "text": "Series: 2 ! 6 T @ 5 O 3 W # $ 8 E L 9 A % & S 1 D F 7 G I P 4 B M 0\nWhat is the sum of the numbers which are neither adjacent to a symbol nor another number?",
    "options": [
      { "id": "A", "text": "25" },
      { "id": "B", "text": "30" },
      { "id": "C", "text": "28" },
      { "id": "D", "text": "29" },
      { "id": "E", "text": "24" }
    ],
    "answer": "E",
    "explanation": "Numbers that satisfy the condition (Letter-Number-Letter):\n3 (O 3 W), 9 (L 9 A), 1 (S 1 D), 7 (F 7 G), 4 (P 4 B), 0 (M 0)\nSum: 3 + 9 + 1 + 7 + 4 + 0 = 24."
  },
  {
    "id": 10,
    "text": "Series: @ A 8 G % K 3 L # O 7 W ! E R 9 & T M V $ C 2 Z ^ I 1 * J\nHow many such symbols are there each of which is immediately preceded by a number and followed by a consonant?",
    "options": [
      { "id": "A", "text": "None" },
      { "id": "B", "text": "One" },
      { "id": "C", "text": "Two" },
      { "id": "D", "text": "Three" },
      { "id": "E", "text": "More than three" }
    ],
    "answer": "C",
    "explanation": "Pattern: Number -> Symbol -> Consonant.\nMatches found:\n1. 9 & T\n2. 1 * J"
  },
  {
    "id": 11,
    "text": "Series: @ A 8 G % K 3 L # O 7 W ! E R 9 & T M V $ C 2 Z ^ I 1 * J\nWhich of the following consonant is sixth to the left of the element which is eighth from the right end?",
    "options": [
      { "id": "A", "text": "K" },
      { "id": "B", "text": "L" },
      { "id": "C", "text": "G" },
      { "id": "D", "text": "W" },
      { "id": "E", "text": "R" }
    ],
    "answer": "B",
    "explanation": "Eighth element from the right end is 'C'.\nConsonants to the left of 'C': V(1st), M(2nd), T(3rd), R(4th), W(5th), L(6th).\nThe 6th consonant is 'L'."
  },
  {
    "id": 12,
    "text": "Series: @ A 8 G % K 3 L # O 7 W ! E R 9 & T M V $ C 2 Z ^ I 1 * J\nWhich of the following element is exactly between '&' and '# '?",
    "options": [
      { "id": "A", "text": "!" },
      { "id": "B", "text": "W" },
      { "id": "C", "text": "E" },
      { "id": "D", "text": "M" },
      { "id": "E", "text": "O" }
    ],
    "answer": "A",
    "explanation": "Elements between '&' and '#': O, 7, W, !, E, R, 9 (Total 7 elements).\nThe middle (4th) element is '!'."
  },
  {
    "id": 13,
    "text": "What is the code for MESMERISING based on the following conditions?\n(i) If first is consonant & last is vowel, interchange codes.\n(ii) If both are consonants, both coded as last.\n(iii) If first is vowel & last is consonant, reverse entire word code.\n(iv) If both are vowels, both coded as first.",
    "options": [
      { "id": "A", "text": "5$€5$£8€86#" },
      { "id": "B", "text": "5$€5$£8€865" },
      { "id": "C", "text": "#$€5$£8€865" },
      { "id": "D", "text": "#$€5$£8€86#" },
      { "id": "E", "text": "None of these" }
    ],
    "answer": "D",
    "explanation": "By condition (ii), both 'M' and 'G' are consonants, so both are coded as the code of the last letter 'G' (#).\nResult: #$€5$£8€86#.",
    "explanationImage": "/images/aptitude/letter-series/coding-rules.svg"
  },
  {
    "id": 14,
    "text": "What is the code for AGGLUTINATE?",
    "options": [
      { "id": "A", "text": "1##4β¥861¥$" },
      { "id": "B", "text": "$##4β¥861¥$" },
      { "id": "C", "text": "1##4β¥861¥1" },
      { "id": "D", "text": "$##4β¥861¥1" },
      { "id": "E", "text": "None of these" }
    ],
    "answer": "C",
    "explanation": "By condition (iv), both the first and last letters are vowels ('A' and 'E'), so both are coded as the code of the first letter 'A' (1).\nResult: 1##4β¥861¥1."
  },
  {
    "id": 15,
    "text": "What is the code for INFLAMATION?",
    "options": [
      { "id": "A", "text": "698¥1514&68" },
      { "id": "B", "text": "86&4151¥896" },
      { "id": "C", "text": "86&4151¥898" },
      { "id": "D", "text": "66&4151¥896" },
      { "id": "E", "text": "None of these" }
    ],
    "answer": "A",
    "explanation": "By condition (iii), the first letter is a vowel ('I') and the last is a consonant ('N'), so the code for the entire word is reversed.\nBase code: 86&4151¥896 -> Reversed: 698¥1514&68."
  },
  {
    "id": 16,
    "text": "What is the code for DETERMINE?",
    "options": [
      { "id": "A", "text": "3$¥$£586$" },
      { "id": "B", "text": "$$¥$£5863" },
      { "id": "C", "text": "$685£$¥$3" },
      { "id": "D", "text": "$$¥$£586$" },
      { "id": "E", "text": "None of these" }
    ],
    "answer": "B",
    "explanation": "By condition (i), the first letter is a consonant ('D') and the last is a vowel ('E'), so their codes are interchanged.\nD(3), E($) -> Interchanged: E($), D(3).\nResult: $$¥$£5863"
  }
];
