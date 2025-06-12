#  O(V + E) time | O(V) space
# where V is the number of vertices (nodes) and E is the number of edges (connections)


class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array


# Example usage:
root = Node("A")
root.addChild("B").addChild("C")
root.children[0].addChild("D").addChild("E")
root.children[1].addChild("F")
result = root.depthFirstSearch([])
print(result)
