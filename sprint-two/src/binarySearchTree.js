var BinarySearchTree = function(value){
//left,right,value
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value){
  //create new node with given value
  var newNode = new BinarySearchTree(value);

  var recursiveInsert = function(head){
    //if value doesnt exist, perform recursion
    if(head.value !== value){
      if(head.value > value){
        //if node is < value, store in head.left if empty
        if(head.left === null){
          head.left = newNode;
        } else{
          //if not empty, perform recursive call
          recursiveInsert(head.left);
        }
      }else if(head.value < value){
        //if node is < value, store in head.left if empty
        if(head.right === null){
          head.right = newNode;
        } else{
          //if not empty, perform recursive call
          recursiveInsert(head.right);
        }
      }
    }
  };
  recursiveInsert(this);
};

BinarySearchTree.prototype.contains = function(target){

};

BinarySearchTree.prototype.depthFirstLog = function(cb){};




/*
 * Complexity: What is the time complexity of the above functions?
 */
