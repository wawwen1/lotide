let tail = function(arr) {
  let newTail = [];
  newTail = arr.slice(1);
  return newTail;
};

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

//Test Case 1: Check to see if it removes head
let result = tail(["Hi", "Eat", "Food", "Now"]);
assertEqual(result.length, 3);
assertEqual(result[0], "Eat");
assertEqual(result[2], "Now");

//Test Case 2: Check original array
let words = ['test', 'ahhh', 'nice'];
tail(words);
assertEqual(words.length, 3);
