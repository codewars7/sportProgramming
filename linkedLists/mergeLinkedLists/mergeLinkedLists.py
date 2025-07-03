#  O(n + m) time | O(1) space


class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def mergeLinkedLists(headOne, headTwo):
    dummy = LinkedList(0)
    current = dummy

    while headOne and headTwo:
        if headOne.value < headTwo.value:
            current.next = headOne
            headOne = headOne.next
        else:
            current.next = headTwo
            headTwo = headTwo.next
        current = current.next

    current.next = headOne if headOne else headTwo

    return dummy.next


# Example usage:
if __name__ == "__main__":
    # Create first linked list: 1 -> 3 -> 5
    headOne = LinkedList(1)
    headOne.next = LinkedList(3)
    headOne.next.next = LinkedList(5)

    # Create second linked list: 2 -> 4 -> 6
    headTwo = LinkedList(2)
    headTwo.next = LinkedList(4)
    headTwo.next.next = LinkedList(6)

    mergedHead = mergeLinkedLists(headOne, headTwo)

    # Print merged linked list
    current = mergedHead
    while current:
        print(current.value, end=" -> ")
        current = current.next
    print("None")
# Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> None
