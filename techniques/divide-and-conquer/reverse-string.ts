/**
 * Problem 11: Reverse a String
 * Problem Statement: Given a string, reverse it.
 *
 * Base Case: If the string is empty or has one character, return the string.
 * Divide: Split the string into two halves.
 * Conquer: Recursively reverse each half.
 * Combine: Concatenate the reversed right half with the reversed left half.
 */

function reverseString(str: string): string {
  // base case: if the string is empty or has one character, return the string
  if (str.length <= 1) return str;

  // divide: split the string into two halves
  const mid = Math.floor(str.length / 2);

  // conquer: recursively reverse each half
  const reversedLeft = reverseString(str.slice(0, mid));
  const reversedRight = reverseString(str.slice(mid));

  // combine: concatenate the reversed right half with the reversed left half
  return reversedRight + reversedLeft;
}

// Example usage
reverseString("hello"); // Output: "olleh"
