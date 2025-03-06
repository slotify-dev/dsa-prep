/**
 * Split a string into an array of substrings
 * @param str - The string to split
 * @param delimiter - The delimiter to split the string by
 * @returns An array of substrings
 */
function split(str: string, delimiter: string) {
  return str.split(delimiter);
}

// Example 1: Split a string by a comma
const str = "Hello, world!";
const arr = split(str, ",");
console.log(arr); // ["Hello", " world!"]

// Example 2: Split a string by a space
const str2 = "Hello world!";
const arr2 = split(str2, " ");
console.log(arr2); // ["Hello", "world!"]

// Example 3: Split a string by a comma and space
const str3 = "Hello, world, how are you?";
const arr3 = split(str3, ", ");
console.log(arr3); // ["Hello", "world", "how are you?"]

// Example 4: Split a string by a newline character
const str4 = "Hello\nworld\nhow are you?";
const arr4 = split(str4, "\n");
console.log(arr4); // ["Hello", "world", "how are you?"]

// Example 5: Split a string by a tab character
const str5 = "Hello\tworld\thow are you?";
const arr5 = split(str5, "\t");
console.log(arr5); // ["Hello", "world", "how are you?"]
