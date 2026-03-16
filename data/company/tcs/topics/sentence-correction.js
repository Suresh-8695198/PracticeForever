export const questions = [
  {
    id: 1,
    text: "Identify the correct version of the sentence: 'Neither of the two candidates were suitable for the job.'",
    options: [
      { id: "A", text: "Neither of the two candidates was suitable for the job." },
      { id: "B", text: "Neither of the two candidates been suitable for the job." },
      { id: "C", text: "Neither of the two candidates are suitable for the job." },
      { id: "D", text: "Neither candidates were suitable for the job." }
    ],
    answer: "A",
    explanation: "'Neither' is a singular pronoun and should be followed by a singular verb 'was'."
  },
  {
    id: 2,
    text: "Correct the sentence: 'Each of the students have to submit the assignment by Friday.'",
    options: [
      { id: "A", text: "Each of the students has to submit the assignment by Friday." },
      { id: "B", text: "Each of the students having to submit the assignment." },
      { id: "C", text: "All students has to submit the assignment." },
      { id: "D", text: "Every students have to submit the assignment." }
    ],
    answer: "A",
    explanation: "'Each' is singular, so it requires the individual singular verb 'has'."
  },
  {
    id: 3,
    text: "Choose the correct sentence: 'Being a sunny day, I decided to go for a run.'",
    options: [
      { id: "A", text: "It being a sunny day, I decided to go for a run." },
      { id: "B", text: "Because of a sunny day, I go for run." },
      { id: "C", text: "Being sunny, a run was decided by me." },
      { id: "D", text: "As sunny day, I decided run." }
    ],
    answer: "A",
    explanation: "The original sentence has a dangling participle. 'It being a sunny day' provides the necessary subject for the participle clause."
  },
  {
    id: 4,
    text: "Correct the sentence: 'She is more taller than her sister.'",
    options: [
      { id: "A", text: "She is taller than her sister." },
      { id: "B", text: "She is much taller than her sister." },
      { id: "C", text: "She is more tall than her sister." },
      { id: "D", text: "Both A and B are correct." }
    ],
    answer: "D",
    explanation: "Double comparatives (more taller) are incorrect. 'Taller' is sufficient (A), and 'much taller' (B) is also correct for emphasis."
  },
  {
    id: 5,
    text: "Correct the sentence: 'I have seen him yesterday.'",
    options: [
      { id: "A", text: "I saw him yesterday." },
      { id: "B", text: "I had seen him yesterday." },
      { id: "C", text: "I have saw him yesterday." },
      { id: "D", text: "I seen him yesterday." }
    ],
    answer: "A",
    explanation: "The present perfect (have seen) cannot be used with a specific past time reference like 'yesterday'. The simple past 'saw' is required."
  }
];
