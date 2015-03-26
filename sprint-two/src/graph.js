

var Graph = function(){
  this.storage = [];
};

Graph.prototype.addNode = function(value){
  this.storage.push(graphNode(value));
};

Graph.prototype.getNode = function( value ) {
  return this.storage[this.getIndexOf( value )];
};

Graph.prototype.getIndexOf = function( value ) {//TODO: Use indexOf instead?
  for(var index in this.storage) {
    if(this.storage[index].value === value) {
      return index;
    }
  }
  return undefined;
};

Graph.prototype.contains = function( value ) {
  return !!this.getNode( value );
};

Graph.prototype.removeNode = function( value ) {
  delete this.storage[this.getIndexOf( value )];
};

Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue){
  return this.getNode(fromNodeValue).edges.indexOf(toNodeValue) > -1;
};

Graph.prototype.addEdge = function(fromNodeValue, toNodeValue){
  this.getNode(fromNodeValue).edges.push(toNodeValue);
  if(this.getNode(toNodeValue).edges.indexOf(fromNodeValue)===-1){
    this.addEdge(toNodeValue, fromNodeValue);
  }
};

Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue){
  var edge=this.getNode(fromNodeValue).edges[toNodeValue];
  if(edge!==undefined){
    delete this.getNode(fromNodeValue).edges[toNodeValue];
    this.removeEdge(toNodeValue,fromNodeValue);
  }
  //this.getNode(fromNodeValue).edges.indexOf(toNodeValue)
};

Graph.prototype.forEachNode = function(cb){

};

var graphNode = function( value ){
  var nodeInstance = {};
  nodeInstance.value = value;
  nodeInstance.edges = [];
  return nodeInstance;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * addNode :
 * contains :
 * removeNode :
 * hasEdge :
 * addEdge :
 * removeEdge :
 * forEachNode :
 *
 */



