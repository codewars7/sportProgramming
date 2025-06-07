# O(n) time | O(n) space


def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26
    alphabet = list("abcdefghijklmnopqrstuvwxyz")

    for letter in string:
        newLetters.append(getNewLetter(letter, newKey, alphabet))

    return "".join(newLetters)


def getNewLetter(letter, key, alphabet):
    newIndex = (alphabet.index(letter) + key) % 26
    return alphabet[newIndex]


# Example usage:
if __name__ == "__main__":
    input_string = "xyz"
    input_key = 2
    encrypted_string = caesarCipherEncryptor(input_string, input_key)
    print(f"Encrypted string: {encrypted_string}")  # Output: "zab"
    input_string = "abc"
    input_key = 3
    encrypted_string = caesarCipherEncryptor(input_string, input_key)
    print(f"Encrypted string: {encrypted_string}")  # Output: "def"
    input_string = "hello"
    input_key = 5
    encrypted_string = caesarCipherEncryptor(input_string, input_key)
    print(f"Encrypted string: {encrypted_string}")  # Output: "mjqqt"
    input_string = "xyz"
    input_key = 26
    encrypted_string = caesarCipherEncryptor(input_string, input_key)
    print(f"Encrypted string: {encrypted_string}")  # Output: "xyz"
