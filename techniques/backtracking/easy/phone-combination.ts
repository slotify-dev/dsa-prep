/**
 * Problem: Given a string containing digits from 2-9, return all possible letter combinations.
 *
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Time Complexity: O(4^n * n)
 * Space Complexity: O(n)
 */
function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const result: string[] = [];
  const charMap: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const backtrack = (index: number, path: string) => {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    const char = digits.charAt(index);
    if (charMap[char] !== undefined) {
      // 4^N: max four characters
      for (const letter of charMap[char]) {
        backtrack(index + 1, path + letter);
      }
    } else {
      backtrack(index + 1, path);
    }
  };

  backtrack(0, "");
  return result;
}

/*
 * Time Complexity: O(4^n * n)
 * Space Complexity: O(n)
 */
function letterCombinationsStack(digits: string): string[] {
  if (!digits) return [];

  const result: string[] = [];
  const charMap: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const backtrack = (index: number, path: string[]) => {
    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }

    const char = digits.charAt(index);
    if (charMap[char] !== undefined) {
      // 4^N: max four characters
      for (const letter of charMap[char]) {
        path.push(letter);
        backtrack(index + 1, path);
        path.pop();
      }
    } else {
      backtrack(index + 1, path);
    }
  };

  backtrack(0, []);
  return result;
}

console.log(letterCombinations("12"));
console.log(letterCombinationsStack("23"));
