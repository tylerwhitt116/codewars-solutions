/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/
class treeNode{
  constructor(data){
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }
}
​
// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(root)
{
  if(!root){
    return []
  }
  return [root.data].concat(preOrder(root.left),preOrder(root.right))
}
​
// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(root)
{
  if(!root){
    return []
  }
  return inOrder(root.left).concat(root.data,inOrder(root.right))
}
​
// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(root)
{
  if(!root){
    return []
  }
  return postOrder(root.left).concat(postOrder(root.right),root.data)
}