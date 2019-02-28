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
    if(leftIndex == null && rightIndex == null) {
        return originalArr
    }
    if ((leftIndex < rightIndex) && leftIndex !== null) {
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
    if(leftIndex === null) {
      let leftArray = originalArr.slice(0, len-1);
      let leftResult = this.quickSort(leftArray);
      return leftResult.concat([pivot])
    }





}
