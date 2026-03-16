export const questions = [
  {
    id: 1,
    text: "A solid metallic sphere of radius 10.5 cm is melted and recast into small cones of radius 3.5 cm and height 3 cm. How many cones are formed?",
    options: [
      { id: "A", text: "126" },
      { id: "B", text: "105" },
      { id: "C", text: "112" },
      { id: "D", text: "132" }
    ],
    answer: "A",
    explanation: "Volume of Sphere = (4/3) * π * (10.5)³. \nVolume of one Cone = (1/3) * π * (3.5)² * 3. \nNumber of cones = Volume of Sphere / Volume of Cone \n= [(4/3) * π * 10.5 * 10.5 * 10.5] / [(1/3) * π * 3.5 * 3.5 * 3] \n= (4 * 10.5 * 10.5 * 10.5) / (3.5 * 3.5 * 3) \n= (4 * 3 * 3 * 3.5) = 126 cones."
  },
  {
    id: 2,
    text: "A hemispherical tank and a cylinder have the same base and same capacity (volume). Find the ratio of their heights.",
    options: [
      { id: "A", text: "2:3" },
      { id: "B", text: "3:2" },
      { id: "C", text: "1:2" },
      { id: "D", text: "2:1" }
    ],
    answer: "A",
    explanation: "Volume of Hemisphere = (2/3)πr³. \nVolume of Cylinder = πr²h. \n(2/3)πr³ = πr²h \n(2/3)r = h \nh/r = 2/3. In a hemisphere, the 'height' is r. \nRatio = 2:3."
  },
  {
    id: 3,
    text: "The surface areas of two spheres are in the ratio 4:9. What is the ratio of their volumes?",
    options: [
      { id: "A", text: "2:3" },
      { id: "B", text: "4:9" },
      { id: "C", text: "8:27" },
      { id: "D", text: "16:81" }
    ],
    answer: "C",
    explanation: "Ratio of surface areas = (r1/r2)² = 4/9 \nRatio of radii (r1/r2) = 2/3. \nRatio of volumes = (r1/r2)³ = (2/3)³ = 8/27."
  },
  {
    id: 4,
    text: "A rectangular sheet of paper 20 cm by 12 cm is rolled to form a cylinder along its length. What is the volume of the cylinder?",
    options: [
      { id: "A", text: "400/π" },
      { id: "B", text: "1200/π" },
      { id: "C", text: "2400/π" },
      { id: "D", text: "1440/π" }
    ],
    answer: "B",
    explanation: "Circumference of base = 20 cm -> 2πr = 20 -> r = 10/π. \nHeight = 12 cm. \nVolume = πr²h = π * (10/π)² * 12 = π * (100/π²) * 12 = 1200/π cm³."
  },
  {
    id: 5,
    text: "The diagonal of a cube is 4√3 cm. Its surface area is:",
    options: [
      { id: "A", text: "16 sq.cm" },
      { id: "B", text: "48 sq.cm" },
      { id: "C", text: "64 sq.cm" },
      { id: "D", text: "96 sq.cm" }
    ],
    answer: "D",
    explanation: "Diagonal of cube = a√3. \na√3 = 4√3 -> a = 4. \nSurface area = 6a² = 6 * 4² = 6 * 16 = 96 sq.cm."
  },
  {
    id: 6,
    text: "A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of the same radius. The total height of the toy is 15.5 cm. Find the total surface area of the toy.",
    options: [
      { id: "A", text: "214.5 cm²" },
      { id: "B", text: "137.5 cm²" },
      { id: "C", text: "154.5 cm²" },
      { id: "D", text: "514.5 cm²" }
    ],
    answer: "A",
    explanation: "Radius (r) = 3.5. Height of cone = 15.5 - 3.5 = 12 cm. \nSlant height (l) = √(12² + 3.5²) = √156.25 = 12.5 cm. \nTSA = Curved Surface Area of Cone + Curved Surface Area of Hemisphere \n= πrl + 2πr² = π * 3.5 * 12.5 + 2 * π * 3.5² \n= 43.75π + 24.5π = 68.25π \n= 68.25 * (22/7) = 214.5 cm².",
    image: "/images/practice/quantitative/mensuration_q6.svg"
  },
  {
    id: 7,
    text: "A solid cube of side 12 cm is melted and recast into a cylinder of radius 6 cm. Find the height of the cylinder.",
    options: [
      { id: "A", text: "144/π cm" },
      { id: "B", text: "48/π cm" },
      { id: "C", text: "12/π cm" },
      { id: "D", text: "6/π cm" }
    ],
    answer: "B",
    explanation: "Volume of cube = 12 * 12 * 12 = 1728 cm³. \nVolume of cylinder = π * 6² * h = 36πh. \n36πh = 1728 -> πh = 48 -> h = 48/π cm."
  },
  {
    id: 8,
    text: "If the radius of a sphere is doubled, what happens to its surface area?",
    options: [
      { id: "A", text: "It doubles" },
      { id: "B", text: "It triples" },
      { id: "C", text: "It quadruples" },
      { id: "D", text: "It remains same" }
    ],
    answer: "C",
    explanation: "Surface Area = 4πr². \nIf r becomes 2r, New Area = 4π(2r)² = 16πr² = 4 * (4πr²). \nSo it becomes 4 times (quadruples)."
  },
  {
    id: 9,
    text: "A metallic right circular cone of height 9 cm and base radius 7 cm is melted and recast into a cylinder of base radius 3.5 cm. Find the height of the cylinder.",
    options: [
      { id: "A", text: "12 cm" },
      { id: "B", text: "15 cm" },
      { id: "C", text: "18 cm" },
      { id: "D", text: "21 cm" }
    ],
    answer: "A",
    explanation: "Volume of cone = (1/3) * π * 7 * 7 * 9 = 147π. \nVolume of cylinder = π * 3.5 * 3.5 * h = 12.25πh. \n12.25πh = 147π -> 12.25h = 147 -> h = 12 cm."
  },
  {
    id: 10,
    text: "The surface area of a sphere is 616 cm². Find its radius. (Use π = 22/7)",
    options: [
      { id: "A", text: "3.5 cm" },
      { id: "B", text: "7 cm" },
      { id: "C", text: "14 cm" },
      { id: "D", text: "10.5 cm" }
    ],
    answer: "B",
    explanation: "4πr² = 616 \n4 * (22/7) * r² = 616 \n(88/7) * r² = 616 \nr² = (616 * 7) / 88 = 7 * 7 = 49. \nSo r = 7 cm."
  }
];
