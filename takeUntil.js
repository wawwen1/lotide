const takeUntil = (array, callback) => {
  let results = [];
  for (arr of array) {
    if (callback(arr)) {
      return results;
    }
    results.push(arr);
  }
  console.log(results);
};

module.exports = takeUntil;