/**
 * Problem: Given an integer array nums of unique elements, return all possible subsets (the power set).
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Time Complexity:
 * - At each element, we have 2 choices: include or exclude
 * - For n elements: 2 × 2 × ... × 2 = 2^n subsets
 * - Each subset copy takes O(n) time
 * - Total: O(n × 2^n)
 *
 * Space Complexity:
 * - Recursion depth: O(n)
 * - Storage for all subsets: O(2^n × n)
 * - Total: O(n) (excluding output space)
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
