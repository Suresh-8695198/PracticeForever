export const theory = [
  {
    "title": "Mirror Image",
    "description": "A mirror image is the reflection of an object in a mirror. In these questions, the mirror is usually placed vertically to the right or left. Key rules:\n1. **Lateral Inversion**: Left and right sides are interchanged.\n2. **Vertical Consistency**: Top and bottom stay the same.\n3. **Proximity**: Part of the object closest to the mirror remains closest in the reflection.",
    "image": "/images/aptitude/mirror-images.svg",
    "formulas": [
      { "label": "Vertical Mirror", "value": "Left ↔ Right swap. Top/Bottom remain same." },
      { "label": "Horizontal Mirror", "value": "Same as Water Image." }
    ]
  }
];

export const questions = [
  {
    "id": 201,
    "text": "Choose the correct mirror image of the given figure (X) if the mirror is placed to its right.",
    "image": "<svg width='60' height='60' viewBox='0 0 60 60'><text x='15' y='50' font-size='40' font-weight='bold'>P</text></svg>",
    "options": [
      { "id": "1", "text": "A", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><g transform='translate(60, 0) scale(-1, 1)'><text x='15' y='50' font-size='40' font-weight='bold'>P</text></g></svg>" },
      { "id": "2", "text": "B", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><g transform='translate(0, 60) scale(1, -1)'><text x='15' y='50' font-size='40' font-weight='bold'>P</text></g></svg>" },
      { "id": "3", "text": "C", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><text x='15' y='50' font-size='40' font-weight='bold'>P</text></svg>" },
      { "id": "4", "text": "D", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='20'/></svg>" }
    ],
    "answer": "1",
    "explanation": "In a vertical mirror, the letter P will undergo lateral inversion, facing the left instead of the right."
  },
  {
    "id": 202,
    "text": "Identify the mirror image of the following clock showing 3:00.",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='20' stroke='black'/><line x1='50' y1='50' x2='80' y2='50' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "9:00", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='20' stroke='black'/><line x1='50' y1='50' x2='20' y2='50' stroke='black'/></svg>" },
      { "id": "2", "text": "3:00", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='20' stroke='black'/><line x1='50' y1='50' x2='80' y2='50' stroke='black'/></svg>" },
      { "id": "3", "text": "6:00", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='80' stroke='black'/></svg>" },
      { "id": "4", "text": "12:00", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='10' stroke='black'/></svg>" }
    ],
    "answer": "1",
    "explanation": "In a vertical mirror, the minute hand (at 12) stays at 12, but the hour hand reflecting from 3 (right) appears at 9 (left)."
  },
  {
    "id": 203,
    "text": "What is the mirror image of the word 'QUALITY'?",
    "options": [
      { "id": "1", "text": "YTILAUQ (with each letter mirrored)" },
      { "id": "2", "text": "QUALITY (same as original)" },
      { "id": "3", "text": "YTILAUQ (reversed order only)" },
      { "id": "4", "text": "None of these" }
    ],
    "answer": "1",
    "explanation": "Mirror reflection reverses the order of characters and laterally inverts each character individually."
  },
  {
    "id": 204,
    "text": "Choose the correct mirror image of '123' across a vertical axis.",
    "options": [
      { "id": "1", "text": "321 (with mirrored digits)" },
      { "id": "2", "text": "123" },
      { "id": "3", "text": "321 (normal digits)" },
      { "id": "4", "text": "521" }
    ],
    "answer": "1",
    "explanation": "Reflection results in '3' becoming mirrored on the left, followed by mirrored '2' and mirrored '1' on the right."
  },
  {
    "id": 205,
    "text": "Mirror image of 'HELP'?",
    "options": [
      { "id": "1", "text": "PLEH (properly mirrored)" },
      { "id": "2", "text": "HELP" },
      { "id": "3", "text": "PLEH (not mirrored)" },
      { "id": "4", "text": "H3LP" }
    ],
    "answer": "1",
    "explanation": " Lateral inversion: H (symmetric), E (inverted), L (inverted), P (inverted) in reversed order."
  },
  {
    "id": 206,
    "text": "Identify the mirror image of 'WHITE'.",
    "options": [
      { "id": "1", "text": "ETIHW (mirrored)" },
      { "id": "2", "text": "WHITE" },
      { "id": "3", "text": "ETIHW" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Characters follow reversed sequence and lateral inversion."
  },
  {
    "id": 207,
    "text": "In a vertical mirror, the word 'MOM' looks exactly the same. Why?",
    "options": [
      { "id": "1", "text": "Letters M and O are vertically symmetric" },
      { "id": "2", "text": "It is a palindrome" },
      { "id": "3", "text": "Both 1 and 2 combined" },
      { "id": "4", "text": "It's a magic word" }
    ],
    "answer": "3",
    "explanation": "Because 'MOM' is a palindrome made of vertically symmetric letters, its mirror image is identical to the original."
  },
  {
    "id": 208,
    "text": "What is the mirror image of 'ANS43Q'?",
    "options": [
      { "id": "1", "text": "Q34SNA (mirrored)" },
      { "id": "2", "text": "ANS43Q" },
      { "id": "3", "text": "Q34SNA" },
      { "id": "4", "text": "QES4NA" }
    ],
    "answer": "1",
    "explanation": "Every character is reversed in order and laterally flipped."
  },
  {
    "id": 209,
    "text": "Analyze the mirror image of a clock showing 6:00.",
    "options": [
      { "id": "1", "text": "6:00" },
      { "id": "2", "text": "12:00" },
      { "id": "3", "text": "12:30" },
      { "id": "4", "text": "5:30" }
    ],
    "answer": "1",
    "explanation": "A clock at 6:00 has hands at 12 and 6, both of which lie on the vertical axis of symmetry, so the image is identical."
  },
  {
    "id": 210,
    "text": "Lateral inversion of letter 'E' results in:",
    "options": [
      { "id": "1", "text": "Backwards 'E' (facing left)" },
      { "id": "2", "text": "'3'" },
      { "id": "3", "text": "'F'" },
      { "id": "4", "text": "'M'" }
    ],
    "answer": "1",
    "explanation": "The horizontal bars move from the right side of the vertical stem to the left."
  },
  {
    "id": 211,
    "text": "Mirror image of 'L'?",
    "options": [
      { "id": "1", "text": "Backwards 'L' (pointing left)" },
      { "id": "2", "text": "'7'" },
      { "id": "3", "text": "'J'" },
      { "id": "4", "text": "'T'" }
    ],
    "answer": "1",
    "explanation": "The horizontal base flips to the opposite side."
  },
  {
    "id": 212,
    "text": "Mirror image of the letter 'R'?",
    "options": [
      { "id": "1", "text": "Backwards 'R' (Я)" },
      { "id": "2", "text": "'B'" },
      { "id": "3", "text": "'P'" },
      { "id": "4", "text": "'K'" }
    ],
    "answer": "1",
    "explanation": "The loop and the leg both flip horizontally."
  },
  {
    "id": 213,
    "text": "Mirror image of the digit '9'?",
    "options": [
      { "id": "1", "text": "Mirrored '9' (resembling 'e' or backwards 9)" },
      { "id": "2", "text": "'6'" },
      { "id": "3", "text": "'P'" },
      { "id": "4", "text": "'g'" }
    ],
    "answer": "1",
    "explanation": "A vertical mirror swaps left/right. Digits like 9 change significantly."
  },
  {
    "id": 214,
    "text": "Is the mirror image of 'MALAYALAM' identical to the original word?",
    "options": [
      { "id": "1", "text": "Yes (if letters are vertically symmetric)" },
      { "id": "2", "text": "No (L and Y would be mirrored)" },
      { "id": "3", "text": "Only in a horizontal mirror" },
      { "id": "4", "text": "Never" }
    ],
    "answer": "2",
    "explanation": "While it's a palindrome, letters like 'L' are not vertically symmetric, so the mirror image of 'MALAYALAM' results in back-to-front mirrored letters."
  },
  {
    "id": 215,
    "text": "What is the mirror image of a capital 'V'?",
    "options": [
      { "id": "1", "text": "V (identical)" },
      { "id": "2", "text": "A" },
      { "id": "3", "text": "v (lower case)" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Letters with vertical line symmetry (A, H, I, M, O, T, U, V, W, X, Y) remain unchanged in a vertical mirror."
  },
  {
    "id": 216,
    "text": "Mirror image of 'J'?",
    "options": [
      { "id": "1", "text": "Backwards 'J'" },
      { "id": "2", "text": "'L'" },
      { "id": "3", "text": "'T'" },
      { "id": "4", "text": "'i'" }
    ],
    "answer": "1",
    "explanation": "The hook of the J reverses direction."
  },
  {
    "id": 217,
    "text": "Mirror image of 'S'?",
    "options": [
      { "id": "1", "text": "Mirrored 'S' (resembling '2')" },
      { "id": "2", "text": "'S'" },
      { "id": "3", "text": "'Z'" },
      { "id": "4", "text": "'5'" }
    ],
    "answer": "1",
    "explanation": "The curves of S swap their horizontal directions."
  },
  {
    "id": 218,
    "text": "Choose the mirror image of the digit '4'.",
    "options": [
      { "id": "1", "text": "Backwards '4'" },
      { "id": "2", "text": "'A'" },
      { "id": "3", "text": "'H'" },
      { "id": "4", "text": "'P'" }
    ],
    "answer": "1",
    "explanation": "Horizontal flip of the asymmetric character."
  },
  {
    "id": 219,
    "text": "Mirror image of 'GNIXIF' (FIXING reversed)?",
    "options": [
      { "id": "1", "text": "FIXING (properly mirrored)" },
      { "id": "2", "text": "GNIXIF" },
      { "id": "3", "text": "GNIXIF reversed" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Reflection of reversed text 'GNIXIF' with individual mirroring of letters results in the mirrored appearance of the original 'FIXING'."
  },
  {
    "id": 220,
    "text": "Lateral inversion of 'UTZ' results in:",
    "options": [
      { "id": "1", "text": "ZTU (mirrored letters)" },
      { "id": "2", "text": "UTZ" },
      { "id": "3", "text": "STU" },
      { "id": "4", "text": "ZTU" }
    ],
    "answer": "1",
    "explanation": "Last letter 'Z' becomes first, 'T' stays second (but mirrored), 'U' becomes last."
  },
  {
    "id": 221,
    "text": "Final Check: Mirror image of 'B'?",
    "options": [
      { "id": "1", "text": "Backwards 'B'" },
      { "id": "2", "text": "'D'" },
      { "id": "3", "text": "'E'" },
      { "id": "4", "text": "'8'" }
    ],
    "answer": "1",
    "explanation": "The loops moves from the right of the vertical bar to the left."
  }
];
