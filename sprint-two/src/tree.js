var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;        //indicates head of tree
  _.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = Tree();
  childTree.value = value;
  childTree.parent = this;
  this.children[this.children.length] = childTree;
};

treeMethods.contains = function(target){
  var hasTarget = false;
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

treeMethods.traverse = function(cb){
  var recursiveCb = function(tree){
    cb(tree.value);
    _.each(tree.children, function(child){
      recursiveCb(child);
    });
  };
  recursiveCb(this);
};

treeMethods.removeFromParent = function(tree){
  for(var i= 0; i < tree.parent.children.length; i++){
    if(tree.parent.children[i].value === tree.value){
      tree.parent.children.splice(i,1);
    }
  }
  tree.parent = null;
  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


