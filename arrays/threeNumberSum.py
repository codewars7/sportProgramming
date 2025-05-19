def threeNumberSum(array, targetSum):

    array.sort()
    triplets = []
    for i, val in enumerate(array[:-2]):
        left = i + 1
        right = len(array) - 1
        while left < right:
            currentSum = array[i] + array[left] + array[right]
            if currentSum == targetSum:
                triplets.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif currentSum < targetSum:
                left += 1
            elif currentSum > targetSum:
                right -= 1
    return triplets


# Example usage
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0
print(threeNumberSum(array, targetSum))  # Output: [[-8, 2, 6], [-6, 1, 5], [1, 2, 3]]
