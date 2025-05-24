function moveElementToEnd(array, toMove) {
  let moveOps = 0
  for(let i = 0; i + moveOps < array.length; i++) {
    
    if(array[i] === toMove) {
      let numToEnd = array.splice(i, 1);
      i--;
      moveOps++;
      array.push(toMove)
    }
  }
  return array
}

console.log(moveElementToEnd([2, 1, 2, 3, 4, 2], 2)) // [1, 3, 4, 2, 2, 2]
// Time Complexity: O(n²)
// Space Complexity: O(1)   