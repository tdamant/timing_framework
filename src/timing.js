// create all the arrays,
// use those arrays and measure (specified number of times);
// return object with array of the data objects

exports.runTests = (arr, callback, repeats=1) => {
  result = [];
  console.log("hey find me");

  const measure = (elem, callback) => {
      for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [elem[i], elem[j]] = [elem[j], elem[i]];
      }
    var t0 = performance.now();
    callback(elem);
    var t1 = performance.now();
    console.log("finished"+elem.length);
    return({x: elem.length, y: ((t1 - t0))})
  };

  const run = (arr, callback) => {
    arr.forEach((elem) => {
      result.push(measure(elem, callback))
    });
  };

  for(let i = 0; i < repeats; i++) {
    run(arr, callback)
  }
  return result;
};


exports.createArrays = (startSize, endSize, stepSize=5000) => {
  function makeArray(number) {
    return Array.from({length: number}, () =>
    Math.floor(Math.random() * number));
  };
  finalArray = [];
  for (let i = startSize; i <= endSize ; i += stepSize) {
    finalArray.push(makeArray(i))
  }
  return finalArray
};
