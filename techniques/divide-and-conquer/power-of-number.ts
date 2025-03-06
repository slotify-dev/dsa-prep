/**
 * Problem 8: Find the Power of a Number
 * Problem Statement: Given a number x and an integer n, compute x^n.
 *
 * Divide and Conquer Approach:
 *
 * Base Case: If n === 0, return 1.
 * Divide: Split the problem into smaller subproblems:
 * If n is even, compute x^(n/2) and square it.
 * If n is odd, compute x^(n-1) and multiply by x.
 *
 * Conquer: Recursively solve the subproblems.
 * Combine: Return the result.
 */
function powerOfNumber(x: number, n: number): number {
  // base case: if n is 0, return 1
  if (n === 0) return 1;

  // divide: split the problem into smaller subproblems
  const halfPower = Math.floor(n / 2);

  // conquer: recursively solve the subproblems
  const halfResult = powerOfNumber(x, halfPower);

  // combine: return the result
  if (n % 2 === 0) {
    return halfResult * halfResult; // (x^(n/2))^2
  } else {
    return x * halfResult * halfResult; // x * (x^((n-1)/2))^2
  }
}

console.log(powerOfNumber(2, 3)); // 8
console.log(powerOfNumber(2, 4)); // 16
