export const theory = [
  {
    "title": "Cuboid",
    "image": "/images/aptitude/volume/cuboid.png",
    "formulas": [
      { "label": "Volume", "value": "l × b × h cubic units" },
      { "label": "Surface Area", "value": "2(lb + bh + lh) sq. units" },
      { "label": "Diagonal", "value": "√(l² + b² + h²) units" }
    ]
  },
  {
    "title": "Cube",
    "image": "/images/aptitude/volume/cube.png",
    "formulas": [
      { "label": "Volume", "value": "a³ cubic units" },
      { "label": "Surface Area", "value": "6a² sq. units" },
      { "label": "Diagonal", "value": "√3 a units" }
    ]
  },
  {
    "title": "Cylinder",
    "image": "/images/aptitude/volume/cylinder.png",
    "formulas": [
      { "label": "Volume", "value": "πr²h cubic units" },
      { "label": "Curved Surface Area", "value": "2πrh sq. units" },
      { "label": "Total Surface Area", "value": "2πr(h + r) sq. units" }
    ]
  },
  {
    "title": "Cone",
    "image": "/images/aptitude/volume/cone.png",
    "formulas": [
      { "label": "Slant Height (l)", "value": "√(h² + r²) units" },
      { "label": "Volume", "value": "(1/3)πr²h cubic units" },
      { "label": "Curved Surface Area", "value": "πrl sq. units" },
      { "label": "Total Surface Area", "value": "πr(l + r) sq. units" }
    ]
  },
  {
    "title": "Sphere",
    "image": "/images/aptitude/volume/sphere.png",
    "formulas": [
      { "label": "Volume", "value": "(4/3)πr³ cubic units" },
      { "label": "Surface Area", "value": "4πr² sq. units" }
    ]
  },
  {
    "title": "Hemisphere",
    "image": "/images/aptitude/volume/hemisphere.png",
    "formulas": [
      { "label": "Volume", "value": "(2/3)πr³ cubic units" },
      { "label": "Curved Surface Area", "value": "2πr² sq. units" },
      { "label": "Total Surface Area", "value": "3πr² sq. units" }
    ]
  }
];

