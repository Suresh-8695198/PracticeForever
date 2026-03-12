export const questions = [
  {
    "id": 1,
    "text": "The time taken by a train to cross a platform of length 200 m is 30 seconds and to cross an electric pole is 20 seconds. Find the speed of the train in km/hr.",
    "options": [
      { "id": "A", "text": "72 km/hr" },
      { "id": "B", "text": "54 km/hr" },
      { "id": "C", "text": "45 km/hr" },
      { "id": "D", "text": "36 km/hr" }
    ],
    "answer": "A",
    "explanation": "Let the length of the train be L.\nSpeed (S) = (L + 200) / 30 ... (i)\nSpeed (S) = L / 20 ... (ii)\nFrom (i) and (ii), (L + 200) / 30 = L / 20\n=> 2(L + 200) = 3L\n=> 2L + 400 = 3L => L = 400 m.\nSpeed = 400 / 20 = 20 m/s.\nIn km/hr, speed = 20 * (18/5) = 72 km/hr."
  },
  {
    "id": 2,
    "text": "The total time taken by a train to cross a standing person and a platform of length 400 m is 56 seconds and the speed of the train is 25 m/s. Find the time taken by the train to cross an electric pole, if it decreases its speed by 20%.",
    "options": [
      { "id": "A", "text": "20 seconds" },
      { "id": "B", "text": "15 seconds" },
      { "id": "C", "text": "8 seconds" },
      { "id": "D", "text": "25 seconds" }
    ],
    "answer": "D",
    "explanation": "Let the length of the train be L.\nTime to cross person + Time to cross platform = 56 seconds.\n(L / 25) + ((L + 400) / 25) = 56\n=> (2L + 400) / 25 = 56\n=> 2L + 400 = 1400 => 2L = 1000 => L = 500 m.\nNew speed = 25 * 80/100 = 20 m/s.\nTime to cross pole = L / New speed = 500 / 20 = 25 seconds."
  },
  {
    "id": 3,
    "text": "A 150 m long train crosses a platform double its length in 18 seconds. Find the speed of the train.",
    "options": [
      { "id": "A", "text": "60 kmph" },
      { "id": "B", "text": "72 kmph" },
      { "id": "C", "text": "80 kmph" },
      { "id": "D", "text": "90 kmph" }
    ],
    "answer": "D",
    "explanation": "Length of train = 150 m.\nLength of platform = 2 * 150 = 300 m.\nTotal distance = 150 + 300 = 450 m.\nSpeed = Total distance / Time = 450 / 18 = 25 m/s.\nIn km/hr, speed = 25 * (18/5) = 90 km/hr."
  },
  {
    "id": 4,
    "text": "Train A crosses train B running in the same direction at a speed of 60 kmph in 72 seconds. If train A crosses an electric pole in 18 seconds and the speed of train A is more than the speed of train B, then find the length of train B.",
    "options": [
      { "id": "A", "text": "150 m" },
      { "id": "B", "text": "200 m" },
      { "id": "C", "text": "250 m" },
      { "id": "D", "text": "300 m" },
      { "id": "E", "text": "Cannot be determined" }
    ],
    "answer": "E",
    "explanation": "Let lengths be La, Lb and speeds be Sa, Sb.\n(La + Lb) = (Sa - Sb) * 72 seconds.\nLa = Sa * 18 seconds.\nWe have two equations with four variables (La, Lb, Sa, Sb). Even with Sb = 60 kmph, we still have three unknowns (La, Lb, Sa) and only two independent equations. Thus, the length of train B cannot be determined."
  },
  {
    "id": 5,
    "text": "A train crosses a man standing on a platform in 12 seconds and also crosses a 360 m long tunnel in 24 seconds. Find the length of the train.",
    "options": [
      { "id": "A", "text": "240 meters" },
      { "id": "B", "text": "280 meters" },
      { "id": "C", "text": "320 meters" },
      { "id": "D", "text": "360 meters" }
    ],
    "answer": "D",
    "explanation": "Let L be length and S be speed.\nL = S * 12 ... (i)\nL + 360 = S * 24 ... (ii)\nSubstituting (i) into (ii): 12S + 360 = 24S\n=> 12S = 360 => S = 30 m/s.\nLength L = 12 * 30 = 360 m."
  },
  {
    "id": 6,
    "text": "A train passes a station platform in 24 sec and a man standing on the platform in 15 sec. If the speed of the train is 36 km/hr, what is the length of the platform?",
    "options": [
      { "id": "A", "text": "90 m" },
      { "id": "B", "text": "75 m" },
      { "id": "C", "text": "100 m" },
      { "id": "D", "text": "120 m" }
    ],
    "answer": "A",
    "explanation": "Speed = 36 km/hr = 36 * (5/18) = 10 m/s.\nLength of train = Speed * Time to cross man = 10 * 15 = 150 m.\nLength of train + platform = Speed * Time to cross platform = 10 * 24 = 240 m.\nLength of platform = 240 - 150 = 90 m."
  },
  {
    "id": 7,
    "text": "A train running at 30 kmph takes 15 seconds to pass a platform. Next, it takes 12 seconds to pass a man walking at 6 kmph in the opposite direction. Find the length of the train.",
    "options": [
      { "id": "A", "text": "120 m" },
      { "id": "B", "text": "180 m" },
      { "id": "C", "text": "240 m" },
      { "id": "D", "text": "280 m" }
    ],
    "answer": "A",
    "explanation": "Speed of train = 30 kmph.\nSpeed of man = 6 kmph (opposite direction).\nRelative speed = 30 + 6 = 36 kmph = 10 m/s.\nLength of train = Relative speed * Time = 10 * 12 = 120 m."
  },
  {
    "id": 8,
    "text": "The distance between two stations A and B is 246 km. A train starts from A moving towards B at 24 kmph. Another starts from B 10 minutes earlier and moves towards A at 36 kmph. How far from A will the two trains meet?",
    "options": [
      { "id": "A", "text": "96 km" },
      { "id": "B", "text": "80 km" },
      { "id": "C", "text": "120 km" },
      { "id": "D", "text": "190 km" }
    ],
    "answer": "A",
    "explanation": "Train B starts 10 mins early. Distance covered by B in 10 mins = 36 * (10/60) = 6 km.\nRemaining distance = 246 - 6 = 240 km.\nRelative speed = 24 + 36 = 60 kmph.\nTime to meet = 240 / 60 = 4 hours.\nDistance from A = Speed of A * Time = 24 * 4 = 96 km."
  },
  {
    "id": 9,
    "text": "Train A crosses train B running in the same direction in 60 seconds and train B crosses a pole in 8 seconds. If the ratio of the length of train A to B is 3:2 and train B is faster than A, then find the speed of train A.",
    "options": [
      { "id": "A", "text": "40 kmph" },
      { "id": "B", "text": "60 kmph" },
      { "id": "C", "text": "90 kmph" },
      { "id": "D", "text": "Cannot be determined" }
    ],
    "answer": "D",
    "explanation": "Let lengths be 3x and 2x, and speeds be Sa and Sb.\n(3x + 2x) = (Sb - Sa) * 60 => 5x = 60(Sb - Sa).\n2x = Sb * 8 => x = 4Sb.\nSubstituting x: 5(4Sb) = 60(Sb - Sa) => 20Sb = 60Sb - 60Sa => 60Sa = 40Sb => Sa = (2/3)Sb.\nSince we don't have absolute values for any length or speed, we cannot find the numerical value of Sa."
  },
  {
    "id": 10,
    "text": "A train crosses a 200 m long bridge in 15 seconds and crosses a tree in 10 seconds. Find the speed of the train in km/hr.",
    "options": [
      { "id": "A", "text": "90 km/hr" },
      { "id": "B", "text": "144 km/hr" },
      { "id": "C", "text": "54 km/hr" },
      { "id": "D", "text": "108 km/hr" }
    ],
    "answer": "B",
    "explanation": "Let L be length and S be speed.\nL = S * 10.\nL + 200 = S * 15.\n10S + 200 = 15S => 5S = 200 => S = 40 m/s.\nSpeed in km/hr = 40 * (18/5) = 144 km/hr."
  }
];
