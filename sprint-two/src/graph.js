

var Graph = function(){
  //var this = Object.create(Graph.prototype)
  this.nodes = {};
  //return this;
};

Graph.prototype.addNode = function(node){
  var graphNode = function(){
    this.value = node;
    this.linkedNodes ={};
    // var newGraphNode ={};
    // newGraphNode.value = value;
    // newGraphNode.linkedNodes = {};
    // return newGraphNode;
  }
 this.nodes[node] = new graphNode(node);
};

Graph.prototype.contains = function(node){
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



