/*
 * Problem Description:
 * The task is to help a group of Elvish Senior Historians reconcile two lists of historically significant location IDs.
 * Each list contains unique numbers representing locations. The goal is to pair the smallest numbers from each list,
 * calculate the absolute distance between each pair, and sum these distances to find the total distance.
 *
 * The input consists of two arrays of numbers, and the output is a single number representing the total distance.
 *
 * Time Complexity:
 * - Sorting both lists takes O(n log n) time, where n is the length of the lists.
 * - The subsequent loop to calculate the distances takes O(n) time.
 * - Therefore, the overall time complexity is O(n log n).
 *
 * Space Complexity:
 * - The space complexity is O(1) if we consider the sorting done in place, or O(n) if we consider the space used by the sorting algorithm.
 * - Thus, the space complexity can be considered O(n) in the worst case.
 *
 * Souce: https://adventofcode.com/2024/day/1
 */

// Function to calculate the total distance between two lists of location IDs
function calculateTotalDistance(
  leftList: number[],
  rightList: number[]
): number {
  // Sort both lists in ascending order
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  // Initialize total distance
  let totalDistance = 0;

  // Calculate the distance for each pair of numbers
  for (let i = 0; i < leftList.length; i++) {
    // Calculate the distance between the paired numbers
    const distance = Math.abs(leftList[i] - rightList[i]);
    // Add the distance to the total
    totalDistance += distance;
  }

  // Return the total distance
  return totalDistance;
}

// Example input lists
const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

// Call the function and log the result
const totalDistance = calculateTotalDistance(leftList, rightList);
console.log(`The total distance between the lists is: ${totalDistance}`);
