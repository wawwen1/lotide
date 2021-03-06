const eqArrays = require('./eqArrays');

let assertArrayEqual = (arr1, arr2) => {       //pass/fail msg for eqArrays
  if (eqArrays(arr1, arr2)) {
    console.log(`👍 [PASS] Assertion: ${arr1} === ${arr2}`);
  } else {
    console.log(`😭 [FAIL] Assertion: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArrayEqual;
