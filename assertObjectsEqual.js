  const assertObjectsEqual = function (actual, expected){
    const key1 = Object.keys(actual);
    const key2 = Object.keys(expected);
    if (key1.length == key2.length){
      for (let key = 0 ; key < actual.length ; key++){
        if (actual[key] !== expected[key]){
          return false;
        }
      }
      return true;
    }
    return false;
  }
   
  module.exports = assertObjectsEqual;