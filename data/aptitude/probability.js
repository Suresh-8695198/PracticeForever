export const questions = [
  {
    "id": 1,
    "text": "There are 15 boys and 10 girls in a class. If three students are selected at random, what is the probability that 1 girl and 2 boys are selected?",
    "options": [
      { "id": "A", "text": "1/40" },
      { "id": "B", "text": "1/2" },
      { "id": "C", "text": "21/46" },
      { "id": "D", "text": "7/41" }
    ],
    "answer": "C",
    "explanation": "Total ways to select 3 students from 25 = 25C3 = 2300.\nWays to select 1 girl from 10 = 10C1 = 10.\nWays to select 2 boys from 15 = 15C2 = 105.\nFavorable ways = 10 * 105 = 1050.\nProbability = 1050 / 2300 = 21/46."
  },
  {
    "id": 2,
    "text": "Two friends Harish and Kalyan appeared for an exam. Let A be the event that Harish is selected and B is the event that Kalyan is selected. The probability of A is 2/5 and that of B is 3/7. Find the probability that both of them are selected.",
    "options": [
      { "id": "A", "text": "35/36" },
      { "id": "B", "text": "5/35" },
      { "id": "C", "text": "5/12" },
      { "id": "D", "text": "6/35" }
    ],
    "answer": "D",
    "explanation": "P(A) = 2/5, P(B) = 3/7.\nSince these are independent events, the probability that both are selected = P(A) * P(B) = (2/5) * (3/7) = 6/35."
  },
  {
    "id": 3,
    "text": "A card is drawn from a well shuffled pack of 52 cards. What is the probability of getting a queen or a club card?",
    "options": [
      { "id": "A", "text": "17/52" },
      { "id": "B", "text": "15/52" },
      { "id": "C", "text": "4/13" },
      { "id": "D", "text": "3/13" }
    ],
    "answer": "C",
    "explanation": "Total cards = 52.\nNumber of Queen cards = 4.\nNumber of Club cards = 13.\nOne card is both a Queen and a Club (Queen of Clubs).\nFavorable outcomes = 4 + 13 - 1 = 16.\nProbability = 16/52 = 4/13."
  },
  {
    "id": 4,
    "text": "16 persons shake hands with one another in a party. How many handshakes took place?",
    "options": [
      { "id": "A", "text": "124" },
      { "id": "B", "text": "120" },
      { "id": "C", "text": "165" },
      { "id": "D", "text": "150" }
    ],
    "answer": "B",
    "explanation": "A handshake occurs between exactly two people.\nNumber of handshakes = 16C2 = (16 * 15) / (2 * 1) = 120."
  },
  {
    "id": 5,
    "text": "Srinaya forgot the last digit of an 11-digit landline number. If she randomly dials the final 2 digits after correctly dialing the first nine, then what is the chance of dialing the correct number?",
    "options": [
      { "id": "A", "text": "1/10" },
      { "id": "B", "text": "1/100" },
      { "id": "C", "text": "1/1000" },
      { "id": "D", "text": "1/11" }
    ],
    "answer": "B",
    "explanation": "Each of the last two digits can be any of the 10 digits (0-9).\nTotal possible combinations for the last two digits = 10 * 10 = 100.\nOnly 1 combination is correct.\nProbability = 1/100."
  },
  {
    "id": 6,
    "text": "A bag contains 6 pink and 5 yellow balls. One ball is drawn randomly. What is the probability that the ball drawn is Pink?",
    "options": [
      { "id": "A", "text": "5/11" },
      { "id": "B", "text": "1/2" },
      { "id": "C", "text": "3/11" },
      { "id": "D", "text": "6/11" }
    ],
    "answer": "D",
    "explanation": "Total balls = 6 + 5 = 11.\nNumber of Pink balls = 6.\nProbability = 6/11."
  },
  {
    "id": 7,
    "text": "Two dice are thrown simultaneously. What is the probability that the sum of the numbers on the faces is divisible by either 3 or 5?",
    "options": [
      { "id": "A", "text": "7/36" },
      { "id": "B", "text": "19/36" },
      { "id": "C", "text": "9/36" },
      { "id": "D", "text": "2/7" }
    ],
    "answer": "B",
    "explanation": "Total outcomes = 6 * 6 = 36.\nSums divisible by 3: 3, 6, 9, 12. Outcomes: (1,2),(2,1),(1,5),(5,1),(2,4),(4,2),(3,3),(3,6),(6,3),(4,5),(5,4),(6,6) - 12 outcomes.\nSums divisible by 5: 5, 10. Outcomes: (1,4),(4,1),(2,3),(3,2),(4,6),(6,4),(5,5) - 7 outcomes.\n(Note: No overlap as no sum between 2-12 is divisible by both 3 and 5 except possibly 15, which isn't possible).\nTotal favorable = 12 + 7 = 19.\nProbability = 19/36."
  },
  {
    "id": 8,
    "text": "Two cards are drawn from a pack of 52 cards. What is the probability that both are kings, when the first drawn card is replaced?",
    "options": [
      { "id": "A", "text": "1/169" },
      { "id": "B", "text": "3/13" },
      { "id": "C", "text": "3/676" },
      { "id": "D", "text": "4/676" }
    ],
    "answer": "A",
    "explanation": "Probability of first card being a King = 4/52 = 1/13.\nSince the card is replaced, the probability of the second card being a King is also 4/52 = 1/13.\nProbability = (1/13) * (1/13) = 1/169."
  },
  {
    "id": 9,
    "text": "From a pack of 52 cards, one card is drawn at random. What is the probability that the card drawn is a six or a diamond?",
    "options": [
      { "id": "A", "text": "17/52" },
      { "id": "B", "text": "4/13" },
      { "id": "C", "text": "9/52" },
      { "id": "D", "text": "3/13" }
    ],
    "answer": "B",
    "explanation": "Number of Sixes = 4.\nNumber of Diamond cards = 13.\nOverlap (Six of Diamonds) = 1.\nFavorable = 4 + 13 - 1 = 16.\nProbability = 16/52 = 4/13."
  },
  {
    "id": 10,
    "text": "A bag contains 5 yellow dice, 2 green dice, and 3 red dice. If one dice is chosen at random, what is the probability that it is either yellow or red color?",
    "options": [
      { "id": "A", "text": "3/4" },
      { "id": "B", "text": "4/5" },
      { "id": "C", "text": "3/10" },
      { "id": "D", "text": "7/10" }
    ],
    "answer": "B",
    "explanation": "Total dice = 5 + 2 + 3 = 10.\nNumber of yellow or red dice = 5 + 3 = 8.\nProbability = 8/10 = 4/5."
  },
  {
    "id": 11,
    "text": "An integer is chosen at random from the first fifty integers (1-50). What is the probability that the integer chosen is a prime or a multiple of 4?",
    "options": [
      { "id": "A", "text": "14/25" },
      { "id": "B", "text": "3/5" },
      { "id": "C", "text": "3/5" },
      { "id": "D", "text": "27/50" }
    ],
    "answer": "D",
    "explanation": "Primes between 1-50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (Total 15).\nMultiples of 4 between 1-50: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48 (Total 12).\nThere is no overlap (all primes except 2 are odd, and 2 is not a multiple of 4).\nTotal favorable = 15 + 12 = 27.\nProbability = 27/50."
  },
  {
    "id": 12,
    "text": "Two cards are drawn together at random from a pack of 52 cards. What is the probability of both cards being jacks?",
    "options": [
      { "id": "A", "text": "25/57" },
      { "id": "B", "text": "53/256" },
      { "id": "C", "text": "4/221" },
      { "id": "D", "text": "1/221" }
    ],
    "answer": "D",
    "explanation": "Total outcomes = 52C2 = (52 * 51) / 2 = 1326.\nWays to pick 2 Jacks from 4 = 4C2 = 6.\nProbability = 6 / 1326 = 1/221."
  },
  {
    "id": 13,
    "text": "Tickets numbered 1 to 40 are in a bag and one ticket is drawn at random. What is the probability that the ticket drawn is a multiple of 3 or 7?",
    "options": [
      { "id": "A", "text": "15/30" },
      { "id": "B", "text": "16/40" },
      { "id": "C", "text": "17/40" },
      { "id": "D", "text": "18/40" }
    ],
    "answer": "C",
    "explanation": "Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39 (Total 13).\nMultiples of 7: 7, 14, 21, 28, 35 (Total 5).\nOverlap: 21 (Total 1).\nFavorable = 13 + 5 - 1 = 17.\nProbability = 17/40."
  },
  {
    "id": 16,
    "text": "Bag A contains 3 green and 7 blue balls, while bag B contains 10 green and 5 blue balls. If one ball is drawn from each bag, what is the probability that both are green?",
    "options": [
      { "id": "A", "text": "29/30" },
      { "id": "B", "text": "1/5" },
      { "id": "C", "text": "3/15" },
      { "id": "D", "text": "1/30" }
    ],
    "answer": "B",
    "explanation": "P(Green from A) = 3/10.\nP(Green from B) = 10/15 = 2/3.\nP(Both Green) = (3/10) * (2/3) = 6/30 = 1/5."
  },
  {
    "id": 17,
    "text": "A basket contains x black, 4 red, and 5 green balls. One ball is taken randomly. If the probability of getting a green ball is 1/3, find the total number of balls in the basket.",
    "options": [
      { "id": "A", "text": "12" },
      { "id": "B", "text": "14" },
      { "id": "C", "text": "15" },
      { "id": "D", "text": "18" }
    ],
    "answer": "C",
    "explanation": "Total balls = x + 4 + 5 = x + 9.\nNumber of green balls = 5.\nProbability = 5 / (x + 9) = 1/3.\n15 = x + 9 => x = 6.\nTotal balls = 6 + 9 = 15."
  },
  {
    "id": 19,
    "text": "When 4 fair coins are tossed together, what is the probability of getting at least 3 heads?",
    "options": [
      { "id": "A", "text": "1/4" },
      { "id": "B", "text": "3/4" },
      { "id": "C", "text": "5/16" },
      { "id": "D", "text": "3/8" }
    ],
    "answer": "C",
    "explanation": "Total outcomes = 2^4 = 16.\nAt least 3 heads = 3 heads or 4 heads.\nWays to get 3 heads = 4C3 = 4.\nWays to get 4 heads = 4C4 = 1.\nFavorable outcomes = 4 + 1 = 5.\nProbability = 5/16."
  },
  {
    "id": 20,
    "text": "Moderate: A number is selected at random from the first 40 natural numbers. What is the chance that it is a multiple of either 4 or 14?",
    "options": [
      { "id": "A", "text": "1/5" },
      { "id": "B", "text": "11/40" },
      { "id": "C", "text": "3/10" },
      { "id": "D", "text": "1/4" }
    ],
    "answer": "B",
    "explanation": "Multiples of 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 (Total 10).\nMultiples of 14: 14, 28 (Total 2).\nOverlap: 28 (Total 1).\nFavorable = 10 + 2 - 1 = 11.\nProbability = 11/40."
  },
  {
    "id": 21,
    "text": "Moderate: A committee has 15 members, of whom 5 are women. What is the probability that a committee of 11 members with at least 3 women is selected?",
    "options": [
      { "id": "A", "text": "11/13" },
      { "id": "B", "text": "14/13" },
      { "id": "C", "text": "12/13" },
      { "id": "D", "text": "6/13" }
    ],
    "answer": "C",
    "explanation": "Sum of P(3W, 8M), P(4W, 7M), P(5W, 6M).\nTotal = 15C11 = 15C4 = 1365.\n(3W, 8M) = 5C3 * 10C8 = 10 * 45 = 450.\n(4W, 7M) = 5C4 * 10C7 = 5 * 120 = 600.\n(5W, 6M) = 5C5 * 10C6 = 1 * 210 = 210.\nFavorable = 450 + 600 + 210 = 1260.\nProbability = 1260 / 1365 = 12 / 13."
  },
  {
    "id": 22,
    "text": "Moderate: A military man can strike a target once in 3 bullets. If he fires 3 bullets in succession, what is the probability that he will strike his target?",
    "options": [
      { "id": "A", "text": "1/3" },
      { "id": "B", "text": "19/27" },
      { "id": "C", "text": "2/3" },
      { "id": "D", "text": "8/27" }
    ],
    "answer": "B",
    "explanation": "P(strike) = 1/3, P(miss) = 2/3.\nP(strike at least once) = 1 - P(misses all).\nP(misses all 3) = (2/3) * (2/3) * (2/3) = 8/27.\nProbability = 1 - 8/27 = 19/27."
  },
  {
    "id": 23,
    "text": "Moderate: Daniel speaks truth in 2/5 cases and Sherin lies in 3/7 cases. In what percentage of cases do they contradict each other in stating a fact?",
    "options": [
      { "id": "A", "text": "72.6%" },
      { "id": "B", "text": "51.4%" },
      { "id": "C", "text": "62.3%" },
      { "id": "D", "text": "47.5%" }
    ],
    "answer": "B",
    "explanation": "P(D_truth) = 2/5, P(D_lie) = 3/5.\nP(S_truth) = 4/7, P(S_lie) = 3/7.\nContradiction: (D truth, S lie) or (D lie, S truth).\nCases = (2/5 * 3/7) + (3/5 * 4/7) = 6/35 + 12/35 = 18/35.\nPercentage = (18/35) * 100 ≈ 51.4%."
  },
  {
    "id": 24,
    "text": "Moderate: A pot contains 5 white and 3 red balls, and another contains 4 white and 6 red. One pot is chosen randomly and a ball is drawn. If the ball is white, what is the probability it came from the first pot?",
    "options": [
      { "id": "A", "text": "5/16" },
      { "id": "B", "text": "41/80" },
      { "id": "C", "text": "25/41" },
      { "id": "D", "text": "1/5" }
    ],
    "answer": "C",
    "explanation": "Bayes' Theorem.\nP(Pot 1) = 1/2, P(Pot 2) = 1/2.\nP(White|Pot 1) = 5/8, P(White|Pot 2) = 4/10 = 2/5.\nProb(White) = (1/2 * 5/8) + (1/2 * 2/5) = 5/16 + 1/5 = (25+16)/80 = 41/80.\nP(Pot 1|White) = (5/16) / (41/80) = (5/16) * (80/41) = 25/41."
  }
];
