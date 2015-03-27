var Queue = function() {
  var newQueue = Object.create(queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  newQueue.queueSize = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function(value){
  if(this.queueSize > 0){
    var result =  this.storage[0];

    delete this.storage[0];

    for(var queue in this.storage){
      this.storage[queue-1] = this.storage[queue];
    }

    this.queueSize--;
    return result;
  }
  return;
};

queueMethods.size = function(value){
  return this.queueSize;
};



