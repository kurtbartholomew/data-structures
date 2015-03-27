var Tree = function(value){
  // your code here

  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.removeFromParent = function(){
    //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//
};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.traverse = function( /*some arguments go here*/ ) {
  //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//
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
