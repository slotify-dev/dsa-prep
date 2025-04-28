/*

Problem: Given two arrays, a and b of equal length. The task is to determine if the given arrays are equal or not. Two arrays are considered equal if:

Both arrays contain the same set of elements.
The arrangements (or permutations) of elements may be different.
If there are repeated elements, the counts of each element must be the same in both arrays.

Examples: 

Input: a[] = [1, 2, 5, 4, 0], b[] = [2, 4, 5, 0, 1]
Output: true

Input: a[] = [1, 2, 5, 4, 0, 2, 1], b[] = [2, 4, 5, 0, 1, 1, 2] 
Output: true

Input: a[] = [1, 7, 1], b[] = [7, 7, 1]
Output: false

Time/Space: O(n)
*/
function checkEqual(a: number[], b: number[]): boolean {
  // If lengths of array are not equal means
  // array are not equal
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  // If all elements were same.
  return true;
}
