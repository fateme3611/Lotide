const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

const eqArrays = function (actual, expected){
  if (actual.length !== expected.length){
    return false;
  }
  for (let i = 0 ; i < actual.length ; i ++){
    if (actual[i] !== expected[i]){
      return false;
    }
  }
  return true;
}

const eqObjects = function (actual, expected){
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
 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true



const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc) , true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
