import colors from "./colors";

export const CardContent = [
    {
        key:'1',
        title: 'DSA Sheet',
        description: 'A comprehensive guide to mastering Data Structures and Algorithms.',
        icon: "LibraryBooksOutlined",
        isLocked: false,
        color:colors.Orangevale,
    },
    {
        key:'2',
        title: 'System Design',
        description: 'Learn the principles of designing scalable and efficient systems.',
        icon: "ImportantDevicesOutlined",
        isLocked: true,
        color:colors.ThresherShark,
    },
    {
        key:'3',
        title: 'CS Subjects',
        description: 'Explore core Computer Science subjects and their applications.',
        icon: "SubjectOutlined",
        isLocked: true,
        color:colors.Jadestone,
    },
    {
        key:'4',
        title: 'Competitive Programming',
        description: 'Sharpen your coding skills with competitive programming challenges.',
        icon: "BugReportOutlined",
        isLocked: true,
        color:colors.RedOrange,
    },
    {
        key:'5',
        title:'Job Alerts',
        description: 'Stay updated with the latest job openings in the tech industry.',
        icon: "WorkHistoryOutlined",
        isLocked: true,
        color: colors.FugitiveFlamingo,
    },
    {
        key:'6',
        title:'Blog',
        description: 'Read insightful articles on technology, career, and more.',
        icon: "AutoStoriesOutlined",
        isLocked: true,
        color: colors.CowardlyCustard,
    }
]


export const ScrollItems = [
    "📘 DSA Sheet",
    "🧠 System Design",
    "📚 CS Subjects",
    "🏆 Competitive Programming",
    "🧮 Aptitude Prep",
    "🗣️ Mock Interviews",
    "📝 Resume Building",
    "🎨 Frontend Dev",
    "🛠️ Backend Dev",
    "🔗 Full Stack Projects",
    "❓ Interview Qs",
    "🚀 Tech Stack Mastery"
]



export const coreFoundationTopics = [
  { key: '1', ques: 'Arrays - Prefix Sum, Kadane’s Algorithm, Merge Intervals' },
  { key: '2', ques: 'Strings - Palindromes, Anagrams, KMP (basic)' },
  { key: '3', ques: 'Two Pointers & Sliding Window' },
  { key: '4', ques: 'Sorting - Bubble, Merge, Quick, Counting Sort' },
  { key: '5', ques: 'Binary Search - on array & on answer' },
  { key: '6', ques: 'Hashing - Frequency maps, HashSet, HashMap basics' },
  { key: '7', ques: 'Stacks - Next Greater Element, Valid Parentheses' },
  { key: '8', ques: 'Queues & Deques - Sliding Window Maximum' },
  { key: '9', ques: 'Recursion - Basic to Backtracking intro' },
  { key: '10', ques: 'Backtracking - N-Queens, Subsets, Permutations' },
  { key: '11', ques: 'Binary Trees - Traversals (Inorder, Preorder, Postorder)' },
  { key: '12', ques: 'Binary Trees - Lowest Common Ancestor, Diameter' },
  { key: '13', ques: 'Heaps/Priority Queues - K largest/smallest, Heapify' },
  { key: '14', ques: 'Graphs - BFS, DFS, Adjacency List/Matrix' },
  { key: '15', ques: 'Graphs - Cycle Detection (DFS & Union Find)' },
  { key: '16', ques: 'Dynamic Programming - 0/1 Knapsack, Fibonacci, LIS' },
  { key: '17', ques: 'Greedy Algorithms - Activity Selection, Job Scheduling' },
  { key: '18', ques: 'Linked Lists - Reverse, Detect Cycle (Floyd’s), Merge Two Lists' },
  { key: '19', ques: 'Linked Lists - Reverse, Detect Cycle (Floyd’s), Merge Two Lists' },
  { key: '20', ques: 'Linked Lists - Reverse, Detect Cycle (Floyd’s), Merge Two Lists' },
];



