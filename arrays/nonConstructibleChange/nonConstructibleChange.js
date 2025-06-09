// O(n log n) time complexity
// O(1) space complexity

function nonConstructibleChange(coins) {
  const sortedCoins = coins.sort((a, b) => a - b)
  let coinSum = 0

  for ( const coin of sortedCoins) {
    if (coinSum + 1 < coin) {
      return coinSum  + 1
    }
    coinSum += coin
   }

  return coinSum + 1
 }

// Example usage:
const coins = [1, 2, 5]
console.log(nonConstructibleChange(coins)) // Output: 4
