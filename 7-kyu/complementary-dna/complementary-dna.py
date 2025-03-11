def DNA_strand(dna):
    str = []
    for c in dna:
        if c == "A":
            str.append("T")
        elif c == "T":
            str.append("A")
        elif c == "C":
            str.append("G")
        elif c == "G":
            str.append("C")
    return "".join(str)