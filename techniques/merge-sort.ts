function merge(left: number[], right: number[]) {
  const result: number[] = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return result.concat(left, right);
}

/**
 * Merge Sort
 * time complexity: O(n log n)
 */
function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;

  // step-1: split the array into two halves
  const middle = Math.floor(arr.length / 2);

  // step-2: sort the two halves
  const left = arr.slice(0, middle); // 0 to middle
  const right = arr.slice(middle); // middle to end

  // step-3: merge the two halves
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3, 1, 2, 4, 5])); // [1, 2, 3, 4, 5]
