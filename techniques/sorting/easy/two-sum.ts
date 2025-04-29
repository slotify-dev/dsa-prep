/*
Problem: Given an array of integers and a target value, determine if there exists a pair of elements that sum up to the target.

Sample Examples:
1. Input: arr = [2, 7, 11, 15], target = 9
   Output: true (2 + 7 = 9)

2. Input: arr = [3, 1, 4, 6], target = 8
   Output: true (2 + 6 = 8)

3. Input: arr = [3, 1, 4, 6], target = 10
   Output: false (No such pair exists)
*/
function twoSum(arr: number[], target: number): boolean {
  // sort the array in asc order
  arr.sort((a, b) => a - b);

  const n = arr.length;

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    let complement = target - arr[i];

    let left = i + 1;
    let right = n - 1;

    // Use binary search to find the complement
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (arr[mid] === complement) return true;
      if (arr[mid] < complement) left = mid + 1;
      else right = mid - 1;
    }
  }

  return false;
}
