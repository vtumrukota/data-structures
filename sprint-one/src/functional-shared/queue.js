var Queue = function(){
  var newQueue = {};
  newQueue.storage = {};
  newQueue.queueSize = 0;
  _.extend(newQueue,queueMethods);
  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};


queueMethods.dequeue = function(value){
  if(this.queueSize > 0){
    var result = this.storage[0];
    delete this.storage[0];
    for(var i in this.storage){
      this.storage[i-1]=this.storage[i];
    }
    this.queueSize--;
    return result;
  }
  return;
};


queueMethods.size = function(value){
  return this.queueSize;

};



