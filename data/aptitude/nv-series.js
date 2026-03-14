export const theory = [
  {
    "title": "Non-Verbal Series",
    "description": "Non-verbal series questions present a sequence of figures following a specific logical rule. You must identify the rule and select the figure that correctly continues the series. Common patterns include rotation, scaling, movement, and progressive addition/deletion of elements.",
    "image": "/images/aptitude/nv-series.svg",
    "formulas": [
      { "label": "Rotation", "value": "Clockwise or anti-clockwise movement by fixed degrees." },
      { "label": "Addition/Deletion", "value": "Number of elements (lines, dots) increasing or decreasing." },
      { "label": "Movement", "value": "Shapes shifting positions within the frame." }
    ]
  }
];

export const questions = [
  {
    "id": 12001,
    "text": "Select a figure which would continue the series.",
    "image": "<svg width='300' height='60' viewBox='0 0 300 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><line x1='30' y1='5' x2='30' y2='55' stroke='black'/><rect x='65' y='5' width='50' height='50' fill='none' stroke='black'/><line x1='65' y1='30' x2='115' y2='30' stroke='black'/><rect x='125' y='5' width='50' height='50' fill='none' stroke='black'/><line x1='150' y1='5' x2='150' y2='55' stroke='black'/><rect x='185' y='5' width='50' height='50' fill='none' stroke='black'/><line x1='185' y1='30' x2='235' y2='30' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "A", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><line x1='30' y1='5' x2='30' y2='55' stroke='black'/></svg>" },
      { "id": "2", "text": "B", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><line x1='5' y1='30' x2='55' y2='30' stroke='black'/></svg>" },
      { "id": "3", "text": "C", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><line x1='5' y1='5' x2='55' y2='55' stroke='black'/></svg>" },
      { "id": "4", "text": "D", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><circle cx='30' cy='30' r='5' fill='black'/></svg>" }
    ],
    "answer": "1",
    "explanation": "The line inside the square alternates between vertical and horizontal orientations. Since the last one was horizontal, the next must be vertical."
  },
  {
    "id": 12002,
    "text": "What comes next in the series of circles?",
    "image": "<svg width='300' height='60' viewBox='0 0 300 60'><circle cx='30' cy='30' r='20' stroke='black' fill='none'/><circle cx='100' cy='30' r='20' stroke='black' fill='none'/><circle cx='100' cy='30' r='5' fill='black'/><circle cx='170' cy='30' r='20' stroke='black' fill='none'/><circle cx='170' cy='30' r='10' fill='black'/></svg>",
    "options": [
      { "id": "1", "text": "Outer circle with inner solid circle of radius 15" },
      { "id": "2", "text": "Fully solid circle" },
      { "id": "3", "text": "Two separate circles" },
      { "id": "4", "text": "Empty outer circle" }
    ],
    "answer": "1",
    "explanation": "The inner solid circle is growing in radius by 5 units in each step (0, 5, 10). The next step is a radius of 15."
  },
  {
    "id": 12003,
    "text": "Identify the next figure based on dot movement.",
    "image": "<svg width='300' height='60' viewBox='0 0 300 60'><rect x='10' y='10' width='40' height='40' stroke='black' fill='none'/><circle cx='20' cy='20' r='5' fill='black'/><rect x='70' y='10' width='40' height='40' stroke='black' fill='none'/><circle cx='100' cy='20' r='5' fill='black'/><rect x='130' y='10' width='40' height='40' stroke='black' fill='none'/><circle cx='160' cy='40' r='5' fill='black'/></svg>",
    "options": [
      { "id": "1", "text": "Dot at bottom-left corner" },
      { "id": "2", "text": "Dot at top-left corner" },
      { "id": "3", "text": "Dot at center" },
      { "id": "4", "text": "No dot" }
    ],
    "answer": "1",
    "explanation": "The small dot moves clockwise from corner to corner inside the square: Top-left -> Top-right -> Bottom-right -> Bottom-left."
  },
  {
    "id": 12004,
    "text": "Which figure correctly continues the alternating 'V' pattern?",
    "image": "<svg width='300' height='60' viewBox='0 0 300 60'><path d='M10 50 L30 10 L50 50' fill='none' stroke='black'/><path d='M70 10 L90 50 L110 10' fill='none' stroke='black'/><path d='M130 50 L150 10 L170 50' fill='none' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "V pointing down (Vertex at bottom center)" },
      { "id": "2", "text": "V pointing up" },
      { "id": "3", "text": "Double V" },
      { "id": "4", "text": "Horizontal line" }
    ],
    "answer": "1",
    "explanation": "The shape alternates between an upright 'V' and an inverted 'V'. The next in sequence should be inverted."
  },
  {
    "id": 12005,
    "text": "Determine the next figure based on line addition.",
    "image": "1 line -> 2 parallel lines -> 3 parallel lines.",
    "options": [
      { "id": "1", "text": "4 parallel lines" },
      { "id": "2", "text": "1 line" },
      { "id": "3", "text": "Crossed lines" },
      { "id": "4", "text": "Circle" }
    ],
    "answer": "1",
    "explanation": "The number of lines in the figure increases by one incrementally (1, 2, 3...)."
  },
  {
    "id": 12006,
    "text": "What follows the sequence: Circle, Square, Circle, Square?",
    "options": [
      { "id": "1", "text": "Circle" },
      { "id": "2", "text": "Square" },
      { "id": "3", "text": "Triangle" },
      { "id": "4", "text": "Hexagon" }
    ],
    "answer": "1",
    "explanation": "This is a simple binary periodic series (A-B-A-B). The next should be A (Circle)."
  },
  {
    "id": 12007,
    "text": "Identify the 270° clockwise rotation of the letter 'L' from a starting upright position.",
    "options": [
      { "id": "1", "text": "L lying on its back (Vertical bar horizontal, base vertical pointing up)" },
      { "id": "2", "text": "Normal L" },
      { "id": "3", "text": "Inverted L" },
      { "id": "4", "text": "Mirrored L" }
    ],
    "answer": "1",
    "explanation": "90° -> L on side, 180° -> L upside down, 270° -> L on other side."
  },
  {
    "id": 12008,
    "text": "What is the continuation of a series showing 1, 2, and 3 dots sequentially?",
    "options": [
      { "id": "1", "text": "A figure with 4 dots" },
      { "id": "2", "text": "A figure with 1 dot" },
      { "id": "3", "text": "A square" },
      { "id": "4", "text": "A line" }
    ],
    "answer": "1",
    "explanation": "Arithmetic progression in the count of elements (+1)."
  },
  {
    "id": 12009,
    "text": "Identify the next step in internal line reflection (Top-Left to Bottom-Right -> Top-Right to Bottom-Left).",
    "options": [
      { "id": "1", "text": "First slash orientation (TL to BR)" },
      { "id": "2", "text": "Second slash orientation (TR to BL)" },
      { "id": "3", "text": "Both slashes (X)" },
      { "id": "4", "text": "No slash" }
    ],
    "answer": "1",
    "explanation": "The orientation alternates back and forth."
  },
  {
    "id": 12010,
    "text": "A solid circle starts as a tiny dot and grows larger in each step. What is next?",
    "options": [
      { "id": "1", "text": "An even larger solid circle" },
      { "id": "2", "text": "A smaller dot" },
      { "id": "3", "text": "A ring" },
      { "id": "4", "text": "A square" }
    ],
    "answer": "1",
    "explanation": "Following the rule of progressive scaling (increasing size)."
  },
  {
    "id": 12011,
    "text": "Sequence: Triangle, Square, Pentagon. What is the fourth shape?",
    "options": [
      { "id": "1", "text": "Hexagon" },
      { "id": "2", "text": "Heptagon" },
      { "id": "3", "text": "Circle" },
      { "id": "4", "text": "Point" }
    ],
    "answer": "1",
    "explanation": "Polygons are ordered by the increasing number of sides (3, 4, 5...)."
  },
  {
    "id": 12012,
    "text": "A dot on a clock face moves from 12 to 3 to 6. Where is it next?",
    "options": [
      { "id": "1", "text": "At 9 o'clock position" },
      { "id": "2", "text": "Back at 12 o'clock" },
      { "id": "3", "text": "At 1 o'clock" },
      { "id": "4", "text": "At 11 o'clock" }
    ],
    "answer": "1",
    "explanation": "Periodic 90-degree clockwise jumping pattern."
  },
  {
    "id": 12013,
    "text": "Continue the series: One horizontal line, then two, then three.",
    "options": [
      { "id": "1", "text": "Four horizontal lines" },
      { "id": "2", "text": "Five lines" },
      { "id": "3", "text": "One vertical line" },
      { "id": "4", "text": "Dot" }
    ],
    "answer": "1",
    "explanation": "Additive progression of identical elements."
  },
  {
    "id": 12014,
    "text": "Pattern: Shaded Top Half, Shaded Bottom Half, Shaded Top Half. Next?",
    "options": [
      { "id": "1", "text": "Shaded Bottom Half" },
      { "id": "2", "text": "Shaded Left Half" },
      { "id": "3", "text": "Fully Shaded" },
      { "id": "4", "text": "Hollow" }
    ],
    "answer": "1",
    "explanation": "Vertical alternation of the shaded state."
  },
  {
    "id": 12015,
    "text": "Series: Arrow up, Arrow right, Arrow down. What is the fourth direction?",
    "options": [
      { "id": "1", "text": "Arrow left" },
      { "id": "2", "text": "Arrow up" },
      { "id": "3", "text": "Double arrow" },
      { "id": "4", "text": "Dot" }
    ],
    "answer": "1",
    "explanation": "The arrow rotates 90 degrees clockwise at each step."
  },
  {
    "id": 12016,
    "text": "Identify the next shape: Small square, Medium square, Large square.",
    "options": [
      { "id": "1", "text": "Extra-large square" },
      { "id": "2", "text": "Small square" },
      { "id": "3", "text": "Circle" },
      { "id": "4", "text": "Triangle" }
    ],
    "answer": "1",
    "explanation": "Consistent scaling rule."
  },
  {
    "id": 12017,
    "text": "Sequence: 1 star, 3 stars, 5 stars. What is next?",
    "options": [
      { "id": "1", "text": "7 stars" },
      { "id": "2", "text": "9 stars" },
      { "id": "3", "text": "6 stars" },
      { "id": "4", "text": "2 stars" }
    ],
    "answer": "1",
    "explanation": "Increasing sequence of odd numbers (+2 increment)."
  },
  {
    "id": 12018,
    "text": "Logic check: A square is divided into 2 parts, then 4, then 6. Next?",
    "options": [
      { "id": "1", "text": "8 parts" },
      { "id": "2", "text": "10 parts" },
      { "id": "3", "text": "12 parts" },
      { "id": "4", "text": "16 parts" }
    ],
    "answer": "1",
    "explanation": "Increasing sequence of even numbers for division counts."
  },
  {
    "id": 12019,
    "text": "Which follows: Hollow Triangle, Shaded Triangle, Hollow Square, Shaded Square...?",
    "options": [
      { "id": "1", "text": "Hollow Pentagon" },
      { "id": "2", "text": "Shaded Pentagon" },
      { "id": "3", "text": "Hollow Hexagon" },
      { "id": "4", "text": "Dot" }
    ],
    "answer": "1",
    "explanation": "The series cycles (Hollow, Shaded) while increasing polygon sides every two steps."
  },
  {
    "id": 12020,
    "text": "Series: (..), (...), (....). What is the next group?",
    "options": [
      { "id": "1", "text": "(.....) i.e. 5 dots" },
      { "id": "2", "text": "(......) i.e. 6 dots" },
      { "id": "3", "text": "Empty bracket" },
      { "id": "4", "text": "Square" }
    ],
    "answer": "1",
    "explanation": "Incrementing dot count inside a boundary."
  },
  {
    "id": 12021,
    "text": "Bonus: Mirror-S, S, Mirror-S, S. What is next?",
    "options": [
      { "id": "1", "text": "Mirror-S" },
      { "id": "2", "text": "S" },
      { "id": "3", "text": "Z" },
      { "id": "4", "text": "M" }
    ],
    "answer": "1",
    "explanation": "Standard A-B alternating reflection series."
  }
];
