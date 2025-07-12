// O(n) time | O(1) space
function kadanesAlgorithm(array: number[]): number {
  let max: number = array[0];
  let currentMax: number = array[0];

  for (let i: number = 1; i < array.length; i++) {
    currentMax = Math.max(array[i], currentMax + array[i]);
    max = Math.max(max, currentMax);
  }

  return max;
}
// Example usage:
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadanesAlgorithm(input));  // Output: 6