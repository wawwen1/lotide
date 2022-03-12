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
  let fail = `🤡 🤡 🤡 Assertion Failed: ${arr1} !== ${arr2}`;
  let pass = `👍 👍 👍 Assertion Passed: ${arr1} === ${arr2}`;
  if (eqArrays(arr1, arr2)) {
    console.log(pass);
  } else {
    console.log(fail);
  }
};

const letterPositions = (sentence) => {
  const results = {};       //empty object
  const words = sentence.replace(/\s/g,'');       //to get rid of spaces
  for (let i = 0; i < words.length; i++) {      //loop through sentence
    if (results[words[i]]) {
      results[words[i]].push(i);        //add current letter index into key
    } else {
      results[words[i]] = [i];        //create key with letter
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArrayEqual(letterPositions('hello').e, [1]);
