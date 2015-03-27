var BinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (value<this.value) {
    if(this.left===null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value>this.value) {
    if(this.right===null) {
      this.right = BinarySearchTree(value);
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
  //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert :
 * contains :
 * depthLogFirst :
 */
