var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // TEST
  var stackInstance = Object.create(stackMethods);
  stackInstance.index = 0;
  stackInstance.storage = {};

  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if(this.size() > 0){
    this.index--;
    return this.storage[this.index];
  }
};

stackMethods.size = function() {
  return this.index;
};
