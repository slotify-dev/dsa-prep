/**
 * Problem 4: Binary Search
 * Problem Statement: Given a sorted array and a target value, find the index of the target in the array (or return -1 if not found).
 *
 * Divide and Conquer Approach:
 * Base Case: If the array is empty, return -1.
 * Divide: Find the middle element of the array.
 * Conquer:
 *  If the middle element is the target, return its index.
 *  If the target is smaller, recursively search the left half.
 *  If the target is larger, recursively search the right half.
 * Combine: Return the result of the recursive search.
 */

function binarySearch(arr: number[], target: number): number {
  // basecase: if the array is empty, return -1
  if (arr.length === 0) return -1;

  // Divide: Find the middle index
  const middleIndex = Math.floor(arr.length / 2);

  // Conquer: Check if the middle element is the target
  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  // Recursively search the left or right half
  if (arr[middleIndex] < target) {
    return binarySearch(arr.slice(middleIndex + 1), target); // right half
  } else {
    return binarySearch(arr.slice(0, middleIndex), target);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
