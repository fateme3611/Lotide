const assertEqual = function (actual, expected) {
  if (actual === expected) {

    return true;
  } else if (actual !== expected) {

    return false;
  }
};



const eqArrays = function (arr1, arr2) {
  if (!assertEqual(arr1.length, arr2.length)) {
    console.log("🛑🛑🛑 Assertion Failed: Arrays are different");
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!assertEqual(arr1[i], arr2[i])) {
      console.log("🛑🛑🛑 Assertion Failed: Arrays are different");
      return false;
    }
  }
  console.log("✅✅✅ Assertion Passed: Arrays are the same");
  return true;

};


// ACTUAL FUNCTION
const middle = function (array) {
  let len = array.length;
  if (len < 3) {
    return [];
  }
  if (len % 2 == 0) {
    const mid1 = len / 2;
    const mid2 = mid1 - 1;
    return [array[mid2], array[mid1]];

  } else {
    let mid = Math.floor(len / 2);
    return [array[mid]];
  }
}

module.exports = middle
// // TEST CODE
// eqArrays(middle([]), []);
// eqArrays(middle([1]), []);
// eqArrays(middle([1, 2]), []);
// eqArrays(middle([1, 2, 3]), [2]);
// eqArrays(middle([1, 2, 3, 4]), [2, 3]);
// eqArrays(middle([1, 2, 3, 4, 5]), [3]);
// eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [5]);
// // ...
