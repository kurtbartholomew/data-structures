var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queueInstance = {};

  queueInstance.storage = {};
  queueInstance.front = 0;
  queueInstance.end = 0;
  _.extend(queueInstance, Queue.constructor.queueMethods);

  return queueInstance;
};

Queue.constructor.queueMethods = {};

Queue.constructor.queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.constructor.queueMethods.dequeue = function() {
  if(this.size() > 0){
    this.front++;
    return this.storage[this.front - 1];
  }
};
Queue.constructor.queueMethods.size = function() {
  return this.end - this.front;
};
