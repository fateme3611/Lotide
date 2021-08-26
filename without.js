const eqArrays = require('./eqArrays');

const without = (source, itemsToRemove) => {
    let filtterArray = [];

    for (item of source){
        if (!(itemsToRemove.some(it=>it === item))){
            filtterArray.push(item);
        }
    }
    return filtterArray;
};

module.exports = without