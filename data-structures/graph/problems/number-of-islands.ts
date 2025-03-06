/**
 * Problem: Number of Islands
 *
 * Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example:
 *
 * Input:
 * grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 *
 * Output: 1
 *
 * Input:
 * grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 *
 * Output: 3
 *
 * Approach:
 *  1. Treat the grid as a graph where each cell is a node.
 *  2. Use DFS or BFS to explore all connected '1's (land) from a starting cell.
 *  3. Mark visited cells to avoid reprocessing.
 *  4. Count the number of times you start a DFS/BFS (each start corresponds to a new island).
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */
function numberOfIslands(grid: string[][]) {
  // base case
  if (grid.length === 0) return 0;

  // get length of rows and cols
  const rows = grid.length;
  const cols = grid[0].length;

  let islands = 0; // count of islands

  function dfs(row: number, col: number) {
    const stack: [number, number][] = [[row, col]];

    while (stack.length > 0) {
      const [r, c] = stack.pop()!;

      // check if the row is out of bounds
      if (r < 0 || r >= rows) {
        continue;
      }

      // check if the cell is out of bounds
      if (c < 0 || c >= cols) {
        continue;
      }

      // check if the cell is water
      if (grid[r][c] === "0") {
        continue;
      }

      // mark the cell as visited
      grid[r][c] = "0";

      // add the adjacent cells to the stack
      stack.push([r - 1, c]); // Up
      stack.push([r + 1, c]); // Down
      stack.push([r, c - 1]); // Left
      stack.push([r, c + 1]); // Right
    }
  }

  function bfs(row: number, col: number) {
    const queue: [number, number][] = [[row, col]];

    while (queue.length > 0) {
      const [r, c] = queue.shift()!;

      // check if the row is out of bounds
      if (r < 0 || r >= rows) {
        continue;
      }

      // check if the cell is out of bounds
      if (c < 0 || c >= cols) {
        continue;
      }

      // check if the cell is water
      if (grid[r][c] === "0") {
        continue;
      }

      grid[r][c] = "0"; // Mark as visited

      // add the adjacent cells to the queue
      queue.push([r - 1, c]); // Up
      queue.push([r + 1, c]); // Down
      queue.push([r, c - 1]); // Left
      queue.push([r, c + 1]); // Right
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // if the cell is an island
      if (grid[row][col] === "1") {
        islands++;
        dfs(row, col);
        bfs(row, col);
      }
    }
  }

  return islands;
}
