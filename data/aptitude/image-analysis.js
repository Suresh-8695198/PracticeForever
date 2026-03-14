export const theory = [
  {
    "title": "Image Analysis",
    "description": "Image analysis involves observing a detailed figure and answering questions about its properties, such as counting specific shapes, identifying symmetry, or spotting subtle differences. It requires high attention to detail and logical categorization of visual information.",
    "image": "/images/aptitude/image-analysis.svg"
  }
];

export const questions = [
  {
    "id": 1301,
    "text": "Identify the number of circles in the given pattern.",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><circle cx='50' cy='50' r='30' stroke='black' fill='none'/><circle cx='50' cy='50' r='20' stroke='black' fill='none'/></svg>",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "5" },
      { "id": "4", "text": "6" }
    ],
    "answer": "1",
    "explanation": "There are three concentric circles shown clearly in the SVG image."
  },
  {
    "id": 1302,
    "text": "Count the total number of straight line segments in the figure 'X'.",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><path d='M10 10 L40 10 L40 40 L10 40 Z' fill='none' stroke='black'/><line x1='50' y1='10' x2='90' y2='10' stroke='black'/><line x1='90' y1='10' x2='90' y2='40' stroke='black'/></svg>",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "5" },
      { "id": "3", "text": "6" },
      { "id": "4", "text": "7" }
    ],
    "answer": "3",
    "explanation": "There is 1 square (4 segments) and 1 angle (2 segments). Total 6 segments."
  },
  {
    "id": 1303,
    "text": "Identify the type of symmetry present in a regular pentagon.",
    "options": [
      { "id": "1", "text": "Vertical only" },
      { "id": "2", "text": "No symmetry" },
      { "id": "3", "text": "Five lines of reflective symmetry" },
      { "id": "4", "text": "Two lines of symmetry" }
    ],
    "answer": "3",
    "explanation": "A regular pentagon has five lines of symmetry, each passing through a vertex and the midpoint of the opposite side."
  },
  {
    "id": 1304,
    "text": "How many triangles are there in an octagon where all diagonals from one vertex are drawn?",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "6" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "5" }
    ],
    "answer": "2",
    "explanation": "Connecting one vertex to all others in an n-sided polygon creates (n-2) triangles. For an octagon (8 sides), the number is 8-2 = 6."
  },
  {
    "id": 1305,
    "text": "Which shape is formed by the intersection of two congruent circles passing through each other's centers?",
    "options": [
      { "id": "1", "text": "Vesica piscis (Lens-like shape)" },
      { "id": "2", "text": "Square" },
      { "id": "3", "text": "Ring" },
      { "id": "4", "text": "Line" }
    ],
    "answer": "1",
    "explanation": "The intersection of two congruent circles through each other's centers is called a vesica piscis."
  },
  {
    "id": 1306,
    "text": "How many white pixels are in a 10x10 black-and-white checkerboard (starting with black)?",
    "options": [
      { "id": "1", "text": "50" },
      { "id": "2", "text": "45" },
      { "id": "3", "text": "55" },
      { "id": "4", "text": "100" }
    ],
    "answer": "1",
    "explanation": "A 10x10 board has 100 total squares. Half are black and half are white. Total = 50."
  },
  {
    "id": 1307,
    "text": "In a Venn diagram of 3 partially overlapping circles, how many distinct regions are created (including the exterior)?",
    "options": [
      { "id": "1", "text": "7" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "9" },
      { "id": "4", "text": "6" }
    ],
    "answer": "2",
    "explanation": "The standard 3-circle overlap creates 7 interior regions. Adding the exterior context makes it 8."
  },
  {
    "id": 1308,
    "text": "Analyze the rotational symmetry of a standard uppercase letter 'S'.",
    "options": [
      { "id": "1", "text": "90°" },
      { "id": "2", "text": "180°" },
      { "id": "3", "text": "360° only" },
      { "id": "4", "text": "No rotational symmetry" }
    ],
    "answer": "2",
    "explanation": "Turning the letter 'S' by 180° results in an identical appearance."
  },
  {
    "id": 1309,
    "text": "How many lines of symmetry does a non-square rectangle have?",
    "options": [
      { "id": "1", "text": "2" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "1" },
      { "id": "4", "text": "Infinite" }
    ],
    "answer": "1",
    "explanation": "A rectangle has two lines of symmetry (connecting midpoints of opposite sides). It does NOT have diagonal lines of symmetry unless it is a square."
  },
  {
    "id": 1310,
    "text": "Identify the primary geometric element in a honeycomb pattern.",
    "options": [
      { "id": "1", "text": "Hexagon" },
      { "id": "2", "text": "Pentagon" },
      { "id": "3", "text": "Square" },
      { "id": "4", "text": "Circle" }
    ],
    "answer": "1",
    "explanation": "Honeycombs are constructed using hexagonal cells."
  },
  {
    "id": 1311,
    "text": "Counting faces of a prism: How many faces does a hexagonal prism have?",
    "options": [
      { "id": "1", "text": "6" },
      { "id": "2", "text": "7" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "12" }
    ],
    "answer": "3",
    "explanation": "A hexagonal prism has 2 hexagonal bases and 6 rectangular sides. Total = 8 faces."
  },
  {
    "id": 1312,
    "text": "In image analysis, what term describes the 'jaggedness' of a line on a low-resolution screen?",
    "options": [
      { "id": "1", "text": "Aliasing" },
      { "id": "2", "text": "Smoothing" },
      { "id": "3", "text": "Filtering" },
      { "id": "4", "text": "Shadowing" }
    ],
    "answer": "1",
    "explanation": "Aliasing (or 'jaggies') refers to the staircase effect on diagonal lines in digital images."
  },
  {
    "id": 1313,
    "text": "What is the result of rotating an equilateral triangle by 120° about its center?",
    "options": [
      { "id": "1", "text": "The triangle looks exactly the same" },
      { "id": "2", "text": "It points to the left" },
      { "id": "3", "text": "It points down" },
      { "id": "4", "text": "It becomes a square" }
    ],
    "answer": "1",
    "explanation": "An equilateral triangle has 120° rotational symmetry."
  },
  {
    "id": 1314,
    "text": "Identify the number of vertices in a standard 5-pointed star.",
    "options": [
      { "id": "1", "text": "5" },
      { "id": "2", "text": "10" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "12" }
    ],
    "answer": "2",
    "explanation": "A 5-pointed star has 5 outer tips and 5 inner 'valleys'. Total vertices = 10."
  },
  {
    "id": 1315,
    "text": "Which of the following capital letters has only vertical line symmetry?",
    "options": [
      { "id": "1", "text": "A" },
      { "id": "2", "text": "B" },
      { "id": "3", "text": "C" },
      { "id": "4", "text": "D" }
    ],
    "answer": "1",
    "explanation": "'A' has vertical symmetry. 'B', 'C', and 'D' have horizontal symmetry."
  },
  {
    "id": 1316,
    "text": "Which capital letter has both horizontal and vertical line symmetry?",
    "options": [
      { "id": "1", "text": "H" },
      { "id": "2", "text": "A" },
      { "id": "3", "text": "T" },
      { "id": "4", "text": "S" }
    ],
    "answer": "1",
    "explanation": "The letter 'H' can be split symmetrically both horizontally and vertically."
  },
  {
    "id": 1317,
    "text": "In a drawing of a cube from a perspective view (one-point perspective), how many vanishing points are used?",
    "options": [
      { "id": "1", "text": "1" },
      { "id": "2", "text": "2" },
      { "id": "3", "text": "3" },
      { "id": "4", "text": "Infinite" }
    ],
    "answer": "1",
    "explanation": "One-point perspective uses exactly one vanishing point."
  },
  {
    "id": 1318,
    "text": "Identify the number of line segments forming the digit '8' on a standard 7-segment display.",
    "options": [
      { "id": "1", "text": "7" },
      { "id": "2", "text": "6" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "5" }
    ],
    "answer": "1",
    "explanation": "The digit '8' lights up all 7 segments of the display."
  },
  {
    "id": 1319,
    "text": "How many triangles are formed in a square when you draw both diagonals?",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "6" },
      { "id": "4", "text": "10" }
    ],
    "answer": "2",
    "explanation": "4 small triangles + 4 larger triangles (each made of two small ones). Total = 8."
  },
  {
    "id": 1320,
    "text": "Which 2D shape is formed by the cross-section of a cone cut parallel to its base?",
    "options": [
      { "id": "1", "text": "Circle" },
      { "id": "2", "text": "Triangle" },
      { "id": "3", "text": "Ellipse" },
      { "id": "4", "text": "Rectangle" }
    ],
    "answer": "1",
    "explanation": "Cutting a cone parallel to its base always results in a circle."
  },
  {
    "id": 1321,
    "text": "Bonus: What is the sum of interior angles of a quadrilateral?",
    "options": [
      { "id": "1", "text": "180°" },
      { "id": "2", "text": "360°" },
      { "id": "3", "text": "540°" },
      { "id": "4", "text": "720°" }
    ],
    "answer": "2",
    "explanation": "Any quadrilateral can be split into 2 triangles. 2 * 180° = 360°."
  }
];
