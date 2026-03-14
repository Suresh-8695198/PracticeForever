export const theory = [
  {
    "title": "Logical Games Strategy",
    "description": "Analytical reasoning or 'logic games' require a systematic method for organization. The best approach is to follow a defined plan.",
    "image": "/images/aptitude/logical-games.svg"
  },
  {
    "title": "The 4-Step Plan",
    "description": "1. Understand the rules clearly. 2. Create a visual diagram or grid 3. Combine rules to make deductions. 4. Read each question carefully before answering.",
    "image": "/images/aptitude/logical-games.svg"
  }
];

export const questions = [
  {
    "id": 6001,
    "type": "passage-group",
    "passage": "The government of an island nation is in the process of deciding how to spend its limited income. It has $7 million left in its budget and eight programs to choose among. There is no provision in the constitution to have a surplus, and each program has requested the minimum amount they need; in other words, no program may be partially funded. The programs and their funding requests are:\n- Hurricane preparedness: $2.5 million\n- Harbor improvements: $1 million\n- School music program: $0.5 million\n- Senate office building remodeling: $1.5 million\n- Agricultural subsidy program: $2 million\n- National radio: $0.5 million\n- Small business loan program: $3 million\n- International airport: $4 million",
    "subQuestions": [
      {
        "id": "6001_1",
        "text": "If the legislature decides to fund the agricultural subsidy program, national radio, and the small business loan program, the only other single program that can be funded is:",
        "options": [
          { "id": "A", "text": "hurricane preparedness" },
          { "id": "B", "text": "harbor improvements" },
          { "id": "C", "text": "school music program" },
          { "id": "D", "text": "senate office building remodeling" },
          { "id": "E", "text": "international airport" }
        ],
        "answer": "D",
        "explanation": "Agricultural ($2M) + Radio ($0.5M) + Small business ($3M) = $5.5M. Total budget is $7M, so $1.5M remains. Only Senate remodeling costs exactly $1.5M."
      },
      {
        "id": "6001_2",
        "text": "If the legislature decides to fund the agricultural subsidy program, national radio, and the small business loan program, what two other programs could they fund?",
        "options": [
          { "id": "A", "text": "harbor improvements and international airport" },
          { "id": "B", "text": "harbor improvements and school music program" },
          { "id": "C", "text": "hurricane preparedness and school music program" },
          { "id": "D", "text": "hurricane preparedness and international airport" },
          { "id": "E", "text": "harbor improvements and hurricane preparedness" }
        ],
        "answer": "B",
        "explanation": "With $5.5M already spent (Agri + Radio + Loan), $1.5M remains. Harbor ($1M) and School music ($0.5M) together cost exactly $1.5M."
      },
      {
        "id": "6001_3",
        "text": "Senators from urban areas want an international airport ($4M). Senators from rural areas want agricultural subsidies ($2M). If the legislature funds these two programs, on which of the following could they spend the rest of the money?",
        "options": [
          { "id": "A", "text": "the school music program and national radio" },
          { "id": "B", "text": "hurricane preparedness" },
          { "id": "C", "text": "harbor improvements and the school music program" },
          { "id": "D", "text": "small business loan program" },
          { "id": "E", "text": "national radio and senate office building remodeling" }
        ],
        "answer": "A",
        "explanation": "Airport ($4M) + Agri ($2M) = $6M. Remaining budget is $1M. School music ($0.5M) and National radio ($0.5M) together cost exactly $1M."
      }
    ]
  },
  {
    "id": 6004,
    "type": "passage-group",
    "passage": "A weekly television show routinely stars six actors, J, K, L, M, N, and O. Rules:\n- J will only work on episodes on which M is working.\n- N will not work with K under any circumstances.\n- M can only work every other week, in order to be free to film a movie.\n- At least three of the actors must appear in every weekly episode.",
    "subQuestions": [
      {
        "id": "6004_1",
        "text": "In a show about L getting a job where J already works and K used to work, all three appear. Which of the following is true about the other actors who may appear?",
        "options": [
          { "id": "A", "text": "M, N, and O must all appear" },
          { "id": "B", "text": "M may appear and N must appear" },
          { "id": "C", "text": "M must appear and O may appear" },
          { "id": "D", "text": "O may appear and N may appear" },
          { "id": "E", "text": "Only O may appear" }
        ],
        "answer": "C",
        "explanation": "Since J is appearing, M must also appear. Since K is appearing, N cannot. O has no restrictions, so O may or may not appear."
      },
      {
        "id": "6004_2",
        "text": "Next week, the show involves N’s new car and O’s new refrigerator (N and O appear). Which of the following is true about the other actors who may appear?",
        "options": [
          { "id": "A", "text": "M, J, L, and K all may appear" },
          { "id": "B", "text": "J, L, and K must appear" },
          { "id": "C", "text": "Only K may appear" },
          { "id": "D", "text": "Only L may appear" },
          { "id": "E", "text": "L and K must appear" }
        ],
        "answer": "D",
        "explanation": "K cannot work with N. If M is off this week, J is out. This leaves L as the most likely candidate to meet the 3-actor minimum."
      }
    ]
  },
  {
    "id": 6006,
    "type": "passage-group",
    "passage": "A cinema complex with six movie theaters (1=largest to 6=smallest) never shows the same movie twice. Rules:\n- Max two R-rated movies.\n- At least one G and one PG in theaters 3 and 4.\n- Max one foreign film (never in Theater 1).\n- Films: Shout (R), Que Pasa (PG-Foreign), Abra Cadabra (G), Lessons (R), Jealousy (PG), Mist (R-Foreign), Trek (NC-17), Fly (G).",
    "subQuestions": [
      {
        "id": "6006_1",
        "text": "Which one of the following is an acceptable listing of films to show this week?",
        "options": [
          { "id": "A", "text": "Shout, Mist, Trek, Que Pasa, Fly, and Jealousy" },
          { "id": "B", "text": "Shout, Mist, Trek, Fly, Jealousy, and Abra Cadabra" },
          { "id": "C", "text": "Que Pasa, Lessons, Mist, Shout, Abra Cadabra, and Trek" },
          { "id": "D", "text": "Shout, Lessons, Mist, Trek, Fly, and Jealousy" },
          { "id": "E", "text": "Shout, Fly, Trek, Lessons, Abra Cadabra, and Mist" }
        ],
        "answer": "B",
        "explanation": "Option B fits all criteria: 2 R-rated (Shout, Mist), 2 G/PG for theaters 3/4, and 1 foreign film (Mist)."
      },
      {
        "id": "6006_2",
        "text": "If Trek starts at 8:00 and is 2 hours long, with 20 min cleaning and starts on the quarter hour, when will the next Trek start?",
        "options": [
          { "id": "A", "text": "10:00" },
          { "id": "B", "text": "10:15" },
          { "id": "C", "text": "10:30" },
          { "id": "D", "text": "10:45" },
          { "id": "E", "text": "11:00" }
        ],
        "answer": "C",
        "explanation": "Finishes at 10:00, clean until 10:20, next quarter hour is 10:30."
      }
    ]
  },
  {
    "id": 6008,
    "type": "passage-group",
    "passage": "Top songs of 1968: 'People Got to Be Free' (The Rascals), 'Sittin’ on the Dock of the Bay' (Otis Redding), 'Honey' (Bobby Goldsboro), 'Sunshine of Your Love' (Cream), 'Love Is Blue' (Paul Mauriat), 'Hey Jude' (The Beatles).\nRules:\n- Beatles and Cream not adjacent.\n- #1 is not 'Love Is Blue'.\n- Individual artists are #3 and #4.\n- Rascals are right before Cream and right after Otis.",
    "subQuestions": [
      {
        "id": "6008_1",
        "text": "Which of the following is true based on the song order?",
        "options": [
          { "id": "A", "text": "Song #3 is 'Honey' by Bobby Goldsboro." },
          { "id": "B", "text": "Song #6 is 'Hey Jude' by the Beatles." },
          { "id": "C", "text": "Song #1 is 'Sittin' on the Dock of the Bay' by Otis Redding." },
          { "id": "D", "text": "Song #1 is 'Sunshine of Your Love' by Cream." },
          { "id": "E", "text": "Song #3 is 'Sittin' on the Dock of the Bay' by Otis Redding." }
        ],
        "answer": "A",
        "explanation": "Otis, Rascals, and Cream are sequence O-R-C. Since O is an individual, he must be #4 (to fit with H at #3). So #3 is Honey."
      }
    ]
  }
];
