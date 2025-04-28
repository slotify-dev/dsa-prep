/*
Problem: Given two arrays a[] and b[] of size m and n respectively, the task is to determine whether b[] is a subset of a[]. 
Both arrays are not sorted, and elements are distinct.

Example:

Input: a[] = [11, 1, 13, 21, 3, 7], b[] = [11, 3, 7, 1] 
Output: true

Input: a[]= [1, 2, 3, 4, 5, 6], b = [1, 2, 4] 
Output: true

Input: a[] = [10, 5, 2, 23, 19], b = [19, 5, 3] 
Output: false

Time Complexity: O(m log m + n log n)
Auxiliary Space: O(1)
*/
function isSubsetSortingTP(a: number[], b: number[]): boolean {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  // Traverse both arrays using two pointers
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      // Element in a is smaller, move to the next element in a
      i++;
    } else if (a[i] === b[j]) {
      // Element found in both arrays, move to the next element in both arrays
      i++;
      j++;
    } else {
      // Element in b not found in a, not a subset
      return false;
    }
  }

  // If we have traversed all elements in b, it is a subset
  return j === b.length;
}
