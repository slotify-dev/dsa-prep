/**
 * Problem 3: Find the Minimum Element in an Array
 * Problem Statement: Given an array of numbers, find the minimum element.
 *
 * Divide and Conquer Approach:
 * Base Case: If the array has only one element, return that element.
 *  1. Divide: Split the array into two halves.
 *  2. Conquer: Recursively find the minimum of each half.
 *  3. Combine: Return the smaller of the two minimums.
 */
function findMin(arr: number[]): number {
  // basecase: solve smaller problem first
  // if the array has only one element, return that element
  if (arr.length === 1) return arr[0];

  // divide: split the array into two halves
  const middle = Math.floor(arr.length / 2);

  // conquer: recursively find the minimum of each half
  const left = findMin(arr.slice(0, middle));

  // conquer: recursively find the minimum of each half
  const right = findMin(arr.slice(middle));

  // combine: return the smaller of the two minimums
  return Math.min(left, right);
}

console.log(findMin([1, 2, 3, 4, 5])); // 1
console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1
