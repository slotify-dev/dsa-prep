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

Time: O(n Log n)
Space: O(1)

Hint: Sorting brings similar elements next to each other, making frequency counting easier.
*/
function mostFrequentEle(arr: number[]): number {
  // Sort the array
  arr.sort((a, b) => a - b);

  let maxCnt = 1;
  let currCnt = 1;
  let res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // compare adjucent elements and get count
    if (arr[i] === arr[i - 1]) currCnt++;
    else currCnt = 1;

    // if current count is greater or similar with higher value store
    if (currCnt > maxCnt || (currCnt === maxCnt && arr[i] > res)) {
      maxCnt = currCnt;
      res = arr[i];
    }
  }

  return res;
}

console.log(
  mostFrequentEle([1, 3, 2, 1, 4, 1]), // 1
  mostFrequentEle([10, 20, 10, 20, 30, 20, 20]) // 20
);
