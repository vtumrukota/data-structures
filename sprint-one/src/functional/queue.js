var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size=0, result;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size > 0){
      result = storage[0];
      delete storage[0];
      for (var queue in storage){
        storage[queue-1] = storage[queue];
      }
      size--;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
