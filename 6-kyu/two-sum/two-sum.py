def two_sum(numbers, target):
    the_map = {}
    
    for i, num in enumerate(numbers):
        complement = target - num
        
        if complement in the_map:
            return (the_map[complement], i)
        the_map[num] = i
    return []