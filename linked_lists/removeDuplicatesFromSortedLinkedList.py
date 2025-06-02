# O(n) time | O(1) space
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeDuplicatesFromSortedLinkedList(linkedList):
    currentNode = linkedList
    while currentNode is not None:
        nextDistinctNode = currentNode.next
        while (
            nextDistinctNode is not None and nextDistinctNode.value == currentNode.value
        ):
            nextDistinctNode = nextDistinctNode.next
        currentNode.next = nextDistinctNode
        currentNode = nextDistinctNode
    return linkedList


# Example usage:
if __name__ == "__main__":
    # Creating a linked list with duplicates: 1 -> 1 -> 2 -> 3 -> 3
    head = LinkedList(1)
    head.next = LinkedList(1)
    head.next.next = LinkedList(2)
    head.next.next.next = LinkedList(3)
    head.next.next.next.next = LinkedList(3)

    # Removing duplicates
    removeDuplicatesFromSortedLinkedList(head)

    # Printing the modified linked list
    current = head
    while current:
        print(current.value, end=" -> ")
        current = current.next
    print("None")
