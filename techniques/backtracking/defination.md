### Backtracking: A Comprehensive Guide for Beginners

- Backtracking is a powerful algorithmic technique for solving problems that involve making a sequence of decisions, where each decision depends on the previous ones.
- It's particularly useful for constraint satisfaction problems and combinatorial problems.

### What is Backtracking?

Backtracking is a systematic way to iterate through all possible configurations of a search space.

It:

- Builds candidates to the solution incrementally
- Abandons a candidate ("backtracks") as soon as it determines the candidate cannot possibly lead to a valid solution

### When to Use Backtracking

- Generate all possible...
- (e.g., "Generate all possible subsets/permutations/combinations")

- Find all solutions...
- (e.g., "Find all solutions to the N-Queens problem")

- Enumerate all...
- (e.g., "Enumerate all valid parentheses combinations")

- Explore all paths/choices...
- (e.g., "Explore all paths in a maze")

- Decision-making with constraints
- (e.g., "Given constraints, find valid arrangements")

- Combinations/Permutations/Subsets
- (e.g., "Print all permutations of a string")

- Recursive trial and undo
- (e.g., "Try placing a queen, backtrack if invalid")

- Constraint satisfaction problems
- (e.g., Sudoku, Crossword puzzles)

- Partitioning problems
- (e.g., "Partition a set into equal-sum subsets")

- Choose/Exclude decisions
- (e.g., "Include or exclude an element in a subset")

### The Backtracking Template

Here's a generic backtracking template in TypeScript:

```javascript
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, current: number[]) {
    // Add the current subset to the result
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      // Include nums[i] in the current subset
      current.push(nums[i]);

      // Move to the next element
      backtrack(i + 1, current);

      // Exclude nums[i] from the current subset (backtrack)
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
console.log(subsets([1, 2, 3]));
```
