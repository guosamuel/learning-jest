import { total } from './add';

const add = jest.fn((x, y) => 3);

// Unit test
// It only tests one thing
test('add', () => {
  expect(add(1,2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1,2);
  // expect(add(2,5)).toBe(7);
})

// test('total', () => {
//   expect(total(5, 20)).toBe('$25')
// })
