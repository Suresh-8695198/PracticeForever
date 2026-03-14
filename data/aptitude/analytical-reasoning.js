export const theory = [
  {
    "title": "Analytical Reasoning",
    "description": "Analytical Reasoning in non-verbal sections primarily involves counting the number of geometric shapes (triangles, squares, rectangles, circles) within a complex parent diagram. It requires careful observation and breaking down complex figures into simpler overlapping components.",
    "image": "/images/aptitude/analytical-reasoning.svg",
    "formulas": [
      { "label": "Triangle Rule 1", "value": "A triangle divided into n segments from one vertex has n(n+1)/2 triangles." },
      { "label": "Square Rule 1", "value": "A grid of n x n has n(n+1)(2n+1)/6 squares." },
      { "label": "Rectangle Rule 1", "value": "A grid of m x n has [m(m+1)/2] * [n(n+1)/2] rectangles." }
    ]
  }
];

export const questions = [
  {
    "id": 12301,
    "text": "How many triangles are there in the given figure?",
    "image": "<svg width='200' height='150' viewBox='0 0 200 150'><path d='M10 140 L190 140 L100 10 Z' fill='none' stroke='black' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='black'/><line x1='100' y1='10' x2='55' y2='140' stroke='black'/><line x1='100' y1='10' x2='145' y2='140' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "6" },
      { "id": "2", "text": "10" },
      { "id": "3", "text": "12" },
      { "id": "4", "text": "15" }
    ],
    "answer": "2",
    "explanation": "The base is divided into 4 segments. Using the formula n(n+1)/2: 4(4+1)/2 = 10 triangles."
  },
  {
    "id": 12302,
    "text": "Count the number of squares in the 3x3 grid below.",
    "image": "<svg width='150' height='150' viewBox='0 0 150 150'><rect x='10' y='10' width='120' height='120' fill='none' stroke='black'/><line x1='50' y1='10' x2='50' y2='130' stroke='black'/><line x1='90' y1='10' x2='90' y2='130' stroke='black'/><line x1='10' y1='50' x2='130' y2='50' stroke='black'/><line x1='10' y1='90' x2='130' y2='90' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "9" },
      { "id": "2", "text": "10" },
      { "id": "3", "text": "13" },
      { "id": "4", "text": "14" }
    ],
    "answer": "4",
    "explanation": "Total squares = 3² + 2² + 1² = 9 + 4 + 1 = 14."
  },
  {
    "id": 12303,
    "text": "How many triangles are visible in this square with dual diagonals?",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' stroke='black' fill='none'/><line x1='10' y1='10' x2='90' y2='90' stroke='black'/><line x1='90' y1='10' x2='10' y2='90' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "6" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "10" }
    ],
    "answer": "3",
    "explanation": "There are 4 small segment triangles and 4 larger triangles formed by combining adjacent segments along the diagonals. Total = 8."
  },
  {
    "id": 12304,
    "text": "Count the number of circles in this linear pattern.",
    "image": "<svg width='150' height='100' viewBox='0 0 150 100'><circle cx='30' cy='30' r='20' stroke='black' fill='none'/><circle cx='60' cy='30' r='20' stroke='black' fill='none'/><circle cx='90' cy='30' r='20' stroke='black' fill='none'/><circle cx='120' cy='30' r='20' stroke='black' fill='none'/></svg>",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "5" },
      { "id": "4", "text": "6" }
    ],
    "answer": "2",
    "explanation": "There are four distinct circles overlapping in a row."
  },
  {
    "id": 12305,
    "text": "How many triangles are there in a triangle with one horizontal line?",
    "image": "<svg width='150' height='150' viewBox='0 0 150 150'><path d='M10 130 L140 130 L75 10 Z' fill='none' stroke='black'/><line x1='42.5' y1='70' x2='107.5' y2='70' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "1" },
      { "id": "2", "text": "2" },
      { "id": "3", "text": "3" },
      { "id": "4", "text": "4" }
    ],
    "answer": "2",
    "explanation": "The figure contains one small triangle at the top and one larger triangle encompassing the whole figure."
  },
  {
    "id": 12306,
    "text": "How many squares are in a 2x2 grid?",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' fill='none' stroke='black'/><line x1='50' y1='10' x2='50' y2='90' stroke='black'/><line x1='10' y1='50' x2='90' y2='50' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "5" },
      { "id": "3", "text": "6" },
      { "id": "4", "text": "8" }
    ],
    "answer": "2",
    "explanation": "There are 4 small quadrant squares and 1 large outer square. Total = 4 + 1 = 5."
  },
  {
    "id": 12307,
    "text": "How many rectangles are in the 2x2 grid below?",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' fill='none' stroke='black'/><line x1='50' y1='10' x2='50' y2='90' stroke='black'/><line x1='10' y1='50' x2='90' y2='50' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "5" },
      { "id": "2", "text": "9" },
      { "id": "3", "text": "12" },
      { "id": "4", "text": "16" }
    ],
    "answer": "2",
    "explanation": "Using formula [m(m+1)/2] * [n(n+1)/2] for m=2, n=2: (3) * (3) = 9."
  },
  {
    "id": 12308,
    "text": "Count the number of triangles in a five-pointed star (pentagram).",
    "image": "<svg width='150' height='150' viewBox='0 0 150 150'><path d='M75 10 L95 60 L145 60 L105 90 L120 140 L75 110 L30 140 L45 90 L5 60 L55 60 Z' fill='none' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "5" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "10" },
      { "id": "4", "text": "12" }
    ],
    "answer": "3",
    "explanation": "There are 5 small triangles forming the points and 5 larger triangles formed by the inner crossing lines. Total = 10."
  },
  {
    "id": 12309,
    "text": "How many straight lines are needed to construct a Hexagon?",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "5" },
      { "id": "3", "text": "6" },
      { "id": "4", "text": "8" }
    ],
    "answer": "3",
    "explanation": "By definition, a hexagon is a polygon with 6 sides, each being a straight line."
  },
  {
    "id": 12310,
    "text": "How many triangles are in a rectangle with one diagonal?",
    "image": "<svg width='150' height='100' viewBox='0 0 150 100'><rect x='10' y='10' width='130' height='80' fill='none' stroke='black'/><line x1='10' y1='10' x2='140' y2='90' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "1" },
      { "id": "2", "text": "2" },
      { "id": "3", "text": "3" },
      { "id": "4", "text": "4" }
    ],
    "answer": "2",
    "explanation": "A single diagonal splits a rectangle exactly into 2 equal right-angled triangles."
  },
  {
    "id": 12311,
    "text": "Count the number of circles in a pattern of 5 interlocking rings.",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "5" },
      { "id": "4", "text": "6" }
    ],
    "answer": "3",
    "explanation": "The pattern described literally consists of 5 distinct circles."
  },
  {
    "id": 12312,
    "text": "How many squares are there in a 4x4 grid?",
    "image": "<svg width='150' height='150' viewBox='0 0 150 150'><rect x='10' y='10' width='120' height='120' fill='none' stroke='black'/><line x1='40' y1='10' x2='40' y2='130' stroke='black'/><line x1='70' y1='10' x2='70' y2='130' stroke='black'/><line x1='100' y1='10' x2='100' y2='130' stroke='black'/><line x1='10' y1='40' x2='130' y2='40' stroke='black'/><line x1='10' y1='70' x2='130' y2='70' stroke='black'/><line x1='10' y1='100' x2='130' y2='100' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "16" },
      { "id": "2", "text": "20" },
      { "id": "3", "text": "30" },
      { "id": "4", "text": "40" }
    ],
    "answer": "3",
    "explanation": "Sum of squares: 4² + 3² + 2² + 1² = 16 + 9 + 4 + 1 = 30."
  },
  {
    "id": 12313,
    "text": "Count triangles in a large triangle with two horizontal internal dividers.",
    "options": [
      { "id": "1", "text": "2" },
      { "id": "2", "text": "3" },
      { "id": "3", "text": "4" },
      { "id": "4", "text": "5" }
    ],
    "answer": "2",
    "explanation": "Each horizontal line creates a new, larger triangle from the top vertex. Total = 3 triangles."
  },
  {
    "id": 12314,
    "text": "How many edges does a standard cube have?",
    "options": [
      { "id": "1", "text": "6" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "12" },
      { "id": "4", "text": "16" }
    ],
    "answer": "3",
    "explanation": "A cube has 12 edges (4 top, 4 bottom, 4 vertical)."
  },
  {
    "id": 12315,
    "text": "How many vertices (corners) in a standard cube?",
    "options": [
      { "id": "1", "text": "6" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "12" },
      { "id": "4", "text": "16" }
    ],
    "answer": "2",
    "explanation": "A cube has 8 vertices (4 on top and 4 on the bottom)."
  },
  {
    "id": 12316,
    "text": "How many faces does a tetrahedron (triangular pyramid) have?",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "5" },
      { "id": "4", "text": "6" }
    ],
    "answer": "2",
    "explanation": "A tetrahedron has 4 faces (one base and three sides)."
  },
  {
    "id": 12317,
    "text": "How many squares are formed by two overlapping squares that cross at their centers?",
    "options": [
      { "id": "1", "text": "2" },
      { "id": "2", "text": "3" },
      { "id": "3", "text": "4" },
      { "id": "4", "text": "5" }
    ],
    "answer": "2",
    "explanation": "The 2 original squares plus 1 small square in the overlap area. Total = 3."
  },
  {
    "id": 12318,
    "text": "Count the number of squares in a 1x3 grid.",
    "options": [
      { "id": "1", "text": "1" },
      { "id": "2", "text": "2" },
      { "id": "3", "text": "3" },
      { "id": "4", "text": "4" }
    ],
    "answer": "3",
    "explanation": "In a 1x3 grid, you can only find three 1x1 squares. No squares of larger dimensions exist."
  },
  {
    "id": 12319,
    "text": "Count the number of rectangles (including squares) in a 1x3 grid.",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "5" },
      { "id": "4", "text": "6" }
    ],
    "answer": "4",
    "explanation": "Formula: 3(4)/2 * 1(2)/2 = 6. (Sizes: 1x1, 1x1, 1x1, 1x2, 1x2, 1x3)."
  },
  {
    "id": 12320,
    "text": "How many triangles are there in a standard Hexagram (Star of David)?",
    "options": [
      { "id": "1", "text": "6" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "10" },
      { "id": "4", "text": "12" }
    ],
    "answer": "2",
    "explanation": "There are 6 small triangles (points) and 2 large primary triangles. Total = 8."
  },
  {
    "id": 12321,
    "text": "How many triangles in a square with lines from one corner to midpoints of opposite sides?",
    "options": [
      { "id": "1", "text": "1" },
      { "id": "2", "text": "2" },
      { "id": "3", "text": "3" },
      { "id": "4", "text": "4" }
    ],
    "answer": "3",
    "explanation": "The construction forms 3 distinct triangles within the square."
  }
];
