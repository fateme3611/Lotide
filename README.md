# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fateme3611/lotide`

**Require it:**

`const _ = require('@fateme3611/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
Lottide files and their Test files 

## Getting Started
- All of the module is save in index.js
- assertArrayEqual.js, take in two arrays and console.log an appropriate message to the console.
- assertEqual.js, compare the two values it takes in and print out a message telling us if they match or not.
- assertObjectsEqual.js, which will take in two objects and console.log an appropriate message to the console.
- eqArrays.js, akes in two arrays and returns true or false, based on a perfect match.
- without.js, return a subset of a given array, removing unwanted elements.
- flatten.js, ake in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- countOnly.js, will be given an array and an object. It will return an object containing counts of everything that the input object listed.
- countLetters.js, should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- letterPositions.js, which will return all the indices (zero-based positions) in the string where each character is found.
- findKey.js, It will help us search for a key on an object where its value matches a given value.
- eqObjects.js, which will take in two objects and returns true or false, based on a perfect match.
- map.js,function will return a new array based on the results of the callback function.
- takeUntil.js, which will keep collecting items from a provided array until the callback provided returns a truthy value.
- findKey.js, which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.