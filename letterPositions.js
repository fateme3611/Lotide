const letterPositions = function (sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    let char = sentence[index];
    if (char !== " ") {
      if (results[char]) {
        results[char].push(index)
      } else {
        results[char] = [index];
      }
    }
  }
  console.log(results);
  return results;
};
letterPositions("lighthouse in the house")


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: Arrays are the same")
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: Arrays are different");
  }
};



const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.lenght; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS