let head = function(first) {
  first = first[0];
  return first;
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

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), 1);