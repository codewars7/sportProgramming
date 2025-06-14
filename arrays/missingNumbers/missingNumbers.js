// O(n) time | O(n) space

function missingNumbers(nums) {
  const n = nums.length + 2;
  const fullSet = new Set();
  for (let i = 1; i <= n; i++) {
    fullSet.add(i);
  }

  for (const num of nums) {
    fullSet.delete(num);
  }

  return Array.from(fullSet);
}

// Example usage:
const nums = [1, 2, 4, 6];
const result = missingNumbers(nums);
console.log(result); // Output: [3, 5]
// Explanation:
// The numbers 3 and 5 are missing from the sequence 1 to 6.
// This function finds the two missing numbers in a sequence from 1 to n.
// It assumes that the input array contains n - 2 unique numbers from the range 1 to n.