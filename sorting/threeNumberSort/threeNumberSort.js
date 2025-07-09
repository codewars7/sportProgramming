// O(n) time | O(1) space

function threeNumberSort(array, order) {
    let firstVal = order[0]
    let secondVal = order[1]
    let firstIdx = 0, secondIdx = 0, thirdIdx = array.length - 1

    while (secondIdx <= thirdIdx) {
        let val = array[secondIdx]

        if(val === firstVal) {
            [array[firstIdx], array[secondIdx]] = [array[secondIdx], array[firstIdx]]
            firstIdx++
            secondIdx++
        } else if(val === secondVal) {
            secondIdx++
        } else {
            [array[secondIdx], array[thirdIdx]] = [array[thirdIdx], array[secondIdx]]
            thirdIdx--
        }
    }

    return array
}

// Example usage:
const array = [2, 1, 2, 3, 1, 3]
const order = [2, 1, 3]
console.log(threeNumberSort(array, order)) // Output: [2, 2, 1, 1, 3, 3]