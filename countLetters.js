const countLetters = (sentence) => {
  const results = {};
  let words = sentence.replace(/\s/g,'');       //remove blank spaces from input
  for (let letters of words) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  return results;
};

module.exports = countLetters;