var Queue = function() {
  this.storage = {};
  this.queueSize = 0;
};


Queue.prototype.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function(value){
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

Queue.prototype.size = function(value){
  return this.queueSize;
};


