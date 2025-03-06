### What is Divide and Conquer?

Divide and Conquer is a problem-solving strategy that involves breaking a problem into smaller sub-problems,
solving each sub-problem independently,
and then combining the solutions to solve the original problem.

### How to implement Divide and Conquer?

1. Divide the problem into smaller sub-problems.
2. Solve each sub-problem independently.
3. Combine the solutions to solve the original problem.

### Example

```typescript
function divideAndConquer(problem): Solution {
  // Base case: If the problem is small enough, solve it directly
  if (isBaseCase(problem)) {
    return solveDirectly(problem);
  }

  // Divide: Break the problem into smaller subproblems
  const subproblems = divide(problem);

  // Conquer: Solve each subproblem recursively
  const subSolutions = [];
  for (const subproblem of subproblems) {
    subSolutions.push(divideAndConquer(subproblem));
  }

  // Combine: Merge the results of the subproblems
  return combine(subSolutions);
}
```

### How Divide and Conquer Relates to Tree Traversals

Tree traversals like DFS and BFS naturally follow the Divide and Conquer approach:

- Divide: Split the tree into smaller subtrees (e.g., left and right subtrees).
- Conquer: Recursively traverse or process each subtree.
- Combine: Combine the results from the subtrees to solve the original problem.

### Example

```typescript
function maxDepth(root: TreeNode | null): number {
  // Base case: If the tree is empty, depth is 0
  if (!root) return 0;

  // Divide: Recursively find the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Combine: Return the maximum depth of the subtrees + 1 (for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}
```

### Divide and Conquer in Tree Traversals

1. Pre-order Traversal (DFS)

- Divide: Split the tree into the root, left subtree, and right subtree.
- Conquer: Process the root, then recursively traverse the left and right subtrees.
- Combine: The result is the root + results from the left and right subtrees.

2. In-order Traversal (DFS)

- Divide: Split the tree into the left subtree, root, and right subtree.
- Conquer: Recursively traverse the left subtree, process the root, then traverse the right subtree.
- Combine: The result is the left subtree + root + right subtree.

3. Post-order Traversal (DFS)

- Divide: Split the tree into the left subtree, right subtree, and root.
- Conquer: Recursively traverse the left and right subtrees, then process the root.
- Combine: The result is the left subtree + right subtree + root.

### Example

```typescript
function mergeSort(arr: number[]): number[] {
  // Base case: If the array has 0 or 1 element, it's already sorted
  if (arr.length <= 1) return arr;

  // Divide: Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Conquer: Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Combine: Merge the two sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  // Merge the two arrays in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from left or right
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```
