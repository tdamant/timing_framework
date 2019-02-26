exports.runTests = (callback, startSize = 0, endSize = 4000000, stepSize=10000) => {
  result = []
  const measure = (arr, callback, repeats=1) => {
    var t0 = performance.now();
    callback(arr);
    var t1 = performance.now();
    console.log("finished"+arr.length);
    result.push({x: arr.length, y: ((t1 - t0))})
  };
  const makeArray = (number) => {
    return Array.from({length: number}, () =>
      Math.floor(Math.random() * number));
  }

  for(let i = startSize; i < endSize; i += stepSize) {
    measure(makeArray(i), callback)
  }
  return result

  }
