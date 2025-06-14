# O(n) time | O(1) space


def hasSingleCycle(array):
    numElementsVisited = 0
    currentIdx = 0
    while numElementsVisited < len(array):
        if numElementsVisited > 0 and currentIdx == 0:
            return False
        numElementsVisited += 1
        currentIdx = getNextIdx(currentIdx, array)
    return currentIdx == 0


def getNextIdx(currentIdx, array):
    jump = array[currentIdx]
    nextIdx = (currentIdx + jump) % len(array)
    return nextIdx if nextIdx >= 0 else nextIdx + len(array)


# Example usage:
print(hasSingleCycle([2, 3, 1, -4, -4, 2]))  # True
print(hasSingleCycle([1, 1, 1, 1, 2]))  # False
print(hasSingleCycle([1, 2, 3, 4, 5, 6, 7, 8, 9]))  # False
