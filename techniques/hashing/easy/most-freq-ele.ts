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

Time: O(n)
Space: O(n)
*/
function mostFrequentEle(arr: number[]): number {
  let freqCount = new Map<number, number>();

  for (let num of arr) {
    freqCount.set(num, (freqCount.get(num)! || 0) + 1);
  }

  let res = -1;
  let maxCnt = -Infinity;

  for (let [val, cnt] of freqCount) {
    if (maxCnt < cnt) {
      res = val;
      maxCnt = cnt;
    }
  }

  return res;
}

console.log(
  mostFrequentEle([1, 3, 2, 1, 4, 1]), // 1
  mostFrequentEle([10, 20, 10, 20, 30, 20, 20]) // 20
);
