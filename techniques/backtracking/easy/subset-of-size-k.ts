/*
Problem: Generate all subsets of size k from an array.

Example:
Input: [1, 2, 3], k = 2
Output: [[1,2],[1,3],[2,3]]

Time Complexity: O(C(n,k) × k)
- C(n,k) is the binomial coefficient "n choose k" (number of k-sized subsets)
- Each subset takes O(k) time to construct and add to results
- Total time is O(C(n,k) × k)

Space Complexity: O(k)
- Recursion depth is at most k
- Current subset storage uses O(k) space
- Output space (C(n,k) subsets) is not counted in space complexity
*/

function subsetsOfSizeK(nums: number[], k: number): number[][] {
  const result: number[][] = [];

  function backtrack(current: number[], start: number) {
    // basecase: when current length equals to k size
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    // for array of n generate k size subsets
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(current, i + 1);
      current.pop();
    }
  }

  backtrack([], 0);
  return result;
}

console.log(subsetsOfSizeK([1, 2, 3], 2));
