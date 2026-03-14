export const theory = [
  {
    "title": "Verbal Reasoning Basics",
    "description": "Verbal Reasoning tests your ability to understand, analyze, and interpret information presented in words. It covers topics like Blood Relations, Logical Deductions, and Inference.",
    "image": "/images/aptitude/verbal-reasoning.svg"
  },
  {
    "title": "Blood Relations Strategy",
    "description": "Focus on identifying the generation gaps and gender of individuals mentioned. Using a family tree diagram can help clarify complex relationships quickly.",
    "image": "/images/aptitude/verbal-reasoning.svg"
  },
  {
    "title": "Logical Deduction Strategy",
    "description": "Read the passage carefully and stick strictly to the information provided. Avoid making assumptions based on outside knowledge; only what is explicitly stated or directly inferred counts.",
    "image": "/images/aptitude/verbal-reasoning.svg"
  }
];

export const questions = [
  {
    "id": 5001,
    "text": "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
    "options": [
      { "id": "A", "text": "Brother" },
      { "id": "B", "text": "Uncle" },
      { "id": "C", "text": "Cousin" },
      { "id": "D", "text": "Father" }
    ],
    "answer": "D",
    "explanation": "The 'only son of Suresh's mother' is Suresh himself. Therefore, the boy is the son of Suresh. Hence, Suresh is the father of the boy."
  },
  {
    "id": 5002,
    "text": "If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?",
    "options": [
      { "id": "A", "text": "Q - N + M x P" },
      { "id": "B", "text": "P + S x N - Q" },
      { "id": "C", "text": "P - M + N x Q" },
      { "id": "D", "text": "Q - S % P" }
    ],
    "answer": "C",
    "explanation": "P - M means P is the brother of M. M + N means M is the mother of N. N x Q means N is the sister of Q. Since M is the mother of Q and P is M's brother, P is the maternal uncle of Q."
  },
  {
    "id": 5003,
    "text": "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?",
    "options": [
      { "id": "A", "text": "Brother" },
      { "id": "B", "text": "Sister" },
      { "id": "C", "text": "Nephew" },
      { "id": "D", "text": "Cannot be determined" }
    ],
    "answer": "D",
    "explanation": "A, B, and C are siblings. C is the father of D. A is the uncle of D. However, the gender of D is not specified, so D could be either a nephew or a niece. Thus, the relationship cannot be determined."
  },
  {
    "id": 5004,
    "text": "If A + B means A is the brother of B; A - B means A is the sister of B and A x B means A is the father of B. Which of the following means that C is the son of M?",
    "options": [
      { "id": "A", "text": "M - N x C + F" },
      { "id": "B", "text": "F - C + N x M" },
      { "id": "C", "text": "N + M - F x C" },
      { "id": "D", "text": "M x N - C + F" }
    ],
    "answer": "D",
    "explanation": "M x N means M is the father of N. N - C means N is the sister of C. C + F means C is the brother of F. This establishes that M is the father of siblings N, C, and F. Since C is a brother, he is the son of M."
  },
  {
    "id": 5005,
    "text": "Introducing a boy, a girl said, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
    "options": [
      { "id": "A", "text": "Brother" },
      { "id": "B", "text": "Nephew" },
      { "id": "C", "text": "Uncle" },
      { "id": "D", "text": "Son-in-law" }
    ],
    "answer": "A",
    "explanation": "The father of the girl's uncle is the girl's grandfather. The daughter of the grandfather is the girl's mother (or aunt). The son of the mother is the girl's brother."
  },
  {
    "id": 5006,
    "text": "A $ B means A is the father of B; A # B means A is the sister of B; A * B means A is the daughter of B and A @ B means A is the brother of B. Which of the following indicates that M is the wife of Q?",
    "options": [
      { "id": "A", "text": "Q $ R # T @ M" },
      { "id": "B", "text": "Q $ R @ T # M" },
      { "id": "C", "text": "Q $ R * T # M" },
      { "id": "D", "text": "Q $ R @ T * M" }
    ],
    "answer": "D",
    "explanation": "Q $ R (Q is father of R) and R @ T (R is brother of T) means Q is father of T. T * M (T is daughter of M) means M is the mother of T. Since Q is the father and M is the mother of T, M is the wife of Q."
  },
  {
    "id": 5007,
    "text": "If A $ B means A is the brother of B; B * C means B is the son of C; C @ D means C is the wife of D and A # D means A is the son of D, how C is related to A?",
    "options": [
      { "id": "A", "text": "Maternal grandmother" },
      { "id": "B", "text": "Maternal aunt" },
      { "id": "C", "text": "Aunt" },
      { "id": "D", "text": "Mother" }
    ],
    "answer": "D",
    "explanation": "A $ B means A is brother of B. B * C means B is son of C. This implies A is also the son of C. C @ D means C is the wife (mother), so C is the mother of A."
  },
  {
    "id": 5008,
    "text": "Pointing to a girl Sandeep said, 'She is the daughter of the only sister of my father.' How is sandeep related to the girl?",
    "options": [
      { "id": "A", "text": "Uncle" },
      { "id": "B", "text": "Cousin" },
      { "id": "C", "text": "Father" },
      { "id": "D", "text": "Grandfather" }
    ],
    "answer": "B",
    "explanation": "The only sister of Sandeep's father is Sandeep's aunt. The daughter of Sandeep's aunt is his cousin."
  },
  {
    "id": 5009,
    "text": "Pointing to a boy in the photograph Reena said, 'He is the only son of the only child of my grandfather.' How Reena is related to that boy?",
    "options": [
      { "id": "A", "text": "Mother" },
      { "id": "B", "text": "Sister" },
      { "id": "C", "text": "Aunt" },
      { "id": "D", "text": "Cannot be determined" }
    ],
    "answer": "B",
    "explanation": "The 'only child of Reena's grandfather' is Reena's father. The boy is the only son of Reena's father. Therefore, the boy is Reena's brother, and Reena is his sister."
  },
  {
    "id": 5010,
    "text": "A * B means A is the sister of B; A $ B means B is the mother of A; A + B means A is the brother of B; A = B means B is the father of A. Which of the following means M is the maternal uncle of N?",
    "options": [
      { "id": "A", "text": "M = P + Q * N" },
      { "id": "B", "text": "N + P = Q * M" },
      { "id": "C", "text": "N * P $ Q * M" },
      { "id": "D", "text": "None of these" }
    ],
    "answer": "D",
    "explanation": "None of the provided options logically lead to M being the maternal uncle of N based on the defined symbols."
  },
  {
    "id": 5011,
    "text": "Vincent has a paper route. Each morning, he delivers 37 newspapers to customers. It takes him 50 minutes. If Vincent is sick, his friend Thomas, who lives on the same street, delivers them for him. What can be inferred?",
    "options": [
      { "id": "A", "text": "Vincent and Thomas live in the same neighborhood." },
      { "id": "B", "text": "It takes Thomas more than 50 minutes to deliver the papers." },
      { "id": "C", "text": "It is dark outside when Vincent begins his deliveries." },
      { "id": "D", "text": "Thomas would like to have his own paper route." }
    ],
    "answer": "A",
    "explanation": "Since Vincent and Thomas live on the same street, it is directly inferred that they live in the same neighborhood."
  },
  {
    "id": 5012,
    "text": "The Pacific yew is an evergreen tree with a fleshy, poisonous fruit. Recently, taxol, found in its bark, was discovered as a promising anticancer drug. What can be inferred?",
    "options": [
      { "id": "A", "text": "Taxol is poisonous when taken by healthy people." },
      { "id": "B", "text": "Taxol has cured people from various diseases." },
      { "id": "C", "text": "People should not eat the fruit of the Pacific yew." },
      { "id": "D", "text": "The Pacific yew was considered worthless until taxol was discovered." }
    ],
    "answer": "C",
    "explanation": "The passage explicitly states that the fruit is poisonous, so the most direct inference is that people should not eat it."
  },
  {
    "id": 5013,
    "text": "Erin is 12 and has wanted a dog for 3 years. Her parents tell her a dog wouldn't be happy in an apartment, but permitted her to have a bird. Erin hasn't decided on a bird yet. What can be inferred?",
    "options": [
      { "id": "A", "text": "Erin's parents like birds better than they like dogs." },
      { "id": "B", "text": "Erin does not like birds." },
      { "id": "C", "text": "Erin and her parents live in an apartment." },
      { "id": "D", "text": "Erin and her parents would like to move." }
    ],
    "answer": "C",
    "explanation": "The parents' reasoning that a dog wouldn't be happy 'in an apartment' implies they currently live in one."
  },
  {
    "id": 5014,
    "text": "Tim's commute didn't bother him because he could read comfortably. Since the schedule changed, the train is extremely crowded, and there isn't a seat to be found by his stop. What can be inferred?",
    "options": [
      { "id": "A", "text": "Tim would be better off taking the bus to work." },
      { "id": "B", "text": "Tim's commute is less comfortable since the train schedule changed." },
      { "id": "C", "text": "Many commuters will complain about the new train schedule." },
      { "id": "D", "text": "Tim will likely look for a new job closer to home." }
    ],
    "answer": "B",
    "explanation": "Since he can no longer find a seat and the train is crowded, the commute is logically less comfortable than before."
  },
  {
    "id": 5015,
    "text": "Maya and Julian changed their beach vacation plans to a mountain spa because of a hurricane news. The spa was expensive and they booked it on short notice. What is true?",
    "options": [
      { "id": "A", "text": "Maya and Julian take beach vacations every year." },
      { "id": "B", "text": "The spa is overpriced." },
      { "id": "C", "text": "It is usually necessary to book at least six months ahead at the spa." },
      { "id": "D", "text": "Maya and Julian decided to change their vacation plans because of the hurricane." }
    ],
    "answer": "D",
    "explanation": "The first sentence explicitly states that they decided to change plans when they heard news of the hurricane."
  }
];
