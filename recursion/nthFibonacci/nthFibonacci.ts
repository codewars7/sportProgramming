// O(n) time | O(1) space

function getNthFib(n: number) {
  const lastTwo: [number, number] = [0, 1]
  let count: number = 2
  while(count < n){
    const nextFib: number = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    count++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}

// Example usage:
console.log(getNthFib(6)); // Output: 5
console.log(getNthFib(10)); // Output: 34