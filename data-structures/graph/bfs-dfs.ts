/**
 * Breadth-First Search (BFS)
 * Data structure: Queue (FIFO)
 *
 * space complexity: O(V)
 * time complexity: O(V + E)
 *
 * Steps:
 * 1. Create a queue and add the starting node to it
 * 2. Create a visited set and add the starting node to it
 * 3. While the queue is not empty, remove the first node from the queue
 * 4. If the node has not been visited, add it to the visited set
 * 5. Add all of the node's neighbors to the queue
 * 6. Return the visited set
 */

function dfsRecursive(graph: number[][], start: number) {
  const visited = new Set<number>();

  function dfsHelper(node: number) {
    if (visited.has(node)) return;

    visited.add(node);

    for (const neighbor of graph[node]) {
      dfsHelper(neighbor);
    }
  }

  dfsHelper(start);
}

function bfsRecursive(graph: number[][], start: number) {
  const queue: number[] = [start];
  const visited = new Set<number>();

  function bfsHelper(node: number) {
    if (visited.has(node)) return;

    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }

    if (queue.length > 0) {
      bfsHelper(queue.shift()!);
    }
  }

  bfsHelper(start); // Start BFS
}

function bfs(graph: number[][], start: number) {
  const queue: number[] = [start];
  const visited = new Set<number>();

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === undefined) continue;
    if (visited.has(node)) continue;

    visited.add(node);

    for (const neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
}

/**
 * Depth-First Search (DFS)
 * Data structure: Stack (LIFO)
 *
 * space complexity: O(V)
 * time complexity: O(V + E)
 *
 * Steps:
 * 1. Create a stack and add the starting node to it
 * 2. Create a visited set and add the starting node to it
 * 3. While the stack is not empty, remove the last node from the stack
 * 4. If the node has not been visited, add it to the visited set
 * 5. Add all of the node's neighbors to the stack
 * 6. Return the visited set
 */
function dfs(graph: number[][], start: number) {
  const stack: number[] = [start];
  const visited = new Set<number>();

  while (stack.length > 0) {
    const node = stack.pop();

    if (node === undefined) continue;
    if (visited.has(node)) continue;

    visited.add(node);

    for (const neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }
}

console.log(
  bfs(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    1
  )
); // [1, 2, 3, 4, 5, 6]

console.log(
  dfs(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    1
  )
); // [1, 2, 3, 4, 5, 6]
