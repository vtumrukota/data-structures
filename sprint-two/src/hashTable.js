var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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

HashTable.prototype.increaseSize = function(){

// GET current size limit
// CREATE new Array Like Object with size limit * 2
// SET each element to empty array
// FOR each element in old storage
//   RETRIEVE element and rehash with new size limit
//   INSERT element into new storage object
// SET old storage object to new storage object

var newSize = this_.limit * 2;
var newStorage = LimitedArray(newSize);
for(var i = 0; i < newStorage; i++){
  newStorage.set(i,[]);
}
for(var i = 0; i < this_.limit; i++){
  var retrievedBucket = this._storage.get(i);
  for(var j = 0; j < retrievedBucket.length; j++){
    var hashIndex = getIndexBelowMaxForKey(retrivedBucket[j][0],newSize);
    var newStorageRetrievedBucket = newStorage.get(hashIndex);
    newStorageRetrievedBucket.push(retrievedBucket[j]);
    newStorage.set(hashIndex,newStorageRetrievedBucket);
  }
}

};

HashTable.prototype.decreaseSize = function(){

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
