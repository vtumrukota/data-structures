

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

Graph.prototype.hasEdge = function(fromValue, toValue){
  return this.nodes[fromValue].linkedNodes.hasOwnProperty(toValue);
};

Graph.prototype.addEdge = function(fromValue, toValue){
  //verify from and to node exist in graph
  if(this.contains(fromValue) && this.contains(toValue)){
  //find fromNode object
  //find toNode object

  //add refrence to toNode object in fromNode object linkedNodes object
    this.nodes[toValue].linkedNodes[fromValue] = this.nodes[fromValue];

  //add refrence to FromNode object in ToNode object linkedNodes object
    this.nodes[fromValue].linkedNodes[toValue] = this.nodes[toValue];

  }
};

Graph.prototype.removeEdge = function(fromValue, toValue){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



