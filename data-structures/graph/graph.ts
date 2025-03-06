/**
 * Defination: A graph is a collection of nodes and edges.
 *
 * Types:
 * - Directed Graph: An edge has a direction.
 * - Undirected Graph: An edge does not have a direction.
 *
 * Representations:
 * - Adjacency List: An array of size V.
 * - Adjacency Matrix: A 2D array of size V x V.
 *
 * Space Complexity: O(V + E)
 * Time Complexity: O(V + E)
 */

/**
 * Graph Representation
 * Graph representation using adjacency list
 *
 *  - Graph is collection of node/edges
 *  - Node is collection of value and edges
 *  - Edge is collection of node1, node2 and weight
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */
type Graph = Record<number, number[]>;

const graph: Graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};
