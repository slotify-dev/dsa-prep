/**
 * Reverse a string using built-in methods
 * @param str - The string to reverse
 * @returns The reversed string
 */
function reverseString(str: string) {
  return str.split("").reverse().join("");
}

/**
 * Use backward iteration to reverse a string
 * @param str - The string to reverse
 * @returns The reversed string
 */
function reverseString2(str: string) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString2("hello"));
