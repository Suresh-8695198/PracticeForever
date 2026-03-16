export const questions = [
  { 
    id: 1, 
    text: "What does Big O notation represent in algorithm analysis?", 
    options: [
      { id: "A", text: "Average case complexity" }, 
      { id: "B", text: "Worst-case upper bound" }, 
      { id: "C", text: "Best-case lower bound" }, 
      { id: "D", text: "The exact number of operations" }
    ], 
    answer: "B", 
    explanation: "Big O describes the limiting behavior of a function as the argument tends towards a particular value or infinity, representing the worst-case." 
  },
  { 
    id: 2, 
    text: "What is the time complexity of a loop that runs from 1 to n with a step of k*2 (multiplication by 2)?", 
    options: [
      { id: "A", text: "O(n)" }, 
      { id: "B", text: "O(n^2)" }, 
      { id: "C", text: "O(log n)" }, 
      { id: "D", text: "O(sqrt n)" }
    ], 
    answer: "C", 
    explanation: "Multiply/divide by a constant in each step leads to logarithmic complexity." 
  },
  { 
    id: 3, 
    text: "Given two nested loops where outer loop runs n times and inner loop runs m times, what is the total complexity?", 
    options: [
      { id: "A", text: "O(n + m)" }, 
      { id: "B", text: "O(n * m)" }, 
      { id: "C", text: "O(n^2)" }, 
      { id: "D", text: "O(log(n+m))" }
    ], 
    answer: "B", 
    explanation: "Multiplication rule applies to nested independent loops." 
  },
  { 
    id: 4, 
    text: "Which of the following complexities is the most efficient for large input sizes?", 
    options: [
      { id: "A", text: "O(2^n)" }, 
      { id: "B", text: "O(n^2)" }, 
      { id: "C", text: "O(n log n)" }, 
      { id: "D", text: "O(n!)" }
    ], 
    answer: "C", 
    explanation: "The growth rate of n log n is much slower than quadratic or exponential." 
  },
  { 
    id: 5, 
    text: "What is the space complexity of a recursive function that calculates Fibonacci numbers without memoization?", 
    options: [
      { id: "A", text: "O(1)" }, 
      { id: "B", text: "O(n)" }, 
      { id: "C", text: "O(2^n)" }, 
      { id: "D", text: "O(log n)" }
    ], 
    answer: "B", 
    explanation: "Space complexity is determined by the depth of the recursion stack, which is O(n)." 
  },
  { 
    id: 6, 
    text: "If an algorithm takes 100 iterations for n=10 and 10000 iterations for n=100, what is its likely complexity?", 
    options: [
      { id: "A", text: "O(log n)" }, 
      { id: "B", text: "O(n)" }, 
      { id: "C", text: "O(n^2)" }, 
      { id: "D", text: "O(n^3)" }
    ], 
    answer: "C", 
    explanation: "10^2=100 and 100^2=10000, so it follows n^2." 
  },
  { 
    id: 7, 
    text: "What is the time complexity of pushing an element into a stack (array-based, assume no resize)?", 
    options: [
      { id: "A", text: "O(1)" }, 
      { id: "B", text: "O(n)" }, 
      { id: "C", text: "O(log n)" }, 
      { id: "D", text: "O(n^2)" }
    ], 
    answer: "A", 
    explanation: "Stack operations (push/pop) are constant time O(1)." 
  },
  { 
    id: 8, 
    text: "What is the average time complexity of QuickSort?", 
    options: [
      { id: "A", text: "O(n)" }, 
      { id: "B", text: "O(n^2)" }, 
      { id: "C", text: "O(n log n)" }, 
      { id: "D", text: "O(2^n)" }
    ], 
    answer: "C", 
    explanation: "While worst-case is O(n^2), the average and best case is O(n log n)." 
  },
  { 
    id: 9, 
    text: "Which notation provides both an upper and lower bound (tight bound)?", 
    options: [
      { id: "A", text: "Big O (O)" }, 
      { id: "B", text: "Big Omega (Ω)" }, 
      { id: "C", text: "Big Theta (Θ)" }, 
      { id: "D", text: "Little o" }
    ], 
    answer: "C", 
    explanation: "Theta notation (Θ) represents the average and tight complexity." 
  },
  { 
    id: 10, 
    text: "What is the time complexity of searching for a value in a hash table (worst case)?", 
    options: [
      { id: "A", text: "O(1)" }, 
      { id: "B", text: "O(log n)" }, 
      { id: "C", text: "O(n)" }, 
      { id: "D", text: "O(n^2)" }
    ], 
    answer: "C", 
    explanation: "In case of many collisions (all keys hashing to the same bucket), complexity becomes O(n)." 
  },
  { 
    id: 11, 
    text: "Complexity hierarchy (Best to Worst):", 
    options: [
      { id: "A", text: "O(1) < O(log n) < O(n) < O(n log n) < O(n^2)" }, 
      { id: "B", text: "O(1) < O(n) < O(log n) < O(n^2)" }, 
      { id: "C", text: "O(n^2) < O(n) < O(1)" }, 
      { id: "D", text: "O(log n) < O(1) < O(n)" }
    ], 
    answer: "A", 
    explanation: "This is the standard growth order." 
  },
  { 
    id: 12, 
    text: "What is the complexity of binary search on an unsorted array?", 
    options: [
      { id: "A", text: "O(log n)" }, 
      { id: "B", text: "O(n)" }, 
      { id: "C", text: "Binary search cannot be applied directly on an unsorted array" }, 
      { id: "D", text: "O(1)" }
    ], 
    answer: "C", 
    explanation: "Binary search requires the data to be sorted first." 
  },
  { 
    id: 13, 
    text: "What is the complexity of Merge Sort?", 
    options: [
      { id: "A", text: "O(n)" }, 
      { id: "B", text: "O(n log n) in all cases" }, 
      { id: "C", text: "O(n^2) in worst case" }, 
      { id: "D", text: "O(log n)" }
    ], 
    answer: "B", 
    explanation: "Merge sort's divide and conquer strategy ensures O(n log n) even in worst case." 
  },
  { 
    id: 14, 
    text: "Space complexity of an algorithm refers to:", 
    options: [
      { id: "A", text: "How much disk space the code occupies" }, 
      { id: "B", text: "The maximum amount of RAM used at any point" }, 
      { id: "C", text: "The length of the variables" }, 
      { id: "D", text: "The number of loops" }
    ], 
    answer: "B", 
    explanation: "It measures the memory growth relative to input size." 
  },
  { 
    id: 15, 
    text: "If a problem can be solved in O(1) space, it is called:", 
    options: [
      { id: "A", text: "Linear space algorithm" }, 
      { id: "B", text: "In-place or constant space algorithm" }, 
      { id: "C", text: "Recursive algorithm" }, 
      { id: "D", text: "Polynomial time algorithm" }
    ], 
    answer: "B", 
    explanation: "Constant space means memory usage doesn't grow with input n." 
  },
  { 
    id: 16, 
    text: "What is the time complexity of finding the smallest element in an unsorted array?", 
    options: [
      { id: "A", text: "O(1)" }, 
      { id: "B", text: "O(n)" }, 
      { id: "C", text: "O(log n)" }, 
      { id: "D", text: "O(n log n)" }
    ], 
    answer: "B", 
    explanation: "You must check every element at least once." 
  },
  { 
    id: 17, 
    text: "Big O of 10n^3 + 5n^2 + 100 log n is:", 
    options: [
      { id: "A", text: "O(n^2)" }, 
      { id: "B", text: "O(log n)" }, 
      { id: "C", text: "O(n^3)" }, 
      { id: "D", text: "O(n^3 + n^2)" }
    ], 
    answer: "C", 
    explanation: "We ignore lower-order terms and constant coefficients." 
  },
  { 
    id: 18, 
    text: "Which data structure has O(1) for both access by index and deletion/insertion at end?", 
    options: [
      { id: "A", text: "Linked List" }, 
      { id: "B", text: "Array / Dynamic Array (amortized)" }, 
      { id: "C", text: "Binary Search Tree" }, 
      { id: "D", text: "Queue" }
    ], 
    answer: "B", 
    explanation: "Arrays allow random access via index in constant time." 
  },
  { 
    id: 19, 
    text: "What is the complexity of calculating n!? (using iteration)", 
    options: [
      { id: "A", text: "O(2^n)" }, 
      { id: "B", text: "O(log n)" }, 
      { id: "C", text: "O(n)" }, 
      { id: "D", text: "O(n^2)" }
    ], 
    answer: "C", 
    explanation: "One loop from 1 to n results in O(n) multiplications." 
  },
  { 
    id: 20, 
    text: "In amortized analysis, what is the cost of adding an element to a dynamic array that needs to resize?", 
    options: [
      { id: "A", text: "O(n) for every addition" }, 
      { id: "B", text: "O(1) amortized" }, 
      { id: "C", text: "O(log n)" }, 
      { id: "D", text: "O(n^2)" }
    ], 
    answer: "B", 
    explanation: "Although resize is O(n), it happens rarely enough that the average cost is O(1)." 
  },
  {
    id: 21,
    text: "Which among these is NOT a valid asymptotic notation?",
    options: [
      { id: "A", text: "O (Big O)" },
      { id: "B", text: "Ω (Omega)" },
      { id: "C", text: "β (Beta)" },
      { id: "D", text: "θ (Theta)" }
    ],
    answer: "C",
    explanation: "Beta is not a standard asymptotic complexity notation."
  }
];
export const theory = [];
