/**
 *
 * Problem: Given an array of numbers, find the sum of all elements.
 * 
 * Divide and Conquer Approach:

 * Base Case: If the array has only one element, return that element.
 *  1. Divide: Split the array into two halves.
 *  2. Conquer: Recursively find the sum of each half.
 *  3. Combine: Add the sums of the two halves.
 */
function sumArray(arr: number[]): number {
  // basecase: solve smaller problem first
  if (arr.length === 1) return arr[0];

  // divide: split the array into two halves
  const middle = Math.floor(arr.length / 2);

  // conquer: recursively find the sum of each half
  // sum of elements in the left half
  const left = sumArray(arr.slice(0, middle));

  // sum of elements in the right half
  const right = sumArray(arr.slice(middle));

  // combine: add the sums of the two halves
  return left + right;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
