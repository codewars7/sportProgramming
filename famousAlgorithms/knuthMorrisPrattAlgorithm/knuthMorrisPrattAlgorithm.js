// Simple version of KMP, you can see real one in python file
// O(n * m), O(n) space 
function simplifiedVersionOfKMP(str, substr) {
    for (var i = 0; i <= str.length - substr.length; i++) {
        if (search(str.slice(i), substr)) {
            return true;
        }
    }
    return false;
}
function search(str, substr) {
    for (var i = 0; i < substr.length; i++) {
        if (i >= str.length || str[i] !== substr[i]) {
            return false;
        }
    }
    return true;
}
// Example usage:
var text = "ababcabcabababd";
var pattern = "ababd";
console.log(simplifiedVersionOfKMP(text, pattern)); // Output: true
