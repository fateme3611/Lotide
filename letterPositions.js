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
  return results;
};

module.exports = letterPositions;