/*
Problem: Find Itinerary from a given list of tickets
Given a list of tickets, find the itinerary in order using the given list.
Note: It may be assumed that the input list of tickets is not cyclic and there is one ticket from every city except the final destination.

Examples:

Input: [
        ["Chennai", "Bangalore"],
        ["Bombay", "Delhi"],
        ["Goa", "Chennai"],
        ["Delhi", "Goa"]
]
Output: Bombay->Delhi, Delhi->Goa, Goa->Chennai, Chennai->Bangalore
*/
function findItinerary(arr: string[][]): string[][] {
  const result: string[][] = [];

  let startToDestMap = new Map();
  let destToStartMap = new Map();

  for (let i of arr) {
    startToDestMap.set(i[0], i[1]);
    destToStartMap.set(i[1], i[0]);
  }

  let start: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (!destToStartMap.has(arr[i][0])) {
      start = arr[i][0];
      break;
    }
  }

  while (startToDestMap.has(start)) {
    result.push([start, startToDestMap.get(start)]);
    start = startToDestMap.get(start);
  }

  return result;
}

// Sample Input
let res = findItinerary([
  ["Chennai", "Bangalore"],
  ["Bombay", "Delhi"],
  ["Goa", "Chennai"],
  ["Delhi", "Goa"],
]);

for (let i of res) {
  console.log(i[0] + " -> " + i[1]);
}
