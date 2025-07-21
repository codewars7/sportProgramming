# O(n^2) time | O(n) space


def sortStack(stack):
    if not stack:
        return stack

    top = stack.pop()
    sortStack(stack)

    insertInSortedOrder(stack, top)
    return stack


def insertInSortedOrder(stack, value):
    if not stack or stack[len(stack) - 1] <= value:
        stack.append(value)
        return

    top = stack.pop()

    insertInSortedOrder(stack, value)

    stack.append(top)


# Example usage:
if __name__ == "__main__":
    my_stack = [34, 3, 31, 98, 92, 23]
    sorted_stack = sortStack(my_stack)
    print("Sorted Stack:", sorted_stack)
    # Output: Sorted Stack: [3, 23, 31, 34, 92, 98]
