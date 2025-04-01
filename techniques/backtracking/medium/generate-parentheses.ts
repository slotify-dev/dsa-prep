/*
Problem: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Constraints:
    1 <= n <= 8

Example:
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
*/
function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(current: string, open: number, close: number) {
    // because we need to generate pairs
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      // choice-1: open the bracket
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      // choice-2: close the bracket
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}
