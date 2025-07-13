// O(n) time | O(1) space
function kadanesAlgorithm(array) {
    var max = array[0];
    var currentMax = array[0];
    for (var i = 1; i < array.length; i++) {
        currentMax = Math.max(array[i], currentMax + array[i]);
        max = Math.max(max, currentMax);
    }
    return max;
}
// Example usage:
var input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadanesAlgorithm(input)); // Output: 6
