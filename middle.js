
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