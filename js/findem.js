(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
timing = require('../src/timing.js');
functions = require('../src/functions.js')

},{"../src/functions.js":2,"../src/timing.js":3}],2:[function(require,module,exports){
exports.sort = (array) => {
  array.sort()
};
exports.reverse = (array) => {
  array.reverse()
};
exports.last = (array) => {
  array.pop()
};
exports.shuffle = (array) => {
  let oldVal, newIndex;
  for(let i = (array.length -1); i > 0; i--) {
    newIndex = Math.floor(Math.random()* (i+1));
    oldVal = array[i];
    array[i] = array[newIndex];
    array[newIndex] = oldVal
  }
  return array
};

exports.findDuplicates = (array) => {
  let duplicates = [];
  array.sort();
  array.forEach((elem, index)=>{
    if(elem === array[index + 1] || elem === array[index -1]){
      duplicates.push(elem);
    }
  });
  return duplicates
};
// very slow
exports.findDuplicatesV2 = (array) => {
  let duplicates = [];
  array.forEach((elem) =>{
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] === elem) {
        counter++
      }
    }
      if(counter > 1 && duplicates.indexOf(elem)===-1) {
        for(let i = 0; i < counter; i++){
        duplicates.push(elem)
      }
    }
});
  return duplicates
};

// also extremely slow

exports.findDuplicatesV3 = (array) => {
  let duplicates = [];
  for(let i = 0; i < array.length; i++) {
    for (let n=0; n< array.length; n++) {
      if(n!==i && array[i] === array[n]) {
        duplicates.push(array[i]);
        break;
      }
    }
  }
  return duplicates
};
// very slow

exports.newSort = (array) => {
  const bigToR = (arr, length) => {
  	for(let i = 0; i<length; i++) {
      if(arr[i] > arr[i+1]) {
        let oldR = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = oldR
    }
  }
  };
	let len = array.length;
	for(let i = 0; i < len;) {
		bigToR(array, len);
		len--;
  }
	return array
};

