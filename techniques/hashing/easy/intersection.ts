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

Time: O(n+m)
Space: O(n)
*/

function intersection(a: number[], b: number[]): number[] {
  // Put all elements of a[] in as
  const asSet = new Set(a);
  const rsSet = new Set();
  const res: number[] = [];

  // Traverse through b[]
  for (let i = 0; i < b.length; i++) {
    // If the element is in asSet and not yet in rsSet
    if (asSet.has(b[i]) && !rsSet.has(b[i])) {
      rsSet.add(b[i]);
      res.push(b[i]);
    }
  }

  return res;
}

function intersectionOptimized(a: number[], b: number[]): number[] {
  // Put all elements of a[] in sa
  const sa = new Set(a);
  const res: number[] = [];

  // Traverse through b[]
  for (let i = 0; i < b.length; i++) {
    // If the element is in sa
    if (sa.has(b[i])) {
      res.push(b[i]); // Add it to the result array
      sa.delete(b[i]); // Erase it from sa to avoid duplicates
    }
  }

  return res;
}
