/*
Problem: Generate all combinations of k numbers from 1 to n.

Example:
    Input: n = 3, k = 2
    Output: [[1,2],[1,3],[2,3]]

Time Complexity: O(N × 2^N)
- 2^N subsets: There are exactly 2^N possible subsets for N elements
- N work per subset: Each subset takes O(N) time to copy to results

Space Complexity: O(N)
- Recursion stack: Goes N levels deep
*/
function generateAllCombinationsOfK(n: number, k: number): number[][] {
  const result: number[][] = [];

  const backtrack = (current: number[], startIndex: number) => {
    // basecase: when we got k choices
    if (current.length === k) {
      // make sure to copy current or it wont work
      result.push([...current]);
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      current.push(i);
      backtrack(current, i + 1);
      current.pop();
    }
  };

  backtrack([], 1); // start with empty choice

  return result;
}

console.log(generateAllCombinationsOfK(3, 2));
