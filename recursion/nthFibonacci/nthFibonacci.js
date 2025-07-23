// O(n) time | O(1) space
function getNthFib(n) {
    var lastTwo = [0, 1];
    var count = 2;
    while (count < n) {
        var nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        count++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
// Example usage:
console.log(getNthFib(6)); // Output: 5
console.log(getNthFib(10)); // Output: 34
