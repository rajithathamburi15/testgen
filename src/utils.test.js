import { add, multiply } from './utils';

test('adds numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplies numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});