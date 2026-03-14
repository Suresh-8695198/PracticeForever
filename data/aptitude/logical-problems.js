export const theory = [
  {
    "title": "Logical Problems Introduction",
    "description": "Logical problems consist of three statements. Based on the first two statements, the third statement may be true, false, or uncertain. The goal is to evaluate if the facts presented in the first two statements lead logically to the third.",
    "image": "/images/aptitude/logical-problems.png"
  },
  {
    "title": "Solving Strategy",
    "description": "Translate abstract relationships into real-world visualizations. Use charts for ages, diagrams for directions (North, South, East, West), or symbol-based mappings for comparisons (e.g., A > B) to see the facts more clearly.",
    "image": "/images/aptitude/logical-problems.png"
  }
];

export const questions = [
  {
    "id": 7001,
    "type": "passage-group",
    "passage": "1. Tanya is older than Eric.\n2. Cliff is older than Tanya.\n3. Eric is older than Cliff.",
    "subQuestions": [
      {
        "id": "7001_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "If Tanya > Eric and Cliff > Tanya, then Cliff > Eric. Therefore, Eric cannot be older than Cliff."
      }
    ]
  },
  {
    "id": 7002,
    "type": "passage-group",
    "passage": "1. During the past year, Josh saw more movies than Stephen.\n2. Stephen saw fewer movies than Darren.\n3. Darren saw more movies than Josh.",
    "subQuestions": [
      {
        "id": "7002_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "We know Josh > Stephen and Darren > Stephen. However, the relationship between Josh and Darren is not defined."
      }
    ]
  },
  {
    "id": 7003,
    "type": "passage-group",
    "passage": "1. All the tulips in Zoe’s garden are white.\n2. All the pansies in Zoe’s garden are yellow.\n3. All the flowers in Zoe’s garden are either white or yellow.",
    "subQuestions": [
      {
        "id": "7003_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "We know the colors of tulips and pansies, but there might be other types of flowers in the garden whose colors are unknown."
      }
    ]
  },
  {
    "id": 7004,
    "type": "passage-group",
    "passage": "1. Blueberries cost more than strawberries.\n2. Blueberries cost less than raspberries.\n3. Raspberries cost more than both strawberries and blueberries.",
    "subQuestions": [
      {
        "id": "7004_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "If Blueberries > Strawberries and Raspberries > Blueberries, then Raspberries are the most expensive of the three."
      }
    ]
  },
  {
    "id": 7005,
    "type": "passage-group",
    "passage": "1. All the offices on the 9th floor have wall-to-wall carpeting.\n2. No wall-to-wall carpeting is pink.\n3. None of the offices on the 9th floor has pink wall-to-wall carpeting.",
    "subQuestions": [
      {
        "id": "7005_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Since all offices have wall-to-wall carpeting and none of that carpeting is pink, no office on the 9th floor has pink carpeting."
      }
    ]
  },
  {
    "id": 7006,
    "type": "passage-group",
    "passage": "1. Class A has a higher enrollment than Class B.\n2. Class C has a lower enrollment than Class B.\n3. Class A has a lower enrollment than Class C.",
    "subQuestions": [
      {
        "id": "7006_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "Class A > Class B and Class B > Class C. This means Class A has the highest enrollment, so it cannot be lower than Class C."
      }
    ]
  },
  {
    "id": 7007,
    "type": "passage-group",
    "passage": "1. Rover weighs less than Fido.\n2. Rover weighs more than Boomer.\n3. Of the three dogs, Boomer weighs the least.",
    "subQuestions": [
      {
        "id": "7007_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Fido > Rover and Rover > Boomer. Therefore, Boomer is the lightest."
      }
    ]
  },
  {
    "id": 7008,
    "type": "passage-group",
    "passage": "1. All the trees in the park are flowering trees.\n2. Some of the trees in the park are dogwoods.\n3. All dogwoods are flowering trees.",
    "subQuestions": [
      {
        "id": "7008_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "While the dogwoods in the park are flowering trees, we cannot assume all dogwoods everywhere are flowering trees based solely on this information."
      }
    ]
  },
  {
    "id": 7009,
    "type": "passage-group",
    "passage": "1. Apartments in the Riverdale Manor cost less than apartments in The Gaslight Commons.\n2. Apartments in the Livingston Gate cost more than apartments in The Gaslight Commons.\n3. Of the three apartment buildings, the Livingston Gate costs the most.",
    "subQuestions": [
      {
        "id": "7009_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Livingston Gate > Gaslight Commons and Gaslight Commons > Riverdale Manor. Thus, Livingston Gate is the most expensive."
      }
    ]
  },
  {
    "id": 7010,
    "type": "passage-group",
    "passage": "1. The Kingston Mall has more stores than the Galleria.\n2. The Four Corners Mall has fewer stores than the Galleria.\n3. The Kingston Mall has more stores than the Four Corners Mall.",
    "subQuestions": [
      {
        "id": "7010_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Kingston Mall > Galleria and Galleria > Four Corners Mall. Kingston Mall has the most stores."
      }
    ]
  },
  {
    "id": 7011,
    "type": "passage-group",
    "passage": "1. Mara runs faster than Gail.\n2. Lily runs faster than Mara.\n3. Gail runs faster than Lily.",
    "subQuestions": [
      {
        "id": "7011_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "Lily > Mara and Mara > Gail. Therefore, Lily is the fastest, and Gail cannot be faster than Lily."
      }
    ]
  },
  {
    "id": 7012,
    "type": "passage-group",
    "passage": "1. Oat cereal has more fiber than corn cereal but less fiber than bran cereal.\n2. Corn cereal has more fiber than rice cereal but less fiber than wheat cereal.\n3. Of the three kinds of cereal (Oat, Corn, Rice), rice cereal has the least amount of fiber.",
    "subQuestions": [
      {
        "id": "7012_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Oat > Corn and Corn > Rice. Thus, among these three, Rice has the least fiber."
      }
    ]
  },
  {
    "id": 7013,
    "type": "passage-group",
    "passage": "1. Jenna weighs more than Jason.\n2. Jason weighs less than Jasmine.\n3. Of the three babies, Jasmine weighs the most.",
    "subQuestions": [
      {
        "id": "7013_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "Both Jenna and Jasmine weigh more than Jason, but we don't know who weighs more between Jenna and Jasmine."
      }
    ]
  },
  {
    "id": 7014,
    "type": "passage-group",
    "passage": "1. The temperature on Monday was lower than on Tuesday.\n2. The temperature on Wednesday was lower than on Tuesday.\n3. The temperature on Monday was higher than on Wednesday.",
    "subQuestions": [
      {
        "id": "7014_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "Tuesday had the highest temperature, but we don't know the relative temperatures of Monday and Wednesday."
      }
    ]
  },
  {
    "id": 7015,
    "type": "passage-group",
    "passage": "1. Spot is bigger than King and smaller than Sugar.\n2. Ralph is smaller than Sugar and bigger than Spot.\n3. King is bigger than Ralph.",
    "subQuestions": [
      {
        "id": "7015_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "Sugar > Ralph > Spot > King. Therefore, Ralph is bigger than King."
      }
    ]
  },
  {
    "id": 7016,
    "type": "passage-group",
    "passage": "1. A fruit basket contains more apples than lemons.\n2. There are more lemons in the basket than there are oranges.\n3. The basket contains more apples than oranges.",
    "subQuestions": [
      {
        "id": "7016_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Apples > Lemons and Lemons > Oranges. Apples > Oranges is logically true."
      }
    ]
  },
  {
    "id": 7017,
    "type": "passage-group",
    "passage": "1. The Shop and Save Grocery is south of Greenwood Pharmacy.\n2. Rebecca’s house is northeast of Greenwood Pharmacy.\n3. Rebecca’s house is west of the Shop and Save Grocery.",
    "subQuestions": [
      {
        "id": "7017_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "If the House is Northeast of Pharmacy and Pharmacy is North of Grocery, the House must be Northeast of the Grocery, not West."
      }
    ]
  },
  {
    "id": 7018,
    "type": "passage-group",
    "passage": "1. Joe is younger than Kathy.\n2. Mark was born after Joe.\n3. Kathy is older than Mark.",
    "subQuestions": [
      {
        "id": "7018_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Kathy > Joe (older) and Joe > Mark (older). Thus Kathy > Mark."
      }
    ]
  },
  {
    "id": 7019,
    "type": "passage-group",
    "passage": "1. All spotted Gangles have long tails.\n2. Short-haired Gangles always have short tails.\n3. Long-tailed Gangles never have short hair.",
    "subQuestions": [
      {
        "id": "7019_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "If short hair implies a short tail, then having a long tail must mean the Gangle does not have short hair."
      }
    ]
  },
  {
    "id": 7020,
    "type": "passage-group",
    "passage": "1. Battery X lasts longer than Battery Y.\n2. Battery Y doesn’t last as long as Battery Z.\n3. Battery Z lasts longer than Battery X.",
    "subQuestions": [
      {
        "id": "7020_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "We know both X and Z last longer than Y, but we don't know the relative lifespan of X and Z."
      }
    ]
  },
  {
    "id": 7021,
    "type": "passage-group",
    "passage": "1. Martina is sitting in the desk behind Jerome.\n2. Jerome is sitting in the desk behind Bryant.\n3. Bryant is sitting in the desk behind Martina.",
    "subQuestions": [
      {
        "id": "7021_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "The order from front to back is Bryant, Jerome, Martina. Bryant is in the front, not the back."
      }
    ]
  },
  {
    "id": 7022,
    "type": "passage-group",
    "passage": "1. Middletown is north of Centerville.\n2. Centerville is east of Penfield.\n3. Penfield is northwest of Middletown.",
    "subQuestions": [
      {
        "id": "7022_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "If Middletown is North of Centerville and Centerville is East of Penfield, then Penfield is Southwest of Middletown."
      }
    ]
  },
  {
    "id": 7023,
    "type": "passage-group",
    "passage": "1. Taking the train across town is quicker than taking the bus.\n2. Taking the bus across town is slower than driving a car.\n3. Taking the train across town is quicker than driving a car.",
    "subQuestions": [
      {
        "id": "7023_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "Both the train and car are faster than the bus, but their relative speeds are unknown."
      }
    ]
  },
  {
    "id": 7024,
    "type": "passage-group",
    "passage": "1. All Lamels are Signots with buttons.\n2. No yellow Signots have buttons.\n3. No Lamels are yellow.",
    "subQuestions": [
      {
        "id": "7024_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "If all Lamels have buttons, and no yellow Signots have buttons, then no Lamel can be yellow."
      }
    ]
  },
  {
    "id": 7025,
    "type": "passage-group",
    "passage": "1. The hotel is two blocks east of the drugstore.\n2. The market is one block west of the hotel.\n3. The drugstore is west of the market.",
    "subQuestions": [
      {
        "id": "7025_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Order from West to East: Drugstore, Market, Hotel."
      }
    ]
  },
  {
    "id": 7026,
    "type": "passage-group",
    "passage": "1. Tom puts on his socks before he puts on his shoes.\n2. He puts on his shirt before he puts on his jacket.\n3. Tom puts on his shoes before he puts on his shirt.",
    "subQuestions": [
      {
        "id": "7026_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "There is no information linking the order of shoes/socks to the order of shirt/jacket."
      }
    ]
  },
  {
    "id": 7027,
    "type": "passage-group",
    "passage": "1. Three pencils cost the same as two erasers.\n2. Four erasers cost the same as one ruler.\n3. Pencils are more expensive than rulers.",
    "subQuestions": [
      {
        "id": "7027_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "Based on the conversions, rulers are the most expensive item (1 ruler = 4 erasers = 6 pencils)."
      }
    ]
  },
  {
    "id": 7028,
    "type": "passage-group",
    "passage": "1. A jar of jelly beans contains more red beans than green.\n2. There are more yellow beans than red.\n3. The jar contains fewer yellow jelly beans than green ones.",
    "subQuestions": [
      {
        "id": "7028_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "Yellow > Red and Red > Green. Therefore Yellow > Green."
      }
    ]
  },
  {
    "id": 7029,
    "type": "passage-group",
    "passage": "1. Cloudy days tend to be more windy than sunny days.\n2. Foggy days tend to be less windy than cloudy days.\n3. Sunny days tend to be less windy than foggy days.",
    "subQuestions": [
      {
        "id": "7029_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "C",
        "explanation": "Cloudy days are windiest, but the relative windiness of sunny and foggy days is unknown."
      }
    ]
  },
  {
    "id": 7030,
    "type": "passage-group",
    "passage": "1. The bookstore has a better selection of postcards than the newsstand does.\n2. The selection of postcards at the drugstore is better than at the bookstore.\n3. The drugstore has a better selection of postcards than the bookstore or the newsstand.",
    "subQuestions": [
      {
        "id": "7030_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "Drugstore > Bookstore and Bookstore > Newsstand. Thus Drugstore is the best."
      }
    ]
  },
  {
    "id": 7031,
    "type": "passage-group",
    "passage": "1. A sedan is parked to the right of a pickup and to the left of an SUV.\n2. A minivan is parked to the left of the pickup.\n3. The minivan is parked between the pickup and the sedan.",
    "subQuestions": [
      {
        "id": "7031_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "B",
        "explanation": "Order from left to right: Minivan, Pickup, Sedan, SUV. The minivan is not between the pickup and sedan."
      }
    ]
  },
  {
    "id": 7032,
    "type": "passage-group",
    "passage": "1. A toothpick is useful.\n2. Useful things are valuable.\n3. A toothpick is valuable.",
    "subQuestions": [
      {
        "id": "7032_1",
        "text": "If the first two statements are true, the third statement is:",
        "options": [
          { "id": "A", "text": "true" },
          { "id": "B", "text": "false" },
          { "id": "C", "text": "uncertain" }
        ],
        "answer": "A",
        "explanation": "If A is B and B is C, then A is C. Logically true."
      }
    ]
  }
];
