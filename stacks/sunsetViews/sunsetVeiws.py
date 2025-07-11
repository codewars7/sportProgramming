#  O(n) time | O(n) space


def sunsetViews(buildings, direction):
    tallest = 0
    list = []
    if direction == "WEST":
        for i, b in enumerate(buildings):
            if b > tallest:
                list.append(i)
                tallest = b
    if direction == "EAST":
        for i, b in enumerate(reversed(buildings)):
            if b > tallest:
                original_index = len(buildings) - 1 - i
                list.insert(0, original_index)
                tallest = b
    return list


# Example usage:
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "WEST"
print(sunsetViews(buildings, direction))  # Output: [0, 1]
buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "EAST"
print(sunsetViews(buildings, direction))  # Output: [1, 3, 6, 7]
