class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}
let root;

// To keep tract of previous node in Inorder Traversal
let prev;

function isBST() {
  prev = null;
  return _isBST(root);
}
function _isBST(node) {
  if (node != null) {
    if (!_isBST(node.left)) {
      return false;
    }
    if (prev != null && node.data <= prev.data) {
      return false;
    }
    prev = node;
    return _isBST(node.right);
  }
  return true;
}

/* Driver program to test above functions */
root = new Node(8);
root.left = new Node(3);
root.right = new Node(9);
root.left.left = new Node(2);
root.left.right = new Node(6);

if (isBST()) {
  console.log("IS BST");
} else {
  console.log("Not a BST");
}
