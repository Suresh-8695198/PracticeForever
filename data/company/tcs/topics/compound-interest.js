export const questions = [
  {
    id: 1,
    text: "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
    options: [
      { id: "A", text: "₹2,000" },
      { id: "B", text: "₹2,100" },
      { id: "C", text: "₹2,200" },
      { id: "D", text: "₹2,500" }
    ],
    answer: "B",
    explanation: "Amount = P(1 + R/100)^n = 10000(1 + 10/100)^2 = 10000(1.1)^2 = 10000 × 1.21 = 12,100. \nC.I. = 12100 - 10000 = ₹2,100."
  },
  {
    id: 2,
    text: "At what rate of compound interest per annum will a sum of ₹1,200 become ₹1,323 in 2 years?",
    options: [
      { id: "A", text: "5%" },
      { id: "B", text: "6%" },
      { id: "C", text: "5.5%" },
      { id: "D", text: "7%" }
    ],
    answer: "A",
    explanation: "1323 = 1200(1 + R/100)^2 \n1323/1200 = (1 + R/100)^2 \n441/400 = (1 + R/100)^2 \n(21/20)^2 = (1 + R/100)^2 \n1 + R/100 = 21/20 \nR/100 = 1/20 -> R = 5%."
  }
];
