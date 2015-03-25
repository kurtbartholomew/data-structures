var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stackInstance = {};

  stackInstance.storage = {};
  stackInstance.index = 0;

  _.extend(stackInstance, Stack.constructor.stackMethods);

  return stackInstance;
};

Stack.constructor.stackMethods = {};

Stack.constructor.stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.constructor.stackMethods.pop = function() {
  if(this.index > 0){
    this.index--;
    return this.storage[this.index];
  }
};
Stack.constructor.stackMethods.size = function() {
  return this.index;
};


