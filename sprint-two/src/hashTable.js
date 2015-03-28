var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for(var i = 0; i < this._limit; i++){
    this._storage.set(i,[]);
  }
  //this._storage = [];
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k , v];
  var existingBucket = this._storage.get(i);
  existingBucket.push(tuple);
  this._storage.set(i , existingBucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedValue = this._storage.get(i);
  if(retrievedValue.length>0){
    var tupleIndex;
    _.each(retrievedValue, function(tuple , index){
      if(tuple[0] === k){
        tupleIndex = index;
      }
    });
    return retrievedValue[tupleIndex][1];
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k,this._limit);
  var retrievedValue = this._storage.get(i);
  if(retrievedValue.length > 0){
    var indexTuple;
    _.each(retrievedValue, function(tuple,eachIndex){
      if(tuple[0] === k){
        indexTuple = eachIndex;
      }
    });
    retrievedValue.splice(indexTuple,1);
    this._storage.set(i,retrievedValue);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
