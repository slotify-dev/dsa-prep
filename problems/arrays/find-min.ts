/**
 * Use built-in methods to find the min
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function findMin(arr: number[]) {
  return Math.min(...arr);
}

/**
 * Make first element the min and then
 * iterate through the array to find the min
 */
function findMin2(arr: number[]) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([1, 2, 3, 4, 5]));
console.log(findMin2([1, 2, 3, 4, 5]));
