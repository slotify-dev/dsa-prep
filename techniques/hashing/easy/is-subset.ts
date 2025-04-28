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
*/

/**
 * Technique: BruteForce
 *
 * Time: O(m*n)
 * Space: O(1)
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

/**
 * Sort both arrays and use two pointers to traverse them. Move the pointer in b[] if a[]’s element is smaller.
 * If a[]’s element is larger, b’s element isn’t in a[], so return false.
 *
 * Time Complexity: O(m log m + n log n)
 * Auxiliary Space: O(1)
 **/
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

/**
 * We can use a hash set to store elements of a[], this will help us in constant time complexity searching.
 * We first insert all elements of a[] into a hash set. Then, for each element in b[], we check if it exists in the hash set.
 *
 * Time Complexity: O(m + n), where m and n are the size of a and b respectively.
 * Auxiliary Space: O(m)
 */
function isSubsetUsingSet(a: number[], b: number[]): boolean {
  // Create a hash set and insert all elements of a
  const hashSet = new Set(a);

  // Check each element of b in the hash set
  for (const num of b) {
    if (!hashSet.has(num)) {
      return false;
    }
  }

  // If all elements of b are found in the hash set
  return true;
}
