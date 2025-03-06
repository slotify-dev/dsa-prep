/**
 * Use built-in methods to find the max
 */
function findMax(arr: number[]) {
  return Math.max(...arr);
}

/**
 * Make first element the max and then
 * iterate through the array to find the max
 */
function findMax2(arr: number[]) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax2([1, 2, 3, 4, 5]));
