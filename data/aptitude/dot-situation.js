export const theory = [
  {
    "title": "Dot Situation",
    "description": "In dot situation questions, dots are placed in specific regions formed by the intersection of two or more geometric shapes (Circle, Triangle, Square, etc.). Your goal is to choose an alternative figure from the options where a dot can be placed in exactly the same overlapping region(s).\n\n**Strategy**:\n1. Analyze the sample figure (X) and define the dot's region (e.g., 'Only inside Circle' or 'Inside the common area of Triangle and Square but outside the Circle').\n2. Check each option to see if a similar region exists physically.",
    "image": "/images/aptitude/dot-situation.svg"
  }
];

export const questions = [
  {
    "id": 1101,
    "text": "Select the figure which satisfies the same conditions of placement of the dots as in Figure (X).",
    "image": "<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='30' stroke='black' fill='none'/><rect x='40' y='30' width='40' height='40' stroke='black' fill='none'/><circle cx='55' cy='50' r='2' fill='black'/></svg>",
    "options": [
      { "id": "1", "text": "Figure A (Partial overlap of square and circle)" },
      { "id": "2", "text": "Figure B (Disconnected square and circle)" },
      { "id": "3", "text": "Figure C (Nested circles)" },
      { "id": "4", "text": "Figure D (Only a rectangle)" }
    ],
    "answer": "1",
    "explanation": "In Figure (X), the dot is in the region common only to the circle and the square. Option A provides a similar overlapping region."
  },
  {
    "id": 1102,
    "text": "Satisfy the condition: A dot placed in the common region of a triangle and a circle.",
    "options": [
      { "id": "1", "text": "A (Overlapping Triangle and Circle)" },
      { "id": "2", "text": "B (Triangle completely inside Circle)" },
      { "id": "3", "text": "C (Separate shapes)" },
      { "id": "4", "text": "D (Circle inside Square)" }
    ],
    "answer": "1",
    "explanation": "To satisfy the condition, the two shapes must intersect such that they share some common interior space."
  },
  {
    "id": 1103,
    "text": "Which option allows placing a dot in a region that is ONLY inside the square and NOT inside the circle?",
    "options": [
      { "id": "1", "text": "A (Square partially overlapping Circle)" },
      { "id": "2", "text": "B (Square completely inside Circle)" },
      { "id": "3", "text": "C (Circle only)" },
      { "id": "4", "text": "D (Triangle only)" }
    ],
    "answer": "1",
    "explanation": "If the square is partially overlapping the circle, there exists a 'square-only' region. If it is completely inside, all of the square is also inside the circle, violating the 'only square' rule."
  },
  {
    "id": 1104,
    "text": "Placement condition: The dot must belong to Circle 1, Circle 2, and the Square simultaneously.",
    "options": [
      { "id": "1", "text": "A (Triple overlap area exists)" },
      { "id": "2", "text": "B (Only pairwise overlaps exist)" },
      { "id": "3", "text": "C (Shapes are spaced out)" },
      { "id": "4", "text": "D (Square covers one circle but not the other)" }
    ],
    "answer": "1",
    "explanation": "The satisfying figure must have a common intersection area for all three specified shapes."
  },
  {
    "id": 1105,
    "text": "Conditions: One dot in (Square + Circle) and another dot in (Circle only).",
    "options": [
      { "id": "1", "text": "A (Circle is partially covered by Square)" },
      { "id": "2", "text": "B (Circle is completely covered by Square)" },
      { "id": "3", "text": "C (Square is completely covered by Circle)" },
      { "id": "4", "text": "D (No overlap between them)" }
    ],
    "answer": "1",
    "explanation": "Option A allows for both a shared region and an exclusive region for the circle."
  },
  {
    "id": 1106,
    "text": "Condition: Dot in (Triangle + Square) but NOT in the Circle.",
    "options": [
       { "id": "1", "text": "A (Triangle and Square overlap outside Circle boundary)" },
       { "id": "2", "text": "B (Overlap area is entirely within the Circle)" },
       { "id": "3", "text": "C (No overlap between Triangle and Square)" },
       { "id": "4", "text": "D (Circle covers only the Square center)" }
    ],
    "answer": "1",
    "explanation": "Requires identifying a specific portion of the triangle-square overlap that lies outside the boundary of the circle."
  },
  {
    "id": 1107,
    "text": "Satisfy two dots: One in (Triangle and Square) and one in (Triangle only).",
    "options": [
      { "id": "1", "text": "Figure A (Partial overlap)" },
      { "id": "2", "text": "Figure B (Total overlap)" },
      { "id": "3", "text": "Figure C (No overlap)" },
      { "id": "4", "text": "Figure D (Triangle inside Circle)" }
    ],
    "answer": "1",
    "explanation": "Partial overlap provides regions that are both shared and exclusive to the parent shapes."
  },
  {
    "id": 1108,
    "text": "Condition: Dot in the region common to all three: Triangle, Square, and Circle.",
    "options": [
      { "id": "1", "text": "Option A (Central intersection exists)" },
      { "id": "2", "text": "Option B (Only two shapes overlap)" },
      { "id": "3", "text": "Option C (Shapes are nested line-by-line)" },
      { "id": "4", "text": "Option D (No triple point)" }
    ],
    "answer": "1",
    "explanation": "Analyzing the central intersection where all three geometric boundaries meet."
  },
  {
    "id": 1109,
    "text": "Satisfy dot in (Circle + Triangle) but NOT in the Square.",
    "options": [
      { "id": "1", "text": "Figure A (Circle-Triangle overlap exists outside Square)" },
      { "id": "2", "text": "Figure B (Only Square-Circle overlap exists)" },
      { "id": "3", "text": "Figure C (Triangle is inside the Square)" },
      { "id": "4", "text": "Figure D (All three intersect at one point only)" }
    ],
    "answer": "1",
    "explanation": "A region must exist that is shared by the circle and triangle but remains external to the square."
  },
  {
    "id": 1110,
    "text": "Identify the alternative allowing a dot in the common region of Square, Triangle, and Circle.",
    "options": [
      { "id": "1", "text": "A" },
      { "id": "2", "text": "B" },
      { "id": "3", "text": "C" },
      { "id": "4", "text": "D" }
    ],
    "answer": "1",
    "explanation": "Geometrically verifying the existence of a triple-intersection zone."
  },
  {
    "id": 1111,
    "text": "Condition: Dot in (Square only) and (Circle + Square).",
    "options": [
      { "id": "1", "text": "A (Circle is smaller and partially overlaps Square)" },
      { "id": "2", "text": "B (Circle is larger than Square)" },
      { "id": "3", "text": "C (Circle is completely inside Square)" },
      { "id": "4", "text": "D (Circle and Square are separate)" }
    ],
    "answer": "1",
    "explanation": "If the circle is completely inside the square, the 'Square only' condition is met, but if they overlap partially, both conditions are met."
  },
  {
    "id": 1112,
    "text": "Satisfy: Dot in (Circle + Triangle) but not in Square or elsewhere.",
    "options": [
      { "id": "1", "text": "A" },
      { "id": "2", "text": "B" },
      { "id": "3", "text": "C" },
      { "id": "4", "text": "D" }
    ],
    "answer": "1",
    "explanation": "Ensuring the overlap is exclusive to those two shapes."
  },
  {
    "id": 1113,
    "text": "Satisfy: One dot in (All Three) and one dot in (Triangle only).",
    "options": [
      { "id": "1", "text": "Figure A" },
      { "id": "2", "text": "Figure B" },
      { "id": "3", "text": "Figure C" },
      { "id": "4", "text": "Figure D" }
    ],
    "answer": "1",
    "explanation": "Verifying two distinct logical regions in the same diagram."
  },
  {
    "id": 1114,
    "text": "Condition: Dot in (Circle + Square) but NOT Triangle.",
    "options": [
      { "id": "1", "text": "A (Shared Circle-Square area is outside Triangle)" },
      { "id": "2", "text": "B (Triangle covers the entire overlap)" },
      { "id": "3", "text": "C (No overlap between Circle and Square)" },
      { "id": "4", "text": "D (Shapes are too small)" }
    ],
    "answer": "1",
    "explanation": "Intersection analysis with an exclusion constraint."
  },
  {
    "id": 1115,
    "text": "Identify the figure satisfying a dot in the (Triangle + Square + Circle) overlap zone.",
    "options": [
      { "id": "1", "text": "Option A" },
      { "id": "2", "text": "Option B" },
      { "id": "3", "text": "Option C" },
      { "id": "4", "text": "Option D" }
    ],
    "answer": "1",
    "explanation": "Looking for the common intersection of all three geometric shapes."
  },
  {
    "id": 1116,
    "text": "Satisfy two dots: One in (Circle only) and one in (Square only).",
    "options": [
      { "id": "1", "text": "A (They overlap but don't fully contain each other)" },
      { "id": "2", "text": "B (One is inside the other)" },
      { "id": "3", "text": "C (Identical size and position)" },
      { "id": "4", "text": "D (Connected by a line)" }
    ],
    "answer": "1",
    "explanation": "Requires non-overlapping areas for both shapes to exist in the same diagram."
  },
  {
    "id": 1117,
    "text": "Condition: Dot in (Triangle + Square) and (Circle + Square).",
    "options": [
      { "id": "1", "text": "A" },
      { "id": "2", "text": "B" },
      { "id": "3", "text": "C" },
      { "id": "4", "text": "D" }
    ],
    "answer": "1",
    "explanation": "The square must have separate overlaps with the triangle and the circle."
  },
  {
    "id": 1118,
    "text": "Satisfy: Dot in (Circle + Triangle + Square) and (Square only).",
    "options": [
      { "id": "1", "text": "A" },
      { "id": "2", "text": "B" },
      { "id": "3", "text": "C" },
      { "id": "4", "text": "D" }
    ],
    "answer": "1",
    "explanation": "Checking for a complex intersection alongside a simple exclusive region."
  },
  {
    "id": 1119,
    "text": "Placement condition: Dot in (Triangle + Square) but NOT in the Circle.",
    "options": [
      { "id": "1", "text": "A" },
      { "id": "2", "text": "B" },
      { "id": "3", "text": "C" },
      { "id": "4", "text": "D" }
    ],
    "answer": "1",
    "explanation": "Exclusion logic: (T ∩ S) \ C."
  },
  {
    "id": 1120,
    "text": "Condition: Dot in (Circle + Triangle) and (Circle + Square).",
    "options": [
      { "id": "1", "text": "A" },
      { "id": "2", "text": "B" },
      { "id": "3", "text": "C" },
      { "id": "4", "text": "D" }
    ],
    "answer": "1",
    "explanation": "Checking shared regions centered around the circle."
  },
  {
    "id": 1121,
    "text": "Final Task: 3 dots - (Circle only), (Square only), (Triangle only).",
    "options": [
      { "id": "1", "text": "A (Partial overlaps leave exclusive external regions)" },
      { "id": "2", "text": "B (Complete nesting)" },
      { "id": "3", "text": "C (Duplicate shapes)" },
      { "id": "4", "text": "D (Horizontal line only)" }
    ],
    "answer": "1",
    "explanation": "The configurations must allow three distinct exclusive territories in one integrated diagram."
  }
];
