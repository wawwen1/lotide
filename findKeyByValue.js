const findKey = (obj, search) => {
  for (let key in obj) {        //loop through obj's keys
    if (obj[key].includes(search)) {        //if value inside key = 'search'
      return key;
    }
  }
};

module.exports = findKeyByValue;