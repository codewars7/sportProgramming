# O(n) time | O(1) space


def threeNumberSort(array, order):
    first = second = third = 0

    for num in array:
        if num == order[0]:
            first += 1
        elif num == order[1]:
            second += 1
        elif num == order[2]:
            third += 1

    for i in range(len(array)):
        if first:
            array[i] = order[0]
            first -= 1
        elif second:
            array[i] = order[1]
            second -= 1
        elif third:
            array[i] = order[2]
            third -= 1

    return array


# Example usage:
if __name__ == "__main__":
    array = [2, 1, 2, 3, 1, 3]
    order = [1, 2, 3]
    sorted_array = threeNumberSort(array, order)
    print(sorted_array)  # Output: [1, 1, 2, 2, 3, 3]
    # This will sort the array in the order specified by 'order'
