/**
 * Problem: Course Schedule (LeetCode 207)
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 *
 * For example, the pair [0, 1] indicates that to take course 0 you have to first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So it is possible.
 *
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 * Constraints:
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= 5000
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * All the pairs prerequisites[i] are unique.
 *
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */

/**
 * Builds a graph from the prerequisites
 * Where the key is the course(vertex) and the value is the list of prerequisites(edges)
 */
function buildGraph(prerequisites: number[][]) {
  const graph = new Map<number, number[]>();

  for (const [vertex, edge] of prerequisites) {
    if (!graph.has(vertex)) {
      graph.set(vertex, []);
    }
    graph.get(vertex)!.push(edge);
  }

  return graph;
}

function canFinishUsingDFS(numCourses: number, prerequisites: number[][]) {
  const visited = new Set<number>();
  const graph = buildGraph(prerequisites);

  // 0 = unvisited, 1 = visiting, 2 = visited
  const hasCycle = (node: number): boolean => {
    // step-1: check if the node is already visited
    if (visited[node] === 1) return true; // Cycle detected
    if (visited[node] === 2) return false; // Already visited

    // step-2: mark the node as visiting
    visited[node] = 1; // Mark as visiting

    // step-3: visit all the neighbors
    for (const neighbor of graph[node]) {
      if (hasCycle(neighbor)) return true;
    }

    // step-4: mark the node as visited
    visited[node] = 2; // Mark as visited

    return false;
  };

  // for each course, check if it has a cycle
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}

/**
 * Each course can be represented as a node in a directed graph.
 * The edges represent the prerequisites.
 *
 * A prerequisite relationship, such as [a, b], means there is a directed edge from course b to course a.
 * This indicates that you must complete course b before you can take course a.
 *
 * The in-degree of a node (course) is the number of edges directed into that node. In other words, it counts how many prerequisites a course has.
 * For example, if course a has two prerequisites (courses b and c), then the in-degree of course a would be 2.
 *
 * If a course has an in-degree of 0, it means that there are no prerequisites left to complete for that course, and it can be taken immediately.
 * If we can process all courses (i.e., reduce the in-degree of all courses to zero), it indicates that there are no cycles in the graph, and all courses can be completed.
 * If we finish processing and still have courses with non-zero in-degrees, it means there are cycles, and thus not all courses can be completed.
 */
function canFinishUsingBFS(numCourses: number, prerequisites: number[][]) {
  const graph = buildGraph(prerequisites);

  // 0 = unvisited, 1 = visiting, 2 = visited
  const visited = new Set<number>();
  const inDegree = new Map<number, number>();

  // initialize the in-degree of each node
  for (const [vertex, edges] of graph.entries()) {
    if (!inDegree.has(vertex)) {
      inDegree.set(vertex, 0);
    }
    for (const edge of edges) {
      // counts how many prerequisites a course has
      inDegree.set(edge, (inDegree.get(edge) ?? 0) + 1);
    }
  }

  // initialize the queue with nodes having in-degree 0
  const queue: number[] = [];
  for (const [vertex, degree] of inDegree.entries()) {
    if (degree === 0) queue.push(vertex);
  }

  // process the nodes in the queue
  while (queue.length > 0) {
    const node = queue.shift()!;

    // mark the node as visited
    visited.add(node);

    // reduce the in-degree of the neighbors
    for (const neighbor of graph[node]) {
      // reduce the in-degree of the neighbor
      inDegree.set(neighbor, inDegree.get(neighbor)! - 1);

      // if the in-degree of the neighbor is 0, add it to the queue
      if (inDegree.get(neighbor)! === 0) queue.push(neighbor);
    }
  }

  // if the number of visited nodes is not equal to the number of courses, then there is a cycle
  return visited.size === numCourses;
}
