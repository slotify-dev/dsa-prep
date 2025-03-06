/**
 * Problem 2: Find the Maximum Element in an Array
 * Problem Statement: Given an array of numbers, find the maximum element.
 *
 * Divide and Conquer Approach:
 * Base Case: If the array has only one element, return that element.
 *  1. Divide: Split the array into two halves.
 *  2. Conquer: Recursively find the maximum of each half.
 *  3. Combine: Return the larger of the two maximums.
 */
function findMax(arr: number[]): number {
  // basecase: solve smaller problem first
  // if the array has only one element, return that element
  if (arr.length === 1) return arr[0];

  // divide: split the array into two halves
  const middle = Math.floor(arr.length / 2);

  // conquer: recursively find the maximum of each half
  const left = findMax(arr.slice(0, middle));

  // conquer: recursively find the maximum of each half
  const right = findMax(arr.slice(middle));

  // combine: return the larger of the two maximums
  return Math.max(left, right);
}

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
