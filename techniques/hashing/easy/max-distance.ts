/*
Given an array arr[], the task is to find the maximum distance between two occurrences of any element. If no element occurs twice, return 0.

Examples:  

Input: arr = [1, 1, 2, 2, 2, 1]
Output: 5
Explanation: distance for 1 is: 5-0 = 5, distance for 2 is: 4-2 = 2, So max distance is 5.


Input : arr[] = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]
Output: 10
Explanation : Max distance for 2 is 11-1 = 10, max distance for 1 is 4-2 = 2 and max distance for 4 is 10-5 = 5  


Input: arr[] = [1, 2, 3, 6, 5, 4]
Output: 0
Explanation: No element has two occurrence, so maximum distance = 0.

Time: O(n)
Space: O(n)
*/
function maxDistance(arr: number[]): number {
  // Stores element to first index mapping
  const mp: Record<number, number> = {};

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    // If this is the first occurrence of the
    // element, store its index
    if (!(arr[i] in mp)) {
      mp[arr[i]] = i;
    } else {
      // Else update max distance
      res = Math.max(res, i - mp[arr[i]]);
    }
  }

  return res;
}
