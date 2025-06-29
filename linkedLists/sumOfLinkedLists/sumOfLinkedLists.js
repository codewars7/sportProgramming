// O(n + m) time | O(n + m) space
// where n and m are the lengths of the two linked lists.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let firstString = ''
  let secondString = ''

  while(linkedListOne) {
    firstString = linkedListOne.value + firstString
    linkedListOne = linkedListOne.next
  }

  while(linkedListTwo) {
    secondString = linkedListTwo.value + secondString
    linkedListTwo = linkedListTwo.next
  }

  const sum = Number(firstString) + Number(secondString)
  const sumArr = String(sum).split('')
  
  const buildList = sumArr => {
    if(sumArr.length === 0) return null

    const node = new LinkedList(Number(sumArr.pop()))
    node.next = buildList(sumArr)
    return node
  }
  
  if (sumArr.length) {
    return buildList(sumArr)
  } else {
    return new LinkedList()
  } 
}

// Example usage:
const list1 = new LinkedList(2);
list1.next = new LinkedList(4);
list1.next.next = new LinkedList(3);
const list2 = new LinkedList(5);
list2.next = new LinkedList(6);
list2.next.next = new LinkedList(4);
const result = sumOfLinkedLists(list1, list2);
let current = result;
while (current) {
  console.log(current.value);
  current = current.next;
}       

