export const questions = [
  {
    id: 1,
    text: "A train 120m long passes a pole in 6 seconds. What is the speed of the train in km/hr?",
    options: [
      { id: "A", text: "60 km/hr" },
      { id: "B", text: "72 km/hr" },
      { id: "C", text: "80 km/hr" },
      { id: "D", text: "90 km/hr" }
    ],
    answer: "B",
    explanation: "Speed in m/s = Distance / Time = 120 / 6 = 20 m/s. \nSpeed in km/hr = 20 × (18/5) = 4 × 18 = 72 km/hr."
  },
  {
    id: 2,
    text: "Two trains of lengths 110m and 90m are running in opposite directions at 36 km/hr and 54 km/hr respectively. In what time will they cross each other?",
    options: [
      { id: "A", text: "8 sec" },
      { id: "B", text: "10 sec" },
      { id: "C", text: "12 sec" },
      { id: "D", text: "15 sec" }
    ],
    answer: "A",
    explanation: "Relative Speed = 36 + 54 = 90 km/hr = 90 × (5/18) = 25 m/s. \nTotal Distance = 110 + 90 = 200m. \nTime = 200 / 25 = 8 seconds."
  }
];
