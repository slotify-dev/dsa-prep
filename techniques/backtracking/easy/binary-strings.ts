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

Time Complexity: O(2^N) - Each level it makes two calls
Space Complexity: O(N)  - Due to depth of recursion
*/
function generateBinaryStrings(n: number) {
  // define output data type
  const result: string[] = [];

  const backtrack = (current: string) => {
    // base case: when string length === n
    if (current.length === n) {
      result.push(current);
      return;
    }

    console.log(current);

    // include 0
    backtrack(current + "0");

    // include 1
    backtrack(current + "1");
  };

  backtrack(""); // start with empty string
  return result;
}

console.log(generateBinaryStrings(2));
