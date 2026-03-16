export const questions = [
  { 
    id: 1, 
    text: "Which loop structure is primarily used to print multi-line patterns like pyramids?", 
    options: [
      { id: "A", text: "Single for loop" }, 
      { id: "B", text: "Nested for loops" }, 
      { id: "C", text: "While loop with if-else only" }, 
      { id: "D", text: "Switch case" }
    ], 
    answer: "B", 
    explanation: "Nested loops are used: the outer loop handles rows and the inner loop handles columns/characters." 
  },
  { 
    id: 2, 
    text: "To print a right-angled triangle pattern of n rows, how many characters will be printed in the k-th row (1-indexed)?", 
    options: [
      { id: "A", text: "n" }, 
      { id: "B", text: "k" }, 
      { id: "C", text: "n-k" }, 
      { id: "D", text: "2*k - 1" }
    ], 
    answer: "B", 
    explanation: "In a basic right triangle, the number of characters matches the row number." 
  },
  { 
    id: 3, 
    text: "In a pattern where we print 'n' spaces followed by 'k' stars, if n decreases and k increases as rows progress, what shape usually forms?", 
    options: [
      { id: "A", text: "Left-aligned triangle" }, 
      { id: "B", text: "Right-aligned triangle" }, 
      { id: "C", text: "Square" }, 
      { id: "D", text: "Inverted triangle" }
    ], 
    answer: "B", 
    explanation: "Spaces at the beginning shift the stars to the right." 
  },
  { 
    id: 4, 
    text: "What logic is used to print a Hollow Square pattern?", 
    options: [
      { id: "A", text: "Print star if i==1 or i==n or j==1 or j==n" }, 
      { id: "B", text: "Print star only if i==j" }, 
      { id: "C", text: "Print star only if i+j == n+1" }, 
      { id: "D", text: "Print star everywhere" }
    ], 
    answer: "A", 
    explanation: "Stars are printed on the boundaries (first row, last row, first column, last column)." 
  },
  { 
    id: 5, 
    text: "For a pyramid of height n, what is the formula for the number of stars in row i (1-indexed)?", 
    options: [
      { id: "A", text: "i" }, 
      { id: "B", text: "2*i" }, 
      { id: "C", text: "2*i - 1" }, 
      { id: "D", text: "i + 1" }
    ], 
    answer: "C", 
    explanation: "A symmetric pyramid has odd numbers of stars per row: 1, 3, 5, ..." 
  },
  { 
    id: 6, 
    text: "To print Pascal's Triangle, which mathematical concept is primarily used?", 
    options: [
      { id: "A", text: "Fibonacci numbers" }, 
      { id: "B", text: "Combinations (nCr)" }, 
      { id: "C", text: "Prime numbers" }, 
      { id: "D", text: "Arithmetic Progression" }
    ], 
    answer: "B", 
    explanation: "Row n, entry k in Pascal's triangle is nCk." 
  },
  { 
    id: 7, 
    text: "What pattern will the following print if n=3?\nfor(i=1..n){\n  for(j=1..i) print(i);\n  print(\\n);\n}", 
    options: [
      { id: "A", text: "1\n12\n123" }, 
      { id: "B", text: "1\n22\n333" }, 
      { id: "C", text: "3\n22\n111" }, 
      { id: "D", text: "***" }
    ], 
    answer: "B", 
    explanation: "The inner loop prints the outer loop's index 'i', resulting in 1, then 22, then 333." 
  },
  { 
    id: 8, 
    text: "How do you print a Diamond pattern?", 
    options: [
      { id: "A", text: "Two separate nested loops: one for upper triangle, one for lower inverted triangle" }, 
      { id: "B", text: "A single loop with absolute value math" }, 
      { id: "C", text: "Recursion" }, 
      { id: "D", text: "All of the above" }
    ], 
    answer: "D", 
    explanation: "Various logic styles can generate a diamond." 
  },
  { 
    id: 9, 
    text: "In an 'X' pattern of size n, which condition determines where to print the character?", 
    options: [
      { id: "A", text: "i == j" }, 
      { id: "B", text: "i + j == n + 1" }, 
      { id: "C", text: "(i == j) || (i + j == n + 1)" }, 
      { id: "D", text: "i % 2 == 0" }
    ], 
    answer: "C", 
    explanation: "An X consists of two diagonals: the main diagonal (i==j) and the anti-diagonal (i+j==n+1)." 
  },
  { 
    id: 10, 
    text: "How do you print an inverted right-angled triangle?", 
    options: [
      { id: "A", text: "Outer loop runs from 1 to n, inner loop from 1 to i" }, 
      { id: "B", text: "Outer loop runs from n down to 1, inner loop from 1 to i" }, 
      { id: "C", text: "Outer loop from 1 to n, inner loop from 1 to n-i+1" }, 
      { id: "D", text: "Both B and C" }
    ], 
    answer: "D", 
    explanation: "Reversing the outer loop or the inner loop's limit can invert the triangle." 
  },
  { 
    id: 11, 
    text: "What will happen if you forget the 'print(\\n)' in a nested loop pattern?", 
    options: [
      { id: "A", text: "The pattern will be printed in a single line" }, 
      { id: "B", text: "Compilation error" }, 
      { id: "C", text: "No output" }, 
      { id: "D", text: "Infinite loop" }
    ], 
    answer: "A", 
    explanation: "Missing newline keeps adding characters on the same line." 
  },
  { 
    id: 12, 
    text: "In a Number Pyramid, if row 1 is '1', row 2 is '1 2 1', row 3 is '1 2 3 2 1', what logic is added to the inner loop?", 
    options: [
      { id: "A", text: "Print 1 to i then i-1 down to 1" }, 
      { id: "B", text: "Print i times" }, 
      { id: "C", text: "Print only odd numbers" }, 
      { id: "D", text: "Multiply by 2" }
    ], 
    answer: "A", 
    explanation: "This is a palindromic number pyramid." 
  },
  { 
    id: 13, 
    text: "Floyd's Triangle prints natural numbers sequentially. What is the first number in the 4th row?", 
    options: [
      { id: "A", text: "4" }, 
      { id: "B", text: "7" }, 
      { id: "C", text: "10" }, 
      { id: "D", text: "11" }
    ], 
    answer: "B", 
    explanation: "Row 1: 1 | Row 2: 2,3 | Row 3: 4,5,6 | Row 4: 7,8,9,10." 
  },
  { 
    id: 14, 
    text: "Which of the following is true for an 'hourglass' pattern?", 
    options: [
      { id: "A", text: "It combines an inverted pyramid and a normal pyramid" }, 
      { id: "B", text: "It uses 4 nested loops" }, 
      { id: "C", text: "It is only possible for even n" }, 
      { id: "D", text: "None" }
    ], 
    answer: "A", 
    explanation: "An hourglass shape is formed by flipping a pyramid on top of another." 
  },
  { 
    id: 15, 
    text: "What is the condition to print stars on the anti-diagonal of a square matrix?", 
    options: [
      { id: "A", text: "row + col == n - 1 (0-indexed)" }, 
      { id: "B", text: "row == col" }, 
      { id: "C", text: "row - col == 0" }, 
      { id: "D", text: "row + col == 1" }
    ], 
    answer: "A", 
    explanation: "Anti-diagonal elements follow the sum property: row + col = constant." 
  },
  { 
    id: 16, 
    text: "To print a pattern with characters (A, B, C...), which data type conversion is usually needed inside the loop?", 
    options: [
      { id: "A", text: "Integer to String" }, 
      { id: "B", text: "Integer to Char using ASCII values" }, 
      { id: "C", text: "Float to Int" }, 
      { id: "D", text: "Bool to Char" }
    ], 
    answer: "B", 
    explanation: "'A' starts at ASCII 65. So 65 + i can be cast to char." 
  },
  { 
    id: 17, 
    text: "What will a 'Butterfly' pattern typically look like?", 
    options: [
      { id: "A", text: "Symmetric wings with space in the middle" }, 
      { id: "B", text: "A solid circle" }, 
      { id: "C", text: "A zigzag line" }, 
      { id: "D", text: "A series of dots" }
    ], 
    answer: "A", 
    explanation: "It features triangles on the left and right sides of each row." 
  },
  { 
    id: 18, 
    text: "How do you control the spacing between characters in a pattern?", 
    options: [
      { id: "A", text: "Add a space in the print statement (e.g., print('* '))" }, 
      { id: "B", text: "Use tab characters (\\t)" }, 
      { id: "C", text: "CSS margins" }, 
      { id: "D", text: "Both A and B" }
    ], 
    answer: "D", 
    explanation: "Standard output spacing is done via strings or escape characters." 
  },
  { 
    id: 19, 
    text: "What is the complexity of printing an n x n square pattern?", 
    options: [
      { id: "A", text: "O(n)" }, 
      { id: "B", text: "O(n^2)" }, 
      { id: "C", text: "O(1)" }, 
      { id: "D", text: "O(log n)" }
    ], 
    answer: "B", 
    explanation: "Nested loops from 1 to n result in n * n iterations." 
  },
  { 
    id: 20, 
    text: "In a 'Zig-Zag' pattern of height 3, for row 1, at which indices (1-indexed) are stars printed?", 
    options: [
      { id: "A", text: "1, 2, 3" }, 
      { id: "B", text: "4, 8, 12" }, 
      { id: "C", text: "1, 5, 9" }, 
      { id: "D", text: "All indices" }
    ], 
    answer: "B", 
    explanation: "In a wave/zigzag, stars appeared at specific intervals based on (i+j)%4 == 0 or similar logic." 
  },
  {
    id: 21,
    text: "What's the best approach to print a spiral pattern in a 2D array?",
    options: [
      { id: "A", text: "Use four pointers: top, bottom, left, right" },
      { id: "B", text: "One nested loop" },
      { id: "C", text: "Recursive BFS" },
      { id: "D", text: "Sorting" }
    ],
    answer: "A",
    explanation: "Four pointers help in traversing clockwise layers of the matrix."
  }
];
export const theory = [];
