var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this._storage = [];
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k , v];
  if(this._storage.get(i) === undefined){
    this._storage.set(i,tuple);
  } else{
    var existingBucket = this._storage.get(i);
    //case 1st collinson
    if(!Array.isArray(existingBucket[0])){
      var newBucket = [existingBucket , tuple];
      this._storage.set(i , newBucket);
    } else{
      existingBucket.push(tuple);
      this._storage.set(i , existingBucket);
    }
  }

  //before seting value, test if index is taken
    //if taken form buckets
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrievedValue = this._storage.get(i);
  if(retrievedValue === null || retrievedValue === undefined){
    return null;
  }
  var value;
  if(Array.isArray(retrievedValue[0])){    //if retrieved value is a bucket (array of tuples)
    _.each(retrievedValue, function(tuple){
      if(tuple[0] === k){
        value=tuple[1];
      }
    });
  } else {                                //if retrieved value is a singular tuple [k,v]
    value = retrievedValue[1];
  }
  return value;
};

HashTable.prototype.remove = function(k){
  //hash key to find index
  var i = getIndexBelowMaxForKey(k,this._limit);
  var retrievedValue = this._storage.get(i);
  if(Array.isArray(retrievedValue[0])){
    var indexTuple;
    _.each(retrievedValue, function(tuple,eachIndex){
      if(tuple[0] === k){
        indexTuple = eachIndex;
      }
    });
    retrievedValue = retrievedValue.splice(indexTuple,1);
    if(retrievedValue.length ===1){
      this._storage.set(i,retrievedValue[0]);
    } else{
      this._storage.set(i,retrievedValue);
    }
  } else{
    this._storage.set(i , null);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
