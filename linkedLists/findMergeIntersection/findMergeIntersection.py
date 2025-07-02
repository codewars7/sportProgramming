# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def mergingLinkedLists(linkedListOne, linkedListTwo):
    first_set = set()
    seen = set()
    result_values = []

    # Build first set from linkedListOne
    while linkedListOne:
        first_set.add(linkedListOne.value)
        linkedListOne = linkedListOne.next

    # Check linkedListTwo for matches, maintain order
    while linkedListTwo:
        if linkedListTwo.value in first_set and linkedListTwo.value not in seen:
            seen.add(linkedListTwo.value)
            result_values.append(linkedListTwo.value)
        linkedListTwo = linkedListTwo.next

    # Build result linked list
    merged_head = None
    tail = None
    for val in result_values:
        new_node = LinkedList(val)
        if not merged_head:
            merged_head = new_node
            tail = new_node
        else:
            tail.next = new_node
            tail = new_node

    return merged_head


# Example usage:
if __name__ == "__main__":
    # Create first linked list: 1 -> 2 -> 3
    ll1 = LinkedList(1)
    ll1.next = LinkedList(2)
    ll1.next.next = LinkedList(3)

    # Create second linked list: 2 -> 3 -> 4
    ll2 = LinkedList(2)
    ll2.next = LinkedList(3)
    ll2.next.next = LinkedList(4)

    merged_list = mergingLinkedLists(ll1, ll2)

    # Print merged linked list
    while merged_list:
        print(merged_list.value, end=" -> ")
        merged_list = merged_list.next
    print("None")
