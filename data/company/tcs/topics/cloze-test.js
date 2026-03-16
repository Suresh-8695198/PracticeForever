export const questions = [
  {
    id: 1,
    type: 'passage-group',
    passage: "Communication plays a (1) role in our daily lives. Whether it is (2) or non-verbal, it helps us express our thoughts and feelings. Effective communication (3) active listening and clear articulation.",
    subQuestions: [
      {
        id: "1c",
        text: "Pick the right word for blank (1):",
        options: [
          { id: "A", text: "Trivial" },
          { id: "B", text: "Vital" },
          { id: "C", text: "Small" },
          { id: "D", text: "Secondary" }
        ],
        answer: "B",
        explanation: "'Vital' means absolutely necessary, which fits the importance of communication."
      },
      {
        id: "1d",
        text: "Pick the right word for blank (2):",
        options: [
          { id: "A", text: "Oral" },
          { id: "B", text: "Singing" },
          { id: "C", text: "Verbal" },
          { id: "D", text: "Written" }
        ],
        answer: "C",
        explanation: "The sentence contrasts with 'non-verbal', so 'verbal' is the standard counterpart."
      }
    ]
  },
  {
    id: 2,
    type: 'passage-group',
    passage: "Modern technology has (1) the way we interact. Social media platforms (2) connectivity across the globe, allowing people to share information in (3) time.",
    subQuestions: [
      {
        id: "2c",
        text: "Pick the word for (1):",
        options: [
          { id: "A", text: "Destroyed" },
          { id: "B", text: "Revolutionized" },
          { id: "C", text: "Limited" },
          { id: "D", text: "Ignored" }
        ],
        answer: "B",
        explanation: "Technology changes interaction fundamentally, making 'revolutionized' the best fit."
      },
      {
        id: "2d",
        text: "Pick the word for (2):",
        options: [
          { id: "A", text: "Hinder" },
          { id: "B", text: "Facilitate" },
          { id: "C", text: "Prevent" },
          { id: "D", text: "Delete" }
        ],
        answer: "B",
        explanation: "Platforms 'facilitate' or make connectivity easier."
      },
      {
        id: "2e",
        text: "Pick the word for (3):",
        options: [
          { id: "A", text: "Past" },
          { id: "B", text: "Real" },
          { id: "C", text: "Future" },
          { id: "D", text: "Old" }
        ],
        answer: "B",
        explanation: "Information sharing on social media is typically done in 'real time'."
      }
    ]
  }
];
