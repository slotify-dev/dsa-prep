/**
 * Defination: A tree is a hierarchical data structure consisting of nodes connected by edges. It has the following properties:
 *
 * - Root Node: The topmost node in the tree.
 * - Child Node: A node connected to another node (its parent) above it.
 * - Parent Node: A node that has one or more child nodes.
 * - Leaf Node: A node with no children.
 * - Depth: The number of edges from the root to a node.
 * - Height: The number of edges from a node to the deepest leaf.
 *
 * DFS (Depth-First Search)
 * DFS is an algorithm for traversing or searching a tree. It explores as far as possible along each branch before backtracking. There are three common ways to perform DFS:
 *
 * - Pre-order: Visit the root, then traverse the left subtree, then the right subtree.
 * - In-order: Traverse the left subtree, visit the root, then traverse the right subtree.
 * - Post-order: Traverse the left subtree, then the right subtree, then visit the root.
 *
 * BFS (Breadth-First Search)
 * BFS is an algorithm for traversing or searching a tree. It explores all the nodes at the present depth prior to moving on to the nodes at the next depth level.
 *
 * Types:
 * - General Tree: A tree where each node can have any number of children.
 * - Binary Tree: A tree where each node has at most two children, referred to as the left child and right child.
 * - Binary Search Tree (BST): A binary tree where each node's left child is less than the node and each node's right child is greater than the node.
 * - Trie (Prefix Tree): A tree where each node represents a character in a string.
 *
 * Space Complexity: O(V)
 * Time Complexity: O(V + E)
 */
export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

/**
 * Example Tree
 *      1
 *     / \
 *    2   3
 *   / \   \
 *  4   5   6
 *
 *  BFS Traversal Output: 1 2 3 4 5 6
 *  Pre-order DFS Output: 1 2 4 5 3 6
 *  In-order DFS Output: 4 2 5 1 3 6
 *  Post-order DFS Output: 4 5 2 6 3 1
 */

/**
 * Pre-order DFS
 *  - Process the current node
 *  - Traverse the left subtree
 *  - Traverse the right subtree
 *
 * Output: 1 2 4 5 3 6
 */
function dfsPreOrder(node: TreeNode | null): void {
  if (!node) return;

  // Process the current node (e.g., print its value)
  console.log(node.val);

  // Traverse left subtree
  dfsPreOrder(node.left);

  // Traverse right subtree
  dfsPreOrder(node.right);
}

/**
 * In-order DFS
 *  - Traverse the left subtree
 *  - Process the current node
 *  - Traverse the right subtree
 *
 * Output: 4 2 5 1 3 6
 */
function dfsInOrder(node: TreeNode | null): void {
  if (!node) return;

  // Traverse left subtree
  dfsInOrder(node.left);

  // Process the current node (e.g., print its value)
  console.log(node.val);

  // Traverse right subtree
  dfsInOrder(node.right);
}

/**
 * Post-order DFS
 *  - Traverse the left subtree
 *  - Traverse the right subtree
 *  - Process the current node
 *
 * Output: 4 5 2 6 3 1
 */
function dfsPostOrder(node: TreeNode | null): void {
  if (!node) return;

  // Traverse left subtree
  dfsPostOrder(node.left);

  // Traverse right subtree
  dfsPostOrder(node.right);

  // Process the current node (e.g., print its value)
  console.log(node.val);
}
