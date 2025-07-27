#  Write a function that takes an array of numbers and/or arrays, and returns the product sum of the array.
#  The product sum is defined as the sum of all numbers in the array, where each nested array contributes to the sum multiplied by its depth in the array.


#  O (n) time | O(d) space, where n is the number of elements in the array and d is the depth of the nested arrays
def productSum(array, multiplier=1):
    total = 0
    for num in array:
        if type(num) == int:
            total += num
        else:
            total = total + productSum(num, multiplier + 1)
    return total * multiplier


# Example usage:
arr = [1, 2, [-5, 7, [2, 3]], [4, [5, 6]]]
print(productSum(arr))  # Output: 111
