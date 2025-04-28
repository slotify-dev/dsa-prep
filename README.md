# DSA Cheatsheet for FAANG Interviews

## 📌 Arrays

- **When to use**: Contiguous data, random access, fixed size.
- **Techniques**:
  - Two pointers (sorted/unsorted)
  - Sliding window (subarrays/substrings)
  - Prefix sum (range queries)
  - Binary search (sorted arrays)
- **Tricks**:
  - `arr.length - 1` is last index
  - `Arrays.sort()` for O(n log n) sorting
  - Swap elements with XOR: `a ^= b; b ^= a; a ^= b;`

## 📌 Strings

- **When to use**: Text processing, pattern matching.
- **Techniques**:
  - Sliding window (anagrams/longest substring)
  - Rabin-Karp (pattern search with rolling hash)
  - KMP (efficient pattern matching)
- **Tricks**:
  - `s.charAt(i)` is O(1) in Java
  - `s.toCharArray()` for mutable access
  - `StringBuilder` for O(1) concatenation

## 📌 Linked Lists

- **When to use**: Dynamic size, frequent insertions/deletions.
- **Techniques**:
  - Fast & slow pointers (cycle detection)
  - Reverse linked list (iterative/recursive)
  - Dummy node (edge cases)
- **Tricks**:
  - Detect cycle: `while(fast && fast.next)`
  - Always check `if(head == null || head.next == null)`

## 📌 Stacks

- **When to use**: LIFO, DFS, undo operations.
- **Techniques**:
  - Monotonic stack (next greater element)
  - Parentheses validation
  - Postfix evaluation
- **Tricks**:
  - Use `Deque` in Java for stack ops
  - Pair with hashmap for O(1) lookups

## 📌 Queues

- **When to use**: FIFO, BFS, task scheduling.
- **Techniques**:
  - BFS (level order traversal)
  - PriorityQueue (Dijkstra's)
  - Deque (sliding window max)
- **Tricks**:
  - `Queue<Integer> q = new LinkedList<>()`
  - `PriorityQueue` constructor takes comparator

## 📌 Hash Tables

- **When to use**: O(1) lookups, frequency counting.
- **Techniques**:
  - Two-sum (complement search)
  - Frequency map (anagrams/duplicates)
  - HashSet (duplicate detection)
- **Tricks**:
  - `map.getOrDefault(key, defaultValue)`
  - `map.containsKey()` before `map.get()`

## 📌 Trees

- **When to use**: Hierarchical data, sorted access.
- **Techniques**:
  - DFS (pre/in/post order)
  - BFS (level order)
  - BST validation (in-order traversal)
- **Tricks**:
  - `if(root == null)` base case
  - Morris traversal for O(1) space

## 📌 Heaps

- **When to use**: Priority access, k-th element.
- **Techniques**:
  - Top K elements (min-heap)
  - Merge K sorted lists
  - Median finder (two heaps)
- **Tricks**:
  - Default is min-heap in Java
  - Max-heap: `PriorityQueue<>(Collections.reverseOrder())`

## 📌 Graphs

- **When to use**: Networks, relationships, paths.
- **Techniques**:
  - BFS (shortest path unweighted)
  - DFS (connected components)
  - Dijkstra's (weighted shortest path)
  - Union-Find (dynamic connectivity)
- **Tricks**:
  - Adjacency list for sparse graphs
  - Matrix for dense graphs
  - Visited set for cycles

## 📌 Dynamic Programming

- **When to use**: Optimal substructure, overlapping subproblems.
- **Techniques**:
  - Tabulation (bottom-up)
  - Memoization (top-down)
  - State machine (buy/sell stock)
- **Tricks**:
  - Start with brute force → memoize
  - Draw decision tree first
  - `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`

## 🔥 Top 5 Patterns:

1. **Sliding Window**: "Subarray/substring with condition"
2. **Two Pointers**: "Sorted array pair/triplet"
3. **Fast & Slow**: "Cycle/linked list middle"
4. **BFS/DFS**: "Tree/graph traversal"
5. **DP**: "Count ways/max-min value"

## ⚡ Quick Tips:

- Sort array → Think binary search
- "K closest" → Heaps
- "All combinations" → Backtracking
- "Next greater" → Monotonic stack
- O(1) space → Modify input array

## Data Structure/Techniques

```bash
.
├── Arrays
│   ├── Two Pointers
│   ├── Sliding Window
│   ├── Prefix Sum
│   └── Binary Search
├── Strings
│   ├── Sliding Window
│   ├── Rabin-Karp
│   └── KMP
├── Linked Lists
│   ├── Fast & Slow Pointers
│   ├── Reverse LL
│   └── Dummy Node
├── Stacks
│   ├── Monotonic Stack
│   └── Parentheses Matching
├── Queues
│   ├── BFS
│   └── Priority Queue
├── Hash Tables
│   ├── Frequency Counting
│   └── Hashing
├── Trees
│   ├── DFS (Pre/In/Post)
│   ├── BFS
│   └── BST Traversal
├── Heaps
│   ├── Top K Elements
│   └── Median Finder
├── Graphs
│   ├── BFS/DFS
│   ├── Dijkstra's
│   └── Union-Find
└── DP
    ├── Memoization
    ├── Tabulation
    └── State Machine
```
