var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.pop = function (){
  if(this.stackSize>0){
    this.stackSize--;
    return this.storage[this.stackSize];
  }
  return;
};


Stack.prototype.push = function (value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};


Stack.prototype.size = function (){
  return this.stackSize;
};
