const assertEqual = require ('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
};

//const compareArrey = function(arr1, arr2) {
 // if (arr1.length !== arr2.length) {
   // return false;
  //}
  //for (let i = 0; i < arr1.lenght; i++) {
    //if (arr1[i] !== arr2[i]) {
      //return false;
    //}
  //}
  //return true;
//};

//exports
module.exports = tail;
