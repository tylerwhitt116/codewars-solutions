class ListNode:
    def __init__(self,val):
        self.val = val
        self.next = None
    
def reverse_list(node):
    prev = None
    curr = node
    
    while curr:
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    return prev