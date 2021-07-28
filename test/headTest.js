const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
    });
    it("returns 7 for [7, 8, 9, 10 , 11]", () => {
        assert.strictEqual(head([7, 8, 9, 10 , 11]), 7);
    });
     });



//const assertEqual = require('../assertEqual');

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

