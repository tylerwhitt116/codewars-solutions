def open_or_senior(data):
   #if age >= 55 and handicap > 7 
    #Output: Senior
    #if age < 55 and handicap <=7
    #Output: Open
    
    arr = []
    
    for age,handicap in data:
        if age >= 55 and handicap > 7:
            arr.append('Senior')
        else:
            arr.append('Open')
            
    return arr