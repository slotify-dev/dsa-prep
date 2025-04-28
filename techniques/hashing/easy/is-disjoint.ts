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
  const st = new Set(a);

  for (let ele of b) {
    // If an element from b is found in the
    // hash set, arrays are not disjoint
    if (st.has(ele)) return false;
  }

  return true;
}
