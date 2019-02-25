const timing = require('../src/timing')
let arr = timing.createArrays(5000, 10000)
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
    expect(arr[arr.length - 1].length).toBe(10000)
  });
  test("create array with specified step size", () => {
    arr1 = timing.createArrays(500, 10000, 10)
    expect(arr1[1].length - arr1[0].length).toBe(10)
  });
});

  describe("running tests", () =>{

    test("function to test called on each array", () =>{
      const shuffle = jest.fn();
      timing.runTests(arr, shuffle)
      expect(shuffle).toHaveBeenCalledTimes(arr.length)
    });
    test("return an array of objects with label and data params", () =>{
      reverse = (arr) => {
        arr.reverse()
      };
      result = timing.runTests(arr, reverse);
      console.log(result);
      expect(result.length).toBe(2)
    });
    test("it creates array with objects containing labels", () => {
      reverse = (arr) => {
        arr.reverse()
      };
      result = timing.runTests(arr, reverse);
      expect(result[0].label).toBe(5000)
    });
    test("it creates array with objects containing data params", () => {
      reverse = (arr) => {
        arr.reverse()
      };
      result = timing.runTests(arr, reverse);
      expect(result[0].data).not.toBe(null)
    });
  });
