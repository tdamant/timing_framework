const functions = require("../src/functions.js")

describe("findDuplicates", () => {
  test("it returns all duplicates in arrays", () => {
    array = [1,2,3,4,4]
    expect(functions.findDuplicates(array)).toEqual([4,4])
  });
  test("it works for strings", () => {
    array = ['hey', 'hello', 'hey']
    expect(functions.findDuplicates(array)).toEqual(['hey', 'hey'])
  });
  test("it returns empty arrayif no duplicates", () => {
    array = ['hey', 'hello', 'hi']
    expect(functions.findDuplicates(array)).toEqual([])
  });
  test("it returns more than 2 duplicates if present", () => {
    array = ['hey', 'hello', 'hey', 'hi', 'hey']
    expect(functions.findDuplicates(array)).toEqual(['hey', 'hey', 'hey'])
  })
})

describe("findDuplicatesV2", () => {
  test("it returns all duplicates in arrays", () => {
    array = [1,2,3,4,4]
    expect(functions.findDuplicatesV2(array)).toEqual([4,4])
  });
  test("it works for strings", () => {
    array = ['hey', 'hello', 'hey']
    expect(functions.findDuplicatesV2(array)).toEqual(['hey', 'hey'])
  });
  test("it returns empty arrayif no duplicates", () => {
    array = ['hey', 'hello', 'hi']
    expect(functions.findDuplicatesV2(array)).toEqual([])
  });
  test("it returns more than 2 duplicates if present", () => {
    array = ['hey', 'hello', 'hey', 'hi', 'hey']
    expect(functions.findDuplicatesV2(array)).toEqual(['hey', 'hey', 'hey'])
  })
});

describe("findDuplicatesV2", () => {
  test("it returns all duplicates in arrays", () => {
    array = [1,2,3,4,4]
    expect(functions.findDuplicatesV3(array)).toEqual([4,4])
  });
  test("it works for strings", () => {
    array = ['hey', 'hello', 'hey']
    expect(functions.findDuplicatesV3(array)).toEqual(['hey', 'hey'])
  });
  test("it returns empty arrayif no duplicates", () => {
    array = ['hey', 'hello', 'hi']
    expect(functions.findDuplicatesV3(array)).toEqual([])
  });
  test("it returns more than 2 duplicates if present", () => {
    array = ['hey', 'hello', 'hey', 'hi', 'hey']
    expect(functions.findDuplicatesV3(array)).toEqual(['hey', 'hey', 'hey'])
  })
});

describe("newSort", () => {
  test("it sorts array", () => {
    let array = [2,1,88,4,0]
    expect(functions.newSort(array)).toEqual([0,1,2,4,88])
  });
  test("works on single item arrays", () => {
    let array = [2]
    expect(functions.newSort(array)).toEqual([2])
  })
});

describe("quickSort", () => {
  test("it sorts array", () => {
    let array = [3, 6, 1, 4, 5]
    expect(functions.quickSort(array)).toEqual([1, 3, 4, 5, 6])
  });
  test("it sorts even length array", () => {
    let array = [3, 6, 1, 7,4, 5]
    expect(functions.quickSort(array)).toEqual([1, 3, 4, 5, 6, 7])
  });
  test("it sorts arraywith duplicates", () => {
    let array = [3, 6, 1, 7,4, 5, 4];
    let result = functions.quickSort(array);
    expect(result).toEqual([1, 3, 4,4, 5, 6, 7])
  });
  test("it sorts arraywith multiple duplicates", () => {
    let array = [3, 6, 3, 3,4, 5, 4];
    let result = functions.quickSort(array);
    expect(result).toEqual([3, 3, 3,4, 4, 5, 6]);
  });
  test("it sorts already sorted array", () => {
      let array = [1, 3, 4, 4, 5, 6, 7]
      expect(functions.quickSort(array)).toEqual([1, 3, 4,4, 5, 6, 7])
  });
  test("it can sort large arrays", () => {
      const makeArray = (number) => {
          return Array.from({length: number}, () =>
              Math.floor(Math.random() * number));
      };
      let array = makeArray(100000);
      let shuffledArray = functions.shuffle(array);
      let testArray = shuffledArray.slice(0);
      let secondTest = shuffledArray.slice(0);
      let result = functions.quickSort(testArray);
      expect(result).toEqual(secondTest.sort(function(a, b){return a - b}));
  })
});


