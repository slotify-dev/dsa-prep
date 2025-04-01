/*
Problem: Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

Constraints:
    1 <= s.length <= 16
    s contains only lowercase English letters.

Example:
    Input: s = "aab"
    Output: [["a","a","b"],["aa","b"]]
*/

function partition(s: string): string[][] {
  const result: string[][] = [];

  function isPalindrome(str: string): boolean {
    return str === str.split("").reverse().join("");
  }

  function backtrack(start: number, current: string[]) {
    if (start === s.length) {
      result.push([...current]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (isPalindrome(substring)) {
        current.push(substring);
        backtrack(end, current);
        current.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}
