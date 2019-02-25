exports.createArrays = (startSize, endSize, stepSize=5000) => {
  function getArray(number) {
    arr = []
    for (let i = 0; i < number; i++) {
      arr.push(i)
    }
    return arr
  };
  superArrs = [];
  for (let i = startSize; i <= endSize ; i += stepSize) {
    superArrs.push(getArray(i))
  }
  return superArrs
}

exports.measure = (elem, callback) => {
  var t0 = performance.now();
  callback(elem);
  var t1 = performance.now();
  return(t1-t0)
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
