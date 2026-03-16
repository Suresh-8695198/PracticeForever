export const questions = [
  {
    id: 1,
    text: "The ratio between the length and the breadth of a rectangular plot is 5:3. If the perimeter of the plot is 160m, what is its area?",
    options: [
      { id: "A", text: "1200 sq.m" },
      { id: "B", text: "1500 sq.m" },
      { id: "C", text: "1600 sq.m" },
      { id: "D", text: "1800 sq.m" }
    ],
    answer: "B",
    explanation: "Let Length = 5x, Breadth = 3x. \nPerimeter = 2(L+B) = 2(5x+3x) = 16x. \n16x = 160 -> x = 10. \nL = 50, B = 30. \nArea = 50 × 30 = 1500 sq.m."
  },
  {
    id: 2,
    text: "If the area of a circle is 154 sq.cm, then its circumference is:",
    options: [
      { id: "A", text: "22 cm" },
      { id: "B", text: "44 cm" },
      { id: "C", text: "33 cm" },
      { id: "D", text: "66 cm" }
    ],
    answer: "B",
    explanation: "πr² = 154 \n(22/7) × r² = 154 \nr² = 154 × (7/22) = 49 \nr = 7. \nCircumference = 2πr = 2 × (22/7) × 7 = 44 cm."
  }
];
