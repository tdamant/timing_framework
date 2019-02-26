const timing = require('../src/timing');
let arr = timing.createArrays(5000, 15000);
const shuffle = jest.fn();
const reverse = (arr) => {
  arr.reverse()
};
describe("creating arrays", () => {
  test("can array wich starts with specificed array size", () => {
    expect(arr[0].length).toBe(5000)
  });
  test("can create array of arrays", () => {
    expect(arr instanceof Array).toBe(true);
    expect(arr[0] instanceof Array).toBe(true)
  });
  test("arrays go from 0 to specified length - 1", () => {
    expect(arr[0][0]).toBe(0);
    firstArr = arr[0]
    expect(firstArr[firstArr.length - 1]).toBe(4999)
  });
  test("can create array with specified end size", () => {
    expect(arr[arr.length - 1].length).toBe(15000)
  });
  test("create array with specified step size", () => {
    arr1 = timing.createArrays(500, 10000, 10)
    expect(arr1[1].length - arr1[0].length).toBe(10)
  });
  test("arrays are sequential", () => {
    expect(arr[1][2] - arr[1][1]).toBe(1)
  })
});

describe("running tests", () =>{
  test("function to test called on each array specified number of repeats", () =>{
    timing.runTests(arr, shuffle, 10);
    expect(shuffle).toHaveBeenCalledTimes(arr.length * 10)
  });
  test("return an array of objects with label and data params", () =>{
    result = timing.runTests(arr, reverse);
    expect(result.length).toBe(3)
  });
  test("it creates array with objects containing labels", () => {
    result = timing.runTests(arr, reverse);
    expect(result[0].x).toBe(5000)
  });
  test("it creates array with objects containing data params", () => {
    result = timing.runTests(arr, reverse);
    expect(result[0].y).not.toBe(null)
  });
});
