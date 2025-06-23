# O(n) time | O(1) space
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeKthNodeFromEnd(head, k):
    start = head
    finish = head
    count = 1

    while count <= k and finish is not None:
        finish = finish.next
        count += 1

    if finish is None:
        head.value = start.next.value
        head.next = start.next.next
        return

    while finish.next is not None:
        start = start.next
        finish = finish.next

    start.next = start.next.next


# Example usage:
head = LinkedList(1)
head.next = LinkedList(2)
head.next.next = LinkedList(3)
head.next.next.next = LinkedList(4)
head.next.next.next.next = LinkedList(5)
removeKthNodeFromEnd(head, 2)
current = head
while current is not None:
    print(current.value)
    current = current.next
