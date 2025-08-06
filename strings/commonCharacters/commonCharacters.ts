// Find common characters in an array of strings
// O(n*m) time | O(m) space

function commonCharacters(strings: string[]) {
let fSet: Set<string> = new Set(strings[0])

  for (let i = 1; i < strings.length; i++) {
    const set: Set<string> = new Set(strings[i])
    fSet = new Set([...fSet].filter((char) => set.has(char)))
  }

  return Array.from(fSet)
}

// Example usage:
const strings = ["bella", "label", "roller"]
console.log(commonCharacters(strings)) // Output: ['e', 'l']