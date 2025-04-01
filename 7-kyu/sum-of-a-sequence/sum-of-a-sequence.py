def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    
    total_sum = 0
    current = begin_number
    
    while current <= end_number:
        total_sum += current
        current += step
    return total_sum