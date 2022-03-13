const assertEqual = function(actual, expected) {
  let failed = `😭 😭 Assertion Failed: ${actual} !== ${expected}`;
  let pass = `🥰 🥰 Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(pass);
  } else {
    console.log(failed);
  }
};

const findKey = (obj, search) => {
  for (let key in obj) {        //loop through obj's keys
    if (obj[key].includes(search)) {        //if value inside key = 'search'
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKey(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);