def get_count(str):
    vowels = ['a', 'e', 'i', 'o', 'u']
    count = 0
    
    for i in str:
        if i in vowels:
            count +=1
    return count