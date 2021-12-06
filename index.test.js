const spiralOrder = require('./index');

test('Basic example', () => {
  expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
});

test('A sneaky edge case', () => {
  expect(spiralOrder([[3],[2]])).toEqual([3,2]);
});