(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
timing = require('../src/timing.js');

},{"../src/timing.js":2}],2:[function(require,module,exports){
// create all the arrays,
// use those arrays and measure (specified number of times);
// return object with array of the data objects

exports.runTests = (arr, callback, repeats=1) => {
  result = [];

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL21haW4uanMiLCJzcmMvdGltaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidGltaW5nID0gcmVxdWlyZSgnLi4vc3JjL3RpbWluZy5qcycpO1xuIiwiLy8gY3JlYXRlIGFsbCB0aGUgYXJyYXlzLFxuLy8gdXNlIHRob3NlIGFycmF5cyBhbmQgbWVhc3VyZSAoc3BlY2lmaWVkIG51bWJlciBvZiB0aW1lcyk7XG4vLyByZXR1cm4gb2JqZWN0IHdpdGggYXJyYXkgb2YgdGhlIGRhdGEgb2JqZWN0c1xuXG5leHBvcnRzLnJ1blRlc3RzID0gKGFyciwgY2FsbGJhY2ssIHJlcGVhdHM9MSkgPT4ge1xuICByZXN1bHQgPSBbXTtcblxuICBjb25zdCBtZWFzdXJlID0gKGVsZW0sIGNhbGxiYWNrKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgW2VsZW1baV0sIGVsZW1bal1dID0gW2VsZW1bal0sIGVsZW1baV1dO1xuICAgICAgfVxuICAgIHZhciB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNhbGxiYWNrKGVsZW0pO1xuICAgIHZhciB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWRcIitlbGVtLmxlbmd0aCk7XG4gICAgcmV0dXJuKHt4OiBlbGVtLmxlbmd0aCwgeTogKCh0MSAtIHQwKSl9KVxuICB9O1xuXG4gIGNvbnN0IHJ1biA9IChhcnIsIGNhbGxiYWNrKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKG1lYXN1cmUoZWxlbSwgY2FsbGJhY2spKVxuICAgIH0pO1xuICB9O1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXBlYXRzOyBpKyspIHtcbiAgICBydW4oYXJyLCBjYWxsYmFjaylcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5leHBvcnRzLmNyZWF0ZUFycmF5cyA9IChzdGFydFNpemUsIGVuZFNpemUsIHN0ZXBTaXplPTUwMDApID0+IHtcbiAgZnVuY3Rpb24gbWFrZUFycmF5KG51bWJlcikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IG51bWJlcn0sICgpID0+XG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKSk7XG4gIH07XG4gIGZpbmFsQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0U2l6ZTsgaSA8PSBlbmRTaXplIDsgaSArPSBzdGVwU2l6ZSkge1xuICAgIGZpbmFsQXJyYXkucHVzaChtYWtlQXJyYXkoaSkpXG4gIH1cbiAgcmV0dXJuIGZpbmFsQXJyYXlcbn07XG4iXX0=
