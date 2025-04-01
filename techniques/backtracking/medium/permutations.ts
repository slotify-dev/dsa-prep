/*
Problem: Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Constraints:
    1 <= nums.length <= 6
    -10 <= nums[i] <= 10

All integers of nums are unique.

Example:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(current: number[], remaining: number[]) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      backtrack(current, newRemaining);
      current.pop();
    }
  }

  backtrack([], nums);
  return result;
}
