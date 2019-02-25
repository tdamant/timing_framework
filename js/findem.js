(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
timing = require('../src/timing.js');

},{"../src/timing.js":2}],2:[function(require,module,exports){
// create all the arrays,
// use those arrays and measure (specified number of times);
// return object with array of the data objects

exports.runTests = (arr, callback, repeats=1) => {
  result = [];

  const measure = (elem, callback) => {
    var t0 = performance.now();
    callback(elem);
    var t1 = performance.now();
    return(result.push({x: elem.length, y: (t1 - t0)}))
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
};


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
};

exports.getLabels = (result) => {
  labels = []
  result.forEach((elem) => {
    labels.push(elem.label)
  });
  return labels
};

exports.getData = (result) => {
  data = []
  result.forEach((elem) => {
    data.push(elem.data)
  });
  return data
};
//
// exports.showSpeed = () => {
//   result = [];
//   arrays = createArrays(5000, 1000000)
//   arrays.forEach(function(element){
//     result.push(measure(element))
//   })
//   return result
// };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL21haW4uanMiLCJzcmMvdGltaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ0aW1pbmcgPSByZXF1aXJlKCcuLi9zcmMvdGltaW5nLmpzJyk7XG4iLCIvLyBjcmVhdGUgYWxsIHRoZSBhcnJheXMsXG4vLyB1c2UgdGhvc2UgYXJyYXlzIGFuZCBtZWFzdXJlIChzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzKTtcbi8vIHJldHVybiBvYmplY3Qgd2l0aCBhcnJheSBvZiB0aGUgZGF0YSBvYmplY3RzXG5cbmV4cG9ydHMucnVuVGVzdHMgPSAoYXJyLCBjYWxsYmFjaywgcmVwZWF0cz0xKSA9PiB7XG4gIHJlc3VsdCA9IFtdO1xuXG4gIGNvbnN0IG1lYXN1cmUgPSAoZWxlbSwgY2FsbGJhY2spID0+IHtcbiAgICB2YXIgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjYWxsYmFjayhlbGVtKTtcbiAgICB2YXIgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICByZXR1cm4ocmVzdWx0LnB1c2goe3g6IGVsZW0ubGVuZ3RoLCB5OiAodDEgLSB0MCl9KSlcbiAgfTtcblxuICBjb25zdCBydW4gPSAoYXJyLCBjYWxsYmFjaykgPT4ge1xuICAgIGFyci5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBtZWFzdXJlKGVsZW0sIGNhbGxiYWNrKVxuICAgIH0pO1xuICB9O1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVwZWF0czsgaSsrKSB7XG4gICAgcnVuKGFyciwgY2FsbGJhY2spXG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuZXhwb3J0cy5jcmVhdGVBcnJheXMgPSAoc3RhcnRTaXplLCBlbmRTaXplLCBzdGVwU2l6ZT01MDAwKSA9PiB7XG4gIGZ1bmN0aW9uIG1ha2VBcnJheShudW1iZXIpIHtcbiAgICBhcnIgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpXG4gICAgfVxuICAgIHJldHVybiBhcnJcbiAgfTtcbiAgc3VwZXJBcnJzID0gW107XG4gIGZvciAobGV0IGkgPSBzdGFydFNpemU7IGkgPD0gZW5kU2l6ZSA7IGkgKz0gc3RlcFNpemUpIHtcbiAgICBzdXBlckFycnMucHVzaChtYWtlQXJyYXkoaSkpXG4gIH1cbiAgcmV0dXJuIHN1cGVyQXJyc1xufTtcblxuZXhwb3J0cy5nZXRMYWJlbHMgPSAocmVzdWx0KSA9PiB7XG4gIGxhYmVscyA9IFtdXG4gIHJlc3VsdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgbGFiZWxzLnB1c2goZWxlbS5sYWJlbClcbiAgfSk7XG4gIHJldHVybiBsYWJlbHNcbn07XG5cbmV4cG9ydHMuZ2V0RGF0YSA9IChyZXN1bHQpID0+IHtcbiAgZGF0YSA9IFtdXG4gIHJlc3VsdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgZGF0YS5wdXNoKGVsZW0uZGF0YSlcbiAgfSk7XG4gIHJldHVybiBkYXRhXG59O1xuLy9cbi8vIGV4cG9ydHMuc2hvd1NwZWVkID0gKCkgPT4ge1xuLy8gICByZXN1bHQgPSBbXTtcbi8vICAgYXJyYXlzID0gY3JlYXRlQXJyYXlzKDUwMDAsIDEwMDAwMDApXG4vLyAgIGFycmF5cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuLy8gICAgIHJlc3VsdC5wdXNoKG1lYXN1cmUoZWxlbWVudCkpXG4vLyAgIH0pXG4vLyAgIHJldHVybiByZXN1bHRcbi8vIH07XG4iXX0=
