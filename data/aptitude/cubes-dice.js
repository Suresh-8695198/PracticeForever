export const theory = [
  {
    "title": "Cubes and Dice",
    "description": "Cubes and dice questions test your spatial visualization and logical reasoning. You may be asked to:\n1. **Identify Opposite Faces**: Determine which faces are opposite each other based on multiple views of a die.\n2. **Cube Folding**: Predict which 3D cube can be formed from a given 2D 'net' (unfolded layout).\n3. **Identify Adjacency**: Determine which faces share an edge or vertex.\n\n**Standard Die Rule**: In a standard die, the sum of opposite faces is always 7 (1↔6, 2↔5, 3↔4).",
    "image": "/images/aptitude/cubes-dice.svg"
  }
];

export const questions = [
  {
    "id": 1401,
    "text": "The figure (X) shows a net of a cube. Which of the following cubes can be formed by folding this net?",
    "image": "<svg width='150' height='200' viewBox='0 0 150 200'><rect x='50' y='10' width='40' height='40' fill='none' stroke='black'/><text x='65' y='35'>1</text><rect x='10' y='50' width='120' height='40' fill='none' stroke='black'/><line x1='50' y1='50' x2='50' y2='90' stroke='black'/><line x1='90' y1='50' x2='90' y2='90' stroke='black'/><text x='25' y='75'>2</text><text x='65' y='75'>3</text><text x='105' y='75'>4</text><rect x='50' y='90' width='40' height='40' fill='none' stroke='black'/><text x='65' y='115'>5</text><rect x='50' y='130' width='40' height='40' fill='none' stroke='black'/><text x='65' y='155'>6</text></svg>",
    "options": [
      { "id": "1", "text": "Cube showing faces 1, 3, 4" },
      { "id": "2", "text": "Cube showing faces 1, 2, 6" },
      { "id": "3", "text": "Cube showing faces 2, 4, 3" },
      { "id": "4", "text": "Cube showing faces 3, 5, 6" }
    ],
    "answer": "1",
    "explanation": "In the net, faces 1, 3, and 4 meet at a common vertex and are adjacent. They can be seen together. Note that 1 is opposite 5, 2 is opposite 4, and 3 is opposite 6."
  },
  {
    "id": 1402,
    "text": "On a standard die, what number is exactly opposite to the face showing 3?",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "5" },
      { "id": "3", "text": "2" },
      { "id": "4", "text": "1" }
    ],
    "answer": "1",
    "explanation": "Standard die rule: The sum of opposite faces is 7. Since 3 + 4 = 7, the opposite face is 4."
  },
  {
    "id": 1403,
    "text": "How many faces, edges, and vertices does a standard cube have?",
    "options": [
      { "id": "1", "text": "Faces: 6, Edges: 12, Vertices: 8" },
      { "id": "2", "text": "Faces: 6, Edges: 8, Vertices: 12" },
      { "id": "3", "text": "Faces: 8, Edges: 12, Vertices: 6" },
      { "id": "4", "text": "Faces: 4, Edges: 6, Vertices: 4" }
    ],
    "answer": "1",
    "explanation": "A cube (regular hexahedron) has 6 square faces, 12 equal edges, and 8 corner points (vertices)."
  },
  {
    "id": 1404,
    "text": "If a die is rolled and shows 6 on the top face, what is the number on the bottom face (assuming it's a standard die)?",
    "options": [
      { "id": "1", "text": "1" },
      { "id": "2", "text": "2" },
      { "id": "3", "text": "5" },
      { "id": "4", "text": "4" }
    ],
    "answer": "1",
    "explanation": "Top and bottom are opposite faces. 7 - 6 = 1."
  },
  {
    "id": 1405,
    "text": "In a cube net, if four squares are in a row, the two squares on the ends of the row will be ______ after folding.",
    "options": [
      { "id": "1", "text": "Opposite to each other" },
      { "id": "2", "text": "Adjacent to each other" },
      { "id": "3", "text": "Overlapping" },
      { "id": "4", "text": "Not connected" }
    ],
    "answer": "2",
    "explanation": "In a linear row of 4 squares, the 1st and 3rd are opposite, and the 2nd and 4th are opposite. The 1st and 4th will share an edge upon folding, becoming adjacent."
  },
  {
    "id": 1406,
    "text": "How many faces of a cube are visible at most from any single point in space without moving the cube or the observer?",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "1" },
      { "id": "3", "text": "2" },
      { "id": "4", "text": "6" }
    ],
    "answer": "1",
    "explanation": "An observer can see a maximum of three mutually adjacent faces (meeting at a corner) from a single perspective."
  },
  {
    "id": 1407,
    "text": "In a non-standard die, if 1 is adjacent to 2, 3, 4, and 5, what must be opposite to 1?",
    "options": [
       { "id": "1", "text": "6" },
       { "id": "2", "text": "3" },
       { "id": "3", "text": "None" },
       { "id": "4", "text": "5" }
    ],
    "answer": "1",
    "explanation": "A face has 4 adjacent faces and 1 opposite face. If 1 is adjacent to 2, 3, 4, and 5, the only remaining face is 6, which must be opposite."
  },
  {
    "id": 1408,
    "text": "Which of these is NOT a valid net for a cube?",
    "options": [
      { "id": "1", "text": "A net with 4 squares in a row and 2 squares on the same side of the row." },
      { "id": "2", "text": "A net with 6 squares in a single straight line." },
      { "id": "3", "text": "Both 1 and 2" },
      { "id": "4", "text": "A 'T' shaped net." }
    ],
    "answer": "3",
    "explanation": "A valid net must fold without overlaps. 6 in a row would result in overlaps and open ends. Having both 'flaps' on the same side of a row also causes overlap."
  },
  {
    "id": 1409,
    "text": "Identify the number of vertices in two separate cubes joined face-to-face.",
    "options": [
      { "id": "1", "text": "12" },
      { "id": "2", "text": "16" },
      { "id": "3", "text": "14" },
      { "id": "4", "text": "8" }
    ],
    "answer": "1",
    "explanation": "Each cube has 8 vertices. When joined face-to-face, 4 vertices from each cube merge into 4 shared vertices. Calculation: (8 + 8) - 4 = 12."
  },
  {
    "id": 1410,
    "text": "Opposite of 'Blue' if two views of a die show (Red, Blue, Green) and (Red, Yellow, White)?",
    "options": [
      { "id": "1", "text": "Cannot be determined without knowing orientation" },
      { "id": "2", "text": "Yellow or White" },
      { "id": "3", "text": "Red" },
      { "id": "4", "text": "Green" }
    ],
    "answer": "2",
    "explanation": "Since Red is adjacent to Blue, Green, Yellow, and White, the face opposite Red must be the 6th color. Blue must be opposite either Yellow or White."
  },
  {
    "id": 1411,
    "text": "If a cube is painted red on all faces and then cut into 27 smaller equal cubes, how many cubes will have NO paint?",
    "options": [
      { "id": "1", "text": "1" },
      { "id": "2", "text": "0" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "6" }
    ],
    "answer": "1",
    "explanation": "A 3x3x3 block has (3-2)³ = 1³ = 1 inner cube with no visible faces."
  },
  {
    "id": 1412,
    "text": "How many of the 27 smaller cubes (from a 3x3x3 block) will have exactly THREE faces painted?",
    "options": [
      { "id": "1", "text": "8" },
      { "id": "2", "text": "12" },
      { "id": "3", "text": "6" },
      { "id": "4", "text": "4" }
    ],
    "answer": "1",
    "explanation": "Only the corner cubes have 3 faces painted. A cube has 8 corners."
  },
  {
    "id": 1413,
    "text": "How many of the 27 smaller cubes will have exactly TWO faces painted?",
    "options": [
      { "id": "1", "text": "12" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "6" },
      { "id": "4", "text": "10" }
    ],
    "answer": "1",
    "explanation": "The cubes along the edges (excluding corners) have 2 faces painted. 12 edges * (3-2) = 12."
  },
  {
    "id": 1414,
    "text": "How many smaller cubes will have exactly ONE face painted in a 3x3x3 block?",
    "options": [
      { "id": "1", "text": "6" },
      { "id": "2", "text": "12" },
      { "id": "3", "text": "1" },
      { "id": "4", "text": "9" }
    ],
    "answer": "1",
    "explanation": "The center cube of each face has 1 face painted. 6 faces * 1 = 6."
  },
  {
    "id": 1415,
    "text": "A die is rolled four times and the numbers 1, 2, 3, 4 appear on the top. What is the sum of numbers on the bottom faces across all four rolls?",
    "options": [
      { "id": "1", "text": "18" },
      { "id": "2", "text": "10" },
      { "id": "3", "text": "14" },
      { "id": "4", "text": "28" }
    ],
    "answer": "1",
    "explanation": "Bottom faces are (7-1), (7-2), (7-3), (7-4) = 6, 5, 4, 3. Sum = 18."
  },
  {
    "id": 1416,
    "text": "If two positions of a die are given such that a common face has the same orientation, then:",
    "options": [
      { "id": "1", "text": "Corresponding faces are opposite" },
      { "id": "2", "text": "Corresponding faces are adjacent" },
      { "id": "3", "text": "No rule applies" },
      { "id": "4", "text": "The die is broken" }
    ],
    "answer": "1",
    "explanation": "If the orientation is kept same for the common face, the other visible faces on the same sides are opposite to each other across the two views."
  },
  {
    "id": 1417,
    "text": "In a competitive exam problem, 'X' is the opposite of 'Y' if they do not share an edge in the net. Is this always true for cube nets?",
    "options": [
      { "id": "1", "text": "No (they must be separated by exactly one square)" },
      { "id": "2", "text": "Yes" },
      { "id": "3", "text": "Only for T-nets" },
      { "id": "4", "text": "Never" }
    ],
    "answer": "1",
    "explanation": "Sharing no edge doesn't guarantee being opposite; for example, faces meeting at a vertex are adjacent but share no edge length. The standard rule is jumping one square in a row/column."
  },
  {
    "id": 1418,
    "text": "What is the maximum number of edges meeting at a single vertex of a cube?",
    "options": [
      { "id": "1", "text": "3" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "6" },
      { "id": "4", "text": "8" }
    ],
    "answer": "1",
    "explanation": "In a cube, exactly 3 edges (and 3 faces) meet at every vertex."
  },
  {
    "id": 1419,
    "text": "If a cube of 4x4x4 is cut into 1x1x1 cubes, how many will have NO faces painted?",
    "options": [
      { "id": "1", "text": "8" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "16" },
      { "id": "4", "text": "1" }
    ],
    "answer": "1",
    "explanation": "Inner core = (4-2)³ = 2³ = 8."
  },
  {
    "id": 1420,
    "text": "Identify the number of edges in a structure formed by 3 cubes in an 'L' shape.",
    "options": [
      { "id": "1", "text": "28" },
      { "id": "2", "text": "36" },
      { "id": "3", "text": "32" },
      { "id": "4", "text": "24" }
    ],
    "answer": "1",
    "explanation": "Total edges (12*3=36). Two shared faces mean two sets of 4 edges are lost from the count. 36 - 8 = 28."
  },
  {
    "id": 1421,
    "text": "Final Logic: How many nets exist for a single cube?",
    "options": [
      { "id": "1", "text": "11" },
      { "id": "2", "text": "6" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "1" }
    ],
    "answer": "1",
    "explanation": "There are exactly 11 unique hexominoes that can be folded into a cube."
  }
];
