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
