// O(n) time | O(n) space

function hasSingleCycle(array) {
  let currentIndex = 0;
  const visited = new Map();

  // Initialize all indices as unvisited
  for (let i = 0; i < array.length; i++) {
    visited.set(i, false);
  }

  for (let i = 0; i < array.length; i++) {
    if (visited.get(currentIndex)) {
      // Already visited this index — not a single cycle
      return false;
    }
    visited.set(currentIndex, true);

    // Compute the next index, with wrap-around
    const jump = array[currentIndex];
    currentIndex = (currentIndex + jump) % array.length;
    if (currentIndex < 0) {
      currentIndex += array.length;
    }
  }

  // After visiting all, we must return to index 0
  return currentIndex === 0;
}
// Example usage
console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true
console.log(hasSingleCycle([1, 1, 1, 1, 2])); // false
console.log(hasSingleCycle([1, 2, 3, 4, 5])); // false
