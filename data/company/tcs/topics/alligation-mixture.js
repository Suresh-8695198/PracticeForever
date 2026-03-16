export const questions = [
  {
    id: 1,
    text: "In what ratio must a grocer mix two varieties of tea worth ₹60 per kg and ₹65 per kg so that by selling the mixture at ₹68.20 per kg he may gain 10%?",
    options: [
      { id: "A", text: "3:2" },
      { id: "B", text: "3:4" },
      { id: "C", text: "3:5" },
      { id: "D", text: "4:5" }
    ],
    answer: "A",
    explanation: "S.P. = 68.20, Gain = 10%. \nC.P. of mixture = (100/110) × 68.20 = ₹62. \nUsing Alligation: \nVariety 1 (60) Variety 2 (65) \n Mixture (62) \n (65-62) = 3 (62-60) = 2 \nRatio = 3:2."
  },
  {
    id: 2,
    text: "A mixture contains milk and water in the ratio 5:1. On adding 5 liters of water, the ratio of milk to water becomes 5:2. The quantity of milk in the mixture is:",
    options: [
      { id: "A", text: "16 liters" },
      { id: "B", text: "25 liters" },
      { id: "C", text: "22.5 liters" },
      { id: "D", text: "20 liters" }
    ],
    answer: "B",
    explanation: "Let milk = 5x, water = x. \nAdded water: 5x / (x+5) = 5/2 \n10x = 5x + 25 \n5x = 25 -> x = 5. \nMilk = 5x = 25 liters."
  },
  {
    id: 3,
    text: "How many kilograms of sugar costing ₹9 per kg must be mixed with 27 kg of sugar costing ₹7 per kg so that there may be a gain of 10% by selling the mixture at ₹9.24 per kg?",
    options: [
      { id: "A", text: "36 kg" },
      { id: "B", text: "42 kg" },
      { id: "C", text: "54 kg" },
      { id: "D", text: "63 kg" }
    ],
    answer: "D",
    explanation: "S.P. = 9.24. Gain = 10%. C.P. of mixture = 100/110 * 9.24 = ₹8.40. \nVariety 1 (9.00) Variety 2 (7.00) \n Mixture (8.40) \n (8.4-7) = 1.4 (9-8.4) = 0.6 \nRatio = 1.4 : 0.6 = 7 : 3. \nVariety 2 is 27kg. 3 parts = 27 kg -> 1 part = 9 kg. \nVariety 1 (Sugar at ₹9) = 7 parts = 7 * 9 = 63 kg."
  }
];
