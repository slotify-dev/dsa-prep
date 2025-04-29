/*
Problem: Two Sum – Pair with given Sum
Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target. This problem is a variation of 2Sum problem.

Examples: 

Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.


Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: There is no pair with sum equals to given target.

Time: O(n^2)
Space: O(1)
*/
function twoSum(arr: number[], target: number): boolean {
  let n = arr.length;

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    // For each element arr[i], check every
    // other element arr[j] that comes after it
    for (let j = i + 1; j < n; j++) {
      // Check if the sum of the current pair
      // equals the target
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  // If no pair is found after checking
  // all possibilities
  return false;
}

function countPairs(arr: number[], target: number): number {
  let cnt: number = 0;
  const n = arr.length;

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    // For each element arr[i], check every
    // other element arr[j] that comes after it
    for (let j = i + 1; j < n; j++) {
      // Check if the sum of the current pair
      // equals the target
      if (arr[i] + arr[j] === target) cnt++;
    }
  }

  return cnt;
}
