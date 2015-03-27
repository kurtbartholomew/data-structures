var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var oldTail = this.tail;
    var newTail = linkedListNode(value);
    if(oldTail !== null) {
      oldTail.next =  newTail;
      newTail.previous = oldTail;
    } else {
      this.head = newTail;
    }
    this.tail = newTail;
  };

  // ==================================================
  // Extra Credit


  list.removeTail = function() {
    if(this.head !== null && this.tail !== null) {
      var tailValue = this.tail.value;
      if(this.head !== this.tail) {
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      return tailValue;
    }
  };

  list.addToHead = function(value){
    var oldHead = this.head;
    var newHead = linkedListNode(value);
    if(oldHead !== null) {
      oldHead.previous = newHead;
      newHead.next = oldHead;
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
  };

  // =================================================

  list.removeHead = function(){
    var headValue = this.head.value;
    this.head = this.head.next;
    if(this.head!==null){
      this.head.previous = null;
    }
    return headValue;
  };

  list.contains = function(target){
    var checkNode = function(node){
      if(node===null){
        return false;
      } else if(node.value===target){
        return true;
      } else {
        return checkNode(node.next);
      }
    };

    return checkNode(this.head);
  };

  return list;
};

var linkedListNode = function(value){
  var nodeInstance = {};

  nodeInstance.value = value;
  nodeInstance.next = null;
  nodeInstance.previous = null;

  return nodeInstance;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail : constant
 * removeHead : constant
 * contains : linear
 *
 */
