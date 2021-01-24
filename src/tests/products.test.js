const products = require('../js/products-methods');

test('calculates the total amount of all products', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5
    }
  ];
  expect(products.calculationTotalAmount(productElements)).toBe(5000);
});

test('calculates the total price of each product', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5
    }
  ];
  products.calculationPriceProduct(productElements);
  expect(productElements[0].priceTotal).toBe(2000);
  expect(productElements[1].priceTotal).toBe(2000);
  expect(productElements[2].priceTotal).toBe(1000);
  expect(productElements).toHaveLength(3);
});

test('check the correct value in "count"', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5
    }
  ];
  products.setCountProduct(productElements[0], 5);
  products.setCountProduct(productElements[1], 5);
  products.setCountProduct(productElements[2], 5);
  expect(productElements[0].count).toEqual(5);
  expect(productElements[1].count).toEqual(5);
  expect(productElements[2].count).toEqual(5);
});

test('check for wrong value in "count"', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5
    }
  ];
  expect(products.setCountProduct(productElements[2], -1)).toBe(false);
  expect(products.setCountProduct(productElements[2], '')).toBe(false);
  expect(products.setCountProduct(productElements[2], [])).toBe(false);
  expect(products.setCountProduct(productElements[2], {})).toBe(false);
  expect(products.setCountProduct(productElements[2], '+')).toBe(false);
  expect(products.setCountProduct(productElements[2], '-')).toBe(false);
  expect(products.setCountProduct(productElements[2], '*')).toBe(false);
  expect(products.setCountProduct(productElements[2], '/')).toBe(false);
  expect(products.setCountProduct(productElements[2], 'word')).toBe(false);
});

test('check the correct value in "priceForOne"', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5
    }
  ];
  products.setPriceProduct(productElements[0], 5);
  products.setPriceProduct(productElements[1], 5);
  products.setPriceProduct(productElements[2], 5);
  expect(productElements[0].priceForOne).toEqual(5);
  expect(productElements[1].priceForOne).toEqual(5);
  expect(productElements[2].priceForOne).toEqual(5);
});

test('check for wrong value in "priceForOne"', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5
    }
  ];
  expect(products.setCountProduct(productElements[1], -1)).toBe(false);
  expect(products.setCountProduct(productElements[1], '')).toBe(false);
  expect(products.setCountProduct(productElements[1], [])).toBe(false);
  expect(products.setCountProduct(productElements[1], {})).toBe(false);
  expect(products.setCountProduct(productElements[1], '+')).toBe(false);
  expect(products.setCountProduct(productElements[1], '-')).toBe(false);
  expect(products.setCountProduct(productElements[1], '*')).toBe(false);
  expect(products.setCountProduct(productElements[1], '/')).toBe(false);
  expect(products.setCountProduct(productElements[1], 'word')).toBe(false);
});
