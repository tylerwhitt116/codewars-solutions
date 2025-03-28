def is_isogram(string):
    s = string.lower()
    
    letters_in_words = set()
    
    for char in s:
        if char in letters_in_words:
            return False
        letters_in_words.add(char)
    return True