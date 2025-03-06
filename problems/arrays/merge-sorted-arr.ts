/**
 * Merge two sorted arrays
 *   - use built-in methods to merge the arrays
 *
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */
function mergeSortedArrays(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

/**
 * Merge two sorted arrays
 *   - use two pointers to merge the arrays
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function mergeSortedArrays2(arr1: number[], arr2: number[]) {
  let leftPointer = 0;
  let rightPointer = 0;

  const mergedArray: number[] = [];

  // step-1: while there are elements in both arrays
  while (leftPointer < arr1.length && rightPointer < arr2.length) {
    if (arr1[leftPointer] < arr2[rightPointer]) {
      mergedArray.push(arr1[leftPointer]);
      leftPointer++;
    } else {
      mergedArray.push(arr2[rightPointer]);
      rightPointer++;
    }
  }

  // step-2: if there are remaining elements in arr1, add them to the merged array
  while (leftPointer < arr1.length) {
    mergedArray.push(arr1[leftPointer]);
    leftPointer++;
  }

  // step-3: if there are remaining elements in arr2, add them to the merged array
  while (rightPointer < arr2.length) {
    mergedArray.push(arr2[rightPointer]);
    rightPointer++;
  }

  return mergedArray;
}

// merge in place
function mergeSortedArrays3(arr1: number[], arr2: number[]) {
  let leftPointer: number = 0;
  let rightPointer: number = 0;

  const mergedArray: number[] = [];

  while (leftPointer < arr1.length && rightPointer < arr2.length) {
    if (arr1[leftPointer] < arr2[rightPointer]) {
      mergedArray.push(arr1[leftPointer]);
      leftPointer++;
    } else {
      mergedArray.push(arr2[rightPointer]);
      rightPointer++;
    }
  }

  return mergedArray
    .concat(arr1.slice(leftPointer))
    .concat(arr2.slice(rightPointer));
}

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeSortedArrays2([1, 2, 3], [4, 5, 6]));
console.log(mergeSortedArrays3([1, 2, 3], [4, 5, 6]));
