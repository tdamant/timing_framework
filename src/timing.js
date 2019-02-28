exports.runTests = (callback, startSize = 1000, endSize = 2000, stepSize=1000, repeats=3) => {
  let result = [];
  const measure = (arr, callback) => {
    let t0 = performance.now();
    callback(arr);
    let t1 = performance.now();
    console.log("finished"+arr.length+": "+(t1-t0));
    result.push({x: arr.length, y: ((t1 - t0))})
  };
  const makeArray = (number) => {
    return  Array.from({length: number}, () =>
      Math.floor(Math.random() * number))
  };

  for(let i = startSize; i < endSize; i += stepSize) {
    for(let j = 0; j < repeats; j++) {
    measure(makeArray(i), callback)
    }
  }
  return result
  };
