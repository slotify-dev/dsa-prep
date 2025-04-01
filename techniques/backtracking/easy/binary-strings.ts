/*
Generate all binary strings of length n.

Example:
Input: n = 2
Output: ["00", "01", "10", "11"]

Time Complexity: O(2^N)
 - 2 choice at each level 2^N
 - N time to build string

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
function generateBinaryStringsUsingString(n: number): string[] {
  // define output data type
  const result: string[] = [];

  const backtrack = (current: string) => {
    // base case: when string length === n
    if (current.length === n) {
      result.push(current);
      return;
    }

    // at this level you make two choices
    backtrack(current + "0"); // include 0
    backtrack(current + "1"); // include 1
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
function generateBinaryStringsUsingArray(n: number): string[] {
  const result: string[] = [];

  function backtrack(current: string[]) {
    if (current.length === n) {
      result.push(current.join(""));
      return;
    }

    // Try '0'
    current.push("0");
    backtrack(current);
    current.pop(); // Backtrack

    // Try '1'
    current.push("1");
    backtrack(current);
    current.pop(); // Backtrack
  }

  backtrack([]);
  return result;
}

console.log(generateBinaryStringsUsingString(2));
console.log(generateBinaryStringsUsingArray(2));
