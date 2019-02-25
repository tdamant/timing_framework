const timing = require('../src/timing')
describe("creating arrays", () => {
  test("can array wich starts with specificed array size", () => {
    arr = timing.createArrays(500, 100000)
    expect(arr[0].length).toBe(500)
  });
  test("can create array of arrays", () => {
    arr = timing.createArrays(500, 100000)
    expect(arr instanceof Array).toBe(true);
    expect(arr[0] instanceof Array).toBe(true)
  });
  test("arrays go from 0 to specified length - 1", () => {
    arr = timing.createArrays(5000, 100000)
    expect(arr[0][0]).toBe(0);
    firstArr = arr[0]
    expect(firstArr[firstArr.length - 1]).toBe(4999)
  })
  test("can array with specified start size", () => {
    arr = timing.createArrays(500, 100000)
    expect(arr[0].length).toBe(500)
  });
  test("can create array with specified end size", () => {
    arr = timing.createArrays(5000, 100000)
    expect(arr[arr.length - 1].length).toBe(100000)
  });
  test("create array with specified step size", () => {
    arr = timing.createArrays(500, 10000, 10)
    expect(arr[1].length - arr[0].length).toBe(10)
  });
});

  describe("running tests", () =>{
    test("function to test called on each array", () =>{
      const shuffle = jest.fn();
      arr = timing.createArrays(5000, 10000)
      timing.runTests(arr, shuffle)
      expect(shuffle).toHaveBeenCalledTimes(arr.length)
    });
    test("return an array of objects with label and data params", () =>{
      arr = timing.createArrays(5000, 10000)
      reverse = (arr) => {
        arr.reverse()
      };
      result = timing.runTests(arr, reverse);
      expect(result instanceof Array).toBe(true);
    });
    test("it creates array with objects containing labels", () => {
      arr = timing.createArrays(5000, 10000)
      reverse = (arr) => {
        arr.reverse()
      };
      result = timing.runTests(arr, reverse);
      console.log(result)
      expect(result[0].label).toBe(5000)
    });
  });
