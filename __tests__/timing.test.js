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

describe("measure", () =>{
  test("accepts a callback and measures time to peform callback", () => {
    arr = timing.createArrays(5000, 100000);
    timing = timing.measure((arr) => {
      arr.reverse()
    });
    expect(timing instanceof number).toBe(True)
  })
})
