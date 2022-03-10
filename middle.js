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

let assertArrayEqual = function(actual, expected) {       //pass/fail msg for eqArrays
  let fail = `🤡 🤡 🤡 Assertion Failed: ${actual} !== ${expected}`;
  let pass = `👍 👍 👍 Assertion Passed: ${actual} === ${expected}`;

  if (eqArrays(actual, expected)) {
    console.log(pass);
  } else {
    console.log(fail);
  }
};

let middle = function(arr) {
  let midArr = [];
  
  if (arr.length < 3) {
    midArr = [];
  } else if (arr.length % 2 === 0) {        //even
    midArr.push(arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 1) {        //odd
    midArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return midArr;
};

assertArrayEqual(middle([1]), []); // => []
assertArrayEqual(middle([1, 2]), []); // => []
assertArrayEqual(middle([1, 2, 3]), [2]); // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]