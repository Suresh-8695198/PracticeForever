export const theory = [
  {
    "title": "Rule Detection",
    "description": "Rule detection questions ask you to identify which series of figures follows a specific given rule. You must analyze the progression of shapes, lines, dots, or shading across four or five steps and determine which sequence adheres to the description provided (e.g., 'the closed figures become more open').",
    "image": "/images/aptitude/rule-detection.svg"
  }
];

export const questions = [
  {
    "id": 901,
    "text": "Rule: The closed figures become more open and the open figures become more closed.",
    "options": [
      { "id": "1", "text": "A (Square -> Square with 1 gap -> Square with 2 gaps)" },
      { "id": "2", "text": "B (Static Circle series)" },
      { "id": "3", "text": "C (Triangle series)" },
      { "id": "4", "text": "D (Random complex figures)" }
    ],
    "answer": "1",
    "explanation": "In series A, a square (closed) loses its sides one by one, becoming 'more open' as defined by the rule."
  },
  {
    "id": 902,
    "text": "Rule: The number of sides increases by one in each successive step.",
    "options": [
      { "id": "1", "text": "A (Triangle, Square, Pentagon, Hexagon)" },
      { "id": "2", "text": "B (Square, Triangle, Pentagon, Hexagon)" },
      { "id": "3", "text": "C (Circle, Oval, Square, Rectangle)" },
      { "id": "4", "text": "D (Line, Triangle, Square)" }
    ],
    "answer": "1",
    "explanation": "The progression 3, 4, 5, 6 sides follows the '+1' increment rule perfectly."
  },
  {
    "id": 903,
    "text": "Rule: Any figure rotates 45 degrees clockwise in each step.",
    "options": [
      { "id": "1", "text": "A (Vertical arrow -> Diagonal -> Horizontal -> Diagonal down)" },
      { "id": "2", "text": "B (Vertical arrow -> Horizontal -> Vertical -> Horizontal)" },
      { "id": "3", "text": "C (Static triangle)" },
      { "id": "4", "text": "D (Arrow rotates anti-clockwise)" }
    ],
    "answer": "1",
    "explanation": "The sequence correctly shows a 45° step-wise clockwise rotation of the arrow."
  },
  {
    "id": 904,
    "text": "Rule: The shading moves from one sector to the next in an anti-clockwise direction.",
    "options": [
      { "id": "1", "text": "A (Top-Shaded -> Left-Shaded -> Bottom-Shaded)" },
      { "id": "2", "text": "B (Top-Shaded -> Right-Shaded -> Bottom-Shaded)" },
      { "id": "3", "text": "C (Random shading)" },
      { "id": "4", "text": "D (All sectors shaded gradually)" }
    ],
    "answer": "1",
    "explanation": "Moving from Top to Left to Bottom in a 4-part circle is an anti-clockwise progression."
  },
  {
    "id": 905,
    "text": "Rule: The number of elements inside the main figure doubles at each step.",
    "options": [
      { "id": "1", "text": "A (1 dot, 2 dots, 4 dots, 8 dots)" },
      { "id": "2", "text": "B (1 dot, 2 dots, 3 dots, 4 dots)" },
      { "id": "3", "text": "C (2 dots, 4 dots, 6 dots, 8 dots)" },
      { "id": "4", "text": "D (Dots decrease)" }
    ],
    "answer": "1",
    "explanation": "Geometric progression (x2) is correctly followed in series A: 1, 2, 4, 8."
  },
  {
    "id": 906,
    "text": "Rule: The shapes alternate between being hollow and being solid.",
    "options": [
      { "id": "1", "text": "A (Hollow Square, Solid Square, Hollow Square, Solid Square)" },
      { "id": "2", "text": "B (Hollow Circle, Hollow Square, Hollow Triangle)" },
      { "id": "3", "text": "C (Solid shapes only)" },
      { "id": "4", "text": "D (Hollow shapes becoming smaller)" }
    ],
    "answer": "1",
    "explanation": "Series A shows a perfect alternating 'fill' state pattern."
  },
  {
    "id": 907,
    "text": "Rule: Each figure is mirrored across a horizontal axis to form the next figure.",
    "options": [
      { "id": "1", "text": "A (L-shape -> Inverted L -> L-shape -> Inverted L)" },
      { "id": "2", "text": "B (L-shape mirrored horizontally)" },
      { "id": "3", "text": "C (Rotated squares)" },
      { "id": "4", "text": "D (Scaling shapes)" }
    ],
    "answer": "1",
    "explanation": "Vertical flip (horizontal mirror) is the rule applied in series A."
  },
  {
    "id": 908,
    "text": "Rule: The size of the main figure decreases steadily.",
    "options": [
      { "id": "1", "text": "A (Large circle, Medium circle, Small circle, Dot)" },
      { "id": "2", "text": "B (Small square, Medium square, Large square)" },
      { "id": "3", "text": "C (Fixed size)" },
      { "id": "4", "text": "D (Random sizes)" }
    ],
    "answer": "1",
    "explanation": "Series A shows a clear monotonic decrease in the scale of the object."
  },
  {
    "id": 909,
    "text": "Rule: A dot moves one step clockwise along the vertices of a hexagon in each step.",
    "options": [
      { "id": "1", "text": "A (Dot moves from vertex 1 to 2 to 3 to 4)" },
      { "id": "2", "text": "B (Dot moves vertically)" },
      { "id": "3", "text": "C (Dot stays at center)" },
      { "id": "4", "text": "D (Dot moves anti-clockwise)" }
    ],
    "answer": "1",
    "explanation": "Following the vertices of a polygon in order is a common rule-based pattern."
  },
  {
    "id": 910,
    "text": "Rule: Outer lines are removed one by one, while inner lines are added.",
    "options": [
      { "id": "1", "text": "Series A" },
      { "id": "2", "text": "Series B" },
      { "id": "3", "text": "Series C" },
      { "id": "4", "text": "Series D" }
    ],
    "answer": "1",
    "explanation": "Complex rule involving simultaneous subtraction and addition of elements."
  },
  {
    "id": 911,
    "text": "Rule: Figures alternate between being upright and being inverted.",
    "options": [
      { "id": "1", "text": "A (Triangle pointing Up, Down, Up, Down)" },
      { "id": "2", "text": "B (Always Up)" },
      { "id": "3", "text": "C (Rotating 90°)" },
      { "id": "4", "text": "D (Scaling)" }
    ],
    "answer": "1",
    "explanation": "Vertical inversion happens at every step in series A."
  },
  {
    "id": 912,
    "text": "Rule: The number of intersections increases by 2 at each step.",
    "options": [
      { "id": "1", "text": "A (0, 2, 4, 6 intersections)" },
      { "id": "2", "text": "B (0, 1, 2, 3 intersections)" },
      { "id": "3", "text": "C (2, 2, 2, 2 intersections)" },
      { "id": "4", "text": "D (None)" }
    ],
    "answer": "1",
    "explanation": "A clear +2 arithmetic progression in intersection counts."
  },
  {
    "id": 913,
    "text": "Rule: The curvature of the figure increases (Straight -> Curved -> Circular).",
    "options": [
      { "id": "1", "text": "A (Square -> Hexagon -> Circle)" },
      { "id": "2", "text": "B (Circle -> Square)" },
      { "id": "3", "text": "C (Only straight lines)" },
      { "id": "4", "text": "D (Only circles)" }
    ],
    "answer": "1",
    "explanation": "Moving towards a circle from straight polygons is a rule of increasing 'smoothness'."
  },
  {
    "id": 914,
    "text": "Rule: The total number of separate components in the figure remains the same.",
    "options": [
      { "id": "1", "text": "A (Two circles in every step)" },
      { "id": "2", "text": "B (1 dot, then 2 dots, then 3)" },
      { "id": "3", "text": "C (One square becomes three)" },
      { "id": "4", "text": "D (Blank)" }
    ],
    "answer": "1",
    "explanation": "Series A preserves the component count regardless of other transformations."
  },
  {
    "id": 915,
    "text": "Rule: The shading moves to an adjacent region in a clockwise direction.",
    "options": [
      { "id": "1", "text": "A (Top -> Right -> Bottom -> Left)" },
      { "id": "2", "text": "B (Top -> Left -> Bottom -> Right)" },
      { "id": "3", "text": "C (Checkered)" },
      { "id": "4", "text": "D (None)" }
    ],
    "answer": "1",
    "explanation": "Standard clockwise rotation of a highlight/shade attribute."
  },
  {
    "id": 916,
    "text": "Rule: Figures are halved at each step.",
    "options": [
      { "id": "1", "text": "A (Full circle, Semi-circle, Quarter-circle)" },
      { "id": "2", "text": "B (Double size)" },
      { "id": "3", "text": "C (Stay same)" },
      { "id": "4", "text": "D (Random)" }
    ],
    "answer": "1",
    "explanation": "The rule is reduction by sharing a 1/2 factor."
  },
  {
    "id": 917,
    "text": "Rule: Figures follow a Fibonacci sequence in the number of elements (1, 1, 2, 3).",
    "options": [
      { "id": "1", "text": "A (1 dot, 1 dot, 2 dots, 3 dots)" },
      { "id": "2", "text": "B (1, 2, 4, 8)" },
      { "id": "3", "text": "C (1, 3, 5, 7)" },
      { "id": "4", "text": "D (None)" }
    ],
    "answer": "1",
    "explanation": "Fibonacci progression is explicitly defined."
  },
  {
    "id": 918,
    "text": "Rule: Each figure is a 90° clockwise rotation of the previous one.",
    "options": [
      { "id": "1", "text": "A (P-shape -> P-side -> d-shape -> b-shape)" },
      { "id": "2", "text": "B (P -> P -> P)" },
      { "id": "3", "text": "C (Mirroring)" },
      { "id": "4", "text": "D (None)" }
    ],
    "answer": "1",
    "explanation": "Sequential 90° rotations are correctly demonstrated."
  },
  {
    "id": 919,
    "text": "Rule: Open figures are replaced by closed ones and vice versa.",
    "options": [
      { "id": "1", "text": "Series A" },
      { "id": "2", "text": "Series B" },
      { "id": "3", "text": "Series C" },
      { "id": "4", "text": "Series D" }
    ],
    "answer": "1",
    "explanation": "Alternating state of topological closure."
  },
  {
    "id": 920,
    "text": "Rule: The central element grows larger while the outer elements grow smaller.",
    "options": [
      { "id": "1", "text": "Series A" },
      { "id": "2", "text": "Series B" },
      { "id": "3", "text": "Series C" },
      { "id": "4", "text": "Series D" }
    ],
    "answer": "1",
    "explanation": "Inverse scaling relationship between foreground and background."
  },
  {
    "id": 921,
    "text": "Bonus: Rule: Figures are divided into twice as many parts at each step.",
    "options": [
      { "id": "1", "text": "A (1 part, 2 parts, 4 parts, 8 parts)" },
      { "id": "2", "text": "B (1, 2, 3, 4)" },
      { "id": "3", "text": "C (None)" },
      { "id": "4", "text": "D (Wait)" }
    ],
    "answer": "1",
    "explanation": "The rule is exponential splitting of the figure area."
  }
];
