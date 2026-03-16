export const questions = [
  {
    id: 1,
    text: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
    options: [
      { id: "A", text: "His own" },
      { id: "B", text: "His son's" },
      { id: "C", text: "His father's" },
      { id: "D", text: "His nephew's" }
    ],
    answer: "B",
    explanation: "Since the narrator has no brother or sister, 'my father's son' is the narrator himself. So, the statement becomes: 'That man's father is ME'. Therefore, the man in the photograph is the narrator's son."
  },
  {
    id: 2,
    text: "A is the brother of B. B is the daughter of C. D is the father of C. How is A related to D?",
    options: [
      { id: "A", text: "Grandson" },
      { id: "B", text: "Son" },
      { id: "C", text: "Grandfather" },
      { id: "D", text: "Nephew" }
    ],
    answer: "A",
    explanation: "A is the brother of B, and B is the daughter of C. This means A is the son of C. D is the father of C. Since A is the son of C and D is the father of C, A is the grandson of D."
  },
  {
    id: 3,
    text: "If A + B means A is the mother of B; A - B means A is the brother of B; A % B means A is the father of B and A * B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?",
    options: [
      { id: "A", text: "Q - N + M * P" },
      { id: "B", text: "P + S * N - Q" },
      { id: "C", text: "P - M + N * Q" },
      { id: "D", text: "Q * S % P" }
    ],
    answer: "C",
    explanation: "In C: P - M means P is the brother of M. M + N means M is the mother of N. N * Q means N is the sister of Q. Since M is the mother of N and Q, and P is the brother of M, P is the maternal uncle of Q."
  },
  {
    id: 4,
    text: "A and B are married couple. X and Y are brothers. X is the brother of A. How is Y related to B?",
    options: [
      { id: "A", text: "Brother-in-law" },
      { id: "B", text: "Brother" },
      { id: "C", text: "Cousin" },
      { id: "D", text: "Son-in-law" }
    ],
    answer: "A",
    explanation: "X and Y are brothers. X is the brother of A, so Y is also the brother of A. Since A is married to B, A's brother Y is the brother-in-law of B."
  },
  {
    id: 5,
    text: "A man showing a lady a picture says, 'Her mother is the only daughter of my mother-in-law.' How is the man related to the lady in the picture?",
    options: [
      { id: "A", text: "Father" },
      { id: "B", text: "Brother" },
      { id: "C", text: "Uncle" },
      { id: "D", text: "Husband" }
    ],
    answer: "A",
    explanation: "The 'only daughter of my mother-in-law' is the man's wife. The lady's mother is the man's wife. Therefore, the man is the father of the lady."
  },
  {
    id: 6,
    text: "Introducing a girl, Vipin said, 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?",
    options: [
      { id: "A", text: "Uncle" },
      { id: "B", text: "Father" },
      { id: "C", text: "Brother" },
      { id: "D", text: "Husband" }
    ],
    answer: "B",
    explanation: "Only daughter of mother-in-law = Wife. Girl's mother is Vipin's wife. So Vipin is the father."
  },
  {
    id: 7,
    text: "If P is the brother of Q; Q is the son of R; R is the wife of S and S is the father of T, how is P related to T?",
    options: [
      { id: "A", text: "Brother" },
      { id: "B", text: "Father" },
      { id: "C", text: "Grandson" },
      { id: "D", text: "Cousin" }
    ],
    answer: "A",
    explanation: "P and Q are brothers (sons of R and S). Since S is the father of T, T is also a child of S and R. Thus, P is the brother of T.",
    explanationImage: "/images/practice/reasoning/family_tree.svg"
  },
  {
    id: 8,
    text: "Pointing to a man, a lady said, 'His mother is the only daughter of my mother.' How is the lady related to the man?",
    options: [
      { id: "A", text: "Mother" },
      { id: "B", text: "Daughter" },
      { id: "C", text: "Sister" },
      { id: "D", text: "Aunt" }
    ],
    answer: "A",
    explanation: "The 'only daughter of my mother' is the lady herself. The man's mother is the lady herself. So, the lady is the mother of the man."
  }
];
