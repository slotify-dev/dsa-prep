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

// Example 4: Extracting Substrings
let str4: string = "OpenAI GPT-4";
let part7: string = str4.slice(0, 6); // "OpenAI"
let part8: string = str4.slice(7, 11); // "GPT-4"
console.log(part7, part8);

// Example 5: Using Both Positive and Negative Indices
let str5: string = "Programming";
let part9: string = str5.slice(3, -3); // "gram"
let part10: string = str5.slice(-8, -3); // "gram"
console.log(part9, part10);

// Example 6: Edge Cases
let str6: string = "Hello";
let part11: string = str6.slice(5); // ""
let part12: string = str6.slice(-6); // ""
console.log(part11, part12);

// Example 7: Slicing an Empty String
let str7: string = "";
let part13: string = str7.slice(0, 1); // ""
let part14: string = str7.slice(-1); // ""
console.log(part13, part14);

// Example 8: Slicing with the Same Start and End
let str8: string = "Example";
let part15: string = str8.slice(2, 2); // ""
let part16: string = str8.slice(-3, -3); // ""
console.log(part15, part16);

// Example 9: Using Variables for Indices
let str9: string = "Hello, TypeScript!";
let start9: number = 7;
let end9: number = 17;
let result9: string = str9.slice(start9, end9); // "TypeScript"
console.log(result9);

// Example 10: Function to Slice Strings
function sliceString(input: string, start: number, end?: number): string {
  return input.slice(start, end);
}

let result: string = sliceString("Hello, World!", 1, -1); // "ello, World"
console.log(result);
