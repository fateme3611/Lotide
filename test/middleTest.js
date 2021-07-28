const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
      });
    //   it("returns 7 for [7, 8, 9, 10 , 11]", () => {
    //       assert.deepEqual(head([7, 8, 9, 10 , 11]), 7);
    //   });
       });

// eqArrays(middle([]), []);
// eqArrays(middle([1]), []);
// eqArrays(middle([1, 2]), []);
// eqArrays(middle([1, 2, 3]), [2]);
// eqArrays(middle([1, 2, 3, 4]), [2, 3]);
// eqArrays(middle([1, 2, 3, 4, 5]), [3]);
// eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [5]);

