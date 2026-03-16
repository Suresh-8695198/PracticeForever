export const questions = [
  {
    id: 1,
    text: "Find the part with the error: 'The committee (A) / are scheduled (B) / to meet (C) / tomorrow. (D)'",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "No Error" }
    ],
    answer: "B",
    explanation: "Collective nouns like 'committee' are usually singular. It should be 'committee IS scheduled'."
  },
  {
    id: 2,
    text: "Find the error: 'Hardly I had (A) / reached the station (B) / when the train (C) / left. (D)'",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "No Error" }
    ],
    answer: "A",
    explanation: "When a sentence begins with 'Hardly', inversion is required: 'Hardly had I...'."
  },
  {
    id: 3,
    text: "Find the error: 'The furniture (A) / in this room (B) / are (C) / very old. (D)'",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "No Error" }
    ],
    answer: "C",
    explanation: "'Furniture' is an uncountable noun and always takes a singular verb: 'is'."
  },
  {
    id: 4,
    text: "Find the error: 'She has been (A) / working here (B) / since (C) / five years. (D)'",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "No Error" }
    ],
    answer: "C",
    explanation: "'Since' is used for a point in time. For a duration (five years), 'for' should be used."
  },
  {
    id: 5,
    text: "Find the error: 'He is (A) / the most (B) / cleverest (C) / boy in class. (D)'",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "No Error" }
    ],
    answer: "B",
    explanation: "Double superlatives are incorrect. It should be 'the cleverest boy' or 'the most clever boy' (though cleverest is preferred)."
  }
];
