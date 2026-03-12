export const theory = [
  {
    "title": "Basic Concepts",
    "image": "/images/aptitude/stocks-shares/concepts.svg",
    "formulas": [
      { "label": "Face Value (F.V.)", "value": "The value printed on the share certificate. Also called Nominal Value (N.V.)." },
      { "label": "Market Value (M.V.)", "value": "The price at which a share is sold or bought in the market." },
      { "label": "Dividend", "value": "The profit distributed by the company among its shareholders. It is always calculated on the Face Value." }
    ]
  },
  {
    "title": "Market Quotations",
    "image": "/images/aptitude/stocks-shares/quotations.svg",
    "formulas": [
      { "label": "At Par", "value": "When Market Value = Face Value." },
      { "label": "At Premium", "value": "When Market Value > Face Value (At a premium or Above par)." },
      { "label": "At Discount", "value": "When Market Value < Face Value (At a discount or Below par)." }
    ]
  },
  {
    "title": "Important Formulas",
    "image": "/images/aptitude/stocks-shares/formulas.svg",
    "formulas": [
      { "label": "Investment", "value": "Number of shares × Market Value of 1 share" },
      { "label": "Annual Income", "value": "Number of shares × Rate of Dividend × Face Value" },
      { "label": "Yield % (Return)", "value": "(Annual Income / Investment) × 100" },
      { "label": "Number of Shares", "value": "Total Investment / M.V. of 1 share" }
    ]
  }
];

