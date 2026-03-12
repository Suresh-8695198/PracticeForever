export const questions = [
  {
    "id": 1,
    "text": "What is the effective discount (in %) on two successive discounts of 20% and 10%?",
    "options": [
      { "id": "a", "text": "28%" },
      { "id": "b", "text": "24%" },
      { "id": "c", "text": "32%" },
      { "id": "d", "text": "30%" }
    ],
    "answer": "a",
    "explanation": "Effective Discount = (x + y - xy/100)%\n= (20 + 10 - (20*10)/100)% = (30 - 2)% = 28%."
  },
  {
    "id": 2,
    "text": "At a 10% discount, the selling price of an article is Rs. 900. What is the selling price if the discount is 27.5%?",
    "options": [
      { "id": "a", "text": "Rs. 780" },
      { "id": "b", "text": "Rs. 725" },
      { "id": "c", "text": "Rs. 800" },
      { "id": "d", "text": "Rs. 425" }
    ],
    "answer": "b",
    "explanation": "Marked Price (MP) = 900 / (1 - 0.10) = 900 / 0.9 = Rs. 1000.\nSelling Price at 27.5% discount = 1000 * (1 - 0.275) = 1000 * 0.725 = Rs. 725."
  },
  {
    "id": 3,
    "text": "If the selling price of an item is Rs. 2475 after a discount of 25%, what was its marked price?",
    "options": [
      { "id": "a", "text": "Rs. 3300" },
      { "id": "b", "text": "Rs. 1818" },
      { "id": "c", "text": "Rs. 1427" },
      { "id": "d", "text": "Rs. 1118" }
    ],
    "answer": "a",
    "explanation": "Selling Price (SP) = 75% of Marked Price (MP).\nMP = SP / 0.75 = 2475 / 0.75 = Rs. 3300."
  },
  {
    "id": 6,
    "text": "An article is marked up by 120% above its cost price 'x'. It is sold at Rs. 704 after a 20% discount. What is the value of x?",
    "options": [
      { "id": "a", "text": "Rs. 570" },
      { "id": "b", "text": "Rs. 700" },
      { "id": "c", "text": "Rs. 380" },
      { "id": "d", "text": "Rs. 400" }
    ],
    "answer": "d",
    "explanation": "MP = x + 1.2x = 2.2x.\nSP = 80% of MP = 0.8 * 2.2x = 1.76x.\n1.76x = 704 => x = 704 / 1.76 = Rs. 400."
  },
  {
    "id": 7,
    "text": "If 1 book is offered free on purchase of 3 books, what is the effective discount percentage?",
    "options": [
      { "id": "a", "text": "25%" },
      { "id": "b", "text": "33.33%" },
      { "id": "c", "text": "20%" },
      { "id": "d", "text": "50%" }
    ],
    "answer": "a",
    "explanation": "Total items received = 3 + 1 = 4. Free items = 1.\nDiscount% = (Free / Total) * 100 = (1 / 4) * 100 = 25%."
  },
  {
    "id": 16,
    "text": "A shopkeeper sells a book at a 20% discount and earns a 60% profit. If he sells it at a 40% discount, what will be his new profit percentage?",
    "options": [
      { "id": "a", "text": "20%" },
      { "id": "b", "text": "50%" },
      { "id": "c", "text": "55%" },
      { "id": "d", "text": "30%" }
    ],
    "answer": "a",
    "explanation": "Let MP = 100. SP = 80. Profit = 60%, so 1.6*CP = 80 => CP = 50.\nNew SP at 40% discount = 60.\nNew Profit% = [(60 - 50)/50] * 100 = (10/50) * 100 = 20%."
  },
  {
    "id": 17,
    "text": "The marked price of a chair set is Rs. 2400. It is sold for Rs. 1836 after two successive discounts. If the first discount is 10%, find the second discount.",
    "options": [
      { "id": "a", "text": "17%" },
      { "id": "b", "text": "12%" },
      { "id": "c", "text": "15%" },
      { "id": "d", "text": "11%" }
    ],
    "answer": "c",
    "explanation": "Price after 1st discount (10%) = 2400 - 240 = 2160.\nFinal SP = 1836. Second Discount Amount = 2160 - 1836 = 324.\nSecond Discount% = (324 / 2160) * 100 = 15%."
  },
  {
    "id": 23,
    "text": "A shopkeeper allows a 25% discount on the marked price and suffers a loss of 15%. What will be the profit percent if the article is sold at the marked price?",
    "options": [
      { "id": "a", "text": "9.77%" },
      { "id": "b", "text": "11.12%" },
      { "id": "c", "text": "13.33%" },
      { "id": "d", "text": "11.22%" }
    ],
    "answer": "c",
    "explanation": "Let MP = 100. SP = 75. Loss = 15%, so 0.85*CP = 75 => CP = 75/0.85 = 88.235.\nIf sold at MP (100):\nProfit = 100 - 88.235 = 11.765.\nProfit% = (11.765 / 88.235) * 100 ≈ 13.33%."
  },
  {
    "id": 25,
    "text": "What is the net discount percentage for three successive discounts of 20%, 10%, and 30%?",
    "options": [
      { "id": "a", "text": "35.1%" },
      { "id": "b", "text": "49.6%" },
      { "id": "c", "text": "24.1%" },
      { "id": "d", "text": "60.4%" }
    ],
    "answer": "b",
    "explanation": "Successive discount sequence: 100 -> 80 (20% off) -> 72 (10% off of 80) -> 50.4 (30% off of 72).\nNet Discount = 100 - 50.4 = 49.6%."
  },
  {
    "id": 28,
    "text": "The marked price of a mobile is 40% more than its cost price. If a 15% discount is given on the marked price, what is the profit percentage?",
    "options": [
      { "id": "a", "text": "20%" },
      { "id": "b", "text": "17%" },
      { "id": "c", "text": "13%" },
      { "id": "d", "text": "19%" }
    ],
    "answer": "d",
    "explanation": "Let CP = 100. MP = 140.\nDiscount = 15% of 140 = 21.\nSP = 140 - 21 = 119.\nProfit% = 119 - 100 = 19%."
  },
  {
    "id": 41,
    "text": "A shopkeeper professes to sell things at a 20% discount but increases the price of each article by 50% relative to Cost Price. What is his gain?",
    "options": [
      { "id": "a", "text": "26%" },
      { "id": "b", "text": "20%" },
      { "id": "c", "text": "17%" },
      { "id": "d", "text": "19%" }
    ],
    "answer": "b",
    "explanation": "Let CP = 100. Marked Price = 150 (50% increase).\nSP = 80% (discount 20%) of 150 = 120.\nGain% = (120 - 100) = 20%."
  },
  {
    "id": 48,
    "text": "A shopkeeper sold an article for Rs. 360 making a 20% profit. He offered a discount of Rs. 60 on the marked price. By what percent was the article marked above the cost price?",
    "options": [
      { "id": "a", "text": "35%" },
      { "id": "b", "text": "33.5%" },
      { "id": "c", "text": "40%" },
      { "id": "d", "text": "25.75%" }
    ],
    "answer": "c",
    "explanation": "SP = 360. Profit = 20%, so CP = 360 / 1.2 = 300.\nDiscount = 60. MP = SP + Discount = 360 + 60 = 420.\nMarkup = 420 - 300 = 120.\nMarkup% = (120 / 300) * 100 = 40%."
  },
  {
    "id": 50,
    "text": "Find the net discount for three successive discounts of 20%, 30%, and 40%.",
    "options": [
      { "id": "a", "text": "80%" },
      { "id": "b", "text": "87.6%" },
      { "id": "c", "text": "90%" },
      { "id": "d", "text": "66.4%" }
    ],
    "answer": "d",
    "explanation": "Effective Price = 100 * (0.8) * (0.7) * (0.6) = 100 * 0.336 = 33.6.\nNet Discount = 100 - 33.6 = 66.4%."
  }
];
