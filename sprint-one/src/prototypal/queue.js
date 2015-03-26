var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);

  queueInstance.storage={};
  queueInstance.start=0;
  queueInstance.end=0;

  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function( value ) {
  this.storage[ this.end ] = value;
  this.end++;
};

queueMethods.dequeue = function ( ) {
  if (this.size()>0) {
    this.start++;
    return this.storage[ this.start - 1];
  }
};

queueMethods.size = function ( ) {
  return this.end - this.start;
};
