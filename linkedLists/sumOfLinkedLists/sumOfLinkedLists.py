#  O(max(m, n)) time | O(max(m, n)) space
# where m and n are the lengths of the two linked lists.


# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def sumOfLinkedLists(linkedListOne, linkedListTwo):
    newLinkedListHeadPointer = LinkedList(0)
    currentNode = newLinkedListHeadPointer
    carry = 0

    nodeOne = linkedListOne
    nodeTwo = linkedListTwo

    while nodeOne is not None or nodeTwo is not None or carry != 0:
        valueOne = nodeOne.value if nodeOne is not None else 0
        valueTwo = nodeTwo.value if nodeTwo is not None else 0
        sumOfValues = valueOne + valueTwo + carry

        newValue = sumOfValues % 10
        newNode = LinkedList(newValue)
        currentNode.next = newNode
        currentNode = newNode

        carry = sumOfValues // 10
        nodeOne = nodeOne.next if nodeOne is not None else None
        nodeTwo = nodeTwo.next if nodeTwo is not None else None

    return newLinkedListHeadPointer.next


# example usage
linkedListOne = LinkedList(2)
linkedListOne.next = LinkedList(4)
linkedListOne.next.next = LinkedList(3)
linkedListTwo = LinkedList(5)
linkedListTwo.next = LinkedList(6)
linkedListTwo.next.next = LinkedList(4)
result = sumOfLinkedLists(linkedListOne, linkedListTwo)
while result is not None:
    print(result.value, end=" -> ")
    result = result.next
