/**
 * Check if a string is a palindrome
 *   - reverse the string and compare it to the original string
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function isPalindrome(str: string) {
  return str === str.split("").reverse().join("");
}

/**
 * Use backward iteration to check if a string is a palindrome
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function isPalindrome2(str: string) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
