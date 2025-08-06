// Find common characters in an array of strings
// O(n*m) time | O(m) space
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function commonCharacters(strings) {
    var fSet = new Set(strings[0]);
    var _loop_1 = function (i) {
        var set = new Set(strings[i]);
        fSet = new Set(__spreadArray([], fSet, true).filter(function (char) { return set.has(char); }));
    };
    for (var i = 1; i < strings.length; i++) {
        _loop_1(i);
    }
    return Array.from(fSet);
}
// Example usage:
var strings = ["bella", "label", "roller"];
console.log(commonCharacters(strings)); // Output: ['e', 'l']
