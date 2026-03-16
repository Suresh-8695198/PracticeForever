export const questions = [
  {
    id: 1,
    text: "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
    options: [
      { id: "A", text: "10/21" },
      { id: "B", text: "11/21" },
      { id: "C", text: "2/7" },
      { id: "D", text: "5/7" }
    ],
    answer: "A",
    explanation: "Total balls = 2+3+2 = 7. \nNumber of ways to draw 2 balls = 7C2 = (7×6)/(2×1) = 21. \nNumber of ways to draw 2 balls from non-blue balls(2 red + 3 green = 5) = 5C2 = (5×4)/(2×1) = 10. \nProbability = 10/21."
  }
];
