#  O(n) time | O(n) space
def missingNumbers(nums):
    includedNums = set(nums)

    result = []
    for num in range(1, len(nums) + 3):
        if num not in includedNums:
            result.append(num)

    return result


# Example usage:
if __name__ == "__main__":
    nums = [1, 2, 4]
    print(missingNumbers(nums))  # Output: [3, 5]

    nums = [3, 7, 1, 2, 8, 4, 5]
    print(missingNumbers(nums))  # Output: [6, 9]

    nums = []
    print(missingNumbers(nums))  # Output: [1, 2]
