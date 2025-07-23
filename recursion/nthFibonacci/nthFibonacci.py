# recursive version:
# O(2^n) time | O(n) space

# def getNthFib(n):
#     if n == 2:
#         return 1
#     elif n == 1:
#         return 0
#     else:
#         return getNthFib(n - 2) + getNthFib(n - 1)

# recusrive version with memoize
# O(n) time | O(n) space


# def getNthFib(n, memoize={1: 0, 2: 1}):
#     if n in memoize:
#         return memoize[n]
#     else:
#         memoize[n] = getNthFib(n - 2, memoize) + getNthFib(n - 1, memoize)
#         return memoize[n]


#  O(n) time | O(1) space
def getNthFib(n):
    lastTwo = [0, 1]
    count = 2
    while count < n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        count += 1

    return lastTwo[1] if n > 1 else lastTwo[0]


# Example usage:
print(getNthFib(4))  # Output: 2
print(getNthFib(6))  # Output: 5
print(getNthFib(10))  # Output: 34
