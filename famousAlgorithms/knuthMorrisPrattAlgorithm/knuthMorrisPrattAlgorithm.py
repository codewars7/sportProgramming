#  O(n + m), O(m) space
def buildLPS(substring):
    lps = [0] * len(substring)
    length = 0  # length of the previous longest prefix suffix

    i = 1
    while i < len(substring):
        if substring[i] == substring[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps


def knuthMorrisPrattAlgorithm(string, substring):
    lps = buildLPS(substring)

    i = 0  # index for string
    j = 0  # index for substring

    while i < len(string):
        if string[i] == substring[j]:
            i += 1
            j += 1

        if j == len(substring):
            return True  # Match found
        elif i < len(string) and string[i] != substring[j]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return False  # No match found


#  Example usage:
if __name__ == "__main__":
    text = "ababcabcabababd"
    pattern = "ababd"
    print(knuthMorrisPrattAlgorithm(text, pattern))  # Output: True
