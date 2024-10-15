import { expect, test } from '@jest/globals';
import { productType } from '../constants';
import {
  calculateCartTotal,
  calculateItemsInCart,
} from '../productCalculations';

// Test data
const productsCookieA = [{ id: 1, quantity: 1 }];
const productsDbA = [
  {
    id: 1,
    price: 300,
    name: '',
    type: productType.microcontroller,
    description: '',
    amount: null,
    imgName: '',
  },
];
const productsCookieB = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
];
const productsDbB = [
  {
    id: 1,
    price: 300,
    name: '',
    type: productType.microcontroller,
    description: '',
    amount: null,
    imgName: '',
  },
  {
    id: 2,
    price: 200,
    name: '',
    type: productType.microcontroller,
    description: '',
    amount: null,
    imgName: '',
  },
];
const productsCookieC = [{ id: 1, quantity: 1 }];
const productsDbC = [
  {
    id: 2,
    price: 300,
    name: '',
    type: productType.microcontroller,
    description: '',
    amount: null,
    imgName: '',
  },
  {
    id: 3,
    price: 400,
    name: '',
    type: productType.microcontroller,
    description: '',
    amount: null,
    imgName: '',
  },
];

// calculateCartTotal
test('Unit: calculateCartTotal, Testsuit: valid inputs', () => {
  expect(calculateCartTotal(productsCookieA, productsDbA)).toBe(300);
  expect(calculateCartTotal(productsCookieB, productsDbB)).toBe(700);
});

test('Unit: calculateCartTotal, Testsuit: invalid inputs', () => {
  expect(() => calculateCartTotal(productsCookieC, productsDbC)).toThrow(
    'Arrays need to have the same length.',
  );
});

// calculateItemsInCart
test('Unit: calculateItemsInCart, Testsuit: valid inputs', () => {
  expect(calculateItemsInCart([])).toBe(0);
  expect(calculateItemsInCart(productsCookieA)).toBe(1);
  expect(calculateItemsInCart(productsCookieB)).toBe(3);
});
