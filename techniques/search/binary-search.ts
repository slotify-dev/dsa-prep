/**
 * Binary Search Function
 * @param arr - Sorted array of numbers
 * @param target - The value to search for
 * @returns The index of the target if found, otherwise -1
 */
function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1; // truncate left side
    } else {
      right = mid - 1; // truncate right side
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
