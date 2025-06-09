# O(nlogn) time | O(1) space


def nonConstructibleChange(coins):
    coins.sort()

    currentChangeCreated = 0
    for coin in coins:
        if coin > currentChangeCreated + 1:
            return currentChangeCreated + 1

        currentChangeCreated += coin

    return currentChangeCreated + 1


# Example usage:
if __name__ == "__main__":
    coins = [1, 2, 5]
    print(nonConstructibleChange(coins))  # Output: 4

    coins = [1, 1, 1, 1]
    print(nonConstructibleChange(coins))  # Output: 5

    coins = [5, 7, 1, 1, 2, 3]
    print(nonConstructibleChange(coins))  # Output: 20
