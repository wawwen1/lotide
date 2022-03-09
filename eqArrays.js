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

assertEqual("Sushi", "Sushi");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 17);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
