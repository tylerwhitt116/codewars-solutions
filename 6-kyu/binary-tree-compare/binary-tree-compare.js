// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise
​
function compare(a, b){
  if(a === null && b === null) {
    return true; //both nodes are null which means they are equal in value
  }
  if(a === null || b === null){
    return false; //only one node is null which isnt equal
  }
  if(a.val !== b.val){
    return false;
  }
  return compare(a.left, b.left) && compare(a.right, b.right)
}