/**
 * Quick Sort
 * time complexity: O(n log n)
 */
function quickSort(arr: number[]) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0]; // choose the first element as the pivot
  const rest = arr.slice(1); // all elements except the pivot

  const left = rest.filter((item) => item <= pivot); // all elements less than or equal to the pivot
  const right = rest.filter((item) => item > pivot); // all elements greater than the pivot

  // recursively sort the left and right arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 1, 2, 4, 5])); // [1, 2, 3, 4, 5]
