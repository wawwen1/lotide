const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      console.log(key);
      return key;
    }
  }
};

module.exports = findKey;