/*
Problem: Given an array of integers and a target value, determine if there exists a pair of elements that sum up to the target.

Sample Examples:
1. Input: arr = [2, 7, 11, 15], target = 9
   Output: true (2 + 7 = 9)

2. Input: arr = [3, 1, 4, 6], target = 8
   Output: true (2 + 6 = 8)

3. Input: arr = [3, 1, 4, 6], target = 10
   Output: false (No such pair exists)

Time Complexity: O(n log n) (due to sorting)
Space Complexity: O(1) (assuming in-place sort)
*/
function twoSum(arr: number[], target: number): boolean {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return true;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
