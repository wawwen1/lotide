const without = (source, itemsToRemove) => {
  let filtered = [];        //new array for filtered source
  for (let ele of source) {       //loop through source
    if (!itemsToRemove.includes(ele)) {       //if filter does not include current element
      filtered.push(ele);       //add current element into new array
    }
  }
  console.log(filtered);
  return filtered;
};

module.exports = without;