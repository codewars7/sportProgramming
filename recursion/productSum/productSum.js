// Write a function that takes an array of numbers and/or arrays, and returns the product sum of the array.
// The product sum is defined as the sum of all numbers in the array, where each nested array contributes to the sum multiplied by its depth in the array.
function productSum(array, multiplier) {
    if (multiplier === void 0) { multiplier = 1; }
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (typeof num === 'number') {
            sum += num;
        }
        else {
            sum += productSum(num, multiplier + 1);
        }
    }
    return sum * multiplier;
}
// Example usage: 
var arr = [1, 2, [3, 4], [5, [6, 7]]];
console.log(productSum(arr)); // Output: 105
