var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods);
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = Tree();
  childTree.value = value;
  this.children[this.children.length] = childTree;
};

treeMethods.contains = function(target){
  var hasTarget = false;

  //RECURSIVE SUB function(tree)
  var checkChildren = function(tree){
    if(tree.value === target){
      hasTarget = true;
    }
    for( var i=0; i < tree.children.length; i++){
      checkChildren(tree.children[i]);
    }

  };

  checkChildren(this);
  return hasTarget;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */


