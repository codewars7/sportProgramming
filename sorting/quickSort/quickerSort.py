import timeit
def quicksort_comprehension(arr):
    """
    Sorts a list using the Quicksort algorithm with list comprehensions.

    Args:
        arr: The list to be sorted.

    Returns:
        A new list containing the sorted elements.
    """
    if len(arr) <= 1:
        return arr  # Base case: A list with 0 or 1 element is already sorted

    pivot = arr[0]  # Choose the first element as the pivot
    
    # Create two sub-lists using list comprehensions:
    # 'less' contains elements smaller than the pivot
    # 'greater' contains elements greater than or equal to the pivot
    less = [x for x in arr[1:] if x < pivot]
    greater = [x for x in arr[1:] if x >= pivot]

    # Recursively sort the sub-lists and combine them with the pivot
    return quicksort_comprehension(less) + [pivot] + quicksort_comprehension(greater)

# Example usage:
my_list = [3, 6, 8, 10, 1, 2, 1] * 4  
# sorted_list = timeit.timeit("quicksort_comprehension(my_list)", setup="from __main__ import my_function", number=100000)
sorted_list = timeit.timeit("quicksort_comprehension([3, 6, 8, 10, 1, 2, 1] * 4)", setup="from __main__ import quicksort_comprehension", number=100000)

print(f"Original list: {my_list}")
print(f"Sorted list: {sorted_list}")