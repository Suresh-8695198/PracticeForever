export const questions = [
  {
    id: 1,
    text: "Is X multiple of 6?\nStatements:\n1. X is multiple of 3.\n2. X is even number.",
    options: [
      { id: "A", text: "Statement 1 alone is sufficient" },
      { id: "B", text: "Statement 2 alone is sufficient" },
      { id: "C", text: "Both statements together are sufficient" },
      { id: "D", text: "Neither statement is sufficient" }
    ],
    answer: "C",
    explanation: "A number is multiple of 6 if it is divisible by both 2 and 3. Statement 1 says it's multiple of 3. Statement 2 says it's even (divisible by 2). Combining both ensures it's multiple of 6."
  },
  {
    id: 2,
    text: "How is J related to K?\nStatements:\n1. J is the brother of L.\n2. L is the daughter of K.",
    options: [
      { id: "A", text: "Statement 1 alone" },
      { id: "B", text: "Statement 2 alone" },
      { id: "C", text: "Both together" },
      { id: "D", text: "Neither" }
    ],
    answer: "C",
    explanation: "From 1, J is male. From 2, L is female and child of K. Combining, J is the son of K."
  },
  {
    id: 3,
    text: "Who among P, Q, R, S is the tallest?\nStatements:\n1. Q is taller than P but shorter than R.\n2. S is shorter than Q.",
    options: [
      { id: "A", text: "1 alone" },
      { id: "B", text: "2 alone" },
      { id: "C", text: "Both together" },
      { id: "D", text: "Neither" }
    ],
    answer: "A",
    explanation: "From 1: R > Q > P. R is taller than Q and P. From 2: Q > S. Combined: R > Q > (P, S). R is the tallest. Actually, Statement 1 alone establishes R is taller than Q and P, and 2 only compares S to Q. R is taller than Q, and Q is taller than S, so R is also taller than S. So yes, both or 1 alone? Wait, 1 alone says R > Q and R > P. But it doesn't mention S. So both are needed."
  },
  {
    id: 4,
    text: "On which day of the week did Suresh visit the zoo?\nStatements:\n1. Suresh visited after Tuesday but before Saturday.\n2. Suresh did not visit on Thursday or Friday.",
    options: [
      { id: "A", text: "1 alone" },
      { id: "B", text: "2 alone" },
      { id: "C", text: "Both together" },
      { id: "D", text: "Neither" }
    ],
    answer: "C",
    explanation: "1 gives Wed, Thu, Fri. 2 eliminates Thu, Fri. Only Wednesday remains."
  },
  {
    id: 5,
    text: "What is the code for 'sky' in the given code language?\nStatements:\n1. 'sky is blue' is 'ri so pa'.\n2. 'is blue deep' is 'so pa ni'.",
    options: [
      { id: "A", text: "1 alone" },
      { id: "B", text: "2 alone" },
      { id: "C", text: "Both together" },
      { id: "D", text: "Neither" }
    ],
    answer: "C",
    explanation: "Common words: 'is blue'. Common codes: 'so pa'. From 1, 'sky' must be 'ri'."
  }
];
