export const questions = [
  {
    id: 1,
    text: "Five friends (A, B, C, D, E) are sitting in a row facing North. A is to the immediate left of B. C is between B and D. E is at one end. Who is sitting in the middle?",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "D" }
    ],
    answer: "B",
    explanation: "Possible arrangement: E, A, B, C, D. \nA is left of B. \nC is between B and D. \nE is at the end. \nIn E-A-B-C-D, B is the middle person."
  },
  {
    id: 2,
    text: "Six people P, Q, R, S, T, U are sitting in a circle facing the center. P is opposite to R. Q is to the immediate right of P. S is between R and Q. Who is to the immediate left of P?",
    options: [
      { id: "A", text: "T" },
      { id: "B", text: "U" },
      { id: "C", text: "T or U" },
      { id: "D", text: "S" }
    ],
    answer: "C",
    explanation: "P is at 12 o'clock, R is at 6 o'clock. Q is right of P (1 o'clock). S is between R and Q. Remaining are T and U who must be at 10 and 11 o'clock. Immediate left of P at 12 o'clock could be either T or U.",
    explanationImage: "/images/practice/reasoning/seating_arrangement.svg"
  },
  {
    id: 3,
    text: "A, B, C, D are sitting around a square table facing center. One person at each side. B is to the right of A. C is to the left of D. Who is opposite to B?",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "C" },
      { id: "C", text: "D" },
      { id: "D", text: "Data Inadequate" }
    ],
    answer: "C",
    explanation: "If A is at Bottom, B is at Right. If D is at Top, C is at Left. B and C are adjacent, A and D are adjacent. D is opposite to B."
  },
  {
    id: 4,
    text: "Seven girls G1, G2, G3, G4, G5, G6, G7 are sitting in a row facing East. G3 is to the immediate right of G4. G2 is at an extreme end and has G6 as her neighbor. G5 is between G6 and G7. G4 is sitting third from the south end. Who are at the extreme ends?",
    options: [
      { id: "A", text: "G2, G7" },
      { id: "B", text: "G2, G1" },
      { id: "C", text: "G3, G1" },
      { id: "D", text: "G2, G3" }
    ],
    answer: "B",
    explanation: "North to South: G2, G6, G5, G7, G4, G3, G1. G2 is at North end. G1 must be at South end."
  },
  {
    id: 5,
    text: "In a circle of 4 people, if Sam is to the left of Tom, and Pete is opposite Sam, where is Joe?",
    options: [
      { id: "A", text: "To the right of Sam" },
      { id: "B", text: "Opposite Tom" },
      { id: "C", text: "Between Sam and Pete" },
      { id: "D", text: "Sam's neighbor" }
    ],
    answer: "B",
    explanation: "Sam is at 9 o'clock, Tom is at 6 o'clock (since Sam is left of Tom). Pete is opposite Sam (3 o'clock). Joe must be at 12 o'clock, which is opposite Tom."
  }
];
