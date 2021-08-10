// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};
const countLetters = function (sentenc) {
  let count = {};
  for (let letter of sentenc) {
    if (count[letter]) {
      count[letter]++;
    } else {
      if (letter !== " ") {
        count[letter] = 1;
      }
    }
  }
  console.log(count);
};

console.log(countLetters("Karl Salima Agouhanna Fang Kavith Jason Salima Fang Joe"));