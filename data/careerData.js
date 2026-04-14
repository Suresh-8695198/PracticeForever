// Career paths data structure
export const careerPaths = [
  {
    id: 'fullstack-react',
    title: 'Full Stack React Developer',
    description: 'Master frontend and backend development with React ecosystem',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500',
    sections: [
      {
        id: 'foundation',
        title: 'Foundation',
        topics: [
          {
            id: 'computer-basics',
            title: 'Computer Basics',
            description: 'Understanding how computers work',
            difficulty: 'easy',
            estimatedHours: 10,
            tasks: [
              {
                id: 'cb-1',
                title: 'Introduction to Computing',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Learn the fundamentals of how computers process information',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'cb-2',
                title: 'Operating Systems Basics',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Understanding OS fundamentals',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              }
            ]
          },
          {
            id: 'internet-web',
            title: 'Internet & Web',
            description: 'How the internet and web work',
            difficulty: 'easy',
            estimatedHours: 8,
            tasks: [
              {
                id: 'iw-1',
                title: 'How Internet Works',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Understanding internet protocols and communication',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'iw-2',
                title: 'DNS and Domain Names',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'How domain names resolve to IP addresses',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              }
            ]
          },
          {
            id: 'git-github',
            title: 'Git & GitHub',
            description: 'Version control and collaboration',
            difficulty: 'easy',
            estimatedHours: 12,
            tasks: [
              {
                id: 'git-1',
                title: 'Git Basics - Init, Add, Commit',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Learn basic git commands for version control',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'git-2',
                title: 'Branching and Merging',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Working with branches and merging code',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'git-3',
                title: 'GitHub Collaboration',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Pull requests, issues, and team collaboration',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              }
            ]
          }
        ]
      },
      {
        id: 'frontend',
        title: 'Frontend Development',
        topics: [
          {
            id: 'html',
            title: 'HTML',
            description: 'Structure of web pages',
            difficulty: 'easy',
            estimatedHours: 15,
            tasks: [
              {
                id: 'html-1',
                title: 'HTML Basics - Tags and Elements',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Understanding HTML structure and basic tags',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'html-2',
                title: 'Forms and Input Elements',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Creating interactive forms',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'html-3',
                title: 'Semantic HTML',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Using semantic tags for better structure',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              }
            ]
          },
          {
            id: 'css',
            title: 'CSS',
            description: 'Styling and layouts',
            difficulty: 'medium',
            estimatedHours: 25,
            tasks: [
              {
                id: 'css-1',
                title: 'CSS Selectors and Properties',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Basic CSS syntax and selectors',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'css-2',
                title: 'Flexbox Layout',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Creating flexible layouts with Flexbox',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'css-3',
                title: 'CSS Grid',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Advanced layouts with CSS Grid',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'css-4',
                title: 'Responsive Design',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Media queries and mobile-first design',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              }
            ]
          },
          {
            id: 'javascript',
            title: 'JavaScript',
            description: 'Programming language of the web',
            difficulty: 'medium',
            estimatedHours: 40,
            tasks: [
              {
                id: 'js-1',
                title: 'Variables and Data Types',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Understanding JavaScript basics',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'js-2',
                title: 'Functions and Scope',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Writing reusable code with functions',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'js-3',
                title: 'Arrays and Objects',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Working with data structures',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'js-4',
                title: 'DOM Manipulation',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Interacting with web pages',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'js-5',
                title: 'Async JavaScript - Promises',
                completed: false,
                difficulty: 'hard',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Handling asynchronous operations',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'js-6',
                title: 'ES6+ Features',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Modern JavaScript features',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              }
            ]
          },
          {
            id: 'react',
            title: 'React',
            description: 'Modern UI library',
            difficulty: 'medium',
            estimatedHours: 50,
            tasks: [
              {
                id: 'react-1',
                title: 'React Basics - Components and JSX',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Understanding React fundamentals',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'react-2',
                title: 'Props and State',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Managing component data',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'react-3',
                title: 'Hooks - useState, useEffect',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Using React Hooks',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'react-4',
                title: 'React Router',
                completed: false,
                difficulty: 'medium',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Client-side routing',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'react-5',
                title: 'Context API',
                completed: false,
                difficulty: 'hard',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Global state management',
                practiceProblems: [],
                notes: '',
                markedForRevision: false
              }
            ]
          }
        ]
      },
      {
        id: 'dsa',
        title: 'DSA (Data Structures & Algorithms)',
        topics: [
          {
            id: 'arrays',
            title: 'Arrays',
            description: 'Learn from Basics to Advanced',
            difficulty: 'medium',
            estimatedHours: 30,
            tasks: [
              {
                id: 'arr-1',
                title: 'Largest Element in an Array',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Find the maximum element in an array using iteration',
                practiceProblems: [
                  { platform: 'LeetCode', link: 'https://leetcode.com/problems/example' },
                  { platform: 'GFG', link: 'https://practice.geeksforgeeks.org/example' }
                ],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'arr-2',
                title: 'Check if the array is sorted',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Verify if array elements are in ascending order',
                practiceProblems: [
                  { platform: 'LeetCode', link: 'https://leetcode.com/problems/example' }
                ],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'arr-3',
                title: 'Second Largest Element in an Array without sorting',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Find second largest in single pass',
                practiceProblems: [
                  { platform: 'LeetCode', link: 'https://leetcode.com/problems/example' }
                ],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'arr-4',
                title: 'Linear Search',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Search for an element sequentially',
                practiceProblems: [
                  { platform: 'LeetCode', link: 'https://leetcode.com/problems/example' }
                ],
                notes: '',
                markedForRevision: false
              },
              {
                id: 'arr-5',
                title: 'Left Rotate an array by one place',
                completed: false,
                difficulty: 'easy',
                youtubeLink: 'https://youtube.com/watch?v=example',
                explanation: 'Shift all elements to the left by one position',
                practiceProblems: [
                  { platform: 'LeetCode', link: 'https://leetcode.com/problems/example' }
                ],
                notes: '',
                markedForRevision: false
              }
            ]
          }
        ]
      }
    ]
  },

];

// Company-wise preparation data
export const companies = [
  {
    id: 'zoho',
    name: 'Zoho',
    logo: '🔷',
    color: 'from-blue-600 to-blue-800',
    categories: [
      {
        id: 'aptitude',
        title: 'Aptitude',
        questions: [
          {
            id: 'zoho-apt-1',
            question: 'If a train travels 60 km in 1 hour, how far will it travel in 2.5 hours?',
            options: ['120 km', '150 km', '180 km', '200 km'],
            correctAnswer: 1,
            explanation: 'Distance = Speed × Time = 60 × 2.5 = 150 km',
            difficulty: 'easy',
            completed: false
          }
        ]
      },
      {
        id: 'coding',
        title: 'Coding Questions',
        questions: []
      },
      {
        id: 'puzzles',
        title: 'Logical Puzzles',
        questions: []
      }
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '📦',
    color: 'from-orange-600 to-yellow-600',
    categories: []
  },
  {
    id: 'google',
    name: 'Google',
    logo: '🔍',
    color: 'from-red-500 via-yellow-500 to-blue-500',
    categories: []
  }
];

// Communication practice data
export const communicationTasks = {
  speaking: [
    {
      id: 'speak-1',
      topic: 'Introduce yourself in 2 minutes',
      difficulty: 'easy',
      tips: ['Mention your name, education, skills', 'Talk about your interests', 'Keep it professional'],
      completed: false
    },
    {
      id: 'speak-2',
      topic: 'Describe your favorite project',
      difficulty: 'medium',
      tips: ['Explain the problem it solves', 'Mention technologies used', 'Highlight your contribution'],
      completed: false
    }
  ],
  grammar: [
    {
      id: 'gram-1',
      question: 'Choose the correct sentence:',
      options: [
        'He don\'t like coffee',
        'He doesn\'t like coffee',
        'He doesn\'t likes coffee'
      ],
      correctAnswer: 1,
      explanation: 'Use "doesn\'t" with third person singular',
      completed: false
    }
  ],
  vocabulary: [
    {
      id: 'vocab-1',
      word: 'Eloquent',
      meaning: 'Fluent or persuasive in speaking or writing',
      example: 'She gave an eloquent speech at the conference',
      completed: false
    }
  ]
};

// Puzzles and games
export const puzzles = [
  {
    id: 'puzzle-1',
    title: 'The Bridge Crossing',
    difficulty: 'medium',
    description: 'Four people need to cross a bridge at night...',
    solution: '',
    completed: false
  }
];
