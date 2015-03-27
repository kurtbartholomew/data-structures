var treeMethods = {};

var Tree = function(value){
  // your code here

  var newTree = {};
  newTree.value = value === undefined ? null : value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree,treeMethods);

  return newTree;
};

treeMethods.removeFromParent = function(){
  if(this.parent!==null){
    this.parent.removeChild(this);
  }
};

treeMethods.removeChild = function( child ){
  var index = this.children.indexOf(child);
  this.children.splice(index, 1);
  //delete this.children[ index ];
  child.parent = null;
};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent=this;
  this.children.push(child);
};

treeMethods.traverse = function( func ) {

  var iterateOverNode = function(node){
    func(node);
    _.each(node.children, function(child){
      iterateOverNode(child);
    });
  };

  return iterateOverNode(this);
};

treeMethods.contains = function(target){

  return this.value === target || _.some(this.children, function(child){
    return child.contains(target);
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild : constant
 * contains : linear
 */
