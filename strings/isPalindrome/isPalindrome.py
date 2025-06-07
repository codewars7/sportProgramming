#  O(n) time O(1) space
def isPalindrome(string):
    startPointer = 0
    endPointer = len(string) - 1

    while startPointer < endPointer:
        if string[startPointer] != string[endPointer]:
            return False
        startPointer += 1
        endPointer -= 1
    return True


# Example usage:
if __name__ == "__main__":
    testString = "racecar"
    print(f"Is '{testString}' a palindrome? {isPalindrome(testString)}")

    testString2 = "hello"
    print(f"Is '{testString2}' a palindrome? {isPalindrome(testString2)}")
