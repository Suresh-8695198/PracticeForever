export const questions = [
  {
    "id": 1,
    "text": "Pipe P and Pipe Q can fill a tank in 40 hours and 25 hours respectively. If they are opened alternatively starting with Pipe P, find the time taken to fill the tank.",
    "options": [
      { "id": "A", "text": "31 hours" },
      { "id": "B", "text": "38 hours" },
      { "id": "C", "text": "45 hours" },
      { "id": "D", "text": "25 hours" }
    ],
    "answer": "A",
    "explanation": "LCM of 40 and 25 = 200 units (Total Capacity).\nEfficiency of P = 200/40 = 5 units/hr.\nEfficiency of Q = 200/25 = 8 units/hr.\nIn 2 hours (P then Q), work done = 5 + 8 = 13 units.\nIn 30 hours (15 pairs of 2 hours), work done = 13 * 15 = 195 units.\nRemaining work = 200 - 195 = 5 units.\nNext hour is Pipe P's turn: Time taken = 5/5 = 1 hour.\nTotal time = 30 + 1 = 31 hours."
  },
  {
    "id": 2,
    "text": "Pipe P and Q can fill a tank in 16 minutes and 20 minutes respectively. Both pipes are opened together but P leaves 8 minutes before the tank is full. Find the total time taken to fill the tank.",
    "options": [
      { "id": "A", "text": "13 min 20 secs" },
      { "id": "B", "text": "12 min 24 secs" },
      { "id": "C", "text": "14 min 36 secs" },
      { "id": "D", "text": "11 min 42 secs" }
    ],
    "answer": "A",
    "explanation": "Let total time be x minutes.\n(x - 8)/16 + x/20 = 1\nMultiply by 80 (LCM of 16, 20):\n5(x - 8) + 4x = 80\n5x - 40 + 4x = 80\n9x = 120 => x = 40/3 = 13 1/3 minutes.\n1/3 minutes = 20 seconds. So, Total time = 13 min 20 secs."
  },
  {
    "id": 4,
    "text": "Pipes A, B and C together can fill a tank in 8 times the time taken by Pipe C alone to empty it. The ratio of time taken by Pipe A to Pipe B to fill the tank is 4:5. If Pipe C alone can empty the tank in 10 minutes, find the time taken by Pipe A alone to fill the tank.",
    "options": [
      { "id": "A", "text": "10 minutes" },
      { "id": "B", "text": "12 minutes" },
      { "id": "C", "text": "16 minutes" },
      { "id": "D", "text": "20 minutes" }
    ],
    "answer": "C",
    "explanation": "Time taken by C to empty = 10 mins.\nTime taken by (A+B-C) = 8 * 10 = 80 mins.\nEfficiency Eq: 1/A + 1/B - 1/C = 1/80.\nLet A = 4x, B = 5x.\n1/4x + 1/5x - 1/10 = 1/80\n(5+4)/20x = 1/80 + 1/10 = 9/80\n9/20x = 9/80 => 20x = 80 => x = 4.\nTime taken by A = 4x = 4 * 4 = 16 minutes."
  },
  {
    "id": 5,
    "text": "Pipes P and Q are inlet pipes and pipe R is an outlet pipe with efficiency ratio 2:3:1. If pipe Q can fill the tank in 16 hours, in how many hours can pipes P, Q and R together fill half the tank?",
    "options": [
      { "id": "A", "text": "6 hours" },
      { "id": "B", "text": "4 hours" },
      { "id": "C", "text": "8 hours" },
      { "id": "D", "text": "12 hours" }
    ],
    "answer": "A",
    "explanation": "Efficiency P:Q:R = 2:3:1.\nSince efficiency is inversely proportional to time:\nTime for Q = 16 hrs.\nEfficiency constant (Eff * Time) for Q = 3 * 16 = 48.\nWork for full tank = 48 units.\nCombined Efficiency (P+Q-R) = 2 + 3 - 1 = 4 units/hr.\nTime for full tank = 48 / 4 = 12 hours.\nTime for half tank = 12 / 2 = 6 hours."
  },
  {
    "id": 6,
    "text": "Inlet pipes J and K fill a tank in 32 and 56 minutes, and outlet pipe L empties it in 28 minutes. In 'Minute 1' J and K work together. In 'Minute 2' J, K, and L work together. This cycle repeats till 50% tank is full, after which only J works. Total time?",
    "options": [
      { "id": "A", "text": "32 minutes" },
      { "id": "B", "text": "24 minutes" },
      { "id": "C", "text": "45 minutes" },
      { "id": "D", "text": "56 minutes" }
    ],
    "answer": "A",
    "explanation": "LCM(32, 56, 28) = 224 units (Total).\nEff J = 7, Eff K = 4, Eff L = -8.\nMin 1 (J+K): 7 + 4 = 11 units.\nMin 2 (J+K+L): 7 + 4 - 8 = 3 units.\nIn 2-min cycle: 11 + 3 = 14 units.\n50% of tank = 112 units.\nNumber of 2-min cycles to reach 112 units = 112/14 = 8 cycles = 16 minutes.\nRemaining 112 units filled by J alone: 112 / 7 = 16 minutes.\nTotal time = 16 + 16 = 32 minutes."
  },
  {
    "id": 7,
    "text": "Pipe A and B fill a tank in 24 minutes. With outlet Pipe C, they fill it in 120 minutes. Ratio of efficiency B:C is 3:4. Find time taken by A alone to fill the tank.",
    "options": [
      { "id": "A", "text": "45 minutes" },
      { "id": "B", "text": "30 minutes" },
      { "id": "C", "text": "40 minutes" },
      { "id": "D", "text": "60 minutes" }
    ],
    "answer": "D",
    "explanation": "1/A + 1/B = 1/24\n1/A + 1/B - 1/C = 1/120\nSubtracting: (1/A + 1/B) - (1/A + 1/B - 1/C) = 1/24 - 1/120\n1/C = (5 - 1)/120 = 4/120 = 1/30. So, C takes 30 mins.\nEfficiency B:C = 3:4. Since Time is inverse of Efficiency, Time B : Time C = 4:3.\nIf C = 30, B = (4/3) * 30 = 40 mins.\n1/A = 1/24 - 1/40 = (5 - 3)/120 = 2/120 = 1/60.\nTime A = 60 minutes."
  },
  {
    "id": 8,
    "text": "Pipes A, B, and C fill a tank in 36, 48, and 72 minutes. A and B start together. After x minutes, C opens, and all three finish the tank in 9 more minutes. Find x.",
    "options": [
      { "id": "A", "text": "6" },
      { "id": "B", "text": "5" },
      { "id": "C", "text": "9" },
      { "id": "D", "text": "12" }
    ],
    "answer": "C",
    "explanation": "LCM(36, 48, 72) = 144 units.\nEff A = 4, Eff B = 3, Eff C = 2.\nWork in last 9 mins by A+B+C = (4+3+2) * 9 = 9 * 9 = 81 units.\nRemaining work done by A+B initially = 144 - 81 = 63 units.\nx = Work / Combined Efficiency (A+B) = 63 / (4+3) = 63/7 = 9 minutes."
  },
  {
    "id": 9,
    "text": "Pipe A and B together can fill a tank in (x - 5) minutes. Pipe A alone takes 2x and Pipe B alone takes x minutes. Pipe C alone fills in 4x minutes. Find the time taken by Pipe B and C together to fill the tank.",
    "options": [
      { "id": "A", "text": "18 minutes" },
      { "id": "B", "text": "15 minutes" },
      { "id": "C", "text": "20 minutes" },
      { "id": "D", "text": "12 minutes" }
    ],
    "answer": "D",
    "explanation": "1/2x + 1/x = 1/(x - 5)\n(1 + 2) / 2x = 1/(x - 5)\n3 / 2x = 1/(x - 5) => 3x - 15 = 2x => x = 15 minutes.\nTime for B = x = 15 mins. Time for C = 4x = 60 mins.\nCombined Efficiency B+C = 1/15 + 1/60 = (4+1)/60 = 5/60 = 1/12.\nTime taken = 12 minutes."
  },
  {
    "id": 10,
    "text": "Pipes A, B and C fill a tank in x minutes. Pipes A and B alone fill it in x/4 and x/5 minutes. Pipe C empties it in 10 minutes. Find time for A alone.",
    "options": [
      { "id": "A", "text": "10 minutes" },
      { "id": "B", "text": "18 minutes" },
      { "id": "C", "text": "20 minutes" },
      { "id": "D", "text": "16 minutes" }
    ],
    "answer": "C",
    "explanation": "Efficiency Eq: 1/(x/4) + 1/(x/5) - 1/10 = 1/x\n4/x + 5/x - 1/x = 1/10\n8/x = 1/10 => x = 80 minutes.\nTime for Pipe A = x/4 = 80/4 = 20 minutes."
  }
];
