/**
 * Problem: Given an integer array nums of unique elements, return all possible subsets (the power set).
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Time Complexity: O(n * 2^n)
 * Space Complexity: O(n)
 */
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtrack = (index: number, subsets: number[]) => {
    // basecase: when we reached num size
    if (subsets.length === nums.length) {
      result.push([...subsets]);
      return;
    }

    // for array of n generate k size subsets
    for (let i = index; i < nums.length; i++) {
      subsets.push(nums[i]);
      backtrack(i + 1, subsets);
      subsets.pop();
    }
  };

  backtrack(0, []);

  return result;
}
