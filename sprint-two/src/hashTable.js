var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._allocatedSpaces = 0;
  this.rebalancing=false;
};

HashTable.prototype.insert = function(k, v){
  //if the alocated space is over 75%
  this._allocatedSpaces++;
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i)===undefined){
    this._storage.set(i,{});
  }
  this._storage.get(i)[k]=v;

  if((this._allocatedSpaces / this._limit) >= 0.75) {
    if(this.rebalancing){
      debugger;
    }
    this.rebalancing=true;
    var oldStorage = this._storage;

    //pseudo: reinitialize values
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    this._allocatedSpaces = 0;
    var that=this;
    oldStorage.each(function(arraySlot) {
      _.each(arraySlot,function(value, key) {
        that.insert(key,value);
      });
    });
    this.rebalancing=false;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  this._allocatedSpaces--;
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[k] = null;

  if((this._allocatedSpaces / this._limit) < 0.25) {
    //console.log('okay..');
    debugger;
    var oldStorage = this._storage;
    //pseudo: reinitialize values
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
    this._allocatedSpaces = 0;
    var that=this;
    oldStorage.each(function(arraySlot) {
      _.each(arraySlot,function(value, key) {
        if(key!==null){
          that.insert(key,value);
        }
      });
    });
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert : linear
 * retrieve : linear
 * remove : linear
 */
