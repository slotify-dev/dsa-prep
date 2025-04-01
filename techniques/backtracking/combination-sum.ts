/*
Problem: Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

Constraints:
    1 <= candidates.length <= 30
    1 <= candidates[i] <= 200
    All elements of candidates are distinct.
    1 <= target <= 500

Example:
    Input: candidates = [2,3,6,7], target = 7
    Output: [[2,2,3],[7]]
*/

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(index: number, current: number[], sum: number) {
    if (sum === target) {
      result.push([...current]);
      return;
    }

    if (sum > target || index >= candidates.length) {
      return;
    }

    current.push(candidates[index]);
    backtrack(index, current, sum + candidates[index]);
    current.pop();
    backtrack(index + 1, current, sum);
  }

  backtrack(0, [], 0);
  return result;
}
