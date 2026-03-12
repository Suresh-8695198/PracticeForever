export const questions = [
  {
    "id": 1,
    "text": "Speed of the current is 12.5% of the downstream speed of the boat. The time taken by the boat to cover 300 km in downstream is 5 hours more than the time taken by the boat to cover 150 km in upstream. Find the speed of the boat in still water.",
    "options": [
      { "id": "A", "text": "18 km/hr" },
      { "id": "B", "text": "15 km/hr" },
      { "id": "C", "text": "17.5 km/hr" },
      { "id": "D", "text": "20 km/hr" }
    ],
    "answer": "C",
    "explanation": "Speed of current (C) = 12.5% of Downstream speed (D) = 1/8 * D\nSo, D = 8C\nStill water speed (B) = D - C = 8C - C = 7C\nUpstream speed (U) = B - C = 7C - C = 6C\n\nGiven: (300 / D) - (150 / U) = 5\n(300 / 8C) - (150 / 6C) = 5\n(75 / 2C) - (25 / C) = 5\n(75 - 50) / 2C = 5\n25 / 2C = 5 => 10C = 25 => C = 2.5\nStill water speed B = 7 * 2.5 = 17.5 km/hr"
  },
  {
    "id": 2,
    "text": "The upstream speed of the boat is 60% of the downstream speed of the boat. If the boat covers 128 km in still water in 4 hours, then find the speed of the stream.",
    "options": [
      { "id": "A", "text": "8 km/hr" },
      { "id": "B", "text": "10 km/hr" },
      { "id": "C", "text": "4 km/hr" },
      { "id": "D", "text": "12 km/hr" }
    ],
    "answer": "A",
    "explanation": "Ratio U:D = 60:100 = 3:5\nLet U = 3x and D = 5x\nStill water speed (B) = (D + U) / 2 = (5x + 3x) / 2 = 4x\nGiven B = 128 / 4 = 32 km/hr\n4x = 32 => x = 8\nD = 5*8 = 40, U = 3*8 = 24\nSpeed of stream (C) = (D - U) / 2 = (40 - 24) / 2 = 8 km/hr"
  },
  {
    "id": 3,
    "text": "The time taken by the boat to cover 105 km upstream is 3 hours more than the time taken by the boat to cover 100 km downstream. Find the speed of the stream, if the speed of the boat in still water is 20 km/hr.",
    "options": [
      { "id": "A", "text": "10 km/hr" },
      { "id": "B", "text": "6 km/hr" },
      { "id": "C", "text": "5 km/hr" },
      { "id": "D", "text": "8 km/hr" }
    ],
    "answer": "C",
    "explanation": "Let speed of stream = a\nUpstream speed = 20 - a\nDownstream speed = 20 + a\n\n[105 / (20 - a)] - [100 / (20 + a)] = 3\n105(20 + a) - 100(20 - a) = 3(400 - a²)\n2100 + 105a - 2000 + 100a = 1200 - 3a²\n100 + 205a = 1200 - 3a²\n3a² + 205a - 1100 = 0\n3a² - 15a + 220a - 1100 = 0\n3a(a - 5) + 220(a - 5) = 0\na = 5 km/hr"
  },
  {
    "id": 4,
    "text": "The time taken by the boat to cover 140 km downstream is 1/2 of the time taken by the boat to cover 120 km upstream. If the speed of the stream is 8 km/hr, then find the speed of the boat in still water.",
    "options": [
      { "id": "A", "text": "16 km/hr" },
      { "id": "B", "text": "24 km/hr" },
      { "id": "C", "text": "32 km/hr" },
      { "id": "D", "text": "20 km/hr" }
    ],
    "answer": "D",
    "explanation": "Let still water speed = x\nD-speed = x + 8, U-speed = x - 8\n\n[140 / (x + 8)] = 1/2 * [120 / (x - 8)]\n140 / (x + 8) = 60 / (x - 8)\n14(x - 8) = 6(x + 8)\n14x - 112 = 6x + 48\n8x = 160 => x = 20 km/hr"
  },
  {
    "id": 5,
    "text": "Sum of the downstream and upstream speed of the boat is 56 km/hr and the distance covered by the boat in downstream in 15 hours is 120 km less than the distance covered by the boat in upstream in 25 hours. Find the speed of the current?",
    "options": [
      { "id": "A", "text": "5 km/hr" },
      { "id": "B", "text": "3 km/hr" },
      { "id": "C", "text": "2 km/hr" },
      { "id": "D", "text": "4 km/hr" }
    ],
    "answer": "D",
    "explanation": "D + U = 56\nSince D = B+C and U = B-C, D+U = 2B = 56 => B = 28 km/hr\n\nDistance Up (25 hrs) - Distance Down (15 hrs) = 120\n25(B - C) - 15(B + C) = 120\n25(28 - C) - 15(28 + C) = 120\n700 - 25C - 420 - 15C = 120\n280 - 40C = 120\n40C = 160 => C = 4 km/hr"
  },
  {
    "id": 6,
    "text": "Time taken by the boat to cover 280 km downstream is 4 hours more than the time taken by the boat to cover 120 km upstream and the ratio of the downstream speed of the boat to the speed of the boat in still water is 7:6. Find the speed of the current.",
    "options": [
      { "id": "A", "text": "5 km/hr" },
      { "id": "B", "text": "2 km/hr" },
      { "id": "C", "text": "6 km/hr" },
      { "id": "D", "text": "4 km/hr" }
    ],
    "answer": "D",
    "explanation": "D-speed : B-speed = 7 : 6\nLet D = 7x, B = 6x\nCurrent C = D - B = 7x - 6x = x\nUpstream U = B - C = 6x - x = 5x\n\n(280 / 7x) - (120 / 5x) = 4\n40/x - 24/x = 4\n16/x = 4 => x = 4\nCurrent speed C = x = 4 km/hr"
  },
  {
    "id": 7,
    "text": "The speed of the boat in still water is four times the speed of the stream and the boat covers 150 km along with the stream and 120 km against the stream in 7 hours, then find the speed of the boat in still water?",
    "options": [
      { "id": "A", "text": "50 km/hr" },
      { "id": "B", "text": "20 km/hr" },
      { "id": "C", "text": "30 km/hr" },
      { "id": "D", "text": "40 km/hr" }
    ],
    "answer": "D",
    "explanation": "Let C = x, B = 4x\nD = 5x, U = 3x\n\n150 / 5x + 120 / 3x = 7\n30/x + 40/x = 7\n70/x = 7 => x = 10\nB = 4x = 40 km/hr"
  },
  {
    "id": 8,
    "text": "A boat covers x km in downstream in 8 hours and the boat also covers the same distance in still water in 9.6 hours and the boat also covers (x – 40) km in upstream in 10 hours. Find the speed of the boat in still water.",
    "options": [
      { "id": "A", "text": "15 km/hr" },
      { "id": "B", "text": "25 km/hr" },
      { "id": "C", "text": "30 km/hr" },
      { "id": "D", "text": "20 km/hr" }
    ],
    "answer": "B",
    "explanation": "x = D * 8 = B * 9.6\n(B + C) * 8 = 9.6B\n8B + 8C = 9.6B => 1.6B = 8C => B = 5C\n\nAlso, x - 40 = U * 10 = (B - C) * 10\nSubstitute x = 9.6B and B = 5C:\n9.6(5C) - 40 = (5C - C) * 10\n48C - 40 = 40C\n8C = 40 => C = 5\nB = 5 * 5 = 25 km/hr"
  },
  {
    "id": 10,
    "text": "A boat covers a certain distance upstream in 9 hours and the boat covers the same distance downstream in 6 hours. If the speed of the stream is 4 km/hr, then find the distance covered by the boat in still water in 6 hours.",
    "options": [
      { "id": "A", "text": "360 km" },
      { "id": "B", "text": "120 km" },
      { "id": "C", "text": "240 km" },
      { "id": "D", "text": "180 km" }
    ],
    "answer": "B",
    "explanation": "Let distance be d, still speed B.\nU-time = 9, D-time = 6\nd/U = 9 => d = 9(B - 4)\nd/D = 6 => d = 6(B + 4)\n\n9B - 36 = 6B + 24\n3B = 60 => B = 20 km/hr\nDistance in 6 hrs = 20 * 6 = 120 km"
  }
];
