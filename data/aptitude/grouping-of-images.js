export const theory = [
  {
    "title": "Grouping of Identical Figures",
    "description": "Grouping identical figures requires you to categorize a set of figures into distinct classes based on their shared underlying characteristics. To succeed, look for properties such as:\n1. **Shape Type**: Polygons vs. curved shapes.\n2. **Component Count**: Number of dots, lines, or sub-shapes.\n3. **Symmetry**: Horizontal, vertical, or rotational symmetry.\n4. **Intersections**: Number of ways lines meet or cross.\n5. **Shading/Filling**: Type of pattern or solid fill used.",
    "image": "/images/aptitude/grouping-of-images.svg"
  }
];

export const questions = [
  {
    "id": 1001,
    "text": "Group the following figures into three classes using each figure only once.",
    "image": "<svg width='400' height='100' viewBox='0 0 400 100'><rect x='10' y='10' width='20' height='20' stroke='black' fill='none'/><text x='15' y='45' font-size='10'>(1)</text><circle cx='55' cy='20' r='10' stroke='black' fill='none'/><text x='50' y='45' font-size='10'>(2)</text><line x1='80' y1='10' x2='100' y2='30' stroke='black'/><text x='85' y='45' font-size='10'>(3)</text><rect x='120' y='10' width='30' height='20' stroke='black' fill='#ccc'/><text x='130' y='45' font-size='10'>(4)</text><circle cx='175' cy='20' r='15' stroke='black' fill='#ccc'/><text x='170' y='45' font-size='10'>(5)</text><line x1='210' y1='10' x2='230' y2='30' stroke='black' stroke-width='3'/><text x='215' y='45' font-size='10'>(6)</text></svg>",
    "options": [
      { "id": "1", "text": "(1,4), (2,5), (3,6)" },
      { "id": "2", "text": "(1,2), (3,4), (5,6)" },
      { "id": "3", "text": "(1,6), (4,2), (3,5)" },
      { "id": "4", "text": "(1,3,5), (2,4,6)" }
    ],
    "answer": "1",
    "explanation": "Grouped by fundamental shape category: (1,4) are both quadrilaterals, (2,5) are both circles, and (3,6) are both simple line segments."
  },
  {
    "id": 1002,
    "text": "Identify groups based on the number of dots inside the figures.",
    "options": [
      { "id": "1", "text": "(1,3,5), (2,4,6), (7,8,9)" },
      { "id": "2", "text": "(1,2,3), (4,5,6), (7,8,9)" },
      { "id": "3", "text": "(1,4,7), (2,5,8), (3,6,9)" },
      { "id": "4", "text": "(1,5,9), (2,6,7), (3,4,8)" }
    ],
    "answer": "1",
    "explanation": "Triplets are formed by figures containing 1 dot, 2 dots, and 3 dots respectively."
  },
  {
    "id": 1003,
    "text": "Group these figures according to their rotational symmetry properties.",
    "options": [
      { "id": "1", "text": "(90° symmetry), (180° symmetry), (No symmetry)" },
      { "id": "2", "text": "(Square), (Rectangle), (Triangle)" },
      { "id": "3", "text": "(Empty), (Shaded), (Crossed)" },
      { "id": "4", "text": "(Top), (Bottom), (Side)" }
    ],
    "answer": "1",
    "explanation": "Categorizing by how many degrees a figure must be rotated to look identical to its original state."
  },
  {
    "id": 1004,
    "text": "Which grouping strategy correctly separates open and closed figures?",
    "options": [
      { "id": "1", "text": "(Closed polygons), (Open lines/curves)" },
      { "id": "2", "text": "(Large shapes), (Small shapes)" },
      { "id": "3", "text": "(Internal dots), (External dots)" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "One class consists of fully enclosed areas while the other consists of disconnected or branching paths."
  },
  {
    "id": 1005,
    "text": "Classify figures by the number of internal and external intersections.",
    "options": [
      { "id": "1", "text": "(0 intersections), (1 intersection), (2+ intersections)" },
      { "id": "2", "text": "(Horizontal), (Vertical), (Diagonal)" },
      { "id": "3", "text": "(Simple), (Compound), (Complex)" },
      { "id": "4", "text": "Only one group possible" }
    ],
    "answer": "1",
    "explanation": "Grouping based on the count of points where paths cross or touch."
  },
  {
    "id": 1006,
    "text": "Group based on the presence of curved vs. straight lines.",
    "options": [
      { "id": "1", "text": "(Purely straight), (Purely curved), (Mixed)" },
      { "id": "2", "text": "(1,2), (3,4), (5,6)" },
      { "id": "3", "text": "(Large), (Tiny)" },
      { "id": "4", "text": "All curves" }
    ],
    "answer": "1",
    "explanation": "Categorizing by the stroke geometry used to construct the figure."
  },
  {
    "id": 1007,
    "text": "Complete the grouping for: Triangle (Group A), Square (Group B), Pentagon (Group C).",
    "options": [
      { "id": "1", "text": "(3-sided), (4-sided), (5-sided)" },
      { "id": "2", "text": "All are polygons" },
      { "id": "3", "text": "(Internal), (External)" },
      { "id": "4", "text": "No logical group" }
    ],
    "answer": "1",
    "explanation": "Each class is defined by the specific count of line segments (sides)."
  },
  {
    "id": 1008,
    "text": "Group by the relative position of a smaller internal element.",
    "options": [
      { "id": "1", "text": "(Centrally aligned), (Corner aligned), (Edge aligned)" },
      { "id": "2", "text": "(Small), (Medium), (Large)" },
      { "id": "3", "text": "(Up), (Down), (Left)" },
      { "id": "4", "text": "Random placement" }
    ],
    "answer": "1",
    "explanation": "Focusing on the spatial relationship between the parent shape and its content."
  },
  {
    "id": 1009,
    "text": "Group based on the style of an connecting connector used in the diagram.",
    "options": [
      { "id": "1", "text": "(Dashed lines), (Solid lines), (Dotted lines)" },
      { "id": "2", "text": "(Arrow), (Stick), (Arc)" },
      { "id": "3", "text": "(Thin), (Normal), (Bold)" },
      { "id": "4", "text": "(Black), (Grey), (Hollow)" }
    ],
    "answer": "1",
    "explanation": "Analyzing the stroke property of the relationship indicators."
  },
  {
    "id": 1010,
    "text": "Classify by the primary axis of symmetry observed in the set.",
    "options": [
      { "id": "1", "text": "(Vertical symmetry), (Horizontal symmetry), (Both)" },
      { "id": "2", "text": "(1st row), (2nd row)" },
      { "id": "3", "text": "(L-side), (R-side)" },
      { "id": "4", "text": "None symmetric" }
    ],
    "answer": "1",
    "explanation": "Identifying which mirror-line orientation maps the figure to itself."
  },
  {
    "id": 1011,
    "text": "Group by the total number of non-overlapping parts forming the figure.",
    "options": [
      { "id": "1", "text": "(1-piece), (2-piece), (3-piece)" },
      { "id": "2", "text": "(Hollow), (Solid)" },
      { "id": "3", "text": "(Simple), (Compound)" },
      { "id": "4", "text": "Zero parts" }
    ],
    "answer": "1",
    "explanation": "Counting distinct geometric entities presented together."
  },
  {
    "id": 1012,
    "text": "Identify classes based on the interior filling pattern.",
    "options": [
      { "id": "1", "text": "(Cross-hatched), (Solidly shaded), (Unshaded)" },
      { "id": "2", "text": "(Dark), (Light), (Grey)" },
      { "id": "3", "text": "(Text), (Image), (Shape)" },
      { "id": "4", "text": "All black" }
    ],
    "answer": "1",
    "explanation": "Focusing on the texture/shading style applied to the enclosure."
  },
  {
    "id": 1013,
    "text": "Group using the predominant direction of arrows or movement indicators.",
    "options": [
      { "id": "1", "text": "(Clockwise), (Anti-clockwise), (Static)" },
      { "id": "2", "text": "(Inward), (Outward)" },
      { "id": "3", "text": "(Parallel), (Perpendicular)" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Categorizing the sense of rotation or flow."
  },
  {
    "id": 1014,
    "text": "Identify triplets sharing the same boundary shape despite internal details.",
    "options": [
      { "id": "1", "text": "(Parent-Square), (Parent-Circle), (Parent-Triangle)" },
      { "id": "2", "text": "(Internal-Square), (Internal-Dot)" },
      { "id": "3", "text": "(Top-heavy), (Bottom-heavy)" },
      { "id": "4", "text": "Complete match" }
    ],
    "answer": "1",
    "explanation": "Grouping by the invariant outer frame."
  },
  {
    "id": 1015,
    "text": "Group by the type of line connectivity (Nodes, T-joins, Crosses).",
    "options": [
      { "id": "1", "text": "Figures with only 3-way joins, Figures with 4-way joins, Figures with no joins." },
      { "id": "2", "text": "(Sharp), (Smooth)" },
      { "id": "3", "text": "(Inside), (Crossing)" },
      { "id": "4", "text": "No joins" }
    ],
    "answer": "1",
    "explanation": "Analyzing the topological connections within the figures."
  },
  {
    "id": 1016,
    "text": "Classify by mutual spatial arrangement of two elements.",
    "options": [
      { "id": "1", "text": "(One inside other), (Both side-by-side), (Partially overlapping)" },
      { "id": "2", "text": "(Above), (Below), (Same level)" },
      { "id": "3", "text": "(Aligned), (Rotated)" },
      { "id": "4", "text": "Separate only" }
    ],
    "answer": "1",
    "explanation": "Identifying how sub-shapes interact spatially."
  },
  {
    "id": 1017,
    "text": "Identify groups based on the contact points with the boundary.",
    "options": [
      { "id": "1", "text": "(No contact), (Tangent/Point contact), (Crossing/Secant contact)" },
      { "id": "2", "text": "(Inside), (Outside)" },
      { "id": "3", "text": "(Top), (Bottom)" },
      { "id": "4", "text": "Full contact" }
    ],
    "answer": "1",
    "explanation": "Analyzing the degree of interaction between contained and containing shapes."
  },
  {
    "id": 1018,
    "text": "Group the figures into Vertical, Horizontal, and Diagonal orientations.",
    "options": [
      { "id": "1", "text": "(North-South axis), (East-West axis), (Tilted axis)" },
      { "id": "2", "text": "(0°), (90°), (180°)" },
      { "id": "3", "text": "Column 1, 2, and 3" },
      { "id": "4", "text": "All Vertical" }
    ],
    "answer": "1",
    "explanation": "Selecting based on the primary orientation axis of the figure's main element."
  },
  {
    "id": 1019,
    "text": "Group by the property of parallel line pairs present in the figure.",
    "options": [
      { "id": "1", "text": "(Zero pairs), (One pair), (Two+ pairs)" },
      { "id": "2", "text": "(Square), (Circle)" },
      { "id": "3", "text": "(Even), (Odd)" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Looking for the geometric characteristic of containing parallel lines."
  },
  {
    "id": 1020,
    "text": "Categorize by 'Hole' count (Topological Genus).",
    "options": [
      { "id": "1", "text": "Figures with 0 holes, Figures with 1 hole, Figures with 2+ holes." },
      { "id": "2", "text": "(Punctured), (Whole)" },
      { "id": "3", "text": "(Swiss cheese level), (Solid level)" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Counting the number of fully enclosed empty regions within the shape."
  },
  {
    "id": 1021,
    "text": "Bonus Checklist: Vertex count grouping.",
    "options": [
      { "id": "1", "text": "(3 vertices), (4 vertices), (5+ vertices)" },
      { "id": "2", "text": "(Round), (Sharp)" },
      { "id": "3", "text": "(Even Vertices), (Odd Vertices)" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "Simple polygon classification based on corner count."
  }
];
