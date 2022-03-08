let assertEqual = function(actual, expected) {
  let failed = "😭😭 Assertion Failed: " + actual + " !== " + expected;
  let pass = "🥰🥰 Assertion Passed: " + actual + " === " + expected;
  if (actual === expected) {
    console.log(pass);
    return;
  } else {
    console.log(failed);
    return;
  }

};

assertEqual("Sushi", "Sushi");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 17);
