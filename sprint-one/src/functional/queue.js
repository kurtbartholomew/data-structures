var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var back=0;
  var front=0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[back]=value;
    back++;
  };

  someInstance.dequeue = function(){
    if(this.size()>0){
      result =  storage[front];
      front++;
      if(front==back){
        front=0;
        back=0;
      }
      return result;
    }
  };

  someInstance.size = function(){
    return back-front;
  };

  return someInstance;
};
