export const theory = [
  {
    "title": "Water Image",
    "description": "A water image is the reflection of an object in water. This is equivalent to placing a mirror horizontally below the object. Key rules:\n1. **Vertical Inversion**: Top and bottom parts of the object are interchanged.\n2. **Lateral Consistency**: Left and right sides remain the same (no left-right swap).\n3. **Proximity**: The part of the object closest to the water surface (bottom) appears closest in the reflection (top of the reflection).",
    "image": "/images/aptitude/water-images.svg",
    "formulas": [
      { "label": "Horizontal Reflection", "value": "Top ↔ Bottom swap. Left/Right remain same." }
    ]
  }
];

export const questions = [
  {
    "id": 301,
    "text": "Choose the correct water image of the given figure (X).",
    "image": "<svg width='60' height='60' viewBox='0 0 60 60'><text x='15' y='50' font-size='40' font-weight='bold'>M</text></svg>",
    "options": [
      { "id": "1", "text": "A", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><g transform='translate(0, 60) scale(1, -1)'><text x='15' y='50' font-size='40' font-weight='bold'>M</text></g></svg>" },
      { "id": "2", "text": "B", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><text x='15' y='50' font-size='40' font-weight='bold'>M</text></svg>" },
      { "id": "3", "text": "C", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><g transform='translate(60, 0) scale(-1, 1)'><text x='15' y='50' font-size='40' font-weight='bold'>M</text></g></svg>" },
      { "id": "4", "text": "D", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><text x='15' y='50' font-size='40'>W</text></svg>" }
    ],
    "answer": "1",
    "explanation": "In a water image, the top and bottom are interchanged. The capital 'M' flips vertically to look like 'W'."
  },
  {
    "id": 302,
    "text": "Identify the water image of the clock showing 3:00.",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='20' stroke='black'/><line x1='50' y1='50' x2='80' y2='50' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "3:30 (approx)", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='80' stroke='black'/><line x1='50' y1='50' x2='80' y2='50' stroke='black'/></svg>" },
      { "id": "2", "text": "9:00", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='20' y2='50' stroke='black'/><line x1='50' y1='50' x2='50' y2='20' stroke='black'/></svg>" },
      { "id": "3", "text": "3:00", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='20' stroke='black'/><line x1='50' y1='50' x2='80' y2='50' stroke='black'/></svg>" },
      { "id": "4", "text": "6:00", "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><line x1='50' y1='50' x2='50' y2='80' stroke='black'/></svg>" }
    ],
    "answer": "1",
    "explanation": "In water reflection, the hour hand at 3 (horizontal) stays at 3, but the minute hand at 12 (vertical top) flips to 6 (vertical bottom)."
  },
  {
    "id": 303,
    "text": "Which of these letters looks identical in a water image?",
    "options": [
      { "id": "1", "text": "H" },
      { "id": "2", "text": "V" },
      { "id": "3", "text": "M" },
      { "id": "4", "text": "A" }
    ],
    "answer": "1",
    "explanation": "Letters with horizontal line symmetry (B, C, D, E, H, I, K, O, X) remain unchanged in a water image."
  },
  {
    "id": 304,
    "text": "What is the water image of the digit '8'?",
    "options": [
      { "id": "1", "text": "8 (Identical)" },
      { "id": "2", "text": "0" },
      { "id": "3", "text": "B" },
      { "id": "4", "text": "3" }
    ],
    "answer": "1",
    "explanation": "The digit '8' is horizontally symmetric, so its reflection is identical."
  },
  {
    "id": 305,
    "text": "Water image of 'QUALITY'?",
    "options": [
      { "id": "1", "text": "Vertically flipped letters in the same order" },
      { "id": "2", "text": "QUALITY (same)" },
      { "id": "3", "text": "YTILAUQ (reversed)" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Water reflection flips each character vertically but maintains their left-to-right order."
  },
  {
    "id": 306,
    "text": "Water image of 'CODE'?",
    "options": [
      { "id": "1", "text": "CODE (Identical appearance)" },
      { "id": "2", "text": "EDOC" },
      { "id": "3", "text": "0000" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "C, O, D, and E all have horizontal symmetry, so the entire word 'CODE' appears unchanged in water."
  },
  {
    "id": 307,
    "text": "Identify the water image of the letter 'A'.",
    "options": [
      { "id": "1", "text": "Inverted 'A' (similar to 'V' with a crossbar)" },
      { "id": "2", "text": "'A'" },
      { "id": "3", "text": "'V'" },
      { "id": "4", "text": "Mirror 'A'" }
    ],
    "answer": "1",
    "explanation": "The top point of 'A' flips to the bottom, and the wide base moves to the top."
  },
  {
    "id": 308,
    "text": "Water image of the digit '6'.",
    "options": [
      { "id": "1", "text": "Inverted '6' (approximating '9' but without lateral swap)" },
      { "id": "2", "text": "'9'" },
      { "id": "3", "text": "'e'" },
      { "id": "4", "text": "'p'" }
    ],
    "answer": "1",
    "explanation": "The bottom loop moves to the top, but the curve remains on the same side (right)."
  },
  {
    "id": 309,
    "text": "Choose the water image of 'MOM'.",
    "options": [
      { "id": "1", "text": "WOW" },
      { "id": "2", "text": "MOM" },
      { "id": "3", "text": "NON" },
      { "id": "4", "text": "SOS" }
    ],
    "answer": "1",
    "explanation": "M flips to W, O stays O, M flips to W. Result: WOW."
  },
  {
    "id": 310,
    "text": "Water image of 'BOX'?",
    "options": [
      { "id": "1", "text": "BOX (Identical)" },
      { "id": "2", "text": "XOB" },
      { "id": "3", "text": "DOX" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "B, O, and X all have horizontal symmetry segments."
  },
  {
    "id": 311,
    "text": "What is the water image of '1'?",
    "options": [
      { "id": "1", "text": "Inverted '1' (base at top, hook at bottom)" },
      { "id": "2", "text": "'1'" },
      { "id": "3", "text": "'7'" },
      { "id": "4", "text": "'L'" }
    ],
    "answer": "1",
    "explanation": "Vertical inversion of the character's height profile."
  },
  {
    "id": 312,
    "text": "Water image of the letter 'F'?",
    "options": [
      { "id": "1", "text": "Inverted 'F' (pointing right, but bars at the bottom)" },
      { "id": "2", "text": "'L'" },
      { "id": "3", "text": "'E'" },
      { "id": "4", "text": "'7'" }
    ],
    "answer": "1",
    "explanation": "The horizontal arms move from top-aligned to bottom-aligned."
  },
  {
    "id": 313,
    "text": "Which digit looks like its mirror image in water?",
    "options": [
      { "id": "1", "text": "0" },
      { "id": "2", "text": "1" },
      { "id": "3", "text": "2" },
      { "id": "4", "text": "4" }
    ],
    "answer": "1",
    "explanation": "0 (and 8) have both vertical and horizontal symmetry."
  },
  {
    "id": 314,
    "text": "Water image of 'U'?",
    "options": [
      { "id": "1", "text": "Inverted 'U' (looks like 'n')" },
      { "id": "2", "text": "'U'" },
      { "id": "3", "text": "'O'" },
      { "id": "4", "text": "'C'" }
    ],
    "answer": "1",
    "explanation": "The opening moves from the top to the bottom."
  },
  {
    "id": 315,
    "text": "Water image of the digit '7'?",
    "options": [
      { "id": "1", "text": "Inverted '7' (approximating 'L' or angle)" },
      { "id": "2", "text": "'7'" },
      { "id": "3", "text": "'V'" },
      { "id": "4", "text": "Cross" }
    ],
    "answer": "1",
    "explanation": "The horizontal top bar becomes the bottom bar."
  },
  {
    "id": 316,
    "text": "Identify the water image of 'S'.",
    "options": [
      { "id": "1", "text": "Inverted 'S' (still 'S'-like but vertically flipped)" },
      { "id": "2", "text": "'S' (identical)" },
      { "id": "3", "text": "'2'" },
      { "id": "4", "text": "'5'" }
    ],
    "answer": "1",
    "explanation": "Though it has rotational symmetry, a vertical flip of S is not identical to the original."
  },
  {
    "id": 317,
    "text": "Water image of the letter 'P'?",
    "options": [
      { "id": "1", "text": "Inverted 'P' (looks like 'b')" },
      { "id": "2", "text": "'P'" },
      { "id": "3", "text": "'d'" },
      { "id": "4", "text": "'q'" }
    ],
    "answer": "1",
    "explanation": "The loop moves from top-right to bottom-right."
  },
  {
    "id": 318,
    "text": "Which of these words is a 'water-palindrome' (looks same in water)?",
    "options": [
      { "id": "1", "text": "HIKED" },
      { "id": "2", "text": "OX" },
      { "id": "3", "text": "BED" },
      { "id": "4", "text": "All of these (conceptually if symmetric fonts)" }
    ],
    "answer": "4",
    "explanation": "Letters H, I, K, E, D, O, X, B all have horizontal symmetry lines."
  },
  {
    "id": 319,
    "text": "Water image of 'B'?",
    "options": [
      { "id": "1", "text": "B (usually identical in standard type)" },
      { "id": "2", "text": "P" },
      { "id": "3", "text": "D" },
      { "id": "4", "text": "8" }
    ],
    "answer": "1",
    "explanation": "B as a capital letter is horizontally symmetric."
  },
  {
    "id": 320,
    "text": "What is the water image of a downward pointing triangle?",
    "options": [
      { "id": "1", "text": "Upward pointing triangle" },
      { "id": "2", "text": "Downward pointing triangle" },
      { "id": "3", "text": "Square" },
      { "id": "4", "text": "Circle" }
    ],
    "answer": "1",
    "explanation": "Vertical inversion flips the apex and the base."
  },
  {
    "id": 321,
    "text": "Final Water Check: Water image of 'X'?",
    "options": [
      { "id": "1", "text": "X (Identical)" },
      { "id": "2", "text": "Y" },
      { "id": "3", "text": "+" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "X has total symmetry."
  }
];
