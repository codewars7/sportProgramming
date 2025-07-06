# O(n^2) time O(1) space


def insertionSort(array):
    for i in range(1, len(arr)):
        j = i
        while j > 0 and array[j] < array[j - 1]:
            swap(j, j - 1, array)
            j -= 1
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


# Example usage:
arr = [5, 2, 9, 1, 5, 6]
print(insertionSort(arr))  # Output: [1, 2, 5, 5, 6, 9]
