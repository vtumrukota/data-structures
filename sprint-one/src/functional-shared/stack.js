var stackMethods = {};

stackMethods.pop = function (){
  if(this.stackSize>0){
    this.stackSize--;
    return this.storage[this.stackSize];
  }
  return;
};


stackMethods.push = function (value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};


stackMethods.size = function (){
  return this.stackSize;
};


var Stack = function() {
  var newStack = {};
  newStack.stackSize = 0;
  newStack.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(newStack,stackMethods);
  return newStack;
};

















// var Stack = function() {
//   var newStack = {};
//   newStack.stackSize = 0;
//   newStack.storage = {};
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   _.extend(Stack,newStack.stackMethods);
//   return newStack;
// };

// newStack.stackMethods = {};

// newStack.stackMethods.pop = function (){
//   if(this.stackSize>0){
//     this.stackSize--;
//     return this.storage[this.stackSize];
//   }
//   return;
// };


// newStack.stackMethods.push = function (value){
//   this.storage[this.stackSize] = value;
//   this.stackSize++;
// };


// newStack.stackMethods.size = function (){
//   return this.stackSize;
// };

