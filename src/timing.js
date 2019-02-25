// create all the arrays,
// use those arrays and measure (specified number of times);
// return object with array of the data objects

exports.runTests = (arr, callback, repeats=1) => {
  result = [];

  const measure = (elem, callback) => {
    var t0 = performance.now();
    callback(elem);
    var t1 = performance.now();
    return(result.push({label: elem.length, data: (t1 - t0)}))
  };

  const run = (arr, callback) => {
    arr.forEach((elem) => {
      measure(elem, callback)
    });
  };
  for(let i = 0; i < repeats; i++) {
    run(arr, callback)
  }
  return result;
}


exports.createArrays = (startSize, endSize, stepSize=5000) => {
  function makeArray(number) {
    arr = []
    for (let i = 0; i < number; i++) {
      arr.push(i)
    }
    return arr
  };
  superArrs = [];
  for (let i = startSize; i <= endSize ; i += stepSize) {
    superArrs.push(makeArray(i))
  }
  return superArrs
}


//
// exports.showSpeed = () => {
//   result = [];
//   arrays = createArrays(5000, 1000000)
//   arrays.forEach(function(element){
//     result.push(measure(element))
//   })
//   return result
// };
