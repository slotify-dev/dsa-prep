/*
Problem: Given two arrays a and b, check if they are disjoint, i.e., there is no element common between both the arrays.

Examples:

Input: a[] = {12, 34, 11, 9, 3}, b[] = {2, 1, 3, 5} 
Output: False
Explanation: 3 is common in both the arrays.

Input: a[] = {12, 34, 11, 9, 3}, b[] = {7, 2, 1, 5} 
Output: True 
Explanation: There is no common element in both the sets.

Time: O(n Log n + m Log m) 
Space: O(1)
*/

function areDisjoint(a: number[], b: number[]): boolean {
  // Sorting both the arrays
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  // Initializing pointers at the
  // beginning of both the arrays
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    // If any common element is found, then
    // given arrays are not disjoint
    if (a[i] === b[j]) return false;

    // Incrementing the pointer
    // having smaller value
    if (a[i] < b[j]) i++;
    else j++;
  }

  return true;
}
