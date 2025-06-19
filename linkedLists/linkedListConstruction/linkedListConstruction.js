class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    // step 1
    remove(node) {
        if(node === this.head) {
            this.head = this.head.next
        }
        if(node === this.tail) {
            this.tail = this.tail.prev
        }
        this.removeNodeBindings(node)
    }
    // step 2
    removeNodeBindings(node) {
        if(node.prev) {
            node.prev.next = node.next
        }
        if(node.next) {
            node.next.prev = node.prev
        }
        node.next = null
        node.prev = null
    }

    // step 3
    removeNodesWithValue(val){
        let node = this.head
        while(node !== null) {
            const nextNode = node.next
            const nodeToRemove = node
            if(node.value === val){
              this.remove(nodeToRemove)
            }
            node = nextNode
        }
    }

    // step 4
    containsNodeWithValue(val) {
        let node = this.head
        while (node) {
            if(node.value === val){
                return true
            }
            node = node.next
        }
        return false
    }

    // step 5
    insertBefore(node, nodeToInsert) {
        if(nodeToInsert === this.head && nodeToInsert === this.tail) return
        this.remove(nodeToInsert)
        nodeToInsert.prev = node.prev
        nodeToInsert.next = node
        if(node.prev === null) {
            this.head = nodeToInsert
        }else {
            node.prev.next = nodeToInsert
        }
        node.prev = nodeToInsert
    }

    // step 6
    insertAfter(node, nodeToInsert) {
        if(nodeToInsert === this.head && nodeToInsert === this.tail) return
        this.remove(nodeToInsert)
        nodeToInsert.next = node.next
        nodeToInsert.prev = node
        if(node.next === null) {
            this.tail = nodeToInsert
        } else {
            node.next.prev = nodeToInsert
        }
        node.next = nodeToInsert
    }

    // step 7
    setHead(node) {
        if(this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.remove(node)
            this.insertBefore(this.head, node)
        }

    }

    // step 8
    setTail(node) {
        if(this.tail === null) {
            this.head = node
            this.tail = node
        } else {
            this.remove(node)
            this.insertAfter(this.tail, node)
        }
    }

    // step 9
    insertAtPosition(position, nodeToInsert) {
        if(position === 1) {
            this.setHead(nodeToInsert)
            return
        }
        let node = this.head
        let currentPosition = 1
        while(node !== null && currentPosition !==position) {
            currentPosition++
            node = node.next
        }
        if (node === null) {
            this.setTail(nodeToInsert)
        } else {
            this.insertBefore(node, nodeToInsert)
        }
    }
}

// Example usage:
const list = new DoublyLinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
list.setHead(node1);
list.insertAfter(node1, node2);
list.insertAtPosition(2, node3); // Insert node3 at position 2
console.log(list.head.value); // 1
console.log(list.head.next.value); // 3
console.log(list.head.next.next.value); // 2
console.log(list.tail.value); // 2
console.log(list.containsNodeWithValue(3)); // true
console.log(list.containsNodeWithValue(4)); // false
list.removeNodesWithValue(2); // Remove all nodes with value 2
console.log(list.tail.value); // 3
console.log(list.head.next); // null (since 3 is now the only node)
list.setTail(node2); // Set node2 as the tail
console.log(list.tail.value); // 2
list.setHead(node2); // Set node2 as the head
console.log(list.head.value); // 2
console.log(list.tail.value); // 3
list.insertBefore(node2, node1); // Insert node1 before node2
console.log(list.head.value); // 1
console.log(list.head.next.value); // 2
console.log(list.head.next.next.value); // 3
list.insertAfter(node2, node3); // Insert node3 after node2
console.log(list.tail.value); // 3
console.log(list.tail.prev.value); // 2
console.log(list.tail.prev.prev.value); // 1
list.remove(node1); // Remove node1
console.log(list.head.value); // 2
console.log(list.head.next.value); // 3
console.log(list.tail.value); // 3
console.log(list.containsNodeWithValue(1)); // false (node1 has been removed)
console.log(list.containsNodeWithValue(2)); // true
console.log(list.containsNodeWithValue(3)); // true
list.insertAtPosition(1, node1); // Insert node1 at position 1
console.log(list.head.value); // 1
console.log(list.head.next.value); // 2
console.log(list.head.next.next.value); // 3
list.insertAtPosition(3, node2); // Insert node2 at position 3
console.log(list.head.next.next.value); // 2
console.log(list.tail.value); // 2
console.log(list.tail.prev.value); // 3