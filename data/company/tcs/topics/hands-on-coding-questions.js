export const questions = [
  { 
    id: 1, 
    text: "Given an integer n, write a function to return the n-th Fibonacci number. What is the most space-efficient iterative approach?", 
    options: [
      { id: "A", text: "Recursive formula F(n) = F(n-1) + F(n-2)" }, 
      { id: "B", text: "Using an array of size n to store all values" }, 
      { id: "C", text: "Using only two or three variables to store previous values" }, 
      { id: "D", text: "Matrix exponentiation" }
    ], 
    answer: "C", 
    explanation: "Iterative approach with variables uses O(1) space, whereas recursion or arrays use O(n) space." 
  },
  { 
    id: 2, 
    text: "How do you check if a given number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³)?", 
    options: [
      { id: "A", text: "Extract digits using modulo 10, cube them, and sum" }, 
      { id: "B", text: "Convert to string and check if characters are the same" }, 
      { id: "C", text: "Compare with its reverse" }, 
      { id: "D", text: "Divide by 3" }
    ], 
    answer: "A", 
    explanation: "Summing the digits raised to the power of the number of digits is the Armstrong condition." 
  },
  { 
    id: 3, 
    text: "Which algorithm is most efficient for finding all prime numbers up to n?", 
    options: [
      { id: "A", text: "Trial division for each number up to n" }, 
      { id: "B", text: "Sieve of Eratosthenes" }, 
      { id: "C", text: "Binary Search" }, 
      { id: "D", text: "Quick Sort" }
    ], 
    answer: "B", 
    explanation: "Sieve of Eratosthenes runs in O(n log log n) time." 
  },
  { 
    id: 4, 
    text: "What is the output of the 'Factorial' of 0?", 
    options: [
      { id: "A", text: "0" }, 
      { id: "B", text: "1" }, 
      { id: "C", text: "undefined" }, 
      { id: "D", text: "-1" }
    ], 
    answer: "B", 
    explanation: "By convention and mathematical definition, 0! = 1." 
  },
  { 
    id: 5, 
    text: "In a 'Leap Year' check, which condition is correct?", 
    options: [
      { id: "A", text: "year % 4 == 0" }, 
      { id: "B", text: "(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)" }, 
      { id: "C", text: "year % 400 == 0" }, 
      { id: "D", text: "year % 100 == 0" }
    ], 
    answer: "B", 
    explanation: "Leap year: divisible by 4, but not 100, unless also divisible by 400." 
  },
  { 
    id: 6, 
    text: "How do you swap two numbers without using a third variable?", 
    options: [
      { id: "A", text: "a = a + b; b = a - b; a = a - b;" }, 
      { id: "B", text: "a = a ^ b; b = a ^ b; a = a ^ b;" }, 
      { id: "C", text: "a = a * b; b = a / b; a = a / b;" }, 
      { id: "D", text: "All of the above" }
    ], 
    answer: "D", 
    explanation: "Arithmetic and XOR operations can swap variables without a temp variable." 
  },
  { 
    id: 7, 
    text: "To find the Greatest Common Divisor (GCD) of two numbers, which algorithm is used?", 
    options: [
      { id: "A", text: "Euclidean Algorithm" }, 
      { id: "B", text: "Bubble Sort" }, 
      { id: "C", text: "Binary Search" }, 
      { id: "D", text: "Merge Sort" }
    ], 
    answer: "A", 
    explanation: "GCD(a, b) = GCD(b, a % b)." 
  },
  { 
    id: 8, 
    text: "What is the result of 'Perfect Number' check for 6?", 
    options: [
      { id: "A", text: "Not a perfect number" }, 
      { id: "B", text: "Is a perfect number" }, 
      { id: "C", text: "Prime number" }, 
      { id: "D", text: "Negative number" }
    ], 
    answer: "B", 
    explanation: "Dividers of 6 (excluding 6): 1, 2, 3. Sum = 1+2+3 = 6." 
  },
  { 
    id: 9, 
    text: "Which sorting algorithm is often considered the fastest for general-purpose use?", 
    options: [
      { id: "A", text: "Selection Sort" }, 
      { id: "B", text: "Bubble Sort" }, 
      { id: "C", text: "Quick Sort / Merge Sort" }, 
      { id: "D", text: "Insertion Sort" }
    ], 
    answer: "C", 
    explanation: "They have a time complexity of O(n log n)." 
  },
  { 
    id: 10, 
    text: "How do you convert a decimal number to binary manually in code?", 
    options: [
      { id: "A", text: "Repeatedly divide by 2 and store remainders in reverse" }, 
      { id: "B", text: "Multiply by 2" }, 
      { id: "C", text: "Use bitwise shift >>" }, 
      { id: "D", text: "Both A and C" }
    ], 
    answer: "D", 
    explanation: "Modulo division or bitwise operations can extract binary bits." 
  },
  { 
    id: 11, 
    text: "What is 'Kadane's Algorithm' used for?", 
    options: [
      { id: "A", text: "Finding the maximum product subarray" }, 
      { id: "B", text: "Finding the maximum sum contiguous subarray" }, 
      { id: "C", text: "Sorting numbers" }, 
      { id: "D", text: "Shortest path in a graph" }
    ], 
    answer: "B", 
    explanation: "Kadane's is the standard O(n) solution for Maximum Subarray Sum." 
  },
  { 
    id: 12, 
    text: "In a 'Linear Search', what is the average number of comparisons?", 
    options: [
      { id: "A", text: "1" }, 
      { id: "B", text: "n" }, 
      { id: "C", text: "(n + 1) / 2" }, 
      { id: "D", text: "log n" }
    ], 
    answer: "C", 
    explanation: "On average, the element is found halfway through the list." 
  },
  { 
    id: 13, 
    text: "Which data structure is used to implement recursion?", 
    options: [
      { id: "A", text: "Queue" }, 
      { id: "B", text: "Stack" }, 
      { id: "C", text: "Linked List" }, 
      { id: "D", text: "Binary Tree" }
    ], 
    answer: "B", 
    explanation: "Function calls are managed using a 'Call Stack'." 
  },
  { 
    id: 14, 
    text: "What is the time complexity of 'Selection Sort'?", 
    options: [
      { id: "A", text: "O(n)" }, 
      { id: "B", text: "O(n log n)" }, 
      { id: "C", text: "O(n^2)" }, 
      { id: "D", text: "O(1)" }
    ], 
    answer: "C", 
    explanation: "Selection sort has quadratic complexity in all cases." 
  },
  { 
    id: 15, 
    text: "How do you find the first non-repeating character in a string?", 
    options: [
      { id: "A", text: "Two loops comparing every pair" }, 
      { id: "B", text: "Use a frequency map, then iterate the string to find the first character with frequency 1" }, 
      { id: "C", text: "Sort the string" }, 
      { id: "D", text: "Reverse the string" }
    ], 
    answer: "B", 
    explanation: "This takes O(n) time and O(k) space where k is the character set size." 
  },
  { 
    id: 16, 
    text: "What is the base case in a recursive function to calculate factorial?", 
    options: [
      { id: "A", text: "if (n == 0) return 1;" }, 
      { id: "B", text: "if (n == 1) return 1;" }, 
      { id: "C", text: "Both A or B are valid" }, 
      { id: "D", text: "no base case needed" }
    ], 
    answer: "C", 
    explanation: "Usually n=1 or n=0 is used to stop recursion." 
  },
  { 
    id: 17, 
    text: "Given a sorted array and a target, find the first and last position of the element. Which algorithm is best?", 
    options: [
      { id: "A", text: "Linear search" }, 
      { id: "B", text: "Binary search modified to find boundaries" }, 
      { id: "C", text: "Hashing" }, 
      { id: "D", text: "Merge sort" }
    ], 
    answer: "B", 
    explanation: "Two binary searches can find the left and right boundaries in O(log n)." 
  },
  { 
    id: 18, 
    text: "What is a 'Strong Number'?", 
    options: [
      { id: "A", text: "Sum of factorials of digits equals the number" }, 
      { id: "B", text: "A number with many prime factors" }, 
      { id: "C", text: "A number divisible by its sum of digits" }, 
      { id: "D", text: "A perfect square" }
    ], 
    answer: "A", 
    explanation: "Example: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145." 
  },
  { 
    id: 19, 
    text: "Which method calculates x raised to power y in O(log y) time?", 
    options: [
      { id: "A", text: "Iterative multiplication" }, 
      { id: "B", text: "Binary Exponentiation (Fast Power)" }, 
      { id: "C", text: "Logarithmic lookup" }, 
      { id: "D", text: "Recursion" }
    ], 
    answer: "B", 
    explanation: "Binary exponentiation uses squares to reduce multiplications." 
  },
  { 
    id: 20, 
    text: "How do you reverse a linked list?", 
    options: [
      { id: "A", text: "Store in array and rebuild" }, 
      { id: "B", text: "Iterate and reverse the pointers (next = current.next; current.next = prev; ...)" }, 
      { id: "C", text: "Swap head and tail values" }, 
      { id: "D", text: "Sort the list" }
    ], 
    answer: "B", 
    explanation: "Reversing pointers is the standard in-place O(n) method." 
  },
  {
    id: 21,
    text: "Which algorithm can find the shortest path in a weighted graph without negative edges?",
    options: [
      { id: "A", text: "Breadth-First Search" },
      { id: "B", text: "Dijkstra's Algorithm" },
      { id: "C", text: "Kruskal's Algorithm" },
      { id: "D", text: "Depth-First Search" }
    ],
    answer: "B",
    explanation: "Dijkstra's algorithm is efficient for non-negative weighted graphs."
  },
  {
    id: 22,
    type: "descriptive",
    text: "### Longest Increasing Subsequence\n\nGiven an integer array `nums`, return the length of the longest strictly increasing subsequence.",
    sampleInput: "nums = [10,9,2,5,3,7,101,18]",
    sampleOutput: "4\nExplanation: [2,3,7,101]",
    explanation: "We can solve this in $O(n \log n)$ using a dynamic array `tails`. For each number `x`, if it's larger than the largest in `tails`, append it. Else, find the smallest element in `tails` $\geq x$ and replace it.",
    code: `function lengthOfLIS(nums) {
    let tails = [];
    for (let x of nums) {
        let i = 0, j = tails.length;
        while (i < j) {
            let m = (i + j) >> 1;
            if (tails[m] < x) i = m + 1; else j = m;
        }
        if (i === tails.length) tails.push(x); else tails[i] = x;
    }
    return tails.length;
}`
  },
  {
    id: 23,
    type: "descriptive",
    text: "### Clone Graph\n\nGiven a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
    explanation: "Use a **HashMap** to map original nodes to their copies. Traverse the graph using DFS or BFS. For each neighbor, if it's not in the map, create a clone and add it to the map, then recursively clone the neighbors.",
    code: `var cloneGraph = function(node) {
    if (!node) return null;
    let map = new Map();
    function dfs(n) {
        if (map.has(n)) return map.get(n);
        let copy = new Node(n.val);
        map.set(n, copy);
        for (let neighbor of n.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    }
    return dfs(node);
};`
  },
  {
    id: 24,
    type: "descriptive",
    text: "### Spiral Matrix\n\nGiven an `m x n` matrix, return all elements of the matrix in spiral order.",
    sampleInput: "[[1,2,3],[4,5,6],[7,8,9]]",
    sampleOutput: "[1,2,3,6,9,8,7,4,5]",
    explanation: "Maintain four boundaries: `top`, `bottom`, `left`, `right`. Traverse along `top`, then `right`, then `bottom` (if exists), then `left` (if exists). Shrink boundaries after each traversal.",
    code: `var spiralOrder = function(matrix) {
    let res = [], top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) res.push(matrix[top][i]); top++;
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]); right--;
        if (top <= bottom) for (let i = right; i >= left; i--) res.push(matrix[bottom][i]); bottom--;
        if (left <= right) for (let i = bottom; i >= top; i--) res.push(matrix[i][left]); left++;
    }
    return res;
};`
  },
  {
    id: 25,
    type: "descriptive",
    text: "### Merge Intervals\n\nGiven an array of `intervals`, merge all overlapping intervals.",
    sampleInput: "[[1,3],[2,6],[8,10],[15,18]]",
    sampleOutput: "[[1,6],[8,10],[15,18]]",
    explanation: "1. Sort intervals by start time.\n2. Iterate through sorted intervals.\n3. If current interval overlaps with last merged, update last merged's end time. Else, add current to merged list.",
    code: `var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let last = res[res.length - 1];
        if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
        else res.push(intervals[i]);
    }
    return res;
};`
  },
  {
    id: 26,
    type: "descriptive",
    text: "### Word Break\n\nGiven a string `s` and a dictionary of strings `wordDict`, return true if `s` can be segmented into a space-separated sequence of one or more dictionary words.",
    sampleInput: "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
    sampleOutput: "true",
    explanation: "Use **Dynamic Programming**. `dp[i]` is true if `s[0...i]` can be segmented. For `dp[i]`, check all `j < i` where `dp[j]` is true and `s[j...i]` is in the dictionary.",
    code: `var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict), dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true; break;
            }
        }
    }
    return dp[s.length];
};`
  }
];
export const theory = [];
