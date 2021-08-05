const eqArrays = require('./eqArrays');
const assertArrayEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: Arrays are the same")
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: Arrays are different");
  }
};
assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exportes = assertArrayEqual;