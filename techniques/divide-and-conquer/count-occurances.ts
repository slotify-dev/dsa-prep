/**
 * Problem 9: Find the Number of Occurrences of an Element in an Array
 * Problem Statement: Given an array and a target element, count the number of occurrences of the target.
 *
 * Divide and Conquer Approach:
 *
 * Base Case: If the array is empty, return 0.
 * Divide: Split the array into two halves.
 * Conquer: Recursively count the occurrences in each half.
 * Combine: Return the sum of the counts from both halves.
 */
function countOccurrences(arr: number[], target: number): number {
  // base case: if the array is empty, return 0
  if (arr.length === 0) return 0;

  // divide: split the array into two halves
  const middle = Math.floor(arr.length / 2);

  // conquer: recursively count the occurrences in each half
  const leftCount = countOccurrences(arr.slice(0, middle), target);
  const rightCount = countOccurrences(arr.slice(middle), target);

  // combine: run actual logic to count occurrences and return the result
  return leftCount + rightCount + (arr[middle] === target ? 1 : 0);
}

console.log(countOccurrences([1, 2, 3, 4, 5], 3)); // 1
console.log(countOccurrences([1, 2, 3, 4, 5], 3)); // 1
console.log(countOccurrences([1, 2, 3, 4, 5], 3)); // 1
