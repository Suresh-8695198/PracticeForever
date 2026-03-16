export const questions = [
  {
    id: 1,
    text: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is:",
    options: [
      { id: "A", text: "10 min" },
      { id: "B", text: "12 min" },
      { id: "C", text: "15 min" },
      { id: "D", text: "25 min" }
    ],
    answer: "B",
    explanation: "Pipe A's rate = 1/20 per min. \nPipe B's rate = 1/30 per min. \nCombined rate = 1/20 + 1/30 = (3+2)/60 = 5/60 = 1/12. \nTime taken = 12 minutes."
  },
  {
    id: 2,
    text: "A pipe can fill a cistern in 6 hours. Due to a leak in its bottom, it is filled in 7 hours. When the cistern is full, in how much time will it be emptied by the leak?",
    options: [
      { id: "A", text: "42 hours" },
      { id: "B", text: "40 hours" },
      { id: "C", text: "36 hours" },
      { id: "D", text: "45 hours" }
    ],
    answer: "A",
    explanation: "Work done by leak in 1 hour = (1/6 - 1/7) = 1/42. \nLeak will empty the full tank in 42 hours."
  }
];
