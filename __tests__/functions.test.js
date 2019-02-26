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
  test("it returns empty array if no duplicates", () => {
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
  test("it returns empty array if no duplicates", () => {
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
  test("it returns empty array if no duplicates", () => {
    array = ['hey', 'hello', 'hi']
    expect(functions.findDuplicatesV3(array)).toEqual([])
  });
  test("it returns more than 2 duplicates if present", () => {
    array = ['hey', 'hello', 'hey', 'hi', 'hey']
    expect(functions.findDuplicatesV3(array)).toEqual(['hey', 'hey', 'hey'])
  })
})
