def to_jaden_case(string):
    words = string.split(" ")
    capital_words = [word.capitalize() for word in words]
    return " ".join(capital_words)