import { sum } from "../sumTestInJs"
// as we know js don't understand import statement so to use this func we need help of babel

test('should check sum of 2 positive numbers', () => {  // no need to import test and expect and toBe
  expect(sum(2,5)).toBe(7)
})