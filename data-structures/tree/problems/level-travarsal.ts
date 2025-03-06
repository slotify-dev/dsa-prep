import TreeNode from "../tree";
/**
 * Problem: Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function levelOrderDFS(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  function traverse(node: TreeNode | null, level: number) {
    if (!node) return; // Base case: empty tree has no nodes

    // Initialize the current level if it doesn't exist
    if (!result[level]) {
      result[level] = [];
    }

    // Add the current node's value to its corresponding level
    result[level].push(node.val);

    // Traverse left and right subtrees
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0); // Start traversal from the root at level 0

  return result;
}

function levelOrderBFS(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  // Base case: empty tree has no nodes
  if (!root) return result;

  // Initialize the queue with the root node
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;
    const level = result.length;

    // Initialize the current level if it doesn't exist
    if (!result[level]) {
      result[level] = [];
    }

    // Add the current node's value to its corresponding level
    result[level].push(node.val);

    // Add left and right children to the queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}
