var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    //if empty
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    }
    //if not empty
    else{
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){

    var currentHead = list.head;
    //if one value
    if(list.head === list.tail){
      list.head = null;
      list.tail = null;
    }
    //if multiple values
    else{
      list.head = list.head.next;
    }
    return currentHead.value;
  };

  list.contains = function(target){
    //make an iterator variable that starts at head
      var iterator = list.head;
    //while iterator doesn't equal the tail
    while(iterator !== null){
      //check node that iterator points to
      if(target === iterator.value){
        //if matches target return true
        return true;
      }
        //else set iterator to equal iterator.next
      else{
        iterator = iterator.next;
      }
    }
    return false;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
