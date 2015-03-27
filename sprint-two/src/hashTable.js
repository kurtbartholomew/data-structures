var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//
  //Make DOUBLE in size when storage > 75%
  //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i]===undefined){
    this._storage[i] = {};
  }
  this._storage[i][k]=v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i][k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][k] = null;
  //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//
  //Make HALF in Size when storage < 25%
  //TODO//TODO//TODO//TODO//TODO//TODO//TODO//TODO//
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert : linear
 * retrieve : linear
 * remove : linear
 */
