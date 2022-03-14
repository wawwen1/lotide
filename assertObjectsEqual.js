const assertEqual = function(actual, expected) {
  let failed = `😭 😭 Assertion Failed: ${actual} !== ${expected}`;
  let pass = `🥰 🥰 Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(pass);
  } else {
    console.log(failed);
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let obj of Object.keys(object1)) {
    if (Object.keys(object2).includes(obj)) {
      if (Array.isArray(object1[obj])) {
        return eqArrays(object1[obj], object2[obj])
      }
    }
  }  
  return true;
};  

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅ Assertion PASSED: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion FAILED: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:1}, {a:1});