export const recursionAndBacktrackingTopics = [
  { key: '1', ques: 'Subsets (Power Set Generation)' },
  { key: '2', ques: 'Permutations (All Orders of Elements)' },
  { key: '3', ques: 'N-Queens Problem' },
  { key: '4', ques: 'Maze Solver (Rat in a Maze / Backtracking Path)' },
  { key: '5', ques: 'Generate Parentheses (Balanced Strings)' },
  { key: '6', ques: 'Sudoku Solver' },
  { key: '7', ques: 'Word Search in Grid (DFS Backtracking)' },
  { key: '8', ques: 'Palindrome Partitioning' },
  { key: '9', ques: 'Palindrome Partitioning' },
  { key: '10', ques: 'Palindrome Partitioning' },
];


export const treesAndGraphsTopics = [
  { key: '1', ques: 'Binary Tree Traversals (Inorder, Preorder, Postorder)' },
  { key: '2', ques: 'Level Order Traversal (BFS)' },
  { key: '3', ques: 'Height / Depth of Binary Tree' },
  { key: '4', ques: 'Diameter of Binary Tree' },
  { key: '5', ques: 'Lowest Common Ancestor (LCA)' },
  { key: '6', ques: 'Check if Tree is Balanced' },
  { key: '7', ques: 'Invert / Mirror Binary Tree' },
  { key: '8', ques: 'Binary Tree from Inorder and Preorder/Postorder' },
  { key: '9', ques: 'Zigzag / Spiral Level Order Traversal' },
  { key: '10', ques: 'Top View / Bottom View of Binary Tree' },
//   { key: '11', ques: 'DFS & BFS in Graphs (Adjacency List/Matrix)' },
//   { key: '12', ques: 'Detect Cycle in Graph (DFS, BFS, Union-Find)' },
//   { key: '13', ques: 'Topological Sort (Kahn’s Algo / DFS)' },
//   { key: '14', ques: 'Number of Islands / Connected Components' },
//   { key: '15', ques: 'Dijkstra’s Algorithm (Shortest Path)' },
//   { key: '16', ques: 'Prim’s & Kruskal’s Algorithm (MST)' },
//   { key: '17', ques: 'Graph Coloring / Bipartite Graph Check' }
];


export const hashingAndFrequencyTopics = [
  { key: '1', ques: 'Two Sum using HashMap' },
  { key: '2', ques: 'Group Anagrams (Frequency Map as Key)' },
  { key: '3', ques: 'Longest Subarray with Sum K (Prefix Sum + HashMap)' },
  { key: '4', ques: 'Subarrays with Equal 0s and 1s / Count Subarrays with Sum 0' },
  { key: '5', ques: 'First Non-Repeating Character in Stream or String' },
  { key: '6', ques: 'Check for Duplicates / Contains Duplicate II (Sliding Window + HashSet)' }
];


export const dynamicProgrammingCoreTopics = [
  { key: '1', ques: '0/1 Knapsack Problem' },
  { key: '2', ques: 'Longest Common Subsequence (LCS)' },
  { key: '3', ques: 'Longest Increasing Subsequence (LIS)' },
  { key: '4', ques: 'Matrix DP – Unique Paths / Minimum Path Sum' },
  { key: '5', ques: 'Coin Change (Min Coins / Ways to Reach Total)' },
  { key: '6', ques: 'Rod Cutting Problem' },
  { key: '7', ques: 'Palindrome Partitioning (Minimum Cuts)' },
  { key: '8', ques: 'House Robber / Maximum Non-Adjacent Sum' },
  { key: '9', ques: 'House Robber / Maximum Non-Adjacent Sum' },
  { key: '10', ques: 'House Robber / Maximum Non-Adjacent Sum' },
  { key: '11', ques: 'House Robber / Maximum Non-Adjacent Sum' },
];


export const bitManipulationAndMathTopic = [
  { key: '1', ques: 'Find the Single Number' },
  { key: '2', ques: 'Find the Single Number' },
  { key: '3', ques: 'Find the Single Number' },
  { key: '4', ques: 'Find the Single Number' },
  { key: '5', ques: 'Find the Single Number' },
  { key: '6', ques: 'Find the Single Number' },
  { key: '7', ques: 'Find the Single Number' },
  { key: '8', ques: 'Find the Single Number' },
  { key: '9', ques: 'Find the Single Number' },
  { key: '10', ques: 'Find the Single Number' },
];


export const systemDesignTopics = [
  { key: '1', ques: 'Design a URL Shortener (like bit.ly)' },
  { key: '2', ques: 'Design a Cache System (LRU Cache)' },
]