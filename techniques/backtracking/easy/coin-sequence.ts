/*
Problem: Generate all sequences of coins (1, 2, 5) that sum to target.

Example:
Input: target = 4
Output: [[1,1,1,1],[1,1,2],[1,2,1],[2,1,1],[2,2]]

Time Complexity: O(k^n)
Space Complexity: O(n)
*/

function coinSequences(target: number): number[][] {
  const result: number[][] = [];
  const coins = [1, 2, 5]; // consider k

  function backtrack(current: number[], remaining: number) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    if (remaining < 0) {
      return;
    }

    for (const coin of coins) {
      current.push(coin);
      backtrack(current, remaining - coin); // time: k^n, space: n
      current.pop();
    }
  }

  backtrack([], target);
  return result;
}

console.log(coinSequences(5));
