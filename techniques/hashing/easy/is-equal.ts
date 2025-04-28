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
  const n = a.length;
  const m = b.length;

  if (n !== m) return false;

  const mp: Record<number, number> = {};

  for (let num of a) {
    mp[num] = (mp[num] || 0) + 1;
  }

  for (let num of b) {
    if (!(num in mp) || mp[num] === 0) return false;
    mp[num]--;
  }

  return true;
}
