import { expect, test } from '@jest/globals';
import { addOrUpdateProduct } from '../cart';

const products = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
];

test('Unit: addOrUpdateProduct, Testsuit: valid inputs', () => {
  expect(addOrUpdateProduct(products, 3, 1)).toContainEqual({
    id: 3,
    quantity: 1,
  });
  expect(addOrUpdateProduct(products, 4, 2)).toContainEqual({
    id: 4,
    quantity: 2,
  });
  expect(addOrUpdateProduct(products, 2, 3)).toContainEqual({
    id: 2,
    quantity: 5,
  });
});
