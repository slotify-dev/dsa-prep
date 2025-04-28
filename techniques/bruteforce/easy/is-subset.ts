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

Time: O(m*n)
Space: O(1)
*/
function isSubsetBruteForce(a: number[], b: number[]): boolean {
  const m = a.length;
  const n = b.length;

  // Iterate over each element in the second array
  for (let i = 0; i < n; i++) {
    let found = false;

    // Check if the element exists in the first array
    for (let j = 0; j < m; j++) {
      if (b[i] === a[j]) {
        found = true;
        break;
      }
    }

    // If any element is not found, return false
    if (!found) return false;
  }

  // If all elements are found, return true
  return true;
}
