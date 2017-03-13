'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce((base, x) => {
      return base + x;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some((x) => {
      return x.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {
    return arr.map((x) => {
      return {
        'first': x[0],
        'last': x[1]
      };
    });
  },

  objContainsProp: (arr, prop) => {
    return arr.every((x) => {
      return x.hasOwnProperty(prop);
    });
  },

  stringMatch: (arr, str) => {
    return arr.filter((x) => {
      return x.includes(str);
    });
  },
};
