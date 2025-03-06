/**
 * Problem 12: Check if a Number Is Prime
 * Problem Statement: Given a number n, check if it is prime.
 *
 * Divide and Conquer Approach:
 *
 * Base Case: If n is less than 2, return false. If n is 2, return true.
 * Divide: Check divisibility of n by numbers from 2 to √n.
 * Conquer: Recursively check divisibility for smaller numbers.
 * Combine: If no divisor is found, return true.
 */

function isPrime(n: number, divisor: number = 2): boolean {
  // base case: if n is less than 2, return false
  if (n < 2) return false;
  if (n === 2) return true;

  // divide: check divisibility of n by numbers from 2 to √n
  if (n % divisor === 0) return false;
  if (divisor * divisor > n) return true;

  // Conquer: Recursively check divisibility
  return isPrime(n, divisor + 1);
}

// Example usage
isPrime(2); // Output: true
isPrime(10); // Output: false
