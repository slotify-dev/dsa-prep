import TreeNode from "../tree";

/**
 * Problem: Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// time: O(n) | space: O(n)
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0; // Base case: empty tree has depth 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// time: O(n) | space: O(n)
function maxDepthBFS(root: TreeNode | null): number {
  if (!root) return 0;

  const depths: number[] = [1]; // Track depths of nodes
  const queue: TreeNode[] = [root]; // Use a queue for BFS

  let maxDepth = 0;

  while (queue.length > 0) {
    const node = queue.shift()!; // Dequeue the first node
    const depth = depths.shift()!; // Get the depth of the dequeued node

    // Update the maximum depth
    maxDepth = Math.max(maxDepth, depth);

    // Enqueue left child
    if (node.left) {
      queue.push(node.left);
      depths.push(depth + 1);
    }

    // Enqueue right child
    if (node.right) {
      queue.push(node.right);
      depths.push(depth + 1);
    }
  }

  return maxDepth;
}

// time: O(n) | space: O(n)
function maxDepthDFS(root: TreeNode | null): number {
  if (!root) return 0;

  const depths: number[] = [1]; // Track depths of nodes
  const queue: TreeNode[] = [root]; // Use a queue for BFS

  let maxDepth = 0;

  while (queue.length > 0) {
    const node = queue.shift()!; // Dequeue the first node
    const depth = depths.shift()!; // Get the depth of the dequeued node

    // Update the maximum depth
    maxDepth = Math.max(maxDepth, depth);

    // Enqueue left child
    if (node.left) {
      queue.push(node.left);
      depths.push(depth + 1);
    }

    // Enqueue right child
    if (node.right) {
      queue.push(node.right);
      depths.push(depth + 1);
    }
  }

  return maxDepth;
}
