/**
 * Problem 7: Merge Two Sorted Arrays
 * Problem Statement: Given two sorted arrays, merge them into a single sorted array.
 *
 * Divide and Conquer Approach:
 *
 * Base Case: If one of the arrays is empty, return the other array.
 * Divide: Compare the first elements of both arrays.
 * Conquer: Recursively merge the remaining elements.
 * Combine: Return the merged array.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 */
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  // base case: if one of the arrays is empty, return the other array
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  // divide: compare the first elements of both arrays
  if (arr1[0] < arr2[0]) {
    // conquer: shrink the problem by removing the first element of arr1
    return [arr1[0], ...mergeSortedArrays(arr1.slice(1), arr2)];
  } else {
    // conquer: shrink the problem by removing the first element of arr2
    return [arr2[0], ...mergeSortedArrays(arr1, arr2.slice(1))];
  }
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
