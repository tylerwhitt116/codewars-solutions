def longest(a1, a2):
    arr = []
    for i in a1 + a2:
        if i not in arr:
            arr.append(i)
    return "".join(sorted(arr))
    