
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: Arrays are the same")
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: Arrays are different");
  }
};






const findKeyByValue = function (object, value) {
  const byGener = Object.keys(object);
  for (i = 0; i < byGener.length; i++) {
    const key = byGener[i];
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
