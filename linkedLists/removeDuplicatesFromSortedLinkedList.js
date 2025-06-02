// O(n) time | O(1) space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromSortedLinkedList(linkedList) {
  let node = linkedList;
  while (node !== null && node.next !== null) {
    if (node.value === node.next.value) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return linkedList;
}

// Example usage:
const head = new LinkedList(1);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(3);
head.next.next.next.next = new LinkedList(3); 

const updatedList = removeDuplicatesFromSortedLinkedList(head);
console.log(updatedList); // Output: 1 -> 2 -> 3