/*
Given an integer array arr[] and an integer k, determine whether there exist two indices i and j such that arr[i] == arr[j] and |i – j| ≤ k. 
If such a pair exists, return ‘Yes’, otherwise return ‘No’.

Examples: 

Input: k = 3, arr[] = [1, 2, 3, 4, 1, 2, 3, 4]
Output: No
Explanation: Each element in the given array arr[] appears twice and the distance between every element and its duplicate is 4.

Input: k = 3, arr[] = [1, 2, 3, 1, 4, 5]
Output: Yes
Explanation: 1 is present at index 0 and 3.

Input: k = 3, arr[] = [1, 2, 3, 4, 5]
Output: No
Explanation: There is no duplicate element in arr[].

Time: O(n * k)
Space: O(1) 
*/
function checkDuplicatesWithinK(arr: number[], k: number): boolean {
  const n = arr.length;

  // Traverse for every element
  for (let i = 0; i < n; i++) {
    // Traverse next k elements
    for (let c = 1; c <= k && i + c < n; c++) {
      const j = i + c;

      // If we find one more occurrence within k
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
}
