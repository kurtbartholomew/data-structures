var bstMethods = {};

var BinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.nodes=[value];
  return bst;
};

bstMethods.getLeftNodeOf( index ) {
  return index*2+1;
}
bstMethods.getRightNodeOf( index ) {
  return index*2+2;
}
bstMethods.insert = function(value) {
  var index=0;
  while(this.nodes[index]!==undefined){
    if(value<this.nodes[index]){
      index=this.getLeftNodeOf(index);
    } else if(value>this.nodes[index]){
      index=this.getRightNodeOf(index);
    } else {
      return;//already exists
    }
  }
  this.nodes[index]=value;
};

bstMethods.contains = function(value) {
  _.some(nodes,function(node){
    return node===value;
  });
};

bstMethods.depthFirstLog = function(callback) {
  var recursion = function( index ) {
    callback(nodes[index]);
    recursion(this.getLeftNodeOf( index ));
    recursion(this.getRightNodeOf( index ));
  }
};

bstMethods.breadthFirstLog = function( callback ) {
  _.each(this.nodes, callback);
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert :
 * contains :
 * depthLogFirst :
 */
