/**
 * slice(start, end (negative meaning from the end to the start))
 *
 * - Array has startIndex and endIndex
 * - StartIndex is always 0
 * - EndIndex is always array.length
 *
 * Rules:
 *   - When startIndex = negative, it starts from the end of the array
 *   - startIndex = -6 meaning [0, 1, 2, 3, 4, 5] it will count [0, -5, -4, -3, -2, -1]
 */

// Example 1: Basic Usage
let str: string = "Hello, World!";
let part1: string = str.slice(0, 5); // "Hello"
let part2: string = str.slice(7, 12); // "World"
console.log(part1, part2);

// Example 2: Using Negative Indices
let str2: string = "Hello, World!";
let part3: string = str2.slice(-6); // "World!"
let part4: string = str2.slice(0, -1); // "Hello, World"
console.log(part3, part4);

// Example 3: Omitting the End Index
let str3: string = "TypeScript";
let part5: string = str3.slice(4); // "Script"
let part6: string = str3.slice(-6); // "Script"
console.log(part5, part6);

// Example 4: Using Array Slicing
let arr: number[] = [0, 1, 2, 3, 4, 5];
let sliced1: number[] = arr.slice(0, 3); // [0, 1, 2]
let sliced2: number[] = arr.slice(3); // [3, 4, 5]
console.log(sliced1, sliced2);
