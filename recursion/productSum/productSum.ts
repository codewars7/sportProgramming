// Write a function that takes an array of numbers and/or arrays, and returns the product sum of the array.
// The product sum is defined as the sum of all numbers in the array, where each nested array contributes to the sum multiplied by its depth in the array.

// O (n) time | O(d) space, where n is the number of elements in the array and d is the depth of the nested arrays
type SpecialArray = Array<number | SpecialArray>;

function productSum(array: SpecialArray, multiplier: number = 1) {
  let sum: number = 0
  for(const num of array){
    if(typeof num === 'number') {
      sum+= num
    } else {
      sum += productSum(num, multiplier+1)
    }
  }
  return sum * multiplier
}


// Example usage: 
const arr: SpecialArray = [1, 2, [3, 4], [5, [6, 7]]];
console.log(productSum(arr)); // Output: 105