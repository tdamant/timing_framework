(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
timing = require('../src/timing.js');

},{"../src/timing.js":2}],2:[function(require,module,exports){
exports.createArrays = (startSize, endSize) => {
  function getArray(number) {
    arr = []
    for (let i = 0; i < number; i++) {
      arr.push(i)
    }
    return arr
  };
  superArrs = [];
  for (let i = startSize; i < endSize ; i += 5000) {
    superArrs.push(getArray(i))
  }
  return superArrs
}

exports.measure = (elem) => {
  var t0 = performance.now();
  elem.reverse()
  var t1 = performance.now();
  return(`${elem.length}: ${t1-t0}`)
}

exports.showSpeed = () => {
  result = [];
  arrays = createArrays(5000, 1000000)
  arrays.forEach(function(element){
    result.push(measure(element))
  })
  return result
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL21haW4uanMiLCJzcmMvdGltaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInRpbWluZyA9IHJlcXVpcmUoJy4uL3NyYy90aW1pbmcuanMnKTtcbiIsImV4cG9ydHMuY3JlYXRlQXJyYXlzID0gKHN0YXJ0U2l6ZSwgZW5kU2l6ZSkgPT4ge1xuICBmdW5jdGlvbiBnZXRBcnJheShudW1iZXIpIHtcbiAgICBhcnIgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpXG4gICAgfVxuICAgIHJldHVybiBhcnJcbiAgfTtcbiAgc3VwZXJBcnJzID0gW107XG4gIGZvciAobGV0IGkgPSBzdGFydFNpemU7IGkgPCBlbmRTaXplIDsgaSArPSA1MDAwKSB7XG4gICAgc3VwZXJBcnJzLnB1c2goZ2V0QXJyYXkoaSkpXG4gIH1cbiAgcmV0dXJuIHN1cGVyQXJyc1xufVxuXG5leHBvcnRzLm1lYXN1cmUgPSAoZWxlbSkgPT4ge1xuICB2YXIgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgZWxlbS5yZXZlcnNlKClcbiAgdmFyIHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHJldHVybihgJHtlbGVtLmxlbmd0aH06ICR7dDEtdDB9YClcbn1cblxuZXhwb3J0cy5zaG93U3BlZWQgPSAoKSA9PiB7XG4gIHJlc3VsdCA9IFtdO1xuICBhcnJheXMgPSBjcmVhdGVBcnJheXMoNTAwMCwgMTAwMDAwMClcbiAgYXJyYXlzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgcmVzdWx0LnB1c2gobWVhc3VyZShlbGVtZW50KSlcbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufTtcbiJdfQ==
