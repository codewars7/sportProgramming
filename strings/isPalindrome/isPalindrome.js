// O(n) time O(1) space
function isPalindrome(string) {
  let startPointer = 0
  let endPointer = string.length - 1
  while(startPointer < endPointer) {
    if(string[startPointer] !== string[endPointer]) {
      return false
    }
    startPointer++
    endPointer--
  }
  return true
}

// Example usage:
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("hello")) // false