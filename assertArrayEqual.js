let assertEqual = function(actual, expected) {
  let failed = `😭😭 Assertion Failed: ${actual} !== ${expected}`;
  let pass = `🥰🥰 Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(pass);
    return;
  } else {
    console.log(failed);
    return;
  }
};

let eqArrays = function(arr1, arr2) {       //returns true/false if arrays match or not
 
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

let assertArrayEqual = function(arr1, arr2) {       //pass/fail msg for eqArrays

  if (eqArrays === false) {
    console.log(`🤡 🤡 🤡 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  } else {
    console.log(`👍 👍 👍 Assertion Passed: ${arr1} === ${arr2}`);
    return;
  }
};

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
