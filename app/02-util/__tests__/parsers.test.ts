import { expect, test } from '@jest/globals';
import { centsToEuros } from '../parsers';

test('Convert cents to euros.', () => {
  expect(centsToEuros(123)).toBe('1,23');
  expect(centsToEuros(44455)).toBe('444,55');
  expect(centsToEuros(13)).toBe('0,13');
  expect(centsToEuros(3)).toBe('0,03');
  expect(centsToEuros(0)).toBe('0,00');
});

test('Convert cents to euros with wrong input type.', () => {
  expect(() => centsToEuros('123')).toThrow('Only pass numbers!');
  expect(() => centsToEuros([123])).toThrow('Only pass numbers!');
  expect(() => centsToEuros({ cents: 123 })).toThrow('Only pass numbers!');
  expect(() => centsToEuros(true)).toThrow('Only pass numbers!');
});
