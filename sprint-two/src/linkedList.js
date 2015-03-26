var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var oldTail = this.tail;
    var newTail = linkedListNode(value);
    if(oldTail !== null) {
      oldTail.next =  newTail;
    } else {
      this.head = newTail;
    }
    this.tail = newTail;
  };

  list.removeHead = function(){
    var headValue = this.head.value;
    this.head = this.head.next;
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
