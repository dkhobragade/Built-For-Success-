import ScrollStepper from "@/components/ui/ScrollStepper";
import colors from "@/lib/colors";
import { Box, Typography, } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Page ()
{

    return <Box padding={ 2 } bgcolor="#FFFADC">
        <Typography fontFamily="cursive" fontWeight={ 600 } fontSize={ 20 } >
            Data Structure and Algorithm
        </Typography>

        <Box className="grid grid-cols-5 grid-rows-5 h-max gap-4 bg-red-200" padding={ 2 } >
            <Box padding={ 2 } height="fit-content" borderRadius={ 2 } className="col-span-2 row-span-4 bg-red-400">
                <Typography fontFamily="cursive" fontWeight={ 600 }  >
                    Pattern Mastery – Core Foundations
                </Typography>
                <br />
                <Typography color={ colors.WhiteSmoke } fontSize={ 15 } >
                    Arrays (Prefix Sum, Kadane’s, Merge Intervals) <br />
                    Strings (Palindromes, Anagrams, KMP - light) <br />
                    Two Pointers & Sliding Window <br />
                    Sorting (Bubble, Merge, Quick, Counting) <br />
                    Binary Search (on array and answers)
                    Arrays (Prefix Sum, Kadane’s, Merge Intervals) <br />
                    Strings (Palindromes, Anagrams, KMP - light) <br />
                    Two Pointers & Sliding Window <br />
                    Sorting (Bubble, Merge, Quick, Counting) <br />
                    Binary Search (on array and answers)
                    Arrays (Prefix Sum, Kadane’s, Merge Intervals) <br />
                    Strings (Palindromes, Anagrams, KMP - light) <br />
                    Two Pointers & Sliding Window <br />
                    Sorting (Bubble, Merge, Quick, Counting) <br />
                    Binary Search (on array and answers)
                </Typography>
            </Box>
            <Box padding={ 2 } height="fit-content" borderRadius={ 2 } className="row-span-3 col-start-3 bg-yellow-200">
                <Typography>
                    Recursion & Backtracking
                </Typography>
                <br />
                <Typography>
                    Recursion Patterns <br />
                    Subsets, Permutations <br />
                    N-Queens, Maze Solver <br />
                    Generate Parentheses, Sudoku Solver
                    Subsets, Permutations <br />
                    N-Queens, Maze Solver <br />
                    Generate Parentheses, Sudoku Solver
                </Typography>
            </Box>
            <Box padding={ 2 } height="fit-content" borderRadius={ 2 } className="row-span-5 col-start-4 bg-green-200">
                <Typography>
                    Trees & Graphs
                </Typography>
                <br />
                <Typography>
                    Tree Traversals (Inorder, Preorder, Postorder) <br />
                    BST Basics & LCA <br />
                    DFS / BFS <br />
                    Cycle Detection <br />
                    Topo Sort, Dijkstra, Union-Find
                    Tree Traversals (Inorder, Preorder, Postorder) <br />
                    BST Basics & LCA <br />
                    DFS / BFS <br />
                    Cycle Detection <br />
                    Topo Sort, Dijkstra, Union-Find
                    BST Basics & LCA <br />
                    DFS / BFS <br />
                    Cycle Detection <br />
                </Typography>
            </Box>
            <Box padding={ 2 } bgcolor="greenyellow" height="fit-content" borderRadius={ 2 } className="row-span-2 col-start-3 bg-red-200 row-start-4">
                <Typography>
                    Hashing & Frequency
                </Typography>
                <br />
                <Typography>
                    HashMaps / Sets <br />
                    Count Frequencies <br />
                    Group Anagrams <br />
                    Majority Element <br />
                    Majority Element <br />
                </Typography>
            </Box>
            <Box padding={ 2 } height="fit-content" borderRadius={ 2 } className="row-span-4 col-start-5 row-start-1" bgcolor="greenyellow">
                <Typography>
                    Dynamic Programming (Core)
                </Typography>
                <br />
                <Typography>
                    1D: Fibonacci, Climbing Stairs <br />
                    2D: LCS, Knapsack, Subset Sum <br />
                    Tabulation vs Memoization <br />
                    DP on Strings, Grids
                    1D: Fibonacci, Climbing Stairs <br />
                    2D: LCS, Knapsack, Subset Sum <br />
                    Tabulation vs Memoization <br />
                </Typography>
            </Box>
            {/* 6 */ }
            <Box padding={ 2 } bgcolor="orange" height="fit-content" borderRadius={ 2 } className="col-start-5 row-start-5 bg-red-200">
                <Typography>
                    Bit Manipulation + Math
                </Typography>
                <br />
                <Typography>
                    XOR tricks <br />
                </Typography>
            </Box>
            {/* 7 */ }
            <Box padding={ 2 } height="fit-content" borderRadius={ 2 } className="col-span-2 col-start-1 row-start-5 bg-purple-500">
                <Typography>
                    Practice & System Design Prep
                </Typography>
                <br />
                <Typography>
                    75/Blind 100 Leetcode List <br />
                </Typography>
            </Box>
        </Box>
    </Box>
}
// This course is built with a problem-solving-first approach, guiding you through every pattern and logic with clarity.

// Many questions include in-depth explanations and solution codes with variations.

// For practice, we’ve embedded direct links where available. If certain problems are unavailable on platforms like LeetCode due to copyright, we’ll provide detailed in-site content or TUF+ free trial links where needed.

// No third-party distractions. Our focus is on delivering a consistent, high-quality experience directly through our platform.

// ✨ Note: You chose our platform because of the clarity, structure, and value we offer — not just for external practice links. Stay focused, stay consistent. Everything you need is right here.