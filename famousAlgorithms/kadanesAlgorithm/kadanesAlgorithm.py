#  O(n) time | O(1) space
#  This function implements Kadane's Algorithm to find the maximum sum of a contiguous subarray
#  in a given array of integers.


def kadanesAlgorithm(array):
    max = array[0]
    currentMax = array[0]
    for i in range(1, len(array)):
        if currentMax + array[i] > array[i]:
            currentMax = currentMax + array[i]
        else:
            currentMax = array[i]

        if currentMax > max:
            max = currentMax

    return max


# Example usage:
if __name__ == "__main__":
    print(
        kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    )  #  return 19
    print(kadanesAlgorithm([-2, -3, -1, -5]))  #  return -1
    print(kadanesAlgorithm([1, 2, 3, 4, 5]))  #  return 15
    print(kadanesAlgorithm([-1, -2, -3, -4, -5]))  #  return -1
