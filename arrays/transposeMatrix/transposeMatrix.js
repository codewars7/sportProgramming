// O(w * h) time,  O(w * h) space

function transposeMatrix(matrix) {
  const result = []
  for(let col = 0; col < matrix[0].length; col++) {
    const newRow = []
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col])
    }
    result.push(newRow)
  }
  return result;
}

console.log(transposeMatrix([
  [0, 4, 2, 42],
  [-1, 5, 3, 100],
  [-2, 6, -2, 30],
  [-3, 7, -3, -42]
]))
