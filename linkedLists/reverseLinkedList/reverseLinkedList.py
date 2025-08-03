# O(n) time | O(1) space
# This function reverses a singly linked list in place.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

    #  the idea is to use three pointers: Preserve, Repoint, Move
    def reverseLinkedList(head):
        p1, p2  = None, head
        while p2 is not None:
            p3 = p2.next
            p2.next = p1
            p1 = p2
            p2 = p3
        return p1


# Example usage:
if __name__ == "__main__":
    # Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> None
    head = LinkedList(1)
    head.next = LinkedList(2)
    head.next.next = LinkedList(3)
    head.next.next.next = LinkedList(4)
    head.next.next.next.next = LinkedList(5)

    # Reverse the linked list
    reversed_head = LinkedList.reverseLinkedList(head)

    # Print the reversed linked list
    current = reversed_head
    while current is    not None:
        print(current.value, end=" -> ")
        current = current.next
    print("None")
# Output: 5 -> 4 -> 3 -> 2 -> 1 -> None