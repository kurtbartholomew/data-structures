var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if(this.front !== this.end){
    this.front++;
    return this.storage[this.front-1];
  }
};

Queue.prototype.size = function() {
  return this.end - this.front;
};


