class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function middleNode(linkedList) {
  let slowNode = linkedList
  let fastNode = linkedList

  while( fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next
    fastNode = fastNode.next.next
  }
  return slowNode
}

// Exmaple usage:

const list = new LinkedList(1);
list.next = new LinkedList(2);
list.next.next = new LinkedList(3);
list.next.next.next = new LinkedList(4);
list.next.next.next.next = new LinkedList(5);
const middle = middleNode(list);

console.log(middle.value); // Output: 3