// O(n^2) time, O(1) space

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]
}

function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let smallestIndex = i
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[smallestIndex]) {
        smallestIndex = j
      }
    }
    if(smallestIndex !== i) {
      swap(i, smallestIndex, array)
    }
  }
  return array
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
