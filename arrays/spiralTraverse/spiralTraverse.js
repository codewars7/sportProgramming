function spiralTraverse(array) {
  let startCol = 0, endCol =  array[0].length - 1
  let startRow = 0, endRow =  array.length - 1
  
  const spiralArray = []
  while(startCol <= endCol && startRow <= endRow) {
    
    for(let i = startCol; i <= endCol; i++ ) {
       spiralArray.push(array[startRow][i])
    }

    for(let i = startRow + 1; i <= endRow; i++){
      spiralArray.push(array[i][endCol])
    }

    if(endRow > startRow) {
      for(let  i = endCol - 1; i >= startCol; i--) {
          spiralArray.push(array[endRow][i])
      }
    }

    if(endCol > startCol) {
        for(let i = endRow - 1; i >= startRow + 1; i-- ) {
          spiralArray.push(array[i][startCol])
        }
    }

    startCol++
    endCol--
    startRow++
    endRow--
  }
    
return spiralArray
}
// O(n) time | O(n) space
console.log(spiralTraverse([
    [1, 3, 2, 5, 4, 7, 6]
  ]))