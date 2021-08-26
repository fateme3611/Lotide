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

module.exports = findKeyByValue;