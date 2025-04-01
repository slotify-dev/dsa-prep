/*
Generate all binary strings of length n.

Example:
Input: n = 2
Output: ["00", "01", "10", "11"]

Steps:
  - backtrack('')
    - backtrack('0')
        - backtrack('00')
        - backtrack('01')
    - backtrack('1')
        - backtrack('10')
        - backtrack('11')

Time Complexity: O(2^N)
 - 2 choice at each level 2^N
 - N time to build string

 Space Complexity: O(N)  
- Due to depth of recursion
*/
function generateBinaryStrings(n: number): string[] {
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

console.log(generateBinaryStrings(2));
