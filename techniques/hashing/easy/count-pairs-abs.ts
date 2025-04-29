/*
Problem: Count pairs with absolute difference equal to k
Given an array arr[] and a positive integer k, the task is to count all pairs (i, j) such that i < j and absolute value of (arr[i] – arr[j]) is equal to k. 

Examples: 

Input: arr[] = [1, 4, 1, 4, 5], k = 3
Output: 4
Explanation: There are 4 pairs with absolute difference 3, the pairs are [1, 4], [1, 4], [1, 4] and [4, 1]

Input: arr[] = [8, 16, 12, 16, 4, 0], k = 4
Output: 5
Explanation: There are 5 pairs with absolute difference 4, the pairs are [8, 12], [8, 4], [16, 12], [12, 16], [4, 0].

The idea is to count the frequency of each number in a hash map or dictionary as we go through the array Iterate over the array and for each element arr[i], we need another element say complement such that abs(arr[i] – complement) = k. Now, we can have two cases:

(arr[i] – complement) is positive:
arr[i] – complement = k
So, complement = arr[i] – k

(arr[i] – complement) is negative: 
(arr[i] – complement) = -k
So, complement = arr[i] + k

So for each element arr[i], we can check if complement (arr[i] + k) or (arr[i] – k) is present in the hash map. 
If it is, increment the count variable by the occurrences of complement in map.

Time/Space: O(n)
*/
function countPairs(arr: number[], k: number): number {
  const n = arr.length;
  const freq: Record<number, number> = {};

  let cnt: number = 0;

  for (let i = 0; i < n; i++) {
    // Check if the complement (arr[i] + k)
    // exists in the map. If yes, increment count
    if (arr[i] + k in freq) cnt += freq[arr[i] + k];

    // Check if the complement (arr[i] - k)
    // exists in the map. If yes, increment count
    if (arr[i] - k in freq) cnt += freq[arr[i] - k];

    // Increment the frequency of arr[i]
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  return cnt;
}
