/*
Given two arrays a[] and b[], the task is find intersection of the two arrays. 
Intersection of two arrays is said to be elements that are common in both arrays. 
The intersection should not count duplicate elements and the result should contain items in any order.

Input: a[] = {1, 2, 1, 3, 1},  b[] = {3, 1, 3, 4, 1}
Output: {1,  3}
Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements

Input: a[] = {1, 1, 1},  b[] = {1, 1, 1, 1, 1}
Output: {1}
Explanation: 1 is the only common element present in both the arrays.

Input: a[] = {1, 2, 3},  b[] = {4, 5, 6}
Output: {}
Explanation: No common element in both the arrays.

Time: O(n*n*m)
Space: O(1)
*/

function intersection(a: number[], b: number[]): number[] {
  let res: number[] = [];

  // Traverse through a[] and search every element a[i] in b[]
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      // If found, check if the element is already in the result
      if (a[i] === b[j] && !res.includes(a[i])) {
        res.push(a[i]);
      }
    }
  }

  return res;
}
