/*
Problem: Given an array of integers and a target value, determine if there exists a pair of elements that sum up to the target.

Sample Examples:
1. Input: arr = [2, 7, 11, 15], target = 9
   Output: true (2 + 7 = 9)

2. Input: arr = [3, 1, 4, 6], target = 8
   Output: true (2 + 6 = 8)

3. Input: arr = [3, 1, 4, 6], target = 10
   Output: false (No such pair exists)

Time Complexity: O(n)
Space Complexity: O(n)   
*/
function twoSumHashMap(arr: number[], target: number): boolean {
  const seen = new Set<number>();

  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

function countPairs(arr: number[], target: number) {
  const freq = new Map();
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if the complement (target - arr[i])
    // exists in the map. If yes, increment count
    if (freq.has(target - arr[i])) {
      cnt += freq.get(target - arr[i]);
    }

    // Increment the frequency of arr[i]
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }

  return cnt;
}
