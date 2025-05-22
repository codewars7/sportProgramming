def transposeMatrix(matrix):
    transposedMatrix = []
    for col in range(len(matrix[0])):
        newRow = []
        for row in range(len(matrix)):
            newRow.append(matrix[row][col])

        transposedMatrix.append(newRow)

    return transposedMatrix


print(
    transposeMatrix([[0, 4, 2, 42], [-1, 5, 3, 100], [-2, 6, -2, 30], [-3, 7, -3, -42]])
)
