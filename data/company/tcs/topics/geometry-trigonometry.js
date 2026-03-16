export const questions = [
  {
    id: 1,
    text: "In a triangle ABC, AB = AC and angle A = 40°. Find the measure of angle B.",
    options: [
      { id: "A", text: "40°" },
      { id: "B", text: "70°" },
      { id: "C", text: "100°" },
      { id: "D", text: "140°" }
    ],
    answer: "B",
    explanation: "Since AB = AC, angle B = angle C. \nTotal angle = 180°. \n40 + B + C = 180 \n2B = 140 \nB = 70°."
  },
  {
    id: 2,
    text: "Given tan θ = 3/4, find the value of sin θ + cos θ.",
    options: [
      { id: "A", text: "7/5" },
      { id: "B", text: "6/5" },
      { id: "C", text: "1" },
      { id: "D", text: "5/7" }
    ],
    answer: "A",
    explanation: "tan θ = Opp/Adj = 3/4. \nHypotenuse = √(3² + 4²) = 5. \nsin θ = 3/5, cos θ = 4/5. \nsin θ + cos θ = 3/5 + 4/5 = 7/5."
  },
  {
    id: 3,
    text: "The distance between two parallel chords of a circle of radius 5 cm is 7 cm. If the lengths of the chords are 6 cm and 8 cm respectively, find the distance of the center from the 8 cm chord.",
    options: [
      { id: "A", text: "3 cm" },
      { id: "B", text: "4 cm" },
      { id: "C", text: "2 cm" },
      { id: "D", text: "1 cm" }
    ],
    answer: "A",
    explanation: "Radius = 5. \nHalf of 6 cm chord = 3. Distance from center = √(5² - 3²) = 4. \nHalf of 8 cm chord = 4. Distance from center = √(5² - 4²) = 3. \n(Note: Chords are on opposite sides since 4 + 3 = 7)."
  },
  {
    id: 4,
    text: "Find the angle of elevation of the sun when the length of the shadow of a tree is √3 times the height of the tree.",
    options: [
      { id: "A", text: "30°" },
      { id: "B", text: "45°" },
      { id: "C", text: "60°" },
      { id: "D", text: "90°" }
    ],
    answer: "A",
    explanation: "tan θ = height / shadow = h / (h√3) = 1/√3. \nθ = 30°."
  },
  {
    id: 5,
    text: "A point (x, y) is equidistant from origin and point (4, 0). If the distance is 4, find x and y.",
    options: [
      { id: "A", text: "x=2, y=√12" },
      { id: "B", text: "x=2, y=2√3" },
      { id: "C", text: "Both A and B" },
      { id: "D", text: "x=4, y=0" }
    ],
    answer: "C",
    explanation: "Distance from (0,0) is 4: x² + y² = 16. \nDistance from (4,0) is 4: (x-4)² + y² = 16. \nx² - 8x + 16 + y² = 16. \nSubstitute x² + y² = 16: 16 - 8x + 16 = 16 \n8x = 16 -> x = 2. \n4 + y² = 16 -> y² = 12 -> y = ±√12 = ±2√3."
  },
  {
    id: 6,
    text: "In the given figure, PQ is a tangent at point P of a circle of radius 5 cm. If OQ = 13 cm (where O is the center), then find the length of PQ.",
    options: [
      { id: "A", text: "12 cm" },
      { id: "B", text: "13 cm" },
      { id: "C", text: "8.5 cm" },
      { id: "D", text: "√194 cm" }
    ],
    answer: "A",
    explanation: "Radius is perpendicular to the tangent at the point of contact. \nIn right triangle OPQ, OP² + PQ² = OQ². \n5² + PQ² = 13² \n25 + PQ² = 169 \nPQ² = 144 -> PQ = 12 cm.",
    image: "/images/practice/quantitative/geometry_q6.svg"
  },
  {
    id: 7,
    text: "Two poles of equal heights are standing opposite each other on either side of an 80m wide road. From a point between them, the angles of elevation of the tops are 60° and 30°. Find the height of the poles.",
    options: [
      { id: "A", text: "20√3 m" },
      { id: "B", text: "40√3 m" },
      { id: "C", text: "20 m" },
      { id: "D", text: "40 m" }
    ],
    answer: "A",
    explanation: "Let height be h and distance of point from one pole be x. \ntan 60° = h/x -> h = x√3. \ntan 30° = h/(80-x) -> h = (80-x)/√3. \nx√3 = (80-x)/√3 -> 3x = 80 - x -> 4x = 80 -> x = 20. \nh = 20√3 m.",
    image: "/images/practice/quantitative/geometry_q7.svg"
  },
  {
    id: 8,
    text: "Find the area of the minor segment of a circle of radius 10 cm, if the chord subtends a right angle at the center. (Use π = 3.14)",
    options: [
      { id: "A", text: "31.4 cm²" },
      { id: "B", text: "28.5 cm²" },
      { id: "C", text: "78.5 cm²" },
      { id: "D", text: "50 cm²" }
    ],
    answer: "B",
    explanation: "Area of sector = (90/360) * π * 10² = (1/4) * 314 = 78.5 cm². \nArea of triangle = (1/2) * base * height = (1/2) * 10 * 10 = 50 cm². \nArea of minor segment = Area of sector - Area of triangle = 78.5 - 50 = 28.5 cm²."
  },
  {
    id: 9,
    text: "If 5 tan θ = 4, then evaluate: (5 sin θ - 3 cos θ) / (5 sin θ + 2 cos θ)",
    options: [
      { id: "A", text: "1/6" },
      { id: "B", text: "1/4" },
      { id: "C", text: "4/5" },
      { id: "D", text: "2/3" }
    ],
    answer: "A",
    explanation: "Dividing numerator and denominator by cos θ: \n= (5 tan θ - 3) / (5 tan θ + 2) \n= (4 - 3) / (4 + 2) = 1/6."
  },
  {
    id: 10,
    text: "Find the ratio in which the y-axis divides the line segment joining points (5, -6) and (-1, -4).",
    options: [
      { id: "A", text: "1:5" },
      { id: "B", text: "5:1" },
      { id: "C", text: "2:3" },
      { id: "D", text: "3:2" }
    ],
    answer: "B",
    explanation: "Let the ratio be k:1. The x-coordinate of the point on y-axis is 0. \nUsing section formula for x: (k*(-1) + 1*5) / (k + 1) = 0 \n-k + 5 = 0 -> k = 5. \nRatio is 5:1."
  }
];
