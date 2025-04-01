/*
Problem: Find all paths from top-left to bottom-right in 2x2 grid (only right/down moves).

Example:
Output: [["R","D"], ["D","R"]]

Time: O(2^(m+n)) - Exponential due to two choices at most steps
Space: O(m+n) - Recursion depth and path storage
*/

function gridPaths(): string[][] {
  const result: string[][] = [];

  function backtrack(current: string[], x: number, y: number) {
    if (x === 1 && y === 1) {
      result.push([...current]);
      return;
    }

    if (x < 1) {
      current.push("R");
      backtrack(current, x + 1, y); // Right: x+1
      current.pop();
    }

    if (y < 1) {
      current.push("D");
      backtrack(current, x, y + 1); // Down: y+1
      current.pop();
    }
  }

  backtrack([], 0, 0); // start at (0,0) position
  return result;
}

console.log(gridPaths());
