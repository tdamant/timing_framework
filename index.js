// var arr1 = getLargeArray(10000)
// showSpeed(10000)

// n order to get further, we'll need to create graphs to compare different pieces of code.
 // You will transform your code into a timing framework. It should:
// Create arrays of different sizes (try 5000 to 100000 in steps of 5000)
// Run the code to time on each
// Print the size and corresponding time.

const timing = require('../src/timing')

document.getElementById("speed").innerHTML += timing.showSpeed(100)





















// function generateSpeeds(number) {
//   arr = []
//   for(let i = 0; i < number; i++) {
//     arr.push(getSpeed(1000, reverse))
//   }
//   return arr
// }
// getSpeed(1000, reverse)
//
// function getSpeed(arrSize, callback) {
//   array = getLargeArray()
//   var t0 = performance.now()
//   callback(array)
//   var t1 = performance.now()
//   return (t1 - t0)
// }
//
//

//
// function reverse(array) {
//   array.reverse()
// }
