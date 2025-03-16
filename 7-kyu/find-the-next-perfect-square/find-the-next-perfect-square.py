import math
​
def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    root = math.isqrt(sq)
    if root ** 2 == sq:
        return (root + 1) ** 2
    return -1
​