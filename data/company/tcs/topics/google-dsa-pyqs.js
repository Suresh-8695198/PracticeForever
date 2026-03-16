export const questions = [
  {
    id: 1,
    type: "descriptive",
    text: "### Longest Substring Without Repeating Characters\n\nGiven a string `s`, find the length of the longest substring without repeating characters.",
    sampleInput: "s = \"abcabcbb\"",
    sampleOutput: "3\nExplanation: The answer is \"abc\", with the length of 3.",
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    explanation: "We use a **Sliding Window** approach with a `Map` to store the last index of each character. We maintain a pointer `left` to track the start of the window. As we iterate with a `right` pointer, if the character is already in the map and within the current window, we move `left` to `lastIndex + 1`.",
    code: `function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0, maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}`
  },
  {
    id: 2,
    type: "descriptive",
    text: "### Median of Two Sorted Arrays\n\nGiven two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be `O(log (m+n))`.",
    sampleInput: "nums1 = [1,3], nums2 = [2]",
    sampleOutput: "2.00000\nExplanation: merged array = [1,2,3] and median is 2.",
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m, n <= 1000", "-10^6 <= nums1[i], nums2[i] <= 10^6"],
    explanation: "To achieve `O(log(min(m,n)))`, we use binary search to partition the smaller of the two arrays. We find a partition such that elements on the left side are smaller than or equal to elements on the right side.",
    code: `var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    let m = nums1.length, n = nums2.length;
    let left = 0, right = m;
    
    while (left <= right) {
        let partitionX = (left + right) >> 1;
        let partitionY = ((m + n + 1) >> 1) - partitionX;
        
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX === m) ? Infinity : nums1[partitionX];
        
        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY === n) ? Infinity : nums2[partitionY];
        
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }
};`
  },
  {
    id: 3,
    type: "descriptive",
    text: "### Trapping Rain Water\n\nGiven `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    sampleInput: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
    sampleOutput: "6",
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    explanation: "Using the **Two Pointer** technique, we maintain `leftMax` and `rightMax`. At each step, the water trapped depends on the smaller of the two maximums minus the current height.",
    code: `var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, result = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : result += (leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]) : result += (rightMax - height[right]);
            right--;
        }
    }
    return result;
};`
  },
  {
    id: 4,
    type: "descriptive",
    text: "### Merge k Sorted Lists\n\nMerge `k` sorted linked lists and return it as one sorted list.",
    sampleInput: "lists = [[1,4,5],[1,3,4],[2,6]]",
    sampleOutput: "[1,1,2,3,4,4,5,6]",
    constraints: ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500"],
    explanation: "We can use a **Min-Priority Queue** to store the heads of all $k$ lists. Repeatedly extract the minimum element and push its next node into the priority queue. Complexity: `O(N log k)`.",
    code: `// Using Divide and Conquer approach for O(N log k) without PQ
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    return mergeSort(lists, 0, lists.length - 1);
};

function mergeSort(lists, start, end) {
    if (start === end) return lists[start];
    let mid = Math.floor((start + end) / 2);
    let l1 = mergeSort(lists, start, mid);
    let l2 = mergeSort(lists, mid + 1, end);
    return mergeTwoLists(l1, l2);
}`
  },
  {
    id: 5,
    type: "descriptive",
    text: "### Word Search II\n\nGiven an `m x n` board of characters and a list of strings `words`, return all words on the board.",
    sampleInput: "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
    sampleOutput: "[\"eat\",\"oath\"]",
    constraints: ["m == board.length", "n == board[i].length", "1 <= m, n <= 12", "1 <= words.length <= 3 * 10^4"],
    explanation: "The optimal solution uses a **Trie (Prefix Tree)** combined with **Backtracking (DFS)**. By storing the dictionary in a Trie, we can prune search paths that cannot possibly form a valid word.",
    code: `var findWords = function(board, words) {
    let res = [], root = buildTrie(words);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, root, res);
        }
    }
    return res;
};`
  },
  {
    id: 6,
    type: "descriptive",
    text: "### LRU Cache Design\n\nDesign a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    sampleInput: "[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]",
    sampleOutput: "[null, null, null, 1, null, -1, null, -1, 3, 4]",
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10^4", "0 <= value <= 10^5"],
    explanation: "Use a **Hash Map** for $O(1)$ access and a **Doubly Linked List** for $O(1)$ removal/addition of nodes. This setup allows maintaining the order of access efficiently.",
    code: `class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // Key -> Node
        this.head = {}; this.tail = {};
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    // Implement get and put using list operations...
}`
  },
  {
    id: 7,
    type: "descriptive",
    text: "### Find Median from Data Stream\n\nDesign a data structure that supports adding a number and finding the median.",
    sampleInput: "addNum(1), addNum(2), findMedian() -> 1.5, addNum(3), findMedian() -> 2",
    explanation: "Use two heaps: a **Max-Heap** to store the smaller half of numbers and a **Min-Heap** to store the larger half. The median is either the top of the larger heap (if total count is odd) or the average of both tops.",
    code: `class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }
    // Logic: Balance heaps such that count diff <= 1
};`
  },
  {
    id: 8,
    type: "descriptive",
    text: "### Binary Tree Maximum Path Sum\n\nA path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. Find the maximum path sum.",
    sampleInput: "root = [-10,9,20,null,null,15,7]",
    sampleOutput: "42\nExplanation: 15 + 20 + 7 = 42",
    explanation: "At each node, we calculate the max path through it (`node.val + leftMax + rightMax`) and update the global max. We return to the parent only the best single branch (`node.val + max(left, right)`).",
    code: `var maxPathSum = function(root) {
    let maxSum = -Infinity;
    function dfs(node) {
        if (!node) return 0;
        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));
        maxSum = Math.max(maxSum, node.val + left + right);
        return node.val + Math.max(left, right);
    }
    dfs(root);
    return maxSum;
};`
  },
  {
    id: 9,
    type: "descriptive",
    text: "### Longest Palindromic Substring\n\nGiven a string `s`, return the longest palindromic substring in `s`.",
    sampleInput: "s = \"babad\"",
    sampleOutput: "\"bab\" or \"aba\"",
    explanation: "A common approach is **Expanding from Center**. For each character (and each gap between characters), we expand outwards as long as it remains a palindrome.",
    code: `var longestPalindrome = function(s) {
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expand(s, i, i);
        let len2 = expand(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};`
  },
  {
    id: 10,
    type: "descriptive",
    text: "### Course Schedule II\n\nThere are `n` courses. Given prerequisites, return the order in which you should take them. If no order, return empty array.",
    sampleInput: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    sampleOutput: "[0,1,2,3] or [0,2,1,3]",
    explanation: "This is a **Topological Sort** problem. We can use Kahn's Algorithm (BFS with In-degrees) or DFS with an 'active' set to detect cycles.",
    code: `var findOrder = function(numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    let inDegree = new Array(numCourses).fill(0);
    // Build graph and calculate in-degrees...
    // Use queue for BFS...
};`
  },
  {
    id: 11,
    type: "descriptive",
    text: "### Edit Distance\n\nFind the minimum number of operations (insert, delete, replace) to convert string `word1` to `word2`.",
    sampleInput: "word1 = \"horse\", word2 = \"ros\"",
    sampleOutput: "3",
    explanation: "Classic **Dynamic Programming**. `dp[i][j]` stores min operations for prefixes `word1[0..i]` and `word2[0..j]`. If characters match, `dp[i][j] = dp[i-1][j-1]`. Else, take 1 + min of three possible operations.",
    code: `var minDistance = function(word1, word2) {
    // dp table initialization...
};`
  },
  {
    id: 12,
    type: "descriptive",
    text: "### Lowest Common Ancestor of a Binary Tree\n\nFind the Lowest Common Ancestor (LCA) of two given nodes `p` and `q`.",
    sampleInput: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
    sampleOutput: "3",
    explanation: "Recurse down the tree. If current node is `p` or `q`, return it. If recursion returns non-null from both left and right, the current node is the LCA.",
    code: `var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    return (left && right) ? root : (left || right);
};`
  },
  {
    id: 13,
    type: "descriptive",
    text: "### Reverse Nodes in k-Group\n\nGiven the `head` of a linked list, reverse the nodes of the list `k` at a time and return its modified list.",
    sampleInput: "head = [1,2,3,4,5], k = 2",
    sampleOutput: "[2,1,4,3,5]",
    explanation: "Find the $k+1$-th node. If it exists, reverse the current $k$ nodes and recurse for the rest. If not enough nodes left, leave them as is.",
    code: `var reverseKGroup = function(head, k) {
    let curr = head, count = 0;
    while (curr && count < k) { curr = curr.next; count++; }
    if (count === k) {
        let prev = reverseKGroup(curr, k);
        while (count-- > 0) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        head = prev;
    }
    return head;
};`
  },
  {
    id: 14,
    type: "descriptive",
    text: "### Implement Trie (Prefix Tree)\n\nImplement a trie with `insert`, `search`, and `startsWith` methods.",
    explanation: "Represent each node with a hash map or array of size 26 for children and a boolean flag `isEndOfWord`.",
    code: `class Trie {
    constructor() { this.root = {}; }
    insert(word) { ... }
    search(word) { ... }
    startsWith(prefix) { ... }
};`
  },
  {
    id: 15,
    type: "descriptive",
    text: "### Skyline Problem\n\nGiven the positions and heights of buildings, return the skyline formed by these buildings.",
    explanation: "This can be solved using a **Sweep Line Algorithm** with a Max-Heap (or TreeMap) to keep track of concurrent building heights at each critical edge (start/end points).",
    code: `var getSkyline = function(buildings) {
    // Critical points: [x, -h] for start, [x, h] for end.
    // Sort and process with Max-Heap...
};`
  }
];
export const theory = [];
