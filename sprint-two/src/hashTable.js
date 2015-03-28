var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  // this._storage.each(function(bucket , i ,storage){
  //   storage[i] = [];
  // });
  for(var i = 0; i < this._limit; i++){
    this._storage.set(i,[]);
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k , v];
  var existingBucket = this._storage.get(i);
  existingBucket.push(tuple);
  this._storage.set(i , existingBucket);
  this._size++;

  if(this._size >= .75 * this._limit){
    this.increaseSize();
  }
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
  if(retrievedValue === null || retrievedValue === undefined){
    return;
  } else { 
    if(retrievedValue.length > 0){
      var indexTuple;
      _.each(retrievedValue, function(tuple,eachIndex){
        if(tuple[0] === k){
          indexTuple = eachIndex;
        }
      });
      retrievedValue.splice(indexTuple,1);
      this._storage.set(i,retrievedValue);
    } else {
      this.storage.set(i , []);
    }
    this._size--;
    if(this._size < .25 * this._limit){
      this.decreaseSize();
    }
  }
};


// GET current size limit
// CREATE new Array Like Object with size limit * 2
// SET each element to empty array
// FOR each element in old storage
//   RETRIEVE element and rehash with new size limit
//   INSERT element into new storage object
// SET old storage object to new storage object

HashTable.prototype.increaseSize = function(){
  this._limit = this._limit * 2;
  this._storage = this.reHash(this._storage,this._limit * .5, this._limit);
};

HashTable.prototype.decreaseSize = function(){
  this._limit = this._limit * .5;
  this._storage = this.reHash(this._storage,this._limit*2,this._limit);
};

HashTable.prototype.reHash = function(fromArray,fromSize,toSize){
  var newStorage = LimitedArray(toSize);
  for(var i = 0; i < toSize; i++){
    newStorage.set(i,[]);
  }
  for(var i = 0; i < fromSize; i++){
    var retrievedBucket = fromArray.get(i);
    for(var j = 0; j < retrievedBucket.length; j++){
      var hashIndex = getIndexBelowMaxForKey(retrievedBucket[j][0],toSize);
      var newStorageRetrievedBucket = newStorage.get(hashIndex);
      newStorageRetrievedBucket.push(retrievedBucket[j]);
      newStorage.set(hashIndex,newStorageRetrievedBucket);
    }
  }
  return newStorage;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
