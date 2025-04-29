/*
Problem: Most frequent element in an array
Given an array, the task is to find the most frequent element in it. If there are multiple elements that appear a maximum number of times, return the maximum element.

Examples: 

Input : arr[] = [1, 3, 2, 1, 4, 1]
Output : 1
Explanation: 1 appears three times in array which is maximum frequency.


Input : arr[] = [10, 20, 10, 20, 30, 20, 20]
Output : 20 appears four times in array which is maximum frequency


Input: arr[] = [1, 2, 2, 4, 1]
Output: 2
Explanation: 1 and 2 both appear two times, so return 2 as it’s value is bigger.

Time: O(n^2) 
Space: O(1)
*/
function mostFrequentEle(arr: number[]): number {
  let res = -1;
  let n = arr.length;
  let maxCount = -Infinity;

  for (let i = 0; i < n; i++) {
    let count = 0;

    // for each i find i === j and count max
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) count++;
    }

    // If count is greater or if count
    // is same but value is bigger.
    if (count > maxCount || (count === maxCount && arr[i] > res)) {
      maxCount = count;
      res = arr[i];
    }
  }

  return res;
}

console.log(
  mostFrequentEle([1, 3, 2, 1, 4, 1]), // 1
  mostFrequentEle([10, 20, 10, 20, 30, 20, 20]) // 20
);