exports.quickSort = (array) => {
  const run = (items, left, right) => {
      const swap = (items, leftIndex, rightIndex) => {
          let temp = items[leftIndex];
          items[leftIndex] = items[rightIndex];
          items[rightIndex] = temp;
      };
      const partition= (items, left, right) => {
          let pivot   = items[Math.floor((right + left) / 2)],
              i       = left,
              j       = right;
          while (i <= j) {
              while (items[i] < pivot) {
                  i++;
              }
              while (items[j] > pivot) {
                  j--;
              }
              if (i <= j) {
                  swap(items, i, j);
                  i++;
                  j--;
              }
          }
          return i;
      };
      let index;
      if (items.length > 1) {
          index = partition(items, left, right);
          if (left < index - 1) {
              run(items, left, index - 1);
          }
          if (index < right) {
              run(items, index, right);
          }
      }
      return items;
  };
  return run(array, 0, array.length - 1)
};

},{}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL21haW4uanMiLCJzcmMvZnVuY3Rpb25zLmpzIiwic3JjL3RpbWluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ0aW1pbmcgPSByZXF1aXJlKCcuLi9zcmMvdGltaW5nLmpzJyk7XG5mdW5jdGlvbnMgPSByZXF1aXJlKCcuLi9zcmMvZnVuY3Rpb25zLmpzJylcbiIsImV4cG9ydHMuc29ydCA9IChhcnJheSkgPT4ge1xuICBhcnJheS5zb3J0KClcbn07XG5leHBvcnRzLnJldmVyc2UgPSAoYXJyYXkpID0+IHtcbiAgYXJyYXkucmV2ZXJzZSgpXG59O1xuZXhwb3J0cy5sYXN0ID0gKGFycmF5KSA9PiB7XG4gIGFycmF5LnBvcCgpXG59O1xuZXhwb3J0cy5zaHVmZmxlID0gKGFycmF5KSA9PiB7XG4gIGxldCBvbGRWYWwsIG5ld0luZGV4O1xuICBmb3IobGV0IGkgPSAoYXJyYXkubGVuZ3RoIC0xKTsgaSA+IDA7IGktLSkge1xuICAgIG5ld0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiAoaSsxKSk7XG4gICAgb2xkVmFsID0gYXJyYXlbaV07XG4gICAgYXJyYXlbaV0gPSBhcnJheVtuZXdJbmRleF07XG4gICAgYXJyYXlbbmV3SW5kZXhdID0gb2xkVmFsXG4gIH1cbiAgcmV0dXJuIGFycmF5XG59O1xuXG5leHBvcnRzLmZpbmREdXBsaWNhdGVzID0gKGFycmF5KSA9PiB7XG4gIGxldCBkdXBsaWNhdGVzID0gW107XG4gIGFycmF5LnNvcnQoKTtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbSwgaW5kZXgpPT57XG4gICAgaWYoZWxlbSA9PT0gYXJyYXlbaW5kZXggKyAxXSB8fCBlbGVtID09PSBhcnJheVtpbmRleCAtMV0pe1xuICAgICAgZHVwbGljYXRlcy5wdXNoKGVsZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkdXBsaWNhdGVzXG59O1xuLy8gdmVyeSBzbG93XG5leHBvcnRzLmZpbmREdXBsaWNhdGVzVjIgPSAoYXJyYXkpID0+IHtcbiAgbGV0IGR1cGxpY2F0ZXMgPSBbXTtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbSkgPT57XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoYXJyYXlbaV0gPT09IGVsZW0pIHtcbiAgICAgICAgY291bnRlcisrXG4gICAgICB9XG4gICAgfVxuICAgICAgaWYoY291bnRlciA+IDEgJiYgZHVwbGljYXRlcy5pbmRleE9mKGVsZW0pPT09LTEpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50ZXI7IGkrKyl7XG4gICAgICAgIGR1cGxpY2F0ZXMucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cbn0pO1xuICByZXR1cm4gZHVwbGljYXRlc1xufTtcblxuLy8gYWxzbyBleHRyZW1lbHkgc2xvd1xuXG5leHBvcnRzLmZpbmREdXBsaWNhdGVzVjMgPSAoYXJyYXkpID0+IHtcbiAgbGV0IGR1cGxpY2F0ZXMgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgbj0wOyBuPCBhcnJheS5sZW5ndGg7IG4rKykge1xuICAgICAgaWYobiE9PWkgJiYgYXJyYXlbaV0gPT09IGFycmF5W25dKSB7XG4gICAgICAgIGR1cGxpY2F0ZXMucHVzaChhcnJheVtpXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZHVwbGljYXRlc1xufTtcbi8vIHZlcnkgc2xvd1xuXG5leHBvcnRzLm5ld1NvcnQgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgYmlnVG9SID0gKGFyciwgbGVuZ3RoKSA9PiB7XG4gIFx0Zm9yKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgaWYoYXJyW2ldID4gYXJyW2krMV0pIHtcbiAgICAgICAgbGV0IG9sZFIgPSBhcnJbaSsxXTtcbiAgICAgICAgYXJyW2krMV0gPSBhcnJbaV07XG4gICAgICAgIGFycltpXSA9IG9sZFJcbiAgICB9XG4gIH1cbiAgfTtcblx0bGV0IGxlbiA9IGFycmF5Lmxlbmd0aDtcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbjspIHtcblx0XHRiaWdUb1IoYXJyYXksIGxlbik7XG5cdFx0bGVuLS07XG4gIH1cblx0cmV0dXJuIGFycmF5XG59O1xuXG5leHBvcnRzLnF1aWNrU29ydCA9IChhcnJheSkgPT4ge1xuICBjb25zdCBydW4gPSAoaXRlbXMsIGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgICBjb25zdCBzd2FwID0gKGl0ZW1zLCBsZWZ0SW5kZXgsIHJpZ2h0SW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcCA9IGl0ZW1zW2xlZnRJbmRleF07XG4gICAgICAgICAgaXRlbXNbbGVmdEluZGV4XSA9IGl0ZW1zW3JpZ2h0SW5kZXhdO1xuICAgICAgICAgIGl0ZW1zW3JpZ2h0SW5kZXhdID0gdGVtcDtcbiAgICAgIH07XG4gICAgICBjb25zdCBwYXJ0aXRpb249IChpdGVtcywgbGVmdCwgcmlnaHQpID0+IHtcbiAgICAgICAgICBsZXQgcGl2b3QgICA9IGl0ZW1zW01hdGguZmxvb3IoKHJpZ2h0ICsgbGVmdCkgLyAyKV0sXG4gICAgICAgICAgICAgIGkgICAgICAgPSBsZWZ0LFxuICAgICAgICAgICAgICBqICAgICAgID0gcmlnaHQ7XG4gICAgICAgICAgd2hpbGUgKGkgPD0gaikge1xuICAgICAgICAgICAgICB3aGlsZSAoaXRlbXNbaV0gPCBwaXZvdCkge1xuICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdoaWxlIChpdGVtc1tqXSA+IHBpdm90KSB7XG4gICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGkgPD0gaikge1xuICAgICAgICAgICAgICAgICAgc3dhcChpdGVtcywgaSwgaik7XG4gICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9O1xuICAgICAgbGV0IGluZGV4O1xuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBpbmRleCA9IHBhcnRpdGlvbihpdGVtcywgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgIGlmIChsZWZ0IDwgaW5kZXggLSAxKSB7XG4gICAgICAgICAgICAgIHJ1bihpdGVtcywgbGVmdCwgaW5kZXggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZGV4IDwgcmlnaHQpIHtcbiAgICAgICAgICAgICAgcnVuKGl0ZW1zLCBpbmRleCwgcmlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtcztcbiAgfTtcbiAgcmV0dXJuIHJ1bihhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gMSlcbn07XG4iLCJleHBvcnRzLnJ1blRlc3RzID0gKGNhbGxiYWNrLCBzdGFydFNpemUgPSAxMDAwLCBlbmRTaXplID0gMjAwMCwgc3RlcFNpemU9MTAwMCwgcmVwZWF0cz0zKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgY29uc3QgbWVhc3VyZSA9IChhcnIsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY2FsbGJhY2soYXJyKTtcbiAgICBsZXQgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkXCIrYXJyLmxlbmd0aCtcIjogXCIrKHQxLXQwKSk7XG4gICAgcmVzdWx0LnB1c2goe3g6IGFyci5sZW5ndGgsIHk6ICgodDEgLSB0MCkpfSlcbiAgfTtcbiAgY29uc3QgbWFrZUFycmF5ID0gKG51bWJlcikgPT4ge1xuICAgIHJldHVybiAgQXJyYXkuZnJvbSh7bGVuZ3RoOiBudW1iZXJ9LCAoKSA9PlxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtYmVyKSlcbiAgfTtcblxuICBmb3IobGV0IGkgPSBzdGFydFNpemU7IGkgPCBlbmRTaXplOyBpICs9IHN0ZXBTaXplKSB7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IHJlcGVhdHM7IGorKykge1xuICAgIG1lYXN1cmUobWFrZUFycmF5KGkpLCBjYWxsYmFjaylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxuICB9O1xuIl19
