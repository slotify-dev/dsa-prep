/**
 * Problem 3: Check if a String Is a Palindrome
 * Problem Statement: Given a string, check if it is a palindrome (reads the same backward as forward).
 *
 * Divide and Conquer Approach:
 * Base Case: If the string is empty or has one character, it’s a palindrome.
 *  1. Divide: Compare the first and last characters.
 *  2. Conquer: Recursively check if the substring (excluding the first and last characters) is a palindrome.
 *  3. Combine: The string is a palindrome if the first and last characters match and the substring is a palindrome.
 *
 * slice(start, end)
 * - start: the index of the first character to include in the new array
 * - end: the index of the first character to exclude from the new array
 */
function isPalindrome(str: string): boolean {
  // basecase: solve smaller problem first
  // if the string is empty or has one character, it's a palindrome
  if (str.length <= 1) return true;

  // divide: compare the first and last characters
  const first = str[0];
  const last = str[str.length - 1];

  // conquer: recursively check if the substring (excluding the first and last characters) is a palindrome
  // combine: the string is a palindrome if the first and last characters match and the substring is a palindrome
  return first === last && isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
