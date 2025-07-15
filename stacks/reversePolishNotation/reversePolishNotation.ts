// O(n) time | O(n) space

function reversePolishNotation(tokens: string[]) {

  const stack: number[] = []
  for (const token of tokens) {
    if(token === "+"){
      stack.push(stack.pop()! + stack.pop()!)
    } 
    else if(token === "-"){
      const firstNum = stack.pop()!
      stack.push(stack.pop()! - firstNum)
    } 
    else if(token === "*"){
      stack.push(stack.pop()! * stack.pop()!)
    } 
    else if(token === "/"){
      const firstNum = stack.pop()!
      stack.push(Math.trunc(stack.pop()! / firstNum))
    } else {
      stack.push(Number(token))
    }
  }

  return stack.pop()!
  
}

// Example usage:
const tokens = ["2", "1", "+", "3", "*"];
console.log(reversePolishNotation(tokens)); // Output: 9
const tokens2 = ["4", "13", "5", "/", "+"];
console.log(reversePolishNotation(tokens2)); // Output: 6
