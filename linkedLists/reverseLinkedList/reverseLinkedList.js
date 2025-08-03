// O(n) time | O(1) space
// This code defines a simple linked list and a function to reverse it in place.
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedList;
}());
function reverseLinkedList(head) {
    var p1 = null;
    var p2 = head;
    while (p2) {
        var p3 = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p3;
    }
    return p1;
}
// Example usage:
var head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(5);
var reversedHead = reverseLinkedList(head);
console.log(reversedHead); // Output: 5 -> 4 -> 3 -> 2 -> 1 -> null
