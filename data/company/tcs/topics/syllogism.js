export const questions = [
  {
    id: 1,
    text: "Statements: All bags are pockets. All pockets are pouches. \nConclusions: \nI. All bags are pouches. \nII. Some pouches are bags.",
    options: [
      { id: "A", text: "Only I follows" },
      { id: "B", text: "Only II follows" },
      { id: "C", text: "Both I and II follow" },
      { id: "D", text: "Neither I nor II follows" }
    ],
    answer: "C",
    explanation: "If all bags are pockets and all pockets are pouches, then all bags are definitely pouches (I follows). Also, if all bags are pouches, at least some pouches must be bags (II follows).",
    explanationImage: "/images/practice/reasoning/syllogism_venn.svg"
  },
  {
    id: 2,
    text: "Statements: Some actors are singers. All singers are dancers. \nConclusions: \nI. Some actors are dancers. \nII. No singer is an actor.",
    options: [
      { id: "A", text: "Only I follows" },
      { id: "B", text: "Only II follows" },
      { id: "C", text: "Both follow" },
      { id: "D", text: "Neither follows" }
    ],
    answer: "A",
    explanation: "Since some actors are singers and all singers are dancers, those actors who are singers are also dancers. I follows. II contradicts the statement 'Some actors are singers'."
  },
  {
    id: 3,
    text: "Statements: All cups are books. All books are shirts. \nConclusions: \nI. Some shirts are cups. \nII. All shirts are cups.",
    options: [
      { id: "A", text: "Only I follows" },
      { id: "B", text: "Only II follows" },
      { id: "C", text: "Either I or II follows" },
      { id: "D", text: "Neither I nor II follows" }
    ],
    answer: "A",
    explanation: "All cups are shirts (via books). Thus, some shirts are definitely cups. However, all shirts are not necessarily cups (the outer circle shirt can be larger than cup)."
  },
  {
    id: 4,
    text: "Statements: No door is dog. All dogs are cats. \nConclusions: \nI. No door is cat. \nII. Some cats are dogs.",
    options: [
      { id: "A", text: "Only I follows" },
      { id: "B", text: "Only II follows" },
      { id: "C", text: "Both I and II follow" },
      { id: "D", text: "Neither I nor II follows" }
    ],
    answer: "B",
    explanation: "Since all dogs are cats, any dog is a cat. So some cats must be dogs. I does not necessarily follow because the set of cats could overlap with doors as long as the dog subset doesn't."
  },
  {
    id: 5,
    text: "Statements: All flowers are trees. No tree is fruit. \nConclusions: \nI. No flower is fruit. \nII. Some trees are flowers.",
    options: [
      { id: "A", text: "Only I follows" },
      { id: "B", text: "Only II follows" },
      { id: "C", text: "Both I and II follow" },
      { id: "D", text: "Neither I nor II follows" }
    ],
    answer: "C",
    explanation: "Since flowers are inside trees and no tree is fruit, no flower can be a fruit. Also, since all flowers are trees, some trees are definitely flowers."
  }
];
