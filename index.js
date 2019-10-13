var recipes = new Object ({});

var updateObjectWithKeyAndValue = function (object, key, value){

 return Object.assign({}, object, { [key]: value })

}

var destructivelyUpdateObjectWithKeyAndValue = function (object, key, value){

 return Object.assign(object, { [key]: value })

}


var deleteFromObjectByKey = function (object, key){

  newObject = delete object.key

  return newObject


}


var destructivelyDeleteFromObjectByKey = function (object, key){
/*
delete object.key;

object;
*/
}
