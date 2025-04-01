/*
Find all ways to climb n stairs taking 1 or 2 steps at a time.

Example:
Input: n = 3
Output: [[1,1,1],[1,2],[2,1]]

Time Complexity: O(2^n)
Space Complexity: O(n)
*/
function climbStairs(n: number): number[][] {
  const result: number[][] = [];

  function backtrack(currentPath: number[], remaining: number) {
    if (remaining === 0) {
      result.push([...currentPath]); // Found a valid path
      return;
    }

    if (remaining < 0) {
      return; // Invalid path
    }

    // Take 1 step
    currentPath.push(1);
    backtrack(currentPath, remaining - 1);
    currentPath.pop();

    // Take 2 steps
    currentPath.push(2);
    backtrack(currentPath, remaining - 2);
    currentPath.pop();
  }

  backtrack([], n);
  return result;
}

/**
 * Problem: You are climbing a staircase with n steps. Each time you can either climb 1 or 2 steps.
 * Count how many distinct ways you can climb to the top.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */
function climbStairsCount(n: number): number {
  let count = 0;

  function backtrack(stepsRemaining: number) {
    if (stepsRemaining === 0) {
      count++;
      return;
    }

    if (stepsRemaining < 0) {
      return;
    }

    // Take 1 step
    backtrack(stepsRemaining - 1);

    // Take 2 steps
    backtrack(stepsRemaining - 2);
  }

  backtrack(n); // start at n steps

  return count;
}

console.log(climbStairs(3));
console.log(climbStairsCount(3));
