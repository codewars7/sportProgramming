# Find common characters in an array of strings
# O(n*m) time | O(m) space
def commonCharacters(strings):
    # Write your code here.
    fSet = set(strings[0])
    for i in range(1, len(strings)):
        fSet = fSet.intersection(set(strings[i]))
        
    return list(fSet)

# Example usage:
strings = ["bella", "label", "roller"]
print(commonCharacters(strings)) # Output: ['e', 'l']