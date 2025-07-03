// O(n + m) time | O(1) space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  const dummyLS = new LinkedList(0)
  let current = dummyLS

  while(headOne && headTwo) {
    if(headOne.value < headTwo.value) {
      current.next = headOne
      headOne = headOne.next
    } else {
      current.next = headTwo
      headTwo = headTwo.next
    }
    current = current.next
  }

  if(headOne){
    current.next = headOne
  } else {
    current.next = headTwo
  }

  return dummyLS.next
}

//  example usage
const list1 = new LinkedList(1);
list1.next = new LinkedList(3);
list1.next.next = new LinkedList(5);
const list2 = new LinkedList(2);
list2.next = new LinkedList(4);
list2.next.next = new LinkedList(6);
const mergedList = mergeLinkedLists(list1, list2);
let current = mergedList;
while (current) {
  console.log(current.value);
  current = current.next;
}
// Output: 1, 2, 3, 4, 5, 6
