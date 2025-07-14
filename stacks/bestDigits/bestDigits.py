# O(n) time | O(n) space
def bestDigits(number, numDigits):
    stack = []

    for digit in number:
        # Keep popping smaller digits from the stack if a bigger one comes
        while numDigits > 0 and stack and stack[-1] < digit:
            stack.pop()
            numDigits -= 1
        stack.append(digit)

    # Remove leftover digits from the end
    if numDigits > 0:
        stack = stack[:-numDigits]

    return "".join(stack)


# Example usage:
print(bestDigits("1432219", 3))  # Output: "4329"
