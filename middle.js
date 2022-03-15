let middle = function(arr) {
  let midArr = [];
  if (arr.length < 3) {
    midArr = [];
  } else if (arr.length % 2 === 0) {        //even
    midArr.push(arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 1) {        //odd
    midArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return midArr;
};

module.exports = middle;