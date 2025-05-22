function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)
  const result = []

  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++){
      for(let y = j+1; y < array.length; y++) {
        const currentIterationSum = array[i] + array[j] + array[y]
        if(currentIterationSum === targetSum)
          result.push([array[i], array[j], array[y]])
      }
    }
  }

  return result
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
// Output: [[-8, 2, 6], [-6, 1, 5], [1, 2, 3]]
// Time complexity: O(n^3) 