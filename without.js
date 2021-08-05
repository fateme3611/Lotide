const eqArrays = require('./eqArrays');
const assertArraysEquals = require('./assertArraysEqual')

const without = (source, itemsToRemove) => {
    let filtterArray = [];
    if (eqArrays(source, itemsToRemove)){
    return filtterArray;
}
for (item of source){
    if (!(itemsToRemove.includes(item))){
        filtterArray.push(item);
    }
}
return filtterArray;
};
// const eqArrays = function (arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.lenght; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
//};
// const assertArrayEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion Passed: Arrays are the same")
//   } else if (actual !== expected) {
//     console.log("🛑🛑🛑 Assertion Failed: Arrays are different");
//   }
// };
// assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = without