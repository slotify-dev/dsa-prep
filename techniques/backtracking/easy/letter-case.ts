/*
Problem: Generate all letter case permutations of a string.

Example:
Input: "a1b"
Output: ["a1b","a1B","A1b","A1B"]

Time: O(2^k × n) where k is number of letters (each has 2 cases)
Space: O(n) for recursion stack and character array
*/

function letterCasePermutation(s: string): string[] {
  const result: string[] = [];
  const chars = s.split("");

  function backtrack(index: number) {
    if (index === chars.length) {
      result.push(chars.join(""));
      return;
    }

    if (!/[a-zA-Z]/.test(chars[index])) {
      backtrack(index + 1); // do nothing for number
      return;
    }

    // Lowercase branch
    chars[index] = chars[index].toLowerCase();
    backtrack(index + 1);

    // Uppercase branch
    chars[index] = chars[index].toUpperCase();
    backtrack(index + 1);
  }

  backtrack(0);
  return result;
}

console.log(letterCasePermutation("a1b"));
