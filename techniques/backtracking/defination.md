### Backtracking: A Comprehensive Guide for Beginners

- Backtracking is a powerful algorithmic technique for solving problems that involve making a sequence of decisions, where each decision depends on the previous ones.
- It's particularly useful for constraint satisfaction problems and combinatorial problems.

### What is Backtracking?

Backtracking is a systematic way to iterate through all possible configurations of a search space.

It:

- Builds candidates to the solution incrementally
- Abandons a candidate ("backtracks") as soon as it determines the candidate cannot possibly lead to a valid solution

### When to Use Backtracking

Use backtracking when you need to:

- Generate all possible solutions (permutations, combinations, subsets)
- Solve constraint satisfaction problems (N-Queens, Sudoku)
- Make a sequence of decisions where each decision affects future choices

Typical problem patterns:

- "Find all possible..."
- "Generate all combinations..."
- "Print all permutations..."
- "Count the number of ways to..."

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
