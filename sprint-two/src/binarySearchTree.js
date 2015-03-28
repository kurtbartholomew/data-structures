var bstMethods = {};

var BinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;

  bst.head = bst;
  bst.index = 0;
  bst.nodes = [];
  bst.nodes[0] = bst;

  return bst;
};

bstMethods.insert = function(value) {
  if (value<this.value) {
    if(this.left===null) {
      this.left = new BinarySearchTree(value);
      this.left.index=(this.index+1)*2 -1;
      this.left.head=this.head;
      this.head.nodes[this.left.index]=this.left;
    } else {
      this.left.insert(value);
    }
  }
  if (value>this.value) {
    if(this.right===null) {
      this.right = new BinarySearchTree(value);
      this.right.index=(this.index+1)*2;
      this.right.head=this.head;
      this.head.nodes[this.right.index]=this.right;
    } else {
      this.right.insert(value);
    }
  }
  // TODO: turn this into a ternary conditional
};

bstMethods.contains = function(value) {
  if(this.value === value) {return true; }

  if(this.left !== null && value < this.value) {
    return this.left.contains(value);
  } else if(this.right !== null && value > this.value) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if(this.left){
    this.left.depthFirstLog(callback);
  } else if(this.right){
    this.right.depthFirstLog(callback);
  }
};

bstMethods.breadthFirstLog = function( callback ) {
  for(var i=0; i<this.nodes.length; i++){
    callback(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert :
 * contains :
 * depthLogFirst :
 */
