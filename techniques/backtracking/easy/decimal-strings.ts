/*
Generate all decimal strings of length n (digits 0-9).

Example:
Input: n = 1
Output: ["0","1","2","3","4","5","6","7","8","9"]

Time Complexity: O(N * 10^N)
- 10^N leaves: There are 10^N possible strings in the result
- N work per leaf: Each string takes O(N) time to construct
- Total: O(N × 10^N)

Space Complexity: O(N)  
- Due to depth of recursion
*/
function generateDecimalStrings(n: number): string[] {
  const result: string[] = [];

  const backtrack = (current: string) => {
    if (current.length === n) {
      result.push(current);
      return;
    }

    // we need to make 10 choices
    for (let i = 0; i <= 9; i++) {
      backtrack(current + i.toString());
    }
  };

  backtrack(""); // start with empty string

  return result;
}

function generateDecimalStringsUsingArray(n: number): string[] {
  const result: string[] = [];

  const backtrack = (current: string[]) => {
    if (current.length === n) {
      result.push(current.join(""));
      return;
    }

    // we need to make 10 choices
    for (let i = 0; i <= 9; i++) {
      current.push(i.toString());
      backtrack(current);
      current.pop(); // backtrack
    }
  };

  backtrack([]); // start with empty string

  return result;
}

console.log(generateDecimalStrings(1));
console.log(generateDecimalStringsUsingArray(2));
