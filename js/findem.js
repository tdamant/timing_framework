(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
timing = require('../src/timing.js');
functions = require('../src/functions.js')

},{"../src/functions.js":2,"../src/timing.js":3}],2:[function(require,module,exports){
exports.sort = (array) => {
  array.sort()
}
exports.reverse = (array) => {
  array.reverse()
}
exports.last = (array) => {
  array.pop()
}
exports.shuffle = (array) => {
  var i, oldVal, newindex
  for(let i = (array.length -1); i > 0; i--) {
    newindex = Math.floor(Math.random()* (i+1));
    oldVal = array[i];
    array[i] = array[newindex];
    array[newindex] = oldVal
  }
}

},{}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL21haW4uanMiLCJzcmMvZnVuY3Rpb25zLmpzIiwic3JjL3RpbWluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidGltaW5nID0gcmVxdWlyZSgnLi4vc3JjL3RpbWluZy5qcycpO1xuZnVuY3Rpb25zID0gcmVxdWlyZSgnLi4vc3JjL2Z1bmN0aW9ucy5qcycpXG4iLCJleHBvcnRzLnNvcnQgPSAoYXJyYXkpID0+IHtcbiAgYXJyYXkuc29ydCgpXG59XG5leHBvcnRzLnJldmVyc2UgPSAoYXJyYXkpID0+IHtcbiAgYXJyYXkucmV2ZXJzZSgpXG59XG5leHBvcnRzLmxhc3QgPSAoYXJyYXkpID0+IHtcbiAgYXJyYXkucG9wKClcbn1cbmV4cG9ydHMuc2h1ZmZsZSA9IChhcnJheSkgPT4ge1xuICB2YXIgaSwgb2xkVmFsLCBuZXdpbmRleFxuICBmb3IobGV0IGkgPSAoYXJyYXkubGVuZ3RoIC0xKTsgaSA+IDA7IGktLSkge1xuICAgIG5ld2luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiAoaSsxKSk7XG4gICAgb2xkVmFsID0gYXJyYXlbaV07XG4gICAgYXJyYXlbaV0gPSBhcnJheVtuZXdpbmRleF07XG4gICAgYXJyYXlbbmV3aW5kZXhdID0gb2xkVmFsXG4gIH1cbn1cbiIsImV4cG9ydHMucnVuVGVzdHMgPSAoY2FsbGJhY2ssIHN0YXJ0U2l6ZSA9IDAsIGVuZFNpemUgPSA0MDAwMDAwLCBzdGVwU2l6ZT0xMDAwMCkgPT4ge1xuICByZXN1bHQgPSBbXVxuICBjb25zdCBtZWFzdXJlID0gKGFyciwgY2FsbGJhY2ssIHJlcGVhdHM9MSkgPT4ge1xuICAgIHZhciB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNhbGxiYWNrKGFycik7XG4gICAgdmFyIHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc29sZS5sb2coXCJmaW5pc2hlZFwiK2Fyci5sZW5ndGgpO1xuICAgIHJlc3VsdC5wdXNoKHt4OiBhcnIubGVuZ3RoLCB5OiAoKHQxIC0gdDApKX0pXG4gIH07XG4gIGNvbnN0IG1ha2VBcnJheSA9IChudW1iZXIpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiBudW1iZXJ9LCAoKSA9PlxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKSk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBzdGFydFNpemU7IGkgPCBlbmRTaXplOyBpICs9IHN0ZXBTaXplKSB7XG4gICAgbWVhc3VyZShtYWtlQXJyYXkoaSksIGNhbGxiYWNrKVxuICB9XG4gIHJldHVybiByZXN1bHRcblxuICB9XG4iXX0=
