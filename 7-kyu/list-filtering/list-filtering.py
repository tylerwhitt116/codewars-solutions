def filter_list(l):
    arr = []
    #create a new empty array to put integers in
    for i in l:
        #iterate through the list and check for integers
        if isinstance(i, int):
            #append the integers in the new array
            arr.append(i)
            #finally return the array
    return arr