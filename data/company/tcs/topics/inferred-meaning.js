export const questions = [
  {
    id: 1,
    text: "Statement: 'The library will be closed on the last Sunday of every month for inventory maintenance.'\nWhat can be inferred?",
    options: [
      { id: "A", text: "The library is only open on Sundays." },
      { id: "B", text: "Inventory is checked every week." },
      { id: "C", text: "The library is usually open on Sundays." },
      { id: "D", text: "Users cannot borrow books on any Sunday." }
    ],
    answer: "C",
    explanation: "If the library specifically states it will be closed on the *last* Sunday, it implies that it is normally open on other Sundays. If it were always closed on Sundays, the notice would be redundant."
  },
  {
    id: 2,
    text: "Statement: 'Most graduates from this college get placed in international firms.'\nWhat is a valid inference?",
    options: [
      { id: "A", text: "All graduates get high salaries." },
      { id: "B", text: "No domestic firms hire from this college." },
      { id: "C", text: "At least some graduates are hired by international firms." },
      { id: "D", text: "International firms only hire from this college." }
    ],
    answer: "C",
    explanation: "'Most' implies more than 50%, which certainly includes 'at least some'. Options A and B are extreme generalizations not supported by 'most'."
  },
  {
    id: 3,
    text: "Statement: 'Since the new policy was implemented, employee churn has decreased by 20%.'\nWhat can be inferred?",
    options: [
      { id: "A", text: "The policy is the only reason for the decrease." },
      { id: "B", text: "Employee satisfaction has definitely doubled." },
      { id: "C", text: "The situation regarding staff retention has improved." },
      { id: "D", text: "No employee left the company after the policy." }
    ],
    answer: "C",
    explanation: "A decrease in churn directly relates to improved retention. While we can't assume the policy is the *only* reason (A) or that satisfaction 'doubled' (B), the improvement in retention is a direct inference."
  },
  {
    id: 4,
    text: "Statement: 'The price of smartphones has fallen, leading to a surge in mobile internet users.'\nInference?",
    options: [
      { id: "A", text: "Laptops are no longer used for internet." },
      { id: "B", text: "Falling prices made smartphones accessible to more people." },
      { id: "C", text: "Internet speed has increased recently." },
      { id: "D", text: "Only smartphones can access the internet." }
    ],
    answer: "B",
    explanation: "The link between price drop and user surge implies that affordability was a barrier that was partially removed."
  },
  {
    id: 5,
    text: "Statement: 'Vegetables provided by organic farms are slightly more expensive than those from traditional farms.'\nInference?",
    options: [
      { id: "A", text: "Traditional farming is better than organic." },
      { id: "B", text: "Price is the only difference between the two." },
      { id: "C", text: "Organic farming may have higher production costs." },
      { id: "D", text: "No one buys traditional vegetables anymore." }
    ],
    answer: "C",
    explanation: "Higher prices often reflect higher costs or demand dynamics. C is a plausible inference related to the pricing difference."
  }
];
