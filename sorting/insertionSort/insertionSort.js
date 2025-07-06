
// O(n^2) time O(1) space
function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]
  return array
}

function insertionSort(array) {  
  for(let i = 1; i < array.length; i++) { 
    let j = i
    while(j > 0 && array[j] < array[j - 1]) {      
      swap(j, j - 1, array)
      j--
    }
  }

  return array
}

// Example usage:
const arr = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(arr)); // Output: [1, 2, 5, 5, 6, 9]
