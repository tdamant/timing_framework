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
