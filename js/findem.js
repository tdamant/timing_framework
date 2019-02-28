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

// if LI < RI - switch li and ri
// if RI < LI - switch pivot with LI and then run with new arrays;
// if RI === null switch pivot with LI
// if LI === null switch nothing, and run with new array
// if LI === null && RI === null return array

exports.quickSort = (originalArr) => {
  let len = originalArr.length;
  if(len <= 1) {
    return originalArr
  }
  let leftIndex = null;
  let rightIndex = null;
  let pivot = originalArr[len - 1];


    for(let i = 0; i < len; i++) {
      if(originalArr[i] > pivot) {
        leftIndex = i;
        break
      }
    }
    for(let j = (len - 2); j >= 0; j--) {
      if(originalArr[j] < pivot) {
        rightIndex = j;
        break
      }
    }
    if (leftIndex < rightIndex) {
      let placeholder = originalArr[leftIndex];
      originalArr[leftIndex] = originalArr[rightIndex];
      originalArr[rightIndex] = placeholder;
      return this.quickSort(originalArr)
    }
    if (leftIndex > rightIndex || rightIndex === null) {
      let placeholder = originalArr[leftIndex];
      originalArr[leftIndex] = pivot;
      originalArr[len - 1] = placeholder;
      let leftArray = originalArr.slice(0,leftIndex);
      let rightArray = originalArr.slice(leftIndex + 1, len + 1);
      let leftResult = this.quickSort(leftArray);
      let rightResult = this.quickSort(rightArray);
      return leftResult.concat([pivot], rightResult)
    }
    if(!leftIndex) {
      let leftArray = originalArr.slice(0, len-1);
      let leftResult = this.quickSort(leftArray);
      return leftResult.concat([pivot])
    }




    // console.log(originalArr)


}

},{}],3:[function(require,module,exports){
exports.runTests = (callback, startSize = 100000, endSize = 5000000, stepSize=100000, repeats=3) => {
  let result = [];
  const measure = (arr, callback) => {
    let t0 = performance.now();
    callback(arr);
    let t1 = performance.now();
    console.log("finished"+arr.length+": "+(t1-t0));
    result.push({x: arr.length, y: ((t1 - t0))})
  };
  const makeArray = (number) => {
    return Array.from({length: number}, () =>
      Math.floor(Math.random() * number));
  };

  for(let i = startSize; i < endSize; i += stepSize) {
    for(let j = 0; j < repeats; j++) {
    measure(makeArray(i), callback)
    }
  }
  return result
  };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL21haW4uanMiLCJzcmMvZnVuY3Rpb25zLmpzIiwic3JjL3RpbWluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInRpbWluZyA9IHJlcXVpcmUoJy4uL3NyYy90aW1pbmcuanMnKTtcbmZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4uL3NyYy9mdW5jdGlvbnMuanMnKVxuIiwiZXhwb3J0cy5zb3J0ID0gKGFycmF5KSA9PiB7XG4gIGFycmF5LnNvcnQoKVxufTtcbmV4cG9ydHMucmV2ZXJzZSA9IChhcnJheSkgPT4ge1xuICBhcnJheS5yZXZlcnNlKClcbn07XG5leHBvcnRzLmxhc3QgPSAoYXJyYXkpID0+IHtcbiAgYXJyYXkucG9wKClcbn07XG5leHBvcnRzLnNodWZmbGUgPSAoYXJyYXkpID0+IHtcbiAgbGV0IG9sZFZhbCwgbmV3SW5kZXg7XG4gIGZvcihsZXQgaSA9IChhcnJheS5sZW5ndGggLTEpOyBpID4gMDsgaS0tKSB7XG4gICAgbmV3SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIChpKzEpKTtcbiAgICBvbGRWYWwgPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IGFycmF5W25ld0luZGV4XTtcbiAgICBhcnJheVtuZXdJbmRleF0gPSBvbGRWYWxcbiAgfVxufTtcblxuZXhwb3J0cy5maW5kRHVwbGljYXRlcyA9IChhcnJheSkgPT4ge1xuICBsZXQgZHVwbGljYXRlcyA9IFtdO1xuICBhcnJheS5zb3J0KCk7XG4gIGFycmF5LmZvckVhY2goKGVsZW0sIGluZGV4KT0+e1xuICAgIGlmKGVsZW0gPT09IGFycmF5W2luZGV4ICsgMV0gfHwgZWxlbSA9PT0gYXJyYXlbaW5kZXggLTFdKXtcbiAgICAgIGR1cGxpY2F0ZXMucHVzaChlbGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZHVwbGljYXRlc1xufTtcbi8vIHZlcnkgc2xvd1xuZXhwb3J0cy5maW5kRHVwbGljYXRlc1YyID0gKGFycmF5KSA9PiB7XG4gIGxldCBkdXBsaWNhdGVzID0gW107XG4gIGFycmF5LmZvckVhY2goKGVsZW0pID0+e1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGFycmF5W2ldID09PSBlbGVtKSB7XG4gICAgICAgIGNvdW50ZXIrK1xuICAgICAgfVxuICAgIH1cbiAgICAgIGlmKGNvdW50ZXIgPiAxICYmIGR1cGxpY2F0ZXMuaW5kZXhPZihlbGVtKT09PS0xKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudGVyOyBpKyspe1xuICAgICAgICBkdXBsaWNhdGVzLnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG59KTtcbiAgcmV0dXJuIGR1cGxpY2F0ZXNcbn07XG5cbi8vIGFsc28gZXh0cmVtZWx5IHNsb3dcblxuZXhwb3J0cy5maW5kRHVwbGljYXRlc1YzID0gKGFycmF5KSA9PiB7XG4gIGxldCBkdXBsaWNhdGVzID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IG49MDsgbjwgYXJyYXkubGVuZ3RoOyBuKyspIHtcbiAgICAgIGlmKG4hPT1pICYmIGFycmF5W2ldID09PSBhcnJheVtuXSkge1xuICAgICAgICBkdXBsaWNhdGVzLnB1c2goYXJyYXlbaV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGR1cGxpY2F0ZXNcbn07XG4vLyB2ZXJ5IHNsb3dcblxuZXhwb3J0cy5uZXdTb3J0ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IGJpZ1RvUiA9IChhcnIsIGxlbmd0aCkgPT4ge1xuICBcdGZvcihsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGFycltpXSA+IGFycltpKzFdKSB7XG4gICAgICAgIGxldCBvbGRSID0gYXJyW2krMV07XG4gICAgICAgIGFycltpKzFdID0gYXJyW2ldO1xuICAgICAgICBhcnJbaV0gPSBvbGRSXG4gICAgfVxuICB9XG4gIH07XG5cdGxldCBsZW4gPSBhcnJheS5sZW5ndGg7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW47KSB7XG5cdFx0YmlnVG9SKGFycmF5LCBsZW4pO1xuXHRcdGxlbi0tO1xuICB9XG5cdHJldHVybiBhcnJheVxufTtcblxuLy8gaWYgTEkgPCBSSSAtIHN3aXRjaCBsaSBhbmQgcmlcbi8vIGlmIFJJIDwgTEkgLSBzd2l0Y2ggcGl2b3Qgd2l0aCBMSSBhbmQgdGhlbiBydW4gd2l0aCBuZXcgYXJyYXlzO1xuLy8gaWYgUkkgPT09IG51bGwgc3dpdGNoIHBpdm90IHdpdGggTElcbi8vIGlmIExJID09PSBudWxsIHN3aXRjaCBub3RoaW5nLCBhbmQgcnVuIHdpdGggbmV3IGFycmF5XG4vLyBpZiBMSSA9PT0gbnVsbCAmJiBSSSA9PT0gbnVsbCByZXR1cm4gYXJyYXlcblxuZXhwb3J0cy5xdWlja1NvcnQgPSAob3JpZ2luYWxBcnIpID0+IHtcbiAgbGV0IGxlbiA9IG9yaWdpbmFsQXJyLmxlbmd0aDtcbiAgaWYobGVuIDw9IDEpIHtcbiAgICByZXR1cm4gb3JpZ2luYWxBcnJcbiAgfVxuICBsZXQgbGVmdEluZGV4ID0gbnVsbDtcbiAgbGV0IHJpZ2h0SW5kZXggPSBudWxsO1xuICBsZXQgcGl2b3QgPSBvcmlnaW5hbEFycltsZW4gLSAxXTtcblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZihvcmlnaW5hbEFycltpXSA+IHBpdm90KSB7XG4gICAgICAgIGxlZnRJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaiA9IChsZW4gLSAyKTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIGlmKG9yaWdpbmFsQXJyW2pdIDwgcGl2b3QpIHtcbiAgICAgICAgcmlnaHRJbmRleCA9IGo7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsZWZ0SW5kZXggPCByaWdodEluZGV4KSB7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBvcmlnaW5hbEFycltsZWZ0SW5kZXhdO1xuICAgICAgb3JpZ2luYWxBcnJbbGVmdEluZGV4XSA9IG9yaWdpbmFsQXJyW3JpZ2h0SW5kZXhdO1xuICAgICAgb3JpZ2luYWxBcnJbcmlnaHRJbmRleF0gPSBwbGFjZWhvbGRlcjtcbiAgICAgIHJldHVybiB0aGlzLnF1aWNrU29ydChvcmlnaW5hbEFycilcbiAgICB9XG4gICAgaWYgKGxlZnRJbmRleCA+IHJpZ2h0SW5kZXggfHwgcmlnaHRJbmRleCA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gb3JpZ2luYWxBcnJbbGVmdEluZGV4XTtcbiAgICAgIG9yaWdpbmFsQXJyW2xlZnRJbmRleF0gPSBwaXZvdDtcbiAgICAgIG9yaWdpbmFsQXJyW2xlbiAtIDFdID0gcGxhY2Vob2xkZXI7XG4gICAgICBsZXQgbGVmdEFycmF5ID0gb3JpZ2luYWxBcnIuc2xpY2UoMCxsZWZ0SW5kZXgpO1xuICAgICAgbGV0IHJpZ2h0QXJyYXkgPSBvcmlnaW5hbEFyci5zbGljZShsZWZ0SW5kZXggKyAxLCBsZW4gKyAxKTtcbiAgICAgIGxldCBsZWZ0UmVzdWx0ID0gdGhpcy5xdWlja1NvcnQobGVmdEFycmF5KTtcbiAgICAgIGxldCByaWdodFJlc3VsdCA9IHRoaXMucXVpY2tTb3J0KHJpZ2h0QXJyYXkpO1xuICAgICAgcmV0dXJuIGxlZnRSZXN1bHQuY29uY2F0KFtwaXZvdF0sIHJpZ2h0UmVzdWx0KVxuICAgIH1cbiAgICBpZighbGVmdEluZGV4KSB7XG4gICAgICBsZXQgbGVmdEFycmF5ID0gb3JpZ2luYWxBcnIuc2xpY2UoMCwgbGVuLTEpO1xuICAgICAgbGV0IGxlZnRSZXN1bHQgPSB0aGlzLnF1aWNrU29ydChsZWZ0QXJyYXkpO1xuICAgICAgcmV0dXJuIGxlZnRSZXN1bHQuY29uY2F0KFtwaXZvdF0pXG4gICAgfVxuXG5cblxuXG4gICAgLy8gY29uc29sZS5sb2cob3JpZ2luYWxBcnIpXG5cblxufVxuIiwiZXhwb3J0cy5ydW5UZXN0cyA9IChjYWxsYmFjaywgc3RhcnRTaXplID0gMTAwMDAwLCBlbmRTaXplID0gNTAwMDAwMCwgc3RlcFNpemU9MTAwMDAwLCByZXBlYXRzPTMpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBtZWFzdXJlID0gKGFyciwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjYWxsYmFjayhhcnIpO1xuICAgIGxldCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWRcIithcnIubGVuZ3RoK1wiOiBcIisodDEtdDApKTtcbiAgICByZXN1bHQucHVzaCh7eDogYXJyLmxlbmd0aCwgeTogKCh0MSAtIHQwKSl9KVxuICB9O1xuICBjb25zdCBtYWtlQXJyYXkgPSAobnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogbnVtYmVyfSwgKCkgPT5cbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcikpO1xuICB9O1xuXG4gIGZvcihsZXQgaSA9IHN0YXJ0U2l6ZTsgaSA8IGVuZFNpemU7IGkgKz0gc3RlcFNpemUpIHtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgcmVwZWF0czsgaisrKSB7XG4gICAgbWVhc3VyZShtYWtlQXJyYXkoaSksIGNhbGxiYWNrKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG4gIH07XG4iXX0=
