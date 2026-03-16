export const questions = [
  {
    id: 1,
    text: "Find the mean of the first five prime numbers.",
    options: [
      { id: "A", text: "5.4" },
      { id: "B", text: "5.6" },
      { id: "C", text: "5.8" },
      { id: "D", text: "6.0" }
    ],
    answer: "B",
    explanation: "First five prime numbers are: 2, 3, 5, 7, 11. \nSum = 2+3+5+7+11 = 28. \nMean = 28 / 5 = 5.6."
  },
  {
    id: 2,
    text: "The median of 10, 12, 14, 16, 18, 20 is:",
    options: [
      { id: "A", text: "14" },
      { id: "B", text: "15" },
      { id: "C", text: "16" },
      { id: "D", text: "17" }
    ],
    answer: "B",
    explanation: "Sorted data: 10, 12, 14, 16, 18, 20. \nSince n=6 (even), median is the average of (n/2)th and (n/2 + 1)th terms. \nTerms are 14 and 16. \nMedian = (14+16)/2 = 15."
  },
  {
    id: 3,
    text: "Find the mode of the following data: 2, 4, 4, 4, 5, 6, 6, 7, 9",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "6" },
      { id: "C", text: "4 and 6" },
      { id: "D", text: "9" }
    ],
    answer: "A",
    explanation: "Mode is the value that appears most frequently. \n'4' appears 3 times, '6' appears 2 times. \nMode = 4."
  },
  {
    id: 4,
    text: "Find the variance of the numbers: 3, 5, 7",
    options: [
      { id: "A", text: "2.67" },
      { id: "B", text: "8/3" },
      { id: "C", text: "Both A and B" },
      { id: "D", text: "4" }
    ],
    answer: "C",
    explanation: "Mean = (3+5+7)/3 = 5. \nSquared deviations from mean: (3-5)² = 4, (5-5)² = 0, (7-5)² = 4. \nAverage of squared deviations = (4+0+4)/3 = 8/3 ≈ 2.67."
  },
  {
    id: 5,
    text: "If the mean of five observations is 10 and their standard deviation is 2, find the sum of the squares of the observations.",
    options: [
      { id: "A", text: "500" },
      { id: "B", text: "520" },
      { id: "C", text: "104" },
      { id: "D", text: "20" }
    ],
    answer: "B",
    explanation: "Variance (σ²) = [Σx² / n] - (Mean)². \n2² = [Σx² / 5] - 10². \n4 = [Σx² / 5] - 100. \nΣx² / 5 = 104 \nΣx² = 520."
  },
  {
    id: 6,
    text: "Find the range and coefficient of range for the following data: 12, 25, 15, 18, 17, 20, 22, 10.",
    options: [
      { id: "A", text: "15, 0.42" },
      { id: "B", text: "15, 0.35" },
      { id: "C", text: "10, 0.5" },
      { id: "D", text: "15, 0.25" }
    ],
    answer: "A",
    explanation: "Max = 25, Min = 10. \nRange = Max - Min = 25 - 10 = 15. \nCoefficient of Range = (Max - Min) / (Max + Min) = 15 / 35 ≈ 0.428."
  },
  {
    id: 7,
    text: "If the arithmetic mean of 7 observations is 100 and that of 3 observations is 50, then the combined mean is:",
    options: [
      { id: "A", text: "75" },
      { id: "B", text: "65" },
      { id: "C", text: "85" },
      { id: "D", text: "95" }
    ],
    answer: "C",
    explanation: "Combined Mean = (n1*m1 + n2*m2) / (n1 + n2) \n= (7*100 + 3*50) / 10 = (700 + 150) / 10 = 850 / 10 = 85."
  },
  {
    id: 8,
    text: "Calculate the coefficient of variation (C.V.) if the mean is 40 and standard deviation is 8.",
    options: [
      { id: "A", text: "20%" },
      { id: "B", text: "25%" },
      { id: "C", text: "15%" },
      { id: "D", text: "30%" }
    ],
    answer: "A",
    explanation: "C.V. = (S.D. / Mean) * 100 \n= (8 / 40) * 100 = (1 / 5) * 100 = 20%."
  },
  {
    id: 9,
    text: "In a symmetrical distribution (Normal Curve), what is the relationship between Mean, Median, and Mode?",
    options: [
      { id: "A", text: "Mean > Median > Mode" },
      { id: "B", text: "Mean < Median < Mode" },
      { id: "C", text: "Mean = Median = Mode" },
      { id: "D", text: "Mean = 2 Median - Mode" }
    ],
    answer: "C",
    explanation: "In a perfectly symmetrical or Normal distribution, the Mean, Median, and Mode all coincide at the center.",
    image: "/images/practice/quantitative/statistics_normal_curve.svg"
  },
  {
    id: 10,
    text: "If the mode of a data set is 18 and the mean is 24, find the median using the empirical relationship.",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "21" },
      { id: "C", text: "22" },
      { id: "D", text: "23" }
    ],
    answer: "C",
    explanation: "Empirical Relation: Mode = 3 Median - 2 Mean \n18 = 3 Median - 2(24) \n18 = 3 Median - 48 \n3 Median = 66 \nMedian = 22."
  }
];
