export const questions = [
  {
    "id": 1,
    "text": "A shopkeeper originally marked the price of the article at 40% above its cost price and sold it after offering two consecutive discounts of 10% and 15% respectively. Had he marked the price of the article at Rs.800 above its cost price and offers a single discount of 12% and he would have earned Rs.169.20 more. Then find the cost price of the article?",
    "options": [
      { "id": "A", "text": "Rs.3000" },
      { "id": "B", "text": "Rs.2800" },
      { "id": "C", "text": "Rs.3200" },
      { "id": "D", "text": "Rs.3600" }
    ],
    "answer": "B",
    "explanation": "Let the cost price of the article = 100x\nMarked price = 140x\nSelling price 1 = 140x * 0.90 * 0.85 = 107.10x\n\nCase 2: Marked price = 100x + 800\nSelling price 2 = (100x + 800) * 0.88 = 88x + 704\n\nDifference in earnings = SP2 - SP1 = (88x + 704) - 107.10x = 169.20\nNote: The question says 'earned 169.20 more', so SP2 - Profit1 = ... wait, let's look at the provided logic:\n88x + 704 – 107.10x = 169.20 actually implies a negative x if SP1 > SP2. \nLet's re-read the explanation: 19.10x = 534.80 => x = 28.\nThis comes from (107.10x + 169.20) = 88x + 704 => 704 - 169.20 = 107.10x - 88x => 534.80 = 19.1x\nCost price = 100 * 28 = Rs.2800"
  },
  {
    "id": 2,
    "text": "A person marks up a watch by 60%, then gives a discount of Rs. 70 and makes a profit of 25%. Find the discount price of the watch, if it is sold at 32% profit and the mark up percentage is the same?",
    "options": [
      { "id": "A", "text": "72" },
      { "id": "B", "text": "62" },
      { "id": "C", "text": "55" },
      { "id": "D", "text": "56" }
    ],
    "answer": "D",
    "explanation": "Let CP = 100x.\nMP = 160x. SP = 160x - 70.\nProfit = 25% => 125x = 160x - 70 => 35x = 70 => x = 2.\nCP = 200, MP = 320.\nCase 2: Sold at 32% profit. SP = 200 * 1.32 = 264.\nMarkup % is same (60%) so MP = 320.\nDiscount price = MP - SP = 320 - 264 = 56."
  },
  {
    "id": 3,
    "text": "The selling price of 8 chairs is equal to the cost price of 10 chairs. If each chair is sold at a profit of 10% and the selling price of 8 chairs is Rs.1760, then find the actual selling price of each chair?",
    "options": [
      { "id": "A", "text": "Rs.240" },
      { "id": "B", "text": "Rs.400" },
      { "id": "C", "text": "Rs.250" },
      { "id": "D", "text": "Rs.300" }
    ],
    "answer": "C",
    "explanation": "Selling price of 8 chairs = 1760. New SP of each chair = 1760/8 = 220.\nThis SP includes 10% profit. CP of each chair = 220 / 1.1 = 200.\nCP of 10 chairs = 10 * 200 = 2000.\nActual SP of 8 chairs = CP of 10 chairs = 2000.\nActual SP of each chair = 2000 / 8 = 250."
  },
  {
    "id": 4,
    "text": "Indhu bought a mobile and a laptop together for Rs.12000. If she sold the laptop at a loss of 10% and the mobile sold at a profit of 20%, then she gets an overall profit of Rs.300. Find the cost price of mobile?",
    "options": [
      { "id": "A", "text": "Rs.6000" },
      { "id": "B", "text": "Rs.3000" },
      { "id": "C", "text": "Rs.7000" },
      { "id": "D", "text": "Rs.5000" }
    ],
    "answer": "D",
    "explanation": "Let CP of mobile = x, CP of laptop = 12000 - x.\nProfit from mobile = 0.20x\nLoss from laptop = 0.10(12000 - x)\nOverall profit = 0.20x - (1200 - 0.10x) = 300\n0.30x - 1200 = 300\n0.30x = 1500 => x = 5000.\nCP of mobile = Rs.5000."
  },
  {
    "id": 5,
    "text": "The ratio of the marked price to the cost price of the book is 7:5 and the shopkeeper offers a discount of 25% on its marked price. If the customer pays 1/7th of the discount amount as tax, then find the profit percentage of the book.",
    "options": [
      { "id": "A", "text": "10%" },
      { "id": "B", "text": "9%" },
      { "id": "C", "text": "12%" },
      { "id": "D", "text": "5%" }
    ],
    "answer": "A",
    "explanation": "Let CP = 5x, MP = 7x.\nDiscount = 25% of 7x = 1.75x.\nRevised SP (with tax) = (MP - Discount) + (1/7 * Discount)\nSP = (7x - 1.75x) + (1/7 * 1.75x)\nSP = 5.25x + 0.25x = 5.5x.\nProfit = SP - CP = 5.5x - 5x = 0.5x.\nProfit % = (0.5x / 5x) * 100 = 10%."
  },
  {
    "id": 6,
    "text": "The average cost price of the 32 plastic chairs is Rs.250. If he bought a wooden chair for Rs.1000 and two steel chairs together for Rs.x, then the average cost price of all chairs is increased by Rs.50. Find the value of x.",
    "options": [
      { "id": "A", "text": "1200" },
      { "id": "B", "text": "1600" },
      { "id": "C", "text": "1000" },
      { "id": "D", "text": "1500" }
    ],
    "answer": "D",
    "explanation": "Initial total CP = 32 * 250 = 8000.\nTotal chairs = 32 + 1 (wooden) + 2 (steel) = 35.\nNew average = 250 + 50 = 300.\nNew total CP = 35 * 300 = 10500.\nx = New total - (Initial total + Wooden chair)\nx = 10500 - (8000 + 1000) = 10500 - 9000 = 1500."
  },
  {
    "id": 7,
    "text": "A bought a phone for a certain cost and he sold it to B at a profit of x% and B sold it to C at a loss of (x – 4)%. If the ratio of the amount paid by B to the amount paid by C is 25:21, then find the value of x?",
    "options": [
      { "id": "A", "text": "30" },
      { "id": "B", "text": "20" },
      { "id": "C", "text": "25" },
      { "id": "D", "text": "15" }
    ],
    "answer": "B",
    "explanation": "Amount paid by B = CP for B.\nAmount paid by C = CP for C = CP for B * (100 - (x-4))/100.\nRatio B/C = CP_B / [CP_B * (104 - x)/100] = 25/21\n100 / (104 - x) = 25 / 21\n2100 = 2500 - 25x\n25x = 400 => x = 16? \nWait, let's re-calculate: 25 * 104 = 2600.\n2100 = 2600 - 25x => 25x = 500 => x = 20."
  },
  {
    "id": 8,
    "text": "A shopkeeper bought two dozen oranges for Rs.360. The shopkeeper gave a discount of 20% and he need to make a 20% profit. Find the marked price is how much percentage more than the selling price?",
    "options": [
      { "id": "A", "text": "12.5% less" },
      { "id": "B", "text": "33.3% more" },
      { "id": "C", "text": "25% more" },
      { "id": "D", "text": "10% less" }
    ],
    "answer": "C",
    "explanation": "CP = 360. Profit = 20% => SP = 360 * 1.2 = 432.\nDiscount = 20% on MP => SP = 0.8 * MP => 432 = 0.8 * MP => MP = 540.\nDifference (MP - SP) = 540 - 432 = 108.\nPercentage more = (108 / 432) * 100 = 25%."
  },
  {
    "id": 9,
    "text": "Rani bought 200 bags and he sold a certain bags at a profit of 10% and the remaining bags sold at a profit of 20%. If he gets an overall profit of 12.5%, then find the ratio of the number of bags sold at a profit of 10% to the number of bags sold at a profit of 20%?",
    "options": [
      { "id": "A", "text": "3:1" },
      { "id": "B", "text": "1:1" },
      { "id": "C", "text": "5:3" },
      { "id": "D", "text": "1:2" }
    ],
    "answer": "A",
    "explanation": "Using Alligation Method:\nProfit 1: 10%, Profit 2: 20%, Mean Profit: 12.5%\nRatio = (20 - 12.5) : (12.5 - 10) = 7.5 : 2.5 = 3 : 1."
  },
  {
    "id": 10,
    "text": "Jaya bought a hair dryer for Rs.x and she sold it to Prabhu at a profit of 10%. Prabhu sold it to Keerthi at a loss of 10% and Keerthi sold it to Preethi at a profit of 20% and the amount paid by Preethi is Rs.(x + 470). Find the amount paid by Jaya.",
    "options": [
      { "id": "A", "text": "Rs.4000" },
      { "id": "B", "text": "Rs.2800" },
      { "id": "C", "text": "Rs.2500" },
      { "id": "D", "text": "Rs.3000" }
    ],
    "answer": "C",
    "explanation": "Final price = x * 1.1 * 0.9 * 1.2 = x * 1.188.\nGiven: 1.188x = x + 470\n0.188x = 470\nx = 470 / 0.188 = 2500.\nAmount paid by Jaya = Rs.2500."
  }
];
