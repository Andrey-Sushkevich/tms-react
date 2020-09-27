class Node {
    constructor( key, value) {
      this.key = key;
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTree {
    constructor() {
      this._root = null;
    }

    root() {
        return this._root;
    }

    insert(key,value) {
    const newNode = new Node(key, value);
      if (!this._root === null) {
       this._root = node;
      } else {
       this._root = this.insertNode(this._root, node);
      }
      return this;
     }

     insertNode(parent, nodeToInsert) {
      if (parent.key > nodeToInsert.key) {
       if (parent.left) {
        this.insertNode(parent.left,nodeToInsert)
       } else {
       parent.left=nodeToInsert;
       }
      }  else {
        if (parent.right) {
            this.insertNode(parent.right,nodeToInsert);
        } else {
            parent.right=nodeToInsert;
        }
    }
    return parent;
}

findMinNode(node,parent){
  if(node,left){
    return this.findMinNode(node.left,node);
  }else{
    return {parent,node};
}
}

search(key) {
  const node = this.searchNode(key);
  return node.value;
 }

searchNode(node,key) {
    if(node === key){
      return null;
}
     else if(node.key === key){
      return node;
}
  
  if (node.key > key) {
    return this.searchNode(node.left, key);
} else 
    return this.searchNode(node.right, key);
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
        } else 
          if (key < node.key) {
            node.left = deleteNode(node.left, key);
            return node;
         } 
         else {
          node.right = deleteNode(node.right, key);
          return node;
        }
      } 
      this._root = deleteNode(this._root, key);
    }
  }




  traverse(value){
    if (value) {
        let Array = [];
        const traverseBy = function(node) {
        if (node.left) {
              traverseBy(node.left);
        }
          Array.push(node.value);
        
          if (node.right) {
              traverseBy(node.right)
            }
        }
        traverseBy(this._root);
        return Array;
    } else {
        let Array = [];
        const traverseBy = function(node) {
            if (node.right) {
              traverseBy(node.right);
            }
            Array.push(node.value);
            if (node.left) {
              traverseBy(node.left);
            }
        }
        traverseBy(this._root);
        return Array;
    }  
  }

  contains(tree,value) {
    if( tree.value === value){
      return true;
    }
    let found = false;
    if( tree.left){
      found =contains(tree.left,value);
    }
    if( !found && tree.left){
      found = contains(tree.right,value);
    }
    return found;
  }

const bst = new BinaryTree();
  
 
 bst.insert(25, 'twenty five')
    .insert(23, 'twenty three')
    .insert(17, 'seventeen')
    .insert(10, 'ten')
    .insert(8, 'eight')
    .insert(29,'twenty nine')
    .insert(1, 'one')
    .insert(11, 'eleven')
    .insert(12, 'twelve')
    console.log(bst.contains("one"));

 
