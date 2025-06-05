// Implemention of a new stack that supports push, pop, peek, getMin, and getMax
// O(n) space complexity 

class MinMaxStack {
  arr = []
  min = []
  max = []
  
  peek() {
    const peekIndex = this.arr.length -1
    return this.arr[peekIndex]
  }

  pop() {
    const removedNumber = this.arr.pop()
    
    this.max.pop()
    this.min.pop()
    
    return removedNumber
  }

  push(number) {
    this.arr.push(number)
    if(this.max.length === 0 || number > this.max[this.max.length - 1]) {
      this.max.push(number)
    } else {
      this.max.push(this.max[this.max.length - 1])
    }
    if(this.min.length === 0 || number < this.min[this.min.length -1]) {
      this.min.push(number)
    } else {
      this.min.push(this.min[this.min.length - 1])
    }
  }

  getMin() {
    const minIndex = this.min.length -1
    return this.min[minIndex]

  }

  getMax() {
    const maxIndex = this.max.length -1
    return this.max[maxIndex]
  }
}

// Example usage
const stack = new MinMaxStack();
stack.push(5);
stack.push(3);      
stack.push(7);
console.log(stack.peek()); // 7
console.log(stack.getMin()); // 3
console.log(stack.getMax()); // 7
stack.pop();
console.log(stack.peek()); // 3
console.log(stack.getMin()); // 3
console.log(stack.getMax()); // 5