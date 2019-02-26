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

exports.findDuplicates = (array) => {
  duplicates = [];
  array.sort();
  array.forEach((elem, index)=>{
    if(elem === array[index + 1] || elem === array[index -1]){
      duplicates.push(elem);
    }
  })
  return duplicates
};
// very slow
exports.findDuplicatesV2 = (array) => {
  duplicates = []
  array.forEach((elem) =>{
    var counter = 0
    for(let i = 0; i < array.length; i++) {
      if(array[i] === elem) {
        counter++
      };
    }
      if(counter > 1 && duplicates.indexOf(elem)===-1) {
        for(let i = 0; i < counter; i++){
        duplicates.push(elem)
      }
    }
})
  return duplicates
}

// also extremely slow

exports.findDuplicatesV3 = (array) => {
  duplicates = []
  for(let i = 0; i < array.length; i++) {
    for (let n=0; n< array.length; n++) {
      if(n!==i && array[i] === array[n]) {
        duplicates.push(array[i]);
        break;
      }
    }
  }
  return duplicates
}

},{}],3:[function(require,module,exports){
exports.runTests = (callback, startSize = 0, endSize = 2000000, stepSize=100000) => {
  result = []
  const measure = (arr, callback, repeats=1) => {
    var t0 = performance.now();
    callback(arr);
    var t1 = performance.now();
    console.log("finished"+arr.length+": "+(t1-t0));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL21haW4uanMiLCJzcmMvZnVuY3Rpb25zLmpzIiwic3JjL3RpbWluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInRpbWluZyA9IHJlcXVpcmUoJy4uL3NyYy90aW1pbmcuanMnKTtcbmZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4uL3NyYy9mdW5jdGlvbnMuanMnKVxuIiwiZXhwb3J0cy5zb3J0ID0gKGFycmF5KSA9PiB7XG4gIGFycmF5LnNvcnQoKVxufVxuZXhwb3J0cy5yZXZlcnNlID0gKGFycmF5KSA9PiB7XG4gIGFycmF5LnJldmVyc2UoKVxufVxuZXhwb3J0cy5sYXN0ID0gKGFycmF5KSA9PiB7XG4gIGFycmF5LnBvcCgpXG59XG5leHBvcnRzLnNodWZmbGUgPSAoYXJyYXkpID0+IHtcbiAgdmFyIGksIG9sZFZhbCwgbmV3aW5kZXhcbiAgZm9yKGxldCBpID0gKGFycmF5Lmxlbmd0aCAtMSk7IGkgPiAwOyBpLS0pIHtcbiAgICBuZXdpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogKGkrMSkpO1xuICAgIG9sZFZhbCA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gYXJyYXlbbmV3aW5kZXhdO1xuICAgIGFycmF5W25ld2luZGV4XSA9IG9sZFZhbFxuICB9XG59XG5cbmV4cG9ydHMuZmluZER1cGxpY2F0ZXMgPSAoYXJyYXkpID0+IHtcbiAgZHVwbGljYXRlcyA9IFtdO1xuICBhcnJheS5zb3J0KCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW0sIGluZGV4KT0+e1xuICAgIGlmKGVsZW0gPT09IGFycmF5W2luZGV4ICsgMV0gfHwgZWxlbSA9PT0gYXJyYXlbaW5kZXggLTFdKXtcbiAgICAgIGR1cGxpY2F0ZXMucHVzaChlbGVtKTtcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkdXBsaWNhdGVzXG59O1xuLy8gdmVyeSBzbG93XG5leHBvcnRzLmZpbmREdXBsaWNhdGVzVjIgPSAoYXJyYXkpID0+IHtcbiAgZHVwbGljYXRlcyA9IFtdXG4gIGFycmF5LmZvckVhY2goKGVsZW0pID0+e1xuICAgIHZhciBjb3VudGVyID0gMFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoYXJyYXlbaV0gPT09IGVsZW0pIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9O1xuICAgIH1cbiAgICAgIGlmKGNvdW50ZXIgPiAxICYmIGR1cGxpY2F0ZXMuaW5kZXhPZihlbGVtKT09PS0xKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudGVyOyBpKyspe1xuICAgICAgICBkdXBsaWNhdGVzLnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG59KVxuICByZXR1cm4gZHVwbGljYXRlc1xufVxuXG4vLyBhbHNvIGV4dHJlbWVseSBzbG93XG5cbmV4cG9ydHMuZmluZER1cGxpY2F0ZXNWMyA9IChhcnJheSkgPT4ge1xuICBkdXBsaWNhdGVzID0gW11cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgbj0wOyBuPCBhcnJheS5sZW5ndGg7IG4rKykge1xuICAgICAgaWYobiE9PWkgJiYgYXJyYXlbaV0gPT09IGFycmF5W25dKSB7XG4gICAgICAgIGR1cGxpY2F0ZXMucHVzaChhcnJheVtpXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZHVwbGljYXRlc1xufVxuIiwiZXhwb3J0cy5ydW5UZXN0cyA9IChjYWxsYmFjaywgc3RhcnRTaXplID0gMCwgZW5kU2l6ZSA9IDIwMDAwMDAsIHN0ZXBTaXplPTEwMDAwMCkgPT4ge1xuICByZXN1bHQgPSBbXVxuICBjb25zdCBtZWFzdXJlID0gKGFyciwgY2FsbGJhY2ssIHJlcGVhdHM9MSkgPT4ge1xuICAgIHZhciB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNhbGxiYWNrKGFycik7XG4gICAgdmFyIHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc29sZS5sb2coXCJmaW5pc2hlZFwiK2Fyci5sZW5ndGgrXCI6IFwiKyh0MS10MCkpO1xuICAgIHJlc3VsdC5wdXNoKHt4OiBhcnIubGVuZ3RoLCB5OiAoKHQxIC0gdDApKX0pXG4gIH07XG4gIGNvbnN0IG1ha2VBcnJheSA9IChudW1iZXIpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiBudW1iZXJ9LCAoKSA9PlxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKSk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBzdGFydFNpemU7IGkgPCBlbmRTaXplOyBpICs9IHN0ZXBTaXplKSB7XG4gICAgbWVhc3VyZShtYWtlQXJyYXkoaSksIGNhbGxiYWNrKVxuICB9XG4gIHJldHVybiByZXN1bHRcblxuICB9XG4iXX0=
