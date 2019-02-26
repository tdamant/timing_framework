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
