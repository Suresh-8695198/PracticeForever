export const questions = [
  {
    id: 1,
    text: "Which figure is the odd one out in the sequence of 'Rotating Squares'?",
    options: [
      { id: "A", text: "Square with dot at top-left" },
      { id: "B", text: "Square with dot at top-right" },
      { id: "C", text: "Square with dot at bottom-right" },
      { id: "D", text: "Square with dot in the center" }
    ],
    answer: "D",
    explanation: "In a series involving rotation, the dot would move along the corners or sides. A dot in the center is a change in position type, making it the odd one out.",
    image: "/images/practice/reasoning/rotating_squares_odd.svg"
  },
  {
    id: 2,
    text: "In a mirrors image, if the clock shows 3:15, what is the actual time?",
    options: [
      { id: "A", text: "8:45" },
      { id: "B", text: "9:45" },
      { id: "C", text: "8:15" },
      { id: "D", text: "9:15" }
    ],
    answer: "A",
    explanation: "Mirror time + Actual time = 12:00 (or 11:60). \n11:60 - 3:15 = 8:45."
  },
  {
    id: 3,
    text: "If a paper is folded in a triangle and a hole is punched, how will it look when unfolded?",
    options: [
      { id: "A", text: "One hole" },
      { id: "B", text: "Two holes" },
      { id: "C", text: "Four holes" },
      { id: "D", text: "Eight holes" }
    ],
    answer: "B",
    explanation: "Folding once and punching one hole creates two holes when unfolded (symmetry across the fold)."
  },
  {
    id: 4,
    text: "Which shape can be formed by folding the given 2D net of a cube?",
    options: [
      { id: "A", text: "Cube with adjacent faces A and B" },
      { id: "B", text: "Cube with opposite faces A and B" },
      { id: "C", text: "Cube with three faces visible" },
      { id: "D", text: "Option depends on net layout" }
    ],
    answer: "D",
    explanation: "Visualizing cube nets requires identifying opposite faces (which can never be adjacent in the 3D cube). In this specific layout, A and B are opposite and thus cannot be seen together on adjacent faces.",
    image: "/images/practice/reasoning/cube_net.svg"
  },
  {
    id: 5,
    text: "Find the missing figure in the series: Circle -> Semicircle -> Quarter circle -> ?",
    options: [
      { id: "A", text: "Full circle" },
      { id: "B", text: "Triangle" },
      { id: "C", text: "Eighth of a circle" },
      { id: "D", text: "Square" }
    ],
    answer: "C",
    explanation: "The series shows the shape being halved at each step.",
    image: "/images/practice/reasoning/visual_sequence.svg"
  }
];
