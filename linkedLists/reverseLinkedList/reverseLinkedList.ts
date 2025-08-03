
// O(n) time | O(1) space
// This code defines a simple linked list and a function to reverse it in place.

class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head: LinkedList) {
  let p1: LinkedList | null = null
  let p2: LinkedList | null = head
    while (p2) {
      const p3: LinkedList | null = p2.next
      p2.next = p1
      p1 = p2
      p2 = p3
    }
  return p1;
}

// Example usage:
const head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(5);
const reversedHead = reverseLinkedList(head);
console.log(reversedHead); // Output: 5 -> 4 -> 3 -> 2 -> 1 -> null