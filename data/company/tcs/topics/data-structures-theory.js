export const questions = [
  {
    id: 1,
    text: "What is the time complexity of searching an element in a sorted array using Binary Search?",
    options: [
      { id: "A", text: "O(n)" },
      { id: "B", text: "O(log n)" },
      { id: "C", text: "O(n log n)" },
      { id: "D", text: "O(1)" }
    ],
    answer: "B",
    explanation: "Binary search divides the search space in half with each step, leading to logarithmic time complexity."
  },
  {
    id: 2,
    text: "Which data structure follows the LIFO (Last In First Out) principle?",
    options: [
      { id: "A", text: "Queue" },
      { id: "B", text: "Stack" },
      { id: "C", text: "Linked List" },
      { id: "D", text: "Tree" }
    ],
    answer: "B",
    explanation: "A stack is like a pile of plates; the last one added is the first one removed."
  },
  {
    id: 3,
    text: "What is the primary advantage of a Linked List over an Array?",
    options: [
      { id: "A", text: "Faster access to elements (O(1))" },
      { id: "B", text: "Dynamic size and efficient insertions/deletions" },
      { id: "C", text: "Uses less memory" },
      { id: "D", text: "Easier to sort" }
    ],
    answer: "B",
    explanation: "Linked lists can grow or shrink at runtime and don't require shifting elements for insertion/deletion."
  },
  {
    id: 4,
    text: "Which of the following is a 'Non-Linear' data structure?",
    options: [
      { id: "A", text: "Array" },
      { id: "B", text: "Stack" },
      { id: "C", text: "Graph" },
      { id: "D", text: "Queue" }
    ],
    answer: "C",
    explanation: "Graphs and Trees are non-linear; elements are not arranged in a sequence."
  },
  {
    id: 5,
    text: "What is the worst-case time complexity of Quick Sort?",
    options: [
      { id: "A", text: "O(n log n)" },
      { id: "B", text: "O(n^2)" },
      { id: "C", text: "O(n)" },
      { id: "D", text: "O(log n)" }
    ],
    answer: "B",
    explanation: "The worst case occurs when the pivot is always the smallest or largest element (e.g., in a sorted array)."
  },
  {
    id: 6,
    text: "In a Binary Search Tree (BST), what is the relationship between a node and its left child?",
    options: [
      { id: "A", text: "Left child value > Node value" },
      { id: "B", text: "Left child value < Node value" },
      { id: "C", text: "They must be equal" },
      { id: "D", text: "There is no rule" }
    ],
    answer: "B",
    explanation: "In a BST, all nodes in the left subtree have values less than the root, and right subtree nodes have values greater."
  },
  {
    id: 7,
    text: "Which data structure is used for Breadth-First Search (BFS) in a graph?",
    options: [
      { id: "A", text: "Stack" },
      { id: "B", text: "Queue" },
      { id: "C", text: "Array" },
      { id: "D", text: "Hash Table" }
    ],
    answer: "B",
    explanation: "BFS explores level by level, requiring a FIFO (Queue) structure."
  },
  {
    id: 8,
    text: "What is a 'Hash Collision'?",
    options: [
      { id: "A", text: "When the database crashes" },
      { id: "B", text: "When two different keys produce the same hash index" },
      { id: "C", text: "When a key is too long" },
      { id: "D", text: "When memory is full" }
    ],
    answer: "B",
    explanation: "Collisions are handled using techniques like Chaining or Open Addressing."
  },
  {
    id: 9,
    text: "What is the time complexity of pushing an element onto a stack?",
    options: [
      { id: "A", text: "O(1)" },
      { id: "B", text: "O(n)" },
      { id: "C", text: "O(log n)" },
      { id: "D", text: "O(n log n)" }
    ],
    answer: "A",
    explanation: "Pushing or popping from the top of a stack takes constant time."
  },
  {
    id: 10,
    text: "A 'Circular Linked List' differs from a 'Single Linked List' because:",
    options: [
      { id: "A", text: "It uses more memory" },
      { id: "B", text: "The last node points back to the first node (head)" },
      { id: "C", text: "It can only go backwards" },
      { id: "D", text: "It doesn't use pointers" }
    ],
    answer: "B",
    explanation: "Circular lists have no NULL termination; the tail wraps around to the head."
  },
  {
    id: 11,
    text: "What is a 'Priority Queue'?",
    options: [
      { id: "A", text: "A queue that is processed very fast" },
      { id: "B", text: "A data structure where each element has a priority, and the element with highest priority is served first" },
      { id: "C", text: "A queue for VIP users" },
      { id: "D", text: "A stack with a different name" }
    ],
    answer: "B",
    explanation: "Priority queues are typically implemented using Heaps."
  },
  {
    id: 12,
    text: "What is the max number of nodes in a binary tree of height 'h'?",
    options: [
      { id: "A", text: "2*h" },
      { id: "B", text: "2^h - 1" },
      { id: "C", text: "h^2" },
      { id: "D", text: "2^(h+1) - 1" }
    ],
    answer: "D",
    explanation: "Example: height 0 -> 1 node; height 1 -> 3 nodes; height 2 -> 7 nodes."
  },
  {
    id: 13,
    text: "Which of the following sorting algorithms is 'Stable'?",
    options: [
      { id: "A", text: "Quick Sort" },
      { id: "B", text: "Merge Sort" },
      { id: "C", text: "Heap Sort" },
      { id: "D", text: "Selection Sort" }
    ],
    answer: "B",
    explanation: "Stable sorting maintains the relative order of elements with equal keys."
  },
  {
    id: 14,
    text: "What is the space complexity of an Adjacency Matrix for a graph with 'V' vertices?",
    options: [
      { id: "A", text: "O(V)" },
      { id: "B", text: "O(V^2)" },
      { id: "C", text: "O(E)" },
      { id: "D", text: "O(log V)" }
    ],
    answer: "B",
    explanation: "An adjacency matrix stores connections in a V x V grid."
  },
  {
    id: 15,
    text: "What is a 'Min-Heap'?",
    options: [
      { id: "A", text: "A tree with only small values" },
      { id: "B", text: "A complete binary tree where the root node is the minimum among all nodes" },
      { id: "C", text: "A heap that is almost empty" },
      { id: "D", text: "A sorted array" }
    ],
    answer: "B",
    explanation: "In a Min-Heap, every parent node is smaller than or equal to its child nodes."
  },
  {
    id: 16,
    text: "What is the purpose of 'Dynamic Programming' in algorithms?",
    options: [
      { id: "A", text: "To make code more readable" },
      { id: "B", text: "To solve complex problems by breaking them into overlapping subproblems and storing results" },
      { id: "C", text: "To create dynamic arrays" },
      { id: "D", text: "To handle user input" }
    ],
    answer: "B",
    explanation: "DP uses 'Memoization' or 'Tabulation' to avoid redundant calculations."
  },
  {
    id: 17,
    text: "Which traversal of a BST gives the elements in sorted order?",
    options: [
      { id: "A", text: "Pre-order" },
      { id: "B", text: "Post-order" },
      { id: "C", text: "In-order" },
      { id: "D", text: "Level-order" }
    ],
    answer: "C",
    explanation: "In-order (Left, Root, Right) traversal of a BST perfectly sorts the data."
  },
  {
    id: 18,
    text: "What is an 'AVL Tree'?",
    options: [
      { id: "A", text: "A tree with alphabetical values" },
      { id: "B", text: "A self-balancing Binary Search Tree where the height difference of subtrees is at most 1" },
      { id: "C", text: "A tree used for compression" },
      { id: "D", text: "A very large tree" }
    ],
    answer: "B",
    explanation: "AVL trees ensure O(log n) performance by rebalancing after insertions/deletions."
  },
  {
    id: 19,
    text: "Which of these is used to implement recursion?",
    options: [
      { id: "A", text: "Queue" },
      { id: "B", text: "Stack" },
      { id: "C", text: "Linked List" },
      { id: "D", text: "Map" }
    ],
    answer: "B",
    explanation: "The OS uses a call stack to keep track of function execution and local variables in recursive calls."
  },
  {
    id: 20,
    text: "What is the time complexity of deleting a node from a Doubly Linked List, given a pointer to that node?",
    options: [
      { id: "A", text: "O(1)" },
      { id: "B", text: "O(n)" },
      { id: "C", text: "O(log n)" },
      { id: "D", text: "O(n^2)" }
    ],
    answer: "A",
    explanation: "Since you have the node, you can directly update the 'prev' of next and 'next' of prev in constant time."
  },
  {
    id: 21,
    text: "What is a 'Trie' (Prefix Tree) primarily used for?",
    options: [
      { id: "A", text: "Storing numbers" },
      { id: "B", text: "Efficiently storing and searching strings (e.g., autocomplete, spell check)" },
      { id: "C", text: "Sorting arrays" },
      { id: "D", text: "Finding the shortest path in a graph" }
    ],
    answer: "B",
    explanation: "Tries store characters at each node, allowing for prefix-based searches in O(L) time where L is the string length."
  },
  {
    id: 22,
    text: "What is the time complexity of building a heap from an array of 'n' elements?",
    options: [
      { id: "A", text: "O(n log n)" },
      { id: "B", text: "O(n)" },
      { id: "C", text: "O(n^2)" },
      { id: "D", text: "O(1)" }
    ],
    answer: "B",
    explanation: "While inserting n elements one by one takes O(n log n), the optimized 'Build Heap' algorithm takes linear time."
  },
  {
    id: 23,
    text: "Which algorithm is used to find the 'Shortest Path' in a graph with non-negative edge weights?",
    options: [
      { id: "A", text: "Prim's Algorithm" },
      { id: "B", text: "Dijkstra's Algorithm" },
      { id: "C", text: "Kruskal's Algorithm" },
      { id: "D", text: "DFS" }
    ],
    answer: "B",
    explanation: "Dijkstra's is the standard for single-source shortest paths with non-negative weights."
  },
  {
    id: 24,
    text: "What is 'Topological Sort' used for?",
    options: [
      { id: "A", text: "Sorting numbers" },
      { id: "B", text: "Ordering tasks based on dependencies in a Directed Acyclic Graph (DAG)" },
      { id: "C", text: "Searching in a BST" },
      { id: "D", text: "Balancing a tree" }
    ],
    answer: "B",
    explanation: "It ensures that for every directed edge uv, vertex u comes before v in the ordering."
  },
  {
    id: 25,
    text: "What are the two main operations in 'Disjoint Set Union' (DSU)?",
    options: [
      { id: "A", text: "Push and Pop" },
      { id: "B", text: "Find and Union" },
      { id: "C", text: "Insert and Delete" },
      { id: "D", text: "Enqueue and Dequeue" }
    ],
    answer: "B",
    explanation: "DSU keeps track of elements partitioned into a number of disjoint sets. 'Find' determines which set an element is in, and 'Union' joins two sets."
  },
  {
    id: 26,
    text: "What is a 'B-Tree' commonly used for?",
    options: [
      { id: "A", text: "Main memory storage" },
      { id: "B", text: "Databases and File Systems (Disk storage)" },
      { id: "C", text: "Graphic rendering" },
      { id: "D", text: "Simple sorting" }
    ],
    answer: "B",
    explanation: "B-Trees are designed for systems that read and write large blocks of data, minimizing disk I/O."
  },
  {
    id: 27,
    text: "In a 'Self-Balancing Binary Search Tree', what is the purpose of 'Rotations'?",
    options: [
      { id: "A", text: "To sort names" },
      { id: "B", text: "To maintain the height of the tree near O(log n)" },
      { id: "C", text: "To delete the root" },
      { id: "D", text: "To visit every node" }
    ],
    answer: "B",
    explanation: "Rotations (Left, Right, Left-Right, Right-Left) fix balance factor violations after insertion/deletion."
  },
  {
    id: 28,
    text: "What is the complexity of accessing an element in a 'Hash Table' in the average case?",
    options: [
      { id: "A", text: "O(n)" },
      { id: "B", text: "O(1)" },
      { id: "C", text: "O(log n)" },
      { id: "D", text: "O(n^2)" }
    ],
    answer: "B",
    explanation: "With a good hash function and reasonable load factor, access is constant time."
  },
  {
    id: 29,
    text: "Which of these is a 'Greedy' algorithm?",
    options: [
      { id: "A", text: "Merge Sort" },
      { id: "B", text: "Huffman Coding" },
      { id: "C", text: "Fibonacci through DP" },
      { id: "D", text: "Binary Search" }
    ],
    answer: "B",
    explanation: "Huffman coding makes the locally optimal choice at each step to build an optimal prefix code."
  },
  {
    id: 30,
    text: "What does 'External Sorting' involve?",
    options: [
      { id: "A", text: "Sorting data using an external GPU" },
      { id: "B", text: "Sorting datasets that are too large to fit into the main memory (RAM)" },
      { id: "C", text: "Sorting character data only" },
      { id: "D", text: "Sorting in another programming language" }
    ],
    answer: "B",
    explanation: "It typically uses an 'External Merge Sort' strategy with intermediate disk files."
  }
];

