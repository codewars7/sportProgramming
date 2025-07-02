// O(n + m) time complexity, O(n) space complexity

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let firstSet = new Set()
  let seenInBoth = new Set()

  while(linkedListOne) {
    firstSet.add(linkedListOne.value)
    linkedListOne = linkedListOne.next
  }

  while(linkedListTwo) {
    if(firstSet.has(linkedListTwo.value)){
      seenInBoth.add(linkedListTwo.value)
    }
    linkedListTwo = linkedListTwo.next
  }

  let mergedList = null
  let tail = null
  for (const val of seenInBoth) {
    let newNode = new LinkedList(val)
    if(mergedList === null) {
      mergedList = newNode
      tail = mergedList
    } else {
      tail.next = newNode
      tail = newNode
    }
  }
  return mergedList
}

// exmaple usage
const list1 = new LinkedList(1);
list1.next = new LinkedList(2);
list1.next.next = new LinkedList(3);

const list2 = new LinkedList(2);
list2.next = new LinkedList(3);
const mergedList = mergingLinkedLists(list1, list2);

console.log(mergedList); // Output: LinkedList with values 2 -> 3    