export const theory = [
  {
    "title": "Pattern Completion",
    "description": "Pattern completion involves a figure with one part missing (usually one quadrant of a square). You must identify which of the given options correctly fits into the gap by matching the design, symmetry (reflective or rotational), and line continuity of the overall figure.",
    "image": "/images/aptitude/pattern-completion.svg"
  }
];

export const questions = [
  {
    "id": 501,
    "text": "Identify the figure that completes the pattern.",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' fill='none' stroke='black'/><line x1='10' y1='50' x2='90' y2='50' stroke='black'/><line x1='50' y1='10' x2='50' y2='90' stroke='black'/><circle cx='30' cy='30' r='10' stroke='black' fill='none'/><circle cx='70' cy='30' r='10' stroke='black' fill='none'/><circle cx='30' cy='70' r='10' stroke='black' fill='none'/><rect x='55' y='55' width='30' height='30' fill='#eee' stroke-dasharray='2' stroke='gray'/></svg>",
    "options": [
      { "id": "1", "text": "A", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='10' stroke='black' fill='none'/></svg>" },
      { "id": "2", "text": "B", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='10' y='10' width='40' height='40' fill='black'/></svg>" },
      { "id": "3", "text": "C", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><line x1='10' y1='10' x2='50' y2='50' stroke='black'/></svg>" },
      { "id": "4", "text": "D", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><path d='M10 50 L30 10 L50 50' fill='none' stroke='black'/></svg>" }
    ],
    "answer": "1",
    "explanation": "The pattern has a circle in each of the four quadrants. To maintain symmetry, we need a circle in the bottom-right quadrant (Option A)."
  },
  {
    "id": 502,
    "text": "Complete the square pattern with diagonal lines meeting at the center.",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' fill='none' stroke='black'/><line x1='10' y1='10' x2='50' y2='50' stroke='black'/><line x1='90' y1='10' x2='50' y2='50' stroke='black'/><line x1='10' y1='90' x2='50' y2='50' stroke='black'/><rect x='50' y='50' width='40' height='40' fill='#eee' stroke-dasharray='2'/></svg>",
    "options": [
      { "id": "1", "text": "Diagonal from bottom-left to center" },
      { "id": "2", "text": "Horizontal line" },
      { "id": "3", "text": "Circle" },
      { "id": "4", "text": "Dot" }
    ],
    "answer": "1",
    "explanation": "To complete the 'X' shape formed by diagonals in a square, the missing quadrant 4 must contain the diagonal line segment connecting the corner to the center."
  },
  {
    "id": 503,
    "text": "Identify the piece that completes the circular target pattern.",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='black' fill='none'/><circle cx='50' cy='50' r='25' stroke='black' fill='none'/><line x1='50' y1='10' x2='50' y2='90' stroke='black'/><line x1='10' y1='50' x2='90' y2='50' stroke='black'/><rect x='50' y='50' width='45' height='45' fill='#eee' stroke-dasharray='2'/></svg>",
    "options": [
      { "id": "1", "text": "Quarter-circles (arcs) for both rings" },
      { "id": "2", "text": "Straight lines only" },
      { "id": "3", "text": "A square" },
      { "id": "4", "text": "Solid black block" }
    ],
    "answer": "1",
    "explanation": "To complete the concentric circles, we need the arcs corresponding to the fourth quadrant for both the outer and inner rings."
  },
  {
    "id": 504,
    "text": "Which part completes the pattern of a 4x4 checkerboard with one corner missing?",
    "options": [
      { "id": "1", "text": "A square of the opposite color of its neighbor" },
      { "id": "2", "text": "A square of the same color" },
      { "id": "3", "text": "Two triangles" },
      { "id": "4", "text": "A circle" }
    ],
    "answer": "1",
    "explanation": "Checkerboards alternate colors. The missing piece must maintain this alternating logic relative to the adjacent squares."
  },
  {
    "id": 505,
    "text": "Complete the design focusing on rotational symmetry (4-fold).",
    "image": "Three petals of a flower at 0°, 90°, 180°.",
    "options": [
      { "id": "1", "text": "Petal at 270°" },
      { "id": "2", "text": "Leaf at 45°" },
      { "id": "3", "text": "Stem at center" },
      { "id": "4", "text": "Circle" }
    ],
    "answer": "1",
    "explanation": "To achieve 4-fold rotational symmetry, the fourth petal must be placed at the remaining 90-degree increment (270°)."
  },
  {
    "id": 506,
    "text": "Identify the piece to complete a grid with alternating horizontal and vertical lines.",
    "options": [
      { "id": "1", "text": "Line orientation opposite to the row/column neighbors" },
      { "id": "2", "text": "Diagonal line" },
      { "id": "3", "text": "Dot" },
      { "id": "4", "text": "Empty" }
    ],
    "answer": "1",
    "explanation": "Maintaining the woven pattern requires the lines to alternate direction."
  },
  {
    "id": 507,
    "text": "Complete the 'Cross' pattern where each arm has one dot.",
    "options": [
      { "id": "1", "text": "An arm with one dot" },
      { "id": "2", "text": "An arm with two dots" },
      { "id": "3", "text": "A blank arm" },
      { "id": "4", "text": "A circle" }
    ],
    "answer": "1",
    "explanation": "Symmetry requires the fourth arm of the cross to match the other three exactly."
  },
  {
    "id": 508,
    "text": "In a pattern of concentric squares, what is missing in the bottom-left corner?",
    "options": [
      { "id": "1", "text": "Corner segments of the corresponding squares" },
      { "id": "2", "text": "One large circle" },
      { "id": "3", "text": "Two dots" },
      { "id": "4", "text": "A triangle" }
    ],
    "answer": "1",
    "explanation": "To continue the square boundaries, one needs the corner vertices and line segments."
  },
  {
    "id": 509,
    "text": "A pattern consists of arrows pointing outwards from the center. The bottom-right arrow is missing.",
    "options": [
      { "id": "1", "text": "Arrow pointing down and right" },
      { "id": "2", "text": "Arrow pointing up and left" },
      { "id": "3", "text": "Vertical arrow" },
      { "id": "4", "text": "Dot" }
    ],
    "answer": "1",
    "explanation": "To match the 'outward' radial pattern, the arrow in that quadrant must point away from the center (bottom-right)."
  },
  {
    "id": 510,
    "text": "Complete the 'Zig-Zag' line which is broken at the end.",
    "options": [
      { "id": "1", "text": "The segment that follows the alternate angle pattern" },
      { "id": "2", "text": "A straight line continuation" },
      { "id": "3", "text": "A curve" },
      { "id": "4", "text": "A dot" }
    ],
    "answer": "1",
    "explanation": "Continuity depends on maintaining the existing periodic direction changes."
  },
  {
    "id": 511,
    "text": "Which part completes a 3x3 grid following a diagonal logic?",
    "options": [
      { "id": "1", "text": "Piece matching the shared feature of the diagonal" },
      { "id": "2", "text": "Average of all other pieces" },
      { "id": "3", "text": "Random piece" },
      { "id": "4", "text": "A number" }
    ],
    "answer": "1",
    "explanation": "Grid patterns often follow rules along rows, columns, or diagonals."
  },
  {
    "id": 512,
    "text": "Identify the completion for a star-like figure with 4 arms.",
    "options": [
      { "id": "1", "text": "Matching arm" },
      { "id": "2", "text": "Circle" },
      { "id": "3", "text": "Square" },
      { "id": "4", "text": "Line" }
    ],
    "answer": "1",
    "explanation": "Rotational symmetry requires all arms to be identical."
  },
  {
    "id": 513,
    "text": "A mandala-style pattern is symmetrical across the vertical axis. What completes the right side?",
    "options": [
      { "id": "1", "text": "Mirror image of the left side" },
      { "id": "2", "text": "Exact copy of the left side" },
      { "id": "3", "text": "A blank space" },
      { "id": "4", "text": "A different pattern" }
    ],
    "answer": "1",
    "explanation": "Reflection symmetry (bilateral) implies the right side is a horizontal mirror of the left."
  },
  {
    "id": 514,
    "text": "In a series of nested triangles, what is the next step inwards?",
    "options": [
      { "id": "1", "text": "A smaller triangle" },
      { "id": "2", "text": "A smaller circle" },
      { "id": "3", "text": "A dot" },
      { "id": "4", "text": "A line" }
    ],
    "answer": "1",
    "explanation": "Consistency in the shape being nested."
  },
  {
    "id": 515,
    "text": "Complete the 'Steps' pattern: Large Square -> Medium Square -> Small Square -> ?",
    "options": [
      { "id": "1", "text": "Even smaller square (preserving shape)" },
      { "id": "2", "text": "Large circle" },
      { "id": "3", "text": "Triangle" },
      { "id": "4", "text": "Line" }
    ],
    "answer": "1",
    "explanation": "Rule of scaling while maintaining geometric identity."
  },
  {
    "id": 516,
    "text": "Identify completion: If Row 1 is (Square, Circle, Triangle), then Row 2 should be (Circle, Triangle, ?).",
    "options": [
      { "id": "1", "text": "Square (Latin Square logic)" },
      { "id": "2", "text": "Hexagon" },
      { "id": "3", "text": "Circle" },
      { "id": "4", "text": "Triangle" }
    ],
    "answer": "1",
    "explanation": "In pattern grids, each row and column typically contains one instance of each element."
  },
  {
    "id": 517,
    "text": "What completes a pattern of dots arranged in a 3x3 matrix where the center is empty?",
    "options": [
      { "id": "1", "text": "A dot (to complete a solid 3x3)" },
      { "id": "2", "text": "A line" },
      { "id": "3", "text": "A square" },
      { "id": "4", "text": "Leave it empty" }
    ],
    "answer": "1",
    "explanation": "Completing the implied geometric shape (the full block)."
  },
  {
    "id": 518,
    "text": "A drawing of a wheel has all spokes except one. What is missing?",
    "options": [
      { "id": "1", "text": "A single radial line" },
      { "id": "2", "text": "A circle" },
      { "id": "3", "text": "A hub" },
      { "id": "4", "text": "A tire" }
    ],
    "answer": "1",
    "explanation": "Spokes are radial lines connecting the center to the rim."
  },
  {
    "id": 519,
    "text": "Pattern: Upward triangle, rightward triangle, downward triangle, ?",
    "options": [
      { "id": "1", "text": "Leftward triangle" },
      { "id": "2", "text": "Upward triangle" },
      { "id": "3", "text": "Downward triangle" },
      { "id": "4", "text": "Star" }
    ],
    "answer": "1",
    "explanation": "Sequential 90° clockwise rotation: 0° -> 90° -> 180° -> 270° (Left)."
  },
  {
    "id": 520,
    "text": "Complete a 2x2 grid where the top row is (Full, Empty) and the bottom row is (Empty, ?).",
    "options": [
      { "id": "1", "text": "Full (Checkerboard/Alternating)" },
      { "id": "2", "text": "Empty" },
      { "id": "3", "text": "Shaded" },
      { "id": "4", "text": "Circle" }
    ],
    "answer": "1",
    "explanation": "Standard alternating pattern in a 2D matrix."
  },
  {
    "id": 521,
    "text": "Bonus: What completes a 6-pointed star with 5 points drawn?",
    "options": [
      { "id": "1", "text": "The 6th point" },
      { "id": "2", "text": "A circle" },
      { "id": "3", "text": "Square center" },
      { "id": "4", "text": "Line" }
    ],
    "answer": "1",
    "explanation": "Symmetry and completion of the defined geometric entity."
  }
];
