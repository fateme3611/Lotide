// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // temporary code:
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
assertEqual((results1), ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => word.lenght);
assertEqual((results2), [2, 3, 4, 5, 6]);




