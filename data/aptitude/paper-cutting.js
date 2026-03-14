export const theory = [
  {
    "title": "Paper Cutting",
    "description": "Paper cutting involves folding a piece of paper (usually into halves, quarters, or eighths) and then making cuts or punches in it. You must determine what the paper will look like when it is completely unfolded. The key is to trace the reflections across each fold line in reverse order.",
    "image": "/images/aptitude/paper-cutting.svg"
  }
];

export const questions = [
  {
    "id": 801,
    "text": "Find out from amongst the four alternatives as to how the pattern would appear when the paper is unfolded.",
    "image": "<svg width='160' height='100' viewBox='0 0 160 100'><rect x='10' y='10' width='30' height='30' fill='#eee' stroke='black'/><text x='12' y='25' font-size='8' fill='black'>Fold</text><circle cx='25' cy='25' r='3' fill='black'/></svg>",
    "options": [
      { "id": "1", "text": "A", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><circle cx='15' cy='15' r='3' fill='black'/><circle cx='45' cy='15' r='3' fill='black'/><circle cx='15' cy='45' r='3' fill='black'/><circle cx='45' cy='45' r='3' fill='black'/></svg>" },
      { "id": "2", "text": "B", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><circle cx='30' cy='30' r='3' fill='black'/></svg>" },
      { "id": "3", "text": "C", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><circle cx='15' cy='15' r='3' fill='black'/><circle cx='45' cy='45' r='3' fill='black'/></svg>" },
      { "id": "4", "text": "D", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='5' y='5' width='50' height='50' fill='none' stroke='black'/><circle cx='15' cy='45' r='3' fill='black'/><circle cx='45' cy='15' r='3' fill='black'/></svg>" }
    ],
    "answer": "1",
    "explanation": "If a square paper is folded into quarters (twice) and a hole is punched in one corner, when unfolded, there will be 4 holes symmetrically placed in each corresponding quarter."
  },
  {
    "id": 802,
    "text": "A paper is folded in half once and a semi-circular cut is made on the fold line. What is the unfolded result?",
    "options": [
      { "id": "1", "text": "One full circle" },
      { "id": "2", "text": "Two semi-circles" },
      { "id": "3", "text": "Two full circles" },
      { "id": "4", "text": "Half circle" }
    ],
    "answer": "1",
    "explanation": "Cutting a semi-circle on the fold line results in a full circle when the reflection from the other side is combined."
  },
  {
    "id": 803,
    "text": "If a square paper is folded diagonally to form a triangle, and a corner not sharing the fold is cut off, how many holes appear in the unfolded paper?",
    "options": [
      { "id": "1", "text": "Two corners cut" },
      { "id": "2", "text": "One corner cut" },
      { "id": "3", "text": "Four corners cut" },
      { "id": "4", "text": "Center hole" }
    ],
    "answer": "1",
    "explanation": "With one diagonal fold, any cut away from the fold line is reflected once, resulting in 2 holes/cuts."
  },
  {
    "id": 804,
    "text": "A circular paper is folded into quarters (twice). A small circle is punched in the middle of the folded quadrant. How many holes are in the unfolded circle?",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "2" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "1" }
    ],
    "answer": "1",
    "explanation": "Folding into quarters multiplies any non-fold-line cut by 4."
  },
  {
    "id": 805,
    "text": "What happens if you cut a small triangle along the center fold of a paper folded in half?",
    "options": [
      { "id": "1", "text": "It forms a diamond (rhombus) shape" },
      { "id": "2", "text": "It remains a triangle" },
      { "id": "3", "text": "It forms a square" },
      { "id": "4", "text": "It forms two triangles" }
    ],
    "answer": "1",
    "explanation": "Reflecting a triangle across its base (the fold) creates a diamond shape."
  },
  {
    "id": 806,
    "text": "A piece of paper is folded into eight parts. One hole is punched. How many holes are visible after unfolding?",
    "options": [
      { "id": "1", "text": "8" },
      { "id": "2", "text": "4" },
      { "id": "3", "text": "16" },
      { "id": "4", "text": "2" }
    ],
    "answer": "1",
    "explanation": "The number of folds determines the multiplier. Folding 3 times (1->2->4->8) results in 8 layers, thus 8 holes."
  },
  {
    "id": 807,
    "text": "Identify the result of cutting the very center corner of a paper folded into quarters.",
    "options": [
      { "id": "1", "text": "A single hole in the center of the sheet" },
      { "id": "2", "text": "Four holes in the corners" },
      { "id": "3", "text": "A large square hole" },
      { "id": "4", "text": "No hole" }
    ],
    "answer": "1",
    "explanation": "The 'center corner' of the folds corresponds to the single center point of the original sheet. One cut creates one central hole."
  },
  {
    "id": 808,
    "text": "If you cut a 'U' shape through the non-fold edges of a paper folded in half, you get?",
    "options": [
      { "id": "1", "text": "Two separate 'U' shapes" },
      { "id": "2", "text": "A single 'O' shape" },
      { "id": "3", "text": "A 'W' shape" },
      { "id": "4", "text": "Nothing" }
    ],
    "answer": "1",
    "explanation": "Cuts at the open edges (away from the fold) result in multiple distinct holes."
  },
  {
    "id": 809,
    "text": "Folding a sheet into a triangle (diagonal fold), then cutting a small triangle at the fold's midpoint. Result?",
    "options": [
      { "id": "1", "text": "A diamond hole in the middle of the paper" },
      { "id": "2", "text": "A square hole" },
      { "id": "3", "text": "Two triangles" },
      { "id": "4", "text": "One triangle" }
    ],
    "answer": "1",
    "explanation": "Reflecting a cut triangle across the diagonal fold line creates a diamond (rhombus) hole."
  },
  {
    "id": 810,
    "text": "A paper is folded 4 times in a 'fan' style (accordion fold). A hole is punched through all layers. How many holes are in the unfolded sheet?",
    "options": [
      { "id": "1", "text": "4 (depending on number of layers)" },
      { "id": "2", "text": "1" },
      { "id": "3", "text": "8" },
      { "id": "4", "text": "16" }
    ],
    "answer": "1",
    "explanation": "Accordion folding creates N layers. One punch through all layers results in N holes in a row."
  },
  {
    "id": 11,
    "text": "If a square paper is folded horizontally and then vertically, and a circle is cut out from the center of the resulting small square, how many holes will it have when unfolded?",
    "options": [
      { "id": "1", "text": "4" },
      { "id": "2", "text": "1" },
      { "id": "3", "text": "2" },
      { "id": "4", "text": "8" }
    ],
    "answer": "1",
    "explanation": "The cut is in the center of the quadrant, not on any fold line, so it reflects twice (once for each fold) to create 4 holes."
  },
  {
    "id": 12,
    "text": "What is the result of cutting a 'heart half' shape on the fold of a paper folded in half?",
    "options": [
      { "id": "1", "text": "A full heart shape" },
      { "id": "2", "text": "Two half hearts" },
      { "id": "3", "text": "A circle" },
      { "id": "4", "text": "A triangle" }
    ],
    "answer": "1",
    "explanation": "This is the classic way to cut a symmetric heart."
  },
  {
    "id": 13,
    "text": "A rectangular sheet is folded along its length into 3 equal parts. A circle is punched through. Unfolding shows:",
    "options": [
      { "id": "1", "text": "3 circles in a line" },
      { "id": "2", "text": "1 circle" },
      { "id": "3", "text": "6 circles" },
      { "id": "4", "text": "A long oval" }
    ],
    "answer": "1",
    "explanation": "3 layers result in 3 identical holes."
  },
  {
    "id": 14,
    "text": "Identifying cuts: One cut at the center of the fold, and one cut at the corner. Result after 1 fold?",
    "options": [
      { "id": "1", "text": "One central hole and two corner holes" },
      { "id": "2", "text": "Two central holes and one corner" },
      { "id": "3", "text": "Two of each" },
      { "id": "4", "text": "Three holes" }
    ],
    "answer": "1",
    "explanation": "The fold-centered cut stays as one hole (if symmetric), while the corner cut (off-fold) is mirrored into 2."
  },
  {
    "id": 15,
    "text": "Paper is folded twice (into 4). A triangular notch is cut on the corner that represents the paper's edge. Unfolding shows:",
    "options": [
      { "id": "1", "text": "Four triangular notches on the edges" },
      { "id": "2", "text": "One diamond in the middle" },
      { "id": "3", "text": "Two notches" },
      { "id": "4", "text": "A square" }
    ],
    "answer": "1",
    "explanation": "Edge cuts are mirrored to each of the four corresponding edges of the original paper."
  },
  {
    "id": 16,
    "text": "Folding a sheet into a triangle, then folding that triangle in half. Cutting the tip (the original center). Unfolding reveals:",
    "options": [
      { "id": "1", "text": "One polygonal hole in the center" },
      { "id": "2", "text": "8 separate holes" },
      { "id": "3", "text": "4 separate holes" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "All vertices meeting at the center point are cut by one single snip."
  },
  {
    "id": 17,
    "text": "How many holes for a circle paper folded into 8, then punched twice (not on folds)?",
    "options": [
      { "id": "1", "text": "16" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "32" },
      { "id": "4", "text": "4" }
    ],
    "answer": "1",
    "explanation": "2 punches * 8 layers = 16 holes."
  },
  {
    "id": 18,
    "text": "A fold makes a 'U' shape out of a straight cut. This signifies the cut was made:",
    "options": [
      { "id": "1", "text": "Across a fold line at an angle" },
      { "id": "2", "text": "Parallel to the fold" },
      { "id": "3", "text": "Away from the fold" },
      { "id": "4", "text": "In a circle" }
    ],
    "answer": "1",
    "explanation": "Reflecting a straight line across an axis it intersects at an angle creates a V or U profile."
  },
  {
    "id": 19,
    "text": "A paper is folded in a specific complex way. One snip results in a circle. This means the fold was:",
    "options": [
      { "id": "1", "text": "A radial or circular fold around a point" },
      { "id": "2", "text": "A simple triangle fold" },
      { "id": "3", "text": "Impossible" },
      { "id": "4", "text": "Random" }
    ],
    "answer": "1",
    "explanation": "Folding points onto a center (like a snowflake or napkin) and cutting a curved arc creates circular holes."
  },
  {
    "id": 20,
    "text": "After unfolding a sheet with a hole on one fold line but not the other (in a quarter-folded sheet), you see:",
    "options": [
      { "id": "1", "text": "Two holes" },
      { "id": "2", "text": "Four holes" },
      { "id": "3", "text": "One hole" },
      { "id": "4", "text": "Zero holes" }
    ],
    "answer": "1",
    "explanation": "Being on one fold line means it's only reflected across that line once. It is not on the second fold line, so it doesn't reflect again. Total = 2."
  },
  {
    "id": 21,
    "text": "Bonus: Folding a sheet into 16 layers and punching one hole results in how many holes?",
    "options": [
      { "id": "1", "text": "16" },
      { "id": "2", "text": "8" },
      { "id": "3", "text": "24" },
      { "id": "4", "text": "32" }
    ],
    "answer": "1",
    "explanation": "1 hole * 16 layers = 16 holes."
  }
];
