// O(n) time | O(n) space

function caesarCipherEncryptor(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let resultArr = []

  for(let i = 0; i < string.length; i++) {
    let indexOfLetter = alphabet.indexOf(string[i])
    let encriptedIndex = indexOfLetter + key

    if(encriptedIndex >= alphabet.length) {
         encriptedIndex = encriptedIndex % alphabet.length 
    } 
    
    resultArr.push(alphabet[encriptedIndex])
  }
  return resultArr.join('')
}

// Example usage:
console.log(caesarCipherEncryptor('xyz', 2)); // Output: 'zab'
console.log(caesarCipherEncryptor('abc', 3)); // Output: 'def'
console.log(caesarCipherEncryptor('hello', 5)); // Output: 'mjqqt'
console.log(caesarCipherEncryptor('xyz', 28)); // Output: 'zab' (28 % 26 = 2