export const theory = [
  {
    "title": "Non-Verbal Analogy",
    "description": "Non-verbal analogy involves comparing two figures to identify a relationship and then applying that exact relationship to find the missing fourth figure. Relationships can involve rotation, reflection, addition of elements, shading changes, or geometric transformations.",
    "image": "/images/aptitude/nv-analogy.svg",
    "formulas": [
      { "label": "Relation Type 1", "value": "Shape change (e.g. Square to Circle)." },
      { "label": "Relation Type 2", "value": "Quantity change (e.g. 1 dot to 2 dots)." },
      { "label": "Relation Type 3", "value": "Positional change (Mirror, Water, Rotation)." }
    ]
  }
];

export const questions = [
  {
    "id": 12101,
    "text": "Identify the relationship and find the missing figure.",
    "image": "<svg width='300' height='100' viewBox='0 0 300 100'><rect x='10' y='10' width='40' height='40' fill='none' stroke='black'/><text x='60' y='35'>:</text><rect x='85' y='10' width='40' height='40' fill='black'/><text x='135' y='35'>::</text><circle cx='175' cy='30' r='20' fill='none' stroke='black'/><text x='205' y='35'>: ?</text></svg>",
    "options": [
      { "id": "1", "text": "A", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='20' fill='black'/></svg>" },
      { "id": "2", "text": "B", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='20' fill='none' stroke='black'/></svg>" },
      { "id": "3", "text": "C", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><rect x='10' y='10' width='40' height='40' fill='black'/></svg>" },
      { "id": "4", "text": "D", "image": "<svg width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='10' fill='black'/></svg>" }
    ],
    "answer": "1",
    "explanation": "The relationship is Hollow Shape -> Solid Shape. Since a hollow square becomes a solid square, a hollow circle must become a solid circle."
  },
  {
    "id": 12102,
    "text": "Complete the analogy based on the transformation rule.",
    "image": "Upward Triangle : Downward Triangle :: Upward Arrow : ?",
    "options": [
      { "id": "1", "text": "Downward Arrow" },
      { "id": "2", "text": "Rightward Arrow" },
      { "id": "3", "text": "Bent Arrow" },
      { "id": "4", "text": "No Arrow" }
    ],
    "answer": "1",
    "explanation": "The relationship is vertical inversion (or a 180-degree rotation). An upward shape becomes downward oriented."
  },
  {
    "id": 12103,
    "text": "Identify the side-count relationship: Triangle (3) : Square (4) :: Pentagon (5) : ?",
    "options": [
      { "id": "1", "text": "Hexagon (6)" },
      { "id": "2", "text": "Square (4)" },
      { "id": "3", "text": "Circle" },
      { "id": "4", "text": "Octagon (8)" }
    ],
    "answer": "1",
    "explanation": "The rule is Side Count + 1. Pentagon (5 sides) becomes Hexagon (6 sides)."
  },
  {
    "id": 12104,
    "text": "Analogy: Large Square : 4 Small Squares :: Large Circle : ?",
    "options": [
      { "id": "1", "text": "4 Small Circles (or quadrants)" },
      { "id": "2", "text": "One Triangle" },
      { "id": "3", "text": "Two Dots" },
      { "id": "4", "text": "Hexagon" }
    ],
    "answer": "1",
    "explanation": "The relationship is dividing a single large unit into four identical smaller units of the same shape."
  },
  {
    "id": 12105,
    "text": "A : B :: G : ?",
    "options": [
      { "id": "1", "text": "H" },
      { "id": "2", "text": "I" },
      { "id": "3", "text": "F" },
      { "id": "4", "text": "A" }
    ],
    "answer": "1",
    "explanation": "Positional analogy in alphabetical order. A is followed by B, so G is followed by H."
  },
  {
    "id": 12106,
    "text": "One Dot : Circle :: Many Dots : ?",
    "options": [
      { "id": "1", "text": "Cloud or Shaded Region" },
      { "id": "2", "text": "Square" },
      { "id": "3", "text": "Triangle" },
      { "id": "4", "text": "Line" }
    ],
    "answer": "1",
    "explanation": "Singular element vs grouped/continuous representation of the same concept (points vs area)."
  },
  {
    "id": 12107,
    "text": "Identify mirror relationship: 'L' : Reverted 'L' :: 'P' : ?",
    "options": [
      { "id": "1", "text": "Backwards 'P' (similar to 'q')" },
      { "id": "2", "text": "'b'" },
      { "id": "3", "text": "'d'" },
      { "id": "4", "text": "Inverted 'P'" }
    ],
    "answer": "1",
    "explanation": "The relationship is lateral inversion (vertical mirror reflection)."
  },
  {
    "id": 12108,
    "text": "Complete the analogy: Square : Cube :: Circle : ?",
    "options": [
      { "id": "1", "text": "Sphere" },
      { "id": "2", "text": "Cylinder" },
      { "id": "3", "text": "Cone" },
      { "id": "4", "text": "Disc" }
    ],
    "answer": "1",
    "explanation": "The relationship is transitioning from a 2D shape to its corresponding 3D solid."
  },
  {
    "id": 12109,
    "text": "Circle : Semi-circle :: Square : ?",
    "options": [
      { "id": "1", "text": "Rectangle" },
      { "id": "2", "text": "Triangle" },
      { "id": "3", "text": "Line" },
      { "id": "4", "text": "Rhombus" }
    ],
    "answer": "1",
    "explanation": "Dividing the original shape exactly in half. A square cut in half results in a rectangle (or two)."
  },
  {
    "id": 12110,
    "text": "Smile : Face :: Wheel : ?",
    "options": [
      { "id": "1", "text": "Car" },
      { "id": "2", "text": "Road" },
      { "id": "3", "text": "Brake" },
      { "id": "4", "text": "Tire" }
    ],
    "answer": "1",
    "explanation": "Part-to-Whole relationship. A smile is part of a face, a wheel is part of a car."
  },
  {
    "id": 12111,
    "text": "Identify the number logic: 3 segments : Triangle :: 4 segments : ?",
    "options": [
      { "id": "1", "text": "Square" },
      { "id": "2", "text": "Circle" },
      { "id": "3", "text": "Point" },
      { "id": "4", "text": "Angle" }
    ],
    "answer": "1",
    "explanation": "Number of line segments required to form the polygon."
  },
  {
    "id": 12112,
    "text": "Analogy: Pointing North : Pointing East :: Pointing South : ?",
    "options": [
      { "id": "1", "text": "Pointing West" },
      { "id": "2", "text": "Pointing North" },
      { "id": "3", "text": "Pointing South" },
      { "id": "4", "text": "None" }
    ],
    "answer": "1",
    "explanation": "The relation is a 90-degree clockwise rotation."
  },
  {
    "id": 12113,
    "text": "Clock : Time :: Thermometer : ?",
    "options": [
      { "id": "1", "text": "Temperature" },
      { "id": "2", "text": "Heat" },
      { "id": "3", "text": "Weather" },
      { "id": "4", "text": "Medicine" }
    ],
    "answer": "1",
    "explanation": "Tool to quantity measured relationship."
  },
  {
    "id": 12114,
    "text": "Day : Light :: Night : ?",
    "options": [
      { "id": "1", "text": "Darkness" },
      { "id": "2", "text": "Stars" },
      { "id": "3", "text": "Moon" },
      { "id": "4", "text": "Sleep" }
    ],
    "answer": "1",
    "explanation": "Characteristic state relationship."
  },
  {
    "id": 12115,
    "text": "Complete: Ice : Solid :: Water : ?",
    "options": [
      { "id": "1", "text": "Liquid" },
      { "id": "2", "text": "Clear" },
      { "id": "3", "text": "Cold" },
      { "id": "4", "text": "Gas" }
    ],
    "answer": "1",
    "explanation": "State of matter relationship."
  },
  {
    "id": 12116,
    "text": "Hollow Circle with a Dot : Hollow Square with a Circle :: Hollow Triangle with a Dot : ?",
    "options": [
      { "id": "1", "text": "Hollow Triangle with a Circle" },
      { "id": "2", "text": "Solid Triangle" },
      { "id": "3", "text": "Hollow Square with a Triangle" },
      { "id": "4", "text": "Dot" }
    ],
    "answer": "1",
    "explanation": "The internal element changes from a Dot to a Circle while the outer shape is preserved."
  },
  {
    "id": 12117,
    "text": "Analogy: Red : Danger :: Green : ?",
    "options": [
      { "id": "1", "text": "Safety or Go" },
      { "id": "2", "text": "Wait" },
      { "id": "3", "text": "Grass" },
      { "id": "4", "text": "Blue" }
    ],
    "answer": "1",
    "explanation": "Symbolic meaning relationship."
  },
  {
    "id": 12118,
    "text": "Complete: Fish : Fins :: Bird : ?",
    "options": [
      { "id": "1", "text": "Wings" },
      { "id": "2", "text": "Feathers" },
      { "id": "3", "text": "Beak" },
      { "id": "4", "text": "Sky" }
    ],
    "answer": "1",
    "explanation": "Primary means of propulsion relationship."
  },
  {
    "id": 12119,
    "text": "Pen : Write :: Knife : ?",
    "options": [
      { "id": "1", "text": "Cut" },
      { "id": "2", "text": "Eat" },
      { "id": "3", "text": "Sharp" },
      { "id": "4", "text": "Steel" }
    ],
    "answer": "1",
    "explanation": "Tool-Action relationship."
  },
  {
    "id": 12120,
    "text": "Sequence: (::) : (:::) :: (::::) : ?",
    "options": [
      { "id": "1", "text": "(:::::)" },
      { "id": "2", "text": "(:::)" },
      { "id": "3", "text": "(::::::::)" },
      { "id": "4", "text": "Square" }
    ],
    "answer": "1",
    "explanation": "The dot count increases by one in the second pair as it did in the first."
  },
  {
    "id": 12121,
    "text": "Bonus: Up : Down :: Open : ?",
    "options": [
      { "id": "1", "text": "Closed" },
      { "id": "2", "text": "Door" },
      { "id": "3", "text": "Shut" },
      { "id": "4", "text": "Wide" }
    ],
    "answer": "1",
    "explanation": "Opposite relationship (Antonyms)."
  }
];
