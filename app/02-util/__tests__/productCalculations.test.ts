import { expect, test } from '@jest/globals';
import { calculateCartTotal } from '../productCalculations';

const productsCookieA: Array<object> = [{ id: 1, quantity: 1 }];
const productsDbA: Array<object> = [{ id: 1, price: 300 }];

test('Unit: calculateCartTotal, Testsuit: valid inputs', () => {
  expect(calculateCartTotal(productsCookieA, productsDbA)).toBe(300);
});

// test('Unit: calculateCartTotal, Testsuit: invalid inputs', () => {
//   expect(() => calculateCartTotal('123')).toThrow('Only pass arrays!');
//   expect(() => calculateCartTotal(true)).toThrow('Only pass arrays!');
//   expect(() => calculateCartTotal({ id: 1, quantity: 3 })).toThrow(
//     'Only pass arrays!',
//   );
// });
