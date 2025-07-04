# O(n^2) time O(1) space
def bubbleSort(array):
    sort = True
    counter = 0
    while sort:
        sort = False
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                sort = True
        counter += 1
    return array


# Example usage:
if __name__ == "__main__":
    sample_array = [64, 34, 25, 12, 22, 11, 90]
    sorted_array = bubbleSort(sample_array)
    print("Sorted array:", sorted_array)
    # Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]
    # This will sort the array in ascending order using bubble sort algorithm.
# The bubble sort algorithm repeatedly steps through the list, compares adjacent elements,
# and swaps them if they are in the wrong order. The pass through the list is repeated
# until the list is sorted. The algorithm gets its name from the way larger elements "bubble
# to the top" of the list.
