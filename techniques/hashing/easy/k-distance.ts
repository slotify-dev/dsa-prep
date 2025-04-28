/*
Given an integer array arr[] and an integer k, determine whether there exist two indices i and j such that arr[i] == arr[j] and |i – j| ≤ k. If such a pair exists, return ‘Yes’, otherwise return ‘No’.

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

Time: O(n) 
Space: O(k) 
*/
function checkDuplicatesWithinK(arr: number[], k: number): boolean {
  // Creates an empty hashset
  const s = new Set();

  // Traverse the input array
  for (let i = 0; i < arr.length; i++) {
    // If already present in hash, then we found
    // a duplicate within k distance
    if (s.has(arr[i])) return true;

    // Add this item to hashset
    s.add(arr[i]);

    // Remove the k+1 distant item
    if (i >= k) s.delete(arr[i - k]);
  }

  return false;
}
