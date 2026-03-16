export const questions = [
  {
    id: 1,
    text: "A speaks truth in 75% of cases and B in 80% of cases. In what percentage of cases are they likely to contradict each other, narrating the same incident?",
    options: [
      { id: "A", text: "30%" },
      { id: "B", text: "35%" },
      { id: "C", text: "40%" },
      { id: "D", text: "45%" }
    ],
    answer: "B",
    explanation: "P(A speaks truth) = 3/4, P(A lies) = 1/4. \nP(B speaks truth) = 4/5, P(B lies) = 1/5. \nThey contradict if (A truth, B lie) or (A lie, B truth). \n= (3/4 * 1/5) + (1/4 * 4/5) = 3/20 + 4/20 = 7/20. \nPercentage = (7/20) * 100 = 35%."
  },
  {
    id: 2,
    text: "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
    options: [
      { id: "A", text: "1/2" },
      { id: "B", text: "3/4" },
      { id: "C", text: "3/8" },
      { id: "D", text: "5/16" }
    ],
    answer: "B",
    explanation: "Product is even unless both numbers are odd. \nP(Odd on one die) = 3/6 = 1/2. \nP(Odd on both dice) = 1/2 * 1/2 = 1/4. \nP(Product is even) = 1 - 1/4 = 3/4."
  },
  {
    id: 3,
    text: "Three groups of children contain 3 girls and 1 boy, 2 girls and 2 boys, 1 girl and 3 boys respectively. One child is selected at random from each group. What is the probability that the three selected consist of 1 girl and 2 boys?",
    options: [
      { id: "A", text: "13/32" },
      { id: "B", text: "21/32" },
      { id: "C", text: "1/4" },
      { id: "D", text: "3/8" }
    ],
    answer: "A",
    explanation: "Group 1: G(3/4), B(1/4); Group 2: G(1/2), B(1/2); Group 3: G(1/4), B(3/4). \nCombinations for 1G, 2B: \n1. G1, B2, B3 = 3/4 * 1/2 * 3/4 = 9/32 \n2. B1, G2, B3 = 1/4 * 1/2 * 3/4 = 3/32 \n3. B1, B2, G3 = 1/4 * 1/2 * 1/4 = 1/32 \nTotal Probability = 9/32 + 3/32 + 1/32 = 13/32."
  },
  {
    id: 4,
    text: "In a class, 30% of students study Hindi, 45% study Psychology and 15% study both. if a student is chosen at random, what is the probability that the student studies Hindi or Psychology?",
    options: [
      { id: "A", text: "0.55" },
      { id: "B", text: "0.60" },
      { id: "C", text: "0.65" },
      { id: "D", text: "0.75" }
    ],
    answer: "B",
    explanation: "P(H) = 0.30, P(P) = 0.45, P(H ∩ P) = 0.15. \nP(H ∪ P) = P(H) + P(P) - P(H ∩ P) \n= 0.30 + 0.45 - 0.15 = 0.60."
  },
  {
    id: 5,
    text: "What is the probability that a leap year contains 53 Sundays?",
    options: [
      { id: "A", text: "1/7" },
      { id: "B", text: "2/7" },
      { id: "C", text: "53/366" },
      { id: "D", text: "7/366" }
    ],
    answer: "B",
    explanation: "A leap year has 366 days = 52 weeks + 2 days. \nThese 2 days can be (Mon, Tue), (Tue, Wed), (Wed, Thu), (Thu, Fri), (Fri, Sat), (Sat, Sun), (Sun, Mon). \nTotal outcomes = 7. Favorable outcomes (Sun) = 2 (Sat-Sun, Sun-Mon). \nProbability = 2/7."
  },
  {
    id: 6,
    text: "A bag contains 6 black and 8 white balls. One ball is drawn at random. What is the probability that the ball drawn is white?",
    options: [
      { id: "A", text: "3/7" },
      { id: "B", text: "4/7" },
      { id: "C", text: "1/8" },
      { id: "D", text: "3/4" }
    ],
    answer: "B",
    explanation: "Total balls = 6 + 8 = 14. \nWhite balls = 8. \nProbability = 8/14 = 4/7."
  },
  {
    id: 7,
    text: "Three coins are tossed. What is the probability of getting at most two heads?",
    options: [
      { id: "A", text: "3/4" },
      { id: "B", text: "7/8" },
      { id: "C", text: "1/2" },
      { id: "D", text: "3/8" }
    ],
    answer: "B",
    explanation: "Total outcomes = 2³ = 8. \n'At most two heads' means all outcomes EXCEPT three heads (HHH). \nFavorable outcomes = 8 - 1 = 7. \nProbability = 7/8."
  },
  {
    id: 8,
    text: "In a box, there are 10 bulbs of which 3 are defective. If 2 bulbs are chosen at random, find the probability that none of them is defective.",
    options: [
      { id: "A", text: "7/15" },
      { id: "B", text: "21/45" },
      { id: "C", text: "7/10" },
      { id: "D", text: "Both A and B" }
    ],
    answer: "D",
    explanation: "Total ways to choose 2 bulbs = 10C2 = (10*9)/(2*1) = 45. \nWays to choose 2 non-defective bulbs (from 7) = 7C2 = (7*6)/(2*1) = 21. \nProbability = 21/45 = 7/15."
  },
  {
    id: 9,
    text: "A card is drawn from a pack of 52 cards. The probability that it is a king or a spade is:",
    options: [
      { id: "A", text: "4/13" },
      { id: "B", text: "17/52" },
      { id: "C", text: "1/4" },
      { id: "D", text: "1/52" }
    ],
    answer: "A",
    explanation: "P(King) = 4/52. P(Spade) = 13/52. \nKing of Spades is counted twice. P(King ∩ Spade) = 1/52. \nP(King ∪ Spade) = P(K) + P(S) - P(K ∩ S) \n= 4/52 + 13/52 - 1/52 = 16/52 = 4/13."
  },
  {
    id: 10,
    text: "The probability that a person will hit a target is 1/4. If he shoots 4 times, what is the probability that he hits the target at least once?",
    options: [
      { id: "A", text: "1/256" },
      { id: "B", text: "81/256" },
      { id: "C", text: "175/256" },
      { id: "D", text: "91/256" }
    ],
    answer: "C",
    explanation: "P(Hit) = 1/4. P(Miss) = 3/4. \nP(Miss all 4 times) = (3/4)⁴ = 81/256. \nP(At least one hit) = 1 - P(Miss all) \n= 1 - 81/256 = 175/256."
  }
];
