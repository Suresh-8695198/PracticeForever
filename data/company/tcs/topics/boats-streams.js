export const questions = [
  {
    id: 1,
    text: "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
    options: [
      { id: "A", text: "2 hours" },
      { id: "B", text: "3 hours" },
      { id: "C", text: "4 hours" },
      { id: "D", text: "5 hours" }
    ],
    answer: "C",
    explanation: "Speed Downstream = Speed in still water + Speed of stream = 13 + 4 = 17 km/hr. \nTime = Distance / Speed = 68 / 17 = 4 hours."
  },
  {
    id: 2,
    text: "A man can row at 5 km/hr in still water. If the velocity of current is 1 km/hr and it takes him 1 hour to row to a place and come back, how far is the place?",
    options: [
      { id: "A", text: "2.4 km" },
      { id: "B", text: "2.5 km" },
      { id: "C", text: "3 km" },
      { id: "D", text: "3.6 km" }
    ],
    answer: "A",
    explanation: "Speed downstream = 5+1=6. Speed upstream = 5-1=4. \nLet distance be x. \nx/6 + x/4 = 1 \n(2x + 3x)/12 = 1 \n5x/12 = 1 -> x = 12/5 = 2.4 km."
  }
];
