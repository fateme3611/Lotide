const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (i = 0; i < allItems.length; i++) {
    const curentItem = allItems[i];
    if (itemsToCount[curentItem]) {
      if (result[curentItem]) {
        result[curentItem]++;
      } else {
        result[curentItem] = 1;
      }
    }
  }

  return result;;

}

module.exports = countOnly;

