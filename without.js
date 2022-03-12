const eqArrays = function(arr1, arr2) {       //returns true/false if arrays match or not
 
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

const assertArrayEqual = function(arr1, arr2) {       //pass/fail msg for eqArrays
  let fail = `🤡 🤡 🤡 Assertion Failed: ${arr1} !== ${arr2}`;
  let pass = `👍 👍 👍 Assertion Passed: ${arr1} === ${arr2}`;
  if (eqArrays(arr1, arr2)) {
    console.log(pass);
  } else {
    console.log(fail);
  }
};

const without = (source, itemsToRemove) => {
  let filtered = [];        //new array for filtered source
  for (let ele of source) {       //loop through source
    if (!itemsToRemove.includes(ele)) {       //if filter does not include current element
      filtered.push(ele);       //add current element into new array
    }
  }
  console.log(filtered);
  return filtered;
};

assertArrayEqual(without([1, 2, 3], [3]), [1, 2]);
assertArrayEqual(without([1, 2, 3, 4, 5], [3, 4, 1]), [2, 5]);
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);