export const questions = [
  {
    "id": 1,
    "text": "A man buys Rs. 20 shares paying 9% dividend. The man wants to have an interest of 12% on his money. The market value of each share is:",
    "options": [
      { "id": "A", "text": "12" },
      { "id": "B", "text": "15" },
      { "id": "C", "text": "18" },
      { "id": "D", "text": "20" }
    ],
    "answer": "B",
    "explanation": "Dividend on Rs. 20 = Rs. (9/100) * 20 = Rs. 9/5.\nLet the market value be x.\nInterest on x = 12% of x = (12/100) * x.\nAs per question, (12/100) * x = 9/5\nx = (9/5) * (100/12) = 15.\nTherefore, market value is Rs. 15."
  },
  {
    "id": 2,
    "text": "The cost price of a Rs. 100 stock at 4 discount, when brokerage is 1/4% is:",
    "options": [
      { "id": "A", "text": "Rs. 95.75" },
      { "id": "B", "text": "Rs. 96" },
      { "id": "C", "text": "Rs. 96.25" },
      { "id": "D", "text": "Rs. 104.25" }
    ],
    "answer": "C",
    "explanation": "Face Value = Rs. 100\nDiscount = 4\nBrokerage = 1/4 = 0.25\nCost Price = Face Value - Discount + Brokerage = 100 - 4 + 0.25 = Rs. 96.25."
  },
  {
    "id": 3,
    "text": "In order to obtain an income of Rs. 650 from 10% stock at Rs. 96, one must make an investment of:",
    "options": [
      { "id": "A", "text": "3100" },
      { "id": "B", "text": "6240" },
      { "id": "C", "text": "6500" },
      { "id": "D", "text": "9600" }
    ],
    "answer": "B",
    "explanation": "To obtain Rs. 10, investment = Rs. 96.\nTo obtain Rs. 650, investment = Rs. (96 / 10) * 650 = Rs. 6240."
  },
  {
    "id": 4,
    "text": "A 6% stock yields 8%. The market value of the stock is:",
    "options": [
      { "id": "A", "text": "Rs. 48" },
      { "id": "B", "text": "Rs. 75" },
      { "id": "C", "text": "Rs. 96" },
      { "id": "D", "text": "Rs. 133.33" }
    ],
    "answer": "B",
    "explanation": "For an income of Rs. 8, investment = Rs. 100.\nFor an income of Rs. 6, investment = Rs. (100 / 8) * 6 = Rs. 75.\nMarket value of Rs. 100 stock = Rs. 75."
  },
  {
    "id": 5,
    "text": "A man invested Rs. 4455 in Rs. 10 shares quoted at Rs. 8.25. If the rate of dividend be 12%, his annual income is:",
    "options": [
      { "id": "A", "text": "107.04" },
      { "id": "B", "text": "648" },
      { "id": "C", "text": "500" },
      { "id": "D", "text": "648.60" }
    ],
    "answer": "B",
    "explanation": "Number of shares = 4455 / 8.25 = 540.\nFace value = 540 * 10 = Rs. 5400.\nAnnual income = 12% of Rs. 5400 = (12 / 100) * 5400 = Rs. 648."
  },
  {
    "id": 6,
    "text": "A 12% stock yielding 10% is quoted at:",
    "options": [
      { "id": "A", "text": "67" },
      { "id": "B", "text": "110" },
      { "id": "C", "text": "112" },
      { "id": "D", "text": "120" }
    ],
    "answer": "D",
    "explanation": "To earn Rs. 10, money invested = Rs. 100.\nTo earn Rs. 12, money invested = (100 / 10) * 12 = Rs. 120.\nMarket value of Rs. 100 stock = Rs. 120."
  },
  {
    "id": 7,
    "text": "A man invests in a 16% stock at 128. The interest obtained by him is:",
    "options": [
      { "id": "A", "text": "Rs. 8%" },
      { "id": "B", "text": "Rs. 12%" },
      { "id": "C", "text": "Rs. 12.5%" },
      { "id": "D", "text": "Rs. 16%" }
    ],
    "answer": "C",
    "explanation": "By investing Rs. 128, income derived = Rs. 16.\nBy investing Rs. 100, income derived = (16 / 128) * 100 = 12.5.\nInterest obtained = 12.5%."
  },
  {
    "id": 8,
    "text": "By investing Rs. 1620 in 8% stock, Michael earns Rs. 135. The stock is then quoted at:",
    "options": [
      { "id": "A", "text": "80" },
      { "id": "B", "text": "96" },
      { "id": "C", "text": "106" },
      { "id": "D", "text": "108" }
    ],
    "answer": "B",
    "explanation": "To earn Rs. 135, investment = Rs. 1620.\nTo earn Rs. 8, investment = (1620 / 135) * 8 = Rs. 96.\nMarket value of Rs. 100 stock = Rs. 96."
  },
  {
    "id": 9,
    "text": "A man invested Rs. 1552 in a stock at 97 to obtain an income of Rs. 128. The dividend from the stock is:",
    "options": [
      { "id": "A", "text": "8.5%" },
      { "id": "B", "text": "7.5%" },
      { "id": "C", "text": "8%" },
      { "id": "D", "text": "9%" }
    ],
    "answer": "C",
    "explanation": "By investing Rs. 1552, income = Rs. 128.\nBy investing Rs. 97, income = (128 / 1552) * 97 = Rs. 8.\nDividend = 8%."
  },
  {
    "id": 10,
    "text": "A man bought 20 shares of Rs. 50 at 5 discount, the rate of dividend being 13 1/2. The rate of interest obtained is:",
    "options": [
      { "id": "A", "text": "13%" },
      { "id": "B", "text": "12%" },
      { "id": "C", "text": "15%" },
      { "id": "D", "text": "16%" }
    ],
    "answer": "C",
    "explanation": "Investment = [20 * (50 - 5)] = Rs. 900.\nFace value = (50 * 20) = Rs. 1000.\nDividend = (27/2) * (1000/100) = Rs. 135.\nInterest obtained = (135 / 900) * 100% = 15%."
  },
  {
    "id": 11,
    "text": "A man invested Rs. 14,400 in Rs. 100 shares of a company at 20% premium. If his company declares 5% dividend at the end of the year, then how much does he get?",
    "options": [
      { "id": "A", "text": "Rs. 500" },
      { "id": "B", "text": "Rs. 600" },
      { "id": "C", "text": "Rs. 650" },
      { "id": "D", "text": "Rs. 720" }
    ],
    "answer": "B",
    "explanation": "Market Value = 100 + 20% = Rs. 120.\nNumber of shares = 14400 / 120 = 120.\nFace value = 100 * 120 = Rs. 12000.\nAnnual income = 5% of Rs. 12000 = (5 / 100) * 12000 = Rs. 600."
  },
  {
    "id": 12,
    "text": "A man invests some money partly in 9% stock at 96 and partly in 12% stock at 120. To obtain equal dividends from both, he must invest the money in the ratio:",
    "options": [
      { "id": "A", "text": "3:5" },
      { "id": "B", "text": "2:1" },
      { "id": "C", "text": "16:15" },
      { "id": "D", "text": "4:5" }
    ],
    "answer": "C",
    "explanation": "For an income of Re. 1 in 9% stock at 96, investment = Rs. 96/9 = Rs. 32/3.\nFor an income Re. 1 in 12% stock at 120, investment = Rs. 120/12 = Rs. 10.\nRatio of investments = (32/3) : 10 = 32 : 30 = 16 : 15."
  },
  {
    "id": 13,
    "text": "Find the annual income derived from Rs. 2500, 8% stock at 106?",
    "options": [
      { "id": "A", "text": "100" },
      { "id": "B", "text": "200" },
      { "id": "C", "text": "150" },
      { "id": "D", "text": "250" }
    ],
    "answer": "B",
    "explanation": "Income from Rs. 100 stock = Rs. 8.\nIncome from Rs. 2500 stock = (8 / 100) * 2500 = Rs. 200."
  },
  {
    "id": 14,
    "text": "Find the cost of 96 shares of Rs. 10 each at 3/4 discounts, brokerage being 1/4 per share.",
    "options": [
      { "id": "A", "text": "912" },
      { "id": "B", "text": "921" },
      { "id": "C", "text": "920" },
      { "id": "D", "text": "900" }
    ],
    "answer": "A",
    "explanation": "Cost of 1 share = Rs. [(10 - 3/4) + 1/4] = Rs. 19/2 = Rs. 9.50.\nCost of 96 shares = (19/2) * 96 = Rs. 912."
  },
  {
    "id": 15,
    "text": "A man buys Rs. 25 shares in company which pays 9% dividend. The money invested is such that it gives 10% on investment. At what price did he buy the shares?",
    "options": [
      { "id": "A", "text": "22.50" },
      { "id": "B", "text": "22" },
      { "id": "C", "text": "20.45" },
      { "id": "D", "text": "12.50" }
    ],
    "answer": "A",
    "explanation": "Suppose he buys each share for Rs. x.\nThen, Dividend on 1 share = 9% of Rs. 25 = (9/100) * 25 = Rs. 2.25.\nIncome on investment = 10% of x = (10/100) * x.\n2.25 = (10/100) * x => x = 22.50.\nCost of each share = Rs. 22.50."
  },
  {
    "id": 16,
    "text": "The market value of a 10.5% stock, in which an income of Rs. 756 is derived by investing Rs. 9000, brokerage being 1/4%, is:",
    "options": [
      { "id": "A", "text": "Rs. 108.25" },
      { "id": "B", "text": "Rs. 112.20" },
      { "id": "C", "text": "Rs. 124.75" },
      { "id": "D", "text": "Rs. 125.25" }
    ],
    "answer": "C",
    "explanation": "For an income of Rs. 756, investment = Rs. 9000.\nFor an income of Rs. 10.5 (21/2), investment = (9000 / 756) * (21/2) = Rs. 125.\nFor a Rs. 100 stock, investment = Rs. 125.\nMarket value of Rs. 100 stock = Investment - Brokerage = 125 - 0.25 = Rs. 124.75."
  },
  {
    "id": 17,
    "text": "Find the cash realized by selling Rs. 2440, 9.5% stock at 4 discounts (brokerage 1/4%)",
    "options": [
      { "id": "A", "text": "2000" },
      { "id": "B", "text": "2298" },
      { "id": "C", "text": "2290" },
      { "id": "D", "text": "2289" }
    ],
    "answer": "B",
    "explanation": "By selling Rs. 100 stock, cash realized = (100 - 4 - 1/4) = Rs. 95.75.\nFor Rs. 2400 stock (assuming 2440 was a typo or total stock value), let's calculate for 2400 as per common logic in such problems.\nCash realized = (383/4) * (1/100) * 2400 = Rs. 2298."
  },
  {
    "id": 18,
    "text": "A man sells Rs. 5000, 12 % stock at 156 and invests the proceeds partly in 8 % stock at 90 and 9 % stock at 108. He hereby increases his income by Rs. 70. How much of the proceeds were invested in each stock?",
    "options": [
      { "id": "A", "text": "4000" },
      { "id": "B", "text": "4200" },
      { "id": "C", "text": "4002" },
      { "id": "D", "text": "4020" }
    ],
    "answer": "B",
    "explanation": "S.P of Rs. 5000 stock = (156/100) * 5000 = Rs. 7800.\nIncome from this stock = (12/100) * 5000 = Rs. 600.\nNew income = 600 + 70 = Rs. 670.\nLet investment in 8% stock be x, and in 9% stock be (7800 - x).\n(x * 8/90) + ((7800 - x) * 9/108) = 670\n4x/45 + (7800 - x)/12 = 670\nSolving for x gives x = 3600.\nInvestment in 9% stock = 7800 - 3600 = Rs. 4200."
  },
  {
    "id": 19,
    "text": "Find the annual income derived by investing Rs. 6800 in 10% stock at 136?",
    "options": [
      { "id": "A", "text": "250" },
      { "id": "B", "text": "1500" },
      { "id": "C", "text": "500" },
      { "id": "D", "text": "50" }
    ],
    "answer": "C",
    "explanation": "By investing Rs. 136, income obtained = Rs. 10.\nBy investing Rs. 6800, income obtained = (10 / 136) * 6800 = Rs. 500."
  },
  {
    "id": 20,
    "text": "The cash realized on selling a 14% stock is Rs. 106.25, brokerage being 1/4% is",
    "options": [
      { "id": "A", "text": "123" },
      { "id": "B", "text": "106" },
      { "id": "C", "text": "100" },
      { "id": "D", "text": "156" }
    ],
    "answer": "B",
    "explanation": "Cash realized = Selling Price - Brokerage = 106.25 - 0.25 = Rs. 106."
  },
  {
    "id": 21,
    "text": "A invested some money in 10% stock at 96. If B wants to invest in an equally good 12% stock, he must purchase a stock worth of:",
    "options": [
      { "id": "A", "text": "Rs. 80" },
      { "id": "B", "text": "Rs. 115.20" },
      { "id": "C", "text": "Rs. 120" },
      { "id": "D", "text": "Rs. 125.40" }
    ],
    "answer": "B",
    "explanation": "For an income of Rs. 10, investment = Rs. 96.\nFor an income of Rs. 12, investment = (96 / 10) * 12 = Rs. 115.20."
  },
  {
    "id": 22,
    "text": "Find the cost of Rs. 4500, 8.5% stock at 4 premiums?",
    "options": [
      { "id": "A", "text": "1400" },
      { "id": "B", "text": "5000" },
      { "id": "C", "text": "4000" },
      { "id": "D", "text": "4680" }
    ],
    "answer": "D",
    "explanation": "Cost of Rs. 100 stock = 100 + 4 = Rs. 104.\nCost of Rs. 4500 stock = (104 / 100) * 4500 = Rs. 4680."
  },
  {
    "id": 23,
    "text": "Which is better investment: 11% stock at 143 (or) 9 3/4% stock at 117?",
    "options": [
      { "id": "A", "text": "Both are equally good" },
      { "id": "B", "text": "9 3/4% stock at 117" },
      { "id": "C", "text": "Cannot be compared" },
      { "id": "D", "text": "11% stock at 143" }
    ],
    "answer": "B",
    "explanation": "Income on Rs. 143 for 1st case = Rs. 11.\nIncome on Rs. 117 for 2nd case = Rs. 39/4 = Rs. 9.75.\nReturn for 1st case = (11/143)*100 = 7.69%.\nReturn for 2nd case = (9.75/117)*100 = 8.33%.\nClearly, 9 3/4% stock at 117 is better."
  },
  {
    "id": 24,
    "text": "By investing Rs. 1620 in 8% stock, Michael earns Rs. 135. The stock is then quoted at?",
    "options": [
      { "id": "A", "text": "Rs. 145" },
      { "id": "B", "text": "Rs. 245.1" },
      { "id": "C", "text": "Rs. 96" },
      { "id": "D", "text": "Rs. 75" }
    ],
    "answer": "C",
    "explanation": "Michael earns Rs. 135 by investing Rs. 1620.\nTo earn Rs. 8, investment = (8 * 1620) / 135 = Rs. 96.\nMarket value of Rs. 100 stock = Rs. 96."
  },
  {
    "id": 25,
    "text": "The market value of a 10.5% stock, in which an income of Rs. 756 is derived by investing Rs. 9000, brokerage being 1/4%, is:",
    "options": [
      { "id": "A", "text": "108.25" },
      { "id": "B", "text": "112.20" },
      { "id": "C", "text": "124.75" },
      { "id": "D", "text": "125.25" }
    ],
    "answer": "C",
    "explanation": "Refer to question 16 for detail explanation. Market value = 125 - 0.25 = Rs. 124.75."
  },
  {
    "id": 26,
    "text": "A 6% stock yields 8%. The market value of the stock is:",
    "options": [
      { "id": "A", "text": "70" },
      { "id": "B", "text": "76" },
      { "id": "C", "text": "75" },
      { "id": "D", "text": "80" }
    ],
    "answer": "C",
    "explanation": "For an income of Rs. 8, investment = Rs. 100.\nFor an income of Rs. 6, investment = (100 / 8) * 6 = Rs. 75.\nMarket value = Rs. 75."
  },
  {
    "id": 27,
    "text": "The cash realized on selling a 14% stock at Rs. 106.25, brokerage being 1/4%, is:",
    "options": [
      { "id": "A", "text": "RS. 105.50" },
      { "id": "B", "text": "RS. 106" },
      { "id": "C", "text": "RS. 106.50" },
      { "id": "D", "text": "RS. 113.75" }
    ],
    "answer": "B",
    "explanation": "Cash realized = 106.25 - 0.25 = Rs. 106."
  },
  {
    "id": 28,
    "text": "Mr. Shankar spends 25% of his monthly salary on household expenditure, 20% of the remaining on children’s education, and the remaining is equally invested in three different schemes. If the amount invested in each scheme is Rs. 5600, what is the monthly salary of Shankar?",
    "options": [
      { "id": "A", "text": "Rs. 34000" },
      { "id": "B", "text": "Rs. 31245" },
      { "id": "C", "text": "Rs. 24315" },
      { "id": "D", "text": "Rs. 28000" }
    ],
    "answer": "D",
    "explanation": "Let salary be x.\nAfter household: 0.75x.\nAfter education: 0.80 * 0.75x = 0.6x.\nInvested in each scheme = 0.6x / 3 = 0.2x.\n0.2x = 5600 => x = 5600 / 0.2 = 28000.\nMonthly salary = Rs. 28,000."
  },
  {
    "id": 29,
    "text": "The cost price of a Rs. 100 stock at 4 discounts, when brokerage is 1/4%:",
    "options": [
      { "id": "A", "text": "Rs. 95.75" },
      { "id": "B", "text": "Rs. 96" },
      { "id": "C", "text": "Rs. 96.25" },
      { "id": "D", "text": "Rs. 104.25" }
    ],
    "answer": "C",
    "explanation": "CP = 100 - 4 + 0.25 = Rs. 96.25."
  },
  {
    "id": 30,
    "text": "The cash realized on selling a 14% stock at Rs. 106.25, brokerage is 1/4%:",
    "options": [
      { "id": "A", "text": "Rs. 105.50" },
      { "id": "B", "text": "Rs. 106" },
      { "id": "C", "text": "Rs. 106.50" },
      { "id": "D", "text": "Rs. 113.75" }
    ],
    "answer": "B",
    "explanation": "Cash realized = 106.25 - 0.25 = Rs. 106."
  },
  {
    "id": 31,
    "text": "A man invested Rs. 4455 in Rs. 10 shares quoted at Rs. 8.25. If the rate of dividend be 12%, his annual income is:",
    "options": [
      { "id": "A", "text": "Rs. 207.40" },
      { "id": "B", "text": "Rs. 534.60" },
      { "id": "C", "text": "Rs. 648" },
      { "id": "D", "text": "Rs. 655.60" }
    ],
    "answer": "C",
    "explanation": "Number of shares = 4455 / 8.25 = 540.\nFace value = 540 * 10 = 5400.\nAnnual income = 12% of 5400 = Rs. 648."
  },
  {
    "id": 32,
    "text": "A 6% stock yields 8%. The market value of the stock is:",
    "options": [
      { "id": "A", "text": "Rs. 48" },
      { "id": "B", "text": "Rs. 75" },
      { "id": "C", "text": "Rs. 96" },
      { "id": "D", "text": "Rs. 133.33" }
    ],
    "answer": "B",
    "explanation": "For an income of Rs. 8, investment = Rs. 100.\nFor an income of Rs. 6, investment = (100 / 8) * 6 = Rs. 75."
  },
  {
    "id": 33,
    "text": "A man invested Rs. 14,400 in Rs. 100 shares of a company at 20% premium. If the company declares 5% dividend at the end of the year, then how much does he get?",
    "options": [
      { "id": "A", "text": "Rs. 500" },
      { "id": "B", "text": "Rs. 600" },
      { "id": "C", "text": "Rs. 650" },
      { "id": "D", "text": "Rs. 720" }
    ],
    "answer": "B",
    "explanation": "Number of shares = 14400 / 120 = 120.\nFace value = 120 * 100 = 12000.\nIncome = 5% of 12000 = Rs. 600."
  },
  {
    "id": 34,
    "text": "How many shares of market value Rs. 25 each can be purchased for Rs. 12750, brokerage being 2%?",
    "options": [
      { "id": "A", "text": "450" },
      { "id": "B", "text": "500" },
      { "id": "C", "text": "550" },
      { "id": "D", "text": "600" }
    ],
    "answer": "B",
    "explanation": "Cost of 1 share = 25 + 2% of 25 = 25 + 0.50 = Rs. 25.50.\nNumber of shares = 12750 / 25.50 = 500."
  },
  {
    "id": 35,
    "text": "A man invests in a 16% stock at 128. The interest obtained by him is:",
    "options": [
      { "id": "A", "text": "8%" },
      { "id": "B", "text": "12%" },
      { "id": "C", "text": "12.5%" },
      { "id": "D", "text": "16%" }
    ],
    "answer": "C",
    "explanation": "Yield % = (Coupon Rate / Market Price) * 100 = (16 / 128) * 100 = 12.5%."
  },
  {
    "id": 36,
    "text": "The income derived from a Rs. 100, 13% stock at Rs. 105, is:",
    "options": [
      { "id": "A", "text": "Rs. 5" },
      { "id": "B", "text": "Rs. 8" },
      { "id": "C", "text": "Rs. 13" },
      { "id": "D", "text": "Rs. 18" }
    ],
    "answer": "C",
    "explanation": "Income on a stock is based on its face value and dividend rate. Income = 13% of Rs. 100 = Rs. 13."
  },
  {
    "id": 37,
    "text": "A 9% stock yields 8%. The market value of the stock is:",
    "options": [
      { "id": "A", "text": "Rs. 72" },
      { "id": "B", "text": "Rs. 92" },
      { "id": "C", "text": "Rs. 112.50" },
      { "id": "D", "text": "Rs. 116.50" }
    ],
    "answer": "C",
    "explanation": "To obtain Rs. 8 income, investment = Rs. 100.\nTo obtain Rs. 9 income, investment = (100 / 8) * 9 = Rs. 112.50."
  },
  {
    "id": 38,
    "text": "To produce an annual income of Rs. 1200 from a 12% stock at 90, the amount of stock needed is:",
    "options": [
      { "id": "A", "text": "Rs. 10,000" },
      { "id": "B", "text": "Rs. 10,800" },
      { "id": "C", "text": "Rs. 14,400" },
      { "id": "D", "text": "Rs. 16,000" }
    ],
    "answer": "A",
    "explanation": "For an income of Rs. 12, stock needed = Rs. 100.\nFor an income of Rs. 1200, stock needed = (100 / 12) * 1200 = Rs. 10,000."
  },
  {
    "id": 39,
    "text": "By investing Rs. 1620 in 8% stock, Michael earns Rs. 135. The stock is then quoted at:",
    "options": [
      { "id": "A", "text": "Rs. 80" },
      { "id": "B", "text": "Rs. 96" },
      { "id": "C", "text": "Rs. 106" },
      { "id": "D", "text": "Rs. 108" }
    ],
    "answer": "B",
    "explanation": "Refer to question 24. Stock is quoted at Rs. 96."
  },
  {
    "id": 40,
    "text": "In order to obtain an income of Rs. 650 from 10% stock at Rs. 96, one must make an investment of:",
    "options": [
      { "id": "A", "text": "Rs. 3100" },
      { "id": "B", "text": "Rs. 6240" },
      { "id": "C", "text": "Rs. 6500" },
      { "id": "D", "text": "Rs. 96000" }
    ],
    "answer": "B",
    "explanation": "Refer to question 3. Investment required = Rs. 6240."
  },
  {
    "id": 41,
    "text": "By investing in 16 2/3% stocks at 64, one earns Rs 1500. The investment made is:",
    "options": [
      { "id": "A", "text": "Rs. 5640" },
      { "id": "B", "text": "Rs. 5760" },
      { "id": "C", "text": "Rs. 7500" },
      { "id": "D", "text": "Rs. 9600" }
    ],
    "answer": "B",
    "explanation": "Dividend = 50/3.\nTo earn Rs. 50/3, investment = Rs. 64.\nTo earn Rs. 1500, investment = 64 * (3/50) * 1500 = 64 * 3 * 30 = Rs. 5760."
  },
  {
    "id": 42,
    "text": "A man invested Rs. 1552 in a stock at 97 to obtain an income of Rs. 128. The dividend from the stock is:",
    "options": [
      { "id": "A", "text": "7.5%" },
      { "id": "B", "text": "8%" },
      { "id": "C", "text": "9.7%" },
      { "id": "D", "text": "None of these" }
    ],
    "answer": "B",
    "explanation": "By investing Rs. 1552, income = Rs. 128.\nBy investing Rs. 97, income = (128 / 1552) * 97 = Rs. 8.\nDividend = 8%."
  },
  {
    "id": 43,
    "text": "A man buys Rs. 50 shares in a company which pays 10% dividend. If the man gets 12.5% on his investment, at what price did he buy the shares?",
    "options": [
      { "id": "A", "text": "Rs. 37.50" },
      { "id": "B", "text": "Rs. 40" },
      { "id": "C", "text": "Rs. 48" },
      { "id": "D", "text": "Rs. 52" }
    ],
    "answer": "B",
    "explanation": "Dividend on 1 share = 10% of 50 = Rs. 5.\nLet buy price be x.\n12.5% of x = 5 => (12.5 / 100) * x = 5 => x = (5 * 100) / 12.5 = 40.\nCost of 1 share = Rs. 40."
  },
  {
    "id": 44,
    "text": "A man buys Rs. 20 shares paying 9% dividend. The man wants to have an interest of 12% on his money. The market value of each share is:",
    "options": [
      { "id": "A", "text": "Rs. 12" },
      { "id": "B", "text": "Rs. 15" },
      { "id": "C", "text": "Rs. 18" },
      { "id": "D", "text": "Rs. 21" }
    ],
    "answer": "B",
    "explanation": "Refer to question 1. Market value = Rs. 15."
  },
  {
    "id": 45,
    "text": "Sakshi invests a part of Rs. 12,000 in 12% stocks at Rs. 120 and the remainder in 15% stock at Rs. 125. If his total dividend per annum is Rs. 1360, how much does he invest in 12% stock at Rs. 120?",
    "options": [
      { "id": "A", "text": "Rs. 4000" },
      { "id": "B", "text": "Rs. 4500" },
      { "id": "C", "text": "Rs. 5500" },
      { "id": "D", "text": "Rs. 6000" }
    ],
    "answer": "A",
    "explanation": "Let investment in 12% stock be x.\nInvestment in 15% stock = 12000 - x.\nIncome from 1st = (12/120) * x = x/10.\nIncome from 2nd = (15/125) * (12000 - x) = (3/25) * (12000 - x).\nx/10 + (3/25) * (12000 - x) = 1360\nMultiplying by 50: 5x + 6(12000 - x) = 68000\n5x + 72000 - 6x = 68000\nx = 4000.\nInvestment in 12% stock = Rs. 4000."
  },
  {
    "id": 46,
    "text": "Rs. 9800 are invested partly in 9% stock at 75 and 10% stock at 80 to have equal amount of incomes. The investment in 9% stock is:",
    "options": [
      { "id": "A", "text": "Rs. 4800" },
      { "id": "B", "text": "Rs. 5000" },
      { "id": "C", "text": "Rs. 5400" },
      { "id": "D", "text": "Rs. 5600" }
    ],
    "answer": "B",
    "explanation": "Let investment in 9% stock be x.\n(9/75) * x = (10/80) * (9800 - x)\n(3/25) * x = (1/8) * (9800 - x)\n24x = 25(9800 - x) => 49x = 245000 => x = 5000.\nInvestment in 9% stock = Rs. 5000."
  },
  {
    "id": 47,
    "text": "Which is better investment 11% stock at 143 or 9 3/4% stock at 117?",
    "options": [
      { "id": "A", "text": "11% stock at 143" },
      { "id": "B", "text": "9 3/4% stock at 117" },
      { "id": "C", "text": "Both are equally good" },
      { "id": "D", "text": "Cannot be compared" }
    ],
    "answer": "B",
    "explanation": "Refer to question 23. 9 3/4% stock at 117 is better."
  },
  {
    "id": 48,
    "text": "A invested some money in 10% stock at 96. If B wants to invest in an equally good 12% stock, he must purchase a stock worth of:",
    "options": [
      { "id": "A", "text": "Rs. 80" },
      { "id": "B", "text": "Rs. 115.20" },
      { "id": "C", "text": "Rs. 120" },
      { "id": "D", "text": "Rs. 125.40" }
    ],
    "answer": "B",
    "explanation": "Refer to question 21. Stock worth Rs. 115.20."
  },
  {
    "id": 49,
    "text": "Which is better investment, 12% stock at par with an income tax at the rate of 5 paise per rupee or 14 2/7% stock at 120 free from income tax?",
    "options": [
      { "id": "A", "text": "12% stock" },
      { "id": "B", "text": "14 2/7% stocks" },
      { "id": "C", "text": "Both are equally good" },
      { "id": "D", "text": "Cannot be compared" }
    ],
    "answer": "B",
    "explanation": "12% stock at par with 5% tax income = 12 * 0.95 = 11.4 per 100.\n14 2/7% stock (100/7%) at 120 = (100/7) / 120 * 100 = 100/8.4 = 11.9 per 100.\nClearly, 14 2/7% stock is better."
  },
  {
    "id": 50,
    "text": "By investing in 16 2/3% stock at 64, one earns Rs. 1500. The investment made is:",
    "options": [
      { "id": "A", "text": "Rs. 5640" },
      { "id": "B", "text": "Rs. 5760" },
      { "id": "C", "text": "Rs. 7500" },
      { "id": "D", "text": "Rs. 9600" }
    ],
    "answer": "B",
    "explanation": "Refer to question 41. Investment made = Rs. 5760."
  }
];
