#  O(n^2) time, O(1) space


def selectionSort(array):

    for i in range(len(array)):
        smallestIndex = i
        for j in range(i, len(array)):
            if array[j] < array[smallestIndex]:
                smallestIndex = j

        if smallestIndex != i:
            swap(i, smallestIndex, array)
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


# Example usage:
if __name__ == "__main__":
    arr = [8, 5, 2, 9, 5, 6, 3]
    print("Original array:", arr)
    sorted_arr = selectionSort(arr)
    print("Sorted array:", sorted_arr)
