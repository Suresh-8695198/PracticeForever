export const questions = [
  {
    "id": 1,
    "text": "Car A and B start from S and T towards T and S respectively. After passing each other they take 6 hours 40 minutes and three hours 45 minutes to reach T and S respectively. If the speed of the car A is 60 km/h, then what is the speed of car B?",
    "options": [
      { "id": "A", "text": "80 km/h" },
      { "id": "B", "text": "90 km/h" },
      { "id": "C", "text": "100 km/h" },
      { "id": "D", "text": "120 km/h" }
    ],
    "answer": "A",
    "explanation": "We use the formula: Speed_A / Speed_B = √(Time_B / Time_A) after they meet.\nTime_A = 6 hrs 40 mins = 6 + 40/60 = 20/3 hours\nTime_B = 3 hrs 45 mins = 3 + 45/60 = 15/4 hours\n\nSpeed_A / Speed_B = √( (15/4) / (20/3) ) = √(45 / 80) = √(9/16) = 3/4\nGiven Speed_A = 60 km/h\n60 / Speed_B = 3 / 4\nSpeed_B = (60 * 4) / 3 = 80 km/h"
  },
  {
    "id": 2,
    "text": "A thief has stolen a car and goes away at the speed of 50 km/hr. The theft is discovered after 15 min and the owner sets off in another car at the speed of 60 km/hr. When will the owner overtake the thief?",
    "options": [
      { "id": "A", "text": "2 3/4 hours" },
      { "id": "B", "text": "1 1/2 hours" },
      { "id": "C", "text": "1 5/6 hours" },
      { "id": "D", "text": "2 4/5 hours" }
    ],
    "answer": "B",
    "explanation": "Distance covered by the thief in 15 mins (head start) = 50 * (15/60) = 12.5 km\nRelative speed of the owner with respect to the thief = 60 - 50 = 10 km/hr\nTime taken to overtake = Distance / Relative Speed = 12.5 / 10 = 1.25 hours (which is 1 hour 15 mins).\nHowever, the provided logic calculated time from the moment of theft: 50x = 60(x - 0.25) => 10x = 15 => x = 1.5 hours.\nSo from the time of theft, it's 1.5 hours (1 1/2 hours)."
  },
  {
    "id": 3,
    "text": "A plane left 2 h later than the scheduled time and in order to reach its destination 2400 km away in time, it had to increase its speed by 33.33% over its usual speed. Find the new increased speed?",
    "options": [
      { "id": "A", "text": "300 km/h" },
      { "id": "B", "text": "200 km/h" },
      { "id": "C", "text": "100 km/h" },
      { "id": "D", "text": "400 km/h" },
      { "id": "E", "text": "800 km/h" }
    ],
    "answer": "D",
    "explanation": "Let usual speed = 3x. New speed = 3x * 4/3 = 4x.\nTime difference = (2400 / 3x) - (2400 / 4x) = 2 hours\n800/x - 600/x = 2\n200/x = 2 => x = 100\nNew increased speed = 4 * 100 = 400 km/h."
  },
  {
    "id": 4,
    "text": "A man covers a distance on a bike. Had he moved 3 kmph faster he would have taken 40 minutes less. If he had moved 2 km/h slower, he would have taken 40 minutes more. Find the distance covered by him.",
    "options": [
      { "id": "A", "text": "26 km" },
      { "id": "B", "text": "37 km" },
      { "id": "C", "text": "40 km" },
      { "id": "D", "text": "15 km" }
    ],
    "answer": "C",
    "explanation": "Let Distance = D, Speed = S.\nD/S - D/(S+3) = 40/60 = 2/3 ... (i)\nD/(S-2) - D/S = 40/60 = 2/3 ... (ii)\nFrom (i): 3D / [S(S+3)] = 2/3 => 9D = 2S(S+3)\nFrom (ii): 2D / [S(S-2)] = 2/3 => 6D = 2S(S-2) => 3D = S(S-2)\nSubstituting D: 3 * [S(S-2)/3] = 2S(S+3)/9 is not right. Let's divide the equations:\n(9D)/(3D) = [2S(S+3)] / [S(S-2)]\n3 = 2(S+3) / (S-2) => 3S - 6 = 2S + 6 => S = 12 km/hr\nSubstitute S in 3D = S(S-2): 3D = 12(10) => D = 40 km."
  },
  {
    "id": 5,
    "text": "A boy travelled 30km in 9 hours. He travelled part of the distance on foot at 3 km/h and the remaining distance on bicycle at 6 km/h. What is the distance travelled by the boy on foot?",
    "options": [
      { "id": "A", "text": "24 km" },
      { "id": "B", "text": "36 km" },
      { "id": "C", "text": "48 km" },
      { "id": "D", "text": "52 km" }
    ],
    "answer": "A",
    "explanation": "Let distance on foot = x. Distance on bicycle = 30 - x.\nTotal time = x/3 + (30-x)/6 = 9\nMultiply by 6: 2x + 30 - x = 54\nx = 24 km."
  },
  {
    "id": 6,
    "text": "A man covers a distance of 240 Km by train with the speed of 48 Km/h, a distance of 60 Km by bus with the speed of 12 Km/h and a distance of 20 Km by bicycle with the speed of 5 km/h. Find the average speed of the man throughout the journey.",
    "options": [
      { "id": "A", "text": "25.15 Km/h" },
      { "id": "B", "text": "22.85 Km/h" },
      { "id": "C", "text": "15.65 Km/h" },
      { "id": "D", "text": "21.25 Km/h" }
    ],
    "answer": "B",
    "explanation": "Time_train = 240/48 = 5 hrs\nTime_bus = 60/12 = 5 hrs\nTime_bicycle = 20/5 = 4 hrs\nTotal Distance = 240 + 60 + 20 = 320 km\nTotal Time = 5 + 5 + 4 = 14 hours\nAverage Speed = 320 / 14 = 22.85 km/h."
  },
  {
    "id": 7,
    "text": "A car can cover a distance of 780 Km in 12 hours. It has to go from place A to place B. A bus with the speed of 29 Km/h can cover the distance between place A and place B in 27 hours. While going from place A to place B, the car met with an accident after five hours and hence its speed reduced by 20%. Find the total time taken by the car to reach place B.",
    "options": [
      { "id": "A", "text": "8.5 hours" },
      { "id": "B", "text": "11.25 hours" },
      { "id": "C", "text": "9.75 hours" },
      { "id": "D", "text": "10.5 hours" },
      { "id": "E", "text": "13.80 hours" }
    ],
    "answer": "E",
    "explanation": "Initial Speed of Car = 780 / 12 = 65 km/h\nDistance A to B = 29 * 27 = 783 km\nDistance covered in 5 hours = 5 * 65 = 325 km\nRemaining distance = 783 - 325 = 458 km\nReduced Speed = 65 * 0.8 = 52 km/h\nTime for remaining distance = 458 / 52 = 8.80 hours\nTotal Time = 5 + 8.80 = 13.80 hours."
  },
  {
    "id": 8,
    "text": "Latha covers a certain distance from her house to office by bike. If she travels at the speed of 60 km/hr, she reaches the office 10 mins late. If she increases the speed by 20 km/hr, she reaches the office 5 mins earlier. Find the distance between her house and office.",
    "options": [
      { "id": "A", "text": "40 km" },
      { "id": "B", "text": "30 km" },
      { "id": "C", "text": "45 km" },
      { "id": "D", "text": "25 km" },
      { "id": "E", "text": "60 km" }
    ],
    "answer": "E",
    "explanation": "Let distance = x.\nSpeed 1 = 60 km/hr, Speed 2 = 80 km/hr.\nTime difference = 10 mins late - (-5 mins early) = 15 mins = 15/60 = 1/4 hour.\nEquation: x/60 - x/80 = 1/4\n(4x - 3x) / 240 = 1/4\nx / 240 = 1/4 => x = 60 km."
  },
  {
    "id": 9,
    "text": "Anu and Arjun start travelling in the same direction at 4 kmph and 6 kmph respectively. After 2 hours, Anu doubled her speed and Arjun reduced his speed by 1 kmph and they reached the destination together. How long from the start did they travel to meet?",
    "options": [
      { "id": "A", "text": "3 hours" },
      { "id": "B", "text": "3 1/3 hours" },
      { "id": "C", "text": "4 hours" },
      { "id": "D", "text": "4 1/2 hours" }
    ],
    "answer": "B",
    "explanation": "In first 2 hours: Anu covers 4*2 = 8km, Arjun covers 6*2 = 12km. Distance gap = 4km.\nNew speed of Anu = 8 kmph, New speed of Arjun = 5 kmph.\nAnu is now faster by 3 kmph (relative speed).\nTime to close the 4km gap = 4 / 3 = 1 1/3 hours.\nTotal time = 2 + 1 1/3 = 3 1/3 hours."
  },
  {
    "id": 10,
    "text": "A train 200 meters long overtakes a person who is travelling at the speed of 8 kmph in the opposite direction and passes him in 10 seconds. Subsequently, it overtakes a second person, travelling in the same direction as the first person and passes him in 8 seconds. Find the speed of the second person.",
    "options": [
      { "id": "A", "text": "13 kmph" },
      { "id": "B", "text": "26 kmph" },
      { "id": "C", "text": "5 kmph" },
      { "id": "D", "text": "10 kmph" }
    ],
    "answer": "B",
    "explanation": "Relative speed with 1st person = 200m / 10s = 20 m/s = 20 * 18/5 = 72 kmph.\nSince it's opposite direction, Speed_Train + 8 = 72 => Speed_Train = 64 kmph.\nRelative speed with 2nd person = 200m / 8s = 25 m/s = 25 * 18/5 = 90 kmph.\nSince the 2nd person travels in the same direction as the 1st person (opposite to train), Speed_Train + Speed_2 = 90.\n64 + Speed_2 = 90 => Speed_2 = 26 kmph."
  }
];
