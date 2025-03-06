/**
 * Problem 10: Find the k-th Smallest Element in an Array
 * Problem Statement: Given an array and an integer k, find the k-th smallest element.
 *
 * Understand the problem first:
 *  - The k-th smallest element in an array is the element that would appear in the k-th position if the array were sorted in ascending order
 *  - For example, in the array [7, 10, 4, 3, 20, 15], the sorted version is [3, 4, 7, 10, 15, 20]. If we want to find the 3rd smallest element (k = 3), the answer would be 7.
 *
 * Divide and Conquer Approach:
 *
 * Base Case: If the array has one element, return that element.
 * Divide: Choose a pivot and partition the array into elements smaller than the pivot and elements larger than the pivot.
 *
 * Conquer:
 * If k is less than the pivot index, recursively find the k-th smallest in the left partition.
 * If k is greater than the pivot index, recursively find the (k - pivot index)-th smallest in the right partition.
 *
 * Combine: Return the pivot if it is the k-th smallest.
 */

function kthSmallest(arr: number[], k: number): number {
  // base case: if the array has one element, return that element
  if (arr.length === 1) return arr[0];

  // divide: choose a pivot and partition the array into elements smaller than the pivot and elements larger than the pivot
  const pivot = arr[Math.floor(arr.length / 2)];

  // conquer: recursively find the k-th smallest both in the left and right partitions
  const left = arr.filter((x) => x < pivot);
  const right = arr.filter((x) => x > pivot);

  if (k <= left.length) {
    return kthSmallest(left, k);
  }

  if (k === left.length + 1) {
    return pivot;
  }

  return kthSmallest(right, k - left.length - 1);
}

// Example usage
kthSmallest([7, 10, 4, 3, 20, 15], 3); // Output: 7
