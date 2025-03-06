/*
 * Problem 5: Count the Number of Elements in a List
 * Problem Statement: Given a list of elements, count the number of elements.
 *
 * Divide and Conquer Approach:
 *
 * Base Case: If the list is empty, return 0.
 * Divide: Split the list into two halves.
 * Conquer: Recursively count the elements in each half.
 * Combine: Return the sum of the counts from both halves.
 */
function countElements<T>(list: T[]): number {
  // base case: if the list is empty, return 0
  if (list.length === 0) return 0;

  // divide: split the list into two halves
  const middleIndex = Math.floor(list.length / 2);

  // conquer: recursively count the elements in each half
  const leftCount = countElements(list.slice(0, middleIndex));
  const rightCount = countElements(list.slice(middleIndex));

  // combine: return the sum of the counts from both halves
  // to count elements we need to add 1 for the current element
  return leftCount + rightCount + 1;
}

console.log(countElements([1, 2, 3, 4, 5])); // Output: 5
