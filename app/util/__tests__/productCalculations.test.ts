import { expect, test } from '@jest/globals';
import { calculateCartTotal } from '../productCalculations';

// Test data
const productsCookieA = [{ id: 1, quantity: 1 }];
const productsDbA = [{ id: 1, price: 300 }];
const productsCookieB = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
];
const productsDbB = [
  { id: 1, price: 300 },
  { id: 2, price: 200 },
];
const productsCookieC = [{ id: 1, quantity: 1 }];
const productsDbC = [
  { id: 2, price: 300 },
  { id: 3, price: 400 },
];

test('Unit: calculateCartTotal, Testsuit: valid inputs', () => {
  expect(calculateCartTotal(productsCookieA, productsDbA)).toBe(300);
  expect(calculateCartTotal(productsCookieB, productsDbB)).toBe(700);
});

test('Unit: calculateCartTotal, Testsuit: invalid inputs', () => {
  expect(() => calculateCartTotal(productsCookieC, productsDbC)).toThrow(
    'Arrays need to have the same length.',
  );
});
