# O(n) time | O(n) space
# This function simulates the collision of asteroids in a list.
# Positive values represent asteroids moving to the right,
# and negative values represent asteroids moving to the left.
# When two asteroids collide, the larger one survives, and the smaller one is destroyed.
# If they are of equal size, both are destroyed.
# The function returns a list of surviving asteroids after all collisions.


def collidingAsteroids(asteroids):
    resultStack = []
    for asteroid in asteroids:
        if asteroid > 0:
            resultStack.append(asteroid)
            continue

        while True:
            if len(resultStack) == 0 or resultStack[-1] < 0:
                resultStack.append(asteroid)
                break

            asteroidSize = abs(asteroid)
            if resultStack[-1] > asteroidSize:
                break

            if resultStack[-1] == asteroidSize:
                resultStack.pop()
                break

            resultStack.pop()

    return resultStack


# Example usage:
if __name__ == "__main__":
    asteroids = [5, 10, -5]
    print(collidingAsteroids(asteroids))  # Output: [5, 10]

    asteroids = [8, -8]
    print(collidingAsteroids(asteroids))  # Output: []

    asteroids = [10, 2, -5]
    print(collidingAsteroids(asteroids))  # Output: [10]