export const questions = [
  {
    "id": 1,
    "text": "The surface area of a cube is 726 cm². Find the volume of the cube.",
    "options": [
      { "id": "A", "text": "1314 cm³" },
      { "id": "B", "text": "1331 cm³" },
      { "id": "C", "text": "1741 cm³" },
      { "id": "D", "text": "726 cm³" }
    ],
    "answer": "B",
    "explanation": "In a cube, surface area S = 6a²\nGiven S = 726 cm²\n6a² = 726 => a² = 121 => a = 11 cm\nVolume V = a³ = 11³ = 1331 cm³"
  },
  {
    "id": 2,
    "text": "A cube has a diagonal 34.64 m long. Find the volume.",
    "options": [
      { "id": "A", "text": "6000 m³" },
      { "id": "B", "text": "8000 m³" },
      { "id": "C", "text": "7000 m³" },
      { "id": "D", "text": "9000 m³" }
    ],
    "answer": "B",
    "explanation": "In a cube, Diagonal = a√3\nGiven Diagonal = 34.64 m\na√3 = 34.64 => a * 1.732 = 34.64 => a = 20 m\nVolume V = a³ = 20³ = 8000 m³"
  },
  {
    "id": 3,
    "text": "Find the number of lead balls, each 1 cm in diameter, that can be made from a sphere of diameter 12 cm.",
    "options": [
      { "id": "A", "text": "1700" },
      { "id": "B", "text": "1688" },
      { "id": "C", "text": "1278" },
      { "id": "D", "text": "1728" }
    ],
    "answer": "D",
    "explanation": "Radius of larger sphere (R) = 12/2 = 6 cm\nVolume of larger sphere = (4/3)πR³ = (4/3)π(6)³ = 288π cm³\nRadius of small lead ball (r) = 1/2 = 0.5 cm\nVolume of small lead ball = (4/3)πr³ = (4/3)π(0.5)³ = (4/3)π(1/8) = π/6 cm³\nNumber of balls = Volume of larger sphere / Volume of small ball = 288π / (π/6) = 288 * 6 = 1728"
  },
  {
    "id": 4,
    "text": "A cone, a hemisphere and a cylinder stand on equal bases and have the same height. Find the ratio of their volumes.",
    "options": [
      { "id": "A", "text": "1:2:5" },
      { "id": "B", "text": "1:3:2" },
      { "id": "C", "text": "1:2:3" },
      { "id": "D", "text": "3:2:1" }
    ],
    "answer": "C",
    "explanation": "Let R be the radius of each. Height of hemisphere = Its radius = R.\nSince they have the same height, the height of the cone and cylinder must also be R.\nVolume of cone = (1/3)πR²H = (1/3)πR³\nVolume of hemisphere = (2/3)πR³\nVolume of cylinder = πR²H = πR³\nRatio = (1/3)πR³ : (2/3)πR³ : πR³ = 1/3 : 2/3 : 1 = 1 : 2 : 3"
  },
  {
    "id": 5,
    "text": "Two metallic right circular cones having their heights 4.1 cm and 4.3 cm and the radii of their bases 2.1 cm each, have been melted together and recast into a sphere. Find the diameter of the sphere.",
    "options": [
      { "id": "A", "text": "4.1 cm" },
      { "id": "B", "text": "4.2 cm" },
      { "id": "C", "text": "4.6 cm" },
      { "id": "D", "text": "5 cm" }
    ],
    "answer": "B",
    "explanation": "Volume of sphere = Volume of 2 cones\nVolume of sphere = (1/3)π(2.1)²(4.1) + (1/3)π(2.1)²(4.3)\n(4/3)πR³ = (1/3)π(2.1)²(4.1 + 4.3)\n4R³ = (2.1)²(8.4)\nR³ = (2.1)²(2.1) = (2.1)³\nR = 2.1 cm\nDiameter = 2R = 4.2 cm"
  },
  {
    "id": 6,
    "text": "A solid wooden toy is in the shape of a right circular cone mounted on a hemisphere. If the radius of the hemisphere is 4.2 cm and total height of the toy is 10.2 cm, find the volume of the wooden toy.",
    "image": "/images/aptitude/volume/cone_on_hemisphere.png",
    "options": [
      { "id": "A", "text": "244.030 cm³" },
      { "id": "B", "text": "266.112 cm³" },
      { "id": "C", "text": "148.125 cm³" },
      { "id": "D", "text": "278.112 cm³" }
    ],
    "answer": "B",
    "explanation": "Radius (r) = 4.2 cm\nTotal height = 10.2 cm\nHeight of cone (h) = Total height - Radius of hemisphere = 10.2 - 4.2 = 6 cm\nVolume of cone = (1/3)πr²h = (1/3) * (22/7) * (4.2)² * 6 = 110.88 cm³\nVolume of hemisphere = (2/3)πr³ = (2/3) * (22/7) * (4.2)³ = 155.232 cm³\nTotal volume = 110.88 + 155.232 = 266.112 cm³"
  },
  {
    "id": 7,
    "text": "Find the number of bricks, each measuring 25 cm x 12.5 cm x 7.5 cm, required to construct a wall 12 m long, 5 m high and 0.25 m thick, while the sand and the cement mixture occupies 5% of the total volume of wall.",
    "options": [
      { "id": "A", "text": "6080" },
      { "id": "B", "text": "1520" },
      { "id": "C", "text": "3040" },
      { "id": "D", "text": "1216" }
    ],
    "answer": "A",
    "explanation": "Volume of wall = 1200 * 500 * 25 = 15,000,000 cm³\nRemaining volume for bricks = 95% of 15,000,000 = 14,250,000 cm³\nVolume of one brick = 25 * 12.5 * 7.5 = 2343.75 cm³\nNumber of bricks = 14,250,000 / 2343.75 = 6080"
  },
  {
    "id": 8,
    "text": "A spherical cannon ball, 28 cm in diameter is melted and cast into a right circular cone whose base is 35 cm in diameter. Find the height of the cone correct up to two places of decimals.",
    "options": [
      { "id": "A", "text": "8.69 cm" },
      { "id": "B", "text": "35.84 cm" },
      { "id": "C", "text": "5.97 cm" },
      { "id": "D", "text": "17.92 cm" }
    ],
    "answer": "B",
    "explanation": "Volume of sphere = Volume of cone\n(4/3)π(14)³ = (1/3)π(17.5)² * h\n4 * 14³ = 17.5² * h\n4 * 2744 = 306.25 * h\n10976 = 306.25 * h\nh = 10976 / 306.25 = 35.84 cm"
  },
  {
    "id": 9,
    "text": "If V be the volume of a cuboid of dimensions x, y, z and A is its surface area, then A/V will be equal to:",
    "options": [
      { "id": "A", "text": "x²y²z²" },
      { "id": "B", "text": "2/(xy+yz+zx)" },
      { "id": "C", "text": "2(1/x + 1/y + 1/z)" },
      { "id": "D", "text": "1/xyz" }
    ],
    "answer": "C",
    "explanation": "A = 2(xy + yz + zx)\nV = xyz\nA/V = 2(xy + yz + zx) / xyz = 2(xy/xyz + yz/xyz + zx/xyz) = 2(1/z + 1/x + 1/y)"
  },
  {
    "id": 10,
    "text": "A solid is in the form of a cylinder with hemispherical ends. The total height of the solid is 19 cm and the diameter of the cylinder is 7 cm. Find the total surface area of the solid. (Use π = 22/7)",
    "image": "/images/aptitude/volume/cylinder_hemisphere.png",
    "options": [
      { "id": "A", "text": "418 cm²" },
      { "id": "B", "text": "318 cm²" },
      { "id": "C", "text": "468 cm²" },
      { "id": "D", "text": "368 cm²" }
    ],
    "answer": "A",
    "explanation": "Radius (r) = 7/2 = 3.5 cm\nHeight of cylinder (h) = Total height - (2 * Radius) = 19 - 7 = 12 cm\nTotal Surface Area = Curved Surface Area of cylinder + Surface Area of 2 hemispheres\nTSA = 2πrh + 4πr² = 2 * (22/7) * 3.5 * 12 + 4 * (22/7) * (3.5)²\nTSA = 264 + 154 = 418 cm²"
  }
];
