/*
Generate all decimal strings of length n (digits 0-9).

Example:
Input: n = 1
Output: ["0","1","2","3","4","5","6","7","8","9"]

Time Complexity: O(N * 10^N)
- 10^N leaves: There are 10^N possible strings in the result
- N work per leaf: Each string takes O(N) time to construct
- Total: O(N × 10^N)

Practical Implications
- For small N: Both work fine
- For large N: Array version is more memory efficient
- Array version might be slightly faster due to less memory allocation 
*/

/*
String version:

- Creates new strings at each recursive call
- Old strings remain in memory until garbage collected
- More memory intensive

Space Complexity: O(N^2)
- String concatenation creates new strings at each level
- Memory usage: At depth k, you have O(k) strings alive in the call stack
- Total: Sum from 1 to N = O(N^2) space
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

/*
Array version:

- Mutates a single array throughout
- Uses backtracking (push/pop) to reuse the same memory
- More memory efficient

Space: O(N)
- Single array modified in-place with push/pop
- Memory usage: Only one array of length N exists at any time
- Call stack: N levels deep
*/
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
