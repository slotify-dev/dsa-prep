/*
Problem: Generate all possible outcomes of rolling n dice.

Example:
Input: n = 2
Output: [[1,1],[1,2],...,[6,6]]

Time Complexity: 6^N * N
Space Complexity: N
*/
function diceRolls(n: number): number[][] {
  const rolls: number[][] = [];

  const backtrack = (current: number[]) => {
    if (current.length === n) {
      rolls.push([...current]); // O(N) to copy
      return;
    }

    // we need roll dice 6 times
    for (let face = 1; face <= 6; face++) {
      current.push(face);
      backtrack(current); // 6^N stack
      current.pop();
    }
  };

  backtrack([]);

  return rolls;
}

console.log(diceRolls(2));
