const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍 [PASS] Assertion: ${actual} === ${expected}`);
  } else {
    console.log(`😭 [FAIL] Assertion: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;