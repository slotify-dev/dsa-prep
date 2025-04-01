/*
Problem: Generate all permutations of a small array.

Example:
Input: [1, 2]
Output: [[1,2],[2,1]]

Time Complexity: O(n × n!)
- There are n! permutations of n distinct elements
- Each permutation takes O(n) time to construct
- Total time is O(n × n!)

Space Complexity: O(n)
*/

function simplePermutations(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(current: number[], remaining: number[]) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      // remove current element from the array
      backtrack(current, [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
      current.pop();
    }
  }

  backtrack([], nums);
  return result;
}

console.log(simplePermutations([1, 2]));
