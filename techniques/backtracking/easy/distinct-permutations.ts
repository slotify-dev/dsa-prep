/**
 * Problem: Given an array nums of distinct integers, return all possible permutations.
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Time Complexity: O(n * n!)
 * Space Complexity: O(n)
 */
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const backtrack = (path: number[], used: boolean[]) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;

      path.push(nums[i]);
      backtrack(path, used);
      path.pop();

      used[i] = false;
    }
  };

  backtrack([], new Array(nums.length).fill(false));
  return result;
}