export const theory = [
  {
    id: "ds-intro",
    title: "Why Data Structures Matter",
    content: "Data structures are ways of organizing data so it can be used efficiently. They are the building blocks of algorithms. Choosing the wrong DS can make an algorithm crawl, no matter how much you optimize the code."
  },
  {
    id: "array-vs-list",
    title: "Array vs Linked List",
    content: "| Feature | Array | Linked List |\n| :--- | :--- | :--- |\n| **Access** | O(1) [Fast] | O(n) [Slow] |\n| **Sizing** | Fixed (Static) | Dynamic |\n| **Memory** | Contiguous | Non-contiguous |\n| **Insert** | O(n) [Must shift] | O(1) [Update pointers] |"
  },
  {
    id: "complexity-notations",
    title: "Big O Notation Chart",
    content: "| Notation | Name | Scenario |\n| :--- | :--- | :--- |\n| **O(1)** | Constant | Array access |\n| **O(log n)** | Logarithmic | Binary Search |\n| **O(n)** | Linear | Linear Search |\n| **O(n log n)** | Log-linear | Merge Sort |\n| **O(n^2)** | Quadratic | Bubble Sort |"
  },
  {
    id: "stacks-queues-theory",
    title: "Stacks vs Queues",
    content: "- **Stack (LIFO)**: Operations: Push, Pop, Peek. Uses: Undo/Redo, DFS, Recursion.\n- **Queue (FIFO)**: Operations: Enqueue, Dequeue. Uses: Printing jobs, BFS, Scheduling."
  },
  {
    id: "tree-traversals",
    title: "Understanding Tree Traversals",
    content: "1. **In-order**: Left, Node, Right (Sorted BST).\n2. **Pre-order**: Node, Left, Right (Useful to copy a tree).\n3. **Post-order**: Left, Right, Node (Useful for deletion)."
  },
  {
    id: "hashing-techniques",
    title: "Hash Maps & Collisions",
    content: "- **Chaining**: Use a linked list at each index to store multiple values.\n- **Open Addressing**: Find the next available index (Linear Probing, Quadratic Probing, Double Hashing)."
  },
  {
    id: "graph-representation",
    title: "Graph: Matrix vs List",
    content: "**Adjacency Matrix**: Efficient for dense graphs; quick edge lookup ($O(1)$) but uses $O(V^2)$ space.\n**Adjacency List**: Efficient for sparse graphs; uses $O(V+E)$ space but slower edge lookup."
  },
  {
    id: "searching-algorithms",
    title: "Searching Logic",
    content: "- **Linear Search**: Check every element (Unsorted data).\n- **Binary Search**: Divide and conquer (Sorted data only)."
  },
  {
    id: "sorting-tiers",
    title: "Sorting Algorithm Tiers",
    content: "- **Elementary**: Bubble, Selection, Insertion ($O(n^2)$).\n- **Advanced**: Quick, Merge, Heap ($O(n \log n)$)."
  },
  {
    id: "heap-concept",
    title: "Heap Data Structure",
    content: "A **Heap** is a complete binary tree. It is used to implement Priority Queues. Heapification is the process of building a heap from an array ($O(n)$)."
  },
  {
    id: "tries-deep",
    title: "Trie (Prefix Tree)",
    content: "Tries are great for dictionary problems. Each edge represents a character. A node may mark the 'End of Word'. \n**Pros**: Prefix search, no collisions like hashing. \n**Cons**: High memory usage."
  },
  {
    id: "dsu-logic",
    title: "Disjoint Set Union (DSU)",
    content: "DSU uses two optimizations to stay near-constant time:\n1. **Path Compression**: Makes 'Find' faster by pointing nodes directly to the root.\n2. **Union by Rank/Size**: Keeps the tree flat."
  },
  {
    id: "mst-comparison",
    title: "Kruskal vs Prim (MST)",
    content: "| Algorithm | Kruskal's | Prim's |\n| :--- | :--- | :--- |\n| **Logic** | Edge-based (Sort edges) | Vertex-based (Grow tree) |\n| **DS Required** | DSU (Disjoint Set) | Priority Queue (Heap) |\n| **Best for** | Sparse graphs | Dense graphs |"
  },
  {
    id: "shortest-paths-table",
    title: "Shortest Path Algorithms",
    content: "- **Dijkstra**: O(E log V). No negative weights.\n- **Bellman-Ford**: O(VE). Handles negative weights; detects negative cycles.\n- **Floyd-Warshall**: O(V^3). All-pairs shortest paths."
  },
  {
    id: "segment-trees-intro",
    title: "Segment Trees",
    content: "Used for **Range Queries** (Sum, Min, Max) and updates. Both operations take $O(\log n)$. It's a very powerful tool for competitive programming."
  },
  {
    id: "tree-balancing-types",
    title: "Balanced Trees Comparison",
    content: "- **AVL**: Strict balancing (Height diff <= 1). Faster lookups.\n- **Red-Black**: Looser balancing. Faster insertions/deletions. Used in Java's TreeMap."
  },
  {
    id: "backtracking-theory",
    title: "Recursion & Backtracking",
    content: "Backtracking builds candidates for solutions and abandons ('backtracks') as soon as it determines they cannot lead to a valid solution (e.g., N-Queens, Sudoku solver)."
  },
  {
    id: "complexity-classes",
    title: "P vs NP (Briefly)",
    content: "- **P**: Problems solvable in polynomial time.\n- **NP**: Problems whose solutions can be VERIFIED in polynomial time.\n- **NP-Complete**: The hardest problems in NP; if one is solved in P, all are."
  },
  {
    id: "amortized-analysis",
    title: "Amortized Complexity",
    content: "The average time taken per operation over a sequence of operations. For example, inserting into a dynamic array is $O(1)$ amortized, even though occasional resizing takes $O(n)$."
  },
  {
    id: "memory-hierarchy-comp",
    title: "Cache & Data Locality",
    content: "Arrays are fast because they have **Temporal and Spatial Locality**. Elements are next to each other in memory, making them cache-friendly compared to Linked Lists."
  }
];
