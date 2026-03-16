export const questions = [
  { 
    id: 1, 
    text: "Given an array of integers, how do you find the second largest element in a single pass?", 
    options: [
      { id: "A", text: "Sort the array and pick the second last element" }, 
      { id: "B", text: "Initialize two variables 'max' and 'secondMax', update them while iterating once" }, 
      { id: "C", text: "Iterate once to find max, then iterate again to find the largest smaller than max" }, 
      { id: "D", text: "Use a hash map to count frequencies" }
    ], 
    answer: "B", 
    explanation: "Using two variables allows finding the second largest in O(n) time with O(1) space in a single traversal." 
  },
  { 
    id: 2, 
    text: "Which of the following operations on a string has a time complexity of O(1) in C++ (std::string)?", 
    options: [
      { id: "A", text: "Appending a character (average)" }, 
      { id: "B", text: "Erasing a character from the middle" }, 
      { id: "C", text: "Concatenating two strings of length n" }, 
      { id: "D", text: "Reversing the string" }
    ], 
    answer: "A", 
    explanation: "std::string::push_back or += on a character is an amortized O(1) operation." 
  },
  { 
    id: 3, 
    text: "What is the result of reversing the string 'TCS_NQT' using a two-pointer approach?", 
    options: [
      { id: "A", text: "TQN_SCT" }, 
      { id: "B", text: "TCSNQT" }, 
      { id: "C", text: "TQN_SCT" }, 
      { id: "D", text: "TQN_SCT" }
    ], 
    answer: "C", 
    explanation: "Reversing 'TCS_NQT' gives 'TQN_SCT'. Wait, let me re-check. T-C-S-_-N-Q-T reversed is T-Q-N-_-S-C-T." 
  },
  { 
    id: 4, 
    text: "In Java, what is the best way to check if two strings are anagrams of each other?", 
    options: [
      { id: "A", text: "Compare lengths and then check if all characters match in any order" }, 
      { id: "B", text: "Sort both strings and compare if they are equal" }, 
      { id: "C", text: "Use a frequency array (hash table) to count characters" }, 
      { id: "D", text: "Both B and C are efficient, but C is O(n)" }
    ], 
    answer: "D", 
    explanation: "Sorting takes O(n log n), while a frequency array takes O(n). Both are valid methods." 
  },
  { 
    id: 5, 
    text: "Given an array {1, 2, 3, 4, 5}, what is the state of the array after left rotating it by 2 positions?", 
    options: [
      { id: "A", text: "{4, 5, 1, 2, 3}" }, 
      { id: "B", text: "{3, 4, 5, 1, 2}" }, 
      { id: "C", text: "{2, 3, 4, 5, 1}" }, 
      { id: "D", text: "{5, 1, 2, 3, 4}" }
    ], 
    answer: "B", 
    explanation: "Left rotation by 2: {3, 4, 5, 1, 2}." 
  },
  { 
    id: 6, 
    text: "How do you find the missing number in an array of size n-1 containing unique elements from 1 to n?", 
    options: [
      { id: "A", text: "Sum of first n natural numbers minus sum of array elements" }, 
      { id: "B", text: "XOR all elements from 1 to n and XOR the result with all array elements" }, 
      { id: "C", text: "Sort the array and find the gap" }, 
      { id: "D", text: "Both A and B" }
    ], 
    answer: "D", 
    explanation: "Both Sum method and XOR method work in O(n) time and O(1) space." 
  },
  { 
    id: 7, 
    text: "What is a 'Palindrome' string?", 
    options: [
      { id: "A", text: "A string that reads the same forwards and backwards" }, 
      { id: "B", text: "A string with no repeating characters" }, 
      { id: "C", text: "A string that contains all vowels" }, 
      { id: "D", text: "A string that is sorted alphabetically" }
    ], 
    answer: "A", 
    explanation: "Example: 'madam', 'racecar'." 
  },
  { 
    id: 8, 
    text: "Which algorithm is used to find the longest common prefix among a set of strings?", 
    options: [
      { id: "A", text: "Kadane's Algorithm" }, 
      { id: "B", text: "KMP Algorithm" }, 
      { id: "C", text: "Horizontal Scanning or Vertical Scanning" }, 
      { id: "D", text: "Dijkstra's Algorithm" }
    ], 
    answer: "C", 
    explanation: "Horizontal/Vertical scanning is commonly used for LCP." 
  },
  { 
    id: 9, 
    text: "In the context of arrays, what does 'Subarray' mean?", 
    options: [
      { id: "A", text: "Any subset of elements from the array" }, 
      { id: "B", text: "A contiguous part of an array" }, 
      { id: "C", text: "The first half of the array" }, 
      { id: "D", text: "Elements at even indices only" }
    ], 
    answer: "B", 
    explanation: "A subarray must have consecutive elements from the original array." 
  },
  { 
    id: 10, 
    text: "What is the time complexity to search for an element in a sorted array of size n using binary search?", 
    options: [
      { id: "A", text: "O(n)" }, 
      { id: "B", text: "O(n/2)" }, 
      { id: "C", text: "O(log n)" }, 
      { id: "D", text: "O(1)" }
    ], 
    answer: "C", 
    explanation: "Binary search repeatedly divides the search interval in half." 
  },
  { 
    id: 11, 
    text: "How do you remove duplicates from a sorted array in O(n) time and O(1) space?", 
    options: [
      { id: "A", text: "Use a HashSet" }, 
      { id: "B", text: "Use a two-pointer approach to shift unique elements to the front" }, 
      { id: "C", text: "Create a new array and copy unique elements" }, 
      { id: "D", text: "Sort the array again" }
    ], 
    answer: "B", 
    explanation: "Keep one pointer for the unique element position and another for iterating." 
  },
  { 
    id: 12, 
    text: "In Python, which function is used to convert a string to a list of characters?", 
    options: [
      { id: "A", text: "list(string)" }, 
      { id: "B", text: "string.split()" }, 
      { id: "C", text: "string.toList()" }, 
      { id: "D", text: "chars(string)" }
    ], 
    answer: "A", 
    explanation: "list('abc') returns ['a', 'b', 'c']." 
  },
  { 
    id: 13, 
    text: "What is the maximum number of subarrays for an array of size n?", 
    options: [
      { id: "A", text: "n" }, 
      { id: "B", text: "n^2" }, 
      { id: "C", text: "n(n+1)/2" }, 
      { id: "D", text: "2^n" }
    ], 
    answer: "C", 
    explanation: "The number of subarrays is calculated as n*(n+1)/2." 
  },
  { 
    id: 14, 
    text: "Given a string 'Hello World', how would you reverse the order of words to get 'World Hello'?", 
    options: [
      { id: "A", text: "Reverse characters and then reverse each word" }, 
      { id: "B", text: "Split by space, reverse the list, and join" }, 
      { id: "C", text: "Use a stack to push words and then pop" }, 
      { id: "D", text: "All of the above" }
    ], 
    answer: "D", 
    explanation: "Multiple strategies can achieve word reversal." 
  },
  { 
    id: 15, 
    text: "What is the result of 'abc' + '123' in most modern programming languages?", 
    options: [
      { id: "A", text: "Error" }, 
      { id: "B", text: "'abc123'" }, 
      { id: "C", text: "'123abc'" }, 
      { id: "D", text: "None of these" }
    ], 
    answer: "B", 
    explanation: "String concatenation results in 'abc123'." 
  },
  { 
    id: 16, 
    text: "Which method is used to find the length of an array in JavaScript?", 
    options: [
      { id: "A", text: "array.size()" }, 
      { id: "B", text: "array.length" }, 
      { id: "C", text: "len(array)" }, 
      { id: "D", text: "array.count" }
    ], 
    answer: "B", 
    explanation: ".length is a property of Arrays in JS." 
  },
  { 
    id: 17, 
    text: "How can you find the majority element (appears > n/2 times) in an array efficiently?", 
    options: [
      { id: "A", text: "Sorting - O(n log n)" }, 
      { id: "B", text: "Boyer-Moore Voting Algorithm - O(n)" }, 
      { id: "C", text: "Hash Map approach - O(n)" }, 
      { id: "D", text: "All of the above" }
    ], 
    answer: "D", 
    explanation: "Boyer-Moore is the most space-efficient (O(1) space)." 
  },
  { 
    id: 18, 
    text: "What does the 'Immutable' property of strings in Java/Python mean?", 
    options: [
      { id: "A", text: "Strings cannot be modified once created" }, 
      { id: "B", text: "Strings can only contain lowercase letters" }, 
      { id: "C", text: "Strings have fixed memory size" }, 
      { id: "D", text: "Strings are always sorted" }
    ], 
    answer: "A", 
    explanation: "Any modification creates a new string object." 
  },
  { 
    id: 19, 
    text: "In an array of integers where every element appears twice except for one, how do you find that single element?", 
    options: [
      { id: "A", text: "Sort and compare neighbors" }, 
      { id: "B", text: "Use a Hash Map" }, 
      { id: "C", text: "XOR all elements" }, 
      { id: "D", text: "Sum of unique elements minus sum of array" }
    ], 
    answer: "C", 
    explanation: "A XOR A = 0, so all paired elements cancel out, leaving the single element." 
  },
  { 
    id: 20, 
    text: "What is the 'Longest Palindromic Substring' of 'babad'?", 
    options: [
      { id: "A", text: "'aba'" }, 
      { id: "B", text: "'bab'" }, 
      { id: "C", text: "'aba' or 'bab'" }, 
      { id: "D", text: "'ba'" }
    ], 
    answer: "C", 
    explanation: "Both 'aba' and 'bab' are valid 3-length palindromes." 
  },
  {
    id: 21,
    text: "Given an array of size n, how do you find the equilibrium index?",
    options: [
      { id: "A", text: "Iterate and check left sum == right sum for each index" },
      { id: "B", text: "Calculate total sum, then iterate updating left sum and comparing with (total sum - left sum - current)" },
      { id: "C", text: "Sort the array" },
      { id: "D", text: "Use binary search" }
    ],
    answer: "B",
    explanation: "This approach takes O(n) time and O(1) space."
  },
  {
    id: 22,
    type: "descriptive",
    text: "### Subarray Sum Equals K\n\nGiven an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",
    sampleInput: "nums = [1,1,1], k = 2",
    sampleOutput: "2",
    explanation: "Use a **HashMap** to store the cumulative sum (prefix sum) and its frequency. For each `currentSum`, we check if `currentSum - k` exists in the map. If it does, it means there's a subarray ending here that sums to `k`.",
    code: `function subarraySum(nums, k) {
    let map = new Map([[0, 1]]);
    let count = 0, sum = 0;
    for (let n of nums) {
        sum += n;
        if (map.has(sum - k)) count += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}`
  },
  {
    id: 23,
    type: "descriptive",
    text: "### Next Permutation\n\nImplement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.",
    sampleInput: "[1,2,3]",
    sampleOutput: "[1,3,2]",
    explanation: "1. Find the first decreasing element from right (index `i`).\n2. Find the smallest element larger than `nums[i]` to its right.\n3. Swap them.\n4. Reverse the suffix.",
    code: `var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
};`
  },
  {
    id: 24,
    type: "descriptive",
    text: "### Rotate Image (Matrix Rotation)\n\nYou are given an `n x n` 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
    sampleInput: "[[1,2,3],[4,5,6],[7,8,9]]",
    sampleOutput: "[[7,4,1],[8,5,2],[9,6,3]]",
    explanation: "1. Transpose the matrix (swap `matrix[i][j]` with `matrix[j][i]`).\n2. Reverse each row.",
    code: `var rotate = function(matrix) {
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};`
  },
  {
    id: 25,
    type: "descriptive",
    text: "### Minimum Window Substring\n\nGiven two strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` is included in the window.",
    sampleInput: "s = \"ADOBECODEBANC\", t = \"ABC\"",
    sampleOutput: "\"BANC\"",
    explanation: "Use a sliding window with two pointers and a frequency map. Expand the right pointer until requirements are met, then contract the left pointer as much as possible while maintaining requirements.",
    code: `var minWindow = function(s, t) {
    // Sliding window logic with character counts...
};`
  },
  {
    id: 26,
    type: "descriptive",
    text: "### Container With Most Water\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.",
    sampleInput: "[1,8,6,2,5,4,8,3,7]",
    sampleOutput: "49",
    explanation: "Use two pointers, one at each end. Calculate area, then move the pointer pointing to the shorter line inwards.",
    code: `var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) left++; else right--;
    }
    return max;
};`
  }
];
export const theory = [];
