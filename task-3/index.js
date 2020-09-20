class Node {
    constructor( key, value) {
      this.key = key;
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class BinearySearchTree {
    constructor() {
      this.root = null;
    }
    root() {
        return this.root;
    }

    insert(key) {
        let tree = this.root
        if (!this.root) {
            this.root = new BinaryTreeNode(key);
            return;
        }
        if (key < tree.key) {
            if (tree.left) {
                this.insert(key, tree.left);
            } else {
                tree.setLeft(new BinaryTreeNode(key));
            }
        } else {
            if (tree.right) {
                this.insert(key, tree.right);
            } else {
                tree.setRight(new BinaryTreeNode(key));
            }
        }
    }

    delete(key) {
      const deleteNode = function (node, key) {
        if (node == null) {
          return null;
        }
        if (key == node.key) { 
          if (node.left == null && node.right == null) {
            return null; 
          }
          if (node.right == null) {
            return node.left;
          }
          if (node.right == null) {
            return node.left;
          }
          let tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.key = tempNode.key;
          node.right = deleteNode(node.right, tempNode.key);
          return node;
        } else if (key < node.key) {
          node.left = deleteNode(node.left, key);
          return node;
        } else {
          node.right = deleteNode(node.right, key);
          return node;
        }
      } 
      this.root = deleteNode(this.root, key)
    }

    search(node) {
        let tree = this.root
        if (!tree) {
            return false;
        }
        if (tree.node === node) {
            return true;
        }
        if (node < tree.node) {
            return this.find(node, tree.left);
        } else {
            return this.find(node, tree.right);
        }
    }

  contains(tree,value) {
    if(tree.value === value){
      return true
    }
    let found = false;
    if( tree.left){
      found =contains(tree.left,value)
    }
    if( !found && tree.left){
      found =contains(tree.right,value)
    }
    return found
}
}

  let bst = new BinearySearchTree();
  
 
 
 
