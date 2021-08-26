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
  return count;
};

module.exports = countLetters;
