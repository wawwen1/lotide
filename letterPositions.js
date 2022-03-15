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

module.exports = letterPositions;
