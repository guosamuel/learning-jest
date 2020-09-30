import { add, total } from './add';

// Unit test
// It only tests one thing
test('add', () => {
  expect(add(1,2)).toBe(3);
  expect(add(2,5)).toBe(7);
})

test('total', () => {
  expect(total(5, 20)).toBe('$25')
})
