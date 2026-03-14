export const theory = [
  {
    "title": "Figure Matrix",
    "description": "A figure matrix is a grid of figures that follow a specific pattern or set of rules both horizontally (rows) and vertically (columns). To solve these, you must identify the transformation rule appearing in the complete rows/columns and apply it to find the missing figure. Common rules include addition/subtraction of elements, rotation, scaling, and state cycles (e.g., Shaded -> Empty -> Patterned).",
    "image": "/images/aptitude/figure-matrix.svg"
  }
];

export const questions = [
  {
    "id": 601,
    "text": "Select the figure that will complete the matrix below.",
    "image": "<svg width='200' height='200' viewBox='0 0 200 200'><line x1='66' y1='0' x2='66' y2='200' stroke='#ccc'/><line x1='132' y1='0' x2='132' y2='200' stroke='#ccc'/><line x1='0' y1='66' x2='200' y2='66' stroke='#ccc'/><line x1='0' y1='132' x2='200' y2='132' stroke='#ccc'/><circle cx='33' cy='33' r='10' fill='black'/><circle cx='100' cy='33' r='10' fill='black'/><circle cx='115' cy='33' r='10' fill='black'/><circle cx='155' cy='33' r='10' fill='black'/><circle cx='170' cy='33' r='10' fill='black'/><circle cx='185' cy='33' r='10' fill='black'/><rect x='23' y='80' width='20' height='20' fill='black'/><rect x='85' y='80' width='30' height='20' fill='black'/><rect x='150' y='80' width='40' height='20' fill='black'/><path d='M23 180 L43 180 L33 160 Z' fill='black'/><path d='M85 180 L105 180 L115 180 L100 160 L110 160 Z' fill='black' transform='translate(-5,0)'/><text x='155' y='180' font-size='24'>?</text></svg>",
    "options": [
      { "id": "1", "text": "A", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><path d='M10 50 L25 50 L40 50 L55 50 L20 20 L30 20 L45 20 Z' fill='black'/></svg>" },
      { "id": "2", "text": "B", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='15' fill='black'/></svg>" },
      { "id": "3", "text": "C", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='10' y='10' width='40' height='40' fill='black'/></svg>" },
      { "id": "4", "text": "D", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><path d='M10 10 L50 50' stroke='black' stroke-width='4'/></svg>" }
    ],
    "answer": "1",
    "explanation": "Row 1: 1 dot, 2 dots, 3 dots. Row 2: Short rectangle, medium rectangle, long rectangle. Row 3: 1 triangle, 2 triangles, 3 triangles. Option A shows 3 triangles."
  },
  {
    "id": 602,
    "text": "Identify the missing part of the matrix based on shading patterns.",
    "image": "<svg width='180' height='180' viewBox='0 0 180 180'><line x1='60' y1='0' x2='60' y2='180' stroke='#ccc'/><line x1='120' y1='0' x2='120' y2='180' stroke='#ccc'/><line x1='0' y1='60' x2='180' y2='60' stroke='#ccc'/><line x1='0' y1='120' x2='180' y2='120' stroke='#ccc'/><rect x='10' y='10' width='40' height='40' fill='none' stroke='black'/><rect x='70' y='10' width='40' height='40' fill='black'/><rect x='130' y='10' width='40' height='40' fill='none' stroke='black'/><circle cx='30' cy='90' r='20' fill='black'/><circle cx='90' cy='90' r='20' fill='none' stroke='black'/><circle cx='150' cy='90' r='20' fill='black'/><line x1='10' y1='150' x2='50' y2='150' stroke='black' stroke-width='5'/><text x='80' y='160' font-size='20'>?</text><line x1='130' y1='150' x2='170' y2='150' stroke='black' stroke-width='5'/></svg>",
    "options": [
      { "id": "1", "text": "A (Vertical line)" },
      { "id": "2", "text": "B (Solid rectangle/line)" },
      { "id": "3", "text": "C (Unshaded circle)" },
      { "id": "4", "text": "D (Diagonal line)" }
    ],
    "answer": "2",
    "explanation": "In each row, the center figure has the opposite shading to the outer figures. Since the outer figures in Row 3 are shaded lines, the center should be a solid (or unshaded depending on interpretation) line."
  },
  {
    "id": 603,
    "text": "Complete the cyclic state logic: Empty -> Shaded -> Patterned. If Row 3 has Patterned -> Empty -> ?",
    "options": [
      { "id": "1", "text": "Shaded" },
      { "id": "2", "text": "Patterned" },
      { "id": "3", "text": "Empty" },
      { "id": "4", "text": "Double-shaded" }
    ],
    "answer": "1",
    "explanation": "Each row contains all three states (Empty, Shaded, Patterned) in some order."
  },
  {
    "id": 604,
    "text": "Transitive reasoning: Row 1 establishes (Square, Circle). Column 1 establishes a 'Scaling' rule. What fits the missing cell for Circle?",
    "options": [
      { "id": "1", "text": "Smaller Circle" },
      { "id": "2", "text": "Larger Square" },
      { "id": "3", "text": "Identical Circle" },
      { "id": "4", "text": "Hollow Triangle" }
    ],
    "answer": "1",
    "explanation": "The rule from Column 1 (Size reduction) applies across the established Row 1 items."
  },
  {
    "id": 605,
    "text": "Shape Inversion: Row 1 (Circle inside Square -> Square inside Circle). Row 2 (Triangle inside Square -> ?).",
    "options": [
      { "id": "1", "text": "Square inside Triangle" },
      { "id": "2", "text": "Triangle inside Circle" },
      { "id": "3", "text": "Circle inside Square" },
      { "id": "4", "text": "Nested Triangles" }
    ],
    "answer": "1",
    "explanation": "The rule is to swap the relative positions of the inner and outer shapes."
  },
  {
    "id": 606,
    "text": "Side-count decrement: Vertically, side counts decrease by 1 in each step. Col 1 (6, 5, 4). Col 2 (5, 4, ?).",
    "options": [
      { "id": "1", "text": "Triangle (3 sides)" },
      { "id": "2", "text": "Circle" },
      { "id": "3", "text": "Hexagon" },
      { "id": "4", "text": "Square" }
    ],
    "answer": "1",
    "explanation": "5 sides -> 4 sides -> 3 sides (Triangle)."
  },
  {
    "id": 607,
    "text": "Rotation Matrix: Horizontal steps add 45° clockwise. Row 1 (0°, 45°, 90°). Row 2 (90°, 135°, ?).",
    "options": [
      { "id": "1", "text": "180° (Horizontal)" },
      { "id": "2", "text": "0° (Vertical)" },
      { "id": "3", "text": "225°" },
      { "id": "4", "text": "No arrow" }
    ],
    "answer": "1",
    "explanation": "135° + 45° = 180° (pointing horizontally)."
  },
  {
    "id": 608,
    "text": "Addition rule: Figure 1 + Figure 2 = Figure 3. Row 1 (| + - = +). Row 2 (\ + / = ?).",
    "options": [
       { "id": "1", "text": "X shape" },
       { "id": "2", "text": "Star" },
       { "id": "3", "text": "Box" },
       { "id": "4", "text": "Parallel lines" }
    ],
    "answer": "1",
    "explanation": "Superimposing the two diagonals creates an X."
  },
  {
    "id": 609,
    "text": "Intersection Logic: Cell 3 = Cell 1 intersections + Cell 2 intersections. Row 1 (1, 1, 2). Row 2 (1, 2, ?).",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "2" },
      { "id": "4", "text": "5" }
    ],
    "answer": "1",
    "explanation": "Simple arithmetic sum applied to geometric properties."
  },
  {
    "id": 610,
    "text": "Subtraction Rule: Full Figure - Inner elements = Frame. What is 'Circle with Dot' minus 'Dot'?",
    "options": [
      { "id": "1", "text": "Circle" },
      { "id": "2", "text": "Dot" },
      { "id": "3", "text": "Empty" },
      { "id": "4", "text": "Square" }
    ],
    "answer": "1",
    "explanation": "Removing the inner component leaves just the outer boundary."
  },
  {
    "id": 611,
    "text": "Dot Count Matrix: Row 1 (1, 2, 3). Row 2 (2, 3, 4). Row 3 (3, 4, ?).",
    "options": [
      { "id": "1", "text": "5" },
      { "id": "2", "text": "6" },
      { "id": "3", "text": "4" },
      { "id": "4", "text": "3" }
    ],
    "answer": "1",
    "explanation": "Each row shows an incrementing sequence starting from the first cell's value."
  },
  {
    "id": 612,
    "text": "Cycle Pattern: Row 1 (Circle, Square, Triangle). Row 2 (Square, Triangle, Circle). Row 3 (Triangle, Circle, ?).",
    "options": [
      { "id": "1", "text": "Square" },
      { "id": "2", "text": "Triangle" },
      { "id": "3", "text": "Circle" },
      { "id": "4", "text": "Dot" }
    ],
    "answer": "1",
    "explanation": "Each shape must appear once per row and once per column (Latin Square)."
  },
  {
    "id": 613,
    "text": "Relative Movement: A dot moves one corner clockwise in each step. Row 1 (Top-L, Top-R, Bot-R). Row 2 (Bot-L, Top-L, ?).",
    "options": [
      { "id": "1", "text": "Top-Right" },
      { "id": "2", "text": "Bottom-Right" },
      { "id": "3", "text": "Center" },
      { "id": "4", "text": "Bottom-Left" }
    ],
    "answer": "1",
    "explanation": "Clockwise corner-to-corner progression."
  },
  {
    "id": 614,
    "text": "Scaling Matrix: Row 1 (Thin, Normal, Wide). Row 3 (Small, Medium, ?).",
    "options": [
      { "id": "1", "text": "Large" },
      { "id": "2", "text": "Extra-Small" },
      { "id": "3", "text": "Same as Medium" },
      { "id": "4", "text": "Inverted" }
    ],
    "answer": "1",
    "explanation": "Increasing intensity or size attribute."
  },
  {
    "id": 615,
    "text": "Line count rule: Row 1 has 1 line, Row 2 has 2 lines, Row 3 has 3 lines. If Row 3 has Triangle (3), Square (4), what follows?",
    "options": [
      { "id": "1", "text": "Pentagon (5)" },
      { "id": "2", "text": "Triangle" },
      { "id": "3", "text": "Circle" },
      { "id": "4", "text": "Line" }
    ],
    "answer": "1",
    "explanation": "Following the horizontal increment within the row already starting at 3."
  },
  {
    "id": 616,
    "text": "Grid Logic: Top cell + Left cell = Diagonal cell? Or simple addition. What is (Half Circle) + (Half Circle) ?",
    "options": [
      { "id": "1", "text": "Full Circle" },
      { "id": "2", "text": "Semi-circle" },
      { "id": "3", "text": "Dot" },
      { "id": "4", "text": "Butterfly shape" }
    ],
    "answer": "1",
    "explanation": "Geometric union of complementary parts."
  },
  {
    "id": 617,
    "text": "Determine the third figure in a row: (/) + (\) = (X). What is (|) + (-) ?",
    "options": [
      { "id": "1", "text": "+" },
      { "id": "2", "text": "L" },
      { "id": "3", "text": "T" },
      { "id": "4", "text": "X" }
    ],
    "answer": "1",
    "explanation": "Superimposing vertical and horizontal lines."
  },
  {
    "id": 618,
    "text": "Identify missing element: Shading flips vertical horizontally. Row 1 (Left-Shaded -> Right-Shaded). Row 3 (Top-Shaded -> ?).",
    "options": [
      { "id": "1", "text": "Bottom-Shaded" },
      { "id": "2", "text": "Left-Shaded" },
      { "id": "3", "text": "Full Shaded" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Applying the inversion rule observed in the first row."
  },
  {
    "id": 619,
    "text": "Count the internal partitions: Row 1 (1, 2, 3 sections). Row 2 (2, 3, 4 sections). Row 3 (3, 4, ?).",
    "options": [
       { "id": "1", "text": "5 sections" },
       { "id": "2", "text": "6 sections" },
       { "id": "3", "text": "2 sections" },
       { "id": "4", "text": "Whole figure" }
    ],
    "answer": "1",
    "explanation": "The number of subdivisions in each cell increases incrementally."
  },
  {
    "id": 620,
    "text": "Attribute cycle: Hollow, Shaded, Patterned. Which follows (Shaded, Patterned) in the row?",
    "options": [
      { "id": "1", "text": "Hollow" },
      { "id": "2", "text": "Solid Black" },
      { "id": "3", "text": "Checkered" },
      { "id": "4", "text": "Double Border" }
    ],
    "answer": "1",
    "explanation": "The pattern cycles through three distinct filling styles."
  },
  {
    "id": 621,
    "text": "Final Check: If Row 1 = (1, 2, 3 dots) and Col 1 = (1, 3, 5 dots), what is the center cell likely to be?",
    "options": [
      { "id": "1", "text": "4 dots" },
      { "id": "2", "text": "2 dots" },
      { "id": "3", "text": "6 dots" },
      { "id": "4", "text": "Zero dots" }
    ],
    "answer": "1",
    "explanation": "Combining the increments vertically (+2) and horizontally (+1) often converges on intermediate values."
  }
];
