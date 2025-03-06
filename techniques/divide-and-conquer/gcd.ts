/**
 * Problem 13: Find the Greatest Common Divisor (GCD)
 * Problem Statement: Given two numbers a and b, find their GCD.
 *
 * Divide and Conquer Approach:
 * Base Case: If b === 0, return a.
 * Divide: Compute a % b.
 * Conquer: Recursively find the GCD of b and a % b.
 * Combine: Return the GCD.
 */

function gcd(a: number, b: number): number {
  // Base case: If b is 0, return a
  if (b === 0) return a;

  // Divide: Compute a % b
  const remainder = a % b;

  // Conquer: Recursively find the GCD of b and remainder
  return gcd(b, remainder);
}

// Example usage
gcd(12, 18); // Output: 6
