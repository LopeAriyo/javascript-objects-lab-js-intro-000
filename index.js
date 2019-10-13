var recipes = new Object ({});

var updateObjectWithKeyAndValue = function (object, key, value){

 return Object.assign({}, object, { [key]: value })

}

var destructivelyUpdateObjectWithKeyAndValue = function (object, key, value){

 return Object.assign(object, { [key]: value })

}


var deleteFromObjectByKey = function (object, key){

  object = delete object.key

  return object


}


var destructivelyDeleteFromObjectByKey = function (object, key){
/*
delete object.key;

object;
*/
}
