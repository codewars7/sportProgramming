#  O(1) time | O(n) space
class MinMaxStack:
    def __init__(self):
        self.minMaxStack = []
        self.stack = []

    def peek(self):
        return self.stack[len(self.stack) - 1]

    def pop(self):
        self.minMaxStack.pop()
        return self.stack.pop()

    def push(self, number):
        newMinMax = {"min": number, "max": number}
        if len(self.minMaxStack):
            currentMinMax = self.minMaxStack[len(self.minMaxStack) - 1]
            newMinMax["min"] = min(currentMinMax["min"], number)
            newMinMax["max"] = max(currentMinMax["max"], number)

        self.stack.append(number)
        self.minMaxStack.append(newMinMax)

    def getMin(self):
        return self.minMaxStack[len(self.minMaxStack) - 1]["min"]

    def getMax(self):
        return self.minMaxStack[len(self.minMaxStack) - 1]["max"]


# Example usage:
if __name__ == "__main__":
    stack = MinMaxStack()
    stack.push(5)
    stack.push(3)
    stack.push(7)
    print("Min:", stack.getMin())  # Output: Min: 3
    print("Max:", stack.getMax())  # Output: Max: 7
    print("Peek:", stack.peek())  # Output: Peek: 7
    print("Pop:", stack.pop())  # Output: Pop: 7
    print("Min after pop:", stack.getMin())  # Output: Min after pop: 3
    print("Max after pop:", stack.getMax())  # Output: Max after pop: 5
    print("Peek after pop:", stack.peek())  # Output: Peek after pop: 3
