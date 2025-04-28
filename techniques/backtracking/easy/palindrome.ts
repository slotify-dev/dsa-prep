/**
 * Problem: Given a string s, partition s such that every substring is a palindrome.
 *
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 *
 * Time Complexity: O(n * k^n)
 * Space Complexity: O(n)
 */
function partition(s: string): string[][] {
  const result: string[][] = [];

  const isPalindrome = (str: string, left: number, right: number): boolean => {
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  };

  const backtrack = (start: number, path: string[]) => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        path.push(s.substring(start, i + 1));
        backtrack(i + 1, path);
        path.pop();
      }
    }
  };

  backtrack(0, []);
  return result;
}
