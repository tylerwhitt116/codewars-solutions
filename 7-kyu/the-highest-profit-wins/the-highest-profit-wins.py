def min_max(lst):
    min_val = lst[0]
    max_val = lst[0]
    
    for num in lst:
        if num < min_val:
            min_val = num
        if num > max_val:
            max_val = num
    return [min_val, max_val]