// O(V + E) time complexity, where V is the number of vertices (nodes) and E is the number of edges (connections).
// O(V) space complexity for the recursion stack and the output array.

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name)
    for (let child of this.children) {
      child.depthFirstSearch(array)
    }
    return array
  }
}

// Example usage:
const root = new Node("A");


root.addChild("B")
    .addChild("C")
    .children[0].addChild("D")
    .addChild("E");
const result = root.depthFirstSearch([]);
console.log(result); // Output: ["A", "B", "D", "E", "C"]
