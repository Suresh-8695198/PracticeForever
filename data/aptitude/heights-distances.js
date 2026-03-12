export const theory = [
  {
    title: "Angle of Elevation",
    description: "The angle formed by the line of sight with the horizontal when the object being viewed is above the horizontal level (look up).",
    image: "/images/aptitude/heights/elevation.svg"
  },
  {
    title: "Angle of Depression",
    description: "The angle formed by the line of sight with the horizontal when the object being viewed is below the horizontal level (look down).",
    image: "/images/aptitude/heights/depression.svg"
  },
  {
    title: "Trigonometric Ratios",
    formulas: [
      { label: "tan θ", value: "Perpendicular / Base" },
      { label: "sin θ", value: "Perpendicular / Hypotenuse" },
      { label: "cos θ", value: "Base / Hypotenuse" }
    ]
  },
  {
    title: "Important Values",
    formulas: [
      { label: "tan 30°", value: "1/√3 (≈ 0.577)" },
      { label: "tan 45°", value: "1" },
      { label: "tan 60°", value: "√3 (≈ 1.732)" }
    ]
  }
];

export const questions = [
  {
    id: 1,
    text: "From a point 129 meters from the foot of a cliff on level ground, the angle of elevation of the top of the cliff is 30°. The height of the cliff is:",
    image: "/images/aptitude/heights/elevation.svg",
    options: [
      { id: "A", text: "43√3 metres" },
      { id: "B", text: "129√3 metres" },
      { id: "C", text: "43√3 metres" },
      { id: "D", text: "129 metres" }
    ],
    answer: "C",
    explanation: "Given: Distance BC = 129 m, Angle of elevation ∠ACB = 30°.\nIn ΔABC, tan 30° = AB/BC\n1/√3 = AB / 129\nAB = 129 / √3\nAB = (43 × 3) / √3 = 43√3 m."
  },
  {
    id: 2,
    text: "A 1.6 m tall observer is 45 meters away from a tower. The angle of elevation from his eye to the top of the tower is 30°. Find the height of the tower in meters. (Take √3 = 1.732)",
    image: "/images/aptitude/heights/observer_tower.svg",
    options: [
      { id: "A", text: "25.98" },
      { id: "B", text: "26.58" },
      { id: "C", text: "27.58" },
      { id: "D", text: "27.98" }
    ],
    answer: "C",
    explanation: "Let the observer be CE = 1.6 m and the tower be AD. Distance DE = 45 m.\nBy symmetry, BC = DE = 45 m and BD = CE = 1.6 m.\nIn ΔABC, tan 30° = AB/BC\n1/√3 = AB / 45\nAB = 45 / √3 = 15√3\nAB = 15 × 1.732 = 25.98 m.\nHeight of tower AD = AB + BD = 25.98 + 1.6 = 27.58 m."
  },
  {
    id: 3,
    text: "A boy standing in the middle of a field observes a flying bird in the north at an angle of elevation of 30° and after 2 minutes, he observes the same bird in the south at an angle of elevation of 60°. If the bird flies in a straight line at a height of 50√3 m, find its speed in km/h.",
    options: [
      { id: "A", text: "4.5" },
      { id: "B", text: "3" },
      { id: "C", text: "9" },
      { id: "D", text: "6" }
    ],
    answer: "D",
    explanation: "Height AD = 50√3 m. Let the bird go from B to C.\nIn ΔABD (North), tan 30° = AD/BD (Note: The user text says ∠BAN=30° which is angle with vertical, so ∠BAD=60°). Let's follow the user explanation's logic: ∠BAD = 60°, ∠CAD = 30°.\ntan 60° = BD/AD => √3 = BD/(50√3) => BD = 150 m.\ntan 30° = CD/AD => 1/√3 = CD/(50√3) => CD = 50 m.\nTotal distance BC = BD + CD = 150 + 50 = 200 m = 0.2 km.\nTime = 2 min = 2/60 hr = 1/30 hr.\nSpeed = Distance / Time = 0.2 / (1/30) = 0.2 × 30 = 6 km/hr."
  },
  {
    id: 4,
    text: "A car is travelling on a straight road leading to a tower. From a point 500 m from the tower, the angle of elevation of the top is 30°. After driving towards the tower for 10 seconds, the angle of elevation is 60°. Find the speed of the car.",
    options: [
      { id: "A", text: "135 km/hr" },
      { id: "B", text: "110 km/hr" },
      { id: "C", text: "120 km/hr" },
      { id: "D", text: "90 km/hr" }
    ],
    answer: "C",
    explanation: "Initial distance BC = 500 m. In ΔABC, tan 30° = AB/500 => AB = 500/√3.\nAfter 10s, car is at D. In ΔABD, tan 60° = AB/BD => √3 = (500/√3) / BD => BD = 500/3 m.\nDistance moved CD = BC - BD = 500 - 500/3 = 1000/3 m.\nSpeed = (1000/3) / 10 = 100/3 m/s.\nIn km/hr: (100/3) × (18/5) = 20 × 6 = 120 km/hr."
  },
  {
    id: 5,
    text: "A kite is flying at a height of 75m from the ground. The string makes an angle θ with the ground where cot θ = 8/15. Assuming no slack in the string, find the length of the string.",
    options: [
      { id: "A", text: "85 metre" },
      { id: "B", text: "65 metre" },
      { id: "C", text: "75 metre" },
      { id: "D", text: "40 metre" }
    ],
    answer: "A",
    explanation: "Height AB = 75 m. cot θ = 8/15 (Base/Perpendicular).\nSo, Base BC = 75 * (8/15) = 40 m.\nLength of string AC (Hypotenuse) = √(AB² + BC²) = √(75² + 40²) = √(5625 + 1600) = √7225 = 85 m."
  },
  {
    id: 6,
    text: "A man is climbing a ladder which is inclined to the wall at an angle of 30°. If he ascends at a rate of 2 m/s, then he approaches the wall at the rate of:",
    options: [
      { id: "A", text: "1.5 m/s" },
      { id: "B", text: "1 m/s" },
      { id: "C", text: "2 m/s" },
      { id: "D", text: "2.5 m/s" }
    ],
    answer: "B",
    explanation: "Let the ladder length ascended be y and distance from wall be x. The angle with the wall is 30°.\nx = y * sin 30°.\nRate of approaching wall dx/dt = (dy/dt) * sin 30° = 2 * (1/2) = 1 m/s."
  },
  {
    id: 7,
    text: "A person of height 6 ft wants to pluck a fruit on a 26/3 ft high tree. If he is standing 8/√3 ft away from the base, at what angle should he throw a stone to hit the fruit?",
    options: [
      { id: "A", text: "75°" },
      { id: "B", text: "30°" },
      { id: "C", text: "45°" },
      { id: "D", text: "60°" }
    ],
    answer: "B",
    explanation: "Tree height = 26/3 ft. Person height = 6 ft. Relative height AE = 26/3 - 6 = 8/3 ft.\nDistance CE = 8/√3 ft.\ntan θ = AE / CE = (8/3) / (8/√3) = √3/3 = 1/√3.\nθ = 30°."
  },
  {
    id: 8,
    text: "A pilot in an aeroplane at an altitude of 200 m observes two points on either side of a river. If the angles of depression are 45° and 60°, find the width of the river.",
    image: "/images/aptitude/heights/opposite_points.svg",
    options: [
      { id: "A", text: "200(1 + 1/√3) m" },
      { id: "B", text: "200(1 - 1/√3) m" },
      { id: "C", text: "400/√3 m" },
      { id: "D", text: "400 m" }
    ],
    answer: "A",
    explanation: "Altitude AD = 200 m. Let points be B and C on opposite sides.\ntan 45° = AD/BD => 1 = 200/BD => BD = 200 m.\ntan 60° = AD/DC => √3 = 200/DC => DC = 200/√3 m.\nWidth BC = BD + DC = 200 + 200/√3 = 200(1 + 1/√3) m."
  },
  {
    id: 9,
    text: "A straight tree breaks due to a storm and the broken part bends so that the top touches the ground at an angle of 30°. The distance from the foot to where the top touches is 10 m. Find the total height of the tree.",
    image: "/images/aptitude/heights/broken_tree.svg",
    options: [
      { id: "A", text: "10√3 m" },
      { id: "B", text: "20√3 m" },
      { id: "C", text: "15√3 m" },
      { id: "D", text: "10(√3+1) m" }
    ],
    answer: "A",
    explanation: "Let the standing part be h1 and broken part be h2. Distance = 10 m.\ntan 30° = h1/10 => h1 = 10/√3 m.\ncos 30° = 10/h2 => √3/2 = 10/h2 => h2 = 20/√3 m.\nTotal height = h1 + h2 = 10/√3 + 20/√3 = 30/√3 = 10√3 m."
  },
  {
    id: 10,
    text: "A tower is broken at point P. The top makes 60° with the ground at Q. From another point R on the opposite side of Q, the angle of elevation of P is 30°. If QR = 180 m, find the total height of the tower.",
    options: [
      { id: "A", text: "90 m" },
      { id: "B", text: "45√3 m" },
      { id: "C", text: "45(√3+1) m" },
      { id: "D", text: "45(√3+2) m" }
    ],
    answer: "D",
    explanation: "Let height PS = x. In ΔPRS, tan 30° = x/RS => RS = x√3.\nIn ΔPQS, tan 60° = x/QS => QS = x/√3.\nRS + QS = 180 => x√3 + x/√3 = 180 => (3x + x)/√3 = 180 => 4x = 180√3 => x = 45√3 m.\nBroken part PQ = x / sin 60° = (45√3) / (√3/2) = 90 m.\nTotal height = PS + PQ = 45√3 + 90 = 45(√3 + 2) m."
  },
  {
    id: 11,
    text: "A tower stands on top of a 40m high building. The angles of depression of a point on the ground from the top and bottom of the tower are 60° and 45° respectively. Find the height of the tower.",
    options: [
      { id: "A", text: "20√3 m" },
      { id: "B", text: "30(√3+1) m" },
      { id: "C", text: "40(√3-1) m" },
      { id: "D", text: "50(√3-1) m" }
    ],
    answer: "C",
    explanation: "Building height = 40m. Let tower height be h.\ntan 45° = 40/x => x = 40m (distance to point).\ntan 60° = (40+h)/x => √3 = (40+h)/40 => 40√3 = 40 + h => h = 40(√3 - 1) m."
  },
  {
    id: 12,
    text: "A tree is broken by the wind. Its top struck the ground at an angle of 30° and at a distance of 30 m from the root. Find the height of the tree.",
    options: [
      { id: "A", text: "25√3 m" },
      { id: "B", text: "30√3 m" },
      { id: "C", text: "15√3 m" },
      { id: "D", text: "20√3 m" }
    ],
    answer: "B",
    explanation: "Similar to Q9. Standing part = 30 tan 30° = 30/√3 = 10√3 m.\nBroken part = 30 / cos 30° = 30 / (√3/2) = 60/√3 = 20√3 m.\nTotal height = 10√3 + 20√3 = 30√3 m."
  },
  {
    id: 13,
    text: "A vertical tower is surmounted by a flagstaff of height h. At a point on the plane, the angle of elevation of the bottom of the flagstaff is α and that of the top is β. Find the height of the tower.",
    image: "/images/aptitude/heights/tower_flagstaff.svg",
    options: [
      { id: "A", text: "h tan α / (tan β - tan α)" },
      { id: "B", text: "h tan α / (tan β + tan α)" },
      { id: "C", text: "h tan β / (tan β - tan α)" },
      { id: "D", text: "None of these" }
    ],
    answer: "A",
    explanation: "Let tower height be H and point distance be x.\ntan α = H/x => x = H/tan α.\ntan β = (H+h)/x => x = (H+h)/tan β.\nH/tan α = (H+h)/tan β => H tan β = H tan α + h tan α\nH(tan β - tan α) = h tan α => H = h tan α / (tan β - tan α)."
  },
  {
    id: 14,
    text: "From a bridge 2.5m high, the angles of depression of the banks on opposite sides are 30° and 45°. Find the width of the river. (Take √3 = 1.732)",
    options: [
      { id: "A", text: "5.83m" },
      { id: "B", text: "6.83m" },
      { id: "C", text: "5.76m" },
      { id: "D", text: "6.87m" }
    ],
    answer: "B",
    explanation: "Height = 2.5m.\nDistance to one bank = 2.5 / tan 30° = 2.5√3 = 2.5 * 1.732 = 4.33m.\nDistance to other bank = 2.5 / tan 45° = 2.5m.\nWidth = 4.33 + 2.5 = 6.83m."
  },
  {
    id: 15,
    text: "From a point P on level ground, the angle of elevation of the top of a tower is 30°. If the tower is 270 m high, find the distance of P from the foot.",
    options: [
      { id: "A", text: "476.65 m" },
      { id: "B", text: "367.65 m" },
      { id: "C", text: "467.65 m" },
      { id: "D", text: "376.65 m" }
    ],
    answer: "C",
    explanation: "Height = 270m, θ = 30°.\ntan 30° = 270/x => 1/√3 = 270/x => x = 270√3.\nx = 270 * 1.732 = 467.64 ≈ 467.65 m."
  }
];
